
export default function MyButton({count, onClick}) {
 return (
   <button onClick={onClick}>
     Botão clicado {count} vezes
   </button>
 );
}



