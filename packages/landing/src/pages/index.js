import React, { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/theme/crypto';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
const Navbar = dynamic(() => import('containers/Crypto/Navbar'), {
  ssr: false,
});
import Banner from './BgSection';
import Footer from 'containers/Crypto/Footer';
import PikaCards from './PikaCards';
import Tokenomics from './Tokenomics';
import OurTeam from './OurTeam';

const Crypto = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>PikaPad </title>
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
            <PikaCards id="pikas" />
          </div>

          <div className="mainbg3" id="tokenomics">
            <Tokenomics id="tokenomics" />
          </div>
          <div className="mainbg4" id="team">
            <OurTeam id="team" />
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Crypto;
