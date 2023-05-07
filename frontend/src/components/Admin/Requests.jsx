import React from "react";
import { Box, Button } from "@mui/material";
import Header from "../Payment/Header";

const Requests = () => {
  return (
    <Box m="0.0rem 0.0rem">
      <Header title="REQUESTS" subtitle="Travel Package Requests" />
      <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Request ID</th>
              <th>User ID</th>
              <th>Province</th>
              <th>District</th>
              <th>Date</th>
              <th className="tbody">No of Days</th>
              <th className="tbody">Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>633e3322fe649f9b22de19ef</td>
              <td>64569c01d4d5180affb57eb3</td>
              <td>Central</td>
              <td>Kandy, Matale</td>
              <td>2023-05-15</td>
              <td className="tbody">5</td>
              <td className="tbody">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                  }}
                >
                  CREATE
                </Button>
              </td>
            </tr>
          </tbody>
          {/* <tbody>
            <tr>
              <td>63701d74f03239bef0000150</td>
              <td>64788df4bff785240b000075</td>
              <td>Southern</td>
              <td>Galle</td>
              <td>2023-06-07</td>
              <td className="tbody">3</td>
              <td className="tbody">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                  }}
                >
                  CREATE
                </Button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>633e3322fe649f9b22de1912</td>
              <td>64569c01d4d5180affb57fc7</td>
              <td>North Central</td>
              <td>Anuradhapura, Polonnaruwa</td>
              <td>2023-06-28</td>
              <td className="tbody">7</td>
              <td className="tbody">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                  }}
                >
                  CREATE
                </Button>
              </td>
            </tr>
          </tbody> */}
          {/* <tbody>
            {this.state.Customers.map((props) => (
              <tr>
                <td>{props._id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.role}</td>
                <td>
                  <a
                    href=""
                    onClick={() => {
                      this.removeCustomer(props._id);
                    }}
                  >
                    <DeleteOutlineIcon className="deleteIcon" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </Box>
  );
};

export default Requests;
