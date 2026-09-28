import { useState } from "react";
import "./index.css";
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyinfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`,
      }}
    >
      <div className="app-overlay"></div>
      
      <div className="card-container">
        <div className="converter-card">
          
          <div className="live-status">
            <span className="status-dot"></span>
            LIVE EXCHANGE RATES
          </div>
          
          <h1 className="app-title">Currency<br/>Converter</h1>
          <div className="app-divider"></div>

          <form
            className="converter-form"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="input-box-wrapper">
              <InputBox 
                label="From" 
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="swap-btn-wrapper">
              <button
                type="button"
                className="swap-btn"
                onClick={swap}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
              </button>
            </div>
            
            <div className="input-box-wrapper">
              <InputBox 
                label="To" 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisabled={true}
              />
            </div>
            
            <button
              type="submit"
              className="submit-btn"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
