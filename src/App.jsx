import { Button, Container } from "react-bootstrap"
//criar um imput e um botao estilizado com styled components
function App() {
 

  return (
    <Container className="shadow-lg">
      <h1>
        React Bootstrap
      </h1>
      {/* 
        m - margin -> [e: end, s: start, t: top, b: bottom, a: all] + tamanho (1 a 5)
        p - padding -> [e: end, s: start, t: top, b: bottom, a: all] + tamanho (1 a 5)
      */}
      
      <Button className="p-1" variant="primary">Botao</Button>{' '}
      <Button className="p-1" variant="secondary">Botao 2</Button>{' '}
      <Button variant="success">Botao 3</Button>{' '}
      <Button variant="warning">Botao 4</Button>{' '}
      <Button variant="danger">Botao 5</Button>{' '}
      <Button variant="info">Botao 6</Button>{' '} <br /><br />
    </Container>
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




