import React, { Component } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { Feature } from "../Feature";
import MenuIcon from "../../assets/icons/menu.svg";
import MenuIcon1 from "../../assets/icons/app.svg";
import MenuIcon2 from "../../assets/icons/game.svg";
import MenuIcon3 from "../../assets/icons/ceo.svg";
import MenuIcon4 from "../../assets/icons/mobile.svg";
import MenuIcon5 from "../../assets/icons/personal.svg";

export default class Whatwedo extends Component {
  render() {
    return (
      <div className="container mx-auto py-10 flex flex-wrap">
        <Feature
          icon={MenuIcon}
          title="Business Strategy"
          desc="I throw myself down among the tall grass by the stream as I lie close to the earth."
        />
        <Feature
          icon={MenuIcon1}
          title="Game Developoment"
          desc="I throw myself down among the tall grass by the stream as I lie close to the earth."
        />
        <Feature
          icon={MenuIcon2}
          title="App Development"
          desc="I throw myself down among the tall grass by the stream as I lie close to the earth."
        />
        <Feature
          icon={MenuIcon3}
          title="Mobile App"
          desc="I throw myself down among the tall grass by the stream as I lie close to the earth."
        />
        <Feature
          icon={MenuIcon4}
          title="CEO Marketing"
          desc="I throw myself down among the tall grass by the stream as I lie close to the earth."
        />
        <Feature
          icon={MenuIcon5}
          title="Personal Portfolio"
          desc="I throw myself down among the tall grass by the stream as I lie close to the earth."
        />
      </div>
    );
  }
}
