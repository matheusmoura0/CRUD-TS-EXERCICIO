"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middlewares_1 = __importDefault(require("../middlewares/books.middlewares"));
const booksController = new books_controller_1.default();
const router = (0, express_1.Router)();
const booksSlashId = '/books/:id';
router.get(booksSlashId, booksController.getById);
router.post('/books/', books_middlewares_1.default, booksController.create);
router.put(booksSlashId, books_middlewares_1.default, booksController.update);
router.delete(booksSlashId, booksController.remove);
exports.default = router;
