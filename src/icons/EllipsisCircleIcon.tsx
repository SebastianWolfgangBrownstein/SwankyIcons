import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function EllipsisCircleIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'EllipsisCircle',
    thickness = IconThickness.Solid,
    className,
    interactive = false
 }: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM160 288C177.7 288 192 273.7 192 256C192 238.3 177.7 224 160 224C142.3 224 128 238.3 128 256C128 273.7 142.3 288 160 288zM256 224C238.3 224 224 238.3 224 256C224 273.7 238.3 288 256 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 256 224zM352 288C369.7 288 384 273.7 384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224zM352 288C334.3 288 320 273.7 320 256C320 238.3 334.3 224 352 224C369.7 224 384 238.3 384 256C384 273.7 369.7 288 352 288zM160 224C177.7 224 192 238.3 192 256C192 273.7 177.7 288 160 288C142.3 288 128 273.7 128 256C128 238.3 142.3 224 160 224zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M256 232C269.3 232 280 242.7 280 256C280 269.3 269.3 280 256 280C242.7 280 232 269.3 232 256C232 242.7 242.7 232 256 232zM352 280C338.7 280 328 269.3 328 256C328 242.7 338.7 232 352 232C365.3 232 376 242.7 376 256C376 269.3 365.3 280 352 280zM160 232C173.3 232 184 242.7 184 256C184 269.3 173.3 280 160 280C146.7 280 136 269.3 136 256C136 242.7 146.7 232 160 232zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256z" />);


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

export { EllipsisCircleIcon };