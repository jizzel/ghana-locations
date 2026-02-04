import { RegionName } from "./regions";

export const citiesByRegion: Record<RegionName, string[]> = {
  [RegionName.GreaterAccra]: [
    "Accra", "Tema", "Madina", "Ashiaman", "Adenta", "Teshie", "Nungua", "Abokobi", "Dodowa", "Prampram", "Ada Foah", "Kpone"
  ],
  [RegionName.Ashanti]: [
    "Kumasi", "Obuasi", "Mampong", "Konongo", "Ejura", "Bekwai", "Agogo", "Juaso", "Tepa", "Effiduase", "Ejisu", "Offinso"
  ],
  [RegionName.Western]: [
    "Sekondi-Takoradi", "Tarkwa", "Axim", "Elubo", "Agona Nkwanta", "Dixcove", "Shama", "Prestea", "Half Assini"
  ],
  [RegionName.WesternNorth]: [
    "Sefwi Wiawso", "Bibiani", "Enchi", "Dadieso", "Juaboso", "Bodi", "Akontombra"
  ],
  [RegionName.Central]: [
    "Cape Coast", "Winneba", "Kasoa", "Mankessim", "Saltpond", "Elmina", "Apam", "Agona Swedru", "Dunkwa-on-Offin", "Assin Fosu"
  ],
  [RegionName.Eastern]: [
    "Koforidua", "Nkawkaw", "Nsawam", "Akim Oda", "Asamankese", "Mpraeso", "Somanya", "Kibi", "Begoro", "Aburi", "Suhum"
  ],
  [RegionName.Volta]: [
    "Ho", "Hohoe", "Keta", "Aflao", "Anloga", "Akatsi", "Sogakope", "Kpando", "Dzodze"
  ],
  [RegionName.Oti]: [
    "Dambai", "Jasikan", "Kadjebi", "Nkwanta", "Chinderi", "Krachi", "Kpetoe"
  ],
  [RegionName.Northern]: [
    "Tamale", "Yendi", "Savelugu", "Bimbilla", "Gushiegu", "Kumbungu", "Wulensi"
  ],
  [RegionName.Savannah]: [
    "Damongo", "Buipe", "Salaga", "Sawla", "Bole", "Daboya"
  ],
  [RegionName.NorthEast]: [
    "Nalerigu", "Gambaga", "Walewale", "Bunkpurugu", "Chereponi", "Yagaba"
  ],
  [RegionName.UpperEast]: [
    "Bolgatanga", "Bawku", "Navrongo", "Paga", "Tongo", "Zuarungu", "Sandema"
  ],
  [RegionName.UpperWest]: [
    "Wa", "Tumu", "Jirapa", "Lambussie", "Lawra", "Nandom", "Gwollu"
  ],
  [RegionName.Bono]: [
    "Sunyani", "Berekum", "Dormaa Ahenkro", "Sampa", "Wenchi", "Drobo"
  ],
  [RegionName.BonoEast]: [
    "Techiman", "Kintampo", "Nkoranza", "Yeji", "Prang", "Atebubu"
  ],
  [RegionName.Ahafo]: [
    "Goaso", "Bechem", "Duayaw Nkwanta", "Kenyasi", "Hwidiem"
  ],
};
