
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button} from "react-bootstrap";
import {
  Box,
  
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
// import DeteilsView from "./DeteilsView";

function TrackApplication() {
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [userStatus, setUserStatus] = useState("");
  const [sample, setSample] = useState(false);
  const navigate = useNavigate()

  const handleChange = (id, value) => {
    axios({
      method: "post",
      url: "/changingStatus",
      data: {
        id,
        value,
      },
    }).then(() => setSample(true));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "/allApplication",
    }).then((res) => setState(res.data));
  }, [sample]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const viewDeteils = async (id) => {
    const res = await axios.get(`/viewDeteils/${id}`);
    console.log(res.data, "res");
    setDetails(res.data);
    setOpen(true);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }} className="px-5">
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="px-5">
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell>Email</TableCell>
              <TableCell >CreatedAt</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >View </TableCell>
              <TableCell>Change Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row, i) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell >{row.createdAt}</TableCell>

                {row.status == "pending" && (
                  <TableCell >
                    {row.status}
                    <br />

                    <LinearProgress
                      variant="determinate"
                      value={50}
                      color="warning"
                    />
                  </TableCell>
                )}
                {row.status == "Registered" && (
                  <TableCell >
                    {row.status}
                    <br />

                    <LinearProgress
                      variant="determinate"
                      value={100}
                      color="primary"
                    />
                  </TableCell>
                )}
                {row.status == "Blocked" && (
                  <TableCell >
                    {row.status}
                    <br />

                    <LinearProgress
                      variant="determinate"
                      value={10}
                      color="error"
                    />
                  </TableCell>
                )}

                <TableCell  onClick={() => {
                                  navigate("/viewApplication");
                                  localStorage.setItem(
                                    "appId",
                                    JSON.stringify([row._id, row.user])
                                  );
                                }}>
                  <Button>Open</Button>
                </TableCell>

                {row.status !== "Registered" && row.status !== "Blocked" ? (
                  <TableCell>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-simple-select-label">
                        status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userStatus}
                        onChange={(e) => {
                          handleChange(row._id, e.target.value);
                        }}
                      >
                        <MenuItem value={1}>APPROVE</MenuItem>
                        <MenuItem value={2}>DENY</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                ) : (
                  ""
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button className="mt-3 ms-auto me-3" onClick={()=>navigate('/admin')}>Back</Button>
      
    </div>
  );
}

export default TrackApplication;