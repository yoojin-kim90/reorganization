import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar, Tables } from "react-bootstrap";
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <LHZ style={{ marginTop: "30px" }}>
          <Title>
            <h1>게시판</h1>
          </Title>
          <Roll>간단한 게시판입니다. 무슨 게시판으로 하지</Roll>
        </LHZ>
        <Link to="/post"><Writing>글쓰기</Writing></Link>

        <table className="table table-hover" style={topSapce}>
          <thead>
            <tr>
              <th scope="col">글번호</th>
              <th scope="col">글쓴이</th>
              <th scope="col">글제목</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <ButtonToolbar>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    
                    <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                </ButtonToolbar> */}
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

const topSapce = {
  marginTop: "50px",
  // borderTopStyle: "groove",
};

export default List;
