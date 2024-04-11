import React, { useContext } from "react";
import EmailJsComponent from "../components/EmailJsComponent";
import LoadingContext from "../components/LoadingContext";


const ContactPage = () => {
  const { setLoading } = useContext(LoadingContext);

  return (
    <div>
      <EmailJsComponent />
    </div>
  );
};

export default ContactPage;