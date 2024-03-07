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