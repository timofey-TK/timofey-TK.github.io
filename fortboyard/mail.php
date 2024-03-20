 <?php
$to = "yourmail@gmail.com"; // емайл получателя данных из формы
$tema = "Форма обратной связи на Fortboyard"; // тема полученного емайла
$message = "Номер телефона: ".$_POST['phone']."<br>"; //полученное
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>
