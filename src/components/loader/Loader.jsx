import Spinner from "react-bootstrap/Spinner";
import "./loader.css";

function Loader() {
  return (
    <>
      <div className="load d-flex justify-content-center">
        <Spinner animation="border" className="loader" />
      </div>
    </>
  );
}

export default Loader;
