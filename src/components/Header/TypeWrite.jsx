import React, {useState, useEffect, useRef} from 'react'


const TypeWrite = ({ text }) => {
  const index = useRef(0);
  let value = '';
  const [currentText, setCurrentText] = useState('')

  useEffect( () => {
    index.current = 0;
    setCurrentText('');
  },[text]);

  useEffect( () => {
      if ((index.current) < (text.length)){
        const timeoutId = setTimeout(() => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          setCurrentText((value) = currentText + text.charAt(index.current));
          index.current +=1;
        },(Math.floor(Math.random() * 20) + 50));
        return () => {
          clearTimeout(timeoutId);
        };
      }
  }, [value,currentText, text]);
      
  return <p>{currentText}</p>;
};

export default TypeWrite