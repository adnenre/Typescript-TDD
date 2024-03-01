declare class ArrayUtils<T> {
    private array;
    constructor(...items: T[]);
    /**
     * The function `getLength` returns the length of an array in TypeScript.
     * @returns The `getLength` method is returning the length of the array stored in the object.
     */
    getLength(): number;
    getItems(): T[];
    static map<T, U>(arr: T[], mapper: (item: T) => U): U[];
    /**
     * The `filter` function takes an array and a predicate function, and returns a new array containing
     * only the elements that satisfy the predicate.
     * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
     * @param predicate - The `predicate` parameter in the `filter` function is a callback function that
     * takes an item of type `T` as its argument and returns a boolean value. This function is used to
     * determine whether an item should be included in the resulting array based on the specified
     * condition.
     * @returns The `filter` method is returning an array of elements that satisfy the given `predicate`
     * function.
     */
    static filter<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * The `groupBy` function in TypeScript takes an array of items and groups them based on a specified
     * key function.
     * @param {T[]} arr - The `arr` parameter is an array of elements of type `T` that you want to group
     * based on a specific key.
     * @param keyFn - The `keyFn` parameter is a function that takes an item of type `T` as input and
     * returns a string. This function is used to determine the key for grouping the items in the array
     * `arr`.
     * @returns The `groupBy` function returns an object where the keys are strings and the values are
     * arrays of type `T`.
     */
    static groupBy<T>(arr: T[], keyFn: (item: T) => string): {
        [key: string]: T[];
    };
}
export { ArrayUtils };