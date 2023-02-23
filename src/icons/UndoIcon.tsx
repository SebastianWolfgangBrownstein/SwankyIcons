import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function UndoIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'Undo',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false,
    onClick
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M30.81 49.81c8.969-3.656 19.28-1.656 26.16 5.219l41.1 41.1c41.07-40.38 97.11-64.92 157.1-64.92C379.6 32.11 480 132.5 480 256s-100.4 223.9-223.9 223.9c-52.31 0-103.3-18.33-143.5-51.77c-10.19-8.5-11.56-23.62-3.062-33.81c8.531-10.22 23.62-11.56 33.81-3.062C174.9 417.5 214.9 432 256 432c97.03 0 176-78.97 176-176S353 80 256 80c-47.08 0-90.93 19.29-123.2 50.89l52.14 52.14c6.875 6.875 8.906 17.19 5.219 26.16C186.5 218.2 177.7 224 168 224h-128C26.75 224 16 213.3 16 200v-128C16 62.28 21.84 53.53 30.81 49.81z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M256.1 32.11c-52.22 0-103.2 18.27-143.2 51.58C111.6 84.73 110.8 86.03 109.9 87.32L59.31 36.69c-4.562-4.562-11.5-5.875-17.44-3.469C35.91 35.69 32 41.53 32 48v128C32 184.8 39.16 192 48 192h128c6.469 0 12.31-3.906 14.78-9.875s1.094-12.88-3.469-17.44L131.8 109.1c.4961-.3281 1.076-.4453 1.541-.8359C167.7 79.72 211.3 64 256 64c105.9 0 192 86.13 192 192s-86.13 192-192 192c-59.47 0-114.7-26.91-151.4-73.88c-5.469-6.969-15.5-8.219-22.47-2.719c-6.938 5.438-8.157 15.5-2.719 22.47c42.81 54.72 107.3 86.02 176.7 86.02C379.6 479.9 480 379.5 480 256S379.6 32.11 256.1 32.11zM64 160V86.63L137.4 160H64z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef} onClick={onClick}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { UndoIcon };