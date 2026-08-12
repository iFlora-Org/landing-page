
const IFLORA_LANG_STORAGE_KEY = 'iflora-language';
const IFLORA_SUPPORTED_LANGUAGES = ['el', 'en', 'bg', 'sq', 'tr', 'ro', 'nl', 'fr', 'es', 'it'];
const IFLORA_LANGUAGE_META = {
	el: { htmlLang: 'el', title: null, description: null },
	en: {
		htmlLang: 'en',
		title: 'iFlora | Smart Agriculture & Greenhouse IoT',
		description: 'Smart management for greenhouses and agricultural facilities with sensors, automation, AI insights and remote control.'
	},
	bg: {
		htmlLang: 'bg',
		title: 'iFlora | Интелигентно земеделие и IoT за оранжерии',
		description: 'Интелигентно управление на оранжерии и земеделски обекти със сензори, автоматизации, AI insights и дистанционен контрол.'
	},
	sq: {
		htmlLang: 'sq',
		title: 'iFlora | Bujqësi inteligjente dhe IoT për serra',
		description: 'Menaxhim inteligjent i serrave dhe instalimeve bujqësore me sensorë, automatizime, AI insights dhe kontroll në distancë.'
	},
	tr: {
		htmlLang: 'tr',
		title: 'iFlora | Akıllı Tarım ve Sera IoT',
		description: 'Sensörler, otomasyonlar, AI insights ve uzaktan kontrol ile seralar ve tarımsal tesisler için akıllı yönetim.'
	},
	ro: {
		htmlLang: 'ro',
		title: 'iFlora | Agricultură inteligentă și IoT pentru sere',
		description: 'Management inteligent pentru sere și ferme cu senzori, automatizări, AI insights și control de la distanță.'
	},
	nl: {
		htmlLang: 'nl',
		title: 'iFlora | Slimme landbouw en kas-IoT',
		description: 'Slim beheer voor kassen en agrarische installaties met sensoren, automatiseringen, AI insights en bediening op afstand.'
	},
	fr: {
		htmlLang: 'fr',
		title: 'iFlora | Agriculture intelligente et IoT pour serres',
		description: 'Gestion intelligente des serres et installations agricoles avec capteurs, automatisations, AI insights et contrôle à distance.'
	},
	es: {
		htmlLang: 'es',
		title: 'iFlora | Agricultura inteligente e IoT para invernaderos',
		description: 'Gestión inteligente de invernaderos e instalaciones agrícolas con sensores, automatizaciones, AI insights y control remoto.'
	},
	it: {
		htmlLang: 'it',
		title: 'iFlora | Agricoltura intelligente e IoT per serre',
		description: 'Gestione intelligente di serre e impianti agricoli con sensori, automazioni, AI insights e controllo da remoto.'
	}
};

const IFLORA_TRANSLATIONS = {
	en: {},
	bg: {
		'iFlora | Smart Agriculture & Greenhouse IoT': 'iFlora | Интелигентно земеделие и IoT за оранжерии',
		'Ευφυής διαχείριση θερμοκηπίων και αγροτικών εγκαταστάσεων με αισθητήρες, αυτοματισμούς, AI insights και απομακρυσμένο έλεγχο.': 'Интелигентно управление на оранжерии и земеделски обекти със сензори, автоматизации, AI insights и дистанционен контрол.',
		'Επικοινωνία | iFlora': 'Контакт | iFlora',
		'← Επιστροφή': '← Назад',
		'π.χ. giannis@example.com': 'напр. ivan@example.com',
		'Πολιτική επεξεργασίας προσωπικών δεδομένων για την ιστοσελίδα iFlora, σύμφωνα με τον ΓΚΠΔ και την ελληνική νομοθεσία.': 'Политика за обработване на лични данни за уебсайта iFlora, съгласно GDPR и гръцкото законодателство.',
		'Primary navigation': 'Основна навигация',
		'Language selector': 'Избор на език',
		'Language': 'Език',
		'Άνοιγμα μενού': 'Отваряне на менюто',
		'Κλείσιμο μενού': 'Затваряне на менюто',
		'iFlora home': 'Начална страница на iFlora',
		'Εφαρμογές': 'Приложения',
		'Τεχνολογία': 'Технология',
		'Αποτελέσματα': 'Резултати',
		'Πλάνα': 'Планове',
		'Σύνδεση': 'Вход',
		'Επικοινωνία': 'Контакт',
		'SMART FARMING & GREENHOUSE IOT': 'УМНО ЗЕМЕДЕЛИЕ И IOT ЗА ОРАНЖЕРИИ',
		'Συνδέστε κάθε αισθητήρα, συσκευή και απόφαση της καλλιέργειας σε ένα έξυπνο σύστημα.': 'Свържете всеки сензор, устройство и решение за културата в една интелигентна система.',
		'Το iFlora μετατρέπει': 'iFlora превръща',
		'δεδομένα πεδίου': 'данните от полето',
		', μικροκλίματος και εξοπλισμού σε': ', микроклимата и оборудването в',
		'άμεσες ενέργειες': 'незабавни действия',
		', ώστε να μειώνετε σπατάλες, να προλαβαίνετε απώλειες και να': ', за да намалявате разходите, да предотвратявате загуби и да',
		'ελέγχετε την παραγωγή από οπουδήποτε': 'контролирате производството отвсякъде',
		'Ζητήστε επίδειξη': 'Заявете демонстрация',
		'Δείτε τις εφαρμογές': 'Вижте приложенията',
		'Βασικά οφέλη': 'Основни ползи',
		'Αισθητήρες & αυτοματισμοί': 'Сензори и автоматизации',
		'AI insights σε πραγματικό χρόνο': 'AI insights в реално време',
		'Υποστήριξη υπάρχοντος hardware': 'Поддръжка на съществуващ хардуер',
		'ΑΠΟ ΤΗΝ ΠΑΡΑΚΟΛΟΥΘΗΣΗ ΣΤΗ ΔΡΑΣΗ': 'ОТ НАБЛЮДЕНИЕ КЪМ ДЕЙСТВИЕ',
		'Η γεωργία δεν χρειάζεται περισσότερα dashboards. Χρειάζεται καθαρό σήμα για το τι πρέπει να γίνει τώρα.': 'Земеделието не се нуждае от повече dashboards. Нуждае се от ясен сигнал какво трябва да се направи сега.',
		'Από το θερμοκήπιο μέχρι το χωράφι, το iFlora συγκεντρώνει δεδομένα, τα αναλύει και τα μετατρέπει σε': 'От оранжерията до полето iFlora събира данни, анализира ги и ги превръща в',
		'ειδοποιήσεις': 'известия',
		'αυτοματισμούς': 'автоматизации',
		'και αποφάσεις που': 'и решения, които',
		'προστατεύουν την παραγωγή': 'защитават производството',
		'IOT APPLICATIONS FOR AGRICULTURE': 'IOT ПРИЛОЖЕНИЯ ЗА ЗЕМЕДЕЛИЕ',
		'Εφαρμογές που καλύπτουν την πραγματική καθημερινότητα της παραγωγής': 'Приложения, които покриват реалното ежедневие на производството',
		'Precision farming': 'Прецизно земеделие',
		'Συνδυάστε μετρήσεις μικροκλίματος, εδάφους και παραγωγής για να ποτίζετε, αερίζετε και': 'Комбинирайте измервания на микроклимата, почвата и производството, за да напоявате, проветрявате и',
		'παρεμβαίνετε με ακρίβεια': 'се намесвате с точност',
		'Πώς λειτουργεί': 'Как работи',
		'Έξυπνο θερμοκήπιο': 'Интелигентна оранжерия',
		'Κρατήστε': 'Поддържайте',
		'σταθερές συνθήκες': 'стабилни условия',
		'με ειδοποιήσεις και αυτοματισμούς για θερμοκρασία, υγρασία, σκίαση, αερισμό και άρδευση.': 'с известия и автоматизации за температура, влажност, засенчване, вентилация и напояване.',
		'Δείτε λύσεις': 'Вижте решения',
		'Smart irrigation': 'Интелигентно напояване',
		'Μειώστε την άσκοπη κατανάλωση νερού': 'Намалете ненужната консумация на вода',
		'με παρακολούθηση υγρασίας, πρόβλεψη αναγκών και κανόνες άρδευσης ανά ζώνη.': 'с наблюдение на влажността, прогнозиране на нуждите и правила за напояване по зони.',
		'Συχνές ερωτήσεις': 'Често задавани въпроси',
		'Remote sensing': 'Дистанционно наблюдение',
		'Παρακολουθήστε απομακρυσμένα': 'Наблюдавайте дистанционно',
		'εγκαταστάσεις, συσκευές και κρίσιμες αλλαγές χωρίς να βρίσκεστε συνεχώς στο σημείο.': 'обекти, устройства и критични промени, без да сте постоянно на място.',
		'Μιλήστε μαζί μας': 'Свържете се с нас',
		'IOT ENABLEMENT': 'IOT ИНТЕГРАЦИЯ',
		'Η τεχνολογία πίσω από μια καλλιέργεια που αντιδρά πιο γρήγορα.': 'Технологията зад култура, която реагира по-бързо.',
		'Το iFlora λειτουργεί σαν': 'iFlora работи като',
		'επίπεδο ενοποίησης': 'интеграционен слой',
		': συνδέει αισθητήρες, υπάρχον εξοπλισμό, gateways, αυτοματισμούς και εφαρμογές σε': ': свързва сензори, съществуващо оборудване, gateways, автоматизации и приложения в',
		'ένα ενιαίο περιβάλλον': 'единна среда',
		'που οι παραγωγοί μπορούν να εμπιστευτούν.': 'на която производителите могат да се доверят.',
		'Αισθητήρες': 'Сензори',
		'Συλλογή δεδομένων': 'Събиране на данни',
		'για περιβάλλον, έδαφος, νερό και συνθήκες καλλιέργειας.': 'за околна среда, почва, вода и условия на културата.',
		'Gateways & συνδεσιμότητα': 'Gateways и свързаност',
		'Σταθερή ροή δεδομένων': 'Стабилен поток от данни',
		'από το πεδίο στο dashboard, ακόμη και σε απαιτητικά περιβάλλοντα.': 'от полето към dashboard-а, дори в трудни среди.',
		'AI και αυτοματισμοί': 'AI и автоматизации',
		'Ειδοποιήσεις, κανόνες και insights που': 'Известия, правила и insights, които',
		'μειώνουν τη χειροκίνητη παρακολούθηση': 'намаляват ръчното наблюдение',
		'WHY IT MATTERS': 'ЗАЩО Е ВАЖНО',
		'Από το πρώτο σήμα μέχρι την απόφαση, όλα γίνονται πιο καθαρά.': 'От първия сигнал до решението всичко става по-ясно.',
		'παρακολούθηση κρίσιμων συνθηκών': 'наблюдение на критични условия',
		'κέντρο ελέγχου για αισθητήρες και συσκευές': 'център за управление на сензори и устройства',
		'insights για πρόβλεψη τάσεων και άμεση αντίδραση': 'insights за прогнозиране на тенденции и бърза реакция',
		'CONNECTED OPERATIONS': 'СВЪРЗАНИ ОПЕРАЦИИ',
		'Φτιαγμένο για θερμοκήπια, χωράφια και εγκαταστάσεις που μεγαλώνουν.': 'Създадено за оранжерии, полета и инсталации, които растат.',
		'Εγκατάσταση αισθητήρων & IoT υποδομής': 'Инсталиране на сензори и IoT инфраструктура',
		'Απομακρυσμένος έλεγχος συσκευών': 'Дистанционно управление на устройства',
		'Προτεραιότητα τεχνικής υποστήριξης': 'Приоритетна техническа поддръжка',
		'ΠΛΑΝΑ': 'ПЛАНОВЕ',
		'Ξεκινήστε με το επίπεδο ελέγχου που χρειάζεται η παραγωγή σας.': 'Започнете с нивото на контрол, от което производството ви се нуждае.',
		'Ιδανικό για ξεκίνημα': 'Идеален за старт',
		'Ζητήστε προσφορά': 'Заявете оферта',
		'Δεδομένα σε πραγματικό χρόνο': 'Данни в реално време',
		'Αναλύσεις δεδομένων αισθητήρων': 'Анализи на данни от сензори',
		'Αναλύσεις περιβαλλοντικών δεδομένων': 'Анализи на екологични данни',
		'Αναλύσεις ενέργειας &amp; νερού': 'Анализи на енергия и вода',
		'Συμβουλές AI Agent (Insights)': 'Съвети от AI Agent (Insights)',
		'Αντίγραφα ασφαλείας': 'Резервни копия',
		'Συνομιλία στο B2B Marketplace': 'Чат в B2B Marketplace',
		'Συνομιλία με AI Agent': 'Чат с AI Agent',
		'Επικοινωνία με Γεωπόνο': 'Контакт с агроном',
		'Telegram &amp; Έξυπνες Ειδοποιήσεις': 'Telegram и интелигентни известия',
		'Εγκατάσταση Αισθητήρων': 'Инсталиране на сензори',
		'Μελλοντικές προβλέψεις': 'Бъдещи прогнози',
		'Έξυπνοι αυτοματισμοί &amp; Έλεγχος': 'Интелигентни автоматизации и контрол',
		'Η πιο ισορροπημένη επιλογή': 'Най-балансираният избор',
		'Ανάλυση περιβάλλοντος (Εξατομικευμένα)': 'Анализ на средата (персонализиран)',
		'Συνομιλία με AI Agent (50 μηνύματα)': 'Чат с AI Agent (50 съобщения)',
		'Επικοινωνία με Γεωπόνο (1 ώρα/μήνα)': 'Контакт с агроном (1 час/месец)',
		'Εγκατάσταση Αισθητήρων (Απλή)': 'Инсталиране на сензори (базово)',
		'Για απαιτητικές εγκαταστάσεις': 'За взискателни инсталации',
		'Ανάλυση περιβάλλοντος (Εξατομικευμένα και προβλέψεις)': 'Анализ на средата (персонализиран и прогнози)',
		'Συνομιλία με AI Agent (Απεριόριστα)': 'Чат с AI Agent (неограничено)',
		'Εγκατάσταση Αισθητήρων (Προτεραιότητα)': 'Инсталиране на сензори (приоритет)',
		'ΜΑΖΙ ΚΑΛΛΙΕΡΓΟΥΜΕ ΤΟ ΑΥΡΙΟ': 'ЗАЕДНО ОТГЛЕЖДАМЕ УТРЕШНИЯ ДЕН',
		'Χτίζουμε μαζί το μέλλον της γεωπονίας.': 'Заедно изграждаме бъдещето на агрономията.',
		'Οι νέες ιδέες χρειάζονται χώρο για να ριζώσουν. Γι’ αυτό στηρίζουμε τους φοιτητές και τη νέα γενιά παραγωγών με ουσιαστικές εκπτώσεις σε όλα τα πλάνα iFlora.': 'Новите идеи се нуждаят от пространство, за да пуснат корени. Затова подкрепяме студентите и новото поколение производители със значими отстъпки за всички планове iFlora.',
		'Η γνώση συναντά την τεχνολογία. Η δική σας αρχή γίνεται η κοινή μας εξέλιξη.': 'Знанието среща технологията. Вашето начало става наш общ напредък.',
		'Φοιτητική έκπτωση': 'Студентска отстъпка',
		'«Σπουδάζετε το αύριο. Εμείς σας βοηθάμε να το καλλιεργήσετε.»': '„Учите утрешния ден. Ние ви помагаме да го отгледате.“',
		'Ισχύει μέχρι την ολοκλήρωση των σπουδών.': 'Важи до завършване на обучението.',
		'Ποσοστά φοιτητικής έκπτωσης ανά πλάνο': 'Проценти студентска отстъпка по план',
		'Έκπτωση για νέους κάτω των 30': 'Отстъпка за млади хора под 30 години',
		'«Η επόμενη γενιά της γεωπονίας ξεκινά σήμερα — μαζί.»': '„Следващото поколение агрономия започва днес — заедно.“',
		'Για μη φοιτητές κάτω των 30 ετών, για 2 χρόνια.': 'За нестуденти под 30 години, за 2 години.',
		'Ποσοστά έκπτωσης iFlora NextGen ανά πλάνο': 'Проценти iFlora NextGen отстъпка по план',
		'Το πρώτο βήμα δεν χρειάζεται να το κάνετε μόνοι.': 'Не е нужно да правите първата стъпка сами.',
		'Ελάτε να σχεδιάσουμε μαζί μια πιο έξυπνη, βιώσιμη καλλιέργεια.': 'Нека заедно проектираме по-интелигентно и устойчиво отглеждане.',
		'Μεγαλώνουμε μαζί': 'Растем заедно',
		'Στις τιμές': 'В цените',
		'συμπεριλαμβάνεται το ΦΠΑ': 'е включен ДДС',
		'Υπάρχουν έξτρα χρεώσεις για την': 'Има допълнителни такси за',
		'αγορά του εξοπλισμού': 'закупуване на оборудване',
		'Επιπλέον χρεώσεις στη': 'Допълнителни такси за',
		'μεταφορά και εγκατάσταση': 'транспорт и монтаж',
		'του εξοπλισμού': 'на оборудването',
		'Οι τιμές των πλάνων αναφέρονται για': 'Цените на плановете се отнасят за',
		'μία εγκατάσταση': 'една инсталация',
		', κάθε έξτρα εγκατάσταση κοστολογείται ανάλογα με το πλάνο.': ', всяка допълнителна инсталация се оценява според плана.',
		'Οι τιμές των πλάνων': 'Цените на плановете',
		'υπόκεινται σε αλλαγές': 'подлежат на промяна',
		'με βάση τις τρέχουσες τιμές της αγοράς ή πιθανές αυξήσεις στο κόστος υπηρεσιών.': 'според текущите пазарни цени или възможни увеличения в разходите за услуги.',
		'MORE INFORMATION': 'ПОВЕЧЕ ИНФОРМАЦИЯ',
		'Οι ερωτήσεις που ακούγονται πριν ξεκινήσει ένα έργο smart farming.': 'Въпросите, които се задават преди началото на smart farming проект.',
		'Μπορώ να χρησιμοποιήσω υπάρχοντα αισθητήρια ή εξοπλισμό;': 'Мога ли да използвам съществуващи сензори или оборудване?',
		'Ναι. Το iFlora σχεδιάζεται ώστε να αξιοποιεί υπάρχον hardware όπου είναι εφικτό και να προσθέτει νέα σημεία μέτρησης μόνο εκεί που υπάρχει πραγματική ανάγκη.': 'Да. iFlora е проектирана да използва съществуващ хардуер, когато е възможно, и да добавя нови точки за измерване само там, където има реална нужда.',
		'Σε τι βοηθούν τα AI insights στην καθημερινή παραγωγή;': 'Как AI insights помагат в ежедневното производство?',
		'Βοηθούν να εντοπίζετε τάσεις και ασυνήθιστες μεταβολές νωρίτερα, ώστε να αντιδράτε πριν η κατάσταση επηρεάσει την απόδοση ή την ποιότητα.': 'Помагат да откривате тенденции и необичайни промени по-рано, за да реагирате преди ситуацията да повлияе на добива или качеството.',
		'Είναι κατάλληλο μόνο για θερμοκήπια;': 'Подходящо ли е само за оранжерии?',
		'Όχι. Η ίδια λογική εφαρμόζεται σε θερμοκήπια, χωράφια, ζώνες άρδευσης και απομακρυσμένες αγροτικές εγκαταστάσεις.': 'Не. Същата логика се прилага за оранжерии, полета, зони за напояване и отдалечени земеделски обекти.',
		'Υπάρχουν ειδικές εκπτώσεις για φοιτητές και νέους;': 'Има ли специални отстъпки за студенти и млади хора?',
		'Ναι. Οι φοιτητές λαμβάνουν έκπτωση 23% στο Beginner, 22% στο Standard και 15% στο Professional μέχρι να ολοκληρώσουν τις σπουδές τους. Το iFlora NextGen προσφέρει σε μη φοιτητές κάτω των 30 ετών έκπτωση 12%, 11% και 10% αντίστοιχα, για 2 χρόνια.': 'Да. Студентите получават 23% отстъпка за Beginner, 22% за Standard и 15% за Professional до завършване на обучението. iFlora NextGen предлага на нестуденти под 30 години съответно 12%, 11% и 10% отстъпка за 2 години.',
		'MAKE SMART FARMING ACTIONABLE': 'ПРЕВЪРНЕТЕ УМНОТО ЗЕМЕДЕЛИЕ В ДЕЙСТВИЕ',
		'Δείτε πώς θα μπορούσε να λειτουργήσει το iFlora στη δική σας εγκατάσταση.': 'Вижте как iFlora може да работи във вашата инсталация.',
		'Κλείστε σύντομη συζήτηση': 'Запазете кратък разговор',
		'Στοιχεία επικοινωνίας': 'Данни за контакт',
		'Πολιτική Δεδομένων': 'Политика за данните',
		'&larr; Επιστροφή': '&larr; Назад',
		'ΕΠΙΚΟΙΝΩΝΙΑ': 'КОНТАКТ',
		'Στείλτε μας το μήνυμά σας': 'Изпратете ни вашето съобщение',
		'Συμπληρώστε τη φόρμα παρακάτω και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.': 'Попълнете формата по-долу и ще се свържем с вас възможно най-скоро.',
		'Ονοματεπώνυμο': 'Име и фамилия',
		'Τηλέφωνο': 'Телефон',
		'Επιλογή Πλάνου': 'Избор на план',
		'Χωρίς επιλογή (Μόνο Ερώτηση)': 'Без избор (само въпрос)',
		'Κατηγορία Έκπτωσης': 'Категория отстъпка',
		'Χωρίς ειδική έκπτωση': 'Без специална отстъпка',
		'Student — φοιτητές': 'Student — студенти',
		'iFlora NextGen — μη φοιτητές κάτω των 30': 'iFlora NextGen — нестуденти под 30',
		'Μήνυμα': 'Съобщение',
		'Αποστολή Email': 'Изпрати email',
		'π.χ. Γιάννης Παπαδόπουλος': 'напр. Иван Петров',
		'π.χ. 6900000000': 'напр. 6900000000',
		'Το μήνυμά σας...': 'Вашето съобщение...',
		'Πολιτική Δεδομένων | iFlora': 'Политика за данните | iFlora',
		'ΠΟΛΙΤΙΚΗ ΔΕΔΟΜΕΝΩΝ': 'ПОЛИТИКА ЗА ДАННИТЕ',
		'Πώς διαχειριζόμαστε τα προσωπικά δεδομένα που μας εμπιστεύεστε.': 'Как управляваме личните данни, които ни доверявате.',
		'Η παρούσα πολιτική περιγράφει, σε απλή γλώσσα, πώς το iFlora συλλέγει και επεξεργάζεται προσωπικά δεδομένα μέσω της ιστοσελίδας και της επικοινωνίας μαζί μας, σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΕΕ) 2016/679 και τον Ν. 4624/2019.': 'Тази политика обяснява на ясен език как iFlora събира и обработва лични данни чрез уебсайта и комуникацията с нас, в съответствие с GDPR (ЕС) 2016/679 и гръцкия Закон 4624/2019.',
		'Τελευταία ενημέρωση: 5 Ιουλίου 2026': 'Последна актуализация: 5 юли 2026 г.',
		'1. Υπεύθυνος επεξεργασίας': '1. Администратор на данни',
		'Υπεύθυνος επεξεργασίας για τα δεδομένα που υποβάλλονται μέσω της ιστοσελίδας είναι το iFlora.': 'Администратор на данните, подадени чрез уебсайта, е iFlora.',
		'Email επικοινωνίας:': 'Email за контакт:',
		'Τηλέφωνο:': 'Телефон:',
		'Εφόσον η υπηρεσία παρέχεται από συγκεκριμένη εταιρική οντότητα, τα πλήρη εταιρικά στοιχεία, όπως επωνυμία, έδρα, ΑΦΜ και Γ.Ε.ΜΗ., πρέπει να προστεθούν πριν από τη δημοσίευση της τελικής πολιτικής.': 'Ако услугата се предоставя от конкретно юридическо лице, пълните фирмени данни, като наименование, седалище, данъчен номер и регистрационни данни, трябва да бъдат добавени преди публикуване на финалната политика.',
		'2. Ποια δεδομένα συλλέγουμε': '2. Какви данни събираме',
		'Συλλέγουμε μόνο τα δεδομένα που είναι απαραίτητα για να απαντήσουμε σε αιτήματα και να επικοινωνήσουμε μαζί σας.': 'Събираме само данните, необходими за отговор на запитвания и комуникация с вас.',
		'Στοιχεία που συμπληρώνετε στη φόρμα επικοινωνίας, όπως ονοματεπώνυμο, email, τηλέφωνο, επιλεγμένο πλάνο και μήνυμα.': 'Данни, които попълвате във формата за контакт, като име, email, телефон, избран план и съобщение.',
		'Στοιχεία που αποστέλλονται όταν επικοινωνείτε μαζί μας μέσω email ή τηλεφώνου.': 'Данни, изпратени когато се свързвате с нас по email или телефон.',
		'Βασικά τεχνικά δεδομένα που ενδέχεται να καταγράφονται από τον πάροχο φιλοξενίας, όπως διεύθυνση IP, χρόνος πρόσβασης, τύπος browser και αρχεία καταγραφής ασφαλείας.': 'Основни технически данни, които може да бъдат записвани от хостинг доставчика, като IP адрес, време на достъп, тип браузър и логове за сигурност.',
		'3. Γιατί επεξεργαζόμαστε τα δεδομένα': '3. Защо обработваме данните',
		'Για να απαντήσουμε στο αίτημα ή στο μήνυμά σας.': 'За да отговорим на вашето запитване или съобщение.',
		'Για να οργανώσουμε παρουσίαση, συζήτηση, προσφορά ή τεχνική διερεύνηση.': 'За да организираме демонстрация, разговор, оферта или техническо уточнение.',
		'Για να διαχειριστούμε προ-συμβατική ή συμβατική επικοινωνία.': 'За да управляваме преддоговорна или договорна комуникация.',
		'Για να προστατεύσουμε την ασφάλεια και τη σωστή λειτουργία της ιστοσελίδας.': 'За да защитим сигурността и правилната работа на уебсайта.',
		'Για να συμμορφωθούμε με νόμιμες υποχρεώσεις, όπου αυτό απαιτείται.': 'За да спазим законови задължения, когато това се изисква.',
		'4. Νομικές βάσεις επεξεργασίας': '4. Правни основания за обработване',
		'Ανάλογα με την περίπτωση, η επεξεργασία βασίζεται:': 'В зависимост от случая обработването се основава на:',
		'Στη συγκατάθεσή σας, όταν μας στέλνετε μήνυμα ή ζητάτε να επικοινωνήσουμε μαζί σας.': 'Вашето съгласие, когато ни изпращате съобщение или искате да се свържем с вас.',
		'Στη λήψη μέτρων πριν από τη σύναψη σύμβασης, όταν ζητάτε προσφορά ή ενημέρωση για υπηρεσίες.': 'Преддоговорни действия, когато искате оферта или информация за услуги.',
		'Στο έννομο συμφέρον μας να απαντούμε σε αιτήματα, να προστατεύουμε την ιστοσελίδα και να διατηρούμε βασικό ιστορικό επικοινωνίας.': 'Нашия легитимен интерес да отговаряме на запитвания, да защитаваме уебсайта и да поддържаме основна история на комуникацията.',
		'Σε νόμιμη υποχρέωση, όταν η διατήρηση ή κοινοποίηση δεδομένων απαιτείται από την ισχύουσα νομοθεσία.': 'Законово задължение, когато съхранението или разкриването на данни се изисква от приложимото право.',
		'5. Σε ποιους κοινοποιούνται τα δεδομένα': '5. На кого се споделят данните',
		'Δεν πουλάμε προσωπικά δεδομένα. Πρόσβαση μπορεί να έχουν μόνο τα απολύτως απαραίτητα πρόσωπα ή συνεργάτες που υποστηρίζουν τη λειτουργία της ιστοσελίδας, της πιστοποίησης χρηστών, της φιλοξενίας, της επικοινωνίας, της ασφάλειας και των συνδεδεμένων υπηρεσιών, όπως πάροχοι φιλοξενίας, Supabase, πάροχοι email, Weather.com, OpenAI εφόσον είναι ενεργό το AI dashboard, Telegram εφόσον είναι ενεργές ειδοποιήσεις, τεχνικοί συνεργάτες και νόμιμοι σύμβουλοι όταν απαιτείται.': 'Не продаваме лични данни. Достъп могат да имат само строго необходимите лица или партньори, които подпомагат работата на уебсайта, удостоверяването на потребители, хостинга, комуникацията, сигурността и свързаните услуги, като хостинг доставчици, Supabase, email доставчици, Weather.com, OpenAI ако AI dashboard е активен, Telegram ако известията са активни, технически партньори и правни съветници при необходимост.',
		'Η ιστοσελίδα φορτώνει γραμματοσειρές από την υπηρεσία Google Fonts. Η χρήση εξωτερικών παρόχων μπορεί να συνεπάγεται τεχνική σύνδεση του browser σας με τους αντίστοιχους παρόχους.': 'Уебсайтът зарежда шрифтове от Google Fonts. Използването на външни доставчици може да включва техническа връзка на вашия браузър със съответните доставчици.',
		'6. Χρόνος διατήρησης': '6. Срок на съхранение',
		'Διατηρούμε τα δεδομένα μόνο για όσο είναι απαραίτητο για τον σκοπό για τον οποίο συλλέχθηκαν. Ενδεικτικά, μηνύματα επικοινωνίας και αιτήματα ενδιαφέροντος μπορούν να διατηρούνται για έως 24 μήνες, εκτός αν απαιτείται μεγαλύτερη διατήρηση για νόμιμους, λογιστικούς ή συμβατικούς λόγους.': 'Съхраняваме данните само толкова дълго, колкото е необходимо за целта, за която са събрани. Например съобщения за контакт и запитвания могат да се пазят до 24 месеца, освен ако не се изисква по-дълго съхранение по законови, счетоводни или договорни причини.',
		'7. Cookies και τεχνολογίες παρακολούθησης': '7. Cookies и технологии за проследяване',
		'Με βάση την τρέχουσα λειτουργία της ιστοσελίδας, δεν χρησιμοποιούμε analytics ή διαφημιστικά cookies. Αν προστεθούν στο μέλλον μη απαραίτητα cookies ή εργαλεία παρακολούθησης, η πολιτική θα ενημερωθεί και θα ζητείται συγκατάθεση όπου απαιτείται.': 'Според текущата работа на уебсайта не използваме analytics или рекламни cookies. Ако в бъдеще бъдат добавени несъществени cookies или инструменти за проследяване, политиката ще бъде актуализирана и ще се иска съгласие, когато е необходимо.',
		'8. Τα δικαιώματά σας': '8. Вашите права',
		'Σύμφωνα με τον ΓΚΠΔ, έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας, εναντίωσης και ανάκλησης συγκατάθεσης όπου η επεξεργασία βασίζεται σε συγκατάθεση.': 'Съгласно GDPR имате право на достъп, корекция, изтриване, ограничаване на обработването, преносимост, възражение и оттегляне на съгласие, когато обработването се основава на съгласие.',
		'Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε στο': 'За да упражните правата си, свържете се с',
		'. Έχετε επίσης δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.': '. Имате също право да подадете жалба до Гръцкия орган за защита на личните данни.',
		'9. Ασφάλεια': '9. Сигурност',
		'Λαμβάνουμε εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων από μη εξουσιοδοτημένη πρόσβαση, απώλεια, αλλοίωση ή κοινοποίηση. Τα μέτρα περιλαμβάνουν χρήση HTTPS, περιορισμό πρόσβασης, διαχωρισμό δημόσιων και ιδιωτικών αρχείων εφαρμογής, ασφαλή διαχείριση μυστικών, καταγραφή συμβάντων ασφαλείας και ψευδωνυμοποίηση τεχνικών αναγνωριστικών στα αρχεία καταγραφής όπου είναι εφικτό.': 'Прилагаме разумни технически и организационни мерки за защита на данните от неоторизиран достъп, загуба, промяна или разкриване. Мерките включват HTTPS, ограничен достъп, разделяне на публични и частни файлове на приложението, сигурно управление на тайни, записване на събития за сигурност и псевдонимизация на технически идентификатори в логовете, когато е възможно.',
		'Τα αρχεία καταγραφής ασφαλείας χρησιμοποιούνται για προστασία από κατάχρηση, μη εξουσιοδοτημένη πρόσβαση και τεχνικά σφάλματα. Δεν καταγράφουμε σκόπιμα κωδικούς, tokens ή μυστικά API. Κανένα ηλεκτρονικό σύστημα δεν μπορεί να θεωρηθεί απόλυτα ασφαλές, γι\' αυτό περιορίζουμε την επεξεργασία στα απαραίτητα δεδομένα.': 'Логовете за сигурност се използват за защита от злоупотреба, неоторизиран достъп и технически грешки. Не записваме умишлено пароли, tokens или API тайни. Никоя електронна система не може да се счита за напълно сигурна, затова ограничаваме обработването до необходимите данни.',
		'10. Νομική επιβεβαίωση πριν από τη δημοσίευση': '10. Правна проверка преди публикуване',
		'Η παρούσα πολιτική είναι λειτουργικό κείμενο διαφάνειας και πρέπει να επιβεβαιωθεί από νομικό σύμβουλο πριν από την τελική παραγωγική δημοσίευση, ιδίως ως προς την πλήρη ταυτότητα του υπευθύνου επεξεργασίας, τους εκτελούντες την επεξεργασία, τις διεθνείς διαβιβάσεις, τους χρόνους διατήρησης και τις συμβάσεις επεξεργασίας.': 'Тази политика е работен текст за прозрачност и трябва да бъде потвърдена от правен съветник преди финално публикуване, особено относно пълната самоличност на администратора, обработващите лица, международните трансфери, сроковете за съхранение и договорите за обработване.',
		'11. Αλλαγές στην πολιτική': '11. Промени в политиката',
		'Η παρούσα πολιτική μπορεί να ενημερώνεται όταν αλλάζει η λειτουργία της ιστοσελίδας, οι υπηρεσίες ή οι νομικές υποχρεώσεις μας. Η πιο πρόσφατη έκδοση θα είναι πάντα διαθέσιμη σε αυτή τη σελίδα.': 'Тази политика може да се актуализира, когато се променят работата на уебсайта, услугите или законовите ни задължения. Най-новата версия винаги ще бъде достъпна на тази страница.'
	},
	sq: {},
	tr: {},
	ro: {},
	nl: {},
	fr: {},
	es: {},
	it: {}
};

const IFLORA_TRANSLATION_ROWS = [
	[`iFlora | Smart Agriculture & Greenhouse IoT`, `iFlora | Bujqësi inteligjente dhe IoT për serra`, `iFlora | Akıllı Tarım ve Sera IoT`, `iFlora | Agricultură inteligentă și IoT pentru sere`],
	[`Ευφυής διαχείριση θερμοκηπίων και αγροτικών εγκαταστάσεων με αισθητήρες, αυτοματισμούς, AI insights και απομακρυσμένο έλεγχο.`, `Menaxhim inteligjent i serrave dhe instalimeve bujqësore me sensorë, automatizime, AI insights dhe kontroll në distancë.`, `Sensörler, otomasyonlar, AI insights ve uzaktan kontrol ile seralar ve tarımsal tesisler için akıllı yönetim.`, `Management inteligent pentru sere și ferme cu senzori, automatizări, AI insights și control de la distanță.`],
	[`Επικοινωνία | iFlora`, `Kontakt | iFlora`, `İletişim | iFlora`, `Contact | iFlora`],
	[`← Επιστροφή`, `← Kthehu`, `← Geri`, `← Înapoi`],
	[`π.χ. giannis@example.com`, `p.sh. arben@example.com`, `örn. mehmet@example.com`, `ex. ion@example.com`],
	[`Πολιτική επεξεργασίας προσωπικών δεδομένων για την ιστοσελίδα iFlora, σύμφωνα με τον ΓΚΠΔ και την ελληνική νομοθεσία.`, `Politika e përpunimit të të dhënave personale për faqen iFlora, sipas GDPR dhe legjislacionit grek.`, `iFlora web sitesi için GDPR ve Yunan mevzuatına göre kişisel veri işleme politikası.`, `Politica de prelucrare a datelor personale pentru site-ul iFlora, conform GDPR și legislației elene.`],
	[`Primary navigation`, `Navigimi kryesor`, `Ana gezinme`, `Navigare principală`],
	[`Language selector`, `Zgjedhësi i gjuhës`, `Dil seçici`, `Selector de limbă`],
	[`Language`, `Gjuha`, `Dil`, `Limbă`],
	[`Lang`, `Gjuha`, `Dil`, `Limbă`],
	[`Άνοιγμα μενού`, `Hap menunë`, `Menüyü aç`, `Deschide meniul`],
	[`Κλείσιμο μενού`, `Mbyll menunë`, `Menüyü kapat`, `Închide meniul`],
	[`iFlora home`, `Faqja kryesore iFlora`, `iFlora ana sayfası`, `Pagina principală iFlora`],
	[`Εφαρμογές`, `Aplikime`, `Uygulamalar`, `Aplicații`],
	[`Τεχνολογία`, `Teknologji`, `Teknoloji`, `Tehnologie`],
	[`Αποτελέσματα`, `Rezultate`, `Sonuçlar`, `Rezultate`],
	[`Πλάνα`, `Planet`, `Planlar`, `Planuri`],
	[`Σύνδεση`, `Hyrje`, `Giriş`, `Autentificare`],
	[`Επικοινωνία`, `Kontakt`, `İletişim`, `Contact`],
	[`SMART FARMING & GREENHOUSE IOT`, `BUJQËSI INTELIGJENTE & IOT PËR SERRA`, `AKILLI TARIM VE SERA IOT`, `AGRICULTURĂ INTELIGENTĂ & IOT PENTRU SERE`],
	[`Συνδέστε κάθε αισθητήρα, συσκευή και απόφαση της καλλιέργειας σε ένα έξυπνο σύστημα.`, `Lidhni çdo sensor, pajisje dhe vendim të kultivimit në një sistem inteligjent.`, `Her sensörü, cihazı ve üretim kararını tek bir akıllı sisteme bağlayın.`, `Conectați fiecare senzor, dispozitiv și decizie agricolă într-un singur sistem inteligent.`],
	[`Το iFlora μετατρέπει`, `iFlora i kthen`, `iFlora`, `iFlora transformă`],
	[`δεδομένα πεδίου`, `të dhënat nga terreni`, `saha verilerini`, `datele din teren`],
	[`, μικροκλίματος και εξοπλισμού σε`, `, mikroklimës dhe pajisjeve në`, `, mikroiklim ve ekipman verilerini`, `, microclimatul și echipamentele în`],
	[`άμεσες ενέργειες`, `veprime të menjëhershme`, `anlık aksiyonlara dönüştürür`, `acțiuni imediate`],
	[`, ώστε να μειώνετε σπατάλες, να προλαβαίνετε απώλειες και να`, `, që të ulni humbjet, të parandaloni dëmet dhe të`, `; böylece israfı azaltır, kayıpları önler ve`, `, astfel încât să reduceți risipa, să preveniți pierderile și să`],
	[`ελέγχετε την παραγωγή από οπουδήποτε`, `kontrolloni prodhimin nga kudo`, `üretimi her yerden kontrol edersiniz`, `controlați producția de oriunde`],
	[`Ζητήστε επίδειξη`, `Kërkoni demonstrim`, `Demo isteyin`, `Solicitați o demonstrație`],
	[`Δείτε τις εφαρμογές`, `Shihni aplikimet`, `Uygulamaları görün`, `Vedeți aplicațiile`],
	[`Βασικά οφέλη`, `Përfitimet kryesore`, `Temel faydalar`, `Beneficii principale`],
	[`Αισθητήρες & αυτοματισμοί`, `Sensorë & automatizime`, `Sensörler ve otomasyonlar`, `Senzori & automatizări`],
	[`AI insights σε πραγματικό χρόνο`, `AI insights në kohë reale`, `Gerçek zamanlı AI insights`, `AI insights în timp real`],
	[`Υποστήριξη υπάρχοντος hardware`, `Mbështetje për hardware ekzistues`, `Mevcut donanım desteği`, `Suport pentru hardware existent`],
	[`ΑΠΟ ΤΗΝ ΠΑΡΑΚΟΛΟΥΘΗΣΗ ΣΤΗ ΔΡΑΣΗ`, `NGA MONITORIMI TE VEPRIMI`, `İZLEMEDEN AKSİYONA`, `DE LA MONITORIZARE LA ACȚIUNE`],
	[`Η γεωργία δεν χρειάζεται περισσότερα dashboards. Χρειάζεται καθαρό σήμα για το τι πρέπει να γίνει τώρα.`, `Bujqësia nuk ka nevojë për më shumë dashboards. Ka nevojë për sinjal të qartë se çfarë duhet bërë tani.`, `Tarımın daha fazla dashboard’a değil, şimdi ne yapılması gerektiğini gösteren net bir sinyale ihtiyacı var.`, `Agricultura nu are nevoie de mai multe dashboards. Are nevoie de un semnal clar despre ce trebuie făcut acum.`],
	[`Από το θερμοκήπιο μέχρι το χωράφι, το iFlora συγκεντρώνει δεδομένα, τα αναλύει και τα μετατρέπει σε`, `Nga serra deri te fusha, iFlora mbledh të dhëna, i analizon dhe i kthen në`, `Seradan tarlaya iFlora verileri toplar, analiz eder ve`, `De la seră până la câmp, iFlora colectează date, le analizează și le transformă în`],
	[`ειδοποιήσεις`, `njoftime`, `bildirimlere`, `alerte`],
	[`αυτοματισμούς`, `automatizime`, `otomasyonlara`, `automatizări`],
	[`και αποφάσεις που`, `dhe vendime që`, `ve`, `și decizii care`],
	[`προστατεύουν την παραγωγή`, `mbrojnë prodhimin`, `üretimi koruyan kararlara dönüştürür`, `protejează producția`],
	[`IOT APPLICATIONS FOR AGRICULTURE`, `APLIKIME IOT PËR BUJQËSI`, `TARIM İÇİN IOT UYGULAMALARI`, `APLICAȚII IOT PENTRU AGRICULTURĂ`],
	[`Εφαρμογές που καλύπτουν την πραγματική καθημερινότητα της παραγωγής`, `Aplikime që mbulojnë përditshmërinë reale të prodhimit`, `Üretimin gerçek günlük ihtiyaçlarını kapsayan uygulamalar`, `Aplicații care acoperă realitatea zilnică a producției`],
	[`Precision farming`, `Bujqësi precize`, `Hassas tarım`, `Agricultură de precizie`],
	[`Συνδυάστε μετρήσεις μικροκλίματος, εδάφους και παραγωγής για να ποτίζετε, αερίζετε και`, `Kombinoni matjet e mikroklimës, tokës dhe prodhimit për të ujitur, ajrosur dhe`, `Sulama, havalandırma ve`, `Combinați măsurători de microclimat, sol și producție pentru a iriga, aerisi și`],
	[`παρεμβαίνετε με ακρίβεια`, `ndërhyrë me saktësi`, `doğru müdahale etmek için mikroiklim, toprak ve üretim ölçümlerini birleştirin`, `interveni cu precizie`],
	[`Πώς λειτουργεί`, `Si funksionon`, `Nasıl çalışır`, `Cum funcționează`],
	[`Έξυπνο θερμοκήπιο`, `Serrë inteligjente`, `Akıllı sera`, `Seră inteligentă`],
	[`Κρατήστε`, `Mbani`, `Koruyun`, `Mențineți`],
	[`σταθερές συνθήκες`, `kushte të qëndrueshme`, `stabil koşulları`, `condiții stabile`],
	[`με ειδοποιήσεις και αυτοματισμούς για θερμοκρασία, υγρασία, σκίαση, αερισμό και άρδευση.`, `me njoftime dhe automatizime për temperaturë, lagështi, hijëzim, ajrim dhe ujitje.`, `sıcaklık, nem, gölgeleme, havalandırma ve sulama için bildirimler ve otomasyonlarla.`, `cu alerte și automatizări pentru temperatură, umiditate, umbrire, ventilație și irigare.`],
	[`Δείτε λύσεις`, `Shihni zgjidhjet`, `Çözümleri görün`, `Vedeți soluțiile`],
	[`Smart irrigation`, `Ujitje inteligjente`, `Akıllı sulama`, `Irigare inteligentă`],
	[`Μειώστε την άσκοπη κατανάλωση νερού`, `Ulni konsumin e panevojshëm të ujit`, `Gereksiz su tüketimini azaltın`, `Reduceți consumul inutil de apă`],
	[`με παρακολούθηση υγρασίας, πρόβλεψη αναγκών και κανόνες άρδευσης ανά ζώνη.`, `me monitorim lagështie, parashikim nevojash dhe rregulla ujitjeje sipas zonës.`, `nem takibi, ihtiyaç tahmini ve bölge bazlı sulama kurallarıyla.`, `prin monitorizarea umidității, estimarea nevoilor și reguli de irigare pe zone.`],
	[`Συχνές ερωτήσεις`, `Pyetje të shpeshta`, `Sık sorulan sorular`, `Întrebări frecvente`],
	[`Remote sensing`, `Monitorim në distancë`, `Uzaktan algılama`, `Teledetecție`],
	[`Παρακολουθήστε απομακρυσμένα`, `Monitoroni nga distanca`, `Uzaktan izleyin`, `Monitorizați de la distanță`],
	[`εγκαταστάσεις, συσκευές και κρίσιμες αλλαγές χωρίς να βρίσκεστε συνεχώς στο σημείο.`, `instalime, pajisje dhe ndryshime kritike pa qenë vazhdimisht në vend.`, `tesisleri, cihazları ve kritik değişiklikleri sürekli sahada olmadan.`, `instalații, dispozitive și schimbări critice fără să fiți permanent la fața locului.`],
	[`Μιλήστε μαζί μας`, `Flisni me ne`, `Bizimle konuşun`, `Discutați cu noi`],
	[`IOT ENABLEMENT`, `AKTIVIZIM IOT`, `IOT ENTEGRASYONU`, `ACTIVARE IOT`],
	[`Η τεχνολογία πίσω από μια καλλιέργεια που αντιδρά πιο γρήγορα.`, `Teknologjia pas një kulture që reagon më shpejt.`, `Daha hızlı tepki veren üretimin arkasındaki teknoloji.`, `Tehnologia din spatele unei culturi care reacționează mai rapid.`],
	[`Το iFlora λειτουργεί σαν`, `iFlora funksionon si`, `iFlora bir`, `iFlora funcționează ca`],
	[`επίπεδο ενοποίησης`, `shtresë integrimi`, `entegrasyon katmanı`, `strat de integrare`],
	[`: συνδέει αισθητήρες, υπάρχον εξοπλισμό, gateways, αυτοματισμούς και εφαρμογές σε`, `: lidh sensorë, pajisje ekzistuese, gateways, automatizime dhe aplikacione në`, `gibi çalışır: sensörleri, mevcut ekipmanı, gateway’leri, otomasyonları ve uygulamaları`, `: conectează senzori, echipamente existente, gateway-uri, automatizări și aplicații într-un`],
	[`ένα ενιαίο περιβάλλον`, `një mjedis të unifikuar`, `tek bir ortamda`, `mediu unificat`],
	[`που οι παραγωγοί μπορούν να εμπιστευτούν.`, `që prodhuesit mund t’i besojnë.`, `üreticilerin güvenebileceği şekilde birleştirir.`, `în care producătorii pot avea încredere.`],
	[`Αισθητήρες`, `Sensorë`, `Sensörler`, `Senzori`],
	[`Συλλογή δεδομένων`, `Mbledhje të dhënash`, `Veri toplama`, `Colectare de date`],
	[`για περιβάλλον, έδαφος, νερό και συνθήκες καλλιέργειας.`, `për mjedisin, tokën, ujin dhe kushtet e kultivimit.`, `çevre, toprak, su ve üretim koşulları için.`, `pentru mediu, sol, apă și condițiile culturii.`],
	[`Gateways & συνδεσιμότητα`, `Gateways & lidhshmëri`, `Gateway’ler ve bağlantı`, `Gateway-uri & conectivitate`],
	[`Σταθερή ροή δεδομένων`, `Rrjedhë e qëndrueshme të dhënash`, `Kesintisiz veri akışı`, `Flux stabil de date`],
	[`από το πεδίο στο dashboard, ακόμη και σε απαιτητικά περιβάλλοντα.`, `nga terreni në dashboard, edhe në mjedise të vështira.`, `zorlu ortamlarda bile sahadan dashboard’a.`, `din teren către dashboard, chiar și în medii dificile.`],
	[`AI και αυτοματισμοί`, `AI dhe automatizime`, `AI ve otomasyonlar`, `AI și automatizări`],
	[`Ειδοποιήσεις, κανόνες και insights που`, `Njoftime, rregulla dhe insights që`, `Bildirimler, kurallar ve`, `Alerte, reguli și insights care`],
	[`μειώνουν τη χειροκίνητη παρακολούθηση`, `ulin monitorimin manual`, `manuel takibi azaltan insights`, `reduc monitorizarea manuală`],
	[`WHY IT MATTERS`, `PSE KA RËNDËSI`, `NEDEN ÖNEMLİ`, `DE CE CONTEAZĂ`],
	[`Από το πρώτο σήμα μέχρι την απόφαση, όλα γίνονται πιο καθαρά.`, `Nga sinjali i parë deri te vendimi, gjithçka bëhet më e qartë.`, `İlk sinyalden karara kadar her şey daha net olur.`, `De la primul semnal până la decizie, totul devine mai clar.`],
	[`παρακολούθηση κρίσιμων συνθηκών`, `monitorim i kushteve kritike`, `kritik koşulların izlenmesi`, `monitorizarea condițiilor critice`],
	[`κέντρο ελέγχου για αισθητήρες και συσκευές`, `qendër kontrolli për sensorë dhe pajisje`, `sensörler ve cihazlar için tek kontrol merkezi`, `centru de control pentru senzori și dispozitive`],
	[`insights για πρόβλεψη τάσεων και άμεση αντίδραση`, `insights për parashikim trendesh dhe reagim të menjëhershëm`, `trend tahmini ve hızlı tepki için insights`, `insights pentru predicția tendințelor și reacție imediată`],
	[`CONNECTED OPERATIONS`, `OPERACIONE TË LIDHURA`, `BAĞLI OPERASYONLAR`, `OPERAȚIUNI CONECTATE`],
	[`Φτιαγμένο για θερμοκήπια, χωράφια και εγκαταστάσεις που μεγαλώνουν.`, `I ndërtuar për serra, fusha dhe instalime që rriten.`, `Büyüyen seralar, tarlalar ve tesisler için tasarlandı.`, `Creat pentru sere, câmpuri și instalații care cresc.`],
	[`Εγκατάσταση αισθητήρων & IoT υποδομής`, `Instalim sensorësh & infrastrukture IoT`, `Sensör ve IoT altyapısı kurulumu`, `Instalare senzori & infrastructură IoT`],
	[`Απομακρυσμένος έλεγχος συσκευών`, `Kontroll pajisjesh në distancë`, `Cihazların uzaktan kontrolü`, `Control la distanță al dispozitivelor`],
	[`Προτεραιότητα τεχνικής υποστήριξης`, `Prioritet në mbështetje teknike`, `Öncelikli teknik destek`, `Prioritate la suport tehnic`],
	[`ΠΛΑΝΑ`, `PLANET`, `PLANLAR`, `PLANURI`],
	[`Ξεκινήστε με το επίπεδο ελέγχου που χρειάζεται η παραγωγή σας.`, `Filloni me nivelin e kontrollit që i duhet prodhimit tuaj.`, `Üretiminizin ihtiyaç duyduğu kontrol seviyesiyle başlayın.`, `Începeți cu nivelul de control de care are nevoie producția dvs.`],
	[`Ιδανικό για ξεκίνημα`, `Ideal për fillim`, `Başlangıç için ideal`, `Ideal pentru început`],
	[`Ζητήστε προσφορά`, `Kërkoni ofertë`, `Teklif isteyin`, `Solicitați ofertă`],
	[`Δεδομένα σε πραγματικό χρόνο`, `Të dhëna në kohë reale`, `Gerçek zamanlı veri`, `Date în timp real`],
	[`Αναλύσεις δεδομένων αισθητήρων`, `Analiza të të dhënave të sensorëve`, `Sensör verisi analizleri`, `Analize ale datelor senzorilor`],
	[`Αναλύσεις περιβαλλοντικών δεδομένων`, `Analiza të të dhënave mjedisore`, `Çevresel veri analizleri`, `Analize ale datelor de mediu`],
	[`Αναλύσεις ενέργειας &amp; νερού`, `Analiza të energjisë & ujit`, `Enerji ve su analizleri`, `Analize de energie & apă`],
	[`Αναλύσεις ενέργειας & νερού`, `Analiza të energjisë & ujit`, `Enerji ve su analizleri`, `Analize de energie & apă`],
	[`Συμβουλές AI Agent (Insights)`, `Këshilla nga AI Agent (Insights)`, `AI Agent önerileri (Insights)`, `Recomandări AI Agent (Insights)`],
	[`Αντίγραφα ασφαλείας`, `Kopje rezervë`, `Yedeklemeler`, `Copii de siguranță`],
	[`Συνομιλία στο B2B Marketplace`, `Bisedë në B2B Marketplace`, `B2B Marketplace sohbeti`, `Conversație în B2B Marketplace`],
	[`Συνομιλία με AI Agent`, `Bisedë me AI Agent`, `AI Agent ile sohbet`, `Conversație cu AI Agent`],
	[`Επικοινωνία με Γεωπόνο`, `Kontakt me agronom`, `Ziraat mühendisiyle iletişim`, `Contact cu agronom`],
	[`Telegram &amp; Έξυπνες Ειδοποιήσεις`, `Telegram & njoftime inteligjente`, `Telegram ve akıllı bildirimler`, `Telegram & alerte inteligente`],
	[`Telegram & Έξυπνες Ειδοποιήσεις`, `Telegram & njoftime inteligjente`, `Telegram ve akıllı bildirimler`, `Telegram & alerte inteligente`],
	[`Εγκατάσταση Αισθητήρων`, `Instalim sensorësh`, `Sensör kurulumu`, `Instalare senzori`],
	[`Μελλοντικές προβλέψεις`, `Parashikime të ardhshme`, `Gelecek tahminleri`, `Predicții viitoare`],
	[`Έξυπνοι αυτοματισμοί &amp; Έλεγχος`, `Automatizime inteligjente & kontroll`, `Akıllı otomasyonlar ve kontrol`, `Automatizări inteligente & control`],
	[`Έξυπνοι αυτοματισμοί & Έλεγχος`, `Automatizime inteligjente & kontroll`, `Akıllı otomasyonlar ve kontrol`, `Automatizări inteligente & control`],
	[`Η πιο ισορροπημένη επιλογή`, `Zgjedhja më e balancuar`, `En dengeli seçenek`, `Cea mai echilibrată alegere`],
	[`Ανάλυση περιβάλλοντος (Εξατομικευμένα)`, `Analizë mjedisi (e personalizuar)`, `Ortam analizi (kişiselleştirilmiş)`, `Analiză de mediu (personalizată)`],
	[`Συνομιλία με AI Agent (50 μηνύματα)`, `Bisedë me AI Agent (50 mesazhe)`, `AI Agent ile sohbet (50 mesaj)`, `Conversație cu AI Agent (50 mesaje)`],
	[`Επικοινωνία με Γεωπόνο (1 ώρα/μήνα)`, `Kontakt me agronom (1 orë/muaj)`, `Ziraat mühendisiyle iletişim (ayda 1 saat)`, `Contact cu agronom (1 oră/lună)`],
	[`Εγκατάσταση Αισθητήρων (Απλή)`, `Instalim sensorësh (bazë)`, `Sensör kurulumu (basit)`, `Instalare senzori (simplă)`],
	[`Για απαιτητικές εγκαταστάσεις`, `Për instalime më kërkuese`, `Zorlu tesisler için`, `Pentru instalații complexe`],
	[`Ανάλυση περιβάλλοντος (Εξατομικευμένα και προβλέψεις)`, `Analizë mjedisi (e personalizuar dhe parashikime)`, `Ortam analizi (kişiselleştirilmiş ve tahminli)`, `Analiză de mediu (personalizată și predictivă)`],
	[`Συνομιλία με AI Agent (Απεριόριστα)`, `Bisedë me AI Agent (pa limit)`, `AI Agent ile sohbet (sınırsız)`, `Conversație cu AI Agent (nelimitat)`],
	[`Εγκατάσταση Αισθητήρων (Προτεραιότητα)`, `Instalim sensorësh (prioritet)`, `Sensör kurulumu (öncelikli)`, `Instalare senzori (prioritate)`],
	[`ΜΑΖΙ ΚΑΛΛΙΕΡΓΟΥΜΕ ΤΟ ΑΥΡΙΟ`, `SË BASHKU KULTIVOJMË TË NESËRMEN`, `YARINI BİRLİKTE YETİŞTİRİYORUZ`, `CULTIVĂM ÎMPREUNĂ ZIUA DE MÂINE`],
	[`Χτίζουμε μαζί το μέλλον της γεωπονίας.`, `Ndërtojmë së bashku të ardhmen e agronomisë.`, `Tarım biliminin geleceğini birlikte inşa ediyoruz.`, `Construim împreună viitorul agronomiei.`],
	[`Οι νέες ιδέες χρειάζονται χώρο για να ριζώσουν. Γι’ αυτό στηρίζουμε τους φοιτητές και τη νέα γενιά παραγωγών με ουσιαστικές εκπτώσεις σε όλα τα πλάνα iFlora.`, `Idetë e reja kanë nevojë për hapësirë që të rrënjosen. Prandaj mbështesim studentët dhe gjeneratën e re të prodhuesve me ulje reale në të gjitha planet iFlora.`, `Yeni fikirlerin kök salması için alana ihtiyacı var. Bu yüzden öğrencileri ve yeni nesil üreticileri tüm iFlora planlarında anlamlı indirimlerle destekliyoruz.`, `Ideile noi au nevoie de spațiu ca să prindă rădăcini. De aceea sprijinim studenții și noua generație de producători cu reduceri reale la toate planurile iFlora.`],
	[`Η γνώση συναντά την τεχνολογία. Η δική σας αρχή γίνεται η κοινή μας εξέλιξη.`, `Dija takon teknologjinë. Fillimi juaj bëhet zhvillimi ynë i përbashkët.`, `Bilgi teknolojiyle buluşur. Sizin başlangıcınız ortak gelişimimize dönüşür.`, `Cunoașterea întâlnește tehnologia. Începutul dvs. devine evoluția noastră comună.`],
	[`Φοιτητική έκπτωση`, `Ulje studentore`, `Öğrenci indirimi`, `Reducere pentru studenți`],
	[`«Σπουδάζετε το αύριο. Εμείς σας βοηθάμε να το καλλιεργήσετε.»`, `“Ju studioni të nesërmen. Ne ju ndihmojmë ta kultivoni.”`, `“Yarını okuyorsunuz. Biz onu yetiştirmenize yardım ediyoruz.”`, `„Studiați ziua de mâine. Noi vă ajutăm să o cultivați.”`],
	[`Ισχύει μέχρι την ολοκλήρωση των σπουδών.`, `Vlen deri në përfundimin e studimeve.`, `Eğitimin tamamlanmasına kadar geçerlidir.`, `Valabilă până la finalizarea studiilor.`],
	[`Ποσοστά φοιτητικής έκπτωσης ανά πλάνο`, `Përqindjet e uljes studentore sipas planit`, `Plana göre öğrenci indirimi oranları`, `Procentele reducerii pentru studenți pe plan`],
	[`Έκπτωση για νέους κάτω των 30`, `Ulje për të rinj nën 30 vjeç`, `30 yaş altı gençler için indirim`, `Reducere pentru tineri sub 30 de ani`],
	[`«Η επόμενη γενιά της γεωπονίας ξεκινά σήμερα — μαζί.»`, `“Gjenerata e ardhshme e agronomisë fillon sot — së bashku.”`, `“Tarım biliminin yeni nesli bugün başlıyor — birlikte.”`, `„Următoarea generație a agronomiei începe astăzi — împreună.”`],
	[`Για μη φοιτητές κάτω των 30 ετών, για 2 χρόνια.`, `Për jo-studentë nën 30 vjeç, për 2 vite.`, `30 yaş altı öğrenci olmayanlar için 2 yıl.`, `Pentru persoane sub 30 de ani care nu sunt studenți, timp de 2 ani.`],
	[`Ποσοστά έκπτωσης iFlora NextGen ανά πλάνο`, `Përqindjet e uljes iFlora NextGen sipas planit`, `Plana göre iFlora NextGen indirim oranları`, `Procentele reducerii iFlora NextGen pe plan`],
	[`Το πρώτο βήμα δεν χρειάζεται να το κάνετε μόνοι.`, `Hapin e parë nuk keni pse ta bëni vetëm.`, `İlk adımı tek başınıza atmak zorunda değilsiniz.`, `Nu trebuie să faceți primul pas singuri.`],
	[`Ελάτε να σχεδιάσουμε μαζί μια πιο έξυπνη, βιώσιμη καλλιέργεια.`, `Le ta projektojmë së bashku një kultivim më inteligjent dhe të qëndrueshëm.`, `Daha akıllı ve sürdürülebilir bir üretimi birlikte tasarlayalım.`, `Haideți să proiectăm împreună o cultură mai inteligentă și sustenabilă.`],
	[`Μεγαλώνουμε μαζί`, `Rritemi së bashku`, `Birlikte büyüyoruz`, `Creștem împreună`],
	[`Στις τιμές`, `Në çmime`, `Fiyatlara`, `În prețuri`],
	[`συμπεριλαμβάνεται το ΦΠΑ`, `përfshihet TVSH`, `KDV dahildir`, `este inclus TVA`],
	[`Υπάρχουν έξτρα χρεώσεις για την`, `Ka tarifa shtesë për`, `Ek ücretler vardır:`, `Există costuri suplimentare pentru`],
	[`αγορά του εξοπλισμού`, `blerjen e pajisjeve`, `ekipman satın alımı`, `achiziția echipamentului`],
	[`Επιπλέον χρεώσεις στη`, `Tarifa shtesë për`, `Ek ücretler:`, `Costuri suplimentare pentru`],
	[`μεταφορά και εγκατάσταση`, `transportin dhe instalimin`, `taşıma ve kurulum`, `transport și instalare`],
	[`του εξοπλισμού`, `e pajisjeve`, `ekipmanın`, `a echipamentului`],
	[`Οι τιμές των πλάνων αναφέρονται για`, `Çmimet e planeve vlejnë për`, `Plan fiyatları`, `Prețurile planurilor se referă la`],
	[`μία εγκατάσταση`, `një instalim`, `bir tesis içindir`, `o singură instalație`],
	[`, κάθε έξτρα εγκατάσταση κοστολογείται ανάλογα με το πλάνο.`, `, çdo instalim shtesë çmohet sipas planit.`, `, her ek tesis plana göre fiyatlandırılır.`, `, fiecare instalație suplimentară se tarifează în funcție de plan.`],
	[`Οι τιμές των πλάνων`, `Çmimet e planeve`, `Plan fiyatları`, `Prețurile planurilor`],
	[`υπόκεινται σε αλλαγές`, `mund të ndryshojnë`, `değişebilir`, `pot suferi modificări`],
	[`με βάση τις τρέχουσες τιμές της αγοράς ή πιθανές αυξήσεις στο κόστος υπηρεσιών.`, `sipas çmimeve aktuale të tregut ose rritjeve të mundshme në koston e shërbimeve.`, `mevcut piyasa fiyatlarına veya hizmet maliyetlerindeki olası artışlara göre.`, `în funcție de prețurile curente ale pieței sau de posibile creșteri ale costurilor serviciilor.`],
	[`MORE INFORMATION`, `MË SHUMË INFORMACION`, `DAHA FAZLA BİLGİ`, `MAI MULTE INFORMAȚII`],
	[`Οι ερωτήσεις που ακούγονται πριν ξεκινήσει ένα έργο smart farming.`, `Pyetjet që dëgjohen para se të nisë një projekt smart farming.`, `Bir smart farming projesi başlamadan önce duyulan sorular.`, `Întrebările care apar înainte de începerea unui proiect smart farming.`],
	[`Μπορώ να χρησιμοποιήσω υπάρχοντα αισθητήρια ή εξοπλισμό;`, `A mund të përdor sensorë ose pajisje ekzistuese?`, `Mevcut sensörleri veya ekipmanı kullanabilir miyim?`, `Pot folosi senzori sau echipamente existente?`],
	[`Ναι. Το iFlora σχεδιάζεται ώστε να αξιοποιεί υπάρχον hardware όπου είναι εφικτό και να προσθέτει νέα σημεία μέτρησης μόνο εκεί που υπάρχει πραγματική ανάγκη.`, `Po. iFlora është projektuar të shfrytëzojë hardware ekzistues kur është e mundur dhe të shtojë pika të reja matjeje vetëm aty ku ka nevojë reale.`, `Evet. iFlora mümkün olan yerlerde mevcut donanımı kullanacak ve yalnızca gerçek ihtiyaç olan yerlere yeni ölçüm noktaları ekleyecek şekilde tasarlanır.`, `Da. iFlora este proiectat să folosească hardware existent acolo unde este posibil și să adauge puncte noi de măsurare doar acolo unde există o nevoie reală.`],
	[`Σε τι βοηθούν τα AI insights στην καθημερινή παραγωγή;`, `Si ndihmojnë AI insights në prodhimin e përditshëm?`, `AI insights günlük üretimde neye yardımcı olur?`, `Cum ajută AI insights în producția zilnică?`],
	[`Βοηθούν να εντοπίζετε τάσεις και ασυνήθιστες μεταβολές νωρίτερα, ώστε να αντιδράτε πριν η κατάσταση επηρεάσει την απόδοση ή την ποιότητα.`, `Ndihmojnë të dalloni më herët trendet dhe ndryshimet e pazakonta, që të reagoni para se situata të ndikojë rendimentin ose cilësinë.`, `Trendleri ve olağan dışı değişimleri daha erken görmenize yardımcı olur; böylece durum verimi veya kaliteyi etkilemeden tepki verebilirsiniz.`, `Ajută la identificarea mai rapidă a tendințelor și schimbărilor neobișnuite, pentru a reacționa înainte ca situația să afecteze randamentul sau calitatea.`],
	[`Είναι κατάλληλο μόνο για θερμοκήπια;`, `A është i përshtatshëm vetëm për serra?`, `Sadece seralar için mi uygundur?`, `Este potrivit doar pentru sere?`],
	[`Όχι. Η ίδια λογική εφαρμόζεται σε θερμοκήπια, χωράφια, ζώνες άρδευσης και απομακρυσμένες αγροτικές εγκαταστάσεις.`, `Jo. E njëjta logjikë zbatohet në serra, fusha, zona ujitjeje dhe instalime bujqësore në distancë.`, `Hayır. Aynı mantık seralarda, tarlalarda, sulama bölgelerinde ve uzak tarımsal tesislerde uygulanır.`, `Nu. Aceeași logică se aplică în sere, câmpuri, zone de irigare și instalații agricole la distanță.`],
	[`Υπάρχουν ειδικές εκπτώσεις για φοιτητές και νέους;`, `A ka ulje të veçanta për studentë dhe të rinj?`, `Öğrenciler ve gençler için özel indirimler var mı?`, `Există reduceri speciale pentru studenți și tineri?`],
	[`Ναι. Οι φοιτητές λαμβάνουν έκπτωση 23% στο Beginner, 22% στο Standard και 15% στο Professional μέχρι να ολοκληρώσουν τις σπουδές τους. Το iFlora NextGen προσφέρει σε μη φοιτητές κάτω των 30 ετών έκπτωση 12%, 11% και 10% αντίστοιχα, για 2 χρόνια.`, `Po. Studentët marrin ulje 23% në Beginner, 22% në Standard dhe 15% në Professional deri në përfundimin e studimeve. iFlora NextGen u ofron jo-studentëve nën 30 vjeç ulje 12%, 11% dhe 10% përkatësisht, për 2 vite.`, `Evet. Öğrenciler eğitimleri bitene kadar Beginner’da %23, Standard’da %22 ve Professional’da %15 indirim alır. iFlora NextGen, 30 yaş altı öğrenci olmayanlara 2 yıl boyunca sırasıyla %12, %11 ve %10 indirim sunar.`, `Da. Studenții primesc reducere de 23% la Beginner, 22% la Standard și 15% la Professional până la finalizarea studiilor. iFlora NextGen oferă persoanelor sub 30 de ani care nu sunt studenți reduceri de 12%, 11% și 10%, timp de 2 ani.`],
	[`MAKE SMART FARMING ACTIONABLE`, `BËJENI SMART FARMING TË ZBATUESHËM`, `AKILLI TARIMI UYGULANABİLİR KILIN`, `TRANSFORMAȚI SMART FARMING ÎN ACȚIUNE`],
	[`Δείτε πώς θα μπορούσε να λειτουργήσει το iFlora στη δική σας εγκατάσταση.`, `Shihni si mund të funksionojë iFlora në instalimin tuaj.`, `iFlora’nın kendi tesisinizde nasıl çalışabileceğini görün.`, `Vedeți cum ar putea funcționa iFlora în instalația dvs.`],
	[`Κλείστε σύντομη συζήτηση`, `Rezervoni një bisedë të shkurtër`, `Kısa bir görüşme planlayın`, `Programați o discuție scurtă`],
	[`Στοιχεία επικοινωνίας`, `Të dhënat e kontaktit`, `İletişim bilgileri`, `Date de contact`],
	[`Πολιτική Δεδομένων`, `Politika e të dhënave`, `Veri Politikası`, `Politica de date`],
	[`Επικοινωνία | iFlora`, `Kontakt | iFlora`, `İletişim | iFlora`, `Contact | iFlora`],
	[`&larr; Επιστροφή`, `&larr; Kthehu`, `&larr; Geri`, `&larr; Înapoi`],
	[`ΕΠΙΚΟΙΝΩΝΙΑ`, `KONTAKT`, `İLETİŞİM`, `CONTACT`],
	[`Στείλτε μας το μήνυμά σας`, `Na dërgoni mesazhin tuaj`, `Bize mesajınızı gönderin`, `Trimiteți-ne mesajul dvs.`],
	[`Συμπληρώστε τη φόρμα παρακάτω και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.`, `Plotësoni formularin më poshtë dhe do t’ju kontaktojmë sa më shpejt.`, `Aşağıdaki formu doldurun, sizinle en kısa sürede iletişime geçelim.`, `Completați formularul de mai jos și vă vom contacta cât mai curând posibil.`],
	[`Ονοματεπώνυμο`, `Emër dhe mbiemër`, `Ad soyad`, `Nume și prenume`],
	[`Τηλέφωνο`, `Telefon`, `Telefon`, `Telefon`],
	[`Επιλογή Πλάνου`, `Zgjedhja e planit`, `Plan seçimi`, `Alegerea planului`],
	[`Χωρίς επιλογή (Μόνο Ερώτηση)`, `Pa zgjedhje (vetëm pyetje)`, `Seçim yok (sadece soru)`, `Fără alegere (doar întrebare)`],
	[`Κατηγορία Έκπτωσης`, `Kategoria e uljes`, `İndirim kategorisi`, `Categorie de reducere`],
	[`Χωρίς ειδική έκπτωση`, `Pa ulje speciale`, `Özel indirim yok`, `Fără reducere specială`],
	[`Student — φοιτητές`, `Student — studentë`, `Student — öğrenciler`, `Student — studenți`],
	[`iFlora NextGen — μη φοιτητές κάτω των 30`, `iFlora NextGen — jo-studentë nën 30`, `iFlora NextGen — 30 yaş altı öğrenci olmayanlar`, `iFlora NextGen — persoane sub 30 de ani care nu sunt studenți`],
	[`Μήνυμα`, `Mesazh`, `Mesaj`, `Mesaj`],
	[`Αποστολή Email`, `Dërgo email`, `Email gönder`, `Trimite email`],
	[`π.χ. Γιάννης Παπαδόπουλος`, `p.sh. Arben Hoxha`, `örn. Ahmet Yılmaz`, `ex. Ion Popescu`],
	[`π.χ. 6900000000`, `p.sh. 6900000000`, `örn. 6900000000`, `ex. 6900000000`],
	[`Το μήνυμά σας...`, `Mesazhi juaj...`, `Mesajınız...`, `Mesajul dvs...`],
	[`Πολιτική Δεδομένων | iFlora`, `Politika e të dhënave | iFlora`, `Veri Politikası | iFlora`, `Politica de date | iFlora`],
	[`ΠΟΛΙΤΙΚΗ ΔΕΔΟΜΕΝΩΝ`, `POLITIKA E TË DHËNAVE`, `VERİ POLİTİKASI`, `POLITICA DE DATE`],
	[`Πώς διαχειριζόμαστε τα προσωπικά δεδομένα που μας εμπιστεύεστε.`, `Si i menaxhojmë të dhënat personale që na besoni.`, `Bize emanet ettiğiniz kişisel verileri nasıl yönetiyoruz.`, `Cum gestionăm datele personale pe care ni le încredințați.`],
	[`Η παρούσα πολιτική περιγράφει, σε απλή γλώσσα, πώς το iFlora συλλέγει και επεξεργάζεται προσωπικά δεδομένα μέσω της ιστοσελίδας και της επικοινωνίας μαζί μας, σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΕΕ) 2016/679 και τον Ν. 4624/2019.`, `Kjo politikë përshkruan me gjuhë të thjeshtë si iFlora mbledh dhe përpunon të dhëna personale përmes faqes dhe komunikimit me ne, sipas GDPR (BE) 2016/679 dhe ligjit grek 4624/2019.`, `Bu politika, iFlora’nın web sitesi ve bizimle iletişim yoluyla kişisel verileri GDPR (AB) 2016/679 ve Yunan 4624/2019 sayılı Kanunu uyarınca nasıl topladığını ve işlediğini açık bir dille anlatır.`, `Această politică descrie, într-un limbaj simplu, cum iFlora colectează și prelucrează date personale prin site și prin comunicarea cu noi, conform GDPR (UE) 2016/679 și Legii elene 4624/2019.`],
	[`Τελευταία ενημέρωση: 5 Ιουλίου 2026`, `Përditësimi i fundit: 5 korrik 2026`, `Son güncelleme: 5 Temmuz 2026`, `Ultima actualizare: 5 iulie 2026`],
	[`1. Υπεύθυνος επεξεργασίας`, `1. Kontrolluesi i të dhënave`, `1. Veri sorumlusu`, `1. Operatorul de date`],
	[`Υπεύθυνος επεξεργασίας για τα δεδομένα που υποβάλλονται μέσω της ιστοσελίδας είναι το iFlora.`, `Kontrolluesi i të dhënave të dorëzuara përmes faqes është iFlora.`, `Web sitesi üzerinden iletilen verilerin sorumlusu iFlora’dır.`, `Operatorul datelor trimise prin site este iFlora.`],
	[`Email επικοινωνίας:`, `Email kontakti:`, `İletişim emaili:`, `Email de contact:`],
	[`Τηλέφωνο:`, `Telefon:`, `Telefon:`, `Telefon:`],
	[`Εφόσον η υπηρεσία παρέχεται από συγκεκριμένη εταιρική οντότητα, τα πλήρη εταιρικά στοιχεία, όπως επωνυμία, έδρα, ΑΦΜ και Γ.Ε.ΜΗ., πρέπει να προστεθούν πριν από τη δημοσίευση της τελικής πολιτικής.`, `Nëse shërbimi ofrohet nga një subjekt i caktuar ligjor, të dhënat e plota të kompanisë, si emri, selia, numri tatimor dhe regjistrimi, duhet të shtohen para publikimit të politikës finale.`, `Hizmet belirli bir tüzel kişi tarafından sunuluyorsa, unvan, merkez, vergi numarası ve ticaret sicil bilgileri gibi tam şirket bilgileri nihai politika yayımlanmadan önce eklenmelidir.`, `Dacă serviciul este furnizat de o entitate juridică specifică, datele complete ale companiei, precum denumirea, sediul, codul fiscal și registrul, trebuie adăugate înainte de publicarea politicii finale.`],
	[`2. Ποια δεδομένα συλλέγουμε`, `2. Çfarë të dhënash mbledhim`, `2. Hangi verileri topluyoruz`, `2. Ce date colectăm`],
	[`Συλλέγουμε μόνο τα δεδομένα που είναι απαραίτητα για να απαντήσουμε σε αιτήματα και να επικοινωνήσουμε μαζί σας.`, `Mbledhim vetëm të dhënat e nevojshme për t’iu përgjigjur kërkesave dhe për të komunikuar me ju.`, `Yalnızca taleplere yanıt vermek ve sizinle iletişim kurmak için gerekli verileri toplarız.`, `Colectăm doar datele necesare pentru a răspunde solicitărilor și a comunica cu dvs.`],
	[`Στοιχεία που συμπληρώνετε στη φόρμα επικοινωνίας, όπως ονοματεπώνυμο, email, τηλέφωνο, επιλεγμένο πλάνο και μήνυμα.`, `Të dhëna që plotësoni në formularin e kontaktit, si emër, email, telefon, plan i zgjedhur dhe mesazh.`, `İletişim formunda doldurduğunuz ad soyad, email, telefon, seçilen plan ve mesaj gibi bilgiler.`, `Date completate în formularul de contact, precum nume, email, telefon, plan ales și mesaj.`],
	[`Στοιχεία που αποστέλλονται όταν επικοινωνείτε μαζί μας μέσω email ή τηλεφώνου.`, `Të dhëna që dërgohen kur na kontaktoni me email ose telefon.`, `Bizimle email veya telefon yoluyla iletişime geçtiğinizde gönderilen bilgiler.`, `Date transmise atunci când ne contactați prin email sau telefon.`],
	[`Βασικά τεχνικά δεδομένα που ενδέχεται να καταγράφονται από τον πάροχο φιλοξενίας, όπως διεύθυνση IP, χρόνος πρόσβασης, τύπος browser και αρχεία καταγραφής ασφαλείας.`, `Të dhëna teknike bazë që mund të regjistrohen nga ofruesi i hosting, si adresa IP, koha e aksesit, lloji i browser-it dhe log-et e sigurisë.`, `Hosting sağlayıcısı tarafından kaydedilebilecek IP adresi, erişim zamanı, tarayıcı türü ve güvenlik kayıtları gibi temel teknik veriler.`, `Date tehnice de bază care pot fi înregistrate de furnizorul de găzduire, precum adresa IP, timpul accesării, tipul browserului și jurnale de securitate.`],
	[`3. Γιατί επεξεργαζόμαστε τα δεδομένα`, `3. Pse i përpunojmë të dhënat`, `3. Verileri neden işliyoruz`, `3. De ce prelucrăm datele`],
	[`Για να απαντήσουμε στο αίτημα ή στο μήνυμά σας.`, `Për t’iu përgjigjur kërkesës ose mesazhit tuaj.`, `Talebinize veya mesajınıza yanıt vermek için.`, `Pentru a răspunde solicitării sau mesajului dvs.`],
	[`Για να οργανώσουμε παρουσίαση, συζήτηση, προσφορά ή τεχνική διερεύνηση.`, `Për të organizuar prezantim, bisedë, ofertë ose analizë teknike.`, `Demo, görüşme, teklif veya teknik değerlendirme düzenlemek için.`, `Pentru a organiza o prezentare, discuție, ofertă sau analiză tehnică.`],
	[`Για να διαχειριστούμε προ-συμβατική ή συμβατική επικοινωνία.`, `Për të menaxhuar komunikim para-kontraktual ose kontraktual.`, `Sözleşme öncesi veya sözleşmesel iletişimi yönetmek için.`, `Pentru a gestiona comunicarea precontractuală sau contractuală.`],
	[`Για να προστατεύσουμε την ασφάλεια και τη σωστή λειτουργία της ιστοσελίδας.`, `Për të mbrojtur sigurinë dhe funksionimin e duhur të faqes.`, `Web sitesinin güvenliğini ve doğru çalışmasını korumak için.`, `Pentru a proteja securitatea și buna funcționare a site-ului.`],
	[`Για να συμμορφωθούμε με νόμιμες υποχρεώσεις, όπου αυτό απαιτείται.`, `Për të përmbushur detyrime ligjore, kur kërkohet.`, `Gerekli olduğunda yasal yükümlülüklere uymak için.`, `Pentru a respecta obligații legale, acolo unde este necesar.`],
	[`4. Νομικές βάσεις επεξεργασίας`, `4. Bazat ligjore të përpunimit`, `4. İşlemenin hukuki dayanakları`, `4. Temeiuri legale ale prelucrării`],
	[`Ανάλογα με την περίπτωση, η επεξεργασία βασίζεται:`, `Në varësi të rastit, përpunimi bazohet në:`, `Duruma göre işleme şu dayanaklara dayanır:`, `În funcție de caz, prelucrarea se bazează pe:`],
	[`Στη συγκατάθεσή σας, όταν μας στέλνετε μήνυμα ή ζητάτε να επικοινωνήσουμε μαζί σας.`, `Pëlqimin tuaj, kur na dërgoni mesazh ose kërkoni të kontaktojmë me ju.`, `Bize mesaj gönderdiğinizde veya sizinle iletişime geçmemizi istediğinizde rızanıza.`, `Consimțământul dvs., atunci când ne trimiteți un mesaj sau solicitați să vă contactăm.`],
	[`Στη λήψη μέτρων πριν από τη σύναψη σύμβασης, όταν ζητάτε προσφορά ή ενημέρωση για υπηρεσίες.`, `Marrjen e masave para lidhjes së kontratës, kur kërkoni ofertë ose informacion për shërbime.`, `Hizmetler için teklif veya bilgi istediğinizde sözleşme öncesi adımlara.`, `Luarea de măsuri înainte de încheierea unui contract, atunci când solicitați ofertă sau informații despre servicii.`],
	[`Στο έννομο συμφέρον μας να απαντούμε σε αιτήματα, να προστατεύουμε την ιστοσελίδα και να διατηρούμε βασικό ιστορικό επικοινωνίας.`, `Interesin tonë legjitim për t’iu përgjigjur kërkesave, për të mbrojtur faqen dhe për të mbajtur histori bazë komunikimi.`, `Taleplere yanıt verme, siteyi koruma ve temel iletişim geçmişi tutma yönündeki meşru menfaatimize.`, `Interesul nostru legitim de a răspunde solicitărilor, de a proteja site-ul și de a păstra un istoric de bază al comunicării.`],
	[`Σε νόμιμη υποχρέωση, όταν η διατήρηση ή κοινοποίηση δεδομένων απαιτείται από την ισχύουσα νομοθεσία.`, `Detyrim ligjor, kur ruajtja ose zbulimi i të dhënave kërkohet nga ligji në fuqi.`, `Verilerin saklanması veya paylaşılması yürürlükteki mevzuat tarafından istendiğinde yasal yükümlülüğe.`, `O obligație legală, atunci când păstrarea sau divulgarea datelor este cerută de legislația aplicabilă.`],
	[`5. Σε ποιους κοινοποιούνται τα δεδομένα`, `5. Kujt i komunikohen të dhënat`, `5. Veriler kimlerle paylaşılır`, `5. Cui sunt comunicate datele`],
	[`Δεν πουλάμε προσωπικά δεδομένα. Πρόσβαση μπορεί να έχουν μόνο τα απολύτως απαραίτητα πρόσωπα ή συνεργάτες που υποστηρίζουν τη λειτουργία της ιστοσελίδας, της πιστοποίησης χρηστών, της φιλοξενίας, της επικοινωνίας, της ασφάλειας και των συνδεδεμένων υπηρεσιών, όπως πάροχοι φιλοξενίας, Supabase, πάροχοι email, Weather.com, OpenAI εφόσον είναι ενεργό το AI dashboard, Telegram εφόσον είναι ενεργές ειδοποιήσεις, τεχνικοί συνεργάτες και νόμιμοι σύμβουλοι όταν απαιτείται.`, `Nuk shesim të dhëna personale. Akses mund të kenë vetëm personat ose partnerët absolutisht të nevojshëm që mbështesin funksionimin e faqes, autentikimin, hosting-un, komunikimin, sigurinë dhe shërbimet e lidhura, si ofrues hosting, Supabase, ofrues email, Weather.com, OpenAI nëse AI dashboard është aktiv, Telegram nëse njoftimet janë aktive, partnerë teknikë dhe këshilltarë ligjorë kur kërkohet.`, `Kişisel verileri satmayız. Yalnızca web sitesinin, kullanıcı doğrulamanın, barındırmanın, iletişimin, güvenliğin ve bağlı hizmetlerin çalışmasını destekleyen zorunlu kişi veya ortaklar erişebilir; örneğin hosting sağlayıcıları, Supabase, email sağlayıcıları, AI dashboard aktifse OpenAI, bildirimler aktifse Telegram, teknik ortaklar ve gerektiğinde hukuk danışmanları.`, `Nu vindem date personale. Acces pot avea doar persoanele sau partenerii strict necesari care susțin funcționarea site-ului, autentificarea utilizatorilor, găzduirea, comunicarea, securitatea și serviciile conectate, precum furnizori de găzduire, Supabase, furnizori email, Weather.com, OpenAI dacă dashboard-ul AI este activ, Telegram dacă alertele sunt active, parteneri tehnici și consilieri juridici când este necesar.`],
	[`Η ιστοσελίδα φορτώνει γραμματοσειρές από την υπηρεσία Google Fonts. Η χρήση εξωτερικών παρόχων μπορεί να συνεπάγεται τεχνική σύνδεση του browser σας με τους αντίστοιχους παρόχους.`, `Faqja ngarkon fonte nga Google Fonts. Përdorimi i ofruesve të jashtëm mund të nënkuptojë lidhje teknike të browser-it tuaj me ofruesit përkatës.`, `Web sitesi Google Fonts hizmetinden yazı tipleri yükler. Harici sağlayıcıların kullanımı tarayıcınızın ilgili sağlayıcılarla teknik bağlantı kurmasını içerebilir.`, `Site-ul încarcă fonturi din serviciul Google Fonts. Utilizarea furnizorilor externi poate implica o conexiune tehnică a browserului dvs. cu furnizorii respectivi.`],
	[`6. Χρόνος διατήρησης`, `6. Koha e ruajtjes`, `6. Saklama süresi`, `6. Durata păstrării`],
	[`Διατηρούμε τα δεδομένα μόνο για όσο είναι απαραίτητο για τον σκοπό για τον οποίο συλλέχθηκαν. Ενδεικτικά, μηνύματα επικοινωνίας και αιτήματα ενδιαφέροντος μπορούν να διατηρούνται για έως 24 μήνες, εκτός αν απαιτείται μεγαλύτερη διατήρηση για νόμιμους, λογιστικούς ή συμβατικούς λόγους.`, `I ruajmë të dhënat vetëm për aq kohë sa është e nevojshme për qëllimin për të cilin u mblodhën. Për shembull, mesazhet dhe kërkesat e interesit mund të ruhen deri në 24 muaj, përveç nëse kërkohet ruajtje më e gjatë për arsye ligjore, kontabël ose kontraktuale.`, `Verileri yalnızca toplandıkları amaç için gerekli olduğu sürece saklarız. Örneğin iletişim mesajları ve ilgi talepleri, yasal, muhasebesel veya sözleşmesel nedenlerle daha uzun saklama gerekmedikçe 24 aya kadar saklanabilir.`, `Păstrăm datele doar atât timp cât este necesar pentru scopul pentru care au fost colectate. De exemplu, mesajele de contact și solicitările de interes pot fi păstrate până la 24 de luni, cu excepția cazului în care este necesară o păstrare mai lungă din motive legale, contabile sau contractuale.`],
	[`7. Cookies και τεχνολογίες παρακολούθησης`, `7. Cookies dhe teknologji gjurmimi`, `7. Cookies ve izleme teknolojileri`, `7. Cookies și tehnologii de urmărire`],
	[`Με βάση την τρέχουσα λειτουργία της ιστοσελίδας, δεν χρησιμοποιούμε analytics ή διαφημιστικά cookies. Αν προστεθούν στο μέλλον μη απαραίτητα cookies ή εργαλεία παρακολούθησης, η πολιτική θα ενημερωθεί και θα ζητείται συγκατάθεση όπου απαιτείται.`, `Bazuar në funksionimin aktual të faqes, nuk përdorim analytics ose cookies reklamuese. Nëse në të ardhmen shtohen cookies jo të domosdoshme ose mjete gjurmimi, politika do të përditësohet dhe do të kërkohet pëlqim ku nevojitet.`, `Web sitesinin mevcut işleyişine göre analytics veya reklam cookies kullanmıyoruz. Gelecekte zorunlu olmayan cookies veya izleme araçları eklenirse politika güncellenecek ve gerektiğinde onay istenecektir.`, `Pe baza funcționării actuale a site-ului, nu folosim analytics sau cookies publicitare. Dacă pe viitor vor fi adăugate cookies neesențiale sau instrumente de urmărire, politica va fi actualizată și se va solicita consimțământ unde este necesar.`],
	[`8. Τα δικαιώματά σας`, `8. Të drejtat tuaja`, `8. Haklarınız`, `8. Drepturile dvs.`],
	[`Σύμφωνα με τον ΓΚΠΔ, έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας, εναντίωσης και ανάκλησης συγκατάθεσης όπου η επεξεργασία βασίζεται σε συγκατάθεση.`, `Sipas GDPR, keni të drejtë aksesi, korrigjimi, fshirjeje, kufizimi të përpunimit, portabiliteti, kundërshtimi dhe tërheqjeje të pëlqimit kur përpunimi bazohet në pëlqim.`, `GDPR uyarınca erişim, düzeltme, silme, işlemeyi kısıtlama, taşınabilirlik, itiraz ve işleme rızaya dayanıyorsa rızayı geri çekme hakkına sahipsiniz.`, `Conform GDPR, aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate, opoziție și retragere a consimțământului atunci când prelucrarea se bazează pe consimțământ.`],
	[`Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε στο`, `Për të ushtruar të drejtat tuaja, kontaktoni në`, `Haklarınızı kullanmak için şu adresten iletişime geçin`, `Pentru a vă exercita drepturile, contactați-ne la`],
	[`. Έχετε επίσης δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.`, `. Keni gjithashtu të drejtë të paraqisni ankesë pranë Autoritetit Grek për Mbrojtjen e të Dhënave Personale.`, `. Ayrıca Yunan Kişisel Verileri Koruma Kurumu’na şikayette bulunma hakkınız vardır.`, `. Aveți, de asemenea, dreptul de a depune o plângere la Autoritatea Elenă pentru Protecția Datelor cu Caracter Personal.`],
	[`9. Ασφάλεια`, `9. Siguria`, `9. Güvenlik`, `9. Securitate`],
	[`Λαμβάνουμε εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων από μη εξουσιοδοτημένη πρόσβαση, απώλεια, αλλοίωση ή κοινοποίηση. Τα μέτρα περιλαμβάνουν χρήση HTTPS, περιορισμό πρόσβασης, διαχωρισμό δημόσιων και ιδιωτικών αρχείων εφαρμογής, ασφαλή διαχείριση μυστικών, καταγραφή συμβάντων ασφαλείας και ψευδωνυμοποίηση τεχνικών αναγνωριστικών στα αρχεία καταγραφής όπου είναι εφικτό.`, `Marrim masa të arsyeshme teknike dhe organizative për mbrojtjen e të dhënave nga aksesi i paautorizuar, humbja, ndryshimi ose zbulimi. Masat përfshijnë përdorimin e HTTPS, kufizim aksesi, ndarje të skedarëve publikë dhe privatë të aplikacionit, menaxhim të sigurt të sekreteve, regjistrim ngjarjesh sigurie dhe pseudonimizim të identifikuesve teknikë në log-e kur është e mundur.`, `Verileri yetkisiz erişim, kayıp, değişiklik veya açıklamaya karşı korumak için makul teknik ve organizasyonel önlemler alırız. Önlemler HTTPS kullanımı, erişim kısıtlaması, uygulamanın genel ve özel dosyalarının ayrılması, sırların güvenli yönetimi, güvenlik olaylarının kaydı ve mümkün olduğunda teknik tanımlayıcıların kayıtlarda takma adlandırılmasını içerir.`, `Luăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor împotriva accesului neautorizat, pierderii, modificării sau divulgării. Măsurile includ utilizarea HTTPS, limitarea accesului, separarea fișierelor publice și private ale aplicației, gestionarea sigură a secretelor, jurnalizarea incidentelor de securitate și pseudonimizarea identificatorilor tehnici în jurnale acolo unde este posibil.`],
	[`Τα αρχεία καταγραφής ασφαλείας χρησιμοποιούνται για προστασία από κατάχρηση, μη εξουσιοδοτημένη πρόσβαση και τεχνικά σφάλματα. Δεν καταγράφουμε σκόπιμα κωδικούς, tokens ή μυστικά API. Κανένα ηλεκτρονικό σύστημα δεν μπορεί να θεωρηθεί απόλυτα ασφαλές, γι' αυτό περιορίζουμε την επεξεργασία στα απαραίτητα δεδομένα.`, `Log-et e sigurisë përdoren për mbrojtje nga abuzimi, aksesi i paautorizuar dhe gabimet teknike. Nuk regjistrojmë qëllimisht fjalëkalime, tokens ose sekrete API. Asnjë sistem elektronik nuk mund të konsiderohet plotësisht i sigurt, prandaj kufizojmë përpunimin te të dhënat e nevojshme.`, `Güvenlik kayıtları kötüye kullanım, yetkisiz erişim ve teknik hatalara karşı koruma için kullanılır. Parolaları, token’ları veya API sırlarını bilerek kaydetmeyiz. Hiçbir elektronik sistem tamamen güvenli kabul edilemez; bu nedenle işlemeyi gerekli verilerle sınırlandırırız.`, `Jurnalele de securitate sunt folosite pentru protecție împotriva abuzului, accesului neautorizat și erorilor tehnice. Nu înregistrăm intenționat parole, tokenuri sau secrete API. Niciun sistem electronic nu poate fi considerat absolut sigur, de aceea limităm prelucrarea la datele necesare.`],
	[`10. Νομική επιβεβαίωση πριν από τη δημοσίευση`, `10. Konfirmim ligjor para publikimit`, `10. Yayından önce hukuki doğrulama`, `10. Confirmare juridică înainte de publicare`],
	[`Η παρούσα πολιτική είναι λειτουργικό κείμενο διαφάνειας και πρέπει να επιβεβαιωθεί από νομικό σύμβουλο πριν από την τελική παραγωγική δημοσίευση, ιδίως ως προς την πλήρη ταυτότητα του υπευθύνου επεξεργασίας, τους εκτελούντες την επεξεργασία, τις διεθνείς διαβιβάσεις, τους χρόνους διατήρησης και τις συμβάσεις επεξεργασίας.`, `Kjo politikë është tekst funksional transparence dhe duhet të konfirmohet nga këshilltar ligjor para publikimit përfundimtar, veçanërisht për identitetin e plotë të kontrolluesit, përpunuesit, transferimet ndërkombëtare, kohët e ruajtjes dhe kontratat e përpunimit.`, `Bu politika işlevsel bir şeffaflık metnidir ve nihai yayından önce özellikle veri sorumlusunun tam kimliği, işleyenler, uluslararası aktarımlar, saklama süreleri ve işleme sözleşmeleri açısından hukuk danışmanı tarafından doğrulanmalıdır.`, `Această politică este un text funcțional de transparență și trebuie confirmată de un consilier juridic înainte de publicarea finală, în special privind identitatea completă a operatorului, persoanele împuternicite, transferurile internaționale, perioadele de păstrare și contractele de prelucrare.`],
	[`11. Αλλαγές στην πολιτική`, `11. Ndryshime në politikë`, `11. Politikadaki değişiklikler`, `11. Modificări ale politicii`],
	[`Η παρούσα πολιτική μπορεί να ενημερώνεται όταν αλλάζει η λειτουργία της ιστοσελίδας, οι υπηρεσίες ή οι νομικές υποχρεώσεις μας. Η πιο πρόσφατη έκδοση θα είναι πάντα διαθέσιμη σε αυτή τη σελίδα.`, `Kjo politikë mund të përditësohet kur ndryshon funksionimi i faqes, shërbimet ose detyrimet tona ligjore. Versioni më i fundit do të jetë gjithmonë i disponueshëm në këtë faqe.`, `Bu politika web sitesinin işleyişi, hizmetler veya yasal yükümlülüklerimiz değiştiğinde güncellenebilir. En güncel sürüm her zaman bu sayfada mevcut olacaktır.`, `Această politică poate fi actualizată atunci când se schimbă funcționarea site-ului, serviciile sau obligațiile noastre legale. Cea mai recentă versiune va fi întotdeauna disponibilă pe această pagină.`]
];

IFLORA_TRANSLATION_ROWS.forEach(([source, sq, tr, ro]) => {
	IFLORA_TRANSLATIONS.sq[source] = sq;
	IFLORA_TRANSLATIONS.tr[source] = tr;
	IFLORA_TRANSLATIONS.ro[source] = ro;
});

const IFLORA_EXTRA_TRANSLATION_ROWS = [
	[`iFlora | Smart Agriculture & Greenhouse IoT`, `iFlora | Slimme landbouw en kas-IoT`, `iFlora | Agriculture intelligente et IoT pour serres`, `iFlora | Agricultura inteligente e IoT para invernaderos`, `iFlora | Agricoltura intelligente e IoT per serre`],
	[`Ευφυής διαχείριση θερμοκηπίων και αγροτικών εγκαταστάσεων με αισθητήρες, αυτοματισμούς, AI insights και απομακρυσμένο έλεγχο.`, `Slim beheer voor kassen en agrarische installaties met sensoren, automatiseringen, AI insights en bediening op afstand.`, `Gestion intelligente des serres et installations agricoles avec capteurs, automatisations, AI insights et contrôle à distance.`, `Gestión inteligente de invernaderos e instalaciones agrícolas con sensores, automatizaciones, AI insights y control remoto.`, `Gestione intelligente di serre e impianti agricoli con sensori, automazioni, AI insights e controllo da remoto.`],
	[`Επικοινωνία | iFlora`, `Contact | iFlora`, `Contact | iFlora`, `Contacto | iFlora`, `Contatto | iFlora`],
	[`← Επιστροφή`, `← Terug`, `← Retour`, `← Volver`, `← Indietro`],
	[`&larr; Επιστροφή`, `← Terug`, `← Retour`, `← Volver`, `← Indietro`],
	[`π.χ. giannis@example.com`, `bijv. jan@example.com`, `ex. jean@example.com`, `ej. juan@example.com`, `es. gianni@example.com`],
	[`Πολιτική επεξεργασίας προσωπικών δεδομένων για την ιστοσελίδα iFlora, σύμφωνα με τον ΓΚΠΔ και την ελληνική νομοθεσία.`, `Beleid voor de verwerking van persoonsgegevens voor de iFlora-website, volgens de AVG en de Griekse wetgeving.`, `Politique de traitement des données personnelles pour le site iFlora, conformément au RGPD et à la législation grecque.`, `Política de tratamiento de datos personales para el sitio web iFlora, conforme al RGPD y la legislación griega.`, `Informativa sul trattamento dei dati personali per il sito iFlora, secondo il GDPR e la normativa greca.`],
	[`Primary navigation`, `Hoofdnavigatie`, `Navigation principale`, `Navegación principal`, `Navigazione principale`],
	[`Language selector`, `Taalkeuze`, `Sélecteur de langue`, `Selector de idioma`, `Selettore lingua`],
	[`Language`, `Taal`, `Langue`, `Idioma`, `Lingua`],
	[`Lang`, `Taal`, `Langue`, `Idioma`, `Lingua`],
	[`Άνοιγμα μενού`, `Menu openen`, `Ouvrir le menu`, `Abrir menú`, `Apri menu`],
	[`Κλείσιμο μενού`, `Menu sluiten`, `Fermer le menu`, `Cerrar menú`, `Chiudi menu`],
	[`iFlora home`, `iFlora startpagina`, `Accueil iFlora`, `Inicio de iFlora`, `Home iFlora`],
	[`Εφαρμογές`, `Toepassingen`, `Applications`, `Aplicaciones`, `Applicazioni`],
	[`Τεχνολογία`, `Technologie`, `Technologie`, `Tecnología`, `Tecnologia`],
	[`Αποτελέσματα`, `Resultaten`, `Résultats`, `Resultados`, `Risultati`],
	[`Πλάνα`, `Plannen`, `Offres`, `Planes`, `Piani`],
	[`Σύνδεση`, `Inloggen`, `Connexion`, `Iniciar sesión`, `Accesso`],
	[`Επικοινωνία`, `Contact`, `Contact`, `Contacto`, `Contatto`],
	[`SMART FARMING & GREENHOUSE IOT`, `SLIMME LANDBOUW & KAS-IOT`, `AGRICULTURE INTELLIGENTE & IOT POUR SERRES`, `AGRICULTURA INTELIGENTE & IOT PARA INVERNADEROS`, `AGRICOLTURA INTELLIGENTE & IOT PER SERRE`],
	[`Συνδέστε κάθε αισθητήρα, συσκευή και απόφαση της καλλιέργειας σε ένα έξυπνο σύστημα.`, `Verbind elke sensor, elk apparaat en elke teeltbeslissing in één slim systeem.`, `Connectez chaque capteur, appareil et décision de culture dans un système intelligent.`, `Conecta cada sensor, dispositivo y decisión del cultivo en un sistema inteligente.`, `Collega ogni sensore, dispositivo e decisione colturale in un unico sistema intelligente.`],
	[`Το iFlora μετατρέπει`, `iFlora zet`, `iFlora transforme`, `iFlora convierte`, `iFlora trasforma`],
	[`δεδομένα πεδίου`, `veldgegevens`, `les données du terrain`, `los datos de campo`, `i dati dal campo`],
	[`, μικροκλίματος και εξοπλισμού σε`, `, microklimaat en apparatuur om in`, `, du microclimat et des équipements en`, `, del microclima y del equipo en`, `, del microclima e delle attrezzature in`],
	[`άμεσες ενέργειες`, `directe acties`, `actions immédiates`, `acciones inmediatas`, `azioni immediate`],
	[`, ώστε να μειώνετε σπατάλες, να προλαβαίνετε απώλειες και να`, `, zodat u verspilling vermindert, verliezen voorkomt en`, `, afin de réduire le gaspillage, prévenir les pertes et`, `, para reducir desperdicios, evitar pérdidas y`, `, così da ridurre gli sprechi, prevenire perdite e`],
	[`ελέγχετε την παραγωγή από οπουδήποτε`, `de productie overal beheert`, `contrôler la production où que vous soyez`, `controlar la producción desde cualquier lugar`, `controllare la produzione da ovunque`],
	[`Ζητήστε επίδειξη`, `Vraag een demo aan`, `Demander une démonstration`, `Solicitar una demo`, `Richiedi una demo`],
	[`Δείτε τις εφαρμογές`, `Bekijk toepassingen`, `Voir les applications`, `Ver aplicaciones`, `Vedi le applicazioni`],
	[`Βασικά οφέλη`, `Belangrijkste voordelen`, `Bénéfices clés`, `Beneficios clave`, `Vantaggi principali`],
	[`Αισθητήρες & αυτοματισμοί`, `Sensoren & automatiseringen`, `Capteurs & automatisations`, `Sensores y automatizaciones`, `Sensori e automazioni`],
	[`AI insights σε πραγματικό χρόνο`, `AI insights in realtime`, `AI insights en temps réel`, `AI insights en tiempo real`, `AI insights in tempo reale`],
	[`Υποστήριξη υπάρχοντος hardware`, `Ondersteuning van bestaande hardware`, `Prise en charge du matériel existant`, `Soporte para hardware existente`, `Supporto dell’hardware esistente`],
	[`ΑΠΟ ΤΗΝ ΠΑΡΑΚΟΛΟΥΘΗΣΗ ΣΤΗ ΔΡΑΣΗ`, `VAN MONITORING NAAR ACTIE`, `DE LA SURVEILLANCE À L’ACTION`, `DEL MONITOREO A LA ACCIÓN`, `DAL MONITORAGGIO ALL’AZIONE`],
	[`Η γεωργία δεν χρειάζεται περισσότερα dashboards. Χρειάζεται καθαρό σήμα για το τι πρέπει να γίνει τώρα.`, `Landbouw heeft geen extra dashboards nodig. Het heeft een duidelijk signaal nodig voor wat er nu moet gebeuren.`, `L’agriculture n’a pas besoin de plus de dashboards. Elle a besoin d’un signal clair sur ce qu’il faut faire maintenant.`, `La agricultura no necesita más dashboards. Necesita una señal clara sobre qué hacer ahora.`, `L’agricoltura non ha bisogno di altri dashboard. Ha bisogno di un segnale chiaro su cosa fare ora.`],
	[`Από το θερμοκήπιο μέχρι το χωράφι, το iFlora συγκεντρώνει δεδομένα, τα αναλύει και τα μετατρέπει σε`, `Van kas tot veld verzamelt iFlora gegevens, analyseert ze en zet ze om in`, `De la serre au champ, iFlora collecte les données, les analyse et les transforme en`, `Desde el invernadero hasta el campo, iFlora reúne datos, los analiza y los convierte en`, `Dalla serra al campo, iFlora raccoglie dati, li analizza e li trasforma in`],
	[`ειδοποιήσεις`, `meldingen`, `alertes`, `alertas`, `avvisi`],
	[`αυτοματισμούς`, `automatiseringen`, `automatisations`, `automatizaciones`, `automazioni`],
	[`και αποφάσεις που`, `en beslissingen die`, `et décisions qui`, `y decisiones que`, `e decisioni che`],
	[`προστατεύουν την παραγωγή`, `de productie beschermen`, `protègent la production`, `protegen la producción`, `proteggono la produzione`],
	[`IOT APPLICATIONS FOR AGRICULTURE`, `IOT-TOEPASSINGEN VOOR LANDBOUW`, `APPLICATIONS IOT POUR L’AGRICULTURE`, `APLICACIONES IOT PARA AGRICULTURA`, `APPLICAZIONI IOT PER L’AGRICOLTURA`],
	[`Εφαρμογές που καλύπτουν την πραγματική καθημερινότητα της παραγωγής`, `Toepassingen voor de echte dagelijkse praktijk van productie`, `Des applications qui couvrent le quotidien réel de la production`, `Aplicaciones que cubren la realidad diaria de la producción`, `Applicazioni che coprono la realtà quotidiana della produzione`],
	[`Precision farming`, `Precisielandbouw`, `Agriculture de précision`, `Agricultura de precisión`, `Agricoltura di precisione`],
	[`Συνδυάστε μετρήσεις μικροκλίματος, εδάφους και παραγωγής για να ποτίζετε, αερίζετε και`, `Combineer metingen van microklimaat, bodem en productie om te irrigeren, ventileren en`, `Combinez les mesures de microclimat, de sol et de production pour irriguer, ventiler et`, `Combina mediciones de microclima, suelo y producción para regar, ventilar e`, `Combina misurazioni di microclima, suolo e produzione per irrigare, ventilare e`],
	[`παρεμβαίνετε με ακρίβεια`, `nauwkeurig in te grijpen`, `intervenir avec précision`, `intervenir con precisión`, `intervenire con precisione`],
	[`Πώς λειτουργεί`, `Hoe het werkt`, `Comment ça marche`, `Cómo funciona`, `Come funziona`],
	[`Έξυπνο θερμοκήπιο`, `Slimme kas`, `Serre intelligente`, `Invernadero inteligente`, `Serra intelligente`],
	[`Κρατήστε`, `Houd`, `Gardez`, `Mantén`, `Mantieni`],
	[`σταθερές συνθήκες`, `stabiele omstandigheden`, `des conditions stables`, `condiciones estables`, `condizioni stabili`],
	[`με ειδοποιήσεις και αυτοματισμούς για θερμοκρασία, υγρασία, σκίαση, αερισμό και άρδευση.`, `met meldingen en automatiseringen voor temperatuur, vochtigheid, schaduw, ventilatie en irrigatie.`, `avec des alertes et automatisations pour la température, l’humidité, l’ombrage, la ventilation et l’irrigation.`, `con alertas y automatizaciones para temperatura, humedad, sombreado, ventilación y riego.`, `con avvisi e automazioni per temperatura, umidità, ombreggiamento, aerazione e irrigazione.`],
	[`Δείτε λύσεις`, `Bekijk oplossingen`, `Voir les solutions`, `Ver soluciones`, `Vedi le soluzioni`],
	[`Smart irrigation`, `Slimme irrigatie`, `Irrigation intelligente`, `Riego inteligente`, `Irrigazione intelligente`],
	[`Μειώστε την άσκοπη κατανάλωση νερού`, `Verminder onnodig waterverbruik`, `Réduisez la consommation inutile d’eau`, `Reduce el consumo innecesario de agua`, `Riduci il consumo inutile di acqua`],
	[`με παρακολούθηση υγρασίας, πρόβλεψη αναγκών και κανόνες άρδευσης ανά ζώνη.`, `met vochtmonitoring, behoefteprognoses en irrigatieregels per zone.`, `grâce au suivi de l’humidité, à la prévision des besoins et aux règles d’irrigation par zone.`, `con seguimiento de humedad, previsión de necesidades y reglas de riego por zona.`, `con monitoraggio dell’umidità, previsione dei fabbisogni e regole di irrigazione per zona.`],
	[`Συχνές ερωτήσεις`, `Veelgestelde vragen`, `Questions fréquentes`, `Preguntas frecuentes`, `Domande frequenti`],
	[`Remote sensing`, `Remote sensing`, `Télédétection`, `Teledetección`, `Telerilevamento`],
	[`Παρακολουθήστε απομακρυσμένα`, `Monitor op afstand`, `Surveillez à distance`, `Supervisa a distancia`, `Monitora da remoto`],
	[`εγκαταστάσεις, συσκευές και κρίσιμες αλλαγές χωρίς να βρίσκεστε συνεχώς στο σημείο.`, `installaties, apparaten en kritieke veranderingen zonder voortdurend ter plaatse te zijn.`, `les installations, appareils et changements critiques sans être constamment sur place.`, `instalaciones, dispositivos y cambios críticos sin estar siempre en el lugar.`, `impianti, dispositivi e cambiamenti critici senza essere sempre sul posto.`],
	[`Μιλήστε μαζί μας`, `Praat met ons`, `Parlez-nous`, `Habla con nosotros`, `Parla con noi`],
	[`IOT ENABLEMENT`, `IOT-ENABLEMENT`, `ACTIVATION IOT`, `HABILITACIÓN IOT`, `ABILITAZIONE IOT`],
	[`Η τεχνολογία πίσω από μια καλλιέργεια που αντιδρά πιο γρήγορα.`, `De technologie achter een teelt die sneller reageert.`, `La technologie derrière une culture qui réagit plus vite.`, `La tecnología detrás de un cultivo que responde más rápido.`, `La tecnologia dietro una coltivazione che reagisce più rapidamente.`],
	[`Το iFlora λειτουργεί σαν`, `iFlora werkt als`, `iFlora agit comme`, `iFlora funciona como`, `iFlora funziona come`],
	[`επίπεδο ενοποίησης`, `integratielaag`, `couche d’intégration`, `capa de integración`, `livello di integrazione`],
	[`: συνδέει αισθητήρες, υπάρχον εξοπλισμό, gateways, αυτοματισμούς και εφαρμογές σε`, `: het verbindt sensoren, bestaande apparatuur, gateways, automatiseringen en applicaties in`, `: il connecte capteurs, équipements existants, gateways, automatisations et applications dans`, `: conecta sensores, equipos existentes, gateways, automatizaciones y aplicaciones en`, `: collega sensori, attrezzature esistenti, gateway, automazioni e applicazioni in`],
	[`ένα ενιαίο περιβάλλον`, `één uniforme omgeving`, `un environnement unique`, `un entorno unificado`, `un ambiente unico`],
	[`που οι παραγωγοί μπορούν να εμπιστευτούν.`, `dat telers kunnen vertrouwen.`, `auquel les producteurs peuvent faire confiance.`, `en el que los productores pueden confiar.`, `di cui i produttori possono fidarsi.`],
	[`Αισθητήρες`, `Sensoren`, `Capteurs`, `Sensores`, `Sensori`],
	[`Συλλογή δεδομένων`, `Gegevensverzameling`, `Collecte de données`, `Recopilación de datos`, `Raccolta dati`],
	[`για περιβάλλον, έδαφος, νερό και συνθήκες καλλιέργειας.`, `voor omgeving, bodem, water en teeltomstandigheden.`, `sur l’environnement, le sol, l’eau et les conditions de culture.`, `sobre ambiente, suelo, agua y condiciones de cultivo.`, `su ambiente, suolo, acqua e condizioni colturali.`],
	[`Gateways & συνδεσιμότητα`, `Gateways & connectiviteit`, `Gateways & connectivité`, `Gateways y conectividad`, `Gateway e connettività`],
	[`Σταθερή ροή δεδομένων`, `Stabiele gegevensstroom`, `Flux de données stable`, `Flujo de datos estable`, `Flusso dati stabile`],
	[`από το πεδίο στο dashboard, ακόμη και σε απαιτητικά περιβάλλοντα.`, `van het veld naar het dashboard, zelfs in veeleisende omgevingen.`, `du terrain au dashboard, même dans des environnements exigeants.`, `del campo al dashboard, incluso en entornos exigentes.`, `dal campo al dashboard, anche in ambienti complessi.`],
	[`AI και αυτοματισμοί`, `AI en automatiseringen`, `IA et automatisations`, `IA y automatizaciones`, `IA e automazioni`],
	[`Ειδοποιήσεις, κανόνες και insights που`, `Meldingen, regels en insights die`, `Alertes, règles et insights qui`, `Alertas, reglas e insights que`, `Avvisi, regole e insights che`],
	[`μειώνουν τη χειροκίνητη παρακολούθηση`, `handmatige monitoring verminderen`, `réduisent le suivi manuel`, `reducen el monitoreo manual`, `riducono il monitoraggio manuale`],
	[`WHY IT MATTERS`, `WAAROM HET BELANGRIJK IS`, `POURQUOI C’EST IMPORTANT`, `POR QUÉ IMPORTA`, `PERCHÉ È IMPORTANTE`],
	[`Από το πρώτο σήμα μέχρι την απόφαση, όλα γίνονται πιο καθαρά.`, `Van het eerste signaal tot de beslissing wordt alles duidelijker.`, `Du premier signal à la décision, tout devient plus clair.`, `Desde la primera señal hasta la decisión, todo se vuelve más claro.`, `Dal primo segnale alla decisione, tutto diventa più chiaro.`],
	[`παρακολούθηση κρίσιμων συνθηκών`, `monitoring van kritieke omstandigheden`, `suivi des conditions critiques`, `monitoreo de condiciones críticas`, `monitoraggio delle condizioni critiche`],
	[`κέντρο ελέγχου για αισθητήρες και συσκευές`, `controlecentrum voor sensoren en apparaten`, `centre de contrôle pour capteurs et appareils`, `centro de control para sensores y dispositivos`, `centro di controllo per sensori e dispositivi`],
	[`insights για πρόβλεψη τάσεων και άμεση αντίδραση`, `insights voor trendvoorspelling en snelle reactie`, `insights pour anticiper les tendances et réagir rapidement`, `insights para prever tendencias y reaccionar rápido`, `insights per prevedere tendenze e reagire rapidamente`],
	[`CONNECTED OPERATIONS`, `VERBONDEN OPERATIES`, `OPÉRATIONS CONNECTÉES`, `OPERACIONES CONECTADAS`, `OPERAZIONI CONNESSE`],
	[`Φτιαγμένο για θερμοκήπια, χωράφια και εγκαταστάσεις που μεγαλώνουν.`, `Gemaakt voor kassen, velden en installaties die groeien.`, `Conçu pour les serres, champs et installations qui grandissent.`, `Creado para invernaderos, campos e instalaciones que crecen.`, `Creato per serre, campi e impianti che crescono.`],
	[`Εγκατάσταση αισθητήρων & IoT υποδομής`, `Installatie van sensoren & IoT-infrastructuur`, `Installation de capteurs & infrastructure IoT`, `Instalación de sensores e infraestructura IoT`, `Installazione di sensori e infrastruttura IoT`],
	[`Απομακρυσμένος έλεγχος συσκευών`, `Bediening van apparaten op afstand`, `Contrôle des appareils à distance`, `Control remoto de dispositivos`, `Controllo remoto dei dispositivi`],
	[`Προτεραιότητα τεχνικής υποστήριξης`, `Prioriteit bij technische ondersteuning`, `Priorité au support technique`, `Prioridad en soporte técnico`, `Priorità nel supporto tecnico`],
	[`ΠΛΑΝΑ`, `PLANNEN`, `OFFRES`, `PLANES`, `PIANI`],
	[`Ξεκινήστε με το επίπεδο ελέγχου που χρειάζεται η παραγωγή σας.`, `Begin met het controleniveau dat uw productie nodig heeft.`, `Commencez avec le niveau de contrôle dont votre production a besoin.`, `Empieza con el nivel de control que necesita tu producción.`, `Inizia con il livello di controllo di cui la tua produzione ha bisogno.`],
	[`Ιδανικό για ξεκίνημα`, `Ideaal om te starten`, `Idéal pour démarrer`, `Ideal para empezar`, `Ideale per iniziare`],
	[`Ζητήστε προσφορά`, `Vraag een offerte aan`, `Demander un devis`, `Solicitar presupuesto`, `Richiedi un preventivo`],
	[`Δεδομένα σε πραγματικό χρόνο`, `Realtime gegevens`, `Données en temps réel`, `Datos en tiempo real`, `Dati in tempo reale`],
	[`Αναλύσεις δεδομένων αισθητήρων`, `Analyse van sensorgegevens`, `Analyses des données de capteurs`, `Análisis de datos de sensores`, `Analisi dei dati dei sensori`],
	[`Αναλύσεις περιβαλλοντικών δεδομένων`, `Analyse van omgevingsgegevens`, `Analyses de données environnementales`, `Análisis de datos ambientales`, `Analisi dei dati ambientali`],
	[`Αναλύσεις ενέργειας & νερού`, `Analyses van energie & water`, `Analyses énergie & eau`, `Análisis de energía y agua`, `Analisi di energia e acqua`],
	[`Αναλύσεις ενέργειας &amp; νερού`, `Analyses van energie & water`, `Analyses énergie & eau`, `Análisis de energía y agua`, `Analisi di energia e acqua`],
	[`Συμβουλές AI Agent (Insights)`, `Advies van AI Agent (Insights)`, `Conseils de l’AI Agent (Insights)`, `Consejos del AI Agent (Insights)`, `Consigli dell’AI Agent (Insights)`],
	[`Αντίγραφα ασφαλείας`, `Back-ups`, `Sauvegardes`, `Copias de seguridad`, `Backup`],
	[`Συνομιλία στο B2B Marketplace`, `Chat in de B2B Marketplace`, `Conversation sur la marketplace B2B`, `Chat en el marketplace B2B`, `Chat nel marketplace B2B`],
	[`Συνομιλία με AI Agent`, `Chat met AI Agent`, `Conversation avec AI Agent`, `Chat con AI Agent`, `Chat con AI Agent`],
	[`Επικοινωνία με Γεωπόνο`, `Contact met agronoom`, `Contact avec un agronome`, `Contacto con agrónomo`, `Contatto con agronomo`],
	[`Telegram & Έξυπνες Ειδοποιήσεις`, `Telegram & slimme meldingen`, `Telegram & alertes intelligentes`, `Telegram y alertas inteligentes`, `Telegram e avvisi intelligenti`],
	[`Telegram &amp; Έξυπνες Ειδοποιήσεις`, `Telegram & slimme meldingen`, `Telegram & alertes intelligentes`, `Telegram y alertas inteligentes`, `Telegram e avvisi intelligenti`],
	[`Εγκατάσταση Αισθητήρων`, `Sensorinstallatie`, `Installation de capteurs`, `Instalación de sensores`, `Installazione sensori`],
	[`Μελλοντικές προβλέψεις`, `Toekomstvoorspellingen`, `Prévisions futures`, `Predicciones futuras`, `Previsioni future`],
	[`Έξυπνοι αυτοματισμοί & Έλεγχος`, `Slimme automatiseringen & controle`, `Automatisations intelligentes & contrôle`, `Automatizaciones inteligentes y control`, `Automazioni intelligenti e controllo`],
	[`Έξυπνοι αυτοματισμοί &amp; Έλεγχος`, `Slimme automatiseringen & controle`, `Automatisations intelligentes & contrôle`, `Automatizaciones inteligentes y control`, `Automazioni intelligenti e controllo`],
	[`Η πιο ισορροπημένη επιλογή`, `De meest gebalanceerde keuze`, `Le choix le plus équilibré`, `La opción más equilibrada`, `La scelta più equilibrata`],
	[`Ανάλυση περιβάλλοντος (Εξατομικευμένα)`, `Omgevingsanalyse (gepersonaliseerd)`, `Analyse environnementale (personnalisée)`, `Análisis ambiental (personalizado)`, `Analisi ambientale (personalizzata)`],
	[`Συνομιλία με AI Agent (50 μηνύματα)`, `Chat met AI Agent (50 berichten)`, `Conversation avec AI Agent (50 messages)`, `Chat con AI Agent (50 mensajes)`, `Chat con AI Agent (50 messaggi)`],
	[`Επικοινωνία με Γεωπόνο (1 ώρα/μήνα)`, `Contact met agronoom (1 uur/maand)`, `Contact avec un agronome (1 h/mois)`, `Contacto con agrónomo (1 hora/mes)`, `Contatto con agronomo (1 ora/mese)`],
	[`Εγκατάσταση Αισθητήρων (Απλή)`, `Sensorinstallatie (basis)`, `Installation de capteurs (simple)`, `Instalación de sensores (simple)`, `Installazione sensori (semplice)`],
	[`Για απαιτητικές εγκαταστάσεις`, `Voor veeleisende installaties`, `Pour les installations exigeantes`, `Para instalaciones exigentes`, `Per impianti esigenti`],
	[`Ανάλυση περιβάλλοντος (Εξατομικευμένα και προβλέψεις)`, `Omgevingsanalyse (gepersonaliseerd en prognoses)`, `Analyse environnementale (personnalisée et prévisions)`, `Análisis ambiental (personalizado y predicciones)`, `Analisi ambientale (personalizzata e previsioni)`],
	[`Συνομιλία με AI Agent (Απεριόριστα)`, `Chat met AI Agent (onbeperkt)`, `Conversation avec AI Agent (illimitée)`, `Chat con AI Agent (ilimitado)`, `Chat con AI Agent (illimitato)`],
	[`Εγκατάσταση Αισθητήρων (Προτεραιότητα)`, `Sensorinstallatie (prioriteit)`, `Installation de capteurs (prioritaire)`, `Instalación de sensores (prioridad)`, `Installazione sensori (priorità)`],
	[`ΜΑΖΙ ΚΑΛΛΙΕΡΓΟΥΜΕ ΤΟ ΑΥΡΙΟ`, `SAMEN TELEN WE MORGEN`, `ENSEMBLE, CULTIVONS DEMAIN`, `JUNTOS CULTIVAMOS EL MAÑANA`, `INSIEME COLTIVIAMO IL DOMANI`],
	[`Χτίζουμε μαζί το μέλλον της γεωπονίας.`, `Samen bouwen we aan de toekomst van agronomie.`, `Construisons ensemble l’avenir de l’agronomie.`, `Construimos juntos el futuro de la agronomía.`, `Costruiamo insieme il futuro dell’agronomia.`],
	[`Οι νέες ιδέες χρειάζονται χώρο για να ριζώσουν. Γι’ αυτό στηρίζουμε τους φοιτητές και τη νέα γενιά παραγωγών με ουσιαστικές εκπτώσεις σε όλα τα πλάνα iFlora.`, `Nieuwe ideeën hebben ruimte nodig om wortel te schieten. Daarom ondersteunen we studenten en de nieuwe generatie producenten met echte kortingen op alle iFlora-plannen.`, `Les nouvelles idées ont besoin d’espace pour prendre racine. C’est pourquoi nous soutenons les étudiants et la nouvelle génération de producteurs avec des remises concrètes sur toutes les offres iFlora.`, `Las nuevas ideas necesitan espacio para echar raíces. Por eso apoyamos a estudiantes y a la nueva generación de productores con descuentos reales en todos los planes de iFlora.`, `Le nuove idee hanno bisogno di spazio per mettere radici. Per questo sosteniamo studenti e nuova generazione di produttori con sconti concreti su tutti i piani iFlora.`],
	[`Η γνώση συναντά την τεχνολογία. Η δική σας αρχή γίνεται η κοινή μας εξέλιξη.`, `Kennis ontmoet technologie. Uw begin wordt onze gezamenlijke vooruitgang.`, `Le savoir rencontre la technologie. Votre départ devient notre évolution commune.`, `El conocimiento se une a la tecnología. Tu comienzo se convierte en nuestra evolución común.`, `La conoscenza incontra la tecnologia. Il tuo inizio diventa la nostra evoluzione condivisa.`],
	[`Φοιτητική έκπτωση`, `Studentenkorting`, `Remise étudiante`, `Descuento para estudiantes`, `Sconto studenti`],
	[`«Σπουδάζετε το αύριο. Εμείς σας βοηθάμε να το καλλιεργήσετε.»`, `“U studeert voor morgen. Wij helpen u het te cultiveren.”`, `« Vous étudiez demain. Nous vous aidons à le cultiver. »`, `«Estudias el mañana. Nosotros te ayudamos a cultivarlo.»`, `«Studi il domani. Noi ti aiutiamo a coltivarlo.»`],
	[`Ισχύει μέχρι την ολοκλήρωση των σπουδών.`, `Geldig tot het einde van de studie.`, `Valable jusqu’à la fin des études.`, `Válido hasta finalizar los estudios.`, `Valido fino al completamento degli studi.`],
	[`Ποσοστά φοιτητικής έκπτωσης ανά πλάνο`, `Studentenkortingen per plan`, `Taux de remise étudiante par offre`, `Porcentajes de descuento estudiantil por plan`, `Percentuali di sconto studenti per piano`],
	[`Έκπτωση για νέους κάτω των 30`, `Korting voor jongeren onder de 30`, `Remise pour les moins de 30 ans`, `Descuento para menores de 30`, `Sconto per under 30`],
	[`«Η επόμενη γενιά της γεωπονίας ξεκινά σήμερα — μαζί.»`, `“De volgende generatie agronomie begint vandaag — samen.”`, `« La prochaine génération de l’agronomie commence aujourd’hui — ensemble. »`, `«La próxima generación de la agronomía empieza hoy — juntos.»`, `«La prossima generazione dell’agronomia inizia oggi — insieme.»`],
	[`Για μη φοιτητές κάτω των 30 ετών, για 2 χρόνια.`, `Voor niet-studenten onder de 30, gedurende 2 jaar.`, `Pour les non-étudiants de moins de 30 ans, pendant 2 ans.`, `Para no estudiantes menores de 30 años, durante 2 años.`, `Per non studenti sotto i 30 anni, per 2 anni.`],
	[`Ποσοστά έκπτωσης iFlora NextGen ανά πλάνο`, `iFlora NextGen-kortingen per plan`, `Taux de remise iFlora NextGen par offre`, `Porcentajes de descuento iFlora NextGen por plan`, `Percentuali di sconto iFlora NextGen per piano`],
	[`Το πρώτο βήμα δεν χρειάζεται να το κάνετε μόνοι.`, `U hoeft de eerste stap niet alleen te zetten.`, `Vous n’avez pas à faire le premier pas seul.`, `No tienes que dar el primer paso solo.`, `Non devi fare il primo passo da solo.`],
	[`Ελάτε να σχεδιάσουμε μαζί μια πιο έξυπνη, βιώσιμη καλλιέργεια.`, `Laten we samen een slimmere, duurzamere teelt ontwerpen.`, `Concevons ensemble une culture plus intelligente et durable.`, `Diseñemos juntos un cultivo más inteligente y sostenible.`, `Progettiamo insieme una coltivazione più intelligente e sostenibile.`],
	[`Μεγαλώνουμε μαζί`, `We groeien samen`, `Nous grandissons ensemble`, `Crecemos juntos`, `Cresciamo insieme`],
	[`Στις τιμές`, `De prijzen`, `Les prix`, `Los precios`, `I prezzi`],
	[`συμπεριλαμβάνεται το ΦΠΑ`, `zijn inclusief btw`, `incluent la TVA`, `incluyen IVA`, `includono IVA`],
	[`Υπάρχουν έξτρα χρεώσεις για την`, `Er zijn extra kosten voor`, `Des frais supplémentaires s’appliquent pour`, `Hay cargos extra por`, `Sono previsti costi extra per`],
	[`αγορά του εξοπλισμού`, `de aankoop van apparatuur`, `l’achat de l’équipement`, `la compra del equipo`, `l’acquisto dell’attrezzatura`],
	[`Επιπλέον χρεώσεις στη`, `Extra kosten voor`, `Frais supplémentaires pour`, `Cargos adicionales en`, `Costi aggiuntivi per`],
	[`μεταφορά και εγκατάσταση`, `transport en installatie`, `le transport et l’installation`, `transporte e instalación`, `trasporto e installazione`],
	[`του εξοπλισμού`, `van de apparatuur`, `de l’équipement`, `del equipo`, `dell’attrezzatura`],
	[`Οι τιμές των πλάνων αναφέρονται για`, `De prijzen van de plannen gelden voor`, `Les prix des offres concernent`, `Los precios de los planes se refieren a`, `I prezzi dei piani si riferiscono a`],
	[`μία εγκατάσταση`, `één installatie`, `une installation`, `una instalación`, `un impianto`],
	[`, κάθε έξτρα εγκατάσταση κοστολογείται ανάλογα με το πλάνο.`, `, elke extra installatie wordt volgens het plan geprijsd.`, `, chaque installation supplémentaire est tarifée selon l’offre.`, `, cada instalación adicional se valora según el plan.`, `, ogni impianto aggiuntivo viene quotato in base al piano.`],
	[`Οι τιμές των πλάνων`, `De prijzen van de plannen`, `Les prix des offres`, `Los precios de los planes`, `I prezzi dei piani`],
	[`υπόκεινται σε αλλαγές`, `kunnen wijzigen`, `sont susceptibles d’évoluer`, `pueden cambiar`, `possono variare`],
	[`με βάση τις τρέχουσες τιμές της αγοράς ή πιθανές αυξήσεις στο κόστος υπηρεσιών.`, `op basis van actuele marktprijzen of mogelijke stijgingen in servicekosten.`, `selon les prix actuels du marché ou d’éventuelles hausses des coûts de service.`, `según los precios actuales del mercado o posibles aumentos en los costes de servicio.`, `in base ai prezzi di mercato correnti o a possibili aumenti dei costi dei servizi.`],
	[`MORE INFORMATION`, `MEER INFORMATIE`, `PLUS D’INFORMATIONS`, `MÁS INFORMACIÓN`, `MAGGIORI INFORMAZIONI`],
	[`Οι ερωτήσεις που ακούγονται πριν ξεκινήσει ένα έργο smart farming.`, `De vragen die opkomen voordat een smart-farmingproject begint.`, `Les questions posées avant de lancer un projet de smart farming.`, `Las preguntas que surgen antes de iniciar un proyecto de smart farming.`, `Le domande che emergono prima di avviare un progetto di smart farming.`],
	[`Μπορώ να χρησιμοποιήσω υπάρχοντα αισθητήρια ή εξοπλισμό;`, `Kan ik bestaande sensoren of apparatuur gebruiken?`, `Puis-je utiliser des capteurs ou équipements existants ?`, `¿Puedo usar sensores o equipos existentes?`, `Posso usare sensori o attrezzature esistenti?`],
	[`Ναι. Το iFlora σχεδιάζεται ώστε να αξιοποιεί υπάρχον hardware όπου είναι εφικτό και να προσθέτει νέα σημεία μέτρησης μόνο εκεί που υπάρχει πραγματική ανάγκη.`, `Ja. iFlora is ontworpen om bestaande hardware te benutten waar mogelijk en alleen nieuwe meetpunten toe te voegen waar ze echt nodig zijn.`, `Oui. iFlora est conçu pour exploiter le matériel existant lorsque c’est possible et ajouter de nouveaux points de mesure seulement là où ils sont vraiment nécessaires.`, `Sí. iFlora está diseñado para aprovechar hardware existente cuando sea posible y añadir nuevos puntos de medición solo donde exista una necesidad real.`, `Sì. iFlora è progettato per valorizzare l’hardware esistente dove possibile e aggiungere nuovi punti di misura solo dove c’è una reale necessità.`],
	[`Σε τι βοηθούν τα AI insights στην καθημερινή παραγωγή;`, `Waar helpen AI insights bij in de dagelijkse productie?`, `À quoi servent les AI insights dans la production quotidienne ?`, `¿En qué ayudan los AI insights en la producción diaria?`, `A cosa servono gli AI insights nella produzione quotidiana?`],
	[`Βοηθούν να εντοπίζετε τάσεις και ασυνήθιστες μεταβολές νωρίτερα, ώστε να αντιδράτε πριν η κατάσταση επηρεάσει την απόδοση ή την ποιότητα.`, `Ze helpen trends en ongewone veranderingen eerder te herkennen, zodat u kunt reageren voordat de situatie opbrengst of kwaliteit beïnvloedt.`, `Ils aident à repérer plus tôt les tendances et variations inhabituelles, afin de réagir avant qu’elles n’affectent le rendement ou la qualité.`, `Ayudan a detectar tendencias y cambios inusuales antes, para reaccionar antes de que afecten al rendimiento o la calidad.`, `Aiutano a individuare prima tendenze e variazioni insolite, così da reagire prima che la situazione incida su resa o qualità.`],
	[`Είναι κατάλληλο μόνο για θερμοκήπια;`, `Is het alleen geschikt voor kassen?`, `Est-ce réservé aux serres ?`, `¿Es adecuado solo para invernaderos?`, `È adatto solo alle serre?`],
	[`Όχι. Η ίδια λογική εφαρμόζεται σε θερμοκήπια, χωράφια, ζώνες άρδευσης και απομακρυσμένες αγροτικές εγκαταστάσεις.`, `Nee. Dezelfde logica geldt voor kassen, velden, irrigatiezones en afgelegen agrarische installaties.`, `Non. La même logique s’applique aux serres, champs, zones d’irrigation et installations agricoles éloignées.`, `No. La misma lógica se aplica a invernaderos, campos, zonas de riego e instalaciones agrícolas remotas.`, `No. La stessa logica si applica a serre, campi, zone di irrigazione e impianti agricoli remoti.`],
	[`Υπάρχουν ειδικές εκπτώσεις για φοιτητές και νέους;`, `Zijn er speciale kortingen voor studenten en jongeren?`, `Existe-t-il des remises spéciales pour étudiants et jeunes ?`, `¿Hay descuentos especiales para estudiantes y jóvenes?`, `Ci sono sconti speciali per studenti e giovani?`],
	[`Ναι. Οι φοιτητές λαμβάνουν έκπτωση 23% στο Beginner, 22% στο Standard και 15% στο Professional μέχρι να ολοκληρώσουν τις σπουδές τους. Το iFlora NextGen προσφέρει σε μη φοιτητές κάτω των 30 ετών έκπτωση 12%, 11% και 10% αντίστοιχα, για 2 χρόνια.`, `Ja. Studenten krijgen 23% korting op Beginner, 22% op Standard en 15% op Professional tot het einde van hun studie. iFlora NextGen biedt niet-studenten onder de 30 respectievelijk 12%, 11% en 10% korting gedurende 2 jaar.`, `Oui. Les étudiants bénéficient de 23 % sur Beginner, 22 % sur Standard et 15 % sur Professional jusqu’à la fin de leurs études. iFlora NextGen offre aux non-étudiants de moins de 30 ans des remises de 12 %, 11 % et 10 % respectivement, pendant 2 ans.`, `Sí. Los estudiantes reciben un 23 % de descuento en Beginner, 22 % en Standard y 15 % en Professional hasta finalizar sus estudios. iFlora NextGen ofrece a no estudiantes menores de 30 años descuentos del 12 %, 11 % y 10 % respectivamente, durante 2 años.`, `Sì. Gli studenti ricevono il 23% di sconto su Beginner, il 22% su Standard e il 15% su Professional fino al completamento degli studi. iFlora NextGen offre ai non studenti sotto i 30 anni sconti rispettivamente del 12%, 11% e 10% per 2 anni.`],
	[`MAKE SMART FARMING ACTIONABLE`, `MAAK SMART FARMING ACTIEGERICHT`, `RENDRE LE SMART FARMING ACTIONNABLE`, `HAZ QUE EL SMART FARMING SEA ACCIONABLE`, `RENDI OPERATIVO LO SMART FARMING`],
	[`Δείτε πώς θα μπορούσε να λειτουργήσει το iFlora στη δική σας εγκατάσταση.`, `Bekijk hoe iFlora in uw eigen installatie kan werken.`, `Voyez comment iFlora pourrait fonctionner dans votre installation.`, `Descubre cómo podría funcionar iFlora en tu instalación.`, `Scopri come potrebbe funzionare iFlora nel tuo impianto.`],
	[`Κλείστε σύντομη συζήτηση`, `Plan een kort gesprek`, `Planifier un court échange`, `Agenda una breve llamada`, `Prenota una breve conversazione`],
	[`Στοιχεία επικοινωνίας`, `Contactgegevens`, `Coordonnées`, `Datos de contacto`, `Dati di contatto`],
	[`Πολιτική Δεδομένων`, `Gegevensbeleid`, `Politique de données`, `Política de datos`, `Politica dati`],
	[`ΕΠΙΚΟΙΝΩΝΙΑ`, `CONTACT`, `CONTACT`, `CONTACTO`, `CONTATTO`],
	[`Στείλτε μας το μήνυμά σας`, `Stuur ons uw bericht`, `Envoyez-nous votre message`, `Envíanos tu mensaje`, `Inviaci il tuo messaggio`],
	[`Συμπληρώστε τη φόρμα παρακάτω και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.`, `Vul het formulier hieronder in en we nemen zo snel mogelijk contact met u op.`, `Remplissez le formulaire ci-dessous et nous vous contacterons dès que possible.`, `Completa el formulario y nos pondremos en contacto contigo lo antes posible.`, `Compila il modulo qui sotto e ti contatteremo il prima possibile.`],
	[`Ονοματεπώνυμο`, `Volledige naam`, `Nom complet`, `Nombre completo`, `Nome e cognome`],
	[`Τηλέφωνο`, `Telefoon`, `Téléphone`, `Teléfono`, `Telefono`],
	[`Επιλογή Πλάνου`, `Plan kiezen`, `Choix de l’offre`, `Selección de plan`, `Scelta del piano`],
	[`Χωρίς επιλογή (Μόνο Ερώτηση)`, `Geen keuze (alleen vraag)`, `Aucun choix (question uniquement)`, `Sin elección (solo consulta)`, `Nessuna scelta (solo domanda)`],
	[`Κατηγορία Έκπτωσης`, `Kortingscategorie`, `Catégorie de remise`, `Categoría de descuento`, `Categoria sconto`],
	[`Χωρίς ειδική έκπτωση`, `Geen speciale korting`, `Aucune remise spéciale`, `Sin descuento especial`, `Nessuno sconto speciale`],
	[`Student — φοιτητές`, `Student — studenten`, `Student — étudiants`, `Student — estudiantes`, `Student — studenti`],
	[`iFlora NextGen — μη φοιτητές κάτω των 30`, `iFlora NextGen — niet-studenten onder 30`, `iFlora NextGen — non-étudiants de moins de 30 ans`, `iFlora NextGen — no estudiantes menores de 30`, `iFlora NextGen — non studenti sotto i 30`],
	[`Μήνυμα`, `Bericht`, `Message`, `Mensaje`, `Messaggio`],
	[`Αποστολή Email`, `Email verzenden`, `Envoyer l’email`, `Enviar email`, `Invia email`],
	[`π.χ. Γιάννης Παπαδόπουλος`, `bijv. Jan Jansen`, `ex. Jean Dupont`, `ej. Juan García`, `es. Gianni Rossi`],
	[`π.χ. 6900000000`, `bijv. 6900000000`, `ex. 6900000000`, `ej. 6900000000`, `es. 6900000000`],
	[`Το μήνυμά σας...`, `Uw bericht...`, `Votre message...`, `Tu mensaje...`, `Il tuo messaggio...`],
	[`Πολιτική Δεδομένων | iFlora`, `Gegevensbeleid | iFlora`, `Politique de données | iFlora`, `Política de datos | iFlora`, `Politica dati | iFlora`],
	[`ΠΟΛΙΤΙΚΗ ΔΕΔΟΜΕΝΩΝ`, `GEGEVENSBELEID`, `POLITIQUE DE DONNÉES`, `POLÍTICA DE DATOS`, `POLITICA DATI`],
	[`Πώς διαχειριζόμαστε τα προσωπικά δεδομένα που μας εμπιστεύεστε.`, `Hoe wij omgaan met de persoonsgegevens die u ons toevertrouwt.`, `Comment nous gérons les données personnelles que vous nous confiez.`, `Cómo gestionamos los datos personales que nos confías.`, `Come gestiamo i dati personali che ci affidi.`],
	[`Η παρούσα πολιτική περιγράφει, σε απλή γλώσσα, πώς το iFlora συλλέγει και επεξεργάζεται προσωπικά δεδομένα μέσω της ιστοσελίδας και της επικοινωνίας μαζί μας, σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΕΕ) 2016/679 και τον Ν. 4624/2019.`, `Dit beleid beschrijft in eenvoudige taal hoe iFlora persoonsgegevens verzamelt en verwerkt via de website en communicatie met ons, volgens de Algemene Verordening Gegevensbescherming (EU) 2016/679 en Wet 4624/2019.`, `Cette politique décrit, en langage simple, comment iFlora collecte et traite les données personnelles via le site web et les échanges avec nous, conformément au Règlement général sur la protection des données (UE) 2016/679 et à la loi 4624/2019.`, `Esta política describe, en lenguaje claro, cómo iFlora recopila y trata datos personales a través del sitio web y la comunicación con nosotros, conforme al Reglamento General de Protección de Datos (UE) 2016/679 y la Ley 4624/2019.`, `La presente informativa descrive, in modo semplice, come iFlora raccoglie e tratta dati personali tramite il sito web e la comunicazione con noi, secondo il Regolamento generale sulla protezione dei dati (UE) 2016/679 e la Legge 4624/2019.`],
	[`Τελευταία ενημέρωση: 5 Ιουλίου 2026`, `Laatste update: 5 juli 2026`, `Dernière mise à jour : 5 juillet 2026`, `Última actualización: 5 de julio de 2026`, `Ultimo aggiornamento: 5 luglio 2026`],
	[`1. Υπεύθυνος επεξεργασίας`, `1. Verwerkingsverantwoordelijke`, `1. Responsable du traitement`, `1. Responsable del tratamiento`, `1. Titolare del trattamento`],
	[`Υπεύθυνος επεξεργασίας για τα δεδομένα που υποβάλλονται μέσω της ιστοσελίδας είναι το iFlora.`, `De verwerkingsverantwoordelijke voor gegevens die via de website worden ingediend is iFlora.`, `Le responsable du traitement des données soumises via le site web est iFlora.`, `El responsable del tratamiento de los datos enviados a través del sitio web es iFlora.`, `Il titolare del trattamento dei dati inviati tramite il sito web è iFlora.`],
	[`Email επικοινωνίας:`, `Contactemail:`, `Email de contact :`, `Email de contacto:`, `Email di contatto:`],
	[`Τηλέφωνο:`, `Telefoon:`, `Téléphone :`, `Teléfono:`, `Telefono:`],
	[`Εφόσον η υπηρεσία παρέχεται από συγκεκριμένη εταιρική οντότητα, τα πλήρη εταιρικά στοιχεία, όπως επωνυμία, έδρα, ΑΦΜ και Γ.Ε.ΜΗ., πρέπει να προστεθούν πριν από τη δημοσίευση της τελικής πολιτικής.`, `Als de dienst door een specifieke rechtspersoon wordt geleverd, moeten de volledige bedrijfsgegevens, zoals naam, zetel, btw-nummer en registratienummer, vóór publicatie van het definitieve beleid worden toegevoegd.`, `Si le service est fourni par une entité juridique spécifique, les informations complètes de l’entreprise, telles que la dénomination, le siège, le numéro fiscal et l’immatriculation, doivent être ajoutées avant la publication finale de la politique.`, `Si el servicio lo presta una entidad empresarial concreta, deben añadirse los datos corporativos completos, como denominación, sede, NIF y registro mercantil, antes de publicar la política final.`, `Se il servizio è fornito da una specifica entità aziendale, i dati societari completi, come denominazione, sede, partita IVA e registro, devono essere aggiunti prima della pubblicazione finale dell’informativa.`],
	[`2. Ποια δεδομένα συλλέγουμε`, `2. Welke gegevens verzamelen we`, `2. Quelles données collectons-nous`, `2. Qué datos recopilamos`, `2. Quali dati raccogliamo`],
	[`Συλλέγουμε μόνο τα δεδομένα που είναι απαραίτητα για να απαντήσουμε σε αιτήματα και να επικοινωνήσουμε μαζί σας.`, `We verzamelen alleen gegevens die nodig zijn om verzoeken te beantwoorden en met u te communiceren.`, `Nous collectons uniquement les données nécessaires pour répondre aux demandes et communiquer avec vous.`, `Solo recopilamos los datos necesarios para responder a solicitudes y comunicarnos contigo.`, `Raccogliamo solo i dati necessari per rispondere alle richieste e comunicare con te.`],
	[`Στοιχεία που συμπληρώνετε στη φόρμα επικοινωνίας, όπως ονοματεπώνυμο, email, τηλέφωνο, επιλεγμένο πλάνο και μήνυμα.`, `Gegevens die u invult in het contactformulier, zoals volledige naam, email, telefoon, gekozen plan en bericht.`, `Les informations saisies dans le formulaire de contact, comme nom complet, email, téléphone, offre choisie et message.`, `Datos que completas en el formulario de contacto, como nombre completo, email, teléfono, plan seleccionado y mensaje.`, `Dati inseriti nel modulo di contatto, come nome e cognome, email, telefono, piano selezionato e messaggio.`],
	[`Στοιχεία που αποστέλλονται όταν επικοινωνείτε μαζί μας μέσω email ή τηλεφώνου.`, `Gegevens die worden verzonden wanneer u contact met ons opneemt via email of telefoon.`, `Les informations envoyées lorsque vous nous contactez par email ou téléphone.`, `Datos enviados cuando te comunicas con nosotros por email o teléfono.`, `Dati inviati quando ci contatti via email o telefono.`],
	[`Βασικά τεχνικά δεδομένα που ενδέχεται να καταγράφονται από τον πάροχο φιλοξενίας, όπως διεύθυνση IP, χρόνος πρόσβασης, τύπος browser και αρχεία καταγραφής ασφαλείας.`, `Basis technische gegevens die door de hostingprovider kunnen worden geregistreerd, zoals IP-adres, toegangstijd, browsertype en beveiligingslogs.`, `Des données techniques de base pouvant être enregistrées par l’hébergeur, comme l’adresse IP, l’heure d’accès, le type de navigateur et les journaux de sécurité.`, `Datos técnicos básicos que puede registrar el proveedor de hosting, como dirección IP, hora de acceso, tipo de navegador y registros de seguridad.`, `Dati tecnici di base che possono essere registrati dal provider hosting, come indirizzo IP, ora di accesso, tipo di browser e log di sicurezza.`],
	[`3. Γιατί επεξεργαζόμαστε τα δεδομένα`, `3. Waarom verwerken we gegevens`, `3. Pourquoi traitons-nous les données`, `3. Por qué tratamos los datos`, `3. Perché trattiamo i dati`],
	[`Για να απαντήσουμε στο αίτημα ή στο μήνυμά σας.`, `Om op uw verzoek of bericht te reageren.`, `Pour répondre à votre demande ou message.`, `Para responder a tu solicitud o mensaje.`, `Per rispondere alla tua richiesta o al tuo messaggio.`],
	[`Για να οργανώσουμε παρουσίαση, συζήτηση, προσφορά ή τεχνική διερεύνηση.`, `Om een presentatie, gesprek, offerte of technische beoordeling te organiseren.`, `Pour organiser une présentation, discussion, offre ou analyse technique.`, `Para organizar una presentación, conversación, oferta o revisión técnica.`, `Per organizzare una presentazione, una conversazione, un’offerta o una verifica tecnica.`],
	[`Για να διαχειριστούμε προ-συμβατική ή συμβατική επικοινωνία.`, `Om precontractuele of contractuele communicatie te beheren.`, `Pour gérer la communication précontractuelle ou contractuelle.`, `Para gestionar comunicación precontractual o contractual.`, `Per gestire comunicazioni precontrattuali o contrattuali.`],
	[`Για να προστατεύσουμε την ασφάλεια και τη σωστή λειτουργία της ιστοσελίδας.`, `Om de veiligheid en correcte werking van de website te beschermen.`, `Pour protéger la sécurité et le bon fonctionnement du site web.`, `Para proteger la seguridad y el correcto funcionamiento del sitio web.`, `Per proteggere la sicurezza e il corretto funzionamento del sito web.`],
	[`Για να συμμορφωθούμε με νόμιμες υποχρεώσεις, όπου αυτό απαιτείται.`, `Om te voldoen aan wettelijke verplichtingen waar dat vereist is.`, `Pour respecter les obligations légales lorsque cela est requis.`, `Para cumplir obligaciones legales cuando sea necesario.`, `Per rispettare obblighi legali quando richiesto.`],
	[`4. Νομικές βάσεις επεξεργασίας`, `4. Rechtsgronden voor verwerking`, `4. Bases juridiques du traitement`, `4. Bases jurídicas del tratamiento`, `4. Basi giuridiche del trattamento`],
	[`Ανάλογα με την περίπτωση, η επεξεργασία βασίζεται:`, `Afhankelijk van het geval is de verwerking gebaseerd op:`, `Selon le cas, le traitement repose sur :`, `Según el caso, el tratamiento se basa en:`, `A seconda del caso, il trattamento si basa su:`],
	[`Στη συγκατάθεσή σας, όταν μας στέλνετε μήνυμα ή ζητάτε να επικοινωνήσουμε μαζί σας.`, `Uw toestemming, wanneer u ons een bericht stuurt of vraagt dat wij contact opnemen.`, `Votre consentement, lorsque vous nous envoyez un message ou demandez à être contacté.`, `Tu consentimiento, cuando nos envías un mensaje o pides que contactemos contigo.`, `Il tuo consenso, quando ci invii un messaggio o chiedi di essere contattato.`],
	[`Στη λήψη μέτρων πριν από τη σύναψη σύμβασης, όταν ζητάτε προσφορά ή ενημέρωση για υπηρεσίες.`, `Het nemen van maatregelen vóór het sluiten van een overeenkomst, wanneer u een offerte of informatie over diensten vraagt.`, `La prise de mesures précontractuelles, lorsque vous demandez une offre ou des informations sur les services.`, `La adopción de medidas precontractuales, cuando solicitas una oferta o información sobre servicios.`, `L’adozione di misure precontrattuali, quando richiedi un’offerta o informazioni sui servizi.`],
	[`Στο έννομο συμφέρον μας να απαντούμε σε αιτήματα, να προστατεύουμε την ιστοσελίδα και να διατηρούμε βασικό ιστορικό επικοινωνίας.`, `Ons gerechtvaardigd belang om verzoeken te beantwoorden, de website te beschermen en een basisgeschiedenis van communicatie te bewaren.`, `Notre intérêt légitime à répondre aux demandes, protéger le site web et conserver un historique de base des échanges.`, `Nuestro interés legítimo en responder solicitudes, proteger el sitio web y mantener un historial básico de comunicación.`, `Il nostro legittimo interesse a rispondere alle richieste, proteggere il sito web e mantenere uno storico essenziale delle comunicazioni.`],
	[`Σε νόμιμη υποχρέωση, όταν η διατήρηση ή κοινοποίηση δεδομένων απαιτείται από την ισχύουσα νομοθεσία.`, `Een wettelijke verplichting, wanneer bewaring of verstrekking van gegevens door de toepasselijke wetgeving wordt vereist.`, `Une obligation légale, lorsque la conservation ou la communication des données est exigée par la loi applicable.`, `Una obligación legal, cuando la conservación o comunicación de datos sea exigida por la legislación aplicable.`, `Un obbligo legale, quando la conservazione o comunicazione dei dati è richiesta dalla normativa applicabile.`],
	[`5. Σε ποιους κοινοποιούνται τα δεδομένα`, `5. Met wie worden gegevens gedeeld`, `5. À qui les données sont-elles communiquées`, `5. A quién se comunican los datos`, `5. A chi vengono comunicati i dati`],
	[`Δεν πουλάμε προσωπικά δεδομένα. Πρόσβαση μπορεί να έχουν μόνο τα απολύτως απαραίτητα πρόσωπα ή συνεργάτες που υποστηρίζουν τη λειτουργία της ιστοσελίδας, της πιστοποίησης χρηστών, της φιλοξενίας, της επικοινωνίας, της ασφάλειας και των συνδεδεμένων υπηρεσιών, όπως πάροχοι φιλοξενίας, Supabase, πάροχοι email, Weather.com, OpenAI εφόσον είναι ενεργό το AI dashboard, Telegram εφόσον είναι ενεργές ειδοποιήσεις, τεχνικοί συνεργάτες και νόμιμοι σύμβουλοι όταν απαιτείται.`, `We verkopen geen persoonsgegevens. Alleen strikt noodzakelijke personen of partners die de website, gebruikersauthenticatie, hosting, communicatie, beveiliging en verbonden diensten ondersteunen kunnen toegang hebben, zoals hostingproviders, Supabase, emailproviders, Weather.com, OpenAI als het AI-dashboard actief is, Telegram als meldingen actief zijn, technische partners en juridische adviseurs waar nodig.`, `Nous ne vendons pas de données personnelles. Seules les personnes ou partenaires strictement nécessaires au fonctionnement du site, à l’authentification, à l’hébergement, à la communication, à la sécurité et aux services connectés peuvent y accéder, comme les hébergeurs, Supabase, les fournisseurs d’email, Weather.com, OpenAI si le dashboard IA est actif, Telegram si les alertes sont actives, les partenaires techniques et les conseillers juridiques si nécessaire.`, `No vendemos datos personales. Solo pueden acceder las personas o socios estrictamente necesarios que apoyan el funcionamiento del sitio, autenticación, hosting, comunicación, seguridad y servicios conectados, como proveedores de hosting, Supabase, proveedores de email, Weather.com, OpenAI si el dashboard de IA está activo, Telegram si las alertas están activas, socios técnicos y asesores legales cuando sea necesario.`, `Non vendiamo dati personali. Possono accedere solo le persone o i partner strettamente necessari che supportano il funzionamento del sito, l’autenticazione utenti, l’hosting, la comunicazione, la sicurezza e i servizi collegati, come provider hosting, Supabase, provider email, Weather.com, OpenAI se il dashboard IA è attivo, Telegram se gli avvisi sono attivi, partner tecnici e consulenti legali quando necessario.`],
	[`Η ιστοσελίδα φορτώνει γραμματοσειρές από την υπηρεσία Google Fonts. Η χρήση εξωτερικών παρόχων μπορεί να συνεπάγεται τεχνική σύνδεση του browser σας με τους αντίστοιχους παρόχους.`, `De website laadt lettertypen van Google Fonts. Het gebruik van externe aanbieders kan betekenen dat uw browser technisch verbinding maakt met die aanbieders.`, `Le site charge des polices via Google Fonts. L’utilisation de fournisseurs externes peut impliquer une connexion technique de votre navigateur avec ces fournisseurs.`, `El sitio carga fuentes desde Google Fonts. El uso de proveedores externos puede implicar una conexión técnica de tu navegador con dichos proveedores.`, `Il sito carica font da Google Fonts. L’uso di provider esterni può comportare una connessione tecnica del tuo browser con tali provider.`],
	[`6. Χρόνος διατήρησης`, `6. Bewaartermijn`, `6. Durée de conservation`, `6. Plazo de conservación`, `6. Periodo di conservazione`],
	[`Διατηρούμε τα δεδομένα μόνο για όσο είναι απαραίτητο για τον σκοπό για τον οποίο συλλέχθηκαν. Ενδεικτικά, μηνύματα επικοινωνίας και αιτήματα ενδιαφέροντος μπορούν να διατηρούνται για έως 24 μήνες, εκτός αν απαιτείται μεγαλύτερη διατήρηση για νόμιμους, λογιστικούς ή συμβατικούς λόγους.`, `We bewaren gegevens alleen zolang dat nodig is voor het doel waarvoor ze zijn verzameld. Contactberichten en interesseverzoeken kunnen bijvoorbeeld tot 24 maanden worden bewaard, tenzij langere bewaring nodig is om wettelijke, boekhoudkundige of contractuele redenen.`, `Nous conservons les données uniquement aussi longtemps que nécessaire pour la finalité pour laquelle elles ont été collectées. Par exemple, les messages de contact et demandes d’intérêt peuvent être conservés jusqu’à 24 mois, sauf si une conservation plus longue est requise pour des raisons légales, comptables ou contractuelles.`, `Conservamos los datos solo durante el tiempo necesario para el fin para el que fueron recopilados. Por ejemplo, los mensajes de contacto y solicitudes de interés pueden conservarse hasta 24 meses, salvo que sea necesaria una conservación mayor por motivos legales, contables o contractuales.`, `Conserviamo i dati solo per il tempo necessario allo scopo per cui sono stati raccolti. A titolo indicativo, messaggi di contatto e richieste di interesse possono essere conservati fino a 24 mesi, salvo necessità di conservazione più lunga per motivi legali, contabili o contrattuali.`],
	[`7. Cookies και τεχνολογίες παρακολούθησης`, `7. Cookies en trackingtechnologieën`, `7. Cookies et technologies de suivi`, `7. Cookies y tecnologías de seguimiento`, `7. Cookie e tecnologie di tracciamento`],
	[`Με βάση την τρέχουσα λειτουργία της ιστοσελίδας, δεν χρησιμοποιούμε analytics ή διαφημιστικά cookies. Αν προστεθούν στο μέλλον μη απαραίτητα cookies ή εργαλεία παρακολούθησης, η πολιτική θα ενημερωθεί και θα ζητείται συγκατάθεση όπου απαιτείται.`, `Op basis van de huidige werking van de website gebruiken we geen analytics- of advertentiecookies. Als in de toekomst niet-noodzakelijke cookies of trackingtools worden toegevoegd, wordt dit beleid bijgewerkt en vragen we toestemming waar vereist.`, `Dans le fonctionnement actuel du site, nous n’utilisons pas de cookies analytics ou publicitaires. Si des cookies non essentiels ou outils de suivi sont ajoutés à l’avenir, la politique sera mise à jour et le consentement sera demandé lorsque nécessaire.`, `Según el funcionamiento actual del sitio, no usamos cookies de analítica ni publicitarias. Si en el futuro se añaden cookies no necesarias o herramientas de seguimiento, la política se actualizará y se solicitará consentimiento cuando corresponda.`, `In base al funzionamento attuale del sito, non utilizziamo cookie analytics o pubblicitari. Se in futuro verranno aggiunti cookie non necessari o strumenti di tracciamento, la politica sarà aggiornata e verrà richiesto il consenso ove necessario.`],
	[`8. Τα δικαιώματά σας`, `8. Uw rechten`, `8. Vos droits`, `8. Tus derechos`, `8. I tuoi diritti`],
	[`Σύμφωνα με τον ΓΚΠΔ, έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας, εναντίωσης και ανάκλησης συγκατάθεσης όπου η επεξεργασία βασίζεται σε συγκατάθεση.`, `Volgens de AVG heeft u recht op inzage, rectificatie, verwijdering, beperking van verwerking, overdraagbaarheid, bezwaar en intrekking van toestemming wanneer de verwerking op toestemming is gebaseerd.`, `Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, de portabilité, d’opposition et de retrait du consentement lorsque le traitement repose sur le consentement.`, `De acuerdo con el RGPD, tienes derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad, oposición y retirada del consentimiento cuando el tratamiento se base en el consentimiento.`, `Ai sensi del GDPR, hai diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità, opposizione e revoca del consenso quando il trattamento si basa sul consenso.`],
	[`Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε στο`, `Om uw rechten uit te oefenen, neem contact op via`, `Pour exercer vos droits, contactez-nous à`, `Para ejercer tus derechos, contacta en`, `Per esercitare i tuoi diritti, contattaci a`],
	[`. Έχετε επίσης δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.`, `. U heeft ook het recht een klacht in te dienen bij de Griekse Autoriteit Persoonsgegevens.`, `. Vous avez également le droit de déposer une réclamation auprès de l’Autorité hellénique de protection des données personnelles.`, `. También tienes derecho a presentar una reclamación ante la Autoridad Griega de Protección de Datos Personales.`, `. Hai inoltre il diritto di presentare reclamo all’Autorità ellenica per la protezione dei dati personali.`],
	[`9. Ασφάλεια`, `9. Beveiliging`, `9. Sécurité`, `9. Seguridad`, `9. Sicurezza`],
	[`Λαμβάνουμε εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων από μη εξουσιοδοτημένη πρόσβαση, απώλεια, αλλοίωση ή κοινοποίηση. Τα μέτρα περιλαμβάνουν χρήση HTTPS, περιορισμό πρόσβασης, διαχωρισμό δημόσιων και ιδιωτικών αρχείων εφαρμογής, ασφαλή διαχείριση μυστικών, καταγραφή συμβάντων ασφαλείας και ψευδωνυμοποίηση τεχνικών αναγνωριστικών στα αρχεία καταγραφής όπου είναι εφικτό.`, `We nemen redelijke technische en organisatorische maatregelen om gegevens te beschermen tegen ongeautoriseerde toegang, verlies, wijziging of openbaarmaking. De maatregelen omvatten HTTPS, toegangsbeperking, scheiding van publieke en private applicatiebestanden, veilig beheer van geheimen, logging van beveiligingsincidenten en waar mogelijk pseudonimisering van technische identificatoren in logbestanden.`, `Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger les données contre l’accès non autorisé, la perte, l’altération ou la divulgation. Ces mesures incluent l’utilisation de HTTPS, la limitation des accès, la séparation des fichiers publics et privés de l’application, la gestion sécurisée des secrets, l’enregistrement des incidents de sécurité et la pseudonymisation des identifiants techniques dans les journaux lorsque c’est possible.`, `Adoptamos medidas técnicas y organizativas razonables para proteger los datos frente a acceso no autorizado, pérdida, alteración o divulgación. Las medidas incluyen uso de HTTPS, limitación de acceso, separación de archivos públicos y privados de la aplicación, gestión segura de secretos, registro de eventos de seguridad y seudonimización de identificadores técnicos en los logs cuando sea posible.`, `Adottiamo misure tecniche e organizzative ragionevoli per proteggere i dati da accessi non autorizzati, perdita, alterazione o divulgazione. Le misure includono l’uso di HTTPS, limitazione degli accessi, separazione dei file pubblici e privati dell’applicazione, gestione sicura dei segreti, registrazione degli eventi di sicurezza e pseudonimizzazione degli identificatori tecnici nei log ove possibile.`],
	[`Τα αρχεία καταγραφής ασφαλείας χρησιμοποιούνται για προστασία από κατάχρηση, μη εξουσιοδοτημένη πρόσβαση και τεχνικά σφάλματα. Δεν καταγράφουμε σκόπιμα κωδικούς, tokens ή μυστικά API. Κανένα ηλεκτρονικό σύστημα δεν μπορεί να θεωρηθεί απόλυτα ασφαλές, γι' αυτό περιορίζουμε την επεξεργασία στα απαραίτητα δεδομένα.`, `Beveiligingslogs worden gebruikt ter bescherming tegen misbruik, ongeautoriseerde toegang en technische fouten. We registreren niet opzettelijk wachtwoorden, tokens of API-geheimen. Geen enkel elektronisch systeem kan volledig veilig worden geacht, daarom beperken we de verwerking tot noodzakelijke gegevens.`, `Les journaux de sécurité sont utilisés pour protéger contre les abus, les accès non autorisés et les erreurs techniques. Nous n’enregistrons pas volontairement les mots de passe, tokens ou secrets API. Aucun système électronique ne peut être considéré comme totalement sûr, c’est pourquoi nous limitons le traitement aux données nécessaires.`, `Los registros de seguridad se usan para proteger contra abusos, accesos no autorizados y errores técnicos. No registramos intencionadamente contraseñas, tokens ni secretos de API. Ningún sistema electrónico puede considerarse totalmente seguro, por eso limitamos el tratamiento a los datos necesarios.`, `I log di sicurezza sono utilizzati per proteggere da abusi, accessi non autorizzati ed errori tecnici. Non registriamo intenzionalmente password, token o segreti API. Nessun sistema elettronico può essere considerato totalmente sicuro, per questo limitiamo il trattamento ai dati necessari.`],
	[`10. Νομική επιβεβαίωση πριν από τη δημοσίευση`, `10. Juridische bevestiging vóór publicatie`, `10. Validation juridique avant publication`, `10. Confirmación legal antes de la publicación`, `10. Conferma legale prima della pubblicazione`],
	[`Η παρούσα πολιτική είναι λειτουργικό κείμενο διαφάνειας και πρέπει να επιβεβαιωθεί από νομικό σύμβουλο πριν από την τελική παραγωγική δημοσίευση, ιδίως ως προς την πλήρη ταυτότητα του υπευθύνου επεξεργασίας, τους εκτελούντες την επεξεργασία, τις διεθνείς διαβιβάσεις, τους χρόνους διατήρησης και τις συμβάσεις επεξεργασίας.`, `Dit beleid is een functionele transparantietekst en moet vóór definitieve publicatie door een juridisch adviseur worden bevestigd, met name wat betreft de volledige identiteit van de verwerkingsverantwoordelijke, verwerkers, internationale doorgiften, bewaartermijnen en verwerkersovereenkomsten.`, `Cette politique est un texte fonctionnel de transparence et doit être validée par un conseiller juridique avant la publication finale, notamment concernant l’identité complète du responsable du traitement, les sous-traitants, les transferts internationaux, les durées de conservation et les contrats de traitement.`, `Esta política es un texto funcional de transparencia y debe ser confirmada por un asesor legal antes de su publicación final, especialmente respecto a la identidad completa del responsable, los encargados del tratamiento, las transferencias internacionales, los plazos de conservación y los contratos de tratamiento.`, `La presente informativa è un testo funzionale di trasparenza e deve essere confermata da un consulente legale prima della pubblicazione finale, in particolare riguardo all’identità completa del titolare, ai responsabili del trattamento, ai trasferimenti internazionali, ai tempi di conservazione e agli accordi di trattamento.`],
	[`11. Αλλαγές στην πολιτική`, `11. Wijzigingen in het beleid`, `11. Modifications de la politique`, `11. Cambios en la política`, `11. Modifiche alla politica`],
	[`Η παρούσα πολιτική μπορεί να ενημερώνεται όταν αλλάζει η λειτουργία της ιστοσελίδας, οι υπηρεσίες ή οι νομικές υποχρεώσεις μας. Η πιο πρόσφατη έκδοση θα είναι πάντα διαθέσιμη σε αυτή τη σελίδα.`, `Dit beleid kan worden bijgewerkt wanneer de werking van de website, de diensten of onze wettelijke verplichtingen veranderen. De meest recente versie is altijd beschikbaar op deze pagina.`, `Cette politique peut être mise à jour lorsque le fonctionnement du site, les services ou nos obligations légales changent. La version la plus récente sera toujours disponible sur cette page.`, `Esta política puede actualizarse cuando cambie el funcionamiento del sitio, los servicios o nuestras obligaciones legales. La versión más reciente estará siempre disponible en esta página.`, `La presente politica può essere aggiornata quando cambiano il funzionamento del sito, i servizi o i nostri obblighi legali. La versione più recente sarà sempre disponibile in questa pagina.`]
];

IFLORA_EXTRA_TRANSLATION_ROWS.forEach(([source, nl, fr, es, it]) => {
	IFLORA_TRANSLATIONS.nl[source] = nl;
	IFLORA_TRANSLATIONS.fr[source] = fr;
	IFLORA_TRANSLATIONS.es[source] = es;
	IFLORA_TRANSLATIONS.it[source] = it;
});

Object.assign(IFLORA_TRANSLATIONS.en, window.IFLORA_EN_TRANSLATIONS || {});

function iFloraDecodeHtml(value) {
	const textarea = document.createElement('textarea');
	textarea.innerHTML = value;
	return textarea.value;
}

function iFloraNormalize(value) {
	return iFloraDecodeHtml(String(value || '')).replace(/\s+/g, ' ').trim();
}

Object.values(IFLORA_TRANSLATIONS).forEach((dictionary) => {
	Object.entries(dictionary).forEach(([source, translation]) => {
		const normalizedSource = iFloraNormalize(source);
		if (normalizedSource && !dictionary[normalizedSource]) {
			dictionary[normalizedSource] = translation;
		}
	});
});

const IFLORA_ORIGINAL_TITLE = document.title;
const IFLORA_ORIGINAL_DESCRIPTION = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
const iFloraTextNodes = [];
const iFloraAttributeNodes = [];
let iFloraCurrentLanguage = 'el';

function iFloraTranslatedText(source, language = iFloraCurrentLanguage) {
	if (language === 'el') return source;
	const dictionary = IFLORA_TRANSLATIONS[language] || {};
	const normalizedSource = iFloraNormalize(source);
	if (!normalizedSource) return source;
	return dictionary[normalizedSource] || dictionary[source] || source;
}

function iFloraPreserveSpacing(original, translated) {
	const leading = original.match(/^\s*/)?.[0] || '';
	const trailing = original.match(/\s*$/)?.[0] || '';
	return `${leading}${translated}${trailing}`;
}

function iFloraCollectTranslatableNodes() {
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const parent = node.parentElement;
			if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
				return NodeFilter.FILTER_REJECT;
			}
			return iFloraNormalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
		}
	});

	let node = walker.nextNode();
	while (node) {
		iFloraTextNodes.push({ node, original: node.nodeValue });
		node = walker.nextNode();
	}

	document.querySelectorAll('[aria-label], [placeholder], [title], [alt]').forEach((element) => {
		['aria-label', 'placeholder', 'title', 'alt'].forEach((attribute) => {
			const value = element.getAttribute(attribute);
			if (iFloraNormalize(value)) {
				iFloraAttributeNodes.push({ element, attribute, original: value });
			}
		});
	});
}

function iFloraApplyLanguage(language) {
	const nextLanguage = IFLORA_SUPPORTED_LANGUAGES.includes(language) ? language : 'el';
	iFloraCurrentLanguage = nextLanguage;
	document.documentElement.lang = IFLORA_LANGUAGE_META[nextLanguage]?.htmlLang || nextLanguage;

	const translatedTitle = iFloraTranslatedText(IFLORA_ORIGINAL_TITLE, nextLanguage);
	document.title = translatedTitle;

	const metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription && IFLORA_ORIGINAL_DESCRIPTION) {
		metaDescription.setAttribute('content', iFloraTranslatedText(IFLORA_ORIGINAL_DESCRIPTION, nextLanguage));
	}

	iFloraTextNodes.forEach(({ node, original }) => {
		const translated = iFloraTranslatedText(original, nextLanguage);
		node.nodeValue = nextLanguage === 'el' ? original : iFloraPreserveSpacing(original, translated);
	});

	iFloraAttributeNodes.forEach(({ element, attribute, original }) => {
		element.setAttribute(attribute, iFloraTranslatedText(original, nextLanguage));
	});

	document.querySelectorAll('[data-language-select]').forEach((select) => {
		select.value = nextLanguage;
	});

	try {
		localStorage.setItem(IFLORA_LANG_STORAGE_KEY, nextLanguage);
	} catch {
		// Language preference is optional; ignore storage failures.
	}

	window.dispatchEvent(new CustomEvent('iflora-language-change', { detail: { language: nextLanguage } }));
}

function iFloraGetInitialLanguage() {
	const params = new URLSearchParams(window.location.search);
	const requested = params.get('lang');
	if (IFLORA_SUPPORTED_LANGUAGES.includes(requested)) return requested;
	try {
		const stored = localStorage.getItem(IFLORA_LANG_STORAGE_KEY);
		if (IFLORA_SUPPORTED_LANGUAGES.includes(stored)) return stored;
	} catch {
		// No stored preference available.
	}
	return 'el';
}

window.iFloraTranslate = iFloraTranslatedText;
window.iFloraApplyLanguage = iFloraApplyLanguage;

iFloraCollectTranslatableNodes();
iFloraApplyLanguage(iFloraGetInitialLanguage());

document.querySelectorAll('[data-language-select]').forEach((select) => {
	select.addEventListener('change', (event) => {
		iFloraApplyLanguage(event.target.value);
	});
});
