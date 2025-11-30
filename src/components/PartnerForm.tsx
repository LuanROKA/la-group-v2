"use client";
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function PartnerForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_itd5qa8";
    // Utilisation de l'ID spécifique trouvé dans votre code original
    const templateId = "template_part_perf"; 
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

  if (status === 'success') return (
    <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center">
      <div className="text-4xl mb-4">🤝</div>
      <h3 className="text-xl font-bold text-green-800 mb-2">Candidature reçue !</h3>
      <p className="text-green-700">Bienvenue dans le pipeline Partenaires à la Performance.</p>
    </div>
  );

  return (
    <form onSubmit={sendEmail} className="space-y-5 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
      <div>
        <label className="block text-sm font-bold text-black mb-2">Votre Expertise</label>
        <select name="expertise" className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-black outline-none">
          <option>Growth Marketer</option>
          <option>Closer / Sales</option>
          <option>Expert Technique / Dev</option>
          <option>Conseil Stratégique</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom Nom <span className="text-red-500">*</span></label>
          <input name="nom" required className="w-full p-3 border border-gray-300 rounded-lg focus:border-black outline-none" placeholder="Jean Dupont" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input name="email" type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:border-black outline-none" placeholder="jean@expert.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Lien LinkedIn ou Portfolio</label>
        <input name="portfolio" className="w-full p-3 border border-gray-300 rounded-lg focus:border-black outline-none" placeholder="https://linkedin.com/in/..." />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Vos références / Motivations</label>
        <textarea name="message" rows={3} required className="w-full p-3 border border-gray-300 rounded-lg focus:border-black outline-none" placeholder="Décrivez brièvement vos succès passés..."></textarea>
      </div>

      <button type="submit" disabled={loading} className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-1">
        {loading ? 'Envoi en cours...' : 'Rejoindre le collectif'}
      </button>
      
      <p className="text-xs text-center text-gray-400 mt-4">
        En postulant, vous acceptez d'être contacté pour des missions freelance ou success fee.
      </p>
    </form>
  );
}