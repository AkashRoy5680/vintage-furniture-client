
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';


const Recharts = () => {
    const[chart,setChart]=useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
          .then((res) => res.json())
          .then((data) => setChart(data));
      }, []);
    return (
        
<div className='container '>
<div className='row d-flex'>
<div className='col-sm-6'>
<h1 className='text-center mt-3'> PieChart</h1>
<ResponsiveContainer height={400} width="95%">
<PieChart width={730} height={250}>
  <Pie  data={chart} dataKey="quantity" nameKey="price" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie  data={chart} dataKey="quantity" nameKey="soldItem" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  
</PieChart>
</ResponsiveContainer>
</div>

<div className='col-sm-6'>
<h1 className='text-center m-2'> BarChart</h1>
<ResponsiveContainer height={400} width="95%">
<BarChart width={500} height={250} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
<Tooltip/>
  <Legend />
  <Bar dataKey="price" fill="#eb9834" />
  <Bar dataKey="quantity" fill="#abeb34" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
    );
};

export default Recharts;