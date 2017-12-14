/*loader*/
var time;

function splash() {
  time = setTimeout(showPage, 3000);
}

function showPage() {
  $("#loader").addClass('hidden');
  $("#content").removeClass('hidden').addClass('show');
} 

/*document*/
$(document).ready(function(){

/*habilitar boton next numero*/
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

/*habilitar boton next codigo*/
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

/*habilitar boton next send*/
   $("#name,#email").keydown(function(){
   var name = $("#name").val();
   var email = $("#email").val();
   for (var i = 0; i < 1; i++){
    if (name.length != "" && email.length != ""){
     $("#paso4").removeAttr("disabled")
    }else{
     $("#paso4").attr("disabled","disabled")
    };
   };
  });


/*botones next*/
  $("#paso1").click(function(){
   $('#inicio').addClass('hidden');
   $('#signup').removeClass('hidden');
  });

  $("#paso2").click(function(){
   var number = $("#phone").val();
   $('#signup').addClass('hidden');
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

/*botones code*/
 $("#code,#resend").click(function(){
   var code = "";
   var str = "123456789";
   for (var i = 0; i < 3; i++){
    code += str.charAt(Math.floor(Math.random() * str.length));
   };
    alert("Tu código es LAB " + code);
 });

/*botones back*/
  $("#back1").click(function(){
   $('#signup').addClass('hidden');
   $('#inicio').removeClass('hidden');
  });

  $("#back2").click(function(){
   $('#verify').addClass('hidden');
   $('#signup').removeClass('hidden');
  });

  $("#back3").click(function(){
   $('#laststep').addClass('hidden');
   $('#verify').removeClass('hidden');
  });

  $("#back4").click(function(){
   $('#listo').addClass('hidden');
   $('#laststep').removeClass('hidden');
  });



});//ready

