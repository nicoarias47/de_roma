import React from "react";

const About = () => {
  return (
    <>
      <p className="showpath"> Inicio | Quienes Somos </p>
      <div className="about_container">
        <header>
          <i>chicas</i>
          <br />
          <h2>De Roma</h2>
        </header>
        <section className="section1 waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L40,96C80,96,160,96,240,112C320,128,400,160,480,160C560,160,640,128,720,96C800,64,880,32,960,32C1040,32,1120,64,1200,96C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <h3>¿Quienes somos?</h3>
          <p>
            Aca hay un poco de todo, hermanas, amigas y socias, Anto y Marijo,
            vivimos en la cuidad de Buenos Aires y este proyecto comenzó con la
            idea de poder crear espacios únicos y llegar a todos los hogares de
            Argentina.
          </p>
        </section>
        <section className="section2 waves">
          <h3>¿En que nos diferenciamos?</h3>
          <p>
            Traemos y seleccionamos productos que están fuera de lo común eso
            que ves en todos lados repetido acá no lo vas a encontrar ya que
            nuestra misión es poder hacer de tus espacios algo único, que
            reflejen quien sos.
          </p>
        </section>
        <section className="section3 waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L40,96C80,96,160,96,240,112C320,128,400,160,480,160C560,160,640,128,720,96C800,64,880,32,960,32C1040,32,1120,64,1200,96C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>

          <h3>¿Por qué lo hacemos?</h3>
          <p>
            Lo hacemos por pasión. Queremos ser un referente a la hora en que
            los argentinos se pregunten: ¿Y donde puedo comprar decoración de
            calidad, útil, única y de buen gusto? Y la respuesta sea De Roma.
          </p>
        </section>
        <section className="section4">
          <h3>Seguínos y se parte de esta comunidad</h3>
        </section>
      </div>
    </>
  );
};

export default About;
