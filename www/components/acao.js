// This is a JavaScript file
/*Navegação*/
$(document).on("click","#cadVeiculo",function(){
  $(location).attr("href","veiculo.html");
});

$(document).on("click","#cadProprietario",function(){
  $(location).attr("href","proprietario.html");
});

$(document).on("click","#saida",function(){
  $(location).attr("href","saida.html");
});

$(document).on("click","#lista",function(){
  $(location).attr("href","lista.html");
});

/*Cadastros*/

const webservice= "https://appmobile3i2.000webhostapp.com/app1/";

$(document).on("click","#cadProp",function(){
    var parametros = {
        "nome": $("#nome").val(),
    };

    $.ajax({
        type:"post", //como enviar
        url:webservice+"cadastra-proprietario.php",//para onde enviar
        data:parametros,//o que enviar
        //se der certo
        success: function(data){
            navigator.notification.alert(data);
            $("#nome").val("");

        },
        //se der errado
        error: function(data){
             navigator.notification.alert(data);
        }
    });    
});