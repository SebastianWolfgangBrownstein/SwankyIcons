import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function ShareIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'Share',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 128C448 181 405 224 352 224C323.1 224 297.2 211.2 279.6 191L189.9 235.9C191.3 242.4 191.1 249.1 191.1 255.1C191.1 262.9 191.3 269.6 189.9 276.1L279.6 320.1C297.2 300.8 323.1 287.1 352 287.1C405 287.1 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 377.1 256.7 370.4 258.1 363.9L168.4 319C150.8 339.2 124.9 352 96 352C42.98 352 0 309 0 255.1C0 202.1 42.98 159.1 96 159.1C124.9 159.1 150.8 172.8 168.4 192.1L258.1 148.1C256.7 141.6 256 134.9 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128H448zM95.1 304C122.5 304 143.1 282.5 143.1 256C143.1 229.5 122.5 208 95.1 208C69.49 208 47.1 229.5 47.1 256C47.1 282.5 69.49 304 95.1 304zM352 80C325.5 80 304 101.5 304 128C304 154.5 325.5 176 352 176C378.5 176 400 154.5 400 128C400 101.5 378.5 80 352 80zM352 432C378.5 432 400 410.5 400 384C400 357.5 378.5 336 352 336C325.5 336 304 357.5 304 384C304 410.5 325.5 432 352 432z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 112C448 156.2 412.2 192 368 192C345.1 192 324.4 182.4 309.9 166.1L158.9 242.5C159.6 246.9 160 251.4 160 256C160 260.6 159.6 265.1 158.9 269.5L309.9 345C324.4 329.6 345.1 320 368 320C412.2 320 448 355.8 448 400C448 444.2 412.2 480 368 480C323.8 480 288 444.2 288 400C288 390.3 289.7 380.1 292.9 372.3L147.2 299.5C132.9 321.5 108.2 336 80 336C35.82 336 0 300.2 0 256C0 211.8 35.82 176 80 176C108.2 176 132.9 190.5 147.2 212.5L292.9 139.7C289.7 131 288 121.7 288 112C288 67.82 323.8 32 368 32C412.2 32 448 67.82 448 112L448 112zM79.1 304C106.5 304 127.1 282.5 127.1 256C127.1 229.5 106.5 208 79.1 208C53.49 208 31.1 229.5 31.1 256C31.1 282.5 53.49 304 79.1 304zM368 64C341.5 64 320 85.49 320 112C320 138.5 341.5 160 368 160C394.5 160 416 138.5 416 112C416 85.49 394.5 64 368 64zM368 448C394.5 448 416 426.5 416 400C416 373.5 394.5 352 368 352C341.5 352 320 373.5 320 400C320 426.5 341.5 448 368 448z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { ShareIcon };