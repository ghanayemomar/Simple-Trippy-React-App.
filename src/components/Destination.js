import React from "react";
import DestinationData from "./DestinationData";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import "./DestinationStyle.css";
const Destination = () => {
  return (
    <React.Fragment>
      <div className="destination">
        <h1>Popular Destinations</h1>

        <p>Tours giveyou the opportunuty to live</p>
        <DestinationData
        className="first-des"
          heading="Taal Volcano, Batangas"
          text="This layout may involve putting space between words (called inter-word space), but conventions for inter-word space vary from script to script. For example, in Latin scripts, inter-word space is typically rendered as an ASCII space ( ), while in Thai it is a zero-width word separator (​). In Japanese and Chinese, inter-word space is not typically rendered at all."
          img1={img1}
          img2={img2}
        />
        <DestinationData
        className="first-des-rev"
          heading="Mt. Daguldul, Batangas"
          text="Hiking is a wonderful way to immerse yourself in the outdoors. Transported by your own two feet and carrying only what you need for the day on your back, you can discover the beauty of nature at whatever pace you’re comfortable with. And, with a little planning and preparation, it’s an activity that almost anyone can do."
          img1={img3}
          img2={img4}
        />
      </div>
    </React.Fragment>
  );
};

export default Destination;
