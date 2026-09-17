import { useState, useRef } from 'react';
import {
  Upload,
  RefreshCw,
  Eye,
  Check,
  X,
  Sliders,
  Image as ImageIcon,
  ChevronLeft,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { MediaItem, MediaKey } from '../../types';
import {
  getStoredMedia,
  saveStoredMedia,
  resetMediaToDefault,
} from '../../data/mediaConfig';

interface MediaManagerProps {
  onClose: () => void;
  onMediaChanged: () => void;
}

export function MediaManager({ onClose, onMediaChanged }: MediaManagerProps) {
  const [mediaItems, setMediaItems] = useState<Record<MediaKey, MediaItem>>(getStoredMedia());
  const [activeKey, setActiveKey] = useState<MediaKey>('hero.desktop');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [pendingUploadKey, setPendingUploadKey] = useState<MediaKey | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activeItem = mediaItems[activeKey];

  const handleSelectFile = (key: MediaKey) => {
    setPendingUploadKey(key);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !pendingUploadKey) return;

    // Validation
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecione um arquivo de imagem válido (PNG, JPG, WebP).');
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 12MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const updated = {
          ...mediaItems,
          [pendingUploadKey]: {
            ...mediaItems[pendingUploadKey],
            url: dataUrl,
          },
        };
        setMediaItems(updated);
        saveStoredMedia(updated);
        onMediaChanged();
        setFeedback(`Imagem "${mediaItems[pendingUploadKey].label}" atualizada com sucesso!`);
        setTimeout(() => setFeedback(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFieldChange = (key: MediaKey, field: keyof MediaItem, value: string) => {
    const updated = {
      ...mediaItems,
      [key]: {
        ...mediaItems[key],
        [field]: value,
      },
    };
    setMediaItems(updated);
    saveStoredMedia(updated);
    onMediaChanged();
  };

  const handleRestoreDefault = (key?: MediaKey) => {
    if (key) {
      const defaultData = resetMediaToDefault();
      const updated = {
        ...mediaItems,
        [key]: defaultData[key],
      };
      setMediaItems(updated);
      saveStoredMedia(updated);
      onMediaChanged();
      setFeedback(`Imagem "${mediaItems[key].label}" restaurada para o padrão oficial.`);
    } else {
      if (confirm('Deseja restaurar TODAS as fotografias para os padrões originais?')) {
        const defaults = resetMediaToDefault();
        setMediaItems(defaults);
        onMediaChanged();
        setFeedback('Todas as imagens foram restauradas com sucesso.');
      }
    }
    setTimeout(() => setFeedback(null), 3500);
  };

  const mediaList: MediaItem[] = Object.values(mediaItems);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E120D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 text-[#FBF8F3]">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
      />

      <div className="w-full max-w-5xl bg-[#2B1A14] border border-[#C7A06A]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#C7A06A]/20 flex items-center justify-between bg-[#231510]">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#3A241C] text-[#E8D8C4] hover:text-white transition-colors"
              title="Voltar ao site"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#C7A06A]" />
                <span className="text-[11px] uppercase tracking-widest text-[#C7A06A] font-semibold">
                  CMS de Mídia & Fotografias
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#FBF8F3]">
                Gerenciador de Imagens do Site
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleRestoreDefault()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-[#3A241C] text-[#E8D8C4] hover:text-white hover:bg-[#4A2E24] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restaurar Todos Padrões</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#7A6B61] hover:text-white rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div className="px-6 py-2.5 bg-[#C7A06A]/20 border-b border-[#C7A06A]/30 flex items-center justify-between text-xs text-[#E8D8C4]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#C7A06A]" />
              <span>{feedback}</span>
            </div>
          </div>
        )}

        {/* Body Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#C7A06A]/15">
          {/* Left Column: List of Media Slots */}
          <div className="md:col-span-5 p-4 sm:p-5 space-y-3 overflow-y-auto">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C7A06A]/75 block mb-2 px-1">
              Espaços de Imagem no Site ({mediaList.length})
            </span>

            {mediaList.map((item) => {
              const isSelected = item.key === activeKey;
              return (
                <div
                  key={item.key}
                  onClick={() => setActiveKey(item.key)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-[#3A241C] border-[#C7A06A] shadow-md'
                      : 'bg-[#231510]/60 border-[#C7A06A]/10 hover:border-[#C7A06A]/30 hover:bg-[#231510]'
                  }`}
                >
                  <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-black/40 border border-[#C7A06A]/20">
                    <img
                      src={item.url}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.objectPositionDesktop }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#FBF8F3] truncate block">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-[#C7A06A] uppercase px-1.5 py-0.5 rounded bg-[#C7A06A]/10">
                        {item.section}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#E8D8C4]/60 truncate mt-0.5">
                      {item.recommendedDimensions}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Media Editor */}
          {activeItem && (
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
              <div>
                {/* Active Info Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A06A]">
                      Seção: {activeItem.section}
                    </span>
                    <h3 className="font-editorial text-2xl text-[#FBF8F3]">
                      {activeItem.label}
                    </h3>
                    <p className="text-xs text-[#E8D8C4]/70 font-light mt-1">
                      {activeItem.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRestoreDefault(activeItem.key)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs bg-[#3A241C] text-[#E8D8C4] hover:text-white border border-[#C7A06A]/20 transition-colors flex items-center gap-1.5"
                    title="Restaurar esta imagem para o padrão original"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Padrão</span>
                  </button>
                </div>

                {/* Preview Image Box */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/60 border border-[#C7A06A]/30 mb-6 group">
                  <img
                    src={activeItem.url}
                    alt={activeItem.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: activeItem.objectPositionDesktop }}
                  />

                  {/* Overlay Upload Button */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => handleSelectFile(activeItem.key)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] flex items-center gap-2 shadow-lg transition-transform active:scale-95"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Substituir Fotografia</span>
                    </button>
                    <span className="text-[11px] text-[#E8D8C4]">
                      Formatos: PNG, JPG, WebP (até 12MB)
                    </span>
                  </div>
                </div>

                {/* Primary Upload Button (Visible always) */}
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => handleSelectFile(activeItem.key)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] flex items-center justify-center gap-2 transition-colors active:scale-98 shadow-sm"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Carregar Nova Fotografia</span>
                  </button>
                  <button
                    onClick={() => setPreviewUrl(activeItem.url)}
                    className="p-3 rounded-xl bg-[#3A241C] text-[#E8D8C4] hover:text-white border border-[#C7A06A]/20 transition-colors"
                    title="Ver em tamanho real"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Editable Metadata Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#C7A06A] mb-1.5">
                      Texto Alternativo (Acessibilidade & SEO)
                    </label>
                    <input
                      type="text"
                      value={activeItem.alt}
                      onChange={(e) => handleFieldChange(activeItem.key, 'alt', e.target.value)}
                      placeholder="Descrição da imagem para leitores de tela..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#231510] border border-[#C7A06A]/20 text-xs text-[#FBF8F3] focus:outline-none focus:border-[#C7A06A] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#C7A06A] mb-1.5 flex items-center gap-1.5">
                        <Sliders className="w-3 h-3" />
                        <span>Posicionamento Desktop</span>
                      </label>
                      <select
                        value={activeItem.objectPositionDesktop}
                        onChange={(e) =>
                          handleFieldChange(activeItem.key, 'objectPositionDesktop', e.target.value)
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-[#231510] border border-[#C7A06A]/20 text-xs text-[#FBF8F3] focus:outline-none focus:border-[#C7A06A] transition-colors cursor-pointer"
                      >
                        <option value="center center">Centro (center center)</option>
                        <option value="center top">Topo Centralizado (center top)</option>
                        <option value="center 30%">Foco no Rosto (center 30%)</option>
                        <option value="center 40%">Foco Superior (center 40%)</option>
                        <option value="left center">Alinhado à Esquerda (left center)</option>
                        <option value="right center">Alinhado à Direita (right center)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#C7A06A] mb-1.5 flex items-center gap-1.5">
                        <Sliders className="w-3 h-3" />
                        <span>Posicionamento Mobile</span>
                      </label>
                      <select
                        value={activeItem.objectPositionMobile}
                        onChange={(e) =>
                          handleFieldChange(activeItem.key, 'objectPositionMobile', e.target.value)
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-[#231510] border border-[#C7A06A]/20 text-xs text-[#FBF8F3] focus:outline-none focus:border-[#C7A06A] transition-colors cursor-pointer"
                      >
                        <option value="center center">Centro (center center)</option>
                        <option value="center 30%">Foco no Rosto (center 30%)</option>
                        <option value="center 40%">Foco Superior (center 40%)</option>
                        <option value="center bottom">Foco Inferior (center bottom)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-[#C7A06A]/15 flex items-center justify-between text-xs text-[#E8D8C4]/60">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C7A06A]" />
                  <span>As alterações salvam automaticamente e atualizam o site instantaneamente.</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-[#3A241C] hover:bg-[#4A2E24] text-xs font-medium text-white transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full Size Preview Modal */}
      {previewUrl && (
        <div
          onClick={() => setPreviewUrl(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={previewUrl}
              alt="Prévia em tamanho real"
              className="w-auto h-auto max-h-[85vh] rounded-lg shadow-2xl border border-[#C7A06A]/30 object-contain"
            />
            <span className="block text-center text-xs text-[#E8D8C4]/70 mt-3">
              Clique em qualquer lugar para fechar a prévia
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
