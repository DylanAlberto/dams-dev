import Card from '../Card';
import PhotoCarousel from '../Carousel';
import awsLogo from '../../assets/AWS.jpg';
import reactLogo from '../../assets/react.png';
import github from '../../assets/github.png';

function Technologies() {
  return (
    <Card>
      <PhotoCarousel photos={[awsLogo, reactLogo, github]} />
    </Card>
  );
}

export default Technologies;
