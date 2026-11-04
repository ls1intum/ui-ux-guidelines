import React from "react";

export enum ImageSize {
  small = "small",
  medium = "medium",
  large = "large",
}

type ImageProps = {
  /** The image URL, usually an imported image file. */
  src: string;
  /** The text alternative. Describe what the image shows, or pass "" for decorative images. */
  alt: string;
  /** The maximum width of the image (default: medium). */
  size?: ImageSize;
  /** Optional styles that are merged with (and override) the default styles. */
  style?: React.CSSProperties;
};

// Never wider than the content column, so that images don't cause horizontal scrolling on small screens
const sizeStyles: Record<ImageSize, React.CSSProperties> = {
  [ImageSize.small]: { maxWidth: "min(300px, 100%)" },
  [ImageSize.medium]: { maxWidth: "min(600px, 100%)" },
  [ImageSize.large]: { maxWidth: "100%" },
};

/**
 * A reusable, styled image component for the docs.
 */
const Image = ({
  src,
  alt,
  size = ImageSize.medium,
  style,
}: ImageProps): React.ReactElement => {
  const defaultStyles: React.CSSProperties = {
    ...sizeStyles[size],
    height: "auto",
    border: "1px solid var(--ifm-color-emphasis-300)",
    borderRadius: "8px",
    marginTop: "1rem",
    display: "block", // Prevents extra space below the image
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ ...defaultStyles, ...style }}
    />
  );
};

export default Image;
