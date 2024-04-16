import React from "react";
import { info } from "./info";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardFeature from "./components/CardFeature";


const App = () => {
  return (
    <>
      {/* Responsive navbar*/}
      <Menu />
      {/* Header*/}
      <Header
        title={info.header.title}
        text={info.header.text}
        label={info.header.label}
        url={info.header.url}
      />
      {/* Page Content*/}
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            {info.features.length > 0 &&
              info.features.map((feature) => {
                return (
                  <div className="col-lg-6 col-xxl-4 mb-5" key={feature.id}>
                    <CardFeature {...feature} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* Footer*/}
      <Footer />
    </>
  );
};

export default App;
