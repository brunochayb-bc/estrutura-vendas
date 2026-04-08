/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  DollarSign, 
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import RemunerationChart from './RemunerationChart';

interface TeamCardProps {
  team: {
    name: string;
    role: 'Ataque' | 'Defesa';
    headcount: number;
    functions: string[];
    kpis: string[];
    remuneration: {
      type: string;
      calculation: string;
      scale: string;
      multipliers: string;
    };
  };
}

export default function TeamCard({ team }: TeamCardProps) {
  const isAttack = team.role === 'Ataque';
  const Icon = isAttack ? Target : Shield;
  const accentColor = isAttack ? 'text-blue-600' : 'text-blue-900';
  const bgColor = isAttack ? 'bg-blue-50' : 'bg-blue-100';
  const borderColor = isAttack ? 'border-blue-200' : 'border-blue-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <Card className={`h-full border-2 ${borderColor} shadow-lg overflow-hidden flex flex-col`}>
        <div className={`h-2 w-full ${isAttack ? 'bg-blue-500' : 'bg-blue-900'}`} />
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl ${bgColor} ${accentColor}`}>
              <Icon size={28} />
            </div>
            <Badge variant={isAttack ? "default" : "secondary"} className="text-xs font-semibold px-3 py-1">
              {team.role.toUpperCase()}
            </Badge>
          </div>
          <div className="mt-4">
            <CardTitle className="text-2xl font-bold text-slate-900">{team.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <Users size={14} />
              <span>Headcount: ~{team.headcount} {isAttack ? 'Executivos' : 'Pessoas'}</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex-grow space-y-6">
          {/* Functions Section */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <Zap size={16} className={accentColor} />
              Funções Principais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {team.functions.map((func, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <CheckCircle2 size={14} className={accentColor} />
                  <span>{func}</span>
                </div>
              ))}
            </div>
          </section>

          {/* KPIs Section */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <TrendingUp size={16} className={accentColor} />
              Indicadores (KPIs)
            </h3>
            <div className="flex flex-wrap gap-2">
              {team.kpis.map((kpi, idx) => (
                <Badge 
                  key={idx} 
                  variant="default" 
                  className="bg-blue-900 hover:bg-blue-800 text-white font-medium border-none px-3 py-1 shadow-sm"
                >
                  {kpi}
                </Badge>
              ))}
            </div>
          </section>

          {/* Remuneration Section */}
          <section className={`p-4 rounded-xl ${bgColor} border ${borderColor}`}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <DollarSign size={16} className={accentColor} />
              Modelo de Remuneração
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Tipo de Meta</span>
                <span className="text-sm font-semibold text-slate-900">{team.remuneration.type}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Apuração</span>
                <span className="text-sm font-semibold text-slate-900">{team.remuneration.calculation}</span>
              </div>
              
              <div className="pt-2">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Escala de Atingimento</span>
                  <span className="text-sm font-bold text-slate-900">{team.remuneration.scale}</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-slate-400">70%</span>
                  <span className="text-[10px] text-slate-400">120%</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Múltiplos Salariais</span>
                  <span className="text-sm font-bold text-blue-700">{team.remuneration.multipliers}</span>
                </div>
                <RemunerationChart type={isAttack ? 'attack' : 'defense'} />
              </div>
            </div>
          </section>
        </CardContent>
        
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <span className="text-xs font-medium text-slate-500">Foco: {isAttack ? 'Novos Negócios' : 'Retenção & Fidelização'}</span>
          <ArrowUpRight size={16} className="text-slate-300" />
        </div>
      </Card>
    </motion.div>
  );
}
