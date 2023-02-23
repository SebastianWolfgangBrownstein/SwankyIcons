import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function SortDownIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'SortDown',
    thickness = IconThickness.Regular,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M271.1 288H48.08c-42.63 0-64.25 51.77-33.88 81.9l111.9 112c18.63 18.76 49.13 18.76 67.88 0l112-112C335.1 339.8 314.7 288 271.1 288zM159.1 448l-112-112H271.1L159.1 448z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M287.1 288h-255.9c-28.36 0-42.73 34.5-22.62 54.63l127.1 128c12.5 12.5 32.86 12.5 45.36 0l127.1-128C330.7 322.5 316.3 288 287.1 288zM159.1 448L32.05 320h255.9L159.1 448z" />);
    const thinIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.4 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.09-2.702 19.5-8.109l132.4-136.8C329.2 317.8 316.9 288 292.3 288zM300.4 323.1l-132.1 136.6C166 462.8 163.1 464 160 464c-3.059 0-5.926-1.195-7.951-3.24l-132.6-136.1C14.5 318.9 16.05 313.3 16.94 311.2C17.84 309 20.67 304 27.66 304h264.7c6.99 0 9.822 5.014 10.71 7.17C303.1 313.3 305.5 318.9 300.4 323.1z" />);

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

export { SortDownIcon };