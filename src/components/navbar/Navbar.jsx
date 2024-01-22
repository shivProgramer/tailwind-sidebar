import React from "react";
import { logo } from "../../assets/Index";
import { navLinksdata } from "../../constants/index";
const Navbar = () => {
  return (
    <div className="w-full h-15 flex justify-between items-center font-titleFont ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex justify-between items-center gap-10">
          {navLinksdata.map((navlink) => (
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={navlink._id}>{navlink.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
