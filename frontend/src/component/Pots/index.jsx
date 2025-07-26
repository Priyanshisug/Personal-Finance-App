import { useEffect, useState } from "react";
import Badge from "../Badge";
import "./Pots.css"

const Pots = () => {

    const[potsData, setPotsData] = useState([]);
    const[totalSaved, setTotalSaved] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/api/pots`)
        .then((res) => res.json())
        .then((data) => {
            setPotsData(data);
            const total = data.reduce((sum, pot) => sum + pot.pots, 0);
            setTotalSaved(total);
        })
        .catch((error) => console.log(error));
    }, []);

    return(
        <div className="pots-card">
             <div className="pots-header">
        <h2 className="pots-heading">Pots</h2>
        <span className="pots-details-link">See Details</span>
      </div>
            <div className="pots-main">
            <div className="pots-total">
                <h4>Total Saved</h4>
                <h2>${totalSaved}</h2>
            </div>
            <div className="pots-badges">
                {potsData.map((pot) => (
                    <Badge
                    key={pot.pot_name}
                    title={pot.pot_name}
                    value={pot.pots}
                    color={pot.color}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}
export default Pots;