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
const post_data_1 = require("../services/post-data");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield (0, post_data_1.postData)();
    if (info.id) {
        res.send((0, defaultResponses_1.defaultSuccessMessage)(`New Document ID: ${info.id}`));
    }
    else {
        res.send((0, defaultResponses_1.defaultFailMessage)());
    }
});
//# sourceMappingURL=post-data.js.map