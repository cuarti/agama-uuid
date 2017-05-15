

export function numPad(num: number, size: number): string {

    let str = num.toString(16);
    return new Array(Math.max(size - str.length + 1, 0)).join('0') + str;
}
