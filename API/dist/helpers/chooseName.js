"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseName = chooseName;
const common_1 = require("../types/common");
function chooseName() {
    const index = Math.floor(Math.random() * 3);
    const nameIndex = Object.keys(common_1.Names)[index];
    return common_1.Names[nameIndex];
}
//# sourceMappingURL=chooseName.js.map