$('#btnCon').click(function() {

    var espera = 2000;
    $.ajax({
        url: "respuesta.html",
        beforeSend: function() {
            $('#contenido').text('cargando...');
        },

        success: function(data) {
            setTimeout(function() {
                $('#contenido').html(data);
            }, espera);
        }
    });
});