import React from "react";

const Button = () => {
  return (
    <>
      <div className=" w-[136px] h-[44px] bg-[#000000] flex items-center justify-center rounded-[16px]   overflow-hidden ">
        <div
          className="w-[132px] h-[40px] flex items-center justify-center rounded-[14px]  font-medium "
          style={{
            backgroundColor: "rgba(38, 139, 221, 0.38)",
            letterSpacing: "-0.01em",

            boxShadow: `
        inset 0px 16px 24px rgba(253, 242, 242, 0.25), 
        4px 0px 24.1px rgba(197, 186, 186, 0.25),
        0px 4px 45.9px rgba(148, 138, 138, 1)
      `,
          }}
        >
          Get Started
        </div>
      </div>
    </>
  );
};

export default Button;
