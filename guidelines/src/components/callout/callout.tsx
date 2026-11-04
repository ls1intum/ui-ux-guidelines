import React from "react";
import {
  CALLOUT_STYLE_CONFIG,
  CalloutProps,
  CalloutVariant,
} from "./callout.types";

const visuallyHidden: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

/**
 * A highlighted note in the docs. It is static content, so it uses role="note"
 * instead of role="alert" (which makes screen readers interrupt the user).
 */
const Callout: React.FC<CalloutProps> = ({
  children,
  variant = CalloutVariant.success,
}) => {
  const currentStyle = CALLOUT_STYLE_CONFIG[variant];

  const bannerStyle: React.CSSProperties = {
    backgroundColor: currentStyle.backgroundColor,
    borderLeft: `5px solid ${currentStyle.borderColor}`,
    padding: "15px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "var(--ifm-leading)",
  };

  return (
    <div style={bannerStyle} role="note">
      <span style={{ fontSize: "1.2em", alignSelf: "center" }} aria-hidden="true">
        {currentStyle.icon}
      </span>
      <div style={{ flex: 1, margin: 0 }}>
        <span style={visuallyHidden}>{currentStyle.label}: </span>
        {React.Children.map(children, (child) =>
          React.isValidElement<{ style?: React.CSSProperties }>(child) &&
          child.type === "p"
            ? // the markdown content is wrapped in <p> elements, remove their margin
              React.cloneElement(child, { style: { margin: 0 } })
            : child,
        )}
      </div>
    </div>
  );
};

export default Callout;
