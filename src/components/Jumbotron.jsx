import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faWordpress,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faVial, faTerminal, faBox, faDatabase } from '@fortawesome/free-solid-svg-icons';
import TailwindLogo from '/images/technologies/tailwind.svg';


const links = [
  { name: 'Projects', href: '/work' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'My CV', href: 'https://drive.google.com/file/d/1BK8SgnWA4U_hEHC_H_VwCcngRqfUfimw/view?usp=sharing' },
]


export default function Jumbotron() {
  return (
       <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
>
  <source src="./images/1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white hover:scale-105">
        👋 Hi, I'm Olha
        </h2>
          <p className="mt-4 text-lg font-medium text-white sm:text-xl">
          I’m an experienced <span className="font-semibold">front-end developer</span> with expertise in:
        </p>

        <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-2xl" />
            <span className="text-white">HTML</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-2xl" />
            <span className="text-white">CSS</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faJs} className="text-yellow-500 text-2xl" />
            <span className="text-white">JavaScript</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faReact} className="text-cyan-500 text-2xl" />
            <span className="text-white">React</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faWordpress} className="text-blue-700 text-2xl" />
            <span className="text-white">WordPress</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBootstrap} className="text-purple-500 text-2xl" />
            <span className="text-white">Bootstrap</span>
          </li>
          <li className="flex items-center space-x-2">
          <img src={TailwindLogo} alt="Tailwind CSS Logo" className="w-6 h-6" />
            <span className="text-white">Tailwind</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faVial} className="text-green-500 text-2xl" />
            <span className="text-white">Jest</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faTerminal} className="text-gray-500 text-2xl" />
            <span className="text-white">Ubuntu</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBox} className="text-blue-500 text-2xl" />
            <span className="text-white">VirtualBox</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDatabase} className="text-indigo-500 text-2xl" />
            <span className="text-white">Supabase</span>
          </li>
        </ul>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-3 gap-x-5 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="animate-pulse">
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          </div>
      </div>
    </div>
    
  );
}
