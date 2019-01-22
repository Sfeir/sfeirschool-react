import React from "react";

// decompose this component using Card
// and appropriate subcomponents of Card to be implemented.
// define a person prop and replace static data

export const PersonCard = () => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">
      <figure>
        <img
          src="https://randomuser.me/portraits/women/85.jpg"
          alt="face of Leanne"
        />
      </figure>
      <header>
        <h1 className="mdc-typography--headline5">
          <a href="/person/5763cd4d9d2a4f259b53c901">Leanne Woodard</a>
        </h1>
        <h2 className="mdc-typography--subtitle1">Developer</h2>
      </header>
      <p>
        <i
          className="rmwc-icon material-icons rmwc-icon--size-small"
          title="email"
        >
          email
        </i>
        &nbsp;
        <a href="mailto:Leanne.Woodard@BIOSPAN.com">woodard.l@acme.com</a>
      </p>
      <p>
        <i
          className="rmwc-icon material-icons rmwc-icon--size-small"
          title="phone"
        >
          phone
        </i>
        &nbsp;<a href="tel:0784112248">0784112248</a>
      </p>
      <p>
        <i
          className="rmwc-icon material-icons rmwc-icon--size-small"
          title="manager"
        >
          supervisor_account
        </i>
        &nbsp;<a href="/person/5763cd4d3b57c672861bfa1f">Erika</a>
      </p>
    </div>
  </section>
);
