import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundColor: '#ddf6d9'}} className=" h-full flex flex-col justify-center items-center mt-8">
        <div className="container mx-auto mt-4 lg:px-48 items-center flex flex-col">
            <h1 className="text-xl font-bold mb-4 mt-4 text-slate-800">The Annuity Gator Difference</h1>
            <p className="text-base mx-2 text-center mb-8 text-slate-800">Launched in 2012, as the original annuity "investigator",
            over 180,000 Baby Boomers each year visit our website to gather free retirement
            tips and trusted annuity advice. Out nationwide network of licensed annuity
            professionals are independent and not captive or beholden to anyone particular
            insurance company. We have access to hundreds of the top annuities from top-rated
            companies.</p>
        </div>
    </div>
  );
};

export default Footer;

