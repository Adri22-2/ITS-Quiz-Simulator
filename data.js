const ccnaData = {
    modules: [
        { id: "dhcp", title: "DHCP & DNS", icon: "🔄", status: "Attivo" },
        { id: "ospf", title: "OSPF Routing", icon: "🛣️", status: "Attivo" },
        { id: "vlan", title: "VLAN & Trunking", icon: "🏗️", status: "Attivo" },
        { id: "stp",  title: "Spanning Tree", icon: "🌲", status: "Attivo" }
    ],

    questions: {
        dhcp: [
            { q: "Quale porta UDP usa il Server DHCP?", a: ["67", "68", "53", "161"], c: 0, f: "Il server ascolta sulla porta 67, il client sulla 68." },
            { q: "Cosa significa l'acronimo DORA?", a: ["Discover, Offer, Request, Ack", "Data, Open, Route, Access", "Direct, Over, Real, Active", "Dynamic, Open, Remote, Area"], c: 0, f: "Rappresenta le 4 fasi dello scambio messaggi DHCP." },
            { q: "Quale comando mostra i conflitti di indirizzi IP su un router Cisco?", a: ["show ip dhcp conflict", "show ip dhcp binding", "show ip dhcp pool", "debug dhcp"], c: 0, f: "Mostra gli IP che il router ha rilevato come già in uso." },
            { q: "In quale stato si trova il client quando invia un DHCP Request?", a: ["Selecting", "Requesting", "Init", "Bound"], c: 1, f: "Il client richiede formalmente l'offerta ricevuta nel pacchetto Offer." },
            { q: "L'indirizzo 169.254.x.x indica l'uso di:", a: ["APIPA", "DHCP Relay", "Static IP", "Loopback"], c: 0, f: "APIPA viene usato quando il client non riceve risposta dal DHCP." },
            { q: "Quale tipo di record DNS mappa un nome a un indirizzo IPv6?", a: ["A", "AAAA", "CNAME", "MX"], c: 1, f: "Il record AAAA (quad-A) è specifico per IPv6." },
            { q: "Cosa fa il comando 'ip helper-address'?", a: ["Inoltra broadcast DHCP come unicast", "Configura il DNS", "Crea una VLAN", "Attiva il routing"], c: 0, f: "Permette ai messaggi DHCP di attraversare i router." },
            { q: "Un record CNAME serve a:", a: ["Creare un alias per un nome esistente", "Mappare un IP", "Gestire le mail", "Indicare l'autorità"], c: 0, f: "CNAME sta per Canonical Name." },
            { q: "Il comando 'ip dhcp excluded-address' serve a:", a: ["Riservare IP per uso statico", "Cancellare il pool", "Bloccare il DNS", "Spegnere il servizio"], c: 0, f: "Evita che il DHCP assegni IP già assegnati a server o stampanti." },
            { q: "Quale porta usa il protocollo DNS?", a: ["53", "67", "80", "443"], c: 0, f: "DNS usa sia UDP che TCP sulla porta 53." },
            { q: "DHCP Discover viene inviato come:", a: ["Broadcast", "Unicast", "Multicast", "Anycast"], c: 0, f: "Il client non ha ancora un IP, quindi 'urla' in broadcast." },
            { q: "Il tempo di lease predefinito in IOS Cisco è:", a: ["24 ore", "1 ora", "7 giorni", "Infinite"], c: 0, f: "Il valore standard è un giorno intero." },
            { q: "Cosa contiene il messaggio DHCP Offer?", a: ["Proposta di indirizzo IP e opzioni", "Richiesta di conferma", "Messaggio di errore", "Conferma finale"], c: 0, f: "Il server propone un IP al client." },
            { q: "Quale comando crea un pool DHCP chiamato 'CLIENTS'?", a: ["ip dhcp pool CLIENTS", "network dhcp pool CLIENTS", "service dhcp CLIENTS", "set dhcp CLIENTS"], c: 0, f: "È il primo comando per configurare il servizio." },
            { q: "DNS: cosa significa FQDN?", a: ["Fully Qualified Domain Name", "Fast Query Data Network", "File Queue Domain Name", "Fixed Quality Domain Network"], c: 0, f: "È il nome completo del dominio, incluso l'host (es. www.google.com)." }
        ],
        ospf: [
            { q: "Qual è la Distanza Amministrativa di OSPF?", a: ["110", "90", "120", "1"], c: 0, f: "OSPF ha AD 110." },
            { q: "Algoritmo usato da OSPF?", a: ["SPF (Dijkstra)", "DUAL", "Bellman-Ford", "STP"], c: 0, f: "Shortest Path First calcola l'albero dei percorsi minimi." },
            { q: "Quale comando attiva OSPF con ID processo 10?", a: ["router ospf 10", "network ospf 10", "ip ospf process 10", "routing ospf 10"], c: 0, f: "Il numero del processo è locale al router." },
            { q: "Area obbligatoria in una rete multi-area?", a: ["Area 0", "Area 1", "Area 100", "Area backbone 1"], c: 0, f: "Tutte le aree devono connettersi fisicamente o logicamente all'Area 0." },
            { q: "Come calcola il costo OSPF per default?", a: ["100 Mbps / larghezza di banda", "Numero di hop", "Ritardo del link", "MTU"], c: 0, f: "La formula è Reference Bandwidth / Interface Bandwidth." },
            { q: "Indirizzo Multicast per AllSPFRouters?", a: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"], c: 0, f: "Tutti i router OSPF ascoltano sul 224.0.0.5." },
            { q: "Stato finale di adiacenza tra due router in una rete point-to-point?", a: ["FULL", "2-WAY", "EXCHANGE", "LOADING"], c: 0, f: "Lo stato FULL indica sincronizzazione completa." },
            { q: "Quale router ha la priorità più alta nell'elezione DR?", a: ["Quello con il valore priority più alto", "Quello col MAC più basso", "Quello col RID più basso", "Quello più vecchio"], c: 0, f: "Default priority è 1, il valore più alto vince." },
            { q: "Cosa indica il Router ID (RID)?", a: ["Nome univoco del router nel dominio OSPF", "Indirizzo IP del gateway", "Numero del processo", "Versione di OSPF"], c: 0, f: "Indispensabile per identificare chi ha generato un LSA." },
            { q: "Comando per rendere un'interfaccia passiva?", a: ["passive-interface <nome>", "no ospf interface", "shutdown ospf", "isolate interface"], c: 0, f: "Smette di inviare Hello ma include la subnet negli update." },
            { q: "OSPF Hello Timer predefinito su Ethernet?", a: ["10 secondi", "30 secondi", "5 secondi", "60 secondi"], c: 0, f: "Sulle reti broadcast è 10 secondi." },
            { q: "Quale LSA descrive i router all'interno di un'area?", a: ["Tipo 1", "Tipo 2", "Tipo 3", "Tipo 5"], c: 0, f: "LSA Tipo 1 (Router LSA) è generato da ogni router." },
            { q: "Un router ABR è:", a: ["Un router tra due aree", "Un router interno", "Il router centrale", "Un router con una sola area"], c: 0, f: "Area Border Router connette un'area all'Area 0." },
            { q: "Cosa succede se il Dead Timer scade?", a: ["L'adiacenza viene rimossa", "Il router riavvia", "Cambia il RID", "Non succede nulla"], c: 0, f: "Il router viene considerato 'morto' e rimosso dalla topologia." },
            { q: "Comando per vedere i vicini OSPF?", a: ["show ip ospf neighbor", "show ip route ospf", "show ospf neighbors", "show ip ospf database"], c: 0, f: "Fondamentale per il troubleshooting delle adiacenze." }
        ],
        vlan: [
            { q: "Protocollo di trunking standard IEEE?", a: ["802.1Q", "ISL", "802.3ad", "802.11"], c: 0, f: "802.1Q è lo standard universale per il tagging VLAN." },
            { q: "Quanti bit ha l'identificatore VLAN (VID)?", a: ["12 bit", "8 bit", "16 bit", "4 bit"], c: 0, f: "Con 12 bit si possono avere 4096 VLAN." },
            { q: "Range delle VLAN normali?", a: ["1 - 1005", "1 - 4094", "100 - 500", "0 - 1024"], c: 0, f: "Il range esteso arriva fino a 4094." },
            { q: "Comando per creare la VLAN 10?", a: ["vlan 10", "create vlan 10", "set vlan 10", "interface vlan 10"], c: 0, f: "Si usa in configurazione globale." },
            { q: "Una porta in modalità 'access' può:", a: ["Appartenere a una sola VLAN", "Gestire il trunk", "Inviare tag 802.1Q", "Avere più IP"], c: 0, f: "Le porte access collegano gli host finali a una sola VLAN." },
            { q: "La Native VLAN serve a:", a: ["Gestire il traffico senza tag", "Criptare i dati", "Spegnere lo switch", "Routing"], c: 0, f: "Il traffico sulla Native VLAN attraversa il trunk non taggato." },
            { q: "Cosa succede se c'è un mismatch della Native VLAN?", a: ["Possibili loop e traffico incrociato", "Lo switch esplode", "Tutto funziona", "Si spegne il trunk"], c: 0, f: "È un errore di configurazione grave segnalato da CDP." },
            { q: "Router-on-a-Stick usa:", a: ["Subinterfaces logiche", "Molti cavi fisici", "Switch L3", "Solo hub"], c: 0, f: "Usa un'unica interfaccia fisica per più VLAN." },
            { q: "Comando per assegnare una porta alla VLAN 20?", a: ["switchport access vlan 20", "vlan 20 member", "port vlan 20", "assign vlan 20"], c: 0, f: "Va dato sotto la configurazione dell'interfaccia." },
            { q: "Voice VLAN serve a:", a: ["Isolare il traffico VoIP", "Sentire la musica", "Amplificare il segnale", "Gestire i trunk"], c: 0, f: "Separa i dati PC dalla voce per applicare QoS." },
            { q: "VTP (VLAN Trunking Protocol) serve a:", a: ["Sincronizzare le VLAN tra switch", "Creare trunk", "Routing", "Sicurezza"], c: 0, f: "Permette di creare una VLAN su uno switch e vederla su tutti gli altri." },
            { q: "Quale comando mostra lo stato dei trunk?", a: ["show interfaces trunk", "show vlan brief", "show ip trunk", "show running-config"], c: 0, f: "Mostra quali porte sono trunk e la native vlan." },
            { q: "Il tag 802.1Q dove viene inserito?", a: ["Tra l'indirizzo Source e il Type", "Alla fine del frame", "Nel preambolo", "Nel payload"], c: 0, f: "Modifica l'header Ethernet originale." },
            { q: "DTP (Dynamic Trunking Protocol) serve a:", a: ["Negoziare automaticamente un trunk", "Assegnare IP", "Sicurezza", "Backup"], c: 0, f: "Protocollo proprietario Cisco per l'auto-configurazione." },
            { q: "Cosa fa 'switchport mode dynamic desirable'?", a: ["Tenta attivamente di formare un trunk", "Resta in access", "Spegne la porta", "Usa solo ISL"], c: 0, f: "Invia pacchetti DTP per chiedere all'altro lato di diventare trunk." }
        ],
        stp: [
            { q: "Scopo di STP?", a: ["Evitare loop Layer 2", "Routing", "Assegnare IP", "Gestire password"], c: 0, f: "Blocca i percorsi ridondanti finché non servono." },
            { q: "Standard IEEE per lo Spanning Tree classico?", a: ["802.1D", "802.1w", "802.1Q", "802.1s"], c: 0, f: "L'originale è 802.1D." },
            { q: "Quale Bridge ID vince?", a: ["Il più basso", "Il più alto", "Il più veloce", "Quello con più porte"], c: 0, f: "Priority bassa = vittoria." },
            { q: "Valore di priorità predefinito?", a: ["32768", "4096", "1", "65535"], c: 0, f: "Tutti gli switch Cisco partono con 32768." },
            { q: "In quale stato STP la porta impara i MAC ma non inoltra dati?", a: ["Learning", "Listening", "Forwarding", "Blocking"], c: 0, f: "Stato intermedio prima del Forwarding." },
            { q: "RSTP (Rapid STP) ha lo standard:", a: ["802.1w", "802.1D", "802.1s", "802.1Q"], c: 0, f: "Molto più veloce nella convergenza." },
            { q: "PortFast si applica a:", a: ["Porte collegate a host (PC)", "Trunk tra switch", "Solo router", "Server DHCP"], c: 0, f: "Evita i 30 secondi di attesa STP per i dispositivi finali." },
            { q: "BPDU Guard spegne la porta se:", a: ["Riceve un BPDU", "Cade il link", "L'host si spegne", "C'è traffico"], c: 0, f: "Protegge le porte PortFast da switch abusivi." },
            { q: "Costo STP di un link 100 Mbps?", a: ["19", "4", "100", "2"], c: 0, f: "I costi standard sono: 10M=100, 100M=19, 1G=4." },
            { q: "Il Root Bridge ha tutte le porte in stato:", a: ["Designated", "Root", "Blocking", "Disabled"], c: 0, f: "Il Root Bridge non ha Root Port, tutte inoltrano." },
            { q: "Alternate Port in RSTP è:", a: ["Un backup della Root Port", "Una porta rotta", "Un trunk", "La porta principale"], c: 0, f: "Sostituisce subito la Root Port se cade il link principale." },
            { q: "Timer 'Forward Delay' dura di default:", a: ["15 secondi", "2 secondi", "20 secondi", "50 secondi"], c: 0, f: "Usato negli stati Listening e Learning." },
            { q: "PVST+ (Cisco) permette di:", a: ["Avere un'istanza STP per ogni VLAN", "Velocizzare il trunk", "Criptare BPDU", "Spegnere STP"], c: 0, f: "Ottimizza il traffico usando percorsi diversi per VLAN diverse." },
            { q: "Root Guard serve a:", a: ["Impedire che uno switch diventi Root su quella porta", "Proteggere il router", "Velocizzare STP", "Bloccare i PC"], c: 0, f: "Mette la porta in root-inconsistent se riceve BPDU superiori." },
            { q: "Qual è il Bridge ID tie-breaker se le priorità sono uguali?", a: ["MAC Address più basso", "IP più alto", "Numero seriale", "Velocità porte"], c: 0, f: "Se la priorità è pari, vince chi ha il MAC address più piccolo." }
        ]
    }
};
