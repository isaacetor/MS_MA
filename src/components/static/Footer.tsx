const Footer = () => {
  return (
    <footer className="w-full h-[50px] fixed bottom-0 z-10 border-t-[1px] bg-white flex items-center">
      <div className="w-[90%] m-[auto] text-sm">
        <p>© {new Date().getFullYear()} MSMA</p>
      </div>
    </footer>
  );
};

export default Footer;
