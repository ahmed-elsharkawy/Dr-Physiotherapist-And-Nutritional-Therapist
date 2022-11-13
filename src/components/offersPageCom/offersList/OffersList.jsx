import { Container } from 'react-bootstrap'
import './offersList.css'

function OffersList({offersData}) {
  return (
    <div>
        <Container className='my-3'>
            <div className="row my-5">
                {offersData && offersData.map((item, index) => {
                  return(
                    <div key={index} className="col-lg-4 col-md-6">
                    <div className="item text-center border m-2 p-2 ">
                        <div className="img">
                            <img className='img-fluid' src={`https://myfarm.masool.net/eman-clinick/public/uploads/${item.img}`} alt="" />
                        </div>
                        <hr className='line1 ' />
                        <div className="data">
                            <h3 className='head mt-4'>{item.name}</h3>
                            <p className='par2'>{item.details}</p>
                            <button className='btn btn-primary mybtn'>Get Offer</button>
                        </div>
                    </div>
                </div>
                  )
                })}
            </div>
        </Container>
    </div>
  )
}

export default OffersList