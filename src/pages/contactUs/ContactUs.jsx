import "./contactUs.css";
import BreadcrumbMain from "../../components/breadCrumb/BreadCrumb";
import Contact from "../../components/contactUsPageCom/contactUs/Contact";

function ContactUs() {
  return (
    <div>
      <BreadcrumbMain
        pageName={"Contact Us"}
        data={[
          { name: "Home", link: "/" },
          { name: "Contact Us", link: "/contactus" },
        ]}
      ></BreadcrumbMain>
      <Contact></Contact>
    </div>
  );
}

export default ContactUs;
