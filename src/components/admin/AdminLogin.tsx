import { useState } from 'react';
import { Lock, X, ArrowRight, AlertCircle, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AdminLogin({ isOpen, onClose, onSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin master password
    if (password === 'ana2026' || password === 'admin' || password === 'gestao') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm text-[#FBF8F3]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-sm rounded-2xl bg-[#2B1A14] border border-[#C7A06A]/40 p-7 sm:p-8 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7A6B61] hover:text-[#FBF8F3] p-1.5 rounded-lg"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#3A241C] border border-[#C7A06A]/30 flex items-center justify-center mb-4 mx-auto text-[#C7A06A]">
          <Lock className="w-5 h-5" />
        </div>

        <h3 className="font-editorial text-2xl text-center text-[#FBF8F3] mb-1">
          Acesso Administrativo
        </h3>
        <p className="text-xs text-center text-[#E8D8C4]/70 mb-6">
          Painel de gerenciamento de imagens e fotografias
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C7A06A] mb-1.5">
              Senha de Acesso
            </label>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Digite a senha..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#231510] border border-[#C7A06A]/20 focus:outline-none focus:border-[#C7A06A] text-sm text-[#FBF8F3] transition-colors placeholder:text-[#7A6B61]"
              />
              <KeyRound className="w-4 h-4 text-[#C7A06A]/60 absolute left-3.5 top-3" />
            </div>
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Senha incorreta. (Dica padrão: ana2026)</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] transition-colors active:scale-98 shadow-sm"
          >
            <span>Acessar Painel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="mt-5 text-center">
          <span className="text-[11px] text-[#7A6B61]">
            Senha padrão de desenvolvimento: <code className="text-[#C7A06A]">ana2026</code>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
