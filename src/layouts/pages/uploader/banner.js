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
// import {addAccount} from  "assets/globalAPI";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";




// Images
import curved6 from "assets/images/curved-images/curved6.jpg";
import { banner } from "assets/globalAPI";
import { Mp } from "@mui/icons-material";

function Banner() {
  const [agreement, setAgremment] = useState(true);
  const toastId = useRef(null);
  const MySwal = withReactContent(Swal);
  const [event, setEvent] = useState('');
  const [offers, setOffers] = useState('');
  const [appName, setAppName] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleSetAgremment = () => setAgremment(!agreement);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user details");
    // let userid = document.getElementById("userid").value;
    // let password = document.getElementById("password").value;
    if (event == "" || offers == "" ||appName==""||!selectedFile) {
    console.log("user details");
    Swal.fire({
      icon: 'error',
      title: 'Required Data missing',
      text: "fil the require data",
      confirmButtonText: 'OK'
    });

      
    } else {
        const formData = new FormData();
        formData.append('banner_files', selectedFile);
        formData.append('event', event);
        formData.append('offers', offers);
        formData.append('appName', appName);
        formData.append('duration', duration);
      try {
        console.log("hiiii------------>>>", formData);
        const resp = await banner(formData);
        const res = resp.data;
        if (resp.status == 200) {
       
          Swal.fire({
            icon: 'success',
            title: " succesfully Added",
            text: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          setEvent("");
          setOffers("");
          setAppName("");
          setDuration("");
          setSelectedFile(null);
          console.log("Data posted successfully===>>>>");
          // navigate("/dashboards/default")
        } else {
          Swal.fire({
            icon: 'error',
            title: ' failed!',
            text: res.message,
            confirmButtonText: 'OK'
          });
        }
      } catch (err) {
        console.log("hvfvhtft",err);
        Swal.fire({
          icon: 'error',
          title: ' failed!',
          // text: res.message,
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
  
    <DashboardLayout>
    <DashboardNavbar />
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
        <SoftTypography>ADD EVENT</SoftTypography>
          {/* <SoftBox component="form" role="form"> */}
          <form onSubmit={handleSubmit}>
           
            <SoftBox mb={2}>
              <SoftInput type="text" value={event} placeholder="Event Name" onChange={(event)=> setEvent(event.target.value) } />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" value={offers} placeholder="Offers" onChange={(event)=> setOffers(event.target.value)}/>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" value={appName} placeholder="App Name"onChange={(event)=> setAppName(event.target.value)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" value={duration} placeholder="Duration" onChange={(event)=>setDuration(event.target.value)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="file"  placeholder="Select a File"onChange={handleFileChange} />
            </SoftBox>
            <SoftBox mt={5} mb={1}>
              <SoftButton type="submit" variant="gradient" color="dark" fullWidth>
                ADD EVENT
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
      {/* <Footer /> */}
    </DashboardLayout>
  );
}



export default Banner;
