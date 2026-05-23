const express = require('express');
const router = express.Router();
const { sendContactEmail, sendEmail } = require('../utils/email');

// Newsletter subscribe
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email required' });

    // Admin ko notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL || process.env.FROM_EMAIL,
      subject: 'New Newsletter Subscription — Cobb Church Network',
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This person subscribed via the footer newsletter form.</p>
      `
    });

    // Subscriber ko confirmation
    await sendEmail({
      to: email,
      subject: "You're Subscribed — Cobb Church Network",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a2744; padding: 30px; text-align: center;">
            <h1 style="color: #d4a853; margin: 0;">Cobb Church Network</h1>
            <p style="color: #fff; margin: 5px 0;">Stronger Churches. Stronger Community.</p>
          </div>
          <div style="padding: 30px; background: #fff;">
            <h2>Thank you for subscribing!</h2>
            <p>You're now connected with Cobb Church Network. We'll keep you updated on events, resources, and ways to get involved.</p>
          </div>
          <div style="background: #1a2744; padding: 20px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">© 2026 Cobb Church Network. All Rights Reserved.</p>
          </div>
        </div>
      `
    });

    res.json({ success: true, message: 'Subscribed successfully' });
  } catch (err) {
    console.error('Subscribe error:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ success: false, message: 'Please fill all required fields' });
    await sendContactEmail({ name, email, subject: subject || 'General Inquiry', message });
    res.json({ success: true, message: 'Your message has been sent. We will be in touch soon.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;