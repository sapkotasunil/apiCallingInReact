import React from "react";
import Form from "./components/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../componenets/Baseurl";

const Register = () => {
  const navigate = useNavigate();
  const registerData = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}register`, data);
      if (response.status === 201) {
        navigate("/login");
      } else {
        console.log("register failed");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Form type="Register" userData={registerData} />
    </>
  );
};

export default Register;
