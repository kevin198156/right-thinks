import { motion } from 'framer-motion';
import { HeartPulse, BrainCircuit, UserCheck, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const services = [
  { icon: HeartPulse, title: '企業 ESG 勞工健康管理' },
  { icon: BrainCircuit, title: '美國 NGH 催眠執行師課程 / 催眠治療' },
  { icon: UserCheck, title: '專屬健康管理師與陪診服務' },
  { icon: Users, title: '樂齡與社區健康課程' },
];

const Services = () => (
  <section id="services" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Our Services</p>
        <h2 className="heading-section">服務項目</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp} custom={i}
            className="group bg-muted border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
          >
            <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
