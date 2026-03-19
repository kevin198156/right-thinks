import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ease = [0.2, 0.8, 0.2, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease },
  }),
};

const FB_URL = 'https://www.facebook.com/rightthinks1122/';

const cards = [
  {
    title: '2026 美國 NGH 催眠執行師國際證照班熱烈招生中。',
    btn: '了解最新課程詳情',
  },
  {
    title: '探索更多睿思最新動態與健康衛教資訊',
    btn: '追蹤官方粉絲專頁',
  },
];

const News = () => (
  <section className="section-padding bg-muted">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Latest News</p>
        <h2 className="heading-section">最新消息</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cards.map((c, i) => (
          <motion.a
            key={i}
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={i}
            className="group bg-card border border-border rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-primary/5 transition-shadow min-h-[220px]"
          >
            <h3 className="font-bold text-foreground text-lg mb-6 leading-relaxed">{c.title}</h3>
            <span className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all">
              {c.btn} <ArrowRight size={16} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default News;
