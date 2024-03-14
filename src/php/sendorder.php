<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="bg-order-popup">
        <a class="to-main" href="index.html"></a>
        <div class="orders-successful">
            <h2>ви успішно оформили замовлення!</h2>
            <p>Ми звʼяжемося з вами найближчим часом для підтвердження замовлення.</p>
            <a class="btn-style-one" href="index.html">на головну</a>
        </div>
    </div>
</body>
</html>

<?php

try {
    $userPhone =  $_POST["userPhone"];
    $userName =  $_POST["userName"];
    $phpObject = json_decode($_POST["orderProducts"]);

} catch (\Throwable $th) {
    $userPhone = "ERROR IN MESSAGE";
    $userName = "ERROR IN MESSAGE";
}

$token = "6955843433:AAHq4PsIKlhlh9ED95MXctOJxMHziCney1Y"; // api телеграм бота
$chat_id = "-1001904336913";
// $token = "6502486274:AAFqSGBvtvutHB8be-wTlsK3ETbssmLSEWo"; // api телеграм бота
// $chat_id = "1066741091";


$userPhone = urlencode("$userPhone");
$userName = urlencode("$userName");
$textObj = '';
if (isset($phpObject->head) && isset($phpObject->saleprice) && isset($phpObject->size) && isset($phpObject->color)) {
    $productName = $phpObject->head;
    $productPrice = $phpObject->saleprice;
    $productSize = $phpObject->size;
    $productColor = $phpObject->color;

    // Додати інформацію про товар до тексту повідомлення з тегами форматування
    $textObj = "Товар: <b>$productName</b>, Розмір: <b>$productSize</b>, Колір: <b>$productColor</b>, Ціна: <b>$productPrice</b>%0A%0A";
} else {
    $textObj = "ERROR IN PRODUCT DATA";
}

// Оновлений фрагмент коду для відправки повідомлення з використанням HTML-підтримки
$urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . 
    "<b>Замовлення</b>%0A%0A".
    "Номер покупця:<b>$userPhone</b>%0A". "%0A".
    "Ім'я покупця:<b>$userName</b>%0A". "%0A".
    "$textObj";

// Додано параметр parse_mode=HTML
$urlQuery .= "&parse_mode=HTML";

$result = file_get_contents($urlQuery);

?>



