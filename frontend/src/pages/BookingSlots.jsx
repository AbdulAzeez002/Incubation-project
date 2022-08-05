import React, { useEffect, useState, useContext } from "react";
// import "./slot.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
// import { tokenContext } from "../../store/tokenContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookingSlots() {
  const navigate = useNavigate();
  let A, B, C, D, E;

  // let applicantId
  // var slotId,slotSection
  // const { token, setToken } = useContext(tokenContext);

  const [sectionA, setSectionA] = useState([]);
  const [sectionB, setSectionB] = useState([]);
  const [sectionC, setSectionC] = useState([]);
  const [sectionD, setSectionD] = useState([]);
  const [sectionE, setSectionE] = useState([]);

  const [slotId, setSlotId] = useState("");
  const [slotSection, setSlotSection] = useState("");
  // console.log("sotttt"+slotId, slotSection);
  const [applicantsList, setApplicantsList] = useState([]);
  const [applicantId, setApplicantId] = useState("");

  // modal

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const removeCompany = async () => {
    if (applicantId) {
      console.log(applicantId);
      const data = { applicantId };
      const response = await axios.patch(
        "/slotDuplicate",
        data
      );
      console.log(response.data);
      if (response.data) {
        setApplicantId("");
        handleClose();
      }
    } else {
      console.log("apllnull");
      handleClose();
    }
  };

  
  useEffect(() => {
    displaySlots();
    applicants();
  }, [removeCompany]);

  const applicants = async () => {
    console.log("kkkkkk");
    const req = await axios.get("/getApplications");
    
    const response = req.data;
    
    const records = response.filter((item) => {
      return !item.bookingStatus;
    });

    setApplicantsList(records);
  };

  const displaySlots = async () => {
    const req = await axios.get("/getBookingSlots");
    // console.log(req.data);
    // console.log('abccccccccccccccccccccccccccccccc');

    const response =  req.data
    // console.log(response);
    const slots = response;
    // console.log(slots);

    A = slots.filter((item) => {
      return item.section === "A";
    });
    setSectionA(A);

    B = slots.filter((item) => {
      return item.section === "B";
    });
    setSectionB(B);

    C = slots.filter((item) => {
      return item.section === "C";
    });
    setSectionC(C);

    D = slots.filter((item) => {
      return item.section === "D";
    });
    setSectionD(D);

    E = slots.filter((item) => {
      return item.section === "E";
    });
    setSectionE(E);
  };
  const handleShow = (slot_id, slot_section) => {
    setSlotId(slot_id);
    // slotSection=slot_section
    setSlotSection(slot_section);
    // console.log("sotttt"+slotId, slotSection);

    setShow(true);
  };

  const slotBooking = async (id) => {
    console.log("ghjkl;kjhg");
    let applicantId = id;
    setApplicantId(applicantId);
    console.log(applicantId, slotId, slotSection);
    const data = { applicantId, slotId, slotSection };
    await axios.post(
      "/slotUpdate",
      data
    );
    displaySlots()
  };

  // console.log(sectionA);

  return (
    <>
      
      <div className="container pt-5 pb-5 me-3">
        <h2 className="">Book Slots </h2>

        <Button onClick={()=>{navigate(-1)}}>Back</Button>
        <div className="row g-5 mt-3">
          <div className=" row-12">
            <div className="row g-3">
              {sectionA &&
                sectionA.map((item, index) => {
                  return (
                    <div className="col-1">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${
                          item.selected ? " bg-success" : "bg-danger"
                        } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-3">
            <div className="row g-3">
              {sectionB &&
                sectionB.map((item, index) => {
                  return (
                    <div className="col-6">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${
                          item.selected ? " bg-success" : "bg-danger"
                        } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-3">
            <div className="row g-3">
              {sectionC &&
                sectionC.map((item, index) => {
                  return (
                    <div className="col-6">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${
                          item.selected ? " bg-success" : "bg-danger"
                        } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-3">
            <div className="row g-3">
              {sectionD &&
                sectionD.map((item, index) => {
                  return (
                    <div className="col-6">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${
                          item.selected ? " bg-success" : "bg-danger"
                        } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>



          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select a Company</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  slotBooking(e.target.value);
                }}
              >
                <option selected>--select--</option>

                {applicantsList &&
                  applicantsList.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {" "}
                        {item.companyName}
                      </option>
                    );
                  })}
              </select>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="danger" onClick={handleClose}>
              Close
            </Button> */}
              <Button variant="primary" onClick={removeCompany}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default BookingSlots;