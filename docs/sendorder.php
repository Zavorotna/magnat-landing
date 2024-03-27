
<?php
if($_POST) {

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
        $textObj = "Форма відправлена без обраного товару";
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

    header("Location: success.php");
    exit();
}

?>