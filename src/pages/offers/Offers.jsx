import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BreadcrumbMain from '../../components/breadCrumb/BreadCrumb'
import Loader from '../../components/loader/Loader';
import OffersList from '../../components/offersPageCom/offersList/OffersList'

function Offers() {
  const [ offersData, setOffersData ] = useState([])

  const catchData = async () => {
      axios({
        url: "https://myfarm.masool.net/eman-clinick/public/api/offers",
        method: "GET",
        dataResponse: "json",
      }).then((response) => {
          setOffersData(response.data.data.offers);
      });
  
    };
  
  useEffect(() => {
    // Fetch the data
    catchData();
  }, []);
  return (
    <div>
      <BreadcrumbMain 
        pageName={"Offers"}
        data={[
          { name: "Home", link: "/" },
          { name: "Offers", link: "/offers" },
        ]}
      >
      </BreadcrumbMain>
      { offersData.length? <OffersList offersData={offersData}></OffersList> : <Loader></Loader>}
        
    </div>
  )
}

export default Offers