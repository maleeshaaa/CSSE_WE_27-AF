import React from "react";
import { Box } from "@mui/material";
import Header from "../Payment/Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
              <th>No of Days</th>
              <th>From</th>
              <th>To</th>
              <th>Action</th>
            </tr>
          </thead>
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
