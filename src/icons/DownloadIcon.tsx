import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function DownloadIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'Download',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M223 312.1C213.7 303.6 213.7 288.4 223 279C232.4 269.7 247.6 269.7 256.1 279L296 318.1V184C296 170.7 306.7 160 320 160C333.3 160 344 170.7 344 184V318.1L383 279C392.4 269.7 407.6 269.7 416.1 279C426.3 288.4 426.3 303.6 416.1 312.1L336.1 392.1C327.6 402.3 312.4 402.3 303 392.1L223 312.1zM144 480C64.47 480 0 415.5 0 336C0 273.3 40.07 219.1 96 200.2V200C96 107.2 171.2 32 264 32C314.9 32 360.4 54.6 391.3 90.31C406.2 83.68 422.6 80 440 80C506.3 80 560 133.7 560 200C560 206.6 559.5 213 558.5 219.3C606.5 240.3 640 288.3 640 344C640 416.4 583.4 475.6 512 479.8V480H144zM264 80C197.7 80 144 133.7 144 200L144 234.1L111.1 245.5C74.64 258.7 48 294.3 48 336C48 389 90.98 432 144 432H506.6L509.2 431.8C555.4 429.2 592 390.8 592 344C592 308 570.4 276.9 539.2 263.3L505.1 248.4L511.1 211.7C511.7 207.9 512 204 512 200C512 160.2 479.8 128 440 128C429.5 128 419.6 130.2 410.8 134.2L378.2 148.7L354.9 121.7C332.8 96.08 300.3 80 263.1 80L264 80z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M223 312.1C213.7 303.6 213.7 288.4 223 279C232.4 269.7 247.6 269.7 256.1 279L296 318.1V184C296 170.7 306.7 160 320 160C333.3 160 344 170.7 344 184V318.1L383 279C392.4 269.7 407.6 269.7 416.1 279C426.3 288.4 426.3 303.6 416.1 312.1L336.1 392.1C327.6 402.3 312.4 402.3 303 392.1L223 312.1zM144 480C64.47 480 0 415.5 0 336C0 273.3 40.07 219.1 96 200.2V200C96 107.2 171.2 32 264 32C314.9 32 360.4 54.6 391.3 90.31C406.2 83.68 422.6 80 440 80C506.3 80 560 133.7 560 200C560 206.6 559.5 213 558.5 219.3C606.5 240.3 640 288.3 640 344C640 416.4 583.4 475.6 512 479.8V480H144zM264 80C197.7 80 144 133.7 144 200L144 234.1L111.1 245.5C74.64 258.7 48 294.3 48 336C48 389 90.98 432 144 432H506.6L509.2 431.8C555.4 429.2 592 390.8 592 344C592 308 570.4 276.9 539.2 263.3L505.1 248.4L511.1 211.7C511.7 207.9 512 204 512 200C512 160.2 479.8 128 440 128C429.5 128 419.6 130.2 410.8 134.2L378.2 148.7L354.9 121.7C332.8 96.08 300.3 80 263.1 80L264 80z" />);


    return (
        <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={width} height={height} aria-labelledby='title'>
                {withLinearGradient({ colors: fillGradient, idPrefix: title })}
                <title id='title'>{title}</title>
                {thickness === 'solid' ? solidIcon : thickness === 'regular' ? regularIcon : lightIcon}
            </svg>
        </InteractiveIcon>
    )
}

export { DownloadIcon };