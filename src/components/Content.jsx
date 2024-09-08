import React from 'react'
import "../styles/components/Content.css"
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


const Content = () => {
  return (
    <div id='content' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Tarot</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Understanding Tarot Reading</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Crystals and tarot cards blend beauty with mysticism, offering spiritual insights, energy healing, and a deeper connection to personal intuition and well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            id="image7"
            alt=""
            src={image7}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[55rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Dive into the realm of Tarot reading, an ancient mystical practice
               that uses a deck of symbolic cards to gain profound insights into your past, 
               present, and future. Learn about the symbolism of each card, the art of interpreting their arrangement, and how Tarot can be a powerful tool for guidance, self-discovery, and spiritual exploration.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
              
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900"> Amethyst and Rose Quartz-</strong> Amethyst and rose quartz, popular crystals, promote calm and love, aligning with spiritual growth and emotional balance.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Amplifying Intuition and Energy-  </strong>
                    Crystals enhance tarot readings, amplifying intuition and energy, creating a powerful spiritual tool for insight.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Explore the enigmatic world of numerology, where numbers hold the key to unlocking the mysteries of your life.
               Discover how numerologists derive meaning from your birthdate and name, unveiling insights into your life's
                purpose, personality traits, and potential. Delve into the fascinating connections between numbers and your 
                existence, offering a unique perspective on personal growth and self-awareness.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Transform Your Life with Inner Harmony</h2>
              <p className="mt-6">
              At Tarot, we offer Ho‘oponopono Healing, a powerful Hawaiian practice focused on reconciliation
               and forgiveness. This ancient technique aims to clear emotional blockages, promote inner peace, and 
               restore harmony in your life. Through guided sessions and the art of forgiveness, we help you release negativity and experience profound transformation. Let us guide you on a journey to healing and inner balance with Ho‘oponopono.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content
