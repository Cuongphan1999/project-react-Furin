import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartSelector } from "../../redux-toolkit/selectors";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector(cartSelector);
return (
<nav className="py-0 navbar navbar-light ">
  <div className="container "style={{ backgroundColor: "#0e2b7b" }}>
        <Link to={"/"} className="logo">
          <h1 className="text-danger">Store Furin</h1>
        </Link>
    <form className="d-flex">
      <div>
          {cart.cartDetails.length ? (
            <Link to={"/cart"} className="position-relative" >
              <FaShoppingCart size={25} className="me-3" role="button" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.cartDetails.length}
              </span>
            </Link>
          ) : (
            <FaShoppingCart size={25} className="me-3 text-warning"  />
          )}
      </div>
    </form>
  </div>
</nav>
  );
}

export default Navbar;
