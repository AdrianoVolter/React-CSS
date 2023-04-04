
//import './App.css'
import styles from "./App.module.css"

function App() {
 

  return (
    <div >
     <h1 className={styles.title}>Titulo</h1>
     <p>Paragrafo</p>
      <button 
        className={styles.btn}
      >
        Botao
      </button>
        
    </div>
  )
}

export default App


// function App() {
//   const [ativo, setAtivo] = useState(false)

//   return (
//     <div className="App">
//      <h2>{ativo.toString()}</h2>
//         <Botao ativo={ativo} />
//         <button onClick={() => setAtivo(!ativo)}>alterar</button>

//     </div>
//   )
// }

// export default App




