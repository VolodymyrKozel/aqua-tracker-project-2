const Picture = ({
  urlDesktop,
  urlDesktop2x,
  urlTablet,
  urlTablet2x,
  urlMobile,
  urlMobile2x,
  alt = '',
  width = '',
  height = '',
  pictureClassName,
  ...props
}) => {
  return (
    <picture className={pictureClassName}>
      <source
        media="(min-width: 1440px)"
        srcSet={`${urlDesktop} 1x, ${urlDesktop2x} 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${urlTablet} 1x, ${urlTablet2x} 2x`}
        type="image/jpg"
      />
      <img
        srcSet={`${urlMobile} 1x, ${urlMobile2x} 2x`}
        src={`${urlMobile}`}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};
export default Picture;
