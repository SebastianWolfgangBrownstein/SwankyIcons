import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function TurntableIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Turntable',
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M512 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h448c35.38 0 64-28.62 64-64V96C576 60.63 547.4 32 512 32zM224 416c-88.38 0-160-71.63-160-160s71.63-160 160-160s160 71.63 160 160S312.4 416 224 416zM512 267.9c0 9.875-2.375 19.62-6.75 28.62l-19 37.75c8 4 11.12 13.62 7.25 21.5l-25.75 51.38c-3.875 7.875-13.5 11.12-21.5 7.125L417.8 400c-8-4-11.12-13.5-7.25-21.5l25.75-51.38C440.1 319.3 449.8 316 457.8 320l18.88-37.88C478.8 277.7 480 272.8 480 267.8V112C480 103.2 487.2 96 496 96S512 103.2 512 112V267.9zM224 224C206.4 224 192 238.4 192 256s14.38 32 32 32s32-14.38 32-32S241.6 224 224 224z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M224 232C210.8 232 200 242.8 200 256S210.8 280 224 280S248 269.3 248 256S237.3 232 224 232zM512 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h448c35.38 0 64-28.62 64-64V96C576 60.63 547.4 32 512 32zM544 416c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V96c0-17.62 14.38-32 32-32h448c17.62 0 32 14.38 32 32V416zM224 96C135.6 96 64 167.6 64 256s71.63 160 160 160s160-71.63 160-160S312.4 96 224 96zM224 384c-70.75 0-128-57.25-128-128s57.25-128 128-128s128 57.25 128 128C351.9 326.6 294.6 383.9 224 384zM484.5 304.5L480 302.2V112C480 103.2 472.8 96 464 96S448 103.2 448 112V288c-13.38-2.875-27.12 3.125-34 15l.5001 .25c-4.5 7.374-11.1 21.87-27.12 52.12c-7.887 15.77-1.529 34.96 14.23 42.87l28.64 14.38C434.8 414.9 439.6 416 444.5 416c3.5 0 7-.5 10.25-1.625c8-2.625 14.62-8.5 18.5-16l25.62-50.88C506.8 331.6 500.4 312.4 484.5 304.5zM444.6 384L416 369.8c0 0 23.62-46.75 25.75-50.75l28.5 14.12L444.6 384z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M224 224C206.3 224 192 238.3 192 256c0 17.67 14.33 32 32 32s32-14.33 32-32C256 238.3 241.7 224 224 224zM224 272C215.2 272 208 264.8 208 256S215.2 240 224 240S240 247.2 240 256S232.8 272 224 272zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM560 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h448c26.47 0 48 21.53 48 48V416zM504 96c-4.422 0-8 3.594-8 8v137.3c0 13.59-3.219 27.19-9.297 39.38l-22.3 44.61c-17.84-3.885-29.8 5.096-35.31 16.09l-11.4 22.74c-7.924 15.81-1.52 35.05 14.3 42.96c18.8 9.395 36.6-1.666 42.92-14.29l11.4-22.74c6.594-13.16 2.852-28.31-7.566-37.71l22.27-44.54C508.2 273.5 512 257.4 512 241.3V104C512 99.59 508.4 96 504 96zM472 362.9L460.6 385.7c-9.535 19.02-38.07 4.531-28.62-14.34l11.4-22.74C452.9 329.6 481.5 344.1 472 362.9zM224 96C135.6 96 64 167.6 64 256s71.63 160 160 160s160-71.63 160-160S312.4 96 224 96zM224 400c-79.4 0-144-64.6-144-144S144.6 112 224 112s144 64.6 144 144S303.4 400 224 400z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { TurntableIcon };