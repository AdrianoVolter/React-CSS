// import {Col, Form} from 'react-bootstrap'
// import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
// import {Row} from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

//import "./holder"
//criar um imput e um botao estilizado com styled components



function App() {
 

  return (
    <Container>
      <Nav className="bg-fluid bg-danger justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> <br />

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Container>
  )
}

export default App











{/* <Form>
        <Row>
          <h1 className='title'>Form com bootstrap</h1>
          <Col className='col-12 col-lg-4 col-md-6'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Digite seu Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        </Col>
        <Col className='col-12 col-lg-4 col-md-6'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
         </Col>
        
       
        </Row>
        <Row>
             <Col className='col-12 col-lg-4 col-md-6'>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Button variant="primary" type="submit">Submit</Button>
        </Form.Group>
        
        </Col>
        </Row>
      </Form> */}








// <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Digite seu Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>
      
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>












// <h1> React Bootstrap</h1>
// <Card style={{ width: '18rem' }}>
  
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aperiam esse sit inventore adipisci eaque quam incidunt eius fugit molestiae nihil voluptates eum dicta, libero odio omnis delectus. Asperiores, corrupti!
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
//   <Card.Footer>
//     <p
    
//     className="text-muted">Last updated 3 mins ago</p>
// </Card.Footer>

// </Card>
// </Container>





  {/* 
        m - margin -> [e: end, s: start, t: top, b: bottom, a: all] + tamanho (1 a 5)
        p - padding -> [e: end, s: start, t: top, b: bottom, a: all] + tamanho (1 a 5)
      */}
      
    //   <Button className="p-1" variant="primary">Botao</Button>{' '}
    //   <Button className="p-1" variant="secondary">Botao 2</Button>{' '}
    //   <Button variant="success">Botao 3</Button>{' '}
    //   <Button variant="warning">Botao 4</Button>{' '}
    //   <Button variant="danger">Botao 5</Button>{' '}
    //   <Button variant="info">Botao 6</Button>{' '} <br /><br />
    //   <Card style={{ width: '18rem' }}>

    //     <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card> <br />
    // <Card>
    //   <Card.Body>This is some text within a card body.</Card.Body>
    // </Card> <br />
    // <hr />
    // <Card body>This is some text within a card body.</Card>;











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




