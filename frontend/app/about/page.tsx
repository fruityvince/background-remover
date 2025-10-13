"use client";
import { Header } from '../../src/components/Header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-base-content mb-6">
              About Background Remover
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Transforming images with AI-powered background removal technology
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="card-title text-base-content mb-2">AI-Powered</h3>
              <p className="text-base-content/70">
                Advanced machine learning algorithms for precise background removal
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="card-title text-base-content mb-2">Lightning Fast</h3>
              <p className="text-base-content/70">
                Process images in seconds with our optimized technology
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="card-title text-base-content mb-2">Secure & Private</h3>
              <p className="text-base-content/70">
                Your images are processed securely and never stored on our servers
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-base-200 rounded-3xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-base-content mb-4">Our Story</h2>
              <p className="text-base-content/70 text-lg mb-4">
                Founded in 2024, Background Remover was born from a simple idea: 
                make professional-grade image editing accessible to everyone. 
                Whether you're a content creator, e-commerce seller, or just someone 
                who wants to improve their photos, our tool is designed for you.
              </p>
              <p className="text-base-content/70 text-lg">
                Using cutting-edge AI technology, we've simplified the complex process 
                of background removal into a single click. No technical skills required 
                - just upload your image and let our technology work its magic.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-primary/10 rounded-2xl p-6">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="stat-title">Images Processed</div>
                    <div className="stat-value text-primary">50K+</div>
                    <div className="stat-desc">Since launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-base-content mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="text-left">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-content rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-base-content/70">No watermarks on processed images</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-content rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-base-content/70">Support for multiple image formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-content rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-base-content/70">High-resolution output</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-content rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-base-content/70">Batch processing available</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-content rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-base-content/70">API access for developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-content rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-base-content/70">Regular feature updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
// function AboutPage() {
//   return (
//     <div className="min-h-screen bg-base-100">
//       <Header />
//
//       <div className="max-w-4xl mx-auto p-8">
//         <h1 className="text-4xl text-center font-bold mb-6">About Us</h1>
//         <p className="mb-4 text-center">
//           Welcome to our application! We are dedicated to providing the best service possible.
//         </p>
//         <h2 className="mb-4 text-center text-2xl font-semibold">
//           Our team is passionate about technology and innovation, and we strive to create solutions that make a difference.
//         </h2>
//         <p className="mb-4">
//           Thank you for visiting our site. If you have any questions or feedback, please don't hesitate to reach out!
//         </p>
//       </div>
//     </div>
//   )
// }
//
// export default AboutPage
