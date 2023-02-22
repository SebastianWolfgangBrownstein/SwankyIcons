export function linspace(start: number, stop: number, num: number, endpoint = true) {
    const div = endpoint ? (num - 1) : num;
    const step = (stop - start) / div;
    return Array.from({ length: num }, (_, i) => start + step * i);
}

export function intArray(length: number, base: number) {
    return Array.from({ length: length }, (_, __) => base);
}