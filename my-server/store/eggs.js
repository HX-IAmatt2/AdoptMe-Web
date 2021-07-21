// const bucks='<img src="./img/icons/bucks.png"/>'
const Eggs = {

  Inicial: {
    type: 'initial',
    img: './img/eggs/Huevo_Inicial.png',
    name: 'Huevo inicial',
    description:
    'El huevo inicial es un huevo gratis que se te da cuando ingresas a Adopt Me! por primera vez. Solo eclosionará en un perro o un gato. No puedes obtenerlo en ningún otro lugar del juego y no es negociable. Solo puedes obtener uno de estos. Es el primer huevo que tiene un 100% de probabilidad de eclosionar en una mascota común, y el segundo es el huevo de Pascua 2020. También debes ser un adulto para obtener el huevo.',
    content: ['Gato - 50%', 'Perro - 50%'],
    rarity: 'Común',
    cost: 'Gratis'
  },

  Azul: {
    type: 'blue',
    img: './img/eggs/Huevo_azul.png',
    name: 'Huevo Azul',
    description:
    'El huevo azul es un huevo exclusivo que sólo estaba disponible al comienzo de la Actualización de Mascotas en Adopt Me!. Fue el primer huevo junto con el huevo rosa. Sólo puede eclosionar en un perro azul poco común. Ahora sólo se puede obtener a través del comercio con otros jugadores.',
    content: ['Perro azul - 100%'],
    rarity: 'Raro',
    cost: '100'
  },

  Rosa: {
    type: 'pink',
    img: './img/eggs/Huevo_rosa.png',
    name: 'Huevo Rosa',
    description:
    'El huevo rosa es un huevo exclusivo en Adopt Me! que se podía obtener jugando antes de que llegara la actualización de mascotas. Al participar en el evento Cuenta Regresiva de Mascotas, los jugadores recibían automáticamente este huevo en su inventario. Sólo podía eclosionar en un gato rosado poco común. Cada jugador solo tenía derecho a un gato rosa por persona. El huevo rosa ahora solo se puede obtener por el comercio con otro jugador que lo posea. El mismo fue uno de los primeros huevos en Adopt Me!.',
    content: ['Gato rosa - 100%'],
    rarity: 'Raro',
    cost: '100'
  },

  Roto: {
    type: 'broken',
    img: './img/eggs/Huevo_roto.png',
    name: 'Huevo Roto',
    description:
    'El huevo roto es un huevo de mascota común y es el huevo ilimitado menos costoso que está disponible en el guardería de AdoptMe!. Tiene la posibilidad de incubar una mascota común, poco común, rara, ultra rara o legendaria. Este huevo requiere cuatro tareas para eclosionar. Es más probable que se convierta en una mascota común (45%) y tiene la menor probabilidad de convertirse en una mascota legendaria en comparación con los otros huevos de mascotas de la guardería.',
    content: ['Perro - 100%'],
    rarity: 'Común',
    cost: '350'
  },

  Comun: {
    type: 'common',
    img: './img/eggs/Huevo_de_mascota.png',
    name: 'Huevo de mascota',
    description:
    'El huevo de mascota es un huevo raro y está disponible para siempre en la guardería. Es más probable que se convierta en una mascota poco común (35%). Todas las mascotas que no pertenecen a un huevo limitado o a una mascota de un pase de juego están disponibles en este huevo, como el dragón, el Gato de las nieves y el perro, por nombrar a algunos. Su apariencia es un huevo completamente blanco, liso, sin otros accesorios ni detalles. Los jugadores pueden comprárselo a Holly, la amante de los gatos en la guardería.',
    content: ['Gato - 100%'],
    rarity: 'Común',
    cost: '600'
  },

  Safari: {
    type: 'safari',
    img: './img/eggs/Huevo_de_Safari.png',
    name: 'Huevo de Safari',
    description:
    'El huevo de safari fue un huevo que estába clasificado como legendario en Adopt Me! y se pudo obtener a través de la máquina de chicles desde el 5 de julio de 2019 hasta el 31 de agosto de 2019; hasta que fue reemplazado por el huevo de selva. Ya no está en la máquina de chicles y ahora solo se puede obtener intercambiando con otros jugadores. Fue el primer huevo de la máquina de chicles que pudo convertirse en una mascota. Este huevo, junto con el huevo de selva, no contiene ninguna mascota común.',
    content: ['Elefante - 100%'],
    rarity: 'Legendario',
    cost: '750'
  },

  Selva: {
    type: 'jungle',
    img: './img/eggs/Huevo_de_selva.png',
    name: 'Huevo de Selva',
    description:
    'El huevo de selva o huevo de jungla fue un huevo legendario y se pudo obtener de la máquina de chicles del 31 de agosto de 2019 al 22 de noviembre de 2019. Ahora es inalcanzable a menos que a través del comercio. El huevo no contiene mascotas comunes, al igual que el huevo de Safari. A diferencia de los otros huevos, no se parece a ninguna de las mascotas en su interior. Fue precedido por el huevo de Safari y sucedido por el huevo de granja.',
    content: ['...'],
    rarity: 'Legendario',
    cost: '750'
  },

  Granja: {
    type: 'farm',
    img: './img/eggs/Huevo_de_Granja.png',
    name: 'Huevo de Granja',
    description:
    'El huevo de granja es un huevo legendario lanzado el 22 de noviembre de 2019 y que fue reemplazado por el huevo australiano el 28 de febrero de 2020. Ya no se pueden comprar ya que estuvieron disponibles por un período de tiempo. Sin embargo, todavía se pueden obtener a través del comercio. Fue el tercer huevo en la máquina de chicles. Fue precedido por el huevo de selva y sucedido por el huevo australiano.',
    content: [
      'Pollo - 20%',
      'Pato tonto - 17.5%',
      'Pato - 17.5%',
      'Cerdo - 13.5%',
      'Vaca - 13.5%',
      'Pavo - 7.5%',
      'Llama - 7.5%',
      'Búho - 1.5%',
      'Cuervo - 1.5%'
    ],
    rarity: 'Legendario',
    cost: '750'
  }

}

module.exports = Eggs
