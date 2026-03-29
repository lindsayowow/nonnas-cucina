import profilePic from "../assets/profilepic.jpg";
import "../styles/bio.css";

export default function Bio() {
  return (
    <div className="about-section card bio">
      <div className="bio-inner">
        <h2 className="text-center">About the Developer</h2>

        <img
          src={profilePic}
          alt="Developer profile"
          className="proPic"
        />

        <p className="text-readable">
          Hi! I'm Lindsay, a software development student building tools that make
          ordering safer for families with complex dietary needs. Nonna's Cucina
          was inspired by the challenges families face when trying to order food
          safely, especially when dealing with allergies, dietary restrictions, or
          language barriers. This app combines visual selection with smart
          filtering to help everyone build safe, delicious meals.
        </p>

        <div className="bioButtons">
          <a
            href="https://github.com/lindsayowow"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">GitHub</button>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
}