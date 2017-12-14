//loader
var time;

function splash() {
  time = setTimeout(showPage, 3000);
}

function showPage() {
  $("#loader").addClass('hidden');
  $("#content").removeClass('hidden').addClass('show');
}
