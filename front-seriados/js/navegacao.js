$(document).ready(function () {
    $("#abrirFormularioCdastroSeriado").click(function (){
        $("#cadSeriado").removeClass("esconder");
        $("#idSeriado").prop("disabled", true);
    });
    $("#btnSalvarSeriado").click(function (){
        cadastroSeriado();
    })
})