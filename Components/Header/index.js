import React, { Component } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container mx-auto bg-gray-900 flex items-end">
          <div className="grid-cols-3 p-4">
            <Image alt="" src="/logo.png" height={100} width={200} />
          </div>
          <div className="grid-cols-9 p-4">
            <div className="xl:col-start-4 px-4 mb-14">
              <ul className="flex items-end text-white p-4 transition-all">
                <li className="rounded-lg mx-4">Home</li>
                <li className="rounded-lg mx-4">About us</li>
                <li className="rounded-lg mx-4">Portfolio</li>
                <li className="rounded-lg mx-4">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
