
import { useEffect, useState } from "react";
import PotBox from "../PotBox/PotBox";
import './PotPage.css';

const PotsPage = () => {
    const [potsDetail, setPotsDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/pot_detail")
      .then((res) => res.json())
      .then((data) => setPotsDetail(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pots-page">
      <div className="pots-page-header">
        <h2>Pots</h2>
        <button className="add-pot-btn">+ Add New Pot</button>
      </div>
      <div className="pots-grid">
        {potsDetail.map((pot) => (
          <PotBox
            key={pot.pot_name}
            pot_name={pot.pot_name}
            money_saved={pot.money_saved}
            pots={pot.pots}
            color={pot.color}
          />
        ))}
      </div>
    </div>
  );
};

export default PotsPage;