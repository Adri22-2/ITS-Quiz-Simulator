const ccnaData = {
    // 1. LA LISTA DEI QUIZ (L'index creerà i pulsanti leggendo da qui)
    modules: [
        { id: "dhcp", title: "DHCP & DNS", icon: "🔄", status: "Attivo" },
        { id: "ospf", title: "OSPF Routing", icon: "🛣️", status: "Attivo" },
        { id: "vlan", title: "VLAN & Trunking", icon: "🏗️", status: "Attivo" },
        { id: "stp",  title: "Spanning Tree", icon: "🌲", status: "Attivo" },
        { id: "acl",  title: "ACL & Security", icon: "🛡️", status: "In arrivo" }
    ],

    // 2. TUTTE LE DOMANDE DI TUTTI I QUIZ
    questions: {
        dhcp: [
            { q: "Quale porta usa il server DHCP?", a: ["UDP 67", "UDP 68", "TCP 53", "TCP 80"], c: 0, f: "Il server usa UDP 67, il client UDP 68." },
            { q: "Qual è il processo di negoziazione DHCP?", a: ["SYN-ACK", "DORA", "OSPF", "EIGRP"], c: 1, f: "Discover, Offer, Request, Acknowledge." },
            { q: "Comando per escludere IP dal pool DHCP in Cisco?", a: ["exclude ip", "ip dhcp excluded-address", "no dhcp ip", "dhcp block"], c: 1, f: "Va dato in global configuration mode prima di creare il pool." },
            { q: "Qual è l'IP di destinazione di un DHCP Discover?", a: ["255.255.255.255", "192.168.1.1", "0.0.0.0", "L'IP del server"], c: 0, f: "Il client non sa chi è il server, quindi usa un broadcast L3." },
            { q: "Cos'è l'IP helper-address?", a: ["Un IP di backup", "Un relay agent per il broadcast DHCP", "Il DNS", "Un comando per OSPF"], c: 1, f: "Inoltra i broadcast DHCP verso un server in una subnet diversa (unicast)." }
        ],
        ospf: [
            { q: "Quale algoritmo usa OSPF per calcolare i percorsi?", a: ["DUAL", "Bellman-Ford", "Dijkstra (SPF)", "Spanning Tree"], c: 2, f: "OSPF usa l'algoritmo Shortest Path First di Dijkstra." },
            { q: "Qual è la distanza amministrativa (AD) di OSPF?", a: ["90", "110", "120", "1"], c: 1, f: "110 è il valore di default per OSPF in router Cisco." },
            { q: "Come viene scelto il Router ID (RID) in OSPF?", a: ["Highest loopback, highest physical IP", "Lowest IP", "Casuale", "Solo manuale"], c: 0, f: "1: Manuale, 2: Highest Loopback attiva, 3: Highest Physical Interface attiva." },
            { q: "A quale indirizzo multicast manda gli Hello OSPF?", a: ["224.0.0.9", "224.0.0.5", "255.255.255.255", "224.0.0.10"], c: 1, f: "224.0.0.5 per tutti i router OSPF (AllSPFRouters)." },
            { q: "Cosa fa il Designated Router (DR)?", a: ["Spegne la rete", "Centralizza gli LSA nelle reti multi-access", "Calcola i loop", "Assegna IP"], c: 1, f: "Riduce il traffico di routing fungendo da punto centrale per gli update." }
        ],
        vlan: [
            { q: "Qual è la funzione di una VLAN?", a: ["Unire più switch", "Creare domini di broadcast logici", "Velocizzare la RAM", "Sostituire il router"], c: 1, f: "Le VLAN segmentano la rete isolando il traffico broadcast a livello logico." },
            { q: "Quanti byte aggiunge il tag 802.1Q?", a: ["2", "4", "8", "12"], c: 1, f: "Il protocollo 802.1Q aggiunge un campo di 4 byte nell'header Ethernet." },
            { q: "La Native VLAN predefinita Cisco è:", a: ["VLAN 0", "VLAN 1", "VLAN 100", "VLAN 999"], c: 1, f: "Per default, la VLAN 1 è la Native VLAN su tutti i trunk." },
            { q: "Cosa succede ai frame della Native VLAN su un trunk?", a: ["Vengono scartati", "Vengono inviati senza tag", "Vengono criptati", "Vengono duplicati"], c: 1, f: "La Native VLAN è l'unica che attraversa il trunk senza tag 802.1Q." },
            { q: "Cos'è il Router-on-a-Stick?", a: ["Uno switch L3", "Un router con una singola interfaccia divisa in subinterfaces", "Un cavo rotto", "Un attacco"], c: 1, f: "Usa subinterfaces logiche per fare routing inter-VLAN." }
        ],
        stp: [
            { q: "Qual è la funzione principale di STP?", a: ["Routing tra VLAN", "Evitare loop di Layer 2", "Assegnare IP", "Criptare il traffico"], c: 1, f: "STP blocca le porte ridondanti per evitare loop di broadcast." },
            { q: "Quale Bridge ID vince l'elezione per il Root Bridge?", a: ["Il più alto", "Il più basso", "Il più veloce", "Quello con l'IP maggiore"], c: 1, f: "Il Root Bridge è quello con il Bridge ID (Priority + MAC) più basso." },
            { q: "Priorità predefinita di STP Cisco?", a: ["1", "4096", "32768", "65535"], c: 2, f: "La priorità di default è 32768." },
            { q: "Cosa sono i BPDU?", a: ["Pacchetti di routing", "Messaggi usati da STP", "Errori", "Frame utente"], c: 1, f: "Bridge Protocol Data Units sono i messaggi scambiati dagli switch." },
            { q: "Cos'è il PortFast?", a: ["Un protocollo di routing", "Porta la porta subito in Forwarding", "Accelera il trunk", "Un virus"], c: 1, f: "Si usa solo su porte collegate a dispositivi finali (PC) per saltare gli stati STP." }
        ]
    }
};
