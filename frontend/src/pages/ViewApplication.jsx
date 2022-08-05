
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { SuccessMessage } from "../../components/Errormsg/errormsg";
import { Navigate, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function ViewApplication() {
  const navigate=useNavigate()
  const [app, setApp] = useState({});
  const [confirmation, setConfimration] = useState('')
  const id = JSON.parse(localStorage.getItem("appId"));
  console.log('id',id);

const viewApplication = async () => {
    let appDetails = await axios.get(`/viewApplication/${id[0]}`);
    console.log(appDetails);
    setApp(appDetails.data);
    console.log(app)
  }

  useEffect(()=>{viewApplication()}, []);

  return (
    <>
     
    <div style={{marginTop:'3%'}} >
      <div className="d-flex justify-content-around">
        <Container>
          <Card style={{ width: "100%" ,backgroundColor:'#f7f7f7'}}>
            <Card.Body>
              <div className="row">
                <div className="col-md-3">
                  <Card.Title>Company Name:</Card.Title>
                  <Card.Text>
                    {app.companyName}
                  </Card.Text>
                </div>
                <div className="col-md-3">
                  <Card.Title>Address:</Card.Title>
                  <Card.Text>
                  {app.address}
                  </Card.Text>
                </div>
                <div className="col-md-3">
                  <Card.Title>City:</Card.Title>
                  <Card.Text>
                  {app.city}
                  </Card.Text>
                </div>
                <div className="col-md-3">
                  <Card.Title>State:</Card.Title>
                  <Card.Text>
                  {app.state}
                  </Card.Text>
                </div>
              </div>
              <br></br>
              <div style={{textAlign:"center"}}>
              {/* <h2> Description</h2> */}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Card.Title>Team and Backgorund:</Card.Title>
                  <Card.Text>
                    {app.team}
                  </Card.Text>
                </div>
                <div className="col-md-6">
                  <Card.Title>Company and products:</Card.Title>
                  <Card.Text>
                  {app.product}
                  </Card.Text>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <Card.Title>Solution and uniqueness:</Card.Title>
                  <Card.Text>
                  {app.solution}
                  </Card.Text>
                </div>
                <div className="col-md-6">
                  <Card.Title>Value Propostions:</Card.Title>
                  <Card.Text>
                  {app.proposition}
                  </Card.Text>
                </div>
              </div>
              <br></br>
              <div className="row">
              <div className="col-md-6" style={{}}>
                <Card.Title>Incubation Type:</Card.Title>
                <Card.Text>{app.type}</Card.Text>
              </div>
              {app.slotCode!=="null" ? (
                <div className="col-md-6" style={{}}>
                  <Card.Title>Slot Code:</Card.Title>
                  <Card.Text>{app.slotCode}</Card.Text>
                </div>
              ) : (
                " "
              )}
              </div>

              
             
            </Card.Body>
          </Card>
          <div className="pt-2">
                <Button onClick={()=>navigate('/admin/track')}>
                    Back
                </Button>
              </div>
          <br></br>
          
        </Container>
      </div>
    </div>
    </>
  );
}

export default ViewApplication;