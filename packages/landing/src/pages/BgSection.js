import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import Container from "common/components/UI/Container";

const parallax = () => {
  if (global.window) {
    window.addEventListener("scroll", function (event) {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = this.pageYOffset;
      layers = document.querySelectorAll("[data-type='parallax']");
      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute("data-depth");
        movement = -(topDistance * depth);
        translate3d = "translate3d(0, " + movement + "px, 0)";
        layer.style["-webkit-transform"] = translate3d;
        layer.style["-moz-transform"] = translate3d;
        layer.style["-ms-transform"] = translate3d;
        layer.style["-o-transform"] = translate3d;
        layer.style.transform = translate3d;
      }
    });
  }
};
const BannerSection = ({ row, col, title, description }) => {
  return (
    <React.Fragment>
      <section className="main-slider">
        <div id="hero">
          <div
            className="layer-bg layer"
            data-depth="0.10"
            data-type="parallax"
          ></div>
          <div
            className="layer-1 layer"
            data-depth="0.20"
            data-type="parallax"
          ></div>
          <div
            className="layer-2 layer"
            data-depth="0.50"
            data-type="parallax"
          ></div>
        </div>
        <div className="heading-text">
          <Container>
            <Box className="row" {...row}>
              <Box className="col" {...col}>
                <FeatureBlock
                  title={
                    <Heading
                      content="$PIKA*"
                      style={{
                          fontSize:'8vw'
                      }}
                      {...title}
                    />
                  }
                  description={
                    <Text
                    style={{
                        maxWidth: '100%',
                        fontWeight:'bold'
                    }}
                      content="
                      PIKADEX IS A NFT PLATFORM BRINGING GAMING & FINANCE UNDER ONE
                      ROOF #GAMEFI AUTO YIELD TOKEN EARN WHILST HOLDING #YIELDFARMING
                      #AUTOYIELD #NFT"
                      {...description}
                    />
                  }
                />
              </Box>
            </Box>
          </Container>
        </div>
      </section>
      {parallax()}
    </React.Fragment>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "100%", "60%", "65%"],
  },
  title: {
    fontSize: ["26px", "34px", "42px", "42px", "47px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31",
  },
  description: {
    fontSize: ["14px", "16px", "18px", "18px", "20px"],
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px",
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "6px",
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    p: "5px 10px",
  },
};

export default BannerSection;
