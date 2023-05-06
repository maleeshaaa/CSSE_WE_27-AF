import React from 'react';
import { Box } from "@mui/material";
import Header from "../Payment/Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Inquaries = () => {
  return (
    <Box m="0.0rem 0.0rem">
      <Header title="INQUARIES" subtitle="Custom Package Inquaries" />
      <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Inquire ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message</th>
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
}

export default Inquaries