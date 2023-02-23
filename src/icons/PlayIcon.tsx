import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function PlayIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'Play',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false,
    onClick
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM48 432L336 256L48 80V432z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM56.34 66.35C51.4 63.33 45.22 63.21 40.17 66.04C35.13 68.88 32 74.21 32 80V432C32 437.8 35.13 443.1 40.17 445.1C45.22 448.8 51.41 448.7 56.34 445.7L344.3 269.7C349.1 266.7 352 261.6 352 256C352 250.4 349.1 245.3 344.3 242.3L56.34 66.35z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef} onClick={onClick}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { PlayIcon };