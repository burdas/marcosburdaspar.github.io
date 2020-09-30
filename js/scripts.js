$(document).ready(function () {
    $("#cambiarTema").click(cambiarTema);
    $('#formularioContacto').submit(enviarCorreo);
});

function cambiarTema() {
    if ($("#Claro").length) {
        $("#Claro").remove();
        $('head').append('<link id="Oscuro" href="css/bootstrapDark.min.css" rel="stylesheet">');   
        $("#cambiarTema").html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-asterisk" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/></svg>');
    } else {
        $("#Oscuro").remove();
        $('head').append('<link id="Claro" href="css/bootstrapLight.min.css" rel="stylesheet">');
        $("#cambiarTema").html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/></svg>');
    }
}

function enviarCorreo(e) {
    e.preventDefault();

    var correo = $("#email").val();
    var asunto = $("#asunto").val();
    var mensaje = $("#mensaje").val();

    console.log(correo);
    console.log(asunto);
    console.log(mensaje);

    Email.send({
        SecureToken : "c5288edb-a8df-44b5-b647-64e3b8d9faff",
        To : 'burdasparmarcos@gmail.com',
        From : 'burdastest@gmail.com',
        Subject : asunto,
        Body : correo + "<br/>" + mensaje
    }).then(function (respuesta) {
        console.log(respuesta);
        console.log(typeof(respuesta));
        console.log(respuesta.localeCompare("OK"));
        if (respuesta.localeCompare("OK") == 0) {
            $("#alertExito").toggle();
        } else {
            $("#alertError").toggle();
        }
    }
    );
}