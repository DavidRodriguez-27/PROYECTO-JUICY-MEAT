/*  comentario */

  //arreglo cambiar fotos
  var lista = new Array ("../imgs/banner04.png","../imgs/banner01.jpg","../imgs/banner08.jpg","../imgs/banner09.jpg");
  var c =0;
  function cambiarbanner () {
   var img = document.getElementById ("imgbaner");
   c++;
   if (c>=lista.length)
   c =0;
   img.src=lista [c];
   setTimeout ("cambiarbanner ()",3000); }

    //llamado de la funcion 
  document.body.setAttribute ("onload","cambiarbanner ();")
