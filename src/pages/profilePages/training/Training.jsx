import React from 'react'
import BreadcrumbMain from '../../../components/breadCrumb/BreadCrumb'

function Training() {
  return (
    <BreadcrumbMain
        pageName={"Training"}
        data={[
          { name: "Home", link: "/" },
          { name: "Profile", link: "/profile" },
          { name: "Training", link: "/profile/tarining" },
        ]}
      ></BreadcrumbMain>
  )
}

export default Training