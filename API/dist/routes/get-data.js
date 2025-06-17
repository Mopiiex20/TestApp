"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultResponses_1 = require("../services/defaultResponses");
const read_data_1 = require("../services/read-data");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield (0, read_data_1.getData)();
    if (info.data) {
        const quantity = {};
        info.data.forEach(document => {
            quantity[document.data.name] = quantity[document.data.name] + 1 || 1;
        });
        res.send((0, defaultResponses_1.defaultSuccessMessage)(`COUNT: ${JSON.stringify(quantity)}`));
    }
    else {
        res.send((0, defaultResponses_1.defaultFailMessage)());
    }
});
//# sourceMappingURL=get-data.js.map