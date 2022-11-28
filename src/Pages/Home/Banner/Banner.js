import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-12" style={{ backgroundImage: `url("https://images.thedailystar.net/sites/default/files/images/2022/05/25/_palash_khan_9563.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Old Books House</h1>
      <p className="mb-5">
          It's a huge market of copied and second-hand Books, printing presses, seals, banners, stationery products, computer graphics designers, street foods & many more. One can find almost all types of university, medical college, school-related and every other kind of books. If you want to make a seal or print a book or visiting card or design anything in the computer at the cheapest rate, then this is the place. I have found many rare books at an incredibly cheap rate while visiting the hundreds of book shops in here.
        </p>
    </div>
  </div>
</div>
    );
};

export default Banner;