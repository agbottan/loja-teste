
export default function Moeda(props) {
  return (
    'R$ '+ (parseInt(props.valor) / 100).toFixed(2).toString().replace(/\./,',')
  );
}