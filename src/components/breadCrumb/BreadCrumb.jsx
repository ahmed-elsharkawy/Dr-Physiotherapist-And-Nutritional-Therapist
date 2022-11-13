import "./breadCrumb.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";

const BreadcrumbMain = ({ pageName, data }) => {
  return (
    <div className="breadCrumb d-flex align-items-center">
        <Container className="h-50">
        <h1 className="head text-white my-4">{pageName}</h1>
      <Breadcrumb>
        {data.map((item, index, list) => {
          return (
            <Breadcrumb.Item key={index} active={index === list.length-1} href={item.link}>{item.name}</Breadcrumb.Item>
          );
        })}
        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
    </Container>
    </div>
  );
};

export default BreadcrumbMain;
