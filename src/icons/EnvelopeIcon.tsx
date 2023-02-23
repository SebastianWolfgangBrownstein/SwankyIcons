import React from "react";
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function EnvelopeIcon({
  width = 30,
  height = 30,
  fillColor = d.fillColor,
  hoverColor,
  fillGradient = d.fillGradient,
  title = "Envelope",
  thickness = IconThickness.Regular,
  className,
  interactive = false
}: IconProps) {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const regularIcon = (
    <path
      fill={
        dynamicFill(fillColor, title, hoverColor, isHovered)
      }
      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
    />
  );
  const lightIcon = (
    <path
      fill={
        dynamicFill(fillColor, title, hoverColor, isHovered)
      }
      d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
    />
  );
  const thinIcon = (
    <path
      fill={
        dynamicFill(fillColor, title, hoverColor, isHovered)
      }
      d="M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
    />
  );

  return (
    <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width}
        height={height}
        aria-labelledby="title"
      >
        {withLinearGradient({ colors: fillGradient, idPrefix: title })}
        <title id="title">{title}</title>
        {thickness === "regular"
          ? regularIcon
          : thickness === "light"
          ? lightIcon
          : thinIcon}
      </svg>
    </InteractiveIcon>
  );
}

export { EnvelopeIcon };
