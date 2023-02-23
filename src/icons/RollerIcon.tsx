import React from 'react';
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'


function RollerIcon({
    width = 48,
    height = 48,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = "Roller",
    thickness = IconThickness.Regular,
    className,
    interactive = false
}:IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M583 1016H440q-14.45 0-24.225-9.78Q406 996.45 406 982V732q0-14.45 9.775-24.225Q425.55 698 440 698h41V565H140q-24.75 0-42.375-17.625T80 505V312q0-24.75 17.625-42.375T140 252h83v-42q0-14.45 9.775-24.225Q242.55 176 257 176h509q14.45 0 24.225 9.775Q800 195.55 800 210v152q0 14.45-9.775 24.225Q780.45 396 766 396H257q-14.45 0-24.225-9.775Q223 376.45 223 362v-50h-83v193h341q24.75 0 42.375 17.625T541 565v133h42q14.45 0 24.225 9.775Q617 717.55 617 732v250q0 14.45-9.775 24.22Q597.45 1016 583 1016ZM283 236v100-100Zm183 720h91V758h-91v198ZM283 336h457V236H283v100Zm183 620h91-91Z"/>)

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

export { RollerIcon }