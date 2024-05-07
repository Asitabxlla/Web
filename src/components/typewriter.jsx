import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const defaultStrings = ['Hi!Im Asia', 'Concept Artist', 'Illustrator'];
  const song = `YOU TURNED HER AGAINST ME!?
  You have done that yourself.
  YOU WILL NOT TAKE HER FROM ME!!!
  Your anger and your lust for power have already done that.
  You have allowed this dark lord to twist your mind until now....
  until now, you have become the very thing you swore to destroy.
  Don't lecture me, Obi-Wan; I see through the lies of the Jedi...
  I do not fear the dark side as you do!
  I have brought peace...freedom....justice,
  and security to my new empire.
  Your new empire!?
  Don’t make me kill you!
  Anakin, my allegiance...is to the Republic! To DEMOCRACY!
  If you're not with me...then you are my enemy.
  Only a sith deals in absolutes...I will do what I must.
  ...you will try.`;
  const songStrings = song.split('\n');
  const [strings, setStrings] = useState(defaultStrings);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    if (randomNumber <= 19.87) {
      setStrings(songStrings);
    }
  }, []);

  return (
    <Typewriter
      options={
      {
        strings: strings,
        wrapperClassName: 'typewriter',
        pauseFor: 2000,
        cursorClassName: 'myCursor',
        typewriter__cursor: '|',
        deletechars: 10,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypewriterComponent;