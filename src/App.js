import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "styled-bootstrap-grid";
import headerApp from "./Component/headerApp";
import bodyApp from "./Component/bodyApp";
import footerApp from "./Component/footerApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdArrowBack, MdArrowForward, MdMenu } from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FiCircle } from "react-icons/fi";
import { FaFacebookF ,FaLinkedinIn,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";
import styled from 'styled-components';


var useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const label = styled.label({
    color : "#C8C8C7"
  })


function App() {
    
  var classes = useStyles();
  var [age, setAge] = React.useState('');
  var inputLabel = React.useRef(null);
  var [labelWidth, setLabelWidth] = React.useState(0);
  

    return (
      <Container fluid="true" className="App">
        <Container fluid="true" className="header">
          <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
            <Col
              md={4}
              className="Col"
            >
              <div style={{fontSize: "20px",marginTop: "25px",textAlign:"left",paddingLeft:"20%"}}><MdMenu style={{marginBottom: "-5px"}}/> <label  style={{fontSize: "20px",marginTop: "25px",textAlign:"left",paddingLeft:"20%",color:"#fff"}}>MENU</label>{" "}</div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <h4> BELOMNT </h4> <h4> GRANGE </h4>{" "}
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{fontSize: "10px",marginTop: "25px",textAlign:"right",paddingRight:"20%"}}>REGISTER{" "}</div>
            </Col>{" "}
          </Row>{" "}
          <Row style={{ marginLeft: "0px", marginRight: "0px",paddingTop:"25px" }}>
          <Col
              className="Col"
            >
              <div >
                <label style={{fontSize: "7px"}}>LATEST</label>
              </div>
              </Col>
          </Row>
          <Row style={{ marginLeft: "0px", marginRight: "0px",paddingTop:"15px" }}>
          <Col
              className="Col"
            >
              <div >
                <h1 style={{fontFamily: "nolanmedium"}}>NEWS</h1>
              </div>
              </Col>
          </Row>
        </Container>{" "}
        <Container
          className="Articles"
          style={{
            marginTop: "-100px",
            boxShadow:
              "rgb(255, 255, 255) 0px 1px 100px, rgb(255, 255, 255) 0px 1px 150px"
          }}
        >
          <Row
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              paddingTop: "30px"
            }}
          >
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/1.png")} style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Etiam porta sem malesuada magna mollis euismod. </p>{" "}</div>
              
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 04, 18 </label>{" "}
              <img src={require("./Images/2.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus. </p>{" "}
              </div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}>
              <label> NOV 16, 18 </label>{" "}
              <img src={require("./Images/3.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>{" "}
              </div>
            </Col>{" "}
          </Row>{" "}
          <Row
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              paddingTop: "30px"
            }}
          >
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/4.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Etiam porta sem malesuada magna mollis euismod. </p>{" "}
              </div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/5.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus. </p>{" "}</div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/6.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.. </p>{" "}</div>
            </Col>{" "}
          </Row>{" "}
          <Row
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              paddingTop: "30px"
            }}
          >
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/7.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Etiam porta sem malesuada magna mollis euismod. </p>{" "}</div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/8.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus. </p>{" "}</div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/9.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.. </p>{" "}</div>
            </Col>{" "}
          </Row>{" "}
          <Row
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              paddingTop: "30px"
            }}
          >
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/10.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Etiam porta sem malesuada magna mollis euismod. </p>{" "}</div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/11.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus. </p>{" "}</div>
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{
                textAlign: "center",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}><label> DEC 20, 18 </label>{" "}
              <img src={require("./Images/12.png")}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} />{" "}
              <p className="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>{" "}</div>
            </Col>{" "}
          </Row>{" "}
          
          <Row
             className="Rowstyle"
          >
            <Col
              md={4}
              style={{
                textAlign: "left",
                color: "#C8C8C7",
                paddingLeft: "0px",
                paddingRight: "0px"
              }}
            >
              <div style={{ paddingLeft: "20px" }}>
                <MdArrowBack style={{ fontSize: "24px" }} />{" "}
              </div>{" "}
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{ color: "#C8C8C7" }}>
              <FiCircle  style={{ fontSize: "28px" }}/>
                <FiCircle   style={{ fontSize: "28px" }}/>
                <FiCircle   style={{ fontSize: "28px" }}/>
              </div>{" "}
            </Col>{" "}
            <Col
              md={4}
              style={{
                textAlign: "right",
                color: "#C8C8C7",
                paddingLeft: "0px",
                paddingRight: "0px"
              }}
            >
              <div style={{ paddingRight: "20px" }}>
                <MdArrowForward style={{ fontSize: "24px" }} />{" "}
              </div>{" "}
            </Col>{" "}
          </Row>{" "}
        </Container>{" "}
        <Container className="form">
          <Row
             className="Rowstyle"
          >
            <Col
              md={6}
              style={{
                textAlign: "left",
                color: "#C8C8C7",
                paddingLeft: "0px",
                paddingRight: "0px"
              }}
            >
              <div style={{ paddingLeft: "20px",width:"70%",textAlign:"center" }}>
              <FormControl className={classes.formControl}  style={{ width:"100%" }}>
                <InputLabel  id="demo-simple-select-outlined-label">
                Age
                </InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}

                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20} >Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl><br/>
            <TextField id="Name" label="Name"   style={{ width:"100%" }} /><br/>
            <TextField id="Email" label="Email Address"   style={{ width:"100%" }}  /><br/>
            <TextField id="telephone" label="telephone"   style={{ width:"100%" }}  /><br/>

              </div>{" "}
            </Col>
            <Col
              md={6}
               className="styleColLast"
            >
                <div  className="stylediv">
                    <div style={{ paddingRight: "20px",paddingLeft: "20px" }}>
                        <label>UPDATES</label>
                    </div>
                    <div style={{ paddingRight: "20px",paddingLeft: "20px" }}>
                        <h2>JOIN THE CLUB</h2>
                    </div>
                    <div style={{ paddingRight: "20px",paddingLeft: "20px" }}>
                        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. </p>
                    </div>
                </div>
            </Col>{" "}
          </Row>{" "}



          <Row
             className="Rowstyle"
          >
            <Col>
              <div style={{ width:"100%",textAlign:"center" }}>
              <Button  style={{ border:"solid #C17A62 1px" , color:"#C17A62",width:"200px",fontSize:"10px" }}>SUBMIT</Button>


              </div>{" "}
            </Col>
            
          </Row>{" "}


        </Container>{" "}
        <Container fluid="true" className="footer">
        <Row
             className="Rowstyle"
          >
              <Container className="footer">
          <Row
               className="Rowstyle"
            >
            <Col
              md={4}
               className="stylecol"
            >
              <div className="divStyle">
              <p  className="pstyle" >
                  <a href="#"  >LOCATION</a><br/>
                  <a href="#" >DEVELOPEMENT</a><br/>
                  <a href="#" >LIFESTYLE</a><br/>
                  <a href="#" >TEAM</a><br/></p>
              </div>{" "}
            </Col>{" "}
            <Col
              md={4}
              className="Col"
            >
              <div style={{textAlign: "center", color: "#C17A62",fontFamily: "nolan" }}>
                <p  className="textp" >ROSSETT GREEN LANE</p>
                <h2 className="h2style">BELMONT</h2>
                <h2 className="h2style">" GRANGE "</h2>
                <p  className="textp" >HARROGATE</p>
              </div>{" "}
            </Col>{" "}
            <Col
              md={4}
              style={{
                textAlign: "right",
                color: "#C8C8C7",
                paddingLeft: "0px",
                paddingRight: "0px"
              }}
            >
              <div className="divStyle">
              <p  className="pstyle" >
                  <a href="#"  >CONTACT</a><br/>
                  <a href="#" >NEWS</a><br/>
                  <a href="#" >REGISTER</a><br/>
                  <a href="#" >TERMS</a><br/></p>
              </div>{" "}
            </Col>{" "}
            </Row>{" "}
            <Row
               className="Rowstyle"
            >
            <Col
              md={12}
               className="stylecol"
            >
                          <TextField id="EmailAddress" label="Your Email Here"   style={{ width:"90%",color: "#C17A62" }}  />
                          <MdArrowForward style={{ fontSize: "25px",marginTop:"25px",color: "#C17A62" }} /><br/>

            </Col>{" "}
            </Row>{" "}
            <Row
               className="Rowstyle"
            >
            <Col
              md={12}
               className="stylecol"
            >
                <FaInstagram  className="social"/>{"  "}
                <FaTwitter  className="social"/>{"  "}
                <FaFacebookF  className="social"/>{"  "}
                <FaLinkedinIn  className="social"/>{"  "}
                <FaYoutube  className="social"/>
            </Col>{" "}
            </Row>{" "}
        </Container>{" "}
          </Row>{" "}
        </Container>{" "}
      </Container>
    );
            
}
export default App;
