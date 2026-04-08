/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ATTACK_TEAM, DEFENSE_TEAM } from '@/constants';
import TeamCard from './TeamCard';
import { BarChart3, Info, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] p-6 md:p-12 lg:p-16 font-sans text-slate-900">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-16 bg-blue-600 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Planejamento Estratégico 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Performance <br />
              <span className="text-blue-600">Comercial</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed border-l-4 border-slate-200 pl-6 py-2">
              Estrutura de incentivos e KPIs para os times de <span className="text-blue-600 font-bold">Ataque</span> (Vendas) e <span className="text-emerald-600 font-bold">Defesa</span> (Customer Success).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-6 min-w-[240px]">
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-inner">
                <BarChart3 size={32} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Headcount Total</p>
                <p className="text-4xl font-black text-slate-900 tracking-tighter">~{ATTACK_TEAM.headcount + DEFENSE_TEAM.headcount}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Comparison Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <TeamCard team={ATTACK_TEAM} />
        <TeamCard team={DEFENSE_TEAM} />
      </main>

      {/* Strategic Summary */}
      <footer className="max-w-7xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <TrendingUp size={400} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Info className="text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight">Diretrizes Estratégicas</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="mt-1 p-3 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20 shadow-lg">
                    <Zap size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 tracking-tight">Expansão (Ataque)</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      Foco em aquisição agressiva de novos logos e setup de terminais. A remuneração é alavancada por volume de vendas e eficiência em visitas presenciais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="mt-1 p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-lg">
                    <ShieldCheck size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 tracking-tight">Retenção (Defesa)</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      Foco em LTV e redução de churn. A remuneração premia a saúde da base, migração tecnológica e o engajamento diário (DAU) dos clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
            &copy; 2026 Dashboard Executivo &bull; Performance Comercial &bull; v2.0
          </p>
        </div>
      </footer>
    </div>
  );
}
