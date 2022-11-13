import axios from "axios";
import React, { useEffect, useState } from "react"
import BreadcrumbMain from '../../components/breadCrumb/BreadCrumb'
import Loader from "../../components/loader/Loader";
import ServiceList from '../../components/servicePageCom/serviceList/ServiceList'

function Service() {
  const [serviceData, setServiceData] = useState([]);

  const catchData = async () => {
    axios({
      url: "https://myfarm.masool.net/eman-clinick/public/api/home",
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      setServiceData(response.data.data.services);
    });
  };

  useEffect(() => {
    // Fetch the data
    catchData();
  }, []);
  return (
    <div>
      <BreadcrumbMain 
        pageName={"Service"}
        data={[
          { name: "Home", link: "/" },
          { name: "Service", link: "/service" },
        ]}
      >
      </BreadcrumbMain>
      {serviceData.length? <ServiceList serviceData={serviceData}></ServiceList> : <Loader></Loader>}
        
    </div>
  )
}

export default Service