import Card from "react-bootstrap/Card";

export default function BlogCard() {
  return (
    <div>
      <Card>
        <Card.Header as="h5">Blog Name</Card.Header>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Places</Card.Subtitle>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <footer className="blockquote-footer">
            Bloger Name 
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
}
