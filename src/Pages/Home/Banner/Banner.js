import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-12" style={{ backgroundImage: `url("https://images.thedailystar.net/sites/default/files/images/2022/05/25/_palash_khan_9563.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;