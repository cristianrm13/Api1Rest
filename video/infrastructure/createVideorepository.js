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
exports.InMemoryVideoRepository = void 0;
const mysql_1 = require("../../mysql");
class InMemoryVideoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entered  InMemoryVideoRepository getAll");
            const connection = yield (0, mysql_1.createPool)();
            const result = yield connection.query("SELECT * FROM Videos");
            if (result.length === 0) {
                return [];
            }
            const video = result[0];
            console.log(`prueba ${JSON.stringify(video)}`);
            return video.map((videos) => {
                return new videos(videos.id, videos.title, videos.duration);
            });
        });
    }
}
exports.InMemoryVideoRepository = InMemoryVideoRepository;
