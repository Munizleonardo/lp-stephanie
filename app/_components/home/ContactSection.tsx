"use client"
import { Button } from "@/app/_components/ui/button";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521976164445", "_blank");
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

          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6878133275063!2d-43.232133000000005!3d-22.9248829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fdac0955f01%3A0x7948ef4ed21c4f7c!2sPsic%C3%B3loga%20Stephanie%20Moura!5e0!3m2!1spt-BR!2sbr!4v1761966877566!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Ou me encontre nas redes sociais</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/psistephaniemouraa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@psistephaniemouraa?_t=ZM-8vl1h227noz&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Image src="/tik.webp" alt="TikTok" width={20} height={20} />
              </a>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
