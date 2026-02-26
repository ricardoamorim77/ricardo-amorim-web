import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '5562994613564';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre os serviços de sites e automação com IA.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-bounce" />
      <span className="absolute bottom-full right-0 mb-2 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale conosco!
      </span>
    </a>
  );
}
