import React from 'react';
import { useMediaQuery } from 'react-responsive';
const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <div style={{height: isTabletOrMobile ? '22rem' : '32rem', overflow:'hidden'}} className='w-full text-black'>
      <img
        style={{height: '32rem'}}
        className='absolute z-10 w-full h-full hidden sm:block lg:h-4/5 lg:object-cover lg:object-top'
        src='/images/her-background-arr[1].jpg'
        alt='Hero background'
      />
      {/* Se añade un contenedor que tendrá el logo en la esquina superior izquierda y un texto*/}
      <div className='sm:grid sm:grid-cols-9 sm:gap-4 relative z-20 container lg:px-48 mx-auto mt-4'>
        <div className='sm:col-span-7 lg:col-span-4 flex flex-col sm:items-start mx-4'>
          <div className='flex flex-col items-center sm:items-start'>
            <img
              className='w-2/4 sm:w-1/4'
              src='/images/ag-logo-color[1].png'
              alt='logo'
            />
          </div>
          <br/><br/>
          <h2 className='text-lg sm:text-5xl lg:text-4xl'>
            <strong>Get The Highest Annuity Rates for July, 2023</strong>
          </h2>
          <br/>
        </div>
        <div className='sm:col-span-2 lg:col-span-5'>
          {/* Añade el contenido de la tercera columna aquí */}
        </div>
        <div className='sm:col-span-5 lg:col-span-4 flex flex-col sm:items-start mx-4'>
          <p className='text-sm sm:text-lg'>
            <strong>Earn the highest returns <u>without market risk, starting today!</u></strong>
          </p>
          <br/>
          <p className='text-sm sm:text-lg'>
            See why annuities are one of the most secure investment vehicles available. Get guaranteed lifetime income and downside protection agains market losses offered by top-rated insurance companies.
          </p>
        </div>
        <div className='sm:col-span-4 lg:col-span-5'>
        </div>
      </div>
    </div>
  );
};

export default Hero;

