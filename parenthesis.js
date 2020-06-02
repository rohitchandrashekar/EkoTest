const words = ['foo(bar)blim','foo(foo(bar))blim','(bar)','foo(bar)']

const reverse = (word) => word.split('').reverse().join('');

const checkParenthesisAndReverse = (str) => {
    while (str.includes('(')) {
        const open = str.lastIndexOf('(');
        const close = str.indexOf(')', open);
        str = str.slice(0, open) + reverse(str.slice(open + 1, close)) + (close + 1 === str.length ? str.slice(close, -1) : str.slice(close + 1));
    }
    return str;
};

words.forEach((word) => {
    const finalWord = checkParenthesisAndReverse(word);
    console.log(finalWord);
});