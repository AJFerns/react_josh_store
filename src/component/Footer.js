import React from "react";
import "./Footer.css";
import Zoom from "react-reveal/Zoom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <Zoom>
              <h4>JOSH STORE</h4>
            </Zoom>
            <h1 className="list-unstyled">
              <li>1800-12345-678-90</li>
              <li>Goa, India</li>
              <li>123 Streeet South Goa</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <Zoom>
              <h4>Customercare</h4>
            </Zoom>
            <ui className="list-unstyled">
              <li>Phone</li>
              <li>Email</li>
              <li>What.sapp</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <Zoom>
              <h4>Work with us</h4>
            </Zoom>
            <ui className="list-unstyled">
              <li>Carrer</li>
              <li>Jobs</li>
              <li>Part time</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} JOSH STORE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
