import Button from "react-bootstrap/Button";

function Btn() {
  return (
    <>
      <Button className="btn-sass">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>
      <Button>Success</Button> <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default Btn;
