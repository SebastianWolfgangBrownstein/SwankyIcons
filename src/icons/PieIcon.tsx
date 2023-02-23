import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function PieIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Pie',
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M495.4 240H272V16.58C272 7.555 278.1 0 288 0C411.7 0 512 100.3 512 224C512 233 504.4 240 495.4 240zM190.2 37.18C208.3 33.36 224 48.2 224 66.7V288H445.3C463.8 288 478.6 303.7 474.8 321.8C451.9 430.5 355.5 512 240 512C107.5 512 0 404.6 0 272C0 156.5 81.53 60.12 190.2 37.18V37.18z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M495.4 240H272V16.58C272 7.555 278.1 0 288 0C411.7 0 512 100.3 512 224C512 233 504.4 240 495.4 240zM224 288H445.3C463.8 288 478.6 303.7 474.8 321.8C451.9 430.5 355.5 512 240 512C107.5 512 0 404.6 0 272C0 156.5 81.53 60.12 190.2 37.18C208.3 33.36 224 48.2 224 66.7V288zM176 90.91C101.4 117.3 48 188.4 48 272C48 378 133.1 464 240 464C323.6 464 394.7 410.6 421.1 336H176V90.91z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M256 17.68C256 8.059 263.4 0 273.1 0C405 0 512 106.1 512 238.9C512 248.6 503.9 256 494.3 256H272C263.2 256 256 248.8 256 240V17.68zM288 224H479.5C472.2 121.6 390.4 39.83 288 32.53V224zM224 288H445.3C463.8 288 478.6 303.7 474.8 321.8C451.9 430.5 355.5 512 240 512C107.5 512 0 404.5 0 272C0 156.5 81.53 60.12 190.2 37.18C208.3 33.36 224 48.2 224 66.7V288zM192 69.56C100.3 91.22 32 173.7 32 272C32 386.9 125.1 480 240 480C338.3 480 420.8 411.7 442.4 320H224C206.3 320 192 305.7 192 288V69.56z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { PieIcon };