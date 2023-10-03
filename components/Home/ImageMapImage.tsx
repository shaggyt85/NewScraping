import Image from "next/image";

interface ImageMapImageProps {
    id: string | number;
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string | undefined;
}

const ImageMapImage: React.FC<ImageMapImageProps> = ({id, src, alt, width, height, className}) => {
  return (
    <Image key={id} src={src} alt={alt} width={width} height={height} className={className} />
  )
}

export default ImageMapImage