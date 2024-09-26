import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#A000FF', '#FF9304', '#FDE006'];

const CustomPieChart = ({ data }) => {

    // Custom formatter for the legend with white text
    const renderLegend = (value) => {
        return <span style={{ color: 'white', fontSize: "14px" }}>{value}</span>;
    };

    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: 0 }}>
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} style={{ margin: "10px", display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: 32,  // Rectangle width
                                height: 12,  // Rectangle height
                                backgroundColor: entry.color,
                                marginRight: 8,
                            }}
                        />
                        <span style={{ color: 'white', fontSize: '14px' }}>{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <Tooltip formatter={(value, name) => [`₹${value}`, name]} />

                <Legend content={renderCustomLegend} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;
