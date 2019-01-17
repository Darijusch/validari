export class MissingOptionsException extends Error {}
export class UnexpectedTypeException extends Error {
    constructor(value, expectedType) {
        super(`Expected argument of type "${expectedType}", "${typeof value}" given`);
    }
}
export class UnexpectedValueException extends UnexpectedTypeException {
}