export const getFibonacciNumber = (num) => {
    if (num <= 1) return 1;

    return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
};
