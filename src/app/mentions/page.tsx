import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-gray-800">
      <Link href="/" className="text-sm text-gray-500 hover:text-black mb-8 block">&larr; Retour à l'accueil</Link>
      <h1 className="font-serif text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="font-serif text-xl font-bold mb-2">1. Éditeur du site</h2>
          <p><strong>L&A Group</strong> — Groupe d’investissement et holding.</p>
          <p>Adresse : Strasbourg, France</p>
          <p>Directeur de la publication : Luan ROKA</p>
          <p>Email : <a href="mailto:contact.l.et.associes.group@gmail.com" className="underline">contact.l.et.associes.group@gmail.com</a></p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold mb-2">2. Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc.<br/>440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold mb-2">3. Propriété intellectuelle</h2>
          <p>L’ensemble du contenu présent sur le site (textes, images, graphismes, logos, vidéos, codes, etc.) est la propriété exclusive de L&A Group, sauf mention contraire.</p>
        </section>
      </div>
    </main>
  );
}