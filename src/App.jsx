import { Button, Container } from "react-bootstrap"
import  Card  from "react-bootstrap/Card"
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
      <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> <br />
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card> <br />
    <hr />
    <Card body>This is some text within a card body.</Card>;
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




