import { useEffect,useState } from "react"; 
function App() {
  const [count,setCount]=useState(0);
  useEffect(()=> {
    console.log("count update");
  },[count]);
  return (
    <div>
      <h1>{count}</h1> 
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
export default App;