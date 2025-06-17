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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_data_1 = __importDefault(require("./routes/post-data"));
const get_data_1 = __importDefault(require("./routes/get-data"));
const read_data_1 = require("./services/read-data");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield (0, read_data_1.getData)();
    const dataToSend = info.data.map(document => document.data);
    res.send({ transformedData: dataToSend });
}));
app.get('/post-data', post_data_1.default);
app.get('/get-data', get_data_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map