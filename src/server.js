const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51P18RM06lLtHBv9aECRDCJIYXgVvU7bYCXo7Oa6agq3nGCgu6gbok9GrbSDshlZBczLSvMeHg7NAoofYDHiUpxeK00uF5QlhMM');

const app = express();
const port = 3000; // Or any port you prefer

app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Convert price to cents
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: 'https://example.com/success', // Replace with your success URL
      cancel_url: 'https://example.com/cancel', // Replace with your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});