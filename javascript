let colunaAFazer = [];
let colunaFazendo = [];
let colunaConcluida = [];

let conluna1;
let conluna2;
let conluna3;

var i = 0;

function AdicionarCard(identifier) {
  if (identifier == 1) {
    cardColuna1()
  } else if (identifier == 2) {
    cardColuna2();
  } else if (identifier == 3) {
    cardColuna3()
  } else {
    console.log("invalido");
  }
}


function cardColuna1() {
  conluna1 = document.getElementById("corpo-da-coluna1");
  conluna2 = document.getElementById("corpo-da-coluna2");
  conluna3 = document.getElementById("corpo-da-coluna3");

  let card = document.createElement("div");
  card.setAttribute("id", "card" + i);
  card.style.width = "40vh";
  card.style.height = "20vh";
  card.style.border = "white solid 1vh"
  card.style.borderRadius = "2vh"
  card.style.margin = "2vh"

  let tex = document.createElement("h5")
  let cont = document.createTextNode("Descreva sua tarefa:")
  tex.style.color = "black"
  tex.style.marginLeft = "1vh"
  tex.style.marginTop = "2vh"
  tex.appendChild(cont)
  card.appendChild(tex)

  let inp = document.createElement("input")
  inp.setAttribute("placeholder", "Insira aqui sua tarefa. ");
  inp.setAttribute("id", "input" + i);
  inp.style.width = "35vh";
  inp.style.marginLeft = "1vh";
  inp.style.marginTop = "2vh";
  card.appendChild(inp);

  let but = document.createElement("button")
  let texTag = document.createTextNode("OK")
  but.setAttribute("id", "button" + i)
  but.appendChild(texTag);
  but.style.marginLeft = "1vh"
  but.style.height = "3vh"
  but.style.backgroundColor = "white"
  but.style.border = "white solid 0vh"

  let butExcluir = document.createElement("button");
  butExcluir.style.margin = "1vh"
  butExcluir.textContent = "Excluir";
  butExcluir.style.height = "3vh";
  butExcluir.style.backgroundColor = "white";
  butExcluir.style.border = "white solid 0vh";

  butExcluir.addEventListener("click", function() {
    card.remove();
  })

  but.addEventListener("click", function() {
    let texto = inp.value;
    let tagP = document.createElement("p");
    tagP.style.marginLeft = "1vh";
    tagP.style.color = "darkblue";
    let node = document.createTextNode(texto);
    tagP.appendChild(node)
    tex.remove();
    inp.remove();
    but.remove();
    card.appendChild(tagP);

    let divButColunas = document.createElement("div");
    divButColunas.style.display = "flex";
    divButColunas.style.flexDirection = "row";


    let butAFazer = document.createElement("button");
    butAFazer.style.margin = "0.5vh";
    butAFazer.style.backgroundColor = "white";
    butAFazer.style.height = "3vh";
    butAFazer.style.border = "white solid 0vh";

    let butFazendo = document.createElement("button");
    butFazendo.style.margin = "0.5vh";
    butFazendo.style.backgroundColor = "white";
    butFazendo.style.height = "3vh";
    butFazendo.style.border = "white solid 0vh";

    let butConcluido = document.createElement("button");
    butConcluido.style.margin = "0.5vh";
    butConcluido.style.backgroundColor = "white";
    butConcluido.style.height = "3vh";
    butConcluido.style.border = "white solid 0vh";

    butAFazer.textContent = "Fazer";
    butFazendo.textContent = "Fazendo";
    butConcluido.textContent = "Concluida";

    butAFazer.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaAFazer.push(card)
      conluna1.appendChild(card);
    });

    butFazendo.addEventListener("click", function() {
      card.style.border = "#D8B4AD solid 1vh";
      butAFazer.style.backgroundColor = "#D8B4AD";
      butAFazer.style.border = "#D8B4AD solid 0vh";
      butFazendo.style.backgroundColor = "#D8B4AD";
      butFazendo.style.border = "#D8B4AD solid 0vh";
      butConcluido.style.backgroundColor = "#D8B4AD";
      butConcluido.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.backgroundColor = "#D8B4AD";
      colunaFazendo.push(card)
      conluna2.appendChild(card);
    });

    butConcluido.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaConcluida.push(card)
      conluna3.appendChild(card);
    });

    divButColunas.appendChild(butAFazer);
    divButColunas.appendChild(butFazendo);
    divButColunas.appendChild(butConcluido);
    card.appendChild(divButColunas);
    console.log(card);
  });

  card.appendChild(but)
  card.appendChild(butExcluir);


  conluna1.appendChild(card);

  colunaAFazer.push(card);
  console.log(colunaAFazer);
  ++i;
}

function cardColuna2() {
  conluna1 = document.getElementById("corpo-da-coluna1");
  conluna2 = document.getElementById("corpo-da-coluna2");
  conluna3 = document.getElementById("corpo-da-coluna3");

  let card = document.createElement("div");
  card.setAttribute("id", "card" + i);
  card.style.width = "40vh";
  card.style.height = "20vh";
  card.style.border = "#D8B4AD solid 1vh"
  card.style.borderRadius = "2vh"
  card.style.margin = "2vh"

  let tex = document.createElement("h5")
  let cont = document.createTextNode("Descreva sua tarefa:")
  tex.style.color = "black"
  tex.style.marginLeft = "1vh"
  tex.style.marginTop = "2vh"
  tex.appendChild(cont)
  card.appendChild(tex)

  let inp = document.createElement("input")
  inp.setAttribute("placeholder", "Insira aqui sua tarefa. ");
  inp.setAttribute("id", "input" + i);
  inp.style.width = "35vh";
  inp.style.marginLeft = "1vh";
  inp.style.marginTop = "2vh";
  card.appendChild(inp);

  let but = document.createElement("button")
  let texTag = document.createTextNode("OK")
  but.setAttribute("id", "button" + i)
  but.appendChild(texTag);
  but.style.marginLeft = "1vh"
  but.style.height = "3vh"
  but.style.backgroundColor = "#D8B4AD"
  but.style.border = "#D8B4AD solid 0vh"

  let butExcluir = document.createElement("button");
  butExcluir.style.margin = "1vh"
  butExcluir.textContent = "Excluir";
  butExcluir.style.height = "3vh";
  butExcluir.style.backgroundColor = "#D8B4AD";
  butExcluir.style.border = "#D8B4AD solid 0vh";

  butExcluir.addEventListener("click", function() {
    card.remove();
  })

  but.addEventListener("click", function() {
    let texto = inp.value;
    let tagP = document.createElement("p");
    tagP.style.marginLeft = "1vh";
    tagP.style.color = "darkblue";
    let node = document.createTextNode(texto);
    tagP.appendChild(node)
    tex.remove();
    inp.remove();
    but.remove();
    card.appendChild(tagP);

    let divButColunas = document.createElement("div");
    divButColunas.style.display = "flex";
    divButColunas.style.flexDirection = "row";


    let butAFazer = document.createElement("button");
    butAFazer.style.margin = "0.5vh";
    butAFazer.style.backgroundColor = "#D8B4AD";
    butAFazer.style.height = "3vh";
    butAFazer.style.border = "#D8B4AD solid 0vh";

    let butFazendo = document.createElement("button");
    butFazendo.style.margin = "0.5vh";
    butFazendo.style.backgroundColor = "#D8B4AD";
    butFazendo.style.height = "3vh";
    butFazendo.style.border = "#D8B4AD solid 0vh";

    let butConcluido = document.createElement("button");
    butConcluido.style.margin = "0.5vh";
    butConcluido.style.backgroundColor = "#D8B4AD";
    butConcluido.style.height = "3vh";
    butConcluido.style.border = "#D8B4AD solid 0vh";

    butAFazer.textContent = "Fazer";
    butFazendo.textContent = "Fazendo";
    butConcluido.textContent = "Concluida";

    butAFazer.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaAFazer.push(card)
      conluna1.appendChild(card);
    });

    butFazendo.addEventListener("click", function() {
      card.style.border = "#D8B4AD solid 1vh";
      butAFazer.style.backgroundColor = "#D8B4AD";
      butAFazer.style.border = "#D8B4AD solid 0vh";
      butFazendo.style.backgroundColor = "#D8B4AD";
      butFazendo.style.border = "#D8B4AD solid 0vh";
      butConcluido.style.backgroundColor = "#D8B4AD";
      butConcluido.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.backgroundColor = "#D8B4AD";
      colunaFazendo.push(card);
      conluna2.appendChild(card);
    });

    butConcluido.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaConcluida.push(card)
      conluna3.appendChild(card);
    });

    divButColunas.appendChild(butAFazer);
    divButColunas.appendChild(butFazendo);
    divButColunas.appendChild(butConcluido);
    card.appendChild(divButColunas);
    console.log(card);
  });

  card.appendChild(but)
  card.appendChild(butExcluir)

  conluna2.appendChild(card);

  colunaFazendo.push(card);
  console.log(colunaFazendo);
  ++i;
}

function cardColuna3() {
  conluna1 = document.getElementById("corpo-da-coluna1");
  conluna2 = document.getElementById("corpo-da-coluna2");
  conluna3 = document.getElementById("corpo-da-coluna3");

  let card = document.createElement("div");
  card.setAttribute("id", "card" + i);
  card.style.width = "40vh";
  card.style.height = "20vh";
  card.style.border = "white solid 1vh";
  card.style.borderRadius = "2vh";
  card.style.margin = "2vh";

  let tex = document.createElement("h5")
  let cont = document.createTextNode("Descreva sua tarefa:")
  tex.style.color = "black"
  tex.style.marginLeft = "1vh"
  tex.style.marginTop = "2vh"
  tex.appendChild(cont)
  card.appendChild(tex)

  let inp = document.createElement("input")
  inp.setAttribute("placeholder", "Insira aqui sua tarefa. ");
  inp.setAttribute("id", "input" + i)
  inp.style.width = "35vh";
  inp.style.marginLeft = "1vh";
  inp.style.marginTop = "2vh";
  card.appendChild(inp);

  let but = document.createElement("button")
  let texTag = document.createTextNode("OK")
  but.setAttribute("id", "button" + i)
  but.appendChild(texTag);
  but.style.marginLeft = "1vh";
  but.style.height = "3vh";
  but.style.backgroundColor = "white";
  but.style.border = "white solid 0vh";

  let butExcluir = document.createElement("button");
  butExcluir.style.margin = "1vh"
  butExcluir.textContent = "Excluir";
  butExcluir.style.height = "3vh";
  butExcluir.style.backgroundColor = "white";
  butExcluir.style.border = "white solid 0vh";

  butExcluir.addEventListener("click", function() {
    card.remove();
  })

  but.addEventListener("click", function() {
    let texto = inp.value;
    let tagP = document.createElement("p");
    tagP.style.marginLeft = "1vh";
    tagP.style.color = "darkblue";
    let node = document.createTextNode(texto);
    tagP.appendChild(node)
    tex.remove();
    inp.remove();
    but.remove();
    card.appendChild(tagP);

    let divButColunas = document.createElement("div");
    divButColunas.style.display = "flex";
    divButColunas.style.flexDirection = "row";

    let butAFazer = document.createElement("button");
    butAFazer.style.margin = "0.5vh";
    let butFazendo = document.createElement("button");
    butFazendo.style.margin = "0.5vh";
    let butConcluido = document.createElement("button");
    butConcluido.style.margin = "0.5vh";

    butAFazer.textContent = "Fazer";
    butFazendo.textContent = "Fazendo";
    butConcluido.textContent = "Concluida";

    butAFazer.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaAFazer.push(card)
      conluna1.appendChild(card);
    });

    butFazendo.addEventListener("click", function() {
      card.style.border = "#D8B4AD solid 1vh";
      butAFazer.style.backgroundColor = "#D8B4AD";
      butAFazer.style.border = "#D8B4AD solid 0vh";
      butFazendo.style.backgroundColor = "#D8B4AD";
      butFazendo.style.border = "#D8B4AD solid 0vh";
      butConcluido.style.backgroundColor = "#D8B4AD";
      butConcluido.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.backgroundColor = "#D8B4AD";
      colunaFazendo.push(card)
      conluna2.appendChild(card);
    });

    butConcluido.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaConcluida.push(card)
      conluna3.appendChild(card);
    });

    divButColunas.appendChild(butAFazer);
    divButColunas.appendChild(butFazendo);
    divButColunas.appendChild(butConcluido);
    card.appendChild(divButColunas);
    console.log(card);
  });

  card.appendChild(but)
  card.appendChild(butExcluir)

  conluna3.appendChild(card);

  colunaConcluida.push(card);
  console.log(colunaConcluida);
  ++i;
}
