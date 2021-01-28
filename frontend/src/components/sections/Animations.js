import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LaptopAnimation() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../animations/LOGOCUBE.json')
    });
  }, []);

  return (
    <div className="LaptopAnimation">
      <div className="container" ref={container}></div>
    </div>
  );
}

export default LaptopAnimation;
