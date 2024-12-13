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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create user
function createUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ email, firstName, lastName, password, }) {
        const res = yield prisma.user.create({
            // specify the data in the data obj
            data: {
                firstName,
                lastName,
                email,
                password,
            },
            // specify what you want to select and return
            select: {
                id: true,
                password: true,
            },
        });
        console.log(res);
    });
}
// createUser({
//   firstName: "hitler",
//   lastName: "sharma",
//   email: "hitler5@gmail.com",
//   password: "hitler1123",
// });
// update user
function updateUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ email, firstName, lastName }) {
        const res = yield prisma.user.update({
            data: {
                firstName,
                lastName,
            },
            where: {
                email
            },
        });
        console.log(res);
    });
}
// updateUser({
//   email : "hitler@gmail.com",
//   firstName : "swastik",
//   lastName : "Modi"
// })
// get user detail
function getUser(firstName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            where: {
                firstName
            },
        });
        console.log(res);
    });
}
getUser("hitler");
