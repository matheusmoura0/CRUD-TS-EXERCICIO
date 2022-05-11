import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middlewares';

const booksController = new BooksController();

const router = Router();

const booksSlashId = '/books/:id';

router.get(booksSlashId, booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;