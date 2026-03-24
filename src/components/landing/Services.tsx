import { useState } from 'react';
import { motion } from 'framer-motion';
import { Watch, HeartHandshake, GraduationCap, Users, MonitorPlay, Stethoscope, ExternalLink, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ease = [0.2, 0.8, 0.2, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

const services = [
  {
    icon: Watch,
    title: '健康監測智能手環',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80',
    content: '配置可家族分享的健康監測智慧手錶。具備 1.91 吋高清大屏與 IP68 防水等級。內建超低功耗晶片與雙 PD 動態心率感測，提供全方位的健康追蹤，包含：ECG 心電圖、血氧監測、睡眠分析、體溫監測與多種運動模式。並支援遠端親友關愛功能，讓家人的健康狀況隨時掌握。',
  },
  {
    icon: HeartHandshake,
    title: '陪診師陪同就醫',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    content: '「陪診師」是您的醫病橋樑，提供悠心陪伴與專業照護。我們的陪診師經過專業培訓，具備豐富醫療知識，能在就醫過程中全程陪同，確保您的需求得到滿足。同時提供最新的健康資訊，並給予情緒上的心理支持，減輕就醫壓力。每年提供兩次免費陪診服務，可供您或家人使用。',
  },
  {
    icon: GraduationCap,
    title: '專屬健康管理師課程',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    content: '為您量身打造專屬健康管理師課程。透過專業的評估與一對一指導，協助您建立正確的健康觀念與生活習慣。無論是飲食規劃、壓力管理或日常保健，我們的健康管理師將成為您最堅強的後盾。',
  },
  {
    icon: Users,
    title: '樂齡、社區健康課程',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    content: '專為 55 歲以上長者打造的綜合性活動計畫。課程涵蓋：針對長者設計的『體適能訓練』（如輕柔瑜伽、活力有氧）、促進手部靈活的『手作工藝』，以及由專業醫護講解的『健康知識分享』。我們鼓勵社區互動，由專業教練指導，讓長者在安全友善的環境中享受健康樂活的每一天。',
  },
  {
    icon: MonitorPlay,
    title: '線上線下健康課程',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80',
    content: '提供多元化的學習管道，學員可免費參加我們舉辦的各類線上與線下健康課程及講座。打破時間與空間的限制，讓您隨時隨地吸收最新的健康新知，持續精進自我照護的能力。',
  },
  {
    icon: Stethoscope,
    title: '專屬健康檢查',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    content: '提供年度免費一次標準健康檢查（高達 100 項檢測指標）。檢查範圍涵蓋：十大癌症篩檢（肺癌、大腸癌、肝癌等）、心胰胃功能、血液與尿液常規、甲狀腺與肝膽腎功能、血糖與血脂肪指數，以及自體免疫與超音波骨密度檢測等。透過全方位的精密檢查，為您的健康嚴格把關。',
  },
];

const FB_URL = 'https://www.facebook.com/rightthinks1122/';
const LINE_URL = 'https://line.me/R/ti/p/@762rygyi?oat_content=url';

const Services = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? services[selected] : null;

  return (
    <section id="services" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold text-base tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="heading-section">服務項目</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp} custom={i}
              onClick={() => setSelected(i)}
              className="group text-left bg-muted border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-foreground text-xl leading-snug">{s.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto z-[60]">
          {active && (
            <>
              <div className="rounded-xl overflow-hidden -mx-2 -mt-2 mb-4">
                <img src={active.image} alt={active.title} className="w-full aspect-[16/9] object-cover" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">{active.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-lg leading-relaxed text-muted-foreground">
                {active.content}
              </DialogDescription>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="flex-1 text-base">
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    了解更多 (Facebook)
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 text-base border-primary text-primary hover:bg-primary/10">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    專人諮詢 (LINE)
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
