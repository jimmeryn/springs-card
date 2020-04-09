import React from "react";

const data = require("./data.json");

const language =
  (window.navigator.userLanguage || window.navigator.language) === "pl"
    ? "pl"
    : "eng";

const Info = ({ reference }) => (
  <div className="info" ref={reference}>
    <h1>{data.infoText[language].ContactUs}</h1>
    <div className="info-inside">
      <div className="contactForm">
        <div className="contactForm-inside"></div>
        <div>
          {`I hereby grant my consent to processing of my personal data by the
          controller SEMA Springs for the purposes of contact and providing me
          information I request, to the e-mail address submitted in the contact
          form. We inform you that your consent may be withdrawn in any moment
          by sending e-mail to the following address sema.springs@gmail.com from
          the address to which the consent refers.`}
        </div>
      </div>
      <div className="contactInfo">
        <h2>{data.infoText[language].Contact}</h2>
        <div>
          {data.infoText[language].Telephone}
          {`: +48 606 544 097`}
        </div>
        <div>
          {`${data.infoText[language].Email}: `}
          <a href="mailto: sema.springs@gmail.com">{`sema.springs@gmail.com`}</a>
        </div>
        <h2>{data.infoText[language].Adress}</h2>
        <div>{`ul. Słoneczna 6`}</div>
        <div>{`46-100 Namysłów, Poland`}</div>
      </div>
    </div>
  </div>
);

export default Info;
