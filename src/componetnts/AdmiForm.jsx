import React, { useEffect, useState } from "react";
import bg2 from "../assets/bg2.jpg";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { PiAddressBookLight } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AdmiForm() {
  const [isadmiimg, setIsadmiimg] = useState();
  const [saveData, setSaveData] = useState({});
  const [allSubmissions, setAllSubmissions] = useState([]);

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setSaveData({
      ...saveData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form is submitted");
    toast.success("Form Submitted Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    // Save the current form data
    const currentSubmission = { ...saveData };

    // Append the current submission to the list of all submissions
    setAllSubmissions((prevSubmissions) => [
      ...prevSubmissions,
      currentSubmission,
    ]);

    // Update local storage with the new list of submissions
    localStorage.setItem(
      "AllAdmissionData",
      JSON.stringify([...allSubmissions, currentSubmission])
    );
    setIsadmiimg(true);
    setSaveData({});
    e.target.reset();
  };
  useEffect(() => {
    const savedSubmissions = JSON.parse(
      localStorage.getItem("AllAdmissionData")
    );
    if (savedSubmissions) {
      setAllSubmissions(savedSubmissions);
    }
  }, []);

  useEffect((f) => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="bg-black bg-opacity-95 w-full text-white">
        <div className="flex justify-around">
          <div className={`${isadmiimg} ? sm:block : hidden`}>
            <img
              className="h-[38vw] mt-[3vw] "
              data-aos="fade-down"
              src={bg2}
              alt="img"
            />
          </div>
          <div className="w-full" data-aos="fade-down" data-aos-delay="300">
            <h1
              className="koushuku sm:text-[2vw] text-[7vw] w-full text-center"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <ToastContainer />
              ADMISSION FORM
            </h1>
            <hr />
            <form onSubmit={onSubmitHandler} id="admissionForm">
              <div className="mt-10 ml-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-y-15 gap-y-10">
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <MdOutlineDriveFileRenameOutline />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">FIRST NAME :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter First Name;"
                    type="text"
                    name="firstname"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <MdOutlineDriveFileRenameOutline />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">LAST NAME :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter Last Name;"
                    type="text"
                    name="lastname"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <IoCallOutline />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">CONTECT NO :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter Contect Number;"
                    type="number"
                    name="cnumber"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <FaWhatsapp />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">WHATS'UP NO :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter Whats'up Number;"
                    type="number"
                    name="wnumber"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <PiAddressBookLight />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">CR ADD :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter current Address;"
                    type="text"
                    name="caddress"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <PiAddressBookLight />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">PR ADD :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter Permanent Address;"
                    type="text"
                    name="paddress"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <LiaBirthdayCakeSolid />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">DOB :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter DOB ;"
                    type="date"
                    name="DOB"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <div className="mt-1 -mr-2">
                    <LiaBirthdayCakeSolid />
                  </div>
                  <h2 className="sm:w-[9vw] w-[30vw]">AGE :</h2>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[40vw]"
                    placeholder="Enter Age;"
                    type="number"
                    name="age"
                  />
                </div>
                <div className="flex space-x-3 sm:text-[1.2vw] text-[5vw]">
                  <h2 className="sm:w-[9vw] w-[30vw]">Gender :</h2>
                  <label htmlFor="male">Male</label>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[10vw] cursor-pointer"
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    onChange={onChangeHandler}
                    className="bg-black border rounded-[5px] sm:w-[20vw] w-[10vw] cursor-pointer"
                    type="radio"
                    name="gender"
                    value="female"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => console.log(saveData)}
                  type="submit"
                  className="sm:w-[10vw] w-[25vw] p-3 border mt-[5vw] bg-gray-950 hover:bg-black rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Display all form submissions */}
      {/* <div>
        {allSubmissions.map((submission, index) => (
          <div key={index} className="bg-gray-200 p-2 m-2">
            <h2>Submission {index + 1}</h2>
            <ul>
              {Object.entries(submission).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default AdmiForm;
