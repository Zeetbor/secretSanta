import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";
import Footer from "./components/Footer";
import Main from './components/Main'

function App() {

  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    callBackendAPI()
      .then((res) => console.log(res.express))
      .catch((err) => console.log(err));
  })

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };


  return (
    <div className="App">
      <Header></Header>

      <Main></Main>

      <Footer></Footer>
    </div>
  );
}

export default App;