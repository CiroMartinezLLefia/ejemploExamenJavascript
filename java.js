let personajes = [
    { nombre: "Benzema", url: "https://e00-especiales-marca.uecdn.es/futbol/images/top-100/pequenas/benzema.png" },
    { nombre: "Thibaut", url: "https://e00-especiales-marca.uecdn.es/futbol/images/top-100/pequenas/courtois.png" },
    { nombre: "Vinicius", url: "https://e00-especiales-marca.uecdn.es/futbol/images/top-100/pequenas/vinicius.png" }
  ];

let tarjetas = `
      <thead>
      </thead>
      <tbody>
  `;

for (i = 0; i < personajes.length; i++)
{
    tarjetas += 
    `<tr>
      <th>${personajes[i].nombre}</th>
      <th><img src="${personajes[i].url}" alt=""></th>
    </tr>`
}

contenedor.innerHTML += tarjetas;

form = document.querySelector("#Formulario");

let nombreI = document.getElementById("nombreF").value;
let urlI = document.getElementById("urlF").value;
let posI = document.getElementById("posicionF").value;

function oscuro(){
    document.body.style.background = "black";
    document.body.style.color = "white";
}        

function claro(){
    document.body.style.background = "white";
    document.body.style.color = "black";
}

