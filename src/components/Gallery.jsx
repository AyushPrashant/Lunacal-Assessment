import React, { useRef, useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState(["img.svg", "img.svg", "img.svg", "img.svg", "img.svg"]); 
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -150, // Adjust the scroll distance
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 150, // Adjust the scroll distance
                behavior: 'smooth',
            });
        }
    };

    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setImages((prevImages) => [...prevImages, newImageUrl]);
        }
    };

    return (
        <>
            <div
                className="bg-[#363C43] max-w-[620px] max-h-[280px] text-white rounded-[15px] mx-auto shadow-lg font-custom"
                style={{ boxShadow: '5.67px 5.67px 3.78px 0px #00000066' }}
            >
                <div className="Nav flex p-4 gap-4 items-start">
                    <img src="/icon.svg" alt="" />
                    <div className="flex justify-between gap-3 w-full">
                        <div className="bg-[#171717] font-medium leading-[30px] px-10 py-4 rounded-[20px] flex shadow-[inset_0px_4.96px_12.4px_2.48px_#00000040]">
                            Gallery
                        </div>
                        <label
                            className="flex text-[12px] mt-4 px-6 font-light rounded-full items-center justify-center w-[150px] h-[45px] cursor-pointer"
                            style={{
                                boxShadow: `0px 3.26px 3.26px 0px #FFFFFF26 inset, 0px 0px 48.91px 0px #FFFFFF0D inset, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #FFFFFF40`,
                            }}
                        >
                            <span className='hover:font-bold'>+ ADD IMAGE</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAddImage}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </div>
                    <div
                        className="bg-[#303439] transition-all duration-300 ease-in cursor-pointer hover:bg-[#161718] mt-4 py-4 px-4 rounded-full"
                        onClick={scrollLeft}
                        style={{
                            boxShadow: `4px 5px 30px 5px #101213, -5px -3px 30px -10px rgba(150, 190, 231, 0.8), -5px -3px 30px -5px rgba(150, 190, 231, 0.5), -5px -3px 30px 0 rgba(150, 190, 231, 0.2)`,
                        }}
                    >
                        <img src="larr.svg" alt="Left Arrow" />
                    </div>

                    <div
                        className="bg-[#303439] transition-all duration-300 ease-in cursor-pointer hover:bg-[#161718] mt-4 py-4 px-4 rounded-full"
                        onClick={scrollRight}
                        style={{
                            boxShadow: `4px 5px 30px 5px #101213, -5px -3px 30px -10px rgba(150, 190, 231, 0.8), -5px -3px 30px -5px rgba(150, 190, 231, 0.5), -5px -3px 30px 0 rgba(150, 190, 231, 0.2)`,
                        }}
                    >
                        <img src="rarr.svg" alt="Right Arrow" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="ml-2 mt-6">
                        <img src="para.svg" alt="" />
                    </div>
                    <div
                        className="flex gap-2 overflow-hidden mb-3"
                        ref={scrollContainerRef}
                        style={{ perspective: '1000px' }}
                    >
                        {images.map((src, index) => (
                           <img
                           key={index}
                           className="h-36 p-1 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:translate-y-1 filter hover:sepia-100 hover:brightness-125 hover:contrast-110"
                           src={src}
                           alt={`Image ${index + 1}`}
                           style={{
                               transformOrigin: '',
                           }}
                       />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
