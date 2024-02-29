export default function Footer(){
    return (
        <>
  <div className="container p-0">
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#0e2b7b" }}
    >
      <section className="">
        <div className="container text-center text-md-start mt-0 py-1">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
              <h6 className="text-uppercase fw-bold">Company Furin</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff" }}
              />
              <p>
              Our institution has the five best American accreditations, 
              thanks to the constant evolution and improvement of its teaching-learning processes.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff" }}
              />
              <p>
                <a href="#!" className="text-white">
                  Table
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Chair
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Makate
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Helper</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff" }}
              />
              <p>
                <a href="#!" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Shipping
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff"}}
              />
              <p>
                <i className="fas fa-home mr-3" /> HCM, VIETNAM
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> phancuong.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </section>
     
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <span>
          phancuong@gmail.com
        </span>
      </div>
    
    </footer>
 
  </div>
  
</>

    )
}