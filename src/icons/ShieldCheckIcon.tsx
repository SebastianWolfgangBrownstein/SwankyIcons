import React from 'react'
import IconProps, { IconThickness, defaults as d } from './Icon';
import { withLinearGradient, InteractiveIcon, dynamicFill, useHover } from '../helpers'

function ShieldCheckIcon({
  width = 60,
  height = 60,
  fillColor = d.fillColor,
  hoverColor,
  fillGradient = d.fillGradient,
  title = 'ShieldCheck',
  thickness = IconThickness.Regular,
  className,
  interactive = false
}: IconProps) {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const regularIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M466.5 83.71l-192-80c-5.875-2.5-12.16-3.703-18.44-3.703S243.5 1.203 237.6 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1C16 385.4 205.4 512 255.9 512C305.2 512 496 387.3 496 127.1C496 108.6 484.3 91.08 466.5 83.71zM256 464C158.5 423.4 64 297.3 64 128l192-80L448 128C448 301.8 349.6 425 256 464zM200.1 247C196.3 242.3 190.1 239.1 184 239.1c-13.71 0-24 11.21-24 24C160 270.1 162.3 276.3 167 280.1l48 48C219.5 333.5 225.7 335.1 232 335.1c2.595 0 11.46-.4962 18.22-8.375l96-112c3.881-4.528 5.781-10.09 5.781-15.62c0-7.405-5.79-23.99-23.98-23.99c-6.756 0-13.48 2.831-18.24 8.362L230.7 276.7L200.1 247z" />);
  const lightIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M466.5 83.71l-192-80c-5.875-2.5-12.16-3.703-18.44-3.703S243.5 1.203 237.6 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1C16 385.4 205.4 512 255.9 512C305.2 512 496 387.3 496 127.1C496 108.6 484.3 91.08 466.5 83.71zM463.9 128.3c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80c1.973-.8275 4.109-1.266 6.258-1.266c2.071 0 4.154 .4072 6.117 1.266l192 80C463.3 117.1 463.9 125.8 463.9 128.3zM336 181.3c-4.094 0-8.188 1.562-11.31 4.688L229.3 281.4L187.3 239.4C184.2 236.2 180.1 234.7 176 234.7c-9.139 0-16 7.473-16 16c0 4.094 1.562 8.188 4.688 11.31l53.34 53.33C221.2 318.4 225.3 320 229.3 320s8.188-1.562 11.31-4.688l106.7-106.7C350.4 205.5 352 201.4 352 197.3C352 188.8 345.1 181.3 336 181.3z" />);
  const thinIcon = (<path fill={dynamicFill(fillColor, title, hoverColor, isHovered)} d="M466.5 83.71l-192-80c-4.875-2.031-13.16-3.703-18.44-3.703c-5.312 0-13.55 1.672-18.46 3.703L45.61 83.71C27.7 91.1 16 108.6 16 127.1C16 385.2 205.2 512 255.9 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.1 466.5 83.71zM255.1 496C212.1 496 32 374 32 127.1c0-12.99 7.734-24.57 19.75-29.54l191.1-79.1C246.7 17.21 252.8 16 256.1 16c3.188 0 9.383 1.234 12.29 2.441l192 80.02C472.3 103.4 480 114.1 480 127.1C480 405.6 270.9 496 255.1 496zM360.1 175.1c-2.128 0-4.242 .8459-5.8 2.509L224.2 316.2L158 242.6C156.4 240.9 154.3 239.1 152.1 239.1c-4.49 0-7.995 3.675-7.995 8.02c0 1.905 .6777 3.817 2.058 5.35l72 80c1.531 1.672 4 2.156 5.938 2.641c2.188 0 4.312-.9062 5.812-2.5l136-144c1.463-1.553 2.19-3.535 2.19-5.512C368.1 179 363.9 175.1 360.1 175.1z" />);

  return (
    <InteractiveIcon interactive={interactive} hoverRef={hoverRef}>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} aria-labelledby='title'>
        {withLinearGradient({ colors: fillGradient, idPrefix: title })}
        <title id='title'>{title}</title>
        {thickness === 'regular' ? regularIcon : thickness === 'light' ? lightIcon : thinIcon}
      </svg>
    </InteractiveIcon>
  )
}

export { ShieldCheckIcon };