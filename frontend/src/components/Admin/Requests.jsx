import React from "react";
import { Box, Button } from "@mui/material";
import Header from "../Payment/Header";
import axios from "axios";
import {Component} from "react";
import { Link } from "react-router-dom";

const Requests = (props) => (
  <tr>
    <td> {props.Requests._id}</td>
    <td> {props.Requests.userid}</td>
    <td> {props.Requests.province}</td>
    <td> {props.Requests.districts}</td>
    <td> {props.Requests.startdate.substring(0, 10)}</td>
    <td> {props.Requests.days}</td>
    <td>
      <Link to={"/packages"}> CREATE </Link>
    </td>
  </tr>
);

export default class Requests_Admin extends Component
{
  constructor ( props )
  {
    super( props );

    this.state = {
      Requests: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/requests/')
      .then(response => {
          this.setState({ Requests: response.data });
      })
      .catch((error) => {
          console.log(error);
      })
  }

  getPosts() {
    axios.get('http://localhost:8080/requests/')
      .then(response => {
          this.setState({ Requests: response.data });
      })
      .catch((error) => {
          console.log(error);
      })
  }

  RequestsList() {
    return this.state.Requests.map(currentRequests => {
        return <Requests Requests = { currentRequests }
        key = { currentRequests._id }
        />;
    })
  }

  render ()
  {
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
              {this.state.Requests.map((props) => (
                <tr>
                  <td>{props._id}</td>
                  <td>{props.userid}</td>
                  <td>{props.province}</td>
                  <td>{props.districts}</td>
                  <td>{props.startdate.substring(0, 10)}</td>
                  <td className="tbody">{props.days}</td>
                  <td className="tbody">
                    <Link to="/packages">
                      {" "}
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
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    );
    
  }

}
