<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Замовлення успішно прийняте</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
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
            <h2>Ви успішно оформили замовлення!</h2><img src="img/галочка.svg" alt="" />
            <p>Ми звʼяжемося з Вами найближчим часом для підтвердження замовлення.</p>
            <a class="btn-style-one gradient" href="index.php">на головну</a>
        </div>
    </div>
</body>

</html>