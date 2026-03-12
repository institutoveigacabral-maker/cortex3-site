import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import HeroBlock from "@/react-app/components/blocks/HeroBlock";
import AboutBlock from "@/react-app/components/blocks/AboutBlock";
import FigitalBlock from "@/react-app/components/blocks/FigitalBlock";
import PortfolioBlock from "@/react-app/components/blocks/PortfolioBlock";
import GovernanceBlock from "@/react-app/components/blocks/GovernanceBlock";
import FoundersBlock from "@/react-app/components/blocks/FoundersBlock";
import ContactBlock from "@/react-app/components/blocks/ContactBlock";

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const brands = [
    {
      overline: "App / Super App local",
      title: "Venhaaa!!!",
      body: "Superapp / marketplace regional em Cascais que conecta comércio local, serviços e marcas próprias, criando dados de consumo e recorrência para o território.",
    },
    {
      overline: "Plataforma de cursos",
      title: "Ruptfy",
      body: "Plataforma EdTech própria que hospeda cursos do grupo e de parceiros, motor de recorrência digital com margem alta e baixo custo marginal.",
    },
    {
      overline: "Infoproduto estratégico",
      title: "Córtex FC",
      body: "Infoproduto de autoridade em gestão e decisão, porta de entrada para comunidade, produtos premium, consultorias e outros ativos do grupo.",
    },
    {
      overline: "Franqueadora + atacado",
      title: "Purple Party",
      body: "Cadeia que compra na China com margem de atacado e distribui via lojas franqueadas, e‑commerce e canais digitais, reduzindo dependência de marketplaces.",
    },
    {
      overline: "Marca física",
      title: "Barbearia do Rão",
      body: "Marca física em expansão com modelo híbrido marca + operador + investidor, com padrão de operação definido pela holding.",
    },
    {
      overline: "Infoproduto",
      title: "Long View",
      body: "Infoproduto focado em visão estratégica e construção de ativos de longo prazo, alavancado por imagem e autoridade.",
    },
    {
      overline: "Manufatura distribuída",
      title: "Forge and Flow 3D",
      body: "Vertical de impressão 3D que integra produção física, franquia leve e educação, transformando conhecimento em produto físico vendável.",
    },
    {
      overline: "Parceria estratégica",
      title: "Comex BCN",
      body: "Operação de comércio exterior via parceria contratual, sem equity, preservando o controle da holding.",
    },
  ];

  const founders = [
    {
      title: "Henrique Lemos",
      subtitle: "Food tech e expansão global",
      body: "Fundador do Grupo Rão, transformou uma operação de entregas em ecossistema food tech multivertical com superapp próprio, IA e Web3, no Brasil e em Portugal.",
    },
    {
      title: "Fernando Vieira",
      subtitle: "Varejo e curadoria de produto",
      body: "Sócio‑administrador da Casarão Lustres, referência em iluminação decorativa e técnica com mais de quatro décadas de atuação no Rio de Janeiro.",
    },
    {
      title: "Herson Rosa",
      subtitle: "Linha pesada e logística",
      body: "Administrador da Império dos Freios, referência em autopeças e manutenção de linha pesada na Avenida Brasil, eixo logístico do Rio de Janeiro.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Bloco 1 - Hero */}
      <HeroBlock
        heading="Holding FIGITAL luso‑brasileira de criação de ativos."
        body="Construímos, operamos e escalamos marcas próprias com fundamento econômico real, governança sólida e visão de longo prazo entre Europa, América Latina e Ásia."
        caption="Fundada por Henrique Lemos, Fernando Vieira e Herson Rosa, com histórico de escala em food tech, varejo e linha pesada no Brasil e em Portugal."
        primaryButtonLabel="Explorar portfólio de marcas"
        primaryButtonAction={() => scrollToSection("portfolio-section")}
        secondaryButtonLabel="Falar com o Grupo +351³"
        secondaryButtonAction={() => scrollToSection("contact-section")}
      />

      {/* Bloco 2 - Quem somos */}
      <AboutBlock
        heading="Quem é o Grupo +351³"
        body="O Grupo +351³ é uma holding empresarial dedicada a construir, operar e escalar marcas próprias com foco em caixa, governança e longo prazo, não em modinhas."
        listItems={[
          "Sede no Estoril, hub estratégico entre Europa e América Latina.",
          "Portfólio que integra comércio, franquias, conteúdo digital e operações internacionais.",
          "Estrutura pensada para criar ativos, não apenas 'testar ideias'.",
        ]}
      />

      {/* Bloco 3 - Tese FIGITAL */}
      <FigitalBlock
        heading="Nossa tese FIGITAL"
        paragraph1="FIGITAL, para o Grupo +351³, é a integração direta entre operações físicas e digitais, onde cada evento de cliente, loja, app ou conteúdo vira dado acionável para decisão."
        paragraph2="Essa camada de dados transforma o grupo numa espécie de 'rede neural empresarial', guiando portfólio, expansão, franquias e alocação de capital."
        cards={[
          {
            title: "Eventos",
            body: "Vendas, atendimentos, uso de apps, campanhas e operações em campo são capturados como eventos FIGITAL.",
          },
          {
            title: "Dados",
            body: "Os eventos alimentam um data lake com visão por marca, região e canal, com métricas simples e recorrentes.",
          },
          {
            title: "Decisões",
            body: "Abrir, escalar, pausar ou matar marcas segue critérios claros, com 'kill switch' definido desde o início.",
          },
        ]}
        linkText="Ver tese FIGITAL completa"
        linkHref="#"
      />

      {/* Bloco 4 - Portfólio */}
      <PortfolioBlock
        heading="Plataforma de marcas do Grupo +351³"
        brands={brands}
        linkText="Ver página completa do portfólio"
        linkHref="/portfolio"
      />

      {/* Bloco 5 - Governança */}
      <GovernanceBlock
        heading="Governança como vantagem competitiva"
        paragraph1="O Grupo +351³ controla governança, marca, expansão e integração do ecossistema. Sócios de marca controlam execução diária dentro de acordos operacionais claros."
        paragraph2="Capital vem da holding; equity nas marcas é condicionada à entrega; ninguém fora dos três sócios controla a holding."
        listHeading="Como decidimos"
        listItems={[
          "Acordo operacional com DRI por decisão e matriz de alçada em três níveis.",
          "Scorecard oficial focado em caixa, receita, margem bruta, EBITDA e retenção.",
          "Gatilhos automáticos de freio para risco jurídico, reputacional ou de caixa sistêmico.",
        ]}
        linkText="Conhecer nosso modelo de governança"
        linkHref="/governanca"
      />

      {/* Bloco 6 - Sócios */}
      <FoundersBlock
        heading="Sócios com histórico de execução"
        founders={founders}
      />

      {/* Bloco 7 - Contato */}
      <ContactBlock
        heading="Projetos, marcas e oportunidades FIGITAIS"
        body="O Grupo +351³ busca sócios operadores, investidores e parceiros para marcas e operações que conversem com a tese FIGITAL e com disciplina de caixa, governança e longo prazo."
        listItems={[
          "Novas marcas ou unidades franqueadas.",
          "Operações físicas com potencial de FIGITALIZAÇÃO.",
          "Tecnologias, conteúdos e estruturas que ampliem o ecossistema.",
        ]}
        primaryButtonLabel="Propor um projeto ao Grupo +351³"
        primaryButtonHref="/contato"
        secondaryButtonLabel="Receber apresentação institucional em PDF"
        secondaryButtonHref="#"
      />

      <Footer />
    </div>
  );
}
