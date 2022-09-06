import { Kapitel } from "./kapitel";

export const Kapiteln: Kapitel[] = [
   {
    id: 1,
    name: "Einführung und Motivation",
    bild: "assets/bilds/bild1.png",
    anzahl_Seite: 62,
    teil_Kapitel: [" Die Themen im Zusammenhang", "Wissensrepr ̈asentation",  "Inferenz", "Unsicheres Wissen", "Wissensbasierte Systeme", "Subjektives Wissen"]
   },
   
   {
    id: 2,
    name: "Klassische und regelbasierteWissensrepr ̈asentation",
    bild: "assets/bilds/bild2.png",
    anzahl_Seite: 183,
    teil_Kapitel: [" Grundlagen und Grenzen der klassischen Logik","Knowledge Engineering und Ontologien","Beschreibungslogiken","Frames und Vererbungsnetze (Inheritance Networks)", "Regelbasierte Wissensverarbeitung"]
   },
   
   {
    id: 3,
    name: "Qualitative Unsicherheit –Default-Logiken",
    bild: "assets/bilds/bild3.png",
    anzahl_Seite: 200,
    teil_Kapitel: [" Default-Logiken nach Reiter und Poole","Inferenzrelationen f ̈ur Default-Logiken","Answer Set Programming (Antwortmengenprogrammierung)","Basiseigenschaften nichtklassischer Inferenzsysteme"]
   },
   
   
   {
    id: 4,
    name: "Quantitative Unsicherheit –Wahrscheinlichkeiten & Co.",
    bild: "assets/bilds/bild4.png",
    anzahl_Seite: 265,
    teil_Kapitel: [" Wahrscheinlichkeiten und probabilistische Netzwerke", "Dempster-Shafer/Evidenz-Theorie","Fuzzy-Logik"]
   },
   
   {
    id: 5,
    name: "Wissenserwerb undWissensentdeckung",
    bild: "assets/bilds/bild5.png",
    anzahl_Seite: 160,
    teil_Kapitel: ["Einführung","Clustering","Entscheidungsbäume","Assoziationsregeln","Konzeptlernen"]
   },
   
   {
    id: 6,
    name: "Aktionen, Planen und Agenten",
    bild: "assets/bilds/bild6.png",
    anzahl_Seite: 112,
    teil_Kapitel: ["Aktionen","Planen","Agenten"]
   },
   {
    id: 7,
    name: "Wissensrevision (Belief Revision)",
    bild: "assets/bilds/bild7.png",
    anzahl_Seite: 85,
    teil_Kapitel: ["Einfuürung","AGM-Theorie","Konstruktive Revisionsmethoden","Wissensrevision und nichtmonotone Logiken"]
   },
]