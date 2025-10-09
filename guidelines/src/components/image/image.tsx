import React from 'react';
import PropTypes from 'prop-types';
import { useThemeConfig } from '@docusaurus/theme-common';

/**
 * A reusable, styled image component.
 * It includes default styling which can be extended or overridden via the `style` prop.
 *
 * @param {object} props - The component props.
 * @param {string} props.src - The source URL for the image (required).
 * @param {string} props.alt - The alternative text for the image (required).
 * @param {object} [props.style] - Optional style object to merge with default styles.
 * @returns {React.ReactElement} The rendered image component.
 */
const Image = ({ src, alt, style, ...rest }) => {
  const borderColor = '#ccc';

  const defaultStyles = {
        maxWidth: '100%',
        height: 'auto',
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        marginTop: '1rem',
        display: 'block', // Prevents extra space below the image
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

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object,
};

export default Image;