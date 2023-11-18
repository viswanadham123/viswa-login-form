import axios from "axios";
import { Button, Img, Text } from "components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userDetails = { loginUsername, loginPassword };
    const url = "http://localhost:5000/login";

    try {
      const response = await axios.post(url, userDetails);

      if (response.status === 200) {
        localStorage.setItem("userName", loginUsername);
        alert("Login successful!");
        navigate("/");
      } else {
        setError(response.data.error || "Login failed");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || "Login failed");
      } else if (error.message) {
        setError("Network error. Please try again.");
      }
    }
  };

  return (
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
          Log In
        </Text>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
              size="txtPoppinsMedium24"
            >
              Name
            </Text>
            <input
            required
              placeholder="name"
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="min-w-[653px] md:min-w-full p-4"
            />
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start mt-[31px] w-full">
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
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className=" min-w-[653px] md:min-w-[100%] p-4 "
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start mt-[31px] w-full">
            <Button
              onClick={handleLogin}
              className="cursor-pointer font-semibold leading-[normal] min-w-[653px] md:min-w-full mt-[37px] outline outline-[2px] outline-deep_purple-A100 text-2xl md:text-[22px] text-center sm:text-xl"
            >
              Log in
            </Button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="flex flex-col items-center justify-start mt-[39px] w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsRegular24"
                  >
                    <span className="text-white-A700 font-poppins text-left font-normal">
                      don't have an account?{" "}
                    </span>
                    <Link
                      to="/signup"
                      className="text-deep_purple-A100 font-poppins text-left font-normal underline"
                    >
                      Signup
                    </Link>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
