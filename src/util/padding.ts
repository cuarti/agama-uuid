

/**
 * TODO: Abstract it in @agama/types
 */
export function padding(value: any, size: number): string {

    let str = value.toString();

    return new Array(Math.max(size - str.length + 1, 0)).join('0') + str;
}
