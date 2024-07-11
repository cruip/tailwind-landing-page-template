'use client'
import {companies} from '@/app/lib/data'
import React, { useState } from 'react';
import Image from 'next/image';

const CompanyBar: React.FC = () => {
    const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<number | null>(null);
    const [selectedImageIndices, setSelectedImageIndices] = useState<number[]>(companies.map(() => 0));

    const handleButtonClick = (companyIndex: number, imageIndex: number) => {
    setSelectedImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[companyIndex] = imageIndex;
      return newIndices;
    });
  };
    return (
        <section>
    <div className="mx-auto flex flex-col px-3 items-center">
        <div className="container mx-auto">
            <div className="w-full overflow-x-auto">
                <div className="flex space-x-2 md:space-x-8 py-4">
                {companies.map((company, index) => (
                    <div
                    key={index}
                    className={`flex flex-col px-2 md:px-4 items-center cursor-pointer transition-opacity duration-300 ${selectedCompanyIndex !== index ? 'opacity-70' : 'opacity-100'}`}
                    onClick={() => setSelectedCompanyIndex(index)}
                    >
                    <div className="gradient-border p-1">
                        <Image
                        alt={company.name}
                        src={company.image}
                        width={80}
                        height={80}
                        className="rounded-full"
                        />
                    </div>
                    <div className={`mt-2 text-center font-semibold ml-2 text-sm bg-gradient-to-r bg-clip-text ${selectedCompanyIndex === index ? 'text-transparent from-pink-400 via-purple-500 to-indigo-500 animate-text dark:drop-shadow-[0_0_0.9rem_#ffffff70] scale-115' : ''}`}>
                        {company.name}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {selectedCompanyIndex !== null && (
          <div className="flex w-full mt-5 flex-wrap">
            <div className="flex w-full mb-10">
               <div className="w-full md:w-1/2 pr-4">
                <div className="relative rounded-xl mr-auto md:mr-0 md:ml-auto shadow-xl flex bg-slate-800 h-[20rem] sm:max-h-[none] sm:rounded-xl lg:h-[25rem] xl:h-auto xl:max-h-[25rem] dark:bg-primary/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 col-start-6 col-end-10 target target-show">
                  <div className="relative w-full flex flex-col z-10">

                    {/* <Bar /> */}
                    <div className="relative min-h-0 flex-auto flex flex-col">
                      <div className="flex-none overflow-auto whitespace-nowrap flex" style={{ opacity: 1 }}>
                      <div className="relative flex-none min-w-full px-1">
                        <ul className="custom-font flex text-sm leading-6 text-slate-300">
                          {Array.isArray(companies[selectedCompanyIndex].display) && 
                            companies[selectedCompanyIndex].display.map((display, idx) => (
                              <li key={idx} className="flex-none">
                                <button
                                  type="button"
                                  className={`relative py-2 px-3 text-secondary border-s-slate-800 hover:bg-slate-900 hover:rounded-lg ${selectedImageIndices[selectedCompanyIndex] === idx ? 'bg-slate-700 rounded-r-lg border-2 border-b-pink-500 text-pink-400' : 'bg-slate-800'}`}
                                  onClick={() => handleButtonClick(selectedCompanyIndex, idx)}
                                >
                                  {display}
                                  <span className="absolute z-10 bottom-0 inset-x-3 h-px bg-secondary"></span>
                                </button>
                              </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-0 inset-x-0 h-px bg-slate-500/30"></div>
                      </div>
                    </div>
                      <div className="w-full flex flex-auto min-h-0 overflow-hidden border-b-lg">
                      <div className="w-full relative bg-white flex-auto border-b-lg rounded-b-xl flex justify-center items-center">
                        {selectedImageIndices[selectedCompanyIndex] !== undefined && 
                        selectedImageIndices[selectedCompanyIndex] < companies[selectedCompanyIndex].proj_img.length && (
                          <img
                            src={companies[selectedCompanyIndex].proj_img[selectedImageIndices[selectedCompanyIndex]]}
                            alt=""
                            className="max-w-full max-h-full flex-auto object-center"
                          />
                        )}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 pl-4">
                <div className="flex flex-col py-3">
                  <p className="text-sm text-secondary font-medium text-purple-500">{companies[selectedCompanyIndex].role}</p>
                  <dt className="text-2xl font-semibold leading-7 text-gray-100 mt-2">{companies[selectedCompanyIndex].proj_name}</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{companies[selectedCompanyIndex].details}</p>
                  </dd>
                  <div className="flex space-x-2 mt-3">
                    {Array.isArray(companies[selectedCompanyIndex].method) && companies[selectedCompanyIndex].method.map((method, idx) => (
                      <span key={idx} className="inline-flex bg-purple-400 items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800 bg-darkPrimary">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        )}
      </div>
        </section>
    )
}

export default CompanyBar