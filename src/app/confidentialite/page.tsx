import Link from "next/link";

export default function Confidentialite() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-gray-800">
      <Link href="/" className="text-sm text-gray-500 hover:text-black mb-8 block">&larr; Retour à l'accueil</Link>
      <h1 className="font-serif text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="space-y-6">
        <p><strong>L&A Group</strong> accorde une grande importance à la protection de vos données personnelles.</p>
        
        <section>
          <h2 className="font-serif text-xl font-bold mb-2">Données collectées</h2>
          <p>Les informations collectées via nos formulaires (nom, prénom, e-mail, téléphone, société) sont utilisées exclusivement pour répondre à vos demandes de candidature ou de partenariat.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold mb-2">Durée de conservation</h2>
          <p>Vos données sont conservées pendant une durée maximale de 24 mois à compter du dernier contact.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold mb-2">Vos droits (RGPD)</h2>
          <p>Vous disposez d’un droit d’accès, de rectification et de suppression de vos données sur simple demande à : <a href="mailto:contact.l.et.associes.group@gmail.com" className="underline">contact.l.et.associes.group@gmail.com</a>.</p>
        </section>
      </div>
    </main>
  );
}