export const formatMessage = (text, replacements = {}, { plural } = {}) => {
    const splittedText = text.split("|");
    let message = splittedText[0];
    if (splittedText.length > 1 && plural !== 1) {
        message = splittedText[1];
    }

    Object.keys(replacements).forEach(key => {
        const regEx = new RegExp(
            key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            "g"
        );
        message = message.replace(regEx, replacements[key]);
    });
    return message;
};
