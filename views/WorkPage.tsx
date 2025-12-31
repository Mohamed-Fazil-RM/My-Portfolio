
import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles, ArrowLeft, Globe, Github } from 'lucide-react';
import { ViewState } from '../App';
import SplashCursor from '../components/SplashCursor';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFirebase, 
  SiPostgresql, 
  SiFramer, 
  SiPrisma,
  SiSupabase,
  SiSanity,
  SiSentry,
  SiExpo,
  SiZod,
  SiCloudinary,
  SiClerk,
  SiPython,
  SiTensorflow,
  SiD3Dotjs,
  SiFigma
} from "https://esm.sh/react-icons/si";

type Category = 'All' | 'Ventures' | 'Enterprise' | 'Freelance' | 'Innovation';

interface ProjectShowcase {
  id: string;
  number: string;
  type: string;
  category: Category;
  date: string;
  title: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  gradient: string; 
  image: string;
  cardHeadline: string;
  tech: { name: string; icon: React.ReactNode }[];
}

const PROJECTS: ProjectShowcase[] = [
  {
    id: 'expense-tracker',
    number: '01',
    type: 'WEB APP',
    category: 'Innovation',
    date: '2025',
    title: 'Expense Tracker',
    description: "A smart way to track expenses and manage budgets efficiently.",
    fullDescription: "Expense Tracker is a lightweight financial management application designed to help users monitor daily spending, categorize expenses, and maintain better control over their budgets. The focus is on clarity, ease of use, and meaningful financial insights through clean UI and structured data visualization.",
    cardHeadline: "Smart Expense & Budget Management Application",
    highlights: [
      'Real-time budget tracking and monitoring.',
      'Data visualization for meaningful financial insights.',
      'Category-based expenditure analysis.'
    ],
    gradient: 'from-[#e11d48] to-[#fb7185]',
    image: 'https://market-resized.envatousercontent.com/previews/files/512656454/inline+preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=946c5004dde35de40d9a0baba476411b46f9960362af80ebf093ff55bc4d3eba',
    tech: [
      { name: 'REACT', icon: <SiReact /> },
      { name: 'TYPESCRIPT', icon: <SiTypescript /> },
      { name: 'D3.JS', icon: <SiD3Dotjs /> }
    ]
  },
  {
    id: 'portfolio-v2',
    number: '02',
    type: 'EXPERIMENTAL',
    category: 'Innovation',
    date: '2025',
    title: 'Portfolio',
    description: 'Bridging code and data to build impactful solutions.',
    fullDescription: "A performance-first personal portfolio built to showcase engineering craftsmanship, motion design, and scalable frontend architecture. This project acts as a living laboratory for experimenting with modern UI patterns, animations, and data-driven interfaces.",
    cardHeadline: "Personal Portfolio & Experimental Frontend Lab",
    highlights: [
      'Advanced motion design using Framer Motion.',
      'Performant SSR/SSG architecture.',
      'Accessible UI patterns and components.'
    ],
    gradient: 'from-[#7c3aed] to-[#a78bfa]',
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-29%20183740.png',
    tech: [
      { name: 'REACT', icon: <SiReact /> },
      { name: 'TYPESCRIPT', icon: <SiTypescript /> },
      { name: 'FRAMER', icon: <SiFramer /> },
      { name: 'TAILWIND', icon: <SiTailwindcss /> }
    ]
  },
  {
    id: 'shazil-tech',
    number: '03',
    type: 'SERVICES',
    category: 'Freelance',
    date: '2025',
    title: 'Shazil Tech',
    description: 'Expert development and powerful automation solutions.',
    fullDescription: "Shazil Tech is a professional services platform offering custom software development, automation workflows, and technical consulting. Built with scalability and reliability in mind, it emphasizes clear communication, robust systems, and measurable business outcomes.",
    cardHeadline: "Automation & Custom Software Solutions Platform",
    highlights: [
      'Custom automation workflows for business.',
      'Technical consulting for enterprise scale.',
      'Robust and reliable system architecture.'
    ],
    gradient: 'from-[#2563eb] to-[#60a5fa]',
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-29%20200534.png',
    tech: [
      { name: 'NODE.JS', icon: <SiNodedotjs /> },
      { name: 'NEXT.JS', icon: <SiNextdotjs /> },
      { name: 'API', icon: <SiPostgresql /> }
    ]
  },
  {
    id: 'learnezily',
    number: '04',
    type: 'PLATFORM',
    category: 'Ventures',
    date: '2025',
    title: 'LearnEzily',
    description: 'Bridging code and data to build impactful learning experiences.',
    fullDescription: "LearnEzily is an education-focused platform designed to simplify content delivery and enhance learner engagement. The project focuses on intuitive UX, structured learning paths, and scalable architecture to support future growth.",
    cardHeadline: "Simplified Learning & Knowledge Management Platform",
    highlights: [
      'Intuitive UX for student engagement.',
      'Structured learning paths for efficiency.',
      'Scalable architecture for content delivery.'
    ],
    gradient: 'from-[#059669] to-[#34d399]',
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-10-23%20232816.png',
    tech: [
      { name: 'REACT', icon: <SiReact /> },
      { name: 'UX DESIGN', icon: <SiFigma /> }
    ]
  },
  {
    id: 'alchemeal',
    number: '05',
    type: 'AI TOOL',
    category: 'Innovation',
    date: '2025',
    title: 'Alchemeal',
    description: 'Create the perfect meal from what you have.',
    fullDescription: "Alchemeal helps users transform available ingredients into meaningful meal ideas. The project focuses on smart logic, intuitive interfaces, and practical problem-solving, turning everyday cooking challenges into seamless digital experiences.",
    cardHeadline: "AI-Assisted Meal Planning & Recipe Generator",
    highlights: [
      'Smart logic for ingredient transformation.',
      'Intuitive meal generation interfaces.',
      'User-centered problem solving.'
    ],
    gradient: 'from-[#f59e0b] to-[#fbbf24]',
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-29%20202117.png',
    tech: [
      { name: 'REACT', icon: <SiReact /> },
      { name: 'PYTHON', icon: <SiPython /> }
    ]
  },
  {
    id: 'hexa-play',
    number: '06',
    type: 'COMMUNITY',
    category: 'Freelance',
    date: '2025',
    title: 'Hexa Play',
    description: 'The ultimate club for competitive local gaming.',
    fullDescription: "Hexa Play is a community-driven gaming platform focused on competitive local play. Designed with performance and engagement in mind, it offers a vibrant digital space for gamers to connect, compete, and grow.",
    cardHeadline: "Local Competitive Gaming & Community Platform",
    highlights: [
      'High-performance community hub.',
      'Local tournament and competitive tracking.',
      'Vibrant digital space for gamer engagement.'
    ],
    gradient: 'from-[#10b981] to-[#34d399]',
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-12-06%20201237.png',
    tech: [
      { name: 'NEXT.JS', icon: <SiNextdotjs /> },
      { name: 'FRAMER', icon: <SiFramer /> }
    ]
  },
  {
    id: 'zoho-bot',
    number: '07',
    type: 'BOT',
    category: 'Enterprise',
    date: '2025',
    title: 'Zoho Bot',
    description: 'Manage projects and collect client ratings within Zoho Cliq.',
    fullDescription: "A custom Zoho Cliq bot designed to streamline project updates, task tracking, and client feedback collection directly within team communication channels. The bot improves operational efficiency and transparency through automation.",
    cardHeadline: "Project Management & Client Feedback Automation Bot",
    highlights: [
      'Automated project status and updates.',
      'In-app client feedback collection.',
      'Workflow optimization via Zoho Cliq.'
    ],
    gradient: 'from-[#6366f1] to-[#a855f7]',
    image: 'https://ik.imagekit.io/fazil/Gemini_Generated_Image_kfpgookfpgookfpg.png?updatedAt=1767018851804',
    tech: [
      { name: 'NODE.JS', icon: <SiNodedotjs /> },
      { name: 'PYTHON', icon: <SiPython /> }
    ]
  },
  {
    id: 'smart-study',
    number: '08',
    type: 'MOBILE',
    category: 'Ventures',
    date: '2024',
    title: 'Smart Study',
    description: 'A dedicated educational mobile experience for New College students.',
    fullDescription: "Smart Study is a mobile-first educational platform tailored for New College students, offering streamlined access to academic resources, schedules, and study tools. The project emphasizes usability, accessibility, and focused learning workflows.",
    cardHeadline: "Student-Centric Educational Mobile Platform",
    highlights: [
      'Academic resource aggregation.',
      'Mobile-first focused learning UX.',
      'Accessibility for student workflows.'
    ],
    gradient: 'from-[#3b82f6] to-[#06b6d4]',
    image: 'https://ik.imagekit.io/fazil/Screenshot%202025-02-25%20230542.png',
    tech: [
      { name: 'REACT', icon: <SiReact /> },
      { name: 'FIGMA', icon: <SiFigma /> }
    ]
  }
];

const ProjectItem: React.FC<{ project: ProjectShowcase; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  const isRightCol = index % 2 === 1; 
  const itemRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col w-full relative group ${isRightCol ? 'lg:mt-[240px]' : 'lg:mt-0'} mb-16 lg:mb-0`}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full mb-4 px-1 relative z-30">
            <div className="flex items-center gap-3">
                <span className="text-[10px] md:text-[11px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-[0.2em]">{project.number}</span>
                <div className="w-6 h-px bg-slate-200 dark:bg-zinc-800" />
                <span className="text-[10px] md:text-[11px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-[0.2em]">{project.type}</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest backdrop-blur-sm">
                {project.date}
            </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white leading-none mb-6 px-1 relative z-30">
            {project.title}
        </h2>

        <motion.div 
          onClick={onClick}
          whileHover={{ scale: 1.01 }}
          className={`relative w-full aspect-[16/10] rounded-[2rem] md:rounded-3xl overflow-hidden bg-slate-100/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-4 md:p-5 flex flex-col cursor-pointer shadow-2xl transition-all duration-700 z-30 group-hover:bg-slate-200/50 dark:group-hover:bg-white/10`}
        >
          <div className="flex justify-between items-start mb-4 md:mb-5 relative z-10">
              <p className="text-slate-900 dark:text-white text-xs md:text-sm font-bold max-w-[200px] md:max-w-[220px] leading-tight tracking-tight drop-shadow-sm line-clamp-2">
                  {project.cardHeadline}
              </p>
              <div className="size-8 md:size-10 bg-slate-900/10 dark:bg-white/20 backdrop-blur-md border border-slate-900/10 dark:border-white/20 rounded-full flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500 shrink-0">
                  <ArrowUpRight size={14} />
              </div>
          </div>

          <div className="flex-grow relative rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-zinc-950 group-hover:scale-[1.01] transition-transform duration-1000 ease-out origin-bottom">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 brightness-100"
              />
          </div>
        </motion.div>

        <div className="mt-5 flex flex-wrap gap-1.5 w-full justify-start items-center relative z-30 px-1">
          {project.tech.slice(0, 5).map((t, tIdx) => (
            <div 
              key={tIdx}
              className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-white/5 rounded-lg text-slate-600 dark:text-zinc-400 shadow-sm"
            >
              <span className="text-xs">
                {t.icon}
              </span>
              <span className="text-[8px] font-black uppercase tracking-widest">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface WorkPageProps {
  onNavigate: (view: ViewState) => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectShowcase | null>(null);
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const categories: Category[] = ['All', 'Ventures', 'Enterprise', 'Freelance', 'Innovation'];

  const filteredProjects = useMemo(() => {
    const base = activeCategory === 'All' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === activeCategory);
    
    if (activeCategory !== 'All') return base;
    return showMore ? base : base.slice(0, 4);
  }, [activeCategory, showMore]);

  return (
    <div className="bg-white dark:bg-black min-h-screen pt-4 pb-24 transition-colors duration-500 selection:bg-accent-violet selection:text-white overflow-x-hidden">
      
      {/* Immersive Header Section */}
      <div className="relative w-full h-[40vh] md:h-[45vh] flex flex-col items-center justify-center pt-8 md:pt-12 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center select-none overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.08, scale: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[24vw] font-black leading-none hatched-text text-slate-400 dark:text-zinc-600 uppercase tracking-tighter font-sans"
            >
                PROJECTS
            </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <span className="inline-block px-4 py-1.5 mb-4 md:mb-5 text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-accent-violet uppercase bg-violet-500/10 dark:bg-violet-900/20 rounded-full border border-accent-violet/10 backdrop-blur-sm">
            Case Studies
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Curated <span className="text-gradient">Work.</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 relative z-20 px-6 max-w-full overflow-x-auto no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowMore(false); }}
              className={`px-4 md:px-6 py-2 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-black shadow-xl'
                  : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-400 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div ref={containerRef} className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-16 md:pt-24">
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-0 w-px hidden lg:block overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-slate-200 dark:bg-zinc-800 opacity-30" />
            <motion.div 
              style={{ scaleY }}
              className="absolute inset-0 bg-accent-violet origin-top"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-8 lg:gap-y-0 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectItem 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View More Logic */}
        <div className="mt-16 md:mt-32 mb-24 md:mb-48 flex flex-col items-center relative z-20">
          <AnimatePresence mode="wait">
            {!showMore && activeCategory === 'All' && PROJECTS.length > 4 ? (
              <motion.button 
                  key="view-more"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowMore(true)}
                  className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-600 hover:text-accent-violet transition-colors cursor-pointer group"
              >
                  View all projects
                  <div className="h-px w-0 group-hover:w-full bg-accent-violet transition-all duration-300 mx-auto mt-1" />
              </motion.button>
            ) : (
              <motion.div 
                key="end-note"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 dark:text-zinc-800">
                    End of Projects
                </span>
                <p className="mt-4 text-[9px] font-medium text-slate-400 dark:text-zinc-600 uppercase tracking-widest opacity-60">
                   Check back later for new case studies
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[400px] md:h-[750px] rounded-[3rem] md:rounded-[6rem] bg-slate-50/10 dark:bg-white/[0.03] backdrop-blur-3xl border border-slate-200/50 dark:border-white/10 mb-24 md:mb-48 flex flex-col items-center justify-center relative overflow-hidden text-center px-6 md:px-12 shadow-2xl"
        >
          <SplashCursor 
            CURL={4} 
            SPLAT_RADIUS={0.3} 
            SPLAT_FORCE={7000} 
            DENSITY_DISSIPATION={4}
          />
          
          <h3 className="text-3xl md:text-6xl font-medium text-slate-900 dark:text-white tracking-tighter mb-4 md:mb-8 relative z-10 leading-tight">
            Got a Project <br className="md:hidden" /> in mind?
          </h3>
          <p className="text-sm md:text-2xl text-slate-600 dark:text-zinc-400 font-medium max-w-2xl leading-relaxed mb-8 md:mb-12 relative z-10 px-4">
            I'm always open to new challenges and collaborations. <br className="hidden md:block" /> Let's build something extraordinary together.
          </p>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 md:px-12 py-4 md:py-6 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-full flex items-center justify-center gap-3 md:gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl group relative z-10"
          >
            <span className="text-[10px] md:text-base uppercase tracking-widest">Let's Talk</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white dark:bg-black overflow-y-auto"
          >
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-20"
            >
              <div className="flex items-center justify-between mb-12 md:mb-16">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Close Project</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                <div className="lg:col-span-7">
                  <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 md:mb-8 leading-none">
                    {selectedProject.title}
                  </h1>
                  <div className="space-y-6 text-base md:text-2xl text-slate-600 dark:text-zinc-400 font-medium leading-relaxed tracking-tight">
                    <p>{selectedProject.fullDescription}</p>
                    <div className="pt-8 md:pt-12 grid grid-cols-1 gap-10">
                       <div className="space-y-4 md:space-y-6">
                         <h3 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Core Highlights</h3>
                         <ul className="space-y-3 md:space-y-4">
                            {selectedProject.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-slate-700 dark:text-zinc-300">
                                 <Sparkles className="size-4 md:size-5 text-accent-violet shrink-0 mt-0.5 md:mt-1" />
                                 {h}
                              </li>
                            ))}
                         </ul>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                   <div className={`relative aspect-[4/5] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/30 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-3 md:p-5 shadow-2xl`}>
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl brightness-100"
                      />
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkPage;
