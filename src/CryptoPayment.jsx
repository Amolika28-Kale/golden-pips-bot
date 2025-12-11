import React from "react";
import { useNavigate } from "react-router-dom";

export default function CryptoPayment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-slate-800">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-full"
      >
        ← Back
      </button>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Crypto Payment Details (USDT)
        </h2>

        <p className="text-center text-sm text-gray-600 mb-6">
          Pay via BEP20 or TRC20 using QR or wallet address.
        </p>

        {/* BEP20 */}
        <div className="mb-10">
          <div className="font-semibold mb-2 text-yellow-700">BEP20 (BSC)</div>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0xa91D8Ba3029FC14907cb4bEE60763869f0eD88f7`}
            className="w-40 h-40 mx-auto mb-3"
          />
          <div className="text-xs break-all bg-gray-100 p-3 rounded">
            0xa91D8Ba3029FC14907cb4bEE60763869f0eD88f7
          </div>
        </div>

        {/* TRC20 */}
        <div className="mb-10">
          <div className="font-semibold mb-2 text-red-700">TRC20 (TRON)</div>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TGTmCXghBxNAkUxeL7hnDPjQiQicKG26v2`}
            className="w-40 h-40 mx-auto mb-3"
          />
          <div className="text-xs break-all bg-gray-100 p-3 rounded">
            TGTmCXghBxNAkUxeL7hnDPjQiQicKG26v2
          </div>
        </div>
      </div>
    </div>
  );
}
