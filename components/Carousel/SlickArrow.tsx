export interface SlickArrowProps {
  src: string;
  alt: string;
  className: string;
  onClick?: () => void;
}

export const SlickArrow: React.FC<SlickArrowProps> = ({
  alt,
  src,
  className,
  onClick
}) => <img className={className} alt={alt} src={src} onClick={onClick} />;
