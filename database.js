"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
function getConnection() {
    return promise_1.default.createConnection({
        host: "52.20.141.152",
        user: "villo",
        password: "jineo789",
        port: 3306,
        database: "dbProyect",
    });
}
exports.getConnection = getConnection;
