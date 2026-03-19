import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users } from 'lucide-react';

const ease = [0.2, 0.8, 0.2, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease },
  }),
};

const principles = [
  {
    icon: Heart,
    title: '以人為本',
    desc: '注重客戶需求，關心客戶健康，為客戶提供個性化的健康管理解決方案。',
  },
  {
    icon: TrendingUp,
    title: '持續改進',
    desc: '不斷檢討、優化業務流程，提高服務質量，提升客戶健康滿意度。',
  },
  {
    icon: Users,
    title: '社會責任',
    desc: '積極參與公益活動，宣傳健康知識，關注弱勢群體健康，履行社會責任。',
  },
];

const About = () => (
  <section id="about" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
          About Us
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="heading-section mb-6">
          關於睿思
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-body">
          睿思健康服務中心是一家專業的健康管理顧問公司，致力於為企業、政府機構和個人提供全面的健康管理解決方案。
          我們的團隊由經驗豐富的醫療專業人士、營養師、催眠講師、健康教練和行業專家組成，共同努力實現客戶的健康目標。
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="bg-muted rounded-2xl p-8 md:p-12 mb-16"
      >
        <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-bold text-secondary mb-4">公司目標</motion.h3>
        <motion.ul variants={fadeUp} custom={1} className="text-body space-y-3">
          <li>成為客戶心中最值得信賴的健康管理顧問公司，引領健康管理行業的發展。</li>
          <li>幫助客戶改善並維持健康狀況，實現持續的健康增長，提升生活品質。</li>
        </motion.ul>
      </motion.div>

      <motion.h3
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-2xl font-bold text-secondary text-center mb-12"
      >
        公司經營理念
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp} custom={i}
            className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
              <p.icon className="text-primary" size={28} />
            </div>
            <h4 className="font-bold text-foreground text-lg mb-3">{p.title}</h4>
            <p className="text-body text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="max-w-3xl mx-auto bg-muted rounded-2xl p-8 md:p-12"
      >
        <h3 className="text-xl font-bold text-secondary mb-4">總結</h3>
        <p className="text-body text-sm leading-relaxed">
          睿思健康管理顧問公司的願景在專業、誠信、以人為本的服務精神，成為客戶心中值得信賴的健康管理顧問公司，引領行業發展，為社會創造更多的價值。在未來的發展過程中，我們將堅持以客戶需求為導向，持續提升服務質量，擁抱創新，積極拓展業務範疇，與合作夥伴共享資源，實現互利共贏。
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
