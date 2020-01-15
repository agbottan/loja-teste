import Hoje from '../helpers/Hoje';

const Vendas = [

  {
    'id': 1,
    'cliente': 1,
    'data': Hoje(),
    'produtos': [
      { id: 1, quantidade: 5  },
      { id: 2, quantidade: 10 },
      { id: 3, quantidade: 8 },
    ],
  },

  {
    'id': 2,
    'cliente': 2,
    'data': Hoje(),
    'produtos': [
      { id: 4, quantidade: 1  },
    ],
  },

  {
    'id': 3,
    'cliente': 2,
    'data': '11/01/2020',
    'produtos': [
      { id: 3, quantidade: 7 },
    ],
  },

  {
    'id': 4,
    'cliente': 3,
    'data': '13/01/2020',
    'produtos': [
      { id: 1, quantidade: 5  },
      { id: 2, quantidade: 10 },
      { id: 3, quantidade: 25 },
    ],
  },

  {
    'id': 5,
    'cliente': 4,
    'data': '20/01/2020',
    'produtos': [
      { id: 1, quantidade: 2  },
    ],
  },

  {
    'id': 6,
    'cliente': 4,
    'data': '12/01/2020',
    'produtos': [
      { id: 2, quantidade: 2  },
    ],
  },
]

export default Vendas;