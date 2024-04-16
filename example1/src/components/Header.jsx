import React from "react";

const Header = (props) => { /* title, text, label, url */
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h1 className="display-5 fw-bold">{props.title}</h1>
            <p className="fs-4">
              {props.text}
            </p>
            <a className="btn btn-primary btn-lg" href={props.url}>
              {props.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
