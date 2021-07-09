const bucks='${<img src="./img/icons/bucks.png"/>}'

export const Inicial = {
  type: 'initial',
  img: './img/eggs/Huevo_Inicial.png',
  name: 'Huevo inicial',
  description: 'Este huevo se obtiene por única vez al ingresar al juego',
  content: ['Gato - 50%', 'Perro - 50%']
};

export const Comun = {
  type: 'common',
  img: './img/eggs/Huevo_de_mascota.png',
  name: 'Huevo de mascota',
  description: '...',
  content: ['Gato - 100%']
};

export const Roto = {
  type: 'broken',
  img: './img/eggs/Huevo_roto.png',
  name: 'Huevo Roto',
  description: 'El huevo roto es un huevo de mascota común que cuesta 350 bucks y es el huevo ilimitado menos costoso que está disponible en el guardería de AdoptMe!. Tiene la posibilidad de incubar una mascota común, poco común, rara, ultra rara o legendaria. Este huevo requiere cuatro tareas para eclosionar. Es más probable que se convierta en una mascota común (45%) y tiene la menor probabilidad de convertirse en una mascota legendaria en comparación con los otros huevos de mascotas de la guardería.',
  content: ['Perro - 100%']
};

export const Granja = {
  type: 'farm',
  img: './img/eggs/Huevo_de_Granja.png',
  name: 'Huevo de Granja',
  description: 'El huevo de granja es un huevo legendario que costó 750 bucks. Fue lanzado el 22 de noviembre de 2019 y fue reemplazado por el huevo australiano el 28 de febrero de 2020. Ya no se pueden comprar ya que estuvieron disponibles por un período de tiempo. Sin embargo, todavía se pueden obtener a través del comercio. Fue el tercer huevo en la máquina de chicles. Fue precedido por el huevo de selva y sucedido por el huevo australiano.',
  content: ['...completar']
};

export const Azul = {
  type: 'blue',
  img: './img/eggs/Huevo_azul.png',
  name: 'Huevo Azul',
  description: 'El huevo azul es un huevo exclusivo que sólo estaba disponible al comienzo de la Actualización de Mascotas en Adopt Me!. Fue el primer huevo junto con el huevo rosa. Costó 100 bucks y sólo puede eclosionar en un perro azul poco común. Ahora sólo se puede obtener a través del comercio con otros jugadores.',
  content: ['Perro azul - 100%']
};

export const Rosa = {
  type: 'pink',
  img: './img/eggs/Huevo_rosa.png',
  name: 'Huevo Rosa',
  description: '...',
  content: ['Gato rosa - 100%']
};

export const Safari = {
  type: 'safari',
  img: './img/eggs/Huevo_de_Safari.png',
  name: 'Huevo de Safari',
  description: 'El huevo de safari fue un huevo que estába clasificado como legendario en Adopt Me!. Costó 750 bucks y se pudo obtener a través de la máquina de chicles desde el 5 de julio de 2019 hasta el 31 de agosto de 2019, hasta que fue reemplazado por el huevo de selva. Ya no está en la máquina de chicles y ahora solo se puede obtener intercambiando con otros jugadores. Fue el primer huevo de la máquina de chicles que pudo convertirse en una mascota. Este huevo, junto con el huevo de selva, no contiene ninguna mascota común.',
  content: ['Elefante - 100%']
};
