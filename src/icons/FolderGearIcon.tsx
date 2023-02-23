import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function FolderGearIcon({
    width = 30,
    height = 30,
    fillColor = d.fillColor,
    fillGradient = d.fillGradient,
    title = 'FolderGear',
    hoverColor,
    thickness = IconThickness.Solid,
    className,
    interactive = false
}: IconProps) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const solidIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M256 248C233.9 248 216 265.9 216 288s17.91 40 40 40S296 310.1 296 288S278.1 248 256 248zM464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM366.9 352c-4.457 7.719-9.781 14.55-15.56 20.86c-2.506 2.738-6.633 3.281-9.846 1.422l-23.46-13.54C309.2 368.3 299.1 374.2 288 378.1v27.02c0 3.711-2.531 7.016-6.154 7.812C273.5 414.8 264.9 416 256 416c-8.912 0-17.49-1.195-25.84-3.047C226.5 412.2 224 408.9 224 405.1v-27.02c-11.12-3.957-21.19-9.867-29.99-17.38L170.6 374.3c-3.215 1.859-7.34 1.316-9.848-1.422C154.9 366.6 149.6 359.7 145.1 352c-4.455-7.719-7.709-15.75-10.29-23.91C133.7 324.6 135.3 320.7 138.6 318.9l23.21-13.4C160.7 299.8 160 293.1 160 288s.7129-11.78 1.76-17.46L138.6 257.1C135.3 255.3 133.7 251.4 134.9 247.9C137.4 239.7 140.7 231.7 145.1 224c4.457-7.719 9.783-14.55 15.56-20.86C163.2 200.4 167.3 199.9 170.6 201.7l23.45 13.54C202.8 207.7 212.9 201.8 224 197.9V170.9c0-3.711 2.531-7.016 6.156-7.816C238.5 161.2 247.1 160 256 160c8.914 0 17.49 1.195 25.85 3.043C285.5 163.8 288 167.1 288 170.9v27.02c11.12 3.957 21.19 9.867 29.99 17.38l23.46-13.54c3.213-1.859 7.34-1.316 9.846 1.422C357.1 209.4 362.4 216.3 366.9 224s7.711 15.75 10.29 23.91c1.119 3.539-.4766 7.383-3.689 9.234l-23.21 13.4C351.3 276.2 352 282 352 288s-.7129 11.78-1.76 17.46l23.21 13.4c3.213 1.852 4.809 5.695 3.691 9.234C374.6 336.3 371.3 344.3 366.9 352z" />);
    const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C512 124.7 483.3 96 448 96zM464 416c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144h192c8.822 0 16 7.176 16 16V416zM338.5 303.3C339.4 298.3 340 293.2 340 288s-.625-10.31-1.541-15.28L358.8 261c2.811-1.625 4.207-4.984 3.229-8.082C359.7 245.8 356.9 238.8 352.1 232s-8.562-12.73-13.62-18.25c-2.193-2.398-5.805-2.875-8.615-1.246l-20.52 11.85C302.5 217.8 293.7 212.6 284 209.1V185.5c0-3.246-2.215-6.137-5.387-6.836C271.3 177 263.8 176 256 176S240.7 177 233.4 178.7C230.2 179.4 228 182.3 228 185.5v23.64C218.3 212.6 209.5 217.8 201.8 224.4L181.2 212.5C178.4 210.9 174.8 211.4 172.6 213.8C167.6 219.3 162.9 225.2 159 232c-3.898 6.754-6.744 13.78-8.998 20.91C149 256 150.4 259.4 153.2 261l20.3 11.72C172.6 277.7 172 282.8 172 288s.623 10.31 1.539 15.28L153.2 315c-2.812 1.621-4.207 4.984-3.23 8.082C152.3 330.2 155.1 337.2 159 344c3.9 6.754 8.562 12.73 13.62 18.25c2.195 2.398 5.805 2.875 8.617 1.246l20.52-11.85C209.5 358.2 218.3 363.4 228 366.9v23.64c0 3.242 2.215 6.137 5.387 6.836C240.7 398.1 248.2 400 256 400s15.3-1.047 22.61-2.664c3.172-.6992 5.387-3.594 5.387-6.836v-23.64c9.734-3.465 18.54-8.637 26.24-15.21l20.52 11.85c2.811 1.629 6.422 1.152 8.615-1.246c5.055-5.52 9.716-11.5 13.62-18.25s6.745-13.78 8.999-20.92c.9766-3.098-.4199-6.461-3.23-8.082L338.5 303.3zM256 323c-19.33 0-35-15.67-35-35S236.7 253 256 253c19.33 0 35 15.67 35 35S275.3 323 256 323z" />);
    const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M448 96h-176L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C512 124.7 483.3 96 448 96zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32V416zM352.1 232c-4.438-7.656-14.22-10.31-21.86-5.844l-15.56 8.98C304.3 222.4 289.3 213.1 272 209.6V192c0-8.844-7.156-16-16-16S240 183.2 240 192v17.62C222.7 213.1 207.7 222.4 196.4 235.1L180.9 226.2C173.2 221.7 163.4 224.3 159 232S157.2 249.4 164.9 253.8L180.4 262.8C177.8 270.8 176 279.2 176 288s1.785 17.2 4.445 25.16l-15.59 8.996C157.2 326.6 154.6 336.3 159 344C161.1 349.1 167.3 352 172.9 352c2.719 0 5.469-.6875 7.984-2.156l15.56-8.98c11.29 12.71 26.31 22 43.58 25.52V384c0 8.844 7.156 16 16 16s16-7.156 16-16v-17.62c17.27-3.52 32.3-12.81 43.58-25.52l15.56 8.98C333.7 351.3 336.4 352 339.1 352c5.531 0 10.9-2.875 13.87-8c4.422-7.656 1.8-17.44-5.856-21.84L331.6 313.2C334.2 305.2 336 296.8 336 288s-1.785-17.2-4.445-25.16l15.59-8.996C354.8 249.4 357.4 239.7 352.1 232zM256 336c-26.47 0-48-21.53-48-48S229.5 240 256 240s48 21.53 48 48S282.5 336 256 336z" />);


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

export { FolderGearIcon };