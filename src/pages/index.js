import * as React from "react"
import '../styles/global.css';
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import Footer from '../components/footer/Footer';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
