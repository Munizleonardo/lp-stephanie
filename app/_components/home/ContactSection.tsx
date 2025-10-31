"use client"
import { Button } from "@/app/_components/ui/button";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521984508057", "_blank");
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dar o primeiro passo é um ato de coragem. Estou aqui para te acolher
            nessa jornada. Entre em contato e agende sua primeira consulta.
          </p>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 mb-12"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Entrar em contato pelo WhatsApp
          </Button>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Ou me encontre nas redes sociais</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/psistephaniemouraa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/psistephaniemouraa/?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
