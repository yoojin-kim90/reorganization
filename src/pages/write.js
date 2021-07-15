import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPen, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Write= (props)=> {
    return (
        <React.Fragment>
            <Wrap>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" aria-describedby="titleHelp" placeholder="제목을 입력하세요" style={marg}/>
                        <input type="text" className="form-control" id="writer" aria-describedby="writerHelp" placeholder="글쓴이를 입력하세요" style={marg}/>
                        <textarea className="form-control" id="desc" rows="3" placeholder="내용을 입력하세요" style={marg}></textarea>
                    </div>
                </form>

                <Button variant="success" style={{'borderRadius':'20px'}}><FontAwesomeIcon icon={faPlus}/></Button>
                <Button variant="success" style={{'borderRadius':'20px'}}><FontAwesomeIcon icon={faPen}/></Button>
            </Wrap>
        </React.Fragment>
    );
}


const Wrap=styled.div`
    width: 800px;
    margin: auto;
    `;

const marg = {
    margin: "20px", 
    // borderTopStyle: "groove",
    }

export default Write;