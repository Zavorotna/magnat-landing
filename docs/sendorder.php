<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Замовлення успішно прийняте</title>
    <link rel="stylesheet" href="css/styles.css">
    <script>
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '373450575098587');
        fbq('track', 'Lead');
    </script>
</head>

<body>
    <div class="bg-order-popup">
        <a class="to-main" href="index.html"></a>
        <div class="orders-successful">
            <h2>ви успішно оформили замовлення!</h2><img src="img/галочка.svg" alt="" />
            <p>Ми звʼяжемося з вами найближчим часом для підтвердження замовлення.</p>
            <a class="btn-style-one gradient" href="index.php">на головну</a>
        </div>
    </div>
</body>

</html>

<?php

try {
    $userPhone = $_POST["userPhone"];
    $userName = $_POST["userName"];
    $phpObject = json_decode($_POST["orderProducts"]);

} catch (\Throwable $th) {
    $userPhone = "ERROR IN MESSAGE";
    $userName = "ERROR IN MESSAGE";
}

// $token = "6955843433:AAHq4PsIKlhlh9ED95MXctOJxMHziCney1Y"; // api телеграм бота
// $chat_id = "-1001904336913";
$token = "6502486274:AAFqSGBvtvutHB8be-wTlsK3ETbssmLSEWo"; // api телеграм бота
$chat_id = "1066741091";


$userPhone = urlencode("$userPhone");
$userName = urlencode("$userName");
$textObj = '';
if (isset ($phpObject->head) && isset ($phpObject->saleprice) && isset ($phpObject->color) && isset($phpObject->size)) {
    $productSize = $phpObject->size;
    $productName = $phpObject->head;
    $productPrice = $phpObject->saleprice;
    $productColor = $phpObject->color;
    $inputString = $productColor;

    // Розбиваємо рядок по двокрапці
    $parts = explode(':', $inputString);

    // Отримуємо другий елемент розділеного рядка (значення кольору)
    $colorValue = end($parts);
    // Видаляємо непотрібні символи (пробіли, коми, лапки)
    $colorValue = trim($colorValue, '{}"');
    // Додати інформацію про товар до тексту повідомлення з тегами форматування
    $textObj = "Товар: <b>$productName</b>, Розмір: <b>$productSize</b>, Колір: <b>$colorValue</b>, Ціна: <b>$productPrice</b>%0A%0A";
} else {
    $textObj = "ERROR IN PRODUCT DATA";
}

// Оновлений фрагмент коду для відправки повідомлення з використанням HTML-підтримки
$urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" .
    "<b>Замовлення</b>%0A%0A" .
    "Номер покупця: <b>$userPhone</b>%0A" . "%0A" .
    "Ім'я покупця: <b>$userName</b>%0A" . "%0A" .
    "$textObj";

// Додано параметр parse_mode=HTML
$urlQuery .= "&parse_mode=HTML";

$result = file_get_contents($urlQuery);

?>