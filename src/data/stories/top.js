// top row: q w e r t y u i o p space
// Word pool: port, pour, power, poetry, wrote, write, writer, tower, type, quiet,
//            outer, wispy, owt, riot, two, were, rip, trip, wire, writ, prow, tow,
//            row, tip, wit, rye, ore, per, tie, tire, top, tour, pure, rope, ripe,
//            wipe, pipe, equip, pewter, utter, repertoire, tripe, erupt, fruit - no 'a'

const top = [
  "power port wrote type; quiet tower wire; two wispy owls rip; a writer wore poetry; outer riot tour; write per row; pure trip wire tower; top port power; rye rope tie; port quiet wrote two",
  "tower type wrote port; quiet writer power; two outer rip wire; wispy owls trip tour; riot wrote poetry; pure row top per; rye tie rope port; power tower quiet; write two owls; port wrote type wire",
  "wrote quiet port power; two tower type wire; wispy writer trip; outer owls riot rip; poetry tour pure; row top rye per; tie rope port wrote; quiet power two tower; type wire write; port owls trip",
  "quiet tower wrote two; port power type wire; writer trip outer; wispy riot owls rip; poetry tour row; pure top rye per; rope tie port power; tower wrote quiet type; two wire write trip; owls port riot",
  "power wrote type two; quiet port tower wire; trip outer writer; wispy owls rip riot; tour poetry pure row; top rye per rope; tie port quiet wrote; power tower type two; wire write trip port; owls riot tour",
  "type port power wrote; tower quiet two wire; outer trip writer wispy; owls riot rip tour; poetry row pure top; rye per rope tie; port wrote power type; quiet tower two wire; trip writer outer; owls rip riot",
  "two quiet tower port; wrote power type wire; writer outer trip wispy; riot owls rip tour; pure poetry row top; per rye rope tie; power port wrote type; tower quiet two wire; outer writer trip; riot owls tour",
  "port tower power wrote; type quiet two wire; trip writer outer; wispy owls riot rip; tour pure poetry row; top per rye rope; tie port tower power; wrote type quiet two; wire trip writer; outer owls riot",
  "wrote port tower quiet; power type two wire; outer trip writer wispy; riot rip owls tour; row pure poetry top; rye per rope tie; port wrote tower quiet; power type wire two; writer trip outer; riot owls rip",
  "quiet wrote port tower; type power wire two; writer trip outer wispy; owls riot rip tour; poetry row pure per; top rye rope tie; tower quiet wrote port; type power two wire; trip writer outer; owls riot tour",
  "tower wrote quiet type; port power two wire; outer writer trip wispy; riot owls tour rip; pure row poetry top; per rye rope tie; wrote tower quiet type; port power wire two; trip outer writer; riot owls tour",
  "power tower wrote port; quiet type two wire; trip outer writer wispy; owls rip riot tour; row pure poetry top; rye per rope tie; tower power wrote port; quiet type wire two; outer trip writer; owls riot rip",
  "type tower quiet wrote; port power wire two; writer trip outer wispy; riot owls tour rip; poetry pure row top; per rye rope tie; quiet type tower wrote; port wire power two; trip writer outer; riot tour owls",
  "two tower quiet wrote; type port power wire; outer trip writer wispy; owls riot rip tour; row poetry pure top; rye per tie rope; tower two quiet wrote; type port wire power; trip outer writer; riot owls rip",
  "wrote quiet type tower; port two power wire; trip writer outer wispy; riot owls tour rip; pure poetry row top; per rye rope tie; quiet wrote type tower; port two wire power; writer trip outer; riot tour owls",
  "port wrote quiet tower; power type wire two; outer writer trip wispy; owls rip riot tour; row pure poetry per; top rye rope tie; wrote port quiet tower; power type two wire; trip outer writer; owls riot rip",
  "tower port wrote quiet; type power wire two; writer outer trip wispy; riot owls rip tour; poetry pure row top; rye per rope tie; port tower wrote quiet; type power two wire; outer writer trip; riot owls tour",
  "quiet port tower wrote; power type two wire; trip writer outer wispy; owls riot tour rip; pure poetry per row; top rye rope tie; port quiet tower wrote; power type wire two; writer trip outer; riot owls rip",
  "wrote tower port quiet; type wire power two; outer trip writer wispy; riot rip owls tour; row poetry pure top; per rye tie rope; tower wrote port quiet; type wire two power; trip outer writer; riot owls tour",
  "power wrote quiet port; tower type wire two; writer trip outer wispy; owls riot rip tour; poetry pure row per; top rye rope tie; wrote power quiet port; tower type two wire; trip writer outer; owls riot tour",
  "type wrote tower port; quiet power wire two; outer writer trip wispy; riot owls tour rip; pure row poetry top; rye per rope tie; wrote type tower port; quiet power two wire; writer outer trip; riot owls rip",
  "two wrote tower port; type quiet power wire; trip outer writer wispy; owls riot rip tour; row pure poetry per; top rye rope tie; wrote two tower port; type quiet wire power; outer trip writer; riot owls tour",
  "tower quiet wrote type; port power two wire; writer trip outer wispy; riot owls rip tour; poetry row pure top; per rye rope tie; quiet tower wrote type; port power wire two; trip writer outer; riot owls tour",
  "port type tower wrote; quiet power wire two; outer writer trip wispy; owls riot tour rip; pure poetry row top; rye per rope tie; type port tower wrote; quiet power two wire; writer outer trip; owls riot rip",
];

export default top;
