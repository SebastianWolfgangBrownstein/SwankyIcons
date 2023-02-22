import React from 'react';
import { defaults, generateStops, generateOpacities } from '../icons/Icon';

type WithLinearGradientProps = {
    colors: string[];
    idPrefix: string;
    opacities?: number[];
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
}

function withLinearGradient({
    colors,
    idPrefix = '',
    opacities = defaults.fillGradientOpacities,
    x1 = '0%',
    y1 = '0%',
    x2 = '100%',
    y2 = '50%'
}: WithLinearGradientProps) {
    const fillGradientStops = colors.length === defaults.fillGradient.length ? defaults.fillGradientStops : generateStops(colors);
    const fillGradientOpacities = opacities ? opacities : colors.length === defaults.fillGradientOpacities.length ? defaults.fillGradientOpacities : generateOpacities(colors);

    return (
        <defs>
            <linearGradient id={idPrefix + 'linearGradient'} x1={x1} y1={y1} x2={x2} y2={y2}>
                {
                    colors.map((color, i) => (
                        <stop key={i} offset={`${fillGradientStops[i]}%`} stopColor={color} stopOpacity={fillGradientOpacities[i]} />
                    ))
                }
                {/* <stop offset='0%' stopColor={colors[0]} stopOpacity={opacities[0]} />
                <stop offset='100%' stopColor={colors[1]} stopOpacity={opacities[1]} /> */}
            </linearGradient>
        </defs>
    )
}

export { withLinearGradient };