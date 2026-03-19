import { motion } from 'framer-motion';
import partnerGinkgo from '@/assets/partner-ginkgo.png';
import partnerTsehui from '@/assets/partner-tsehui.png';
import partnerReset from '@/assets/partner-reset.png';

const partners = [
  { src: partnerGinkgo, alt: '健佑藥局', href: 'https://ginkgopharmacy.com/' },
  { src: partnerTsehui, alt: '慈惠醫事檢驗所', href: 'https://www.bodycheck.com.tw/index.html' },
  { src: partnerReset, alt: '睿思催眠療癒學院', href: 'https://www.facebook.com/ResetAndExecuteBrain' },
];

const Partners = () => (
  <section id="partners" className="py-20 bg-card border-y border-border">
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Partners</p>
        <h2 className="heading-section mb-12">合作機構</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
      >
        {partners.map((p) => (
          <a
            key={p.alt}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img src={p.src} alt={p.alt} className="h-12 md:h-16 object-contain max-w-[200px]" />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Partners;
