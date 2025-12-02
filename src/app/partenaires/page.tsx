import Link from "next/link";
import PartnerForm from "@/components/PartnerForm";
import Image from "next/image";

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Navigation Simplifiée */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur z-50">
        <Link href="/" className="font-serif font-bold text-xl tracking-tight">L&A Group</Link>
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black transition">
          &larr; Retour à l'accueil
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6 text-gray-300">
            Programme Experts
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Valorisez votre expertise. <br/>Partagez le succès.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Rejoignez <span className="text-white font-semibold">Partenaires à la Performance</span>. 
            Le collectif d'élite (Tech, Growth, Sales) qui intervient sur nos participations en échange d'une rémunération attractive.
          </p>
        </div>
      </section>

      {/* Contenu + Formulaire */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Colonne Gauche : Arguments */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 text-black">Pourquoi nous rejoindre ?</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xl shadow-sm">💰</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Rémunération au succès</h3>
                  <p className="text-gray-600 text-sm">Ne vendez plus votre temps. Soyez intéressé aux résultats que vous générez (Sales commission, Equity, Bonus).</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xl shadow-sm">🚀</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Accès à un Deal Flow qualifié</h3>
                  <p className="text-gray-600 text-sm">Intervenez sur des sociétés déjà auditées et financées par L&A Group. Cadre de mission clair et sécurisé.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xl shadow-sm">🤝</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Réseau d'excellence</h3>
                  <p className="text-gray-600 text-sm">Échangez avec les autres experts du collectif. Opportunités de synergies et de co-working.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                ℹ️ <strong>Note :</strong> Nous limitons l'accès au collectif pour garantir un volume de missions suffisant à chaque membre.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div>
            <PartnerForm />
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-400 bg-white border-t border-gray-200">
        © {new Date().getFullYear()} L&A Group — Programme Partenaires.
      </footer>
    </main>
  );
}
