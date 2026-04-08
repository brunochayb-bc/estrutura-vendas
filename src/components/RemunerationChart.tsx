/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface RemunerationChartProps {
  type: 'attack' | 'defense';
}

export default function RemunerationChart({ type }: RemunerationChartProps) {
  const data = [
    { name: '70%', attack: 0.5, defense: 0.5 },
    { name: '80%', attack: 1.0, defense: 0.7 },
    { name: '90%', attack: 1.5, defense: 0.9 },
    { name: '100%', attack: 2.0, defense: 1.1 },
    { name: '110%', attack: 2.5, defense: 1.3 },
    { name: '120%', attack: 3.0, defense: 1.5 },
  ];

  const color = type === 'attack' ? '#3b82f6' : '#1e3a8a';
  const label = type === 'attack' ? 'Múltiplo Salarial (Ataque)' : 'Múltiplo Salarial (Defesa)';

  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#64748b' }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#64748b' }}
            unit="x"
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
            }}
          />
          <Line 
            type="monotone" 
            dataKey={type} 
            stroke={color} 
            strokeWidth={3} 
            dot={{ r: 4, fill: color, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6 }}
            name={label}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
