import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#A000FF', '#FF9304', '#FDE006'];

const CustomPieChart = ({ data }) => {

    // Custom formatter for the legend, applying white color to the text
    const renderLegend = (value) => {
        return <span style={{ color: 'white', fontSize: "14px" }}>{value}</span>;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <Tooltip formatter={(value, name) => [`₹${value}`, name]} />

                <Legend iconType="rect" verticalAlign="bottom" formatter={renderLegend} />
            </PieChart>
        </ResponsiveContainer >
    )
}

export default CustomPieChart;
