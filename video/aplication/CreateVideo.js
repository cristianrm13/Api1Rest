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
exports.PostVideos = void 0;
class PostVideos {
    constructor(addVideo) {
        this.addVideo = addVideo;
    }
    createVideos(Id, Title, Duration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videos = yield this.addVideo.addVideos(Id, Title, Duration);
                if (!videos) {
                    throw new Error(`video ${Title} no se agregado`);
                }
                return videos;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.PostVideos = PostVideos;
