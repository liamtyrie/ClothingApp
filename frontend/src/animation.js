import gsap from 'gsap';

const cursor = gsap.to('.cursor', {
  opacity: 0,
  ease: 'power3.inOut',
  repeat: -1
});

export default cursor;
