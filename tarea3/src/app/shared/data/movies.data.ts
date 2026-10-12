import { Movie } from '../models/movie';

const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'El padrino',
    director: 'Francis Ford Coppola',
    producer: 'Albert S. Ruddy',
    genre: 'Crimen',
    year: 1972,
    description:
      'Vito Corleone, jefe de una de las familias mafiosas más poderosas de Nueva York, intenta ceder el negocio a su hijo Michael, quien nunca quiso formar parte de ese mundo.',
    poster: `${POSTER_BASE}/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`,
  },
  {
    id: 2,
    title: 'Sueño de fuga',
    director: 'Frank Darabont',
    producer: 'Niki Marvin',
    genre: 'Drama',
    year: 1994,
    description:
      'Andy Dufresne es condenado a cadena perpetua por un crimen que asegura no haber cometido. En la prisión de Shawshank forma una amistad con Red que dura décadas.',
    poster: `${POSTER_BASE}/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg`,
  },
  {
    id: 3,
    title: 'Tiempos violentos',
    director: 'Quentin Tarantino',
    producer: 'Lawrence Bender',
    genre: 'Crimen',
    year: 1994,
    description:
      'Dos sicarios, un boxeador, la esposa de un gánster y una pareja de asaltantes se cruzan en varias historias contadas fuera de orden en Los Ángeles.',
    poster: `${POSTER_BASE}/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg`,
  },
  {
    id: 4,
    title: 'Batman: El caballero de la noche',
    director: 'Christopher Nolan',
    producer: 'Emma Thomas',
    genre: 'Acción',
    year: 2008,
    description:
      'Batman, el comisionado Gordon y el fiscal Harvey Dent intentan acabar con el crimen organizado en Gotham, hasta que aparece el Joker y lo pone todo de cabeza.',
    poster: `${POSTER_BASE}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
  },
  {
    id: 5,
    title: 'El origen',
    director: 'Christopher Nolan',
    producer: 'Emma Thomas',
    genre: 'Ciencia ficción',
    year: 2010,
    description:
      'Dom Cobb roba secretos entrando en los sueños de otras personas. Le ofrecen borrar su pasado a cambio de un trabajo casi imposible: implantar una idea.',
    poster: `${POSTER_BASE}/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg`,
  },
  {
    id: 6,
    title: 'Interestelar',
    director: 'Christopher Nolan',
    producer: 'Emma Thomas',
    genre: 'Ciencia ficción',
    year: 2014,
    description:
      'Con la Tierra al borde del colapso, un grupo de astronautas viaja a través de un agujero de gusano buscando un planeta donde la humanidad pueda sobrevivir.',
    poster: `${POSTER_BASE}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`,
  },
  {
    id: 7,
    title: 'El viaje de Chihiro',
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    genre: 'Animación',
    year: 2001,
    description:
      'Chihiro se pierde en un mundo de espíritus donde sus padres son convertidos en cerdos. Para salvarlos tendrá que trabajar en una casa de baños para dioses.',
    poster: `${POSTER_BASE}/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg`,
  },
  {
    id: 8,
    title: 'Parásitos',
    director: 'Bong Joon-ho',
    producer: 'Kwak Sin-ae',
    genre: 'Thriller',
    year: 2019,
    description:
      'La familia Kim, sin empleo y viviendo en un sótano, se infiltra poco a poco en la casa de los Park, una familia rica, hasta que un secreto cambia todo.',
    poster: `${POSTER_BASE}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,
  },
  {
    id: 9,
    title: 'El club de la pelea',
    director: 'David Fincher',
    producer: 'Art Linson',
    genre: 'Drama',
    year: 1999,
    description:
      'Un oficinista con insomnio conoce a Tyler Durden y juntos fundan un club clandestino de peleas que termina convirtiéndose en algo mucho más peligroso.',
    poster: `${POSTER_BASE}/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`,
  },
  {
    id: 10,
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    producer: 'Wendy Finerman',
    genre: 'Drama',
    year: 1994,
    description:
      'Forrest cuenta su vida sentado en una banca: de niño con aparatos en las piernas a héroe de guerra, campeón de ping pong y empresario, siempre pensando en Jenny.',
    poster: `${POSTER_BASE}/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg`,
  },
  {
    id: 11,
    title: 'Matrix',
    director: 'Lana y Lilly Wachowski',
    producer: 'Joel Silver',
    genre: 'Ciencia ficción',
    year: 1999,
    description:
      'Neo, un programador y hacker, descubre que el mundo que conoce es una simulación creada por máquinas y se une a la resistencia que lucha por liberar a la humanidad.',
    poster: `${POSTER_BASE}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`,
  },
  {
    id: 12,
    title: 'Coco',
    director: 'Lee Unkrich',
    producer: 'Darla K. Anderson',
    genre: 'Animación',
    year: 2017,
    description:
      'Miguel sueña con ser músico aunque su familia lo prohíbe. En Día de Muertos termina en la Tierra de los Muertos y busca a su tatarabuelo para volver a casa.',
    poster: `${POSTER_BASE}/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg`,
  },
  {
    id: 13,
    title: 'Roma',
    director: 'Alfonso Cuarón',
    producer: 'Gabriela Rodríguez',
    genre: 'Drama',
    year: 2018,
    description:
      'Cleo trabaja como empleada doméstica para una familia de clase media en la colonia Roma de la Ciudad de México a inicios de los años setenta.',
    poster: `${POSTER_BASE}/dtIIyQyALk57ko5bjac7hi01YQ.jpg`,
  },
  {
    id: 14,
    title: 'El señor de los anillos: La comunidad del anillo',
    director: 'Peter Jackson',
    producer: 'Barrie M. Osborne',
    genre: 'Fantasía',
    year: 2001,
    description:
      'Frodo hereda un anillo con un poder oscuro y emprende, junto a ocho compañeros, el viaje hacia Mordor para destruirlo antes de que Sauron lo recupere.',
    poster: `${POSTER_BASE}/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg`,
  },
  {
    id: 15,
    title: 'El señor de los anillos: El retorno del rey',
    director: 'Peter Jackson',
    producer: 'Barrie M. Osborne',
    genre: 'Fantasía',
    year: 2003,
    description:
      'Mientras Frodo y Sam se acercan al Monte del Destino, Aragorn reúne a los pueblos libres para la batalla final contra el ejército de Sauron.',
    poster: `${POSTER_BASE}/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg`,
  },
];
