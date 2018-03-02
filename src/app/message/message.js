module.exports = {
  exec: () => {
    console.log('message');
    $(document).ready(() => {
      $('#submit').click(() => {
        // $('#message-form').submit();
        alert('メッセージ送信機能は未実装です');
      });
    });
  }
};
