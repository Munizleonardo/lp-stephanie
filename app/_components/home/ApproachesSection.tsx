import { Brain, Sparkles } from "lucide-react";

export default function ApproachesSection() {
  const approaches = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Gestalt-Terapia",
      description:
        "Abordagem que trabalha o momento presente, enfatizando a consciência e responsabilidade pessoal. Focamos no aqui e agora, promovendo integração e crescimento pessoal através da experiência vivida.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Fenomenologia Existencial",
      description:
        "Perspectiva que valoriza a experiência humana única e autêntica. Exploramos questões existenciais como liberdade, responsabilidade e sentido da vida, respeitando sua singularidade e existência.",
    },
  ];

  return (
    <section id="abordagens" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Minhas Abordagens
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalho com métodos humanistas que priorizam sua experiência e
            autoconhecimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 ">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-hover animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 ">{approach.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
