import Avatar from '../Avatar';
import Card from '../Card';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { RxLinkedinLogo } from 'react-icons/rx';
import { FaGithub } from 'react-icons/fa6';
import { FaInfoCircle } from 'react-icons/fa';
import avatarImage from '../../assets/avatar.png';
import Tooltip from '../Tooltip';

function Intro() {
  return (
    <Card>
      <Tooltip
        content={
          <div className="bg-black text-white p-4 rounded-2xl w-48">
            This site was made with <span className="font-bold">Typescript</span>,{' '}
            <span className="font-bold">React</span>, <span className="font-bold">TailwindCSS</span>{' '}
            and <span className="font-bold">Vite</span>. It is hosted on AWS using{' '}
            <span className="font-bold">S3</span> and <span className="font-bold">CloudFront</span>.
            If you want to see the code, you can find it{' '}
            <a
              className="font-bold underline"
              href="https://github.com/DylanAlberto/dams-dev"
              target="_blank"
            >
              here
            </a>
          </div>
        }
        className="absolute top-4 left-4"
      >
        <FaInfoCircle className="w-6 h-6 md:w-8 md:h-8 text-gray-700 hover:text-gray-500" />
      </Tooltip>
      <Avatar src={avatarImage} />
      <span className="text-3xl font-bold text-center">DYLAN ALBERTO</span>
      <span className="text-2xl font-bold text-center">MUÑOZ SOTO</span>
      <span className="text-2xl font-bold text-center">Full Stack Developer</span>
      <div className="flex flex-col gap-4">
        <span className="text-base font-bold text-center flex gap-4 md:text-2xl">
          <ImLocation2 className="w-6 h-6 md:w-8 md:h-8" />
          México City
        </span>
        <a
          href="mailto:dylan_flg@hotmail.com"
          className="text-base font-bold text-center flex gap-4 md:text-2xl hover:cursor-pointer"
        >
          <MdEmail className="w-6 h-6 md:w-8 md:h-8" />
          dylan_flg@hotmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/dylan-ms96/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-bold text-center flex gap-4 md:text-2xl hover:cursor-pointer"
        >
          <RxLinkedinLogo className="w-6 h-6 md:w-8 md:h-8" />
          dylan-ms96
        </a>
        <a
          href="https://github.com/DylanAlberto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-bold text-center flex gap-4 md:text-2xl hover:cursor-pointer"
        >
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
          DylanAlberto
        </a>
      </div>
    </Card>
  );
}

export default Intro;
