interface HeaderProps {
  message: string;
}

const Header = ({ message }: HeaderProps) => {
  return (
    <header>
      <h1>{message}</h1>
    </header>
  );
};

export default Header;
