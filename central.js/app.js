// Função para imprimir o valor da div

//var btn = document.querySelector(".btn");

var btn = [...document.querySelectorAll(".container3")];

var div = document.querySelector(".sheett3");
console.log(btn);

btn.map((elementos) => {
  //com o map consigo manipular uma lista de array
  elementos.addEventListener("click", () => {
    var valor = parseInt(div.innerHTML);
    if (elementos.style.backgroundColor != "white") {
      elementos.style.backgroundColor = "white";
      div.innerHTML = valor - 1;

      var circle = elementos.querySelectorAll(".red-circle");
      // console.log(circle[0]);
      circle[0].style.display = "none";
    }
  });
});

function zerar() {
  var containers = document.querySelectorAll(".container3");
  var circle = document.querySelectorAll(".red-circle");
  containers.forEach(function (container) {
    div.innerHTML = 0;

    container.style.backgroundColor = "white";
  });

  circle.forEach((circulo) => {
    console.log(circulo);
    circulo.style.display = "none";
  });
}

//btn.addEventListener("click", function (evt) {
// var div = parseInt(document.querySelector(".sheett3").innerHTML);

//});
