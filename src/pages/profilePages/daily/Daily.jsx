import React from 'react'
import BreadcrumbMain from '../../../components/breadCrumb/BreadCrumb'

function Daily() {
  return (
    <BreadcrumbMain
        pageName={"Daily"}
        data={[
          { name: "Home", link: "/" },
          { name: "Profile", link: "/profile" },
          { name: "Daily", link: "/profile/daily" },
        ]}
      ></BreadcrumbMain>
  )
}

export default Daily