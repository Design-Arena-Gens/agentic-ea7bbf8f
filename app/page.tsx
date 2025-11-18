import Image from "next/image";
import Link from "next/link";

const passiveIncomeIdeas = [
  {
    title: "ETF et fonds indiciels",
    description:
      "Investissez régulièrement dans des ETF diversifiés pour profiter de la croissance mondiale sans gestion active.",
    action: "Programmez un virement automatique mensuel vers un PEA ou un compte-titres." 
  },
  {
    title: "Immobilier fractionné",
    description:
      "Utilisez des plateformes d'investissement fractionné pour générer des loyers sans gérer un bien physique.",
    action: "Comparez les rendements nets des plateformes REIT/SCPI et diversifiez sur plusieurs actifs." 
  },
  {
    title: "Produits numériques",
    description:
      "Créez une ressource numérique (template, formation, guide) monétisée automatiquement via un site ou marketplace.",
    action: "Automatisez l'email marketing et utilisez un funnel evergreen pour nourrir les ventes." 
  }
];

const automationTools = [
  {
    label: "Piste",
    value: "Virement programmé pour ETF"
  },
  {
    label: "Montant",
    value: "200 € / mois"
  },
  {
    label: "Outil",
    value: "Banque en ligne avec PEA"
  },
  {
    label: "Suivi",
    value: "Tableur automatisé (Notion, Tiller)"
  }
];

const timeline = [
  {
    title: "Cartographier vos ressources",
    detail:
      "Listez temps disponible, compétences, capital et tolérance au risque pour choisir les bons leviers de revenus passifs."
  },
  {
    title: "Créer un socle automatique",
    detail:
      "Automatisez l'épargne et la répartition d'investissement (DCA) pour construire un patrimoine sans effort quotidien." 
  },
  {
    title: "Lancer un actif numérique",
    detail:
      "Capitalisez sur une expertise ou passion pour créer un produit evergreen qui se vend en continu." 
  },
  {
    title: "Industrialiser et déléguer",
    detail:
      "Externalisez la production de contenu, mettez en place des scénarios marketing et optimisez grâce aux analytics." 
  }
];

const riskMitigation = [
  {
    risk: "Manque de liquidité",
    defense: "Gardez 3 à 6 mois de dépenses en cash avant d'investir." 
  },
  {
    risk: "Revenus instables",
    defense:
      "Multiplicité des sources : visez 3 flux minimum pour lisser les résultats." 
  },
  {
    risk: "Plateformes peu fiables",
    defense: "Vérifiez la régulation AMF, l'antériorité et fractionnez vos engagements." 
  },
  {
    risk: "Charge fiscale",
    defense: "Anticipez impôts et prélèvements en provisionnant 30% des revenus." 
  }
];

export default function Page() {
  return (
    <>
      <main>
        <header className="hero">
          <div>
            <span className="badge">Mindset revenu passif durable</span>
            <h1>Gagner de l&apos;argent sans rien faire ? Construisez un système autonome.</h1>
            <p className="lead">
              Le "sans rien faire" repose sur une préparation intelligente : automatisez l&apos;investissement,
              créez des actifs qui se vendent seuls et protégez-vous des risques. Voici un plan actionnable.
            </p>
            <div className="highlight-card">
              <strong>Principes clés</strong>
              <ul>
                <li>Automatiser l&apos;apport de valeur (capital, contenu, système)</li>
                <li>Éliminer l&apos;effort manuel grâce aux outils et délégations</li>
                <li>Réinvestir les flux pour accélérer l&apos;effet boule de neige</li>
              </ul>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/wealth.svg"
              width={320}
              height={320}
              alt="Illustration d&apos;un portefeuille autonome"
              priority
            />
          </div>
        </header>

        <section>
          <h2>3 leviers passifs à combiner</h2>
          <p>
            La solidité vient de la diversification. Combinez patrimoine financier, actifs digitaux et effet de levier des plateformes
            pour construire un système qui tourne même lorsque vous décrochez.
          </p>
          <div className="card-list">
            {passiveIncomeIdeas.map((idea) => (
              <article key={idea.title} className="highlight-card">
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
                <div className="callout">
                  <strong>Action express</strong>
                  <p>{idea.action}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Automatiser votre machine à cashflow</h2>
          <p>
            Une fois vos flux identifiés, mettez-les sur pilote automatique. Voici un exemple de scénario concret.
          </p>
          <div className="grid grid-2">
            <div className="highlight-card">
              <strong>Workflow type</strong>
              <ol>
                <li>Virement automatique vers une plateforme d&apos;investissement</li>
                <li>Allocation sur ETF monde + obligations via robo-advisor</li>
                <li>Rebalancing trimestriel automatisé</li>
                <li>Réinvestissement des dividendes (DRIP)</li>
              </ol>
            </div>
            <div className="highlight-card">
              <strong>Tableau de suivi</strong>
              <table className="table">
                <thead>
                  <tr>
                    <th>Élément</th>
                    <th>Paramètre</th>
                  </tr>
                </thead>
                <tbody>
                  {automationTools.map((item) => (
                    <tr key={item.label}>
                      <td>{item.label}</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2>Roadmap en 4 étapes</h2>
          <p>
            Même si l&apos;objectif est de ne presque rien faire au quotidien, la mise en place initiale est stratégique. Cette roadmap vous aide à garder le cap.
          </p>
          <div className="timeline">
            {timeline.map((step) => (
              <div key={step.title} className="timeline-step">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Gérer le risque et rester conforme</h2>
          <p>
            Un revenu passif responsable doit respecter la loi, les obligations fiscales et votre profil de risque. Anticipez avant de déployer du capital.
          </p>
          <div className="grid grid-2">
            <div className="highlight-card">
              <strong>Check-list de conformité</strong>
              <ul>
                <li>Déclarer tous les revenus (micro-BIC, BNC, revenus fonciers ou dividendes)</li>
                <li>Analyser l&apos;impact fiscal avant d&apos;opter pour micro-régime ou réel</li>
                <li>Conserver les justificatifs de plateformes et courtiers (IFU)</li>
              </ul>
            </div>
            <div className="highlight-card">
              <strong>Plan de défense</strong>
              <ul>
                {riskMitigation.map((item) => (
                  <li key={item.risk}>
                    <strong>{item.risk} :</strong> {item.defense}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Aller plus loin sans effort quotidien</h2>
          <p>
            Pour amplifier vos résultats, transformez votre expertise en un actif evergreen et laissez la technologie travailler pour vous.
          </p>
          <div className="grid grid-2">
            <div className="highlight-card">
              <strong>Optimisations rapides</strong>
              <ul>
                <li>Automatiser la collecte d&apos;emails via une landing + lead magnet</li>
                <li>Configurer des campagnes drip sur 90 jours (ConvertKit, Brevo)</li>
                <li>Utiliser l&apos;IA pour générer scripts vidéo, newsletters et posts</li>
              </ul>
            </div>
            <div className="highlight-card">
              <strong>Outils recommandés</strong>
              <ul>
                <li>Notion + Make pour orchestrer vos processus</li>
                <li>Ledger ou Finary pour monitoring patrimonial</li>
                <li>Stripe + Gumroad pour ventes automatiques</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>FAQ éclair : réalités du revenu passif</h2>
          <div className="grid">
            <article className="highlight-card">
              <h3>Faut-il un gros capital de départ ?</h3>
              <p>
                Non. Un DCA de 150 € par mois sur un ETF Monde capitalisant peut générer un capital à six chiffres sur 20 ans.
                L&apos;essentiel est la régularité et la patience.
              </p>
            </article>
            <article className="highlight-card">
              <h3>Combien de temps consacrer au suivi ?</h3>
              <p>
                Après mise en place, un audit mensuel de 30 minutes suffit : vérifiez les performances, ajustez vos automatisations,
                mettez à jour votre suivi fiscal.
              </p>
            </article>
            <article className="highlight-card">
              <h3>Comment éviter les arnaques ?</h3>
              <p>
                Préférez les institutions régulées, vérifiez l&apos;existence d&apos;un agrément AMF ou ACPR, évitez les promesses de rendement garanti.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Construit avec Next.js et hébergeable sur Vercel. Les informations fournies ne constituent pas un conseil financier personnalisé.
        </p>
        <p>
          Ressources :&nbsp;
          <Link href="https://www.amf-france.org/fr" target="_blank" rel="noopener noreferrer">
            Autorité des marchés financiers
          </Link>
          ,&nbsp;
          <Link href="https://www.imnd.fr/guides" target="_blank" rel="noopener noreferrer">
            Guides investissement
          </Link>
          ,&nbsp;
          <Link href="https://www.service-public.fr/particuliers/vosdroits/N19775" target="_blank" rel="noopener noreferrer">
            Obligations fiscales françaises
          </Link>
        </p>
      </footer>
    </>
  );
}
