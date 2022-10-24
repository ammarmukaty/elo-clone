// 232f3e
import React from "react";
import { footer } from "../data/dummy";
import { Link } from "react-router-dom";
import { Button } from ".";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bottom-0 justify-center">
      <div className=" flex justify-evenly " style={{ background: "#232f3e" }}>
        {footer.map((item, index) => (
          <div key={index} className="">
            <p className="text-white font-bold text-xl block pb-3">
              {item.title}
            </p>
            {item.link.map((subitem, index2) => (
              <div key={index2} className="flex  ">
                <Link to={subitem.link} className="block text-gray-400">
                  {subitem.title}
                </Link>
                {subitem.images &&
                  subitem.images.links.map((item2, index3) => (
                    <a
                      className="text-white pr-2 pt-4 text-xl"
                      href={`${item2.link}`}
                      key={index3}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item2.icon}
                    </a>
                  ))}
                {subitem.icon && (
                  <div className="pt-4 text-sm pb-10">
                    <Button
                      color={subitem.color}
                      bgColor={subitem.bgColor}
                      heading={subitem.heading}
                      icon={subitem.icon}
                      borderRadius="6px"
                      link={subitem.link}
                      border1={false}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        <div>
          <p className="text-white font-bold text-xl block pb-3">
            Mailing Address
          </p>
          <p className="block text-gray-400 w-36">
            elo 11 KM Satiana Road Faisalabad Pakistan 042-3256-0356 ( 09:30 AM
            to 05:30 PM Monday - Saturday )
          </p>
        </div>
        <div>
          <img src="https://staticw2.yotpo.com/assets/badge.png" alt="badge" />
        </div>
      </div>
      <div className="flex bg-white px-10 py-2 pl-80">
        <p>© 2022&nbsp;</p>
        <Link to="/" className="text-blue-600">
          elo&nbsp;
        </Link>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
