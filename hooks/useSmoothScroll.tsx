import { useEffect } from "react";

const scrollToRef = (ref: any) => window.scrollTo({
  top: ref.current.offsetTop,
  behavior: "smooth"
});

const useSmoothScroll = (ref: any) => {
  useEffect(() => {
    scrollToRef(ref);
  }, [ref]);
};

export default useSmoothScroll;