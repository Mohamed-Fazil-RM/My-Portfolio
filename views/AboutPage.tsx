
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import About from '../components/About';
import { ViewState } from '../App';

interface AboutPageProps {
  onNavigate: (view: ViewState) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  // Using official high-res logos for a professional aesthetic
  const iitmLogoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/512px-IIT_Madras_Logo.svg.png";
  const newCollegeLogoUrl = "https://thenewcollege.edu.in/images/logo%20png%20bgm.png";
  
  const skillGroups = [
    {
      category: 'Development',
      skills: ['Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Git']
    },
    {
      category: 'Data Science',
      skills: ['Data Analysis', 'Machine Learning', 'Pandas', 'NumPy', 'Tableau', 'Power BI']
    },
    {
      category: 'Design & Creative',
      skills: ['Figma', 'UI/UX', 'Prototyping', 'Brand Strategy', 'Visual Storytelling']
    },
    {
      category: 'Leadership',
      skills: ['Product Management', 'Agile', 'Strategic Planning', 'Team Building']
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        
        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
        >
          {/* Header - Centered */}
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Experience</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Experience That Brings <br/><span className="text-gradient">Ideas to Life</span>
            </h3>
          </div>

          {/* Job Entry */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left Align: Meta Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">March 2025 - Dec 2025</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-1">FINMA Tech Solution llp</p>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium text-slate-500">Chennai, India</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-violet">Onsite</p>
              </div>
            </div>

            {/* Right Align: Role & Description */}
            <div className="md:col-span-8">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Frontend Engineer</h4>
              
              <div className="space-y-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  Architected enterprise-scale, CMS-driven reusable page builder blocks using Sanity and Contentful, enabling non-technical teams to manage content across 6+ production websites while improving delivery speed by 40%. Built high-performance web applications with Next.js, React, and Tailwind CSS using advanced SSG/SSR strategies, increasing user engagement by 25% and improving Core Web Vitals by 20%. 
                </p>
                <p>
                  Implemented TypeScript across full-stack codebases to enhance type safety and reduce production defects by 15%. Improved team productivity through a scalable Turborepo monorepo setup and rigorous code reviews. Collaborated cross-functionally to deliver WCAG 2.1 AA-compliant, SEO-optimized interfaces with improved UX and search rankings.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
        >
          {/* Header - Centered */}
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Skills</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Expertise That <br/><span className="text-gradient">Drives Results</span>
            </h3>
          </div>

          <div className="space-y-12">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                <div className="md:col-span-3">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h4>
                </div>
                <div className="md:col-span-9 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-5 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:border-accent-violet/30 hover:bg-accent-violet/5 hover:text-accent-violet transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
        >
          {/* Header - Centered */}
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Education</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Education That Powers <br/><span className="text-gradient">Future Innovations</span>
            </h3>
          </div>

          <div className="space-y-16">
            {/* IIT Madras Entry */}
            <div 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start group cursor-pointer"
              onClick={() => onNavigate('edu-iitm')}
            >
              <div className="md:col-span-4 space-y-4">
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Ongoing</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 p-1.5 flex-shrink-0 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-sm transition-all group-hover:border-accent-violet/30 group-hover:shadow-lg group-hover:shadow-violet-500/10">
                      <img src={iitmLogoUrl} alt="IIT Madras Logo" className="max-w-full max-h-full object-contain" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-accent-violet">IIT Madras</p>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-500">Chennai, India</p>
              </div>
              <div className="md:col-span-8 flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">BS in Data Science & Applications</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    Indian Institute of Technology Madras, Chennai
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:bg-accent-violet/10 group-hover:text-accent-violet transition-all transform group-hover:translate-x-2">
                    <ArrowRight size={24} />
                </div>
              </div>
            </div>

            {/* The New College Entry */}
            <div 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start group cursor-pointer"
              onClick={() => onNavigate('edu-newcollege')}
            >
              <div className="md:col-span-4 space-y-4">
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">2023 - 2026</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 p-1.5 flex-shrink-0 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-sm transition-all group-hover:border-accent-violet/30 group-hover:shadow-lg group-hover:shadow-violet-500/10">
                      <img src={newCollegeLogoUrl} alt="The New College Logo" className="max-w-full max-h-full object-contain" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-accent-violet">The New College</p>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-500">Chennai, India</p>
              </div>
              <div className="md:col-span-8 flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">BSc in Mathematics</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    The New College, Chennai
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:bg-accent-violet/10 group-hover:text-accent-violet transition-all transform group-hover:translate-x-2">
                    <ArrowRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
