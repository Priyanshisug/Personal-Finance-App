import './Badge.css'

const Badge =({title, value, color}) => {
   return (
    <div className="badge">
        <span className="badge-color" style={{background:color}}></span>
         <div className="badge-content">
        <div className="badge-title">{title}</div>
        <div className="badge-value">${value}</div>
      </div>
    </div>
   );
   
};
export default Badge;