var seriado = {
    "id": 0,
    "nome": "",
    "dataLancamento": "",
    "descricao": ""

}

const urlPostSeriado = "http://progwebpb-seriados.mocklab.io/seriado/";

function cadastroSeriado() {

    seriado.nome = $("#nomeSeriado").val();
    seriado.dataLancamento = $("#dtLancamentoSeriado").val();
    seriado.descricao = $("#descricaoSeriado").val();

    /*    console.log(seriado);
        console.log(JSON.stringify(seriado));*/
    $.ajax({
        url: urlPostSeriado,
        type: "POST",
        contentType: "application/json; charset=utf8",
        crossDomain: true,
        cache: false,
        data: JSON.stringify(seriado),
        timeout: 5000,
        success: function (data) {
            $("#msgFormulario").text(data.mensagem).toggleClass("esconder");
            $("#cadSeriado").addClass("esconder");
            $("#wait").toggleClass("esconder");
        },
        beforeSend: function (){
            $("#wait").toggleClass("esconder");
        },
        error: function (data){
            $("#msgFormulario").text("Erro no cadastro do seriado").toggleClass("esconder").toggleClass("mensagensErro");
            $("#wait").toggleClass("esconder");
        }
    })
}