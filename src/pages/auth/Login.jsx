import React from "react";
import Form from "./components/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../componenets/Baseurl";

const Login = () => {
  const navigate = useNavigate();
  const loginData = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}login`, data);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/");
        localStorage.setItem("token", response.data.token);
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Form type="login" userData={loginData} />
    </>
  );
};

export default Login;
