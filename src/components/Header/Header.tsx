import Cart from "../Cart/Cart";

interface HeaderProps {
  message: string;
}

const Header = ({ message }: HeaderProps) => {
  return (
    <header>
      <h1>{message}</h1>
      <Cart />
    </header>
  );
};

export default Header;
