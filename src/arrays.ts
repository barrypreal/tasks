/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return af new array where each
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
    const newNums = numbers.map((num: string): number => parseInt(num) || 0);
    return newNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newNums = amounts.map((num: string): number =>
        num.includes("$") ? parseInt(num.substring(1)) || 0 : parseInt(num) || 0
    );
    return newNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newStrings = messages.map((sentence: string): string =>
        sentence.includes("!") ? sentence.toUpperCase() : sentence
    );
    const noQuestion = newStrings.filter(
        (sentence: string): boolean => !sentence.includes("?")
    );
    return noQuestion;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let sum = 0;
    words.map((word: string): number =>
        word.length < 4 ? (sum += 1) : (sum += 0)
    );
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let allLowPrices: boolean;
    colors.length == 0
        ? (allLowPrices = true)
        : (allLowPrices = colors.every(
              (color: string): boolean =>
                  color == "red" || color == "blue" || color == "green"
          ));
    return allLowPrices;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    addends.map((num: number): number => (sum += num));
    if (sum == 0) {
        return "0=0";
    } else {
        let maths: string = sum + "=";
        addends.map((num: number): string => (maths = maths + num + "+"));
        return maths.substring(0, maths.length - 1);
    }
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
    const index: number = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (index < 0) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const newNumbs = [...values, sum];
        return newNumbs;
    } else {
        const partValues = values.slice(0, index);
        const sum = partValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const newNumbs = [...values];
        newNumbs.splice(index + 1, 0, sum);
        return newNumbs;
    }
}
