import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem=({id,description,note,amount,createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{note}</p>
        <p>Amount: {amount/100} $</p>
        <p>Created At: {moment(createdAt).format('MMMM do, YY')}</p>
    </div>
)

export default ExpenseListItem;