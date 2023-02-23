import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function SortIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Sort',
    thickness = IconThickness.Regular,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M271.1 288H48.15c-42.62 0-64.24 51.76-33.87 81.9l111.9 112c18.62 18.75 49.12 18.75 67.86 0l111.1-112C335.1 339.8 314.7 288 271.1 288zM160 448l-111.1-112h223.1L160 448zM48.02 223.1h223.8c42.62 0 64.24-51.76 33.87-81.9L193.9 30.07c-18.62-18.75-49.12-18.75-67.86 0l-111.1 112C-15.96 172.2 5.281 223.1 48.02 223.1zM160 63.97l111.1 112H48.02L160 63.97z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M287.1 288h-255.9c-28.36 0-42.73 34.5-22.62 54.63l127.1 128c12.5 12.5 32.86 12.5 45.36 0l127.1-128C330.7 322.5 316.3 288 287.1 288zM160 448L32.05 320h255.9L160 448zM32.05 224h255.9c28.36 0 42.73-34.5 22.62-54.62l-127.1-128c-12.5-12.5-32.86-12.5-45.36 0L9.304 169.4C-10.69 189.5 3.682 224 32.05 224zM160 63.97L287.1 192h-255.9L160 63.97z" />);
    const thinIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM19.61 188l132.3-136.6C154.1 49.19 156.1 48 160 48c3.09 0 6.006 1.215 8.027 3.232l132.5 136.1c4.932 4.932 3.385 10.48 2.49 12.64C302.2 202.1 299.3 208 292.3 208H27.66C20.67 208 17.84 202.1 16.94 200.8C16.05 198.7 14.5 193.1 19.61 188zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288zM300.4 323.1l-132.1 136.6C166 462.8 163.1 464 160 464c-3.059 0-5.926-1.195-7.951-3.24l-132.6-136.1C14.5 318.9 16.05 313.3 16.94 311.2C17.84 309 20.67 304 27.66 304h264.7c6.99 0 9.822 5.014 10.71 7.17C303.1 313.3 305.5 318.9 300.4 323.1z" />);

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

export { SortIcon };