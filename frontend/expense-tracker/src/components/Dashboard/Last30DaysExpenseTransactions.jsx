import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Cards/Charts/CustomBarChart';

const Last30DaysExpenseTransactions = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect( () => {
        console.log('last30days data: ', data);
        
        const result = prepareExpenseBarChartData(data);

        console.log('RESULT*: ', result);
        
        
        setChartData(result);

        return () => {}; 
    }, [data]);

  return (
    <div className='card col-span-1'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Last 30 Days Expenses</h5>
        </div>

        <CustomBarChart data={chartData} />
    </div>
  )
}

export default Last30DaysExpenseTransactions