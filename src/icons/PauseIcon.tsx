import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function PauseIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'Pause',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false,
    onClick
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M56 64C42.75 64 32 74.75 32 88v336C32 437.3 42.75 448 56 448s24-10.75 24-24V88C80 74.75 69.25 64 56 64zM264 64c-13.25 0-24 10.75-24 24v336c0 13.25 10.75 24 24 24S288 437.3 288 424V88C288 74.75 277.3 64 264 64z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M48 63.1C39.16 63.1 32 71.16 32 80v352C32 440.8 39.16 448 48 448S64 440.8 64 432v-352C64 71.16 56.84 63.1 48 63.1zM272 63.1c-8.836 0-16 7.162-16 16v352c0 8.836 7.164 16 16 16s16-7.164 16-16v-352C288 71.16 280.8 63.1 272 63.1z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef} onClick={onClick}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { PauseIcon };