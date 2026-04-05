import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-background px-4 py-6 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-5">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/8 active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
            Torna alla dashboard
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-7">
          <p className="font-brand text-3xl text-white md:text-4xl">
            SerialMente
          </p>

          <h1 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm leading-7 text-foreground-muted">
            Ultimo aggiornamento: 5 aprile 2026
          </p>

          <p className="mt-6 leading-7 text-foreground-muted">
            La presente informativa descrive come SerialMente raccoglie, utilizza e
            protegge i dati personali degli utenti che accedono e utilizzano
            l’applicazione.
          </p>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              1. Titolare del trattamento
            </h2>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-foreground-muted">
              <p className="font-medium text-white">Vito Licari</p>
              <p className="mt-2 break-all">vito.licari78@gmail.com</p>
              <p className="mt-2">Italia</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">2. Dati raccolti</h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              SerialMente può raccogliere e trattare le seguenti categorie di dati
              personali:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-foreground-muted">
              <li>
                dati di registrazione e autenticazione, come indirizzo email e
                identificativi dell’account;
              </li>
              <li>
                credenziali di accesso gestite tramite il provider di
                autenticazione utilizzato dall’app;
              </li>
              <li>
                dati di profilo, come nickname e immagine profilo, se caricati o
                inseriti dall’utente;
              </li>
              <li>
                dati di utilizzo dell’app, come serie seguite, episodi visti,
                preferiti, liste personalizzate e statistiche collegate
                all’utilizzo del servizio;
              </li>
              <li>
                dati tecnici strettamente necessari al funzionamento e alla
                sicurezza dell’app.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              3. Finalità del trattamento
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-foreground-muted">
              <li>consentire la registrazione, il login e la gestione dell’account;</li>
              <li>permettere l’utilizzo delle funzionalità principali dell’app;</li>
              <li>
                memorizzare e mostrare nickname, immagine profilo, preferenze,
                cronologia di visione e liste create dall’utente;
              </li>
              <li>
                mostrare statistiche personali, come tempo di visione ed episodi
                guardati;
              </li>
              <li>
                mantenere la sicurezza tecnica del servizio e prevenire accessi
                non autorizzati;
              </li>
              <li>gestire richieste di supporto o esercizio dei diritti privacy.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">4. Base giuridica</h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              Il trattamento dei dati necessari all’erogazione del servizio avviene
              principalmente per consentire l’uso dell’app da parte dell’utente e
              per fornire le funzionalità richieste. I dati tecnici e di
              autenticazione strettamente necessari al funzionamento e alla
              sicurezza del servizio sono trattati per finalità tecniche,
              organizzative e di protezione dell’account.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">5. Fornitori terzi</h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              Per il funzionamento di SerialMente possono essere utilizzati servizi
              di terze parti. In particolare:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-foreground-muted">
              <li>
                <span className="font-medium text-white">Clerk</span>, per la
                gestione dell’autenticazione e delle sessioni utente;
              </li>
              <li>
                <span className="font-medium text-white">Vercel</span>, per
                l’hosting e la distribuzione dell’applicazione;
              </li>
              <li>
                <span className="font-medium text-white">TVMaze</span>, come fonte
                di dati relativi alle serie TV e, quando disponibili, delle
                relative immagini e metadati.
              </li>
            </ul>

            <p className="mt-4 leading-7 text-foreground-muted">
              Database, sistemi di storage o ulteriori servizi infrastrutturali
              potranno essere definiti e integrati successivamente. In tal caso,
              questa informativa verrà aggiornata per riflettere i nuovi fornitori
              effettivamente utilizzati.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              6. Cookie e tecnologie simili
            </h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              SerialMente può utilizzare cookie o tecnologie simili strettamente
              necessari al funzionamento del servizio, ad esempio per la gestione
              dell’autenticazione, della sessione utente e della sicurezza
              dell’app.
            </p>
            <p className="mt-3 leading-7 text-foreground-muted">
              Al momento l’app non utilizza strumenti di analytics, profilazione o
              advertising. Qualora in futuro vengano introdotti strumenti non
              strettamente tecnici, questa informativa verrà aggiornata e, ove
              necessario, verrà implementato un apposito meccanismo di consenso.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              7. Conservazione dei dati
            </h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              I dati personali vengono conservati per il tempo necessario a fornire
              il servizio e a mantenere l’account attivo. I dati relativi al
              profilo e all’utilizzo dell’app possono essere mantenuti finché
              l’account resta attivo o finché l’utente non ne richieda la
              cancellazione, salvo eventuali esigenze tecniche, di sicurezza o di
              adempimento normativo.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              8. Trasferimento dei dati
            </h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              Alcuni fornitori terzi utilizzati dall’app potrebbero trattare dati
              anche tramite infrastrutture situate fuori dal Paese dell’utente o,
              in alcuni casi, fuori dallo Spazio Economico Europeo. In tali casi,
              il trattamento dei dati avviene secondo le condizioni e la
              documentazione privacy dei fornitori effettivamente utilizzati.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              9. Diritti dell’utente
            </h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              L’utente può richiedere, nei limiti previsti dalla normativa
              applicabile:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-foreground-muted">
              <li>l’accesso ai propri dati personali;</li>
              <li>la rettifica dei dati inesatti o incompleti;</li>
              <li>la cancellazione dei dati personali;</li>
              <li>la limitazione del trattamento, ove applicabile;</li>
              <li>l’opposizione al trattamento, nei casi previsti;</li>
              <li>
                la presentazione di un reclamo all’autorità di controllo competente.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              10. Modifiche alla presente informativa
            </h2>
            <p className="mt-3 leading-7 text-foreground-muted">
              La presente Privacy Policy può essere aggiornata nel tempo per
              riflettere modifiche tecniche, funzionali o normative. La versione
              aggiornata verrà pubblicata all’interno dell’app o del sito.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">11. Contatti</h2>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-foreground-muted">
              <p className="font-medium text-white">Vito Licari</p>
              <p className="mt-2 break-all">vito.licari78@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
