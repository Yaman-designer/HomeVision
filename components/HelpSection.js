import { BadgeCheck, Mail } from 'lucide-react';

export default function HelpSection() {
  return (
    <section className="bg-background py-20 px-6 md:px-12 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-accent mb-8 leading-tight">
        Do You Have Any Questions?<br />Get Help From Us
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-12 text-accent font-semibold text-lg">
        <div className="flex items-center justify-center gap-2">
          <BadgeCheck size={24} className="text-accent" />
          <span>Chat live with our support team</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BadgeCheck size={24} className="text-accent" />
          <span>Browse our FAQ</span>
        </div>
      </div>

      <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
        <div className="relative flex-1">
          <Mail 
            size={20} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand" 
          />
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full bg-primary text-accent placeholder:text-brand pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all font-medium"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-accent text-white px-10 py-4 rounded-lg font-bold hover:bg-brand transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}