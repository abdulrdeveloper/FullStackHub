function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    className = "",
    amountDisabled = false,
}) {
    return (
        <div className={`input-box ${className}`}>
            <div className="w-1/2">
                <label className="input-label">
                    {label}
                </label>

                <input
                    className="amount-input"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) =>  onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-col items-end">
                <p className="currency-type-label">Currency Type</p>
                <select 
                    className="currency-select"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
