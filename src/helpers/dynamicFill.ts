export function dynamicFill(fillColor: string, title: string = '', hoverColor?: string, isHovered?: boolean) {
    if (isHovered && hoverColor) {
        return hoverColor;
    }

    if (fillColor === 'gradient') {
        return `url(#${title}linearGradient)`
    }

    return fillColor;
}