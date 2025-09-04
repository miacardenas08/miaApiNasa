let contenedor = document.querySelector('.contenedor')

fetch('https://api.nasa.gov/planetary/apod?api_key=emAX7kURdpbL53UttDOLM2dhrthdEzYY3BtUbdhG&count=18')

.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos)
    //img.src = datos[0].url
    for (let i = 0; i < datos.length; i++) {
        //const element = array[index];
        contenedor.innerHTML += '<h1>'+datos[i].title+'</h1><img src="'+datos[i].url+'" alt"">' 
    }
})


fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => res.json())
  .then(datos => {
    const contenedor = document.querySelector("#contenedor");
    
    contenedor.innerHTML = 
    `<h2>${datos.title}</h2>
      <p><strong>Fecha:</strong> ${datos.date}</p>
      <img src="${datos.url}" alt="${datos.title}" width="500px">
      <p>${datos.explanation}</p>`;
  });
