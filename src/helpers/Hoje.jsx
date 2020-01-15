
export default function Hoje() {

  let hoje = new Date();
  let dd = String(hoje.getDate()).padStart(2, '0');
  let mm = String(hoje.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = hoje.getFullYear();

  hoje = dd + '/' + mm + '/' + yyyy;

  return hoje;
}