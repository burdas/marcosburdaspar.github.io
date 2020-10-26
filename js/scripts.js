$(document).ready(function () {
    $('#formularioContacto').submit(enviarCorreo);
    $(".linkCompetencias").click(clickCompetencia);
    setTimeout(() => {
        $(".mensajeEnviarMensaje").addClass("animate__fadeOutRightBig");
    }, 2000);
});

function clickCompetencia(e) {
    e.preventDefault();
    $(this).children('svg').toggle();
}

function enviarCorreo(e) {
    e.preventDefault();

    var correo = $("#email").val();
    var asunto = $("#asunto").val();
    var mensaje = $("#mensaje").val();

    console.log(correo);
    console.log(asunto);
    console.log(mensaje);

    $('#modalEnviarMensaje').modal('toggle');

    Email.send({
        SecureToken: "c5288edb-a8df-44b5-b647-64e3b8d9faff",
        To: 'burdasparmarcos@gmail.com',
        From: 'burdastest@gmail.com',
        Subject: asunto,
        Body: correo + "<br/>" + mensaje
    }).then(function (respuesta) {
        let $alert = ((respuesta.localeCompare("OK") == 0) ? $('#alertGood') : $('#alertBad'));
        $alert.toggle();
        setTimeout(() => {
            $alert.removeClass('animate__fadeInRight');
            $alert.addClass('animate__fadeOutRight');
        }, 5000);
    }
    );
}