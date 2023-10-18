import React from "react";
import "./index.css";
import { BarChart, Bar, XAxis } from "recharts";

function Earning() {
  const data = [
    { month: "Jan", earnings: 1000 },
    { month: "Feb", earnings: 1200 },
    { month: "Mar", earnings: 800 },
    { month: "Apr", earnings: 1500 },
    { month: "May", earnings: 2000 },
    { month: "Jun", earnings: 1800 },
    { month: "Jul", earnings: 2100 },
    { month: "Aug", earnings: 2700, active: true },
    { month: "Sep", earnings: 2500 },
    { month: "Oct", earnings: 2200 },
    { month: "Nov", earnings: 1800 },
    { month: "Dec", earnings: 2000 },
  ];

  return (
    <div className="earning">
      <div>
        <h4>Overview</h4>
        <p5 className="mon">Monthly Earning</p5>
      </div>
      <BarChart
        width={900}
        height={275}
        className="barChart"
        data={data}
        margin={{ right: 0, left: 0, bootom: 10 }}
      >
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ dy: 10 }}
        />
        <Bar
          dataKey="earnings"
          shape={(props) => (
            <rect
              rx={10}
              ry={10}
              {...props}
              opacity={props.payload.active ? 0.7 : 0.2}
            />
          )}
          className="rechartsBar"
        />
      </BarChart>
    </div>
  );
}

export default Earning;
