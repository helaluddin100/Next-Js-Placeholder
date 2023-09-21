import React, { useEffect, useState } from "react";

function Skill() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/skill")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSkill(result);
      });
  }, []);
  return (
    <div>
      <section className="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading skills__head">
                <p>
                  my <span>skills</span>
                </p>
                <h2>I&lsquo;m Expert in this web software</h2>
              </div>
            </div>
          </div>
          <div className="row skills__amin">
            {skill.map((item) => (
              <div className="col-6 col-sm-4 col-lg-2" key={item}>
                <div className="skills__card">
                  <div className="skills__image">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <div className="skills__title">
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
