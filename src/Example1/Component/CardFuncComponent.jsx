import React, {useState, useEffect, useContext} from 'react';
import Row from './Row';
import ThemeContext from '../context/theme';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  });
};

function Card() {
  const object = useInput('');
  const description = useInput('');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(`${object.value} ${description.value}`);

  return (
    <section className={theme}>
      <Row label="对象">
        <input {...object} />
      </Row>
      <Row label="描述">
        <input {...description} />
      </Row>
      <Row label="宽度">{width}</Row>
    </section>
  );
}

export default Card;
