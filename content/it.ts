// Testi italiani. Bozza di lavoro scritta a partire dai documenti 01–04, in attesa del documento 05.
// Versione localizzata, non traduzione letterale: registro impersonale e professionale (docs/04 §14 C, §23.1).

import type { Dict } from "./en";

export const it: Dict = {
  brand: "[Brand]",
  email: "[email professionale sul dominio del brand]",

  meta: {
    home: {
      title: "[Brand] — Business development tra Italia e mercati internazionali",
      description:
        "Business development indipendente e guidato dal fondatore: ingresso nel mercato italiano, ricerca partner, partnership strategiche, editoria e diritti, su opportunità selezionate.",
    },
    whatWeDo: {
      title: "Cosa facciamo",
      description:
        "Business Development, ingresso nel mercato italiano, ricerca partner, partnership strategiche, editoria e diritti, opportunità per autori ed editori: ambito, processo e limiti.",
    },
    publishing: {
      title: "Editoria e diritti",
      description:
        "Opportunità selezionate per editori, autori, opere e cataloghi: opportunità editoriali internazionali, partnership editoriali, diritti e licenze.",
    },
    founder: {
      title: "Fondatore — Luca Pistonesi",
      description:
        "Luca Pistonesi ha fondato e guida [Brand]: un percorso dal commercio internazionale all'imprenditoria, ai progetti digitali, all'editoria e al business development.",
    },
    contact: {
      title: "Parliamo di un'opportunità",
      description: "Una richiesta strutturata per descrivere l'opportunità. Ogni richiesta è valutata caso per caso.",
    },
    thankYou: { title: "Richiesta ricevuta", description: "La richiesta è stata ricevuta." },
    privacy: { title: "Informativa privacy", description: "Informativa privacy di [Brand]." },
    cookies: { title: "Cookie policy", description: "Cookie policy di [Brand]." },
    legal: { title: "Note legali", description: "Note legali di [Brand]." },
    notFound: { title: "Pagina non trovata", description: "La pagina non è stata trovata." },
  },

  a11y: {
    skip: "Vai al contenuto",
    primaryNav: "Navigazione principale",
    footerNav: "Navigazione del sito",
    legalNav: "Informazioni legali",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
    switchTo: "Passa all'italiano",
    homeLink: "[Brand], pagina iniziale",
    portrait: "Spazio riservato a un ritratto professionale di Luca Pistonesi",
    processList: "Fasi del processo di sviluppo",
  },

  nav: {
    home: "Home",
    whatWeDo: "Cosa facciamo",
    publishing: "Editoria e diritti",
    founder: "Fondatore",
    contact: "Contatti",
  },

  cta: "Parliamo di un'opportunità",

  footer: {
    positioning: "Business development indipendente, guidato dal fondatore, tra Italia e mercati internazionali.",
    founded: "Fondato da Luca Pistonesi",
    contactHeading: "Contatti",
    navHeading: "Sito",
    legalHeading: "Informazioni legali",
    privacy: "Privacy",
    cookies: "Cookie",
    legal: "Note legali",
    copyright: "[Brand]. Tutti i diritti riservati.",
  },

  process: {
    steps: [
      {
        name: "Opportunità",
        short: "Una breve conversazione iniziale per comprendere l'opportunità nelle linee generali.",
        detail:
          "Il primo colloquio è breve ed esplorativo. Serve unicamente a capire che cosa viene proposto, da chi e con quale obiettivo.",
      },
      {
        name: "Qualificazione",
        short: "La richiesta è pertinente? È possibile contribuire in modo realistico?",
        detail:
          "Si valuta se la richiesta rientra nelle attività del brand, quale servizio è pertinente e se proporre un incarico formale. Molte richieste si fermano a questa fase.",
      },
      {
        name: "Ambito e incarico",
        short: "Brief, ambito e condizioni vengono concordati per iscritto.",
        detail:
          "Obiettivo, attività concordate, limiti, risultati attesi e presupposti sono definiti in un brief di incarico, insieme alle condizioni. Il lavoro sostanziale inizia solo da questo momento.",
      },
      {
        name: "Valutazione",
        short: "Analisi dell'opportunità e del ruolo realisticamente possibile.",
        detail:
          "L'opportunità viene valutata in modo più approfondito: logica commerciale, contesto di mercato pertinente e ruolo che il brand può realisticamente svolgere.",
      },
      {
        name: "Definizione delle controparti",
        short: "Quali sono le controparti rilevanti, e perché.",
        detail:
          "Si definisce il profilo delle controparti da cercare, quindi si individuano quelle potenziali. Si tratta di un'attività di individuazione, non di due diligence.",
      },
      {
        name: "Contatti selezionati",
        short: "Contatto con controparti selezionate, ove concordato.",
        detail:
          "Quando è previsto dall'incarico, le controparti selezionate vengono contattate a titolo professionale proprio, senza false identità e senza attribuirsi poteri non conferiti.",
      },
      {
        name: "Possibile conversazione d'affari",
        short: "Un primo confronto, se la controparte è interessata.",
        detail:
          "Quando una controparte manifesta interesse, si facilita un primo confronto tra le parti. Che avvenga dipende dalla controparte.",
      },
      {
        name: "Sviluppo / passo successivo",
        short: "Seguito nell'ambito concordato, chiusura o nuovo incarico.",
        detail:
          "Si segue lo sviluppo delle prime conversazioni nell'ambito concordato. L'incarico si chiude con una sintesi finale, prosegue, oppure se ne concorda uno nuovo.",
      },
    ],
    boundary: "Da qui inizia il lavoro sostanziale",
    qualifier:
      "I contatti con terzi avvengono solo ove concordati nell'ambito di un incarico. Ogni conversazione d'affari dipende dall'interesse della controparte: nessuna presentazione, incontro, partnership o risultato è garantito.",
  },

  services: {
    groups: {
      general: "Business development",
      publishing: "Area editoriale",
    },
    items: [
      {
        id: "business-development",
        anchor: "business-development",
        number: "01",
        name: "Business Development",
        line: "Individuazione, valutazione e sviluppo di opportunità commerciali selezionate, fino a una concreta conversazione d'affari.",
        question: "L'opportunità merita di essere sviluppata? Chi deve esserne coinvolto?",
        involves: [
          "chiarire l'obiettivo commerciale;",
          "valutare prodotti, servizi e progetti selezionati con potenziale commerciale;",
          "individuare le tipologie di soggetti necessari a sviluppare l'opportunità;",
          "strutturare l'opportunità perché possa essere presentata a potenziali controparti;",
          "affiancare le prime discussioni commerciali.",
        ],
        situations:
          "Imprenditori che sviluppano una nuova iniziativa, aziende che valutano un nuovo prodotto o progetto, aziende italiane con un'opportunità definita all'estero.",
        excludes:
          "Non comprende vendita, negoziazione o firma per conto del cliente, né business plan formali o proiezioni finanziarie.",
        relation:
          "Il Business Development è la disciplina di riferimento. Quando un'opportunità non è ancora abbastanza definita per un servizio più specifico, il lavoro parte da qui.",
      },
      {
        id: "market-entry",
        anchor: "ingresso-mercato-italiano",
        number: "02",
        name: "Ingresso nel mercato italiano",
        line: "Supporto alle aziende internazionali che valutano e affrontano il mercato italiano e, in casi selezionati, alle aziende italiane all'estero.",
        question: "Il prodotto o servizio può essere rilevante in Italia? Come affrontare il mercato?",
        involves: [
          "una valutazione preliminare della possibile rilevanza commerciale del mercato;",
          "una ricerca documentale sul contesto di mercato pertinente;",
          "l'individuazione dei possibili canali di ingresso: distributori, importatori, partner commerciali o licenziatari;",
          "la definizione del profilo delle controparti;",
          "l'avvio di conversazioni d'affari selezionate.",
        ],
        situations:
          "Aziende internazionali che considerano l'Italia, produttori o titolari di marchi esteri che cercano una presenza commerciale italiana tramite partner.",
        excludes:
          "La ricerca è preliminare: non è uno studio di mercato formale né una due diligence, e non comprende aspetti regolatori, doganali, di certificazione, fiscali o legali, né la costituzione di società.",
        relation: "L'ingresso nel mercato definisce dove e come affrontare un mercato. Spesso è seguito dalla ricerca partner.",
      },
      {
        id: "partner-search",
        anchor: "ricerca-partner",
        number: "03",
        name: "Ricerca partner",
        line: "Individuazione delle controparti rilevanti per un'opportunità definita: distributori, importatori, editori, licenziatari e partner commerciali.",
        question: "Quale potrebbe essere la controparte commerciale giusta?",
        involves: [
          "definire con il cliente i criteri di selezione;",
          "ricercare e individuare le potenziali controparti;",
          "verificarle rispetto ai criteri concordati;",
          "contatti selezionati, solo ove concordato;",
          "facilitare i primi confronti.",
        ],
        situations:
          "Produttori e titolari di marchi che cercano distributori o importatori, aziende che entrano in Italia, aziende italiane che cercano partner all'estero, editori che cercano controparti per diritti.",
        excludes:
          "Una rosa di controparti non è un rapporto di due diligence. Il servizio non comprende la negoziazione o la conclusione di contratti e non rende il brand agente o rappresentante del cliente.",
        relation: "Può seguire l'ingresso nel mercato o il Business Development e può portare a un incarico di partnership strategica.",
      },
      {
        id: "strategic-partnerships",
        anchor: "partnership-strategiche",
        number: "04",
        name: "Partnership strategiche",
        line: "Sviluppo di collaborazioni tra aziende, professionisti e organizzazioni le cui attività possono creare valore insieme.",
        question: "Che cosa potrebbero costruire o sviluppare insieme le parti coinvolte?",
        involves: [
          "comprendere che cosa ciascuna parte apporta e cerca;",
          "delineare possibili modelli di collaborazione a livello concettuale;",
          "individuare potenziali partner, con la ricerca partner ove necessario;",
          "facilitare le discussioni iniziali tra le parti;",
          "seguire lo sviluppo delle prime conversazioni.",
        ],
        situations:
          "Iniziative congiunte, co-sviluppo, collaborazioni commerciali o editoriali e relazioni d'affari complementari, anche tra Paesi diversi.",
        excludes:
          "Non comprende la redazione o la negoziazione di accordi di partnership, joint venture o licenza, né valutazioni o strutturazioni finanziarie.",
        relation: "La ricerca partner individua una controparte; le partnership strategiche sviluppano una collaborazione.",
      },
      {
        id: "publishing-rights",
        anchor: "editoria-e-diritti",
        number: "05",
        name: "Editoria e diritti",
        line: "Opportunità selezionate per editori, opere e cataloghi: opportunità editoriali internazionali, diritti, licenze e partnership editoriali.",
        question: "",
        involves: [],
        situations: "",
        excludes: "",
        relation: "",
      },
      {
        id: "author-opportunities",
        anchor: "opportunita-autori-editori",
        number: "06",
        name: "Opportunità per autori ed editori",
        line: "Una valutazione selettiva delle opportunità editoriali per autori con un'opera completa o ben definita.",
        question: "",
        involves: [],
        situations: "",
        excludes: "",
        relation: "",
      },
    ],
    labels: {
      question: "La domanda",
      involves: "Che cosa può comprendere",
      situations: "Situazioni tipiche",
      excludes: "Che cosa non comprende",
      enquire: "Richiesta per",
    },
  },

  home: {
    hero: {
      kicker: "Indipendente · Guidato dal fondatore",
      title: "Mettere in relazione aziende, mercati e opportunità.",
      body: "Business development, ingresso nel mercato e partnership selezionate tra l'Italia e i mercati internazionali.",
      secondary: "Scopri cosa facciamo",
    },
    international: {
      label: "Italia e mercati internazionali",
      title: "Per le aziende internazionali che si avvicinano all'Italia e per aziende italiane selezionate che si sviluppano all'estero.",
      primary: {
        tag: "Direzione principale",
        from: "Internazionale",
        to: "Italia",
        title: "L'ingresso nel mercato italiano",
        body: "Per le aziende che valutano l'Italia: verificare se l'opportunità è realistica, definire quali controparti sono rilevanti, da distributori e importatori a partner commerciali e licenziatari, e, ove concordato, avviare conversazioni d'affari selezionate.",
      },
      secondary: {
        tag: "Direzione secondaria",
        from: "Italia",
        to: "Internazionale",
        title: "Opportunità selezionate all'estero",
        body: "Per aziende, produttori e titolari di marchi italiani con un'opportunità definita fuori dall'Italia: individuazione di potenziali partner e supporto alle prime conversazioni internazionali.",
      },
      link: "L'ingresso nel mercato italiano in dettaglio",
    },
    manifesto: {
      label: "Approccio",
      statement:
        "Il valore non sta nell'informazione in sé. Sta nel riconoscere l'opportunità giusta e nel mettere in relazione le parti giuste.",
      body: "[Brand] è un brand indipendente di business development, fondato e guidato da Luca Pistonesi. Ogni opportunità è valutata nel merito, il lavoro è definito prima di iniziare e il fondatore ne resta personalmente responsabile.",
    },
    services: {
      label: "Cosa facciamo",
      title: "Sei servizi, una sola disciplina.",
      intro: "I servizi possono essere combinati, ma ogni incarico ha un servizio principale chiaramente individuato.",
      link: "Scopri cosa facciamo",
      publishingLink: "Editoria e diritti",
    },
    process: {
      label: "Come si sviluppa un'opportunità",
      title: "Un unico processo, con un confine chiaro.",
      link: "Il metodo di lavoro",
    },
    areas: {
      label: "Aree di interesse",
      title: "I settori a cui oggi si dedica particolare attenzione.",
      items: [
        { name: "Fitness e benessere", text: "Attrezzature, prodotti, servizi e concept commerciali selezionati." },
        { name: "Design e hospitality", text: "Prodotti e soluzioni selezionati per interior, hospitality, contract e lifestyle." },
        { name: "Pet care", text: "Prodotti e soluzioni innovative selezionati per il settore pet." },
        { name: "Digitale e tecnologia", text: "Prodotti digitali, software, piattaforme, tecnologie per la formazione e servizi B2B selezionati." },
        { name: "Prodotti consumer e lifestyle selezionati", text: "Prodotti con potenziale di distribuzione o di sviluppo commerciale in nuovi mercati." },
      ],
      note: "Sono aree di interesse, non settori esclusivi. Opportunità selezionate in altri settori sono valutate caso per caso.",
      publishingNote: "Editoria e diritti costituisce un'area dedicata.",
      publishingLink: "Vai a Editoria e diritti",
    },
    publishing: {
      label: "Editoria e diritti",
      title: "Un'area dedicata a editori, autori, opere e cataloghi.",
      body: "La stessa disciplina applicata all'editoria: riconoscere opere, cataloghi e diritti con potenziale, individuare le controparti editoriali rilevanti e creare le condizioni per un confronto serio su diritti e progetti editoriali.",
      sides: [
        { name: "Editori, opere e cataloghi", text: "Opportunità editoriali internazionali, diritti, licenze e partnership editoriali." },
        { name: "Autori", text: "Una valutazione selettiva delle opportunità editoriali per opere complete o ben definite." },
      ],
      link: "Scopri Editoria e diritti",
    },
    founder: {
      label: "Fondatore",
      name: "Luca Pistonesi",
      role: "Fondatore",
      body: "Luca Pistonesi individua e valuta le opportunità, avvia le relazioni, mette in contatto le parti adatte e coordina iniziative selezionate. Quando un progetto richiede competenze specifiche, professionisti indipendenti vengono coinvolti caso per caso.",
      path: ["Commercio internazionale", "Imprenditoria e sviluppo commerciale", "Digitale", "Editoria", "Business development"],
      pathLabel: "Percorso professionale",
      link: "Il fondatore",
    },
    qualified: {
      label: "Opportunità qualificate",
      title: "Non ogni opportunità è l'opportunità giusta.",
      body: "Il brand lavora solo dove può contribuire in modo realistico. Un'opportunità è pertinente quando:",
      criteria: [
        "l'azienda o la persona e l'offerta sono chiaramente identificabili;",
        "l'obiettivo è realistico e il mercato o la controparte di riferimento sono individuabili;",
        "chi propone l'opportunità ne è titolare o è autorizzato a discuterne;",
        "le aspettative sul ruolo del brand sono chiare.",
      ],
      note: "Non ogni richiesta diventa un incarico.",
    },
    final: {
      title: "Un'opportunità che merita di essere discussa?",
      body: "Descrivila in poche righe.",
    },
  },

  whatWeDo: {
    hero: {
      label: "Cosa facciamo",
      title: "Business development, applicato a opportunità selezionate.",
      body: "Sei servizi in due gruppi. Business development e ingresso nel mercato costituiscono l'area generale; editoria e diritti un'area dedicata. Ogni servizio può essere combinato con altri, entro un ambito definito.",
    },
    publishingGroup: {
      intro: "L'area editoriale applica la stessa disciplina a editori, autori, opere e cataloghi.",
      link: "Editoria e diritti in dettaglio",
    },
    distinction: {
      title: "Ricerca partner e partnership strategiche",
      caption: "Due servizi distinti",
      headers: ["", "Ricerca partner", "Partnership strategiche"],
      rows: [
        ["Domanda centrale", "Quale potrebbe essere la controparte giusta?", "Che cosa potrebbero costruire insieme le parti?"],
        ["Obiettivo", "Individuare una controparte", "Sviluppare una collaborazione"],
        ["Risultato tipico", "Rosa di controparti e primi contatti", "Concept di collaborazione e prime discussioni"],
      ],
    },
    how: {
      label: "Il metodo di lavoro",
      title: "Un unico processo di riferimento.",
      body: "Ogni incarico segue la stessa sequenza. Il primo colloquio serve solo a comprendere l'opportunità e a capire se un incarico formale ha senso: il lavoro sostanziale inizia una volta concordati brief, ambito e condizioni.",
    },
    boundaries: {
      label: "Limiti dell'incarico",
      title: "Che cosa non rientra nel lavoro, e che cosa non viene promesso.",
      body: "Dichiarare con chiarezza i limiti fa parte di un lavoro serio.",
      items: [
        "Nessuna garanzia di successo commerciale, vendite o ricavi.",
        "Nessuna garanzia che distributori, importatori, editori, licenziatari o partner rispondano o accettino.",
        "Ricerca e individuazione non sono due diligence né studi di mercato formali.",
        "Non viene fornita consulenza legale, fiscale, finanziaria o regolatoria; ove necessario, sono coinvolti professionisti qualificati.",
        "Il brand non agisce come agente commerciale o rappresentante legale del cliente, e non può vincolarlo né firmare per suo conto.",
        "Non esistono uffici o rappresentanti permanenti fuori dall'Italia.",
        "Negoziazione finale, impegni e firme restano in capo alle parti e ai loro consulenti.",
      ],
    },
    final: {
      title: "Un'opportunità definita da discutere?",
      body: "Descrivila brevemente. Ogni richiesta è valutata caso per caso.",
    },
  },

  publishing: {
    hero: {
      label: "Editoria e diritti",
      title: "Opportunità selezionate nell'editoria e nei diritti.",
      body: "Un'area dedicata, legata all'esperienza del fondatore nell'editoria e nelle iniziative editoriali. Applica lo stesso approccio selettivo a editori, autori, opere e cataloghi.",
    },
    publishers: {
      label: "Per gli editori",
      service: "Editoria e diritti",
      title: "Per editori con opere, cataloghi o diritti dal potenziale oltre il mercato attuale.",
      body: "Per editori italiani che cercano partner internazionali ed editori esteri interessati al mercato italiano.",
      themes: [
        { name: "Opportunità editoriali internazionali", text: "Individuazione di editori e licenziatari, italiani o esteri, potenzialmente interessati a opere o cataloghi selezionati." },
        { name: "Partnership editoriali", text: "Esplorazione di collaborazioni editoriali e, in casi selezionati, di progetti editoriali speciali." },
      ],
      involvesLabel: "Che cosa può comprendere",
      involves: [
        "comprendere il catalogo, le opere o il progetto;",
        "individuare editori, partner editoriali o licenziatari potenzialmente rilevanti;",
        "preparare materiali di presentazione insieme all'editore;",
        "contatti selezionati e prime discussioni, ove concordato.",
      ],
      cta: "Richiesta come editore",
    },
    authors: {
      label: "Per gli autori",
      service: "Opportunità per autori ed editori",
      title: "Per autori selezionati con un'opera completa o ben definita.",
      body: "Per autori, italiani o stranieri, che cercano un editore, una controparte editoriale oppure opportunità internazionali e legate ai diritti per opere già esistenti.",
      involvesLabel: "Come funziona",
      involves: [
        "una richiesta sintetica che descrive l'opera;",
        "una valutazione della possibilità di contribuire in modo realistico;",
        "se l'opportunità viene selezionata, la richiesta di ulteriori materiali;",
        "l'individuazione di editori o controparti editoriali potenzialmente rilevanti e, ove concordato, il contatto.",
      ],
      excludes:
        "Non si tratta di rappresentanza dell'autore né di un ruolo di agente letterario, e non comprende servizi di editing, ghostwriting, traduzione o autopubblicazione.",
      cta: "Richiesta come autore",
    },
    works: {
      label: "Per opere e cataloghi",
      title: "Per titolari di libri, cataloghi o proprietà intellettuale editoriale.",
      body: "Opere e cataloghi esistenti possono avere ulteriore potenziale: diritti, licenze, traduzioni o nuove forme di sviluppo. Si valutano casi selezionati in cui titolarità e disponibilità dei diritti sono chiare.",
    },
    evaluation: {
      label: "Valutazione",
      title: "Come vengono valutate le opportunità editoriali.",
      body: "Ogni opportunità è considerata nel merito. Gli elementi rilevanti sono:",
      criteria: [
        "un'opera, un catalogo o un progetto completo o ben definito;",
        "titolarità e disponibilità chiare dei diritti interessati;",
        "un obiettivo realistico e una tipologia di controparte individuabile;",
        "un ambito in cui sia possibile contribuire in modo realistico.",
      ],
      decline:
        "Quando i diritti non sono chiari o sono già impegnati, quando si attendono risultati garantiti o quando non è possibile contribuire, la richiesta viene declinata con cortesia.",
    },
    rules: {
      label: "Richieste degli autori",
      title: "Come inviare una richiesta come autore.",
      items: [
        "Inviare una richiesta sintetica tramite il modulo di contatto, selezionando “Opportunità per autori ed editori”.",
        "Non inviare manoscritti: il modulo accetta solo una breve sintesi e non consente il caricamento di file.",
        "Se l'opportunità viene selezionata, potranno essere richiesti ulteriori materiali.",
        "L'invio di una richiesta non garantisce la lettura, l'accettazione, la presentazione a un editore o la pubblicazione.",
      ],
    },
    final: {
      title: "Un'opportunità editoriale da discutere?",
      body: "Editori e autori possono descriverla con la stessa richiesta strutturata.",
    },
  },

  founder: {
    hero: {
      label: "Fondatore",
      name: "Luca Pistonesi",
      role: "Fondatore",
      body: "[Brand] è fondato e guidato da Luca Pistonesi. Il fondatore valuta ogni opportunità, definisce il lavoro, avvia le relazioni, mette in contatto le parti adatte e coordina iniziative selezionate, restando personalmente responsabile di ogni incarico nell'ambito concordato.",
      roleLabel: "Il ruolo oggi",
      roles: ["Imprenditore", "Business developer", "Promotore di progetti", "Costruttore di relazioni", "Sviluppatore di opportunità"],
    },
    chapters: {
      label: "Percorso professionale",
      title: "Un'evoluzione, non un curriculum.",
      items: [
        {
          number: "01",
          name: "Gli inizi — Commercio internazionale",
          text: "Un'attività familiare di import-export con Paesi dell'ex Unione Sovietica.",
        },
        {
          number: "02",
          name: "Imprenditoria",
          text: "Attività imprenditoriali indipendenti, tra cui Dinamica Fitness.",
        },
        {
          number: "03",
          name: "Sviluppo commerciale",
          text: "Ruoli commerciali, attività di vendita e sviluppo di iniziative indipendenti.",
        },
        {
          number: "04",
          name: "Digitale",
          text: "LP Media Solution, progetti social e web e iniziative di applicazioni mobili.",
        },
        {
          number: "05",
          name: "Editoria",
          text: "Centro Editoriale Ellepi e lo sviluppo di progetti e iniziative editoriali.",
        },
        {
          number: "06",
          name: "Oggi — Business development",
          text: "L'evoluzione attuale: sviluppo di mercato, partnership e opportunità commerciali ed editoriali selezionate tra l'Italia e i mercati internazionali.",
        },
      ],
    },
    specialists: {
      label: "Il lavoro con gli specialisti",
      title: "Competenze specifiche, coinvolte caso per caso.",
      body: "Il fondatore non si presenta come esperto di ogni settore. Quando un progetto richiede competenze specifiche, possono essere coinvolti caso per caso professionisti indipendenti o specialisti di settore. Non esiste una rete permanente di specialisti: il fondatore resta responsabile della relazione complessiva nell'ambito concordato.",
    },
    final: {
      title: "Un'opportunità da discutere direttamente con il fondatore.",
      body: "Ogni richiesta è letta e valutata caso per caso.",
    },
  },

  contact: {
    hero: {
      label: "Contatti",
      title: "Parliamo di un'opportunità.",
      body: "Una breve descrizione dell'opportunità è sufficiente. Ogni richiesta è valutata caso per caso e il primo colloquio serve a capire se un incarico formale ha senso.",
    },
    include: {
      title: "Informazioni utili",
      items: [
        "chi scrive e quale organizzazione rappresenta;",
        "in che cosa consiste l'opportunità;",
        "quale mercato o controparte è rilevante;",
        "che cosa si cerca.",
      ],
    },
    direct: "Contatto professionale",
  },

  form: {
    title: "Richiesta",
    requiredNote: "I campi contrassegnati come “obbligatorio” vanno compilati.",
    required: "obbligatorio",
    optional: "facoltativo",
    categoryPlaceholder: "Seleziona una categoria",
    categories: [
      { id: "business-development", label: "Business Development" },
      { id: "market-entry", label: "Ingresso nel mercato italiano" },
      { id: "partner-search", label: "Ricerca partner" },
      { id: "strategic-partnerships", label: "Partnership strategiche" },
      { id: "publishing-rights", label: "Editoria e diritti" },
      { id: "author-opportunities", label: "Opportunità per autori ed editori" },
      { id: "other", label: "Altro" },
    ],
    fields: {
      category: { label: "Categoria della richiesta", hint: "" },
      name: { label: "Nome e cognome", hint: "" },
      email: { label: "Email", hint: "" },
      country: { label: "Paese", hint: "Il Paese in cui ha sede chi scrive o la sua organizzazione." },
      company: { label: "Azienda / Organizzazione", hint: "" },
      targetMarket: { label: "Mercato / Paese di riferimento", hint: "Il mercato o il Paese a cui si riferisce l'opportunità." },
      description: {
        label: "Descrizione dell'opportunità",
        hint: "Una descrizione sintetica: in che cosa consiste l'opportunità e che cosa si cerca.",
      },
      descriptionAuthor: {
        label: "Contesto aggiuntivo",
        hint: "Eventuali elementi non indicati sopra. Non incollare il manoscritto.",
      },
      workTitle: { label: "Titolo dell'opera", hint: "" },
      genre: { label: "Genere / categoria", hint: "" },
      publicationStatus: { label: "Stato di pubblicazione", hint: "" },
      existingPublisher: { label: "Editore attuale", hint: "Se l'opera è già stata pubblicata." },
      synopsis: {
        label: "Breve sinossi",
        hint: "Solo una breve sintesi. Ulteriori materiali potranno essere richiesti se l'opportunità viene selezionata.",
      },
      rights: { label: "Informazioni sui diritti", hint: "Ove note: chi detiene i diritti e quali sono disponibili." },
      objective: { label: "Obiettivo", hint: "Ad esempio un editore, un'edizione internazionale o un'opportunità sui diritti." },
    },
    publicationStatuses: [
      { id: "unpublished", label: "Inedita, completa" },
      { id: "in-progress", label: "Ben definita, in lavorazione" },
      { id: "published", label: "Pubblicata" },
      { id: "self-published", label: "Autopubblicata" },
    ],
    counter: (used: number, max: number) => `${used} di ${max} caratteri`,
    revealed: (category: string) => `Di seguito i campi per ${category}.`,
    privacy: {
      before: "Le informazioni fornite sono utilizzate solo per valutare la richiesta. Si veda l'",
      link: "informativa privacy",
      after: ".",
    },
    submit: "Invia la richiesta",
    sending: "Invio in corso…",
    errors: {
      summary: "Verificare i seguenti campi:",
      required: (field: string) => `Il campo “${field}” è obbligatorio.`,
      email: "Inserire un indirizzo email valido, ad esempio nome@azienda.it.",
      tooLong: (field: string, max: number) => `Il campo “${field}” può contenere al massimo ${max} caratteri.`,
      submit:
        "La richiesta non è stata inviata a causa di un problema tecnico. I dati inseriti sono stati conservati: riprovare tra qualche istante.",
    },
    honeypot: "Lasciare vuoto questo campo",
  },

  thankYou: {
    label: "Richiesta ricevuta",
    title: "Grazie. La richiesta è stata ricevuta.",
    body: [
      "Ogni richiesta è valutata caso per caso. Se l'opportunità viene selezionata per un approfondimento, potranno essere richieste ulteriori informazioni.",
      "L'invio di una richiesta non garantisce l'accettazione, un incarico, una risposta da parte di terzi o alcun risultato commerciale.",
    ],
    back: "Prosegui",
    links: { home: "Home", whatWeDo: "Cosa facciamo", founder: "Fondatore" },
  },

  legalPages: {
    label: "Informazioni legali",
    placeholder: "[Testo da predisporre separatamente prima della pubblicazione]",
    privacy: {
      title: "Informativa privacy",
      body: "Questa pagina conterrà l'informativa privacy relativa alle richieste di contatto, alle richieste degli autori, alle informazioni commerciali riservate e ai dati personali.",
    },
    cookies: {
      title: "Cookie policy",
      body: "Questa pagina conterrà la cookie policy, se richiesta dalle tecnologie effettivamente utilizzate al lancio.",
    },
    legal: {
      title: "Note legali",
      body: "Questa pagina conterrà i dati del soggetto giuridico, una volta costituito e approvato.",
    },
  },

  notFound: {
    label: "404",
    title: "La pagina non è stata trovata.",
    body: "L'indirizzo potrebbe essere errato oppure la pagina potrebbe essere stata spostata.",
    links: { home: "Home", whatWeDo: "Cosa facciamo", contact: "Contatti" },
  },
};
