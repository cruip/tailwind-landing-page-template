import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import cv from '../images/james_owen.pdf'



function Features() {

    const [tab, setTab] = useState(1);

    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
        }
    }

    useEffect(() => {
        heightFix()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab])

    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="false"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">About me</h1>
                        <p className="text-xl text-gray-600"><p>I'm a backend software developer, very interested in automation, AI and Web3.</p><br></br><p>I have commercial experience as a backend developer within a data consultancy. I have worked with etl and data engineering practices to ingest, clean and store big data sets for data modelling and data analysis. I have also worked on the company's software which is provided as a service to customers mainly in the telecoms and utilities sectors. Working alongside different clients has exposed my to a variety of different technologies, languages and methodologies which I have had to adapt to.</p>
                            <br></br><p>I am someone who enjoys new challenges and learning new things. I love solving puzzles and figuring out interesting solutions to tricky tasks</p></p>

                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" >
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="h3 mb-3">What I currently know</h3>

                                <p className="text-xl text-gray-600"></p>
                            </div>
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}

                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Languages</div>
                                        <div className="text-gray-600">Python, SQL, JS, C, Solidity</div>
                                    </div>

                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}

                                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Technologies</div>
                                        <div className="text-gray-600">AWS, Unix shell, Azure, Databricks, SQL server, Brownie, Web3.py, MySQL, YAML templating, API consumption </div>
                                    </div>

                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}

                                    onClick={(e) => { e.preventDefault(); setTab(3); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Methodologies</div>
                                        <div className="text-gray-600">Agile, Git version control, unit and integration testing</div>
                                    </div>

                                </a>
                            </div>

                        </div>



                        {/* Tabs items */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                <div>
                                    {/* <Link to={cv} target="_blank" download> */}
                                    <a href='/src/images/james_owen.pdf' download>
                                        <button className="btn px-0 text-white bg-black hover:bg-blue-800 w-full mb-4 sm:w-auto sm:mb-0" >

                                            <span className="flex-auto pl-8 pr-8 -ml-0">Download my Resume</span>
                                        </button>
                                    </a>
                                    {/* </Link> */}
                                    {/* <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="../images/james_owen.pdf">Download my Resume</a> */}
                                </div>

                            </div>
                        </div >

                    </div >

                </div >
            </div >


        </section >
    );
}

export default Features;