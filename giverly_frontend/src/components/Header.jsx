import React from 'react'
import give from "../assets/icon_2.svg"

import { Link } from "react-router-dom";

import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="px-[10px] py-[15px] md:p-[30px] sticky top-0 left-0 right-0 z-10 font-primary bg-none">
        <nav className="flex mx-auto py-2 md:py-4 px-4 md:px-8 items-center justify-between rounded-md bg-[#96E9C6] max-w-[95%] shadow-md">
          <div className="w-[60px] md:w-[80px] flex items-center justify-between gap-2 cursor-pointer">
          <img className="hidden md:block md:text-xl" alt="Giverrly Bird" src={give} />
          <h1 className="text-[#35374f] text-[24px] md:text-2xl font-bold ">Giverrly</h1>
          </div>
            <div className="hidden md:gap-6 md:flex">
                <div className="text-lg text-[#35374f] transition ease-in  hover:text-[#6C22A6] font-semibold">
                  <Link to="/"><p>About</p></Link>
                </div>
                <div className="text-lg text-[#35374f] transition ease-in  hover:text-[#6C22A6] font-semibold">
                  <Link to="/"><p>Apply</p></Link>
                </div>
                <div className="text-lg text-[#35374f] transition ease-in  hover:text-[#6C22A6] font-semibold">
                  <Link to="/"><p>Buy NFT</p></Link>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                
              <button className="hidden bg-[#6C22A6] transition ease-in hover:bg-[#F3CCF3] hover:shadow-sm hover:text-[#35374f] 
                md:flex justify-center items-center rounded-md md:text-lg text-white px-4 py-2">
                    Connect Wallet
              </button>
          </div> 
          <div className="md:hidden text-[30px] text-[#6C22A6]">
            <RiMenu3Line />
          </div>
        </nav>
    </header>
  )
}

export default Header