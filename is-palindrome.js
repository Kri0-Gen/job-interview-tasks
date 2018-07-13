export default (inputString) => {
    const charArray = inputString
        .toLowerCase()
        .split('')
        .filter((char) => char >= 'a' && char <= 'z');
    return charArray.join('') === charArray.reverse().join('');
};
