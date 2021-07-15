import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar, Tables } from "react-bootstrap";
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";




const Detail = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <LHZ style={{ marginTop: "30px" }}>
          <Title>
            <h1>제목</h1>
            <h10>글쓴이</h10>
          </Title>
          <Roll>내용들어감</Roll>
        </LHZ>
        <Link to="/"> <Writing >돌아가기</Writing></Link>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  width: 800px;
  margin: auto;
`;

const LHZ = styled.div`
  border-image: url("https://i.imgur.com/WglVaCQ.png") round;
  border-image-slice: 33% 33% fill;
  border-image-width: 50px 43px;
  margin: auto;
  padding: 50px 43px 50px 43px;
`;

const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 0px 8px 0px;
  color: white;
  text-align: center;
  font-weight: bold;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Roll = styled.div`
  margin: 10px 0px 0px 0px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 5px;
  text-align: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Writing = styled.button`
  width: 174px;
  height: 57px;
  background-image: url("https://i.imgur.com/Ltf8xGc.png");
  border: 0px;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding-left: 25px;
  font-size: large;

  display: block;
  margin: auto;
  font-weight: bold;
  :hover {
    color: yellow;
  }
`;

export default Detail;
