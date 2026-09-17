import { useState } from 'react';
import { X, Send, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profile';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Gestão de Pessoas');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Ana! Meu nome é ${name || 'um visitante'}.%0AAssunto: ${subject}%0A${phone ? `Telefone: ${phone}%0A` : ''}${email ? `E-mail: ${email}%0A` : ''}${message ? `Mensagem: ${message}` : 'Gostaria de agendar uma conversa sobre consultoria e gestão.'}`;
    window.open(`https://wa.me/${PROFILE_DATA.whatsappRaw}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-lg rounded-2xl bg-[#FBF8F3] border border-[#C7A06A]/40 p-6 sm:p-9 shadow-2xl relative text-[#2B1A14]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#7A6B61] hover:text-[#2B1A14] p-1.5 rounded-lg transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle2 className="w-14 h-14 text-[#C7A06A] mb-4" />
            <h3 className="font-editorial text-3xl text-[#2B1A14] mb-2">
              Mensagem Direcionada!
            </h3>
            <p className="text-sm text-[#5A382A] max-w-sm">
              Sua solicitação foi enviada para o canal profissional de Ana Bernardi. Entraremos em contato em breve.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5F43]">
                Fale Diretamente
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#2B1A14]">
                Vamos iniciar essa conversa?
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6B61] font-light mt-1">
                Preencha os campos abaixo para nos conectarmos via WhatsApp ou e-mail.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3A241C] uppercase tracking-wider mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] focus:outline-none focus:border-[#C7A06A] text-sm text-[#2B1A14] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#3A241C] uppercase tracking-wider mb-1.5">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(19) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] focus:outline-none focus:border-[#C7A06A] text-sm text-[#2B1A14] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3A241C] uppercase tracking-wider mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] focus:outline-none focus:border-[#C7A06A] text-sm text-[#2B1A14] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A241C] uppercase tracking-wider mb-1.5">
                  Interesse Principal
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] focus:outline-none focus:border-[#C7A06A] text-sm text-[#2B1A14] transition-colors cursor-pointer"
                >
                  <option value="Gestão de Pessoas">Gestão de Pessoas & Cultura</option>
                  <option value="Consultoria Estratégica">Consultoria Estratégica de Gestão</option>
                  <option value="Liderança Humanizada">Desenvolvimento de Liderança</option>
                  <option value="Clínica Nosso Lar">Clínica Nosso Lar (Mogi Guaçu)</option>
                  <option value="Parcerias e Outros">Parcerias e Conexões Profissionais</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A241C] uppercase tracking-wider mb-1.5">
                  Mensagem (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte brevemente sobre o seu momento ou objetivo..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] focus:outline-none focus:border-[#C7A06A] text-sm text-[#2B1A14] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-[#2B1A14] bg-gradient-to-r from-[#D9B77A] to-[#C7A06A] hover:from-[#E8D8C4] hover:to-[#D9B77A] shadow-md transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar e Iniciar Conversa</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs text-[#7A6B61]">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C7A06A]" />
                  <span>{PROFILE_DATA.whatsappFormatted}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C7A06A]" />
                  <span>{PROFILE_DATA.email}</span>
                </div>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
