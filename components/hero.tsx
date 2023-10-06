import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#F6F3FF" offset="0%" />
              <stop stopColor="#A590FF" offset="77.402%" />
              <stop stopColor="#92BEFF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-semibold leading-tighter tracking-tighter text-gray-1000 mb-4" data-aos="zoom-y-out">
              More than flashcards. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-1000">Your comprehensive study companion.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-1000 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Meet OneStudy, your personalized study platform that automatically transforms your notes and lectures into customized study materials to accelerate your learning.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn bg-purple-400 text-white font-bold rounded mb-2 focus:outline-none hover:bg-[#483285]" href="https://app.onestudy.io/referral">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-purple font-bold border-1 border-purple-400 hover:bg-[#EDE9FE] w-full sm:w-auto sm:ml-4" href="https://www.notion.so/one-study/Help-Center-228b0bb8fbb543c88c2cb7c3672cfcd6">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}