import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function SortUpIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'SortUp',
    thickness = IconThickness.Regular,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M48.03 224h223.9c42.63 0 64.25-51.77 33.88-81.9l-111.9-112c-18.63-18.76-49.13-18.76-67.88 0L14.03 142.1C-15.97 172.2 5.282 224 48.03 224zM160 63.98l112 112H48.03L160 63.98z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M32.05 224h255.9c28.36 0 42.73-34.5 22.62-54.62l-127.1-128c-12.5-12.5-32.86-12.5-45.36 0L9.304 169.4C-10.69 189.5 3.682 224 32.05 224zM160 63.98L287.1 192h-255.9L160 63.98z" />);
    const thinIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM19.61 188l132.3-136.6C154.1 49.19 156.1 48 160 48c3.09 0 6.006 1.215 8.027 3.232l132.5 136.1c4.932 4.932 3.385 10.48 2.49 12.64C302.2 202.1 299.3 208 292.3 208H27.66C20.67 208 17.84 202.1 16.94 200.8C16.05 198.7 14.5 193.1 19.61 188z" />);

    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : thickness === 'light' ? lightIcon : thinIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { SortUpIcon };