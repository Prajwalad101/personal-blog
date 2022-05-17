---
title: '10 very important javascript functions'
date: '2022-04-05'
image: 'heading.png'
excerpt: 'Learn and understand some very important functions in javascript'
isFeatured: true
readTime: 10
---

Here are 10 of the most useful javascript functions that you can learn.

## 1. map()

The `map()` function creates a new array by performing an operation on every element on that array. This can be useful if you don't want to modify the existing array and avoid mistakes.

```js
const items = [4, 3, 1, 2];

const newItems = items.map((item) => item * 2);

// newItems = [8, 6, 2, 4]
```

## 2. filter()

The `filter()` method is used to create a new array that only pass a certain test provided by the function. Similar, to the map() function, this also doesnot change the original array.

```js
const items = [4, 3, 1, 2];

const newItems = items.map((item) => item < 4);

// newItems = [3, 1, 2]
```

## 3. includes()

The `includes()` method checks for sub-strings and array elements and returns a boolean value. It is important to note that the matching done by this method in case sensitive.

```js
const items = ['the', 'missouri', 'belle', 'casino'];

const doesExist = items.includes('miss');

// doesExist = true
```

## 4. slice()

As the name suggests, the `slice()` method selects specified elements from an array and returns a shallow copy of those elements into a new array. The elements are using the `start` and `end` parameters. The original array will not be modified. The `start` and `end` represents the index of an array where the `end` index is not included.

```js
const items = [4, 3, 1, 2, 5, 2];

const newItems1 = items.slice(2, 4);
const newItems2 = items.slice(1, 5);

// newItems1 = [1, 2]
// newItems2 = [3, 1, 2, 5]
```

## 5. some()

The `some()` method is used to test if at least one element satisfies a condition implemented in the method. The value returned by this function is boolean.

```js
const items = [4, 3, 1, 2];

// checks if an element is even
const isEven = items.some((item) => item % 2 === 0);

// isEven = true
```

## 6. every()

Similar to the `some()` method, the `every()` method checks if every element in the array passes the function implemented in the method. The value returned by this method is also boolean.

```js
const items = [4, 3, 1, 2];

// checks if an element is even
const isEven = items.every((item) => item % 2 === 0);

// isEven = false
```

## 7. shift()

If you want to remove the first element of an array, the `shift()` method is used. It is important to note that this method also changes the original array.

```js
const items = [4, 3, 1, 2];

items.shift();

// items = [3, 1, 2]
```

## 8. unshift()

Similar to the `shift()` method, the `unshift()` method, adds a new element a the beginning of the array. One thing to keep in mind is that, because of how `shift()` and `unshift()` methods work behind the scenes, they are extremly ineffecient. Therefore, if you are operating on larger arrays, it is better to find some other alternatives.

```js
const items = [4, 3, 1, 2];

items.unshift(5);

// items = [5, 4, 3, 1, 2]
```

## 9. fill()

The `fill()` method, fills the specified elements in an array with a given value. It overwrites the existing values in an array. The `start` and `end` parameters are used to specify which elements to fill. If not specified, all the elements will be changed.

##

Syntax:
`array.fill(value, start, end)`

```js
const items = [4, 3, 5, 2];

const newItems = items.fill(1, 0, 2);

// newItems = [1, 1, 5, 2]
```

## 10. sort()

As the name suggests, the `sort()` method is used to sort the elements of an array. This returns an new sorted array and changes the original array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```js
const items = [1, 30, 4, 21, 100000];

items.sort();

// items = [1, 100000, 21, 30, 4]
```

Now, you are probably going to get confused by this output. This is because, by default the `sort()` method converts numeric values into strings an compares them.

To compare numeric values, we can provide a compare function

```js
const items1 = [1, 30, 4, 21, 100000];
const items2 = [1, 30, 4, 21, 100000];

items1.sort((a, b) => a - b); // sort by ascending order
items2.sort((a, b) => b - a); // sort by descending order

// if the result is negative, a is sorted before b
// if the result is positive, b is sorted before a

// items1 = [1, 4, 21, 30, 100000]
// items2 = [100000, 30, 21, 4, 1]
```

# Conclusion

_Javascript is a vast language and there is a lot to learn and lot to uncover. These are some of the most used and important functions is javascript and there are still a lot of other functions you might find helpful. Therefore, I suggest you start exploring other features and core concepts of javascript._
