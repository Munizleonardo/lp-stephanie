export default function Footer() {
    
    return (
      <footer className="bg-muted/30 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground">Psicóloga Stephanie Moura</p>
              <p className="text-sm text-muted-foreground">CRP 05/81314</p>
            </div>
  
            <div className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados
            </div>
  
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>Psicologia com acolhimento</p>
              <p>Rio de Janeiro - RJ</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  