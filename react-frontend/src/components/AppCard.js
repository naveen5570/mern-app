import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReqCard = (props) => {
    const  reqq  = props.reqq;

    return(
        <div className="card-container col-md-12">
           <div className="desc list_container">
                <h1 className="list_title">
                    <Link to={`/view-professional/${reqq.professionaldetails.map(item => {return item._id})}`}>
                    {reqq.professionaldetails.map(item => {return <span>{item.name}</span>;})}
                    
                    </Link>
                    
                </h1>
                <p>Time Duration: {reqq.time_of_service}</p>
                <p>Charges: ${reqq.fees}</p>
                <Link to={`/hire/${reqq._id}`} className="btn btn-info btn-right">
                        Hire
                    </Link>
                <span className="btn-right">&nbsp;</span>
                <Link to={`/view-professional/${reqq.professionaldetails.map(item => {return item._id})}`} className="btn btn-info btn-right">
                        View
                    </Link>
            </div>

        </div>
    )
};

export default ReqCard;