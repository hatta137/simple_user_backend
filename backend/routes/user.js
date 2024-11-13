import express from 'express';
import { useJWT } from "../utils/jwt_utils.js";

import {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/user.js';

const router = express.Router();

// User erstellen
router.post('/', register);

// User einloggen
router.post("/login", login);

// Alle Users abrufen
router.get('/', useJWT(), getAllUsers);

// Einen User nach ID abrufen
router.get('/:id', useJWT(), getUserById);

// Einen User nach ID aktualisieren
router.put('/:id', useJWT(), updateUser);

// Einen User nach ID löschen
router.delete('/:id', useJWT(), deleteUser);

export default router;
