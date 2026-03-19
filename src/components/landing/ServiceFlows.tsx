import { motion } from 'framer-motion';

const ease = [0.2, 0.8, 0.2, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease },
  }),
};

const personalSteps = [
  '評估身心現況',
  '個性化健康方案選擇',
  '體檢前健康企劃',
  '合併健康監測設備日常自我追蹤',
  '安排體檢',
  '體檢後客製化健康企劃',
  '客製化安排一對一運動or調理課程',
];

const corporateSteps = [
  '身心評估',
  '健康檢查',
  '個人化健康衛教',
  '整合與持續健康關懷照護',
  '個性化健康課程或諮詢安排',
  '整合檢查數據管理、評估及追蹤',
  '協助企業落實人才永續',
];

const Timeline = ({
  steps,
  dotColor,
  label,
}: {
  steps: string[];
  dotColor: string;
  label: string;
}) => (
  <div>
    <h3 className="font-bold text-2xl mb-8 flex items-center gap-3">
      <span className={`w-8 h-1 rounded-full ${dotColor}`} />
      {label}
    </h3>
    <div className="space-y-0">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          custom={i}
          className="flex items-start gap-4"
        >
          <span className="text-muted-foreground/40 font-mono text-sm pt-1 w-6 shrink-0">
            0{i + 1}
          </span>
          <div className="pb-6 border-l border-muted-foreground/20 pl-6 relative">
            <div className={`absolute w-2.5 h-2.5 rounded-full -left-[5.5px] top-2 ${dotColor}`} />
            <p className="text-lg text-primary-foreground/90">{step}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ServiceFlows = () => (
  <section id="service-flows" className="section-padding bg-secondary text-primary-foreground overflow-hidden">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Service Flows</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">專業服務流程</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <Timeline steps={personalSteps} dotColor="bg-primary" label="個人服務流程" />
        <Timeline steps={corporateSteps} dotColor="bg-accent" label="企業服務流程" />
      </div>
    </div>
  </section>
);

export default ServiceFlows;
