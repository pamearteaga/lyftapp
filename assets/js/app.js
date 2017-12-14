//loader
var time;

function splash() {
  time = setTimeout(showPage, 3000);
}

function showPage() {
  $("#loader").addClass('hidden');
  $("#content").removeClass('hidden').addClass('show');
} 

// id inicio singup verify laststep listo


$(document).ready(function(){

   $("#phone").keydown(function(){
   var number = $(this).val();
   for (var i = 0; i < 1; i++){
    if (number.length == 9){
     $("#paso2").removeAttr("disabled")
    }else{
     $("#paso2").attr("disabled","disabled")
    };
   };
 });

   $("#insertCode").keydown(function(){
   var number = $(this).val();
   for (var i = 0; i < 1; i++){
    if (number.length == 2){
     $("#paso3").removeAttr("disabled")
    }else{
     $("#paso3").attr("disabled","disabled")
    };
   };
 });


/*botones next*/
  $("#paso1").click(function(){
   $('#inicio').addClass('hidden');
   $('#singup').removeClass('hidden');
  });

  $("#paso2").click(function(){
   var number = $("#phone").val();
   $('#singup').addClass('hidden');
   $('#verify').removeClass('hidden');
   $('#text-number').append('<p class="margin">' + 'Enter the code send to ' + number + '</p>');
  });

  $("#paso3").click(function(){
   $('#verify').addClass('hidden');
   $('#laststep').removeClass('hidden');
  });

  $("#paso4").click(function(){
   $('#laststep').addClass('hidden');
   $('#listo').removeClass('hidden');
  });

 $("#code,#resend").click(function(){
   var code = "";
   var str = "123456789";
   for (var i = 0; i < 3; i++){
    code += str.charAt(Math.floor(Math.random() * str.length));
   };
    alert("Tu código es LAB " + code);
 });




});//ready

