import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h2>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/maxamed-maxamed-a87298151" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-600 transition duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Maxamed-Maxamed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-600 transition duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:maxamed.maxamed4331@gmail.com" 
              className="text-gray-400 hover:text-blue-600 transition duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;