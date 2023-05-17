import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export default function Feedback() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = {
        name,
        email,
        subject,
        feedback
       }
      // Send a POST request
      await axios.post("http://localhost:8080/feedback/add", response)
      .then(res => {
        console.log(response);
        alert("Feedback Added");
    })
    .catch(err => {
        console.log(err);
        alert("Can't add Feedback");
    });

      if (response.ok) {
        // Feedback submitted successfully
        console.log("Feedback submitted successfully");
        // Clear form fields
        setName("");
        setEmail("");
        setSubject("");
        setFeedback("");
      } else {
        // Handle error case
        console.log("Feedback submission failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <label class="form-label" for="form3Example3">Feedback Form</label>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
         type="text"
         placeholder="your name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="subject" 
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
         />
      </Form.Group>
      <Button type = "submit">Submit</Button>
    </Form>
    </div>
      </div>
    </div>
  );
}
