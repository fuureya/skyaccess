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
      badge: 'Solusi Bisnis',
      title: 'Komunikasikan kebutuhan bisnis mu',
      desc: 'Tim ahli kami siap memberikan solusi VSAT kustom yang paling efisien untuk mendukung operasional bisnis Anda di mana saja.',
      cta: 'Hubungi Ahli Kami (WhatsApp)'
    },
    footer: {
      tagline: 'TV di setiap layar Anda dengan internet tercepat',
      links: 'Tautan',
      meetUs: 'Temui Kami',
      contact: 'Kontak',
      copyright: 'Hak Cipta © {year}. SKYACCESS. Seluruh Hak Cipta Dilindungi.'
    },
    testimonials: {
      title: "Kepercayaan Pelanggan",
      subtitle: "Telah dipercaya oleh berbagai instansi pemerintah dan bisnis terkemuka di tanah Papua.",
      list: [
        { name: "Dinas Kominfo Papua Barat", role: "Instansi Pemerintah", text: "Layanan SkyAccess luar biasa stabil, sangat membantu koordinasi digital kami di wilayah Papua Barat." },
        { name: "Dinas Kominfo Papua Barat Daya", role: "Instansi Pemerintah", text: "Solusi VSAT yang sangat handal untuk mendukung infrastruktur komunikasi di provinsi baru kami." },
        { name: "Hotel Swiss-Belinn Papua", role: "Sektor Perhotelan", text: "Terimakasih SkyAccess, tamu kami sangat puas dengan koneksi internet yang stabil dan cepat." },
        { name: "Hotel Aston Papua", role: "Sektor Perhotelan", text: "Pelayanan teknis yang responsif dan kualitas koneksi yang konsisten di seluruh area hotel." },
        { name: "Dinas Kejati Papua Barat", role: "Lembaga Hukum", text: "Sangat membantu dalam operasional digital kami yang memerlukan keamanan dan stabilitas tinggi." },
        { name: "Diskominfo Raja Ampat", role: "Pemerintah Daerah", text: "Konektivitas di wilayah kepulauan bukan lagi hambatan berkat solusi satelit dari SkyAccess." },
        { name: "Diskominfo Timika", role: "Pemerintah Daerah", text: "Kualitas sinyal yang sangat baik bahkan di cuaca ekstrem sekalipun. Sangat direkomendasikan." }
      ]
    },
    about: {
      title: 'Solusi Konektivitas Bisnis',
      subtitle: 'Menghubungkan operasional bisnis Anda di mana pun, kapan pun tanpa batas infrastruktur.',
      focusTitle: 'Solusi Strategis untuk Area Terpencil',
      focusText: 'SkyAccess bukan sekadar penyedia internet. Kami adalah mitra strategis bagi bisnis yang beroperasi di wilayah dengan tantangan infrastruktur tinggi. Dengan teknologi VSAT, kami menjamin kelancaran operasional mulai dari sektor pertambangan, perhotelan, hingga instansi pemerintahan di seluruh pelosok nusantara.',
      factors: [
        { 
          title: 'Reliabilitas Tinggi (High Uptime)', 
          desc: 'Kami menjamin operasional bisnis Anda tetap berjalan tanpa hambatan dengan ketersediaan sinyal hingga 99.9%. Dengan dukungan teknis yang proaktif, setiap potensi gangguan diminimalisir sebelum berdampak pada produktivitas Anda.',
          img: 'uptime.png'
        },
        { 
          title: 'Implementasi Cepat & Mandiri', 
          desc: 'Waktu adalah uang dalam bisnis. Layanan VSAT SkyAccess memungkinkan instalasi perangkat lintas pulau hanya dalam hitungan hari. Tanpa perlu menunggu penarikan kabel fisik yang memakan waktu berbulan-bulan.',
          img: 'deployment.png'
        },
        { 
          title: 'Keamanan & Privasi Data', 
          desc: 'Seluruh transmisi data melalui satelit kami dilindungi dengan enkripsi tingkat tinggi. Kami memberikan ketenangan pikiran bagi sektor perbankan dan pemerintahan yang memerlukan standar privasi data internasional.',
          img: 'security.png'
        },
        { 
          title: 'Dukungan Teknis Prioritas', 
          desc: 'Anda tidak sendirian. Network Operations Center (NOC) kami beroperasi penuh 24/7 dengan tenaga ahli yang memiliki sertifikasi internasional, siap memberikan solusi instan untuk menjaga kelancaran koneksi Anda.',
          img: 'support.png'
        }
      ],
      ctaTitle: 'Konsultasikan Kebutuhan Infrastruktur Digital Anda',
      ctaBtn: 'Hubungi Specialist Kami (WhatsApp)'
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
      badge: 'Business Solution',
      title: 'Communicate your business needs',
      desc: 'Our team of experts is ready to provide the most efficient custom VSAT solutions to support your business operations anywhere.',
      cta: 'Contact Our Expert (WhatsApp)'
    },
    footer: {
      tagline: 'TV on your every screen with the fastest internet',
      links: 'Links',
      meetUs: 'Meet Us',
      contact: 'Contact',
      copyright: 'Copyright © {year}. SKYACCESS. All Rights Reserved.'
    },
    testimonials: {
      title: "Client Trust",
      subtitle: "Trusted by government agencies and leading businesses across Papua.",
      list: [
        { name: "Dinas Kominfo Papua Barat", role: "Government Agency", text: "SkyAccess service is incredibly stable, greatly assisting our digital coordination in West Papua." },
        { name: "Dinas Kominfo Papua Barat Daya", role: "Government Agency", text: "Highly reliable VSAT solution to support communication infrastructure in our new province." },
        { name: "Hotel Swiss-Belinn Papua", role: "Hospitality Sector", text: "Thank you SkyAccess, our guests are very satisfied with the stable and fast internet connection." },
        { name: "Hotel Aston Papua", role: "Hospitality Sector", text: "Responsive technical service and consistent connection quality throughout the hotel area." },
        { name: "Dinas Kejati Papua Barat", role: "Legal Institution", text: "Greatly helpful for our digital operations that require high security and stability." },
        { name: "Diskominfo Raja Ampat", role: "Local Government", text: "Connectivity in island regions is no longer a barrier thanks to SkyAccess satellite solutions." },
        { name: "Diskominfo Timika", role: "Local Government", text: "Excellent signal quality even in extreme weather conditions. Highly recommended." }
      ]
    },
    about: {
      title: 'Business Connectivity Solutions',
      subtitle: 'Connecting your business operations anywhere, anytime without infrastructure limits.',
      focusTitle: 'Strategic Solutions for Remote Areas',
      focusText: 'SkyAccess is more than just an internet provider. We are a strategic partner for businesses operating in areas with high infrastructure challenges. With VSAT technology, we ensure smooth operations ranging from mining and hospitality to government agencies throughout the archipelago.',
      factors: [
        { 
          title: 'High Reliability (Uptime)', 
          desc: 'We guarantee your business operations keep running smoothly with signal availability up to 99.9%. With proactive technical support, any potential disruption is minimized before it impacts your productivity.',
          img: 'uptime.png'
        },
        { 
          title: 'Fast & Independent Deployment', 
          desc: 'Time is money in business. SkyAccess VSAT services allow for device installations across islands in just a matter of days. No need to wait months for physical cable pulling.',
          img: 'deployment.png'
        },
        { 
          title: 'Data Security & Privacy', 
          desc: 'All data transmissions through our satellites are protected with high-level encryption. We provide peace of mind for banking and government sectors that require international data privacy standards.',
          img: 'security.png'
        },
        { 
          title: 'Priority Technical Support', 
          desc: 'You are not alone. Our Network Operations Center (NOC) operates 24/7 with international-certified experts, ready to provide instant solutions to ensure your connection remains smooth.',
          img: 'support.png'
        }
      ],
      ctaTitle: 'Consult Your Digital Infrastructure Needs',
      ctaBtn: 'Contact Our Specialist (WhatsApp)'
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
