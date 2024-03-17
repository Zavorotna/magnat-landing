window.addEventListener("DOMContentLoaded", function () {
  function showToast(message) {
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.textContent = message
    document.body.appendChild(toast)

    setTimeout(function () {
      toast.style.opacity = "0"
    }, 3000)
  }
  
  let jsonData = []

  function sendData(orders) {
    const phpOrdersObj = JSON.stringify(orders);
    let ordersInput = document.querySelector("#orderProductsObject");
    ordersInput.value = phpOrdersObj;
  }

  function fetchData() {
    fetch("products.json")
      .then(response => response.json())
      .then(data => {
        jsonData = data
        createCard(data)
        cart(data)
        
      })
      .catch(error => console.error("Помилка завантаження даних:", error))
  }

  // let selectedData
  function createCard(data) {
    const mainCard = document.querySelectorAll('.slider-card'),
      catalogCard = document.querySelectorAll('.card')
    Object.keys(data).forEach((key, index) => {
      const product = data[key]
      const cardContainer = mainCard[index],
        catalogCardContainer = catalogCard[index]
      if (!cardContainer || !catalogCardContainer) return

      let productNameElement = cardContainer.querySelector('.product'),
        priceElement = cardContainer.querySelector('.price-card .blue-text'),
        numberCard = cardContainer.querySelector('.number'),
        numberOf = cardContainer.querySelector('.number-of'),
        count = cardContainer.querySelector('.remainder'),
        fullPrice = cardContainer.querySelector('.price-card .full-price-card'),
        article = cardContainer.querySelector('.article-id'),
        country = cardContainer.querySelector('.country-name'),
        description = cardContainer.querySelector('.text-descript'),
        colorBlock = cardContainer.querySelector('.color-input-block'),
        sizeBlock = cardContainer.querySelector('.size-inputs'),
        materialList = cardContainer.querySelector('.material ul'),
        catalogName = catalogCardContainer.querySelector(".name-card"),
        catalogFullPrice = catalogCardContainer.querySelector(".sale-price"),
        catalogPrice = catalogCardContainer.querySelector(".price"),
        sizeBlockCatalog = catalogCardContainer.querySelector('.size-card'),
        btnCart = cardContainer.querySelector('.cart-cta'),
        btnCartCatalog = catalogCardContainer.querySelector('.cart-cta')

      // округлення знижки
      function roundUp(num) {
        if (num === 0) {
          return 0
        } else {
          return Math.ceil(num / 10) * 10
        }
      }

      function calculateDiscount(remainder) {
        if (remainder >= 10) {
          fullPrice.style.display = "none"
          catalogPrice.style.display = "none"
          return 0
        } else if (remainder <= 10 && remainder > 5) {
          fullPrice.style.display = "inline-block"
          catalogPrice.style.display = "inline-block"
          return 0.02 // 2% знижка
        } else if (remainder <= 5 && remainder > 1) {
          fullPrice.style.display = "inline-block"
          catalogPrice.style.display = "inline-block"
          return 0.04 // 4% знижка
        } else {
          fullPrice.style.display = "inline-block"
          catalogPrice.style.display = "inline-block"
          return 0.06 // 6% знижка
        }
      }

      function applyDiscount(price, discount) {
        return price * (1 - discount)
      }
      btnCart.setAttribute("data-item-key", product.id)
      btnCartCatalog.setAttribute("data-item-key", product.id)

      const salePrice = parseFloat(product.saleprice); // Конвертувати строкове значення у числовий формат
      const remainder = parseInt(product.remainder);

      // Розрахунок знижки
      const discount = calculateDiscount(remainder);
      const discountedPrice = applyDiscount(salePrice, discount);

      productNameElement.innerText = product.head
      priceElement.innerText = discountedPrice.toFixed(2)
      numberCard.innerText = index + 1 + "/"
      numberOf.innerText = mainCard.length
      count.innerText = product.remainder
      fullPrice.innerText = product.saleprice
      article.innerText = product.id
      country.innerText = product.country
      description.innerText = product.descript

      catalogName.innerText = product.head
      catalogFullPrice.innerText = discountedPrice.toFixed(2)
      catalogPrice.innerText = product.saleprice
      // Кольори
      let colorIndex = 0
      for (const color in product.color) {
        const input = document.createElement('input'),
          label = document.createElement('label'),
          p = document.createElement('p')

        input.setAttribute('type', 'radio');
        input.setAttribute('name', `color-${index}`);
        input.setAttribute('id', `color-${index}-${colorIndex}`);
        input.classList.add('color-input');

        label.setAttribute('for', `color-${index}-${colorIndex}`);
        label.style.backgroundColor = color;
        label.style.border = "1px solid"
        label.style.borderColor = color === 'white' ? '#ccc' : 'transparent';

        p.appendChild(input);
        p.appendChild(label);

        colorBlock.appendChild(p);

        colorIndex++;
      }

      // Розміри
      const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"]

      sizes.forEach((size, sizeIndex) => {
        const input = document.createElement('input'),
          label = document.createElement('label'),
          p = document.createElement('p')

        const inputId = `size-${index}-${sizeIndex}`

        input.setAttribute('type', 'radio')
        input.setAttribute('name', `size-${index}`)
        input.setAttribute('id', inputId)
        input.setAttribute('value', size)
        input.classList.add('size-input')

        label.setAttribute('for', inputId)
        label.innerText = size

        if (!product.size.includes(size)) {
          input.disabled = true
        }

        const pClone = p.cloneNode(false)
        pClone.appendChild(input)
        pClone.appendChild(label)

        sizeBlock.appendChild(pClone)

        const inputCatalog = document.createElement('input'),
          labelCatalog = document.createElement('label'),
          pCatalog = document.createElement('p')

        const inputCatalogId = `size-${index}-${sizeIndex}-catalog`

        inputCatalog.setAttribute('type', 'radio')
        inputCatalog.setAttribute('name', `size-${index}-catalog`)
        inputCatalog.setAttribute('id', inputCatalogId)
        inputCatalog.setAttribute('value', size)
        inputCatalog.classList.add('size-input')

        labelCatalog.setAttribute('for', inputCatalogId)
        labelCatalog.innerText = size

        if (!product.size.includes(size)) {
          inputCatalog.disabled = true
        }

        const pCatalogClone = pCatalog.cloneNode(false)
        pCatalogClone.appendChild(inputCatalog)
        pCatalogClone.appendChild(labelCatalog)

        sizeBlockCatalog.appendChild(pCatalogClone)
        // скидання радіокнопок чекед з інших карток
        const radioButtons = document.querySelectorAll("input[type='radio']")
        radioButtons.forEach(radioButton => {
          radioButton.addEventListener('change', function () {
            const currentName = this.name
            radioButtons.forEach(radio => {
              if (radio.name !== currentName) {
                radio.checked = false
              }
            })

          })
        })
      })

      //матеріали
      for (const key in product.material) {
        const li = document.createElement('li')
        li.innerText = product.material[key]
        materialList.appendChild(li)
      }

      const countProduct = parseFloat(product.remainder),
        countFlag = catalogCardContainer.querySelector(".flag")
      countFlag.classList.remove("green-flag", "blue-flag", "purple-flag", "darkgreem-flag")
      if (countProduct <= 1) {
        countFlag.innerText = "остання пара"
        countFlag.classList.add("green-flag")
      } else if (countProduct > 1 && countProduct <= 5) {
        countFlag.innerText = `Залишилось: ${countProduct} пари`
        countFlag.classList.add("blue-flag")
      } else if (countProduct > 5 && countProduct < 10) {
        countFlag.innerText = `Залишилось: ${countProduct} пар`
        countFlag.classList.add("purple-flag")
      } else if (countProduct >= 10) {
        countFlag.innerText = `Залишилось: ${countProduct} пар`
        countFlag.classList.add("darkgreen-flag")
      }
    })
  }

  fetchData()
  // кошик
  function cart(product) {
    const addToCartButtons = document.querySelectorAll(".cart-cta"),
      order = document.querySelector(".cart-order"),
      modelName = document.querySelector(".model-order-name"),
      cancel = document.querySelector(".cancel"),
      fullPrice = document.querySelector(".sum"),
      salePrice = document.querySelector(".sale-sum "),
      priceToPay = document.querySelector(".pay-price"),
      sizeOrder = document.querySelector(".size-order"),
      cardProductPrice = document.querySelector(".order-price-sale"),
      cardSalePrice = document.querySelector(".sale-price-order"),
      productsArray = Object.values(product)

    function calculateDiscount(remainder) {
      if (remainder >= 10) {
        return 0;
      } else if (remainder <= 9 && remainder > 5) {
        return 0.02; // 2% знижка
      } else if (remainder <= 5 && remainder > 1) {
        return 0.04; // 4% знижка
      } else {
        return 0.06; // 6% знижка
      }
    }
    const btnAddCart = document.querySelector(".addtocart")
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
        const productId = button.getAttribute("data-item-key"),
        selectedProduct = productsArray.find(item => item.id === productId)
        btnAddCart.style.display = "none"
        if (selectedProduct) {
          const selectedSizeRadio = document.querySelector('input[type="radio"]:checked');
          if (!selectedSizeRadio) {
            showToast("Будь ласка, оберіть розмір");
            return; // Повертаємо з функції, якщо розмір не обрано
          }
          modelName.innerText = selectedProduct.head
          cardProductPrice.innerText = selectedProduct.saleprice
          
          // Розрахунок знижки для товару
          const discount = calculateDiscount(parseInt(selectedProduct.remainder));
          let discountedPrice = parseFloat(selectedProduct.saleprice);

          // Застосування знижки, якщо вона є
          if (discount > 0) {
            discountedPrice = discountedPrice * (1 - discount);
          }

          cardSalePrice.innerText = discountedPrice.toFixed(2)

          fullPrice.innerText = selectedProduct.saleprice
          salePrice.innerText = parseFloat(selectedProduct.saleprice) - parseFloat(cardSalePrice.innerText);
          let totalPrice = parseFloat(selectedProduct.saleprice)

          // перевірка чи є знижка
          if (parseFloat(cardSalePrice.innerText) > 0) {
            totalPrice = parseFloat(cardSalePrice.innerText)
          }
          //сума до оплати
          priceToPay.innerText = totalPrice.toFixed(2)
          const sizeSelect = document.createElement('select')
          sizeSelect.setAttribute("id", "sizeSelect")
          sizeSelect.setAttribute("name", "sizeSelect")
          
          selectedProduct.size.forEach(size => {
            const option = document.createElement('option')
            option.setAttribute('value', size);
            option.textContent = `${size}`
            sizeSelect.appendChild(option)
          })

          const selectedSize = document.querySelector('input[type="radio"]:checked').value,
          option = sizeSelect.querySelector(`option[value="${selectedSize}"]`)
          
          sizeOrder.innerHTML = ''
          sizeOrder.appendChild(sizeSelect)
          
          if (option) {
            option.selected = true
          }
          const selectedKeys = ['head', 'saleprice', 'color']; // Додайте 'color' до ключів, які ви хочете включити
          const selectedData = selectedKeys.reduce((obj, key) => {
            if (key === 'color') {
              obj[key] = JSON.stringify(selectedProduct[key]); // Перетворюємо об'єкт color в рядок JSON
            } else {
              obj[key] = selectedProduct[key];
            }
            return obj;
          }, {});
          
          selectedData.saleprice = parseFloat(cardSalePrice.innerText.trim());
          const selectedSizeValue = sizeOrder.querySelector('select').value
          selectedData.size = selectedSizeValue
          console.log(selectedData)
          // Відправити об'єкт з вибраними ключами на сервер
          sendData(selectedData)
          order.style.display = "flex"
          
          // скидання радіо кнопок на клік упити
          const radioInputs = document.querySelectorAll('input[type="radio"]');

          radioInputs.forEach(input => {
              input.checked = false;
          });
        }
      })
    })
    cancel.addEventListener("click", function (e) {
      e.preventDefault()
      btnAddCart.style.display = "block"
      order.style.display = "none"
      fullPrice.innerText = "0"
      salePrice.innerText = "0"
      priceToPay.innerText = "0"

    })
  }


  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  //slider
  class InfinitySlider {
    constructor(selector, settings = {}) {
      this.settings = {
        ...InfinitySlider.defaultSettings,
        ...settings
      };
      this.slider = document.querySelector(selector);
      this.positionCards = 0;
      this.sliderContainer = this.slider.querySelector(".slider-container");
      this.sliderCards = this.sliderContainer.children;
      this.realCardsLength = this.sliderCards.length;
      this.heightCards = 0;
      this.widthSliderContainer;
      this.cardsCount;
      this.widthCards;
      this.distanceCards;
      this.cloneCard;
      this.prevBtnSlider;
      this.nextBtnSlider;
      this.sliderInterval;
      this.maxHeight;
      this.sliderDots;
      this.touchPoint;
      InfinitySlider.defaultSettings.baseCardWidth = this.widthSliderContainer;
    };

    static defaultSettings = {
      // isSlidesToScrollAll: false,
      gap: 0,
      isArrows: false,
      isDots: false,
      distanceToDots: 0,
      isAutoplay: false,
      autoplaySpeed: 3000,
      baseCardWidth: null,
      transitionCard: "all 1s ease-in-out",
      isEffectFadeOut: false
    };

    init() {
      this.widthSliderContainer = this.sliderContainer.getBoundingClientRect().width;

      if (this.settings.baseCardWidth == null) this.settings.baseCardWidth = this.widthSliderContainer

      this.slider.querySelectorAll(".clone").forEach(clone => {
        clone.remove();
      });

      if (localStorage[this.slider.id + "Interval"]) {
        clearInterval(localStorage[this.slider.id + "Interval"]);
      }

      this.slider.style.position = "relative";
      this.sliderContainer.style.overflow = "hidden";
      this.sliderContainer.style.position = "relative";
      this.sliderContainer.style.width = "100%";

      this.cardsCount = Math.floor(this.widthSliderContainer / (parseInt(this.settings.baseCardWidth) + this.settings.gap));
      if (this.cardsCount == 0) this.cardsCount = 1;
      this.distanceCards = this.settings.gap;
      this.widthCards = (this.widthSliderContainer - ((this.cardsCount - 1) * this.distanceCards)) / this.cardsCount;
      this.positionCards = 0 - (this.distanceCards + this.widthCards);

      if (this.settings.isArrows) this.creationArrows();
      this.prevBtnSlider = this.slider.querySelector('.left.slider_navigation');
      this.nextBtnSlider = this.slider.querySelector('.right.slider_navigation');
      if (this.settings.isArrows && this.sliderCards.length <= this.cardsCount) {
        this.prevBtnSlider.style.display = "none";
        this.nextBtnSlider.style.display = "none";
      } else if (this.settings.isArrows) {
        this.prevBtnSlider.style.display = "block";
        this.nextBtnSlider.style.display = "block";
      }
      if (this.settings.isDots && this.realCardsLength > 1) {
        this.creationDots();
        this.sliderDots = document.querySelectorAll('.slider-dot');
        for (let i = 0; i < this.sliderCards.length; i++) {
          if (this.sliderCards[i].classList.contains("activeFade")) {
            this.sliderDots[i].classList.remove("activeFade");
            this.sliderCards[i].classList.remove("activeFade");
          }
        }
        this.sliderDots[0].classList.add("activeFade");
        this.sliderCards[0].classList.add("activeFade");
      }

      if (!this.settings.isEffectFadeOut) {
        this.creationClons();
        this.shuffleCard();
      }

      this.sliderCards = this.sliderContainer.children;
      this.heightCards = 0;
      for (let i = 0; i < this.sliderCards.length; i++) {
        this.sliderCards[i].style.width = this.widthCards + "px";
        this.sliderCards[i].style.position = "absolute";
        this.maxHeight = this.sliderCards[i].getBoundingClientRect().height;
        if (this.heightCards < this.maxHeight) {
          this.heightCards = this.maxHeight;
        }
        this.sliderCards[i].style.transition = 'none';
        setTimeout(() => {
          this.sliderCards[i].style.transition = this.settings.transitionCard;
        }, 1);
      }

      this.settings.isDots ? this.sliderContainer.style.height = this.heightCards + this.settings.distanceToDots + 'px' : this.sliderContainer.style.height = this.heightCards + 'px';

      this.sliderDots = document.querySelectorAll('.slider-dot');
      this.sliderDots.forEach(element => {
        element.onclick = () => {
          clearInterval(localStorage[this.slider.id + "Interval"]);
          for (let index = 0; index < this.realCardsLength; index++) {
            this.sliderDots[index].classList.remove("activeFade");
            this.sliderCards[index].classList.remove("activeFade");
          }
          this.sliderCards[element.dataset.order].classList.add("activeFade");
          element.classList.add("activeFade");
        }
      });
      if (this.settings.isAutoplay && this.realCardsLength > this.cardsCount) {
        this.startAutoPlay();
      }
      this.slider.addEventListener('touchend', () => {
        if (this.settings.isAutoplay && this.realCardsLength > this.cardsCount) {
          this.startAutoPlay();
        }
      });

      this.touchSlider = this.touchSlider.bind(this);

      this.slider.addEventListener('touchstart', (e) => {
        this.touchPoint = e.touches[0].pageX;
        this.slider.addEventListener('touchmove', this.touchSlider);
        clearInterval(localStorage[this.slider.id + "Interval"]);
      }, {
        passive: true
      });

      this.slider.onmouseenter = () => {
        clearInterval(localStorage[this.slider.id + "Interval"]);
      };

      this.slider.onmouseleave = () => {
        if (this.settings.isAutoplay && this.realCardsLength > this.cardsCount) {
          this.startAutoPlay();
        }
      };
    }

    creationClons() {
      let counter = 1;
      do {
        this.cloneCard = this.sliderCards[this.sliderCards.length - counter].cloneNode(true);
        this.cloneCard.classList.add("clone");
        this.cloneCard.style.transition = 'none';
        this.sliderContainer.insertAdjacentElement("afterbegin", this.cloneCard);
        this.realCardsLength = this.sliderCards.length - this.slider.querySelectorAll('.clone').length
        counter++;
      } while (counter <= this.realCardsLength && this.settings.isSlidesToScrollAll);

      if (this.settings.isSlidesToScrollAll) {
        counter = 0;
        while (counter < this.realCardsLength) {
          this.cloneCard = this.sliderCards[counter].cloneNode(true);
          this.cloneCard.classList.add("clone");
          this.cloneCard.style.transition = 'none';
          this.sliderContainer.insertAdjacentElement("beforeend", this.cloneCard);
          counter++;
        }
      }
    }


    creationArrows() {
      const areArrowsExist = this.slider.querySelectorAll('.slider_navigation').length;
      if (areArrowsExist < 1) {
        this.prevBtnSlider = document.createElement("span");
        this.nextBtnSlider = document.createElement("span");
        this.prevBtnSlider.className = "left slider_navigation";
        this.nextBtnSlider.className = "right slider_navigation";
        this.slider.insertAdjacentElement("afterbegin", this.prevBtnSlider);
        this.slider.insertAdjacentElement("beforeend", this.nextBtnSlider);

        let isClickUnabled = true;
        const clickUnabled = () => {
          isClickUnabled = false;
          setTimeout(() => {
            isClickUnabled = true;
          }, (parseFloat(this.sliderCards[0].style.transitionDuration) * 1000));
        };

        this.prevBtnSlider.onclick = () => {
          if (isClickUnabled) {
            this.changeSlide("left");
            clickUnabled();
          }
        };
        this.nextBtnSlider.onclick = () => {
          if (isClickUnabled) {
            this.changeSlide("right");
            clickUnabled();
          }
        };
      }
    }

    creationDots() {
      const dotsContainer = this.slider.querySelector('.dots-container');
      if (!dotsContainer) {
        let dotContainer = document.createElement("div");
        dotContainer.style.position = "absolute";
        dotContainer.className = "dots-container";
        dotContainer.style.bottom = "0";
        this.slider.insertAdjacentElement("beforeend", dotContainer);
        for (let index = 0; index < this.realCardsLength; index++) {
          const slideDot = document.createElement("span");
          slideDot.className = "slider-dot";
          slideDot.dataset.order = index;
          dotContainer.insertAdjacentElement("beforeend", slideDot);
        }
      }
    }

    shuffleCard() {
      this.sliderCards = this.sliderContainer.children;
      this.positionCards = 0 - (this.distanceCards + this.widthCards);
      if (this.settings.isSlidesToScrollAll) {
        this.positionCards = 0 - (this.distanceCards + this.widthCards) * this.realCardsLength;
      }
      for (let i = 0; i < this.sliderCards.length; i++) {
        this.sliderCards[i].style.left = this.positionCards + 'px';
        this.positionCards += (this.distanceCards + this.widthCards);
      }
    }

    changeSlide(direction) {
      this.widthSliderContainer = this.sliderContainer.getBoundingClientRect().width;
      this.cardsCount = Math.floor(this.widthSliderContainer / (parseInt(this.settings.baseCardWidth) + this.settings.gap));
      if (this.cardsCount == 0) this.cardsCount = 1;
      this.widthCards = (this.widthSliderContainer - ((this.cardsCount - 1) * this.distanceCards)) / this.cardsCount;
      this.sliderCards = this.sliderContainer.children;
      let slideIndex = 0;
      for (let i = 0; i < this.sliderCards.length; i++) {
        if (this.sliderCards[i].classList.contains("activeFade")) {
          slideIndex = i;
        }
      }
      if (direction == "left") {
        if (this.settings.isSlidesToScrollAll) {
          for (let index = 0; index < this.cardsCount; index++) {
            this.sliderContainer.insertAdjacentElement("afterbegin", this.sliderCards[this.sliderCards.length - 1]);
          }
        } else if (this.settings.isEffectFadeOut) {
          setTimeout(() => this.sliderCards[slideIndex].classList.add("activeFade"), 800);
          setTimeout(() => this.sliderDots[slideIndex].classList.add("activeFade"), 800);
          this.sliderCards[slideIndex].classList.remove("activeFade");
          this.sliderDots[slideIndex].classList.remove("activeFade");
          this.sliderCards[slideIndex - 1] ? slideIndex-- : slideIndex = this.sliderCards.length - 1;
        } else {
          this.sliderCards[this.sliderCards.length - 1].remove();
          let cloneLast = this.sliderCards[this.sliderCards.length - 1].cloneNode(true);
          cloneLast.classList.add("clone");
          this.sliderContainer.insertAdjacentElement("afterbegin", cloneLast);
          this.sliderCards[1].classList.remove("clone");
        }
      } else if (direction == "right") {
        if (this.settings.isSlidesToScrollAll) {
          for (let index = 0; index < this.cardsCount; index++) {
            this.sliderContainer.insertAdjacentElement("beforeend", this.sliderCards[0]);
          }
        } else if (this.settings.isEffectFadeOut) {
          setTimeout(() => this.sliderCards[slideIndex].classList.add("activeFade"), 800);
          setTimeout(() => this.sliderDots[slideIndex].classList.add("activeFade"), 800);
          this.sliderCards[slideIndex].classList.remove("activeFade");
          this.sliderDots[slideIndex].classList.remove("activeFade");
          this.sliderCards[slideIndex + 1] ? slideIndex++ : slideIndex = 0
        } else {
          this.sliderCards[0].remove();
          let cloneFirst = this.sliderCards[0].cloneNode(true);
          cloneFirst.classList.add("clone");
          this.sliderContainer.insertAdjacentElement("beforeend", cloneFirst);
          this.sliderCards[this.sliderCards.length - 2].classList.remove("clone");
        }
      }
      if (!this.settings.isEffectFadeOut) this.shuffleCard();
    }

    startAutoPlay() {
      clearInterval(localStorage[this.slider.id + "Interval"]);
      if (this.settings.isEffectFadeOut) {
        let slideIndex = 0;
        for (let i = 0; i < this.sliderCards.length; i++) {
          if (this.sliderCards[i].classList.contains("activeFade")) {
            slideIndex = i;
          }
        }
        const setActive = (index) => {
          setTimeout(() => this.sliderCards[index].classList.add("activeFade"), 1000);
          setTimeout(() => this.sliderDots[index].classList.add("activeFade"), 1000);
        }
        this.sliderInterval = setInterval(() => {
          this.sliderCards[slideIndex].classList.remove("activeFade");
          this.sliderDots[slideIndex].classList.remove("activeFade");
          this.sliderCards[slideIndex + 1] ? slideIndex++ : slideIndex = 0
          setActive(slideIndex);
        }, this.settings.autoplaySpeed);
      } else {
        this.sliderInterval = setInterval(() => {
          this.changeSlide("right");
        }, this.settings.autoplaySpeed);
      }
      localStorage[this.slider.id + "Interval"] = this.sliderInterval;
    }

    touchSlider(e) {
      if ((this.touchPoint + 20) < e.touches[0].pageX) {
        this.changeSlide('left');
        this.slider.removeEventListener('touchmove', this.touchSlider);
      } else if ((this.touchPoint - 20) > e.touches[0].pageX) {
        this.changeSlide('right');
        this.slider.removeEventListener('touchmove', this.touchSlider);
      }
    }
  }

  const comment = new InfinitySlider(".slider-comment", {
    isArrows: true,
    isSlidesToScrollAll: false,
    baseCardWidth: "250px",
    gap: 50,
    isAutoplay: true,
    autoplaySpeed: 5000,
    transitionCard: "all 1.5s ease-in-out",
  });

  const products = document.querySelectorAll(".products")
  let sliders = {}
  console.log(products);
  products.forEach((slider, i) => {
    sliders["img-key" + (i + 1)] = new InfinitySlider("#product" + (i + 1), {
      isArrows: false,
      isSlidesToScrollAll: false,
      baseCardWidth: "250px",
      gap: 50,
      isAutoplay: true,
      autoplaySpeed: 5000,
      transitionCard: "all 1.5s ease-in-out",
    })
  })
  console.log(sliders);

  // const pictureSlider2 = new InfinitySlider(".product2", {
  //   isArrows: false,
  //   isSlidesToScrollAll: false,
  //   baseCardWidth: "250px",
  //   gap: 50,
  //   isAutoplay: true,
  //   autoplaySpeed: 5000,
  //   transitionCard: "all 1.5s ease-in-out",
  // })

  // const mainSlider = new InfinitySlider(".main-slider", {
  //   isArrows: true,
  //   isSlidesToScrollAll: false,
  //   baseCardWidth: "1000px",
  //   gap: 50,
  //   isAutoplay: false,
  //   autoplaySpeed: 5000,
  // })

  function initSlider() {
    comment.init()
    Object.keys(sliders).forEach(sliderKey => {
      sliders[sliderKey].init()
      // sliderKey.init()
    })
  }
  window.onresize = function () {
    comment.init()
    Object.keys(sliders).forEach(sliderKey => {
      sliders[sliderKey].init()
      // sliderKey.init()
    })
  }
  setTimeout(function() {
    initSlider()
    Object.keys(sliders).forEach(sliderKey => {
      sliders[sliderKey].init()
      // sliderKey.init()
    })
  }, 1000);


  const phoneInput = document.querySelector('#phone')

  phoneInput.addEventListener('input', function () {
    const phoneNumber = phoneInput.value,
      phoneRegex = /\b\+?(\d{2})?([(]?\d{3}[)]?)\s?[-]?\s?(?:\d{3})\s?[-]?(?:\s?\d{2})\s?[-]?(?:\s?\d{2})\b/g

    if (phoneRegex.test(phoneNumber)) {
      phoneInput.style.borderColor = 'green'
    } else {
      phoneInput.style.borderColor = 'red'
      showToast("Введіть вірний номер телефону")
    }
  })

  // перемикання карток товару
  const cards = document.querySelectorAll(".slider-card"),
    nextButtons = document.querySelectorAll(".next"),
    prevButtons = document.querySelectorAll(".prev")

  let currentCardIndex = 0

  function showNextCard(index) {
    cards[currentCardIndex].classList.remove("active")
    currentCardIndex = (currentCardIndex + 1) % cards.length
    cards[currentCardIndex].classList.add("active")
  }

  function showPreviousCard() {
    cards[currentCardIndex].classList.remove("active")
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length
    cards[currentCardIndex].classList.add("active")
  }

  nextButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault()
      showNextCard(index)
      initSlider()
      Object.keys(sliders).forEach(sliderKey => {
        sliders[sliderKey].init()
        // sliderKey.init()
      })
      
    })
  })

  prevButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault()
      showPreviousCard(index)
      initSlider()
      Object.keys(sliders).forEach(sliderKey => {
        sliders[sliderKey].init()
        // sliderKey.init()
      })
    })
  })


  cards[currentCardIndex].classList.add("active")

})