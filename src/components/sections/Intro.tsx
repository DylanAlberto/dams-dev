import Avatar from '../Avatar';
import Card from '../Card';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import avatarImage from '../../assets/avatar.png';

function Intro() {
  return (
    <Card>
      <Avatar src={avatarImage} />
      <span className="text-3xl font-bold text-center">DYLAN ALBERTO</span>
      <span className="text-2xl font-bold text-center">MUÑOZ SOTO</span>
      <span className="text-2xl font-bold text-center">Full Stack Developer</span>
      <div className='flex flex-col'>
        <span className="text-sm font-bold text-center flex items-baseline gap-4 md:text-2xl">
          <ImLocation2 />
          México City
        </span>
        <a href="mailto:dylan_flg@hotmail.com" className="text-sm font-bold text-center flex items-baseline gap-4 md:text-2xl hover:cursor-pointer">
          <MdEmail />
          dylan_flg@hotmail.com
        </a>
        <a href="https://www.linkedin.com/in/dylan-ms96/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-center flex items-baseline gap-4 md:text-2xl hover:cursor-pointer">
          <RxLinkedinLogo />
          LinkedIn
        </a>
      </div>
    </Card>
  );
}

export default Intro;