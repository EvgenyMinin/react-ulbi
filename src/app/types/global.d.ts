declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare type FCC<T = unknown> = import('react').FC<
  import('react').PropsWithChildren & T
>;

declare const __IS_DEV__: boolean;
