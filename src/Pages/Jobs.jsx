import React from 'react';

export const Jobs = () => {
  return (
    <>
      <div>
        <div className="relative bg-blue-700">
          <div className="absolute inset-x-0 bottom-0">
            <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
              <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
              </path>
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Subscribe to our newsletter
              </h2>
              <p className="mb-6 text-base text-indigo-200 md:text-lg">
                Stay updated with the latest job opportunities and news in Japan. Subscribe now!
              </p>
              <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                <a href="/" className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
                  Subscribe
                </a>
              </form>
              <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                Join our newsletter to receive updates on job listings, career advice, and more about work opportunities in Japan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
