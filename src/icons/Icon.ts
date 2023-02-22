import { ReactElement } from 'react';
import { linspace, intArray } from '../helpers/math';

type IconProps = {
    width?: number | string;
    height?: number | string;
    fillColor?: string;
    hoverColor?: string;
    fillGradient?: string[];
    title?: string;
    thickness?: IconThickness;
    className?: string;
    interactive?: boolean;
    onClick?: () => any;
    onMouseEnter?: () => any;
    onMouseLeave?: () => any;
}

export type Icon = ReactElement<IconProps>;

export enum IconThickness {
    Solid = 'solid',
    Regular = 'regular',
    Light = 'light',
    Thin = 'thin'
}

const defaultFillGradient = ['#affcaf', '#8367c7'];
const defaultFillGradientStops = generateStops(defaultFillGradient);
const defaultFillOpacities = generateOpacities(defaultFillGradient);

export const defaults = {
    fillColor: "#affcaf",
    fillGradient: defaultFillGradient,
    fillGradientOpacities: defaultFillOpacities,
    fillGradientStops: defaultFillGradientStops
}

export function generateStops(colors: string[]) {
    const numStops = colors.length;
    if (numStops === 2) return [0, 100];

    const stops = linspace(0, 100, numStops);
    return stops;
}

export function generateOpacities(colors: string[], baseOpacity = 1) {
    if (colors.length === 2) return [baseOpacity, baseOpacity];
    return intArray(colors.length, baseOpacity);

}

export default IconProps;