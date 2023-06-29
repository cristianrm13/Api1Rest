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
exports.AddVideoRepository = void 0;
const video_1 = require("../domain/video");
const amqplib_1 = __importDefault(require("amqplib"));
const rabbitSettings = {
    protocol: "amqp",
    hostname: "3.215.52.131",
    port: 5672,
    username: "David",
    password: "cereza23",
};
class AddVideoRepository {
    addVideos(Id, Title, Duration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const video = new video_1.Videos(Id, Title, Duration);
                const queue = "Video";
                const message = Title;
                console.log(message);
                try {
                    const conn = yield amqplib_1.default.connect(rabbitSettings);
                    console.log('Conexión exitosa');
                    const channel = yield conn.createChannel();
                    console.log('Canal creado exitosamente');
                    const res = yield channel.assertQueue(queue);
                    console.log('Cola creada exitosamente', res);
                    // Insertar el mensaje en la cola
                    yield channel.sendToQueue(queue, Buffer.from(message));
                    console.log(`Mensaje insertado en la cola: ${message}`);
                }
                catch (error) {
                    console.log(error);
                    throw error;
                }
                return video;
            }
            catch (error) {
                throw new Error(`No se pudo agregar la el video: ${error}`);
            }
            finally {
            }
        });
    }
}
exports.AddVideoRepository = AddVideoRepository;
