"use client";
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function SocietyForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_itd5qa8";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_SOCIETE || "template_3wbxufj";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "BlCMU7LtnkErAifEt";

    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(() => {
        setLoading(false);
        setStatus('success');
      }, (error) => {
        console.error(error);
        setLoading(false);
        setStatus('error');
      });
  };

  if (status === 'success') {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
        <p className="font-bold text-lg">✅ Candidature envoyée !</p>
        <p>Merci. Nous étudierons votre dossier et reviendrons vers vous.</p>
      </div>
    );
  }

  return (
    <form onSubmit={sendEmail} className="mt-8 max-w-2xl">
      <div className="mb-6 text-sm text-gray-500 uppercase tracking-wider font-bold">
        Étape <span className="text-black">{step}</span>/2
      </div>

      {/* --- ÉTAPE 1 (Identité) --- */}
      <div className={step === 1 ? 'block' : 'hidden'}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Nom de la société <span className="text-red-600">*</span></label>
            <input name="nom_societe" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="Ex : L&A Tech" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Secteur <span className="text-red-600">*</span></label>
            <input name="secteur" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="Ex : Logiciel B2B" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Contact principal <span className="text-red-600">*</span></label>
            <input name="contact_nom" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Email pro <span className="text-red-600">*</span></label>
            <input name="email" type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="contact@..." />
          </div>
        </div>
        <div className="text-right">
          <button type="button" onClick={() => setStep(2)} className="px-6 py-3 bg-black text-white rounded-full font-medium hover:opacity-80 transition">
            Suivant &rarr;
          </button>
        </div>
      </div>

      {/* --- ÉTAPE 2 (Détails & Téléphone) --- */}
      <div className={step === 2 ? 'block' : 'hidden'}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-black">SIREN / Registre</label>
            <input name="siren" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Stade actuel</label>
            <select name="stade" className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-black focus:outline-none">
              <option>Pré-lancement</option>
              <option>Initial (0-500k€ CA)</option>
              <option>Croissance (500k-5M€ CA)</option>
              <option>Scale-up (&gt;5M€ CA)</option>
            </select>
          </div>
        </div>

        {/* AJOUT ICI : Le champ Téléphone est maintenant visible */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Téléphone <span className="text-red-600">*</span></label>
            <input name="telephone" type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="+33 6..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Montant recherché</label>
            <input name="montant_recherche" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="Ex : 200k€" />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-black">Résumé du projet <span className="text-red-600">*</span></label>
          <textarea name="resume" required rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" placeholder="Problème, Solution, Traction..."></textarea>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <input type="checkbox" required id="s-consent" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black" />
          <label htmlFor="s-consent" className="text-sm text-gray-500">J'accepte d'être recontacté au sujet de ma candidature.</label>
        </div>

        {status === 'error' && <p className="text-red-600 mb-4">Une erreur est survenue. Veuillez réessayer.</p>}

        <div className="flex items-center justify-between">
          <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-black">
            &larr; Retour
          </button>
          <button type="submit" disabled={loading} className="px-8 py-3 bg-black text-white rounded-full font-bold hover:shadow-lg transition disabled:opacity-50">
            {loading ? 'Envoi...' : 'Envoyer la candidature'}
          </button>
        </div>
      </div>
    </form>
  );
}