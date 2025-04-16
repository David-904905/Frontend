"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://jsonplaceholder.typicode.com/todos/1";
const fetchData = async () => {
    try {
        const response = await axios_1.default.get(url);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error("Axios Error", error.message);
            if (error.response) {
                console.log("Status: ", error.response.status);
                console.log("Data: ", error.response.data);
            }
        }
        else {
            console.error("Error", error.message);
        }
    }
};
fetchData();
