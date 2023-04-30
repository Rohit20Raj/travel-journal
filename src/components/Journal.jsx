export default function Journal(props){
    return (
        <div className="journal">
            <img src={`/images/${props.item.coverImg}`} className="coverImg"/>
            <div className="details">
                <div className="location">
                    <div>
                       <img src="/images/geo-alt-fill.svg"/> <small>{props.item.location}</small>
                    </div>
                    <div>
                        <small><a href={props.item.maps} target="_blank">View on map</a></small>
                    </div>
                </div>
                <div className="name">
                    {props.item.name}
                </div>
                <div className="date">
                        <small><b>{props.item.startDate} - {props.item.endDate}</b></small>
                </div>
                <div className="desc">
                        {props.item.desc}
                </div>
            </div>
        </div>
    )
}