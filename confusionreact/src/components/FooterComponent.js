import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
      &nbsp;
      <div className="container">
        &nbsp;
        <div className="row justify-content-center">
          &nbsp;
          <div class="col-md-3 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-2 justify-content-end">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br /> Clear Water Bay, Kowloon
              <br /> HONG KONG
              <br /> <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br /> <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br /> <i className="fa fa-envelope fa-lg"></i>: &nbsp;
              <a href="mailto:confusion@food.net"> confusion@food.net</a> &nbsp;
            </address>
            &nbsp;
          </div>
          &nbsp;
          <div class="col-md-4 col-sm-12 social-media align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              &nbsp;
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              &nbsp;
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              &nbsp;
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              &nbsp;
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              &nbsp;
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
              &nbsp;
            </div>
            &nbsp;
          </div>&nbsp;
          &nbsp;
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p> &nbsp;
          </div>&nbsp;
          &nbsp;
        </div>&nbsp;
        &nbsp;
      </div>&nbsp;
      &nbsp;
    </div>
  );
}
export default Footer;
