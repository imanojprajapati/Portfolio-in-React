import React, { Component } from "react";
import Image from "next/image";
import MenuIcon from "../../assets/icons/menu.svg";

export const Feature = ({ title, desc, icon: Icon }) => {
  return (
    <div className="flex-1 shadow-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
      <div className="icon text-red-800">{Icon && <Icon />}</div>
      <div className="content">
        <h4 className="text-3xl font-bold text-white py-5">
          <a href="#">{title}</a>
        </h4>
        <p className="text-xl text-white">{desc}</p>
        <a className="read-more-button" href="#">
          <i className="feather-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
