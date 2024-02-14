import img1 from "../assests/imgs/home.png";

export default function Home() {
  return (
    <div className=" bg-color">
      <div className="container d-flex flex-column justify-content-center align-items-center text-white py-5 ">
        <img src={img1} alt="" />
        <h1 className=" uppercase display-1 fw-bold ">START REACT</h1>
        <div className="line position-relative mt-3">
          <i className=" fa-solid fa-star fs-2 "></i>
        </div>
        <p className="mt-1">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
