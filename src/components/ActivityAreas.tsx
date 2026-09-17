import { useState } from 'react';
import { Users, TrendingUp, Lightbulb, Heart, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ACTIVITY_AREAS } from '../data/activityAreas';
import { PROFILE_DATA } from '../data/profile';
import { ActivityItem } from '../types';

interface ActivityAreasProps {
  onOpenContact: () => void;
}

export function ActivityAreas({ onOpenContact }: ActivityAreasProps) {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const getIcon = (name: ActivityItem['iconName']) => {
    const props = { className: 'w-6 h-6 text-[#C7A06A]' };
    switch (name) {
      case 'Users':
        return <Users {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Heart':
        return <Heart {...props} />;
    }
  };

  return (
    <section id="atuacao" aria-label="Minha Atuação" className="py-20 sm:py-28 lg:py-36 bg-[#F6EFE6] border-y border-[#E8D8C4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8A5F43]">
              {PROFILE_DATA.activityLabel}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] text-[#2B1A14]"
          >
            {PROFILE_DATA.activityHeadline}
          </motion.h2>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ACTIVITY_AREAS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedActivity(item)}
              className="group cursor-pointer rounded-2xl p-7 bg-[#FBF8F3] border border-[#E8D8C4] hover:border-[#C7A06A]/60 shadow-[0_4px_20px_rgba(43,26,20,0.04)] hover:shadow-[0_12px_30px_rgba(43,26,20,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4]/80 flex items-center justify-center mb-6 group-hover:bg-[#E8D8C4] transition-colors duration-300">
                  {getIcon(item.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-editorial text-2xl font-normal text-[#2B1A14] mb-3 leading-snug group-hover:text-[#8A5F43] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm leading-relaxed text-[#5A382A] font-light">
                  {item.description}
                </p>
              </div>

              {/* Action Link Indicator */}
              <div className="pt-6 mt-4 flex items-center justify-between border-t border-[#E8D8C4]/60 text-xs font-medium text-[#8A5F43] group-hover:text-[#2B1A14] transition-colors">
                <span>Saiba mais</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#C7A06A]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Details Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg rounded-2xl bg-[#FBF8F3] border border-[#C7A06A]/30 p-7 sm:p-9 shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#F6EFE6] flex items-center justify-center border border-[#E8D8C4]">
                  {getIcon(selectedActivity.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5F43]">
                    Frente de Atuação
                  </span>
                  <h4 className="font-editorial text-2xl text-[#2B1A14]">
                    {selectedActivity.title}
                  </h4>
                </div>
              </div>

              <p className="text-base text-[#5A382A] font-light leading-relaxed mb-6">
                {selectedActivity.description}
              </p>

              <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#3A241C]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C7A06A] mt-0.5 flex-shrink-0" />
                  <span>Alinhamento direto entre cultura organizacional e estratégia prática.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C7A06A] mt-0.5 flex-shrink-0" />
                  <span>Acompanhamento próximo em Mogi Guaçu e região, presencial ou online.</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8D8C4]">
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-[#7A6B61] hover:text-[#2B1A14] transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    onOpenContact();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] transition-transform active:scale-95 shadow-sm"
                >
                  Falar sobre este tema
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
