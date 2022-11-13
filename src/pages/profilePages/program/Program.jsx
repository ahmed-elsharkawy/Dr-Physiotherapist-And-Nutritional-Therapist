import React from 'react'
import BreadcrumbMain from '../../../components/breadCrumb/BreadCrumb'

function Program() {
  return (
    <BreadcrumbMain
        pageName={"Program"}
        data={[
          { name: "Home", link: "/" },
          { name: "Profile", link: "/profile" },
          { name: "Program", link: "/profile/program" },
        ]}
      ></BreadcrumbMain>
  )
}

export default Program