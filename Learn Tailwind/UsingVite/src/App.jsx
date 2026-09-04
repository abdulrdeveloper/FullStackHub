function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Chai Tailwind</h1>
          <p className="text-lg opacity-90">A simple and clean React + Tailwind CSS application</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
       
        <section className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4">
            This is a simple template to help you build beautiful UIs with Tailwind CSS. No complex showcase, just clean and readable code.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </section>

        
        <section className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Responsive Design</h3>
              <p className="text-gray-600">Looks great on all devices with Tailwind's responsive utilities.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Easy to Customize</h3>
              <p className="text-gray-600">Modify colors and styles easily with Tailwind classes.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Fast Development</h3>
              <p className="text-gray-600">Build UI components quickly without writing CSS.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Clean Code</h3>
              <p className="text-gray-600">Simple, readable, and maintainable code structure.</p>
            </div>
          </div>
        </section>

       
        <section className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
              Send Message
            </button>
          </form>
        </section>
      </main>

      
      <footer className="bg-gray-800 text-gray-300 text-center py-8 mt-16">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;