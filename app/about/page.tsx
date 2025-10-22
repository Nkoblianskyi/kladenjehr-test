export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-12 pb-8 border-b-2 border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">O Nama</h1>
            <p className="text-xl text-gray-600">Stranice za Sportsko Klađenje Hrvatska</p>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Naša Misija</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Na kladenjehr.com, naša misija je pružiti hrvatskim kladioničarima točne i ažurne informacije o
                najboljim stranicama za sportsko klađenje dostupnim na nacionalnom tržištu. Vjerujemo u transparentnost,
                poštenje i odgovorno kockanje kao temeljne stupove naše djelatnosti.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mi smo tim hrvatskih stručnjaka strastvenih prema sportu i klađenju, posvećeni pomaganju našim
                korisnicima da donose informirane i sigurne odluke u svijetu sportskog klađenja.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Neovisne Analize</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sve naše analize provodi neovisno naš tim stručnjaka za sportsko klađenje. Temeljito testiramo svaku
                platformu kako bismo osigurali da pružamo točne informacije o korisničkom iskustvu, bonusima, načinima
                plaćanja i korisničkoj podršci.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Naš tim ima godine iskustva na hrvatskom tržištu klađenja i duboko poznaje potrebe i preferencije
                nacionalnih kladioničara.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Naša Metodologija Rangiranja</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Naše rangiranje shvaćamo vrlo ozbiljno. Naš tim koristi sveobuhvatan sustav ocjenjivanja kako bi
                osigurao da samo najbolje stranice za klađenje doseže vrh naše liste.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-croatia-red pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Licenciranje i Sigurnost</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Navodimo samo stranice za klađenje koje su propisno licencirane ili od drugih uglednih tijela.
                    Provjeravamo SSL enkripciju, mjere zaštite podataka i opće sigurnosne protokole.
                  </p>
                </div>

                <div className="border-l-4 border-croatia-blue pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Ponude Bonusa i Promocije</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ocjenjujemo bonuse dobrodošlice, tekuće promocije i programe lojalnosti. Naš tim čita sitna slova
                    kako bi ocijenio uvjete klađenja, vremenska ograničenja i druge uvjete.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Korisničko Iskustvo</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Testiramo web stranicu i mobilne aplikacije na lakoću korištenja, navigaciju, brzinu učitavanja i
                    opći dizajn. Dobra stranica za klađenje treba biti intuitivna i pristupačna.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Tržišta Klađenja i Kvote</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Uspoređujemo raspon pokrivenih sportova i događaja, kao i raznolikost dostupnih opcija klađenja.
                    Također analiziramo konkurentnost kvota na različitim tržištima.
                  </p>
                </div>

                <div className="border-l-4 border-croatia-red pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Načini Plaćanja</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Provjeravamo raznolikost opcija depozita i isplate, vremena obrade, naknade i limite. Najbolje
                    stranice nude više prikladnih načina plaćanja.
                  </p>
                </div>

                <div className="border-l-4 border-croatia-blue pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Korisnička Podrška</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Testiramo odzivnost, znanje i korisnost timova korisničke podrške. Cijenimo stranice koje nude više
                    kanala kontakta dostupnih 24/7.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Naš Sustav Bodovanja</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Svaka stranica za klađenje dobiva ocjenu od 10 na temelju naše sveobuhvatne procjene. Konačna ocjena je
                ponderirana prosječna vrijednost svih kriterija, pri čemu sigurnost i korisničko iskustvo dobivaju
                najveći prioritet.
              </p>
              <p className="text-gray-900 font-semibold">
                Samo stranice s ocjenom iznad 8.0 dolaze na našu preporučenu listu.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Objava Partnerstva</h2>
              <p className="text-gray-700 leading-relaxed">
                kladenjehr.com se financira kroz partnerstva s operaterima klađenja. Kada se registrirate putem naših
                linkova, možemo primiti proviziju. To nam pomaže održavati našu stranicu i nastaviti pružati besplatne
                informacije. Međutim, to ne utječe na naše analize ili rangiranja.
              </p>
            </section>

            <section className="bg-red-50 border-l-4 border-red-600 p-8 rounded">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Odgovorno Kockanje</h2>
              <p className="text-gray-700 leading-relaxed">
                Snažno zagovaramo odgovorno kockanje. Klađenje bi trebalo biti zabavno, a ne način za zaradu novca.
                Potičemo naše korisnike da postave limite, nikada ne jure gubitke i potraže pomoć ako kockanje postane
                problematično.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontaktirajte Nas</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Imate pitanja ili prijedloge? Rado bismo čuli od vas.
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:info@kladenjehr.com"
                  className="text-croatia-blue hover:text-croatia-red underline font-medium"
                >
                  info@kladenjehr.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">Zajamčen odgovor u 24 sata</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
