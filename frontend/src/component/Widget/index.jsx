import './WidgetComponent.css';

const WidgetComponent =(props) => {
    return(
        <div className="widget">
        <h4 className="widget-heading">{props.heading}</h4>
        <h4 className="widget-value">${props.value}</h4>
        </div>
    )

}
export default WidgetComponent;

