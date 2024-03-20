window.addEventListener("DOMContentLoaded", function () {
  // хедер фіксований
  let lastScrollTop = 0;
  const headerNavigation = document.querySelector(".header"),
    logo = document.querySelector(".logo svg")

  function handleScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop
    if (currentScroll > 100) {
      if (currentScroll > lastScrollTop) {
        headerNavigation.style.top = "-100%"
      } else {
        headerNavigation.style.top = "0"
        logo.style.width = "80rem"
        logo.style.height = "80rem"
      }
    } else {
      headerNavigation.style.top = "0"
      logo.style.width = ""
      logo.style.height = ""
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
  }

  function handleResize() {
    if (window.innerWidth <= 768) {
      headerNavigation.style.padding = "25rem 0"
    } else {
      headerNavigation.style.padding = "10rem 0"
    }
  }

  window.addEventListener("scroll", handleScroll, false)
  window.addEventListener("resize", handleResize, false)

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
        updateLocalStorage(jsonData)
        const updatedData = getUpdatedDataFromLocalStorage()
        console.log(updatedData);
        createCard(updatedData)
        cart(updatedData)
        updateLocalStorage(updatedData)
      })
      .catch(error => console.error("Помилка завантаження даних:", error))
  }

  let lastUpdate;

  function updateLocalStorage(jsonData) {
    let maxQuantity = JSON.parse(localStorage.getItem('maxQuantity')) || jsonData;
    lastUpdate = parseInt(localStorage.getItem('lastUpdate'));
    const currentTime = Date.now();

    if (!lastUpdate) {
      // Якщо lastUpdate є пустим або не існує, встановлюємо поточний час
      localStorage.setItem('lastUpdate', currentTime);
      lastUpdate = currentTime; // Оновлюємо lastUpdate для подальшого використання
    }

    // Час, який пройшов з останнього оновлення
    let timePassed = currentTime - lastUpdate;
    console.log(timePassed);
    let updated = false; // Прапорець для визначення, чи відбулося фактичне оновлення залишків

    for (const key in maxQuantity) {
      if (maxQuantity.hasOwnProperty(key)) {
        const fr = parseInt(maxQuantity[key].fr);
        const timeToNextUpdate = fr * 3600000;

        // Перевірка, чи пройшов час для оновлення залишків
        if (timePassed >= timeToNextUpdate) {
          const decreases = Math.floor(timePassed / timeToNextUpdate);

          let remainder = parseInt(maxQuantity[key].remainder);
          
          // Вираховуємо залишок після зменшень
          remainder -= decreases;
          
          const min = parseInt(jsonData[key].min);
          const max = parseInt(jsonData[key].remainder);
          // Перевірка на мінімальне та максимальне значення
          if (remainder <= min) {
            remainder = max;
          } else if (remainder > max) {
            remainder = min;
          }

          maxQuantity[key].remainder = remainder;
          jsonData[key].remainder = remainder;

          // Встановлюємо флаг оновлення
          updated = true;
        }
      }
    }

    if (updated) {
      // Якщо відбулося фактичне оновлення залишків, оновлюємо lastUpdate до поточного часу
      localStorage.setItem('lastUpdate', currentTime);
    }

    // Оновлюємо локальне сховище з новими значеннями
    localStorage.setItem('maxQuantity', JSON.stringify(maxQuantity));

    return jsonData;
  }



  // if (timePassed >= timeToNextUpdate) {
  //   const decreases = Math.floor(timePassed / timeToNextUpdate);

  //   let remainder = parseInt(maxQuantity[key].remainder);
  //   const min = parseInt(jsonData[key].min);
  //   const max = parseInt(jsonData[key].remainder);

  //   // Вираховуємо залишок після зменшень
  //   remainder -= decreases;

  //   // Перевірка на мінімальне та максимальне значення
  //   if (remainder < min) {
  //     remainder = max;
  //   } else if (remainder > max) {
  //     remainder = min;
  //   }

  //   maxQuantity[key].remainder = remainder;
  //   jsonData[key].remainder = remainder;
  // }
  // }
  //   }

  //   // Оновлюємо локальне сховище з новими значеннями
  //   localStorage.setItem('maxQuantity', JSON.stringify(maxQuantity));
  //   return jsonData;
  // }

  // function updateLocalStorage(jsonData) {
  //   const maxQuantity = JSON.parse(localStorage.getItem('maxQuantity')) || jsonData,
  //     currentTime = Date.now(),
  //     lastUpdate = parseInt(localStorage.getItem('lastUpdate') || 0)
  //     localStorage.setItem('lastUpdate', currentTime)
  //   //час між останнім оновленням і поточним часом
  //   let timePassed = currentTime - lastUpdate
  //   if(lastUpdate == 0) {
  //     timePassed = 1
  //   }
  //   if (!maxQuantity) {
  //     maxQuantity = jsonData
  //   }
  //   for (const key in maxQuantity) {
  //     if (maxQuantity.hasOwnProperty(key)) {
  //       const fr = parseInt(maxQuantity[key].fr)
  //       // час, який має пройти до наступного оновлення на основі періодичності fr
  //       // const timeToNextUpdate = fr * 6000
  //       const timeToNextUpdate = fr * 60000
  //       // console.log(timeToNextUpdate);
  //       // console.log("значення фр" + "" + fr);
  //       console.log(timePassed);
  //       if (timePassed >= timeToNextUpdate) {
  //         //числові значення для обчислень
  //         const decreases = Math.floor(timePassed / timeToNextUpdate)
  //         console.log(decreases);
  //         // const remainder = parseInt(maxQuantity[key].remainder),
  //         // кількість залишків, що залишаються після зменшень
  //         let remainder = decreases,
  //           min = parseInt(jsonData[key].min), 
  //           max = parseInt(jsonData[key].remainder)

  //         do{
  //           if(remainder > max) {
  //             remainder = parseInt(jsonData[key].remainder) - remainder
  //           } else if(remainder < min) {
  //             remainder = parseInt(jsonData[key].min) + remainder
  //           }
  //         } while(remainder < min || remainder > max) 
  //         console.log(`Ключ: ${key}, Ремайндер: ${remainder}, Мінімум: ${min}`);
  //         // Зміна ремайндер на 1
  //         if (timePassed == 1) {
  //           maxQuantity[key].remainder = parseInt(jsonData[key].remainder);
  //         } else {
  //           maxQuantity[key].remainder = remainder
  //           // Оновлення ремайндер на початкове значення, яке було на початку
  //         }

  //         jsonData[key].remainder = maxQuantity[key].remainder
  //       }
  //     }
  //   }
  //   // Оновлюємо локальне сховище з новими значеннями
  //   localStorage.setItem('maxQuantity', JSON.stringify(maxQuantity))
  //   return jsonData
  // }

  // витягування зміненого обєкта з локального сховища
  function getUpdatedDataFromLocalStorage() {
    const jsonDataFromLocalStorage = localStorage.getItem('maxQuantity')
    if (jsonDataFromLocalStorage) {
      return JSON.parse(jsonDataFromLocalStorage)
    }
  }

  function createCard(updatedData) {
    const mainCard = document.querySelectorAll('.slider-card'),
      catalogCard = document.querySelectorAll('.card')
    Object.keys(updatedData).forEach((key, index) => {
      const product = updatedData[key]
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
        imgCard = cardContainer.querySelector(".image"),
        catalogName = catalogCardContainer.querySelector(".name-card"),
        catalogFullPrice = catalogCardContainer.querySelector(".sale-price"),
        catalogPrice = catalogCardContainer.querySelector(".price"),
        sizeBlockCatalog = catalogCardContainer.querySelector('.size-card'),
        btnCart = cardContainer.querySelector('.cart-cta'),
        btnCartCatalog = catalogCardContainer.querySelector('.cart-cta'),
        imgCatalog = catalogCardContainer.querySelector(".hover-img img")

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

      const salePrice = parseFloat(product.saleprice),
        remainder = parseInt(product.remainder)

      // Розрахунок знижки
      const discount = calculateDiscount(remainder),
        discountedPrice = applyDiscount(salePrice, discount)

      productNameElement.innerText = product.head
      priceElement.innerText = discountedPrice.toFixed(2)
      numberCard.innerText = index + 1 + "/"
      numberOf.innerText = mainCard.length
      count.innerText = product.remainder
      fullPrice.innerText = product.saleprice
      article.innerText = product.id
      country.innerText = product.country
      description.innerText = product.descript
      imgCatalog.setAttribute("data-id-img", product.id)
      imgCard.setAttribute("data-id-img", product.id)
      catalogName.innerText = product.head
      catalogFullPrice.innerText = discountedPrice.toFixed(2)
      catalogPrice.innerText = product.saleprice
      // Кольори
      let colorIndex = 0
      for (const color in product.color) {
        const input = document.createElement('input'),
          label = document.createElement('label'),
          p = document.createElement('p')

        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', `color-${index}`);
        input.setAttribute('id', `color-${index}-${colorIndex}`);
        input.setAttribute('selected', true);
        input.classList.add('color-input');

        label.setAttribute('for', `color-${index}-${colorIndex}`);
        label.style.backgroundColor = color;
        label.style.border = "1px solid"
        label.style.borderColor = color === 'white' ? '#ccc' : 'transparent';

        p.appendChild(input)
        p.appendChild(label)

        colorBlock.appendChild(p);

        colorIndex++;
      }

      // Розміри
      const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"]

      sizes.forEach((size, sizeIndex) => {
        const input = document.createElement('input'),
          label = document.createElement('label'),
          p = document.createElement('p'),
          inputId = `size-${index}-${sizeIndex}`

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
      sumBlockCart = document.querySelector(".sum-order"),
      orderSum = document.querySelector(".order-sum"),
      cartImg = document.querySelector(".img-order"),
      productsArray = Object.values(product)

    function calculateDiscount(remainder) {
      if (remainder >= 10) {
        return 0
      } else if (remainder <= 9 && remainder > 5) {
        return 0.02 // 2% знижка
      } else if (remainder <= 5 && remainder > 1) {
        return 0.04 // 4% знижка
      } else {
        return 0.06 // 6% знижка
      }
    }

    const btnAddCart = document.querySelector(".addtocart")
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
        cartImg.innerHTML = ""
        const productId = button.getAttribute("data-item-key"),
          selectedProduct = productsArray.find(item => item.id === productId)
        console.log(selectedProduct)
        btnAddCart.style.display = "none"
        sumBlockCart.style.display = "block"
        orderSum.style.display = "flex"
        if (selectedProduct) {
          const selectedSizeRadio = document.querySelector('input[type="radio"]:checked')
          if (!selectedSizeRadio) {
            showToast("Виберіть розмір, будь ласка")
          }
          modelName.innerText = selectedProduct.head
          cardProductPrice.innerText = selectedProduct.saleprice

          const discount = calculateDiscount(parseInt(selectedProduct.remainder))
          let discountedPrice = parseFloat(selectedProduct.saleprice)

          if (discount > 0) {
            cardProductPrice.style.display = "block"
            discountedPrice = discountedPrice * (1 - discount)
          } else {
            cardProductPrice.style.display = "none"
          }

          cardSalePrice.innerText = discountedPrice.toFixed(2)

          fullPrice.innerText = selectedProduct.saleprice
          salePrice.innerText = parseFloat(selectedProduct.saleprice) - parseFloat(cardSalePrice.innerText)
          let totalPrice = parseFloat(selectedProduct.saleprice)

          if (parseFloat(cardSalePrice.innerText) > 0) {
            totalPrice = parseFloat(cardSalePrice.innerText)
          }

          priceToPay.innerText = totalPrice.toFixed(2)

          const sizeSelect = document.createElement('select')
          sizeSelect.setAttribute("id", "sizeSelect")
          sizeSelect.setAttribute("name", "sizeSelect")

          const defaultOption = document.createElement('option')
          defaultOption.setAttribute('value', 'Розмір не вибрано')
          defaultOption.setAttribute('selected', 'selected')
          defaultOption.textContent = 'Розмір не вибрано'
          sizeSelect.appendChild(defaultOption)

          selectedProduct.size.forEach(size => {
            const option = document.createElement('option')
            option.setAttribute('value', size)
            option.textContent = `${size}`
            sizeSelect.appendChild(option)
          })

          sizeOrder.innerHTML = ''
          sizeOrder.appendChild(sizeSelect)

          const selectedSizeValue = selectedSizeRadio ? selectedSizeRadio.value : 'Розмір не вибрано'
          const option = sizeSelect.querySelector(`option[value="${selectedSizeValue}"]`)

          if (option) {
            option.selected = true
          }

          const selectedKeys = ['head', 'saleprice', 'color']
          const selectedData = selectedKeys.reduce((obj, key) => {
            if (key === 'color') {
              obj[key] = JSON.stringify(selectedProduct[key])
            } else {
              obj[key] = selectedProduct[key]
            }
            return obj
          }, {})

          selectedData.saleprice = parseFloat(cardSalePrice.innerText.trim())
          selectedData.size = selectedSizeValue

          sendData(selectedData)

          order.style.display = "flex"

          const firstImageSrc = document.querySelector(`.image[data-id-img="${selectedProduct.id}"] img`).getAttribute('src')

          let imgCartBlock = document.createElement("img")
          imgCartBlock.setAttribute('src', firstImageSrc)
          cartImg.appendChild(imgCartBlock)

          const radioInputs = document.querySelectorAll('input[type="radio"]')
          radioInputs.forEach(input => {
            input.checked = false
          })

          sizeSelect.addEventListener("change", function () {
            const selectedSizeValue = this.value
            selectedData.size = selectedSizeValue
            console.log(selectedData)
            sendData(selectedData)
          })

          cancel.addEventListener("click", function (e) {
            e.preventDefault()
            if (imgCartBlock && cartImg.contains(imgCartBlock)) {
              cartImg.removeChild(imgCartBlock)
            }
            btnAddCart.style.display = "block"
            sumBlockCart.style.display = "none"
            orderSum.style.display = "none"
            order.style.display = "none"
            fullPrice.innerText = "0"
            salePrice.innerText = "0"
            priceToPay.innerText = "0"
          })
        }
      })
    })
  }

  fetchData()
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
    const mediaQuery1440 = window.matchMedia('(min-width: 1440px)');
    const mediaQuery1920 = window.matchMedia('(min-width: 1920px)');

    let baseCardWidthImg = "250px"

    if (mediaQuery1440.matches) {
      baseCardWidthImg = "250px";
    }

    if (mediaQuery1920.matches) {
      baseCardWidthImg = "550px";
    }
    sliders["img-key" + (i + 1)] = new InfinitySlider("#product" + (i + 1), {
      isArrows: false,
      isSlidesToScrollAll: false,
      baseCardWidth: baseCardWidthImg,
      gap: 50,
      isAutoplay: true,
      autoplaySpeed: 5000,
      transitionCard: "all 1.5s ease-in-out",
    })
  })
  // console.log(sliders);

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
  setTimeout(function () {
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
    prevButtons = document.querySelectorAll(".prev"),
    pointer = document.querySelectorAll(".pointer")

  let currentCardIndex = 0

  function pointerNone() {
    pointer.forEach(items => {
      items.style.display = "none"
    })
  }

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
      pointerNone()
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
      pointerNone()
      initSlider()
      Object.keys(sliders).forEach(sliderKey => {
        sliders[sliderKey].init()
        // sliderKey.init()
      })
    })
  })

  cards[currentCardIndex].classList.add("active")

  const popapPrivacy = document.querySelector(".privacy-police"),
    openPopapPrivacy = document.querySelector(".popups-outline"),
    closePrivacy = document.querySelector(".cancel-privacy")

  popapPrivacy.addEventListener("click", function (e) {
    e.preventDefault()
    openPopapPrivacy.style.display = "block"
  })

  closePrivacy.addEventListener("click", function (e) {
    e.preventDefault()
    openPopapPrivacy.style.display = "none"
  })

})
// function sliderGalery(carouselBlock, carouselItems, buttonArrow, gap, left, right) {
  //   if (!carouselBlock) {
  //     return false
  //   } else {
  //     const carousel = document.querySelector(carouselBlock)
  //     let items = [...document.querySelectorAll(carouselItems)]

  //     console.log(items)
  //     const itemWidth = items[0].offsetWidth + gap
  //     let currentIndex = 0,
  //       isAnimating = false,
  //       touchStartX = 0,
  //       touchEndX = 0,
  //       intervalId

  //     function updateCarousel() {
  //       while (carousel.firstChild) {
  //         carousel.removeChild(carousel.firstChild)
  //       }

  //       const firstClone = items[items.length - 1].cloneNode(true)
  //       firstClone.style.transform = `translateX: (-${itemWidth}px)`
  //       carousel.insertAdjacentElement("afterbegin", firstClone)

  //       for (let i = 0; i < items.length; i++) {
  //         const item = items[i].cloneNode(true)
  //         item.style.transform = `translateX: (${i} * ${itemWidth}px)`
  //         carousel.appendChild(item)
  //       }
  //     }

  //     function goToIndex(index) {
  //       isAnimating = true

  //       const distance = -index * itemWidth

  //       currentIndex = (currentIndex + items.length + index) % items.length

  //       carousel.style.transition = 'transform .5s ease-in-out'
  //       carousel.style.transform = `translateX(${distance}px)`

  //       setTimeout(() => {
  //         carousel.style.transition = 'none'
  //         carousel.style.transform = 'none'
  //         isAnimating = false
  //         updateCarousel()
  //       }, 500)
  //     }

  //     function nextSlide() {
  //       items.push(items.shift())
  //       goToIndex(1)
  //     }

  //     function prevSlide() {
  //       items.unshift(items.pop())
  //       goToIndex(-1)
  //     }

  //     function handleTouchStart(e) {
  //       touchStartX = e.touches[0].clientX
  //       stopSliderInterval()
  //     }

  //     function handleTouchMove(e) {
  //       touchEndX = e.touches[0].clientX
  //     }

  //     function handleTouchEnd() {
  //       const touchDiff = touchStartX - touchEndX
  //       if (touchDiff > 50) {
  //         nextSlide()
  //       } else if (touchDiff < -50) {
  //         prevSlide()
  //       }
  //       startSliderInterval()
  //     }

  //     function startSliderInterval() {
  //       intervalId = setInterval(nextSlide, 4000) // 4 seconds interval
  //     }

  //     function stopSliderInterval() {
  //       clearInterval(intervalId)
  //     }

  //     function setupSlider() {
  //       if (window.innerWidth < 768) {
  //         updateCarousel()
  //         carousel.addEventListener('touchstart', handleTouchStart)
  //         carousel.addEventListener('touchmove', handleTouchMove)
  //         carousel.addEventListener('touchend', handleTouchEnd)
  //         startSliderInterval()
  //       } else {
  //         carousel.removeEventListener('touchstart', handleTouchStart)
  //         carousel.removeEventListener('touchmove', handleTouchMove)
  //         carousel.removeEventListener('touchend', handleTouchEnd)
  //         stopSliderInterval()
  //       }
  //     }
  //     if (window.innerWidth < 768) {
  //       setupSlider()
  //     }

  //     if (buttonArrow) {
  //       const nextButtons = document.querySelectorAll(right),
  //         prevButtons = document.querySelectorAll(left)

  //       nextButtons.forEach(button => {
  //         button.addEventListener('click', (e) => {
  //           e.preventDefault()
  //           nextSlide()
  //           stopSliderInterval()
  //         })
  //       })

  //       prevButtons.forEach(button => {
  //         button.addEventListener('click', (e) => {
  //           e.preventDefault()
  //           prevSlide()
  //           stopSliderInterval()
  //         })
  //       })
  //     }

  //   }

    //object
  // let cardBlock = {
  //   product1: {
  //     id: "098746",
  //     color: {
  //       black: "чорний",
  //       green: "зелений",
  //       blue: "синій"
  //     },
  //     size: ["34", "38", "39", "40", "41", "42", "43", "44", "45"],
  //     head: "new balance 510",
  //     descript: "Наші New Balance 515 створені спеціально для тих, хто хоче закарбувати своє почуття стилю в повсякденному образі. У них компонуються тільки найкращі кольори та матеріали, що стало традицією фірми. Також ми зберегли оригінальну зручність і комфорт у сукупності з трендами сучасності.",
  //     material: {
  //       list1: "Матеріал верху: 56,02% шкіра, 43,98% синтетичні матеріали ",
  //       list2: "Матеріал підошви: гума; проміжна підошва зі CMEVA – для легкості"
  //     },
  //     country: "Україна",
  //     remainder: "5шт",
  //     saleprice: "3000 грн",
  //     price: "2300 грн"
  //   },
  //   product2: {
  //     id: "098746",
  //     color: {
  //       red: "червоний",
  //       green: "зелений",
  //       white: "білий"
  //     },
  //     size: ["34", "38", "39", "40", "41", "42", "43", "44", "45"],
  //     head: "new balance 510",
  //     descript: "Наші New Balance 515 створені спеціально для тих, хто хоче закарбувати своє почуття стилю в повсякденному образі. У них компонуються тільки найкращі кольори та матеріали, що стало традицією фірми. Також ми зберегли оригінальну зручність і комфорт у сукупності з трендами сучасності.",
  //     material: {
  //       list1: "Матеріал верху: 56,02% шкіра, 43,98% синтетичні матеріали ",
  //       list2: "Матеріал підошви: гума; проміжна підошва зі CMEVA – для легкості"
  //     },
  //     country: "Україна",
  //     remainder: "5шт",
  //     saleprice: "3000 грн",
  //     price: "2300 грн"
  //   },
  // }
  // let product = cardBlock.product1

  // document.querySelector('.name-block h2').innerText = product.head

  // let colorBlock = document.querySelector('.color-input-block')
  // for (const color in product.color) {
  //   let input = document.createElement('input')
  //   input.setAttribute('type', 'radio')
  //   input.setAttribute('name', 'color')
  //   input.setAttribute('id', color)
  //   input.classList.add('color-input')
  //   let label = document.createElement('label')
  //   label.setAttribute('for', color)
  //   let p = document.createElement('p')
  //   p.appendChild(input)
  //   p.appendChild(label)
  //   colorBlock.appendChild(p)
  //   const dynamicStyles = document.createElement('style')
  //   document.head.appendChild(dynamicStyles)
  //   let dynamicStyle
  //   if (color === "white") {
  //     console.log(color)
  //     dynamicStyle = `
  //         .color-input + label[for="${color}"]{
  //           background-color: ${color};
  //           border: 0.5rem solid #ccc;
  //         }
  //     `
  //   } else {
  //     console.log(color)
  //     dynamicStyle = `
  //           .color-input + label[for="${color}"]{
  //             background-color: ${color};
  //           }
  //       `
  //   }
  //   dynamicStyles.sheet.insertRule(dynamicStyle, dynamicStyles.sheet.cssRules.length)
  // }

  // // Set sizes
  // let sizeBlock = document.querySelector('.size-inputs')
  // product.size.forEach(size => {
  //   let input = document.createElement('input')
  //   input.setAttribute('type', 'checkbox')
  //   input.setAttribute('name', 'size')
  //   input.setAttribute('id', `product-size${size}`)
  //   input.classList.add('size-input')
  //   let label = document.createElement('label')
  //   label.setAttribute('for', `product-size${size}`)
  //   label.innerText = size
  //   let p = document.createElement('p')
  //   p.appendChild(input)
  //   p.appendChild(label)
  //   sizeBlock.appendChild(p)
  // })

  // document.querySelector('.article-id').innerText = product.id

  // let materialList = document.querySelector('.material ul')
  // for (const key in product.material) {
  //   let li = document.createElement('li')
  //   li.innerText = product.material[key]
  //   materialList.appendChild(li)
  // }

  // // Set country
  // document.querySelector('.country-name').innerText = product.country
  // document.querySelector('.text-descript').innerText = product.descript
  // document.querySelector('.count p span').innerText = product.remainder
  // document.querySelector('.price-card p .blue-text').innerText = product.price


  // Object.keys(cardBlock).forEach(key => {
//   const product = cardBlock[key],
//     discount = calculateDiscount(product.remainder),
//     discountedPrice = applyDiscount(parseFloat(product.price), discount),
//     roundedPrice = roundUp(discountedPrice)
//   product.price = roundedPrice.toFixed(0) + " грн"
// })

// // let selectedSize

// // створення головної картки товару
// function createProductCard(product) {
  // productCard.innerHTML = `
  //       <div class="slider-card">
  //         <div class="card_block dark-bg">
  //           <div class="name-block">
  //             <hr/>
  //             <div class="wrapper flex-between items-center">
  //               <h2 class="white-head head product">${product.head}</h2>
  //               <div class="button-card flex-between items-center">
  //                 <div class="number-card">
  //                     <p class="number">
  //                       <span class="number-of"></span>
  //                     </p>
  //                 </div>
  //                 <div class="button flex-between items-center">
  //                   <a class="prev buttonArrow" href="#">
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  //                       <path d="M49.6464 19.6464C49.4512 19.8417 49.4512 20.1583 49.6464 20.3535L52.8284 23.5355C53.0237 23.7308 53.3403 23.7308 53.5355 23.5355C53.7308 23.3403 53.7308 23.0237 53.5355 22.8284L50.7071 20L53.5355 17.1716C53.7308 16.9763 53.7308 16.6597 53.5355 16.4645C53.3403 16.2692 53.0237 16.2692 52.8284 16.4645L49.6464 19.6464ZM150 19.5L50 19.5L50 20.5L150 20.5L150 19.5Z"/>
  //                     </svg> 
  //                   </a>
  //                   <a class="next buttonArrow" href="#"> 
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  //                       <path d="M150.354 19.6464C150.549 19.8417 150.549 20.1583 150.354 20.3535L147.172 23.5355C146.976 23.7308 146.66 23.7308 146.464 23.5355C146.269 23.3403 146.269 23.0237 146.464 22.8284L149.293 20L146.464 17.1716C146.269 16.9763 146.269 16.6597 146.464 16.4645C146.66 16.2692 146.976 16.2692 147.172 16.4645L150.354 19.6464ZM50 19.5L150 19.5L150 20.5L50 20.5L50 19.5Z"/>
  //                     </svg>
  //                     <span class="pointer"> 
  //                       <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //                         <rect y="15" width="30" height="30" transform="rotate(-30 0 15)" fill="url(#pattern0)"/>
  //                         <defs>
  //                           <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  //                             <use xlink:href="#image0_41_1656" transform="scale(0.01)"/>
  //                           </pattern>
  //                           <image id="image0_41_1656" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMklEQVR4nO2dXYhWRRjHp6woS/vQoIs+KfKuG6ub6CpIJSqtLoqo7MMKukizhKAvUHETL8q9qIuSIMqkbqIyqEgsJQoVuwmhgtpSd73YPnV3xfYXw47r6zDnvPOeM3PemTnzgwPL2eeZj+d/zsycec/MESKTyWQymYgBZgA3AhuAb4AR4Kg6RtS5DcpmRr/LmyzAWcAqFXRbRpTPmf0uf1IAdwFDVGcIuKPf9Yge4BTgJWCS+kwCA8Cp/a5XlMjAAZsLgjsKvAncDswDzlaH/HsxsEnZmHg3i1JNkLWGYB5R58+18D8PWAeMGdJZXekqaXmfoTdTvwPzK6R1HbDf0Hwt8VP6NEdTQwYxLq6R5iUGUX7Noy+74K0yNFPzHaR7vaH5erpuum146NOfM9Y6TH9AS3s4d/DlAZNP152MlnXgwALgA+BHdbwP3NSlo9dHXzfUFTpZ1JRHJ5tKnk8GKWagJI+3NNv1XisVM2oeqpPFBXYP0B3jKEo+sWt2O71XLFaAQ1qwri6w+85CkC8LfOXDYyfD3isWK8CEFqxZBXb/WggyWuA7S7Mb916xWJHB0YI1s8DOigLfmZrZmPeKxYoahnZymQdBLtfMDnivWKwAOyw7ZisKfO/UzLZ7r1isABu1YL3mQZDXNbNXvVcsVoBFWrD+As5xJQhTHbpMs5MFjVUwNoAzDP3IaoeCrNFMDso8G6tgjAAvdBuW1hBkXDN5vrGKxYpqVk6aKncoiH53zG6sYgn8QDWN4f9WdPHLLz30KMqgR0Fe6akwmenfRrZ4EGRzfoGuniiDDgXZmMXwQFVBMp7IggRGFiQwsiCBkQUJjCxIYGRBEhOEqamZr4B/1LE9T6X0SRDg5RKXdXXK1VqqCgIstHC7ueTlvPuAr9VddRjYC6xs/W8qNQT5xMLtowJB3ijx+Rw4XbSVGoIMW7gdNPjdbeG3QrSVGoLYMGnw+8LCb69oK54FOWbws1mKPVYyY/0Y8K3qe46ovmdFMs2cZ0EmHOYnBwLvlbh8nMT6lBoBosqVXiO/ey3clonYqREgGw47zO8zC7cdInZqBMiGvx3mt79KftFRI0A2/Okwvz+q+EWHbYDoWEqtlkbb8B9wfgW/LIgFW1VA5fEp9nwoxezVz3Dh5Dukn2RBAiMKQYC5aoulXXJEoY5d6tycimmGyqXamnjZH3XFacC7BO42OWopKYu8gm6tkG6oyFnfK4CL1CYGVviJvlkMmytE2jzUY9pJ4U+FEwGb0+XOqCUKiSF8o/qHXrEWhcQQDQiyp2LZrEQhMUQDgsiRVFXkbm+PZ0EcYljp6lQUEkP4BtjtoJyFzReJIRoQ5EVHZTWKQmKIhoa9VtMGVUQhMURgD4Y9i0JiiKYAHnQoynRHT2KIJpFXtmtRSAzRNPLNCkcb6uNQ3PYKokR5OMVgRitIFiVAQZQoj+Q7JSBBPPQp0SNCIItyAhEKwKP5TiEcQSTqVf1WN18iNIAnaTEiRIDltBQRKi0VZVyEjFrq1SYOidABnqE9fC9iAHiKdrBFxILaJSF1VoqYAJ4lba4RsZFwn7JPxArwHOmxXCT2FdCYOVD0SaeocPjOV79ZKlJBfsOWuCckt4rUAO4HjhIfPwEXiBQBrgV+IR5+A64SKQNcePwrCoHzA3ClaAvAEuBnwuSdVn7Nh6mPij1huelLE+yrsso4OYDT1B0jt9Y41rAIcvS3E7hHlqPfsQgOYDZwi9qvd5saBNRd4XWcCfWFa7kRwtvq/YDpzQMymUwmkxGB8j9kimsss/L3AwAAAABJRU5ErkJggg=="/>
  //                         </defs>
  //                       </svg>
  //                     </span>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //             <hr/>
  //           </div>
  //           <div class="${clasImg}" id="${product.Id}">
  //             <div class="flex-between slider-container">
  //               <div class="image">
  //                 <picture><img src="img/1/nb-1.png" alt="" loading="lazy"/></picture>
  //               </div>
  //               <div class="image">
  //                 <picture><img src="img/1/nb-2.png" alt="" loading="lazy"/></picture>
  //               </div>
  //               <div class="image">
  //                 <picture><img src="img/1/nb-3.png" alt="" loading="lazy"/></picture>
  //               </div>
  //               <div class="image">
  //                 <picture><img src="img/1/nb-4.png" alt="" loading="lazy"/></picture>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="count-price_block flex">
  //               <div class="count">
  //                   <p>залишок - <span class="blue-text">${product.remainder} шт </span></p>
  //               </div>
  //               <div class="price-card">
  //                   <p>ціна - <span class="blue-text">${product.price}</span><span class="full-price-card">${product.saleprice}</span></p>
  //               </div>
  //           </div>
  //         </div>
  //         <div class="haracteristic-block">
  //           <h2 class="dark-head head">характеристики товару</h2>
  //           <form action="#">
  //             <div class="wrapper flex-between">
  //               <div class="size-block">
  //                 <div class="size">
  //                   <p class="haracteristic-name">розміри:</p>
  //                   <div class="flex input-size-block size-inputs"></div>
  //                 </div>
  //                 <div class="article">
  //                   <p class="haracteristic-name">артикул:</p>
  //                   <p class="article-id">${product.id}</p>
  //                 </div>
  //                 <div class="material">
  //                   <p class="haracteristic-name">Матеріал:</p>
  //                   <ul></ul>
  //                 </div>
  //                 </div>
  //                 <div class="color-block">
  //                   <div class="color">
  //                       <p class="haracteristic-name">кольори:</p>
  //                       <div class="flex input-size-block color-input-block"></div>
  //                   </div>
  //                   <div class="country">
  //                       <p class="haracteristic-name">Країна-виробник:</p>
  //                       <p class="country-name">${product.country}</p>
  //                   </div>
  //                   <div class="description">
  //                       <p class="haracteristic-name">опис:</p>
  //                       <p class="text-descript">${product.descript}</p>
  //                   </div>
  //                 </div>
  //             </div>
  //             <div class="flex cta-submit add-to-cart" data-item-key="${product.id}"><button class="text-style gradient" type="submit">купити</button></div>
  //           </form>
  //         </div>
  //       </div>
  //   `;

//   const colorBlock = productCard.querySelector('.color-input-block'),
//     sizeBlock = productCard.querySelector('.size-inputs'),
//     materialList = productCard.querySelector('.material ul')

//   // кольори

//   for (const color in product.color) {
//     const input = document.createElement('input')
//     input.setAttribute('type', 'radio')
//     input.setAttribute('name', 'color')
//     input.setAttribute('id', color)
//     input.classList.add('color-input')

//     const label = document.createElement('label')
//     label.setAttribute('for', color)

//     const p = document.createElement('p')
//     p.appendChild(input)
//     p.appendChild(label)

//     colorBlock.appendChild(p)

//     // Додати стилі для кожного кольору
//     const dynamicStyle = `
//       .color-input + label[for="${color}"] {
//         background-color: ${color};
//         ${color === 'white' ? 'border: 0.5rem solid #ccc;' : ''}
//       }
//       `;
//     const styleElement = document.createElement('style')
//     styleElement.textContent = dynamicStyle
//     document.head.appendChild(styleElement)
//   }

//   // розміри
//   const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"]

//   sizes.forEach(size => {
//     const input = document.createElement('input')
//     input.setAttribute('type', 'radio')
//     input.setAttribute('name', 'size')
//     input.setAttribute('id', `product-size${size}`)
//     input.setAttribute('value', size)
//     input.classList.add('size-input')

//     const label = document.createElement('label')
//     label.setAttribute('for', `product-size${size}`)
//     label.innerText = size

//     const p = document.createElement('p')
//     p.appendChild(input)
//     p.appendChild(label)
//     if (!product.size.includes(size)) {
//       input.disabled = true
//     }
//     sizeBlock.appendChild(p)

//     // Додати слухач подій для радіокнопок
//     input.addEventListener('change', function () {
//       if (this.checked) {
//         selectedSize = this.value
//         console.log('Вибраний розмір:', selectedSize)
//       }
//     })
//   })

//   //матеріали
//   for (const key in product.material) {
//     const li = document.createElement('li')
//     li.innerText = product.material[key]
//     materialList.appendChild(li)
//   }
//   return productCard
// }

// const container = document.querySelector('.main-card_block')

// for (const key in cardBlock) {
//   const product = cardBlock[key],
//     productCard = createProductCard(product)
//   container.appendChild(productCard)
// }

// function createCatalogCard(product) {
//   const card = document.createElement('div')
//   card.classList.add('card')

//   card.innerHTML = `
//         <div class="img-card">
//             <p class="flag"></p>
//             <picture class="hover-img">
//                 <img src="img/1/nb-3.png" alt="">
//             </picture>
//         </div>
//         <p class="name-card text-style">${product.headCatalog}</p>
//         <div class="price-card flex items-center">
//             <p class="sale-price blue-text">${product.priceCatalog} грн</p>
//             <p class="price">${product.saleCatalog} грн</p>
//         </div>
//         <div class="size-card flex"></div>
//         <a href="#" class="cta cta-card gradient text-style">купити</a>
//     `;
//   const sizeCard = card.querySelector(".size-card"),
//     sizesCatalog = ["40", "41", "42", "43", "44", "45"]
//   sizesCatalog.forEach(size => {
//     const input = document.createElement('input'),
//       inputId = `product-size-${product.id}-catalog-${size}`
//     input.setAttribute('type', 'radio')
//     input.setAttribute('name', `size-${product.id}`)
//     input.setAttribute('id', inputId)
//     input.classList.add('size-input')

//     const label = document.createElement('label')
//     label.setAttribute('for', inputId)
//     label.innerText = size

//     const p = document.createElement('p')
//     p.appendChild(input)
//     p.appendChild(label)
//     if (!product.sizeCatalog.includes(size)) {
//       input.disabled = true
//     }
//     sizeCard.appendChild(p)
//   })

//   const countFlag = card.querySelectorAll(".flag")

//   countFlag.forEach(items => {
//     items.classList.remove("green-flag", "blue-flag", "purple-flag", "darkgreem-flag")
//     if (product.countCatalog <= 1) {
//       items.innerText = "остання пара"
//       items.classList.add("green-flag")
//     } else if (product.countCatalog > 1 && product.countCatalog <= 5) {
//       items.innerText = `Залишилось: ${product.countCatalog} пари`
//       items.classList.add("blue-flag")
//     } else if (product.countCatalog > 5 && product.countCatalog < 10) {
//       items.innerText = `Залишилось: ${product.countCatalog} пар`
//       items.classList.add("purple-flag")
//     } else if (product.countCatalog >= 10) {
//       items.innerText = `Залишилось: ${product.countCatalog} пар`
//       items.classList.add("darkgreen-flag")
//     }
//   })

//   return card
// }

// const catalogContainer = document.querySelector(".catalog-card")

// for (const key in catalogProduct) {
//   const product = catalogProduct[key]
//   const catalogCard = createCatalogCard(product)
//   catalogContainer.appendChild(catalogCard)
// }
