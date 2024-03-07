"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTimeFormat = void 0;
const class_validator_1 = require("class-validator");
function IsTimeFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isTimeFormat',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (!value.match(/^\d{2}:\d{2}$/)) {
                        return false;
                    }
                    const [hours, minutes] = value.split(':').map(Number);
                    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
                        return false;
                    }
                    return true;
                },
                defaultMessage(args) {
                    return `${args.property} must be a valid time in format HH:mm`;
                },
            },
        });
    };
}
exports.IsTimeFormat = IsTimeFormat;
//# sourceMappingURL=IsTimeFormat.js.map