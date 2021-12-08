import React, { Component } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="py-5">
          <h4 className="py-1 text-center text-red-800">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h4>
          <h2 className="text-white text-5xl font-bold text-center py-1">
            My Portfolio
          </h2>
        </div>

        <div className="container mx-auto py-10 flex flex-wrap">
          <div className="flex-1 shadow-lg rounded-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <div className="content">
              <Image
                src="/portfolio-01.jpeg"
                width={347}
                height={260}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex justify-between">
                <div className="text-red-800 p-2">
                  <a href="#">Development</a>
                </div>
                <div className="p-2">
                  <span className="text-red-800">600</span>
                </div>
              </div>
              <h4 className="text-xl text-white p-2">
                The Services provide for design
              </h4>
            </div>
          </div>

          <div className="flex-1 shadow-lg rounded-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <div className="content">
              <Image
                src="/portfolio-01.jpeg"
                width={347}
                height={260}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex justify-between">
                <div className="text-red-800 p-2">
                  <a href="#">Development</a>
                </div>
                <div className="p-2">
                  <span className="text-red-800">600</span>
                </div>
              </div>
              <h4 className="text-xl text-white p-2">
                The Services provide for design
              </h4>
            </div>
          </div>

          <div className="flex-1 shadow-lg rounded-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <div className="content">
              <Image
                src="/portfolio-01.jpeg"
                width={347}
                height={260}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex justify-between">
                <div className="text-red-800 p-2">
                  <a href="#">Development</a>
                </div>
                <div className="p-2">
                  <span className="text-red-800">600</span>
                </div>
              </div>
              <h4 className="text-xl text-white p-2">
                The Services provide for design
              </h4>
            </div>
          </div>

          <div className="flex-1 shadow-lg rounded-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <div className="content">
              <Image
                src="/portfolio-01.jpeg"
                width={347}
                height={260}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex justify-between">
                <div className="text-red-800 p-2">
                  <a href="#">Development</a>
                </div>
                <div className="p-2">
                  <span className="text-red-800">600</span>
                </div>
              </div>
              <h4 className="text-xl text-white p-2">
                The Services provide for design
              </h4>
            </div>
          </div>

          <div className="flex-1 shadow-lg rounded-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <div className="content">
              <Image
                src="/portfolio-01.jpeg"
                width={347}
                height={260}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex justify-between">
                <div className="text-red-800 p-2">
                  <a href="#">Development</a>
                </div>
                <div className="p-2">
                  <span className="text-red-800">600</span>
                </div>
              </div>
              <h4 className="text-xl text-white p-2">
                The Services provide for design
              </h4>
            </div>
          </div>

          <div className="flex-1 shadow-lg rounded-lg m-5 p-16 bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <div className="content">
              <Image
                src="/portfolio-01.jpeg"
                width={347}
                height={260}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex justify-between">
                <div className="text-red-800 p-2">
                  <a href="#">Development</a>
                </div>
                <div className="p-2">
                  <span className="text-red-800">600</span>
                </div>
              </div>
              <h4 className="text-xl text-white p-2">
                The Services provide for design
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
