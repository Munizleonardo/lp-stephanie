import { Video, MapPin } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Atendimento Online",
      description:
        "Sessões por videochamada com total privacidade e segurança. Ideal para quem busca flexibilidade de horários ou mora longe. Mesma qualidade do atendimento presencial, no conforto da sua casa.",
      benefits: ["Horários flexíveis", "Conforto de casa", "Mesma eficácia"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Atendimento Presencial",
      description:
        "Consultório acolhedor localizado na Tijuca - Rio de Janeiro. Ambiente tranquilo e privativo, pensado para você se sentir à vontade e seguro durante nossas sessões.",
      benefits: ["Tijuca - Rio de Janeiro", "Ambiente acolhedor", "Privacidade total"],
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-secondary/100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como posso te ajudar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta à sua rotina e necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-hover animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};