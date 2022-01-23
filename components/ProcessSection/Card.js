import React, { useEffect, useState } from "react";
// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap/all"
import '../../style.css'

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return {
    width
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

/**
 * Card component
 */
const Card = (props) => {
  const { cardNum, cardActive, onClick, heading, description } = props;
  // const prevCardActive = usePrevious({cardActive}) ?? 1;
  const { width } = useWindowDimensions();


  // /**
  //  * GSAP card border animation
  //  */
  // var bgColor = "#000000", 
  //     easing = "expo.inOut", 
  //     dur = 1.5;
  // const tl = useRef(null);
  // const tl2 = useRef(null);
  // const topSide = useRef(null);
  // const rightSide = useRef(null);
  // const bottomSide = useRef(null);

  // function usePrevious(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // }

  // /**
  //  * Conditional animations
  //  * Error: clicking between fast will be risky
  //  */
  // useEffect(() => {
  //   if (cardActive === cardNum) {
  //     tl.current = gsap.timeline({
  //       defaults: {
  //         background: bgColor,
  //       },
  //       paused: true
  //     })
  //     .fromTo(topSide.current, { width: 0 }, { width: "14em" })
  //     .fromTo(rightSide.current, { height: 0 }, { height: "14em" })
  //     .fromTo(bottomSide.current, { width: 0 }, { width: "14em" })
  //     gsap.to(tl.current, 
  //       {
  //         time: dur,
  //         duration: dur,
  //         ease: easing
  //       });
  //       return () => {
  //         tl.current.clear();
  //       }

  //   }
  //   else if (prevCardActive.cardActive !== cardActive && (tl.current !== null)) {
      
  //     tl2.current = gsap.timeline({
  //       defaults: {
  //         background: "grey",
  //       },
  //       paused: true
  //     })
  //     .fromTo(bottomSide.current, { width: "14em" }, { width: 0 })
  //     .fromTo(rightSide.current, { height: "14em" }, { height: 0 })
  //     .fromTo(topSide.current, { width: "14em" }, { width: 0 })
  //     gsap.to(tl2.current, 
  //       {
  //         time: dur,
  //         duration: dur,
  //         ease: easing
  //       });
      
  //     return () => {
  //       tl.current.clear();
  //     }
  //   }
  // }, [prevCardActive.cardActive, cardActive, cardNum, bgColor, easing, dur]);

  /**
   * Card styling
   */
  const cardStyle = () => {
    let cardStyles;
    // One card shown
    (cardActive === cardNum) ? 
    cardStyles = "card-style card-active" :
    
    (width <= 795 && cardActive === cardNum) ? 
    cardStyles = "card-inactive" : 

    // Two cards shown
    (width > 795 && width < 1050 && 
      ((cardNum === (cardActive + 1)) || 
      (cardActive === 4 && cardNum >= 3))
    ) ?
    cardStyles = "card-inactive" :

    // Three cards shown
    (width >= 1050 && width < 1322 &&
      ((cardActive < 3 && cardNum !== 4 ) ||
        (cardActive >= 3 && cardNum !== 1))
    ) ? 
    cardStyles = "card-inactive" :

    (width >= 1322) ?
    cardStyles = "card-inactive" :
    cardStyles = "card-inactive card-hidden";

    return cardStyles;
  }



  

  return (
    <div className={cardStyle()} onClick={onClick}>
      {/* {console.log(props)} */}
      
        <span id={(cardActive === cardNum) ? "" : 'leftSideInactive'}/>
        {/* <span id="topSide" ref={topSide}/>
        <span id="rightSide" ref={rightSide}/>
        <span id="bottomSide" ref={bottomSide}/>  */}

      <div className="card-heading"> {heading} </div>
      <p className="card-desc"> {description} </p>
    </div>
  );
}

export default Card;