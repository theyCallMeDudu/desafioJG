$( document ).ready(function() {
    
    // $("#entrada").change(function(){
        
    //     var numero = $("#entrada").val();

    //     console.log(numero);

        // $.each(numero, function(indice, valor){
        //     console.log("O elemento de índice [" + indice + "] tem o valor de " + valor);
        // });


    // });


    $("#btn_jg").click(function(){
        
        var numero = $("#entrada").val();
        //numero.toArray();

        var array = $("#entrada").toArray();
        console.log(array);

        console.log(numero);

        // $.each(numero, function(indice, valor){
        //     console.log("O elemento de índice [" + indice + "] tem o valor de " + valor);
        // });


    });


});

//------------------------------------------------------------------------------------------

// Tentativa em Vanilla JS

// var input_usuario = document.getElementById("entrada");

//     input_usuario.onkeyup = function(){
//      var numero = document.getElementById("entrada").value;

//     for(var a = 0; a < numero.length; a++){
//             // console.log(numero[a]);
//             //console.log(a);
//             console.log(numero);
//     }
// }
