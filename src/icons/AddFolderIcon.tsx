import React from 'react';
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'


function AddFolderIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = "AddFolder",
    thickness = IconThickness.Regular,
    className,
    interactive = false
}:IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    
    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h384c35.34 0 64-28.66 64-64V160C512 124.7 483.3 96 448 96zM464 416c0 8.824-7.18 16-16 16H64c-8.82 0-16-7.176-16-16V96c0-8.824 7.18-16 16-16h117.5c4.273 0 8.289 1.664 11.31 4.688L256 144h192c8.82 0 16 7.176 16 16V416zM336 264h-56V207.1C279.1 194.7 269.3 184 256 184S232 194.7 232 207.1V264H175.1C162.7 264 152 274.7 152 288c0 13.26 10.73 23.1 23.1 23.1h56v56C232 381.3 242.7 392 256 392c13.26 0 23.1-10.74 23.1-23.1V311.1h56C349.3 311.1 360 301.3 360 288S349.3 264 336 264z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 96h-176L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.66 32 0 60.65 0 96v320c0 35.35 28.66 64 64 64h384c35.34 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.547 0 16.58 3.328 22.62 9.375L258.7 128H448c17.64 0 32 14.36 32 32V416zM336 272h-64V207.1C272 199.2 264.8 192 256 192S240 199.2 240 207.1V272h-64C167.2 272 160 279.2 160 288c0 8.834 7.156 15.1 16 15.1h64v64C240 376.8 247.2 384 256 384c8.836 0 16-7.16 16-15.1V303.1h64C344.8 303.1 352 296.8 352 288S344.8 272 336 272z" />);
    

    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 96 960 960"  aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { AddFolderIcon }