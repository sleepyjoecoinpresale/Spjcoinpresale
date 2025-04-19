import { useState } from "react";

export default function PresalePage() {
  const [bnbAmount, setBnbAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [referral, setReferral] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const goalBNB = 20;
  const currentBNB = 6.4;
  const progressPercent = Math.min((currentBNB / goalBNB) * 100, 100);

  const handleSubmit = () => {
    const mailto = `mailto:Sleepyjoecoin.presale@gmail.com?subject=Presale%20Purchase&body=Wallet%20Address:%20${walletAddress}%0AAmount%20Sent:%20${bnbAmount}%20BNB%0AReferral:%20${referral}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-4 text-center">
        Sleepy Joe Coin Presale
      </h1>

      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-2xl p-4">
        <p className="text-lg mb-1 font-medium">Send BNB to:</p>
        <p className="text-sm break-all mb-4 font-mono text-green-400">
          0x8CB085A285c2fD31212aF79704967C9D380A9dC1
        </p>

        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: progressPercent + "%" }}
          ></div>
        </div>
        <p className="text-xs mb-6 text-center text-gray-300">
          {currentBNB} / {goalBNB} BNB Raised
        </p>

        <input
          type="text"
          placeholder="Your Wallet Address"
          className="mb-2 p-2 w-full rounded bg-gray-700 text-white"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount Sent (BNB)"
          className="mb-2 p-2 w-full rounded bg-gray-700 text-white"
          value={bnbAmount}
          onChange={(e) => setBnbAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Referral Code (optional)"
          className="mb-4 p-2 w-full rounded bg-gray-700 text-white"
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
        />

        <button
          className="w-full bg-green-600 hover:bg-green-500 py-2 rounded text-white font-bold"
          onClick={handleSubmit}
        >
          Submit Purchase Info
        </button>

        {submitted && (
          <p className="text-green-400 mt-4 text-center">
            Info ready to send via email.
          </p>
        )}
      </div>

      <div className="mt-10 text-sm text-center">
        <p>
          Telegram Channel:{" "}
          <a
            href="https://t.me/Sleepy_joe_coin"
            className="text-blue-400 underline"
          >
            @Sleepy_joe_coin
          </a>
        </p>
        <p>
          Telegram Chat:{" "}
          <a
            href="https://t.me/Sleepy_JoeCoin"
            className="text-blue-400 underline"
          >
            @Sleepy_JoeCoin
          </a>
        </p>
        <p className="mt-3 text-gray-400 text-xs">
          No smart contract involved. Manual BNB transfer required.
        </p>
      </div>
    </div>
  );
}