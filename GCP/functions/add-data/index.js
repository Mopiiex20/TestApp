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
exports.addSession = void 0;
const firestore_1 = require("@google-cloud/firestore");
const addSession = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body.data) {
        response.status(401).send('Not enough data provided');
    }
    const { data } = request.body;
    const firestore = new firestore_1.Firestore({ databaseId: '(default)' });
    const result = yield firestore.collection('initial').add({
        data
    });
    response.status(200).send({ id: result.id });
});
exports.addSession = addSession;
