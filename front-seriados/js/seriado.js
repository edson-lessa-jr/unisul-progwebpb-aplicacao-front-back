var seriado = {
    "id": 0,
    "nome": "",
    "dataInicio": "",
    "descricao": ""

}

const urlPostSeriado = "http://localhost:9091/seriado/";
const urlPutSeriado = "http://localhost:9091/seriado/";
const urlDeleteSeriado = "http://localhost:9091/seriado/";

function cadastroSeriado() {

    seriado.nome = $("#nomeSeriado").val();
    seriado.dataInicio = formatarData($("#dtLancamentoSeriado").val());
    seriado.descricao = $("#descricaoSeriado").val();

    /*    console.log(seriado);
        console.log(JSON.stringify(seriado));*/
    $.ajax({
        url: urlPostSeriado,
        type: "POST",
        contentType: contentTypePadrao,
        crossDomain: true,
        cache: false,
        data: JSON.stringify(seriado),
        timeout: 5000,
        success: function (data) {
            setTimeout(function () {
                $("#msgFormulario").text(data.mensagem).toggleClass("esconder");
            }, 5000)
            $("#msgFormulario").toggleClass("esconder");
            $("#cadSeriado").addClass("esconder");
            $("#wait").toggleClass("esconder");
        },
        beforeSend: function () {
            $("#wait").toggleClass("esconder");
        },
        error: function (data) {

            setTimeout(function () {
                $("#msgFormulario").text("Erro no cadastro do seriado").toggleClass("esconder").toggleClass("mensagensErro");
            }, 5000)
            $("#msgFormulario").toggleClass("mensagensErro").toggleClass("esconder");
            $("#wait").toggleClass("esconder");
        }
    })
}

function acaoLinha() {
    $("tbody tr").click(function () {
        let idSeriado = $(this).find(".numero").text();
        let valorStorage = JSON.parse(sessionStorage.getItem("seriado"));
        for (let i = 0; i < valorStorage.length; i++) {
            if (valorStorage[i].id == idSeriado) {
                seriado = valorStorage[i];
                break;
            }
        }
        $("#listaSeriados,#cadSeriado").toggleClass("esconder");
        $("#idSeriado").val(seriado.id);
        $("#nomeSeriado").val(seriado.nome);
        $("#dtLancamentoSeriado").val(formartarDataUS(seriado.dataInicio));
        $("#descricaoSeriado").val(seriado.descricao);
        $("#btnSalvarSeriado").hide();
        $(".botaoExcluir, .alterar").show();
    });
}
function limparFormulario(){
    $("#idSeriado").val("");
    $("#nomeSeriado").val("");
    $("#dtLancamentoSeriado").val("");
    $("#descricaoSeriado").val("");
}
function listarSeriados(combo) {
    $.ajax({
        url: urlPostSeriado,
        type: "GET",
        contentType: contentTypePadrao,
        crossDomain: true,
        timeout: 5000,
        cache: false,
        success: function (data) {
            $("#detalheListaSeriado > table > tbody").empty();
            sessionStorage.setItem("seriado", JSON.stringify(data));
            $.each(data, function (indice, valor) {
                    if (combo == true) {
                        a
                    } else {
                        let linha = "" +
                            "<tr>\n " +
                            "<td class=\"numero\">" + valor.id + "</td>\n" +
                            "<td>" + valor.nome + "</td>\n" +
                            "<td>" + valor.dataInicio + "</td>" +
                            "</tr>";
                        $("#detalheListaSeriado > table > tbody").append(linha);
                    }
                }
            );
            $("#listaSeriados").removeClass("esconder");
            $("#wait").toggleClass("esconder");
            acaoLinha();
        },
        beforeSend: function () {
            $("#wait").toggleClass("esconder");
        },
        error: function (data) {

            setTimeout(function () {
                $("#msgFormulario").text("Erro no cadastro do seriado").toggleClass("esconder").toggleClass("mensagensErro");
            }, 5000)
            $("#msgFormulario").toggleClass("mensagensErro").toggleClass("esconder");
            $("#wait").toggleClass("esconder");
        }
    })
}

function estadoInicial() {
    limparFormulario();
    $(".botaoExcluir, .alterar").hide();
    $("#btnSalvarSeriado").show();
}

function alterarSeriado() {
    seriado.id = $("#idSeriado").val();
    seriado.nome = $("#nomeSeriado").val();
    seriado.dataInicio = formatarData($("#dtLancamentoSeriado").val());
    seriado.descricao = $("#descricaoSeriado").val();

    $.ajax({
        url: urlPutSeriado + seriado.id,
        type: "PUT",
        contentType: contentTypePadrao,
        crossDomain: true,
        cache: false,
        data: JSON.stringify(seriado),
        timeout: 5000,
        success: function (data) {
            $("#msgFormulario").text(data.mensagem).toggleClass("esconder");
            setTimeout(function () {
                $("#msgFormulario").toggleClass("esconder");
            }, 5000)
            $("#cadSeriado").addClass("esconder");
            estadoInicial();
            $("#wait").toggleClass("esconder");


        },
        beforeSend: function () {
            $("#wait").toggleClass("esconder");
        },
        error: function (data) {
            $("#msgFormulario").text("Erro na alteração do seriado").toggleClass("esconder").toggleClass("mensagensErro");
            setTimeout(function () {
                $("#msgFormulario").toggleClass("mensagensErro").toggleClass("esconder");
            }, 5000)

            $("#wait").toggleClass("esconder");
        }
    })
}

function excluirSeriado() {
    seriado.id = $("#idSeriado").val();

    $.ajax({
        url: urlDeleteSeriado + seriado.id,
        type: "DELETE",
        contentType: contentTypePadrao,
        crossDomain: true,
        cache: false,
        timeout: 5000,
        success: function (data) {
            $("#msgFormulario").text(data.mensagem).toggleClass("esconder");
            setTimeout(function () {
                $("#msgFormulario").toggleClass("esconder");
            }, 5000)
            $("#cadSeriado").addClass("esconder");
            $("#wait").toggleClass("esconder");
            estadoInicial();
        },
        beforeSend: function () {
            $("#wait").toggleClass("esconder");
        },
        error: function (data) {

            setTimeout(function () {
                $("#msgFormulario").text("Erro no cadastro do seriado").toggleClass("esconder").toggleClass("mensagensErro");
            }, 5000)
            $("#msgFormulario").toggleClass("mensagensErro").toggleClass("esconder");
            $("#wait").toggleClass("esconder");
        }
    })
}