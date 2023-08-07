import React from 'react';
const Content = () => {
  return (
    <div className='container mx-auto mt-4 lg:px-48'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col items-center sm:items-start mx-4 sm:order-1 order-2'>
                {/* Lista de contenido */}
                <ul className='text-sm sm:text-lg mt-4 sm:mt-0'>
                    <li className=''>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i><strong>Up to 10.5% Annual Return</strong><br/>
                        <p className='ml-6'>Capture market-linked gains and protection against market volatility and downturns.</p>
                    </li><br/>
                    <li className=''>
                        <i className="fa fa-check mr-2" aria-hidden="true"></i><strong>Guaranteed Retirement Income</strong><br/>
                        <p className='ml-6'>Receive a monthly paycheck for life that last as long as you do, regarless of how you live.</p>
                    </li><br/>
                    <li className=''>
                        <i className="fa fa-check mr-2" aria-hidden="true"></i><strong>Highest Upfront Cash Bonus</strong><br/>
                        <p className='ml-6'>See which annuities will provide you the highest upfront cash bonus applied to your principal.</p>
                    </li><br/>
                    <li className=''>
                        <i className="fa fa-check mr-2" aria-hidden="true"></i><strong><u>Download This Report Immediatley!</u></strong><br/>
                        <p className='ml-6'>Once you fill out the simple form here on this page, you'll be able to download and access
                        our Annuity Ranking Report<sup>TM</sup> immediately!</p>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-center sm:items-start mx-4 card sm:order-2 order-1'>
                {/* Formulario de inscripción */}
                <form className='flex flex-col items-start'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-xl sm:text-2xl text-center mb-2'>
                            <strong>Download Your Free Annuity Ranking Report</strong>
                        </h2>
                        <h5 className='text-lg sm:text-lg mb-2'>
                            (Updated July 2023)
                        </h5>
                        <p className='text-xs text-center'>Get the most ip-to date highest-paying annuities available right now. See the current annuity rates, guaranteed annual income, fees, riders, and more from the highest-paying annuities in 2023.</p>
                    </div>
                    <label className='text-sm'>
                        <strong>First Name *</strong>
                    </label>
                    <input className='border border-gray-400 rounded-md w-full mb-2' type='text'/>
                    <label className='text-sm'>
                        <strong>Last Name *</strong>
                    </label>
                    <input className='border border-gray-400 rounded-md w-full mb-2' type='text'/>
                    <label className='text-sm'>
                        <strong>How much have you saved for retirement? *</strong>
                    </label>
                    <div className="relative w-full text-black">
                        <select className="border border-white bg-white rounded-md w-full mb-2 pl-3 pr-8 appearance-none">
                            <option value=''></option>
                            <option value='1'>Less than $50,000</option>
                            <option value='2'>$50,000 - $100,000</option>
                            <option value='3'>$100,000 - $250,000</option>
                            <option value='4'>$250,000 - $500,000</option>
                            <option value='5'>$500,000 - $1,000,000</option>
                            <option value='6'>More than $1,000,000</option>
                        </select>
                        <i className="fa-solid fa-caret-down absolute top-1/2 right-3 transform -translate-y-1/2"></i>
                    </div>
                    <label className='text-sm'>
                        <strong>Age *</strong>
                    </label>
                    <div className="relative w-full text-black">
                        <select className='border border-white bg-white rounded-md w-full mb-2 appearance-none'>
                            <option value=''></option>
                            <option value='1'>Under 50</option>
                            <option value='2'>50 - 59</option>
                            <option value='3'>60 - 69</option>
                            <option value='4'>70 - 79</option>
                            <option value='5'>80 or older</option>
                        </select>
                        <i className="fa-solid fa-caret-down absolute top-1/2 right-3 transform -translate-y-1/2"></i>
                    </div>
                    <label className='text-sm'>
                        <strong>Email *</strong>
                    </label>
                    <input className='border border-gray-400 rounded-md w-full mb-2' type='text'/>
                    <label className='text-sm'>
                        <strong>Cell Phone Number *</strong>
                    </label>
                    <input className='border border-gray-400 rounded-md w-full mb-2' type='text'/>
                    <div className='flex items-start w-full'>
                        <input className=' bg-white rounded-md mr-2 mb-2' type='checkbox'/>
                        <p className='text-xs'>Yes, text me the FREE report! (OPTIONAL)</p>
                    </div>
                    <button style={{backgroundColor: '#fc9425'}} className='mb-2 w-full text-white font-bold py-2 px-4 rounded'>
                        GET MY ANNUITY REPORT
                    </button>
                    <small className='text-xs text-center'>* Mandatory fields. Our exclusive Annuity Ranking Report<sup>TM</sup>
                    is absolutely free and will be available for you to download IMMEDIATELY. We will never share your personal information.</small>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Content;