import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/all"
import '../../style.css'

const MediaShow = (props) => {
  const { cardActive } = props;
  const prevCardActive = usePrevious({cardActive}) ?? 1;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [ ".MP1", ".MP2", ".MP3", ".MP4" ];

  const MP1 = useRef(null)
  const MP2 = useRef(null)
  const MP3 = useRef(null)
  const MP4 = useRef(null)

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


	useEffect(() => {
    // console.log('PREVCARD ', prevCardActive.cardActive)
    // console.log('CARDACTIVE ', cardActive)

    if (prevCardActive.cardActive !== cardActive && prevCardActive.cardActive !== undefined) {
      // Forward transition
      if (prevCardActive.cardActive < cardActive) {
        gsap.to(images[prevCardActive.cardActive - 1], 
          { 
            xPercent: -100,
            ease: 'expo.inOut',
            duration: 1.5,
          }
        );
        gsap.fromTo(images[cardActive - 1], 
          { 
            xPercent: 100, 
            ease: 'expo.inOut',
            duration: 1.5,
          }, 
          { 
            xPercent: 0, 
            ease: 'expo.inOut',
            duration: 1.5,
          }
        );
      }
      // Backward transition
      else if (prevCardActive.cardActive > cardActive) {
        gsap.to(images[prevCardActive.cardActive - 1], 
          { 
            xPercent: 100,
            ease: 'expo.inOut',
            duration: 1.5,
          }
        );
        gsap.fromTo(images[cardActive - 1], 
          { 
            xPercent: -100, 
            ease: 'expo.inOut',
            duration: 1.5,
          }, 
          { 
            xPercent: 0, 
            ease: 'expo.inOut',
            duration: 1.5,
          }
        );
      }
    }
  }, [cardActive, images, prevCardActive.cardActive]);


  return (
      <div className="media-slides">
        <div className="MP4" ref={MP4} />
        <div className="MP3" ref={MP3} />
        <div className="MP2" ref={MP2} />
        <div className="MP1" ref={MP1} />
      </div>
  )
}

export default MediaShow