
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Quote, Sparkles, PenLine, Clock } from 'lucide-react';

interface Entry {
  id: string;
  name: string;
  message: string;
  date: string;
  timeAgo: string;
  avatar: string;
  color: string;
}

const COLORS = [
  'from-[#0f172a] to-[#1e293b]', // Grey/Dark
  'from-[#1e3a8a] to-[#1e40af]', // Blue
  'from-[#4c1d95] to-[#5b21b6]', // Purple
  'from-[#134e4a] to-[#0f766e]', // Teal
  'from-[#064e3b] to-[#065f46]', // Green
  'from-[#701a75] to-[#86198f]', // Magenta
];

const GuestbookPage: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([
    { id: '1', name: 'Md. Nahid Hossain', message: 'Cool Portfolio dear. Well done', date: 'Dec 24', timeAgo: '4 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nahid', color: COLORS[0] },
    { id: '2', name: 'James Balito', message: 'so cool portfoliooo!', date: 'Dec 24', timeAgo: '5 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', color: COLORS[1] },
    { id: '3', name: 'Khadijah Kasiran', message: 'Im from Malaysia.. Nice portfolio', date: 'Dec 21', timeAgo: '8 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khadijah', color: COLORS[3] },
    { id: '4', name: 'pham phong', message: 'so greet', date: 'Dec 20', timeAgo: '9 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', color: COLORS[2] },
    { id: '5', name: 'Riddhi Gadgi', message: 'Awesome...!', date: 'Dec 18', timeAgo: '10 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riddhi', color: COLORS[1] },
    { id: '6', name: 'Daytime', message: 'by far one of the most impressive portfolios i\'ve ever seen!', date: 'Dec 15', timeAgo: '13 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daytime', color: COLORS[0] },
    { id: '7', name: 'YP', message: 'This is sooooo cool!', date: 'Dec 12', timeAgo: '16 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YP', color: COLORS[5] },
    { id: '8', name: 'ved talmaley', message: 'inspiring portfolio best seen till now ', date: 'Dec 10', timeAgo: '18 d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ved', color: COLORS[4] },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const newEntry: Entry = {
      id: Date.now().toString(),
      name,
      message,
      date: 'Now',
      timeAgo: 'just now',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      color: randomColor
    };
    
    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
    setIsModalOpen(false);
  };

  return (
    <div className="pt-32 pb-40 bg-white dark:bg-black min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 dark:text-zinc-500 mb-4"
          >
            THE COMMUNITY WALL
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-slate-900 dark:text-white font-serif"
          >
            Leave <span className="italic text-gradient bg-gradient-to-r from-blue-400 via-accent-violet to-pink-500">Your Mark</span>
          </motion.h1>
        </div>

        {/* Wall Grid - 3 Columns on LG screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Action Card: Join the Wall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            onClick={() => setIsModalOpen(true)}
            className="relative h-[180px] rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/20 flex flex-col items-center justify-center text-center p-6 cursor-pointer group transition-all"
          >
            <h3 className="text-lg font-serif italic text-slate-900 dark:text-white mb-1">"Join the wall..."</h3>
            <p className="text-[10px] text-slate-500 dark:text-zinc-500 mb-4 max-w-[160px]">Sign in to pin your message to this board forever.</p>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white text-black dark:text-black rounded-full font-bold text-[10px] shadow-lg group-hover:scale-105 transition-transform uppercase tracking-wider">
              <PenLine size={14} />
              Write a message
            </div>
          </motion.div>

          {/* User Entry Cards */}
          <AnimatePresence mode="popLayout">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, rotate: 0.5 }}
                className={`relative min-h-[180px] rounded-[2rem] p-6 flex flex-col bg-gradient-to-br ${entry.color} shadow-xl border border-white/10 overflow-hidden group`}
              >
                {/* Pin Element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-white/10 backdrop-blur-md rounded-b-lg border-x border-b border-white/20 z-20" />
                
                {/* Quote Icon */}
                <Quote className="text-white/10 absolute -top-1 -left-1 rotate-12" size={50} strokeWidth={1} />
                
                <div className="relative z-10 flex flex-col h-full">
                   <p className="text-base md:text-lg font-serif italic text-white mb-6 leading-relaxed line-clamp-3">
                     "{entry.message}"
                   </p>

                   <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-3">
                      <div className="size-9 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
                         <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="font-bold text-white text-[11px] truncate">{entry.name}</h4>
                         <div className="flex items-center gap-2 text-[8px] text-white/50 font-black uppercase tracking-widest">
                            <span>{entry.date}</span>
                            <span className="size-0.5 rounded-full bg-white/30" />
                            <span className="truncate">{entry.timeAgo}</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Write Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-10 shadow-3xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-accent-violet/10">
                 <Sparkles size={100} />
              </div>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:scale-110 transition-transform z-10"
              >
                <X size={18} />
              </button>

              <h2 className="text-2xl font-serif italic text-slate-900 dark:text-white mb-6">Pin your message...</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Identity</label>
                  <input
                    autoFocus
                    type="text"
                    placeholder="E.g. Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-accent-violet outline-none transition-all text-slate-900 dark:text-white font-bold text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Mark</label>
                  <textarea
                    placeholder="Tell the world something cool..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-6 py-5 rounded-[2rem] bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-accent-violet outline-none transition-all text-slate-900 dark:text-white resize-none font-bold text-sm"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-full flex items-center justify-center transition-all shadow-xl active:scale-[0.98] group"
                >
                  <Send size={16} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Post to the wall
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuestbookPage;
