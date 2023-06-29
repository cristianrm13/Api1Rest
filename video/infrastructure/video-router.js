"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const videoRouter = express_1.default.Router();
exports.videoRouter = videoRouter;
videoRouter.get("/", dependencies_1.VideoController.getAllVideos.bind(dependencies_1.VideoController));
videoRouter.post("/", dependencies_2.PostVideoController.createVideos.bind(dependencies_2.PostVideoController));
