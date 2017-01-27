import { RssChannels } from '../models/index';
import { OpaqueToken } from '@angular/core';

export interface IConfig {
  logLevel: string;
  url: string;
}

export const Config : IConfig = {
  logLevel: 'DEBUG',
  url: 'http://localhost:8100/api'
  //url: 'https://anaf.ro'
}

export const CONFIG_TOKEN = new OpaqueToken('config_mobile');
/**
 * Configuration for RSS Channel List
 */


export const RSS_CHANNEL_LIST: RssChannels = {
    channels: [{ //Anunturi de achizitie bunuri si servicii
        tag: "ACHIZITIE_ANAF",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Anaf",
        link: "/ANAFRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii",
        }
    },
    {
        tag: "ACHIZITIE_BUCURESTI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_IASI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Iasi",
        link: "/IasiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_GALATI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Galati",
        link: "/GalatiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_PLOIESTI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_CRAIOVA",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_TIMISOARA",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_CLUJ",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Cluj",
        link: "/ClujRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_BRASOV",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Brasov",
        link: "/BrasovRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    //Acte administrative fiscale
    {
        tag: "ACTE_ANAF",
        title: "Acte administrative fiscale",
        description: "Anaf",
        link: "/ANAFRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_BUCURESTI",
        title: "Acte administrative fiscale",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_IASI",
        title: "Acte administrative fiscale",
        description: "Iasi",
        link: "/IasiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_GALATI",
        title: "Acte administrative fiscale",
        description: "Galati",
        link: "/GalatiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_PLOIESTI",
        title: "Acte administrative fiscale",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_CRAIOVA",
        title: "Acte administrative fiscale",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_TIMISOARA",
        title: "Acte administrative fiscale",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_CLUJ",
        title: "Acte administrative fiscale",
        description: "Cluj",
        link: "/ClujRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_BRASOV",
        title: "Acte administrative fiscale",
        description: "Brasov",
        link: "/BrasovRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    //Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri
    {
        tag: "CONCURSURI_ANAF",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Anaf",
        link: "/ANAFRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_BUCURESTI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_IASI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Iasi",
        link: "/IasiRSS/?canal=cursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_GALATI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Galati",
        link: "/GalatiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_PLOIESTI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_CRAIOVA",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_TIMISOARA",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_CLUJ",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Cluj",
        link: "/ClujRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_BRASOV",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Brasov",
        link: "/BrasovRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    //Anunturi de interes general
    {
        tag: "INTERESGEN_ANAF",
        title: "Anunturi de interes general",
        description: "Anaf",
        link: "/ANAFRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_BUCURESTI",
        title: "Anunturi de interes general",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_IASI",
        title: "Anunturi de interes general",
        description: "Iasi",
        link: "/IasiRSS/?canal=cursuri",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_GALATI",
        title: "Anunturi de interes general",
        description: "Galati",
        link: "/GalatiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_PLOIESTI",
        title: "Anunturi de interes general",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_CRAIOVA",
        title: "Anunturi de interes general",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_TIMISOARA",
        title: "Anunturi de interes general",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_CLUJ",
        title: "Anunturi de interes general",
        description: "Cluj",
        link: "/ClujRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_BRASOV",
        title: "Anunturi de interes general",
        description: "Brasov",
        link: "/BrasovRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    //Calendar obligatii fiscale
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_IAN",
        title: "Calendar obligatii fiscale",
        description: "Calendar obligatii fiscale",
        link: "/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    // { TODO: to be used when we will have different RSS feeds for each month
    //     tag: "CALENDAR_OBLIGATII_FISCALE_FEB",
    //     title: "Calendar obligatii fiscale",
    //     description: "Februarie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_MAR",
    //     title: "Calendar obligatii fiscale",
    //     description: "Martie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_APR",
    //     title: "Calendar obligatii fiscale",
    //     description: "Aprilie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_MAI",
    //     title: "Calendar obligatii fiscale",
    //     description: "Mai",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_IUN",
    //     title: "Calendar obligatii fiscale",
    //     description: "Iunie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_IUL",
    //     title: "Calendar obligatii fiscale",
    //     description: "Iulie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_AUG",
    //     title: "Calendar obligatii fiscale",
    //     description: "August",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_SEP",
    //     title: "Calendar obligatii fiscale",
    //     description: "Septembrie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_OCT",
    //     title: "Calendar obligatii fiscale",
    //     description: "Octombrie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_NOV",
    //     title: "Calendar obligatii fiscale",
    //     description: "Noiembrie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    // {
    //     tag: "CALENDAR_OBLIGATII_FISCALE_DEC",
    //     title: "Calendar obligatii fiscale",
    //     description: "Decembrie",
    //     link: "/ANAFRSS/?canal=calendar",
    //     channelGroup: {
    //         name: "OBLIGATII_FISCALE",
    //         description: "Calendar obligatii fiscale"
    //     }
    // },
    { //Comunicate de presa
        tag: "COMUNICATE_PRESA_ANAF",
        title: "Comunicate de presa",
        description: "Anaf",
        link: "/ANAFRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_BUCURESTI",
        title: "Comunicate de presa",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_IASI",
        title: "Comunicate de presa",
        description: "Iasi",
        link: "/IasiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_GALATI",
        title: "Comunicate de presa",
        description: "Galati",
        link: "/GalatiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_PLOIESTI",
        title: "Comunicate de presa",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_CRAIOVA",
        title: "Comunicate de presa",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_TIMISOARA",
        title: "Comunicate de presa",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_CLUJ",
        title: "Comunicate de presa",
        description: "Cluj",
        link: "/ClujRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_BRASOV",
        title: "Comunicate de presa",
        description: "Brasov",
        link: "/BrasovRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    { //Noutati legislative
        tag: "NOUTATI_LEGISLATIVE",
        title: "Noutati legislative",
        description: "Noutati legislative",
        link: "/ANAFRSS/?canal=legislatie",
        channelGroup: {
            name: "NOUTATI_LEGISLATIVE",
            description: "Noutati legislative"
        }
    },
    { //Valorificare bunuri
        tag: "BUNURI_STAT_ANAF",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Anaf",
        link: "/ANAFRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_BUCURESTI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_IASI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Iasi",
        link: "/IasiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_GALATI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Galati",
        link: "/GalatiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_PLOIESTI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_CRAIOVA",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_TIMISOARA",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_CLUJ",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Cluj",
        link: "/ClujRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_BRASOV",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Brasov",
        link: "/BrasovRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { //Valorificare prin licitatie a bunurilor sechestrate
        tag: "BUNURI_SECHESTRATE_ANAF",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Anaf",
        link: "/ANAFRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_BUCURESTI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_IASI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Iasi",
        link: "/IasiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_GALATI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Galati",
        link: "/GalatiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_PLOIESTI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_CRAIOVA",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_TIMISOARA",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_CLUJ",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Cluj",
        link: "/ClujRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_BRASOV",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Brasov",
        link: "/BrasovRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
     { //Valorificare prin vanzare directa a bunurilor sechestrate
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_ANAF",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Anaf",
        link: "/ANAFRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_BUCURESTI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Bucuresti",
        link: "/BucurestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_IASI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Iasi",
        link: "/IasiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_GALATI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Galati",
        link: "/GalatiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_PLOIESTI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Ploiesti",
        link: "/PloiestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_CRAIOVA",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Craiova",
        link: "/CraiovaRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_TIMISOARA",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Timisoara",
        link: "/TimisoaraRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_CLUJ",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Cluj",
        link: "/ClujRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_BRASOV",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Brasov",
        link: "/BrasovRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    ]

}


export const RSS_CHANNEL_LIST_TOKEN = new OpaqueToken('rss_channel_list');