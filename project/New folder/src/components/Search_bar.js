import React, { useState, useEffect, useRef } from "react";
import style from "../Style/Search.module.css";
import img1 from "../Images/footer.png";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";

function Search_bar() {
  const [showpopmsg, setShowpopmsg] = useState(false);
  const [onclickprofile, setonclickprofile] = useState(false);
  const [onclicklogin, setonclicklogin] = useState(false);
  const [onclickreg, setonclickreg] = useState(false);
  const [onclicksearch, setonclicksearch] = useState(false);

  const [showForm, setShowForm] = useState(true);
  // -----------------------------------------------------------------------
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  // -----------------------------------------------------------------
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const buttonRef4 = useRef(null);
  const buttonRef5 = useRef(null);

  // =============================================
  useEffect(() => {
    // Add event listener to document to handle clicks outside the button
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Clicked outside the button, so hide the textarea
        setShowpopmsg(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  });

  // -------------------------------------------------------
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef2.current && !buttonRef2.current.contains(event.target)) {
        setonclickprofile(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  //-----------------------------------------------------------------------------
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef3.current && !buttonRef3.current.contains(event.target)) {
        setonclicklogin(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  // -----------------------------------------------------------------------
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef4.current && !buttonRef4.current.contains(event.target)) {
        setonclickreg(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  // ---------------------------------------------------------------------------------------
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef5.current && !buttonRef5.current.contains(event.target)) {
        setonclicksearch(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  // ------------------------------------------------------------------------------------
  const onclickcard = () => {
    // Toggle the visibility of the textarea when clicking the button
    setShowpopmsg(!showpopmsg);
  };
  const clickprofile = () => {
    setonclickprofile(!onclickprofile);
  };
  const clicklogin = () => {
    setonclicklogin(!onclicklogin);
  };
  const clickreg = () => {
    setonclickreg(!onclickreg);
  };
  const clicksearch = () => {
    setonclicksearch(!onclicksearch);
  };
  // -----------------------------------------------------------

  //--------------------------------------------------------
  return (
    <>
      <div className={style.Search_bar}>
        {/* ======================================================== */}
        <div className={style.Logo}>
          <img src={img1} alt="" className={style.img} />
        </div>
        {/*============================================================= */}

        <div className={style.SearchContainer}>
          <input
            type="text"
            placeholder="Search for the Product and Mediciens"
            className={style.Search}
            onClick={clicksearch}
            ref={buttonRef5}
          />
          <FcSearch className={style.SearchIcon} />
        </div>

        {onclicksearch && (
          <div className={style.centeredapp}>
            <div className={style.searchproducts}>
              <div
                className={style.imgcontainer}
                style={{ backgroundColor: "#EDF1FC" }}
              >
                <img
                  src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fproduct-1.png&w=640&q=75"
                  className={style.image}
                />
              </div>
              <div className={style.imgcontainer} style={{ width: "100px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "100px",
                    display: "flex",
                    marginTop: "5px",
                  }}
                >
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <BsStarHalf
                    style={{
                      color: "yellow",
                      fontSize: "11px",
                      marginTop: "1px",
                    }}
                  />
                  <AiOutlineStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <p style={{ fontSize: "06px", marginTop: "5px" }}>
                    4.5(2,213)
                  </p>
                </div>

                <pre style={{ fontSize: "08px" }}>
                  <FaRupeeSign />
                  <span style={{ fontSize: "12px" }}>0</span>
                </pre>
              </div>

              <div style={{ height: "50px", width: "100px", marginTop: "5px" }}>
                <button
                  className={style.button1}
                  onClick={(e) => e.stopPropagation()}
                >
                  Add To WishList
                </button>
                <button
                  className={style.button1}
                  onClick={(e) => e.stopPropagation()}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <hr />

            <div className={style.searchproducts}>
              <div
                className={style.imgcontainer}
                style={{ backgroundColor: "#EDF1FC" }}
              >
                <img
                  src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fproduct-1.png&w=640&q=75"
                  className={style.image}
                />
              </div>
              <div className={style.imgcontainer} style={{ width: "100px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "100px",
                    display: "flex",
                    marginTop: "5px",
                  }}
                >
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <BsStarHalf
                    style={{
                      color: "yellow",
                      fontSize: "11px",
                      marginTop: "1px",
                    }}
                  />
                  <AiOutlineStar
                    style={{
                      color: "yellow",
                      fontSize: "12px",
                      marginTop: "1px",
                    }}
                  />
                  <p style={{ fontSize: "06px", marginTop: "5px" }}>
                    4.5(2,213)
                  </p>
                </div>

                <pre style={{ fontSize: "08px" }}>
                  <FaRupeeSign />
                  <span style={{ fontSize: "12px" }}>0</span>
                </pre>
              </div>

              <div style={{ height: "50px", width: "100px", marginTop: "5px" }}>
                <button
                  className={style.button1}
                  onClick={(e) => e.stopPropagation()}
                >
                  Add To WishList
                </button>
                <button
                  className={style.button1}
                  onClick={(e) => e.stopPropagation()}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <hr />

            <div className={style.searchproducts}>
              <div
                className={style.imgcontainer}
                style={{ backgroundColor: "#EDF1FC" }}
              >
                <img
                  src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fproduct-1.png&w=640&q=75"
                  className={style.image}
                />
              </div>
              <div className={style.imgcontainer} style={{ width: "100px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "100px",
                    display: "flex",
                    marginTop: "5px",
                  }}
                >
                  <AiFillStar
                    style={{
                      color: "	#FFDF00",
                      fontSize: "10px",
                      marginTop: "1px",
                    }}
                  />
                  <AiFillStar
                    style={{
                      color: "	#FFDF00",
                      fontSize: "10px",
                      marginTop: "1px",
                    }}
                  />
                  <AiFillStar
                    style={{
                      color: "	#FFDF00",
                      fontSize: "10px",
                      marginTop: "1px",
                    }}
                  />
                  <BsStarHalf
                    style={{
                      color: "	#FFDF00",
                      fontSize: "9px",
                      marginTop: "1px",
                    }}
                  />
                  <AiOutlineStar
                    style={{
                      color: "	#FFDF00",
                      fontSize: "10px",
                      marginTop: "1px",
                    }}
                  />
                  <p style={{ fontSize: "06px", marginTop: "5px" }}>
                    4.5(2,213)
                  </p>
                </div>

                <pre style={{ fontSize: "08px" }}>
                  <FaRupeeSign />
                  <span style={{ fontSize: "12px" }}>0</span>
                </pre>
              </div>

              <div style={{ height: "50px", width: "100px", marginTop: "5px" }}>
                <button
                  className={style.button1}
                  onClick={(e) => e.stopPropagation()}
                >
                  Add To WishList
                </button>
                <button
                  className={style.button1}
                  onClick={(e) => e.stopPropagation()}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className={style.searchproducts}></div>
          </div>
        )}

        {/* ================================================================ */}

        <div className={style.Login}>
          {/* ------------------------------------------------------ */}
          <button
            className={style.button}
            onClick={clicklogin}
            ref={buttonRef3}
          >
            Login
            {onclicklogin && (
              <div className="app">
                <div className={style.backgroundimage}></div>
                <div className={style.Register}>
                  <div className={style.centercontainer}>
                    {showForm && (
                      <div className={style.Loginform}>
                        <div
                          className={style.facebook}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <SiFacebook />  <a href="https://www.facebook.com/login/" target="blank">Register with Facebook</a>
                        </div>
                        <br />
                        <div
                          className={style.facebook}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FcGoogle /> <a href="https://accounts.google.com/accountchooser/identifier?checkedDomains&dsh=S-1157320562%3A1696700696167432&flowEntry=AccountChooser&flowName=GlifWebSignIn&ifkv=AYZoVhdO-5wbu3UieXTdgB8unRGacn8Svd0KChK1D4fvFZaY2eEfJH91hgzBegm1vv7UCy7utjhQ&pstMsg=0&theme=glif" target="blank">Register with Google</a>
                        </div>
                        <span>or Login with</span>
                        <form action="#" method="post">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Email"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Password"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />
                          <button
                            type="submit"
                            className={style.submit}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Login
                          </button>
                          <br />
                          <br />
                          <button
                            onClick={(e) => e.stopPropagation()}
                            onDoubleClick={{ toggleForgotPassword }}
                            className={style.button}
                            style={{ width: "100px", color: "blue" }}
                          >
                            Forgot Password
                          </button>
                          <br />
                          <br />
                          <span onClick={(e) => e.stopPropagation()}>
                            Dont have an Account?
                            <a href="#" onClick={(e) => e.stopPropagation()}>
                              Register
                            </a>
                          </span>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </button>
          {/* ------------------------------------------------------ -------------------------------------*/}
          <button className={style.button} onClick={clickreg} ref={buttonRef4}>
            Register
            {onclickreg && (
              <div className="app">
                <div className={style.backgroundimage}></div>
                <div className={style.Register}>
                  <div className={style.centercontainer}>
                    {showForm && (
                      <div className={style.registrationform}>
                        <div
                          className={style.facebook}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <SiFacebook /> <a href="https://www.facebook.com/login/" target="blank">Register with Facebook</a>
                        </div>
                        <br />
                        <div
                          className={style.facebook}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FcGoogle /> <a href="https://accounts.google.com/accountchooser/identifier?checkedDomains&dsh=S-1157320562%3A1696700696167432&flowEntry=AccountChooser&flowName=GlifWebSignIn&ifkv=AYZoVhdO-5wbu3UieXTdgB8unRGacn8Svd0KChK1D4fvFZaY2eEfJH91hgzBegm1vv7UCy7utjhQ&pstMsg=0&theme=glif" target="blank">Register with Google</a>
                        </div>
                        <span>or Register with</span>
                        <form action="#" method="post">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="First Name"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />

                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Last Name"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Email"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Password"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Confirm Password"
                            onClick={(e) => e.stopPropagation()}
                            className={style.Loginbox}
                          />
                          <br />
                          <br />

                          <button
                            type="submit"
                            className={style.submit}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Register
                          </button>
                          <br />
                          <span>
                            By continuing you agree to our{" "}
                            <span
                              style={{ color: "#4e97fd" }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Terms and conditions.
                            </span>
                          </span>
                          <br />
                          <br />
                          <span onClick={(e) => e.stopPropagation()}>
                            {" "}
                            have an Account?{" "}
                            <a href="#" onClick={(e) => e.stopPropagation()}>
                              Login
                            </a>
                          </span>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </button>
          {/* ---------------------------------------------------------------------------- */}
          <button
            className={style.button}
            onClick={onclickcard}
            ref={buttonRef}
          >
            <BsBag className={style.BsBagbutton} />
            {showpopmsg && (
              <div style={{ padding: "5px", backgroundColor: "white" }}>
                <textarea>You have no items in your shopping cart.</textarea>
              </div>
            )}
          </button>

          {/* ---------------------------------------------------------------------------- */}
          <button
            className={style.button}
            onClick={clickprofile}
            ref={buttonRef2}
          >
            <AiOutlineUser className={style.BsBagbutton} />

            {onclickprofile && (
              <div>
                <div class={style.profilbox}>
                  <a>Account</a>
                  <br />
                  <a>Change Password</a>
                  <br />
                  <a>Address</a>
                  <br />
                  <a>My Orders</a>
                  <br />
                  <a>Order Details</a>
                  <br />
                  <a>Wish List</a>
                  <br />
                  <a>LogOut</a>
                  <br />
                </div>
              </div>
            )}
          </button>
          {/* ----------------------------------------------------------------------------- */}
          <button
            style={{
              backgroundColor: "#448EE4",
              border: "none",
              color: "white",
            }}
            className={style.button}
          >
            Upload
          </button>
          {/* ------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </>
  );
}

export default Search_bar;
