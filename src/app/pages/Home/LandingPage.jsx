import { Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const LandingPage = (props) => {
  return (
    <Row justify="center" style={{marginTop:"50px"}}>
      <Title>Jan Michael Ligutan's Portfolio Manager</Title>
      <img src="/assets/images/coming-soon.jpg" style={{width:"90%"}} alt="Coming Soon"></img>
    </Row>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
