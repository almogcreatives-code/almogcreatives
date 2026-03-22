 import React, { useState, useEffect } from 'react';
import { 
  Zap, Magnet, ArrowRight, ArrowLeft, CheckCircle2, Image as ImageIcon, 
  Sparkles, Smartphone, Cpu, Mail, Menu, X, ChevronRight, Target, 
  Layers, Handshake, HardDrive, TrendingUp, MessageSquare, Send, User 
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
  Magnet, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Image as ImageIcon, 
  Sparkles, 
  Smartphone, 
  Cpu, 
  Mail,
  Menu,
  X,
  ChevronRight,
  Target,
  Layers,
  Handshake,
  HardDrive,
  TrendingUp,
  MessageSquare,
  Send,
  User
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Magnet U-Shape */}
        <path 
          d="M30 35V60C30 71.0457 38.9543 80 50 80C61.0457 80 70 71.0457 70 60V35H55V60C55 62.7614 52.7614 65 50 65C47.2386 65 45 62.7614 45 60V35H30Z" 
          fill="currentColor" 
        />
        {/* Magnet Tips */}
        <rect x="30" y="35" width="15" height="10" fill="white" fillOpacity="0.2" />
        <rect x="55" y="35" width="15" height="10" fill="white" fillOpacity="0.2" />
        {/* Lightning Bolt */}
        <path 
          d="M52 15L42 35H50L45 55L58 30H50L55 15H52Z" 
          className="text-gold" 
          fill="currentColor" 
        />
        {/* Stars */}
        <circle cx="35" cy="25" r="1.5" className="text-gold" fill="currentColor" />
        <circle cx="65" cy="28" r="1.5" className="text-gold" fill="currentColor" />
        <path d="M40 20L41 22L43 23L41 24L40 26L39 24L37 23L39 22L40 20Z" className="text-gold" fill="currentColor" />
        <path d="M60 22L61 24L63 25L61 26L60 28L59 26L57 25L59 24L60 22Z" className="text-gold" fill="currentColor" />
      </svg>
    );
  }

  return (
    <img 
      src="/almog-logo.png" 
      alt="Almog Creative Logo" 
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
};

const ProcessStep = ({ number, icon: Icon, title, description }: { number: string, icon: any, title: string, description: string }) => (
  <div className="relative group p-6 rounded-3xl hover:bg-forest/5 transition-all duration-500">
    <div className="mb-8 relative">
      <div className="w-16 h-16 rounded-2xl bg-forest text-matte flex items-center justify-center relative z-10 group-hover:bg-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-forest/10">
        <Icon className="w-8 h-8" />
      </div>
      <span className="absolute -top-6 -right-2 font-display font-bold text-6xl text-forest/5 group-hover:text-gold/10 transition-colors duration-500 select-none">
        {number}
      </span>
    </div>
    <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-4 text-forest">{title}</h3>
    <p className="text-sm opacity-60 leading-relaxed text-forest/70">{description}</p>
  </div>
);

const Navbar = ({ activeView, setActiveView }: { activeView: string, setActiveView: (view: 'none' | 'campaigns' | 'logo') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', view: 'campaigns' },
    { name: 'Technical Edge', href: '#tech', view: 'campaigns' },
    { name: 'Process', href: '#process', view: 'campaigns' },
    { name: 'About', href: '#about', view: 'none' },
    { name: 'Why Me', href: '#why-me', view: 'none' },
    { name: 'Contact', href: '#contact', view: 'none' },
  ];

  const handleLinkClick = (view: any) => {
    if (view !== 'none') {
      setActiveView(view);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-matte/90 backdrop-blur-md py-4 border-b border-forest/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveView('none')}>
          <Logo className="w-10 h-10 text-forest group-hover:text-gold transition-colors" />
          <span className="font-display font-bold text-xl tracking-tight uppercase text-forest">Almog Creative</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => handleLinkClick(link.view)}
              className="text-sm font-medium uppercase tracking-widest text-forest hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:hooluab@gmail.com" 
            className="bg-forest text-matte px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gold hover:text-matte transition-all shadow-lg shadow-forest/10"
          >
            Start Campaign
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-matte border-b border-beige/10 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => handleLinkClick(link.view)}
                  className="text-lg font-medium uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="mailto:hooluab@gmail.com" 
                className="bg-forest text-beige px-6 py-4 rounded-xl text-center font-bold uppercase tracking-widest"
              >
                Start Campaign
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const InquiryModal = ({ isOpen, onClose, pkg }: { isOpen: boolean; onClose: () => void; pkg: any }) => {
  const [photoshoots, setPhotoshoots] = useState('None');
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');

  if (!pkg) return null;

  const handleOrder = () => {
    let details = '';
    if (pkg.title === 'Product Seller Growth Pack') {
      details = `- Digital Photoshoots: ${photoshoots}\n`;
    } else {
      details = `- Industry/Business: ${industry}\n`;
    }
    if (message) details += `- Additional Info: ${message}\n`;

    const subject = encodeURIComponent(`Inquiry Request: ${pkg.title}`);
    const body = encodeURIComponent(`Hello Almog,\n\nI'm interested in the ${pkg.title} ($${pkg.price}).\n\nInquiry Details:\n${details}\n\nPlease let me know the next steps.\n\nBest regards,`);
    
    window.location.href = `mailto:hooluab@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-matte/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-matte border border-forest/10 rounded-3xl p-8 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-forest/50 hover:text-forest">
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-2 text-forest">{pkg.title}</h3>
            <p className="text-gold font-bold mb-6">${pkg.price} Package</p>

            <div className="space-y-6">
              {pkg.title === 'Product Seller Growth Pack' ? (
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Optional Digital Photoshoots</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['None', '+1 Scene ($20)', '+2 Scenes ($35)', '+3 Scenes ($40)'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setPhotoshoots(opt)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${photoshoots === opt ? 'bg-gold border-gold text-matte' : 'bg-forest/5 border-forest/10 text-forest/70 hover:border-forest/30'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Your Industry / Business Type</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Real Estate, E-commerce, Local Service"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-forest/5 border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Additional Details (Optional)</label>
                <textarea 
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-forest/5 border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <button 
                onClick={handleOrder}
                className="w-full bg-forest text-matte py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-matte transition-all flex items-center justify-center gap-3 shadow-lg shadow-forest/10"
              >
                Send Inquiry
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PackageCard = ({ title, price, description, features, onSelect, accent = false }: { title: string; price: string; description: string; features: string[]; onSelect: () => void; accent?: boolean }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-3xl border ${accent ? 'bg-forest border-forest text-matte shadow-2xl shadow-forest/20' : 'bg-white border-forest/10 text-forest shadow-xl shadow-forest/5'} flex flex-col h-full`}
  >
    <div className="mb-6">
      <h3 className="font-display font-bold text-2xl mb-2 uppercase tracking-tight">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold">${price}</span>
        <span className="opacity-60 text-sm uppercase tracking-widest">Package</span>
      </div>
    </div>
    <p className="mb-8 opacity-80 leading-relaxed">{description}</p>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2 className={`w-5 h-5 shrink-0 ${accent ? 'text-gold' : 'text-gold'}`} />
          <span className="text-sm leading-tight">{feature}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={onSelect}
      className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-center transition-all ${accent ? 'bg-gold text-matte hover:bg-white' : 'bg-forest text-matte hover:bg-gold'}`}
    >
      Inquire Now
    </button>
  </motion.div>
);

const TechFeature = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 items-start">
    <div className="bg-forest/20 p-4 rounded-2xl border border-forest/30">
      <Icon className="w-6 h-6 text-forest" />
    </div>
    <div>
      <h4 className="font-display font-bold text-xl mb-2 uppercase tracking-tight">{title}</h4>
      <p className="opacity-70 leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- Sub-Views ---

const CampaignsView = ({ setSelectedPkg }: { setSelectedPkg: (pkg: any) => void }) => (
  <div className="pt-24">
    {/* Services Section */}
    <section id="services" className="py-24 px-6 bg-forest/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-6 text-forest">Dual-Service <span className="text-gold">Packages</span></h2>
            <p className="text-lg opacity-70 leading-relaxed text-forest/70">Direct, high-impact creative solutions designed for maximum conversion and local trust.</p>
          </div>
          <div className="hidden md:block h-px flex-grow bg-forest/10 mx-8 mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <PackageCard 
            title="Product Seller Growth Pack"
            price="210"
            onSelect={() => setSelectedPkg({ title: 'Product Seller Growth Pack', price: '210' })}
            description="The ultimate Content Pack for Shopify, Amazon, and Etsy sellers. 15 high-voltage assets designed to keep your brand's heartbeat alive while driving hard conversions."
            features={[
              "12 Regular Social Media Posts",
              "2 Promo/Ad Creatives (Hard CTA)",
              "1 Google Business Post",
              "Optimized for Meta, TikTok, & Pinterest",
              "Optional Digital Photoshoots available",
              "AI-Enhanced Visual Fidelity",
              "72-Hour Initial Drafts"
            ]}
          />
          <PackageCard 
            accent
            title="Service Ad Creative Package"
            price="350"
            onSelect={() => setSelectedPkg({ title: 'Service Ad Creative Package', price: '350' })}
            description="A specialized Content Pack for service-based businesses. 15 engineered assets focused on local trust psychology and lead generation."
            features={[
              "12 Regular Social Media Posts",
              "2 Promo/Ad Creatives (Hard CTA)",
              "1 Google Business Post",
              "Focused on 'Local Trust' Psychology",
              "Technical Image Restoration Included",
              "Priority Support & Revisions"
            ]}
          />
        </div>
      </div>
    </section>

    {/* Technical Edge Section */}
    <section id="tech" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-forest/10 border border-beige/10 relative group">
              <img 
                src="https://picsum.photos/seed/tech/1000/1000" 
                alt="Technical Mastery" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-matte/80 backdrop-blur-xl p-8 rounded-3xl border border-beige/10 max-w-xs text-center">
                  <Sparkles className="w-12 h-12 text-forest mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl mb-2 uppercase">Master Shots</h3>
                  <p className="text-sm opacity-70">Reconstructing basic phone photos into cinematic assets.</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-forest rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-forest rounded-bl-3xl" />
          </div>

          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8 text-forest">The <span className="text-gold">Technical</span> Edge</h2>
            <p className="text-xl opacity-80 leading-relaxed mb-12 text-forest/80">
              We don't just "edit" photos. We reconstruct them. Using next-gen AI tools and technical image restoration, we turn raw captures into high-voltage marketing assets.
            </p>
            
            <div className="space-y-10">
              <TechFeature 
                icon={Smartphone}
                title="Phone to Professional"
                description="Take basic phone photos and reconstruct them into 'Master Shots' with sharpening and artifact removal."
              />
              <TechFeature 
                icon={Cpu}
                title="AI-Speed Mastery"
                description="Leveraging digital-native intuition to deliver agency-grade results at a fraction of the time and cost."
              />
              <TechFeature 
                icon={ImageIcon}
                title="Cinematic Lighting"
                description="Adding depth, atmosphere, and professional lighting to scenes that were previously flat and uninspiring."
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partnership Process Section */}
    <section id="process" className="py-24 px-6 bg-forest/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-6 text-forest">
            Partnership <span className="text-gold">Process</span>
          </h2>
          <p className="text-lg opacity-70 leading-relaxed text-forest/70">
            A streamlined, high-voltage workflow designed to take your brand from raw concept to market dominance.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <ProcessStep 
            number="01"
            icon={Target}
            title="Select the focus"
            description="We decide which product or service should be promoted first."
          />
          <ProcessStep 
            number="02"
            icon={Layers}
            title="Campaign creation"
            description="I build a full creative campaign with multiple visuals for different angles."
          />
          <ProcessStep 
            number="03"
            icon={Handshake}
            title="Finalization"
            description="Once the creative direction is approved, we finalize the assets for delivery."
          />
          <ProcessStep 
            number="04"
            icon={HardDrive}
            title="Organized delivery"
            description="All files delivered through a clean Google Drive folder for easy access."
          />
          <ProcessStep 
            number="05"
            icon={TrendingUp}
            title="Ongoing growth"
            description="We continue building campaigns for additional products or services."
          />
        </div>
      </div>
    </section>
  </div>
);

const LogoView = () => (
  <div className="pt-24">
    {/* Identity Design Section */}
    <section id="identity" className="py-24 px-6 bg-matte relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8 text-forest">
              Elevate Your <span className="text-gold">Identity.</span>
            </h2>
            <p className="text-xl opacity-80 leading-relaxed mb-12 text-forest/80">
              A great product deserves an iconic mark. I don't just design logos; I build the visual foundation of your business. Whether you need an embroidery-ready monogram or a sharp, flat-design industry identity, I tailor every pixel to your goals.
            </p>
            
            <div className="aspect-video rounded-3xl overflow-hidden bg-forest/5 border border-forest/10 flex items-center justify-center p-12 relative group">
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                <Logo className="w-48 h-48 md:w-64 md:h-64 text-forest" />
              </div>
            </div>
          </div>

          <div className="bg-forest/5 p-8 md:p-12 rounded-[2rem] border border-forest/10 shadow-xl">
            <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-8 text-forest">Logo Inquiry Form</h3>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const businessName = formData.get('businessName');
                const businessAbout = formData.get('businessAbout');
                const logoVision = formData.get('logoVision');
                const websiteLink = formData.get('websiteLink');
                
                const subject = encodeURIComponent(`Logo Inquiry: ${businessName}`);
                const body = encodeURIComponent(`Hello Almog,\n\nI'm interested in a logo for my business.\n\nBusiness Name: ${businessName}\nWebsite: ${websiteLink || 'None provided'}\nWhat is your business about?: ${businessAbout}\nLogo Vision: ${logoVision}\n\n[Note: I will manually attach any reference photos to this email thread.]\n\nPlease let me know the next steps.\n\nBest regards,`);
                
                window.location.href = `mailto:hooluab@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Business Name</label>
                <input 
                  name="businessName"
                  type="text" 
                  required
                  placeholder="Your Business Name"
                  className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">What is your business about?</label>
                <textarea 
                  name="businessAbout"
                  required
                  placeholder="Focusing on mission and audience..."
                  rows={4}
                  className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold resize-none"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Logo Vision</label>
                <textarea 
                  name="logoVision"
                  required
                  placeholder="Describing colors, symbols, or 'vibe'..."
                  rows={4}
                  className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold resize-none"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Website Link (Optional)</label>
                <input 
                  name="websiteLink"
                  type="url" 
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold"
                />
              </div>
              <div className="p-4 bg-forest/5 rounded-xl border border-forest/10">
                <p className="text-xs text-forest/60 uppercase tracking-widest leading-relaxed">
                  <span className="text-gold font-bold">Note:</span> You can manually attach any reference photos or current logos directly to the email after clicking submit.
                </p>
              </div>
              <button 
                type="submit"
                className="w-full bg-forest text-matte py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-matte transition-all flex items-center justify-center gap-3 shadow-lg shadow-forest/10"
              >
                SUBMIT FOR FREE QUOTE
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  const [selectedPkg, setSelectedPkg] = useState<any>(null);
  const [activeView, setActiveView] = useState<'none' | 'campaigns' | 'logo'>('none');

  return (
    <div className="min-h-screen selection:bg-gold selection:text-matte">
      {activeView === 'none' && (
        <Navbar activeView={activeView} setActiveView={setActiveView} />
      )}
      <InquiryModal 
        isOpen={!!selectedPkg} 
        onClose={() => setSelectedPkg(null)} 
        pkg={selectedPkg} 
      />

      <AnimatePresence mode="wait">
        {activeView === 'none' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <section id="about" className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-forest rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-forest rounded-full blur-[120px]" />
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    <Zap className="w-3 h-3" />
                    High-Voltage Attraction
                  </div>
                  <h1 className="font-display font-bold text-5xl md:text-8xl mb-8 leading-[0.9] uppercase tracking-tighter text-forest">
                    Cinematic Marketing & <span className="text-gold">Iconic Brand Identity.</span>
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setActiveView('campaigns')}
                      className="group px-10 py-5 rounded-2xl bg-forest text-matte font-bold text-lg uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-forest/10 hover:bg-gold"
                    >
                      VIEW CAMPAIGNS
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setActiveView('logo')}
                      className="px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-widest flex items-center justify-center gap-3 border border-forest/20 text-forest transition-all hover:bg-forest/5"
                    >
                      START YOUR LOGO
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Who I Am Section */}
            <section id="about" className="py-24 px-6 bg-forest text-matte relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 h-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="border-r border-matte h-full" />
                  ))}
                </div>
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl">
                  <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8 text-matte">Who <span className="text-gold">I Am</span></h2>
                  <div className="space-y-6 text-xl md:text-2xl leading-relaxed opacity-90 text-matte">
                    <p>
                      I am Almog, a teen creator. I got into this because I kept noticing how many good businesses were getting overlooked online—not because their product wasn’t good, but because the way it was presented just didn’t grab attention.
                    </p>
                    <p>
                      I started learning how to create visuals that actually make people stop and look, and over time it turned into something I really enjoy doing. I like working with real businesses and helping them show what they already have in a better way.
                    </p>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-matte/10 border border-matte/20 flex items-center justify-center">
                      <Logo className="w-10 h-10 text-gold" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-2xl uppercase text-matte">Almog</p>
                      <p className="text-sm uppercase tracking-[0.3em] opacity-60 text-matte">Founder & Lead Creative</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Teen Advantage Section */}
            <section id="why-me" className="py-24 px-6 bg-matte text-forest relative overflow-hidden border-t border-forest/5">
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mr-auto text-left">
                  <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8 text-forest">The <span className="text-gold">Teen</span> Advantage</h2>
                  <div className="space-y-6 text-xl md:text-2xl leading-relaxed opacity-90 text-forest">
                    <p>
                      In 2026, being a teen creator isn't a limitation—it's a massive competitive advantage. I grew up in the digital age, mastering the tools that traditional agencies are still trying to figure out.
                    </p>
                    <p>
                      Almog Creative was born from an obsession with technical quality and a drive to build something real. When you work with me, you're getting more energy, a digital-native perspective, and unmatched speed.
                    </p>
                    <p className="font-bold text-gold uppercase tracking-widest">
                      Professional results. Next-gen speed. Zero corporate jargon.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Footer */}
            <footer id="contact" className="py-24 px-6 bg-matte border-t border-forest/10">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter mb-12 text-forest">
                    Ready for <span className="text-gold">High-Voltage</span> Results?
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                  <div>
                    <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8 text-forest">
                      Get in <span className="text-gold">Touch.</span>
                    </h2>
                    <p className="text-xl opacity-80 leading-relaxed mb-12 text-forest/80">
                      Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-forest">
                        <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-widest opacity-60">Email Me Directly</p>
                          <p className="font-bold">hooluab@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-forest/5 p-8 md:p-12 rounded-[2rem] border border-forest/10 shadow-xl">
                    <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-8 text-forest">Send a Message</h3>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const name = formData.get('name');
                        const email = formData.get('email');
                        const message = formData.get('message');
                        
                        const subject = encodeURIComponent(`Contact Form: ${name}`);
                        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                        
                        window.location.href = `mailto:hooluab@gmail.com?subject=${subject}&body=${body}`;
                      }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Name</label>
                        <input 
                          name="name"
                          type="text" 
                          required
                          placeholder="Your Name"
                          className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Email</label>
                        <input 
                          name="email"
                          type="email" 
                          required
                          placeholder="Your Email"
                          className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm uppercase tracking-widest opacity-60 mb-3 text-forest">Message</label>
                        <textarea 
                          name="message"
                          required
                          placeholder="How can I help you?"
                          rows={4}
                          className="w-full bg-matte border border-forest/10 rounded-xl px-4 py-3 text-forest placeholder:text-forest/20 focus:outline-none focus:border-gold resize-none"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-forest text-matte py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-matte transition-all flex items-center justify-center gap-3 shadow-lg shadow-forest/10"
                      >
                        SEND MESSAGE
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
                
                <div className="mt-24 pt-12 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-3">
                    <Logo className="w-8 h-8 text-forest" />
                    <span className="font-display font-bold uppercase tracking-widest text-forest">Almog Creative</span>
                  </div>
                  <p className="text-sm opacity-40 uppercase tracking-widest text-forest text-center">
                    © 2026 Almog Creative. All Rights Reserved.
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key={activeView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-matte"
          >
            {/* Exit Button */}
            <div className="fixed top-8 left-8 z-50">
              <button 
                onClick={() => setActiveView('none')}
                className="flex items-center gap-2 bg-forest text-matte px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-2xl shadow-forest/20 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Exit to Home
              </button>
            </div>

            {activeView === 'campaigns' && (
              <CampaignsView setSelectedPkg={setSelectedPkg} />
            )}

            {activeView === 'logo' && (
              <LogoView />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
