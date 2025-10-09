import React from "react";
import PropTypes from "prop-types";

/**
 * A reusable, styled image component.
 * It includes default styling which can be extended or overridden via the `style` prop.
 *
 * @param {object} props - The component props.
 * @param {string} props.src - The source URL for the image (required).
 * @param {string} props.alt - The alternative text for the image (required).
 * @param {ImageSize} [props.size] - The size of the image (default: medium).
 * @param {object} [props.style] - Optional style object to merge with default styles.
 * @returns {React.ReactElement} The rendered image component.
 */
const Image = ({
  src,
  alt,
  size= ImageSize.medium,
  style,
  ...rest
}: {
  src: string;
  alt: string;
  size?: ImageSize;
  style?: object;
}): React.ReactElement => {
  const sizeStyles = {
    [ImageSize.small]: { maxWidth: "300px" },
    [ImageSize.medium]: { maxWidth: "600px" },
    [ImageSize.large]: { maxWidth: "100%" }
  };

  const defaultStyles = {
    ...sizeStyles[size],
    height: "auto",
    border: "1px solid var(--ifm-color-emphasis-300)",
    borderRadius: "8px",
    marginTop: "1rem",
    display: "block", // Prevents extra space below the image
  };

  // Custom styles will override default styles if there's a conflict.
  const combinedStyles = { ...defaultStyles, ...style };

  return (
    <img
      src={src}
      alt={alt}
      style={combinedStyles}
      aria-label={alt}
      {...rest}
    />
  );
};

export enum ImageSize {
  small = "small",
  medium = "medium",
  large = "large"
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ImageSize)),
  style: PropTypes.object,
};

export default Image;
