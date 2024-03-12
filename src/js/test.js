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
