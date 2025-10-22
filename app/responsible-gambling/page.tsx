import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection } from "@/components/policy-content"

export default function ResponsibleGamblingPage() {
  return (
    <PolicyPageLayout
      title="Jogo Responsável"
      heroImage="/responsible-gambling-bg.png"
      heroAlt="Conceito de jogo responsável"
    >
      <div className="mb-8">{/* Existing code here */}</div>

      <PolicySection title="Sinais de Jogo Problemático">{/* Existing code here */}</PolicySection>

      <PolicySection title="Dicas para Apostas Responsáveis" delay={100}>
        {/* Existing code here */}
      </PolicySection>

      <PolicySection title="Opções de Auto-Exclusão" delay={200}>
        {/* Existing code here */}
      </PolicySection>

      <PolicySection title="Recursos de Apoio em Portugal" delay={300}>
        {/* Existing code here */}
      </PolicySection>

      <PolicySection title="Ferramentas de Controlo" delay={400}>
        {/* Existing code here */}
      </PolicySection>

      <PolicySection title="Para Familiares e Amigos" delay={500}>
        {/* Existing code here */}
      </PolicySection>
    </PolicyPageLayout>
  )
}
