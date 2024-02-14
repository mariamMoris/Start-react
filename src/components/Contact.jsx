import React from "react";

export default function Contact() {
  return (
    <div className="container position-relative">
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <h1 className="uppercase display-3 fw-bold ">contact me</h1>
        <div className="blackLine position-relative mt-3 ">
          <i className="fa-solid fa-star fs-2"></i>
        </div>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="w-50 border-0 border-bottom my-2 py-3"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-50 border-0 border-bottom my-2 py-3"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="w-50 border-0 border-bottom my-2 py-3"
        />
        <input
          type="text"
          placeholder="Message"
          className="w-50 border-0 border-bottom my-2 py-5"
        />
        <button className="mt-1 mb-4 btn btn-success p-2 fs-3">Send Message</button>
      </div>
    </div>
  );
}
