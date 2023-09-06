// components/Image.js
import * as CustomImage from "next/image";

export default function Image(props) {
  return (
    <CustomImage
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      fill
      unoptimized
    />
  );
}
