/** @format */

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

//mp3 file
declare module "*.mp3" {
  const src: string;
  export default src;
}

//png file
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "use-sound";
