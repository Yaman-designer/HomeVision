import { Instagram, Facebook, Twitter } from 'lucide-react'; // أو أي مكتبة أيقونات تفضلينها

export default function Footer() {
  return (
    <footer className="bg-primary px-8 py-16 md:px-20 lg:px-32 border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="HomeVision Logo" className="w-40 h-15 object-contain" />
          </div>
          <p className="text-brand text-lg leading-relaxed max-w-1/2">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-accent font-bold text-xl mb-6">About</h4>
          <ul className="space-y-4 text-brand">
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Our Story</li>
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Careers</li>
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Our Team</li>
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Resources</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-accent font-bold text-xl mb-6">Support</h4>
          <ul className="space-y-4 text-brand">
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">FAQ</li>
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Contact Us</li>
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Help Center</li>
            <li className="hover:text-accent cursor-pointer font-medium transition-colors">Terms of Service</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-accent font-bold text-xl mb-6">Our Social</h4>
          <ul className="space-y-4 text-brand">
            <li className="flex items-center gap-3 hover:text-accent font-medium cursor-pointer transition-colors">
              <Instagram size={20} /> Instagram
            </li>
            <li className="flex items-center gap-3 hover:text-accent font-medium cursor-pointer transition-colors">
              <Facebook size={20} /> Facebook
            </li>
            <li className="flex items-center gap-3 hover:text-accent font-medium cursor-pointer transition-colors">
              <Twitter size={20} /> Twitter (X)
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}