const descripcion_id=document.getElementById("descripcion");
const usuario_id=document.getElementById("usuario");

descripcion_id.addEventListener( "blur",function(evento){
    const campo=evento.target;
    const valorCampo=evento.target.value;

    if (valorCampo.length===0) {
        campo.classList.add("is-invalid");
    } else {
        campo.classList.remove("is-invalid");
    }
})

