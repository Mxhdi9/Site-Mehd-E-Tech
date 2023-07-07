import React from "react";
import Link from "next/link";

const ImageGallery = () => {
  return (
    <div className='bg-white h-screen p-5'>
      <div className='bg-white'>
        <h2 className="text-xl">Téléphones</h2>
        <div className='py-4'>
          <div className='w-64'>
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src='/img/iphone.png' alt=""/>
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 13 Pro Max</h3>
            </div>
            <p className="text-sm mt-1 leading-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
          <div className="flex mt-1">
            <div className="text-2xl font-bold grow">799€</div>
            <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery;

