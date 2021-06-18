import NavBar from './components/navbar/NavBar'
import Search from './components/search/Search'
import { CssBaseline, Container } from '@material-ui/core'
import './App.css'

function App() {
  return (
    <CssBaseline>
      <NavBar />
      <Container className='home-container'>
        <Search />
      </Container>
    </CssBaseline>
  )
}

export default App
