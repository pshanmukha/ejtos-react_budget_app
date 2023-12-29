import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

const Budget = () => {
    const { currency,totalExpenses, budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if(event.target.value < totalExpenses) {
            alert('You cannot reduce the budget value lower than spending');
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
