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
  ReferenceDot 
} from 'recharts';

interface RemunerationChartProps {
  type: 'attack' | 'defense';
  currentAchievement?: number;
  currentMultiplier?: number;
}

export default function RemunerationChart({ type, currentAchievement, currentMultiplier }: RemunerationChartProps) {
  const data = [
    { name: '70%', value: 70, attack: 0.5, defense: 0.5 },
    { name: '80%', value: 80, attack: 1.0, defense: 0.7 },
    { name: '90%', value: 90, attack: 1.5, defense: 0.9 },
    { name: '100%', value: 100, attack: 2.0, defense: 1.1 },
    { name: '110%', value: 110, attack: 2.5, defense: 1.3 },
    { name: '120%', value: 120, attack: 3.0, defense: 1.5 },
  ];

  const color = type === 'attack' ? '#3b82f6' : '#10b981';
  const label = type === 'attack' ? 'Múltiplo Salarial (Ataque)' : 'Múltiplo Salarial (Defesa)';

  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
            domain={[0, 3.5]}
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
            isAnimationActive={false}
          />
          {currentAchievement !== undefined && currentMultiplier !== undefined && (
            <ReferenceDot
              x={`${currentAchievement}%`}
              y={currentMultiplier}
              r={6}
              fill="#ef4444"
              stroke="#fff"
              strokeWidth={2}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
