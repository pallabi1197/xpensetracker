import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import styles from "../BarChart/BarChart.module.css";

const TinyBarChart = ({data}) => {
  return (
    <div className={styles.expenseCart}>
      <h2>Top Expenses</h2>
      <div className={styles.barWrapper}>
        <ResponsiveContainer width="100%" height="360">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" axisLine={false} hide={true} />
            <YAxis
              type="category"
              width={120}
              dataKey="name"
              axisLine={false} 
              tickLine={false}

            />
            <Bar dataKey="value" fill="#8884d8" barSize={25}  radius={[0, 25, 25, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TinyBarChart;