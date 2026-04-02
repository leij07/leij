"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-[#f2f2f2] selection:text-background overflow-x-hidden">
      {/* Navbar overlaying */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 backdrop-blur-md bg-background/50 border-b border-black/10 dark:border-white/10">
        <div className="font-semibold tracking-tighter text-2xl flex items-center gap-2">
            leij
        </div>
        <div className="flex gap-4 items-center uppercase tracking-widest font-medium">
          <div className="hidden md:flex gap-6 mr-4">
            <Link href="#home" className="text-xs hover:text-zinc-300  dark:text-zinc-400 transition-colors">Home</Link>
            <Link href="#projects" className="text-xs hover:text-zinc-300  dark:text-zinc-400 transition-colors">Projects</Link>
            <Link href="#contact" className="text-xs hover:text-zinc-80 dark:hover:text-zinc-300 hover:text-zinc-300  dark:text-zinc-400 transition-colors">Contact</Link>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={containerRef} className="relative pt-40 pb-24 px-6 md:px-12 md:pt-48 min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Gradients & Grid */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 pointer-events-none z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
          
          {/* Glowing accents */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-red-700/40 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute bottom-[0%] right-[10%] w-[50vw] h-[50vw] bg-amber-500/30 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-pink-600/30 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: heroY, opacity: heroOpacity }}
          className="flex flex-col gap-2 items-start leading-[0.9] tracking-tighter z-10"
        >
          {/* First Block: "Designing" */}
          <div className="relative inline-flex">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute inset-0"
            ></motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative text-[12vw] font-medium lg:text-[10vw] text-pink-900  dark:text-white px-2 py-1"
            >
              Designing 
            </motion.h1>
          </div>

          {/* Second Block: "for [Looping Details]" */}
          <div className="relative inline-flex items-center overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="absolute inset-0 "
            ></motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="relative text-[12vw] font-light lg:text-[10vw] text-pink-800 dark:text-white px-2 py-1 italic mr-4"
            >
              for
            </motion.h1>
            
            {/* The looping text inside the highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="relative flex flex-col h-[13vw] lg:h-[11vw] justify-start overflow-hidden"
            >
              <motion.div
                animate={{ y: ["0%", "0%", "-25%", "-25%", "-50%", "-50%", "-75%", "-75%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.33, 0.58, 0.66, 0.92, 1, 1]
                }}
                className="flex flex-col"
              >

                <div className="h-[13vw] lg:h-[11vw] flex items-center justify-start">
                  <h1 className="text-[12vw] font-medium lg:text-[10vw] text-pink-900  dark:text-white leading-none">Systems</h1>
                </div>
                <div className="h-[13vw] lg:h-[11vw] flex items-center justify-start">
                  <h1 className="text-[12vw] font-medium lg:text-[10vw] text-pink-900  dark:text-white leading-none">Brands</h1>
                </div>
                <div className="h-[13vw] lg:h-[11vw] flex items-center justify-start">
                  <h1 className="text-[12vw] font-medium lg:text-[10vw] text-pink-900  dark:text-white leading-none">Products</h1>
                </div>
                {/* Duplicated first item for seamless looping */}
                <div className="h-[13vw] lg:h-[11vw] flex items-center justify-start">
                  <h1 className="text-[12vw] font-medium lg:text-[10vw] text-pink-900  dark:text-white leading-none">Systems</h1>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ y: heroY, opacity: heroOpacity }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-end z-10"
        >
          <div className="text-zinc-100  dark:text-zinc-300 text-lg md:text-xl max-w-md leading-relaxed">
            Hi, I&apos;m Anjiel Mae Niño — an IT Student from Cavite State University, Philippines, passionate about making intuitive and visually stunning digital experiences.
            <div className="mt-8">
              <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-800 dark:bg-white text-white dark:text-pink-800 font-semibold hover:bg-white dark:hover:bg-pink-800 hover:text-pink-800 dark:hover:text-white transition-colors">
                Contact me <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="text-zinc-100 dark:text-zinc-300 text-lg md:text-xl max-w-md md:ml-auto leading-relaxed">
            I specialize in web development and UI/UX design, and blending seamless aesthetics. I focus on building efficient, well-structured code while designing intuitive, user-centered interfaces. I enjoy transforming ideas into functional and engaging digital experiences on the web.
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 md:px-12 bg-zinc-50 dark:bg-black rounded-t-[3rem] border-t border-black/5 dark:border-white/5 z-20">
        
        {/* Massive Sticky Background Text
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="sticky top-1/2 -translate-y-1/2 flex justify-center items-center w-full min-h-screen">
            <h2 className="text-[25vw] md:text-[30vw] font-bold tracking-tighter leading-[0.8] whitespace-nowrap text-white  dark:text-white mix-blend-overlay opacity-50 select-none">
              Portfolio
            </h2>
          </div>
        </div> */}

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl tracking-tighter font-medium mb-6">Projects</h2>
              <p className="text-zinc-800  dark:text-zinc-400 max-w-sm text-lg leading-relaxed">Discover a selection of projects designed to inspire, engage, and deliver results across multiple industries.</p>
            </div>
            <p className="text-xs uppercase tracking-widest text-foreground font-medium px-4 py-2 rounded-full border border-black/10 dark:border-white/10 flex shrink-0">Featured Work</p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-32 max-w-5xl mx-auto w-full">
            {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group block sticky top-8 md:top-[12vh] pt-4 md:pt-16 bg-zinc-50 dark:bg-black"
          >
            <div className="aspect-4/3 md:aspect-video w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative group-hover:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="absolute inset-0 bg-linear-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-2xl border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                    <Image src="https://portfolio-leij-projects.vercel.app/project1.png" alt="Prototype: User Interface E-commerce" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" width={400} height={400} />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
              <div>
                <h3 className="text-3xl font-medium tracking-tight transition-colors">Prototype: E-Commerce</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">Figma</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">UI/UX</span>
                </div>
              </div>
              <p className="text-zinc-800 dark:text-zinc-400 max-w-sm sm:text-right leading-relaxed">
                Prototype of a clean, user-friendly e-commerce interface with an emphasis on seamless shopping flows.
              </p>
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group block sticky top-12 md:top-[16vh] pt-4 md:pt-16 bg-zinc-50 dark:bg-black"
          >
            <div className="aspect-4/3 md:aspect-video w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative group-hover:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="absolute inset-0 bg-linear-to-bl from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-950 flex items-center justify-center">
                 <div className="w-[85%] h-[85%] rounded-2xl border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                    <Image
                      src="/project2.png"
                      alt="Prototype: Nova IT Solutions"
                      className="w-full h-full object-cover opacity-90        group-hover:opacity-100 transition-opacity duration-700"
                      width={1200}
                      height={800} quality={100} unoptimized={true}
                    />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-4"><h3 className="text-3xl font-medium tracking-tight transition-colors">Nova IT Solutions Landing Page</h3><Link href="https://www.figma.com/proto/gCuFyDJW2H68znDMMaIOE6/Nova-IT-Solutions?node-id=0-1&t=eymnsRDNHvUl5vNy-1" target="_blank" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform">Live View <ArrowUpRight className="w-3 h-3" /></Link></div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">Figma</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">UI/UX</span>
                </div>
              </div>
              <p className="text-zinc-800  dark:text-zinc-400 max-w-sm sm:text-right leading-relaxed">
                Interactive web prototype tailored for modern IT services, showcasing scalable digital design flows.
              </p>
            </div>
          </motion.div>
          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group block sticky top-16 md:top-[20vh] pt-4 md:pt-16 bg-zinc-50 dark:bg-black"
          >
            <div className="aspect-4/3 md:aspect-video w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative group-hover:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="absolute inset-0 bg-linear-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                 <div className="w-[85%] h-[85%] rounded-2xl border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                    <Image src="/project3.png" alt="Prototype: Arvo Real Estate Agencies" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" width={1200} height={800} quality={100} unoptimized={true} />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-4"><h3 className="text-3xl font-medium tracking-tight transition-colors">Arvo Landing Page</h3><Link href="https://www.figma.com/proto/p4CdNxYMeJ1gEfrbnnDfZG/Arvo-%7C-Real-Estate-Agencies?node-id=3-3&p=f&t=pEhtNNQhtqjB7F7N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3" target="_blank" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform">Live View <ArrowUpRight className="w-3 h-3" /></Link></div>
                <div className="flex flex-wrap max-w-xs gap-2 mt-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">Figma</span><span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">UI/UX</span>
                </div>
              </div>
              <p className="text-zinc-800  dark:text-zinc-400 max-w-sm sm:text-right leading-relaxed mt-2 sm:mt-0">
                Interactive web prototype tailored for real estate agencies, showcasing property listings and scalable digital design flows.
              </p>
            </div>
          </motion.div>
          {/* Project 5 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group block sticky top-20 md:top-[24vh] pt-4 md:pt-16 bg-zinc-50 dark:bg-black"
          >
            <div className="aspect-4/3 md:aspect-video w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative group-hover:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="absolute inset-0 bg-linear-to-tl from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center"> 
                 <div className="w-[85%] h-[85%] rounded-2xl border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                    <Image
                      src="/project6.png"
                      alt="Website: Multilab Diagnostic & Health Services"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        width={1200}
                        height={900}
                        quality={100}
                     />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl font-medium tracking-tight transition-colors">Multilab Diagnostics & Health Services</h3>
                  <Link href="https://multilab-app.vercel.app/" target="_blank" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform">
                    Live View <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="flex flex-wrap max-w-sm gap-2 mt-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">Next.js</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">Typescript</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border border-black/10 dark:border-white/10 uppercase tracking-wider">Supabase</span>
                </div>
              </div>
              <p className="text-zinc-800 dark:text-zinc-400 max-w-sm sm:text-right leading-relaxed mt-2 sm:mt-0">
                A web application for a diagnostic clinic featuring patient appointments, doctor scheduling, and services management.
              </p>
            </div>
          </motion.div>
        </div>        </div>      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl tracking-tighter font-medium mb-6">Skills</h2>
            <p className="text-zinc-800  dark:text-zinc-400 max-w-sm text-lg leading-relaxed">Here are my main technical competencies, blending front-end web development with system backend knowledge.</p>
          </div>
          <p className="text-xs uppercase tracking-widest text-foreground font-medium px-4 py-2 rounded-full border border-black/10 dark:border-white/10">Expertise</p>
        </div>

        <div className="flex flex-col border-t border-black/10 dark:border-white/10">
          {[
            {
              num: "01",
              title: "Frontend Dev.",
              desc: "Building responsive, performant, and accessible web experiences using modern frameworks and standard web tools.",
              tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"]
            },
            {
              num: "02",
              title: "UI / UX Design",
              desc: "Crafting user-centric interfaces with a strong emphasis on clean digital aesthetics, prototyping, and smooth flows.",
              tags: ["Figma", "Wireframing", "Prototyping"]
            },
            {
              num: "03",
              title: "Backend & Systems",
              desc: "Creating robust APIs, managing databases, and setting up reliable backend systems for data-driven applications.",
              tags: ["Node.js", "SQL", "Git"]
            }
          ].map((service, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i} 
              className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start group border-b border-black/10 dark:border-white/10"
            >
              <div className="md:col-span-1 text-zinc-500 dark:text-zinc-500 font-mono text-sm tracking-widest">{service.num}</div>
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-4xl tracking-tighter font-medium drop-shadow-sm group-hover:text-pink-300  dark:text-white transition-colors">{service.title}</h3>
              </div>
              <div className="md:col-span-4 text-zinc-800  dark:text-zinc-400 leading-relaxed max-w-md text-lg">
                {service.desc}
              </div>
              <div className="md:col-span-3 flex-col gap-0 border-l border-black/5 dark:border-white/5 pl-8 hidden md:flex">
                {service.tags.map((tag, j) => (
                  <div key={j} className="text-sm font-medium text-zinc-800  py-3 border-b border-black/5 dark:border-white/5 last:border-0 hover:text-pink-200  dark:text-white transition-colors">{tag}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="pt-32 pb-12 px-6 md:px-12  dark:bg-black rounded-t-[3rem] border-t border-black/5 dark:border-white/5">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter font-medium mb-12">
            Have an idea? <br/>
            <span className="text-pink-200 dark:text-pink-300  italic font-serif">Let&apos;s talk.</span>
          </h2>
          <Link href="mailto:hello@example.com" className="group flex items-center gap-4 px-10 py-5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105">
            Get in touch <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 dark:text-zinc-500 text-sm border-t border-black/10 dark:border-white/10 pt-8 font-medium tracking-wide">
          <div>© {new Date().getFullYear()} Anjiel Mae Niño. All Rights Reserved.</div>
          <div className="flex gap-8 items-center">
            <Link href="https://github.com" className="flex items-center gap-2 hover:text-whitedark:text-white transition-colors">
       
              <span>GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="flex items-center gap-2 hover:text-white  dark:text-white transition-colors">

              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}




