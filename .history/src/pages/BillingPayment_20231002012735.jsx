import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faMoneyBill,
  faCheckCircle,
  faInfoCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/BillingPayment.css';

const BillingPayment = () => {
  const [paymentStatus, setPaymentStatus] = useState('initial');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const simulatePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      if (
        paymentData.cardNumber &&
        paymentData.cardHolder &&
        paymentData.expirationDate &&
        paymentData.cvv
      ) {
        setPaymentStatus('completed');
      } else {
        setPaymentStatus('failed');
      }
    }, 2000);
  };

  const resetPaymentStatus = () => {
    setPaymentStatus('initial');
    setPaymentData({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Billing and Payment</h2>

      <div className="user-info">
        <h3 className="text-md text-gray-800 font-semibold mb-2">User Information</h3>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-800 font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border rounded-md py-2 px-3"
            value={userInfo.firstName}
            onChange={handleUserInfoChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-800 font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border rounded-md py-2 px-3"
            value={userInfo.lastName}
            onChange={handleUserInfoChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md py-2 px-3"
            value={userInfo.email}
            onChange={handleUserInfoChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-800 font-semibold">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            className="w-full border rounded-md py-2 px-3 h-20"
            value={userInfo.address}
            onChange={handleUserInfoChange}
          />
        </div>
      </div>

      <div className="payment-status mt-4">
        {paymentStatus === 'initial' && (
          <div className="payment-form">
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-800 font-semibold">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full border rounded-md py-2 px-3"
                value={paymentData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cardHolder" className="block text-gray-800 font-semibold">
                Card Holder
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                className="w-full border rounded-md py-2 px-3"
                value={paymentData.cardHolder}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expirationDate" className="block text-gray-800 font-semibold">
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                className="w-full border rounded-md py-2 px-3"
                value={paymentData.expirationDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-800 font-semibold">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="w-full border rounded-md py-2 px-3"
                value={paymentData.cvv}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="bg-blue-500 text-gray-800 py-2 px-4 rounded-md"
              onClick={simulatePayment}
            >
              Process Payment
            </button>
          </div>
        )}

        {paymentStatus === 'processing' && (
          <div className="payment-processing">
            <FontAwesomeIcon icon={faCreditCard} className="payment-icon" />
            <p className="payment-text">Processing Payment...</p>
          </div>
        )}

        {paymentStatus === 'completed' && (
          <div className="payment-completed">
            <FontAwesomeIcon icon={faCheckCircle} className="payment-icon success-icon" />
            <p className="payment-text">Payment Completed</p>
            <button
              className="bg-blue-500 text-gray-800 py-2 px-4 rounded-md mt-4"
              onClick={resetPaymentStatus}
            >
              Make Another Payment
            </button>
          </div>
        )}

        {paymentStatus === 'failed' && (
          <div className="payment-failed">
            <FontAwesomeIcon icon={faMoneyBill} className="payment-icon error-icon" />
            <p className="payment-text">Payment Failed</p>
            <button
              className="bg-blue-500 text-gray-800 py-2 px-4 rounded-md mt-4"
              onClick={resetPaymentStatus}
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {paymentStatus === 'completed' && (
        <div className="payment-details mt-4">
          <h3 className="text-md text-gray-800 font-semibold">Payment Details</h3>
          <div className="mt-2">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <p className="user-info">
              {userInfo.firstName} {userInfo.lastName}
              <br />
              {userInfo.email}
              <br />
              {userInfo.address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPayment;
