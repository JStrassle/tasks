/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) return numbers;

    return [numbers[0], numbers[numbers.length - 1]];
    //I think there is a better way to do this without using if statement however it is too simple to not use it.
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strings = numbers.map((mystr: string): number =>
        isNaN(Number(mystr)) ? 0 : parseInt(mystr)
    );
    return strings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const brokeboy = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.slice(1) : amount
    );
    const strings = brokeboy.map((mystr: string): number =>
        isNaN(Number(mystr)) || mystr === "" ? 0 : parseInt(mystr)
    );
    return strings;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const huh = messages.filter(
        (message: string): boolean => message.endsWith("?") === false
    );
    const ahh = huh.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return ahh;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const test = colors.every(
        (color: string): boolean =>
            color === "blue" || color === "red" || color === "green"
    );
    return test;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const summation = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return summation + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //curious about what the new array does for this, I'm probably just dumb
    const newarr = [...values];
    const neg = values.findIndex((num: number): boolean => num < 0);
    const summation = values
        .slice(0, neg < 0 ? values.length : neg)
        .reduce((currentTotal: number, num: number) => currentTotal + num, 0);
    newarr.splice(neg < 0 ? values.length : neg + 1, 0, summation);
    return newarr;
}
