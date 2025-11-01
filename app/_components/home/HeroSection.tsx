"use client"
import { Button } from "@/app/_components/ui/button";
import { Heart } from "lucide-react";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521999999999", "_blank");
  };

  return (
    <section
      id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 animate-fade-in">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Psicologia Humanista</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Encontre seu equilíbrio:<br />
          <span className="text-primary">Terapia <span className="text-black">Online</span> e Presencial no Rio de Janeiro</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Acolhimento e transformação através da Gestalt-Terapia e Fenomenologia
          Existencial. Vamos juntos nessa jornada de autoconhecimento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary  hover:bg-primary/90 text-lg px-8 py-6"
          >
            Agende sua consulta pelo WhatsApp
          </Button>
        </div>

        <div className="mt-16 flex flex-row items-center justify-center md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Pacientes atendidos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Dedicação e acolhimento</div>
          </div>
        </div>
      </div>
    </section>
  );
};
