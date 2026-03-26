import Image from "next/image";

interface Props { src: string; alt: string; className?: string; fill?: boolean; width?: number; height?: number; priority?: boolean; }

export function PlaceholderImage({ src, alt, className = "", fill = false, width, height, priority = false }: Props) {
  const fullSrc = `/imagini/${src}`;
  if (fill) return <Image src={fullSrc} alt={alt} fill className={`object-cover ${className}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={priority} />;
  return <Image src={fullSrc} alt={alt} width={width || 1920} height={height || 1080} className={className} priority={priority} />;
}
