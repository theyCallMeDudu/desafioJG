$(document).ready(function(){

    var btnJG = $("#btn_jg");

    btnJG.click(function(){

        var numero = $("#entrada").val();

        var listaElementos = $('#resultado');
        listaElementos.html("");

        if(numero == "" || numero == null || numero == NaN) {
            listaElementos.html("Por favor, informe um número.");
        }
        else if(numero < 0) {
            listaElementos.html("Por favor, informe um número positivo.");
        }
        else {

            listaElementos.html("");

            $("#spinner-loader").show(5000, function(){

                $("#spinner-loader").hide();
                
                for(var i = 0; i <= numero; i++){
                    if(i % 3 == 0 && i % 5 == 0){
                        $("#resultado").append("<li>Jovens Gênios</li>");
                    }
                    else if(i % 3 == 0){
                        $("#resultado").append("<li>Jovens</li>");
                    }
                    else if(i % 5 == 0){
                        $("#resultado").append("<li>Gênios</li>");
                    }
                    else{
                        $("#resultado").append("<li>" + i + "</li>");
                    }
                }

            });
        }
    });

});
