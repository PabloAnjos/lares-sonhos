import { Home } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-emerald-500 text-white px-4 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Home className="h-6 w-6" />
              <span className="text-xl font-bold">Lares & Sonhos</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center space-x-2 hover:underline">
                <Mail className="h-4 w-4" />
                <span>contato@lares&sonhos.com</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:underline">
                <Phone className="h-4 w-4" />
                <span>+55 (21) 1234-5678</span>
              </a>
            </div>
          </div>
        </footer>
    );
}