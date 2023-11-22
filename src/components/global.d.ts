declare module 'react-spring-carousel' {
    import { SpringCarouselProps, SpringCarouselContext } from 'react-spring-carousel/types';
  
    export function useSpringCarousel<T extends HTMLElement = HTMLDivElement>(
      options?: SpringCarouselProps<T>
    ): SpringCarouselContext<T>;
  
    // You may need to include other exports from 'react-spring-carousel' depending on your usage.
  }