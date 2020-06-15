import React, { Component } from "react";

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Welcome to Star BUS Please write here to give us any feedback,sales
            and any other suggestions our Team will get back to you
          </p>

          <div className="row">
            <div className="col-lg-5 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2">
                      <i className="fa fa-envelope"></i> Write to us:
                    </h3>
                  </div>
                  <p className="dark-grey-text">
                    We'll write rarely, but only the best content.
                  </p>
                  <div className="md-form">
                    <i className="fa fa-user prefix grey-text"></i>
                    <label >Your name</label>
                  </div>
                  <div className="md-form">
                    <i className="fa fa-envelope prefix grey-text"></i>
                    <input type="text" id="form-email" className="form-control" />
                    <label >Your email</label>
                  </div>
                  <input type="text" id="form-name" className="form-control" />
                  <div className="md-form">
                    <i className="fa fa-tag prefix grey-text"></i>
                    <input type="text" id="form-Subject" className="form-control" />
                    <label>Subject</label>
                  </div>
                  <div className="md-form">
                    <i className="fa fa-pencil-alt prefix grey-text"></i>
                    <textarea
                      id="form-text"
                      className="form-control md-textarea"
                      rows="3"
                    ></textarea>
                    <label>Send message</label>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-sucess">Submit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div
                id="map-container-section"
                className="z-depth-1-half map-container-section mb-4 map"
              >
                <iframe
                  src="https://www.google.com/maps/place/Salims+Winter+Park/@13.0492295,80.1285463,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5261bcbb0b1ba5:0x470b29d055cd928d!8m2!3d13.0492243!4d80.1307404?hl=en"
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <a className="btn-floating blue accent-1">
                    <i className="fa fa-map-marker-alt"></i>
                  </a>
                  <p>Chennai, 600077</p>
                  <p className="mb-md-0">India</p>
                </div>
                <div className="col-md-4">
                  <a className="btn-floating blue accent-1">
                    <i className="fa fa-phone"></i>
                  </a>
                  <p>+91 8008 976 258</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </div>
                <div className="col-md-4">
                  <a className="btn-floating blue accent-1">
                    <i className="fa fa-envelope"></i>
                  </a>
                  <p>info@starbus.com</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactUs;
