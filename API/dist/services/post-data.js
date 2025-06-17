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
exports.postData = void 0;
const chooseName_1 = require("../helpers/chooseName");
const postData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://us-central1-testapp-463218.cloudfunctions.net/add-data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": {
                name: (0, chooseName_1.chooseName)(),
                timestamp: new Date()
            },
        }),
    }).then(res => res.json());
    return response;
});
exports.postData = postData;
//# sourceMappingURL=post-data.js.map