const descripcions= document.querySelector("descripcion");

descripcion.addEventListener( "blur",function(evento){
    const campo=evento.target;
    const valorCampo=evento.target.value;


    if (valorCampo.length===0) {
        campo.classList.add("is-invalid");
    } else {
        campo.classList.remove("is-invalid");
    }
})