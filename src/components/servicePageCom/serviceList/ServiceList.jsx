import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./serviceList.css";

function ServiceList({serviceData}) {
 

  return (
    <div className="serviceList">
      <Container className="my-3">
        <div className="row my-5">
          {serviceData &&
            serviceData.map((item, index) => {
              return (
                <Col key={index} md="6" className="">
                  <div
                    className="item m-1 border"
                    style={{
                      backgroundImage: `url(https://myfarm.masool.net/eman-clinick/public/uploads/${item.img})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="overlay"></div>
                    <h3 className="bg-white border p-3 lead shadow">
                      {item.name}
                    </h3>
                  </div>
                </Col>
              );
            })}
        </div>
      </Container>
    </div>
  );
}

export default ServiceList;
