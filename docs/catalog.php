<?php
// Отримання JSON даних
$json_data = file_get_contents('products.json');
$data = json_decode($json_data, true); // декодуємо JSON у масив PHP

// Вивід блоків з інформацією
for($i=1; $i <= count($data); $i++) {
    echo '<div class="card">   
            <div class="img-card">
                <p class="flag"></p>
                <picture class="hover-img">';
                    $directory = 'img/image' . '/' . $i; // Шлях до зображень

                    // Отримати перше зображення з папки
                    $first_image = glob($directory . "/*.{jpg,jpeg,png,gif,webp}", GLOB_BRACE)[0];
                    if ($first_image) {
                        // Виведення першого зображення
                        echo '<img src="' . $first_image . '" alt="' . basename($first_image) . '" loading="lazy"/>';
                    }
                echo '</div>
            <p class="name-card text-style"></p>
            <div class="price-card flex items-center">
                <p class="sale-price blue-text">
                    <p class="price"></p>
                </p>
            </div>
            <div class="size-card flex"></div>
            <a href="#cart" class="cta cta-card gradient text-style cart-cta">купити</a> 
        </div>';

}
?>
