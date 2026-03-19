import { ExternalLink } from 'lucide-react';
import logoMain from '@/assets/logo-main.png';
import lineQr from '@/assets/line-qr.png';

const Footer = () => (
  <footer id="contact" className="bg-muted pt-20 pb-10 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
      <div>
        <img src={logoMain} alt="睿思健康服務中心" className="h-10 mb-6" />
        <p className="text-muted-foreground leading-relaxed text-base">
          睿思健康服務中心致力於為企業、政府機構和個人提供全面的健康管理解決方案。
        </p>
      </div>

      <div className="space-y-3 text-muted-foreground text-base">
        <h4 className="font-bold text-foreground text-xl">聯絡資訊</h4>
        <p>地址：高雄市左營區文天路128號3F</p>
        <p>電話：07-3980308</p>
        <p>信箱：rightthinks1122@gmail.com</p>
      </div>

      <div className="flex flex-col items-start md:items-end gap-4">
        <a
          href="https://line.me/R/ti/p/@762rygyi?oat_content=url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lineQr} alt="LINE QR Code" className="w-32 h-32 border border-border p-2 bg-card rounded-xl" />
        </a>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/rightthinks1122/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-card rounded-full shadow-sm border border-border hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href="https://line.me/R/ti/p/@762rygyi?oat_content=url"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-card rounded-full shadow-sm border border-border hover:text-primary transition-colors"
            aria-label="LINE"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-8 border-t border-border text-center text-muted-foreground text-base">
      © {new Date().getFullYear()} 睿思健康服務中心 Right-Thinks. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
