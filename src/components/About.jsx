export default function About() {
  return (
    <div className="bg-color">
      <div className="container d-flex flex-column justify-content-center align-items-center text-white py-5 ">
        <h1 className="display-1 fw-bold ">ABOUT</h1>
        <div className="line position-relative mt-3">
          <i className=" fa-solid fa-star fs-2 "></i>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className=" col-md-4 m-auto">
            <p className="px-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className=" col-md-4 m-auto">
            <p className="px-3">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
