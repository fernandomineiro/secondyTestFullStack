import express from 'express';
import {
    createProperty,
    getProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
} from '../controllers/propertyController';
import { authenticate } from '../controllers/authController';

const router = express.Router();

// Rotas CRUD para imóveis
router.post('/', authenticate, createProperty);
router.get('/', getProperties); 
router.get('/:id', getPropertyById); 
router.put('/:id', authenticate, updateProperty); 
router.delete('/:id', authenticate, deleteProperty); 

export default router;