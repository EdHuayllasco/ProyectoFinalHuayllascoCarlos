import { Container } from 'react-bootstrap'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = 'Bienvenid@s'/>
       
    </>
  )
}

export default App
