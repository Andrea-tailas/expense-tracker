const express = require('express');
const router = express.Router();
const paymentMethodController = require('../controllers/paymentMethodController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, paymentMethodController.createPaymentMethod);
router.get('/', authenticateToken, paymentMethodController.getPaymentMethods);
router.put('/:id', authenticateToken, paymentMethodController.updatePaymentMethod);
router.delete('/:id', authenticateToken, paymentMethodController.deletePaymentMethod);

module.exports = router;
