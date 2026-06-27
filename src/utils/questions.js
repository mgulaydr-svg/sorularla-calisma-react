export const QUESTIONS = [
  {
    "id": "fd-001",
    "sourceNo": 1,
    "sourcePage": 1,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "pubspec.yaml dosyasındaki dependencies kısmında paket\nyönetiminin en güncel uyumlu sürümü bulması için versiyon\nnumarası önüne aşağıdaki sembollerden hangisi gelmektedir?",
    "options": {
      "A": "?",
      "B": "^",
      "C": "*",
      "D": "+",
      "E": "%"
    },
    "correct": "B",
    "answerRaw": "B) ^",
    "explanation": "Dart ve Flutter projelerinde pubspec.yaml dosyasında paket sürümü genellikle ^\nsembolüyle yazılır. Örneğin:\ndependencies:\n http: ^1.2.0\nBu ifade, paketin belirtilen sürümle uyumlu en güncel sürümünün\nkullanılabileceğini anlatır. Yani ^ , paket yöneticisine “bu sürümden başlayarak\nuyumlu güncellemeleri kullanabilirsin” demektir.",
    "tags": [
      "pubspec",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-002",
    "sourceNo": 2,
    "sourcePage": 2,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "MaterialApp arayüz bileşeninin onGenerateRoute parametresi,\n__ parametresi olan bir fonksiyon alır. Boş bırakılan yere hangi\nkelime gelmelidir?",
    "options": {
      "A": "AssetBundle",
      "B": "RouteSettings",
      "C": "rootBundle",
      "D": "Page",
      "E": "NavigatorSettings"
    },
    "correct": "B",
    "answerRaw": "B) RouteSettings",
    "explanation": "onGenerateRoute , rota üretmek için kullanılan bir fonksiyon alır. Bu fonksiyona\nyönlendirme bilgilerini taşıyan RouteSettings nesnesi gelir.\nBasitçe:\nonGenerateRoute: (RouteSettings settings) {\n // route oluşturulur\n}\nRouteSettings , açılmak istenen sayfanın adı ve varsa gönderilen argümanlar gibi\nbilgileri taşır.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-003",
    "sourceNo": 3,
    "sourcePage": 3,
    "largeDeck": "Flutter ve Dart",
    "smallDeck": "Genel Tekrar",
    "question": "Aşağıdakilerden hangisi Flutter’ın durum tabanlı arayüz çizimi\nyaklaşımının genel tanımlamasıdır?",
    "options": {
      "A": "illustrative",
      "B": "derivative",
      "C": "imperative",
      "D": "declarative",
      "E": "decorative"
    },
    "correct": "D",
    "answerRaw": "D) declarative",
    "explanation": "Flutter arayüz geliştirmede declarative, yani bildirimsel yaklaşımı kullanır.\nBu yaklaşımda geliştirici tek tek “şunu ekle, bunu sil, rengini değiştir” demek\nyerine, mevcut duruma göre arayüzün nasıl görünmesi gerektiğini tarif eder.\nKısaca:\nVeri değişir → Flutter arayüzü yeniden çizer.\nBu yüzden Flutter’da arayüz, çoğu zaman state’in ekrana yansımış hali gibi\ndüşünülebilir.",
    "tags": [
      "state"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-004",
    "sourceNo": 4,
    "sourcePage": 3,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Kalıcı depolama alanında uygulamaların kendine ait klasörüne\nerişmek için path_provider kütüphanesi aracılığıyla kullanılan\nkod hangisidir?",
    "options": {
      "A": "Directory dir = path(\"Data/Data\");",
      "B": "Directory dir = path(\"AppFolder/Module/Data\");",
      "C": "Directory dir = await getTemporaryDirectory();",
      "D": "Directory dir = await getApplicationDocumentsDirectory();",
      "E": "Directory dir = getCacheDir();"
    },
    "correct": "D",
    "answerRaw": "D) Directory dir = await getApplicationDocumentsDirectory();",
    "explanation": "getApplicationDocumentsDirectory() fonksiyonu, uygulamanın kalıcı olarak dosya\nsaklayabileceği belgeler klasörünü verir.\ngetTemporaryDirectory() ise geçici dosyalar içindir. Geçici klasördeki veriler sistem\ntarafından silinebilir. Bu yüzden kalıcı veri için doğru tercih \ngetApplicationDocumentsDirectory() olur.",
    "tags": [
      "state",
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-005",
    "sourceNo": 5,
    "sourcePage": 4,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "setState metodu, güncellenecek widget’tan daha dış seviyede\nbulunuyorsa değişen veri içteki widget’lara hangi yöntemle\naktarılır?",
    "options": {
      "A": "Hiyerarşide içeride kalan widget’ın yapıcı fonksiyonuyla",
      "B": "Hiyerarşide içeride kalan widget’ın build fonksiyonuyla",
      "C": "Scaffold widget’ının child parametresine beslenecek fonksiyonla",
      "D": "StatefulWidget ’in createState fonksiyonuyla",
      "E": "StatefulWidget ’ın yapıcı fonksiyonuyla"
    },
    "correct": "A",
    "answerRaw": "A) Hiyerarşide içeride kalan widget’ın yapıcı fonksiyonuyla",
    "explanation": "Flutter’da üst widget’taki veri değiştiğinde setState() çağrılır ve üst widget yeniden\nçizilir. Bu sırada yeni veri, alt widget’a genellikle constructor parametresi olarak\ngönderilir.\nÖrnek:\nRenkKutusu(active: active)\nBurada active değeri üst widget’tan alt widget’a aktarılır. Alt widget da bu değere\ngöre kendini çizer.",
    "tags": [
      "state",
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-006",
    "sourceNo": 6,
    "sourcePage": 4,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdaki operatörlerden hangisi bir listedeki içeriği başka bir\nlisteye kopyalamak için kullanılır?",
    "options": {
      "A": "..",
      "B": "??",
      "C": ":",
      "D": "...?",
      "E": "=>"
    },
    "correct": "D",
    "answerRaw": "D) ...?",
    "explanation": "Dart’ta bir listenin elemanlarını başka bir listenin içine açarak eklemek için spread\noperator kullanılır.\nNormal kullanım:\nvar liste1 = [1, 2, 3];\nvar liste2 = [...liste1, 4, 5];\nEğer kopyalanacak liste null olabilir ise null-aware spread operator olan ...?\nkullanılır:\nList<int>? liste1;\nvar liste2 = [...?liste1, 4, 5];\nBu soruda verilen seçenekler içinde doğru olan ...? seçeneğidir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-007",
    "sourceNo": 7,
    "sourcePage": 5,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Bir animasyon oluşturulurken birden fazla geçiş aralığı\nbelirlemek isteniyorsa aşağıdakilerden hangisi kullanılmalıdır?",
    "options": {
      "A": "TweenColors",
      "B": "TweenPairs",
      "C": "MultipleTween",
      "D": "Constant Tween",
      "E": "TweenSequences"
    },
    "correct": "E",
    "answerRaw": "E) TweenSequences",
    "explanation": "Flutter’da bir animasyonun farklı aralıklarda farklı geçişler yapması gerekiyorsa \nTweenSequence yapısı kullanılır.\n\nÖrneğin trafik lambası gibi renk geçişlerinde her renk eşit sürede veya aynı hızda\ndeğişmek zorunda olmayabilir. TweenSequence , animasyonu parçalara ayırarak her\nparçaya farklı geçiş tanımlamayı sağlar.",
    "tags": [
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-008",
    "sourceNo": 8,
    "sourcePage": 6,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "Flutter’da varsayılan SharedPreferences dosyasının referansını\nelde etmek için hangi kod kullanılır?",
    "options": {
      "A": "final prefs = await SharedPreferences.getInstance();",
      "B": "final prefs = File.SharedPreferences();",
      "C": "final prefs = await SharedPreferences.getValue();",
      "D": "final prefs = await SharedPreferences.tInstance();",
      "E": "final prefs = new SharedPreferences() -> SharedPreferences.default;"
    },
    "correct": "A",
    "answerRaw": "A) final prefs = await SharedPreferences.getInstance();",
    "explanation": "SharedPreferences kullanmadan önce varsayılan tercih dosyasına erişmek gerekir.\nBunun için getInstance() metodu çağrılır.\nfinal prefs = await SharedPreferences.getInstance();\nBu işlem asenkron olduğu için başında await bulunur.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-009",
    "sourceNo": 9,
    "sourcePage": 6,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "dart:convert kütüphanesinde JSON metnini bir objeye\nçevirmek için kullanılan fonksiyon hangisidir?",
    "options": {
      "A": "toJson()",
      "B": "fromJson()",
      "C": "jsonEncode()",
      "D": "serialize()",
      "E": "jsonDecode()"
    },
    "correct": "E",
    "answerRaw": "E) jsonDecode()",
    "explanation": "JSON metnini Dart nesnesine dönüştürmek için jsonDecode() kullanılır.\n\nimport 'dart:convert';\nvar data = jsonDecode('{\"name\": \"Ali\"}');\njsonEncode() ise bunun tersini yapar; Dart nesnesini JSON metnine çevirir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-010",
    "sourceNo": 10,
    "sourcePage": 7,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "Kodların dağıtım sürümünde tersine mühendislikle çözülmesini\nzorlaştırmak için derleme aşamasında hangi etiket kullanılır?",
    "options": {
      "A": "-obfuscate",
      "B": "-mix-code",
      "C": "-clear-code",
      "D": "-fix",
      "E": "–refactor"
    },
    "correct": "A",
    "answerRaw": "A) -obfuscate",
    "explanation": "Flutter’da kodu daha zor okunur hale getirmek için obfuscation kullanılır. Gerçek\nkullanımda komut genellikle çift tireyle yazılır:\nflutter build apk --obfuscate --split-debug-info=...\n--obfuscate , dağıtım çıktısında sembol isimlerini karmaşıklaştırarak tersine\nmühendisliği zorlaştırır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-011",
    "sourceNo": 11,
    "sourcePage": 7,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Column widget içerisindeki crossAxisAlignment parametresi\nneyi düzenler?",
    "options": {
      "A": "İçerdiği elemanların yatay taşma yapmaması için",
      "B": "İçereceği eleman sayısının çalışma zamanı tespiti için",
      "C": "İçerdiği elemanların yatayda yerleşimi için",
      "D": "İçerdiği elemanların dikeyde yerleşimi için",
      "E": "İçerdiği elemanların dikey taşma yapmaması için"
    },
    "correct": "C",
    "answerRaw": "C) İçerdiği elemanların yatayda yerleşimi için",
    "explanation": "Column , çocuklarını dikey eksende dizer. Bu yüzden:\nmainAxisAlignment → dikey hizalamayı,\ncrossAxisAlignment → yatay hizalamayı\nkontrol eder.\nÖrneğin:\nColumn(\n crossAxisAlignment: CrossAxisAlignment.start,\n children: [...]\n)\nBu kullanım, Column içindeki elemanları yatay eksende sola hizalar.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-012",
    "sourceNo": 12,
    "sourcePage": 8,
    "largeDeck": "Flutter",
    "smallDeck": "Asenkron, JSON ve Firebase",
    "question": "Sürekli değişebilen veri tabanı ve web servisleri gibi kaynaklar\niçin unit testte belli bir anlık görüntü üzerinde test yapmaya\nyarayan paket hangisidir?",
    "options": {
      "A": "Expresso",
      "B": "Turkish Coffee",
      "C": "Filter",
      "D": "Mockito",
      "E": "Cappuccino"
    },
    "correct": "D",
    "answerRaw": "D) Mockito",
    "explanation": "Mockito , testlerde gerçek nesneler yerine sahte nesneler yani mock nesneler\nüretmek için kullanılır.\nÖrneğin gerçek bir web servisine bağlanmak yerine, test sırasında web servisinin\nsahte bir cevabı döndürmesi sağlanabilir. Böylece testler daha kontrollü, hızlı ve\ngüvenilir hale gelir.",
    "tags": [
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-013",
    "sourceNo": 13,
    "sourcePage": 9,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Firebase özelliklerinin kullanılmaya başlanmasından önce\nhangi fonksiyon çağrılmalıdır?",
    "options": {
      "A": "init()",
      "B": "load()",
      "C": "connect()",
      "D": "firebase_core()",
      "E": "initializeApp()"
    },
    "correct": "E",
    "answerRaw": "E) initializeApp()",
    "explanation": "Flutter’da Firebase servislerini kullanmadan önce Firebase’in başlatılması gerekir.\nGenellikle şu şekilde kullanılır:\nawait Firebase.initializeApp();\nBu işlem yapılmadan Firebase Authentication, Firestore veya diğer Firebase\nservisleri düzgün şekilde kullanılamaz.",
    "tags": [
      "firebase"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-014",
    "sourceNo": 14,
    "sourcePage": 9,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Dart programlama dilinde arkaplanda çalışacak iş parçacığı\nbenzeri yapı için kullanılan bileşenin adı nedir?",
    "options": {
      "A": "process",
      "B": "isolate",
      "C": "thread",
      "D": "background",
      "E": "channel"
    },
    "correct": "B",
    "answerRaw": "B) isolate",
    "explanation": "Dart’ta paralel işler için kullanılan yapı isolate olarak adlandırılır.\nIsolate’lar klasik thread mantığından farklıdır. Her isolate kendi belleğine sahiptir ve\ndiğer isolate’larla doğrudan aynı belleği paylaşmaz. Haberleşme mesaj gönderme\n\nmantığıyla yapılır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-015",
    "sourceNo": 15,
    "sourcePage": 10,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter geliştiricilerinin sunduğu widget’ların tamamının\ntanıtımına Flutter dokümanında hangi başlık altından erişilir?",
    "options": {
      "A": "Deployment",
      "B": "Flutter Widgets",
      "C": "Widget Catalog",
      "D": "Testing and Debugging",
      "E": "Flutter in Action"
    },
    "correct": "C",
    "answerRaw": "C) Widget Catalog",
    "explanation": "Flutter dokümanlarında widget’ların kategorilere ayrılmış şekilde tanıtıldığı bölüm \nWidget Catalog olarak geçer.\nBu katalogda layout, input, scrolling, styling, animation gibi birçok widget grubu\nincelenebilir.",
    "tags": [
      "widget",
      "test",
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-016",
    "sourceNo": 16,
    "sourcePage": 10,
    "largeDeck": "Flutter ve Dart",
    "smallDeck": "Genel Tekrar",
    "question": "Visual Studio Code IDE’sinde aktif Flutter çalıştırma kipi ana\nekranda nerede görüntülenir?",
    "options": {
      "A": "Karşılama ekranında",
      "B": "Sol üst köşede",
      "C": "Sağ alt köşede",
      "D": "Sağ üst köşede",
      "E": "Sol alt köşede"
    },
    "correct": "C",
    "answerRaw": "C) Sağ alt köşede",
    "explanation": "Visual Studio Code’da Flutter ile ilgili aktif cihaz, çalışma hedefi ve bazı durum\nbilgileri genellikle alt durum çubuğunda, özellikle sağ alt köşede görüntülenir.\nBu bölümden cihaz seçimi veya çalışma ortamı bilgileri kontrol edilebilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-017",
    "sourceNo": 17,
    "sourcePage": 11,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Plugin ile Package arasındaki fark aşağıdakilerden hangisidir?",
    "options": {
      "A": "Package sadece Dart kodlarından oluşurken Plugin platform kodlaması ile bir\nköprü oluşturur.",
      "B": "Package boyutu daha büyüktür. Plugin ise küçük kütüphanelerdir.",
      "C": "Plugin’de Package’ye göre asset ve diğer bileşenler de bulunabilir.",
      "D": "Plugin her projeye uyarken package sadece Dart uygulamalarına eklenir.",
      "E": "Plugin sadece Dart kodlarından oluşurken Package platform kodlaması ile bir\nköprü oluşturur."
    },
    "correct": "A",
    "answerRaw": "A) Package sadece Dart kodlarından oluşurken Plugin platform\nkodlaması ile bir köprü oluşturur.",
    "explanation": "Package, genellikle Dart kodu içeren yeniden kullanılabilir kütüphane yapısıdır.\nPlugin ise Dart kodunun yanında Android, iOS, web veya masaüstü gibi\nplatformlara özel kodlarla bağlantı kurabilir. Yani plugin, Flutter ile platform\nözellikleri arasında köprü görevi görebilir.\nÖrneğin kamera, konum veya Bluetooth gibi özellikler için çoğu zaman plugin\nkullanılır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-018",
    "sourceNo": 18,
    "sourcePage": 11,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Flutter’ın arayüz çizimi ile ilgili olarak aşağıdaki yorumlardan\nhangisi doğrudur?",
    "options": {
      "A": "Yeni bir ekranın açılması için ikinci Ekran.show() tarzında bir çağrı yapılabilir.",
      "B": "Bir butonun içerisinde bir widget oluşturularak bu widget ağacına dinamik\nolarak eklenebilir.",
      "C": "Bir verideki değişim arayüzün bağımsız bölgelerinde güncelleme gerektiriyorsa \nStatefulWidget kullanmak iyi çözümdür.",
      "D": "Provider paketi bize internette sunulan ücretsiz web servislerinin bilgilerini\ngetirmektedir.",
      "E": "Uygulama içerisindeki veri değişikliği arayüz güncellemesi gerektiriyorsa bu bir\nmodel olarak tanımlanmalı ve değişiklikler takip edilmelidir."
    },
    "correct": "E",
    "answerRaw": "E) Uygulama içerisindeki veri değişikliği arayüz güncellemesi\ngerektiriyorsa bu bir model olarak tanımlanmalı ve değişiklikler takip edilmelidir.",
    "explanation": "Flutter’da arayüz, verinin yani state bilgisinin ekrana yansıtılmış halidir. Veri\ndeğiştiğinde arayüzün de bu değişime göre yeniden oluşturulması gerekir.\nBüyük uygulamalarda bu değişimleri takip etmek için model ve state management\nyaklaşımları kullanılır. Provider gibi paketler de bu amaçla tercih edilebilir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-019",
    "sourceNo": 19,
    "sourcePage": 12,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Flutter’daki test paketi ile unit test yapılırken bir test koşulunun\nsağlanması için boş bırakılan yere ne gelmelidir?",
    "options": {
      "A": "assert",
      "B": "lookup",
      "C": "expect",
      "D": "find",
      "E": "search"
    },
    "correct": "C",
    "answerRaw": "C) expect",
    "explanation": "Flutter ve Dart testlerinde beklenen sonucu kontrol etmek için expect() fonksiyonu\nkullanılır.\nÖrnek:\ntest('toplama testi', () {\n expect(2 + 2, 4);\n});\nBurada test, 2 + 2 sonucunun 4 olup olmadığını kontrol eder.",
    "tags": [
      "test",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-020",
    "sourceNo": 20,
    "sourcePage": 12,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Dart programlama dilinde bir değişken adının alt çizgi _ ile\nbaşlaması ne anlama gelir?",
    "options": {
      "A": "Değişkenin sabit olarak tanımlandığını belirtir. Üzerinde değişiklik yapılamaz.",
      "B": "Değişkenin private olarak tanımlandığını belirtir. Sınıfın dışından erişilemez.",
      "C": "Değişkenin static olarak tanımlandığını belirtir. Sınıfın tüm örneklerinden\nerişilebilir.",
      "D": "Değişkenin object olarak tanımlandığını belirtir. Her türden veriyi saklayabilir.",
      "E": "Değişkenin public olarak tanımlandığını belirtir. Sınıfın dışından erişilebilir."
    },
    "correct": "B",
    "answerRaw": "B) Değişkenin private olarak tanımlandığını belirtir.",
    "explanation": "Dart’ta bir ismin _ ile başlaması onun private olduğunu gösterir. Ancak burada\nönemli bir ayrıntı vardır: Dart’ta gizlilik sınıf düzeyinde değil, kütüphane / dosya\ndüzeyinde çalışır.\nÖrneğin:\nString _gizliDeger = \"Sadece bu kütüphane içinde erişilebili\nr\";\nBu değişkene aynı kütüphane içinden erişilebilir, fakat dışarıdan doğrudan\nerişilemez.\n\n🎯Genel Tekrar\n^ paketlerde uyumlu güncel sürüm aralığını belirtir.\nFlutter arayüz yaklaşımı declarative yapıdadır.\nKalıcı uygulama dosyaları için getApplicationDocumentsDirectory()\nkullanılır.\nListe elemanlarını başka listeye açmak için spread operator kullanılır.\nJSON metnini Dart nesnesine çevirmek için jsonDecode() kullanılır.\nFirebase kullanmadan önce Firebase.initializeApp() çağrılır.\nDart’ta paralel çalışma yapısı isolate olarak adlandırılır.\nTestlerde beklenti kontrolü için expect() kullanılır.\n_ ile başlayan isimler Dart’ta kütüphane düzeyinde private kabul\nedilir.",
    "tags": [
      "test",
      "firebase",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-021",
    "sourceNo": 21,
    "sourcePage": 14,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Kullanıcı etkileşimi olmayacak kendi arayüz bileşenimizi\ntasarlamak istiyorsak hangi sınıftan miras almamız uygun\nçözümdür?",
    "options": {
      "A": "MaterialApp",
      "B": "Widget",
      "C": "StatelessWidget",
      "D": "Container",
      "E": "Scaffold"
    },
    "correct": "C",
    "answerRaw": "C) StatelessWidget",
    "explanation": "Kendi arayüz bileşenimizi oluşturmak istiyorsak genellikle StatelessWidget veya \nStatefulWidget sınıflarından miras alırız.\nEğer widget içinde kullanıcı etkileşimine bağlı değişen bir durum yoksa, yani\narayüz sabit verilerle çiziliyorsa StatelessWidget kullanmak uygundur.\n\nÖrnek:\nclass BaslikYazisi extends StatelessWidget {\n const BaslikYazisi({super.key});\n @override\n Widget build(BuildContext context) {\n return Text(\"Merhaba Flutter\");\n }\n}",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-022",
    "sourceNo": 22,
    "sourcePage": 15,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Bir Flutter uygulamasının çalışma zamanı davranışlarını takip\netmek için kullanılan araç setinin adı aşağıdakilerden hangisidir?",
    "options": {
      "A": "VisualStudioCode",
      "B": "Android SDK Manager",
      "C": "DevelopmentTools",
      "D": "DartDevTools",
      "E": "VirtualDeviceManager"
    },
    "correct": "D",
    "answerRaw": "D) DartDevTools",
    "explanation": "Flutter ve Dart uygulamalarının çalışma zamanı davranışlarını incelemek için Dart\nDevTools kullanılır.\nDevTools ile:\nperformans,\nbellek kullanımı,\nwidget ağacı,\nlog kayıtları,\nağ istekleri\n\ngibi bilgiler takip edilebilir. Kısacası DevTools, uygulamanın içeride nasıl çalıştığını\ngörmemizi sağlayan araç setidir.",
    "tags": [
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-023",
    "sourceNo": 23,
    "sourcePage": 16,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "–enable-windows-desktop ifadesi Windows işletim sistemi için\nFlutter projesi yazmayı mümkün kılar. Bu ifade hangi terminal\nkomutuna parametre olarak yazılır?",
    "options": {
      "A": "flutter doctor",
      "B": "flutter platform",
      "C": "flutter create",
      "D": "flutter config",
      "E": "flutter enable"
    },
    "correct": "D",
    "answerRaw": "D) flutter config",
    "explanation": "Flutter’da masaüstü platform desteği gibi bazı özellikler yapılandırma komutlarıyla\naçılır. Bu tür ayarlar için flutter config komutu kullanılır.\nÖrnek:\nflutter config --enable-windows-desktop\nBu komut, Windows masaüstü uygulaması geliştirme desteğini etkinleştirmek için\nkullanılır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-024",
    "sourceNo": 24,
    "sourcePage": 16,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Flutter uygulamasının performansı hakkında aşağıdakilerden\nhangisi doğrudur?",
    "options": {
      "A": "Uygulamanın oluşan Android ve iOS paket boyutu cihaza marketten indirilen\nboyutundan daha büyük olmaktadır.",
      "B": "Ekranda yenilenecek kısımları yönetmek için geniş tek bir StatefulWidget\nkullanımı performansı iyileştirir.",
      "C": "Widget ağacında iç içe yer alan birden fazla StatelessWidget için sadece bir tane \nbuild() metodu çalışır.",
      "D": "Alt elemanlar değişmese bile yeniden çizimde tüm alt ağaç baştan render\nedilmek zorundadır ve bunu önleyecek çözüm yoktur.",
      "E": "Flutter uygulamaları farklı platformlar için tek bir dağıtım paketi üzerinden\npaylaştırılır."
    },
    "correct": "A",
    "answerRaw": "A) Uygulamanın oluşan Android ve iOS paket boyutu cihaza\nmarketten indirilen boyutundan daha büyük olmaktadır.",
    "explanation": "Uygulamalar mağazadan indirilirken sıkıştırılmış paketler halinde gelir. Cihaza\nkurulduktan sonra uygulamanın kapladığı alan, indirilen paket boyutundan daha\nbüyük olabilir.\nDiğer seçeneklerdeki ifadeler doğru değildir. Örneğin performans için genellikle\nçok geniş tek bir StatefulWidget yerine, değişen bölümleri daha küçük ve\nyönetilebilir widget’lara ayırmak daha sağlıklı bir yaklaşımdır.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-025",
    "sourceNo": 25,
    "sourcePage": 17,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Scaffold bileşeni için aşağıdaki ifadelerden hangisi yanlıştır?",
    "options": {
      "A": "home adında bir parametresi vardır.",
      "B": "body adında bir parametresi vardır.",
      "C": "appBar adında bir parametresi vardır.",
      "D": "Projenin arayüz bileşeni ağacında olması zorunlu değildir.",
      "E": "Android’in klasik uygulama ana ekranına benzer bir sayfa iskeleti oluşturur."
    },
    "correct": "A",
    "answerRaw": "A) home adında bir parametresi vardır.",
    "explanation": "Scaffold , Flutter’da temel sayfa iskeleti oluşturmak için kullanılır. appBar , body , \nfloatingActionButton , drawer gibi parametreleri vardır.\nAncak home parametresi Scaffold ’a değil, genellikle MaterialApp widget’ına aittir.\nÖrnek:\nMaterialApp(\n home: Scaffold(\n appBar: AppBar(title: Text(\"Başlık\")),\n\n body: Text(\"İçerik\"),\n ),\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-026",
    "sourceNo": 26,
    "sourcePage": 18,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "Bir paketin belli bir sürümünün kullanımı zorunluysa bunu\nbelirtmek için pubspec.yaml dosyasında hangi başlık kullanılır?",
    "options": {
      "A": "dependency_must",
      "B": "dependency_overrides",
      "C": "dependency_mandatory",
      "D": "dependency_downgrade",
      "E": "dependency_chosen"
    },
    "correct": "B",
    "answerRaw": "B) dependency_overrides",
    "explanation": "dependency_overrides , normal bağımlılık çözümlemesini geçersiz kılarak belirli bir\npaketin belirli bir sürümünü kullanmaya zorlamak için kullanılabilir.\nÖrnek:\ndependency_overrides:\n http: 1.2.0\nBu yapı dikkatli kullanılmalıdır. Çünkü bağımlılıkları zorla değiştirmek, başka\npaketlerle sürüm uyumsuzluklarına neden olabilir.",
    "tags": [
      "pubspec"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-027",
    "sourceNo": 27,
    "sourcePage": 18,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Aşağıdakilerden hangisi Flutter Navigator API’ında bulunan\ntemel bileşenlerden biri değildir?",
    "options": {
      "A": "Router",
      "B": "Screen",
      "C": "Page",
      "D": "Navigator",
      "E": "Route"
    },
    "correct": "B",
    "answerRaw": "B) Screen",
    "explanation": "Flutter’da sayfa geçişleri için Navigator , Route , Page ve yeni yönlendirme\nyapılarında Router gibi bileşenler kullanılır.\nScreen ise Flutter Navigator API’ın temel bir bileşeni değildir. Geliştiriciler sayfa\nsınıflarına kendi projelerinde HomeScreen , LoginScreen gibi isimler verebilir; fakat bu,\nAPI’a ait özel bir sınıf anlamına gelmez.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-028",
    "sourceNo": 28,
    "sourcePage": 19,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Dart programlama dilinde bir sınıf içerisinde yukarıdaki kodun\nişlevini aşağıdakilerden hangisi doğru ifade etmektedir?",
    "options": {
      "A": "right sınıf içinde sadece okunabilir bir tanımlama olarak eklenir.",
      "B": "right sınıf içinde sadece yazılabilir bir tanımlama olarak eklenir.",
      "C": "get adında yeni bir değişken tanımlanmaktadır.",
      "D": "left ve width değerleri güncellenmek istendiğinde bu satır çalıştırılır.",
      "E": "right adında yeni bir değişken tanımlanmaktadır."
    },
    "correct": "A",
    "answerRaw": "A) right sınıf içinde sadece okunabilir bir tanımlama olarak eklenir.",
    "explanation": "Bu soru büyük olasılıkla getter kullanımını sormaktadır. Dart’ta get ile tanımlanan\nyapı, dışarıdan normal bir özellik gibi okunabilir.\nÖrnek:\ndouble get right => left + width;\nBu ifade right adında saklanan ayrı bir değişken oluşturmaz. right okunduğunda \nleft + width hesabı yapılır. Setter tanımlanmadığı için sadece okunabilir bir özellik\ngibi davranır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-029",
    "sourceNo": 29,
    "sourcePage": 19,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’da provider kütüphanesindeki uygulama seviyesi\ndurum yönetiminde notifyListeners() fonksiyon çağrısı ne\nzaman yapılır?",
    "options": {
      "A": "Yeni bir veri modeli ekleneceği zaman",
      "B": "Veri modelinde bir değişiklik olduğu zaman",
      "C": "Yeni bir provider tanımlandığı zaman",
      "D": "Yeni bir consumer tanımlandığı zaman",
      "E": "Widget ağacında bir değişiklik olduğu zaman"
    },
    "correct": "B",
    "answerRaw": "B) Veri modelinde bir değişiklik olduğu zaman",
    "explanation": "Provider kullanımında model sınıfı genellikle ChangeNotifier sınıfından türetilir.\nModeldeki veri değiştiğinde notifyListeners() çağrılır.\nBu çağrı, modeli dinleyen widget’lara “Veri değişti, arayüzü güncellemeniz\ngerekebilir” mesajı gönderir.\nÖrnek:\nvoid arttir() {\n sayac++;\n notifyListeners();\n}",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-030",
    "sourceNo": 30,
    "sourcePage": 20,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Mobil Ekosistem",
    "question": "Aşağıdakilerden hangisi 2021 yılında Flutter’ın desteklemediği\nbir ortam / işletim sistemi adıdır?",
    "options": {
      "A": "iOS",
      "B": "Android",
      "C": "HarmonyOS",
      "D": "Windows",
      "E": "Linux"
    },
    "correct": "C",
    "answerRaw": "C) HarmonyOS",
    "explanation": "Flutter; Android ve iOS geliştirme için yaygın olarak kullanılır. Ayrıca web ve\nmasaüstü platformları için de destek geliştirilmiştir.\n\nAncak seçenekler içinde HarmonyOS, Flutter’ın klasik resmî hedef platformları\narasında yer almaz. Bu nedenle doğru cevap HarmonyOS’tur.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-031",
    "sourceNo": 31,
    "sourcePage": 21,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "setState içinde _active değeri güncellenmişse ve bu\ndeğere göre içteki widget arka plan rengini seçecekse, dış\nseviyedeki veri içteki widget’a hangi yöntemle aktarılır?",
    "options": {
      "A": "Scaffold widget’ının child parametresine beslenecek fonksiyonla",
      "B": "Hiyerarşide içeride kalan widget’ın yapıcı fonksiyonuyla",
      "C": "StatefulWidget ’ın createState fonksiyonuyla",
      "D": "Hiyerarşide içeride kalan widget’ın build fonksiyonuyla",
      "E": "StatefulWidget ’ın yapıcı fonksiyonuyla"
    },
    "correct": "B",
    "answerRaw": "B) Hiyerarşide içeride kalan widget’ın yapıcı fonksiyonuyla",
    "explanation": "Flutter’da veri genellikle üst widget’tan alt widget’a constructor üzerinden aktarılır.\nÖrnek:\nRenkKutusu(active: _active)\nBurada _active , üst widget’ın state bilgisidir. Alt widget bu değeri constructor ile\nalır ve kendi arayüzünü buna göre oluşturur.",
    "tags": [
      "state",
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-032",
    "sourceNo": 32,
    "sourcePage": 21,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Platform İzinleri",
    "question": "Android işletim sisteminde internet erişimine sahip olabilmek\niçin ilgili izin kodu hangi dosyaya yazılmalıdır?",
    "options": {
      "A": "Configuration.xml",
      "B": "config.ini",
      "C": "initialize.json",
      "D": "pubspec.yaml",
      "E": "AndroidManifest.xml"
    },
    "correct": "E",
    "answerRaw": "E) AndroidManifest.xml",
    "explanation": "Android’de internet izni gibi uygulama izinleri AndroidManifest.xml dosyasında\ntanımlanır.\nÖrnek:\n<uses-permission \nname=\"android.permission.INTERNET\" /\n>\nFlutter projelerinde bu dosya genellikle şu konumda bulunur:\nandroid/app/src/main/AndroidManifest.xml",
    "tags": [
      "pubspec"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-033",
    "sourceNo": 33,
    "sourcePage": 22,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "SQLite ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
    "options": {
      "A": "SQLite ilişkisel bir veritabanı modeli sunar.",
      "B": "Bir kolonda farklı satırlarda farklı değer türünde veri saklanabilir.",
      "C": "İşletim sistemi içerisinde sürekli açık bir SQLite servisi çalışmak zorundadır.\nUygulamalar bu servis sayesinde veritabanlarına erişir.",
      "D": "iOS ve Android işletim sistemlerinde yerel olarak gelmektedir. Akıllı telefon\nuygulamalarında doğrudan kullanılabilir.",
      "E": "DateTime veri türü SQLite veritabanında tanımlı bir veri türü değildir; zaman\nverileri sayı veya String olarak saklanabilir."
    },
    "correct": "C",
    "answerRaw": "C) İşletim sistemi içerisinde sürekli açık bir SQLite servisi çalışmak\nzorundadır.",
    "explanation": "SQLite, sunucu gerektirmeyen gömülü bir veritabanıdır. MySQL veya PostgreSQL\ngibi sürekli çalışan ayrı bir veritabanı servisine ihtiyaç duymaz.\nBu nedenle “işletim sistemi içinde sürekli açık bir SQLite servisi çalışmak\nzorundadır” ifadesi yanlıştır.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-034",
    "sourceNo": 34,
    "sourcePage": 22,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Flutter’da sayfanın üst kısmındaki başlık bölümünün, liste\naşağı kaydırıldığında gizlenmesi isteniyorsa hangi widget türü\nkullanılmalıdır?\nandroid:",
    "options": {
      "A": "Platinum",
      "B": "Gold",
      "C": "Dust",
      "D": "Silver",
      "E": "Bronze"
    },
    "correct": "D",
    "answerRaw": "D) Silver",
    "explanation": "Buradaki seçeneklerde “Silver” yazsa da Flutter’daki doğru kavram Sliver\nyapılarıdır.\nKaydırma ile birlikte davranan özel başlık ve liste yapıları için SliverAppBar , \nSliverList , CustomScrollView gibi widget’lar kullanılır.\nÖrnek:\nCustomScrollView(\n slivers: [\n SliverAppBar(\n title: Text(\"Başlık\"),\n floating: true,\n ),\n SliverList(\n delegate: SliverChildListDelegate([...]),\n ),\n ],\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-035",
    "sourceNo": 35,
    "sourcePage": 23,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Aşağıdaki ifadelerden hangisi Flutter çerçevesi için yanlış bir\nbilgidir?",
    "options": {
      "A": "Dart programlama dilinde görebileceğiniz her şey bir objedir.",
      "B": "Dart programlama dili güçlü tip tanımlı bir dildir.",
      "C": "Dart; global, yerel ve static değişken tanımlamalarına izin verir.",
      "D": "Dart’ta bir değişkenin herhangi bir türden veri tutmasını istiyorsak Object\ntüründe oluşturulabilir.",
      "E": "Flutter, Dart’tan bağımsız ayrı bir programlama dilidir."
    },
    "correct": "E",
    "answerRaw": "E) Flutter, Dart’tan bağımsız ayrı bir programlama dilidir.",
    "explanation": "Flutter bir programlama dili değildir. Flutter, Dart diliyle kullanılan bir UI framework\nyani arayüz geliştirme çatısıdır.\nProgramlama dili Dart’tır; Flutter ise bu dille mobil, web ve masaüstü arayüzleri\ngeliştirmeyi sağlayan framework’tür.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-036",
    "sourceNo": 36,
    "sourcePage": 24,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Dart programlama dili için aşağıdaki ifadelerden hangisi\nyanlıştır?",
    "options": {
      "A": "Fonksiyon tanımlamasında parametrelerin türünün belirtilmesi zorunlu değildir.",
      "B": "Fonksiyon tanımlamasında geri dönüş türünün yazılması zorunlu değildir.",
      "C": "Fonksiyon tanımlamasında fonksiyona bir isim verilmesi zorunlu değildir.",
      "D": "Fonksiyon çağrısında normal parametrelere değer girilmesi zorunlu değildir.",
      "E": "Fonksiyon tanımlamasında return ile geri dönüş yoksa fonksiyon null değer\ndöner."
    },
    "correct": "D",
    "answerRaw": "D) Fonksiyon çağrısında normal parametrelere değer girilmesi\nzorunlu değildir.",
    "explanation": "Dart’ta normal, yani zorunlu konumsal parametreler varsa fonksiyon çağrılırken bu\ndeğerlere karşılık gelen argümanlar verilmelidir.\nÖrnek:\nvoid selamla(String isim) {\n print(\"Merhaba $isim\");\n}\n\nselamla(\"Ali\"); // Doğru\n// selamla(); // Hata\nParametrelerin isteğe bağlı olması için [] veya {} yapılarıyla tanımlanması\ngerekir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-037",
    "sourceNo": 37,
    "sourcePage": 25,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Mobil Ekosistem",
    "question": "2010-2020 yılları arasındaki istatistiklere göre 2020 civarında\nakıllı telefon pazarında en fazla kullanılan işletim sistemi\nhangisidir?",
    "options": {
      "A": "SymbianOS",
      "B": "WindowsPhone",
      "C": "HarmonyOS",
      "D": "iOS",
      "E": "Android"
    },
    "correct": "E",
    "answerRaw": "E) Android",
    "explanation": "2020 civarında akıllı telefon pazarında en yaygın kullanılan işletim sistemi\nAndroid’dir. iOS da büyük bir paya sahiptir; ancak dünya genelinde kullanıcı sayısı\nbakımından Android daha yaygındır.\nSymbianOS ve WindowsPhone ise bu dönemde eski önemini büyük ölçüde\nkaybetmiştir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-038",
    "sourceNo": 38,
    "sourcePage": 25,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Aşağıdakilerden hangisi Navigator 2.0 API ile gelen\nbileşenlerden biri değildir?",
    "options": {
      "A": "RouterDelegate",
      "B": "Router",
      "C": "Page",
      "D": "RouterInformationParser",
      "E": "Scaffold"
    },
    "correct": "E",
    "answerRaw": "E) Scaffold",
    "explanation": "Navigator 2.0; Router , RouterDelegate , RouteInformationParser ve Page gibi\nyönlendirme kavramlarıyla ilişkilidir.\nScaffold ise yönlendirme API’ının bir parçası değildir. Sayfa iskeleti oluşturmak için\nkullanılan bir arayüz widget’ıdır.",
    "tags": [
      "navigator",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-039",
    "sourceNo": 39,
    "sourcePage": 26,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "GridView düzenleyici arayüz bileşeni için aşağıdaki\ntanımlardan hangisi uygundur?",
    "options": {
      "A": "Kaydırılabilir bir ızgara görünümü sağlar.",
      "B": "İç boşluk, dış boşluk, kenarlık ve arka plan rengi gibi özellikleri atamayı sağlar.",
      "C": "Önemli noktaları vurgulamak için köşeleri yuvarlatılmış ve gölge efekti olan bir\nçerçeve sağlar.",
      "D": "İçeriğin üst üste bindirilmesini sağlar.",
      "E": "Kaydırılabilir bir liste görünümü sağlar."
    },
    "correct": "A",
    "answerRaw": "A) Kaydırılabilir bir ızgara görünümü sağlar.",
    "explanation": "GridView , Flutter’da elemanları satır ve sütunlardan oluşan kaydırılabilir bir ızgara\ndüzeninde göstermek için kullanılır.\nÖrnek kullanım alanları:\nfotoğraf galerisi,\nürün kartları,\nkategori kutuları,\nikon menüleri.\nListView kaydırılabilir liste sağlar; GridView ise kaydırılabilir ızgara sağlar.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-040",
    "sourceNo": 40,
    "sourcePage": 26,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’da provider kütüphanesindeki Consumer widget’ının \nbuilder parametresindeki child parametresi hangi amaçla\nkullanılır?",
    "options": {
      "A": "Consumer altında güncellenme işleminin başlayacağı noktayı ifade etmek için",
      "B": "Consumer altında güncellenmesine gerek olmayan ağacı ifade etmek için",
      "C": "Aynı bileşenden birden fazla varsa hangisinin Consumer widget’ı tarafından\nyönetildiğini bildirmek için",
      "D": "Widget ağacında güncellenmesi gereken yeri ifade etmek için",
      "E": "Kullanıcı etkileşimlerini yakalayacak widget bileşenlerinin çizilmesi için"
    },
    "correct": "B",
    "answerRaw": "B) Consumer altında güncellenmesine gerek olmayan ağacı ifade etmek\niçin",
    "explanation": "Consumer içindeki builder , provider’daki veri değiştiğinde yeniden çalışır. Ancak\nbazı alt widget’ların bu değişimden etkilenmesi gerekmez.\nİşte child parametresi bu noktada kullanılır. Değişmeyen widget ağacı child olarak\nverilir ve gereksiz yeniden oluşturma maliyeti azaltılır.\nÖrnek:\nConsumer<SayacModel>(\n child: const Text(\"Bu metin değişmez\"),\n builder: (context, value, child) {\n return Column(\n children: [\n Text(\"Sayaç: ${value.sayac}\"),\n child!,\n ],\n );\n },\n)",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-041",
    "sourceNo": 41,
    "sourcePage": 27,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Mobil Ekosistem",
    "question": "Akıllı telefonlarla önceki dönem klasik cep telefonlarını ayıran\nbelirgin özellik aşağıdakilerden hangisidir?",
    "options": {
      "A": "Sonradan uygulama yükleme imkânı",
      "B": "Destekledikleri donanımsal özellikler",
      "C": "Yapay zekâ modülü içermeleri",
      "D": "Dünya pazarındaki yayılma şekli",
      "E": "3G şebekesini kullanması"
    },
    "correct": "A",
    "answerRaw": "A) Sonradan uygulama yükleme imkânı",
    "explanation": "Akıllı telefonları klasik cep telefonlarından ayıran en belirgin özelliklerden biri,\nkullanıcıların sonradan uygulama yükleyebilmesidir.\nBu sayede telefon yalnızca arama ve mesajlaşma aracı olmaktan çıkar; bankacılık,\noyun, eğitim, harita, sosyal medya ve üretkenlik uygulamalarıyla genişletilebilir\nhale gelir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-042",
    "sourceNo": 42,
    "sourcePage": 28,
    "largeDeck": "Flutter ve Dart",
    "smallDeck": "Genel Tekrar",
    "question": "Bir Flutter projesinde iç içe klasörlerde aynı isimli resim\ndosyaları varsa, en dış klasördeki resim dosyasının konfigürasyon\ndosyasında gösterilmesi diğerlerini de projeye dahil eder. Flutter\nbu diğer resim dosyalarını hangi amaçla dahil eder?",
    "options": {
      "A": "Farklı telefon modellerinde kullanmak",
      "B": "Dosyaların parçalı saklanmasından dolayı",
      "C": "İnternetten dosya indirmemek",
      "D": "Farklı işletim sistemlerinde kullanmak",
      "E": "Farklı temalarda kullanmak"
    },
    "correct": "A",
    "answerRaw": "A) Farklı telefon modellerinde kullanmak",
    "explanation": "Flutter’da görseller farklı ekran yoğunlukları için farklı çözünürlüklerde\nhazırlanabilir. Örneğin aynı görselin 2.0x veya 3.0x klasörlerinde farklı boyutlu\nsürümleri bulunabilir.\nFlutter, cihazın ekran yoğunluğuna en uygun görseli seçerek daha net ve kaliteli\ngörüntü sağlar. Bu nedenle aynı isimli farklı görseller farklı cihaz türleri ve ekran\nyoğunlukları için projeye dahil edilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-043",
    "sourceNo": 43,
    "sourcePage": 28,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdaki operatörlerden hangisi bir listedeki içeriği başka bir\nlisteye kopyalamak için kullanılır?",
    "options": {
      "A": ":",
      "B": "..",
      "C": "...?",
      "D": "??=",
      "E": "=>"
    },
    "correct": "C",
    "answerRaw": "C) ...?",
    "explanation": "Dart’ta bir listenin elemanlarını başka bir listenin içine açarak eklemek için spread\noperatörü kullanılır.\nEğer liste null olabilir ise ...? kullanılır:\nList<int>? sayilar;\nvar yeniListe = [...?sayilar, 4, 5];\nBurada sayilar null ise hata oluşmaz; sadece ekleme yapılmaz.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-044",
    "sourceNo": 44,
    "sourcePage": 29,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter’ın animasyon oluşturmak için hazır sunduğu \nAnimatedContainer gibi widget’larla gerçekleştirilen animasyon\ntürü hangisidir?",
    "options": {
      "A": "AnimatedWidget",
      "B": "Explicit Animations",
      "C": "AnimationBuilder",
      "D": "Hero Animations",
      "E": "Implicit Animations"
    },
    "correct": "E",
    "answerRaw": "E) Implicit Animations",
    "explanation": "AnimatedContainer , AnimatedOpacity , AnimatedPadding gibi widget’lar implicit animation\nörnekleridir.\nBu tür animasyonlarda geliştirici animasyon denetleyicisini ayrıntılı biçimde\nyönetmez. Sadece yeni değeri ve süreyi belirtir; Flutter geçişi kendisi yumuşak\n\nşekilde oluşturur.\nÖrnek:\nAnimatedContainer(\n duration: const Duration(seconds: 1),\n width: aktifMi ? 200 : 100,\n height: 100,\n color: aktifMi ? Colors.blue : Colors.red,\n)",
    "tags": [
      "widget",
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-045",
    "sourceNo": 45,
    "sourcePage": 30,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Bir satırda sağdan sola birden fazla görsel arayüz bileşenini\nyerleştirmek için kullanılan düzenleyici widget hangisidir?",
    "options": {
      "A": "Stack",
      "B": "Column",
      "C": "Text",
      "D": "Row",
      "E": "Container"
    },
    "correct": "D",
    "answerRaw": "D) Row",
    "explanation": "Row , çocuk widget’ları yatay eksende yerleştirir. Yani elemanları bir satır üzerinde\nyan yana dizer.\nRow(\n children: [\n Icon(Icons.star),\n Text(\"Favori\"),\n ],\n)\nDikey sıralama için ise Column kullanılır.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-046",
    "sourceNo": 46,
    "sourcePage": 31,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "flutter create name1 komutu çalıştırıldığında ne\ngerçekleşir?",
    "options": {
      "A": "name1 adında bir sınıf oluşturur.",
      "B": "name1 adında bir proje klasörü oluşturur.",
      "C": "name1 adında bir Dart dosyası oluşturur.",
      "D": "name1 adında bir kütüphane oluşturur.",
      "E": "name1 adında bir değişken oluşturur."
    },
    "correct": "B",
    "answerRaw": "B) name1 adında bir proje klasörü oluşturur.",
    "explanation": "flutter create komutu yeni bir Flutter projesi oluşturmak için kullanılır.\nflutter create name1\nBu komut çalıştırıldığında name1 adlı proje klasörü ve Flutter projesi için gerekli\ntemel dosyalar oluşturulur.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-047",
    "sourceNo": 47,
    "sourcePage": 31,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "pubspec.yaml dosyasındaki dependencies kısmında paket\nyönetiminin en güncel uyumlu sürümü bulması için versiyon\nnumarası önüne hangi sembol gelir?",
    "options": {
      "A": "+",
      "B": "^",
      "C": "%",
      "D": "*",
      "E": "?"
    },
    "correct": "B",
    "answerRaw": "B) ^",
    "explanation": "^ sembolü, paket için uyumlu sürüm aralığını belirtir.\nÖrneğin:\n\ndependencies:\n provider: ^6.0.0\nBu ifade, 6.0.0 sürümünden başlayarak uyumlu yeni sürümlerin kullanılabileceğini\ngösterir.",
    "tags": [
      "pubspec",
      "state"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-048",
    "sourceNo": 48,
    "sourcePage": 32,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "https://pub.dev internet adresi aşağıdaki tanımlardan\nhangisi için hizmet verir?",
    "options": {
      "A": "Flutter ve Dart için açık kaynak kütüphanelerin paylaşıldığı yer",
      "B": "Flutter ve Dart uygulamalarının çevrimiçi yazılıp çalıştırılabileceği yer",
      "C": "Dart programlama dilinin dokümantasyonunun bulunduğu yer",
      "D": "Flutter çerçevesi dokümantasyonunun bulunduğu yer",
      "E": "Android ve iOS işletim sistemlerinin özelliklerinin anlatıldığı yer"
    },
    "correct": "A",
    "answerRaw": "A) Flutter ve Dart için açık kaynak kütüphanelerin paylaşıldığı yer",
    "explanation": "pub.dev , Dart ve Flutter paketlerinin paylaşıldığı resmi paket deposudur.\nGeliştiriciler burada paket arayabilir, paketlerin sürümlerini inceleyebilir ve \npubspec.yaml dosyasına eklemek için gerekli kurulum bilgisini bulabilir.",
    "tags": [
      "pubspec",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-049",
    "sourceNo": 49,
    "sourcePage": 32,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "void gorunum({bool kalin = false, bool gizli = false}) \n{...} şeklinde tanımlanan gorunum fonksiyonu gorunum(kalin: \ntrue); şeklinde çağrılırsa aşağıdakilerden hangisi doğrudur?",
    "options": {
      "A": "gizli parametresi null değeri alır.",
      "B": "gizli parametresi verilmediği için kod derlenemez.",
      "C": "gizli parametresinin değeri daha sonra gorunum.gizli = true; şeklinde atanır.",
      "D": "gizli parametresi false değeri alır.",
      "E": "gizli parametresi true değeri alır."
    },
    "correct": "D",
    "answerRaw": "D) gizli parametresi false değeri alır.",
    "explanation": "Bu fonksiyonda kalin ve gizli isimlendirilmiş parametrelerdir. İkisine de\nvarsayılan değer olarak false verilmiştir.\nÇağrıda sadece kalin: true gönderilirse:\nkalin → true\ngizli → varsayılan değeri olan false\nolur.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-050",
    "sourceNo": 50,
    "sourcePage": 33,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "Flutter’da dosya sistemindeki farklı klasörlerin yollarını elde\netmek için kullanılan paket hangisidir?",
    "options": {
      "A": "url_luncher",
      "B": "path_provider",
      "C": "data_connect",
      "D": "directory_search",
      "E": "file_finder"
    },
    "correct": "B",
    "answerRaw": "B) path_provider",
    "explanation": "path_provider , Flutter’da cihazdaki yaygın dosya konumlarına erişmek için kullanılır.\nÖrneğin:\ngeçici klasör,\nuygulama belgeleri klasörü,\ndestek dosyaları klasörü\ngibi dizinlerin yolunu almak için tercih edilir.",
    "tags": [
      "state",
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-051",
    "sourceNo": 51,
    "sourcePage": 33,
    "largeDeck": "Flutter",
    "smallDeck": "Asenkron, JSON ve Firebase",
    "question": "Flutter’da bir Future objesinden dönen sonucun ekrana\nyansıtılması için kullanılan widget hangisidir?",
    "options": {
      "A": "FutureStream",
      "B": "FutureWidget",
      "C": "FutureBuilder",
      "D": "Oracle",
      "E": "BackToTheFuture"
    },
    "correct": "C",
    "answerRaw": "C) FutureBuilder",
    "explanation": "FutureBuilder , bir Future tamamlandığında gelen sonuca göre arayüz oluşturmak\niçin kullanılır.\nÖrneğin:\nveri beklenirken yükleniyor göstermek,\nveri gelince sonucu ekrana basmak,\nhata olursa hata mesajı göstermek\niçin oldukça kullanışlıdır.\nFutureBuilder<String>(\n future: veriGetir(),\n builder: (context, snapshot) {\n if (snapshot.connectionState == ConnectionState.waiting) \n{\n return CircularProgressIndicator();\n }\n return Text(snapshot.data ?? \"Veri yok\");\n },\n)",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-052",
    "sourceNo": 52,
    "sourcePage": 34,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "flutter_test paketiyle widget testi yapılırken widget’ın test\nortamında oluşturulması için hangi sınıf ve fonksiyon çifti\nkullanılır?",
    "options": {
      "A": "Tester – pump",
      "B": "Finder – findWidget",
      "C": "Matcher – findOneWidget",
      "D": "WidgetTester – pumpWidget",
      "E": "TestWidget – tester"
    },
    "correct": "D",
    "answerRaw": "D) WidgetTester – pumpWidget",
    "explanation": "Flutter widget testlerinde WidgetTester sınıfı kullanılır. Test edilecek widget’ı test\nortamına yerleştirmek için pumpWidget() fonksiyonu çağrılır.\nÖrnek:\ntestWidgets('Başlık görünür mü?', (WidgetTester tester) async \n{\n await tester.pumpWidget(const MyApp());\n expect(find.text('Merhaba'), findsOneWidget);\n});",
    "tags": [
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-053",
    "sourceNo": 53,
    "sourcePage": 35,
    "largeDeck": "Dart",
    "smallDeck": "Sınıf, Nesne ve Kalıtım",
    "question": "Dart’ta bir sınıf tanımlanırken mixin kullanarak miras alma\nyapılacaksa mixin adları hangi anahtar kelimeden sonra sıralanır?",
    "options": {
      "A": "with",
      "B": "on",
      "C": "implements",
      "D": "extends",
      "E": "parent"
    },
    "correct": "A",
    "answerRaw": "A) with",
    "explanation": "Dart’ta mixin’ler bir sınıfa with anahtar kelimesiyle eklenir.\nclass PopYildizi extends Sanatci with Sarkici, Dansci {}\nBurada PopYildizi , Sanatci sınıfından miras alır; ayrıca Sarkici ve Dansci\nmixin’lerinin yeteneklerini kullanır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-054",
    "sourceNo": 54,
    "sourcePage": 36,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "GridView düzenleyici arayüz bileşeni için aşağıdaki\ntanımlardan hangisi uygundur?",
    "options": {
      "A": "İçeriğin üst üste bindirilmesini sağlar.",
      "B": "Önemli noktaları vurgulamak için köşeleri yuvarlatılmış ve gölge efekti olan bir\nçerçeve sağlar.",
      "C": "Kaydırılabilir bir liste görünümü sağlar.",
      "D": "İç boşluk, dış boşluk, kenarlık ve arka plan rengi gibi özellikleri atamayı sağlar.",
      "E": "Kaydırılabilir bir ızgara görünümü sağlar."
    },
    "correct": "E",
    "answerRaw": "E) Kaydırılabilir bir ızgara görünümü sağlar.",
    "explanation": "GridView , elemanları satır ve sütunlardan oluşan ızgara düzeninde göstermek için\nkullanılır.\nFotoğraf galerileri, ürün kartları veya ikon menüleri gibi çok sayıda öğenin düzenli\nkutucuklar halinde gösterilmesi gerektiğinde tercih edilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-055",
    "sourceNo": 55,
    "sourcePage": 36,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "AssetImage('icons/heart.png', package: 'my_icons') kod\nparçacığının işlevi aşağıdakilerden hangisidir?",
    "options": {
      "A": "Resim dosyalarının uygulama içerisinde erişilebilmesi için bir kütüphane yolu\ntanımlar.",
      "B": "heart.png dosyasını my_icons kütüphanesi içerisine yükler.",
      "C": "Projedeki icons klasörü altındaki heart.png dosyasına erişir ve kod içerisinde \nmy_icons olarak kullanır.",
      "D": "my_icons adında yeni bir kütüphane oluşturur ve içerisine icons/heart.png\ndosyasını kopyalar.",
      "E": "my_icons adındaki kütüphanede icons/heart.png yoluyla belirtilen resim dosyasını\nkullanır."
    },
    "correct": "E",
    "answerRaw": "E) my_icons adındaki kütüphanede icons/heart.png yoluyla belirtilen\nresim dosyasını kullanır.",
    "explanation": "AssetImage ile bir görsel asset’i kullanılabilir. package: 'my_icons' ifadesi, görselin ana\nuygulamadan değil, my_icons adlı paketten geleceğini belirtir.\nYani bu kod, my_icons paketinin içindeki icons/heart.png görseline erişmek için\nkullanılır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-056",
    "sourceNo": 56,
    "sourcePage": 37,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "Flutter ekibinin kullanım için önerdiği kütüphaneleri sunduğu\nprogramın adı hangisidir?",
    "options": {
      "A": "Editors Choice",
      "B": "Best Practice",
      "C": "Flutter Favorite",
      "D": "Flutter Best",
      "E": "Jet Pack"
    },
    "correct": "C",
    "answerRaw": "C) Flutter Favorite",
    "explanation": "Flutter Favorite, Flutter ekibi tarafından özellikle önerilen ve belirli kalite ölçütlerini\nkarşılayan paketler için kullanılan etikettir.\nBu etiket, paketin Flutter ekosisteminde güvenilir ve kullanışlı görüldüğünü\ngösterir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-057",
    "sourceNo": 57,
    "sourcePage": 37,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Flutter’da sayfalar arası gezintiyi sağlayan mekanizma hangi\nisimle adlandırılır?",
    "options": {
      "A": "Router API",
      "B": "PathFinder API",
      "C": "Navigator API",
      "D": "PageProvider API",
      "E": "AppState"
    },
    "correct": "C",
    "answerRaw": "C) Navigator API",
    "explanation": "Flutter’da sayfalar arası geçişler için temel yapı Navigator API’dır.\n\nÖrneğin yeni bir sayfaya geçmek için:\nNavigator.push(\n context,\n MaterialPageRoute(builder: (context) => DetaySayfasi()),\n);\nkullanılabilir.",
    "tags": [
      "navigator",
      "state"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-058",
    "sourceNo": 58,
    "sourcePage": 38,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Aşağıdaki ihtiyaçlardan hangisi için arayüz bileşenlerinizi bir \nContainer widget’ı içerisine toplamazsınız?",
    "options": {
      "A": "İç kenar boşluğu ayarlamak için",
      "B": "Dış kenar boşluğu ayarlamak için",
      "C": "Kenar özellikleri ayarlamak için",
      "D": "İçerdiği objeleri yan yana sıralamak için",
      "E": "Arka plan rengi ayarlamak için"
    },
    "correct": "D",
    "answerRaw": "D) İçerdiği objeleri yan yana sıralamak için",
    "explanation": "Container ; padding, margin, border, width, height ve color gibi görsel düzenleme\nişleri için kullanılır.\nAncak birden fazla widget’ı yan yana sıralamak için Container değil, Row kullanılır.\nRow(\n children: [\n Icon(Icons.home),\n Text(\"Ana Sayfa\"),\n ],\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-059",
    "sourceNo": 59,
    "sourcePage": 38,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Flutter’da tüm arayüz bileşenlerinin miras alarak\noluşturuldukları kök sınıfın adı hangisidir?",
    "options": {
      "A": "Widget",
      "B": "Frame",
      "C": "Field",
      "D": "Component",
      "E": "Form"
    },
    "correct": "A",
    "answerRaw": "A) Widget",
    "explanation": "Flutter’da arayüzü oluşturan temel yapı widget kavramıdır. Text , Container , Row , \nColumn , Scaffold gibi arayüz bileşenleri Widget sınıfı ailesinden gelir.\nKısacası Flutter’da ekran, widget’lardan oluşan bir ağaç yapısıdır.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-060",
    "sourceNo": 60,
    "sourcePage": 39,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "MaterialApp arayüz bileşeninin routes parametresinin aldığı\ndeğer türü aşağıdakilerden hangisidir?",
    "options": {
      "A": "List",
      "B": "Map",
      "C": "Map",
      "D": "List",
      "E": "Map"
    },
    "correct": "B",
    "answerRaw": "B) Map",
    "explanation": "MaterialApp içindeki routes parametresi, rota adlarını ilgili sayfa oluşturucu\nfonksiyonlarla eşleştiren bir Map yapısı alır.\nÖrnek:\nMaterialApp(\n routes: {\n '/': (context) => HomePage(),\n '/detail': (context) => DetailPage(),\n\n },\n)\nBurada '/detail' gibi rota isimleri anahtar, sayfayı oluşturan fonksiyonlar ise değer\nolarak tutulur.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-061",
    "sourceNo": 61,
    "sourcePage": 40,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdaki veri türlerinden hangisi jenerik bir türdür?",
    "options": {
      "A": "double",
      "B": "List",
      "C": "Object",
      "D": "Null",
      "E": "Boolean"
    },
    "correct": "B",
    "answerRaw": "B) List",
    "explanation": "List , Dart’ta jenerik kullanılabilen bir koleksiyon türüdür.\nÖrneğin:\nList<String> isimler = [\"Ali\", \"Ayşe\"];\nList<int> sayilar = [1, 2, 3];\nBurada List<String> sadece metinleri, List<int> ise sadece tam sayıları tutar. Yani \nList , farklı türlerle kullanılabilen jenerik bir yapıdır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-062",
    "sourceNo": 62,
    "sourcePage": 40,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "Flutter projesinin en hızlı güncellemelerini alacağımız kanal\naşağıdakilerden hangisidir?",
    "options": {
      "A": "Trouble",
      "B": "Master",
      "C": "Stable",
      "D": "Beta",
      "E": "Dev"
    },
    "correct": "B",
    "answerRaw": "B) Master",
    "explanation": "Flutter’da farklı yayın kanalları vardır. stable en güvenli ve kararlı kanaldır. beta\ndaha yeni özellikleri daha erken sunar. master ise en güncel değişikliklerin en hızlı\ngeldiği kanaldır.\nAncak master kanalı en güncel olduğu için hata veya kararsızlık ihtimali de daha\nyüksektir. Günlük geliştirme için genellikle stable tercih edilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-063",
    "sourceNo": 63,
    "sourcePage": 41,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "--enable-windows-desktop ifadesi Windows işletim sistemi\niçin Flutter projesi yazmayı mümkün kılar. Bu ifade hangi terminal\nkomutuna parametre olarak yazılır?",
    "options": {
      "A": "flutter config",
      "B": "flutter platform",
      "C": "flutter create",
      "D": "flutter doctor",
      "E": "flutter enable"
    },
    "correct": "A",
    "answerRaw": "A) flutter config",
    "explanation": "Flutter’da platform desteğiyle ilgili yapılandırmalar flutter config komutuyla yapılır.\nÖrnek:\nflutter config --enable-windows-desktop\nBu komut, Windows masaüstü uygulaması geliştirme desteğini etkinleştirmek için\nkullanılır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-064",
    "sourceNo": 64,
    "sourcePage": 41,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Column widget’ı içerisindeki crossAxisAlignment parametresi\nneyi düzenler?",
    "options": {
      "A": "İçerdiği elemanların dikey taşma yapmamasını",
      "B": "İçerdiği elemanların yatay taşma yapmamasını",
      "C": "İçerdiği elemanların dikeyde yerleşimini",
      "D": "İçereceği eleman sayısının çalışma zamanı tespitini",
      "E": "İçerdiği elemanların yatayda yerleşimini"
    },
    "correct": "E",
    "answerRaw": "E) İçerdiği elemanların yatayda yerleşimini",
    "explanation": "Column , çocuk widget’ları dikey eksende dizer. Bu yüzden ana eksen dikeydir. \ncrossAxisAlignment ise bu ana eksene dik olan yatay eksendeki hizalamayı kontrol\neder.\nKısaca:\nmainAxisAlignment → dikey hizalama\ncrossAxisAlignment → yatay hizalama",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-065",
    "sourceNo": 65,
    "sourcePage": 42,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Dart programlama dili için aşağıda verilen ifadelerden hangisi\nyanlıştır?",
    "options": {
      "A": "Fonksiyon tanımlamasında fonksiyona bir isim verilmesi zorunlu değildir.",
      "B": "Fonksiyon tanımlamasında geri dönüş türünün yazılması zorunlu değildir.",
      "C": "Fonksiyon tanımlamasında return ile geri dönüş yoksa fonksiyon null değer\ndöner.",
      "D": "Fonksiyon çağrısında normal parametrelere değer girilmesi zorunlu değildir.",
      "E": "Fonksiyon tanımlamasında parametrelerin türünün belirtilmesi zorunlu değildir."
    },
    "correct": "D",
    "answerRaw": "D) Fonksiyon çağrısında normal parametrelere değer girilmesi\nzorunlu değildir.",
    "explanation": "Dart’ta normal konumsal parametreler zorunludur. Fonksiyon bir parametre\nistiyorsa, çağrılırken bu parametreye karşılık gelen değer verilmelidir.\nÖrnek:\nvoid selamla(String isim) {\n print(\"Merhaba $isim\");\n\n}\nselamla(\"Ali\"); // Doğru\n// selamla(); // Hata\nParametreyi isteğe bağlı yapmak için [] veya {} kullanılır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-066",
    "sourceNo": 66,
    "sourcePage": 43,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "Flutter projesine eklenen Material kütüphanesindeki bileşenler\naşağıdaki hangi aşamada fayda sağlar?",
    "options": {
      "A": "Aynı anda birden fazla arayüz görüntüsünün hazırlanması ve bellekte\nsaklanması",
      "B": "Uygulama içerisinde kendi özel arayüz bileşeni çözümünün üretilebilmesi",
      "C": "Kullanıcı arayüzü etkileşimlerinin dokunmatik ekran üzerinde parmak ile\ngerçekleşmesi",
      "D": "Uygulama geliştirirken Dart kodları içine Java veya Kotlin kodlarını gömebilmek",
      "E": "Material Design tarzı hazır arayüz bileşenlerinin uygulamada kullanılabilmesi"
    },
    "correct": "E",
    "answerRaw": "E) Material Design tarzı hazır arayüz bileşenlerinin uygulamada\nkullanılabilmesi",
    "explanation": "package:flutter/material.dart kütüphanesi, Flutter’da Material Design yaklaşımına\nuygun birçok hazır widget sağlar.\nÖrneğin:\nScaffold\nAppBar\nFloatingActionButton\nTextButton\nCard\nSnackBar\ngibi bileşenler bu kütüphane ile kullanılabilir.",
    "tags": [
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-067",
    "sourceNo": 67,
    "sourcePage": 44,
    "largeDeck": "Flutter",
    "smallDeck": "Asset Yönetimi",
    "question": "package:flutter/services.dart kütüphanesi üzerinden\nkullanabileceğimiz rootBundle yapısı hangi amaçla kullanılır?",
    "options": {
      "A": "Telefonun kamera, mikrofon, GPS sensörü gibi donanımlarına erişmek için",
      "B": "Widget ağacının en tepedeki elemanına erişmek için",
      "C": "Uygulama içerisindeki tüm varlıklara yani assets dosyalarına erişmek için",
      "D": "Telefonun temel konfigürasyon verilerine erişmek için",
      "E": "RAM’de her tür key-value veri çifti oluşturabilmek için"
    },
    "correct": "C",
    "answerRaw": "C) Uygulama içerisindeki tüm varlıklara yani assets dosyalarına\nerişmek için",
    "explanation": "rootBundle , uygulama paketine eklenmiş asset dosyalarını okumak için kullanılır.\nÖrnek:\nfinal text = await rootBundle.loadString('assets/data.json');\nBu kullanım, pubspec.yaml içinde tanımlanmış bir asset dosyasını uygulama içinden\nokumayı sağlar.",
    "tags": [
      "pubspec",
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-068",
    "sourceNo": 68,
    "sourcePage": 44,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Aşağıdakilerden hangisi Flutter Navigator API’ında bulunan\ntemel bileşenlerden biri değildir?",
    "options": {
      "A": "Screen",
      "B": "Route",
      "C": "Router",
      "D": "Navigator",
      "E": "Page"
    },
    "correct": "A",
    "answerRaw": "A) Screen",
    "explanation": "Flutter’da yönlendirme sistemi Navigator , Route , Page ve Router gibi kavramlarla\nçalışır.\n\nScreen ise Flutter Navigator API’ın temel bileşeni değildir. Geliştiriciler kendi sayfa\nsınıflarına HomeScreen , LoginScreen gibi isimler verebilir; ancak Screen özel bir\nNavigator API bileşeni değildir.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-069",
    "sourceNo": 69,
    "sourcePage": 45,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Mobil Ekosistem",
    "question": "2010-2020 yılları arasındaki istatistiklere göre 2020 civarında\nakıllı telefon pazarında en fazla kullanılan işletim sistemi\nhangisidir?",
    "options": {
      "A": "HarmonyOS",
      "B": "iOS",
      "C": "WindowsPhone",
      "D": "Android",
      "E": "SymbianOS"
    },
    "correct": "D",
    "answerRaw": "D) Android",
    "explanation": "2020 civarında dünya genelindeki akıllı telefon pazarında en yaygın işletim sistemi\nAndroid’dir. iOS önemli bir pazar payına sahip olsa da kullanıcı sayısı bakımından\nAndroid daha geniş bir alana yayılmıştır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-070",
    "sourceNo": 70,
    "sourcePage": 45,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Bir sınıf tanımlaması için verilen kod bloğunun çağrılma\nzamanı aşağıdakilerden hangisidir?",
    "options": {
      "A": "Sınıfın bellekte ilk örneği oluşturulurken",
      "B": "Sınıfın bellekten örneğinin silineceği zaman",
      "C": "Sınıf için tanımlı olmayan bir fonksiyon çağrılırsa",
      "D": "Sınıfın bellekte her örneği oluşturulurken",
      "E": "Sınıf için yapıcı fonksiyonlar çağrıldıktan sonra"
    },
    "correct": "D",
    "answerRaw": "D) Sınıfın bellekte her örneği oluşturulurken",
    "explanation": "Bu soru büyük olasılıkla constructor, yani yapıcı fonksiyon kullanımını sormaktadır.\nYapıcı fonksiyonlar, sınıftan her yeni nesne oluşturulduğunda çalışır.\n\nÖrnek:\nclass Araba {\n Araba() {\n print(\"Yeni araba oluşturuldu.\");\n }\n}\nvoid main() {\n Araba();\n Araba();\n}\nBu örnekte constructor iki kez çalışır; çünkü sınıftan iki ayrı nesne oluşturulmuştur.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-071",
    "sourceNo": 71,
    "sourcePage": 46,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Yukarıdaki kod satırı hata vermeden çalışan bir uygulamanın\nparçası ise yaptığı işlemle ilgili olarak aşağıdaki yorumlardan\nhangisi doğrudur?",
    "options": {
      "A": "names bir Map örneğidir ve verilen liste bu Map objesine 0, 1, 2 indeksleri ile\nkaydedilir.",
      "B": "names bir Object örneğidir ve verilen String ifadelerden sonuncusu names ’e\nkaydedilir.",
      "C": "names bir String örneğidir ve 'Seth' ifadesi names ’e kaydedilir.",
      "D": "names bir Set örneğidir ve verilen liste bu Set objesine çakışmasız kaydedilir.",
      "E": "names bir List örneğidir ve verilen liste bu List objesinin sonuna eklenir."
    },
    "correct": "E",
    "answerRaw": "E) names bir List örneğidir ve verilen liste bu List objesinin sonuna\neklenir.",
    "explanation": "Bu soru büyük olasılıkla addAll() kullanımını sormaktadır.\nÖrnek:\n\nvar names = <String>[];\nnames.addAll(['Seth', 'Kathy', 'Lars']);\nBurada names , bir List<String> örneğidir. addAll() metodu, verilen listedeki\nelemanları mevcut listenin sonuna ekler.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-072",
    "sourceNo": 72,
    "sourcePage": 47,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Yukarıdaki kod bloğunun ekran çıktısı aşağıdakilerden\nhangisidir?",
    "options": {
      "A": "NaN",
      "B": "3",
      "C": "null",
      "D": "5",
      "E": "0"
    },
    "correct": "",
    "answerRaw": "Kod bloğu eksik olduğu için kesin cevap belirlenemiyor.",
    "explanation": "Bu soruda “yukarıdaki kod bloğu” deniyor; ancak seçili metinde ilgili kod bloğu\ngörünmüyor. Bu nedenle ekran çıktısını güvenilir biçimde belirlemek mümkün\ndeğildir.\nEğer kod bloğunu da eklerseniz bu soru net şekilde cevaplanabilir. Örneğin\nseçeneklerde NaN , null , 0 , 3 , 5 gibi çok farklı sonuçlar bulunduğu için kodu\ngörmeden doğru cevabı seçmek sağlıklı olmaz.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-073",
    "sourceNo": 73,
    "sourcePage": 47,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Kendi arayüz bileşenimizi üretmek istediğimizde, widget\nsınıfında @override ile işaretleyip yazmak zorunda olduğumuz\nfonksiyon hangisidir?",
    "options": {
      "A": "runApp",
      "B": "main",
      "C": "build",
      "D": "create",
      "E": "init"
    },
    "correct": "C",
    "answerRaw": "C) build",
    "explanation": "Flutter’da kendi widget sınıfımızı oluşturduğumuzda arayüzün nasıl çizileceğini \nbuild() fonksiyonu belirler.\nÖrnek:\nclass BenimWidgetim extends StatelessWidget {\n const BenimWidgetim({super.key});\n @override\n Widget build(BuildContext context) {\n return Text(\"Merhaba\");\n }\n}\nbuild() fonksiyonu, widget’ın ekranda ne göstereceğini döndürür.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-074",
    "sourceNo": 74,
    "sourcePage": 48,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Kullanıcı etkileşimi olmayacak kendi arayüz bileşenimizi\ntasarlamak istiyorsak hangi sınıftan miras almamız uygun\nçözümdür?",
    "options": {
      "A": "Scaffold",
      "B": "StatelessWidget",
      "C": "Container",
      "D": "MaterialApp",
      "E": "Widget"
    },
    "correct": "B",
    "answerRaw": "B) StatelessWidget",
    "explanation": "Eğer widget’ın kendi içinde değişen bir durumu yoksa ve kullanıcı etkileşimine\ngöre kendini güncellemesi gerekmiyorsa StatelessWidget kullanılır.\nStatefulWidget ise değişen durum bilgisi tutan widget’lar için tercih edilir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-075",
    "sourceNo": 75,
    "sourcePage": 49,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Yukarıdaki şekilde kodlaması başlayan bir widget sınıfı için\nhangi seçenek her zaman doğrudur?",
    "options": {
      "A": "TobboxA içerisinde setState() metodu ile arayüz güncellemesi tetiklenir.",
      "B": "TobboxA widget’ı kullanıcı ile etkileşimde bulunabilir.",
      "C": "TabboxA widget’ı en dış katmandaki widget’tır.",
      "D": "TobboxA widget’ı en iç katmandaki widget’tır.",
      "E": "TobboxA widget’ı bir Container içerisinde yer almalıdır."
    },
    "correct": "B",
    "answerRaw": "B) TobboxA widget’ı kullanıcı ile etkileşimde bulunabilir.",
    "explanation": "Bu soruda atıf yapılan kod bloğu seçili metinde görünmüyor. Ancak seçeneklerden\nanlaşıldığı kadarıyla soru büyük olasılıkla bir widget sınıfının, özellikle de kullanıcı\netkileşimi alabilen bir yapı olarak tanımlanmasını sorguluyor.\nsetState() doğrudan widget sınıfının içinde değil, genellikle State sınıfı içinde\nçağrılır. Bir widget’ın en dışta veya en içte olması ise kodun yerleşimine bağlıdır. Bu\nnedenle en uygun yorum, ilgili widget’ın kullanıcı etkileşimiyle çalışabilecek bir\narayüz bileşeni olduğudur.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-076",
    "sourceNo": 76,
    "sourcePage": 49,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Flutter’daki widget’ların nasıl çalıştıklarını ve hangi\nparametreleri aldıklarını en detaylı öğrenme biçimi hangisidir?",
    "options": {
      "A": "Dart dokümantasyonundan",
      "B": "Flutter API dokümantasyonundan",
      "C": "Android API dokümantasyonundan",
      "D": "GitHub örneklerinden",
      "E": "Flutter Cookbook dokümantasyonundan"
    },
    "correct": "B",
    "answerRaw": "B) Flutter API dokümantasyonundan",
    "explanation": "Flutter widget’larının tüm constructor parametreleri, özellikleri, metotları ve\nkullanım ayrıntıları en detaylı şekilde Flutter API dokümantasyonunda bulunur.\n\nFlutter Cookbook örnek odaklıdır; API dokümantasyonu ise teknik ayrıntıları daha\nkapsamlı verir.",
    "tags": [
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-077",
    "sourceNo": 77,
    "sourcePage": 50,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Aşağıdakilerden hangisi Navigator 2.0 API ile gelen\nbileşenlerden biri değildir?",
    "options": {
      "A": "Page",
      "B": "RouterInformationParser",
      "C": "Router",
      "D": "RouterDelegate",
      "E": "Scaffold"
    },
    "correct": "E",
    "answerRaw": "E) Scaffold",
    "explanation": "Navigator 2.0 API; Page , Router , RouterDelegate ve RouteInformationParser gibi\nyönlendirme bileşenleriyle ilişkilidir.\nScaffold ise yönlendirme sisteminin bir parçası değildir. Sayfa iskeleti oluşturmak\niçin kullanılan bir Material widget’ıdır.",
    "tags": [
      "navigator",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-078",
    "sourceNo": 78,
    "sourcePage": 50,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdaki operatörlerden hangisi bir listedeki içeriği başka bir\nlisteye kopyalamak için kullanılır?",
    "options": {
      "A": "??=",
      "B": ":",
      "C": "=>",
      "D": "...?",
      "E": ".."
    },
    "correct": "D",
    "answerRaw": "D) ...?",
    "explanation": "Dart’ta bir listedeki elemanları başka bir listenin içine açmak için spread operatörü\nkullanılır.\nEğer liste null olabilir ise ...? kullanılır:\n\nList<int>? sayilar;\nvar yeniListe = [...?sayilar, 4, 5];\nBu yapı, liste null ise hata vermeden devam eder.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-079",
    "sourceNo": 79,
    "sourcePage": 51,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Aşağıdakilerden hangisi Flutter çerçevesinin arayüz\ndüzenlemesi için koyduğu kısıtlardan biri değildir?",
    "options": {
      "A": "Widget ağacı her 4 ms’de bir yenilenmek zorundadır; yenilenmezse ekranda\ntitreme olur.",
      "B": "Bir widget ekranda hangi konumda olacağını asla bilemez ve buna karar\nveremez.",
      "C": "Bir widget kendi boyutunu ancak üst seviye bileşenin verdiği kısıtlar arasında\nseçebilir.",
      "D": "Üst seviyedeki widget’ın boyutu da onun üstündeki widget’a bağlı olduğundan,\ntam widget ağacı işlenmeden arayüzün nasıl olacağı bilinemez.",
      "E": "Bir widget üst seviyeden daha büyük olmak isterse ve üst seviye yerleşimi\nbilmiyorsa, alttaki elemanın verdiği ölçü değerleri yok sayılabilir."
    },
    "correct": "A",
    "answerRaw": "A) Widget ağacı her 4 ms’de bir yenilenmek zorundadır;\nyenilenmezse ekranda titreme olur.",
    "explanation": "Flutter’da layout sistemi üst widget’tan gelen kısıtlar ve alt widget’ın seçtiği boyut\nüzerinden çalışır. Bir widget kendi konumuna tek başına karar vermez;\nkonumlandırma üst widget tarafından yapılır.\nAncak “widget ağacı her 4 ms’de bir yenilenmek zorundadır” ifadesi doğru bir\nFlutter layout kuralı değildir. Flutter genellikle ekran yenileme hızına göre kareler\nüretir; fakat böyle mutlak bir 4 ms kuralı yoktur.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-080",
    "sourceNo": 80,
    "sourcePage": 51,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "Bir paketin belli bir sürümünün kullanımı zorunluysa bunu\nbelirtmek için pubspec.yaml dosyasında hangi başlık kullanılır?",
    "options": {
      "A": "dependency_mandatory",
      "B": "dependency_overrides",
      "C": "dependency_must",
      "D": "dependency_downgrade",
      "E": "dependency_chosen"
    },
    "correct": "B",
    "answerRaw": "B) dependency_overrides",
    "explanation": "dependency_overrides , normal bağımlılık çözümlemesini geçersiz kılarak belirli bir\npaketin belirli bir sürümünün kullanılmasını zorlamak için kullanılır.\nÖrnek:\ndependency_overrides:\n http: 1.2.0\nBu özellik dikkatli kullanılmalıdır; çünkü paketler arasında sürüm uyumsuzluklarına\nyol açabilir.",
    "tags": [
      "pubspec"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-081",
    "sourceNo": 81,
    "sourcePage": 52,
    "largeDeck": "Flutter ve Dart",
    "smallDeck": "Genel Tekrar",
    "question": "Ekran tazelenmesinde kullanıcının bir sıçrama görmemesi için\nekran tazeleme süresinin kaç milisaniyeyi geçmemesi gerekir?",
    "options": {
      "A": "32",
      "B": "10",
      "C": "16",
      "D": "120",
      "E": "60"
    },
    "correct": "C",
    "answerRaw": "C) 16",
    "explanation": "Akıcı bir görüntü için çoğu uygulamada hedef yaklaşık 60 FPS’tir. 60 FPS,\nsaniyede 60 kare anlamına gelir.\n1 saniye 1000 ms olduğuna göre:\n1000 / 60 ≈ 16.6 ms\n\nBu yüzden bir karenin hazırlanması yaklaşık 16 ms içinde tamamlanmalıdır. Aksi\nhalde kullanıcı takılma veya sıçrama hissedebilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-082",
    "sourceNo": 82,
    "sourcePage": 53,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Şeffaflık değerinin değiştirildiği animasyon kodunda \nduration: parametresi hangi amaçla kullanılır?",
    "options": {
      "A": "Animasyonun kaç defa tekrarlanacağını belirtmek için",
      "B": "Animasyonun ne zaman çalışacağını belirtmek için",
      "C": "Animasyonda çizilecek alanın boyutlarını belirtmek için",
      "D": "Animasyondaki geçişin ne kadar süreceğini belirtmek için",
      "E": "Animasyondaki şeffaflık değerini vermek için"
    },
    "correct": "D",
    "answerRaw": "D) Animasyondaki geçişin ne kadar süreceğini belirtmek için",
    "explanation": "duration , animasyonun bir değerden başka bir değere geçişinin ne kadar\nsüreceğini belirtir.\nÖrneğin:\nAnimatedOpacity(\n opacity: visible ? 1.0 : 0.0,\n duration: Duration(seconds: 1),\n child: Text(\"Merhaba\"),\n)\nBurada şeffaflık geçişi 1 saniyede tamamlanır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-083",
    "sourceNo": 83,
    "sourcePage": 53,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Plugin ile Package arasındaki fark aşağıdakilerden hangisidir?",
    "options": {
      "A": "Plugin sadece Dart kodlarından oluşurken Package platform kodlaması ile bir\nköprü oluşturur.",
      "B": "Package sadece Dart kodlarından oluşurken Plugin platform kodlaması ile bir\nköprü oluşturur.",
      "C": "Package boyutu daha büyüktür. Plugin ise küçük kütüphanelerdir.",
      "D": "Plugin her projeye uyarken package sadece Dart uygulamalarına eklenir.",
      "E": "Plugin’de Package’ye göre asset ve diğer bileşenler de bulunabilir."
    },
    "correct": "B",
    "answerRaw": "B) Package sadece Dart kodlarından oluşurken Plugin platform\nkodlaması ile bir köprü oluşturur.",
    "explanation": "Package, genellikle Dart kodlarından oluşan yeniden kullanılabilir kütüphane\nyapısıdır.\nPlugin ise Dart kodunun yanında Android, iOS, web veya masaüstü gibi\nplatformlara özel kodlarla da bağlantı kurabilir. Örneğin kamera, GPS, Bluetooth\ngibi donanım özellikleri için çoğu zaman plugin kullanılır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-084",
    "sourceNo": 84,
    "sourcePage": 54,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "“App State” yaklaşımını aşağıdakilerden hangisi için\nkullanmak gereksiz olur?",
    "options": {
      "A": "Bir animasyonlu widget’ın animasyonu oynatımında",
      "B": "Bir sosyal ağ uygulamasının bildirim göstermesinde",
      "C": "Bir e-ticaret uygulamasında sepet kısmının inşasında",
      "D": "Kullanıcı oturum açma işlevinde",
      "E": "Kullanıcı tercihlerinin değişiminde"
    },
    "correct": "A",
    "answerRaw": "A) Bir animasyonlu widget’ın animasyonu oynatımında",
    "explanation": "App State, uygulamanın birçok yerini ilgilendiren genel durumlar için kullanılır.\nÖrneğin oturum bilgisi, sepet bilgisi, kullanıcı tercihleri veya bildirim durumu\nuygulamanın farklı ekranlarını etkileyebilir.\nAncak tek bir widget’ın kendi içindeki animasyon oynatma durumu genellikle yerel\ndurumdur. Bu yüzden tüm uygulama seviyesinde App State kullanmak gereksiz\nolur.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-085",
    "sourceNo": 85,
    "sourcePage": 54,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Bir Flutter uygulamasının çalışma zamanı davranışlarını takip\netmek için kullanılan araç setinin adı hangisidir?",
    "options": {
      "A": "VisualStudioCode",
      "B": "Android SDK Manager",
      "C": "VirtualDeviceManager",
      "D": "Development Tools",
      "E": "DartDev Tools"
    },
    "correct": "E",
    "answerRaw": "E) DartDev Tools",
    "explanation": "Flutter ve Dart uygulamalarının çalışma zamanı davranışlarını incelemek için Dart\nDevTools kullanılır.\nDevTools ile:\nperformans,\nbellek kullanımı,\nwidget ağacı,\nloglar,\nhata ayıklama bilgileri\ntakip edilebilir.",
    "tags": [
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-086",
    "sourceNo": 86,
    "sourcePage": 55,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter’da uygulanacak bir animasyonun sürekli tekrar etmesi\nisteniyorsa oluşturulacak widget’ın hangi sınıftan miras alması\nuygun olur?",
    "options": {
      "A": "AnimatedContainer",
      "B": "AnimatedAlign",
      "C": "AnimatedWidget",
      "D": "Widget Transition",
      "E": "AnimatedPhysicalModel"
    },
    "correct": "C",
    "answerRaw": "C) AnimatedWidget",
    "explanation": "Sürekli veya denetimli animasyonlarda genellikle animasyon değerini dinleyen özel\nwidget yapıları kullanılır. AnimatedWidget , bir Listenable ya da Animation dinleyerek\nkendini yeniden oluşturabilen bir yapıdır.\n\nAnimatedContainer ve AnimatedAlign ise daha çok implicit animation yani değer\ndeğişince kendiliğinden geçiş yapan hazır widget’lardır.",
    "tags": [
      "widget",
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-087",
    "sourceNo": 87,
    "sourcePage": 56,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdakilerden hangisi Flutter uygulama boyutunu azaltmak\niçin kullanılacak yöntemlerden biri değildir?",
    "options": {
      "A": "Kütüphanelerden yüklenen kaynakların en aza indirilmesi",
      "B": "Kullanılmayan kaynakların projeden çıkarılması",
      "C": "PNG ve JPEG dosyalarını sıkıştırarak kullanma",
      "D": "Dağıtım sürümü üretilirken --split-debug-info etiketinin kullanımı",
      "E": "Android ve iOS SDK sürümlerinin düşük tutulması"
    },
    "correct": "E",
    "answerRaw": "E) Android ve iOS SDK sürümlerinin düşük tutulması",
    "explanation": "Uygulama boyutunu azaltmak için gereksiz asset’leri kaldırmak, görselleri\nsıkıştırmak, gereksiz paketleri azaltmak ve release build sırasında uygun\noptimizasyonları kullanmak mantıklıdır.\nAncak Android veya iOS SDK sürümlerini düşük tutmak doğrudan sağlıklı bir\nuygulama boyutu azaltma yöntemi değildir. Hatta uyumluluk ve güvenlik açısından\nsorun çıkarabilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-088",
    "sourceNo": 88,
    "sourcePage": 56,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "try-catch-finally yapısında finally bloğu ne için vardır?",
    "options": {
      "A": "Hata olsun olmasın try-catch bloğu sonunda çalışacak kodu yazmak",
      "B": "Alt fonksiyon çağrılarında hata oluşursa onlara tepki verecek kodu yazmak",
      "C": "Hiç hata oluşmadığında çalıştırılacak kodu yazmak",
      "D": "catch bloklarında yakalanamamış hataları yakalamak",
      "E": "Hatayı düzeltmek için gereken kodu yazmak"
    },
    "correct": "A",
    "answerRaw": "A) Hata olsun olmasın try-catch bloğu sonunda çalışacak kodu\nyazmak",
    "explanation": "finally bloğu, hata oluşsa da oluşmasa da çalışır. Genellikle kaynak kapatma,\nbağlantı sonlandırma veya temizlik işlemleri için kullanılır.\nÖrnek:\ntry {\n print(\"İşlem yapılıyor\");\n} catch (e) {\n print(\"Hata: $e\");\n} finally {\n print(\"Bu bölüm her durumda çalışır\");\n}",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-089",
    "sourceNo": 89,
    "sourcePage": 57,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Floor kütüphanesini kullanarak parametreli bir sorgu yazmak\niçin aşağıdakilerden hangisi kullanılmalıdır?",
    "options": {
      "A": "@Sql('SELECT * FROM Person WHERE id = ?')",
      "B": "@Sql('SELECT * FROM Person WHERE $id=$ :id')",
      "C": "@Query('SELECT * FROM Person WHERE id = :id')",
      "D": "@Query('SELECT * FROM Person WHERE id = ?')",
      "E": "@RawQuery('SELECT * FROM Person WHERE id = 2')"
    },
    "correct": "C",
    "answerRaw": "C) @Query('SELECT * FROM Person WHERE id = :id')",
    "explanation": "Floor kütüphanesinde sorgular genellikle @Query anotasyonu ile yazılır. Parametreli\nsorgularda :id gibi isimlendirilmiş parametreler kullanılabilir.\nÖrnek:\n@Query('SELECT * FROM Person WHERE id = :id')\nFuture<Person?> findPersonById(int id);",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-090",
    "sourceNo": 90,
    "sourcePage": 57,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Dart programlama dilinde bir değişken adının alt çizgi _ ile\nbaşlaması ne anlama gelir?",
    "options": {
      "A": "Değişkenin public olduğunu belirtir. Sınıfın dışından erişilebilir.",
      "B": "Değişkenin object olarak tanımlandığını belirtir. Her türden veriyi saklayabilir.",
      "C": "Değişkenin static olduğunu belirtir. Sınıfın tüm örneklerinden erişilebilir.",
      "D": "Değişkenin private olduğunu belirtir. Dışarıdan erişimi sınırlandırılır.",
      "E": "Değişkenin sabit olduğunu belirtir. Üzerinde değişiklik yapılamaz."
    },
    "correct": "D",
    "answerRaw": "D) Değişkenin private olduğunu belirtir. Dışarıdan erişimi\nsınırlandırılır.",
    "explanation": "Dart’ta _ ile başlayan isimler private kabul edilir. Ancak bu gizlilik sınıf düzeyinde\ndeğil, kütüphane / dosya düzeyinde çalışır.\nÖrnek:\nString _gizliDeger = \"Sadece bu dosya içinde erişilebilir\";",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-091",
    "sourceNo": 91,
    "sourcePage": 58,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "GridView düzenleyici arayüz bileşeni için aşağıdaki\ntanımlardan hangisi uygundur?",
    "options": {
      "A": "Kaydırılabilir bir ızgara görünümü sağlar.",
      "B": "İçeriğin üst üste bindirilmesini sağlar.",
      "C": "Kaydırılabilir bir liste görünümü sağlar.",
      "D": "İç boşluk, dış boşluk, kenarlık ve arka plan rengi gibi özellikleri atamayı sağlar.",
      "E": "Önemli noktaları vurgulamak için köşeleri yuvarlatılmış ve gölge efektli çerçeve\nsağlar."
    },
    "correct": "A",
    "answerRaw": "A) Kaydırılabilir bir ızgara görünümü sağlar.",
    "explanation": "GridView , elemanları satır ve sütunlardan oluşan kaydırılabilir ızgara düzeninde\ngöstermek için kullanılır.\nFotoğraf galerisi, ürün kartları veya ikon menüleri gibi çok sayıda öğeyi düzenli\nbiçimde göstermek için uygundur.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-092",
    "sourceNo": 92,
    "sourcePage": 59,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Akıllı telefonlarda veritabanlarının saklanması için belirtilen\nvarsayılan klasöre erişmek için hangi fonksiyon kullanılır?",
    "options": {
      "A": "getSqlDirectory()",
      "B": "getDatabasesDirectory()",
      "C": "getDatabasesPath()",
      "D": "getSqlitePath()",
      "E": "setDataPath()"
    },
    "correct": "C",
    "answerRaw": "C) getDatabasesPath()",
    "explanation": "Flutter’da SQLite kullanımlarında, veritabanlarının saklandığı varsayılan dizin\nyolunu almak için çoğunlukla getDatabasesPath() fonksiyonu kullanılır.\nÖrnek:\nfinal dbPath = await getDatabasesPath();\nBu yol, veritabanı dosyasının nerede oluşturulacağını belirlemek için kullanılabilir.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-093",
    "sourceNo": 93,
    "sourcePage": 59,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Test ve Hata Ayıklama",
    "question": "Aşağıdakilerden hangisi flutter_test paketi içerisindeki\nMatcher sabitlerinden biri değildir?",
    "options": {
      "A": "matchesGoldenFile",
      "B": "findsNWidgets",
      "C": "findsWidgets",
      "D": "findsClass",
      "E": "findsNothing"
    },
    "correct": "D",
    "answerRaw": "D) findsClass",
    "explanation": "flutter_test içinde widget testlerinde kullanılan birçok matcher vardır. Örneğin:\nfindsOneWidget\nfindsNothing\n\nfindsWidgets\nfindsNWidgets\nmatchesGoldenFile\nAncak findsClass standart matcher sabitlerinden biri değildir.",
    "tags": [
      "widget",
      "test",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-094",
    "sourceNo": 94,
    "sourcePage": 60,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "setState içinde _active değeri güncellenmişse, bu veri\niçteki widget’a hangi yöntemle aktarılır?",
    "options": {
      "A": "Hiyerarşide içeride kalan widget’ın build fonksiyonuyla",
      "B": "StatefulWidget ’ın yapıcı fonksiyonuyla",
      "C": "Scaffold widget’ının child parametresine beslenecek fonksiyonla",
      "D": "StatefulWidget ’ın createState fonksiyonuyla",
      "E": "Hiyerarşide içeride kalan widget’ın yapıcı fonksiyonuyla"
    },
    "correct": "E",
    "answerRaw": "E) Hiyerarşide içeride kalan widget’ın yapıcı fonksiyonuyla",
    "explanation": "Flutter’da üst widget’taki state değeri değiştiğinde alt widget’a veri genellikle\nconstructor üzerinden aktarılır.\nÖrnek:\nRenkKutusu(active: _active)\nBurada _active , alt widget’a yapıcı fonksiyon parametresiyle gönderilir.",
    "tags": [
      "state",
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-095",
    "sourceNo": 95,
    "sourcePage": 60,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’da provider kütüphanesi kullanılarak bir veri modeli\noluşturulacaksa, bu model hangi sınıftan miras almalıdır?",
    "options": {
      "A": "ChangeNotifier",
      "B": "Consumer",
      "C": "Provider",
      "D": "ChangeNotifierProvider",
      "E": "DataModel"
    },
    "correct": "A",
    "answerRaw": "A) ChangeNotifier",
    "explanation": "Provider yaklaşımında veri modeli genellikle ChangeNotifier sınıfından türetilir. Veri\ndeğiştiğinde notifyListeners() çağrılarak bu modeli dinleyen widget’lara haber\nverilir.\nÖrnek:\nclass SayacModel extends ChangeNotifier {\n int sayac = 0;\n void arttir() {\n sayac++;\n notifyListeners();\n }\n}",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-096",
    "sourceNo": 96,
    "sourcePage": 61,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Firebase özelliklerinin kullanımına başlanmadan önce hangi\nfonksiyon çağrılmalıdır?",
    "options": {
      "A": "connect()",
      "B": "init()",
      "C": "load()",
      "D": "initializeApp()",
      "E": "firebase_core()"
    },
    "correct": "D",
    "answerRaw": "D) initializeApp()",
    "explanation": "Flutter’da Firebase servislerini kullanmadan önce Firebase’in başlatılması gerekir.\nGenellikle şu şekilde kullanılır:\nawait Firebase.initializeApp();\n\nBu işlem yapılmadan Firestore, Authentication veya diğer Firebase servisleri\ngüvenli şekilde kullanılamaz.",
    "tags": [
      "firebase"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-097",
    "sourceNo": 97,
    "sourcePage": 62,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Kullanıcının ekrana tıklama etkileşimini yakalamak için \nGestureDetector kullanılıyorsa hangi parametre verilmelidir?",
    "options": {
      "A": "builder",
      "B": "onTap",
      "C": "build",
      "D": "onStart",
      "E": "onCreate"
    },
    "correct": "B",
    "answerRaw": "B) onTap",
    "explanation": "GestureDetector , dokunma hareketlerini yakalamak için kullanılır. Basit tıklama /\ndokunma olayını yakalamak için onTap parametresi verilir.\nÖrnek:\nGestureDetector(\n onTap: () {\n print(\"Tıklandı\");\n },\n child: Text(\"Bana dokun\"),\n)",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-098",
    "sourceNo": 98,
    "sourcePage": 62,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Navigator API içinde bulunulan sayfadan bir önceki sayfaya\ndönmeyi sağlayan fonksiyon hangisidir?",
    "options": {
      "A": "Navigator.push",
      "B": "Navigator.move",
      "C": "Navigator.return",
      "D": "Navigator.back",
      "E": "Navigator.pop"
    },
    "correct": "E",
    "answerRaw": "E) Navigator.pop",
    "explanation": "Flutter’da önceki sayfaya dönmek için Navigator.pop(context) kullanılır.\nNavigator.pop(context);\npush yeni sayfa açar, pop ise mevcut sayfayı kapatıp önceki sayfaya döner.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-099",
    "sourceNo": 99,
    "sourcePage": 63,
    "largeDeck": "Flutter",
    "smallDeck": "Asenkron, JSON ve Firebase",
    "question": "Yukarıdaki if koşulu aşağıdaki hangi kontrolü gerçekleştirir?",
    "options": {
      "A": "Dönen sonucun bir HTML sayfası olup olmadığını teyit eder.",
      "B": "Erişilen web servisinin başarılı bir cevap döndüğünü teyit eder.",
      "C": "Dönen sonucun bir JSON dosyası olup olmadığını teyit eder.",
      "D": "Erişilen web servisinin getirdiği verinin 200’e eşit olup olmadığını kontrol eder.",
      "E": "Erişilen web servisinin başarısız bir cevap döndüğünü teyit eder."
    },
    "correct": "B",
    "answerRaw": "B) Erişilen web servisinin başarılı bir cevap döndüğünü teyit eder.",
    "explanation": "Bu soru büyük olasılıkla HTTP durum kodu kontrolünü sormaktadır. Web\nservislerinde 200 durum kodu genellikle isteğin başarılı olduğunu gösterir.\nÖrnek:\nif (response.statusCode == 200) {\n // başarılı cevap\n}\nBu koşul, web servisinden başarılı bir yanıt dönüp dönmediğini kontrol eder.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-100",
    "sourceNo": 100,
    "sourcePage": 63,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "flutter_test paketi kullanarak bir widget testi yapılacaktır.\nWidget’ın test ortamında oluşturulması için hangi sınıf ve\nfonksiyon çifti kullanılır?",
    "options": {
      "A": "Tester – pump",
      "B": "TestWidget – tester",
      "C": "WidgetTester – pumpWidget",
      "D": "Finder – findWidget",
      "E": "Matcher – findOneWidget"
    },
    "correct": "C",
    "answerRaw": "C) WidgetTester – pumpWidget",
    "explanation": "Flutter widget testlerinde test işlemini yöneten sınıf WidgetTester ’dır. Test edilecek\nwidget’ı test ortamında ekrana yerleştirmek için ise pumpWidget() fonksiyonu\nkullanılır.\nÖrnek:\ntestWidgets('Başlık görünüyor mu?', (WidgetTester tester) asy\nnc {\n await tester.pumpWidget(const MyApp());\n expect(find.text('Merhaba'), findsOneWidget);\n});",
    "tags": [
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-101",
    "sourceNo": 101,
    "sourcePage": 64,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Flutter’da sayfanın üst kısmındaki başlık bölümünün liste\naşağı kaydırıldığında gizlenmesi isteniyorsa her iki bileşeni de\nhangi widget türünden yapmak gerekir?",
    "options": {
      "A": "Gold",
      "B": "Silver",
      "C": "Platinum",
      "D": "Dust",
      "E": "Bronze"
    },
    "correct": "B",
    "answerRaw": "B) Silver",
    "explanation": "Seçenekte “Silver” yazsa da Flutter’daki doğru kavram Sliver yapılarıdır. Kaydırma\nile birlikte davranan başlık ve liste yapıları için CustomScrollView içinde SliverAppBar\nve SliverList gibi widget’lar kullanılır.\nÖrnek:\n\nCustomScrollView(\n slivers: [\n SliverAppBar(title: Text('Başlık')),\n SliverList(delegate: SliverChildListDelegate([...]))\n ],\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-102",
    "sourceNo": 102,
    "sourcePage": 65,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "Aşağıdaki komutlardan hangisi bir Flutter uygulamasının\nAndroid dağıtımını oluşturur?",
    "options": {
      "A": "flutter make apk",
      "B": "flutter appbundle apk",
      "C": "flutter build apk",
      "D": "flutter profile appbundle",
      "E": "flutter create apk"
    },
    "correct": "C",
    "answerRaw": "C) flutter build apk",
    "explanation": "Android için APK dağıtım dosyası oluşturmak istendiğinde flutter build apk komutu\nkullanılır.\nflutter build apk\nBu komut, uygulamanın Android cihazlara kurulabilecek APK çıktısını üretir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-103",
    "sourceNo": 103,
    "sourcePage": 65,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "flutter build apk --analyze-size komutu kullanıldığında\nüretilen konsol çıktısı hangi bilgiyi verir?",
    "options": {
      "A": "Uygulamanın Android platformu ile uyumluluk değerlendirmesi",
      "B": "Uygulamanın içerdiği kodların uzunluğu",
      "C": "Uygulamanın performansına etki eden ekranların bilgisini",
      "D": "Uygulamanın Android platformunda çalışma performansı",
      "E": "Uygulamanın içerdiği dosyaların bölümlere ayrılmış kapladığı alan özetlerini"
    },
    "correct": "E",
    "answerRaw": "E) Uygulamanın içerdiği dosyaların bölümlere ayrılmış kapladığı alan\nözetlerini",
    "explanation": "--analyze-size seçeneği, oluşturulan uygulama paketinin boyutunu analiz etmek\niçin kullanılır. Çıktıda uygulamanın hangi bölümlerinin ne kadar yer kapladığı\ngörülebilir.\nBu komut performans ölçümü yapmaz; daha çok paket boyutu analizi sağlar.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-104",
    "sourceNo": 104,
    "sourcePage": 66,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Flutter’da tüm arayüz bileşenlerinin miras alarak\noluşturuldukları kök sınıfın adı hangisidir?",
    "options": {
      "A": "Component",
      "B": "Widget",
      "C": "Form",
      "D": "Frame",
      "E": "Field"
    },
    "correct": "B",
    "answerRaw": "B) Widget",
    "explanation": "Flutter’da arayüzü oluşturan temel yapı widget kavramıdır. Text , Container , Row , \nColumn , Scaffold gibi bileşenler widget yapısının parçalarıdır.\nKısaca Flutter’da ekran, widget’lardan oluşan bir ağaç gibi düşünülebilir.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-105",
    "sourceNo": 105,
    "sourcePage": 66,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "dart:convert kütüphanesinde JSON metnini bir objeye\nçevirmek için kullanılan fonksiyon hangisidir?",
    "options": {
      "A": "toJson()",
      "B": "jsonEncode()",
      "C": "serialize()",
      "D": "jsonDecode()",
      "E": "fromJson()"
    },
    "correct": "D",
    "answerRaw": "D) jsonDecode()",
    "explanation": "JSON biçimindeki metni Dart tarafında kullanılabilecek bir nesneye çevirmek için \njsonDecode() kullanılır.\nimport 'dart:convert';\nfinal data = jsonDecode('{\"ad\": \"Ali\"}');\njsonEncode() ise bunun tersini yapar; Dart nesnesini JSON metnine çevirir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-106",
    "sourceNo": 106,
    "sourcePage": 67,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’daki provider kütüphanesi ile sağlanan uygulama\nseviyesi durum yönetiminde sayfadaki belli bir alanın\ngüncellenmesi hangi widget ile sağlanır?",
    "options": {
      "A": "MultiProvider",
      "B": "Provider",
      "C": "Listener",
      "D": "Consumer",
      "E": "ChangeNotifier"
    },
    "correct": "D",
    "answerRaw": "D) Consumer",
    "explanation": "Consumer , provider ile sağlanan veriyi dinler ve yalnızca ilgili alanın yeniden\noluşturulmasına yardımcı olur. Böylece tüm sayfayı gereksiz yere yenilemek\nyerine, sadece veriye bağlı bölüm güncellenebilir.\nÖrnek:\nConsumer<SayacModel>(\n builder: (context, model, child) {\n return Text('${model.sayac}');\n },\n)",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-107",
    "sourceNo": 107,
    "sourcePage": 68,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Json Serializable paketinde veri modeli sınıfı içinde \n@JsonKey() annotation’ı hangi amaçla kullanılır?",
    "options": {
      "A": "Sayfanın yazı tipi kodlamasından kaynaklı çevirme ihtiyacını belirtmek",
      "B": "Bir değişkene JSON çevriminde ek dönüşüm işlevleri sağlamak",
      "C": "Aynı ada sahip iki alanı birbirinden ayırmak",
      "D": "Sınıfın Json Serializable tarafından dönüşüm için dikkate alınmasını sağlamak",
      "E": "Dosya sistemine kayıtlı veri ile bellekte kayıtlı veriyi eşleştirmek"
    },
    "correct": "B",
    "answerRaw": "B) Bir değişkene JSON çevriminde ek dönüşüm işlevleri sağlamak",
    "explanation": "@JsonKey() , sınıftaki bir alanın JSON’a çevrilirken nasıl ele alınacağını özelleştirmek\niçin kullanılır. Örneğin JSON’daki alan adı farklıysa name , varsayılan değer\ngerekiyorsa defaultValue , özel dönüşüm gerekiyorsa fromJson veya toJson\nözellikleri kullanılabilir.\nSınıfın tamamının dönüştürmeye dahil edilmesi ise genellikle @JsonSerializable() ile\nyapılır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-108",
    "sourceNo": 108,
    "sourcePage": 68,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Aşağıdakilerden hangisi Flutter çerçevesi içerisinde gelen\ndüzenleyici bir arayüz bileşeni adı değildir?",
    "options": {
      "A": "Palette",
      "B": "Container",
      "C": "ListView",
      "D": "Center",
      "E": "Align"
    },
    "correct": "A",
    "answerRaw": "A) Palette",
    "explanation": "Container , ListView , Center ve Align Flutter’da sık kullanılan arayüz / düzenleme\nwidget’larıdır.\nPalette ise Flutter’ın standart düzenleyici widget’larından biri değildir. Renk paleti\nanlamına gelen genel bir kelime olarak kullanılabilir, fakat temel Flutter layout\n\nwidget’ı değildir.",
    "tags": [
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-109",
    "sourceNo": 109,
    "sourcePage": 69,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Navigator API’de ModalRoute.of() metodu ile neye erişilir?",
    "options": {
      "A": "Açılır ekran boyutuna",
      "B": "Sayfanın theme özelliklerine",
      "C": "Sayfaya gönderilen argümanlara",
      "D": "Gezinti yapılan uygulamalar listesine",
      "E": "Cihaz konfigürasyon bilgilerine"
    },
    "correct": "C",
    "answerRaw": "C) Sayfaya gönderilen argümanlara",
    "explanation": "ModalRoute.of(context) ile geçerli route bilgilerine erişilebilir. Bu route’un \nsettings.arguments alanı, sayfaya gönderilen argümanları almak için kullanılır.\nÖrnek:\nfinal args = ModalRoute.of(context)!.settings.arguments;\nBu yöntem, bir sayfaya Navigator üzerinden veri gönderildiğinde o veriyi okumak\niçin kullanılır.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-110",
    "sourceNo": 110,
    "sourcePage": 69,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Flutter kodu içerisinde projeye dahil edilmiş varlıklara yani\nassets dosyalarına erişmek için hangisi kullanılır?",
    "options": {
      "A": "AssetMap",
      "B": "AssetString",
      "C": "AssetStream",
      "D": "AssetFolder",
      "E": "AssetBundle"
    },
    "correct": "E",
    "answerRaw": "E) AssetBundle",
    "explanation": "Flutter’da uygulamaya dahil edilen asset dosyalarını okumak için AssetBundle yapısı\nkullanılır. En yaygın kullanım biçimlerinden biri rootBundle üzerinden dosya\nokumaktır.\nÖrnek:\nfinal text = await rootBundle.loadString('assets/data.json');",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-111",
    "sourceNo": 111,
    "sourcePage": 70,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "Flutter’da paket bağımlılıkları belirtmek için pubspec.yaml\ndosyasında kullanılan başlık hangisidir?",
    "options": {
      "A": "resources:",
      "B": "packages:",
      "C": "requirements:",
      "D": "dependencies:",
      "E": "relations:"
    },
    "correct": "D",
    "answerRaw": "D) dependencies:",
    "explanation": "Flutter ve Dart projelerinde kullanılan paketler pubspec.yaml dosyasındaki \ndependencies: başlığı altında belirtilir.\nÖrnek:\ndependencies:\n flutter:\n sdk: flutter\n provider: ^6.0.0",
    "tags": [
      "pubspec",
      "state",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-112",
    "sourceNo": 112,
    "sourcePage": 70,
    "largeDeck": "Dart",
    "smallDeck": "Sınıf, Nesne ve Kalıtım",
    "question": "Floor kütüphanesinde SQLite tablosunu temsil eden sınıf\nhangi annotation’ı kullanır?",
    "options": {
      "A": "@table",
      "B": "@dao",
      "C": "@entity",
      "D": "@database",
      "E": "@sqflite"
    },
    "correct": "C",
    "answerRaw": "C) @entity",
    "explanation": "Floor’da veritabanı tablosunu temsil eden model sınıfı @entity annotation’ı ile\nişaretlenir. Bu sınıfın içindeki alanlardan biri primary key olabilir.\nÖrnek:\n@entity\nclass Person {\n @primaryKey\n final int id;\n final String name;\n Person(this.id, this.name);\n}\n@dao veri erişim nesnesi, @database ise veritabanı sınıfı için kullanılır.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-113",
    "sourceNo": 113,
    "sourcePage": 71,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "Flutter’da varsayılan SharedPreferences dosyasının\nreferansını elde etmek için hangi kod kullanılır?",
    "options": {
      "A": "final prefs = await SharedPreferences.getInstance();",
      "B": "final prefs = File.SharedPreferences();",
      "C": "final prefs = new SharedPreferences();",
      "D": "final prefs = SharedPreferences.defaultInstance();",
      "E": "final prefs = await SharedPreferences.getValue();"
    },
    "correct": "A",
    "answerRaw": "A) final prefs = await SharedPreferences.getInstance();",
    "explanation": "SharedPreferences kullanmadan önce varsayılan tercih dosyasına erişmek gerekir.\nBunun için getInstance() metodu çağrılır.\nfinal prefs = await SharedPreferences.getInstance();\nBu işlem asenkron olduğu için await ile kullanılır.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-114",
    "sourceNo": 114,
    "sourcePage": 72,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "pubspec.yaml dosyasındaki dependencies kısmında paket\nyönetiminin en güncel uyumlu sürümü bulması için versiyon\nnumarası önüne hangi sembol gelir?",
    "options": {
      "A": "?",
      "B": "^",
      "C": "*",
      "D": "%",
      "E": "+"
    },
    "correct": "B",
    "answerRaw": "B) ^",
    "explanation": "Dart ve Flutter projelerinde ^ sembolü, uyumlu sürüm aralığını belirtir.\nÖrnek:\ndependencies:\n http: ^1.2.0\nBu ifade, belirtilen sürümden başlayarak uyumlu daha yeni sürümlerin\nkullanılabileceğini gösterir.",
    "tags": [
      "pubspec",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-115",
    "sourceNo": 115,
    "sourcePage": 72,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Dart’ta bir fonksiyonun asenkron olarak çalışması için\naşağıdakilerden hangisinin yapılması gerekir?",
    "options": {
      "A": "Fonksiyonun adından sonra async anahtar kelimesinin kullanılması",
      "B": "Fonksiyonun bir sınıf içerisinde tanımlanmış olması",
      "C": "Fonksiyonun static olarak tanımlanması",
      "D": "Fonksiyonun global olarak tanımlanması",
      "E": "Fonksiyonun içerisinde await anahtar kelimesinin kullanılması"
    },
    "correct": "A",
    "answerRaw": "A) Fonksiyonun adından sonra async anahtar kelimesinin kullanılması",
    "explanation": "Dart’ta bir fonksiyonun asenkron çalışabilmesi için fonksiyon gövdesinden önce \nasync anahtar kelimesi eklenir.\nÖrnek:\nFuture<void> veriGetir() async {\n await Future.delayed(Duration(seconds: 1));\n}\nawait genellikle asenkron işlemi beklemek için kullanılır; ancak fonksiyonu\nasenkron yapan temel işaret async anahtar kelimesidir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-116",
    "sourceNo": 116,
    "sourcePage": 73,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "GestureDetector widget’ı aracılığıyla kullanıcının çift tıklama\nişlevini yakalamayı sağlayan parametre hangisidir?",
    "options": {
      "A": "onLongPress",
      "B": "onTap",
      "C": "onTapDown",
      "D": "onDoubleTap",
      "E": "onTapCancel"
    },
    "correct": "D",
    "answerRaw": "D) onDoubleTap",
    "explanation": "GestureDetector , dokunma hareketlerini yakalamak için kullanılır. Tek tıklama için \nonTap , uzun basma için onLongPress , çift tıklama için ise onDoubleTap kullanılır.\nÖrnek:\nGestureDetector(\n onDoubleTap: () {\n print('Çift tıklandı');\n\n },\n child: Text('Bana çift tıkla'),\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-117",
    "sourceNo": 117,
    "sourcePage": 74,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Aşağıdakilerden hangisi Flutter’da uygulama seviyesi durum\nyönetimi için kullanılan kütüphanenin adıdır?",
    "options": {
      "A": "intl",
      "B": "material",
      "C": "http",
      "D": "firebase",
      "E": "provider"
    },
    "correct": "E",
    "answerRaw": "E) provider",
    "explanation": "provider , Flutter’da uygulama genelindeki state bilgisini yönetmek için sık\nkullanılan bir pakettir. Örneğin kullanıcı bilgisi, tema seçimi veya sayaç değeri gibi\nveriler provider ile widget ağacına sağlanabilir.\nintl yerelleştirme, http ağ istekleri, firebase arka uç servisleri, material ise\nMaterial Design widget’ları için kullanılır.",
    "tags": [
      "state",
      "widget",
      "firebase"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-118",
    "sourceNo": 118,
    "sourcePage": 74,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Test ve Hata Ayıklama",
    "question": "flutter_test paketindeki Finder sınıfı ile arayüzde bir metnin\nvarlığını test etmek için hangi fonksiyon çağrısı kullanılır?",
    "options": {
      "A": "text.find()",
      "B": "finder.string()",
      "C": "string.find()",
      "D": "widget.find()",
      "E": "find.text()"
    },
    "correct": "E",
    "answerRaw": "E) find.text()",
    "explanation": "Widget testlerinde ekranda belirli bir metnin bulunup bulunmadığını kontrol etmek\niçin find.text() kullanılır.\nÖrnek:\nexpect(find.text('Merhaba'), findsOneWidget);\nBurada find.text('Merhaba') , arayüzde “Merhaba” yazısını arar.",
    "tags": [
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-119",
    "sourceNo": 119,
    "sourcePage": 75,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdaki operatörlerden hangisi bir listedeki içeriği başka bir\nlisteye kopyalamak için kullanılır?",
    "options": {
      "A": "...?",
      "B": "=>",
      "C": ":",
      "D": "..",
      "E": "??="
    },
    "correct": "A",
    "answerRaw": "A) ...?",
    "explanation": "Dart’ta bir listenin elemanlarını başka bir listenin içine açarak eklemek için spread\noperatörü kullanılır. Eğer kaynak liste null olabilir ise null-aware spread operatörü\nolan ...? tercih edilir.\nÖrnek:\nList<int>? sayilar = [1, 2, 3];\nfinal yeniListe = [...?sayilar, 4, 5];\nBu işlem sonucunda sayilar içindeki elemanlar yeni listenin içine eklenir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-120",
    "sourceNo": 120,
    "sourcePage": 75,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Dart DevTools içerisindeki “Performance View” aracı hangi\nişlev için kullanılır?",
    "options": {
      "A": "Uygulamanın ekran tazelemesi için geçen süreyi ve her bir olayın gerçekleşme\nsüresini gösterir.",
      "B": "Uygulama içerisindeki varlıkların bir listesini gösterir.",
      "C": "Uygulamanın ayarlar ekranını gösterir.",
      "D": "Uygulamanın dağıtım paketlerindeki eksikleri hesaplar ve dağıtıma uygun\nolması için gerekli bileşenleri listeler.",
      "E": "Ekrandaki her bir widget’ın kapladığı alanı ve yerleşim planını gösterir."
    },
    "correct": "A",
    "answerRaw": "A) Uygulamanın ekran tazelemesi için geçen süreyi ve her bir olayın\ngerçekleşme süresini gösterir.",
    "explanation": "Dart DevTools içindeki Performance View, uygulamanın performansını incelemek\niçin kullanılır. Frame süreleri, olayların ne kadar sürdüğü ve uygulamanın takılmaya\nneden olabilecek işlemleri bu bölümden analiz edilebilir.",
    "tags": [
      "widget",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-121",
    "sourceNo": 121,
    "sourcePage": 76,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Aşağıdakilerden hangisi sınıfların hangi türden miras aldığını\nbulmak adına kullanılan tür kontrol operatörüdür?",
    "options": {
      "A": "with",
      "B": "as",
      "C": "like",
      "D": "to",
      "E": "in"
    },
    "correct": "B",
    "answerRaw": "B) as",
    "explanation": "Dart’ta türlerle ilgili işlemlerde as , is ve is! operatörleri kullanılır. Bu sorudaki\nseçenekler içinde türle ilişkili olan doğru seçenek as operatörüdür. \nKüçük not: Dart’ta bir nesnenin belirli bir türden olup olmadığını kontrol etmek için\nen net operatör aslında is operatörüdür; ancak seçeneklerde is bulunmadığı için\nbu soru bağlamında en uygun cevap as kabul edilir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-122",
    "sourceNo": 122,
    "sourcePage": 76,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Flutter kodu içerisinde projeye dahil edilmiş varlıklara yani\nassets dosyalarına erişmek için hangisi kullanılır?",
    "options": {
      "A": "AssetFolder",
      "B": "AssetString",
      "C": "AssetBundle",
      "D": "AssetStream",
      "E": "AssetMap"
    },
    "correct": "C",
    "answerRaw": "C) AssetBundle",
    "explanation": "Flutter’da uygulamaya eklenmiş asset dosyalarına erişmek için AssetBundle\nkullanılır. En yaygın kullanım biçimlerinden biri rootBundle üzerinden dosya\nokumaktır.\nfinal text = await rootBundle.loadString('assets/data.json');",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-123",
    "sourceNo": 123,
    "sourcePage": 77,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "SQLite ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
    "options": {
      "A": "DateTime veri türü SQLite veritabanında tanımlı bir veri türü değildir. Zaman\nverileri rakam veya String olarak saklanmaktadır.",
      "B": "İşletim sistemi içerisinde sürekli açık bir SQLite servisi çalışmak zorundadır.\nUygulamalar bu servis sayesinde veritabanlarına erişir.",
      "C": "SQLite ilişkisel bir veritabanı modeli sunar.",
      "D": "iOS ve Android işletim sistemlerinde yerel olarak gelmektedir. Akıllı telefon\nuygulamalarında doğrudan kullanılabilir.",
      "E": "Bir kolonda farklı satırlarda farklı değer türünde veri saklanabilir."
    },
    "correct": "B",
    "answerRaw": "B) İşletim sistemi içerisinde sürekli açık bir SQLite servisi çalışmak\nzorundadır.",
    "explanation": "SQLite, sunucu gerektirmeyen gömülü bir veritabanıdır. MySQL veya PostgreSQL\ngibi sürekli çalışan ayrı bir veritabanı servisine ihtiyaç duymaz. Bu yüzden “sürekli\naçık bir SQLite servisi çalışmak zorundadır” ifadesi yanlıştır.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-124",
    "sourceNo": 124,
    "sourcePage": 77,
    "largeDeck": "Flutter",
    "smallDeck": "Asenkron, JSON ve Firebase",
    "question": "Web servisi veya veritabanı verisi ile test yapılacaksa, taklit\nveri kaynağı oluşturmak için kullanılan paket hangisidir?",
    "options": {
      "A": "Slave",
      "B": "Tester",
      "C": "Copy",
      "D": "Mockito",
      "E": "Capuccino"
    },
    "correct": "D",
    "answerRaw": "D) Mockito",
    "explanation": "Mockito , testlerde gerçek servis veya veritabanı yerine sahte nesneler yani mock\nyapılar oluşturmak için kullanılır. Böylece testler dış kaynaklara bağımlı olmadan\ndaha kontrollü şekilde çalıştırılabilir.",
    "tags": [
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-125",
    "sourceNo": 125,
    "sourcePage": 78,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "pubspec.yaml dosyası içerisinde url_launcher: ^5.4.0\nbenzeri bir satır varsa bu paket projeye nasıl dahil olur?",
    "options": {
      "A": "url_launcher ’a bağımlı olan başka paketlerde bağımlılıklar 6.0.0 ’a\nyükseltilecektir.",
      "B": "url_launcher ’a olan bağımlılıklar 5.4.0 ila 6.0.0 arasındaki bir sürümü\nkullanacaktır.",
      "C": "url_launcher ’ın son sürümü kullanılır.",
      "D": "url_launcher projeye dahil edilmeyecek sadece sürüm aralığı takip edilecektir.",
      "E": "url_launcher ’ın 5.4.0 ile 6.0.0 arasındaki sürümleri görmezden gelinir."
    },
    "correct": "B",
    "answerRaw": "B) url_launcher ’a olan bağımlılıklar 5.4.0 ila 6.0.0 arasındaki bir\nsürümü kullanacaktır.",
    "explanation": "^5.4.0 ifadesi, paketin 5.4.0 sürümünden başlayarak uyumlu yeni sürümlerinin\nkullanılabileceğini belirtir. Semantik sürümlemede bu genellikle 6.0.0 öncesindeki\nuyumlu sürümlere izin verir.",
    "tags": [
      "pubspec"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-126",
    "sourceNo": 126,
    "sourcePage": 78,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Dart programlama dilinde bir sınıf içerisinde verilen getter\nkodunun işlevi hangisidir?",
    "options": {
      "A": "right sınıf içinde sadece okunabilir bir tanımlama olarak eklenir.",
      "B": "left ve width değerleri güncellenmek istendiğinde bu satır çalıştırılır.",
      "C": "get adında yeni bir değişken tanımlamaktadır.",
      "D": "right adında yeni bir değişken tanımlamaktadır.",
      "E": "right sınıf içinde sadece yazılabilir bir tanımlama olarak eklenir."
    },
    "correct": "A",
    "answerRaw": "A) right sınıf içinde sadece okunabilir bir tanımlama olarak eklenir.",
    "explanation": "Bu soru büyük olasılıkla Dart’taki getter yapısını sormaktadır. Örneğin:\ndouble get right => left + width;\nBu yapı right adında ayrı bir değişken oluşturmaz. right okunduğunda left + \nwidth değeri hesaplanır. Setter olmadığı için sadece okunabilir bir özellik gibi\ndavranır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-127",
    "sourceNo": 127,
    "sourcePage": 79,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Navigator API içerisinde isimlendirilmiş bir yolu ekrana\ngetirmek için hangi fonksiyon kullanılır?",
    "options": {
      "A": "Navigator.popNamed",
      "B": "Navigator.moveNamed",
      "C": "Navigator.returnNamed",
      "D": "Navigator.pushNamed",
      "E": "Navigator.backNamed"
    },
    "correct": "D",
    "answerRaw": "D) Navigator.pushNamed",
    "explanation": "Flutter’da isimlendirilmiş bir route’a gitmek için Navigator.pushNamed() kullanılır.\nNavigator.pushNamed(context, '/detail');\nBu komut, rota tablosunda tanımlı olan /detail sayfasını açar.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-128",
    "sourceNo": 128,
    "sourcePage": 80,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "AnimatedContainer kullanarak Flutter’da bir animasyon\noluşturulmak istenirse bu animasyon aşağıdaki özelliklerden\nhangisini değiştiremez?",
    "options": {
      "A": "Border",
      "B": "Font Size",
      "C": "Color",
      "D": "Padding",
      "E": "Margin"
    },
    "correct": "B",
    "answerRaw": "B) Font Size",
    "explanation": "AnimatedContainer ; renk, genişlik, yükseklik, padding, margin, decoration ve border\ngibi Container özelliklerini animasyonlu şekilde değiştirebilir. \nAncak yazı boyutu doğrudan AnimatedContainer ’ın özelliği değildir. Yazı boyutu\nanimasyonu için AnimatedDefaultTextStyle gibi daha uygun widget’lar kullanılabilir.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-129",
    "sourceNo": 129,
    "sourcePage": 80,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’daki provider kütüphanesi ile sağlanan uygulama\nseviyesi durum yönetiminde sayfadaki belli bir alanın\ngüncellenmesi hangi widget ile sağlanır?",
    "options": {
      "A": "Consumer",
      "B": "ChangeNotifier",
      "C": "Provider",
      "D": "MultiProvider",
      "E": "Listener"
    },
    "correct": "A",
    "answerRaw": "A) Consumer",
    "explanation": "Consumer , provider ile sağlanan veriyi dinleyerek yalnızca ilgili arayüz bölümünün\nyeniden oluşturulmasını sağlar. Bu sayede tüm sayfa yerine sadece veriye bağlı\nolan alan güncellenebilir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-130",
    "sourceNo": 130,
    "sourcePage": 81,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Aşağıdakilerden hangisi Flutter çerçevesinde uygulamanın\ntest ve bakım süreci için yanlış bir ifadedir?",
    "options": {
      "A": "Uygulamanın dağıtımı profile kipinde derleme ile yapılır.",
      "B": "Flutter’da unit test senaryoları proje kökündeki test adında bir klasörde\noluşturulur.",
      "C": "Test paketi expect adındaki fonksiyon çağrısı ile test sonucunun başarılı olup\nolmadığını değerlendirir.",
      "D": "Uygulama dağıtımı boyutu platforma ve cihaza göre değişiklik gösterebilir.",
      "E": "Uygulamanın varsayılan derleme kipi debug ’dır."
    },
    "correct": "A",
    "answerRaw": "A) Uygulamanın dağıtımı profile kipinde derleme ile yapılır.",
    "explanation": "Flutter’da gerçek dağıtım için genellikle release kipi kullanılır. profile kipi\nperformans analizi için uygundur; son kullanıcıya dağıtım için tercih edilen mod\ndeğildir.",
    "tags": [
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-131",
    "sourceNo": 131,
    "sourcePage": 81,
    "largeDeck": "Dart",
    "smallDeck": "Sınıf, Nesne ve Kalıtım",
    "question": "pubspec.yaml dosyasına yeni bir paket bağımlılığı\ntanımlandığında, bunun kullanıma hazır olması için terminalde\nhangi komut çalıştırılır?",
    "options": {
      "A": "flutter work",
      "B": "flutter create package",
      "C": "flutter pub get",
      "D": "flutter build apk",
      "E": "flutter run"
    },
    "correct": "C",
    "answerRaw": "C) flutter pub get",
    "explanation": "pubspec.yaml dosyasına yeni bir paket eklendikten sonra bağımlılıkların indirilmesi\ngerekir. Bunun için şu komut çalıştırılır:\nflutter pub get\n\nBu komut, gerekli paketleri indirir ve projede kullanılabilir hale getirir.",
    "tags": [
      "pubspec"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-132",
    "sourceNo": 132,
    "sourcePage": 82,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "StatefulWidget ’tan miras alınarak oluşturulan bir arayüz\nbileşeninde setState() fonksiyonu nerede kullanılmalıdır?",
    "options": {
      "A": "createState() metodu içerisinde",
      "B": "build metodu içerisinde",
      "C": "Arayüz güncellenmesinin gerektiği yerdeki kodu sarmalayacak yerde",
      "D": "Sınıf içerisinde değil, runApp metodu içerisinde",
      "E": "Sınıfın yapıcı fonksiyonunun içerisinde"
    },
    "correct": "C",
    "answerRaw": "C) Arayüz güncellenmesinin gerektiği yerdeki kodu sarmalayacak\nyerde",
    "explanation": "setState() , state bilgisinin değiştiği yerde çağrılır ve değişen kod parçasını\nsarmalar. Böylece Flutter’a “bu state değişti, arayüzü yeniden oluştur” mesajı\nverilmiş olur.\nsetState(() {\n sayac++;\n});",
    "tags": [
      "state",
      "widget",
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-133",
    "sourceNo": 133,
    "sourcePage": 82,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Flutter uygulamasının performansı hakkında aşağıdakilerden\nhangisi doğrudur?",
    "options": {
      "A": "Ekranda yenilenecek kısımları yönetmek için geniş tek bir StatefulWidget\nkullanımı performansı iyileştirir.",
      "B": "Arayüz çiziminde alt elemanlar değişmiyor olsa dahi yeniden çizim adımında\ntüm alt ağaç baştan render edilmek zorundadır ve bunu önleyecek çözüm yoktur.",
      "C": "Widget ağacında iç içe yer alan birden fazla StatelessWidget için sadece bir tane \nbuild() metodu çalışır.",
      "D": "Uygulamanın oluşan Android ve iOS paket boyutu cihaza marketten indirilen\nboyutundan daha büyük olmaktadır.",
      "E": "Flutter uygulamaları farklı platformlar için tek bir dağıtım paketi üzerinden\npaylaştırılır."
    },
    "correct": "D",
    "answerRaw": "D) Uygulamanın oluşan Android ve iOS paket boyutu cihaza\nmarketten indirilen boyutundan daha büyük olmaktadır.",
    "explanation": "Uygulamalar mağazadan indirilirken sıkıştırılmış paketler halinde gelebilir. Cihaza\nkurulduktan sonra kapladıkları alan, indirilen paket boyutundan daha büyük olabilir.\nDiğer seçeneklerdeki ifadeler performans ve Flutter derleme mantığı açısından\ndoğru değildir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-134",
    "sourceNo": 134,
    "sourcePage": 83,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter geliştiricilerinin sunduğu widget’ların tamamının\ntanıtımı ve anlatımlarına Flutter dokümanındaki hangi başlık\naltından erişilir?",
    "options": {
      "A": "Deployment",
      "B": "Flutter in Action",
      "C": "Widget Catalog",
      "D": "Testing and Debugging",
      "E": "Flutter Widgets"
    },
    "correct": "C",
    "answerRaw": "C) Widget Catalog",
    "explanation": "Flutter dokümanlarında widget’ların kategoriler halinde tanıtıldığı bölüm Widget\nCatalog olarak geçer. Layout, scrolling, input, animation ve styling gibi birçok\nwidget türü bu katalogdan incelenebilir.",
    "tags": [
      "widget",
      "test",
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-135",
    "sourceNo": 135,
    "sourcePage": 83,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter ve Dart içerisinden Firebase özelliklerine erişmek için\nkullanılan kütüphaneler koleksiyonunun adı hangisidir?",
    "options": {
      "A": "intl",
      "B": "Destiny",
      "C": "Provider",
      "D": "FireInTheHole",
      "E": "FlutterFire"
    },
    "correct": "E",
    "answerRaw": "E) FlutterFire",
    "explanation": "Flutter uygulamalarında Firebase servislerine erişmek için kullanılan eklenti ve\npaketler topluluğu FlutterFire olarak adlandırılır. Authentication, Firestore, Storage\nve Analytics gibi servisler FlutterFire paketleriyle kullanılabilir.",
    "tags": [
      "state",
      "firebase",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-136",
    "sourceNo": 136,
    "sourcePage": 84,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "http paketindeki http.get() fonksiyonunun dönüş değeri\nhangisidir?",
    "options": {
      "A": "Future<http.Request>",
      "B": "http.Response",
      "C": "http.Request",
      "D": "http.State",
      "E": "Future<http.Response>"
    },
    "correct": "E",
    "answerRaw": "E) Future<http.Response>",
    "explanation": "http.get() bir ağ isteği yaptığı için asenkron çalışır. Bu nedenle doğrudan \nhttp.Response değil, gelecekte tamamlanacak bir sonuç olan Future<http.Response>\ndöndürür.\nfinal response = await http.get(Uri.parse('https://example.co\nm'));",
    "tags": [
      "state"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-137",
    "sourceNo": 137,
    "sourcePage": 84,
    "largeDeck": "Flutter",
    "smallDeck": "Asset Yönetimi",
    "question": "Aşağıdakilerden hangisi Material düzenleyici arayüz\nbileşenlerinden biridir?",
    "options": {
      "A": "Text",
      "B": "FlatButton",
      "C": "Icon",
      "D": "Asset",
      "E": "ListTile"
    },
    "correct": "E",
    "answerRaw": "E) ListTile",
    "explanation": "ListTile , Material Design yapısında liste elemanı oluşturmak için kullanılan hazır\nbir widget’tır. Başlık, alt başlık, önde ikon ve sonda ek bir widget gibi bölümleri\nkolayca düzenlemeyi sağlar.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-138",
    "sourceNo": 138,
    "sourcePage": 85,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "Aşağıdaki bilgilerden hangisi Flutter’da veri saklama işlemleri\naçısından yanlış bir ifadedir?",
    "options": {
      "A": "Flutter’da dosya sistemine erişimde path_provider ile yollar belirlenmelidir.",
      "B": "Uygulamanın geçici dosyalarını kullanıcı veya işletim sistemi herhangi bir anda\nsilebilir.",
      "C": "Uygulamanın kendine ait dosyalarını kaydedeceği klasöre \ngetApplicationDocumentsDirectory() ile ulaşılır.",
      "D": "Android’de uygulamaların kendine ait alanına başka uygulamaların erişme hakkı\nyoktur.",
      "E": "Flutter’da dosya sistemine bir dosya kaydedilemez. Bunun yerine SQLite ve \nshared_preferences kullanılması gerekir."
    },
    "correct": "E",
    "answerRaw": "E) Flutter’da dosya sistemine bir dosya kaydedilemez. Bunun yerine\nSQLite ve shared_preferences kullanılması gerekir.",
    "explanation": "Flutter’da dosya sistemine dosya kaydetmek mümkündür. Dosya yolları için \npath_provider , dosya yazma / okuma işlemleri için Dart’ın File sınıfı kullanılabilir.\nSQLite ve shared_preferences veri saklama için alternatif yöntemlerdir; dosya\nkaydetmenin yerine geçmek zorunda değildir.",
    "tags": [
      "state",
      "dart",
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-139",
    "sourceNo": 139,
    "sourcePage": 85,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Aşağıdakilerden hangisi Flutter’da uygulama seviyesi durum\nyönetimi için kullanılan kütüphanenin adıdır?",
    "options": {
      "A": "firebase",
      "B": "material",
      "C": "provider",
      "D": "http",
      "E": "intl"
    },
    "correct": "C",
    "answerRaw": "C) provider",
    "explanation": "provider , Flutter’da uygulama genelinde state yönetimi için kullanılan yaygın bir\npakettir. Kullanıcı bilgisi, tema seçimi, sayaç değeri veya sepet bilgisi gibi\nuygulamanın farklı yerlerini etkileyen veriler provider ile yönetilebilir.",
    "tags": [
      "state",
      "firebase"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-140",
    "sourceNo": 140,
    "sourcePage": 86,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Flutter uygulamasının performansı hakkında aşağıdakilerden\nhangisi doğrudur?",
    "options": {
      "A": "Widget ağacında iç içe yer alan birden fazla StatelessWidget için sadece bir tane \nbuild() metodu çalışır; içteki widget’ların build() metotları çalışmaz.",
      "B": "Ekranda yenilenecek kısımları yönetmek için geniş, yani daha fazla ekran\nbölgesini kapsayan tek bir StatefulWidget kullanımı performansı iyileştirir.",
      "C": "Uygulamanın oluşan Android ve iOS paket boyutu, cihaza marketten indirilen\nboyutundan daha büyük olmaktadır.",
      "D": "Flutter uygulamaları farklı platformlar için tek bir dağıtım paketi üzerinden\npaylaştırılır.",
      "E": "Arayüz çiziminde alt elemanlar değişmiyor olsa bile yeniden çizimde tüm alt\nağaç baştan render edilmek zorundadır ve bunu önleyecek bir çözüm yoktur."
    },
    "correct": "C",
    "answerRaw": "C) Uygulamanın oluşan Android ve iOS paket boyutu, cihaza\nmarketten indirilen boyutundan daha büyük olmaktadır.",
    "explanation": "Uygulamalar mağazadan indirilirken sıkıştırılmış paketler halinde gelebilir. Cihaza\nkurulduktan sonra kapladıkları alan, indirilen paket boyutundan daha büyük olabilir.\nDiğer seçeneklerdeki ifadeler Flutter’ın çalışma ve performans mantığı açısından\ndoğru değildir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-141",
    "sourceNo": 141,
    "sourcePage": 86,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "Flutter’daki test paketi ile unit test yapılırken bir test\nkoşulunun sağlanması için boş bırakılan yere ne gelmelidir?",
    "options": {
      "A": "assert",
      "B": "lookup",
      "C": "search",
      "D": "find",
      "E": "expect"
    },
    "correct": "E",
    "answerRaw": "E) expect",
    "explanation": "Flutter ve Dart testlerinde beklenen sonucun gerçekleşip gerçekleşmediğini\nkontrol etmek için expect() fonksiyonu kullanılır.\nÖrnek:\ntest('toplama testi', () {\n expect(2 + 2, 4);\n});\nBu örnekte test, 2 + 2 sonucunun 4 olup olmadığını denetler.",
    "tags": [
      "test",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-142",
    "sourceNo": 142,
    "sourcePage": 87,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Scaffold bileşeni için aşağıdaki ifadelerden hangisi\nyanlıştır?",
    "options": {
      "A": "Android’in klasik uygulama ana ekranını oluşturur.",
      "B": "home adında bir parametresi vardır.",
      "C": "Projenin arayüz bileşeni ağacında olması zorunlu değildir.",
      "D": "body adında bir parametresi vardır.",
      "E": "appBar adında bir parametresi vardır."
    },
    "correct": "B",
    "answerRaw": "B) home adında bir parametresi vardır.",
    "explanation": "Scaffold , Flutter’da sayfa iskeleti oluşturmak için kullanılır. appBar , body , drawer , \nfloatingActionButton gibi parametreleri vardır. \nAncak home parametresi Scaffold ’a değil, genellikle MaterialApp widget’ına aittir.\n\nMaterialApp(\n home: Scaffold(\n appBar: AppBar(title: Text('Başlık')),\n body: Text('İçerik'),\n ),\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-143",
    "sourceNo": 143,
    "sourcePage": 88,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "Aşağıdaki bilgilerden hangisi Flutter’da veri saklama işlemleri\naçısından yanlış bir ifadedir?",
    "options": {
      "A": "Uygulamanın kendine ait dosyalarını kaydedeceği klasöre \ngetApplicationDocumentsDirectory() ile ulaşılır.",
      "B": "Uygulamanın geçici dosyalarını kullanıcı veya işletim sistemi herhangi bir anda\nsilebilir.",
      "C": "Flutter’da dosya sistemine bir dosya kaydedilemez; bunun yerine SQLite ve \nshared_preferences kullanılması gerekir.",
      "D": "Flutter’da dosya sistemine erişimde path_provider ile yollar belirlenmelidir.",
      "E": "Android’de uygulamaların kendine ait alanına başka uygulamaların erişme hakkı\nyoktur."
    },
    "correct": "C",
    "answerRaw": "C) Flutter’da dosya sistemine bir dosya kaydedilemez; bunun yerine\nSQLite ve shared_preferences kullanılması gerekir.",
    "explanation": "Flutter’da dosya sistemine dosya kaydetmek mümkündür. Dizin yollarını almak için \npath_provider , dosya okuma ve yazma işlemleri için Dart’ın File sınıfı kullanılabilir. \nSQLite ve shared_preferences , veri saklama için alternatif yöntemlerdir; dosya\nkaydetmenin yerine geçmek zorunda değildir.",
    "tags": [
      "state",
      "dart",
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-144",
    "sourceNo": 144,
    "sourcePage": 88,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "SQLite ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
    "options": {
      "A": "iOS ve Android işletim sistemlerinde yerel olarak gelmektedir; akıllı telefon\nuygulamalarında doğrudan kullanılabilir.",
      "B": "İşletim sistemi içerisinde sürekli açık bir SQLite servisi çalışmak zorundadır;\nuygulamalar bu servis sayesinde veritabanlarına erişir.",
      "C": "DateTime veri türü SQLite veritabanında tanımlı bir veri türü değildir; zaman\nverileri rakam veya String olarak saklanmaktadır.",
      "D": "Bir kolonda farklı satırlarda farklı değer türünde veri saklanabilir.",
      "E": "SQLite ilişkisel bir veritabanı modeli sunar."
    },
    "correct": "B",
    "answerRaw": "B) İşletim sistemi içerisinde sürekli açık bir SQLite servisi çalışmak\nzorundadır.",
    "explanation": "SQLite, sunucu gerektirmeyen gömülü bir veritabanıdır. MySQL veya PostgreSQL\ngibi sürekli çalışan ayrı bir veritabanı servisine ihtiyaç duymaz. Bu nedenle “sürekli\naçık bir SQLite servisi gerekir” ifadesi yanlıştır.",
    "tags": [
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-145",
    "sourceNo": 145,
    "sourcePage": 89,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "pubspec.yaml dosyasındaki dependencies kısmında paket\nyönetiminin en güncel uyumlu sürümü bulması için versiyon\nnumarası önüne hangi sembol gelir?",
    "options": {
      "A": "?",
      "B": "^",
      "C": "+",
      "D": "%",
      "E": "-"
    },
    "correct": "B",
    "answerRaw": "B) ^",
    "explanation": "Dart ve Flutter projelerinde ^ sembolü, uyumlu sürüm aralığını belirtir.\nÖrnek:\ndependencies:\n provider: ^6.0.0\n\nBu ifade, belirtilen sürümden başlayarak uyumlu daha yeni sürümlerin\nkullanılabileceğini gösterir.",
    "tags": [
      "pubspec",
      "state",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-146",
    "sourceNo": 146,
    "sourcePage": 90,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Aşağıdakilerden hangisi Flutter uygulama boyutunu azaltmak\niçin kullanılacak yöntemlerden biri değildir?",
    "options": {
      "A": "Kütüphanelerden yüklenen kaynakların en aza indirilmesi",
      "B": "Android ve iOS SDK sürümlerinin düşük tutulması",
      "C": "PNG ve JPEG dosyalarını sıkıştırarak kullanma",
      "D": "Kullanılmayan kaynakların projeden çıkarılması",
      "E": "Dağıtım sürümü üretilirken --split-debug-info etiketinin kullanımı"
    },
    "correct": "B",
    "answerRaw": "B) Android ve iOS SDK sürümlerinin düşük tutulması",
    "explanation": "Uygulama boyutunu azaltmak için gereksiz asset’leri kaldırmak, görselleri\nsıkıştırmak, gereksiz paketleri azaltmak ve uygun build seçeneklerini kullanmak\nmantıklıdır. \nAncak Android veya iOS SDK sürümlerini düşük tutmak sağlıklı ve doğrudan bir\nuygulama boyutu azaltma yöntemi değildir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-147",
    "sourceNo": 147,
    "sourcePage": 90,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "Aşağıdakilerden hangisi Flutter’da uygulamanın\nperformansını incelemek için kullanılan derleme modelidir?",
    "options": {
      "A": "Publish",
      "B": "Perform",
      "C": "Debug",
      "D": "Release",
      "E": "Profile"
    },
    "correct": "E",
    "answerRaw": "E) Profile",
    "explanation": "Flutter’da profile mode, uygulamanın performansını gerçekçi koşullara yakın\nşekilde incelemek için kullanılır. Debug mode geliştirme içindir; release mode ise\n\nson kullanıcıya dağıtım için kullanılır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-148",
    "sourceNo": 148,
    "sourcePage": 91,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Mobil Ekosistem",
    "question": "Aşağıdakilerden hangisi 2021 yılında Flutter’ın\ndesteklemediği bir ortam / işletim sistemi adıdır?",
    "options": {
      "A": "Windows",
      "B": "Linux",
      "C": "iOS",
      "D": "Android",
      "E": "HarmonyOS"
    },
    "correct": "E",
    "answerRaw": "E) HarmonyOS",
    "explanation": "Flutter; Android ve iOS geliştirme için yaygın olarak kullanılır. Ayrıca web ve\nmasaüstü platformları için de destek geliştirilmiştir. \nSeçenekler içinde HarmonyOS, Flutter’ın klasik resmî hedef platformları arasında\nyer almadığı için doğru cevaptır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-149",
    "sourceNo": 149,
    "sourcePage": 91,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Aşağıdakilerden hangisi Navigator 2.0 API ile gelen\nbileşenlerden biri değildir?",
    "options": {
      "A": "RouterInformationParser",
      "B": "RouterDelegate",
      "C": "Scaffold",
      "D": "Router",
      "E": "Page"
    },
    "correct": "C",
    "answerRaw": "C) Scaffold",
    "explanation": "Navigator 2.0; Router , RouterDelegate , RouteInformationParser ve Page gibi\nyönlendirme kavramlarıyla ilişkilidir. \nScaffold ise yönlendirme sisteminin değil, Material sayfa iskeleti oluşturmanın bir\nparçasıdır.",
    "tags": [
      "navigator",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-150",
    "sourceNo": 150,
    "sourcePage": 92,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter geliştiricilerinin sunduğu widget’ların tamamının\ntanıtımı ve anlatımlarına Flutter dokümanındaki hangi başlık\naltından erişilir?",
    "options": {
      "A": "Flutter Widgets",
      "B": "Deployment",
      "C": "Testing and Debugging",
      "D": "Widget Catalog",
      "E": "Flutter in Action"
    },
    "correct": "D",
    "answerRaw": "D) Widget Catalog",
    "explanation": "Flutter dokümanlarında widget’ların kategoriler halinde tanıtıldığı bölüm Widget\nCatalog olarak geçer. Layout, input, scrolling, animation ve styling gibi birçok\nwidget türü bu katalogdan incelenebilir.",
    "tags": [
      "widget",
      "test",
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-151",
    "sourceNo": 151,
    "sourcePage": 92,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter’da bir animasyonun zaman içerisindeki değişimindeki\nivmelenmesini ayarlayan bileşen hangisidir?",
    "options": {
      "A": "Curve",
      "B": "Size",
      "C": "Tween",
      "D": "Velocity",
      "E": "Weight"
    },
    "correct": "A",
    "answerRaw": "A) Curve",
    "explanation": "Animasyonun zaman içinde nasıl hızlanıp yavaşlayacağını belirleyen yapı Curve\nolarak adlandırılır. \nÖrneğin Curves.easeIn , animasyonun yavaş başlayıp hızlanmasını sağlar.\nCurvedAnimation(\n parent: controller,\n\n curve: Curves.easeIn,\n)",
    "tags": [
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-152",
    "sourceNo": 152,
    "sourcePage": 93,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "dart:convert kütüphanesinde bir objeyi JSON metnine\nçevirmek için kullanılan fonksiyon hangisidir?",
    "options": {
      "A": "serialize()",
      "B": "toJson()",
      "C": "jsonDecode()",
      "D": "fromJson()",
      "E": "jsonEncode()"
    },
    "correct": "E",
    "answerRaw": "E) jsonEncode()",
    "explanation": "Dart nesnesini JSON biçiminde metne çevirmek için jsonEncode() kullanılır.\nfinal jsonText = jsonEncode({'ad': 'Ali'});\njsonDecode() ise bunun tersini yapar; JSON metnini Dart nesnesine çevirir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-153",
    "sourceNo": 153,
    "sourcePage": 93,
    "largeDeck": "Dart",
    "smallDeck": "Sınıf, Nesne ve Kalıtım",
    "question": "Dart’ta bir sınıf tanımlanırken mixin kullanarak miras alma\nyapılacaksa mixin adları hangi anahtar kelimeden sonra sıralanır?",
    "options": {
      "A": "with",
      "B": "parent",
      "C": "on",
      "D": "implements",
      "E": "extends"
    },
    "correct": "A",
    "answerRaw": "A) with",
    "explanation": "Dart’ta mixin’ler bir sınıfa with anahtar kelimesiyle eklenir.\n\nclass Oyuncu extends Karakter with Ucabilir, Kosabilir {}\nBurada Ucabilir ve Kosabilir mixin’leri sınıfa ek yetenekler kazandırır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-154",
    "sourceNo": 154,
    "sourcePage": 94,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "StatefulWidget ile ilgili olarak aşağıdaki ifadelerden hangisi\nyanlıştır?",
    "options": {
      "A": "Bir Flutter projesinde birden fazla StatefulWidget tanımlanamaz.",
      "B": "Arayüz bileşenleri hiyerarşisinde bir StatefulWidget tanımlaması altında \nStatelessWidget tanımlaması bulunabilir.",
      "C": "Tüm Flutter arayüz bileşenlerinin oluşturacağı ağaç runApp() fonksiyonundaki\nparametreden başlar.",
      "D": "setState() , StatefulWidget ’ta arayüz güncellemesinin tetiklenmesi gereken kodu\nsarmalamalıdır.",
      "E": "StatelessWidget , arayüzün güncellenmesi için kendi içinde bir state mekanizması\nsunmaz; arayüz güncelleneceği zaman yeri geldiğinde sıfırdan oluşturulur."
    },
    "correct": "A",
    "answerRaw": "A) Bir Flutter projesinde birden fazla StatefulWidget tanımlanamaz.",
    "explanation": "Bir Flutter projesinde birden fazla StatefulWidget tanımlanabilir. Hatta büyük\nuygulamalarda farklı ekranlar ve bileşenler için birçok StatefulWidget bulunması\noldukça normaldir. Bu yüzden A seçeneği yanlıştır.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-155",
    "sourceNo": 155,
    "sourcePage": 94,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Plugin yani eklenti ile Package yani paket arasındaki farklılık\naşağıdakilerden hangisidir?",
    "options": {
      "A": "Package sadece Dart kodlarından oluşurken Plugin platform kodlaması ile bir\nköprü oluşturur.",
      "B": "Plugin her projeye uyarken package sadece Dart uygulamalarına eklenir.",
      "C": "Plugin sadece Dart kodlarından oluşurken Package platform kodlaması ile bir\nköprü oluşturur.",
      "D": "Plugin’de Package’ye göre asset ve diğer bileşenler de bulunabilir.",
      "E": "Package boyutu daha büyüktür; Plugin ise küçük kütüphanelerdir."
    },
    "correct": "A",
    "answerRaw": "A) Package sadece Dart kodlarından oluşurken Plugin platform\nkodlaması ile bir köprü oluşturur.",
    "explanation": "Package genellikle Dart kodlarından oluşan yeniden kullanılabilir kütüphane\nyapısıdır. \nPlugin ise Dart kodunun yanında Android, iOS, web veya masaüstü gibi\nplatformlara özel kodlarla bağlantı kurabilir. Kamera, GPS veya Bluetooth gibi\nözelliklerde çoğu zaman plugin kullanılır.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-156",
    "sourceNo": 156,
    "sourcePage": 95,
    "largeDeck": "Dart",
    "smallDeck": "Dart Dil Temelleri",
    "question": "Aşağıdaki ifadelerden hangisi Flutter Framework için yanlış\nbir bilgidir?",
    "options": {
      "A": "Dart; global, yerel ve static değişken tanımlamalarına izin vermektedir.",
      "B": "Dart programlama dilinde görebileceğiniz her şey bir objedir.",
      "C": "Flutter, Dart’tan bağımsız ayrı bir programlama dilidir.",
      "D": "Dart programlama dilinde bir değişkenin herhangi bir türden veri tutmasını\nistiyorsak Object türünde oluşturulabilir.",
      "E": "Dart programlama dili güçlü tip tanımlı bir dildir."
    },
    "correct": "C",
    "answerRaw": "C) Flutter, Dart’tan bağımsız ayrı bir programlama dilidir.",
    "explanation": "Flutter bir programlama dili değildir. Flutter, Dart diliyle kullanılan bir UI framework\nyani arayüz geliştirme çatısıdır. Programlama dili Dart’tır; Flutter ise bu dille\nuygulama arayüzleri geliştirmeyi sağlar.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-157",
    "sourceNo": 157,
    "sourcePage": 95,
    "largeDeck": "Flutter",
    "smallDeck": "Stateful / Stateless ve setState",
    "question": "Flutter’ın arayüz çizimi ile ilgili olarak aşağıdaki yorumlardan\nhangisi doğrudur?",
    "options": {
      "A": "Yeni bir ekranın açılması için ikinciEkran.show() tarzında bir çağrı yapılabilir.",
      "B": "Provider paketi bize internette sunulan ücretsiz web servislerinin bilgilerini\ngetirmektedir.",
      "C": "Bir butonun içerisinde bir widget oluşturularak bu widget ağacına dinamik\nolarak eklenebilir.",
      "D": "Uygulama içerisindeki veri değişikliği arayüz güncellemesi gerektiriyorsa bu bir\nmodel olarak tanımlanmalı ve değişiklikler takip edilmelidir.",
      "E": "Bir verideki değişim arayüzün bağımsız bölgelerinde güncelleme gerektiriyorsa \nStatefulWidget kullanmak iyi çözümdür."
    },
    "correct": "D",
    "answerRaw": "D) Uygulama içerisindeki veri değişikliği arayüz güncellemesi\ngerektiriyorsa bu bir model olarak tanımlanmalı ve değişiklikler takip edilmelidir.",
    "explanation": "Flutter’da arayüz, verinin yani state bilgisinin ekrana yansımasıyla oluşur. Eğer veri\ndeğiştiğinde arayüzün güncellenmesi gerekiyorsa, bu veri uygun bir model veya\nstate yönetimi yapısıyla takip edilmelidir. Provider gibi paketler bu amaçla\nkullanılabilir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-158",
    "sourceNo": 158,
    "sourcePage": 96,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "dart:convert kütüphanesinde JSON metnini bir objeye\nçevirmek için kullanılan fonksiyon hangisidir?",
    "options": {
      "A": "fromJson()",
      "B": "jsonEncode()",
      "C": "serialize()",
      "D": "jsonDecode()",
      "E": "toJson()"
    },
    "correct": "D",
    "answerRaw": "D) jsonDecode()",
    "explanation": "JSON metnini Dart nesnesine çevirmek için jsonDecode() kullanılır.\nfinal data = jsonDecode('{\"ad\": \"Ali\"}');\njsonEncode() ise Dart nesnesini JSON metnine çevirir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-159",
    "sourceNo": 159,
    "sourcePage": 96,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’da provider kütüphanesi kullanılarak bir veri modeli\noluşturulacaksa, bu veri modeli hangi sınıftan miras almalıdır?",
    "options": {
      "A": "Provider",
      "B": "Consumer",
      "C": "ChangeNotifierProvider",
      "D": "ChangeNotifier",
      "E": "DataModel"
    },
    "correct": "D",
    "answerRaw": "D) ChangeNotifier",
    "explanation": "Provider yaklaşımında veri modeli genellikle ChangeNotifier sınıfından türetilir.\nModeldeki veri değiştiğinde notifyListeners() çağrılarak bu modeli dinleyen\nwidget’lara haber verilir.\nclass SayacModel extends ChangeNotifier {\n int sayac = 0;\n void arttir() {\n sayac++;\n notifyListeners();\n }\n}",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-160",
    "sourceNo": 160,
    "sourcePage": 97,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Test ve Hata Ayıklama",
    "question": "Flutter'da “Release” modunun temel amacı aşağıdakilerden\nhangisidir?",
    "options": {
      "A": "Hata ayıklama loglarını etkinleştirmek",
      "B": "Kodun okunabilirliğini artırmak",
      "C": "Uygulama boyutunu ve performansı optimize etmek",
      "D": "Animasyonları yavaşlatmak",
      "E": "Test senaryolarını otomatikleştirmek"
    },
    "correct": "C",
    "answerRaw": "C) Uygulama boyutunu ve performansı optimize etmek",
    "explanation": "Release modu, uygulamanın son kullanıcıya dağıtılacak sürümünü üretmek için\nkullanılır. Bu modda hata ayıklama araçları ve geliştirme kolaylıkları devreden\n\nçıkarılır; kod daha performanslı çalışacak ve paket boyutu daha uygun olacak\nşekilde hazırlanır.",
    "tags": [
      "test"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-161",
    "sourceNo": 161,
    "sourcePage": 98,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Komutlar, Performans ve Dağıtım",
    "question": "Aşağıdakilerden hangisi Flutter'da uygulamanın\nperformansını incelemek için kullanılan derleme modelidir?",
    "options": {
      "A": "Profile",
      "B": "Debug",
      "C": "Perform",
      "D": "Release",
      "E": "Publish"
    },
    "correct": "A",
    "answerRaw": "A) Profile",
    "explanation": "Profile modu, Flutter uygulamasının gerçek cihaza yakın koşullarda performansını\nölçmek için kullanılır. Debug moduna göre daha az geliştirme ek yükü içerir ve\nperformans analiz araçlarıyla birlikte çalışmaya uygundur.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-162",
    "sourceNo": 162,
    "sourcePage": 98,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "MaterialApp arayüz bileşeninin onGenerateRoute\nparametresi, __ parametresi olan bir fonksiyon alır. Boş bırakılan\nyere hangi kelime gelmelidir?",
    "options": {
      "A": "Page",
      "B": "AssetBundle",
      "C": "NavigatorSettings",
      "D": "rootBundle",
      "E": "RouteSettings"
    },
    "correct": "E",
    "answerRaw": "E) RouteSettings",
    "explanation": "onGenerateRoute , rota oluşturmak için kullanılan bir fonksiyon alır. Bu fonksiyonun\nparametresi RouteSettings nesnesidir.\n\nonGenerateRoute: (RouteSettings settings) {\n // route oluşturulur\n}\nRouteSettings , açılmak istenen rota adı ve varsa gönderilen argümanlar gibi bilgileri\ntaşır.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-163",
    "sourceNo": 163,
    "sourcePage": 99,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "“App State” yaklaşımını aşağıdakilerden hangisi için\nkullanmak gereksiz olur?",
    "options": {
      "A": "Kullanıcı oturum açma işlevinde",
      "B": "Bir animasyonlu widget’ın animasyonu oynatımında",
      "C": "Bir e-ticaret uygulamasında sepet kısmının inşasında",
      "D": "Bir sosyal ağ uygulamasının bildirim göstermesinde",
      "E": "Kullanıcı tercihlerinin değişiminde"
    },
    "correct": "B",
    "answerRaw": "B) Bir animasyonlu widget’ın animasyonu oynatımında",
    "explanation": "App State, uygulamanın birçok ekranını veya bölümünü ilgilendiren genel durumlar\niçin kullanılır. Oturum bilgisi, sepet, bildirimler veya kullanıcı tercihleri buna\nörnektir. Tek bir widget’ın animasyon oynatma durumu ise genellikle yerel\ndurumdur; uygulama geneline taşınması gereksizdir.",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-164",
    "sourceNo": 164,
    "sourcePage": 99,
    "largeDeck": "Flutter ve Dart",
    "smallDeck": "Genel Tekrar",
    "question": "Visual Studio Code IDE’sinde aktif Flutter çalıştırma kipi ana\nekranda nerede görüntülenir?",
    "options": {
      "A": "Sol alt köşede",
      "B": "Karşılama ekranında",
      "C": "Sağ alt köşede",
      "D": "Sol üst köşede",
      "E": "Sağ üst köşede"
    },
    "correct": "C",
    "answerRaw": "C) Sağ alt köşede",
    "explanation": "Visual Studio Code’da Flutter ile ilgili aktif cihaz, çalışma hedefi ve çalıştırma modu\ngibi bilgiler genellikle alt durum çubuğunda, özellikle sağ alt köşede görüntülenir.\nBu alandan cihaz veya hedef platform bilgileri de kontrol edilebilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-165",
    "sourceNo": 165,
    "sourcePage": 100,
    "largeDeck": "Flutter",
    "smallDeck": "Rota ve Navigasyon",
    "question": "Aşağıdakilerden hangisi Flutter Navigator API’ında bulunan\ntemel bileşenlerden biri değildir?",
    "options": {
      "A": "Page",
      "B": "Screen",
      "C": "Route",
      "D": "Navigator",
      "E": "Router"
    },
    "correct": "B",
    "answerRaw": "B) Screen",
    "explanation": "Flutter’da sayfa geçişleri için Navigator , Route , Page ve yeni yönlendirme\nyapılarında Router gibi bileşenler kullanılır. Screen ise Flutter Navigator API’ın temel\nbileşeni değildir; geliştiricilerin kendi sayfa sınıflarına verebildiği genel bir isimdir.",
    "tags": [
      "navigator"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-166",
    "sourceNo": 166,
    "sourcePage": 100,
    "largeDeck": "Flutter",
    "smallDeck": "Yerel Depolama",
    "question": "Aşağıdaki Dart’ta kullanılan veri türlerinden hangisi SQLite’da\nbulunmadığı için SQLite veritabanına doğrudan yazılamaz?",
    "options": {
      "A": "null",
      "B": "String",
      "C": "int",
      "D": "num",
      "E": "DateTime"
    },
    "correct": "E",
    "answerRaw": "E) DateTime",
    "explanation": "SQLite’da ayrı bir DateTime veri türü yoktur. Tarih ve zaman bilgileri genellikle metin\n( String ), tam sayı zaman damgası veya gerçek sayı biçiminde saklanır. Dart’taki \n\nDateTime nesnesi bu biçimlerden birine dönüştürülerek kaydedilmelidir.",
    "tags": [
      "dart",
      "depolama"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-167",
    "sourceNo": 167,
    "sourcePage": 101,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "try-catch-finally yapısında finally bloğu ne için vardır?",
    "options": {
      "A": "Alt fonksiyon çağrılarında hata oluşursa onlara tepki verecek kodu yazmak",
      "B": "catch bloklarında yakalanamamış hataları yakalamak",
      "C": "Hiç hata oluşmadığında çalıştırılacak kodu yazmak",
      "D": "Hatayı düzeltmek için gereken kodu yazmak",
      "E": "Hata olsun olmasın try-catch bloğu sonunda çalışacak kodu yazmak"
    },
    "correct": "E",
    "answerRaw": "E) Hata olsun olmasın try-catch bloğu sonunda çalışacak kodu\nyazmak",
    "explanation": "finally bloğu, hata oluşsa da oluşmasa da çalışır. Bu nedenle dosya kapatma,\nbağlantı sonlandırma veya geçici kaynakları temizleme gibi her durumda yapılması\ngereken işlemler için kullanılır.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-168",
    "sourceNo": 168,
    "sourcePage": 101,
    "largeDeck": "Flutter",
    "smallDeck": "Asenkron, JSON ve Firebase",
    "question": "Uygulamanın farklı cihazlarda test edilmesini\notomatikleştirmek için aşağıdaki araçlardan hangisi kullanılır?",
    "options": {
      "A": "Flutter Inspector",
      "B": "Mockito",
      "C": "Firebase Test Lab",
      "D": "Dart Analyzer",
      "E": "flutter test"
    },
    "correct": "C",
    "answerRaw": "C) Firebase Test Lab",
    "explanation": "Firebase Test Lab, uygulamaların farklı cihaz ve yapılandırmalarda otomatik olarak\ntest edilmesini sağlar. Böylece uygulama yalnızca geliştiricinin kendi cihazında\ndeğil, çeşitli gerçek veya sanal cihazlarda da denenebilir.",
    "tags": [
      "test",
      "firebase",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-169",
    "sourceNo": 169,
    "sourcePage": 101,
    "largeDeck": "Mobil Temeller",
    "smallDeck": "Platform İzinleri",
    "question": "Android işletim sisteminde internet erişimine sahip olabilmek\niçin uses-permission \n\nandroid:name=\"android.permission.INTERNET\" kodu hangi dosyaya\nyazılmalıdır?",
    "options": {
      "A": "pubspec.yaml",
      "B": "initialize.json",
      "C": "config.ini",
      "D": "Configuration.xml",
      "E": "AndroidManifest.xml"
    },
    "correct": "E",
    "answerRaw": "E) AndroidManifest.xml",
    "explanation": "Android uygulama izinleri AndroidManifest.xml dosyasında tanımlanır. İnternet erişimi\niçin kullanılan izin satırı da bu dosyaya eklenir.\n<uses-permission \nname=\"android.permission.INTERNET\" /\n>\nFlutter projelerinde bu dosya genellikle android/app/src/main/AndroidManifest.xml\nyolunda bulunur.",
    "tags": [
      "pubspec"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-170",
    "sourceNo": 170,
    "sourcePage": 102,
    "largeDeck": "Dart",
    "smallDeck": "Sınıf, Nesne ve Kalıtım",
    "question": "String sınıfı için genişletme metotları yazmak istiyorsak kod\nbloğunu aşağıdakilerden hangisi doğru tanımlar?",
    "options": {
      "A": "extension BenimBlogum with String { }",
      "B": "extension String mixin BenimBlogum { }",
      "C": "extension String on BenimBlogum { }",
      "D": "extension BenimBlogum on String { }",
      "E": "extension String with BenimBlogum { }"
    },
    "correct": "D",
    "answerRaw": "D) extension BenimBlogum on String { }",
    "explanation": "Dart’ta extension method yazarken yapı şu şekildedir:\nandroid:\n\nextension ExtensionAdi on HedefTip {\n // genişletme metotları\n}\nBu nedenle String sınıfına metot eklemek için doğru kullanım extension BenimBlogum \non String { } biçimindedir.",
    "tags": [
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-171",
    "sourceNo": 171,
    "sourcePage": 103,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Aşağıdakilerden hangisi Flutter çerçevesinin arayüz\ndüzenlemesi için koyduğu kısıtlardan biri değildir?",
    "options": {
      "A": "Widget ağacı her 4 ms’de bir yenilenmek zorundadır; yenilenmezse ekranda\ntitreme olur.",
      "B": "Üst seviyedeki widget’ın boyutu da onun üstündeki widget’a bağlı olduğundan,\ntam widget ağacı işlenmeden arayüzün nasıl olacağı bilinemez.",
      "C": "Bir widget kendi boyutunu ancak üst seviye bileşenin verdiği kısıtlar arasında\nseçebilir.",
      "D": "Bir widget üst seviyeden daha büyük olmak isterse ve üst seviye yerleşimi\nbilmiyorsa, alttaki elemanın verdiği ölçü değerleri yok sayılabilir.",
      "E": "Bir widget ekranda hangi konumda olacağını asla bilemez ve buna karar\nveremez."
    },
    "correct": "A",
    "answerRaw": "A) Widget ağacı her 4 ms’de bir yenilenmek zorundadır;\nyenilenmezse ekranda titreme olur.",
    "explanation": "Flutter layout sistemi, üst widget’tan gelen kısıtlar ve alt widget’ın bu kısıtlar içinde\nseçtiği boyut üzerinden çalışır. Ancak widget ağacının her 4 ms’de bir yenilenmesi\ngerektiğine dair böyle mutlak bir kural yoktur. Akıcı görüntü için genellikle 60 FPS\nhedeflenir; bu da yaklaşık 16 ms’lik kare süresine karşılık gelir.",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-172",
    "sourceNo": 172,
    "sourcePage": 103,
    "largeDeck": "Flutter",
    "smallDeck": "Animasyon",
    "question": "Flutter’da uygulanacak bir animasyonun sürekli tekrar etmesi\nisteniyorsa oluşturulacak widget’ın hangi sınıftan miras alması\nuygun olur?",
    "options": {
      "A": "AnimatedPhysicalModel",
      "B": "AnimatedContainer",
      "C": "AnimatedWidget",
      "D": "AnimatedAlign",
      "E": "WidgetTransition"
    },
    "correct": "C",
    "answerRaw": "C) AnimatedWidget",
    "explanation": "Sürekli veya denetimli animasyonlarda, animasyon değerini dinleyen özel widget\nyapıları kullanılabilir. AnimatedWidget , bir Listenable veya Animation dinleyerek kendini\nyeniden oluşturabilen bir sınıftır. AnimatedContainer ve AnimatedAlign ise daha çok\nimplicit animation örnekleridir.",
    "tags": [
      "widget",
      "animasyon"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-173",
    "sourceNo": 173,
    "sourcePage": 104,
    "largeDeck": "Dart",
    "smallDeck": "Fonksiyonlar ve Parametreler",
    "question": "sqflite kütüphanesindeki openDatabase() fonksiyonu ile\nveritabanı bağlantısı kurulurken aşağıdaki parametrelerden\nhangisinin beslenmesi zorunludur?",
    "options": {
      "A": "onCreate",
      "B": "onUpdate",
      "C": "onResume",
      "D": "onLoad",
      "E": "onMigration"
    },
    "correct": "A",
    "answerRaw": "A) onCreate",
    "explanation": "openDatabase() kullanımında veritabanı ilk kez oluşturulacaksa tablo oluşturma\nişlemleri genellikle onCreate parametresi içinde tanımlanır. Veritabanının başlangıç\nşemasını oluşturmak için bu callback kullanılır. Not: Fonksiyonun teknik olarak\naldığı zorunlu ana değer veritabanı yoludur; seçenekler içinde veritabanı oluşturma\niçin beklenen doğru cevap onCreate olarak değerlendirilir.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-174",
    "sourceNo": 174,
    "sourcePage": 104,
    "largeDeck": "Flutter",
    "smallDeck": "Asenkron, JSON ve Firebase",
    "question": "if (response.statusCode == 200) koşulu aşağıdaki hangi\nkontrolü gerçekleştirir?",
    "options": {
      "A": "Erişilen web servisinin başarısız bir cevap döndüğünü teyit eder.",
      "B": "Dönen sonucun bir JSON dosyası olup olmadığını teyit eder.",
      "C": "Erişilen web servisinin getirdiği verinin 200’e eşit olup olmadığını kontrol eder.",
      "D": "Erişilen web servisinin başarılı bir cevap döndüğünü teyit eder.",
      "E": "Dönen sonucun bir HTML sayfası olup olmadığını teyit eder."
    },
    "correct": "D",
    "answerRaw": "D) Erişilen web servisinin başarılı bir cevap döndüğünü teyit eder.",
    "explanation": "HTTP durum kodu 200 , isteğin başarılı şekilde yanıtlandığını gösterir.\nif (response.statusCode == 200) {\n // başarılı cevap\n}\nBu koşul, web servisinden başarılı yanıt dönüp dönmediğini kontrol eder.",
    "tags": [],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-175",
    "sourceNo": 175,
    "sourcePage": 105,
    "largeDeck": "Flutter",
    "smallDeck": "Provider ve Durum Yönetimi",
    "question": "Flutter’da provider kütüphanesindeki uygulama seviyesi\ndurum yönetiminde notifyListeners() fonksiyon çağrısı ne\nzaman yapılır?",
    "options": {
      "A": "Veri modelinde bir değişiklik olduğu zaman",
      "B": "Widget ağacında bir değişiklik olduğu zaman",
      "C": "Yeni bir provider tanımlandığı zaman",
      "D": "Yeni bir veri modeli ekleneceği zaman",
      "E": "Yeni bir consumer tanımlandığı zaman"
    },
    "correct": "A",
    "answerRaw": "A) Veri modelinde bir değişiklik olduğu zaman",
    "explanation": "Provider kullanımında model sınıfı çoğunlukla ChangeNotifier sınıfından türetilir.\nModeldeki veri değiştiğinde notifyListeners() çağrılır ve modeli dinleyen\nwidget’lara güncelleme gerektiği bildirilir.\nvoid arttir() {\n sayac++;\n\n notifyListeners();\n}",
    "tags": [
      "state",
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-176",
    "sourceNo": 176,
    "sourcePage": 106,
    "largeDeck": "Test / Bakım",
    "smallDeck": "Test ve Hata Ayıklama",
    "question": "Bir Flutter uygulamasında aşağıdaki testlerden hangisi\ngerçekleştirilemez?",
    "options": {
      "A": "Unit Test: Fonksiyonların tek tek testi",
      "B": "Taklit veri kaynağı ile değişen veri için Unit Test",
      "C": "Widget Test: Arayüz bileşenlerinin testi",
      "D": "Sandbox Test: Güvenlik ihlali testi",
      "E": "Integration Test: Uygulamanın tamamının bütüncül çalışma testi"
    },
    "correct": "D",
    "answerRaw": "D) Sandbox Test: Güvenlik ihlali testi",
    "explanation": "Flutter’da yaygın test türleri unit test, widget test ve integration testtir. Mockito gibi\naraçlarla taklit veri kaynakları kullanılarak unit testler de yazılabilir. “Sandbox Test”\nise Flutter’ın standart test sınıflandırmasında yer alan temel bir test türü değildir.",
    "tags": [
      "widget",
      "test",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-177",
    "sourceNo": 177,
    "sourcePage": 106,
    "largeDeck": "Flutter",
    "smallDeck": "Widget ve Layout",
    "question": "Flutter’da sayfanın üst kısmındaki başlık bölümünün, liste\naşağı kaydırıldığında gizlenmesi isteniyorsa her iki bileşeni de\nhangi widget türünden yapmak gerekir?",
    "options": {
      "A": "Platinum",
      "B": "Silver",
      "C": "Bronze",
      "D": "Gold",
      "E": "Dust"
    },
    "correct": "B",
    "answerRaw": "B) Silver",
    "explanation": "Seçenekte “Silver” yazsa da Flutter’daki doğru kavram Sliver yapılarıdır. Kaydırma\nile birlikte davranan başlık ve liste yapıları için CustomScrollView içinde SliverAppBar\nve SliverList gibi widget’lar kullanılır.\n\nCustomScrollView(\n slivers: [\n SliverAppBar(title: Text(\"Başlık\")),\n SliverList(delegate: SliverChildListDelegate([...]))\n ],\n)",
    "tags": [
      "widget"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-178",
    "sourceNo": 178,
    "sourcePage": 107,
    "largeDeck": "Dart",
    "smallDeck": "Koleksiyonlar",
    "question": "Bir Flutter projesinde bir klasördeki tüm resimleri\nuygulamanın yükleme dosyasına eklemek için aşağıdakilerden\nhangisi yapılmalıdır?",
    "options": {
      "A": "Her resim dosyası için main.dart altında bir değişken oluşturulur.",
      "B": "İşletim sistemindeki Everyone kullanıcısına ilgili klasör için okuma/yazma izni\nverilir.",
      "C": "Resimlerin hepsi “Android Assets Studio” uygulamasıyla açılarak özel bir\nformatta kaydedilir.",
      "D": "pubspec.yaml içerisinde assets satırı altında klasör için bir kayıt açılır.",
      "E": "Resimlerin bulunduğu klasör geliştirme ortamının tasarım ekranına sürüklenir."
    },
    "correct": "D",
    "answerRaw": "D) pubspec.yaml içerisinde assets satırı altında klasör için bir kayıt açılır.",
    "explanation": "Flutter’da asset dosyalarının uygulamaya dahil edilmesi için pubspec.yaml\ndosyasında tanımlama yapılır. Bir klasördeki görselleri dahil etmek için \nflutter/assets bölümü altında klasör yolu belirtilebilir.\nflutter:\n assets:\n - assets/images/\nBu tanım, ilgili klasördeki asset dosyalarının uygulama tarafından kullanılabilmesini\nsağlar.",
    "tags": [
      "pubspec",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  },
  {
    "id": "fd-179",
    "sourceNo": 179,
    "sourcePage": 108,
    "largeDeck": "Flutter",
    "smallDeck": "Paket Yönetimi",
    "question": "Flutter paket bağımlılıklarında bir paketi aşağıdaki\nkaynaklardan hangisinde aramak uygun değildir?",
    "options": {
      "A": "GitHub repoları içerisinde",
      "B": "Sıkıştırılmış ZIP dosyası içerisinde",
      "C": "Pub.dev sayfasında",
      "D": "Dosya sisteminde",
      "E": "GitHub repolarının alt klasörlerinde"
    },
    "correct": "B",
    "answerRaw": "B) Sıkıştırılmış ZIP dosyası içerisinde",
    "explanation": "Flutter ve Dart bağımlılıkları genellikle pub.dev , Git depoları veya yerel dosya\nsistemi üzerinden tanımlanabilir. Git deposu içindeki alt klasörler de path bilgisiyle\nkullanılabilir. Ancak doğrudan sıkıştırılmış bir ZIP dosyasının içi, standart \npubspec.yaml bağımlılık kaynağı olarak kullanılmaz.",
    "tags": [
      "pubspec",
      "dart"
    ],
    "source": "cikmis_Sorular.pdf"
  }
];
