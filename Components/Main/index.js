import React, { Component } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default class Main extends Component {
  render() {
    return (
      <main>
        <section className="h-screen flex bg-gray-800 text-white p-36">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-4xl py-5">WELCOME TO MY WORLD</p>
            <h1 className="text-6xl py-5">Hi, I’m Manoj Prajapati</h1>
          </div>
          <div className="flex-1 align-middle">
            <Image src="/manoj-med.png" width={500} height={600} alt=""></Image>
          </div>
        </section>
      </main>
    );
  }
}
