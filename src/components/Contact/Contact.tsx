// import { Github, Linkedin, Mail } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h2>
//         <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" 
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" 
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
//               <textarea 
//                 id="message" 
//                 name="message" 
//                 rows={4} 
//                 className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3"
//               ></textarea>
//             </div>
//             <div>
//               <button 
//                 type="submit" 
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//           <div className="mt-8 flex justify-center space-x-6">
//             <a 
//               href="https://linkedin.com/in/maxamed-maxamed-a87298151" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-gray-400 hover:text-blue-600 transition duration-200"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a 
//               href="https://github.com/Maxamed-Maxamed" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-gray-400 hover:text-gray-600 transition duration-200"
//             >
//               <Github size={24} />
//             </a>
//             <a 
//               href="mailto:maxamed.maxamed4331@gmail.com" 
//               className="text-gray-400 hover:text-blue-600 transition duration-200"
//             >
//               <Mail size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;








import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }
    
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus({
        message: "Message sent successfully! I'll get back to you soon.",
        isError: false
      });
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
      form.current?.reset();
      
    } catch (err) {
      console.error('Email sending failed:', err);
      setSubmitStatus({
        message: "Failed to send message. Please try again or contact directly via email.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h2>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-800">Name</label>
              <input 
                type="text" 
                id="user_name" 
                name="user_name" 
                value={formData.user_name}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-md border ${errors.user_name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3`}
              />
              {errors.user_name && <p className="mt-1 text-sm text-red-500">{errors.user_name}</p>}
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-800">Email</label>
              <input 
                type="email" 
                id="user_email" 
                name="user_email" 
                value={formData.user_email}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-md border ${errors.user_email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3`}
              />
              {errors.user_email && <p className="mt-1 text-sm text-red-500">{errors.user_email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className={`mt-2 block w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            {submitStatus && (
              <div className={`p-3 rounded-md ${submitStatus.isError ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {submitStatus.message}
              </div>
            )}

            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
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
