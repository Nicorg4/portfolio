import Logo from "/logo.png";

export const Footer = () => {
  return (
    <footer className="py-5 flex bg-footer relative justify-center items-center">
      <a
        href="#hero"
        className="p-2 text-primary transition-colors"
      >
        <img className="hover:scale-105 transition-all duration-300" src={Logo} height={40} width={40} alt="Logo" />
      </a>
    </footer>
  );
};