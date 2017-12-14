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

/*botones next*/
  $("#paso1").click(function(){
   $('#inicio').addClass('hidden');
   $('#singup').removeClass('hidden');
  });

  $("#paso2").click(function(){
   $('#singup').addClass('hidden');
   $('#verify').removeClass('hidden');
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
    alert(code);
 });



});//ready

