<?php
// Отримання JSON даних
$json_data = file_get_contents('products.json');
$data = json_decode($json_data, true); // декодуємо JSON у масив PHP

// Вивід блоків з інформацією
for($i=1; $i <= count($data); $i++) {
    echo '<div class="slider-card">
            <div class="card_block dark-bg">
                <div class="name-block">
                    <hr>
                    <div class="wrapper flex items-center head-flex">
                        <h2 class="white-head head product"></h2>
                        <div class="number-card">
                            <p class="number"></p>
                            <p class="number-of"></p>
                        </div>
                        <div class="button flex-between items-center">
                            <a class="prev buttonArrow" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
                                    <path d="M49.6464 19.6464C49.4512 19.8417 49.4512 20.1583 49.6464 20.3535L52.8284 23.5355C53.0237 23.7308 53.3403 23.7308 53.5355 23.5355C53.7308 23.3403 53.7308 23.0237 53.5355 22.8284L50.7071 20L53.5355 17.1716C53.7308 16.9763 53.7308 16.6597 53.5355 16.4645C53.3403 16.2692 53.0237 16.2692 52.8284 16.4645L49.6464 19.6464ZM150 19.5L50 19.5L50 20.5L150 20.5L150 19.5Z" fill="white"/>
                                </svg>
                            </a>
                            <a class="next buttonArrow" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
                                    <path d="M150.354 19.6464C150.549 19.8417 150.549 20.1583 150.354 20.3535L147.172 23.5355C146.976 23.7308 146.66 23.7308 146.464 23.5355C146.269 23.3403 146.269 23.0237 146.464 22.8284L149.293 20L146.464 17.1716C146.269 16.9763 146.269 16.6597 146.464 16.4645C146.66 16.2692 146.976 16.2692 147.172 16.4645L150.354 19.6464ZM50 19.5L150 19.5L150 20.5L50 20.5L50 19.5Z" fill="white"/>
                                </svg>
                            </a>
                            <span class="pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
                                    <path d="M27.343 20.8605L21.3277 24.4541C21.3277 24.4541 19.2017 25.5106 15.8861 24.0818L8.44505 22.1248C7.3736 21.8477 6.73242 20.7219 7.01083 19.6309C7.23861 18.7043 8.05696 18.0895 8.94281 18.0895C9.11154 18.0895 9.27183 18.1068 9.44057 18.1588L14.1482 19.397L7.26392 7.15266C6.88428 6.47723 7.11207 5.61129 7.77012 5.22162C7.98947 5.09172 8.2257 5.03111 8.45348 5.03111C8.92593 5.03111 9.38995 5.28223 9.65148 5.74118L14.0638 13.5866C14.241 13.8983 14.6206 14.0022 14.9244 13.8204C15.2196 13.6386 15.3293 13.2489 15.1521 12.9371L14.106 11.084C13.7264 10.4086 13.9541 9.54265 14.6122 9.15298C14.8315 9.02309 15.0678 8.96248 15.2956 8.96248C15.768 8.96248 16.232 9.2136 16.4936 9.67255L17.565 11.569C17.7253 11.8461 18.0712 11.9413 18.3412 11.7768C18.6111 11.6123 18.7039 11.2572 18.5437 10.9801L17.7759 9.61193C17.3963 8.9365 17.6241 8.07056 18.2821 7.68088C18.5015 7.55099 18.7377 7.49038 18.9655 7.49038C19.4464 7.49038 19.9019 7.7415 20.1635 8.20045L21.5218 10.6078C21.6736 10.8762 22.0027 10.9628 22.2558 10.7983C22.5004 10.6424 22.5848 10.3133 22.4414 10.0622L21.7749 8.87588C21.3952 8.20045 21.623 7.33451 22.2811 6.94484C22.5004 6.81494 22.7366 6.75433 22.9729 6.75433C23.4453 6.75433 23.9093 7.00545 24.1624 7.4644L28.1782 14.5997C28.1698 14.6084 30.2452 17.6046 27.343 20.8605Z" fill="white"/>
                                    <path d="M7.28084 10.0016C7.15429 10.348 6.74933 10.5038 6.43718 10.3133C5.14638 9.54265 4.31116 8.09654 4.31116 6.52918C4.31116 4.12187 6.21783 2.16485 8.5632 2.16485C10.9086 2.16485 12.8152 4.12187 12.8152 6.52918C12.8152 6.55516 12.8152 6.58114 12.8152 6.60712C12.8068 6.97947 12.4778 7.25657 12.1234 7.19596C11.8366 7.144 11.6341 6.88422 11.6341 6.5898C11.6341 6.57248 11.6341 6.55516 11.6341 6.53784C11.6341 4.79731 10.259 3.38582 8.5632 3.38582C6.86745 3.38582 5.49228 4.79731 5.49228 6.52918C5.49228 7.65491 6.09128 8.70269 7.02774 9.2569C7.2724 9.41276 7.39051 9.7245 7.28084 10.0016Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <hr>
                    <div class="product-img products" id="product'.$i.'">
                        <div class="flex-between slider-container">';

                        $directory = 'img/image' . '/' . $i; // Шлях до зображень

                        // Отримати всі зображення
                        $files = scandir($directory);

                        foreach ($files as $file) {
                            $extension = pathinfo($file, PATHINFO_EXTENSION);
                            $allowed_extensions = array('jpg', 'jpeg', 'png', 'gif', "webp");
                            if (in_array(strtolower($extension), $allowed_extensions)) {
                                // Виведення зображення
                                echo '<picture class="image"><img src="' . $directory . "/" . $file . '" alt="' . $file . '" loading="lazy" /></picture>';
                            }
                        }
                        echo '</div>
                    </div>
                    <div class="count-price_block flex">
                        <div class="count flex">
                            <p>залишок - 
                                <p class="blue-text remainder"></p>
                            </p>
                        </div>
                        <div class="price-card">
                            <p>ціна - 
                                <span class="blue-text"></span>
                                <span class="full-price-card"></span>
                            </p>
                        </div>
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
                                <p class="article-id"></p>
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
                                <p class="country-name"></p> 
                            </div>
                            <div class="description">
                                <p class="haracteristic-name">опис:</p>   
                                <p class="text-descript"></p>
                            </div>
                        </div>
                    </div>
                    <div class="flex cta-submit add-to-cart">
                        <a class="text-style gradient cart-cta" href="#cart">купити</a>
                    </div>
                </form>
            </div>
        </div>';
}
?>



<!-- 
// $directory = 'img/image'; // Direction of images

// // Get all images
// $folders = scandir($directory);
// $folderCount = 0;
// // $images = [];
// foreach ($folders as $folder) { 
//     $files = scandir($directory . "/" . $folder);
//     // var_dump($folder);
//     // die;
//     if($folder != "." && $folder != ".." ) {
//         $folderCount++;
//         foreach ($files as $file) {
//             $extension = pathinfo($file, PATHINFO_EXTENSION);
//             $allowed_extensions = array('jpg', 'jpeg', 'png', 'gif');
            
//             if (in_array(strtolower($extension), $allowed_extensions)) {
        
//                 // Show image -->
<!-- //                 echo '<img src="' . $directory . "/" . $folder . '/' . $file . '" alt="' . $file . '" loading="lazy" />'; -->
<!-- //             }
//         }
//     }
// }

// ?> -->