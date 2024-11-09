import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1715933514584.png" alt="Paytm Logo" className="w-40 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="mx-4 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Payment Options</h4>
            <ul className="text-gray-400">
              <li>Credit Card</li>
              <li>Debit Card</li>
              <li>Net Banking</li>
              <li>UPI Payments</li>
              <li>Wallets</li>
            </ul>
          </div>
          <div className="mx-4 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Customer Support</h4>
            <ul className="text-gray-400">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="mx-4 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500">&copy; 2024 CashFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

