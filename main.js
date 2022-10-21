function enviarSaludo(){
  const $saludo = document.getElementById("saludo");
  const $nombre = document.getElementById("nombre").value;
  const $apellido = document.getElementById("apellido").value;

  if ($nombre === "" || $apellido === "") {
    $saludo.classList.remove("confirm");
    $saludo.classList.add("alert");
    $saludo.innerHTML = 'Complete los espacios del formulario solicitados';
  } else {
    $saludo.classList.add("alert");
    $saludo.classList.add("confirm");
    $saludo.innerHTML = `Hola ${$nombre} ${$apellido},  gracias por rellenar el formulario de LarnU`
  }
}

