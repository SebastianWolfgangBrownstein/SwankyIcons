import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function VolumeMidIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'VolumeMid',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false,
    onClick
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M444.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406c-8.406 10.25-6.906 25.37 3.375 33.78C425.5 228.4 432 241.8 432 256c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406C467.1 311.6 480 284.7 480 256S467.1 200.4 444.6 181.9zM505.1 108c-10.22-8.344-25.34-6.906-33.78 3.344c-8.406 10.25-6.906 25.37 3.344 33.78C508.6 172.9 528 213.3 528 256s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.437C550.2 367.1 576 313.1 576 256S550.2 144.9 505.1 108zM333.2 34.84c-11.5-5.187-25.01-3.116-34.43 5.259L163.8 160H80c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C304.7 477.2 312.3 480 320 480c4.438 0 8.959-.9313 13.16-2.837C344.7 472 352 460.6 352 448V64C352 51.41 344.7 39.1 333.2 34.84z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M333.2 34.84c-4.201-1.896-8.729-2.841-13.16-2.841c-7.697 0-15.29 2.784-21.27 8.1L163.8 160H80c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C304.7 477.2 312.3 480 320 480c4.438 0 8.959-.9312 13.16-2.837C344.7 472 352 460.6 352 448V64C352 51.41 344.7 39.1 333.2 34.84zM304 412.4L182.1 304H80v-95.1h102.1L304 99.64V412.4zM444.6 181.9c-4.471-3.629-9.857-5.401-15.2-5.401c-6.949 0-13.83 2.994-18.55 8.807c-8.406 10.25-6.906 25.37 3.375 33.78C425.5 228.4 432 241.8 432 256s-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406C467.1 311.6 480 284.7 480 256C480 227.3 467.1 200.4 444.6 181.9zM505.1 108c-4.455-3.637-9.842-5.417-15.2-5.417c-6.934 0-13.82 2.979-18.58 8.761c-8.406 10.25-6.906 25.37 3.344 33.78C508.6 172.9 528 213.3 528 256c0 42.69-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.437C550.2 367.1 576 313.1 576 256C576 198.9 550.2 144.9 505.1 108z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M333.2 34.84c-4.201-1.895-8.727-2.841-13.16-2.841c-7.697 0-15.29 2.784-21.27 8.1L163.8 160H80c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C304.7 477.2 312.3 480 320 480c4.438 0 8.959-.9312 13.16-2.837C344.7 472 352 460.6 352 448V64C352 51.41 344.7 39.1 333.2 34.84zM319.1 447.1L175.1 319.1H80c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h95.1l143.1-127.1c.0078-.0078-.0039 .0039 0 0L319.1 447.1zM491.4 98.7c-7.344-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C517.7 154.8 544 203.7 544 256s-26.33 101.2-70.44 130.7c-7.344 4.922-9.312 14.86-4.391 22.2C472.3 413.5 477.3 416 482.5 416c3.062 0 6.156-.875 8.891-2.703C544.4 377.8 576 319 576 256S544.4 134.2 491.4 98.7zM438.4 178.7c-7.328-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C437.8 216.8 448 235.7 448 256s-10.23 39.23-27.38 50.7c-7.344 4.922-9.312 14.86-4.391 22.2C419.3 333.5 424.4 336 429.5 336c3.062 0 6.156-.875 8.891-2.703C464.5 315.9 480 286.1 480 256S464.5 196.1 438.4 178.7z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef} onClick={onClick}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { VolumeMidIcon };