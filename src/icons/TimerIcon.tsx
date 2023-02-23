import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function TimerIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    hoverColor,
    fillGradient = d.fillGradient,
    title = 'Timer',
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 184.4 29.46 119.6 76.84 73.14C89.46 60.78 109.7 60.98 122.1 73.6C134.5 86.23 134.3 106.5 121.6 118.9C86.03 153.7 64 202.3 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 160.9 378.8 81.89 288 66.65V96C288 113.7 273.7 128 256 128C238.3 128 224 113.7 224 96V32C224 14.33 238.3 0 256 0C397.4 0 512 114.6 512 256zM272.1 239C282.3 248.4 282.3 263.6 272.1 272.1C263.6 282.3 248.4 282.3 239 272.1L159 192.1C149.7 183.6 149.7 168.4 159 159C168.4 149.7 183.6 149.7 192.1 159L272.1 239z" />)
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 202.7 16.29 153.2 44.15 112.2C51.6 101.3 66.53 98.43 77.49 105.9C88.45 113.3 91.3 128.3 83.85 139.2C61.22 172.5 47.1 212.7 47.1 256C47.1 370.9 141.1 464 255.1 464C370.9 464 464 370.9 464 256C464 149.2 383.6 61.27 280 49.37V104C280 117.3 269.3 128 255.1 128C242.7 128 231.1 117.3 231.1 104V24C231.1 10.75 242.7 0 255.1 0C397.4 0 512 114.6 512 256H512zM272.1 239C282.3 248.4 282.3 263.6 272.1 272.1C263.6 282.3 248.4 282.3 239 272.1L159 192.1C149.7 183.6 149.7 168.4 159 159C168.4 149.7 183.6 149.7 192.1 159L272.1 239z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 202.7 16.28 153.2 44.15 112.2C49.12 104.9 59.07 103 66.37 108C73.68 112.1 75.58 122.9 70.61 130.2C46.24 166.1 32 209.4 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 137.7 388.2 40.77 272 32.56V112C272 120.8 264.8 128 256 128C247.2 128 240 120.8 240 112V16C240 7.164 247.2 0 256 0C397.4 0 512 114.6 512 256V256zM267.3 244.7C273.6 250.9 273.6 261.1 267.3 267.3C261.1 273.6 250.9 273.6 244.7 267.3L148.7 171.3C142.4 165.1 142.4 154.9 148.7 148.7C154.9 142.4 165.1 142.4 171.3 148.7L267.3 244.7z" />);


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

export { TimerIcon };