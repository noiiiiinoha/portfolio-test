<!-- メール送信処理を行う send.php、このファイルは、サーバーサイドで実行されるPHPファイルです。 confirm.html から送信されたデータを受け取り、メールを送信する処理を記述します。-->
<?php
// send.php

// エラーメッセージを格納する変数
$errors = [];

// フォームから送信されたデータを取得
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// バリデーション（簡易的な例）
if (empty($name)) {
    $errors[] = 'お名前は必須です。';
}
if (empty($email)) {
    $errors[] = 'メールアドレスは必須です。';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'メールアドレスの形式が正しくありません。';
}
if (empty($message)) {
    $errors[] = 'お問い合わせ内容は必須です。';
}

// エラーがある場合はエラーメッセージを表示して終了
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p style='color: red;'>{$error}</p>";
    }
    exit;
}

// お問い合わせ先のメールアドレス
$to = 'noiiii@ymail.com'; // ここにお問い合わせ先のメールアドレスを設定してください

// 件名
$subject = 'お問い合わせがありました';

// 本文
$body = "お名前: {$name}\n";
$body .= "メールアドレス: {$email}\n";
$body .= "お問い合わせ内容:\n{$message}\n";

// 送信元メールアドレス（From）
$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";

// メール送信（お問い合わせ先へ）
$sendResult = mail($to, $subject, $body, $headers);

// 送信者のメールアドレスにも送信する場合
$to_sender = $email;
$subject_sender = 'お問い合わせありがとうございます';
$body_sender = "この度は、お問い合わせいただきありがとうございます。\n\n";
$body_sender .= "お問い合わせ内容は以下の通りです。\n\n";
$body_sender .= "お名前: {$name}\n";
$body_sender .= "メールアドレス: {$email}\n";
$body_sender .= "お問い合わせ内容:\n{$message}\n";
$headers_sender = "From: {$to}\r\n";
$headers_sender .= "Reply-To: {$to}\r\n";

// メール送信（送信者へ）
$sendResult_sender = mail($to_sender, $subject_sender, $body_sender, $headers_sender);

// 送信結果の確認
if ($sendResult && $sendResult_sender) {
    echo "<p>お問い合わせありがとうございました。送信完了しました。</p>";
} else {
    echo "<p style='color: red;'>メールの送信に失敗しました。</p>";
}
?>
