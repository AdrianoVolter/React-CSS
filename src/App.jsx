import { Titulo, Botao } from "./styles"

function App() {
 

  return (
    <div >
      <h1>Styled Components</h1>
      <Titulo>Titulo</Titulo>
      <p>Paragrafo</p>
      <Botao>Botao</Botao>
        <div className="container">
          <p className="texto">Texto sass</p>
          <button className="btn">botao</button>
        </div>
    </div>
  )
}

export default App


// //import './App.css'
// import styles from "./App.module.css"
// import { FaReact } from 'react-icons/fa'

// function App() {
 

//   return (
//     <div >
//      <h1 className={styles.title}>Titulo</h1>
//      <p>Paragrafo</p>
//       <button 
//         className={styles.btn}
//       >
//         <FaReact
//           className={
//             styles.reactIcon
//           }

//         /> Botao
//       </button>
        
//     </div>
//   )
// }

// export default App


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




