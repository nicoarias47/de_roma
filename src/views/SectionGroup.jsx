import React from "react";
import Difu from "../assets/img/difu.png";


function SectionGroup() {
  return (
    <div className="section-group">
    <section>
      <div>
      {/* <img
          className="img"
          src={Difu}
          alt="sectionphoto"
        /> */}
        <h2>PRODUCTOS ESTRELLA</h2>
      </div>
    </section>
    {/* ---- */}
    <section>
      <div>
      {/* <img
          className="img"
          src={Difu}
          alt="sectionphoto"
        /> */}
        <h2>ILUMINACION</h2>
      </div>
    </section>
        {/* ---- */}
    <section>
      <div>
      {/* <img
          className="img"
          src={Difu}
          alt="sectionphoto"
        /> */}
        <h2>AROMAS</h2>
      </div>
    </section>  
    </div>
  );
}

export default SectionGroup;
