import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center pl-4">
      
      {/* Desktop: vertical title on the left */}
        <div className="page-title-vertical">
          <span>Contact</span>
        </div>
      
      <div className="w-full h-full md:px-10 px-5">
        {/* Mobile: horizontal title on top */}
        <div className="page-title-horizontal">
          <span>Contact</span>
        </div>

        <div 
          className="flex items-center justify-center h-full"
          style={{
            backgroundImage: "url('assets/RoundBorder.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: 'min(65%, 90vw)',  
            minWidth: '600px',       
            aspectRatio: '6/7',
            margin: '0 auto',
            padding: '10%',
          }}>
    
          <div className="flex-center rounded-xl md:p-10 p-5">
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
            >
              <div>
                <h3 className="w-full flex-center md:px-15 px-10">Get in Touch!</h3>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name..."
                  required
                />
              </div>

              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address..."
                  required
                />
              </div>

              <div>
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="assets/ArrowHand.png" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;