import React, { useEffect } from "react";
import "../../commom/scss/member/memberEdit.scss";
import { FaUserAlt, FaBirthdayCake, FaAddressCard } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
const MemberEdit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-4"
          style={{ background: "#635E59", minHeight: "937px" }}
        ></div>
        <div
          className="col-8 d-flex flex-column"
          style={{ background: "#F3D6B7", minHeight: "937px" }}
        >
          <form>
            <div className="MemberEditHeader my-5">
              <h4>
                <span>基本資料修改</span>
              </h4>
            </div>
            <div></div>
            <div className="MemberEditMain mb-5 d-flex flex-column">
              <div className="d-flex  justify-content-center">
                <div className="short-input">
                  <div className="titleH">Name</div>
                  <div className="position-relative">
                    <input name="" type="name" placeholder="請填入姓名" />
                    <FaUserAlt
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <span></span>
                </div>
                <div className="short-input">
                  <div className="titleH">NickName</div>
                  <div className="position-relative">
                    <input name="" type="tel" placeholder="請填入暱稱" />
                    <FaUserAlt
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center">
                <div className="longe-input">
                  <div className="titleH">Email address</div>
                  <div className="position-relative">
                    <input name="" type="text" placeholder="請填入信箱地址" />
                    <MdEmail
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center">
                <div className="short-input">
                  <div className="titleH">Phone</div>
                  <div className="position-relative">
                    <input name="" type="tel" placeholder="請填入手機" />
                    <MdPhoneAndroid
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span></span>
                </div>
                <div className="short-input">
                  <div className="titleH">birthday</div>
                  <div className="position-relative">
                    <input name="" className="date-input" type="date" />
                    <FaBirthdayCake
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center mb-1">
                <div className="longe-input">
                  <div className="titleH">Street address</div>
                  <div className="position-relative">
                    <input name="" type="address" placeholder="請填入地址" />
                    <FaAddressCard
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br />
                  <span></span>
                </div>
              </div>
            </div>
            <div className="MemberEditFooter  d-flex  flex-column align-items-end">
              <input
                name=""
                className="formBtn"
                type="submit"
                value="修改"
                onClick={formSubmit}
                id="formBtn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  //-------------------------------------事件------------------
  function formSubmit(event) {
    event.preventDefault();
    console.log("formSubmit");
  }
  //-------------------------------------事件------------------
  //-------------------------------------生命週期事件-----------------
};

export default MemberEdit;