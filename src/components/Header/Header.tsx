"use client";

import { IoCartOutline } from "react-icons/io5";
import Cart from "../Cart/Cart";

import "./styles.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface HeaderProps {
  message: string;
}

const Header = ({ message }: HeaderProps) => {
  const [visible, setVisible] = useState(false);

  const openMenu = (e: any) => {
    setVisible(!visible);
  };
  return (
    <header id="header">
      <h1 id="title-header">{message}</h1>
      <div id="icon">
        {visible ? (
          <IoMdClose id="icon-cart" onClick={openMenu} />
        ) : (
          <IoCartOutline id="icon-cart" onClick={openMenu} />
        )}
      </div>
      <div
        className="teste"
        style={visible ? { display: "block" } : { display: "none" }}
      >
        <Cart />
      </div>
    </header>
  );
};

export default Header;
