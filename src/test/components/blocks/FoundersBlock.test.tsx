import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FoundersBlock from "@/react-app/components/blocks/FoundersBlock";

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
];

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("FoundersBlock", () => {
  it("renders the heading", () => {
    renderWithRouter(
      <FoundersBlock heading="Sócios com histórico" founders={founders} />,
    );
    expect(screen.getByText("Sócios com histórico")).toBeInTheDocument();
  });

  it("renders all founder names", () => {
    renderWithRouter(
      <FoundersBlock heading="Sócios" founders={founders} />,
    );
    expect(screen.getByText("Henrique Lemos")).toBeInTheDocument();
    expect(screen.getByText("Fernando Vieira")).toBeInTheDocument();
  });

  it("renders founder initials as avatar", () => {
    renderWithRouter(
      <FoundersBlock heading="Sócios" founders={founders} />,
    );
    expect(screen.getByText("H")).toBeInTheDocument();
    expect(screen.getByText("F")).toBeInTheDocument();
  });

  it("renders founder subtitles", () => {
    renderWithRouter(
      <FoundersBlock heading="Sócios" founders={founders} />,
    );
    expect(
      screen.getByText("Food tech e expansão global"),
    ).toBeInTheDocument();
  });
});
