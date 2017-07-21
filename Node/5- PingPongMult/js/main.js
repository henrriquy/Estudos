var socket = io.connect();

$(function () {
    $('#btnEnviaDados').on('click', function () {
        try {
  //          objPingPong.setJogador($('#txtNomeJogador').val().trim(), $('#rdAvatars:checked').val());
    //        $('#btnEnviaDados').popover('dispose');
            console.log(objPingPong.jogadores);
        }
        catch (err) {
            $('#btnEnviaDados').popover('show');
        }
    });
    socket.on("teste socket", function (mensagem) {
        console.log(mensagem);
    });
})



