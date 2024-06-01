//aventura, comedia, drama

//divertida mente, LIVRE, comedia,animação,comedia
//marley e eu, LIVRE, infantil, comedia

//as aventuras de pi,10, drama, fantasia, aventura
//extraordinario,10, drama, amadurecimento
//guardiões da galaxia, 12, fantasia, aventura
//esposa de mentirinha, 12, comedia, aventura
//agente oculto,14, ação, thriller

let campoIdade;
let campoAventura;
let campoFantasia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoFantasia = createCheckbox("Gosta de fantasia?");
}

function draw() {
  background("white");
  let idade =campoIdade.value();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeFantasia =campoFantasia.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeFantasia);
  
  fill(color(76, 0, 115))
  textAlign(CENTER, CENTER);
  textSize(38)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeFantasia) {
  if(idade >= 10 ) {
    if(idade >= 14){
      return "Agente oculto";
    } else {
      if(idade >=12 ) {
        if(gostaDeAventura || gostaDeFantasia) {
          return "Homem-aranha: no aranhaverso";
        } else {
          return "Esposa de mentirinha";
        }
      } else {
      if(gostaDeAventura) {
        return "As aventuras de pi";
      } else {
        return "Extraordinario";
      }
     }
    }
  } else {
    if(gostaDeAventura) {
      return"Divertida mente";
    } else {
     return"Depois da chuva";
     }
    }
}