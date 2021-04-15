import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { cryptoTheme } from "common/theme/crypto";
import { ResetCSS } from "common/assets/css/style";
import { GlobalStyle, ContentWrapper } from "containers/Crypto/crypto.style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Crypto/Navbar";
import Banner from "./BgSection";
import ControlSections from "containers/Crypto/ControlSection";
import TrustedProofSections from "containers/Crypto/TrustedProof";
import ScalableSections from "containers/Crypto/ScalableSection";
import SlideSections from "containers/Crypto/CryptoSlides";
import BetaSections from "containers/Crypto/BetaSection";
import Footer from "containers/Crypto/Footer";
import PikaCards from "./PikaCards";
import Tokenomics from "./Tokenomics";
import OurTeam from "./OurTeam";

const Crypto = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>Amit</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700|Heebo:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <div className="mainbg2" id="pikas">
            <PikaCards id="pikas"/>
          </div>

          <div className="mainbg3" id="tokenomics">
            <Tokenomics id="tokenomics"/>
          </div>
          <div className="mainbg4" id="team">
            <OurTeam id="team"/>
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Crypto;
