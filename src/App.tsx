import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowDown, ChevronRight, ChevronLeft, Copy, Check, ArrowRight } from 'lucide-react';
import { projects, categories, services, type Project } from './data/projects';

// ==================== NAVIGATION ====================
function Navbar({ onOpenBrief }: { onOpenBrief: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-pitch border-b-[3px] border-pitch' : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-[1600px] mx-auto">
          <a href="#" className="flex flex-col">
            <span className={`font-mono text-xs tracking-wider ${scrolled ? 'text-lime' : 'text-pitch'}`}>
              ◉ BRUTALIST DESIGN OFFICE
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-concrete' : 'text-graphite'} hidden sm:block`}>
              Independent Creative Practice
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider hover:text-lime transition-colors ${
                  scrolled ? 'text-pure' : 'text-pitch'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenBrief}
              className="bg-lime text-pitch px-5 py-2.5 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-pitch hover:text-lime transition-colors"
            >
              START A PROJECT ↗
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 ${scrolled ? 'text-pure' : 'text-pitch'}`}
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={3} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-pitch flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b-[3px] border-graphite">
              <span className="font-mono text-xs text-lime tracking-wider">◉ MENU</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-pure p-2"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={3} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-5xl md:text-7xl font-black text-pure uppercase tracking-tight hover:text-lime transition-colors py-2 border-b border-graphite"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="px-6 pb-8">
              <button
                onClick={() => { setMobileOpen(false); onOpenBrief(); }}
                className="w-full bg-lime text-pitch py-4 font-bold text-lg uppercase tracking-wider border-[3px] border-lime hover:bg-pure transition-colors"
              >
                START A PROJECT ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==================== HERO ====================
function Hero({ onOpenBrief }: { onOpenBrief: () => void }) {
  return (
    <section className="min-h-screen bg-paper relative overflow-hidden pt-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs tracking-[0.3em] text-graphite mb-8 md:mb-12"
        >
          BOLD & BRUTALIST / INDEPENDENT CONCEPT
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left: Typography */}
          <div className="lg:col-span-7 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.85] tracking-tighter text-pitch"
            >
              GOOD<br />DESIGN.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.85] tracking-tighter text-pitch"
            >
              NO QUIET<br />VOICES.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 md:mt-8 text-base md:text-lg text-graphite max-w-lg leading-relaxed"
            >
              An independent creative practice making sharp identities, unapologetic campaigns, and digital work with a point of view.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-pitch text-lime px-6 py-3 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-lime hover:text-pitch transition-colors"
              >
                SEE THE WORK <ArrowUpRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-transparent text-pitch px-6 py-3 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-pitch hover:text-paper transition-colors"
              >
                OUR POINT OF VIEW <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Micro labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex flex-wrap gap-6 font-mono text-[10px] tracking-[0.2em] text-graphite uppercase"
            >
              <span>DESIGNED FOR REAL LIFE</span>
              <span>BUILT TO MAKE A STATEMENT</span>
            </motion.div>
          </div>

          {/* Right: Geometric Artwork */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Background circle */}
              <div className="absolute inset-4 bg-pitch rounded-full" />
              {/* Lime accent block */}
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lime border-[3px] border-pitch" />
              {/* Red accent */}
              <div className="absolute bottom-8 left-4 w-20 h-20 bg-red" />
              {/* Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[10rem] font-black text-paper opacity-90">
                ◉
              </div>
              {/* Lines */}
              <div className="absolute bottom-0 right-8 w-[3px] h-1/2 bg-lime" />
              <div className="absolute top-1/4 left-0 w-1/3 h-[3px] bg-paper" />
              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-[3px] border-l-[3px] border-paper" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-[3px] border-r-[3px] border-paper" />
              {/* Small text */}
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-paper tracking-wider">
                EST. 2024
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section number */}
      <div className="absolute top-24 right-4 md:right-8 font-mono text-xs tracking-wider text-graphite">
        00 / HERO
      </div>
    </section>
  );
}

// ==================== EDITORIAL TICKER ====================
function EditorialTicker() {
  const text = 'MADE WITH INTENTION ✳ BUILT TO INSPIRE ✳ NO UNNECESSARY POLISH ✳ GOOD IDEAS ONLY ✳ ';
  return (
    <div className="bg-pitch border-y-[3px] border-pitch py-4 overflow-hidden">
      <div className="animate-ticker whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-lime font-black text-xl md:text-2xl tracking-wider mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// ==================== PROJECT ARTWORK ====================
function ProjectArtwork({ project, size = 'large' }: { project: Project; size?: 'large' | 'small' }) {
  const sizeClass = size === 'large' ? 'aspect-[4/3]' : 'aspect-square';

  const patterns: Record<string, React.ReactNode> = {
    circles: (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: project.colors[1] || '#111' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-[6px]" style={{ borderColor: project.colors[0] }} />
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 rounded-full" style={{ backgroundColor: project.accentColor }} />
        <div className="absolute bottom-4 right-4 font-mono text-xs" style={{ color: project.colors[2] || '#fff' }}>{project.number}</div>
      </div>
    ),
    stripes: (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: project.colors[2] || '#F5F4EC' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute top-0 h-full" style={{ left: `${i * 18}%`, width: '8%', backgroundColor: i % 2 === 0 ? project.accentColor : project.colors[0] }} />
        ))}
        <div className="absolute bottom-4 right-4 font-mono text-xs text-pitch">{project.number}</div>
      </div>
    ),
    grid: (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: project.colors[0] }}>
        <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border" style={{ borderColor: project.colors[2] || '#D7FF00', backgroundColor: i === 4 ? project.accentColor : 'transparent' }} />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-xs" style={{ color: project.colors[2] || '#fff' }}>{project.number}</div>
      </div>
    ),
    blocks: (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: project.colors[1] || '#111' }}>
        <div className="absolute top-4 left-4 w-1/2 h-1/2" style={{ backgroundColor: project.accentColor }} />
        <div className="absolute bottom-4 right-4 w-1/3 h-1/3 border-[4px]" style={{ borderColor: project.colors[2] || '#C8C8C0' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-4xl" style={{ color: project.colors[2] || '#fff' }}>{project.number}</div>
      </div>
    ),
    diagonal: (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: project.colors[2] || '#F5F4EC' }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor} 50%, transparent 50%)` }} />
        <div className="absolute bottom-4 left-4 font-black text-5xl" style={{ color: project.colors[0] }}>{project.number}</div>
      </div>
    ),
    dots: (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: project.colors[2] || '#111' }}>
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-3 p-6">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="rounded-full" style={{ backgroundColor: i % 3 === 0 ? project.accentColor : i % 5 === 0 ? project.colors[0] : 'transparent', opacity: i % 3 === 0 ? 1 : 0.3 }} />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-xs" style={{ color: project.colors[0] }}>{project.number}</div>
      </div>
    ),
  };

  return (
    <div className={`${sizeClass} w-full border-[3px] border-pitch`}>
      {patterns[project.pattern]}
    </div>
  );
}

// ==================== PORTFOLIO SECTION ====================
function PortfolioSection({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryFilter === activeFilter);

  return (
    <section id="work" className="bg-paper py-16 md:py-24 border-b-[3px] border-pitch">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-graphite mb-4">01 / THE COLLECTION</div>
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-tighter text-pitch">
            SELECTED<br />WORK.
          </h2>
          <p className="mt-4 text-lg text-graphite max-w-lg">
            Big type. Clear ideas. Work with something to say.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b-[3px] border-pitch pb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 font-mono text-xs tracking-wider border-[3px] border-pitch transition-colors ${
                activeFilter === cat.id
                  ? 'bg-pitch text-lime'
                  : 'bg-transparent text-pitch hover:bg-pitch hover:text-paper'
              }`}
              aria-pressed={activeFilter === cat.id}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-graphite self-center">
            {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''}
          </span>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border-[3px] border-pitch border-dashed">
            <p className="font-mono text-sm text-graphite">NO PROJECTS IN THIS CATEGORY YET.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-[3px] border-pitch group cursor-pointer hover:bg-pitch transition-colors"
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectProject(project); } }}
                aria-label={`View project: ${project.name}`}
              >
                <ProjectArtwork project={project} />
                <div className="p-4 md:p-6">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-xs text-graphite">{project.number}</span>
                    <span className="font-mono text-[10px] tracking-wider text-graphite uppercase">{project.category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight group-hover:text-lime transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-graphite leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-pitch group-hover:text-lime">
                    VIEW PROJECT <ArrowUpRight size={12} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ==================== PROJECT CASE STUDY MODAL ====================
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-paper overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.name}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-10 bg-pitch text-pure p-3 border-[3px] border-pitch hover:bg-lime hover:text-pitch transition-colors"
        aria-label="Close case study"
      >
        <X size={20} strokeWidth={3} />
      </button>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-20 pb-16">
        {/* Header */}
        <div className="border-b-[3px] border-pitch pb-8 mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-graphite mb-4">
            PROJECT {project.number} / {project.category.toUpperCase()} / {project.year}
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter">
            {project.name}
          </h2>
          <p className="mt-6 text-lg text-graphite max-w-2xl">{project.description}</p>
        </div>

        {/* Hero artwork */}
        <div className="mb-12 border-[3px] border-pitch">
          <ProjectArtwork project={project} size="large" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <div>
            <div className="font-mono text-xs tracking-[0.2em] text-graphite mb-3">01 / THE CHALLENGE</div>
            <h3 className="text-2xl font-black mb-4">What We Faced</h3>
            <p className="text-graphite leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <div className="font-mono text-xs tracking-[0.2em] text-graphite mb-3">02 / THE DIRECTION</div>
            <h3 className="text-2xl font-black mb-4">How We Approached It</h3>
            <p className="text-graphite leading-relaxed">{project.direction}</p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="border-t-[3px] border-pitch pt-8 mb-16">
          <div className="font-mono text-xs tracking-[0.2em] text-graphite mb-6">03 / DELIVERABLES</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.deliverables.map((d, i) => (
              <div key={i} className="border-[3px] border-pitch p-3 font-bold text-sm">
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Color palette */}
        <div className="border-t-[3px] border-pitch pt-8 mb-16">
          <div className="font-mono text-xs tracking-[0.2em] text-graphite mb-6">04 / COLOR SYSTEM</div>
          <div className="flex gap-3">
            {project.colors.map((color, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-24 md:h-24 border-[3px] border-pitch" style={{ backgroundColor: color }} />
                <span className="font-mono text-[10px]">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t-[3px] border-pitch pt-8 flex justify-between items-center">
          {prevProject ? (
            <button
              onClick={() => {
                const el = document.getElementById('case-study-scroll');
                if (el) el.scrollTop = 0;
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-lime transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>{prevProject.name}</span>
            </button>
          ) : <div />}
          {nextProject ? (
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-lime transition-colors group"
            >
              <span>{nextProject.name}</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </div>
    </motion.div>
  );
}

// ==================== MANIFESTO SECTION ====================
function ManifestoSection() {
  const principles = [
    { title: 'Make It Mean Something', description: 'Every visual decision should serve an idea.' },
    { title: 'Say It Clearly', description: 'Strong design should make the message easier to understand, not harder.' },
    { title: 'Break the Pattern', description: 'Experiment with conventions when there is a meaningful reason to do so.' },
  ];

  return (
    <section id="about" className="bg-pitch text-pure py-16 md:py-24 border-b-[3px] border-pitch">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="font-mono text-xs tracking-[0.3em] text-lime mb-8">02 / OUR POINT OF VIEW</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1] tracking-tight">
              GOOD DESIGN SHOULD FEEL CLEAR, USEFUL, AND A LITTLE UNEXPECTED.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-concrete leading-relaxed">
              We believe good design should have a point of view. We use typography, systems, ideas, and visual experimentation to make work that communicates clearly and feels distinctly its own.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-[3px] border-graphite">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-b-[3px] md:border-b-0 md:border-r-[3px] last:border-r-0 border-graphite p-6 md:p-8"
            >
              <div className="font-mono text-xs text-lime mb-4">0{i + 1}</div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">{p.title}</h3>
              <p className="text-concrete text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Large symbol */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 border-[4px] border-lime rounded-full flex items-center justify-center">
            <span className="text-5xl md:text-7xl text-lime">✳</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES SECTION ====================
function ServicesSection({ onOpenBrief }: { onOpenBrief: () => void }) {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section id="services" className="bg-paper py-16 md:py-24 border-b-[3px] border-pitch">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="font-mono text-xs tracking-[0.3em] text-graphite mb-4">03 / THE PRACTICE</div>
        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter mb-12">
          FROM FIRST IDEA<br />TO FULL VOLUME.
        </h2>

        <div className="border-t-[3px] border-pitch">
          {services.map((service) => (
            <div key={service.id} className="border-b-[3px] border-pitch">
              <button
                onClick={() => setOpenService(openService === service.id ? null : service.id)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-pitch hover:text-paper transition-colors group"
                aria-expanded={openService === service.id}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="font-mono text-xs text-graphite group-hover:text-lime">{service.number}</span>
                  <span className="text-xl md:text-3xl font-black tracking-tight">{service.name}</span>
                </div>
                <ChevronRight
                  size={20}
                  className={`transition-transform ${openService === service.id ? 'rotate-90' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-6 md:pb-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-concrete pt-6">
                      <div>
                        <p className="text-graphite leading-relaxed mb-4">{service.description}</p>
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenBrief(); }}
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold hover:text-lime transition-colors"
                        >
                          START A PROJECT <ArrowUpRight size={12} />
                        </button>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-wider text-graphite mb-3">DELIVERABLES</div>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((d, i) => (
                            <span key={i} className="px-3 py-1 border-[2px] border-pitch text-xs font-bold">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURE BAND ====================
function FeatureBand({ onOpenBrief }: { onOpenBrief: () => void }) {
  return (
    <section className="bg-lime py-16 md:py-24 border-b-[3px] border-pitch relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter text-pitch">
              CAMPAIGNS.<br />WITHOUT THE<br />EXTRA NOISE.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-3 bg-pitch text-lime px-8 py-4 font-bold text-lg uppercase tracking-wider border-[3px] border-pitch hover:bg-paper hover:text-pitch transition-colors"
            >
              LET'S MAKE SOMETHING <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pitch opacity-10" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-[4px] border-pitch rounded-full hidden md:block" />
    </section>
  );
}

// ==================== PROCESS SECTION ====================
function ProcessSection() {
  const steps = [
    { number: '01', title: 'Discover', description: 'Understand the problem, context, audience, and desired outcome.' },
    { number: '02', title: 'Explore', description: 'Develop concepts, references, directions, and visual possibilities.' },
    { number: '03', title: 'Make', description: 'Refine the chosen direction into a cohesive design system or final deliverable.' },
    { number: '04', title: 'Deliver', description: 'Prepare the work for its intended use and provide the relevant assets.' },
  ];

  return (
    <section className="bg-paper py-16 md:py-24 border-b-[3px] border-pitch">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="font-mono text-xs tracking-[0.3em] text-graphite mb-4">04 / HOW WE WORK</div>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.9] tracking-tighter mb-12">
          HOW GOOD WORK<br />HAPPENS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t-[3px] border-pitch">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b-[3px] lg:border-b-0 lg:border-r-[3px] last:border-r-0 border-pitch p-6 md:p-8 relative"
            >
              <div className="text-[4rem] md:text-[5rem] font-black text-concrete leading-none mb-4">{step.number}</div>
              <h3 className="text-xl font-black mb-2">{step.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[3px] bg-pitch" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PROJECT BRIEF BUILDER ====================
interface BriefData {
  projectType: string;
  creativeAmbition: string;
  projectName: string;
  description: string;
  audience: string;
  objective: string;
  deliverables: string;
  budget: string;
  timeline: string;
  references: string;
  notes: string;
}

function ProjectBriefBuilder({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<BriefData>({
    projectType: '',
    creativeAmbition: '',
    projectName: '',
    description: '',
    audience: '',
    objective: '',
    deliverables: '',
    budget: '',
    timeline: '',
    references: '',
    notes: '',
  });

  const updateData = (field: keyof BriefData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const resetBrief = () => {
    setData({
      projectType: '', creativeAmbition: '', projectName: '', description: '',
      audience: '', objective: '', deliverables: '', budget: '', timeline: '',
      references: '', notes: '',
    });
    setStep(1);
  };

  const copyBrief = async () => {
    const summary = `PROJECT BRIEF
================
Type: ${data.projectType || 'Not specified'}
Ambition: ${data.creativeAmbition || 'Not specified'}
Project: ${data.projectName || 'Not specified'}
Description: ${data.description || 'Not specified'}
Audience: ${data.audience || 'Not specified'}
Objective: ${data.objective || 'Not specified'}
Deliverables: ${data.deliverables || 'Not specified'}
Budget: ${data.budget || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}
References: ${data.references || 'Not specified'}
Notes: ${data.notes || 'Not specified'}
================
Generated by BRUTALIST DESIGN OFFICE`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = summary;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projectTypes = ['Brand Identity', 'Website Design', 'Campaign', 'Packaging', 'Art Direction', 'Experimental Project', 'Something Else'];
  const ambitions = ['Bold and expressive', 'Minimal and precise', 'Experimental and unexpected', 'Clear and functional', 'Still exploring'];
  const budgets = ['Under $5K', '$5K – $15K', '$15K – $50K', '$50K+', 'Let\'s discuss'];
  const timelines = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Flexible'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] bg-paper overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Project Brief Builder"
    >
      {/* Header */}
      <div className="sticky top-0 bg-pitch border-b-[3px] border-pitch z-10">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs text-lime tracking-wider">PROJECT BRIEF BUILDER</span>
            <span className="text-pure text-sm ml-4">STEP {step} OF 5</span>
          </div>
          <button
            onClick={onClose}
            className="text-pure p-2 hover:text-lime transition-colors"
            aria-label="Close brief builder"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-graphite">
          <div className="h-full bg-lime transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Step 1: Project Type */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">WHAT ARE YOU MAKING?</h2>
            <p className="text-graphite mb-8">Choose the type of project you have in mind.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map(type => (
                <button
                  key={type}
                  onClick={() => updateData('projectType', type)}
                  className={`p-4 text-left font-bold border-[3px] border-pitch transition-colors ${
                    data.projectType === type ? 'bg-pitch text-lime' : 'hover:bg-concrete'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Creative Ambition */}
        {step === 2 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">WHAT'S THE AMBITION?</h2>
            <p className="text-graphite mb-8">What kind of creative outcome are you interested in?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ambitions.map(amb => (
                <button
                  key={amb}
                  onClick={() => updateData('creativeAmbition', amb)}
                  className={`p-4 text-left font-bold border-[3px] border-pitch transition-colors ${
                    data.creativeAmbition === amb ? 'bg-pitch text-lime' : 'hover:bg-concrete'
                  }`}
                >
                  {amb}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Project Details */}
        {step === 3 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">TELL US MORE.</h2>
            <p className="text-graphite mb-8">Describe your project. Only fill in what you know.</p>
            <div className="space-y-6">
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">PROJECT NAME *</label>
                <input
                  type="text"
                  value={data.projectName}
                  onChange={e => updateData('projectName', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent font-bold focus:outline-none focus:border-lime"
                  placeholder="e.g., My New Brand"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">SHORT DESCRIPTION *</label>
                <textarea
                  value={data.description}
                  onChange={e => updateData('description', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent font-medium focus:outline-none focus:border-lime resize-none h-24"
                  placeholder="What is this project about?"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">INTENDED AUDIENCE</label>
                <input
                  type="text"
                  value={data.audience}
                  onChange={e => updateData('audience', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent focus:outline-none focus:border-lime"
                  placeholder="Who is this for?"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">MAIN OBJECTIVE</label>
                <input
                  type="text"
                  value={data.objective}
                  onChange={e => updateData('objective', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent focus:outline-none focus:border-lime"
                  placeholder="What should this achieve?"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">DESIRED DELIVERABLES</label>
                <input
                  type="text"
                  value={data.deliverables}
                  onChange={e => updateData('deliverables', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent focus:outline-none focus:border-lime"
                  placeholder="e.g., Logo, Website, Social Templates"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Practical Details */}
        {step === 4 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">PRACTICAL DETAILS.</h2>
            <p className="text-graphite mb-8">Optional but helpful. Fill in what you can.</p>
            <div className="space-y-6">
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">BUDGET RANGE</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgets.map(b => (
                    <button
                      key={b}
                      onClick={() => updateData('budget', b)}
                      className={`p-3 text-sm font-bold border-[3px] border-pitch transition-colors ${
                        data.budget === b ? 'bg-pitch text-lime' : 'hover:bg-concrete'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">DESIRED LAUNCH PERIOD</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timelines.map(t => (
                    <button
                      key={t}
                      onClick={() => updateData('timeline', t)}
                      className={`p-3 text-sm font-bold border-[3px] border-pitch transition-colors ${
                        data.timeline === t ? 'bg-pitch text-lime' : 'hover:bg-concrete'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">REFERENCE LINKS</label>
                <input
                  type="text"
                  value={data.references}
                  onChange={e => updateData('references', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent focus:outline-none focus:border-lime"
                  placeholder="Links to inspiration (optional)"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wider mb-2">ADDITIONAL NOTES</label>
                <textarea
                  value={data.notes}
                  onChange={e => updateData('notes', e.target.value)}
                  className="w-full p-3 border-[3px] border-pitch bg-transparent focus:outline-none focus:border-lime resize-none h-24"
                  placeholder="Anything else we should know?"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">REVIEW YOUR BRIEF.</h2>
            <p className="text-graphite mb-8">Check everything looks right. You can go back and edit any step.</p>

            <div className="border-[3px] border-pitch divide-y-[3px] divide-pitch">
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">TYPE</span>
                <span className="col-span-2 font-bold">{data.projectType || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">AMBITION</span>
                <span className="col-span-2 font-bold">{data.creativeAmbition || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">PROJECT</span>
                <span className="col-span-2 font-bold">{data.projectName || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">DESCRIPTION</span>
                <span className="col-span-2 text-sm">{data.description || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">AUDIENCE</span>
                <span className="col-span-2 text-sm">{data.audience || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">OBJECTIVE</span>
                <span className="col-span-2 text-sm">{data.objective || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">BUDGET</span>
                <span className="col-span-2 font-bold">{data.budget || '—'}</span>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <span className="font-mono text-xs text-graphite">TIMELINE</span>
                <span className="col-span-2 font-bold">{data.timeline || '—'}</span>
              </div>
            </div>

            <div className="mt-6 p-4 border-[3px] border-dashed border-graphite">
              <p className="text-sm text-graphite">
                <strong>Note:</strong> This is a local brief builder. Your information has not been sent anywhere. Use the copy button below to save your brief and share it via email.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap gap-3 items-center">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-2 px-5 py-3 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-pitch hover:text-paper transition-colors"
            >
              <ChevronLeft size={14} /> BACK
            </button>
          )}
          {step < 5 && (
            <button
              onClick={() => {
                if (step === 3 && (!data.projectName || !data.description)) {
                  alert('Please fill in the required fields (Project Name and Description).');
                  return;
                }
                setStep(step + 1);
              }}
              className="inline-flex items-center gap-2 bg-pitch text-lime px-5 py-3 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-lime hover:text-pitch transition-colors"
            >
              NEXT <ChevronRight size={14} />
            </button>
          )}
          {step === 5 && (
            <>
              <button
                onClick={copyBrief}
                className="inline-flex items-center gap-2 bg-lime text-pitch px-5 py-3 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-pitch hover:text-lime transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'COPIED!' : 'COPY BRIEF'}
              </button>
              <button
                onClick={resetBrief}
                className="inline-flex items-center gap-2 px-5 py-3 font-bold text-sm uppercase tracking-wider border-[3px] border-pitch hover:bg-red hover:text-pure hover:border-red transition-colors"
              >
                CLEAR & RESTART
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="ml-auto font-mono text-xs text-graphite hover:text-pitch transition-colors"
          >
            CLOSE ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ==================== CONTACT SECTION ====================
function ContactSection({ onOpenBrief }: { onOpenBrief: () => void }) {
  return (
    <section id="contact" className="bg-pitch text-pure py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="font-mono text-xs tracking-[0.3em] text-lime mb-8">05 / START SOMETHING</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.85] tracking-tighter">
              GOT A<br />GOOD IDEA?
            </h2>
            <p className="text-2xl md:text-3xl font-black text-lime mt-4">LET'S GIVE IT A SHAPE.</p>
            <p className="mt-6 text-concrete leading-relaxed max-w-md">
              Tell us what you're thinking. Bring a rough idea, a complicated challenge, or a direction you want to explore.
            </p>
            <button
              onClick={onOpenBrief}
              className="mt-8 inline-flex items-center gap-3 bg-lime text-pitch px-8 py-4 font-bold text-lg uppercase tracking-wider border-[3px] border-lime hover:bg-pure transition-colors"
            >
              START A PROJECT <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="flex flex-col justify-end">
            <div className="border-[3px] border-graphite p-6 md:p-8">
              <div className="font-mono text-xs tracking-wider text-lime mb-4">QUICK CONTACT</div>
              <p className="text-concrete text-sm leading-relaxed mb-4">
                Prefer email? Send a direct message with your project details and we'll get back to you.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-graphite">EMAIL</span>
                  <span className="font-bold text-sm">hello@brutalistdesign.office</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-graphite">BASED IN</span>
                  <span className="font-bold text-sm">Everywhere with good wifi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-pitch text-pure border-t-[3px] border-graphite">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-mono text-xs text-lime tracking-wider mb-2">◉ BRUTALIST DESIGN OFFICE</div>
            <p className="text-concrete text-sm">Good Design. No Quiet Voices.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-graphite tracking-wider mb-2">NAVIGATION</div>
            <div className="flex flex-col gap-1">
              <a href="#work" className="text-sm hover:text-lime transition-colors">Work</a>
              <a href="#services" className="text-sm hover:text-lime transition-colors">Services</a>
              <a href="#about" className="text-sm hover:text-lime transition-colors">About</a>
              <a href="#contact" className="text-sm hover:text-lime transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-graphite tracking-wider mb-2">CONNECT</div>
            <div className="flex flex-col gap-1">
              <span className="text-sm">Instagram</span>
              <span className="text-sm">Behance</span>
              <span className="text-sm">Are.na</span>
            </div>
          </div>
        </div>
        <div className="border-t border-graphite pt-6 flex flex-wrap justify-between items-center gap-4">
          <span className="font-mono text-[10px] text-graphite tracking-wider">
            © 2024 BRUTALIST DESIGN OFFICE. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] text-graphite tracking-wider">
            GOOD DESIGN. NO QUIET VOICES.
          </span>
        </div>
      </div>
    </footer>
  );
}

// ==================== SKIP LINK ====================
function SkipLink() {
  return (
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-lime focus:text-pitch focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
    >
      Skip to content
    </a>
  );
}

// ==================== MAIN APP ====================
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [briefOpen, setBriefOpen] = useState(false);

  const openBrief = useCallback(() => setBriefOpen(true), []);
  const closeBrief = useCallback(() => setBriefOpen(false), []);
  const openProject = useCallback((p: Project) => setSelectedProject(p), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="page-wrapper min-h-screen bg-paper">
      <SkipLink />
      <Navbar onOpenBrief={openBrief} />
      <main>
        <Hero onOpenBrief={openBrief} />
        <EditorialTicker />
        <PortfolioSection onSelectProject={openProject} />
        <ManifestoSection />
        <ServicesSection onOpenBrief={openBrief} />
        <FeatureBand onOpenBrief={openBrief} />
        <ProcessSection />
        <ContactSection onOpenBrief={openBrief} />
      </main>
      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={closeProject} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {briefOpen && (
          <ProjectBriefBuilder isOpen={briefOpen} onClose={closeBrief} />
        )}
      </AnimatePresence>
    </div>
  );
}
