/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState,useRef } from "react";

// react-router-dom components
import { Link,useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import {login} from  "assets/globalAPI";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';




// Images
import curved6 from "assets/images/curved-images/curved6.jpg";

function Basic() {
  const [agreement, setAgremment] = useState(true);
  const toastId = useRef(null);
  const MySwal = withReactContent(Swal);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleSetAgremment = () => setAgremment(!agreement);
  const handleUsernameChange = (event) => {

    setUserId(event.target.value);

  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user details");
    // let userid = document.getElementById("userid").value;
    // let password = document.getElementById("password").value;
    if (userId == "" || password == "") {
    console.log("user details");
    Swal.fire({
      icon: 'error',
      title: 'Required Data missing',
      text: "fil the require data",
      confirmButtonText: 'OK'
    });

      
    } else {
      const data = {
        accountNumber: userId,
        mpin: password
      };
      try {
        console.log("hiiii------------>>>", data);
        const resp = await login(data);
        console.log("vggvhgvgvh",resp.data);
        const res = resp.data;
        if (resp.status == 200) {
          const token = res.token;
          // Save token to local storage
          console.log("token",token);
          localStorage.setItem('token', token);
          Swal.fire({
            icon: 'success',
            title: "Login succesfull",
            text: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          console.log("Data posted successfully===>>>>", data);
          navigate("/Uploader/banner")
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login failed!',
            text: res.message,
            confirmButtonText: 'OK'
          });
        }
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Login failed!',
          text: res.message,
          confirmButtonText: 'OK'
        });
      }
      // var response=await login(data)
      // console.log("user details",response.data);

    //   authUserRegistration(JSON.stringify(data))
    //     .then(
    //       function (response) {
    //         var res = response.data;
    //         console.log(res);
    //         if (res.status == "true" && res.code == "200") {
    //           MySwal.fire({
    //             title: <strong>Success</strong>,
    //             html: <i>User Created successfully!</i>,
    //             icon: "success",
    //           }).then(() => {
    //             window.location.reload();
    //           });
    //         } else {
    //         }
    //       }.bind(this)
    //     )
    //     .catch(function (error) {
    //       setLoader(false);
    //       console.log(error);
    //     });
    }
  };

  return (
  
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
    
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
        <SoftTypography>Login</SoftTypography>
          {/* <SoftBox component="form" role="form"> */}
          <form onSubmit={handleSubmit}>
            <SoftBox mb={2}>
              <SoftInput type="text" value={userId} onChange={handleUsernameChange} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="password" value={password} onChange={handlePasswordChange} />
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton type="submit" variant="gradient" color="dark" fullWidth>
                sign In
              </SoftButton>
            </SoftBox>
            {/* <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in/basic"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox> */}
            </form>
          {/* </SoftBox> */}
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}



export default Basic;
