const PaymentMethod = require('../models/PaymentMethod');

exports.createPaymentMethod = async (req, res) => {
  const { user_id, payment_method_name } = req.body;

  try {
    const paymentMethod = new PaymentMethod({
      user_id,
      payment_method_name,
    });

    const savedPaymentMethod = await paymentMethod.save();
    res.status(201).json(savedPaymentMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find({ user_id: req.user.id });
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.id);

    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    if (paymentMethod.user_id.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedPaymentMethod = await PaymentMethod.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedPaymentMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.id);

    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    if (paymentMethod.user_id.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await paymentMethod.remove();
    res.status(200).json({ message: 'Payment method removed' });
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};