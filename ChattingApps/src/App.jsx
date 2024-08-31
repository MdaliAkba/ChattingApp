import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navber from './Components/Navber'
import Header from './Components/Header'
import Error from './pages/Error/Error'
import Registation from './pages/registation/Registation'
import Login from './pages/login/Login'






function App() {
  return (
 <>
  
<Navber />

<Routes>
  <Route path='/' element={ <Login />} />
  <Route path='/registation' element={ <Registation /> } />
  <Route path='/header' element={ <Header /> } />
  <Route path='*' element={ <Error /> } />

</Routes>


 </>
  )
}

export default App
