import { useSelector, useDispatch } from "react-redux"; 
import { increment, decrement, reset } from "./compteurSlice"; 
 
export default function Compteur() { 
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch(); 
 
  useDispatch()
  return ( 
    <div className="counter-container"> 
      <h2>Compteur</h2> 
 
      <div className="buttons"> 
        <button onClick={() => dispatch(decrement())}>- Décrémenter</button> 
        <button onClick={() => dispatch(increment())}>+ Incrémenter</button> 
           <button onClick={() => dispatch(reset())}> Mise à zéro</button>
      </div> 
 
      <p className="value"> 
        Valeur actuelle : <strong>{count}</strong> 
      </p> 
    </div> 
  ); 
} 