import React, { useState } from "react";
import { LuMailOpen } from "react-icons/lu";
import Popup from "./Popup";

const NewsLetter = () => {

  const [email, setEmail] = useState("");
  const [open,setOpen]=useState(false);

  console.log(email);

  const handleSubscribe=(e)=>{
    e.preventDefault();
    if(email==='' || email===null){
    }
    else{
      setOpen(true)
    }
  }

  const handleOk=()=>{
    setOpen(false);
  }

  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div className="">
            <h3 className="font-semibold text-xl sm:text-2xl">
              for exciting shopping offers subscribe here
            </h3>
            <p>.... and receive flat 40% on your first shopping</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <form action="" onSubmit={(e)=>handleSubscribe(e)}>
          <input
            className="py-4 px-6 w-full text-black rounded-full"
            type="email"
            placeholder="Enter email here...."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="bg-accentDark hover:bg-accent absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full"
          >
            Subscribe !
          </button>
          </form>
          {
            open && <Popup open={open} handleOk={handleOk} />
          }
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
