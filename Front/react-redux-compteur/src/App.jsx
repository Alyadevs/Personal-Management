

import './App.css'
import Compteur from './Components/Compteur'
import Personne from './Components/Personne'
import ListePersonne from './Components/ListePersonne'
import UserList from './Components/UserList'
import UserForm from './Components/UserForm'
function App() {

  return (
    <>
      <div> 
      <h1 style={{ textAlign: "center", color: "#0078d7" }}> 
       
        Gestion des Utilisateurs
      </h1> 
      {/* <Compteur />  */}
      {/* <Personne/>
      <ListePersonne/> */}
      <UserForm/>
      <UserList/>
    </div>
    </>
  )
}

export default App
