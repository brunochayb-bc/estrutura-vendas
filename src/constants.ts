/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamData {
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
}

export const COLORS = {
  attack: {
    primary: '#1e40af', // blue-800
    secondary: '#3b82f6', // blue-500
    accent: '#60a5fa', // blue-400
    bg: '#eff6ff', // blue-50
  },
  defense: {
    primary: '#1e3a8a', // blue-900
    secondary: '#2563eb', // blue-600
    accent: '#93c5fd', // blue-300
    bg: '#f0f9ff', // blue-50
  },
};

export const ATTACK_TEAM: TeamData = {
  name: 'Executivos de Vendas (Ataque)',
  role: 'Ataque',
  headcount: 10,
  functions: [
    'Venda de Terminais',
    'Add-ons',
    'Produtos Diversos',
    'Ações de Upsell',
    'Projetos Especiais',
    'Outsourcing',
    'Publicidade',
  ],
  kpis: [
    'Meta Financeira (Incremento Mensal + Setup + Valores Únicos)',
    'Visitas',
  ],
  remuneration: {
    type: 'Meta Financeira + Visitas',
    calculation: 'Trimestral',
    scale: '70% até 120%',
    multipliers: '0,5x até 3x salário',
  },
};

export const DEFENSE_TEAM: TeamData = {
  name: 'Customer Success (Defesa)',
  role: 'Defesa',
  headcount: 15,
  functions: [
    'Engajamento da Base',
    'Treinamento',
    'Renovações Contratuais',
    'Reajustes Contratuais',
    'Retenção de Clientes',
    'Reversão de Cancelamento',
    'Combate ao Churn',
    'Combate ao Desuso',
    'Geração de Leads para Ataque',
    'Upgrade de Novo Terminal',
  ],
  kpis: [
    'Atendimento Presencial',
    'Atendimento Remoto',
    'Treinamentos',
    'DAU (Daily Active Users)',
    'Desuso',
    'Churn',
    'Migração do Terminal',
    'Reajustes',
    'Renovações Contratuais',
    'Upsell',
  ],
  remuneration: {
    type: 'Scorecard Trimestral',
    calculation: 'Trimestral',
    scale: '70% até 120%',
    multipliers: '0,5x até 1,5x salário',
  },
};
