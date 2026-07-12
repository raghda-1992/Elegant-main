let currentLang = 'en';

const content = {
    en: {
        brand1: "Elegant",
        brand2: "Home",
        finishing: "FINISHING",
        supplies: "SUPPLIES & TRADING ▾",
        lighting: "LIGHTING ▾",
        components: "COMPONENTS ▾",
        welcome: "✦ WELCOME TO ELEGANT HOME ✦",
        title: "Commercial Services <i>& Contracting</i>",
        desc: "Our mission is to make the customer confident in our service and reassured in every step.",
        san: "Sanshe Sharm", osa: "Osa", sha: "Sharm Electrical", ven: "Venus",
        led: "LED Lighting", outdoor: "Outdoor Lighting", indoor: "Indoor Lighting",
        elec: "Electrical", fans: "Exhaust Fans", chan: "Chandeliers",

        // New About & Footer English translations
        aboutTitle: "ABOUT US",
        aboutText: "A limited liability company offering long-standing expertise in general contracting and public supplies, commercial trading & central air conditioning contracting, electrical and mechanical works, finishing materials, and interior decoration.",
        footerTag: "Excellence in every detail.",
        footerContact: "Contact Us",
        footerLoc: "Our Location",
        footerAddr: "Office 10, Second Floor, Grand Mall, Behind Total Energies Gas Station, Third District East.",
        Commercial:"Commercial Register No: 105089(Limited Liability)",
        National: "National Entity ID: 542717433"
    },
    ar: {
        brand1: "الجينت",
        brand2: "هوم",
        finishing: "تشطيبات",
        supplies: "توريدات وتجارة ▾",
        lighting: "الإضاءة ▾",
        components: "مشتملات ▾",
        welcome: "✦ أهلاً بكم في الجينت هوم ✦",
        title: "للخدمات التجارية و <i>المقاولات</i>",
        desc: "مهمتنا هي جعل العميل واثقاً في خدمتنا ومطمئناً في كل خطوة .",
        san: "سانشي", osa: "أوسا", sha: "شرم", ven: "فينوس",
        led: "إضاءة LED", outdoor: "إضاءة خارجية", indoor: "إضاءة داخلية",
        elec: "كهربائيات", fans: "مراوح شفط", chan: "نجف",

        // New About & Footer Arabic translations
        aboutTitle: "من نحن",
        aboutText: "شركة ذات مسؤولية محدودة تقدم لكم خبراتها الطويلة في المجالات التالية: المقاولات العامة والتوريدات العمومية، تجارة ومقاولات أعمال التكيف المركزي، والأعمال الكهربائية والمكانيكية، ومواد التشطيبات، وأعمال الديكور الداخلية.",
        footerTag: "التميز في كل تفصيل.",
        footerContact: "اتصل بنا",
        footerLoc: "موقعنا",
        footerAddr: "العنوان: مكتب ١٠ الدور الثاني، جراند مول خلف بنزينه توتال الحي الثالث شرق.",
        Commercial: "مستخرج سجل تجاري رقم : ١٠٥٠٨٩ (ذات مسئولية محدودة)",
        National: "الرقم القومي للمنشآة:  ٥٤٢٧١٧٤٣٣" 
    }
};

document.getElementById('langBtn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
 
    // Set the page direction and class for styling
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = currentLang === 'ar' ? 'lang-ar' : 'lang-en';

    // 1. Update the brand name
    document.getElementById('brand-name').innerText = content[currentLang].brand1;
    document.getElementById('brand-sub').innerText = content[currentLang].brand2;

    // 2. Update Navbar Links
    document.getElementById('nav-finishing').innerText = content[currentLang].finishing;
    document.getElementById('nav-supplies').innerText = content[currentLang].supplies;
    document.getElementById('nav-lighting').innerText = content[currentLang].lighting;
    document.getElementById('nav-components').innerText = content[currentLang].components;

    // 3. Update Hero Text
    document.getElementById('welcome-text').innerText = content[currentLang].welcome;
    document.getElementById('main-title').innerHTML = content[currentLang].title;
    document.getElementById('description').innerText = content[currentLang].desc;

    // 4. Update Dropdown Items
    document.getElementById('sub-san').innerText = content[currentLang].san;
    document.getElementById('sub-osa').innerText = content[currentLang].osa;
    document.getElementById('sub-sha').innerText = content[currentLang].sha;
    document.getElementById('sub-ven').innerText = content[currentLang].ven;
    document.getElementById('sub-led').innerText = content[currentLang].led;
    document.getElementById('sub-outdor').innerText = content[currentLang].outdoor;
    document.getElementById('sub-indor').innerText = content[currentLang].indoor;
    document.getElementById('sub-elec').innerText = content[currentLang].elec;
    document.getElementById('sub-fans').innerText = content[currentLang].fans;

    // 5. Update New About & Footer Elements
    document.getElementById('about-title').innerText = content[currentLang].aboutTitle;
    document.getElementById('about-text').innerText = content[currentLang].aboutText;
    document.getElementById('footer-tagline').innerText = content[currentLang].footerTag;
    document.getElementById('footer-contact-title').innerText = content[currentLang].footerContact;
    document.getElementById('footer-location-title').innerText = content[currentLang].footerLoc;
    document.getElementById('footer-address').innerText = content[currentLang].footerAddr;
    document.getElementById('footer-commercial-reg').innerText = content[currentLang].Commercial;
    document.getElementById('footer-national-id').innerText = content[currentLang].National;

    
}); 