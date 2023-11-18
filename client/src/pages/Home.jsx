import { Button, Img, Text } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user1 = localStorage.getItem("userName");

  useEffect(() => {
    if (!user1) {
      navigate("/login");
    }
  }, [user1, navigate]);
  const pageLogout = () => {
    localStorage.removeItem("userName");
    navigate("/login");
  };
  return (
    <div className="bg-gradient flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center mx-auto p-[99px] md:px-10 sm:px-5 w-full">
      <Img
        className="h-[730px] sm:h-auto md:ml-[0] ml-[19px] object-cover w-[48%] md:w-full"
        src="images/img_womanshakinghands.png"
        alt="womanshakinghan"
      />

      <div className="flex flex-col gap-[34px] items-start justify-start mr-3 w-[39%] md:w-full">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-gray-50"
          size="txtPoppinsBold40"
        >
          Hello {user1}, Welcome to HomePage
        </Text>

        <Button
          onClick={pageLogout}
          className="cursor-pointer font-semibold leading-[normal] min-w-[403px] md:min-w-full mt-[37px] outline outline-[2px] outline-deep_purple-A100 text-2xl md:text-[22px] text-center sm:text-xl"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Home;
