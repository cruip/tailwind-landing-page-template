'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative bg-gray-50 py-16">

      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-4xl font-extrabold mb-4">Soluciones Avanzadas en Ciberseguridad</h1>
            <p className="text-xl text-gray-600">Protege tu organización con nuestras herramientas y servicios especializados en ethical hacking, ciberinteligencia y buenas prácticas en ciberseguridad.</p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="text-2xl font-bold mb-3">Nuestra Propuesta de Valor</h3>
                <p className="text-xl text-gray-600">Nuestros servicios están diseñados para proporcionar una protección integral y avanzada, adaptada a las necesidades específicas de tu organización.</p>
              </div>

              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={() => setTab(1)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Ethical Hacking</div>
                    <div className="text-gray-600">Realizamos pruebas de penetración exhaustivas y auditorías de seguridad para proteger tus aplicaciones e infraestructura.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={() => setTab(2)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Ciberinteligencia</div>
                    <div className="text-gray-600">Ofrecemos análisis forense e investigaciones avanzadas para identificar y mitigar amenazas de seguridad.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={() => setTab(3)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Buenas Prácticas</div>
                    <div className="text-gray-600">Capacitamos a tu equipo con las mejores prácticas en ciberseguridad, promoviendo una cultura de seguridad sólida.</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}                     
                >
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}                     
                >
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}                     
                >
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}