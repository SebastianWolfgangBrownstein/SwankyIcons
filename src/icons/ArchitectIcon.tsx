import React from 'react';
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'


function ArchitectIcon({
    width = 48,
    height = 48,
    fillcolor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = "Architect",
    thickness = IconThickness.Regular,
    className,
    interactive = false
}:IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    
    const regularIcon = (<path fill={dynamicFill(fillcolor, title, hoverColor, isHovered)} d="m269 936-9-66 127-350q11 11 24.5 18t28.5 12L317 889l-48 47Zm422 0-48-47-125-338q15-5 29-12t25-18l128 349-9 66ZM480 536q-50 0-85-35t-35-85q0-42 24.5-74.5T450 300v-84h60v84q41 9 65.5 41.5T600 416q0 50-35 85t-85 35Zm0-60q25 0 42.5-17.5T540 416q0-25-17.5-42.5T480 356q-25 0-42.5 17.5T420 416q0 25 17.5 42.5T480 476Z"/>)

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

export { ArchitectIcon }