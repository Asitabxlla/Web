import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <Typewriter
      options={{
        wrapperClassName: 'typewriter',
        pauseFor: 2000,
        cursorClassName: 'myCursor',
        typewriter__cursor: '|',
        strings: ['Im Asia', 'Artist','Concept Artist','Illustrator'],
        pauseFor: 2000,
        deletechars: 10,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypewriterComponent;

