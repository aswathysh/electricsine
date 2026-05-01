import Razorpay from 'razorpay';

const razorpayInstance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,  // Add your Razorpay Key ID here
//   key_secret: process.env.RAZORPAY_KEY_SECRET,  // Add your Razorpay Key Secret here
key_id: "rzp_live_qcxMgOYqlU0Aez",
  key_secret: "M0Yw2DaM67Aog3PDDPMRXEcu"
});
// console.log("razorpayInstance",razorpayInstance)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create an order for the Razorpay payment gateway
      const options = {
        amount: req.body.amount * 100, // Convert amount to paise (1 INR = 100 paise)
        currency: "INR",
        receipt: `receipt_${new Date().getTime()}`,
        payment_capture: 1, // 1 means automatic capture of payment
      };

      const order = await razorpayInstance.orders.create(options);

      res.status(200).json({ id: order.id });
    } catch (error) {
      res.status(500).json({ error: "Error creating Razorpay order" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
