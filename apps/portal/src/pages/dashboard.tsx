import React from 'react';

// Devopstrio AVD for Developers
// Engineering Workspace Command Center

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-cyan-500/30">
            {/* Global Engineering Header */}
            <header className="border-b border-slate-800 bg-black/80 backdrop-blur-2xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-white/10">
                            ED
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white tracking-tight">ENG DESKTOP</h1>
                            <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest leading-none mt-1">Cloud Workstation Hub</p>
                        </div>
                    </div>
                    <nav className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        <a href="#" className="text-cyan-400 border-b-2 border-cyan-500 pb-8 pt-8">Fleet View</a>
                        <a href="#" className="hover:text-white transition-colors pt-8 pb-8">Provisioning</a>
                        <a href="#" className="hover:text-white transition-colors pt-8 pb-8">Image Catalog</a>
                        <a href="#" className="hover:text-white transition-colors pt-8 pb-8">Toolchains</a>
                        <a href="#" className="hover:text-white transition-colors pt-8 pb-8">Performance</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-8 py-10">

                {/* Engineering Velocity KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: 'Active Workspaces', value: '142', change: '+12 this week', color: 'cyan' },
                        { label: 'Avg. Build Sync', value: '4.2m', change: '-15% vs local', color: 'emerald' },
                        { label: 'Security Health', value: '94%', change: 'Zero leaks', color: 'indigo' },
                        { label: 'GPU Utilization', value: '68%', change: 'AI Optimized', color: 'purple' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all shadow-xl group">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</span>
                            <div className="text-3xl font-black text-white mt-3 font-mono tracking-tighter">{kpi.value}</div>
                            <div className={`text-[10px] mt-4 font-bold ${kpi.color === 'emerald' ? 'text-emerald-400' : 'text-slate-400'} flex items-center gap-2 uppercase tracking-widest`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${kpi.color === 'emerald' ? 'bg-emerald-400' : 'bg-slate-600'}`}></span>
                                {kpi.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Workspace Fleet Logic */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

                    {/* Active Workspaces Table Placeholder */}
                    <div className="xl:col-span-2 bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight">Active Engineering Fleet</h2>
                                <p className="text-slate-400 text-sm mt-1">Live management of high-performance cloud desktops.</p>
                            </div>
                            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-cyan-900/20">
                                Provision New
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: 'Mani Dev Box', status: 'Active', type: 'Backend / Go', region: 'UK South', ip: '10.0.4.22' },
                                { name: 'ML Training Lab', status: 'Active', type: 'Data / Python', region: 'East US', ip: '10.2.1.8' },
                                { name: 'QA Mobile Desk', status: 'Provisioning', type: 'Mobile / React', region: 'Central AU', ip: 'TBD' },
                                { name: 'Security Audit Host', status: 'Hibernated', type: 'SecOps', region: 'UK West', ip: '10.1.0.12' }
                            ].map((ws, idx) => (
                                <div key={idx} className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between group hover:bg-slate-800/30 transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-3 h-3 rounded-full ${ws.status === 'Active' ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : ws.status === 'Provisioning' ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'}`}></div>
                                        <div>
                                            <div className="font-bold text-white text-sm">{ws.name}</div>
                                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{ws.type} • {ws.region}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <div className="text-right">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Internal IP</div>
                                            <div className="text-xs font-mono text-cyan-400 mt-1">{ws.ip}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-600 transition-all">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </button>
                                            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-900/50 transition-all">
                                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image & Toolchain Quick Menu */}
                    <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                        <h3 className="text-lg font-black text-white uppercase tracking-wider mb-8 border-b border-white/5 pb-4">Toolchain Catalog</h3>
                        <div className="space-y-6">
                            {[
                                { name: 'Fullstack Node.js', icon: '⚡', usage: 'High' },
                                { name: 'Cloud Native Go', icon: '🐳', usage: 'Moderate' },
                                { name: 'Data Engineering', icon: '📊', usage: 'Expanding' },
                                { name: 'AI/ML PyTorch', icon: '🧠', usage: 'GPU Req' }
                            ].map((tc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="text-2xl">{tc.icon}</div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{tc.name}</div>
                                            <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-1">Status: {tc.usage}</div>
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-cyan-950/20 rounded-3xl border border-cyan-500/20">
                            <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2 leading-none">Security Tip</div>
                            <p className="text-[11px] text-slate-300 leading-relaxed italic">
                                "All ephemeral sessions are scanned for plaintext secrets before hibernation. Use KeyVault for all credentials."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Sub-Intelligence Intelligence Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-600/5 rounded-full blur-[80px]"></div>
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            Fleet Distribution
                        </h4>
                        <div className="flex items-center gap-10">
                            <div className="w-32 h-32 rounded-full border-[12px] border-slate-800 border-t-cyan-500 border-r-blue-500 flex items-center justify-center relative">
                                <span className="text-2xl font-black text-white">42%</span>
                                <div className="absolute -bottom-2 bg-slate-800 text-[8px] font-black px-2 py-0.5 rounded uppercase border border-white/5">EMEA Hub</div>
                            </div>
                            <div className="flex-1 space-y-3">
                                {[
                                    { label: 'EMEA (London)', val: '42%', color: 'bg-cyan-500' },
                                    { label: 'AMER (Verginia)', val: '38%', color: 'bg-blue-500' },
                                    { label: 'APAC (Sydney)', val: '20%', color: 'bg-slate-700' }
                                ].map((reg, rIdx) => (
                                    <div key={rIdx}>
                                        <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-tight mb-1">
                                            <span>{reg.label}</span>
                                            <span>{reg.val}</span>
                                        </div>
                                        <div className="w-full bg-black/40 h-1 rounded-full overflow-hidden">
                                            <div className={`${reg.color} h-full`} style={{ width: reg.val }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Build Performance Scorecard</h4>
                        <div className="space-y-5">
                            <div className="flex justify-between items-end border-b border-white/5 pb-4 hover:border-cyan-500/30 transition-colors">
                                <div>
                                    <div className="text-sm font-bold text-slate-200">Container Build (v4.2.0)</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Docker Daemon Peak</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-black text-emerald-400 font-mono">1.8m</div>
                                    <div className="text-[9px] text-slate-600 font-black uppercase">Optimization: -22%</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-end border-b border-white/5 pb-4 hover:border-cyan-500/30 transition-colors">
                                <div>
                                    <div className="text-sm font-bold text-slate-200">Go Binary Compile</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Memory Intensive</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-black text-cyan-400 font-mono">42s</div>
                                    <div className="text-[9px] text-slate-600 font-black uppercase">Standard Performance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
