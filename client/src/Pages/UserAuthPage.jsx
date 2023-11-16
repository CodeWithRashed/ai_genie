import { useState } from "react"
import Login from "../Components/UserAuth/Login"
import Registration from "../Components/UserAuth/Registration"


const UserAuthPage = () => {
  //Auth Page Switch Login / Register
  const [onPage, setOnPage] = useState ("Login")
  return (
    <div>
      {
        onPage == "Login" ?    <Login setOnPage={setOnPage} ></Login> :   <Registration setOnPage={setOnPage}></Registration>
      }
   
   
    </div>
  )
}


export default UserAuthPage
