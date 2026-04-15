import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Cpu, 
  Activity, 
  Terminal, 
  Database, 
  Maximize2, 
  History,
  BrainCircuit,
  MessageSquareDiff,
  ChevronRight,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PATTERNS = [
  { id: 'debate', name: 'Adversarial Debate', icon: MessageSquareDiff, color: '#00f2ff' },
  { id: 'orchestrator', name: 'Orchestrator-Workers', icon: BrainCircuit, color: '#ff00ea' },
  { id: 'routing', name: 'Dynamic Routing', icon: Activity, color: '#fcd34d' },
  { id: 'parallel', name: 'Parallel Execution', icon: Cpu, color: '#4ade80' }
];

const MetricCard = ({ label, value, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass-pane metric-card"
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span className="metric-label">{label}</span>
      <Icon size={16} style={{ color, opacity: 0.5 }} />
    </div>
    <div className="metric-value">{value}</div>
    <div style={{ height: '1px', background: color, opacity: 0.1, marginTop: '20px' }} />
  </motion.div>
);

const App: React.FC = () => {
  const [activePattern, setActivePattern] = useState('debate');

  return (
    <div className="mesh-bg">
      <div className="app-container">
        
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-container">
            <div className="logo-icon">
              <Cpu size={24} />
            </div>
            <div>
              <h1 className="logo-text">AGENTICOS</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 800, color: '#10b981', letterSpacing: '1px' }}>
                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                 OFFLINE / SIMULATION
              </div>
            </div>
          </div>

          <nav className="nav-list">
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '2px' }}>Patterns Library</div>
            {PATTERNS.map((p) => (
              <div
                key={p.id}
                onClick={() => setActivePattern(p.id)}
                className={`nav-item ${activePattern === p.id ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <p.icon size={16} style={{ opacity: activePattern === p.id ? 1 : 0.4, color: activePattern === p.id ? p.color : 'inherit' }} />
                  {p.name}
                </div>
                {activePattern === p.id ? (
                  <motion.div layoutId="pill" style={{ width: '4px', height: '12px', background: p.color, borderRadius: '4px', boxShadow: `0 0 10px ${p.color}` }} />
                ) : (
                  <ChevronRight size={12} style={{ opacity: 0.1 }} />
                )}
              </div>
            ))}
          </nav>

          <footer style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
             <div className="glass-pane" style={{ padding: '20px', background: 'rgba(255,255,255,0.01)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <ShieldAlert size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
                  <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>SYSTEM CERTIFIED</span>
                </div>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}> FAANG-Expert environment verified. All cryptographic traces active.</p>
             </div>
          </footer>
        </aside>

        {/* Main Workspace */}
        <main className="main-content">
          
          <header className="metrics-row">
            <MetricCard label="Active Agents" value="12" icon={BrainCircuit} color="#00f2ff" />
            <MetricCard label="Tasks Optimized" value="842" icon={Activity} color="#ff00ea" />
            <MetricCard label="Avg Latency" value="1.2s" icon={Terminal} color="#fcd34d" />
            <MetricCard label="Cost Avoided" value="$14,204" icon={Database} color="#4ade80" />
          </header>

          <section className="glass-pane workspace">
             <header style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <Monitor size={14} style={{ opacity: 0.2 }} />
                   <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.3)' }}>Canvas / Visualization</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px', fontWeight: 900, color: '#10b981' }}>
                   <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#10b981' }} />
                   SIMULATOR ACTIVE
                </div>
             </header>

             <motion.div 
               animate={{ scale: [1, 1.05, 1] }} 
               transition={{ duration: 4, repeat: Infinity }}
               className="spin-slow"
               style={{ width: '120px', height: '120px', borderRadius: '50%', border: '1px solid rgba(0, 242, 255, 0.2)', display: 'flex', alignItems: 'center', justifyCenter: 'center', position: 'relative' }}
             >
                <div style={{ position: 'absolute', inset: '8px', border: '1px dashed rgba(255, 0, 234, 0.2)', borderRadius: '50%' }} />
                <BrainCircuit size={48} style={{ color: '#00f2ff', filter: 'drop-shadow(0 0 10px #00f2ff)', margin: 'auto' }} />
             </motion.div>

             <h2 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1.5px', textTransform: 'uppercase', opacity: 0.8, background: 'linear-gradient(to right, white, #475569)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Flow: {activePattern.toUpperCase()}
             </h2>
             <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', maxWidth: '300px', textAlign: 'center', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Establishing AetherFlow telemetry... Synchronizing adversarial nodes for orchestration.</p>
             
             <div style={{ position: 'absolute', bottom: '24px', right: '24px', display: 'flex', gap: '8px' }}>
                <div className="glass-pane" style={{ padding: '10px' }}><Maximize2 size={16} style={{ opacity: 0.3 }} /></div>
                <div className="glass-pane" style={{ padding: '10px' }}><History size={16} style={{ opacity: 0.3 }} /></div>
             </div>
          </section>

          <footer className="glass-pane console">
             <div style={{ paddingBottom: '12px', marginBottom: '4px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', color: 'rgba(255,255,255,0.3)' }}>EXPERT TELEMETRY STREAM</span>
                <span style={{ fontSize: '9px', fontWeight: 900, color: '#00f2ff' }}>● LIVE</span>
             </div>
             <div className="console-entry">
                <span className="timestamp">[09:24:12]</span>
                <span className="tag-engine">[ENGINE]</span>
                <span>Initializing DebatePattern(advocates=['gpt-4o', 'claude-3-opus'], judge='gpt-4o')</span>
             </div>
             <div className="console-entry">
                <span className="timestamp">[09:24:13]</span>
                <span className="tag-trace">[TRACE]</span>
                <span>Step: Setup | Identifying adversarial positions...</span>
             </div>
             <div className="console-entry">
                <span className="timestamp">[09:24:14]</span>
                <span>Step: Arguing | Advocate A is forming opening argument...</span>
             </div>
             <div className="console-entry">
                <span className="timestamp">[09:24:15]</span>
                <span>Step: Arguing | Advocate B is forming opening argument...</span>
             </div>
             <div className="console-entry">
                <span className="timestamp">[09:24:16]</span>
                <span style={{ color: '#10b981', fontWeight: 'bold' }}>[DONE]</span>
                <span>2 nodes finalized. Transitioning to Rebuttal round sync.</span>
             </div>
          </footer>

        </main>
      </div>
    </div>
  );
};

export default App;
