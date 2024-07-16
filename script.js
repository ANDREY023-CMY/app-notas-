const formulariotarea = document.getElementById('formulario-tarea');
const escribirtarea = document.getElementById('escribir-tarea');
const listatarea = document.getElementById('lista-tarea');

function agregartarea (event){
  event.preventDefault();

  const textotarea = escribirtarea.value.trim();


  if (textotarea !== ''){

    const nuevoitem = document.createElement('li');
    const botondeeliminar = document.createElement('button');


    nuevoitem.innerText = textotarea ;
    botondeeliminar.innerText = 'eliminar';

    botondeeliminar.addEventListener('click', () => {
      nuevoitem.remove();
    });


   nuevoitem.addEventListener('click',() => {
       nuevoitem.classList.toggle('completed');
   });

   nuevoitem.appendChild(botondeeliminar);

   listatarea.appendChild(nuevoitem);

   escribirtarea.value = '';
  }
}

formulariotarea.addEventListener('submit', agregartarea);

