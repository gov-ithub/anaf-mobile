import { RssChannels } from '../models/index';
import { OpaqueToken } from '@angular/core';

/**
 * Configuration for RSS Channel List
 */


export const RSS_CHANNEL_LIST: RssChannels = {
    channels: [{ //Anunturi de achizitie bunuri si servicii
        tag: "ACHIZITIE_ANAF",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii",
        }
    },
    {
        tag: "ACHIZITIE_BUCURESTI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_IASI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_GALATI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_PLOIESTI",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_CRAIOVA",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_TIMISOARA",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_CLUJ",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=achizBS",
        channelGroup: {
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    },
    {
        tag: "ACHIZITIE_BRASOV",
        title: "Anunturi de achizitie bunuri si servicii",
        description: "Brasov",
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
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_BUCURESTI",
        title: "Acte administrative fiscale",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_IASI",
        title: "Acte administrative fiscale",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_GALATI",
        title: "Acte administrative fiscale",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_PLOIESTI",
        title: "Acte administrative fiscale",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_CRAIOVA",
        title: "Acte administrative fiscale",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_TIMISOARA",
        title: "Acte administrative fiscale",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_CLUJ",
        title: "Acte administrative fiscale",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=acteadministrative",
        channelGroup: {
            name: "ACTE",
            description: "Acte administrative fiscale"
        }
    },
    {
        tag: "ACTE_BRASOV",
        title: "Acte administrative fiscale",
        description: "Brasov",
        link: "https://www.anaf.ro/BrasovRSS/?canal=acteadministrative",
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
        link: "https://www.anaf.ro/ANAFRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_BUCURESTI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_IASI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=cursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_GALATI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_PLOIESTI",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_CRAIOVA",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_TIMISOARA",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_CLUJ",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=concursuri",
        channelGroup: {
            name: "CONCURSURI",
            description: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri"
        }
    },
    {
        tag: "CONCURSURI_BRASOV",
        title: "Executari silite cu dare in plata, Loteria Bonurilor Fiscale, Angajari/Concursuri",
        description: "Brasov",
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
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_BUCURESTI",
        title: "Anunturi de interes general",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_IASI",
        title: "Anunturi de interes general",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=cursuri",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_GALATI",
        title: "Anunturi de interes general",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_PLOIESTI",
        title: "Anunturi de interes general",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_CRAIOVA",
        title: "Anunturi de interes general",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_TIMISOARA",
        title: "Anunturi de interes general",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_CLUJ",
        title: "Anunturi de interes general",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    {
        tag: "INTERESGEN_BRASOV",
        title: "Anunturi de interes general",
        description: "Brasov",
        link: "https://www.anaf.ro/BrasovRSS/?canal=interesgen",
        channelGroup: {
            name: "INTERESGEN",
            description: "Anunturi de interes general"
        }
    },
    //Calendar obligatii fiscale
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_IAN",
        title: "Calendar obligatii fiscale",
        description: "Ianuarie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_FEB",
        title: "Calendar obligatii fiscale",
        description: "Februarie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_MAR",
        title: "Calendar obligatii fiscale",
        description: "Martie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_APR",
        title: "Calendar obligatii fiscale",
        description: "Aprilie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_MAI",
        title: "Calendar obligatii fiscale",
        description: "Mai",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_IUN",
        title: "Calendar obligatii fiscale",
        description: "Iunie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_IUL",
        title: "Calendar obligatii fiscale",
        description: "Iulie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_AUG",
        title: "Calendar obligatii fiscale",
        description: "August",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_SEP",
        title: "Calendar obligatii fiscale",
        description: "Septembrie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_OCT",
        title: "Calendar obligatii fiscale",
        description: "Octombrie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_NOV",
        title: "Calendar obligatii fiscale",
        description: "Noiembrie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    {
        tag: "CALENDAR_OBLIGATII_FISCALE_DEC",
        title: "Calendar obligatii fiscale",
        description: "Decembrie",
        link: "https://www.anaf.ro/ANAFRSS/?canal=calendar",
        channelGroup: {
            name: "OBLIGATII_FISCALE",
            description: "Calendar obligatii fiscale"
        }
    },
    { //Comunicate de presa
        tag: "COMUNICATE_PRESA_ANAF",
        title: "Comunicate de presa",
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_BUCURESTI",
        title: "Comunicate de presa",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_IASI",
        title: "Comunicate de presa",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_GALATI",
        title: "Comunicate de presa",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_PLOIESTI",
        title: "Comunicate de presa",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_CRAIOVA",
        title: "Comunicate de presa",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_TIMISOARA",
        title: "Comunicate de presa",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_CLUJ",
        title: "Comunicate de presa",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    {
        tag: "COMUNICATE_PRESA_BRASOV",
        title: "Comunicate de presa",
        description: "Brasov",
        link: "https://www.anaf.ro/BrasovRSS/?canal=comunicate",
        channelGroup: {
            name: "COMUNICATE_PRESA",
            description: "Comunicate de presa"
        }
    },
    { //Noutati legislative
        tag: "NOUTATI_LEGISLATIVE",
        title: "Noutati legislative",
        description: "Noutati legislative",
        link: "https://www.anaf.ro/ANAFRSS/?canal=legislatie",
        channelGroup: {
            name: "NOUTATI_LEGISLATIVE",
            description: "Noutati legislative"
        }
    },
    { //Valorificare bunuri
        tag: "BUNURI_STAT_ANAF",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_BUCURESTI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_IASI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_GALATI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_PLOIESTI",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_CRAIOVA",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_TIMISOARA",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_CLUJ",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { 
        tag: "BUNURI_STAT_BRASOV",
        title: "Valorificare bunuri din proprietatea privata a statutului",
        description: "Brasov",
        link: "https://www.anaf.ro/BrasovRSS/?canal=valorifbunPPS",
        channelGroup: {
            name: "BUNURI_STAT",
            description: "Valorificare bunuri din proprietatea privata a statutului"
        }
    },
    { //Valorificare prin licitatie a bunurilor sechestrate
        tag: "BUNURI_SECHESTRATE_ANAF",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_BUCURESTI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_IASI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_GALATI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_PLOIESTI",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_CRAIOVA",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_TIMISOARA",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_CLUJ",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_BRASOV",
        title: "Valorificare prin licitatie a bunurilor sechestrate",
        description: "Brasov",
        link: "https://www.anaf.ro/BrasovRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE",
            description: "Valorificare prin licitatie a bunurilor sechestrate"
        }
    },
     { //Valorificare prin vanzare directa a bunurilor sechestrate
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_ANAF",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Anaf",
        link: "https://www.anaf.ro/ANAFRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_BUCURESTI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Bucuresti",
        link: "https://www.anaf.ro/BucurestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_IASI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Iasi",
        link: "https://www.anaf.ro/IasiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_GALATI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Galati",
        link: "https://www.anaf.ro/GalatiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_PLOIESTI",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Ploiesti",
        link: "https://www.anaf.ro/PloiestiRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_CRAIOVA",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Craiova",
        link: "https://www.anaf.ro/CraiovaRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_TIMISOARA",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Timisoara",
        link: "https://www.anaf.ro/TimisoaraRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_CLUJ",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Cluj",
        link: "https://www.anaf.ro/ClujRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    { 
        tag: "BUNURI_SECHESTRATE_VANZARE_DIRECTA_BRASOV",
        title: "Valorificare prin vanzare directa a bunurilor sechestrate",
        description: "Brasov",
        link: "https://www.anaf.ro/BrasovRSS/?canal=valoriflicitaBS",
        channelGroup: {
            name: "BUNURI_SECHESTRATE_VANZARE_DIRECTA",
            description: "Valorificare prin vanzare directa a bunurilor sechestrate"
        }
    },
    ]

}


export const RSS_CHANNEL_LIST_TOKEN = new OpaqueToken('rss_channel_list');