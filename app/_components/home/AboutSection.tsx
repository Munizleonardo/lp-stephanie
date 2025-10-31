import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden card-hover">
              <Image
                src="/img_steph.png"
                alt="Dra. Ana Silva - Psicóloga"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/80 rounded-2xl p-6 shadow-lg max-w-[200px]">
              <div className="text-2xl font-bold text-foreground">CRP 05/81314</div>
              <div className="text-sm text--foreground">Registro Profissional</div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Olá! Sou Stephanie Moura, psicóloga formada pela Universidade do Estado do Rio de Janeiro (UERJ), com atuação voltada para o universo feminino e os relacionamentos — ajudando mulheres, crianças, adolescentes e adultos a compreenderem suas emoções e construírem relações mais saudáveis consigo e com o outro.
              </p>
              <p>
              Minha prática é fundamentada na Gestalt-Terapia e na Fenomenologia Existencial, abordagens que valorizam o autoconhecimento, o contato com o presente e a experiência vivida de cada pessoa. Acredito que o processo terapêutico é um espaço de escuta, acolhimento e descoberta, onde cada indivíduo pode se permitir ser quem realmente é.
              </p>
              <p>
              Atendo nas modalidades online e presencial, oferecendo um espaço seguro, ético e empático para que o seu processo de desenvolvimento pessoal aconteça no seu tempo e do seu jeito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};