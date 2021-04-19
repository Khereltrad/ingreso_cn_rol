Log-in con permisos

Concepto :
El proyecto muestra simplemente que se puede crear accesos a áreas o paginas si se tiene el permiso necesario

Se ingresa por /login - 

   pedirá un email y contraseña que de no existir se necesitará ir al registro.

En el registro no está con validaciones,
... está solo para poder generar una mini base de datos y el primer usuario que se agrega queda como admin, los demas obtienen el rol de usuarios

Al ingresar ...

-  En el lado derecho del navbar podras ver y notar si eres usuario o admin segun cual cuenta se haya logeado
-  Si eres admin puedes entrar a una pagina oculta por la ruta /admin
-  Al no ser admin e intentar ingresar a la ruta /admin ... serás redirigido al /login
