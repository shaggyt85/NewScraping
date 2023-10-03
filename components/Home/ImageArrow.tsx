import Image from "next/image";

interface ImageArrowProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string | undefined;
}

const ImageArrow: React.FC<ImageArrowProps> = ({src, alt, width, height, className}) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} />
  )
}

export default ImageArrow