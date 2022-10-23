import React, { useReducer, useState, useEffect } from "react";
import CreaditCard from "../Components/CreaditCard";
import { useNavigate } from "react-router-dom";
import paymentImg from "../Images/paymentImg.png";
import payment from "../Pages/payment.module.css";
import { useSelector } from "react-redux";
import { Box } from '@chakra-ui/react'
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "cardNo": {
      return {
        ...state,
        cardNo: payload,
      };
    }

    case "month": {
      return {
        ...state,
        month: payload,
      };
    }

    case "year": {
      return {
        ...state,
        year: payload,
      };
    }

    case "cardOwner": {
      return {
        ...state,
        cardOwner: payload,
      };
    }

    case "cvv": {
      return {
        ...state,
        cvv: payload,
      };
    }

    default:
      return state;
  }
};

const initState = {
  cardNo: "",
  month: "mm",
  year: "year",
  cardOwner: "",
  cvv: "",
};
const Payment = () => {
  const [state, setter] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.reducer.cart);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (cart.length) {
      const total = cart.reduce((acc, elem) => {
        return acc + +elem.price;
      }, 0);
      setAmount(total);
    }
  }, [cart.length]);
  console.log(cart);

  const successPage = (e) => {
    e.preventDefault();

    console.log(state.cardNo.length, "state");

    if (
      state.year > 2021 &&
      state.cardNo.length == 16 &&
      state.month.length == 2 &&
      state.year.length == 4 &&
      state.cvv.length == 3
    ) {
      navigate("/thankyou", { replace: true });
    } else {
      alert("Please fill correct Details");
    }
  };
  return (
    <>
      <div className={payment.mainDiv}>
        <div className={payment.BigBox}>
          <div className={payment.leftDiv}>
            <div>
              <p>Saved Payment</p>
            </div>
            <div>
              <p>Paytm</p>

              <div className={payment.leftBox1}>
                <img
                  src="https://www.licious.in/img/rebranding/offer.svg"
                  alt=""
                />{" "}
                <p>Offers available</p>
              </div>
            </div>
            <div>
              <p>Amazon Pay</p>
            </div>
            <div>
              <p>Pay Using UPI</p>
            </div>
            <div>
              <p>Creadit Debit Cards</p>
            </div>
            <div>
              <p>CRED pay</p>

              <div className={payment.leftBox1}>
                <img
                  src="https://www.licious.in/img/rebranding/offer.svg"
                  alt=""
                />{" "}
                <span>Offers available</span>
              </div>
            </div>
            <div>
              <p>Sodexo Food Cards</p>
            </div>
            <div>
              <p>Net Banking</p>
            </div>
            <div>
              <p>Others wallets</p>
            </div>
            <div>
              <p>Cash on Delivery</p>
            </div>
            <div>
              <p>Pay online on Delivery</p>
            </div>
          </div>

          {/* div 2  */}

          <div className={payment.midileDiv}>
            <div>
            <div>
              <h2>New Card</h2>
            </div>

            <Box display={{
                base: "none", md: 'block'
              }}>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>20% off | ICICI Credit Cards</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  20% off upto 200 on ICICI Credit Cards | Minimum order value
                  600 | Valid once per user | Valid on all days between 18-24
                  July
                </p>
              </div>
            </Box>

            <Box display={{
                base: "none", md: 'block'
              }}>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>Up to 20% cashback on Simpl</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  20% cashback upto 250 on Simpl | Minimum order value 150 |
                  Valid once per user | Valid on all days between 18-24 July |
                  Valid only on first Licious order using Simpl
                </p>
              </div>
            </Box>

            <Box display={{
                base: "none", md: 'block'
              }}>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>25% off | Slice Cards</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  25% off upto 200 on slice card | Minimum order value 600 |
                  Valid once per user | Valid from Mon-Wed
                </p>
              </div>
            </Box>

            <Box display={{
                base: "none", md: 'block'
              }}>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>20% off | Bank of Baroda Credit Cards</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  20% off upto 200 on BoB Credit Cards | Minimum order value 600
                  | Valid twice per user | Valid everyday
                </p>
              </div>
            </Box>

            <div>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>10% off | Kotak Credit and Debit card</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  10% off upto 175 on all Kotak Cards | Minimum order value 750
                  | Valid four times per user | Valid from Thu to Fri
                </p>
              </div>
            </div>

            <Box  display={{
                base: "none", md: 'none', lg: '56px'
              }}>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>10% off | HSBC Credit Card</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  10% off upto 150 on HSBC Credit Cards | Minimum order value
                  600 | Valid once per user | Valid from Mon to Fri
                </p>
              </div>
            </Box>

            <Box  display={{
                base: "none", md: 'none', lg: '56px'
              }}>
              <div className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>Cashback upto Rs.100 on CRED pay</spen>
              </div>
              <div className={payment.midileBox1}>
                <p>
                  25-500 Cashback on Minimum Order Value 399 and 50-750 cashback
                  on Minimum Order Value 750 on Paytm wallet | Valid twice per
                  user
                </p>
              </div>
            </Box>

            <div>
              <Box  display={{
                base: "none", md: 'none', lg: '56px'
              }} className={payment.midileBox}>
                <img src="https://www.licious.in/img/rebranding/offer.svg" />
                <spen>Paytm Wallet | Up to 750 cashback</spen>
              </Box>
              <Box  display={{
                base: "none", md: 'none', lg: '56px'
              }} className={payment.midileBox1}>
                <p>
                  20% off upto 200 on ICICI Credit Cards | Minimum order value
                  600 | Valid once per user | Valid on all days between 18-24
                  July
                </p>
              </Box>
</div>
              {/* creadit card section */}

              <Box className={payment.creditDiv}
               >
                <form action="">
                  <input
                    type="number"
                    placeholder="Enter Card No"
                    value={state.cardNo}
                    onChange={(e) =>
                      setter({ type: "cardNo", payload: e.target.value })
                    }
                  />
                  <br />
                  <input
                    type="number"
                    placeholder="MM"
                    value={state.month}
                    onChange={(e) =>
                      setter({ type: "month", payload: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="YYYY"
                    value={state.year}
                    onChange={(e) =>
                      setter({ type: "year", payload: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Enter CVV"
                    value={state.cvv}
                    onChange={(e) =>
                      setter({ type: "cvv", payload: e.target.value })
                    }
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Name on card."
                    value={state.cardOwner}
                    onChange={(e) =>
                      setter({ type: "cardOwner", payload: e.target.value })
                    }
                  />
                  <br />
                  <input type="checkbox" />{" "}
                  <spen>Securely save card for future use</spen>
                  <br />
                  <button onClick={(e) => successPage(e)}>
                    Pay &#8377;{amount + 39}
                  </button>
                </form>
              </Box>
            </div>
          </div>

          {/* div3 */}
          <div>
            <div>
              <img src={paymentImg} alt="" />
            </div>

            <div className={payment.rightBox}>
              <p>Have a coupon/referral code? Apply</p>
              <input placeholder="Type your Code Here" type={"text"} />
              <button>APPLAY</button>
            </div>

            <div className={payment.downBox}>
              <h2>Bill Details</h2>
              <div>
                <p>Subtotal</p>
                <p>{amount}</p>
              </div>
              <div>
                <p>Delivery Charge</p>
                <p>39</p>
              </div>
              <div>
                <p>Discount</p>
                <p>0</p>
              </div>
              <div>
                <p>Licious Wallet</p>
                <p>0</p>
              </div>
              <div>
                <p>Total</p>
                <p>{amount + 39}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
