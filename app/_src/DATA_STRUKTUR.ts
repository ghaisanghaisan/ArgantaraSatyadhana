interface STRUKTUR {
	[slug: string]: {
		nama: string;
		seksiDesc: string;
		alias: string;
		ketua: string;
		lambidDesc: string;
		anggota: string[];
	};
}

const DATA_STRUKTUR: STRUKTUR = {
	"komisi-a": {
		nama: "Komisi A",
		seksiDesc: "",
		alias: "chorís diakríseis",
		lambidDesc:
			"Owl of Athena: Lambang pengetahuan, kebijaksanaan, dan kecerdasan. Desain logo menampilkan buku di tengah dada yang menggenggam spanduk dengan tulisan 'χωρίς διακρίσεις' (chorís diakríseis) yang berarti 'tanpa pandang bulu'. Motto utama di dalam buku, 'κρινω' (krino), memperingatkan untuk memisahkan dengan bijaksana dalam pengambilan keputusan.",
		ketua: "Muhamad Bintang",
		anggota: ["Arsyameitha Wizahra", "Radinda Aurellia"],
	},
	"komisi-b": {
		nama: "Komisi B",
		seksiDesc: "",
		alias: "",
		lambidDesc:
			"Sphinx (versi Yunani) berhadapan dengan dewi Themis yang menempati posisi lebih tinggi, memegang pedang di atas kepala sphinx. Melambangkan dialog antara kebijaksanaan dan keadilan, dengan sphinx sebagai simbol misteri dan Themis sebagai perwujudan hukum dan keteraturan.",
		ketua: "Trisha Calista",
		anggota: ["Rama Afriza", "Kinara Syahla", "Danke Athaya"],
	},
	"komisi-c": {
		nama: "Komisi C",
		seksiDesc: "",
		alias: "Epitychies",
		lambidDesc:
			"Hydra melingkari buku terbuka dengan terompet kerang di tengah, berisi koin sebagai simbol Tyche. Nama komisi 'Epitychies' (kesuksesan) terinspirasi dari dewi Yunani Tyche, mewakili evaluasi kesuksesan acara untuk meningkatkan kesuksesan acara mendatang.",
		ketua: "Muhammad Hani’Arkan",
		anggota: ["Muhammad Nasya", "Najla Salsabila", "Sofia Alaydrus"],
	},
	"sekbid-i": {
		nama: "Sekbid 1",
		seksiDesc: "Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa",
		alias: "DEVASHISH",
		lambidDesc:
			'Devashish memiliki arti "berkat dari Allah." Dalam hal ini, kita sebagai umat beragama ditujukan menjadi orang yang selalu kembali kepada Tuhan YME karena semua nikmat yang kita dapatkan berasal dari-Nya. Sosok perempuan di tengah melambangkan sebagai setiap individu harus dijaga, dengan hak-hak yang dijamin oleh ajaran agama. Biru muda sebagai warna utama melambangkan perasaan ketenangan dan kesejukan jiwa serta pikiran. Lumba-lumba memiliki arti kemurnian hati, perlindungan dan keselamatan, yang akan didapatkan apabila ia dekat dengan Tuhan. Ombak dikaitkan dengan perasaan mengalir. dalam setiap agama yang ada, kita punya Tuhan yang menjadi tempat kita menyalurkan apapun yang ingin disampaikan. ia mengalir saja seperti ombak hingga akhirnya perasaan kita dapat menjadi tenang kembali',
		ketua: "Unzurna Rahiel Azada",
		anggota: ["Ahmad Rizky Amri", "Dionysius Emmanuel", "Jihan Nisrina"],
	},
	"sekbid-ii": {
		nama: "Sekbid 2",
		seksiDesc: "Pembinaan Budi Pekerti Luhur",
		alias: "NEMESIS",
		lambidDesc:
			"Nemesis, dewi keadilan yang memberikan yang Seharusnya, menyeimbangkan kesedihan dan kebahagiaan. Adil dan sosial, ia membantu tanpa memandang latar belakang individu yang membutuhkan.",
		ketua: "Maylafayza Suryadikarta",
		anggota: ["Ismul Khatimah", "Eldin Ahmad", "Nayyara Hafiza"],
	},
	"sekbid-iii": {
		nama: "Sekbid 3",
		seksiDesc:
			"Pembinaan Kepribadian Unggul, Wawasan Kebangsaan dan Bela Negara.",
		alias: "SPARTA",
		lambidDesc:
			"Sparta, simbol perjuangan keras dalam mempertahankan hak dan kewajiban. Teladan pemberani, teguh, dan konsisten. Prajurit setia di bawah bimbingan garuda, maju dengan semangat, visi ke depan, harapan, dan kejayaan. Perpaduan biru-kuning melambangkan pengorbanan untuk perlindungan.",
		ketua: "Nayla Rezqina",
		anggota: ["Khalisa Azza", "Dhaifina Nabila"],
	},
	"sekbid-iv": {
		nama: "Sekbid 4",
		seksiDesc:
			"Prestasi akademik, seni, dan/atau olahraga sesuai minat dan bakat",
		alias: "RENAISSANCE",
		lambidDesc:
			"Renaissance, gerakan seni yang mengembangkan kesusastraan dan seni lukis. Mariposa berwarna pink melambangkan kecantikan dan seni, sedang melukis dengan tema kesenian pada canvas.",
		ketua: "Nasywa Callista",
		anggota: ["Dawsen Paskah", "Hafizah Anindya", "Najwa Puspita"],
	},
	"sekbid-v": {
		nama: "Sekbid 5",
		seksiDesc:
			"Demokrasi, hak asasi manusia, pendidikan politik, lingkungan hidup, kepekaan dan toleransi sosial dalam konteks masyarakat plural.",
		alias: "MAKEDON",
		lambidDesc:
			"Makedon, melambangkan kepemimpinan, inspirasi, dan motivasi untuk kesuksesan bersama. Api sebagai simbol harapan, cahaya dalam kegelapan, dan semangat yang terus menyala. Singa melambangkan aspirasi, inovasi, keberanian, dan kebenaran dalam bermasyarakat.",
		ketua: "Azzah Zahraa",
		anggota: ["Nikeisha Mahya", "Ayda Khoirunnisa", "Delfino Althafarrel"],
	},
	"sekbid-vi": {
		nama: "Sekbid 6",
		seksiDesc: "Kreativitas, keterampilan, kewirausahaan",
		alias: "CONSTANTINE",
		lambidDesc:
			"Constantine, melambangkan keakraban dengan hitungan dan neraca keuangan. Uang dan koin simbol kewirausahaan, pemasukan kas OSIS, dan laporan penjualan. Ikan koi melambangkan keberuntungan.",
		ketua: "Maulida Fathul",
		anggota: ["Zaldine Lima", "Anisah Athaya", "Khanaya Audina"],
	},
	"sekbid-vii": {
		nama: "Sekbid 7",
		seksiDesc:
			"Pembinaan kualitas jasmani, kesehatan, dan gizi berbasis sumber gizi yang terdiversifikasi",
		alias: "LASCAUX",
		lambidDesc:
			"Logo kami mencerminkan bidang kesehatan dan olahraga. Piala melambangkan prestasi dan kemenangan olahraga. Lambang + menandakan kesehatan jasmani. Naga di atas simbol keberanian dan kesiapan menghadapi tantangan.",
		ketua: "Choiru Ummi",
		anggota: ["Farid Rakha", "Kayyasah Aulia", "Rizky Aulia"],
	},
	"sekbid-viii": {
		nama: "Sekbid 8",
		seksiDesc: "Pembinaan Sastra dan Budaya",
		alias: "ASTA WIDYA",
		lambidDesc:
			"Asta Widya, simbol heroisme dan semangat belajar. Melambangkan cinta pada budaya Indonesia dengan wayang gunungan, kuda lumping, dan karakter perempuan berbatik. Karakter perempuan memegang pena dan buku, menunjukkan minat dan bakat sastra serta pemikiran yang luas.",
		ketua: "Galuh Rahmasiwi",
		anggota: ["Devia Rachma", "Widya Astuti", "Nuansafira Udara"],
	},
	"sekbid-ix": {
		nama: "Sekbid 9",
		seksiDesc: "Teknologi Informasi dan Komunikasi",
		alias: "OBSCURA",
		lambidDesc:
			"Obscura berarti ruangan yang memproyeksikan gambar secara terbalik dari arah lensanya, melambangkan bahwa SEKBID IX sebagai ruang untuk menyimpan dokumentasi. Pada lambang terdapat gurita yang memiliki banyak lengan melambangkan keharusan SEKBID IX untuk bekerja secara efisien dan produktif. Elemen lain seperti kamera dan gawai merupakan alat yang digunakan dalam pengerjaan tugas.",
		ketua: "Danish Ghaisan",
		anggota: ["Naaila Nabila", "Abdul Qadir", "Hasna Naeela", "Jaksely Nadin"],
	},
	"sekbid-x": {
		nama: "Sekbid 10",
		seksiDesc: "Komunikasi dalam bahasa inggris",
		alias: "OTHELLO",
		lambidDesc:
			"Othello, melambangkan ketangguhan menghadapi rintangan. Mascot perempuan, Rowena Ravenclaw dari 'Harry Potter', mencerminkan high achievers yang berwawasan luas.",
		ketua: "Naysilla Khairani",
		anggota: ["Almaqhvira Keysha", "Kharisma Al", "Muhammad Raffa"],
	},
	"bendahara-mpk": {
		nama: "Bendahara MPK",
		seksiDesc: "",
		alias: "Obscura Chrysos",
		lambidDesc:
			"La Obscura Chrysos: Logo menggambarkan Gorgon dalam konteks pertambangan, bertamengkan baju zirah emas untuk pertahanan kekayaan. 'La Obscura' dari bahasa Italia berarti 'Ruang Gelap', merujuk pada keamanan filosofis dalam 'Chrysos' (kekayaan). Berlatar belakang ruang kaca dengan ornamen ular, melambangkan penyimpanan dan kewaspadaan terhadap kekayaan.",
		ketua: "Luna Kalea",
		anggota: [],
	},
	"sekretaris-mpk": {
		nama: "Sekretaris MPK",
		seksiDesc: "",
		alias: "Athena Nester",
		lambidDesc:
			"Logo menampilkan Dewi Athena menunggang Pegasus dengan latar belakang jam, timbangan, dan kertas tua. Tulisan Athena Nester menunjukkan Athena sebagai petualang cerdas yang berani. Pegasus dan Athena melambangkan petualangan dan kebijaksanaan, sementara jam, timbangan, dan kertas tua mencerminkan sejarah dan pengetahuan yang diperoleh.",
		ketua: "Safa Nailatul",
		anggota: ["Kayla Fatmala"],
	},
	"bendahara-osis": {
		nama: "Bendahara OSIS",
		seksiDesc: "",
		alias: "MONETA",
		lambidDesc:
			"Moneta, berasal dari Kuil Juno Moneta, tempat pembuatan koin pertama. Kata 'Money' dan 'Monetary' berkaitan dengan uang dan keuangan. Melambangkan bendahara yang mengelola dan mengkoordinasikan aktivitas keuangan, membuat laporan rutin, dan bertanggung jawab kepada MPK/OSIS 55.",
		ketua: "Naaila Dhiya",
		anggota: ["Sarah Adzkiya"],
	},
	"sekretaris-osis": {
		nama: "Sekretaris OSIS",
		seksiDesc: "",
		alias: "CADMUS",
		lambidDesc:
			"Cadmus, dewa Yunani penulisan, melambangkan ketrampilan, ketekunan, dan kompetensi. Merpati dalam lambang menggambarkan pesan; Sekretaris Pengurus OSIS diharapkan menyampaikan pesan secara tertulis dengan ketrampilan, ketekunan, dan kompetensi.",
		ketua: "Walu Amadea",
		anggota: ["Meisya Ayu", "Habiburrahman El"],
	},
	"humas-osis": {
		nama: "Humas OSIS",
		seksiDesc: "",
		alias: "PANTHEON",
		lambidDesc: "",
		ketua: "Evelyn Marintan",
		anggota: ["Salsabila Khoosyi", "Muhammad Fauzan", "Nadine Angelica"],
	},
};

const LIST_DATA_STRUKTUR = {
	bphMPK: [
		{
			slug: "bendahara-mpk",
			nama: "Bendahara MPK",
			seksiDesc: "",
			alias: "Obscura Chrysos",
			lambidDesc: "",
			ketua: "Luna Kalea",
			anggota: [],
		},
		{
			slug: "sekretaris-mpk",
			nama: "Sekretaris MPK",
			seksiDesc: "",
			alias: "Athena Nester",
			lambidDesc: "",
			ketua: "Safa Nailatul",
			anggota: ["Kayla Fatmala"],
		},
	],
	komMPK: [
		{
			slug: "komisi-a",
			nama: "Komisi A",
			seksiDesc: "",
			alias: "Chorís Diakríseis",
			lambidDesc:
				"Owl of Athena: Lambang pengetahuan, kebijaksanaan, dan kecerdasan. Desain logo menampilkan buku di tengah dada yang menggenggam spanduk dengan tulisan 'χωρίς διακρίσεις' (chorís diakríseis) yang berarti 'tanpa pandang bulu'. Motto utama di dalam buku, 'κρινω' (krino), memperingatkan untuk memisahkan dengan bijaksana dalam pengambilan keputusan.",
			ketua: "Muhamad Bintang",
			anggota: ["Arsyameitha Wizahra", "Radinda Aurellia"],
		},
		{
			slug: "komisi-b",
			nama: "Komisi B",
			seksiDesc: "",
			alias: "Eponyarch",
			lambidDesc:
				"Sphinx (versi Yunani) berhadapan dengan dewi Themis yang menempati posisi lebih tinggi, memegang pedang di atas kepala sphinx. Melambangkan dialog antara kebijaksanaan dan keadilan, dengan sphinx sebagai simbol misteri dan Themis sebagai perwujudan hukum dan keteraturan.",
			ketua: "Trisha Calista",
			anggota: ["Rama Afriza", "Kinara Syahla", "Danke Athaya"],
		},
		{
			slug: "komisi-c",
			nama: "Komisi C",
			seksiDesc: "",
			alias: "Epitychies",
			lambidDesc:
				"Hydra melingkari buku terbuka dengan terompet kerang di tengah, berisi koin sebagai simbol Tyche. Nama komisi 'Epitychies' (kesuksesan) terinspirasi dari dewi Yunani Tyche, mewakili evaluasi kesuksesan acara untuk meningkatkan kesuksesan acara mendatang.",
			ketua: "Muhammad Hani’Arkan",
			anggota: ["Muhammad Nasya", "Najla Salsabila", "Sofia Alaydrus"],
		},
	],
	bphOSIS: [
		{
			slug: "bendahara-osis",
			nama: "Bendahara OSIS",
			seksiDesc: "",
			alias: "MONETA",
			lambidDesc:
				"Moneta, berasal dari Kuil Juno Moneta, tempat pembuatan koin pertama. Kata 'Money' dan 'Monetary' berkaitan dengan uang dan keuangan. Melambangkan bendahara yang mengelola dan mengkoordinasikan aktivitas keuangan, membuat laporan rutin, dan bertanggung jawab kepada MPK/OSIS 55.",
			ketua: "Naaila Dhiya",
			anggota: ["Sarah Adzkiya"],
		},
		{
			slug: "sekretaris-osis",
			nama: "Sekretaris OSIS",
			seksiDesc: "",
			alias: "CADMUS",
			lambidDesc:
				"Cadmus, dewa Yunani penulisan, melambangkan ketrampilan, ketekunan, dan kompetensi. Merpati dalam lambang menggambarkan pesan; Sekretaris Pengurus OSIS diharapkan menyampaikan pesan secara tertulis dengan ketrampilan, ketekunan, dan kompetensi.",
			ketua: "Walu Amadea",
			anggota: ["Meisya Ayu", "Habiburrahman El"],
		},
		{
			slug: "humas-osis",
			nama: "Humas OSIS",
			seksiDesc: "",
			alias: "PANTHEON",
			lambidDesc: "",
			ketua: "Evelyn Marintan",
			anggota: ["Salsabila Khoosyi", "Muhammad Fauzan", "Nadine Angelica"],
		},
	],
	sekbidOSIS: [
		{
			slug: "sekbid-i",
			nama: "Sekbid 1",
			seksiDesc: "Keimanan & Ketakwaan Tuhan Maha Esa",
			alias: "DEVASHISH",
			lambidDesc:
				'Devashish memiliki arti "berkat dari Allah." Dalam hal ini, kita sebagai umat beragama ditujukan menjadi orang yang selalu kembali kepada Tuhan YME karena semua nikmat yang kita dapatkan berasal dari-Nya. Sosok perempuan di tengah melambangkan sebagai setiap individu harus dijaga, dengan hak-hak yang dijamin oleh ajaran agama. Biru muda sebagai warna utama melambangkan perasaan ketenangan dan kesejukan jiwa serta pikiran. Lumba-lumba memiliki arti kemurnian hati, perlindungan dan keselamatan, yang akan didapatkan apabila ia dekat dengan Tuhan. Ombak dikaitkan dengan perasaan mengalir. dalam setiap agama yang ada, kita punya Tuhan yang menjadi tempat kita menyalurkan apapun yang ingin disampaikan. ia mengalir saja seperti ombak hingga akhirnya perasaan kita dapat menjadi tenang kembali',
			ketua: "Unzurna Rahiel Azada",
			anggota: ["Ahmad Rizky Amri", "Dionysius Emmanuel", "Jihan Nisrina"],
		},
		{
			slug: "sekbid-ii",
			nama: "Sekbid 2",
			seksiDesc: "Pembinaan Budi Pekerti Luhur",
			alias: "NEMESIS",
			lambidDesc:
				"Nemesis, dewi keadilan yang memberikan yang Seharusnya, menyeimbangkan kesedihan dan kebahagiaan. Adil dan sosial, ia membantu tanpa memandang latar belakang individu yang membutuhkan.",
			ketua: "Maylafayza Suryadikarta",
			anggota: ["Ismul Khatimah", "Eldin Ahmad", "Nayyara Hafiza"],
		},
		{
			slug: "sekbid-iii",
			nama: "Sekbid 3",
			seksiDesc: "Pembinaan Kepribadian Unggul",
			alias: "SPARTA",
			lambidDesc:
				"Sparta, simbol perjuangan keras dalam mempertahankan hak dan kewajiban. Teladan pemberani, teguh, dan konsisten. Prajurit setia di bawah bimbingan garuda, maju dengan semangat, visi ke depan, harapan, dan kejayaan. Perpaduan biru-kuning melambangkan pengorbanan untuk perlindungan.",
			ketua: "Nayla Rezqina",
			anggota: ["Khalisa Azza", "Dhaifina Nabila"],
		},
		{
			slug: "sekbid-iv",
			nama: "Sekbid 4",
			seksiDesc: "Prestasi akademik, seni, olahraga",
			alias: "RENAISSANCE",
			lambidDesc:
				"Renaissance, gerakan seni yang mengembangkan kesusastraan dan seni lukis. Mariposa berwarna pink melambangkan kecantikan dan seni, sedang melukis dengan tema kesenian pada canvas.",
			ketua: "Nasywa Callista",
			anggota: ["Dawsen Paskah", "Hafizah Anindya", "Najwa Puspita"],
		},
		{
			slug: "sekbid-v",
			nama: "Sekbid 5",
			seksiDesc: "Demokrasi, hak asasi manusia",
			alias: "MAKEDON",
			lambidDesc:
				"Makedon, melambangkan kepemimpinan, inspirasi, dan motivasi untuk kesuksesan bersama. Api sebagai simbol harapan, cahaya dalam kegelapan, dan semangat yang terus menyala. Singa melambangkan aspirasi, inovasi, keberanian, dan kebenaran dalam bermasyarakat.",
			ketua: "Azzah Zahraa",
			anggota: ["Nikeisha Mahya", "Ayda Khoirunnisa", "Delfino Althafarrel"],
		},
		{
			slug: "sekbid-vi",
			nama: "Sekbid 6",
			seksiDesc: "Kreativitas, keterampilan, kewirausahaan",
			alias: "CONSTANTINE",
			lambidDesc:
				"Constantine, melambangkan keakraban dengan hitungan dan neraca keuangan. Uang dan koin simbol kewirausahaan, pemasukan kas OSIS, dan laporan penjualan. Ikan koi melambangkan keberuntungan.",
			ketua: "Maulida Fathul",
			anggota: ["Zaldine Lima", "Anisah Athaya", "Khanaya Audina"],
		},
		{
			slug: "sekbid-vii",
			nama: "Sekbid 7",
			seksiDesc: "Pembinaan kualitas jasmani",
			alias: "LASCAUX",
			lambidDesc:
				"Logo kami mencerminkan bidang kesehatan dan olahraga. Piala melambangkan prestasi dan kemenangan olahraga. Lambang + menandakan kesehatan jasmani. Naga di atas simbol keberanian dan kesiapan menghadapi tantangan.",
			ketua: "Choiru Ummi",
			anggota: ["Farid Rakha", "Kayyasah Aulia", "Rizky Aulia"],
		},
		{
			slug: "sekbid-viii",
			nama: "Sekbid 8",
			seksiDesc: "Pembinaan Sastra dan Budaya",
			alias: "ASTA WIDYA",
			lambidDesc:
				"Asta Widya, simbol heroisme dan semangat belajar. Melambangkan cinta pada budaya Indonesia dengan wayang gunungan, kuda lumping, dan karakter perempuan berbatik. Karakter perempuan memegang pena dan buku, menunjukkan minat dan bakat sastra serta pemikiran yang luas.",
			ketua: "Galuh Rahmasiwi",
			anggota: ["Devia Rachma", "Widya Astuti", "Nuansafira Udara"],
		},
		{
			slug: "sekbid-ix",
			nama: "Sekbid 9",
			seksiDesc: "Teknologi Informasi dan Komunikasi",
			alias: "OBSCURA",
			lambidDesc: "",
			ketua: "Danish Ghaisan",
			anggota: [
				"Naaila Nabila",
				"Abdul Qadir",
				"Hasna Naeela",
				"Jaksely Nadin",
			],
		},
		{
			slug: "sekbid-x",
			nama: "Sekbid 10",
			seksiDesc: "Komunikasi dalam bahasa inggris",
			alias: "OTHELLO",
			lambidDesc:
				"Othello, melambangkan ketangguhan menghadapi rintangan. Mascot perempuan, Rowena Ravenclaw dari 'Harry Potter', mencerminkan high achievers yang berwawasan luas.",
			ketua: "Naysilla Khairani",
			anggota: ["Almaqhvira Keysha", "Kharisma Al", "Muhammad Raffa"],
		},
	],
};

export default DATA_STRUKTUR;
export { LIST_DATA_STRUKTUR };
