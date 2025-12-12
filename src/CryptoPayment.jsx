import React from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardCopy, ArrowLeft, Send } from 'lucide-react';

// Helper function to handle copying the address
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Wallet address copied to clipboard!");
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
};

export default function CryptoPayment() {
  const navigate = useNavigate();

  // Contact & Wallet Info (UPDATED WhatsApp Number)
  const CONTACT_INFO = {
    whatsappNumber: "+91 8689937319",
    callNumber: "+91 7350767410",
    email: "support@goldenpipsbot.com",
    wallets: {
      bep20: "0xa91D8Ba3029FC14907cb4bEE60763869f0eD88f7",
      trc20: "TGTmCXghBxNAkUxeL7hnDPjQiQicKG26v2"
    }
  };
  const whatsappUrlNumber = CONTACT_INFO.whatsappNumber.replace(/\D/g, "");

  return (
    // Adjusted padding: p-4 for mobile, sm:p-10 for larger screens
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10 text-slate-800">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 sm:mb-8 flex items-center gap-2 px-4 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg transition duration-300"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">

        {/* Header: text-2xl for mobile, sm:text-3xl for desktop */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-center text-indigo-700">
          🪙 Crypto Payment Details (USDT)
        </h2>
        <p className="text-center text-sm sm:text-md text-gray-500 mb-6 sm:mb-8">
          Securely complete your payment using BEP20 or TRC20 network.
        </p>

        {/* Wallet Options Grid: Stacks on mobile, 2 columns on medium+ screens */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* BEP20 Card */}
          <WalletCard
            network="BEP20"
            color="text-yellow-600"
            bgColor="bg-yellow-50"
            qrData={CONTACT_INFO.wallets.bep20}
            walletAddress={CONTACT_INFO.wallets.bep20}
            theme="light"
          />

          {/* TRC20 Card */}
          <WalletCard
            network="TRC20"
            color="text-red-600"
            bgColor="bg-red-50"
            qrData={CONTACT_INFO.wallets.trc20}
            walletAddress={CONTACT_INFO.wallets.trc20}
            theme="light"
          />

        </div>
        
        {/* Important Note Section */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg text-sm flex items-start gap-3 sm:gap-4 text-slate-800">
          <Send size={20} className="text-blue-500 mt-0.5 min-w-max" />
          <div>
            <strong className="text-blue-700">Important: Instant Activation</strong>
           <p className="text-gray-700 mt-1">
  After a successful transfer, <strong>please send a screenshot</strong> of the transaction details to our WhatsApp number for immediate service activation.
</p>

{/* Added Setup Time Note */}
<p className="text-gray-700 mt-2 font-semibold">
  ⏳ Setup Time: Minimum <span className="text-blue-700">24 hours</span> to Maximum <span className="text-blue-700">48 hours</span> after payment.
</p>

{/* Added Non-Refundable Note */}
<p className="text-red-600 mt-1 font-bold">
  ⚠️ Condition: Payment is strictly non-refundable.
</p>

            <a 
              href={`https://wa.me/${whatsappUrlNumber}?text=I%20have%20completed%20the%20USDT%20payment.%20Please%20activate%20my%20account.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-bold text-green-600 hover:text-green-500 transition duration-300 underline"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" className="w-5 h-5"/>
              {CONTACT_INFO.whatsappNumber} (Click to Chat)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

const WalletCard = ({ network, color, bgColor, qrData, walletAddress }) => (
  <div className={`p-5 sm:p-6 rounded-xl ${bgColor} shadow-md transition duration-300 hover:shadow-lg border border-gray-200`}>
    
    <h3 className={`text-xl font-bold mb-4 ${color}`}>
      {network}
    </h3>

    <div className="flex justify-center mb-4 sm:mb-5 p-3 bg-white rounded-lg border border-gray-300">
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrData}`}
        alt={`${network} QR Code`}
        className="w-36 h-36 sm:w-40 sm:h-40"
      />
    </div>

    <p className="text-center text-xs sm:text-sm text-gray-600 mb-2">
      Scan the QR code or copy the address:
    </p>

    <div className="flex items-center bg-gray-100 p-3 rounded-lg border border-gray-300">
      <div className="flex-1 text-xs break-all font-mono text-slate-800 select-all">
        {walletAddress}
      </div>
      <button 
        onClick={() => copyToClipboard(walletAddress)}
        className="ml-3 p-2 rounded-lg bg-white shadow-sm border border-gray-300 hover:bg-gray-200 transition duration-300"
        title="Copy Address"
      >
        <ClipboardCopy size={16} className={color} />
      </button>
    </div>

  </div>
);
