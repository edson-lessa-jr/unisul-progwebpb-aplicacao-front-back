
const contentTypePadrao = "application/json; charset=utf8";

$(document).ready(function () {
    $(".botaoExcluir, .alterar").hide();

    // Exibir opções de Seriados
    $("#abrirFormularioCdastroSeriado").click(function (){
        resetProjeto();
        estadoInicial();
        $("#cadSeriado").removeClass("esconder");
        $("#idSeriado").prop("disabled", true);
    });

    $("#exibeListaSeriados").click(function (){
        resetProjeto();
        listarSeriados();
    });

    // Exibir opções de Temporada
    $("#abrirFormularioCdastroTemporada").click(function () {
        resetProjeto();
        $("#cadTemporada").removeClass("esconder");
    });
    $("#exibeListaTemporada").click(function () {
        resetProjeto();
        $("#listaTemporada").removeClass("esconder");
    });

    // Exibir opções de Episodios
    $("#abrirFormularioCdastroEpisodio").click(function () {
        resetProjeto();
        $("#cadEpisodio").removeClass("esconder");
    });
    $("#exibeListaEpisodio").click(function () {
        resetProjeto();
        $("#listaEpisodio").removeClass("esconder");
    });
    // Botões
    $("#btnSalvarSeriado").click(function (){
        cadastroSeriado();
    });
    $("#btnAlterarSeriado").click(function (){
        alterarSeriado();
    });
    $("#btnExcluirSeriado").click(function (){
        excluirSeriado();
    });
    $("#btnSalvarTemporada").click(function (){
        cadastroTemporada();
    });
    $("#btnAlterarTemporada").click(function (){
        alterarTemporada();
    });
    $("#btnExcluirTemporada").click(function (){
        excluirTemporada();
    });
});
function resetProjeto() {
    $("main section").addClass("esconder");
}
function formatarData(data) {
    let arraData = data.split("-");
    return arraData[2]+"/"+arraData[1]+"/"+arraData[0];
}
function formartarDataUS(data) {
    let arraData = data.split("/");
    return arraData[2]+"-"+arraData[1]+"-"+arraData[0];
}