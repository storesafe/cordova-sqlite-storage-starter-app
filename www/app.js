function showNativeAlert() {
  navigator.notification.alert('Native alert message');
}

document.addEventListener('deviceready', function() {
  $('#show-alert').click(showNativeAlert);
});
