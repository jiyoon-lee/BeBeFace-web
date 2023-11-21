// import * as Image from "next/image";

// const OriginalNextImage = Image.default;

// const NextImage = (props) =>
//   typeof props.src === "string" ? (
//     <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//   ) : (
//     <OriginalNextImage {...props} unoptimized />
//   );
// export default NextImage;

import Image from "next/image";
const NextImage = (props) => <Image unoptimized {...props} />;
export default NextImage;
