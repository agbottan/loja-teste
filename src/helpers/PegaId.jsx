
export default function PegaId(colecao, id) {

  return colecao.filter( item => item.id === id)[0];
}