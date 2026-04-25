/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Smartphone, 
  Battery, 
  Camera, 
  Cpu, 
  Clock, 
  Home, 
  ShieldCheck, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  ChevronLeft,
  Star,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/neon-button";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { Spotlight } from "./components/ui/spotlight";
import { BackgroundBeams } from "./components/ui/background-beams";
import { SubtleWaves, SubtleGrid } from "./components/ui/hero-background";
import { Logo } from "./components/ui/logo";

const Navbar = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "لماذا تختارنا", href: "#why-us" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "glass py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => onScrollTo(e, "#home")}
          className="flex items-center gap-2 relative z-50"
        >
          <Logo className="w-24 h-10 md:w-32 md:h-12" />
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => onScrollTo(e, link.href)}
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-50">
          <a href="tel:01009911934" className="hidden sm:block">
            <Button 
              variant="solid" 
              size="sm" 
              className="bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2"
            >
              <Phone size={16} />
              <span>01009911934</span>
            </Button>
          </a>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900 border-none hover:bg-black/5"
          >
            <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : "mb-1.5"}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : "mb-1.5"}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => onScrollTo(e, link.href, () => setIsMenuOpen(false))}
                  className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:01009911934" className="sm:hidden">
                <Button 
                  variant="solid" 
                  className="w-full bg-indigo-600 text-white flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  <span>اتصل الآن</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-white">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4f46e520" />
      <SubtleWaves />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-200 backdrop-blur-sm"
            >
              <Star size={16} fill="currentColor" />
              <span>أسرع خدمة صيانة موبايل في مصر</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 mb-6 tracking-tighter">
              آيفونك باظ! هنجيلك مكانك <br />
              <span className="gradient-text text-3xl md:text-5xl">ونصلحهولك فى 30 دقيقة فقط!!</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              أيًا كانت مشكلة آيفونك، بنجيلك مكانك وبنصلح العطل قدامك بقطع غيار أصلية وأحدث الأدوات، مع ضمان 3 شهور.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/201009911934">
                  <Button 
                    variant="solid" 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-3 rounded-2xl shadow-lg shadow-green-200"
                  >
                    <MessageSquare size={24} />
                    <span>واتس اب</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact" onClick={(e) => onScrollTo(e, "#contact")}>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-white text-indigo-600 border-indigo-100 shadow-sm hover:bg-indigo-50 flex items-center gap-3 rounded-2xl backdrop-blur-sm"
                  >
                    <span>إتصل بنا</span>
                    <Phone size={20} />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1581404917879-53e19259fdda?q=80&w=2000&auto=format&fit=crop"
          alt="Broken iPhone Screen"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </ContainerScroll>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "مشاكل الشاشة",
      desc: "شاشتك اتكسرت أو اتشرخت؟ بنغيرلك الشاشة في مكانك بأعلى جودة.",
      icon: <Smartphone className="text-indigo-600" size={32} />,
      color: "bg-indigo-50",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "مشاكل البطارية",
      desc: "بطاريتك بتخلص بسرعة؟ بنغيرلك البطارية بضمان حقيقي وأداء ممتاز.",
      icon: <Battery className="text-emerald-600" size={32} />,
      color: "bg-emerald-50",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "مشاكل الظهر",
      desc: "الظهر اتكسر؟ بنغير الظهر بالليزر وبيرجع الموبايل كأنه جديد.",
      icon: <ShieldCheck className="text-purple-600" size={32} />,
      color: "bg-purple-50",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "مشاكل الكاميرات",
      desc: "الكاميرا فاصلة أو فيها غباش؟ بنصلحها وبترجع تصور أحلى صور.",
      icon: <Camera className="text-rose-600" size={32} />,
      color: "bg-rose-50",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "مشاكل المذربورد",
      desc: "الموبايل فاصل باور أو فيه قفلة؟ خبرائنا بيصلحوا أعقد مشاكل البوردة.",
      icon: <Cpu className="text-amber-600" size={32} />,
      color: "bg-amber-50",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold mb-4">خدماتنا</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">إيه المشكلة اللي بتواجهك؟</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">نحن متخصصون في صيانة جميع أجهزة آيفون بأحدث التقنيات وقطع الغيار الأصلية.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all bg-white group text-right ${service.className}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed font-medium">{service.desc}</p>
              <div className="flex justify-start">
                <a href="https://wa.me/201009911934">
                  <Button 
                    variant="ghost" 
                    className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all p-0 border-none hover:bg-transparent"
                  >
                    <span>اطلب الخدمة الآن</span>
                    <ChevronLeft size={18} />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "تواصل معنا",
      desc: "كلمنا واتس اب أو فون واشرح لنا مشكلة موبايلك.",
      icon: <Phone size={24} />
    },
    {
      title: "بنجيلك مكانك",
      desc: "فني متخصص بيجيلك لحد باب البيت أو شغلك في أسرع وقت.",
      icon: <MapPin size={24} />
    },
    {
      title: "تصليح فوري",
      desc: "بنصلح العطل قدامك في أقل من 30 دقيقة وبأعلى دقة.",
      icon: <Wrench size={24} />
    },
    {
      title: "ضمان حقيقي",
      desc: "بتستلم موبايلك شغال تمام ومعاه ضمان 3 شهور على الصيانة.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <SubtleGrid color="#00000008" className="opacity-100 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold mb-4">كيف نعمل؟</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">خطوات بسيطة لموبايل جديد</h3>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-indigo-500/20 text-2xl font-black">
                  {index + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white relative">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border border-slate-200 aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1000&auto=format&fit=crop" 
                alt="Expert Technician" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-indigo-500 rounded-full -z-10 blur-[100px] opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-500 rounded-full -z-10 blur-[100px] opacity-10"></div>
            
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 md:translate-x-[-25%] md:left-0 bg-indigo-600 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl border border-white/20 z-20 whitespace-nowrap">
              <div className="text-4xl md:text-5xl font-black text-white mb-1 leading-none text-center md:text-right">+11</div>
              <div className="font-bold text-white text-base md:text-lg text-center md:text-right">سنة خبرة</div>
              <div className="text-[10px] md:text-sm text-indigo-100 text-center md:text-right">في صيانة الآيفون</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold mb-4">نبذة عنا</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-slate-900 tracking-tight">
              مركز FOCUS.. <br className="hidden sm:block" /> الخبرة والأمانة في مكان واحد
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
              لصيانة الآيفون عندنا أكتر من 11 سنة خبرة في تصليح الآيفون. FOCUS إحنا مركز خلال السنين اللي فاتت، صلحنا آلاف الأجهزة وفضلنا أصحابها، وده خلا سمعتنا تكبر مع مرور الوقت.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              شغفنا بالصيانة بيخلينا نستمتع دايمًا باكتشاف المشاكل والأعطال الجديدة، حتى لو كانت معقدة، وده بيخلينا دايمًا متفوقين في تصليح الآيفون. عملائنا دايمًا بيثقوا فينا عشان الجودة والاحترافية اللي بنقدمها.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="solid" 
                size="lg" 
                className="gradient-bg text-white rounded-2xl shadow-lg shadow-indigo-200"
              >
                تواصل معنا الآن
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      title: "تصليح في 30 دقيقة",
      desc: "أسرع خدمة تصليح في مصر، بنخلص جهازك في أقل من نص ساعة.",
      icon: <Clock size={28} />
    },
    {
      title: "تصليح في المنزل",
      desc: "بنجيلك لحد باب البيت وبنصلح الموبايل قدام عينيك بكل أمان.",
      icon: <Home size={28} />
    },
    {
      title: "قطع غيار أصلية",
      desc: "بنستخدم قطع غيار أصلية بضمان حقيقي يصل لـ 3 شهور.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "أدوات حديثة",
      desc: "بنستخدم أحدث الماكينات والأدوات لضمان أعلى دقة في الصيانة.",
      icon: <Wrench size={28} />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 text-slate-900 overflow-hidden relative">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold mb-4">لماذا تختارنا؟</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">ليه FOCUS هو الأفضل؟</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all text-center group backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-200 pt-20">
          {[
            { label: "شاشة صلحناها", value: "37" },
            { label: "بوردة صلحناها", value: "18" },
            { label: "بطارية غيرناها", value: "12" },
            { label: "ظهر صلحناه", value: "5" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black mb-2 gradient-text">{stat.value}</div>
              <div className="text-slate-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommonProblems = () => {
  const categories = [
    {
      title: "مشاكل شاشة الـ IPhone",
      icon: <Smartphone className="text-indigo-600" size={24} />,
      items: ["كسر أو شرخ فى الشاشة", "ألوان الشاشة بايظة", "الباغة أتكسرت", "التاتش مش شغال"]
    },
    {
      title: "مشاكل البطاريات",
      icon: <Battery className="text-emerald-600" size={24} />,
      items: ["البطارية بتسخن", "البطارية منفوخة", "البطارية بتخلص بسرعة"]
    },
    {
      title: "مشاكل الظهر",
      icon: <ShieldCheck className="text-purple-600" size={24} />,
      items: ["الظهر أتكسر", "الظهر اتشرخ", "الـ Wireless Charge مش شغال"]
    },
    {
      title: "مشاكل الكاميرات",
      icon: <Camera className="text-rose-600" size={24} />,
      items: ["الكاميرا فاصلة", "الكاميرا مزغللة"]
    },
    {
      title: "مشاكل الـ Motherboard",
      icon: <Cpu className="text-amber-600" size={24} />,
      items: [
        "الموبايل وقع فى الماية",
        "الموبايل بيعمل Restart",
        "الموبايل بيفصل شاشة كل شوية",
        "الموبايل بيسخن فى الشاحن",
        "الموبايل فصل صوت",
        "الشبكة ضعيفة أو فاصة",
        "الموبايل مش بيلقط Wifi",
        "الـ Face ID مش شغال"
      ],
      className: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <SubtleGrid color="#00000008" className="opacity-100 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold mb-4">الأعطال الشائعة</h2>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight whitespace-nowrap">أهم مشاكل الـ IPhone اللى بنصلحها</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/20 hover:border-indigo-500/30 transition-all group ${cat.className || ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{cat.title}</h4>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-slate-50/50 rounded-[3rem] overflow-hidden shadow-xl border border-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-indigo-600 font-bold mb-4">تواصل معنا</h2>
              <h3 className="text-4xl font-black mb-10 text-slate-900 tracking-tight">يسعدنا تواصلكم معنا</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">الإسم</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="أدخل اسمك" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">رقم الهاتف</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="01xxxxxxxxx" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">نوع الجهاز</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all appearance-none">
                        <option>iPhone 15 Pro Max</option>
                        <option>iPhone 14 Pro Max</option>
                        <option>iPhone 13 Pro Max</option>
                        <option>iPhone 12 Pro Max</option>
                        <option>أخرى</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">نوع العطل</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all appearance-none">
                        <option>كسر في الشاشة</option>
                        <option>مشكلة في البطارية</option>
                        <option>كسر في الظهر</option>
                        <option>مشكلة في الكاميرا</option>
                        <option>أخرى</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">التفاصيل</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="اشرح لنا المشكلة بالتفصيل..."></textarea>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="solid" 
                    size="lg" 
                    className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-2xl shadow-lg shadow-indigo-100"
                  >
                    إرسال الطلب
                  </Button>
                </motion.div>
              </form>
            </div>

            <div className="bg-indigo-600 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-10">معلومات التواصل</h4>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">واتس اب</div>
                    <a href="https://wa.me/201009911934" className="text-indigo-100 hover:text-white transition-colors">01009911934</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">هاتف</div>
                    <a href="tel:01009911934" className="text-indigo-100 hover:text-white transition-colors">01009911934</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">البريد الإلكتروني</div>
                    <a href="mailto:info@focus-fastestrepair.com" className="text-indigo-100 hover:text-white transition-colors">info@focus-fastestrepair.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">الموقع</div>
                    <p className="text-indigo-100">عمارة 47 شارع الدقي ميدان الدقي - الجيزة - مصر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#home" onClick={(e) => onScrollTo(e, "#home")} className="flex items-center gap-2">
          <Logo className="w-20 h-8" />
        </a>
        
        <p className="text-slate-600 text-sm">جميع الحقوق محفوظة © 2026 FOCUS - Fastest Mobile Repair</p>
        
        <div className="text-sm font-bold text-slate-600">
          تم التصميم والتطوير بواسطة <span className="text-indigo-600">neovidia</span>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <a 
        href="https://wa.me/201009911934"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          variant="solid" 
          size="lg" 
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center p-0"
        >
          <MessageSquare size={32} />
        </Button>
      </a>
    </motion.div>
  );
};

export default function App() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => {
    e.preventDefault();
    if (callback) callback();
    
    // For '#home' or empty href, scroll to top
    if (href === "#home" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Update URL hash without jumping
      window.history.pushState(null, "", href);
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, "", href);
    }
  };

  return (
    <div dir="rtl" className="font-sans antialiased bg-white text-slate-900 no-scrollbar relative">
      <Navbar onScrollTo={handleScrollTo} />
      <main className="relative z-10">
        <Hero onScrollTo={handleScrollTo} />
        <Services />
        <Process />
        <About />
        <WhyUs />
        <CommonProblems />
        <Contact />
      </main>
      <Footer onScrollTo={handleScrollTo} />
      <FloatingWhatsApp />
    </div>
  );
}
