import Card from '../Card';
import TypeWritter from '../TypeWriter';

function Hello() {
  return (
    <Card>
      <TypeWritter
        className="text-2xl font-bold"
        text={`Hello World! :) <br/>
          I'm Dylan a passionate Mexican developer,
          with 5+ years of experience in web development, 1 on site and 4 fully remote.<br/>
          I love to learn new things and I'm always looking for new challenges.`}
      />
    </Card>
  );
}

export default Hello;
