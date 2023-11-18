import axios from "axios";
import { Button, Img, Text } from "components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SigninPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError,setError]=useState(false)
  const [signupError,setSignupError]=useState("")
  const [isError,setErrorMsg]=useState(false)

  const handleSignup = async () => {
    if (password.length<8){
      setError(true)
    }else{
      try {
        const response = await axios.post("http://localhost:5000/signup", {
          username,
          password,
        });
        console.log(response.data.message); 
        navigate("/login");
      } catch (error) {
        console.error("Error signing up:", error.message);
        setSignupError("User already exist")
        setErrorMsg(true)
      }
    }
  
  };

  return (
    <>
      <div className="bg-gradient flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center mx-auto p-[99px] md:px-10 sm:px-5 w-full">
        <Img
          className="h-[730px] sm:h-auto md:ml-[0] ml-[19px] object-cover w-[48%] md:w-full"
          src="images/img_womanshakinghands.png"
          alt="womanshakinghan"
        />
        <div className="flex flex-col gap-9 items-start justify-start mr-5 md:mt-0 mt-[5px] w-[39%] md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-50"
            size="txtPoppinsBold40"
          >
            Sign Up
          </Text>
          <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
            <div className="flex flex-col gap-[46px] items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    Name
                  </Text>
                </div>
                <input
                required
                  placeholder="name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className=" min-w-[653px] md:min-w-[100%] p-4"
                />
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[30px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    Password
                  </Text>
                  <input
                  required
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" min-w-[653px] md:min-w-[100%] p-4"
                  />
                {passwordError&&  <p  style={{ color: "red" }}>password must be 8 charecters</p>} 
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-start mt-[30px] w-full">
                <Button
                  onClick={handleSignup}
                  className="cursor-pointer font-semibold leading-[normal] min-w-[653px] md:min-w-full outline outline-[2px] outline-deep_purple-A100 text-2xl md:text-[22px] text-center sm:text-xl"
                >
                  Create my account
                </Button>
              </div>
            {isError&& <p style={{ color: "red" }}>{signupError}</p>} 
              <div className="flex flex-col items-center justify-start  w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsRegular24"
                      >
                        <span className="text-white-A700 font-poppins text-left font-normal">
                          Already have an account?{" "}
                        </span>
                        <Link
                          to="/login"
                          className="text-deep_purple-A100 font-poppins text-left font-normal underline"
                        >
                          Login
                        </Link>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninPage;
