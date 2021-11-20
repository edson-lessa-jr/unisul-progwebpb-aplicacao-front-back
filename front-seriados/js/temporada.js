var temporadaInsert = {
    "id": 0,
    "numero": 0,
    "descricao": "",
    "dataLancamento": "",
    "seriadoId":0

}
var temporadaRead = {
    "id": 0,
    "numero": 0,
    "descricao": "",
    "dataLancamento": "",
    "seriado": {
        "id":0,
        "nome": ""
    }

}

const urlPostTemporada=""

function cadastroTemporada() {

    temporadaInsert.numero = $("#idTemporada").val();
    temporadaInsert.descricao = $("#descricaoTemporada").val();
    temporadaInsert.dataLancamento = $("#descricaoTemporada").val();
    temporadaInsert.seriadoId = $("#seriadoTemporada").val();

    /*    console.log(seriado);
        console.log(JSON.stringify(seriado));*/
    $.ajax({
        url: urlPostTemporada,
        type: "POST",
        contentType: contentTypePadrao,
        crossDomain: true,
        cache: false,
        data: JSON.stringify(temporadaInsert),
        timeout: 5000,
        success: function (data) {
            setTimeout(function () {
                $("#msgFormulario").text(data.mensagem).toggleClass("esconder");
            }, 5000)
            $("#msgFormulario").toggleClass("esconder");
            $("#cadTemporada").addClass("esconder");
            $("#wait").toggleClass("esconder");
        },
        beforeSend: function () {
            $("#wait").toggleClass("esconder");
        },
        error: function (data) {

            setTimeout(function () {
                $("#msgFormulario").text("Erro no cadastro do temporada").toggleClass("esconder").toggleClass("mensagensErro");
            }, 5000)
            $("#msgFormulario").toggleClass("mensagensErro").toggleClass("esconder");
            $("#wait").toggleClass("esconder");
        }
    })
}

function carregarSeriadoNoCombo() {
    
}