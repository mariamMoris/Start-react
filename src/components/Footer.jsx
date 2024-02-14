export default function Footer() {
  return (
    <div className="bg-dark text-center pt-3">
      <div className="container row ms-5 text-white p-3 ">
        <div className="col-lg-4 col-md-6 p-1 my-sm-3">
          <h3>LOCATION</h3>
          <p>
            2215 John Daniel Drive <br /> Clark, MO 65243
          </p>
        </div>
        <div className="col-lg-4 p-1 col-md-6 my-sm-3">
          <h3 className="">AROUND THE WEB</h3>
          <div className="">
            <i className="fa-brands fa-facebook-f mx-2  rounded-circle border border-2 p-2 "></i>
            <i className="fa-brands fa-twitter mx-2  rounded-circle border border-2 p-2 "></i>
            <i className="fa-brands fa-linkedin-in mx-2  rounded-circle border border-2 p-2 "></i>
            <i className="fa-brands fa-youtube mx-2  rounded-circle border border-2 p-2 "></i>
          </div> 
        </div>
        <div className="col-lg-4 p-1 my-sm-3">
          <h3 className="">ABOUT FREELANCER</h3>
          <p className="">
            Freelance is a free to use, MIT licensed Bootstrap theme created by
           Mariam Samy
          </p>
        </div>
      </div>
    </div>
  );
}
