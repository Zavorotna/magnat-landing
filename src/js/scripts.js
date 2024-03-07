document.addEventListener("DOMContentLoaded", function () {
  let cardBlock = {
    product1: {
      id: "098746",
      clasImg: "product1",
      color: {
        black: "чорний",
        green: "зелений",
        blue: "синій"
      },
      size: ["38", "39", "40", "41", "42", "44", "45"],
      head: "new balance 510",
      descript: "Наші New Balance 515 створені спеціально для тих, хто хоче закарбувати своє почуття стилю в повсякденному образі. У них компонуються тільки найкращі кольори та матеріали, що стало традицією фірми. Також ми зберегли оригінальну зручність і комфорт у сукупності з трендами сучасності.",
      material: {
        list1: "Матеріал верху: 56,02% шкіра, 43,98% синтетичні матеріали ",
        list2: "Матеріал підошви: гума; проміжна підошва зі CMEVA – для легкості"
      },
      country: "Україна",
      remainder: "5шт",
      saleprice: "3000 грн",
      price: "2300 грн"
    },
    product2: {
      id: "098747",
      clasImg: "product2",
      color: {
        red: "червоний",
        green: "зелений",
        white: "білий"
      },
      size: ["38", "39", "40", "41", "42", "43", "44", "45"],
      head: "new balance 511",
      descript: "Опис продукту 2",
      material: {
        list1: "Матеріал верху: 60% шкіра, 40% текстиль ",
        list2: "Матеріал підошви: гума"
      },
      country: "Україна",
      remainder: "3шт",
      saleprice: "3500 грн",
      price: "2600 грн"
    },
    product3: {
      id: "098748",
      clasImg: "product3",
      color: {
        red: "червоний",
        blue: "зелений",
        white: "білий"
      },
      size: ["38", "39", "40", "41", "42", "43", "44", "45"],
      head: "new balance 512",
      descript: "Опис продукту 2",
      material: {
        list1: "Матеріал верху: 60% шкіра, 40% текстиль ",
        list2: "Матеріал підошви: гума"
      },
      country: "Україна",
      remainder: "3шт",
      saleprice: "3500 грн",
      price: "2600 грн"
    },
  }

  let catalogProduct = {
    catalogProduct1: {
      id: "ct1",
      headCatalog: "new balance 510",
      priceCatalog: "1550",
      saleCatalog: "2400",
      sizeCatalog: ["40", "41", "42", "43", "44", "45"],
      countCatalog: "10",
    },
    catalogProduct2: {
      id: "ct2",
      headCatalog: "new balance 511",
      priceCatalog: "1550 ",
      saleCatalog: "2400 ",
      sizeCatalog: ["40", "41", "42", "43", "44", "45"],
      countCatalog: "1",
    },
    catalogProduct3: {
      id: "ct3",
      headCatalog: "new balance 512",
      priceCatalog: "1550 ",
      saleCatalog: "2400 ",
      sizeCatalog: ["40", "41", "42", "43", "44", "45"],
      countCatalog: "8",
    },
    catalogProduct4: {
      id: "ct4",
      headCatalog: "new balance 510",
      priceCatalog: "1550 ",
      saleCatalog: "2400 ",
      sizeCatalog: ["40", "41", "42", "43", "44", "45"],
      countCatalog: "3",
    }
  }

  let selectedSize
  // створення головної картки товару
  function createProductCard(product) {
    const productCard = document.createElement('div')
    productCard.classList.add('main-card_block')
    const clasImg = product.clasImg
    productCard.innerHTML = `
        <div class="slider-card">
          <div class="card_block dark-bg">
            <div class="name-block">
              <hr/>
              <div class="wrapper flex-between items-center">
                <h2 class="white-head head product">${product.head}</h2>
                <div class="button-card flex-between items-center">
                  <div class="number-card">
                      <p class="number">
                        <span class="number-of"></span>
                      </p>
                  </div>
                  <div class="button flex-between items-center">
                    <a class="prev buttonArrow left slider_navigation" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
                        <path d="M49.6464 19.6464C49.4512 19.8417 49.4512 20.1583 49.6464 20.3535L52.8284 23.5355C53.0237 23.7308 53.3403 23.7308 53.5355 23.5355C53.7308 23.3403 53.7308 23.0237 53.5355 22.8284L50.7071 20L53.5355 17.1716C53.7308 16.9763 53.7308 16.6597 53.5355 16.4645C53.3403 16.2692 53.0237 16.2692 52.8284 16.4645L49.6464 19.6464ZM150 19.5L50 19.5L50 20.5L150 20.5L150 19.5Z" fill="white"/>
                      </svg> 
                    </a>
                    <a class="next buttonArrow right slider_navigation" href="#"> 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
                        <path d="M150.354 19.6464C150.549 19.8417 150.549 20.1583 150.354 20.3535L147.172 23.5355C146.976 23.7308 146.66 23.7308 146.464 23.5355C146.269 23.3403 146.269 23.0237 146.464 22.8284L149.293 20L146.464 17.1716C146.269 16.9763 146.269 16.6597 146.464 16.4645C146.66 16.2692 146.976 16.2692 147.172 16.4645L150.354 19.6464ZM50 19.5L150 19.5L150 20.5L50 20.5L50 19.5Z" fill="white"/>
                      </svg>
                      <span class="pointer"> 
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <rect y="15" width="30" height="30" transform="rotate(-30 0 15)" fill="url(#pattern0)"/>
                          <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlink:href="#image0_41_1656" transform="scale(0.01)"/>
                            </pattern>
                            <image id="image0_41_1656" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMklEQVR4nO2dXYhWRRjHp6woS/vQoIs+KfKuG6ub6CpIJSqtLoqo7MMKukizhKAvUHETL8q9qIuSIMqkbqIyqEgsJQoVuwmhgtpSd73YPnV3xfYXw47r6zDnvPOeM3PemTnzgwPL2eeZj+d/zsycec/MESKTyWQymYgBZgA3AhuAb4AR4Kg6RtS5DcpmRr/LmyzAWcAqFXRbRpTPmf0uf1IAdwFDVGcIuKPf9Yge4BTgJWCS+kwCA8Cp/a5XlMjAAZsLgjsKvAncDswDzlaH/HsxsEnZmHg3i1JNkLWGYB5R58+18D8PWAeMGdJZXekqaXmfoTdTvwPzK6R1HbDf0Hwt8VP6NEdTQwYxLq6R5iUGUX7Noy+74K0yNFPzHaR7vaH5erpuum146NOfM9Y6TH9AS3s4d/DlAZNP152MlnXgwALgA+BHdbwP3NSlo9dHXzfUFTpZ1JRHJ5tKnk8GKWagJI+3NNv1XisVM2oeqpPFBXYP0B3jKEo+sWt2O71XLFaAQ1qwri6w+85CkC8LfOXDYyfD3isWK8CEFqxZBXb/WggyWuA7S7Mb916xWJHB0YI1s8DOigLfmZrZmPeKxYoahnZymQdBLtfMDnivWKwAOyw7ZisKfO/UzLZ7r1isABu1YL3mQZDXNbNXvVcsVoBFWrD+As5xJQhTHbpMs5MFjVUwNoAzDP3IaoeCrNFMDso8G6tgjAAvdBuW1hBkXDN5vrGKxYpqVk6aKncoiH53zG6sYgn8QDWN4f9WdPHLLz30KMqgR0Fe6akwmenfRrZ4EGRzfoGuniiDDgXZmMXwQFVBMp7IggRGFiQwsiCBkQUJjCxIYGRBEhOEqamZr4B/1LE9T6X0SRDg5RKXdXXK1VqqCgIstHC7ueTlvPuAr9VddRjYC6xs/W8qNQT5xMLtowJB3ijx+Rw4XbSVGoIMW7gdNPjdbeG3QrSVGoLYMGnw+8LCb69oK54FOWbws1mKPVYyY/0Y8K3qe46ovmdFMs2cZ0EmHOYnBwLvlbh8nMT6lBoBosqVXiO/ey3clonYqREgGw47zO8zC7cdInZqBMiGvx3mt79KftFRI0A2/Okwvz+q+EWHbYDoWEqtlkbb8B9wfgW/LIgFW1VA5fEp9nwoxezVz3Dh5Dukn2RBAiMKQYC5aoulXXJEoY5d6tycimmGyqXamnjZH3XFacC7BO42OWopKYu8gm6tkG6oyFnfK4CL1CYGVviJvlkMmytE2jzUY9pJ4U+FEwGb0+XOqCUKiSF8o/qHXrEWhcQQDQiyp2LZrEQhMUQDgsiRVFXkbm+PZ0EcYljp6lQUEkP4BtjtoJyFzReJIRoQ5EVHZTWKQmKIhoa9VtMGVUQhMURgD4Y9i0JiiKYAHnQoynRHT2KIJpFXtmtRSAzRNPLNCkcb6uNQ3PYKokR5OMVgRitIFiVAQZQoj+Q7JSBBPPQp0SNCIItyAhEKwKP5TiEcQSTqVf1WN18iNIAnaTEiRIDltBQRKi0VZVyEjFrq1SYOidABnqE9fC9iAHiKdrBFxILaJSF1VoqYAJ4lba4RsZFwn7JPxArwHOmxXCT2FdCYOVD0SaeocPjOV79ZKlJBfsOWuCckt4rUAO4HjhIfPwEXiBQBrgV+IR5+A64SKQNcePwrCoHzA3ClaAvAEuBnwuSdVn7Nh6mPij1huelLE+yrsso4OYDT1B0jt9Y41rAIcvS3E7hHlqPfsQgOYDZwi9qvd5saBNRd4XWcCfWFa7kRwtvq/YDpzQMymUwmkxGB8j9kimsss/L3AwAAAABJRU5ErkJggg=="/>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <hr/>
            </div>
            <div class="${clasImg}">
              <div class="flex-between slider-container">
                <div class="image">
                  <picture><img src="img/1/nb-1.png" alt=""/></picture>
                </div>
                <div class="image">
                  <picture><img src="img/1/nb-2.png" alt=""/></picture>
                </div>
                <div class="image">
                  <picture><img src="img/1/nb-3.png" alt=""/></picture>
                </div>
                <div class="image">
                  <picture><img src="img/1/nb-4.png" alt=""/></picture>
                </div>
              </div>
            </div>
            <div class="count-price_block flex">
                <div class="count">
                    <p>залишок - <span class="blue-text">${product.remainder}</span></p>
                </div>
                <div class="price-card">
                    <p>ціна - <span class="blue-text">${product.price}</span><span class="full-price-card">${product.saleprice}</span></p>
                </div>
            </div>
          </div>
          <div class="haracteristic-block">
            <h2 class="dark-head head">характеристики товару</h2>
            <form action="#">
              <div class="wrapper flex-between">
                <div class="size-block">
                  <div class="size">
                    <p class="haracteristic-name">розміри:</p>
                    <div class="flex input-size-block size-inputs"></div>
                  </div>
                  <div class="article">
                    <p class="haracteristic-name">артикул:</p>
                    <p class="article-id">${product.id}</p>
                  </div>
                  <div class="material">
                    <p class="haracteristic-name">Матеріал:</p>
                    <ul></ul>
                  </div>
                  </div>
                  <div class="color-block">
                    <div class="color">
                        <p class="haracteristic-name">кольори:</p>
                        <div class="flex input-size-block color-input-block"></div>
                    </div>
                    <div class="country">
                        <p class="haracteristic-name">Країна-виробник:</p>
                        <p class="country-name">${product.country}</p>
                    </div>
                    <div class="description">
                        <p class="haracteristic-name">опис:</p>
                        <p class="text-descript">${product.descript}</p>
                    </div>
                  </div>
              </div>
              <div class="flex cta-submit add-to-cart" data-item-key="${product.id}"><button class="text-style gradient" type="submit">купити</button></div>
            </form>
          </div>
        </div>
    `;

    const colorBlock = productCard.querySelector('.color-input-block'),
      sizeBlock = productCard.querySelector('.size-inputs'),
      materialList = productCard.querySelector('.material ul')

    // кольори

    for (const color in product.color) {
      const input = document.createElement('input')
      input.setAttribute('type', 'radio')
      input.setAttribute('name', 'color')
      input.setAttribute('id', color)
      input.classList.add('color-input')

      const label = document.createElement('label')
      label.setAttribute('for', color)

      const p = document.createElement('p')
      p.appendChild(input)
      p.appendChild(label)

      colorBlock.appendChild(p)

      // Додати стилі для кожного кольору
      const dynamicStyle = `
      .color-input + label[for="${color}"] {
        background-color: ${color};
        ${color === 'white' ? 'border: 0.5rem solid #ccc;' : ''}
      }
      `;
      const styleElement = document.createElement('style')
      styleElement.textContent = dynamicStyle
      document.head.appendChild(styleElement)
    }


    // розміри
     // Оголошення змінної за межами функції

    const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"]

    sizes.forEach(size => {
      const input = document.createElement('input')
      input.setAttribute('type', 'radio')
      input.setAttribute('name', 'size')
      input.setAttribute('id', `product-size${size}`)
      input.setAttribute('value', size)
      input.classList.add('size-input')

      const label = document.createElement('label')
      label.setAttribute('for', `product-size${size}`)
      label.innerText = size

      const p = document.createElement('p')
      p.appendChild(input)
      p.appendChild(label)
      if (!product.size.includes(size)) {
        input.disabled = true
      }
      sizeBlock.appendChild(p)

      // Додати слухач подій для радіокнопок
      input.addEventListener('change', function () {
        if (this.checked) {
          selectedSize = this.value
          console.log('Вибраний розмір:', selectedSize)
        }
      })
    })

    console.log('Вибраний розмір за межами функції:', selectedSize)



    //матеріали
    for (const key in product.material) {
      const li = document.createElement('li')
      li.innerText = product.material[key]
      materialList.appendChild(li)
    }
    return productCard
  }

  const container = document.querySelector('.main-card_block')

  for (const key in cardBlock) {
    const product = cardBlock[key];
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  }

  function createCatalogCard(product) {
    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
        <div class="img-card">
            <span class="flag"></span>
            <picture>
                <img src="img/1/nb-3.png" alt="">
            </picture>
        </div>
        <p class="name-card text-style">${product.headCatalog}</p>
        <div class="price-card flex items-center">
            <p class="sale-price blue-text">${product.priceCatalog} грн</p>
            <p class="price">${product.saleCatalog} грн</p>
        </div>
        <div class="size-card flex"></div>
        <a href="#" class="cta cta-card gradient text-style">купити</a>
    `;
    const sizeCard = card.querySelector(".size-card"),
      sizesCatalog = ["40", "41", "42", "43", "44", "45"]
    sizesCatalog.forEach(size => {
      const input = document.createElement('input'),
        inputId = `product-size-${product.id}-catalog-${size}`
      input.setAttribute('type', 'radio')
      input.setAttribute('name', `size-${product.id}`)
      input.setAttribute('id', inputId)
      input.classList.add('size-input')

      const label = document.createElement('label')
      label.setAttribute('for', inputId)
      label.innerText = size

      const p = document.createElement('p')
      p.appendChild(input)
      p.appendChild(label)
      if (!product.sizeCatalog.includes(size)) {
        input.disabled = true
      }
      sizeCard.appendChild(p)
    })

    return card
  }

  const catalogContainer = document.querySelector(".catalog-card")

  for (const key in catalogProduct) {
    const product = catalogProduct[key]
    const catalogCard = createCatalogCard(product)
    catalogContainer.appendChild(catalogCard)
  }


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
    })
  })

  prevButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault()
      showPreviousCard(index)
    })
  })


  cards[currentCardIndex].classList.add("active")

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

  // const mainSlider = new InfinitySlider(".main-slider", {
  //   isArrows: true,
  //   isSlidesToScrollAll: false,
  //   baseCardWidth: "250px",
  //   gap: 50,
  //   isAutoplay: true,
  //   autoplaySpeed: 5000,
  //   transitionCard: "all 1.5s ease-in-out",
  // });

  // Ініціалізація слайдерів для кожного товару
  // document.querySelectorAll('.product').forEach((product, index) => {
  //   slider.init()
  //   window.onresize = function () {
  //     // slider.init()
  //     slider.init()
  //     // pictureSlider2.init()
  //     // pictureSlider3.init()
  //     // pictureSlider4.init()
  //   };
  // })

  const pictureSlider3 = new InfinitySlider(".product3", {
    isArrows: true,
    isSlidesToScrollAll: false,
    baseCardWidth: "250px",
    gap: 50,
    isAutoplay: true,
    autoplaySpeed: 5000,
    transitionCard: "all 1.5s ease-in-out",
  })

  const pictureSlider2 = new InfinitySlider(".product2", {
    isArrows: true,
    isSlidesToScrollAll: false,
    baseCardWidth: "250px",
    gap: 50,
    isAutoplay: true,
    autoplaySpeed: 5000,
    transitionCard: "all 1.5s ease-in-out",
  });

  const slider = new InfinitySlider(".product1", {
    isArrows: true,
    isSlidesToScrollAll: false,
    baseCardWidth: "250px",
    gap: 50,
    isAutoplay: true,
    autoplaySpeed: 5000,
    transitionCard: "all 1.5s ease-in-out",
  })

  slider.init()
  comment.init()
  pictureSlider2.init()
  pictureSlider3.init()
  // pictureSlider4.init()
  window.onresize = function () {
    slider.init()
    comment.init()
    // slider.init()
    pictureSlider2.init()
    pictureSlider3.init()
    // pictureSlider4.init()
  };


  // кошик
  const addToCart = document.querySelectorAll(".add-to-cart"),
    order = document.querySelector(".cart-order"),
    cancelCart = document.querySelector(".cancel"),
    modelName = document.querySelector(".model-order-name"),
    fullPrice = document.querySelector(".sum"),
    salePrice = document.querySelector(".sale-sum "),
    priceToPay = document.querySelector(".pay-price"),
    sizeOrder = document.querySelector(".size-order"),
    cardProductPrice = document.querySelector(".order-price-sale"),
    cardSalePrice = document.querySelector(".sale-price-order")


  addToCart.forEach(index => {
    index.addEventListener("click", function (e) {
      e.preventDefault();
      order.style.display = "flex";
      let idProduct = index.getAttribute("data-item-key");

      for (const key in cardBlock) {
        const product = cardBlock[key];
        if (idProduct == product.id) {
          modelName.innerText = product.head;
          cardProductPrice.innerText = product.saleprice;
          cardSalePrice.innerText = product.price;
          fullPrice.innerText = product.saleprice;
          salePrice.innerText = parseFloat(product.saleprice) - parseFloat(product.price)
          priceToPay.innerText = product.price
          const sizeSelect = document.createElement('select');
          sizeSelect.setAttribute("id", "sizeSelect");
          sizeSelect.setAttribute("name", "sizeSelect");
          product.size.forEach(size => {
            const option = document.createElement('option');
            option.setAttribute('value', size);
            option.textContent = `${size}`;
            // Перевіряємо, чи розмір співпадає з обраним розміром, і якщо так, то додаємо атрибут "selected"
            if (selectedSize === size) {
              option.setAttribute('selected', 'selected')
            }

            sizeSelect.appendChild(option);
          })

          sizeOrder.appendChild(sizeSelect);
          const labelSelect = document.createElement("label");
          labelSelect.setAttribute("for", "sizeSelect");
          sizeOrder.appendChild(labelSelect);
          break;
        }
      }
    });
  });


  if (order) {
    cancelCart.addEventListener("click", function (e) {
      e.preventDefault()
      order.style.display = "none"
    })
  }

})