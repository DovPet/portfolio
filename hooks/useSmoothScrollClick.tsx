
export const useSmoothScrollClick = (event: any) => {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    const element = document.querySelector(target);
    if(element) {
      const offset = element.offsetTop;
      window.scroll({
        top: offset,
        left: 0,
        behavior: 'smooth'
      });
    }
}
