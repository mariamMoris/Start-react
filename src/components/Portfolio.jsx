import React from "react";
import img1 from "../assests/imgs/img1.png";
import img2 from "../assests/imgs/img2.png";
import img3 from "../assests/imgs/img3.png";
import img4 from "../assests/imgs/img4.png";
import img5 from "../assests/imgs/img5.png";
import img6 from "../assests/imgs/img6.png";

export default function Portfolio() {
  function img(image){
  document.querySelector(".zoomImg").classList.remove("d-none");
  document.querySelector(".zoomImg img").setAttribute("src",image);
  }
  function closeImg(){
    document.querySelector(".zoomImg").classList.add("d-none");
        }
 
  return (
    <div  className="container d-flex flex-column justify-content-center align-items-center py-5 position-relative">
      <h1 className="uppercase display-3 fw-bold ">portfolio</h1>
      <div className="blackLine position-relative mt-3">
        <i className="fa-solid fa-star fs-2"></i>
      </div>
      <div className="row gy-5 my-3">
        <div className="col-md-4">
          <div className="img-layer position-relative" onClick={()=>{img(img1)}} >
            <img src={img1} alt="" className="w-100 rounded-4" />
            <div className="layer w-100 h-100 bg-white bg-opacity-75 d-flex justify-content-center align-items-center position-absolute rounded-4">
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-layer position-relative" onClick={()=>{img(img2)}}>
            <img src={img2} alt="" className="w-100 rounded-4"/>
            <div className="layer w-100 h-100 bg-white bg-opacity-75 d-flex justify-content-center align-items-center position-absolute rounded-4">
              <i className="fa-solid fa-plus text-white fa-6x "></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-layer position-relative" onClick={()=>{img(img3)}}>
            <img src={img3} alt="" className="w-100 rounded-4"/>
            <div className="layer w-100 h-100 bg-white bg-opacity-75 d-flex justify-content-center align-items-center position-absolute rounded-4">
              <i className="fa-solid fa-plus text-white fa-6x "></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-layer position-relative" onClick={()=>{img(img4)}}>
            <img src={img4} alt="" className="w-100 rounded-4"/>
            <div className="layer w-100 h-100 bg-white bg-opacity-75 d-flex  justify-content-center align-items-center position-absolute rounded-4">
              <i className="fa-solid fa-plus text-white fa-6x "></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-layer position-relative" onClick={()=>{img(img5)}}>
            <img src={img5} alt="" className="w-100 rounded-4" />
            <div className="layer w-100 h-100 bg-white bg-opacity-75 d-flex  justify-content-center align-items-center position-absolute rounded-4">
              <i className="fa-solid fa-plus text-white fa-6x "></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-layer position-relative" onClick={()=>{img(img6)}}>
            <img src={img6} alt="" className="w-100 rounded-4" />
            <div className="layer w-100 h-100 bg-white bg-opacity-75 d-flex  justify-content-center align-items-center position-absolute rounded-4">
              <i className="fa-solid fa-plus text-white fa-6x "></i>
            </div>
          </div>
        </div>
        </div>
        <div onClick={closeImg} className="zoomImg w-100 h-100 bg-white bg-opacity-50 position-fixed top-0 d-flex justify-content-center align-items-center d-none">
        <img src={img1} alt="" className="w-50 " />
      </div>
    </div>
  );
}
