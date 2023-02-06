import { CaretLeft, CaretRight } from 'phosphor-react';
import React, { useState } from 'react';
import styles from '../styles/ImageSlider.module.scss';

interface ImageSliderProps {
  children: JSX.Element[];
}

function ImageSlider({ children }: ImageSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.container}>
      <CaretLeft
        size={32}
        onClick={() => setSelectedIndex(selectedIndex === 0 ? children.length - 1 : selectedIndex - 1)}
      />
      <div className={styles.content}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            style: {
              display: index === selectedIndex ? 'block' : 'none',
            },
            onClick: () => handleClick(index),
          })
        )}
      </div>
      <CaretRight
        size={32}
        onClick={() => setSelectedIndex(selectedIndex === children.length - 1 ? 0 : selectedIndex + 1)}
      />
    </div>
  );
}

export default ImageSlider;
