const getValidationPaths = (data, validationPath, iterator = '$') => {
    const validationPaths = [];
    if (validationPath.indexOf(`.${iterator}`) === -1) {
        validationPaths.push(validationPath);
    } else {
        const lastIterator = validationPath.lastIndexOf(`.${iterator}`);
        const matchString = validationPath.substring(0, lastIterator + 2);
        const remainder = validationPath.substring(lastIterator + 2);
        const re = new RegExp(`^${matchString.replace(iterator, '[^.]')}$`);

        const addPathRecursive = (obj, currentKey) => {
            Object.keys(obj).forEach((key) => {
                const value = obj[key];
                const newKey = (currentKey ? currentKey + "." + key : key);
                if (re.test(newKey)) {
                    validationPaths.push(`${newKey}${remainder}`);
                } else if(value && typeof value === "object") {
                    addPathRecursive(value, newKey);
                }
            });
        };
        addPathRecursive(data);
    }
    return validationPaths;
};

export default getValidationPaths;