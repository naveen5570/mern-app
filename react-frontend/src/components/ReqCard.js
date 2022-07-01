import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReqCard = (props) => {
    const  reqq  = props.reqq;

    return(
        <div className="card-container col-md-12">
           <div className="desc list_container">
                <h1 className="list_title">
                    <Link to={`/view-request/${reqq._id}`}>
                        { reqq.repair_explanation }
                    </Link>
                    
                </h1>
                <p>{ reqq.address_1 } { reqq.address_2 } { reqq.state_or_province } { reqq.zipcode } { reqq.state_or_province } { reqq.country }</p><p>{ reqq.createdAt }</p>
                <Link to={`/request-apply/${reqq._id}`} className="btn btn-info btn-right">Apply</Link><span className="btn-right">&nbsp;</span><Link to={`/view-request/${reqq._id}`} className="btn btn-info btn-right">
                        View
                    </Link>
            </div>

        </div>
    )
};

export default ReqCard;