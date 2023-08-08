// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
var x = Math.floor(Math.random() * 10 - 1);

// contagem de tentativas
// até acerto  

var guess = 1

function submit()
{
   var guess = document.getElementById("guessField").value
}


if(x == y)
{
     alert("PARABÉNS!!!" + playername+"parabéns você acertou em" + guess + "tentativa(s)!")
     guess =1;
     
}

else if(x > y)
{
     guess++;
     alert("Opa,resposta errada!! Tente um número menor");
}

else 
{
     guess++;
     alert("Opa,resposta errada!! Tente um número maior"); 
}


function playerAgain() 
{
 y = Math.floor(Math.random() * 10 + 1);
}



// função para o número enviado pelo usuário


