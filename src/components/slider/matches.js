import React from "react";
import Slider from "react-slick";
import "./matches.css"
// import { BsPlayCircle } from 'react-icons/bs';
import { GiTicket } from 'react-icons/gi';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useState } from "react";

const Matches = () =>{
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // focusOnSelect: true
  };
  const [isActive1, setIsActive1] = useState(false);
  const handleClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = () => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = () => {
    setIsActive3(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = () => {
    setIsActive4(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive1(false);
    setIsActive5(false);
  };
  const [isActive5, setIsActive5] = useState(false);
  const handleClick5 = () => {
    setIsActive5(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive1(false);
  };
    return(
        <div className="h-[400px]">
           <Slider {...settings} className="">
          <div className="relative">
            <div className={isActive1 ? 'w-[120%] h-[200px] bg-[white] flex-col items-center justify-center' : ' hidden'} onClick={handleClick1} id="box">
              <div className="w-[100%] h-[15%] bg-[#121212] flex justify-center">
              <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#121212]">Home</button>
                </div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h2>Tuesday Jan 31</h2></div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h3>8:00 AM EAT</h3></div>
              <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                <h2>|</h2>
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><GiTicket/>Buy Tickets</button>
              </div>
            </div>
            <div className={isActive1 ?" hidden": 'w-[100%] h-[200px] bg-[#2F2F2F] flex-col items-center justify-center border border-solid border-[#D7D7D7]'} onClick={handleClick1} id="box small">
                <div className="flex h-[15%] w-[100%] items-cente justify-between">
                  <h3 className="text-[#999999] w-[50%] flex justify-center items-center">Thu. Feb 2, 7:00 PM CST</h3>
                  <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#2F2F2F]w-[50%] flex justify-center items-center">Home</button>
                </div>
                <div className="h-[65%] w-[100%]">
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>KHULEGUUD (16-23)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>HORNETS (34-24)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>TV:MBA SPORTS UB RADIO:234 THE  UBSCORE</h2></div>
                </div>
                <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                  <button className="w-[100%] h-[100%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                </div>
            </div>
          </div>
          <div className="relative">
          <div className={isActive2 ? 'w-[120%] h-[200px] bg-[white] flex-col items-center justify-center' : ' hidden'} onClick={handleClick2} id="box">
              <div className="w-[100%] h-[15%] bg-[#121212] flex justify-center">
              <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#121212]">Home</button>
                </div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h2>Tuesday Jan 31</h2></div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h3>8:00 AM EAT</h3></div>
              <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                <h2>|</h2>
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><GiTicket/>Buy Tickets</button>
              </div>
            </div>
            <div className={isActive2 ?" hidden": 'w-[100%] h-[200px] bg-[#2F2F2F] flex-col items-center justify-center border border-solid border-[#D7D7D7]'} onClick={handleClick2} id="box small">
                <div className="flex h-[15%] w-[100%] items-cente justify-between">
                  <h3 className="text-[#999999] w-[50%] flex justify-center items-center">Thu. Feb 2, 7:00 PM CST</h3>
                  <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#2F2F2F]w-[50%] flex justify-center items-center">Home</button>
                </div>
                <div className="h-[65%] w-[100%]">
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>KHULEGUUD (16-23)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>HORNETS (34-24)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>TV:MBA SPORTS UB RADIO:234 THE  UBSCORE</h2></div>
                </div>
                <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                  <button className="w-[100%] h-[100%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                </div>
            </div>
          </div>
          <div className="relative">
          <div className={isActive3 ? 'w-[120%] h-[200px] bg-[white] flex-col items-center justify-center' : ' hidden'} onClick={handleClick3} id="box">
              <div className="w-[100%] h-[15%] bg-[#121212] flex justify-center">
              <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#121212]">Home</button>
                </div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h2>Tuesday Jan 31</h2></div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h3>8:00 AM EAT</h3></div>
              <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                <h2>|</h2>
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><GiTicket/>Buy Tickets</button>
              </div>
            </div>
            <div className={isActive3 ?" hidden": 'w-[100%] h-[200px] bg-[#2F2F2F] flex-col items-center justify-center border border-solid border-[#D7D7D7]'} onClick={handleClick3} id="box small">
                <div className="flex h-[15%] w-[100%] items-cente justify-between">
                  <h3 className="text-[#999999] w-[50%] flex justify-center items-center">Thu. Feb 2, 7:00 PM CST</h3>
                  <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#2F2F2F]w-[50%] flex justify-center items-center">Home</button>
                </div>
                <div className="h-[65%] w-[100%]">
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>KHULEGUUD (16-23)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>HORNETS (34-24)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>TV:MBA SPORTS UB RADIO:234 THE  UBSCORE</h2></div>
                </div>
                <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                  <button className="w-[100%] h-[100%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                </div>
            </div>
          </div>
          <div className="relative">
          <div className={isActive4 ? 'w-[120%] h-[200px] bg-[white] flex-col items-center justify-center' : ' hidden'} onClick={handleClick4} id="box">
              <div className="w-[100%] h-[15%] bg-[#121212] flex justify-center">
              <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#121212]">Home</button>
                </div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h2>Tuesday Jan 31</h2></div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h3>8:00 AM EAT</h3></div>
              <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                <h2>|</h2>
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><GiTicket/>Buy Tickets</button>
              </div>
            </div>
            <div className={isActive4 ?" hidden": 'w-[100%] h-[200px] bg-[#2F2F2F] flex-col items-center justify-center border border-solid border-[#D7D7D7]'} onClick={handleClick4} id="box small">
                <div className="flex h-[15%] w-[100%] items-cente justify-between">
                  <h3 className="text-[#999999] w-[50%] flex justify-center items-center">Thu. Feb 2, 7:00 PM CST</h3>
                  <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#2F2F2F]w-[50%] flex justify-center items-center">Home</button>
                </div>
                <div className="h-[65%] w-[100%]">
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>KHULEGUUD (16-23)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>HORNETS (34-24)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>TV:MBA SPORTS UB RADIO:234 THE  UBSCORE</h2></div>
                </div>
                <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                  <button className="w-[100%] h-[100%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                </div>
            </div>
          </div>
          <div className="relative">
          <div className={isActive5 ? 'w-[120%] h-[200px] bg-[white] flex-col items-center justify-center' : ' hidden'} onClick={handleClick5} id="box">
              <div className="w-[100%] h-[15%] bg-[#121212] flex justify-center">
              <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#121212]">Home</button>
                </div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h2>Tuesday Jan 31</h2></div>
              <div className="h-[30%] flex justify-center items-center text-[#fff] bg-[#121212]"><h3>8:00 AM EAT</h3></div>
              <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                <h2>|</h2>
                <button className="w-[50%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><GiTicket/>Buy Tickets</button>
              </div>
            </div>
            <div className={isActive5 ?" hidden": 'w-[100%] h-[200px] bg-[#2F2F2F] flex-col items-center justify-center border border-solid border-[#D7D7D7]'} onClick={handleClick5} id="box small">
                <div className="flex h-[15%] w-[100%] items-cente justify-between">
                  <h3 className="text-[#999999] w-[50%] flex justify-center items-center">Thu. Feb 2, 7:00 PM CST</h3>
                  <button className="border-2 rounded-xl text-[12px] text-[white] bg-[#2F2F2F]w-[50%] flex justify-center items-center">Home</button>
                </div>
                <div className="h-[65%] w-[100%]">
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>KHULEGUUD (16-23)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>HORNETS (34-24)</h2></div>
                  <div className="h-[33%] flex justify-center items-center text-[#fff] bg-[#2F2F2F]"><h2>TV:MBA SPORTS UB RADIO:234 THE  UBSCORE</h2></div>
                </div>
                <div className="w-[100%] h-[20%] bg-red flex justify-between items-center">
                  <button className="w-[100%] h-[100%] text-[#121212] bg-[#fff] flex items-center justify-center border-1"><AiFillPlayCircle/>Watch</button>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    )
}

export default Matches