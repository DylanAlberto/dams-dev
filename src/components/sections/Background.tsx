import Card from '../Card';
import PhotoCarousel from '../Carousel';
import CustomImage from '../CustomImage';

//images
import awsLogo from '../../assets/AWS.jpg';
import reactLogo from '../../assets/react.png';
import github from '../../assets/github.png';
import js from '../../assets/js.png';
import ts from '../../assets/ts.png';
import python from '../../assets/python.png';
import docker from '../../assets/docker.png';
import gitlab from '../../assets/gitlab.png';
import serverless from '../../assets/serverless.png';
import angular from '../../assets/angular.png';
import avanttia from '../../assets/avanttia.png';
import infosapiens from '../../assets/infosapiens.jpg';
import solidus from '../../assets/solidus.jpg';


function Technologies() {
  return (
    <Card>
      <span className="text-3xl font-bold text-center">Background</span>
      <span className="text-base font-bold text-center flex gap-4 md:text-2xl">
        I'm a Full Stack Developer with 4+ years of experience in the industry.
      </span>
      <span className="text-base font-bold text-center flex gap-4 md:text-2xl">
      Here are some of the technologies I've been working with:
      </span>
      <div className="flex flex-wrap justify-center gap-4 md:gap-12">
        <PhotoCarousel photos={[reactLogo, serverless, angular]} />
        <PhotoCarousel photos={[js, python, ts]} />
        <PhotoCarousel photos={[awsLogo, gitlab, github, docker]} />
      </div>
      <span className="text-base font-bold text-center flex gap-4 md:text-2xl">
        And here are some companies I've worked with:
      </span>
      <div className="flex flex-wrap justify-center gap-4 md:gap-12">
        <CustomImage title='Avanttia' photo={avanttia} url='https://www.avanttia.com/'/>
        <CustomImage title='Infosapiens' photo={infosapiens} url='https://www.infosapiens.mx/'/>
        <CustomImage title='Solidus Capital' photo={solidus} url='https://www.soliduscapital.io/'/>
      </div>
    </Card>
  );
}

export default Technologies;
