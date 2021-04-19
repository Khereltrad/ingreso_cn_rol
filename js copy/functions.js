
function Validate() {

   var Nick       =$('#inputnick').val();
   var Name       =$('#inputname').val();
   var Lastname   =$('#inputlastname').val();
   var Email      =$('#inputemail').val();
   var Password   =$('#inputPassworda').val();

   let expregnom  =/^([A-Z]{1}[a-z\-\']+[\s]{1}[A-Z]{1}[a-z\-\']*)/;    //* Expresion regular para [ Nombre Apellido]


   if(Nick.length < 3 || Nick.length > 10){showError('#inputnick','El Nickname tiene que tener entre 3 a 10 caracteres')}
   if(!Nick.match("^[A-Z]{1}[a-z0-9]+$")){showError('#inputnick','Favor el nick creado no puede poseer espacio e inicie con Mayuscula')}

   if(!Name.match('^[A-Z]{1][a-z]+$')){showError('#inputname','Ingrese el nombre iniciando con mayuscula y sin números')}
   if(!Lastame.match('^[A-Z]{1][a-z]+$')){showError('#inputlastname','Ingrese el apellido iniciando con mayuscula y sin números')}

   if(!Email.match("^\\S+@\\S+\\.\\S+$")){showError('#inputemail','Recuerde que un e-mail no inicia con valores ni debe poseer los caracteres \ ()')}

   if(Password.length <6 ||Password=="123456"||Password=="098765"||Password =="987654"){showError('#inputPassworda','Favor ingrese una contraseña de igual o mayor a 6 digitos y que no sea las obvias 123456 o 987654 o 098765')}

   $('#inputname').on('change',function() {let Name =$('#inputname').val();if(expregnom.test(Name)==true){$('.alert').html(``);$(this).removeClass('text-danger');}else {$(this).addClass('text-danger');showError(this,'Ingrese el nombre iniciando con mayuscula y sin números')}});
};

function showError(sec,msg){
   
   $('.alert').html(`<span>${msg}</span>`);
   $(`sec`).focus();
   $('alert').alert('dispose');
};