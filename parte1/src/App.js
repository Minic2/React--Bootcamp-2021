
import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {


  return <p>Esta es la app del curso </p>
}

function App() {
  
  // const date = new Date()
  // const dateFazt  = date.getFullYear()
  // return (
  //   <div className="App">
  //    <h1>Sitio en mantenimiento</h1>
  //    <div>

  //    <p className="letras">Horario</p>
  //    <br></br>
  //     <strong >{date.toLocaleTimeString()}</strong> 
  //      <br></br>
  //     <p className="letras">{dateFazt}</p> 
  //    </div>
  //    <br></br>
     
     
  //   </div>
  // );
  return(

    <div className= 'App'>

      <Mensaje color= 'blue' message = 'uno'/>
      <Mensaje color= 'red' message= 'dos'/>
      <Mensaje color= 'green' message = 'tres'   />
      <Description/>
    </div>
  )
}

export default App;
