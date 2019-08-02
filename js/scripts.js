
var btnJG = document.getElementById("btn_jg");

btnJG.onclick = function(){

    var numero = document.getElementById("entrada").value;
    var listaElementos = document.getElementById('resultado');
    listaElementos.innerHTML = "";

    for(var i = 0; i <= numero; i++){
        if(i % 3 == 0 && i % 5 == 0){
            //console.log("Jovens Gênios");
            listaElementos.innerHTML += '<li>' + "Jovens Gênios" + '</li>';
        }
        else if(i % 3 == 0){
            //console.log("Jovens");
            listaElementos.innerHTML += '<li>' + "Jovens" + '</li>';
        }
        else if(i % 5 == 0){
            //console.log("Gênios");
            listaElementos.innerHTML += '<li>' + "Gênios" + '</li>';
        }
        else{
            //console.log("");
            listaElementos.innerHTML += '<li>' + i + '</li>';
        }
    }

}
