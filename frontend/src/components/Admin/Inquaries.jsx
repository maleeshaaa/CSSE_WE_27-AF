import React from 'react';
import { Box, Button } from "@mui/material";
import Header from "../Payment/Header";

const Inquaries = () => {
  return (
    <Box m="0.0rem 0.0rem">
      <Header title="INQUIRIES" subtitle="Custom Package Inquaries" />
      <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Inquire ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th className="tbody">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>63701cc1f03239c72c000181</td>
              <td>John Doe</td>
              <td>johndoe97@gmail.com</td>
              <td>0718989899</td>
              <td>
                I really like the package that you created for me. Thank you for
                the support.
              </td>
              <td className="tbody">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                    marginBottom: "0.5rem",
                    width: "6rem",
                  }}
                >
                  CREATE
                </Button>
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                  }}
                >
                  REMOVE
                </Button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>63701d74f03239528f000019</td>
              <td>Olly Fernandez</td>
              <td>ollyfdo@gmail.com</td>
              <td>0764547444</td>
              <td className="message-field">
                I appriciate the support that you gave for me. Hoping to get
                your service again. Thank you so much.
              </td>
              <td className="tbody">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                    marginBottom: "0.5rem",
                    width: "6rem",
                  }}
                >
                  CREATE
                </Button>
                <Button
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Lucida Sans",
                  }}
                >
                  REMOVE
                </Button>
              </td>
            </tr>
          </tbody>
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