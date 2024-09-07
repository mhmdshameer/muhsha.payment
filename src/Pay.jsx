import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51Pw2n1F9L55mvRDIgX6jV7ugFmn7IIx18vIlHIGeyhpkYemIvtwYCmGCTd8GTw9gdbg9F03xxzCXCgKtg3kGlDNN00aBVNNvTy";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Backers' Shop"
        image="https://cdn.vectorstock.com/i/1000v/60/44/letter-b-crown-logo-vector-25576044.jpg"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
