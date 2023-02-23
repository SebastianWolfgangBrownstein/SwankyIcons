import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function UploadIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Upload',
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25 .001L224 109.3V352c0 17.67 14.33 32 32 32c17.67 0 32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0S239.6 3.125 233.4 9.375L105.4 137.4C92.88 149.9 92.88 170.1 105.4 182.6zM480 352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 304h-128V352h128c8.822 0 16 7.178 16 16V448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80C48 359.2 55.18 352 64 352h128V304H64c-35.35 0-64 28.65-64 64V448c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80C512 332.7 483.3 304 448 304zM136.1 176.1L232 81.94V352c0 13.25 10.75 24 24 24s24-10.75 24-24V81.94l95.03 95.03C379.7 181.7 385.8 184 392 184s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-136-136c-9.375-9.375-24.56-9.375-33.94 0l-136 136c-9.375 9.375-9.375 24.56 0 33.94S127.6 186.3 136.1 176.1zM432 408c0-13.26-10.75-24-24-24S384 394.7 384 408c0 13.25 10.75 24 24 24S432 421.3 432 408z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M480 352h-152C323.6 352 320 355.6 320 360s3.582 8 8 8H480c8.822 0 16 7.178 16 16v96c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-96c0-8.822 7.178-16 16-16h152C188.4 368 192 364.4 192 360S188.4 352 184 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM464 432c0-17.6-14.4-32-32-32s-32 14.4-32 32c0 17.6 14.4 32 32 32S464 449.6 464 432zM416 432c0-8.822 7.178-16 16-16s16 7.178 16 16S440.8 448 432 448S416 440.8 416 432zM109.7 165.7L248 27.31V408C248 412.4 251.6 416 256 416s8-3.594 8-8V27.31l138.3 138.3c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31l-152-152c-3.125-3.125-8.188-3.125-11.31 0l-152 152C96.78 155.9 96 157.9 96 160s.7813 4.094 2.344 5.656C101.5 168.8 106.5 168.8 109.7 165.7z" />);


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

export { UploadIcon };
