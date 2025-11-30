"use client";
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function AssociateForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_itd5qa8";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ASSOCIE || "template_vecqcl5"; 
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
    <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800">✅ Demande transmise.</div>
  );

  return (
    <form onSubmit={sendEmail} className="mt-6 grid gap-4 max-w-xl">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
           <label className="block text-sm font-medium mb-1">Nom complet <span className="text-red-600">*</span></label>
           <input name="nom" required className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Votre nom" />
        </div>
        <div>
           <label className="block text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
           <input name="email" type="email" required className="w-full p-3 border border-gray-300 rounded-lg" placeholder="email@..." />
        </div>
      </div>

      {/* AJOUT ICI : Champ Téléphone Visible */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
           <label className="block text-sm font-medium mb-1">Téléphone <span className="text-red-600">*</span></label>
           <input name="telephone" type="tel" required className="w-full p-3 border border-gray-300 rounded-lg" placeholder="+33 6..." />
        </div>
        <div>
           <label className="block text-sm font-medium mb-1">Ticket envisagé</label>
           <select name="ticket" className="w-full p-3 border border-gray-300 rounded-lg bg-white">
              <option value="10-25k">10 – 25 k€</option>
              <option value="25-50k">25 – 50 k€</option>
              <option value="50-100k">50 – 100 k€</option>
              <option value=">100k">&gt; 100 k€</option>
           </select>
        </div>
      </div>

      <div>
         <label className="block text-sm font-medium mb-1">Thèse & Préférences</label>
         <textarea name="these" rows={2} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Secteurs, géo, horizon..."></textarea>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 bg-white border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition">
        {loading ? '...' : 'Envoyer ma demande'}
      </button>
    </form>
  );
}