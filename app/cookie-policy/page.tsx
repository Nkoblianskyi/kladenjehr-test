export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-12 pb-8 border-b-2 border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Politika Kolačića</h1>
            <p className="text-gray-600">Posljednje ažuriranje: 10. siječnja 2025.</p>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Što su Kolačići</h2>
              <p className="text-gray-700 leading-relaxed">
                Kolačići su male tekstualne datoteke koje se postavljaju na vaše računalo ili mobilni uređaj kada
                posjetite web stranicu. Široko se koriste kako bi web stranice funkcionirale učinkovitije i pružale
                informacije vlasnicima stranice. Kolačići poboljšavaju korisničko iskustvo pamteći vaše postavke i
                omogućavajući određene funkcionalnosti.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kako Koristimo Kolačiće</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                kladenjehr.com koristi kolačiće iz različitih razloga:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Funkcionalnost sajta</li>
                <li>Pamćenje vaših postavki tijekom i između posjeta</li>
                <li>Poboljšanje brzine i sigurnosti sajta</li>
                <li>Omogućavanje dijeljenja stranica preko mrežnih društvenih mreža poput Facebooka</li>
                <li>Poboljšavanje našeg sajta za vas</li>
                <li>Učinkovitije marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipovi Kolačića koje Koristimo</h2>

              <div className="space-y-8">
                <div className="border-l-4 border-croatia-blue pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Osnovni Kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići su potrebni za ispravno funkcioniranje sajta. Omogućavaju glavne funkcionalnosti poput
                    sigurnosti, upravljanja mrežom i pristupa računu. Možete ih onemogućiti mijenjajući postavke vašeg
                    pretraživača, ali to može utjecati na kako funkcionira sajt.
                  </p>
                </div>

                <div className="border-l-4 border-croatia-red pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Kolačići za Performans</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići nam pomažu razumjeti kako se posjetitelji susretnu s našim sajtom prikupljajući i
                    prijavljivajući anonimne informacije. Omogućavaju nam prepoznajte i brojanje posjetitelja i vidjeti
                    kako se posjetitelji kretaju kroz naš sajt dok ga koriste.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Kolačići za Funkcionalnost</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići omogućavaju sajtu pružanje poboljšane i personalizirane funkcionalnosti. Mogu biti
                    postavljeni od strane nas ili trećih strana koji pružaju usluge koje dodajemo naše stranice.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Kolačići za Segmentaciju</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići evidenciraju vašu posjetu našem sajtu, stranice koje ste posjetili i linkove koje ste
                    pratili. Koristit ćemo ovu informaciju kako bismo poboljšali naš sajt i oglasnu kampanju koja se
                    nalazi na njemu.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kolačići Trećih Strana</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                U nekim posebnim slučajevima također koristimo kolačiće pružene pouzdanom trećoj strani:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li>
                  Ovaj sajt koristi Google Analytics, koji je jedna od najpopularnijih i pouzdanih rješenja za analizu
                  na webu kako bismo razumjeli kako koristite sajt i načine na koje možemo poboljšati vaše iskustvo.
                </li>
                <li>
                  Također koristimo gumbove za društvene mreže i/ili priključnike na ovom sajtu koji vam omogućavaju
                  povezivanje s vašom društvenom mrežom na različite načine. Da bi funkcionirali, stranice društvenih
                  mreža postavljaju kolačiće putem našeg sajta.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upravljanje Kolačićima</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Većina pretraživača weba omogućava neki kontrolu nad većinom kolačića putem postavki pretraživača. Za
                više informacija o kolačićima, uključujući kako vidjeti koje kolačiće su postavljeni, posjetite:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>www.aboutcookies.org</li>
                <li>www.allaboutcookies.org</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Za odbijanje praćenja od strane Google Analytics na svim sajtovima, posjetite:{" "}
                <span className="text-croatia-blue font-medium">https://tools.google.com/dlpage/gaoptout</span>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Promjene u Našoj Politici Kolačića</h2>
              <p className="text-gray-700 leading-relaxed">
                Možemo periodično ažurirati našu Politiku Kolačića. Obavijestit ćemo vas o svim promjenama
                objavljivanjem nove Politike Kolačića na ovoj stranici i ažuriranjem datuma "Posljednje ažuriranje" na
                vrhu ove politike.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontaktirajte Nas</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ako imate pitanja o našoj Politici Kolačića, kontaktirajte nas na:
              </p>
              <p className="text-gray-900 font-semibold">
                <a
                  href="mailto:privatnost@kladenjehr.com"
                  className="text-croatia-blue hover:text-croatia-red underline"
                >
                  privatnost@kladenjehr.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
