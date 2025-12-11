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
    testimonial1: "data:image/webp;base64,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",
    testimonial2: "https://th.bing.com/th/id/OIP.Ru6j-Ex_sY6h75-jS_E15QHaEK?w=284&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    testimonial3: "data:image/webp;base64,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",
  };

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
      name: "Radhakishan Damani",
      role: "Value Investor",
      quote: "Golden Pips Bot transformed my trading. The accuracy is unbelievable!",
      photo: IMAGES.testimonial1,
      stars: 5,
    },
    {
      name: "Rakesh Jhunjhunwala",
      role: "Investor",
      quote: "The AI signals are extremely accurate. Worth every rupee!",
      photo: IMAGES.testimonial2,
      stars: 4.5,
    },
    {
      name: "Ramdeo Agrawal",
      role: "Co-Founder of Motilal Oswal Group",
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
            <div className="text-sm text-slate-600">Pricing</div>
            <div className="text-4xl font-bold text-green-600 mt-3">
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