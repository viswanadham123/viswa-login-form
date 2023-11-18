import React from "react";

const sizeClasses = {
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium24Gray500: "font-medium font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
