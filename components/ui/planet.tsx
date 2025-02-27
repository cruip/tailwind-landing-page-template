import Image from 'next/image';
import PlanetImg from '../public/images/planet.jpg';
import PlanetOverlayImg from '../public/images/planet-overlay.jpg';

export function Planet() {
  return (
    <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
      <div className="text-center">
        <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
          <Image
            className="rounded-full bg-gray-900"
            src={PlanetImg}
            width={400}
            height={400}
            alt="Planet"
          />
          <div className="pointer-events-none" aria-hidden="true">
            <Image
              className="absolute -right-64 -top-20 z-10 max-w-none"
              src={PlanetOverlayImg}
              width={789}
              height={755}
              alt="Planet decoration"
            />
            <div>
              <Image
                className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                src={PlanetOverlayImg}
                width={789}
                height={755}
                alt="Planet decoration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}