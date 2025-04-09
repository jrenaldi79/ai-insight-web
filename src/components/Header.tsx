
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Demos", href: "#demos" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container-content flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text">AI Consulting</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button className="ml-4">Get Started</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b shadow-lg animate-fade-in">
          <div className="container-content py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-primary"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
