const DropdownProps = () => {
  return (
    <div className="w-[250px] bg-white p-6 flex flex-col gap-6 rounded-xl shadow-md">
      <p className=" hover:text-globalTextColor-hover cursor-pointer">
        Sign up
      </p>
      <p className=" hover:text-globalTextColor-hover cursor-pointer">Login</p>
      <hr />
      <p className=" text-xs">MSMA</p>
    </div>
  );
};

export default DropdownProps;
