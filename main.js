function msg() {
    alert("Thank you for your order. We will send a confirmation email very soon with payment details. Now relax and have a coffee while waiting for our delicious bread");
  }
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})