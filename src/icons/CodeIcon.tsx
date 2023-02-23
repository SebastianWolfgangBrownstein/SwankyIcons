import React from 'react';
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'


function CodeIcon({
    width = 48,
    height = 48,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = "Code",
    thickness = IconThickness.Regular,
    className,
    interactive = false
}:IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M320 814 80 574l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/>)

    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 96 960 960"  aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'regular' ? regularIcon : regularIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { CodeIcon }