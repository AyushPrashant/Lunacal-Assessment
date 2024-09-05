import React, { useState, useEffect } from 'react';

const Right = () => {
    const [clickedIndex, setClickedIndex] = useState(0);

    const handleItemClick = (index) => {
        setClickedIndex(index); 
    };

    const listItems = ['About Me', 'Experiences', 'Recommended'];

    const content = [
        `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
     I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
     Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
        `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
     I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
     Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
        `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
     I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
     Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
    ];

    useEffect(() => {
        setClickedIndex(0);
    }, []);

    return (
        <>
            <div className="bg-[#363C43] max-w-[620px] min-h-[250px] text-white rounded-[15px] mx-auto mt-[40px] shadow-[0_16px_40px_0px_rgba(0,0,0,0.6)] font-custom">
                <div className="Nav flex p-4 gap-4 items-start">
                    <img src="/icon.svg" alt="" />
                    <div
                        className={`relative bg-[#171717] justify-between w-full p-[10px] rounded-[23px] flex shadow-[inset_0_8px_20px_3px_rgba(0,0,0,0.4)] transition-all duration-300`}
                    >
                        <ul className="flex justify-between w-full font-medium items-center">
                            {listItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`relative group rounded-[16px] py-[12px] px-[36px] leading-[16.12px] text-[#969696] font-semibold cursor-pointer overflow-hidden transition duration-200 ease-in ${clickedIndex === index
                                            ? 'shadow-[0_0_25px_10px_rgba(0,0,0,0.9),0_0_50px_15px_rgba(0,0,0,0.7)] bg-gradient-to-r from-[#2E2E2E] via-[#3D3D3D] to-[#1B1B1B] text-white'
                                            : ''
                                        }`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <span
                                        className={`absolute inset-0 bg-[#28292F] opacity-40 transition-all duration-300 ease-in-out ${clickedIndex === index ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    ></span>
                                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex overflow-y-auto">
                    <img className="pt-6 pl-2" src="para.svg" alt="" />
                    <p className="pl-4 pt-1 font-normal leading-[25.2px] text-[#969696]">
                        {clickedIndex !== null ? content[clickedIndex] : content[0]}
                    </p>
                    <img className="pt-1" src="scroll.svg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Right;
