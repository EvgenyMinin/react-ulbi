declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare type FCC<T = unknown> = import('react').FC<
  import('react').PropsWithChildren & T
>;
