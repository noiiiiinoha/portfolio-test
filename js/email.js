// js/email.js

document.addEventListener('DOMContentLoaded', function() {
  // index.html側の処理
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          // デフォルトのフォーム送信をキャンセル
          event.preventDefault();

          // フォームの入力値を取得
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          // データをlocalStorageに保存
          localStorage.setItem('name', name);
          localStorage.setItem('email', email);
          localStorage.setItem('message', message);

          // 確認画面に遷移
          window.location.href = 'confirm.html';
      });
  }

  // confirm.html側の処理
  const confirmData = document.getElementById('confirm-data');
  if (confirmData) {
    
    // localStorageからデータを取得
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    // データを表示
    confirmData.innerHTML = `
        <p>お名前: ${name}</p>
        <p>メールアドレス: ${email}</p>
        <p>お問い合わせ内容: ${message}</p>
    `;

    // hidden inputに値をセット
    document.getElementById('confirm-name').value = name;
    document.getElementById('confirm-email').value = email;
    document.getElementById('confirm-message').value = message;

    // 修正するボタンの処理
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html#contact';
    });
  }
});
