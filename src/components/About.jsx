import { useState } from "react";
import Section from "./Section";
import { about } from "../data";
import { getImage } from "./images";

const photo = getImage("my-profile.png");

function ProfileImage() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="profile">
      <div className="profile__frame">
        {!photo || failed ? (
          <div className="profile__fallback" aria-hidden="true">KD</div>
        ) : (
          <img src={photo} alt="Portrait of Kanika Dobliyal" onError={() => setFailed(true)} />
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about">
        <div className="about__text">
          {about.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <ProfileImage />
      </div>
    </Section>
  );
}