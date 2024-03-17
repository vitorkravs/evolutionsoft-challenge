import Cart from "../Cart/Cart";

import "./styles.scss";

interface HeaderProps {
  message: string;
}

const Header = ({ message }: HeaderProps) => {
  return (
    <header id="header">
      <h1 id="title-header">{message}</h1>
      <Cart />
    </header>
  );
};

export default Header;
