import React, { Component } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className="h-28 bg-gray-700 absolute w-screen text-white flex justify-between items-center px-20">
        <div id="logo">
          <Image src="/manoj.png" height={90} width={200} alt=""></Image>
        </div>
        <nav>
          <ul className="flex">
            <li className="m-4">Home</li>
            <li className="m-4">Features</li>
            <li className="m-4">Portfolio</li>
            <li className="m-4">Resume</li>
            <li className="m-4">Clients</li>
            <li className="m-4">Pricing</li>
            <li className="m-4">Blog</li>
            <li className="m-4 mr-0">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}
