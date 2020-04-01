# Instrukcija
## Programos paleidimas

1. Isiinstaliuokit Nodel.js LTS => https://nodejs.org/en/download/ (Lygtais praeita karta susiintallinom, bet pasitikrinkit ar v12.16.1)
2. Pasitikrinkit ar turit expo komanda " expo --version ", jei nera " npm install expo-cli --global ".
3. Pasiclonuokit sita repositorija.
4. Atsisiuskit Github desktop ir githubash per cia galesit commitinti i sia repositorija. 
5. Atsidarysit projekta VS code ir per terminala nueisite iki direktorijos kur yra projektas ir is ten kviesit "expo start --tunnel"
   Jei nepaleisit per tunnel gali per LAN porta mesti errora. (Kraus ilgai per tunnel)
6. Siame zingsnyje turetu mesti klaida, kad truksta "node_modules", reiktu tada kviesti "npm install" suinstallins folderi su bibliotekom.
7. Tada QR koda su expo appsu telefone nusiskaitykite, turetu uzkrauti ir viskas veikti
8. Gali mesti regular expression klaida, tai tektu eiti i folderi VSCODE => \node_modules\metro-config\src\defaults\blacklist.js
   blacklist.js pakeisti
   sita:
   var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

i sita:
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

### Stengiausi uzsaugoti viska, bet gali buti, kad praleidau sita failiuka po keletos bandymu ikelti projekta

https://github.com/HumanExposure/factotum/wiki/Git-Branch-Strategy <= Labai svarbu jeigu kazka pakeisit tai kita brancha butinai kurkit nedekit i masteri.
