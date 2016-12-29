import { IRssChannels } from '../models/index';
import { OpaqueToken } from '@angular/core';

/**
 * Configuration for RSS Channel List
 */

export const RSS_CHANNEL_LIST: IRssChannels = {
    channels: [{ //Anunturi de achizitie bunuri si servicii
        tag: "ACHIZITIE_ANAF",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Anaf - RSS",
        link: "https://www.anaf.ro/ANAFRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_BUCURESTI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Bucuresti - RSS",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_IASI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Iasi - RSS",
        link: "https://www.anaf.ro/IasiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_GALATI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Galati - RSS",
        link: "https://www.anaf.ro/GalatiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_PLOIESTI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Ploiesti - RSS",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_CRAIOVA",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Craiova - RSS",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_TIMISOARA",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Timisoara - RSS",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_CLUJ",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Cluj - RSS",
        link: "https://www.anaf.ro/ClujRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_BRASOV",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Brasov - RSS",
        link: "https://www.anaf.ro/BrasovRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    //Acte administrative fiscale
    {
        tag: "ACTE_ANAF",
        title: "Acte administrative fiscale",
        description: "Anaf - RSS",
        link: "https://www.anaf.ro/ANAFRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_BUCURESTI",
        title: "Acte administrative fiscale",
        description: "Bucuresti - RSS",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_IASI",
        title: "Acte administrative fiscale",
        description: "Iasi - RSS",
        link: "https://www.anaf.ro/IasiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_GALATI",
        title: "Acte administrative fiscale",
        description: "Galati - RSS",
        link: "https://www.anaf.ro/GalatiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_PLOIESTI",
        title: "Acte administrative fiscale",
        description: "Ploiesti - RSS",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_CRAIOVA",
        title: "Acte administrative fiscale",
        description: "Craiova - RSS",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_TIMISOARA",
        title: "Acte administrative fiscale",
        description: "Timisoara - RSS",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_CLUJ",
        title: "Acte administrative fiscale",
        description: "Cluj - RSS",
        link: "https://www.anaf.ro/ClujRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACTE_BRASOV",
        title: "Acte administrative fiscale",
        description: "Brasov - RSS",
        link: "https://www.anaf.ro/BrasovRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Achizitie de bunuri si servicii"
        }
    },
    //Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri
    {
        tag: "CONCURSURI_ANAF",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Anaf - RSS",
        link: "https://www.anaf.ro/ANAFRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_BUCURESTI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Bucuresti - RSS",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_IASI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Iasi - RSS",
        link: "https://www.anaf.ro/IasiRSS/?canal=cursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_GALATI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Galati - RSS",
        link: "https://www.anaf.ro/GalatiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_PLOIESTI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Ploiesti - RSS",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_CRAIOVA",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Craiova - RSS",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_TIMISOARA",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Timisoara - RSS",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_CLUJ",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Cluj - RSS",
        link: "https://www.anaf.ro/ClujRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_BRASOV",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Brasov - RSS",
        link: "https://www.anaf.ro/BrasovRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    //Anunturi de interes general
    {
        tag: "INTERESGEN_ANAF",
        title: "Anunturi de interes general",
        description: "Anaf - RSS",
        link: "https://www.anaf.ro/ANAFRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_BUCURESTI",
        title: "Anunturi de interes general",
        description: "Bucuresti - RSS",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_IASI",
        title: "Anunturi de interes general",
        description: "Iasi - RSS",
        link: "https://www.anaf.ro/IasiRSS/?canal=cursuri",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_GALATI",
        title: "Anunturi de interes general",
        description: "Galati - RSS",
        link: "https://www.anaf.ro/GalatiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_PLOIESTI",
        title: "Anunturi de interes general",
        description: "Ploiesti - RSS",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_CRAIOVA",
        title: "Anunturi de interes general",
        description: "Craiova - RSS",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_TIMISOARA",
        title: "Anunturi de interes general",
        description: "Timisoara - RSS",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_CLUJ",
        title: "Anunturi de interes general",
        description: "Cluj - RSS",
        link: "https://www.anaf.ro/ClujRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_BRASOV",
        title: "Anunturi de interes general",
        description: "Brasov - RSS",
        link: "https://www.anaf.ro/BrasovRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    ]
}


export const RSS_CHANNEL_LIST_TOKEN = new OpaqueToken('rss_channel_list');