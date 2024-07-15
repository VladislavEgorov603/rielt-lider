<?php
$tg_bot_token = "6133863138:AAEUrMoaXy5OEnvVBZga_h9ApQ3ZIiZH4M4";
$chat_id = "-1001828289030";

$text = "Новая заявка!\n";

$text .= "\nИмя: " . $_POST["name"];
$text .= "\nТелефон: " . $_POST["phone"];

if ($_POST["offer"] != NULL) {
    $text .= "\n\nМенеджер: " . $_POST["agent"];
    $text .= "\nКод объекта: " . $_POST["objectID"];
    $text .= "\nОбъявление: " . $_POST["offer"];
}

if ($_POST["services"] != NULL) {
    $text .= "\n\nВыбранные услуги: ";

    for ($i=0; $i < count($_POST["services"]); $i++) { 
        $text .= "\n- " . $_POST["services"][$i];
    }
}

if ($_POST["vacancy"] != NULL) {
    $text .= "\n\nВыбранные вакансии: ";

    for ($i=0; $i < count($_POST["vacancy"]); $i++) { 
        $text .= "\n- " . $_POST["vacancy"][$i];
    }
}

$text .= "\n\nДата: " . date('d.m.y');
$text .= "\nВремя: " . date('H:i');

$response = array(
    'chat_id' => $chat_id,
    'text' => $text
);

$ch = curl_init('https://api.telegram.org/bot' . $tg_bot_token . '/sendMessage');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $response);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_exec($ch);
curl_close($ch);
