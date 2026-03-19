import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import lineQr from '@/assets/line-qr.png';

const ease = [0.2, 0.8, 0.2, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const Hero = () => (
  <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-muted to-card">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight mb-6 tracking-tight">
          想要健康嗎？想要快樂嗎？
          <br />
          <span className="text-primary">從心開始的全面健康管理</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          提供企業 ESG 勞工健康體系、個人催眠療癒與整合式健康服務。
        </p>

        <a
          href="https://line.me/R/ti/p/@762rygyi?oat_content=url"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-6 bg-card p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border hover:shadow-primary/10 transition-shadow max-w-md"
        >
          <img src={lineQr} alt="LINE QR Code" className="w-24 h-24 rounded-lg shrink-0" />
          <div>
            <p className="text-foreground font-bold mb-1">免費健康諮詢預約</p>
            <p className="text-sm text-muted-foreground mb-2">填完資料若需要免費健康諮詢預約，請洽LINE</p>
            <span className="inline-flex items-center gap-1 text-accent font-bold text-sm">
              立即前往 LINE 洽詢 <ArrowRight size={16} />
            </span>
          </div>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
          alt="健康療癒"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
