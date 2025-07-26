import './PotBox.css';

const PotBox = ({ pot_name, money_saved, pots, color }) => {
  const percentage = Math.min((money_saved / pots) * 100, 100);

  return (
    <div className="potbox">
      <h3>{pot_name}</h3>
      <p>Total Saved</p>
      <h2>₹{money_saved}</h2>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%`, background: color }}
        ></div>
      </div>
      <div className="progress-info">
        <span>{Math.round(percentage)}%</span>
        <span>Target of ₹{pots}</span>
      </div>
      <div className="potbox-actions">
        <button>+ Add Money</button>
        <button>Withdraw</button>
      </div>
    </div>
  );
};

export default PotBox;
