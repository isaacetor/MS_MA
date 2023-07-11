import { useState } from "react";
import Accounts from "./Accounts";
const Login = () => {
  const [inputing, setInputing] = useState(false);
  const [item, setItem] = useState("");
  return (
    <div
      className="p-6 bg-white flex flex-col gap-6"
      onMouseUp={() => {
        {
          setInputing(false);
        }
      }}
    >
      <div className="text-2xl">Log in or sign up to make purchase</div>
      <div className="">
        <div className="w-full p-2 h-[60px] rounded-tr-lg rounded-tl-lg  border-slate-800 border-[1px]">
          <div className="text-slate-600 text-xs">Country/Region</div>
          <select className="border-none outline-none w-full">
            <option value="+234">
              <div>{"Nigeria ( +234 )"}</div>
            </option>
          </select>
        </div>
        <div
          onClick={() => {
            setInputing(true);
          }}
          className="w-full flex items-center p-2 h-[60px] rounded-br-lg rounded-bl-lg border-slate-800 border-t-[0px] border-[1px]"
        >
          {inputing ? (
            <div className="transition-all duration-[350ms]">
              <div className="text-xs text-slate-500">Phone number</div>
              <div className="flex items-center">
                <div className="text-slate-900 text-[15px] font-[100]">
                  +234
                </div>
                <input
                  onChange={(e) => {
                    setItem(e.target.value);
                  }}
                  value={item}
                  autoFocus={inputing ? true : false}
                  type="text"
                  className={`w-full h-full focus:outline-none rounded-br-lg rounded-bl-lg pl-3`}
                />
              </div>
            </div>
          ) : (
            <div className="text-slate-500 text-[15px] font-[100]">
              {item === "" ? "Phone number" : `+234 ${item}`}
            </div>
          )}
        </div>
        <div className="text-xs mt-2">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. <span className="underline">Privacy Policy</span>
        </div>
        <button className="focus:outline-none mt-4 w-full h-[50px] rounded-lg bg-purple-700 text-white font-[600]">
          Continue
        </button>
        <div className="flex justify-between items-center mt-3">
          <hr className="border-[1px] border-slate-300 w-[46%]" />
          <span className="text-xs">or</span>
          <hr className="border-[1px] border-slate-300 w-[46%]" />
        </div>
        <Accounts />
      </div>
    </div>
  );
};

export default Login;
