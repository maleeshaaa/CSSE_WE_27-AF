import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "../../components/navbar";
import Form from "../../components/Blogs/form";
import Banner from "../../components/Blogs/banner";
import "./styles.css";
import BlogCard from "../../components/Blogs/BlogCard";
export default function blogmain() {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <Banner />
      </div>
      <div className="accordiandiv">
        <Accordion className="accordian_div">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Click here to post your BLOG</Accordion.Header>
            <Accordion.Body>
              <Form />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>{" "}
      </div>
    
        <div className="blog_cards">
            <BlogCard />
        </div>

    </div>
  );
}
