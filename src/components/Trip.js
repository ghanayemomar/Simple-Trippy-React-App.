import React from "react";
import TripData from "./TripData";
import "./TripStyle.css";
import t1 from "../assets/5.jpg";
import t2 from "../assets/8.jpg";
import t3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google Maps.</p>
      <div className="tripcard">
        <TripData
          img={t1}
          header="Trip In Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          img={t2}
          header="Trip In USA"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          img={t3}
          header="Trip In EAS"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
      </div>
    </div>
  );
};
export default Trip;
