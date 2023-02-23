import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function DocumentIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Document',
    thickness = IconThickness.Solid,
    className,
    interactive = false 
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM304 384c8.875 0 16 7.125 16 16S312.9 416 304 416h-47.25c-16.38 0-31.25-9.125-38.63-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.75 15.38C187.6 412.6 181.1 416 176 416H174.9c-6.5-.5-12-4.75-14-11L144 354.6L133.4 386.5C127.5 404.1 111 416 92.38 416H80C71.13 416 64 408.9 64 400S71.13 384 80 384h12.38c4.875 0 9.125-3.125 10.62-7.625l18.25-54.63C124.5 311.9 133.6 305.3 144 305.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12c2 4 6 6.5 10.12 6.5H304z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 128h80C184.8 128 192 120.8 192 112S184.8 96 176 96H96C87.16 96 80 103.2 80 112S87.16 128 96 128zM96 192h80C184.8 192 192 184.8 192 176S184.8 160 176 160H96C87.16 160 80 167.2 80 176S87.16 192 96 192zM196.6 363.4l-13.88-41.63C179.5 311.9 170.4 305.3 160 305.3s-19.5 6.625-22.75 16.5L119 376.4C117.5 380.9 113.3 384 108.4 384H96c-8.875 0-16 7.125-16 16S87.13 416 96 416h12.38c18.62 0 35.13-11.88 41-29.5L160 354.6L176.9 405c2 6.25 7.5 10.5 14 11H192c5.1 0 11.62-3.375 14.25-8.875l7.75-15.38C216.8 386.3 221.9 385.6 224 385.6s7.25 .625 10.12 6.5C241.5 406.9 256.4 416 272.8 416H288c8.875 0 16-7.125 16-16S296.9 384 288 384h-15.25c-4.125 0-8.125-2.5-10.12-6.5C250.8 353.6 216.4 347.1 196.6 363.4z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M72 80h80C156.4 80 160 76.41 160 72S156.4 64 152 64h-80C67.59 64 64 67.59 64 72S67.59 80 72 80zM374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM72 144h80C156.4 144 160 140.4 160 136S156.4 128 152 128h-80C67.59 128 64 131.6 64 136S67.59 144 72 144zM209.6 329.6c-14.31 0-27.53 10.84-35.36 29l-12.27 28.06L142.5 308.5c-2.609-10.41-9.406-14.25-14.89-14.38C121.5 293.4 115.5 297.5 112.6 307.4l-22.02 74.84C90.27 383.2 89.94 383.8 90.2 384H64c-4.422 0-8 3.594-8 8S59.58 400 64 400h27.06c6.734 0 12.41-5.062 14.83-13.25l21.47-72.97l19.39 77.97c2.047 8.281 7.453 13.78 14.09 14.31c.3125 .0313 .6562 .0625 .9844 .0625c4.703 0 10.53-2.719 13.84-10.41l13.27-30.78c9.453-21.88 27.14-24.94 38.34-5.969l11.66 19.81C246.9 392.3 258.3 400 270.4 400H320c4.422 0 8-3.594 8-8S324.4 384 320 384h-49.61c-6.234 0-12.67-4.875-17.67-13.34l-11.66-19.81C233.1 337.4 221.7 329.6 209.6 329.6z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>Document</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { DocumentIcon };