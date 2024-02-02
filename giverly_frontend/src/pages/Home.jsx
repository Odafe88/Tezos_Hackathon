import React from 'react';
import Header from '../components/Header';
import ill from "../assets/DrawKit Vector Illustration Social Work & Charity/SVG/illustration_8.svg"
import mint from "../assets/mint_nft.svg"
import kids from "../assets/african_kids.jpg"
import trees from "../assets/planting_trees.jpg"

import { GiCrossedChains } from "react-icons/gi";
import { RiNftFill } from "react-icons/ri";
import { GiMineralPearls } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 font-primary">
      <Header />
      <section className="h-screen md:mt-[30px] px-15px md:px-[30px] pb-[30px]">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 px-[30px]">
            <div className="pt-[18px] md:pt-[40px]">
                <h3 className="text-[20px] text-[#371f76] font-bold">Our Platform</h3>
                <h1 className="text-[30px] md:text-4xl py-4 text-[#35374f] font-bold">
                    Welcome to Giverrly, <br />We help NGOs get onboarded into the world of Web3
                </h1>
                <p className="mt-[10px] text-[18px] md:text-[22px] text-[#35374f] font-semibold">
                    We built a powerful and practical fundraising platform for nonprofits to raise funds by minting and selling NFTs intuitively while making it easy to use for donors to support a cause.
                </p>
            </div>
            <div className="relative flex justify-start items-center py-8 gap-4">
              <div className="">
                <button className="px-4 py-2 rounded-md text-[16px] md:text-lg font-bold text-white bg-[#6C22A6] transition ease-in
                hover:bg-[#96E9C6] hover:text-[#35374f] 
                ">
                  Apply as an NGO
                </button>
              </div>
              <div className="mx-4">
                <button className="px-4 py-2 rounded-md text-[16px] md:text-lg font-bold text-white bg-[#6C22A6] transition ease-in
                hover:bg-[#96E9C6] hover:text-[#35374f]
                ">
                  Support a cause
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:w-1/2">
            <img src={ill} />
          </div>
        </div>
      </section>  
      <section className="min-h-screen w-full pt-[50px] pb-[20px] px-[30px]">
        <div className="w-full bg-white rounded-md text-center py-[30px] px-[30px]">
          <h3 className="text-lg text-[#371f76] font-bold">
            What we offer
          </h3>
          <div className="py-4">
              <h1 className="text-[#35374f] text-[24px] md:text-3xl font-bold">
                Raise Funds seamlessly for your NGO
              </h1>
            <p className="text-[#35374f] text-lg md:text-xl my-4 font-semibold">There are no rules about how to begin with our tech, so jump right in wherever you like!</p>
          </div>
          <div className="py-[30px]">
            <div className='relative w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center'>
              <div className="w-full h-[370px] md:w-[300px] text-center rounded-md bg-[#DFCCFB] p-8 cursor-pointer
              transition ease-in delay-150 
              hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="flex flex-col items-center gap-4">
                  <GiMineralPearls className="text-4xl text-[#371f76]" />
                  <h1 className="text-[#371f76] text-2xl font-semibold">Minting NFTs</h1>
                </div>
                <div className="h-[180px]">
                  <p className="my-4 text-[#35374f] font-semibold">
                    We enable NGOs to smoothly create, Mint and list NFTs on our platform.
                  </p>
                </div>
                <div className="flex flex-col items-center bottom-0">
                  <Link>
                    <FaAngleRight className="text-[#371f76] text-2xl" />
                  </Link>
                </div>
              </div>
              <div className="w-full h-[370px] md:w-[300px] text-center rounded-md bg-[#DFCCFB] p-8 cursor-pointer
              transition ease-in delay-150 
              hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="flex flex-col items-center gap-4">
                  <RiNftFill className="text-4xl text-[#371f76]" />
                  <h1 className="text-[#371f76] text-2xl font-semibold">Marketplace</h1>
                </div>
                <div className="h-[180px]">
                  <p className="my-4 text-[#35374f] font-semibold">
                    We crafted a seamless Markplace filled with Important projects our donors can buy and support
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Link>
                    <FaAngleRight className="text-[#371f76] text-2xl" />
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-[370px] md:w-[300px] text-center rounded-md bg-[#DFCCFB] p-8 cursor-pointer
              transition ease-in delay-150 
              hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="flex flex-col items-center gap-4">
                  <GiCrossedChains className="text-4xl text-[#371f76]" />
                  <h1 className="text-[#371f76] text-2xl font-semibold">Safe Transanctions</h1>
                </div>
                <div className="h-[180px]">
                  <p className="my-4 text-[#35374f] font-semibold">
                    Using the Tezos blockchain, we can achieve seamless decentralized transanctions on the blockchain
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Link>
                    <FaAngleRight className="text-[#371f76] text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-gradient-to-tl from-violet-300 to-violet-400 pt-[50px] pb-[20px] px-[15px] md:px-[30px]">
        <div className="relative w-full flex flex-col md:flex-row justify-around items-center">
          <div className="px-[30px] md:w-1/2 ">
            <h3 className="text-lg text-[#371f76] font-bold">
              Our Motivation
            </h3>
            <h1 className="text-3xl md:text-4xl py-4 text-[#35374f] font-bold">
              We support values that inspire nonprofits to tackle tough challenges.
            </h1>
            <p className="mt-[10px] text-[18px] md:text-[22px] text-[#35374f] font-semibold">
              We guide nonprofits into the world of Web3, help them hit their fundraising goals and allow them to devote more resources to their critical work.
            </p>
            <div className="py-8">
                <button className="px-4 py-2 rounded-md text-lg font-bold text-white bg-[#6C22A6] transition ease-in
                hover:bg-[#96E9C6] hover:text-[#35374f]
                ">
                  More about us
                </button>
              </div>
          </div>
          <div className="relative w-full md:w-1/2 px-[15px] flex flex-col justify-center items-start md:flex-row">
            <div >
              <img src={kids} alt="african kids smiling" className="border-2 border-white shadow-md rounded-md md:rounded-full w-[200px] h-[200px]" />
            </div>

            <div >
              <img src={trees} alt="Humans planting tree" className="border-2 border-white shadow-md rounded-md md:rounded-full mt-[50px] w-[300px] h-[300px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage