// src/pages/Landing.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
const [isMenuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();

const performanceData = [
  { month: "Jan", value: 35 },
  { month: "Feb", value: 40 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 42 },
  { month: "May", value: 50 },
  { month: "Jun", value: 50 },
  { month: "Jul", value: 50 },
    { month: "Aug", value: 50 },
    { month: "Sep", value: 50 },
    { month: "Oct", value: 50 },
    { month: "Nov", value: 50 },
    { month: "Dec", value: 50 },

];



  const IMAGES = {
    chartThumb: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&auto=format&fit=crop&q=60",
    hero: "https://plus.unsplash.com/premium_photo-1670249419881-b115ba63924a?w=600&auto=format&fit=crop&q=60",
    about: "https://plus.unsplash.com/premium_photo-1670249419881-b115ba63924a?w=600&auto=format&fit=crop&q=60",
    feature1: "https://plus.unsplash.com/premium_photo-1661611263128-ffb51eca570f?w=600&auto=format&fit=crop&q=60",
    feature2: "https://images.unsplash.com/photo-1612461313099-0bc8da7dccb0?w=600&auto=format&fit=crop&q=60",
    feature3: "https://images.unsplash.com/photo-1744782211816-c5224434614f?w=600&auto=format&fit=crop&q=60",
    action: "https://images.unsplash.com/photo-1612696874005-d015469bc660?w=600&auto=format&fit=crop&q=60",
    why: "https://images.unsplash.com/photo-1629339941379-da30348cdba6?w=600&auto=format&fit=crop&q=60",
testimonial1:"https://th.bing.com/th/id/OIP.l16fn4RfJtj8YkwXrIGspwHaIS?w=144&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    testimonial2:"https://jigneshpatel.org/Patel_Jignesh.jpg",
testimonial3:"https://media.istockphoto.com/id/1707950357/photo/cheerful-young-woman-holding-paper-currency-while-sitting-on-office-chair-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZaHfuAcnUtZ7iJ4Mej1be8H3q8mYD_y9M9tSsmlI_CM=",  };

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Contact & Wallet Info (UPDATED WhatsApp Number)
  const CONTACT_INFO = {
    whatsappNumber: "+91 8689937319", 
    callNumber: "+91 8689937319", 
    email: "support@goldenpipsbot.com",
    wallets: {
      bep20: "0xa91D8Ba3029FC14907cb4bEE60763869f0eD88f7",
      trc20: "TGTmCXghBxNAkUxeL7hnDPjQiQicKG26v2"
    }
  };
    
  // Helper to format WhatsApp number for URL
  const whatsappUrlNumber = CONTACT_INFO.whatsappNumber.replace(/\D/g, "");

  const testimonials = [
    {
      name: "Amit Patil",
      role: "Co-founder - AB enterprise ",
      quote: "Golden Pips Bot transformed my trading. The accuracy is unbelievable!",
      photo: IMAGES.testimonial1,
      stars: 5,
    },
    {
      name: "Jignesh patel",
      role: "Investor",
      quote: "The AI signals are extremely accurate. Worth every rupee!",
      photo: IMAGES.testimonial2,
      stars: 4.5,
    },
    {
      name: "Aaditi gursule",
      role: "Executive Director Ziss Design Studio",
      quote: "Consistent profits and reliable signals. Highly recommended.",
      photo: IMAGES.testimonial3,
      stars: 5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starArray = [];

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      starArray.push(<span key="half" className="text-yellow-400">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      starArray.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    return <div className="flex text-lg">{starArray}</div>;
  };


// Countdown Timer (7 days from now)
const [timer, setTimer] = React.useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

React.useEffect(() => {
  const offerEnd = new Date();
  offerEnd.setDate(offerEnd.getDate() + 7); // 7-day offer

  const interval = setInterval(() => {
    const now = new Date();
    const diff = offerEnd - now;

    if (diff <= 0) {
      clearInterval(interval);
      return;
    }

    setTimer({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Helmet>
        <title>Golden Pips Bot — AI Trading Signals</title>
        <meta
          name="description"
          content="Golden Pips Bot — AI-powered trading signals for BTC, Gold, and Currency. 30+ years of historical data, live signals, premium trading bot."
        />
      </Helmet>

      


      <div className="font-sans antialiased bg-white text-slate-900">

       <header className="bg-white border-b border-gray-200 w-full sticky top-0 z-50">

  {/* Background overlay on mobile */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
        onClick={() => setMenuOpen(false)}
      />
    )}
  </AnimatePresence>

  {/* Header main */}
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative z-50">
    {/* LOGO */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br to-indigo-600 flex items-center justify-center text-white font-bold">
        <img src="./images/logo.png" alt="Logo" className="w-6 h-6" />
      </div>
      <span className="font-semibold text-lg">Golden Pips Bot</span>
    </div>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700 font-medium">
      <a href="#about" className="hover:text-slate-900">About</a>
      <a href="#features" className="hover:text-slate-900">Features</a>
      <a href="#results" className="hover:text-slate-900">Results</a>
      <a href="#contact" className="hover:text-slate-900">Contact</a>
    </nav>

    <button className="hidden md:inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 shadow">
      Get Started
    </button>

    {/* Hamburger Button */}
    <button
      aria-label="menu"
      onClick={() => setMenuOpen(!isMenuOpen)}
      className="md:hidden p-2 text-slate-700 text-2xl"
    >
      ☰
    </button>
  </div>

  {/* Mobile Dropdown */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25 }}
        className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg z-50 relative"
      >
        <a href="#about" className="block text-slate-700 text-base py-2"
          onClick={() => setMenuOpen(false)}>About</a>

        <a href="#features" className="block text-slate-700 text-base py-2"
          onClick={() => setMenuOpen(false)}>Features</a>

        <a href="#results" className="block text-slate-700 text-base py-2"
          onClick={() => setMenuOpen(false)}>Results</a>

        <a href="#contact" className="block text-slate-700 text-base py-2"
          onClick={() => setMenuOpen(false)}>Contact</a>

        <button
          onClick={() => setMenuOpen(false)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-medium mt-4 shadow">
          Get Started
        </button>
      </motion.div>
    )}
  </AnimatePresence>
</header>


        {/* ---------------- HERO ---------------- */}
        <section className="relative bg-gradient-to-r from-[#0F2B7F] via-[#2E4DBD] to-[#5D3BEC] text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT */}
              <motion.div {...fadeUp} className="space-y-6">
                <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm">
                  AI-Powered Trading Signals
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Golden Pips <span className="text-green-300">Bot</span>
                </h1>

                <p className="text-lg max-w-xl text-white/90">
                  Your AI-powered trading partner that analyzes BTC, Gold, and Currency data to deliver highly accurate trading signals. Plug and Play.
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium shadow"
                  >
                    Start Trading Now →
                  </a>

                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-medium hover:bg-white/5"
                  >
                    ▶ Watch Demo
                  </a>
                </div>

                <div className="flex gap-6 text-sm mt-4 text-white/90">
                  <div>⭐ Risk-Controlled Trading | Capital Safety First</div>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div {...fadeUp} className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={IMAGES.hero}
                    alt="hero"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>

                {/* overlay */}
                <div className="absolute right-6 top-6 bg-white rounded-xl p-3 shadow-xl w-44 md:w-64 -translate-y-6">
                  <img
                    src={IMAGES.chartThumb}
                    alt="chart"
                    className="rounded-md w-full object-cover h-24"
                  />
                  <div className="mt-2 text-sm font-semibold text-slate-700">
                    BTC / USD
                  </div>
                  <div className="text-xs text-green-500 mt-1">65,000</div>
                </div>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <div className="mt-14 bg-[#071028] rounded-md px-6 py-6 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                {[
                  ["Daily Volume", "$6.6T"],
                  ["Currency Pairs", "50+"],
                  ["Success Rate", "90%+"],
                  ["Monthly Return", "2% to 15%*"], // New Performance Claim
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="text-sm">{label}</div>
                    <div className="text-xl font-bold text-green-300 mt-2">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- NEW: INVESTMENT PHILOSOPHY / VALUE PROP ---------------- */}
        <section className="py-12 px-6 bg-blue-50">
            <div className="max-w-4xl mx-auto text-center">
                <h4 className="text-2xl font-bold text-slate-800">Transparent & Professional Growth</h4>
                <p className="mt-3 text-slate-600">
                    We manage your forex investment with institutional-grade risk control, disciplined strategies, and transparent execution. 
                    No aggressive lot sizing, no emotional trading, and no unrealistic promises — just professional market analysis focused on capital protection and sustainable long-term growth.
                </p>
                <div className="mt-4 text-sm font-semibold text-blue-600">
                    Invest Smart. Think Long-Term.
                </div>
            </div>
        </section>
        
        {/* ---------------- ABOUT FULL WIDTH ---------------- */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold">About Golden Pips Bot</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-3 rounded" />
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              We understand how the BTC, Gold, and Currency markets move — driven by data,
              trends, and global events. Our bot analyzes 30+ years of historical data with live updates to generate precise trading signals.
            </p>
          </div>

          <div className="mt-14 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={IMAGES.about} alt="about" className="w-full h-64 object-cover" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Powered by Advanced AI Technology
              </h3>
              <p className="mt-3 text-slate-600">
                Our algorithms process market data, news events,
                and technical indicators to find profitable trades.
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                {[
                  ["Machine Learning Models", "State-of-the-art ML for prediction & signals"],
                  ["Real-time Data", "Low-latency pipelines for instant signals"],
                  ["Risk Management", "Automated risk checks & position sizing"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">●</span>
                    <div>
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm text-slate-600">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About: Cards */}
          <div className="mt-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              ["📊", "Multi-Asset Data Analysis", "Advanced algorithms analyze decades of BTC, Gold, and Currency data."],
              ["🔔", "Live Market Updates", "Real-time monitoring & instant push notifications."],
              ["🤖", "AI-Powered Intelligence", "Cutting-edge AI for superior accuracy & profitability."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-white p-6 shadow rounded-xl">
                <div className="text-3xl">{icon}</div>
                <h4 className="mt-3 font-semibold">{title}</h4>
                <p className="text-sm text-slate-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- FEATURES ---------------- */}
        <section id="features" className="py-20 px-6 bg-gray-50 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold">Powerful Features</h2>
            <p className="text-gray-600 mt-3">
              Discover the advanced capabilities that make Golden Pips Bot the ultimate trading companion.
            </p>
          </div>
          {/* Cards */}
          <div className="mt-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Advanced AI Algorithm", "Cutting-edge machine learning models trained on decades of data."],
              ["Real-Time Analysis", "Live monitoring with instant alerts."],
              ["Risk Management", "Automated risk checks & sizing recommendations."],
              ["High Accuracy", "Proven track record with consistent profits."],
              ["24/7 Monitoring", "Non-stop analysis across all conditions."],
              ["Mobile Alerts", "Instant notifications for opportunities."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
                <h4 className="font-semibold text-sm text-slate-700">
                  {title}
                </h4>
                <p className="text-gray-500 text-sm mt-3">{desc}</p>
              </div>
            ))}
          </div>
          {/* CTA */}
          <div className="mt-16 max-w-6xl mx-auto bg-gradient-to-r from-[#2B3BA0] to-[#3D2A86] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-xl">
            <div className="flex-1 text-white">
              <h3 className="text-3xl font-bold">See Our Bot in Action</h3>
              <p className="mt-3 text-white/90">
                Watch how our AI analyzes and generates profitable signals.
              </p>
              <div className="mt-4 flex gap-4 text-sm">
                <div>⭐ Award-winning Algorithm</div>
                <div>✔ Secure & Reliable</div>
              </div>
            </div>
            <div className="w-64">
              <img
                src={IMAGES.action}
                alt="action"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </section>
        {/* ---------------- RESULTS ---------------- */}
        <section id="results" className="py-20 px-6 bg-gradient-to-r from-[#2C2C72] to-[#6B3CA7] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold">Proven Results</h2>
            <p className="text-white/80 mt-3">Thousands of traders trust Golden Pips Bot. Earn up to 2% to 15% monthly</p>
          </div>
          <div className="mt-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              ["500+", "Happy Traders"],
              ["32 Lakh+", "Signals Generated"],
              ["15+", "Years Expertise"]
            ].map(([value, label]) => (
              <div key={label} className="bg-white/10 p-6 text-center rounded-xl">
                <div className="text-3xl font-bold text-green-300">{value}</div>
                <div className="mt-2">{label}</div>
              </div>
            ))}
          </div>
          {/* Testimonials */}
          <div className="mt-16 max-w-6xl mx-auto">
           <div className="bg-white/10 p-6 rounded-xl mt-4">

<div className="bg-white/10 p-4 sm:p-6 rounded-xl mt-4">
  
  {/* Header: Reduced padding and font size for mobile, increased for desktop */}
  <div className="bg-white/10 p-3 sm:p-4 rounded-md text-sm sm:text-lg font-semibold text-center mb-4 sm:mb-6">
    Monthly Performance Overview
  </div>

  {/* Chart Container: Height fixed at 64, but can be adjusted for specific breakpoints if needed. */}
  <div className="w-full h-64">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={performanceData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
        
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        
        {/* XAxis: Adjusted font size for mobile readability (text-xs) */}
        <XAxis 
          dataKey="month" 
          stroke="#fff" 
          fontSize={10} 
          tickLine={false} 
          axisLine={false}
        />
        
        {/* YAxis: Adjusted font size and removed tick line for cleaner look on small screens */}
        <YAxis 
          stroke="#fff" 
          fontSize={10} 
          tickLine={false} 
          axisLine={false} 
        />
        
        {/* Tooltip: Kept consistent dark theme styling */}
        <Tooltip 
          contentStyle={{ background: "rgba(0,0,0,0.8)", borderRadius: "8px", border: "none" }}
          labelStyle={{ color: "#fff", fontWeight: "bold" }}
          itemStyle={{ color: "#4ade80" }}
        />
        
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#4ade80" 
          strokeWidth={3} 
          dot={{ r: 4, fill: "#4ade80", strokeWidth: 1 }} // Smaller dot on mobile
          activeDot={{ r: 8, stroke: '#4ade80', strokeWidth: 2 }} // Active dot remains prominent
        />
        
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>


              <div className="mt-10 grid md:grid-cols-3 gap-8">
                {testimonials.map((t) => (
                  <div key={t.name} className="bg-white/10 p-5 rounded-xl text-white">
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-white/80">{t.role}</div>
                      </div>
                    </div>
                    <div className="mt-3">{renderStars(t.stars)}</div>
                    <p className="mt-2 text-sm">“{t.quote}”</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ---------------- WHY + PRICING ---------------- */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold">Why Choose Golden Pips Bot?</h2>
            <div className="w-20 h-1 bg-green-400 mx-auto mt-3 rounded" />
          </div>
          <div className="mt-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img src={IMAGES.why} alt="why" className="rounded-xl shadow-lg w-full h-72 object-cover" />
            <ul className="space-y-4">
              {[
                ["Advanced AI-driven Trading Bot", "ML-powered predictions for BTC, Gold, and Currency with high accuracy.", "green"],
                ["Precision & Profitability", "Trading optimized for maximum gain.", "blue"],
                ["Comprehensive Risk Management", "Built-in risk control & management.", "purple"],
              ].map(([title, desc, color]) => (
                <li key={title} className="flex items-start gap-4">
                  <div className={`bg-${color}-50 p-2 rounded-md text-${color}-600`}>✓</div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-sm text-slate-600">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
   {/* Pricing */}
<div id="pricing" className="mt-16 max-w-5xl mx-auto bg-green-50 border border-green-100 p-10 rounded-2xl text-center">

  {/* Countdown Timer */}
  <div className="text-red-600 text-sm font-semibold mb-3">
    Special Offer ends in: 
    <span className="ml-2 font-bold">
      {timer.days}d : {timer.hours}h : {timer.minutes}m : {timer.seconds}s
    </span>
  </div>

  <div className="text-sm text-slate-600">Pricing</div>

  {/* Main Price */}
  <div className="text-4xl font-bold text-red-500 mt-3 line-through">
    $299 <span className="text-lg text-gray-600">/year</span>
  </div>

  {/* Special Offer Price */}
  <div className="text-5xl font-bold text-green-600 mt-1">
    $149 <span className="text-lg text-gray-600">/year</span>
  </div>

  <p className="mt-2 text-sm text-slate-600">
    Full access for one year. No extra fees.
  </p>

  <div className="mt-4 text-sm">
    <span className="bg-white px-3 py-2 border rounded-md">
      Profit Sharing Option
    </span>
    <div className="text-xs text-gray-500 mt-2">
      Pay only 30% of profits.
    </div>
  </div>
</div>

        </section>
        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-extrabold">
              Professional Trading Environment
            </h3>
            <div className="w-20 h-1 bg-green-400 mx-auto mt-3 rounded" />
          </div>
          <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              [IMAGES.feature1, "Professional Setup"],
              [IMAGES.feature2, "Real-time Analysis"],
              [IMAGES.feature3, "Advanced Charts"],
            ].map(([img, title]) => (
              <div key={title} className="rounded-xl overflow-hidden shadow-lg relative">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                  {title}
                </div>
              </div>
            ))}
          </div>
          {/* Contact CTA */}
          <div className="mt-12 px-6 py-10 bg-gradient-to-r from-[#24408C] to-[#5E3BA8] text-white rounded-xl max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-sm font-semibold">Call / WhatsApp</div>
                <div className="mt-2 font-bold text-green-300">{CONTACT_INFO.callNumber}</div>
                <div className="text-xs text-white/80 mt-2">Available 24/7</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-sm font-semibold">Email Support</div>
                <div className="mt-2 font-bold">{CONTACT_INFO.email}</div>
                <div className="text-xs text-white/80 mt-2">Quick replies guaranteed</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-sm font-semibold">Flexible Pricing</div>
                <div className="mt-2 font-bold text-green-300">$149/year or 30% profit share</div>
                <div className="text-xs text-white/80 mt-2">Choose your model</div>
              </div>
            </div>
            {/* Payment Options Section */}
            <div className="mt-10">
                <h4 className="text-xl font-bold text-center mb-6">Payment Options</h4>
                <div className="grid md:grid-cols-2 gap-8 text-center items-center">
                    {/* Pay with Crypto Button */}
                    <div className="bg-white/10 p-8 rounded-xl flex flex-col items-center justify-center h-full">
                        <div className="font-semibold mb-3">Crypto Payment (USDT)</div>
                        <p className="text-sm text-white/80 mb-6">
                            Pay via BEP20 (BSC) or TRC20 (Tron) instantly.
                        </p>
                        <button
onClick={() => navigate("/crypto-payment")}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 flex items-center gap-2"
                        >
                          <span>💳</span> View Crypto Details
                        </button>
                    </div>
                    {/* WhatsApp Connect */}
                    <div className="bg-white/10 p-8 rounded-xl flex flex-col justify-center h-full">
                        <div className="font-semibold mb-3">Other Payment Methods</div>
                        <p className="text-sm text-white/80 mb-6">
                            For UPI, Bank Transfer, or questions, chat with us on WhatsApp.
                        </p>
                         <a
                          href={`https://wa.me/${whatsappUrlNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-400 px-6 py-3 rounded-full text-white font-medium hover:bg-green-500 inline-block shadow-lg"
                        >
                          Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-center gap-4 border-t border-white/20 pt-8">
              <a
                href={`https://wa.me/${whatsappUrlNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 px-6 py-3 rounded-full text-white font-medium hover:bg-green-500"
              >
                WhatsApp Now
              </a>
              <a
                href={`tel:${CONTACT_INFO.callNumber}`}
                className="bg-white text-[#1b2b6b] px-6 py-3 rounded-full font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
        {/* ---------------- PROMO BAR ---------------- */}
        <div className="bg-gradient-to-r from-[#1BB77A] via-[#14A4C9] to-[#3D3FE5] p-8 text-white mt-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-lg">Choose Your Preferred Pricing Model</div>
              <div className="text-sm opacity-90">
                Annual subscription ($149/year) or 30% profit share — your choice!
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="#pricing"
                className="bg-white text-[#1b2b6b] px-5 py-2 rounded-full font-medium"
              >
                Get Started
              </a>
              <a
                href="#demo"
                className="border border-white px-5 py-2 rounded-full"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
        {/* ---------------- FOOTER ---------------- */}
        <footer className="bg-[#0b1020] text-gray-200 px-6 py-12 mt-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br flex items-center justify-center text-white font-bold">
                  <img src="./images/logo.png" alt="Logo" className="w-6 h-6" />
                </div>
                <div className="font-semibold">Golden Pips Bot</div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Your AI-powered trading partner for consistent Bitcoin market success.
              </p>
            </div>
            <div>
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Services</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>Trading Signals (BTC, Gold, Currency)</li>
                <li>Market Analysis</li>
                <li>Risk Management</li>
                <li>24/7 Support</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact Info</div>
              <div className="mt-3 text-sm text-gray-300">{CONTACT_INFO.callNumber}</div>
              <div className="text-sm text-gray-300">{CONTACT_INFO.email}</div>
            </div>
          </div>
            {/* Risk Disclosure */}
            <div className="mt-8 border-t border-white/10 pt-6 text-center text-gray-400 text-xs italic">
                Forex trading involves risk. Returns may vary, and capital loss is possible. Please invest only what aligns with your risk comfort.
            </div>
          <div className="mt-2 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Golden Pips Bot. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}