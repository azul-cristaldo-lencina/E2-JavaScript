
/*
TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).*/


const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// /*a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter((pizzas) => {
  return pizzas.id % 2 != 0;
})
idImpar.forEach((pizzas) =>{
  console.log(`Las pizzas con número de id impar son ${pizzas.nombre}`)
})

// b) Responder: ¿Hay alguna pizza que valga menos de $600?


const menorDe600 = pizzas.filter((pizzas) =>{
  return pizzas.precio <= 600
   ? console.log(`Tenemos pizzas que cuestan menos de $600` )
  : console.log(`No tenemos pizzas que cuesten menos de $600`)
})


// c) El nombre de cada pizza con su respectivo precio.

const nombreDePizass = pizzas.filter((pizzas) =>{
  return pizzas.nombre, pizzas.precio;
})
nombreDePizass.forEach((pizzas) =>{
  console.log(`La ${pizzas.nombre} cuesta $${pizzas.precio}`)
})

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes*/

const ingredientesDePizza = pizzas.filter((pizzas) =>{
  return pizzas.ingredientes;
})
ingredientesDePizza.forEach((pizzas) =>{
  console.log(`Los ingredientes de ${pizzas.nombre} son ${pizzas.ingredientes}`)
})
