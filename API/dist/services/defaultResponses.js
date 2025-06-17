"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFailMessage = exports.defaultSuccessMessage = void 0;
const defaultSuccessMessage = (additionalIfo) => {
    return `<html lang='en'><body><div>SUCCESS! ${additionalIfo}</div></body></html>`;
};
exports.defaultSuccessMessage = defaultSuccessMessage;
const defaultFailMessage = (reason) => {
    return `<html lang='en'><body><div>FAIL ${reason ? `--REASON: ${reason}` : ""}</div></body></html>`;
};
exports.defaultFailMessage = defaultFailMessage;
//# sourceMappingURL=defaultResponses.js.map