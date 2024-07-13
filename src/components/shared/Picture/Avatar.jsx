const Picture = ({
  url,
  url2x,
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
        srcSet={`${url} 1x, ${url2x} 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${url} 1x, ${url2x} 2x`}
        type="image/jpg"
      />
      <img
        srcSet={`${url} 1x, ${url2x} 2x`}
        src={`${url}`}
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
