import Card from '../Card';
import TypeWritter from '../TypeWriter';

function Hello() {
  return (
    <Card>
      <TypeWritter
        className="text-2xl font-bold"
        text={`Hello World! :) <br/> I'm Dylan a passionate Mexican developer with a keen interest in learning new technologies and exploring the vast world of tech.`}
      />
    </Card>
  );
}

export default Hello;
