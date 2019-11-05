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

$(document).on("click","#cadVeiculo",function(){
    var parametros = {
        "proprietario": $("option:selected",("#proprietario")).val(),
        "placa": $("#placa").val(),
        "tipo": $("option:selected",("#tipo")).val(),
        "modelo": $("#modelo").val(),
    };

    $.ajax({
        type:"post", //como enviar
        url:webservice+"cadastra-veiculo.php",//para onde enviar
        data:parametros,//o que enviar
        //se der certo
        success: function(data){
            location.reload();

        },
        //se der errado
        error: function(data){
             navigator.notification.alert(data);
        }
    });    
});


$(document).on("click","#cadEstadia",function(){
    var parametros = {
        "entrada": $("#entrada").val(),
        "veiculo": $("#codVeiculo").val(),
    };

    $.ajax({
        type:"post", //como enviar
        url:webservice+"cadastra-estadia.php",//para onde enviar
        data:parametros,//o que enviar
        //se der certo
        success: function(data){
            alert(data);
            location.reload();

        },
        //se der errado
        error: function(data){
             navigator.notification.alert(data);
        }
    });    
});


/*busca de proprietarios*/
function listarProprietario(){
   $.ajax({
        type:"post", //como enviar
        url:webservice+"busca-proprietario.php",
        dataType:"json",
        //se der certo
        success: function(data){
            var itemlista = "";
            $.each(data.proprietario,function(i,dados){
              itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>"; 
            });
        $("#proprietario").html(itemlista);
        },
        //se der errado
        error: function(data){
             navigator.notification.alert(data);
        }
    });    
}


$(document).on("click","#buscarVeiculo",function(){
     var parametro ={
      "placa":$("#placa").val()
    };
    
    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:webservice+"busca-veiculo.php",
      data:parametro,
      dataType:"json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        $("#proprietario").val(data.veiculo.proprietario);
        $("#tipo").val(data.veiculo.tipo);
        $("#codVeiculo").val(data.veiculo.codigo);
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao buscar registros!");
      }
    });
});