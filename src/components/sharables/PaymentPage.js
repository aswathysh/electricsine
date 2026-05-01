import { useEffect, useState } from "react";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
useEffect(()=>{
    alert("hii")
},[])
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    // Call your backend to create a Razorpay order
    const res = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 500 }), // Amount in INR
    });

    const data = await res.json();

    // Check if the order creation was successful
    if (data.id) {
      const razorpay = await loadRazorpay();

      if (!razorpay) {
        alert('Failed to load Razorpay SDK');
        setLoading(false);
        return;
      }

      // Open Razorpay Checkout with order details
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: 500 * 100, // Amount in paise
        currency: "INR",
        order_id: data.id,
        handler: function (response) {
          // Handle success
          alert('Payment successful: ' + response.razorpay_payment_id);
          setLoading(false);
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Error creating order');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Razorpay Payment Integration</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Loading...' : 'Pay with Razorpay'}
      </button>
    </div>
  );
};

export default PaymentPage;
