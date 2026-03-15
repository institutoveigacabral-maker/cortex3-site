import { describe, it, expect } from "vitest";

// Data structure tests for the portfolio brands used in HomePage
const brands = [
  {
    overline: "App / Super App local",
    title: "Venhaaa!!!",
    body: "Superapp / marketplace regional em Cascais.",
  },
  {
    overline: "Plataforma de cursos",
    title: "Ruptfy",
    body: "Plataforma EdTech própria.",
  },
  {
    overline: "Infoproduto estratégico",
    title: "Córtex FC",
    body: "Infoproduto de autoridade em gestão e decisão.",
  },
  {
    overline: "Franqueadora + atacado",
    title: "Purple Party",
    body: "Cadeia que compra na China com margem de atacado.",
  },
  {
    overline: "Marca física",
    title: "Barbearia do Rão",
    body: "Marca física em expansão.",
  },
  {
    overline: "Infoproduto",
    title: "Long View",
    body: "Infoproduto focado em visão estratégica.",
  },
  {
    overline: "Manufatura distribuída",
    title: "Forge and Flow 3D",
    body: "Vertical de impressão 3D.",
  },
  {
    overline: "Parceria estratégica",
    title: "Comex BCN",
    body: "Operação de comércio exterior.",
  },
];

const founders = [
  {
    title: "Henrique Lemos",
    subtitle: "Food tech e expansão global",
    body: "Fundador do Grupo Rão.",
  },
  {
    title: "Fernando Vieira",
    subtitle: "Varejo e curadoria de produto",
    body: "Sócio-administrador da Casarão Lustres.",
  },
  {
    title: "Herson Rosa",
    subtitle: "Linha pesada e logística",
    body: "Administrador da Império dos Freios.",
  },
];

describe("Brand data structures", () => {
  it("all brands have required fields", () => {
    brands.forEach((brand) => {
      expect(brand).toHaveProperty("overline");
      expect(brand).toHaveProperty("title");
      expect(brand).toHaveProperty("body");
      expect(brand.overline.length).toBeGreaterThan(0);
      expect(brand.title.length).toBeGreaterThan(0);
      expect(brand.body.length).toBeGreaterThan(0);
    });
  });

  it("has 8 brands in portfolio", () => {
    expect(brands).toHaveLength(8);
  });

  it("all brand titles are unique", () => {
    const titles = brands.map((b) => b.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe("Founders data structures", () => {
  it("all founders have required fields", () => {
    founders.forEach((founder) => {
      expect(founder).toHaveProperty("title");
      expect(founder).toHaveProperty("subtitle");
      expect(founder).toHaveProperty("body");
    });
  });

  it("has 3 founders", () => {
    expect(founders).toHaveLength(3);
  });

  it("each founder name has first and last name", () => {
    founders.forEach((founder) => {
      const parts = founder.title.split(" ");
      expect(parts.length).toBeGreaterThanOrEqual(2);
    });
  });
});
