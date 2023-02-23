import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function ChevronIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Chevron',
    thickness = IconThickness.Regular,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M15.41 302.7l191.1-183.1C212 114.2 218 111.1 224 111.1s11.97 2.219 16.59 6.688l191.1 183.1c9.594 9.152 9.906 24.34 .7187 33.9c-9.125 9.625-24.38 9.938-33.91 .7187L224 169.2l-175.4 168c-9.5 9.219-24.78 8.906-33.91-.7187C5.502 327 5.814 311.8 15.41 302.7z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M443.8 330.8C440.6 334.3 436.3 336 432 336c-3.891 0-7.781-1.406-10.86-4.25L224 149.8l-197.1 181.1c-6.5 6-16.64 5.625-22.61-.9062c-6-6.5-5.594-16.59 .8906-22.59l208-192c6.156-5.688 15.56-5.688 21.72 0l208 192C449.3 314.3 449.8 324.3 443.8 330.8z" />);
    const thinIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M445.3 349.9c-1.531 1.376-3.438 2.048-5.344 2.048c-2.188 0-4.375-.891-5.938-2.642L224 115.8l-210.1 233.5c-2.906 3.283-8 3.58-11.28 .594c-3.281-2.97-3.563-8.019-.5938-11.32l216-240.1c3-3.345 8.875-3.345 11.88 0l216 240.1C448.9 341.9 448.6 346.1 445.3 349.9z" />);

    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>Chevron Icon</title>
                {thickness === 'regular' ? regularIcon : thickness === 'light' ? lightIcon : thinIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { ChevronIcon };