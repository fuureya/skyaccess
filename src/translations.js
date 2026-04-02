import { reactive, computed } from 'vue';

const state = reactive({
  locale: localStorage.getItem('locale') || 'id'
});

const translations = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      gallery: 'Galeri',
      contact: 'Kontak',
      lang: 'ID'
    },
    hero: {
      headline: 'Internet Satelit <span class="accent">VSAT Tercepat</span> untuk Indonesia',
      subheadline: 'SkyAccess merupakan perusahaan ISP yang berfokus pada layanan VSAT, menghadirkan konektivitas internet yang stabil dan menjangkau wilayah terpencil.',
      cta1: 'Mulai Sekarang',
      cta2: 'Lihat Paket',
      stats: {
        speed: 'Kecepatan Tinggi',
        uptime: 'Waktu Aktif',
        support: 'Dukungan'
      },
      cardTag: 'Koneksi Ultra Cepat'
    },
    info: {
      badge: 'Keunggulan VSAT',
      title: 'Mengapa Memilih Layanan VSAT SkyAccess?',
      desc: 'Kami menghadirkan solusi internet satelit terbaik untuk menjangkau setiap jengkal wilayah Indonesia, tanpa batas geografis.',
      benefits: [
        {
          title: 'Jangkauan Seluruh Indonesia',
          desc: 'Terhubung di mana saja, mulai dari pegunungan hingga pesisir pantai terpencil.'
        },
        {
          title: 'Koneksi Stabil & Mandiri',
          desc: 'Tidak bergantung pada infrastruktur kabel darat yang rentan gangguan.'
        },
        {
          title: 'Instalasi Cepat',
          desc: 'Siap digunakan dalam waktu singkat tanpa perlu menunggu penarikan kabel.'
        },
        {
          title: 'Dukungan 24/7',
          desc: 'Tim teknis kami siap membantu Anda kapan saja untuk memastikan koneksi lancar.'
        }
      ],
      cta: 'Siap Menghubungkan Bisnis Anda di Mana Saja?',
      ctaBtn: 'Konsultasi Gratis'
    },
    packages: {
      badge: 'Paket Layanan',
      title: 'Pilih Paket yang Sesuai dengan Kebutuhan Anda',
      subtitle: 'Solusi internet satelit fleksibel untuk berbagai sektor dan skala bisnis.',
      cta: 'Pesan Sekarang',
      list: [
        {
          name: 'Paket Bronze',
          speed: '5 Mbps',
          price: 'Mulai dari Rp. X.XXX.XXX',
          features: ['Unlimited Quota', 'Basic Support', 'Free Installation*', 'Home & Personal'],
          isPopular: false
        },
        {
          name: 'Paket Silver',
          speed: '10 Mbps',
          price: 'Mulai dari Rp. X.XXX.XXX',
          features: ['Unlimited Quota', 'Priority Support', 'Public IP (Static)', 'Small & Medium Business'],
          isPopular: true
        },
        {
          name: 'Paket Gold',
          speed: '20 Mbps',
          price: 'Mulai dari Rp. X.XXX.XXX',
          features: ['Dedicated Link', '24/7 Premium Support', 'SLA 99.5%', 'Enterprise & Government'],
          isPopular: false
        }
      ]
    },
    footer: {
      tagline: 'TV di setiap layar Anda dengan internet tercepat',
      links: 'Tautan',
      meetUs: 'Temui Kami',
      contact: 'Kontak',
      copyright: 'Hak Cipta © {year}. SKYACCESS. Seluruh Hak Cipta Dilindungi.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      gallery: 'Gallery',
      contact: 'Contact',
      lang: 'EN'
    },
    hero: {
      headline: 'Fastest <span class="accent">VSAT Satellite</span> Internet for Indonesia',
      subheadline: 'SkyAccess is an ISP focusing on VSAT services, delivering stable internet connectivity that reaches remote areas across Indonesia.',
      cta1: 'Get Started',
      cta2: 'Our Packages',
      stats: {
        speed: 'High Speed',
        uptime: 'Uptime',
        support: 'Support'
      },
      cardTag: 'Ultrafast Connection'
    },
    info: {
      badge: 'VSAT Advantages',
      title: 'Why Choose SkyAccess VSAT Services?',
      desc: 'We provide the best satellite internet solutions to reach every inch of Indonesia, without geographic limits.',
      benefits: [
        {
          title: 'Nationwide Coverage',
          desc: 'Connect anywhere, from high mountains to remote coastal areas.'
        },
        {
          title: 'Stable & Independent',
          desc: 'No dependence on vulnerable land cable infrastructure.'
        },
        {
          title: 'Fast Deployment',
          desc: 'Ready for use quickly without waiting for cable installation.'
        },
        {
          title: '24/7 Support',
          desc: 'Our technical team is ready to assist you anytime to ensure smooth connectivity.'
        }
      ],
      cta: 'Ready to Connect Your Business Anywhere?',
      ctaBtn: 'Free Consultation'
    },
    packages: {
      badge: 'Service Packages',
      title: 'Choose the Plan that Fits Your Needs',
      subtitle: 'Flexible satellite internet solutions for various sectors and business scales.',
      cta: 'Order Now',
      list: [
        {
          name: 'Bronze Plan',
          speed: '5 Mbps',
          price: 'Starting from Rp. X.XXX.XXX',
          features: ['Unlimited Quota', 'Basic Support', 'Free Installation*', 'Home & Personal'],
          isPopular: false
        },
        {
          name: 'Silver Plan',
          speed: '10 Mbps',
          price: 'Starting from Rp. X.XXX.XXX',
          features: ['Unlimited Quota', 'Priority Support', 'Public IP (Static)', 'Small & Medium Business'],
          isPopular: true
        },
        {
          name: 'Gold Plan',
          speed: '20 Mbps',
          price: 'Starting from Rp. X.XXX.XXX',
          features: ['Dedicated Link', '24/7 Premium Support', 'SLA 99.5%', 'Enterprise & Government'],
          isPopular: false
        }
      ]
    },
    footer: {
      tagline: 'TV on your every screen with the fastest internet',
      links: 'Links',
      meetUs: 'Meet Us',
      contact: 'Contact',
      copyright: 'Copyright © {year}. SKYACCESS. All Rights Reserved.'
    }
  }
};

export function useI18n() {
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[state.locale];
    for (const key of keys) {
      if (current[key]) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  const toggleLocale = () => {
    state.locale = state.locale === 'id' ? 'en' : 'id';
    localStorage.setItem('locale', state.locale);
  };

  const currentLocale = computed(() => state.locale);

  return { t, toggleLocale, currentLocale };
}
