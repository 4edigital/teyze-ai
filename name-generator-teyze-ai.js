/**
 * Evcil Hayvan İsim Öneri AI
 * Kullanıcının girdiği açıklamaya göre kedi ve köpekler için isim önerileri sunar.
 * Hayvanın türü, fiziksel özellikleri, kişiliği ve diğer bilgilere göre isimler önerir.
 */
class PetNameGenerator {
  constructor() {
    // Türkçe kedi isimleri - genişletilmiş liste
    this.turkishCatNames = [
      "Pamuk", "Tekir", "Boncuk", "Minnoş", "Duman", "Zeytin", "Kömür", "Sarman", "Fındık", 
      "Lokum", "Tarçın", "Bulut", "Mavi", "Kırpık", "Minik", "Şeker", "Pati", "Maviş", 
      "Karamel", "Pekmez", "Kestane", "Limon", "Portakal", "Kahve", "Süt", "Bal",
      "Nazlı", "Şanslı", "Paşa", "Badem", "Kuki", "Tırmık", "Maskeli", "Pıtır", "Ponçik",
      "Benekli", "Kayısı", "Demir", "Çakıl", "Zıpzıp", "Şakacı", "Yumak", "Tüylü", "Pofuduk",
      "Kontes", "Prenses", "Sultan", "Şehzade", "Topaç", "Tembel", "Afacan", "Çıtır", "Pırıl",
      // Yeni eklenen kedi isimleri
      "Alice", "Angel", "Alf", "Aria", "Ares", "Arthur", "Asil", "Aşkım", "Ateş", 
      "Atlas", "Ace", "Ash", "Astro", "Ava", "Amber", "Aspen", "Amigo", "Ariel", 
      "Aurora", "Annie", "Amos", "Astra", "Anka", "Arlo", "Aksel", "Ajax", "Aqua", 
      "Athena", "Artie", "Angie", "Arden", "Alara", "Amaretto", "Avery", "Arrow", 
      "Aston", "Amelie", "Asher", "Allie", "Azra", "Aiden", "Amora", "Avalon", 
      "Amara", "Aisha", "Artemis", "Aubrey", "Acorn", "Angelique", "Almond", "Ashlyn", 
      "Azalea", "Adora",
      "Baby", "Bal", "Bambi", "Barbie", "Bebek", "Benek", "Betsy", "Betty", "Beyaz", 
      "Biber", "Blacky", "Bonnie", "Bony", "Brandy", "Badi", "Baksi", "Bambam", 
      "Barney", "Barnie", "Baron", "Bart", "Baxi", "Black", "Blackie", "Bobi", 
      "Bobo", "Boby", "Body", "Bono", "Bozo", "Brawny", "Buffy", "Bulut", "Beau", 
      "Blaze", "Blue", "Biscuit", "Boris", "Brody", "Bubbles", "Bo", "Buttercup", 
      "Blitzen", "Bowie", "Bilbo", "Barut", "Badem", "Bıcırık", "Balım", "Berke", 
      "Beste", "Bülbül",
      "Candy", "Carmen", "Cindy", "Cici", "Cina", "Cookie", "Cango", 
      "Carlos", "Chico", "Chester", "Churro", "Cleo", "Clifford", "Comet", 
      "Cupcake", "Chewie", "Cleopatra", "Cairo", "Cricket", "Caramel", "Cinnamon", 
      "Cheddar", "Charm", "Cherry",
      "Çakıl", "Çapkın", "Çiko", "Çirkin", "Çıtır",
      "Daisy", "Dino", "Dolly", "Doly", "Dusty", "Düşes", "Dali", "Dark", "Dingo", "Dobi",
      "Ece", "Emma", "Fındık", "Fıstık", "Efe",
      "Felix", "Figo", "Fişek", "Foxy", "Freddy", "Funny",
      "Gina", "Ginger", "Gipsy", "Goldie", "Gümüş", "Gypsi", "George", "Goofy",
      "Hera", "Honey", "Haydut", "Hektor", "Hugo",
      "Itır", "Irmak", "Işık", "Isırık", "Ilgın", "Islık",
      "İrma", "İce", "İgor", "İvan",
      "Jade", "Jenny", "Jessy", "Joy", "Junior", "Jack", "Jeff", "Jimmy", "Jolly",
      "Kara", "Karakız", "Karam", "Karamel", "Katia", "Kırpık", "Kızım", "Kontes", "Köpük", 
      "Kukı", "Küçük", "Kartal", "Keş", "Koko", "Kont", "Korsan", "Kral", "Kuki",
      "Lady", "Laika", "Leydi", "Lili", "Linda", "Liz", "Liza", "Lokum", "Lola", "Lolita", 
      "Lusi", "Lusy", "Leo", "Leon", "Lord", "Luca",
      "Magie", "Maya", "Melissa", "Miço", "Miki", "Mini", "Minik", "Mişa", "Maskot", 
      "Maxi", "Micheal", "Micky",
      "Nala", "Nana", "Nancy", "Nazlı", "Nicky", "Niki", "Noel", "Nero",
      "Orfe", "Oscar", "Oskar",
      "Pamuk", "Panço", "Papi", "Pati", "Pepsi", "Pırtık", "Pia", "Ponpon", "Prenses", "Puffy", 
      "Puik", "Puki", "Puppy", "Pako", "Panda", "Pascal", "Pasha", "Paşa", "Pepe", "Pepito", 
      "Pepper", "Pluto", "Polo", "Ponçik", "Pony", "Prens", "Punto",
      "Raşa", "Rita", "Roxy", "Rafi", "Rambo", "Rasta", "Reis", "Ricky", "Riki", 
      "Riko", "Robi", "Robin", "Rodi", "Romeo", "Rudy",
      "Sacha", "Sally", "Sam", "Samba", "Sandy", "Sasha", "Shila", "Sindy", "Sisi", "Snoppy", 
      "Sofi", "Sophie", "Sultan", "Susam", "Suzi", "Sezar", "Socrates", "Sunny",
      "Şans", "Şeker", "Şiba", "Şila", "Şirin", "Şiva", "Şahin", "Şanslı", "Şeytan", "Şimşek",
      "Tango", "Tara", "Tarçın", "Tekila", "Tess", "Tina", "Tintin", "Tony", "Topak", "Topik", 
      "Taz", "Tiger", "Tobie", "Tobi", "Toffee", "Tom", "Tomi", "Tommy", "Tomy", "Toni",
      "Uğur",
      "Venüs", "Viki", "Victor", "Votka",
      "Yağmur", "Yaman", "Yankee", "Yumoş",
      "Zeyna", "Zeytin", "Zorba",
      "Whisky"
    ];
    
    // Türkçe köpek isimleri
    this.turkishDogNames = [
      "Karabaş", "Paşa", "Çomar", "Aslan", "Fındık", "Çakır", "Dost", "Zeytin", "Cesur",
      "Kınalı", "Bekçi", "Sarı", "Yağız", "Avcı", "Bıdık", "Tospik", "Kuzu", "Minik",
      "Boncuk", "Toprak", "Kral", "Korsan", "Kaplan", "Kıvırcık", "Murat", "Pamir", "Poyraz",
      "Atmaca", "Şimşek", "Rüzgar", "Çetin", "Çevik", "Çakıl", "Duman", "Ateş", "Doğan",
      "Kartal", "Şahin", "Pamuk", "Tarçın", "Haylaz", "Yumoş", "Tosun", "Damar", "Fırtına",
      "Deli", "Gümüş", "Kömür", "Garip", "Çılgın", "Maskot", "Lider", "Komutan",
      "Aşkım", "Ateş", "Asil", "Bıdık", "Biber", "Bal", "Bulut", "Çakıl", "Çapkın", 
      "Çiko", "Çıtır", "Dost", "Duman", "Fındık", "Fıstık", "Garip", "Gümüş", "Haydut", 
      "Işık", "Kara", "Karabaş", "Karakız", "Karamel", "Kırpık", "Kızım", "Köpük", "Kömür", 
      "Leydi", "Lokum", "Minik", "Maskot", "Nazlı", "Pamuk", "Pati", "Pırtık", "Şans", 
      "Şeker", "Şirin", "Tarçın", "Tosun", "Uğur", "Yağmur", "Yaman", "Yumoş", "Zeytin",
      "Badem", "Bıcırık", "Balım", "Barış", "Bebek", "Benek", "Beyaz", "Boncuk", "Cesur",
      "Çomar", "Dost", "Ece", "Efe", "Kartal", "Keş", "Kral", "Prenses", "Sultan", "Şanslı"
    ];
    
    // Popüler uluslararası kedi isimleri - genişletilmiş liste
    this.internationalCatNames = [
      "Luna", "Oliver", "Leo", "Bella", "Charlie", "Lucy", "Max", "Lily", "Simon", "Chloe",
      "Tiger", "Simba", "Felix", "Nala", "Jack", "Kitty", "Oscar", "Jasper", "Ruby", "Loki",
      "Smokey", "Milo", "Sophie", "Shadow", "Willow", "Oreo", "Coco", "Salem", "Pumpkin", "Ziggy",
      "Mittens", "Boots", "Pepper", "Ginger", "Misty", "Bandit", "Sylvester", "Duchess", "Patches",
      "Penny", "Snowball", "Peanut", "Daisy", "Stormy", "Whiskers", "Sammy", "Toby", "Lucky",
      "Angel", "Tabby", "Princess", "Tiger", "Ollie", "Garfield", "Thomas", "Missy", "Midnight",
      "Bubbles", "Sassy", "Casper", "Chester", "Pebbles", "Molly", "Amber", "Sunny", "Marley", 
      "Muffin", "Rocky", "Gizmo", "Tigger", "Cookie", "Pixie",
      // Yeni eklenen uluslararası kedi isimleri
      "Alice", "Alex", "Alf", "Alfred", "Apollo", "Arthur", "Aspen", "Athena", "Aurora", 
      "Axel", "Azalea", "Aladdin", "Angus", "Alabaster", "Almond", "Amber", "Amethyst", "Anise", 
      "Autumn", "Azure", "Bagel", "Bailey", "Bamboo", "Basil", "Bear", "Beau", "Bianca", 
      "Binx", "Birch", "Blossom", "Bluebell", "Bonbon", "Bosco", "Breeze", "Buttercup", 
      "Buzz", "Calypso", "Cedar", "Chai", "Champ", "Cherry", "Chinook", "Clover", "Coral", 
      "Cotton", "Crumpet", "Crystal", "Cuddles", "Cupcake", "Curry", "Dante", "Dash", 
      "Dawn", "Dipper", "Dottie", "Dream", "Echo", "Eclipse", "Ember", "Espresso", "Eve", 
      "Fable", "Fern", "Flicker", "Flint", "Flora", "Fortune", "Fox", "Frost", "Galaxy", 
      "Gem", "Ghost", "Gypsy", "Halo", "Harbor", "Harley", "Harmony", "Hazel", "Hickory", 
      "Honey", "Hope", "Iris", "Ivy", "Jade", "Juno", "Karma", "Kiki", "Kiwi", "Latte", 
      "Lavender", "Legacy", "Lemon", "Lilac", "Lotus", "Magpie", "Maple", "Marshmallow", 
      "Marvel", "Meadow", "Mint", "Monarch", "Moon", "Nebula", "Neko", "Neptune", "Nova",
      "Oasis", "Olive", "Onyx", "Orbit", "Paprika", "Pebble", "Peony", "Phantom", "Phoenix", 
      "Pickle", "Pixel", "Quartz", "Raven", "River", "Rosemary", "Ruby", "Rune", "Saffron", 
      "Sage", "Sapphire", "Scout", "Serenity", "Sherbet", "Sky", "Smudge"
    ];
    
    // Popüler uluslararası köpek isimleri - genişletilmiş liste
    this.internationalDogNames = [
      "Max", "Bella", "Charlie", "Luna", "Cooper", "Lucy", "Buddy", "Daisy", "Rocky", "Lola", 
      "Bear", "Molly", "Duke", "Sadie", "Teddy", "Bailey", "Tucker", "Stella", "Bentley", "Zoey",
      "Milo", "Ruby", "Rusty", "Rosie", "Winston", "Coco", "Zeus", "Lily", "Rex", "Piper",
      "Bruno", "Penny", "Scout", "Maggie", "Oscar", "Riley", "Jake", "Koda", "Hunter", "Abby",
      "Jackson", "Shadow", "Murphy", "Chloe", "Toby", "Angel", "Lucky", "Marley", "Bandit", "Maya",
      "Neo", "Baxter", "Sophie", "Ginger", "Thor", "Honey", "Odin", "Amber", "Apollo", "Princess",
      "Archie", "Gizmo", "Mia", "Simba", "Moose", "Cody", "Harley", "Sammy", "Benji", "Peanut",
      "Alice", "Alex", "Alf", "Alfred", "Ares", "Arthur", "Asil", "Aşkım", "Ateş", "Aria", 
      "Atlas", "Ace", "Axel", "Astro", "Ava", "Alfie", "Aspen", "Amigo", "Ariel", "Aurora", 
      "Ash", "Annie", "Amos", "Astra", "Anka", "Arlo", "Aksel", "Ajax", "Aqua", "Amadeus", 
      "Athena", "Artie", "Angie", "Arden", "Alara", "Arabella", "Amaretto", "Avery", "Arrow", 
      "Aston", "Amelie", "Asher", "Allie", "Azra", "Aries", "Aiden", "Amora", "Avalon", "Archer", 
      "August", "Amara", "Adonis", "Aisha", "Artemis", "Aubrey", "Acorn", "Angelique", "Angus", 
      "Albus", "Almond", "Ashlyn", "Azalea", "Aladdin", "Adora",
      "Baby", "Bal", "Bambi", "Barby", "Bebek", "Benek", "Betsy", "Betty", "Beyaz", "Bıdık", 
      "Biber", "Blacky", "Boncuk", "Bonnie", "Bony", "Brandy", "Badi", "Baksi", "Bambam", "Bandy", 
      "Barney", "Barnie", "Barny", "Baron", "Bart", "Baxi", "Bızdık", "Black", "Blackie", "Bobi", 
      "Bobo", "Boby", "Body", "Bono", "Bozo", "Brawny", "Buffy", "Bulky", "Bulut", "Beau", "Blaze", 
      "Blue", "Biscuit", "Boomer", "Bingo", "Basil", "Boots", "Bosco", "Brownie", "Buzz", "Blanca", 
      "Boris", "Brody", "Bubbles", "Bo", "Buttercup", "Butch", "Blitzen", "Bowie", "Buck", "Brutus", 
      "Bane", "Bronco", "Bilbo", "Barut", "Badem", "Bıcırık", "Balım", "Barış", "Berke", "Beste", "Bülbül",
      "Candy", "Cano", "Carmen", "Cindy", "Cici", "Cina", "Cookie", "Can", "Cancan", "Cango", 
      "Carlos", "Cesur", "Champy", "Cino", "Chico", "Chester", "Churro", "Cleo", "Clifford", "Comet", 
      "Cupcake", "Chase", "Chewie", "Cleopatra", "Cairo", "Cricket", "Caramel", "Cinnamon", "Cheddar", 
      "Czar", "Casanova", "Charm", "Cherry",
      "Çakıl", "Çapkın", "Çiko", "Çirkin", "Çomar", "Çıtır",
      "Daisy", "Dino", "Dolly", "Doly", "Dusty", "Düşes", "Dali", "Dark", "Dingo", "Dobi", "Dük",
      "Ece", "Emma", "Fındık", "Fıstık", "Efe",
      "Felix", "Figo", "Fişek", "Foxy", "Freddy", "Funny",
      "Garip", "Gina", "Ginger", "Gipsy", "Goldie", "Gümüş", "Gypsi", "George", "Goofy", "Gorbi",
      "Hera", "Honey", "Haydut", "Hektor", "Herkül", "Hugo",
      "Itır", "Irmak", "Işık", "Isırık", "Ilgın", "Islık",
      "İrma", "İce", "İgor", "İvan",
      "Jade", "Jenny", "Jessy", "Joy", "Junior", "Jack", "Jeff", "Jimmy", "Joe", "Johnny", "Jolly",
      "Kara", "Karabaş", "Karakız", "Karam", "Katia", "Kırpık", "Kızım", "Kontes", "Köpük", 
      "Kukı", "Kurt", "Küçük", "Kartal", "Keş", "Koko", "Kont", "Korsan", "Kral", "Kuki",
      "Lady", "Laika", "Leydi", "Lili", "Linda", "Liz", "Liza", "Lokum", "Lola", "Lolita", 
      "Lusi", "Lusy", "Lassie", "Leo", "Leon", "Lord", "Luca",
      "Magie", "Maya", "Melissa", "Miço", "Miki", "Mini", "Minik", "Mişa", "Maço", "Maskot", 
      "Maxi", "Maximus", "Micheal", "Micky", "Mike",
      "Nala", "Nana", "Nancy", "Nazlı", "Nicky", "Niki", "Noel", "Nero",
      "Orfe", "Oscar", "Oskar",
      "Pamuk", "Panço", "Papi", "Pati", "Pepsi", "Pırtık", "Pia", "Ponpon", "Prenses", "Puffy", 
      "Puik", "Puki", "Puppy", "Pako", "Panda", "Pascal", "Pasha", "Paşa", "Pepe", "Pepito", 
      "Pepper", "Pluto", "Polo", "Ponçik", "Pony", "Prens", "Punto",
      "Raşa", "Reks", "Rita", "Roxy", "Rafi", "Rambo", "Rasta", "Reis", "Ricky", "Riki", 
      "Riko", "Robi", "Robin", "Rodi", "Romeo", "Rudy",
      "Sacha", "Sally", "Sam", "Samba", "Sandy", "Sasha", "Shila", "Sindy", "Sisi", "Snoppy", 
      "Sofi", "Sophie", "Sultan", "Susam", "Suzi", "Sezar", "Socrates", "Sumo", "Sunny",
      "Şans", "Şeker", "Şiba", "Şila", "Şirin", "Şiva", "Şahin", "Şanslı", "Şeytan", "Şimşek",
      "Tango", "Tara", "Tarçın", "Tekila", "Tess", "Tina", "Tintin", "Tony", "Topak", "Topik", 
      "Tosun", "Tarzan", "Taz", "Tiger", "Tobie", "Tobi", "Toffee", "Tom", "Tomi", "Tommy", 
      "Tomy", "Toni", "Torun", "Tyson",
      "Uğur",
      "Venüs", "Viki", "Victor", "Votka",
      "Yağmur", "Yaman", "Yankee", "Yumoş",
      "Zeyna", "Zeytin", "Zorba",
      "Whisky"
    ];
    
    // Renk sözlüğü - İngilizce karşılıkları kaldırıldı
    this.colorNames = {
      "beyaz": ["Pamuk", "Beyaz", "Kar", "Buz", "Süt", "Krem", "Bulut", "Ak"],
      "siyah": ["Kömür", "Kara", "Gece", "Zifir", "Koyu", "Karanlık", "Panter"],
      "gri": ["Duman", "Gri", "Boz", "Kül", "Gümüş", "Kurşuni", "Bulut"],
      "kahverengi": ["Kahve", "Çikolata", "Kestane", "Toprak", "Kum", "Tarçın", "Fındık"],
      "sarı": ["Sarı", "Altın", "Güneş", "Bal", "Limon", "Sarman", "Papatya"],
      "turuncu": ["Turuncu", "Portakal", "Mandarin", "Amber", "Havuç", "Ateş", "Alev"],
      "kırmızı": ["Kırmızı", "Ateş", "Alev", "Kızıl", "Mercan", "Kiraz", "Kan"],
      "mavi": ["Mavi", "Gök", "Deniz", "Okyanus", "Lacivert", "Maviş", "Turkuaz"],
      "yeşil": ["Yeşil", "Çimen", "Orman", "Yaprak", "Ot", "Zümrüt", "Fıstık"]
    };

    // Kişilik özellikleri sözlüğü - İngilizce karşılıkları kaldırıldı
    this.personalityNames = {
      "oyuncu": ["Zıpzıp", "Neşeli", "Mutlu", "Afacan", "Hareketli", "Canlı", "Haylaz"],
      "sakin": ["Huzurlu", "Sessiz", "Yumuşak", "Uysal", "Uslu", "Sabırlı", "Dingin"],
      "enerjik": ["Canlı", "Dinamik", "Aktif", "Hareketli", "Güçlü", "Atılgan", "Yılmaz"],
      "sevgi dolu": ["Şefkatli", "Sevimli", "Tatlı", "Cana Yakın", "Sevecen", "Sıcakkanlı", "Bal"],
      "akıllı": ["Zeki", "Çabuk Öğrenir", "Anlayışlı", "Kavrayışlı", "Yetenekli", "Bilge", "Kurnaz", "Pratik Zekâlı"],
      "cesur": ["Yürekli", "Kahraman", "Güçlü", "Korkusuz", "Gözüpek", "Atılgan", "Mert"]
    };

    // Fiziksel özellikler sözlüğü - İngilizce karşılıkları kaldırıldı
    this.physicalNames = {
      "büyük": ["Koca", "Dev", "Güçlü", "İri", "Heybetli", "Kocaman", "Baba"],
      "küçük": ["Minik", "Bebek", "Küçücük", "Yavru", "Ufaklık", "Minicik", "Boncuk"],
      "uzun": ["İnce", "Zarif", "Narin", "Uzun", "Servi", "Selvi", "Sülün"],
      "kısa": ["Kompakt", "Yuvarlak", "Tombul", "Bodur", "Tıknaz", "Toparlak", "Kısa"],
      "tüylü": ["Yumuşak", "Pamuk", "Tüylü", "Pofuduk", "Kabarık", "Yumak", "Peluş"],
      "çevik": ["Hızlı", "Atik", "Çevik", "Fırıldak", "Çalak", "Tetik", "Maymun"]
    };

    // Yaş özellikleri sözlüğü - İngilizce karşılıkları kaldırıldı
    this.ageNames = {
      "yavru": ["Bebek", "Minik", "Küçük", "Minimini", "Ufaklık", "Yavru", "Yavrucak"],
      "genç": ["Taze", "Yeni", "Delikanlı", "Genç", "Filiz", "Fidancık", "Taze Can"],
      "yaşlı": ["Bilge", "Tecrübeli", "Usta", "Kıdemli", "Yaşlı", "Olgun", "Ağırbaşlı"]
    };

    // Cinsiyet özellikleri sözlüğü - İngilizce karşılıkları kaldırıldı
    this.genderNames = {
      "erkek": ["Bey", "Ağa", "Paşa", "Sultan", "Reis", "Kral", "Şah", "Efendi"],
      "dişi": ["Hanım", "Leydi", "Prenses", "Sultan", "Hatun", "Kraliçe", "Melike"]
    };

    // Aktivite sözlüğü - İngilizce karşılıkları kaldırıldı
    this.activityNames = {
      "uyumak": ["Uykucu", "Düşçü", "Uyku Tulumu", "Tembel", "Mışıl", "Uyuşuk", "Uykucu"],
      "oyun": ["Oyuncu", "Zipzip", "Neşeli", "Haylaz", "Fırlama", "Afacan", "Yaramaz"],
      "yemek": ["Obur", "Şişko", "Yiyecek", "Kurabiye", "Atiştırma", "Lokum", "Çerez"],
      "tırmanmak": ["Tırmanan", "Kaya", "Dağcı", "Maymun", "Avcı", "Tırmanışçı", "Cambaz"],
      "yüzmek": ["Balık", "Martı", "Ördek", "Yunusçuk", "Denizci", "Dalgıç", "Kaptan"],
      "kovalamak": ["Avcı", "Takipçi", "İzci", "Dedektif", "Takipçi", "Koşucu", "Atlet"]
    };

    // İsim parametreleri
    this.nameParams = {
      minLength: 3,      // Minimum isim uzunluğu
      maxLength: 12,     // Maksimum isim uzunluğu
      preferredLength: 6 // Tercih edilen isim uzunluğu
    };

    // Irk isim eşleştirmeleri
    this.catBreedNames = {
      "tekir": ["Tekir", "Çizgili", "Stripe", "Tiger", "Kaplan", "Panter", "Karamel"],
      "van": ["Van", "Lake", "Göl", "Pamuk", "Türk", "Anadolu", "İkigöz", "Mavi", "Kar"],
      "ankara": ["Ankara", "Angora", "Capital", "Başkent", "Türk", "Beyaz", "İpeksi", "Zeki", "Bulut"],
      "british": ["Winston", "London", "Oxford", "Cambridge", "Lord", "Lady", "Earl", "Duke", "Thames", "Kraliçe"],
      "siyam": ["Siam", "Thai", "Oriental", "Blue", "Mavi", "Point", "Seal", "Bangkok", "Asya", "Egzotik"],
      "scottish fold": ["Scotty", "Edinburgh", "Fold", "Highland", "Glasgow", "Katlı", "Baykuş", "Kedi"],
      "bengal": ["Bengal", "Leopar", "Spots", "Jungle", "Vahşi", "Exotic", "Safari", "Tiger", "Benekli"],
      "ragdoll": ["Raggy", "Dolly", "Floppy", "Blue", "Angel", "Soft", "Fluffy", "Cuddle", "Sevimli"],
      "maine coon": ["Maine", "Coon", "Giant", "Büyük", "Hunter", "Wilderness", "Forest", "Orman", "Uzun"],
      "sphinx": ["Sphinx", "Çıplak", "Pharaoh", "Mısır", "Egypt", "Ancient", "Sıcak", "Ten", "Narin"],
      "devon rex": ["Devon", "Rex", "Curl", "Kıvırcık", "Wavy", "Dalga", "Soft", "Elfin", "Fairy"],
      "munchkin": ["Munchkin", "Shorty", "Kısa", "Teenie", "Hobbit", "Ufaklık", "Tiny", "Dwarf", "Cüce"],
      "persian": ["Persian", "Flat", "Smoosh", "Fluffy", "İran", "Royal", "King", "Queen", "Noble", "Shah"],
      "exotic shorthair": ["Exotic", "Teddy", "Bear", "Ayı", "Plush", "Sweet", "Chubby", "Tombik"]
    };

    this.dogBreedNames = {
      "golden": ["Golden", "Sunny", "Retriever", "Goldie", "Sarışın", "Buddy", "Happy", "Güneş", "Altın", "Honey"],
      "labrador": ["Lab", "Retriever", "Hunter", "Swimmer", "Rehber", "Sadık", "Guide", "Loyal", "Friendly", "Gentle"],
      "alman kurdu": ["Shepherd", "Bekçi", "Kurt", "Wolf", "Cesur", "Asil", "Koruyucu", "Guard", "Police", "Noble"],
      "husky": ["Husky", "Siberian", "Sibirya", "Wolf", "Kurt", "Snow", "Kar", "Arctic", "Kutup", "Ice", "Sled"],
      "kangal": ["Kangal", "Bekçi", "Koruyucu", "Anadolu", "Çoban", "Aslan", "Guardian", "Loyal", "Brave", "Protector"],
      "doberman": ["Doberman", "Guardián", "Vigilant", "Security", "Sleek", "Fast", "Hızlı", "Çevik", "Elegance", "Noble"],
      "rottweiler": ["Rottie", "Guardian", "Power", "Güç", "Robust", "Strong", "Loyal", "Protector", "Courageous", "Bold"],
      "beagle": ["Beagle", "Snoopy", "Hunter", "Scent", "Nose", "Burun", "Curious", "Meraklı", "Tracker", "Scout"],
      "pug": ["Pug", "Mops", "Wrinkle", "Kırışık", "Flat", "Chunky", "Funny", "Komik", "Chubby", "Snorty"],
      "chihuahua": ["Chihuahua", "Tiny", "Küçük", "Minik", "Pocket", "Teenie", "Chico", "Bean", "Mexica", "Fıstık"],
      "bulldog": ["Bulldog", "Bull", "Stocky", "Tank", "Tombul", "Brave", "Kararlı", "Stubborn", "İnatçı", "Butch"],
      "akbaş": ["Akbaş", "Beyaz", "White", "Shepherd", "Guardian", "Çoban", "Anadolu", "Protector", "Türk", "Watch"],
      "collie": ["Collie", "Lassie", "Herder", "Border", "Çoban", "Clever", "Smart", "Akıllı", "Beautiful", "Loyal"],
      "dalmatian": ["Dalmatian", "Spot", "Benekli", "Fire", "İtfaiye", "Marshal", "Noktacık", "Dotty", "Patch", "101"]
    };
  }

  /**
   * Belirli bir kelimeyi içerip içermediğini kontrol eden yardımcı fonksiyon
   * @param {string} text - Ana metin
   * @param {string} word - Aranacak kelime
   * @return {boolean} - Eşleşme durumu
   */
  containsWord(text, word) {
    // Tam kelime eşleşmesi için regex düzeltildi
    const pattern = new RegExp(`\\b${word}\\b`, 'i');
    return pattern.test(text);
  }

  /**
   * Diziyi karıştırma (Fisher-Yates algoritması)
   * @param {Array} array - Karıştırılacak dizi
   */
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * Açıklamayı analiz etme fonksiyonu - kelime parçası eşleştirme hatası düzeltildi
   * @param {string} description - Kullanıcı tarafından sağlanan evcil hayvan açıklaması
   * @return {Object} - Analiz sonuçları
   */
  analyzeDescription(description) {
    const analysis = {
      colors: [],           // Renk özellikleri
      personality: [],      // Karakter özellikleri  
      physical: [],         // Fiziksel özellikler
      age: [],              // Yaş bilgisi
      gender: [],           // Cinsiyet
      breedType: [],        // Irk tipi
      activities: [],       // Sevdiği aktiviteler
      keywords: [],         // Genel anahtar kelimeler
      namingSuggestion: [], // Doğrudan isim önerileri
      sentiment: 0          // Açıklamanın duygu analizi (-1 ile 1 arası)
    };
    
    const lowercaseDesc = description.toLowerCase();
    const words = lowercaseDesc.split(/\s+/);
    
    // İsim önerisi kalıpları - geliştirilmiş kalıplar
    const nameSuggestionPatterns = [
        /ismi?[\s]*(.*?)[\s]*olsun/i,
        /ad[ıi][\s]*(.*?)[\s]*olsun/i,
        /(.*?)[\s]*ismini seviyorum/i,
        /(.*?)[\s]*ad[ıi]n[ıi] seviyorum/i,
      /ona[\s]*(.*?)[\s]*diyelim/i,
      /ismini[\s]*(.*?)[\s]*koy[ad]?l[ıi]m/i,
      /ad[ıi]n[ıi][\s]*(.*?)[\s]*koy[ad]?l[ıi]m/i
    ];
    
    // İsim önerisi kalıplarını kontrol et
    for (const pattern of nameSuggestionPatterns) {
      const match = lowercaseDesc.match(pattern);
      if (match && match[1]) {
        const suggestion = match[1].trim();
        if (suggestion.length > 1 && !analysis.namingSuggestion.includes(suggestion)) {
          analysis.namingSuggestion.push(suggestion);
        }
      }
    }
    
    // Renkleri analiz et - tam kelime eşleşmesi için düzeltildi
    for (const [color, names] of Object.entries(this.colorNames)) {
      // Renk doğrudan açıklamada geçiyor mu diye kontrol et
      if (this.isExactWord(lowercaseDesc, color)) {
        if (!analysis.colors.includes(color)) {
          analysis.colors.push(color);
        }
        continue;
      }
      
      // Renk isimleri üzerinden kontrol et
      for (const colorName of names) {
        if (this.isExactWord(lowercaseDesc, colorName.toLowerCase())) {
          if (!analysis.colors.includes(color)) {
            analysis.colors.push(color);
          break;
          }
        }
      }
    }
    
    // Kişilik özelliklerini analiz et - tam kelime eşleşmesi için düzeltildi
    for (const [trait, names] of Object.entries(this.personalityNames)) {
      // Özellik doğrudan açıklamada geçiyor mu diye kontrol et
      if (this.isExactWord(lowercaseDesc, trait)) {
        if (!analysis.personality.includes(trait)) {
          analysis.personality.push(trait);
        }
        continue;
      }
      
      // Özellik isimleri üzerinden kontrol et
      for (const traitName of names) {
        if (this.isExactWord(lowercaseDesc, traitName.toLowerCase())) {
          if (!analysis.personality.includes(trait)) {
            analysis.personality.push(trait);
          break;
        }
      }
      }
    }
    
    // Fiziksel özellikleri analiz et - tam kelime eşleşmesi için düzeltildi
    for (const [feature, names] of Object.entries(this.physicalNames)) {
      // Özellik doğrudan açıklamada geçiyor mu diye kontrol et
      if (this.isExactWord(lowercaseDesc, feature)) {
        if (!analysis.physical.includes(feature)) {
          analysis.physical.push(feature);
        }
        continue;
      }
      
      // Özellik isimleri üzerinden kontrol et
      for (const featureName of names) {
        if (this.isExactWord(lowercaseDesc, featureName.toLowerCase())) {
          if (!analysis.physical.includes(feature)) {
            analysis.physical.push(feature);
          break;
          }
        }
      }
    }
    
    // Yaş özelliklerini analiz et - tam kelime eşleşmesi için düzeltildi
    for (const [age, names] of Object.entries(this.ageNames)) {
      // Özellik doğrudan açıklamada geçiyor mu diye kontrol et
      if (this.isExactWord(lowercaseDesc, age)) {
        if (!analysis.age.includes(age)) {
          analysis.age.push(age);
        }
        continue;
      }
      
      // Özellik isimleri üzerinden kontrol et
      for (const ageName of names) {
        if (this.isExactWord(lowercaseDesc, ageName.toLowerCase())) {
          if (!analysis.age.includes(age)) {
            analysis.age.push(age);
          break;
          }
        }
      }
    }
    
    // Cinsiyet özelliklerini analiz et - tam kelime eşleşmesi için düzeltildi
    for (const [gender, names] of Object.entries(this.genderNames)) {
      // Özellik doğrudan açıklamada geçiyor mu diye kontrol et
      if (this.isExactWord(lowercaseDesc, gender)) {
          if (!analysis.gender.includes(gender)) {
            analysis.gender.push(gender);
        }
        continue;
      }
      
      // Özellik isimleri üzerinden kontrol et
      for (const genderName of names) {
        if (this.isExactWord(lowercaseDesc, genderName.toLowerCase())) {
          if (!analysis.gender.includes(gender)) {
            analysis.gender.push(gender);
            break;
          }
        }
      }
    }
    
    // Aktiviteleri analiz et - tam kelime eşleşmesi için düzeltildi
    for (const [activity, names] of Object.entries(this.activityNames)) {
      // Özellik doğrudan açıklamada geçiyor mu diye kontrol et
      if (this.isExactWord(lowercaseDesc, activity)) {
          if (!analysis.activities.includes(activity)) {
            analysis.activities.push(activity);
        }
        continue;
      }
      
      // Özellik isimleri üzerinden kontrol et
      for (const activityName of names) {
        if (this.isExactWord(lowercaseDesc, activityName.toLowerCase())) {
          if (!analysis.activities.includes(activity)) {
            analysis.activities.push(activity);
            break;
          }
        }
      }
    }
    
    // Irk analizi - tam kelime eşleşmesi için düzeltildi
    const catBreeds = [
      "tekir", "van kedisi", "ankara kedisi", "siyam", "british", "ragdoll", 
      "maine coon", "bengal", "van", "ankara", "sarman", "scottish fold",
      "british shorthair", "devon rex", "munchkin", "sphinx", "persian",
      "exotic shorthair", "himalayan", "burmese", "birman", "tonkinese",
      "norveç orman kedisi", "sibirya kedisi", "sokak kedisi", "siyah kedi"
    ];
    
    const dogBreeds = [
      "labrador", "golden", "retriever", "alman kurdu", "german shepherd", 
      "husky", "kangal", "akbaş", "terrier", "pug", "doberman", "rottweiler",
      "pitbull", "bulldog", "chihuahua", "beagle", "dachshund", "boxer",
      "collie", "dalmatian", "st. bernard", "greyhound", "mastiff", "pomeranian",
      "buldok", "çoban köpeği", "tazı", "sokak köpeği", "av köpeği", "toy terrier"
    ];
    
    // Kedi ırkları için kontrol et
    for (const breed of catBreeds) {
      if (lowercaseDesc.includes(breed)) {
        if (!analysis.breedType.includes(breed)) {
          analysis.breedType.push(breed);
        }
      }
    }
    
    // Köpek ırkları için kontrol et
    for (const breed of dogBreeds) {
      if (lowercaseDesc.includes(breed)) {
        if (!analysis.breedType.includes(breed)) {
          analysis.breedType.push(breed);
        }
      }
    }
    
    // Duygu analizi - sabit kelime listesiyle
    const positiveWords = [
      "seviyor", "mutlu", "güzel", "harika", "iyi", "hoş", "tatlı", "mükemmel", "muhteşem", 
      "sevimli", "cana yakın", "neşeli", "huzurlu", "şirin", "keyifli", "sevecen", "coşkulu"
    ];
    
    const negativeWords = [
      "sevmiyor", "mutsuz", "kötü", "korku", "kızgın", "öfkeli", "sinirli", "endişeli",
      "gergin", "üzgün", "hırçın", "agresif", "saldırgan", "korkak", "ürkek", "çekingen"
    ];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    // Duygu analizi için tam kelime eşleşmesi kullan
    for (const positive of positiveWords) {
      if (this.isExactWord(lowercaseDesc, positive)) {
        positiveCount++;
      }
    }
    
    for (const negative of negativeWords) {
      if (this.isExactWord(lowercaseDesc, negative)) {
        negativeCount++;
      }
    }
    
    // Sentiment değerini hesapla (-1 ile 1 arası)
    if (positiveCount > 0 || negativeCount > 0) {
      analysis.sentiment = (positiveCount - negativeCount) / (positiveCount + negativeCount);
    }
    
    // Genel anahtar kelimeleri ekle
    for (const word of words) {
      if (word.length >= 4 && 
          !["bir", "ile", "için", "gibi", "veya", "ama", "fakat", "ancak", "lakin", "çünkü", "dolayı", "olduğu", "kadar", "diye"].includes(word)) {
        analysis.keywords.push(word);
      }
    }
    
    return analysis;
  }

  /**
   * Kelimenin tam eşleşme olup olmadığını kontrol eder
   * @param {string} text - Ana metin
   * @param {string} word - Aranacak kelime
   * @return {boolean} - Eşleşme durumu
   */
  isExactWord(text, word) {
    const pattern = new RegExp(`\\b${word}\\b`, 'i');
    return pattern.test(text);
  }

  /**
   * Irk bazlı isim önerileri - ırk adını içermeyecek şekilde revize edildi
   * @param {Array} breedTypes - Tespit edilen ırk tipleri
   * @param {string} petType - Hayvan türü (kedi/köpek)
   * @return {Array} - Irk bazlı isim önerileri
   */
  getBreedBasedNames(breedTypes, petType) {
    const breedNames = [];
    
    for (const breed of breedTypes) {
      const breedLower = breed.toLowerCase();
      
      if (petType === "kedi") {
        for (const [breedKey, names] of Object.entries(this.catBreedNames)) {
          if (breedLower.includes(breedKey.toLowerCase())) {
            // Irk ismini veya parçalarını içeren önerileri filtrele
            const filteredNames = names.filter(name => {
              const nameLower = name.toLowerCase();
              // Irk adını içermeyen isimleri seç
              return !nameLower.includes(breedKey.toLowerCase()) && 
                     !breedKey.toLowerCase().includes(nameLower) &&
                     nameLower !== breedKey.toLowerCase();
            });
            
            // Filtrelenmiş isimleri ekle
            if (filteredNames.length > 0) {
              breedNames.push(...filteredNames);
            } else {
              // Yeterli isim yoksa alternatif isimler ekle
              const alternativeNames = [
                "Pamuk", "Duman", "Fındık", "Lokum", "Tarçın", "Bulut", "Mavi",
                "Karamel", "Bal", "Zeytin", "Kömür", "Şeker", "Pati", "Maviş"
              ];
              breedNames.push(...alternativeNames);
            }
            break;
          }
        }
      } else if (petType === "köpek") {
        for (const [breedKey, names] of Object.entries(this.dogBreedNames)) {
          if (breedLower.includes(breedKey.toLowerCase())) {
            // Irk ismini veya parçalarını içeren önerileri filtrele
            const filteredNames = names.filter(name => {
              const nameLower = name.toLowerCase();
              // Irk adını içermeyen isimleri seç
              return !nameLower.includes(breedKey.toLowerCase()) && 
                     !breedKey.toLowerCase().includes(nameLower) &&
                     nameLower !== breedKey.toLowerCase();
            });
            
            // Filtrelenmiş isimleri ekle
            if (filteredNames.length > 0) {
              breedNames.push(...filteredNames);
            } else {
              // Yeterli isim yoksa alternatif isimler ekle
              const alternativeNames = [
                "Paşa", "Dost", "Cesur", "Karabaş", "Fındık", "Çakır", "Zeytin", 
                "Boncuk", "Toprak", "Kral", "Korsan", "Kaplan", "Poyraz"
              ];
              breedNames.push(...alternativeNames);
            }
            break;
          }
        }
      }
    }
    
    return breedNames;
  }

  /**
   * Analiz sonuçlarına göre eşleşen isimleri bulma
   * @param {Object} analysis - Analiz sonuçları
   * @param {string} petType - Hayvan türü (kedi/köpek)
   * @return {Array} - Eşleşen ve ağırlıklı isim önerileri
   */
  findMatchingNames(analysis, petType) {
    const matchedNames = [];
    const weights = {};  // İsim önerileri için ağırlıklandırma
    
    // Doğrudan isim önerisi varsa en yüksek öncelikle kullan
    for (const suggestion of analysis.namingSuggestion) {
      if (suggestion.length >= 2) {
        // İsmi düzenle - ilk harfi büyük yap
        const formattedSuggestion = suggestion.charAt(0).toUpperCase() + suggestion.slice(1).toLowerCase();
        matchedNames.push(formattedSuggestion);
        
        // Kullanıcının önerdiği isimler en yüksek öncelikli
        weights[formattedSuggestion] = (weights[formattedSuggestion] || 0) + 10;
      }
    }
    
    // Tema bazlı isim önerileri (yeni)
    if (analysis.theme && analysis.theme.length > 0) {
      const themeNames = {
        "doğa": ["Orman", "Dağ", "Nehir", "Göl", "Deniz", "Okyanus", "Bulut", "Rüzgar", "Yağmur", "Kar", "Güneş", "Ay", "Yıldız", "Çiçek", "Ağaç", "Yaprak", "Toprak", "Gökyüzü", "Dere", "Vadi", "Ova", "Mevsim", "Bahar", "Yaz", "Kış", "Sonbahar"],
        "yiyecek": ["Tarçın", "Şeker", "Bal", "Karamel", "Fındık", "Fıstık", "Çikolata", "Cookie", "Muffin", "Brownie", "Kurabiye", "Pasta", "Pudra", "Lokum", "Şerbet", "Tatlı", "Meyve", "Üzüm", "Elma", "Armut", "Portakal", "Muz", "Çilek", "Kiraz"],
        "tarih": ["Atlas", "Caesar", "Cleopatra", "Artemis", "Apollo", "Zeus", "Athena", "Poseidon", "Odin", "Thor", "Loki", "Freya", "Sultan", "Padişah", "Osmanlı", "Selçuk", "Roma", "Sparta", "Truva", "Hector", "Achilles", "Alexander", "Fatih", "Kanuni"],
        "mitoloji": ["Pegasus", "Phoenix", "Cerberus", "Hydra", "Medusa", "Cyclops", "Griffin", "Dragon", "Titan", "Olympus", "Valhalla", "Asgard", "Midgard", "Jotun", "Elf", "Dwarf", "Fairy", "Nymph", "Siren", "Minotaur", "Sphinx", "Chimera", "Kraken"],
        "popüler kültür": ["Simba", "Nala", "Mufasa", "Ariel", "Belle", "Elsa", "Anna", "Olaf", "Timon", "Pumba", "Nemo", "Dory", "Marlin", "Bagheera", "Baloo", "Mowgli", "Shrek", "Fiona", "Donkey", "Toothless", "Astrid", "Hiccup", "Pikachu", "Mario", "Luigi"],
        "bilim": ["Newton", "Einstein", "Tesla", "Edison", "Galileo", "Darwin", "Curie", "Bohr", "Hawking", "Kepler", "Atom", "Quantum", "Proton", "Neutron", "Electron", "Carbon", "Oxygen", "Hydrogen", "Cosmos", "Galaxy", "Nebula", "Quasar", "Photon", "Quantum"],
        "sanat": ["Mozart", "Beethoven", "Bach", "Chopin", "Vivaldi", "Picasso", "Dali", "Michelangelo", "Leonardo", "Monet", "Renoir", "Shakespeare", "Dante", "Goethe", "Vermeer", "Rembrandt", "Turner", "Kahlo", "Rivera", "Kandinsky", "Warhol", "Munch"]
      };

      for (const theme of analysis.theme) {
        if (themeNames[theme]) {
          const themeBasedNames = themeNames[theme];
          matchedNames.push(...themeBasedNames);
          
          // Tema isimlerini ağırlıklandır
          for (const name of themeBasedNames) {
            weights[name] = (weights[name] || 0) + 4;
          }
        }
      }
    }
    
    // Mevsim tercihleri için isimler (yeni)
    if (analysis.season && analysis.season.length > 0) {
      const seasonNames = {
        "bahar": ["Bahar", "Spring", "Çiçek", "Bloom", "April", "Nisan", "Mayıs", "May", "Filiz", "Tomurcuk", "Sprout", "Neşe", "Umut", "Hope", "Yeni", "New", "Taze", "Fresh", "Yeşil", "Green"],
        "yaz": ["Yaz", "Summer", "Güneş", "Sun", "Sunny", "Temmuz", "July", "Ağustos", "August", "Sıcak", "Hot", "Aydınlık", "Bright", "Altın", "Golden", "Kumsal", "Beach", "Deniz", "Sea", "Tatil", "Holiday"],
        "sonbahar": ["Sonbahar", "Autumn", "Fall", "Yaprak", "Leaf", "Ekim", "October", "Kasım", "November", "Amber", "Kehribar", "Turuncu", "Orange", "Sarı", "Yellow", "Sararan", "Melankoli", "Melancholy", "Hüzün", "Sad"],
        "kış": ["Kış", "Winter", "Kar", "Snow", "Buz", "Ice", "Aralık", "December", "Ocak", "January", "Şubat", "February", "Soğuk", "Cold", "Kristal", "Crystal", "Buzul", "Glacier", "Beyaz", "White", "Fırtına", "Storm"]
      };

      for (const season of analysis.season) {
        if (seasonNames[season]) {
          const seasonBasedNames = seasonNames[season];
          matchedNames.push(...seasonBasedNames);
          
          // Mevsim isimlerini ağırlıklandır
          for (const name of seasonBasedNames) {
            weights[name] = (weights[name] || 0) + 3;
          }
        }
      }
    }
    
    // Hava durumu tercihleri için isimler (yeni)
    if (analysis.weather && analysis.weather.length > 0) {
      const weatherNames = {
        "güneşli": ["Güneş", "Sun", "Sunny", "Parlak", "Bright", "Aydınlık", "Light", "Işık", "Shine", "Ray", "Işın", "Solar", "Star", "Yıldız", "Alev", "Flame", "Ateş", "Fire"],
        "yağmurlu": ["Yağmur", "Rain", "Damlacık", "Droplet", "Şemsiye", "Umbrella", "Islak", "Wet", "Su", "Water", "Sağanak", "Shower", "Çisenti", "Drizzle", "Damla", "Drop", "Yağmur Adam", "Rainman"],
        "karlı": ["Kar", "Snow", "Snowflake", "Kardanesi", "Buz", "Ice", "Kış", "Winter", "Beyaz", "White", "Kristal", "Crystal", "Buzul", "Glacier", "Kartopu", "Snowball", "Kırağı", "Frost"],
        "rüzgarlı": ["Rüzgar", "Wind", "Esinti", "Breeze", "Meltem", "Gentle Breeze", "Fırtına", "Storm", "Kasırga", "Hurricane", "Tayfun", "Typhoon", "Girdap", "Vortex", "Uçan", "Flying", "Sallanan", "Swinging"],
        "sisli": ["Sis", "Fog", "Pus", "Mist", "Bulutlu", "Cloudy", "Puslu", "Misty", "Dumanlı", "Smoky", "Buğulu", "Steamy", "Bulanık", "Blurry", "Gizem", "Mystery", "Gizemli", "Mysterious"]
      };

      for (const weather of analysis.weather) {
        if (weatherNames[weather]) {
          const weatherBasedNames = weatherNames[weather];
          matchedNames.push(...weatherBasedNames);
          
          // Hava durumu isimlerini ağırlıklandır
          for (const name of weatherBasedNames) {
            weights[name] = (weights[name] || 0) + 3;
          }
        }
      }
    }
    
    // Irk bilgisi varsa, ırka özgü isimler öner
    if (analysis.breedType.length > 0) {
      const breedBasedNames = this.getBreedBasedNames(analysis.breedType, petType);
      matchedNames.push(...breedBasedNames);
      
      // Irk isimlerini ağırlıklandır
      for (const name of breedBasedNames) {
        weights[name] = (weights[name] || 0) + 5;  // Irk isimleri yüksek öncelikli
      }
    }
    
    // Renk özelliklerine göre isim eşleştirme
    for (const color of analysis.colors) {
      if (this.colorNames[color]) {
        const colorNames = this.colorNames[color];
        matchedNames.push(...colorNames);
        
        // Renk isimlerini ağırlıklandır
        for (const name of colorNames) {
          weights[name] = (weights[name] || 0) + 4;  // Renk isimleri daha yüksek öncelikli
        }
      }
    }
    
    // Kişilik özelliklerine göre isim eşleştirme
    for (const trait of analysis.personality) {
      if (this.personalityNames[trait]) {
        const traitNames = this.personalityNames[trait];
        matchedNames.push(...traitNames);
        
        // Kişilik isimlerini ağırlıklandır
        for (const name of traitNames) {
          weights[name] = (weights[name] || 0) + 3;
        }
      }
    }
    
    // Fiziksel özelliklere göre isim eşleştirme
    for (const feature of analysis.physical) {
      if (this.physicalNames[feature]) {
        const featureNames = this.physicalNames[feature];
        matchedNames.push(...featureNames);
        
        // Fiziksel özellik isimlerini ağırlıklandır
        for (const name of featureNames) {
          weights[name] = (weights[name] || 0) + 3;
        }
      }
    }
    
    // Yaş özelliklerine göre isim eşleştirme
    for (const age of analysis.age) {
      if (this.ageNames[age]) {
        const ageNames = this.ageNames[age];
        matchedNames.push(...ageNames);
        
        // Yaş isimlerini ağırlıklandır
        for (const name of ageNames) {
          weights[name] = (weights[name] || 0) + 2;
        }
      }
    }
    
    // Cinsiyet özelliklerine göre isim eşleştirme
    for (const gender of analysis.gender) {
      if (this.genderNames[gender]) {
        const genderNames = this.genderNames[gender];
        matchedNames.push(...genderNames);
        
        // Cinsiyet isimlerini ağırlıklandır
        for (const name of genderNames) {
          weights[name] = (weights[name] || 0) + 2;
        }
      }
    }
    
    // Aktivite tercihlerine göre isim önerisi
      for (const activity of analysis.activities) {
      if (this.activityNames[activity]) {
        const activityNames = this.activityNames[activity];
          matchedNames.push(...activityNames);
          
          // Aktivite isimlerini ağırlıklandır
          for (const name of activityNames) {
          weights[name] = (weights[name] || 0) + 3;
        }
      }
    }
    
    // Ağırlığa göre sırala
    const weightedNames = matchedNames.filter(name => 
      name.length >= this.nameParams.minLength && 
      name.length <= this.nameParams.maxLength
    );
    
    weightedNames.sort((a, b) => (weights[b] || 0) - (weights[a] || 0));
    
    // Benzersiz isimleri döndür
    return [...new Set(weightedNames)];
  }

  /**
   * Tüm isimleri alma fonksiyonu
   * @param {string} petType - Hayvan türü (kedi/köpek)
   * @return {Array} - Tüm isimler listesi
   */
  getAllNames(petType) {
    let allNames = [];
    
      if (petType === "kedi") {
      allNames = [...this.turkishCatNames, ...this.internationalCatNames];
      } else if (petType === "köpek") {
      allNames = [...this.turkishDogNames, ...this.internationalDogNames];
    } else {
      throw new Error("Geçersiz hayvan türü! Sadece 'kedi' veya 'köpek' olabilir.");
    }
    
    return allNames;
  }

  /**
   * Açıklamanın uygunsuz içerik veya küfür içerip içermediğini kontrol eder
   * @param {string} description - Kullanıcı tarafından sağlanan açıklama
   * @return {boolean} - Açıklama uygunsa true, değilse false
   */
  isCleanDescription(description) {
    // Karakter sayısını kontrol et
    if (description.length > 50) {
      throw new Error("Açıklama maksimum 50 karakter olmalıdır.");
    }
    
    // Türkçe küfür ve argo kelimelerin listesi
    const inappropriateWords = [
      "küfür", "argo", "hakaret", "sex", "seks", "uygunsuz", "müstehcen", "sikik", "piç", 
      "orospu", "pezevenk", "yavşak", "amk", "aq", "sik", "yarrak", "göt", "amcık", "bok", 
      "siktir", "puşt", "ibne", "gavat", "dalyarak", "mal", "gerizekalı", "salak", "aptal", 
      "ebleh", "siktirgit", "sikerim", "sikim", "kahpe", "oç", "sürtük", "sürtüğü", "fahişe", 
      "xxxx", "xxxx", "porno", "pron", "porn", "adult", "erotik", "sanane", "göt", "amcık", "gavat", "dalyarak", "mal", "gerizekalı", "salak", "aptal", "meme",
    ];
    
    // Alakasız içerik olabilecek kelimeler
    const irrelevantPatterns = [
      "kredi", "kart", "banka", "para", "kazanmak", "kazan", "kazandır", "bahis", "iddia", 
      "kumar", "şans oyunu", "yarışma", "hediye", "bedava", "ücretsiz", "kazı kazan", 
      "zengin", "dolar", "euro", "bitcoin", "kripto", "yatırım", "borsa", "hisse", "sigorta", 
      "kredi çek", "sms", "mesaj gönder", "ara beni", "araba sat", "ev sat", "ipotek", 
      "mortgage", "emeklilik", "promosyon", "indirim", "fırsat", "hemen katıl", 
      "hemen üye ol", "üyelik", "sözleşme", "anlaşma", "imzala", "deprem", "siyaset", 
      "http", "www", ".com", ".net", ".org", ".io"
    ];
    
    const lowercaseDesc = description.toLowerCase();
    
    // Küfür veya argo kontrolü
    for (const word of inappropriateWords) {
      if (this.isExactWord(lowercaseDesc, word)) {
        return false;
      }
    }
    
    // Alakasız içerik kontrolü
    for (const pattern of irrelevantPatterns) {
      if (lowercaseDesc.includes(pattern)) {
        return false;
      }
    }
    
    // Çok kısa veya sadece anlamsız karakterler içeren açıklamaları reddet
    if (description.trim().length < 4) {
      return false;
    }
    
    // Sadece anlamsız karakterlerden oluşan içeriği engelle
    // (Harflerin oranı düşükse muhtemelen anlamsızdır)
    const letterCount = (description.match(/[a-zA-ZğĞüÜşŞıİöÖçÇ]/g) || []).length;
    if (letterCount < description.length * 0.4) {
      return false;
    }
    
    return true;
  }

  /**
   * Ana isim önerme fonksiyonu
   * @param {string} petType - Hayvan türü (kedi/köpek)
   * @param {string} description - Hayvan açıklaması
   * @param {boolean} isMobile - Mobil cihaz mı?
   * @return {Array} - İsim önerileri
   */
  suggestNames(petType, description, isMobile = false) {
    try {
      // Önce açıklamanın uygun olup olmadığını kontrol et
      if (!this.isCleanDescription(description)) {
        throw new Error("Lütfen evcil hayvanınızla ilgili uygun bir açıklama giriniz.");
      }
      
      // Açıklamayı analiz et
      const analysis = this.analyzeDescription(description);
      
      // Eşleşen isimleri bul
      let matchedNames = this.findMatchingNames(analysis, petType);
      
      // Tekrar eden isimleri kaldır
      const uniqueNames = [...new Set(matchedNames)];
      
      // Tüm isimleri al (türe göre)
      const allNames = this.getAllNames(petType);
      
      // Eğer sonuçlar yetersizse (3'ten az), genel isimlerle tamamla
      if (uniqueNames.length < 3) {
        // Diziyi kopyala ve karıştır
        const allNamesCopy = [...allNames];
        this.shuffle(allNamesCopy);
        const randomNames = allNamesCopy.slice(0, 10);
        
        // Tekrar etmeyecek şekilde isimleri birleştir
        for (const name of randomNames) {
          if (!uniqueNames.includes(name)) {
            uniqueNames.push(name);
          }
          
          // Cihaz tipine göre maksimum isim sayısı ayarlanıyor
          const maxNames = isMobile ? 8 : 8;
          if (uniqueNames.length >= maxNames) {
            break;
          }
        }
      }
      
      // Türkçe isimleri filtrele ve ekle
      const turkishNames = this.filterTurkishNames(allNames, petType);
      
      // Türkçe isimleri kopyala ve karıştır
      const turkishNamesCopy = [...turkishNames];
      this.shuffle(turkishNamesCopy);
      
      // Türkçe isimlerin belirli bir kısmını önerilere ekle
      for (const name of turkishNamesCopy) {
        if (!uniqueNames.includes(name)) {
          uniqueNames.push(name);
        }
        
        // Cihaz tipine göre maksimum isim sayısı ayarlanıyor
        const maxNames = isMobile ? 8 : 9;
        if (uniqueNames.length >= maxNames) {
          break;
        }
      }
      
      // Cihaz tipine göre limitle
      const resultLimit = isMobile ? 8 : 8;
      return uniqueNames.slice(0, resultLimit);
    } catch (error) {
      console.error("İsim önerisi oluşturulurken hata:", error);
      // Hata içeriğini kontrol et - karakter sınırı hatası ise özel bir hata fırlat
      if (error.message.includes("maksimum 50 karakter")) {
        throw new Error("Lütfen açıklamanızı maksimum 50 karakter ile sınırlandırın.");
      }
      // Uygunsuz içerik hatası ise özel bir hata fırlat
      else if (error.message.includes("uygun bir açıklama")) {
        throw new Error("Lütfen evcil hayvanınızla ilgili uygun bir açıklama giriniz.");
      }
      
      // Diğer hata durumlarında varsayılan isimler döndür
      const defaultNames = ["Dost", "Pamuk", "Fındık", "Zeytin", "Bulut", "Tarçın", "Duman", "Boncuk", "Cesur"];
      return isMobile ? defaultNames.slice(0, 8) : defaultNames;
    }
  }
  
  /**
   * Sadece Türkçe isimleri filtreler
   * @param {Array} names - İsim listesi
   * @param {string} petType - Hayvan türü
   * @return {Array} - Sadece Türkçe isimler
   */
  filterTurkishNames(names, petType) {
    // Türkçe karakterler
    const turkishLetters = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü'];
    
    return names.filter(name => {
      const nameLower = name.toLowerCase();
      
      // Türkçe karakterler içeriyor mu?
      for (const letter of turkishLetters) {
        if (nameLower.includes(letter)) {
          return true;
        }
      }
      
      // Türkçe isim listelerinde var mı?
      if (petType === "kedi" && this.turkishCatNames.includes(name)) {
        return true;
      }
      
      if (petType === "köpek" && this.turkishDogNames.includes(name)) {
        return true;
      }
      
      // İngilizce isimlere benzemediğinden emin olmak için son bir kontrol
      // Basit bir kontrol: Türkçede sık kullanılan isimler
      const commonTurkishNames = [
        "Pamuk", "Duman", "Boncuk", "Minnoş", "Fındık", "Lokum", "Tarçın", "Bulut", 
        "Mavi", "Kırpık", "Minik", "Şeker", "Pati", "Maviş", "Karamel", "Pekmez",
        "Paşa", "Dost", "Cesur", "Zeytin", "Çakır", "Kınalı", "Bekçi", "Sarı",
        "Kömür", "Sarman", "Tekir", "Karabaş", "Tosun", "Kral", "Sultan", "Prenses"
      ];
      
      return commonTurkishNames.includes(name);
    });
  }
}

// Node.js veya tarayıcı için export
export default PetNameGenerator;
