import React, { useState } from 'react';

const faqs = [
  { question: "⚡Tell me about yourself?", answer: "Based in Addis Ababa, I'm a web developer passionate about building a modern FrontEnd web application that users love." },
  { question: "⚡What is your Tech stack?", answer: "My tech stack includes React.js and Next.js for frontend development, Tailwind CSS for styling, Supabase as a backend service with PostgreSQL as the databas" },
  {
    question: "⚡ What is your approach to creating responsive and accessible web applications?",
    answer: "I prioritize creating responsive and accessible web applications by following best practices and using modern web technologies. For responsiveness, I use CSS frameworks like TailwindCSS and implement media queries to ensure the application looks good on various devices."
  }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full p-3 text-left bg-[#1d1b1b] text-white rounded-xl "
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="px-2 py-1 text-sm 0 text-[#fafafada] font-extralight leading-relaxed">
             🟢 {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;