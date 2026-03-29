import Bio from "../components/Bio";
import Form from "../components/Form";

export default function About() {
  return (
    <div className="about-page">
      <h1 className="text-center">About the Developer</h1>

      <Bio />

      <h2 className="text-center">Contact Form</h2>
      <Form />
    </div>
  );
}