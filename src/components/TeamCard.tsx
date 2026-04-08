import { useState, useMemo } from 'react';
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
  Zap,
  Calculator
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
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
  const [achievement, setAchievement] = useState(100);
  const isAttack = team.role === 'Ataque';
  
  const multiplier = useMemo(() => {
    if (achievement < 70) return 0;
    const base = 0.5;
    const range = achievement - 70;
    if (isAttack) {
      // 70% -> 0.5, 120% -> 3.0. Range 50% maps to 2.5x
      return Number((base + range * (2.5 / 50)).toFixed(2));
    } else {
      // 70% -> 0.5, 120% -> 1.5. Range 50% maps to 1.0x
      return Number((base + range * (1.0 / 50)).toFixed(2));
    }
  }, [achievement, isAttack]);

  const Icon = isAttack ? Target : Shield;
  
  // Color Logic
  const accentColor = isAttack ? 'text-blue-600' : 'text-emerald-600';
  const darkAccentColor = isAttack ? 'text-blue-900' : 'text-emerald-900';
  const bgColor = isAttack ? 'bg-blue-50' : 'bg-emerald-50';
  const borderColor = isAttack ? 'border-blue-200' : 'border-emerald-200';
  const barColor = isAttack ? 'bg-blue-600' : 'bg-emerald-600';
  const kpiBadgeColor = isAttack ? 'bg-blue-900 hover:bg-blue-800' : 'bg-emerald-900 hover:bg-emerald-800';
  const highlightTextColor = isAttack ? 'text-blue-700' : 'text-emerald-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <Card className={`h-full border-2 ${borderColor} shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col bg-white`}>
        <div className={`h-2 w-full ${barColor}`} />
        <CardHeader className="pb-6 pt-8 px-8">
          <div className="flex justify-between items-start">
            <div className={`p-4 rounded-2xl ${bgColor} ${accentColor} shadow-inner`}>
              <Icon size={32} strokeWidth={2.5} />
            </div>
            <Badge variant={isAttack ? "default" : "secondary"} className={`text-[10px] font-black tracking-widest px-3 py-1 uppercase ${!isAttack ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-none' : ''}`}>
              {team.role}
            </Badge>
          </div>
          <div className="mt-6">
            <CardTitle className="text-3xl font-black text-slate-900 tracking-tight">{team.name}</CardTitle>
            <div className="flex items-center gap-3 mt-3">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${bgColor} ${darkAccentColor} font-bold text-xs`}>
                <Users size={14} />
                <span>Headcount: ~{team.headcount} {isAttack ? 'Executivos' : 'Pessoas'}</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow space-y-8 px-8 pb-8">
          {/* Functions Section */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
              <Zap size={14} className={accentColor} />
              Funções Principais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {team.functions.map((func, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700 bg-slate-50/50 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                  <CheckCircle2 size={16} className={accentColor} />
                  <span>{func}</span>
                </div>
              ))}
            </div>
          </section>

          {/* KPIs Section */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
              <TrendingUp size={14} className={accentColor} />
              Indicadores de Performance
            </h3>
            <div className="flex flex-wrap gap-2">
              {team.kpis.map((kpi, idx) => (
                <Badge 
                  key={idx} 
                  variant="default" 
                  className={`${kpiBadgeColor} text-white font-bold text-[10px] tracking-wider border-none px-4 py-1.5 rounded-lg shadow-sm uppercase`}
                >
                  {kpi}
                </Badge>
              ))}
            </div>
          </section>

          {/* Remuneration Section */}
          <section className={`p-6 rounded-2xl ${bgColor} border ${borderColor} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-5">
              <DollarSign size={120} />
            </div>
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className={`text-xs font-black uppercase tracking-[0.15em] ${darkAccentColor} flex items-center gap-2`}>
                <Calculator size={14} />
                Simulador de Variável
              </h3>
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm text-[9px] font-black border-slate-200 text-slate-500 tracking-tighter">INTERATIVO</Badge>
            </div>
            
            <div className="space-y-8 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tipo de Meta</p>
                  <p className="text-sm font-bold text-slate-900 truncate">{team.remuneration.type}</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Apuração</p>
                  <p className="text-sm font-bold text-slate-900">{team.remuneration.calculation}</p>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Atingimento da Meta</span>
                    <span className={`text-4xl font-black ${highlightTextColor} tracking-tighter`}>{achievement}%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Múltiplo Salarial</span>
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">{multiplier}<span className="text-lg ml-0.5">x</span></span>
                  </div>
                </div>
                
                <Slider 
                  value={[achievement]} 
                  min={0} 
                  max={120} 
                  step={1} 
                  onValueChange={(vals) => setAchievement(vals[0])}
                  className="mb-4"
                />
                
                <div className="flex justify-between px-1">
                  <span className="text-[9px] font-black text-slate-400">0%</span>
                  <span className={`text-[9px] font-black ${darkAccentColor} bg-white px-2 py-0.5 rounded-full border ${borderColor}`}>70% MÍN</span>
                  <span className="text-[9px] font-black text-slate-400">100%</span>
                  <span className={`text-[9px] font-black ${darkAccentColor} bg-white px-2 py-0.5 rounded-full border ${borderColor}`}>120% MÁX</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Projeção de Curva</span>
                  <span className={`text-[10px] font-bold ${highlightTextColor} uppercase tracking-tighter bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm`}>{team.remuneration.multipliers}</span>
                </div>
                <RemunerationChart 
                  type={isAttack ? 'attack' : 'defense'} 
                  currentAchievement={achievement >= 70 ? achievement : undefined}
                  currentMultiplier={achievement >= 70 ? multiplier : undefined}
                />
              </div>
            </div>
          </section>
        </CardContent>
        
        <div className="px-8 py-5 bg-slate-50/80 border-t border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${barColor} animate-pulse`} />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Foco: {isAttack ? 'Novos Negócios' : 'Retenção & Fidelização'}</span>
          </div>
          <ArrowUpRight size={18} className="text-slate-300" />
        </div>
      </Card>
    </motion.div>
  );
}
