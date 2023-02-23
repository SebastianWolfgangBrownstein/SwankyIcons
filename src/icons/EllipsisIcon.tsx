import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function EllipsisIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Ellipsis',
    thickness = IconThickness.Regular,
    className,
    interactive = false 
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M336 256C336 229.5 357.5 208 384 208C410.5 208 432 229.5 432 256C432 282.5 410.5 304 384 304C357.5 304 336 282.5 336 256zM176 256C176 229.5 197.5 208 224 208C250.5 208 272 229.5 272 256C272 282.5 250.5 304 224 304C197.5 304 176 282.5 176 256zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z" />);
    const thinIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M336 256C336 247.2 343.2 240 352 240C360.8 240 368 247.2 368 256C368 264.8 360.8 272 352 272C343.2 272 336 264.8 336 256zM208 256C208 247.2 215.2 240 224 240C232.8 240 240 247.2 240 256C240 264.8 232.8 272 224 272C215.2 272 208 264.8 208 256zM112 256C112 264.8 104.8 272 96 272C87.16 272 80 264.8 80 256C80 247.2 87.16 240 96 240C104.8 240 112 247.2 112 256z" />);

    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'regular' ? regularIcon : thickness === 'light' ? lightIcon : thinIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { EllipsisIcon };
