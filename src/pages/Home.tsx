import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Monitor, 
  // Shield, 
  Award,
  ArrowRight,
  Play,
  // ChevronLeft,
  // ChevronRight,
  // Building2,
  Stethoscope,
  GraduationCap,
  Search,
 
  TrendingUp,
  Clock,
  Globe,
  Zap,
  Target,
  BarChart3,
  Brain,
  Activity
} from 'lucide-react';

// const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
//   end, 
//   duration = 2000, 
//   suffix = '' 
// }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTimestamp: number | null = null;
//     const step = (timestamp: number) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       setCount(Math.floor(progress * end));
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }, [end, duration]);

//   return <span>{count.toLocaleString()}{suffix}</span>;
// };

const Home: React.FC = () => {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const stats = [
  //   { value: 15000, suffix: '+', label: 'Lives Saved', icon: Heart },
  //   { value: 250, suffix: '+', label: 'Partner Hospitals', icon: Building2 },
  //   { value: 50000, suffix: '+', label: 'Patients Monitored', icon: Monitor },
  //   { value: 99.9, suffix: '%', label: 'System Uptime', icon: Shield },
  // ];

  const solutions = [

        {
      icon: Stethoscope,
      title: 'Pediatric Tele-ICU',
      description: 'Comprehensive critical care with real-time intervention',
      // metrics: '35% outcome improvement',
      path: '/picu'
    },
    {
      icon: Heart,
      title: 'NICU Tele-care',
      description: 'Specialized neonatal monitoring with 24/7 expert consultation',
      // metrics: '40% mortality reduction',
      path: '/nicu'
    },

    {
      icon: GraduationCap,
      title: 'Tele-Education',
      description: 'Professional development and certification programs',
      // metrics: '95% completion rate',
      path: '/education'
    },
    {
      icon: Search,
      title: 'Research & Innovation',
      description: 'Evidence-based protocols and clinical studies',
      // metrics: '50+ published studies',
      path: '/research'
    },
  ];

  // const testimonials = [
  //   {
  //     name: 'Dr. Sarah Chen',
  //     title: 'Chief of Pediatrics',
  //     hospital: 'Children\'s Medical Center',
  //     content: 'Telepulse transformed our NICU operations with measurable improvements in patient outcomes.',
  //     image: 'https://images.pexels.com/photos/559827/pexels-photo-559827.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     metric: '40% reduction in mortality'
  //   },
  //   {
  //     name: 'Dr. Michael Rodriguez',
  //     title: 'Director of Critical Care',
  //     hospital: 'Regional Hospital Network',
  //     content: 'The platform\'s intuitive design and expert support have revolutionized our pediatric care delivery.',
  //     image: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     metric: '50% faster response times'
  //   },
  //   {
  //     name: 'Dr. Lisa Thompson',
  //     title: 'Neonatologist',
  //     hospital: 'University Medical Center',
  //     content: 'World-class expertise at every bedside - the collaborative care model is revolutionary.',
  //     image: 'https://images.pexels.com/photos/1068352/pexels-photo-1068352.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     metric: '95% staff satisfaction'
  //   },
  // ];

  // const nextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // };

  // const prevTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  // useEffect(() => {
  //   const timer = setInterval(nextTestimonial, 6000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001F5B] via-[#003875] to-[#001A4D] min-h-[600px]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0, 207, 230, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(178, 34, 34, 0.3) 0%, transparent 50%)
            `
          }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Column - Content */}
              <div className="space-y-6 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-[#00CFE6] rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium">Trusted by 250+ Healthcare Institutions</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Revolutionize
                    <span className="block bg-gradient-to-r from-[#00CFE6] via-[#00A8CC] to-[#B22222] bg-clip-text text-transparent">
                      Pediatric Care
                    </span>
                  </h1>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#B22222] via-[#00CFE6] to-transparent rounded-full mx-auto lg:mx-0"></div>
                </div>

                {/* Description */}
                <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Connect your medical teams with world-class pediatric specialists through our
                  advanced telemedicine platform. Real-time monitoring, expert consultation,
                  and proven outcomes.
                </p>

                {/* Key Benefits */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Heart className="w-4 h-4 text-[#B22222]" />
                    <span className="text-white/90 text-sm">Save Lives</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <TrendingUp className="w-4 h-4 text-[#00CFE6]" />
                    <span className="text-white/90 text-sm">Improve Outcomes</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Users className="w-4 h-4 text-[#00CFE6]" />
                    <span className="text-white/90 text-sm">Expert Access 24/7</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Link
                    to="/contact"
                    className="group px-8 py-3.5 bg-gradient-to-r from-[#B22222] to-[#8B1818] text-white rounded-xl font-semibold shadow-lg shadow-[#B22222]/25 hover:shadow-xl hover:shadow-[#B22222]/40 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>

                  <Link
                    to="/solutions"
                    className="group px-8 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>View Solutions</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative lg:block hidden">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00CFE6]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#B22222]/10 rounded-full blur-3xl"></div>

                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pediatric Healthcare"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#001F5B]/40 via-transparent to-[#00CFE6]/20"></div>

                  {/* Floating Stats Cards */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                    <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-xl">
                      <div className="text-2xl font-bold text-[#B22222]">15K+</div>
                      <div className="text-xs text-gray-600 font-medium">Lives Saved</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-xl">
                      <div className="text-2xl font-bold text-[#001F5B]">250+</div>
                      <div className="text-xs text-gray-600 font-medium">Partner Hospitals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#001F5B] mb-3">Why Healthcare Leaders Choose Telepulse</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Proven results across 250+ healthcare institutions worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-10 h-10 mx-auto mb-2 bg-[#B22222] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-semibold text-[#001F5B] mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      {/* Solutions Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#001F5B] mb-3">Comprehensive Care Solutions</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Integrated telemedicine platform covering every aspect of pediatric critical care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.path}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#00CFE6]/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#B22222] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-[#001F5B] mb-2 group-hover:text-[#B22222] transition-colors duration-200">
                      {solution.title}
                    </h3>
                   
                    <div className="flex items-center justify-between">
                       <p className="text-gray-600 mb-2 text-sm leading-relaxed">{solution.description}</p>
                      {/* <span className="text-[#00CFE6] font-medium text-sm">{solution.metrics}</span> */}
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#B22222] group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Parallax Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4386439/pexels-photo-4386439.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[#001F5B]/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Bridging the Gap in Pediatric Expertise</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto opacity-90">
            Every minute counts in pediatric critical care. Our platform ensures expert consultation 
            is available instantly, regardless of location or time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-[#00CFE6] mx-auto mb-3" />
              <h3 className="text-base font-medium mb-2">Instant Access</h3>
              <p className="text-sm opacity-80">Connect with specialists instantly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-[#00CFE6] mx-auto mb-3" />
              <h3 className="text-base font-medium mb-2">Global Reach</h3>
              <p className="text-sm opacity-80">Expert care available 24/7 across time zones</p>
            </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
  <Heart className="w-8 h-8 text-[#00CFE6] mx-auto mb-3" />
  <h3 className="text-base font-medium mb-2">Compassionate Care</h3>
  <p className="text-sm opacity-80">Personalized attention and empathy in every treatment journey.</p>
</div>
          </div>
        </div>
      </section>
      {/* ROI & Business Impact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Measurable Business Impact</h2>
              <p className="text-base text-gray-600 mb-6">
                Healthcare organizations see immediate ROI through improved outcomes, 
                reduced transfers, and enhanced operational efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001F5B] mb-1">Cost Reduction</h3>
                    <p className="text-gray-600 text-sm">Average 25% reduction in patient transfer costs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001F5B] mb-1">Quality Metrics</h3>
                    <p className="text-gray-600 text-sm">Improved scores and accreditation ratings</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001F5B] mb-1">Operational Efficiency</h3>
                    <p className="text-gray-600 text-sm">50% faster clinical decision-making process</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="relative">
              <div className="bg-gradient-to-br from-[#001F5B] to-[#002A7A] rounded-2xl p-8 text-white">
                <h3 className="text-lg font-medium mb-4">Implementation Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center text-[#001F5B] font-bold text-sm">1</div>
                    <div>
                      <div className="font-medium text-sm">Assessment & Planning</div>
                      <div className="text-white/70 text-sm">Week 1-2</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center text-[#001F5B] font-bold text-sm">2</div>
                    <div>
                      <div className="font-medium text-sm">System Integration</div>
                      <div className="text-white/70 text-sm">Week 3-4</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center text-[#001F5B] font-bold text-sm">3</div>
                    <div>
                      <div className="font-medium text-sm">Staff Training & Go-Live</div>
                      <div className="text-white/70 text-sm">Week 5-6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="relative flex items-center justify-center">
  <div className=" rounded-2xl p-4 md:p-8 text-white overflow-hidden">
    <img
      src="/images/timeline-graphic.png"
      alt="Implementation Timeline"
      className="w-full h-auto rounded-xl object-cover"
    />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      {/* <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-3">Trusted by Healthcare Leaders</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Real results from medical professionals using Telepulse daily
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00CFE6] mr-3"
                />
                <div>
                  <div className="font-medium text-base text-[#00CFE6]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/80 text-sm">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentTestimonial].hospital}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-base mb-3 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="text-[#00CFE6] font-medium text-sm">
                  {testimonials[currentTestimonial].metric}
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? 'bg-[#00CFE6]' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}

      {/* What We Do Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-8 w-64 h-64 bg-[#00CFE6] rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 w-80 h-80 bg-[#B22222] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#001F5B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <div className="w-2 h-2 bg-[#00CFE6] rounded-full mr-2 animate-pulse"></div>
              <span className="text-[#001F5B] text-sm font-medium">What We Do</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">
              Transforming Healthcare Through
              <span className="block bg-gradient-to-r from-[#B22222] to-[#00CFE6] bg-clip-text text-transparent">
                Innovation & Expertise
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between world-class pediatric expertise and patients who need it most, 
              delivering life-saving care through cutting-edge telemedicine technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#00CFE6]/20 to-[#B22222]/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-[#001F5B]/5 to-[#B22222]/5 rounded-xl">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[#001F5B] rounded-xl flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xl font-semibold text-[#001F5B] mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Expert Coverage</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#B22222]/5 to-[#00CFE6]/5 rounded-xl">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[#B22222] rounded-xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xl font-semibold text-[#001F5B] mb-1">250+</div>
                    <div className="text-sm text-gray-600">Partner Hospitals</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#00CFE6]/5 to-[#001F5B]/5 rounded-xl">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[#00CFE6] rounded-xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xl font-semibold text-[#001F5B] mb-1">25+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#001F5B]/5 to-[#00CFE6]/5 rounded-xl">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[#001F5B] rounded-xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xl font-semibold text-[#001F5B] mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#001F5B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#001F5B] mb-2">Real-Time Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuous patient monitoring with AI-powered analytics that detect critical changes 
                    before they become life-threatening emergencies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#B22222] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#001F5B] mb-2">Expert Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Instant access to board-certified pediatric specialists and intensivists 
                    for collaborative care planning and critical decision-making.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#00CFE6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
      <div>
  <h3 className="text-base font-medium text-[#001F5B] mb-2">Unified Diagnostic Platform</h3>
  <p className="text-gray-600 leading-relaxed">
    Access Echo, ECG, and Ultrasound reports all in one place—streamlining diagnostics and 
    improving coordination between clinicians for faster, more informed decisions.
  </p>
</div>
              </div>
            </div>
          </div>

          {/* Interactive Process Flow */}
          <div className="relative">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-semibold text-[#001F5B] mb-3">How We Transform Care</h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Our seamless integration process ensures rapid deployment and immediate impact
              </p>
            </div>

            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-[#001F5B] via-[#B22222] to-[#00CFE6] transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Connect",
                    description: "Seamless integration with existing hospital systems and monitoring equipment",
                    icon: Zap,
                    color: "from-[#001F5B] to-[#B22222]"
                  },
                  {
                    step: "02", 
                    title: "Monitor",
                    description: "24/7 real-time patient monitoring with intelligent alert systems",
                    icon: Activity,
                    color: "from-[#B22222] to-[#00CFE6]"
                  },
                  {
                    step: "03",
                    title: "Analyze",
                    description: "AI-powered analytics provide predictive insights and recommendations",
                    icon: BarChart3,
                    color: "from-[#00CFE6] to-[#001F5B]"
                  },
                  {
                    step: "04",
                    title: "Intervene",
                    description: "Expert specialists provide immediate consultation and intervention",
                    icon: Target,
                    color: "from-[#001F5B] to-[#00CFE6]"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative text-center group">
                    <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-white rounded-full border-3 border-[#00CFE6] flex items-center justify-center">
                          <span className="text-xs font-bold text-[#001F5B]">{item.step}</span>
                        </div>
                      </div>
                      
                      <div className={`w-12 h-12 mx-auto mb-4 bg-[#001F5B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-base font-medium text-[#001F5B] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#B22222] to-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to Transform Your Pediatric Care?</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto opacity-90">
            Join 250+ healthcare institutions already improving outcomes with Telepulse. 
            Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Demo
            </Link>
            {/* <Link
              to="/impact"
              className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300"
            >
              View Case Studies
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;