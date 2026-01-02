import React, { useState } from 'react';
import { Sparkles, Send, Bot, Loader2, StopCircle } from 'lucide-react';
import { generateSolution } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const solution = await generateSolution(input);
    
    setLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: solution }]);
  };

  return (
    <section id="ai-demo" className="py-32 bg-white relative overflow-hidden">
      
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-6">
             <Sparkles className="w-4 h-4 text-blue-500" />
             <span>Powered by Gemini 2.5</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-6">
            Meet your new Architect.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Experience real-time solution strategy. No scripts, just pure intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interface */}
          <div className="lg:col-span-8 lg:col-start-3 bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-glass border border-white/50 h-[600px] flex flex-col overflow-hidden relative">
            
            {/* Header */}
            <div className="px-8 py-6 border-b border-slate-100/50 flex items-center justify-between bg-white/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Agile Architect</h4>
                  <p className="text-xs text-slate-500">Always active</p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth no-scrollbar">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">How can I help you today?</h3>
                  <p className="text-slate-500 max-w-xs text-sm">
                    Try asking about microservices, CI/CD pipelines, or legacy migrations.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    {["Migrate monolithic app", "Improve React performance", "Secure DevOps pipeline"].map(prompt => (
                      <button 
                        key={prompt}
                        onClick={() => setInput(prompt)}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-6 rounded-3xl ${
                    msg.role === 'user' 
                      ? 'bg-[#1d1d1f] text-white rounded-br-none' 
                      : 'bg-white shadow-sm border border-slate-100 text-slate-800 rounded-bl-none'
                  }`}>
                    <div className="whitespace-pre-line leading-relaxed text-[15px]">{msg.text}</div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                   <div className="bg-white shadow-sm border border-slate-100 px-6 py-4 rounded-3xl rounded-bl-none flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                      <span className="text-sm text-slate-500">Thinking...</span>
                   </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/60 border-t border-slate-100/50">
              <form onSubmit={handleAnalyze} className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your engineering challenge..."
                  className="w-full pl-6 pr-14 py-4 bg-white border-0 shadow-sm rounded-full focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder:text-slate-400 text-base"
                />
                <button 
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="absolute right-2 top-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AIDemo;