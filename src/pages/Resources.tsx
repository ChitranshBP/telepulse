import React from 'react';
import { BookOpen, Download, Video } from 'lucide-react';

const Resources: React.FC = () => {
  // const blogPosts = [
  //   {
  //     title: 'The Future of Pediatric Telemedicine: AI and Predictive Analytics',
  //     excerpt: 'Exploring how artificial intelligence is revolutionizing early intervention and clinical decision-making in pediatric critical care.',
  //     author: 'Dr. Sarah Chen',
  //     date: '2025-01-15',
  //     category: 'Innovation',
  //     image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     readTime: '5 min read'
  //   },
  //   {
  //     title: 'Implementing Tele NICU: Best Practices and Lessons Learned',
  //     excerpt: 'A comprehensive guide based on successful implementations across 50+ healthcare institutions worldwide.',
  //     author: 'Dr. Michael Rodriguez',
  //     date: '2025-01-12',
  //     category: 'Implementation',
  //     image: 'https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     readTime: '8 min read'
  //   },
  //   {
  //     title: 'Data Security in Healthcare: Protecting Patient Information in Telemedicine',
  //     excerpt: 'Understanding HIPAA compliance, encryption, and security best practices for telemedicine platforms.',
  //     author: 'Rebecca Martinez',
  //     date: '2025-01-10',
  //     category: 'Security',
  //     image: 'https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     readTime: '6 min read'
  //   },
  //   {
  //     title: 'Global Impact: Rural Healthcare Access Through Telemedicine',
  //     excerpt: 'Case studies demonstrating how telemedicine is bridging the healthcare gap in underserved communities.',
  //     author: 'Dr. Lisa Thompson',
  //     date: '2025-01-08',
  //     category: 'Global Health',
  //     image: 'https://images.pexels.com/photos/4386439/pexels-photo-4386439.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     readTime: '7 min read'
  //   }
  // ];

  const whitepapers = [
    {
      title: 'eICU - Electronic Intensive Care Unit',
      description: 'Comprehensive guide to implementing electronic intensive care units for enhanced patient monitoring and care coordination in critical care settings.',
      pages: 0,
      downloadCount: '0',
      category: 'Clinical Research',
      file: '/assets/pdfs/eICU.pdf'
    },
    {
      title: 'Electronic Documentation',
      description: 'Best practices and guidelines for implementing electronic documentation systems in healthcare facilities to improve efficiency and accuracy.',
      pages: 0,
      downloadCount: '0',
      category: 'Technology',
      file: '/assets/pdfs/Electronic documentation.pdf'
    },
    {
      title: 'Enhance Clinical Outcomes',
      description: 'Strategies and evidence-based approaches for enhancing clinical outcomes through telemedicine and digital health solutions.',
      pages: 0,
      downloadCount: '0',
      category: 'Clinical Research',
      file: '/assets/pdfs/enhance clinical outcomes.pdf'
    },
    {
      title: 'Outstanding Performance',
      description: 'Achieving outstanding performance in pediatric telemedicine through quality improvement initiatives and best practices.',
      pages: 0,
      downloadCount: '0',
      category: 'Quality Improvement',
      file: '/assets/pdfs/outstanding.pdf'
    }
  ];

  // const webinars = [
  //   {
  //     title: 'Advanced AI Applications in Pediatric Critical Care',
  //     presenter: 'Dr. James Wilson, Chief Innovation Officer',
  //     date: '2025-02-15',
  //     time: '2:00 PM EST',
  //     duration: '60 minutes',
  //     type: 'upcoming',
  //     description: 'Deep dive into machine learning algorithms for predictive analytics and clinical decision support.',
  //     attendees: 500
  //   },
  //   {
  //     title: 'Implementation Strategies for Multi-Site Telemedicine Programs',
  //     presenter: 'Rebecca Martinez, CTO',
  //     date: '2025-02-08',
  //     time: '3:00 PM EST',
  //     duration: '45 minutes',
  //     type: 'upcoming',
  //     description: 'Practical guidance for scaling telemedicine across multiple hospital locations and departments.',
  //     attendees: 350
  //   },
  //   {
  //     title: 'Quality Improvement Through Telemedicine Analytics',
  //     presenter: 'Dr. Sarah Chen, CEO',
  //     date: '2025-01-25',
  //     time: 'On-Demand',
  //     duration: '50 minutes',
  //     type: 'recorded',
  //     description: 'How data analytics can drive continuous quality improvement in pediatric critical care.',
  //     views: '1.2k'
  //   },
  //   {
  //     title: 'Nursing Excellence in Tele-ICU Environments',
  //     presenter: 'Sarah Johnson, RN, MSN',
  //     date: '2025-01-18',
  //     time: 'On-Demand',
  //     duration: '40 minutes',
  //     type: 'recorded',
  //     description: 'Best practices for nursing care coordination and patient management in telemedicine settings.',
  //     views: '890'
  //   }
  // ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-6 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Healthcare Resources"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Knowledge Hub</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Access cutting-edge research, implementation guides, and educational resources 
            for pediatric telemedicine and critical care
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Research & Articles</h3>
              <p className="text-gray-600">Latest insights, case studies, and innovation updates from our team of experts</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Whitepapers & Guides</h3>
              <p className="text-gray-600">In-depth analysis, implementation guides, and research findings for download</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#001F5B] to-[#00CFE6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Webinars & Training</h3>
              <p className="text-gray-600">Educational sessions, training programs, and expert presentations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-3">Latest Articles</h2>
              <p className="text-base text-gray-600">Stay updated with the latest developments in pediatric telemedicine</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00CFE6]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#B22222] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#001F5B] mb-3 group-hover:text-[#B22222] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="text-[#B22222] font-medium hover:text-[#00CFE6] transition-colors duration-200 flex items-center space-x-2 text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="#"
              className="bg-[#001F5B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#B22222] transition-colors duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section> */}

      {/* Whitepapers */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Research & Whitepapers</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Download comprehensive research studies and implementation guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <span className="text-[#00CFE6] text-sm font-medium mb-2 block">{paper.category}</span>
                    <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{paper.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#B22222] rounded-xl flex items-center justify-center ml-4">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
                {paper.pages > 0 && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>{paper.pages} pages</span>
                      <span>{paper.downloadCount} downloads</span>
                    </div>
                  </div>
                )}
                <a
                  href={paper.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#001F5B] text-white py-2.5 rounded-lg font-medium hover:bg-[#B22222] transition-colors duration-200 text-center"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      {/* <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Educational Webinars</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Join our expert-led sessions and access recorded training content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {webinar.type === 'upcoming' ? (
                        <span className="bg-[#00CFE6] text-[#001F5B] px-3 py-1 rounded-full text-sm font-medium">
                          Upcoming
                        </span>
                      ) : (
                        <span className="bg-[#B22222] text-white px-3 py-1 rounded-full text-sm font-medium">
                          On-Demand
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{webinar.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{webinar.description}</p>
                    <div className="text-[#00CFE6] font-medium mb-2">{webinar.presenter}</div>
                  </div>
                  <div className="w-12 h-12 bg-[#B22222] rounded-xl flex items-center justify-center ml-4">
                    {webinar.type === 'upcoming' ? (
                      <Calendar className="w-6 h-6 text-white" />
                    ) : (
                      <Video className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-300">
                    <div>{webinar.date} • {webinar.time}</div>
                    <div className="flex items-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-4 h-4 mr-1" />
                    {webinar.type === 'upcoming' ? `${webinar.attendees} registered` : `${webinar.views} views`}
                  </div>
                </div>
                
                <button className={`w-full py-2.5 rounded-lg font-medium transition-colors duration-200 ${
                  webinar.type === 'upcoming'
                    ? 'bg-[#00CFE6] text-[#001F5B] hover:bg-white hover:text-[#001F5B]'
                    : 'bg-[#B22222] text-white hover:bg-white hover:text-[#001F5B]'
                }`}>
                  {webinar.type === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="#"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-6 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest research, insights, and educational resources 
            in pediatric telemedicine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#001F5B] px-6 py-2.5 rounded-full font-medium hover:bg-[#B22222] hover:text-white transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;