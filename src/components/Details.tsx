import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightScale, faRulerVertical, faShoePrints } from '@fortawesome/free-solid-svg-icons';

function Details() {
  return (
    <div id='details'>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-yellow-500 sm:text-4xl">Physical Details</h2>

            <p className="mt-4 text-gray-300 sm:text-xl">
              Here are some key physical details that define my athletic profile. These metrics are crucial for understanding my physical capabilities and overall performance.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-gray-800 px-4 py-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faWeightScale} className="h-6 w-6 text-yellow-500" />
                </div>
                <dt className="order-last text-lg font-medium text-gray-400">Weight</dt>
                <dd className="text-4xl font-extrabold text-yellow-500 md:text-5xl">76kg</dd>
              </div>

              <div className="flex flex-col rounded-lg bg-gray-800 px-4 py-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faRulerVertical} className="h-6 w-6 text-yellow-500" />
                </div>
                <dt className="order-last text-lg font-medium text-gray-400">Height</dt>
                <dd className="text-4xl font-extrabold text-yellow-500 md:text-5xl">178cm</dd>
              </div>

              <div className="flex flex-col rounded-lg bg-gray-800 px-4 py-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faShoePrints} className="h-6 w-6 text-yellow-500" />
                </div>
                <dt className="order-last text-lg font-medium text-gray-400">Foot</dt>
                <dd className="text-4xl font-extrabold text-yellow-500 md:text-5xl">Right</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
