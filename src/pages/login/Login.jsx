import React, { useContext } from 'react'
import BreadcrumbMain from '../../components/breadCrumb/BreadCrumb'
import LoginForm from '../../components/loginPageCom/loginForm/LoginForm'

function Login() {

  return (
    <div className=''>
      <BreadcrumbMain
        pageName={"Login"}
        data={[
          { name: "Home", link: "/" },
          { name: "Login", link: "/login" },
        ]}
      ></BreadcrumbMain>
        <LoginForm></LoginForm>
    </div>
  )
}

export default Login