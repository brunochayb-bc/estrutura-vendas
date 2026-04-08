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
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 lg:p-12 font-sans text-slate-900">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Estratégia Comercial 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-none">
              Ataque <span className="text-blue-600">vs</span> Defesa
            </h1>
            <p className="mt-4 text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
              Painel comparativo de estrutura, funções e remuneração variável para os times de Vendas e Customer Success.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Headcount Total</p>
                <p className="text-2xl font-black text-slate-900">~25</p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Comparison Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <TeamCard team={ATTACK_TEAM} />
        <TeamCard team={DEFENSE_TEAM} />
      </main>

      {/* Strategic Summary */}
      <footer className="max-w-7xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <TrendingUp size={200} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Info className="text-blue-400" size={20} />
              <h2 className="text-xl font-bold">Visão Estratégica</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Geração de Novos Negócios</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      O time de Ataque é focado em expansão agressiva, venda de novos terminais e serviços agregados, com incentivos financeiros diretos por volume e visitas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Proteção e Fidelização da Base</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      O time de Defesa atua como guardião da receita recorrente, combatendo o churn e garantindo que o cliente extraia o máximo valor dos produtos contratados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8 text-center text-slate-400 text-xs font-medium uppercase tracking-widest">
          &copy; 2026 Dashboard Executivo de Performance Comercial
        </div>
      </footer>
    </div>
  );
}
