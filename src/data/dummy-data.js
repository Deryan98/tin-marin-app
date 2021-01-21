import URL from '../constants/URL';

export const COVIDS = [
  {
    description: [
      'Las mascarillas deben utilizarse como parte de una estrategia integral de medidas para suprimir la transmisión y salvar vidas; eel uso de una mascarilla por sí sola no basta para proporcionar una proteección adecuada contra la COVID-19.',
      'Indicaciones básicas sobre la manera de ponerse la mascarilla',
    ],

    steps: [
      'Lávese las manos antes de ponerse la mascarilla, y también antes y ddespués de quitársela, y cada vez que la toque.',
      'Compruebe que le cubre la nariz, la boca y el mentón.',
      'Cuando se quite la mascarilla, guárdesela en una bolsa de plástico limpia; si es de tela lávela cada día y si es una mascarilla médica, tírela a un cubo de basura.',
      'No utilice mascarillas con válvulas.',
    ],
    source: 'OMS',
    image: URL.hospital,
    _id: '5fdd70700855130e44eaa281',
    title: 'Usa Mascarilla!',
    createdAt: '2020-12-19T03:16:00.138Z',
    updatedAt: '2020-12-19T03:16:00.138Z',
    __v: 0,
  },
];

export const FAQs = [
  {
    _id: '5fe56125d7836c44507c9674',
    question: '¿Por qué debemos usar mascarillas?',
    answer:
      'Las mascarillas son esenciales para eliminar la transmisión y salvar vidas. Reducen el posible riesgo de exposición a los virus de una persona infectada, sea o no asintomática. Las personas que están protegudas contra la iinfección. Además, si las utilizan personas infectadas, las mascarillas impiden que el virus siga transmitiéndose. \n Las mascarillas deben utilizarse como parte de un enfoque integral que incluya la adopción de todas las medidas posibles(!Háganlo todo!): mantener el distanciamiento físico, evitar entornos cerrados y concurridos en los que haya contacto estrecho entre personas, mejorar la ventilación, lavarse las manos, cubrirse al estornudar y toser, y muchas otras.',
  },
  {
    _id: '60077d1cf4fb3f328c0c6d53',
    question: '¿Qué tipo de mascarilla debe usar cada persona?',
    answer:
      'Las mascarillas médicas están recomendadas para los siguientes grupos: \n Todo el personal ded salud que trabahe en entornos clínicos. Para más información, consulte nuestras orientaciones sobree el uso de equipo de protección personal por el personal dde atención de salud. \n Las peresonas quee no se encuentreen bien, incluso con síntomas leves, como dolores musculares, tos leve, dolor de garganta o cansancio, \n Las personas que atienden a casos presuntos o confirmados de COVID-19 fuera de un establecimiento de salud.',
  },
];

export const WEBS_RECOMM = [
  {
    _id: '5fe4d30effaaf5293ca0d2db',
    title: 'Organización Mundial de la Salud',
    image: URL.banco,
    url: 'https://www.who.int/es',
  },
  {
    _id: '60078331a22b702b4035c51c',
    title: 'Organización Panamericana de la Salud',
    image: URL.avion,
    url: 'https://www.paho.org/es',
  },
];
