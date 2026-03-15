import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ContactBlock from "@/react-app/components/blocks/ContactBlock";

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("ContactBlock", () => {
  const props = {
    heading: "Projetos e oportunidades",
    body: "Buscamos parceiros para marcas.",
    listItems: ["Novas marcas", "Operações físicas", "Tecnologias"],
    primaryButtonLabel: "Propor projeto",
    primaryButtonHref: "/contato",
    secondaryButtonLabel: "Receber PDF",
    secondaryButtonHref: "#",
  };

  it("renders the heading", () => {
    renderWithRouter(<ContactBlock {...props} />);
    expect(screen.getByText("Projetos e oportunidades")).toBeInTheDocument();
  });

  it("renders all list items", () => {
    renderWithRouter(<ContactBlock {...props} />);
    expect(screen.getByText("Novas marcas")).toBeInTheDocument();
    expect(screen.getByText("Operações físicas")).toBeInTheDocument();
    expect(screen.getByText("Tecnologias")).toBeInTheDocument();
  });

  it("renders primary and secondary buttons as links", () => {
    renderWithRouter(<ContactBlock {...props} />);
    const links = screen.getAllByRole("link");
    const primaryLink = links.find((l) => l.textContent === "Propor projeto");
    const secondaryLink = links.find((l) => l.textContent === "Receber PDF");
    expect(primaryLink).toHaveAttribute("href", "/contato");
    expect(secondaryLink).toHaveAttribute("href", "#");
  });
});
