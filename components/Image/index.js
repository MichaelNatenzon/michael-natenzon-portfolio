// components/Image.js
import NextImage from "next/image";

export default function Image(props) {
  return (
    <NextImage
      {...props}
      src={
        props.src.startsWith("http")
          ? `${props.src}`
          : `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${props.src}`
      }
      unoptimized
    />
  );
}
