/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51I3UIKEVKKjvCZZDoSJYE8HwnlIQIKyrlVYqMAlHzn5Zs85shXMRbv5A3qGwE7CBDurZ9YiRcWdDar4GkbRVArZ0005DR0sp4e'
);

export const bookTour = async tourId => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
