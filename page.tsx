'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Play, 
  Youtube, 
  MessageCircle, 
  Code, 
  Globe, 
  Lightbulb, 
  Zap,
  ArrowRight,
  Terminal,
  Braces,
  FileCode,
  Coffee,
  ExternalLink
} from 'lucide-react'

// Floating particles component
function FloatingParticles() {
  return (
    <div className="particles-container">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  )
}

// Code symbols background
function CodeSymbolsBg() {
  const symbols = ['<', '>', '{', '}', '/', '(', ')', ';', '=', '+', '-', '*', '&', '#', '@', '!']
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      <div className="marquee whitespace-nowrap text-[#C6FF00] text-4xl font-mono leading-relaxed">
        {[...Array(4)].map((_, row) => (
          <span key={row} className="inline-block mr-8">
            {[...Array(30)].map((_, col) => (
              <span key={col} className="inline-block mx-2">
                {symbols[Math.floor(Math.random() * symbols.length)]}
              </span>
            ))}
          </span>
        ))}
      </div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-[#C6FF00] text-opacity-10 font-mono text-2xl"
          style={{
            top: `${10 + i * 12}%`,
            left: `${Math.random() * 90}%`,
            opacity: 0.03,
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </div>
      ))}
    </div>
  )
}

// Animated section wrapper
function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in-up' 
}: { 
  children: React.ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      <CodeSymbolsBg />
      <FloatingParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#C6FF00] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src="/codenexora-logo.jpg" 
              alt="CodeNexora Logo" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-[#C6FF00]/30 shadow-lg shadow-[#C6FF00]/20"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Learn Programming From</span>
          <br />
          <span className="text-[#C6FF00] neon-text-glow">Zero to Professional</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Practical programming tutorials for beginners
        </p>

        {/* Code snippet decoration */}
        <div className="hidden md:block absolute left-8 top-1/3 opacity-30">
          <div className="code-block text-sm">
            <span className="text-purple-400">const</span> <span className="text-[#C6FF00]">developer</span> = {'{'}
            <br />
            &nbsp;&nbsp;skills: [<span className="text-orange-400">&apos;HTML&apos;</span>, <span className="text-orange-400">&apos;CSS&apos;</span>],
            <br />
            &nbsp;&nbsp;passion: <span className="text-orange-400">&apos;coding&apos;</span>
            <br />
            {'}'};
          </div>
        </div>

        <div className="hidden md:block absolute right-8 top-1/3 opacity-30">
          <div className="code-block text-sm">
            <span className="text-purple-400">function</span> <span className="text-[#C6FF00]">learn</span>() {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-purple-400">return</span> success;
            <br />
            {'}'}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-neon flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Watch Tutorials
          </button>
          <a 
            href="https://youtube.com/@codenexora-01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline-neon flex items-center gap-2 text-lg"
          >
            <Youtube className="w-5 h-5" />
            Visit YouTube Channel
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#C6FF00] rounded-full flex justify-center opacity-50">
            <div className="w-1 h-3 bg-[#C6FF00] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 relative code-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#C6FF00] to-[#00ffcc] flex items-center justify-center">
              <Code className="w-10 h-10 text-[#0f2424]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              About the <span className="text-[#C6FF00]">Creator</span>
            </h2>
            <div className="w-20 h-1 bg-[#C6FF00] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              <span className="text-[#C6FF00] font-semibold">Omar AG</span> is a programming content creator focused on helping beginners learn coding step by step through practical and easy-to-follow tutorials. With a passion for teaching and years of experience, Omar makes complex programming concepts accessible to everyone.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C6FF00]">50+</div>
                <div className="text-gray-400 text-sm">Tutorials</div>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C6FF00]">700+</div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C6FF00]">2+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Video data - Real video from CodeNexora YouTube channel
const videos = [
  {
    id: 1,
    title: 'Programming Tutorial',
    description: 'Learn programming with CodeNexora - practical tutorials for beginners.',
    videoId: 'Tg2KQlaezGU',
    thumbnail: `https://img.youtube.com/vi/Tg2KQlaezGU/maxresdefault.jpg`,
  },
]

// Video Modal Component
function VideoModal({ 
  videoId, 
  isOpen, 
  onClose 
}: { 
  videoId: string
  isOpen: boolean
  onClose: () => void 
}) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl aspect-video bg-[#0f2424] rounded-xl overflow-hidden shadow-2xl shadow-[#C6FF00]/20 border border-[#C6FF00]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#C6FF00] transition-colors z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* YouTube Embed with security attributes */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

// Video Lessons Section
function VideoLessonsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="videos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Video </span>
            <span className="text-[#C6FF00] neon-text-glow">Lessons</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch programming tutorials from CodeNexora YouTube channel
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {videos.map((video, index) => (
            <AnimatedSection 
              key={video.id} 
              animation="scale-in"
              className={`stagger-${(index % 5) + 1} w-full max-w-md`}
            >
              <div 
                className="video-card glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video.videoId)}
              >
                <div className="relative aspect-video bg-[#1a3a3a]">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#C6FF00] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-[#C6FF00]/50">
                      <Play className="w-8 h-8 text-[#0f2424] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C6FF00] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {video.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#C6FF00] hover:gap-3 transition-all text-sm font-medium">
                    Watch Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://youtube.com/@codenexora-01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline-neon inline-flex items-center gap-2"
          >
            View All Videos on YouTube <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        videoId={selectedVideo || ''} 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </section>
  )
}

// Learning paths data
const learningPaths = [
  {
    title: 'Learning C',
    description: 'Master C programming language from basics to advanced concepts.',
    icon: Terminal,
    lessons: 1,
    level: 'Beginner',
    color: '#C6FF00',
    videoId: 'Tg2KQlaezGU',
    available: true,
  },
  {
    title: 'HTML & CSS',
    description: 'Build the foundation of web development with HTML structure and CSS styling.',
    icon: FileCode,
    lessons: 25,
    level: 'Beginner',
    color: '#ff6b6b',
    available: false,
  },
  {
    title: 'JavaScript',
    description: 'Master JavaScript programming and bring your websites to life.',
    icon: Braces,
    lessons: 40,
    level: 'Beginner to Intermediate',
    color: '#ffd93d',
    available: false,
  },
  {
    title: 'Web Development',
    description: 'Create complete web projects from scratch with modern techniques.',
    icon: Globe,
    lessons: 35,
    level: 'Intermediate',
    color: '#6bcb77',
    available: false,
  },
  {
    title: 'Programming Tips',
    description: 'Essential tips and best practices for writing clean, efficient code.',
    icon: Lightbulb,
    lessons: 20,
    level: 'All Levels',
    color: '#4d96ff',
    available: false,
  },
]

// Learning Paths Section
function LearningPathsSection() {
  const [pathVideoOpen, setPathVideoOpen] = useState(false)

  return (
    <section id="paths" className="py-24 relative code-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Learning </span>
            <span className="text-[#C6FF00] neon-text-glow">Paths</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your learning journey and master programming step by step
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {learningPaths.map((path, index) => (
            <AnimatedSection 
              key={path.title} 
              animation="scale-in"
              className={`stagger-${(index % 5) + 1}`}
            >
              <div 
                className={`glass-card p-6 h-full transition-all duration-300 group ${
                  path.available 
                    ? 'hover:border-[#C6FF00] cursor-pointer hover-glow' 
                    : 'opacity-70 cursor-default'
                }`}
                onClick={() => path.available && path.videoId && setPathVideoOpen(true)}
              >
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${path.color}20` }}
                  >
                    <path.icon className="w-7 h-7" style={{ color: path.color }} />
                  </div>
                  
                  {/* Coming Soon Badge */}
                  {!path.available && (
                    <span className="absolute top-0 right-0 px-2 py-1 text-xs font-medium rounded bg-gray-700 text-gray-300">
                      Coming Soon
                    </span>
                  )}
                  
                  {/* Available Badge */}
                  {path.available && (
                    <span className="absolute top-0 right-0 px-2 py-1 text-xs font-medium rounded bg-[#C6FF00] text-[#0f2424]">
                      Available
                    </span>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  path.available ? 'text-white group-hover:text-[#C6FF00]' : 'text-gray-400'
                }`}>
                  {path.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {path.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className={path.available ? 'text-[#C6FF00]' : 'text-gray-500'}>
                    {path.available ? `${path.lessons} lesson${path.lessons > 1 ? 's' : ''}` : 'Coming Soon'}
                  </span>
                  <span className="text-gray-500">{path.level}</span>
                </div>
                
                {path.available && (
                  <button className="mt-4 w-full btn-neon text-sm py-2">
                    Start Learning
                  </button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Video Modal for Learning C */}
        <VideoModal 
          videoId={learningPaths[0].videoId || ''} 
          isOpen={pathVideoOpen} 
          onClose={() => setPathVideoOpen(false)} 
        />
      </div>
    </section>
  )
}

// Featured tutorials data
const featuredTutorials = [
  {
    title: 'Programming Tutorial - CodeNexora',
    description: 'Learn programming step by step with practical examples. Perfect for beginners who want to start their coding journey.',
    tags: ['Programming', 'Tutorial', 'Beginner'],
    videoId: 'Tg2KQlaezGU',
    image: `https://img.youtube.com/vi/Tg2KQlaezGU/maxresdefault.jpg`,
  },
]

// Featured Tutorials Section
function FeaturedTutorialsSection() {
  const [featuredVideoOpen, setFeaturedVideoOpen] = useState(false)

  return (
    <section id="featured" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#C6FF00] neon-text-glow">Tutorial</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out our latest programming tutorial
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="scale-in">
            <div 
              className="glass-card overflow-hidden group cursor-pointer neon-border hover:border-[#C6FF00] transition-all duration-300"
              onClick={() => setFeaturedVideoOpen(true)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={featuredTutorials[0].image}
                  alt={featuredTutorials[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#C6FF00] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-[#C6FF00]/50">
                    <Play className="w-10 h-10 text-[#0f2424] ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {featuredTutorials[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#C6FF00] text-[#0f2424]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#C6FF00] transition-colors">
                  {featuredTutorials[0].title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {featuredTutorials[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://youtube.com/@codenexora-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#C6FF00] transition-colors text-sm"
                  >
                    <Youtube className="w-5 h-5" />
                    CodeNexora Channel
                  </a>
                  <button className="btn-neon text-sm py-2 px-4">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Video Modal */}
        <VideoModal 
          videoId={featuredTutorials[0].videoId} 
          isOpen={featuredVideoOpen} 
          onClose={() => setFeaturedVideoOpen(false)} 
        />
      </div>
    </section>
  )
}

// Community Section
function CommunitySection() {
  const whatsappNumber = '+212 7 11094315'
  const whatsappLink = `https://wa.me/212711094315`

  return (
    <section id="community" className="py-24 relative code-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 neon-border">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#25D366]/20 flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Our <span className="text-[#C6FF00]">Community</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Have questions about programming? Need help with your code? 
              Connect with us on WhatsApp and get instant support!
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Ask on WhatsApp
              </a>
              <p className="text-gray-500 text-sm">
                {whatsappNumber}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm mb-4">
                Ask your programming questions on WhatsApp
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Terminal className="w-4 h-4 text-[#C6FF00]" />
                  Code Help
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Lightbulb className="w-4 h-4 text-[#C6FF00]" />
                  Career Advice
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Coffee className="w-4 h-4 text-[#C6FF00]" />
                  Quick Support
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Subscribe Section
function SubscribeSection() {
  return (
    <section id="subscribe" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C6FF00]/10 via-transparent to-[#ff0000]/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative glass-card p-8 md:p-12">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-[#ff0000] rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#ff0000] to-[#cc0000] flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Subscribe to <span className="text-[#C6FF00]">CodeNexora</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Join our growing community of learners! Subscribe to our YouTube channel 
                for weekly programming tutorials and tips.
              </p>
              
              <a 
                href="https://youtube.com/@codenexora-01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-youtube text-lg inline-flex"
              >
                <Youtube className="w-6 h-6" />
                Subscribe on YouTube
              </a>
              
              <p className="mt-6 text-gray-500 text-sm">
                youtube.com/@codenexora-01
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/codenexora-logo.jpg" 
              alt="CodeNexora" 
              className="w-16 h-16 rounded-full object-cover border-2 border-[#C6FF00]/30"
            />
          </div>

          {/* Brand */}
          <h3 className="text-2xl font-bold text-white mb-2">
            Code<span className="text-[#C6FF00]">Nexora</span>
          </h3>
          <p className="text-gray-500 mb-6">Created by Omar AG</p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://youtube.com/@codenexora-01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#2F4F4F] flex items-center justify-center hover:bg-[#ff0000] transition-colors group"
            >
              <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://wa.me/212711094315"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#2F4F4F] flex items-center justify-center hover:bg-[#25D366] transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-[#C6FF00] transition-colors">About</a>
            <a href="#videos" className="text-gray-400 hover:text-[#C6FF00] transition-colors">Videos</a>
            <a href="#paths" className="text-gray-400 hover:text-[#C6FF00] transition-colors">Learning Paths</a>
            <a href="#community" className="text-gray-400 hover:text-[#C6FF00] transition-colors">Community</a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center">
            © {currentYear} CodeNexora. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Made with <span className="text-[#C6FF00]">{'</>'}</span> by Omar AG
          </p>
        </div>
      </div>
    </footer>
  )
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#videos', label: 'Videos' },
    { href: '#paths', label: 'Learning Paths' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f2424]/95 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/codenexora-logo.jpg" 
            alt="CodeNexora" 
            className="w-10 h-10 rounded-full object-cover border border-[#C6FF00]/30"
          />
          <span className="text-xl font-bold text-white">
            Code<span className="text-[#C6FF00]">Nexora</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-300 hover:text-[#C6FF00] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://youtube.com/@codenexora-01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-sm py-2 px-4 flex items-center gap-2"
          >
            <Youtube className="w-4 h-4" />
            Subscribe
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-2 bg-[#0f2424]/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-gray-300 hover:text-[#C6FF00] hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://youtube.com/@codenexora-01"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-4 text-center btn-neon text-sm mt-4"
          >
            <Youtube className="w-4 h-4 inline mr-2" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </nav>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f2424] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VideoLessonsSection />
      <LearningPathsSection />
      <FeaturedTutorialsSection />
      <CommunitySection />
      <SubscribeSection />
      <Footer />
    </main>
  )
}
