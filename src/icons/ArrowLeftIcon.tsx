import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon'
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers';


function ArrowLeftIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'ArrowLeft',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false,
    onClick
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M145.7 130C154.4 133.8 160.1 142.5 160.1 151.1l.0004 80h327.9c13.25 0 23.1 10.75 23.1 23.1s-10.75 24-23.1 24H160.1l-.0004 79.1c0 9.547-5.66 18.19-14.42 22c-8.754 3.811-18.95 2.077-25.94-4.407l-112.1-104c-10.23-9.5-10.23-25.69 0-35.19l112.1-104C126.7 127.9 136.9 126.2 145.7 130z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M145.7 130C154.4 133.8 160.1 142.5 160.1 151.1l.0004 80h327.9c13.25 0 23.1 10.75 23.1 23.1s-10.75 24-23.1 24H160.1l-.0004 79.1c0 9.547-5.66 18.19-14.42 22c-8.754 3.811-18.95 2.077-25.94-4.407l-112.1-104c-10.23-9.5-10.23-25.69 0-35.19l112.1-104C126.7 127.9 136.9 126.2 145.7 130z" />);

    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef} onClick={onClick}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>Arrow Left Icon</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { ArrowLeftIcon };