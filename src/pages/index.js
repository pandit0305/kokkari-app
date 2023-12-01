import * as React from "react"
import '../styles/global.css';
import Header from "../components/header/Header";
import Footer from '../components/footer/Footer';
import HomePage from "../components/homePage/HomePage";
import HomeSection from '../components/homeSection/HomeSection';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage/>
        <HomeSection/>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
