import React from 'react';
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'


function ChatIcon({
    width = 48,
    height = 48,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = "Chat",
    thickness = IconThickness.Regular,
    className,
    interactive = false
}:IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M240 657h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Zm60-145 75-75h605V236H140v595Zm0-595v595-595Z"/>)

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

export { ChatIcon }