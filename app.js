
const CONFIG = {
  "interesse-composto": {
    "title": "Calcolatore interesse composto",
    "fields": [
      [
        "initial",
        "Capitale iniziale (€)",
        10000
      ],
      [
        "contribution",
        "Versamento periodico (€)",
        300
      ],
      [
        "frequency",
        "Frequenza",
        12
      ],
      [
        "rate",
        "Rendimento annuo (%)",
        7
      ],
      [
        "years",
        "Anni",
        20
      ]
    ],
    "category": "Finanza personale"
  },
  "inflazione": {
    "title": "Calcolatore inflazione",
    "fields": [
      [
        "price",
        "Prezzo attuale (€)",
        100
      ],
      [
        "inflation",
        "Inflazione annua (%)",
        2
      ],
      [
        "years",
        "Anni",
        20
      ]
    ],
    "category": "Finanza personale"
  },
  "roi": {
    "title": "Calcolatore ROI",
    "fields": [
      [
        "investment",
        "Investimento iniziale (€)",
        10000
      ],
      [
        "final",
        "Valore finale (€)",
        13000
      ]
    ],
    "category": "Finanza personale"
  },
  "rendimento-reale": {
    "title": "Calcolatore rendimento reale",
    "fields": [
      [
        "nominal",
        "Rendimento nominale annuo (%)",
        7
      ],
      [
        "inflation",
        "Inflazione annua (%)",
        2
      ]
    ],
    "category": "Finanza personale"
  },
  "fire": {
    "title": "Calcolatore FIRE",
    "fields": [
      [
        "expenses",
        "Spese annuali (€)",
        24000
      ],
      [
        "swr",
        "Tasso di prelievo (%)",
        4
      ]
    ],
    "category": "Finanza personale"
  },
  "patrimonio-fire": {
    "title": "Calcolatore patrimonio FIRE",
    "fields": [
      [
        "expenses",
        "Spese annuali (€)",
        24000
      ],
      [
        "swr",
        "Tasso di prelievo (%)",
        4
      ]
    ],
    "category": "Finanza personale"
  },
  "risparmio-mensile": {
    "title": "Calcolatore risparmio mensile",
    "fields": [
      [
        "target",
        "Obiettivo (€)",
        100000
      ],
      [
        "initial",
        "Capitale iniziale (€)",
        10000
      ],
      [
        "rate",
        "Rendimento annuo (%)",
        5
      ],
      [
        "years",
        "Anni",
        10
      ]
    ],
    "category": "Finanza personale"
  },
  "obiettivo-finanziario": {
    "title": "Calcolatore obiettivo finanziario",
    "fields": [
      [
        "initial",
        "Capitale iniziale (€)",
        10000
      ],
      [
        "contribution",
        "Risparmio mensile (€)",
        500
      ],
      [
        "rate",
        "Rendimento annuo (%)",
        5
      ],
      [
        "years",
        "Anni",
        10
      ]
    ],
    "category": "Finanza personale"
  },
  "raddoppio-capitale": {
    "title": "Calcolatore tempo per raddoppiare il capitale",
    "fields": [
      [
        "rate",
        "Rendimento annuo (%)",
        7
      ]
    ],
    "category": "Finanza personale"
  },
  "sconto": {
    "title": "Calcolatore sconto",
    "fields": [
      [
        "price",
        "Prezzo originale (€)",
        100
      ],
      [
        "discount",
        "Sconto (%)",
        20
      ]
    ],
    "category": "Finanza personale"
  },
  "margine": {
    "title": "Calcolatore margine",
    "fields": [
      [
        "revenue",
        "Ricavi (€)",
        10000
      ],
      [
        "cost",
        "Costi (€)",
        7000
      ]
    ],
    "category": "Business e lavoro"
  },
  "markup": {
    "title": "Calcolatore markup",
    "fields": [
      [
        "cost",
        "Costo (€)",
        70
      ],
      [
        "price",
        "Prezzo di vendita (€)",
        100
      ]
    ],
    "category": "Business e lavoro"
  },
  "break-even": {
    "title": "Calcolatore break-even",
    "fields": [
      [
        "fixed",
        "Costi fissi (€)",
        10000
      ],
      [
        "price",
        "Prezzo unitario (€)",
        100
      ],
      [
        "variable",
        "Costo variabile unitario (€)",
        60
      ]
    ],
    "category": "Business e lavoro"
  },
  "cac": {
    "title": "Calcolatore CAC",
    "fields": [
      [
        "marketing",
        "Spesa acquisizione (€)",
        5000
      ],
      [
        "customers",
        "Nuovi clienti",
        100
      ]
    ],
    "category": "Business e lavoro"
  },
  "ltv": {
    "title": "Calcolatore LTV",
    "fields": [
      [
        "arpu",
        "ARPU mensile (€)",
        50
      ],
      [
        "margin",
        "Margine lordo (%)",
        80
      ],
      [
        "churn",
        "Churn mensile (%)",
        5
      ]
    ],
    "category": "Business e lavoro"
  },
  "ltv-cac": {
    "title": "Calcolatore LTV/CAC",
    "fields": [
      [
        "ltv",
        "LTV (€)",
        800
      ],
      [
        "cac",
        "CAC (€)",
        200
      ]
    ],
    "category": "Business e lavoro"
  },
  "churn": {
    "title": "Calcolatore churn rate",
    "fields": [
      [
        "lost",
        "Clienti persi",
        20
      ],
      [
        "start",
        "Clienti a inizio periodo",
        500
      ]
    ],
    "category": "Business e lavoro"
  },
  "mrr": {
    "title": "Calcolatore MRR",
    "fields": [
      [
        "customers",
        "Clienti paganti",
        200
      ],
      [
        "arpu",
        "ARPU mensile (€)",
        50
      ]
    ],
    "category": "Business e lavoro"
  },
  "arr": {
    "title": "Calcolatore ARR",
    "fields": [
      [
        "mrr",
        "MRR (€)",
        10000
      ]
    ],
    "category": "Business e lavoro"
  },
  "runway": {
    "title": "Calcolatore startup runway",
    "fields": [
      [
        "cash",
        "Cassa disponibile (€)",
        100000
      ],
      [
        "burn",
        "Burn mensile (€)",
        10000
      ]
    ],
    "category": "Business e lavoro"
  },
  "ohm": {
    "title": "Calcolatore legge di Ohm",
    "fields": [
      [
        "mode",
        "Calcolare",
        "V"
      ],
      [
        "v",
        "Tensione (V)",
        230
      ],
      [
        "i",
        "Corrente (A)",
        10
      ],
      [
        "r",
        "Resistenza (Ω)",
        23
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "watt-volt-ampere": {
    "title": "Calcolatore Watt Volt Ampere",
    "fields": [
      [
        "mode",
        "Calcolare",
        "P"
      ],
      [
        "p",
        "Potenza (W)",
        2300
      ],
      [
        "v",
        "Tensione (V)",
        230
      ],
      [
        "i",
        "Corrente (A)",
        10
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "potenza-monofase": {
    "title": "Calcolatore potenza monofase",
    "fields": [
      [
        "v",
        "Tensione (V)",
        230
      ],
      [
        "i",
        "Corrente (A)",
        10
      ],
      [
        "pf",
        "Fattore di potenza (cosφ)",
        0.9
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "potenza-trifase": {
    "title": "Calcolatore potenza trifase",
    "fields": [
      [
        "v",
        "Tensione concatenata (V)",
        400
      ],
      [
        "i",
        "Corrente (A)",
        10
      ],
      [
        "pf",
        "Fattore di potenza (cosφ)",
        0.9
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "caduta-tensione": {
    "title": "Calcolatore caduta di tensione",
    "fields": [
      [
        "length",
        "Lunghezza tratta (m)",
        50
      ],
      [
        "current",
        "Corrente (A)",
        10
      ],
      [
        "section",
        "Sezione (mm²)",
        2.5
      ],
      [
        "rho",
        "Resistività (Ω·mm²/m)",
        0.0175
      ],
      [
        "voltage",
        "Tensione (V)",
        230
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "sezione-cavo": {
    "title": "Calcolatore sezione cavo",
    "fields": [
      [
        "length",
        "Lunghezza tratta (m)",
        50
      ],
      [
        "current",
        "Corrente (A)",
        10
      ],
      [
        "rho",
        "Resistività (Ω·mm²/m)",
        0.0175
      ],
      [
        "drop",
        "Caduta ammessa (V)",
        5
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "resistenza-cavo": {
    "title": "Calcolatore resistenza cavo",
    "fields": [
      [
        "length",
        "Lunghezza (m)",
        50
      ],
      [
        "section",
        "Sezione (mm²)",
        2.5
      ],
      [
        "rho",
        "Resistività (Ω·mm²/m)",
        0.0175
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "kw-hp": {
    "title": "Convertitore kW HP",
    "fields": [
      [
        "mode",
        "Convertire",
        "kw"
      ],
      [
        "value",
        "Valore",
        10
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "coppia-potenza-rpm": {
    "title": "Calcolatore coppia potenza RPM",
    "fields": [
      [
        "mode",
        "Calcolare",
        "power"
      ],
      [
        "value1",
        "Potenza (kW)",
        10
      ],
      [
        "value2",
        "Coppia (Nm)",
        100
      ],
      [
        "rpm",
        "Giri/min",
        1500
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "batteria": {
    "title": "Calcolatore dimensionamento batteria",
    "fields": [
      [
        "load",
        "Potenza carico (W)",
        500
      ],
      [
        "hours",
        "Autonomia (h)",
        4
      ],
      [
        "voltage",
        "Tensione batteria (V)",
        12
      ],
      [
        "dod",
        "Profondità di scarica utilizzabile (%)",
        80
      ],
      [
        "eff",
        "Rendimento sistema (%)",
        90
      ]
    ],
    "category": "Elettrico e ingegneria"
  },
  "consumo-elettrico": {
    "title": "Calcolatore consumo elettrico",
    "fields": [
      [
        "power",
        "Potenza (W)",
        1000
      ],
      [
        "hours",
        "Ore/giorno",
        5
      ],
      [
        "days",
        "Giorni/mese",
        30
      ],
      [
        "price",
        "Prezzo energia (€/kWh)",
        0.25
      ]
    ],
    "category": "Casa ed energia"
  },
  "costo-apparecchio": {
    "title": "Calcolatore costo energia apparecchio",
    "fields": [
      [
        "power",
        "Potenza (W)",
        1000
      ],
      [
        "hours",
        "Ore/giorno",
        5
      ],
      [
        "days",
        "Giorni/anno",
        365
      ],
      [
        "price",
        "Prezzo energia (€/kWh)",
        0.25
      ]
    ],
    "category": "Casa ed energia"
  },
  "climatizzatore": {
    "title": "Calcolatore consumo climatizzatore",
    "fields": [
      [
        "power",
        "Potenza elettrica media (W)",
        1200
      ],
      [
        "hours",
        "Ore/giorno",
        6
      ],
      [
        "days",
        "Giorni/mese",
        30
      ],
      [
        "price",
        "Prezzo energia (€/kWh)",
        0.25
      ]
    ],
    "category": "Casa ed energia"
  },
  "boiler": {
    "title": "Calcolatore consumo boiler",
    "fields": [
      [
        "liters",
        "Acqua (L)",
        100
      ],
      [
        "delta",
        "Aumento temperatura (°C)",
        40
      ],
      [
        "eff",
        "Rendimento (%)",
        90
      ],
      [
        "price",
        "Prezzo energia (€/kWh)",
        0.25
      ]
    ],
    "category": "Casa ed energia"
  },
  "riscaldamento": {
    "title": "Calcolatore costo riscaldamento",
    "fields": [
      [
        "energy",
        "Energia consumata (kWh)",
        1500
      ],
      [
        "price",
        "Prezzo energia (€/kWh)",
        0.12
      ]
    ],
    "category": "Casa ed energia"
  },
  "fotovoltaico": {
    "title": "Calcolatore fotovoltaico",
    "fields": [
      [
        "kwp",
        "Potenza impianto (kWp)",
        5
      ],
      [
        "yield",
        "Produzione specifica (kWh/kWp/anno)",
        1200
      ]
    ],
    "category": "Casa ed energia"
  },
  "accumulo-fotovoltaico": {
    "title": "Calcolatore accumulo fotovoltaico",
    "fields": [
      [
        "daily",
        "Consumo giornaliero (kWh)",
        15
      ],
      [
        "autonomy",
        "Autonomia desiderata (giorni)",
        1
      ],
      [
        "usable",
        "Quota utilizzabile batteria (%)",
        90
      ]
    ],
    "category": "Casa ed energia"
  },
  "vernice": {
    "title": "Calcolatore vernice",
    "fields": [
      [
        "area",
        "Superficie (m²)",
        80
      ],
      [
        "coats",
        "Mani di vernice",
        2
      ],
      [
        "coverage",
        "Resa (m²/L)",
        10
      ]
    ],
    "category": "Casa ed energia"
  },
  "piastrelle": {
    "title": "Calcolatore piastrelle",
    "fields": [
      [
        "area",
        "Superficie (m²)",
        20
      ],
      [
        "length",
        "Lato piastrella (cm)",
        60
      ],
      [
        "width",
        "Larghezza piastrella (cm)",
        60
      ],
      [
        "waste",
        "Sfrido (%)",
        10
      ]
    ],
    "category": "Casa ed energia"
  },
  "cemento": {
    "title": "Calcolatore volume cemento",
    "fields": [
      [
        "length",
        "Lunghezza (m)",
        5
      ],
      [
        "width",
        "Larghezza (m)",
        3
      ],
      [
        "height",
        "Spessore (cm)",
        10
      ]
    ],
    "category": "Casa ed energia"
  },
  "percentuale": {
    "title": "Calcolatore percentuale",
    "fields": [
      [
        "value",
        "Numero",
        250
      ],
      [
        "percent",
        "Percentuale (%)",
        15
      ]
    ],
    "category": "Matematica e utility"
  },
  "aumento-percentuale": {
    "title": "Calcolatore aumento percentuale",
    "fields": [
      [
        "initial",
        "Valore iniziale",
        100
      ],
      [
        "final",
        "Valore finale",
        125
      ]
    ],
    "category": "Matematica e utility"
  },
  "perdita-percentuale": {
    "title": "Calcolatore perdita percentuale",
    "fields": [
      [
        "initial",
        "Valore iniziale",
        100
      ],
      [
        "final",
        "Valore finale",
        75
      ]
    ],
    "category": "Matematica e utility"
  },
  "media": {
    "title": "Calcolatore media",
    "fields": [
      [
        "values",
        "Numeri separati da virgola",
        "10,20,30,40,50"
      ]
    ],
    "category": "Matematica e utility"
  },
  "media-ponderata": {
    "title": "Calcolatore media ponderata",
    "fields": [
      [
        "values",
        "Valori separati da virgola",
        "10,20,30"
      ],
      [
        "weights",
        "Pesi separati da virgola",
        "1,2,3"
      ]
    ],
    "category": "Matematica e utility"
  },
  "proporzioni": {
    "title": "Calcolatore proporzioni",
    "fields": [
      [
        "a",
        "A",
        2
      ],
      [
        "b",
        "B",
        3
      ],
      [
        "c",
        "C",
        10
      ]
    ],
    "category": "Matematica e utility"
  },
  "differenza-date": {
    "title": "Calcolatore differenza tra date",
    "fields": [
      [
        "start",
        "Data iniziale",
        "2026-01-01"
      ],
      [
        "end",
        "Data finale",
        "2026-08-17"
      ]
    ],
    "category": "Matematica e utility"
  },
  "data-futura": {
    "title": "Calcolatore data futura",
    "fields": [
      [
        "start",
        "Data di partenza",
        "2026-08-17"
      ],
      [
        "days",
        "Giorni da aggiungere",
        100
      ]
    ],
    "category": "Matematica e utility"
  },
  "minuti-ore": {
    "title": "Convertitore minuti ore",
    "fields": [
      [
        "mode",
        "Convertire",
        "min-to-hm"
      ],
      [
        "value",
        "Valore",
        125
      ]
    ],
    "category": "Matematica e utility"
  },
  "giorni-settimane": {
    "title": "Convertitore giorni settimane",
    "fields": [
      [
        "mode",
        "Convertire",
        "days-to-weeks"
      ],
      [
        "value",
        "Valore",
        17
      ]
    ],
    "category": "Matematica e utility"
  }
};

const euro = n => new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(n);
const num = n => new Intl.NumberFormat('it-IT',{maximumFractionDigits:4}).format(n);
const pct = n => `${num(n)}%`;
const get = id => {
  const el=document.getElementById(id);
  if (!el) return 0;
  if (el.type === 'text' || el.tagName === 'TEXTAREA') return el.value;
  return Number(el.value) || 0;
};
function effectivePeriodicRate(annualPercent,freq){
  return Math.pow(1+annualPercent/100,1/freq)-1;
}
function fv(P,C,freq,annualPercent,years){
  const r=effectivePeriodicRate(annualPercent,freq), n=freq*years;
  if(Math.abs(r)<1e-14) return P+C*n;
  return P*Math.pow(1+r,n)+C*(Math.pow(1+r,n)-1)/r;
}
function result(items,note=''){
  document.getElementById('results').innerHTML =
    items.map(x=>`<div class="result-card"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('')+
    (note?`<p class="formula">${note}</p>`:'');
}
function calculate(){
  const s=window.SLUG;
  const v={};
  CONFIG[s].fields.forEach(f=>{
    const el=document.getElementById(f[0]);
    v[f[0]]=el?.type==='date'||el?.type==='text'?el.value:(Number(el?.value)||0);
  });
  try{
    switch(s){
      case 'interesse-composto': {
        const f=Number(v.frequency), years=Math.max(0,v.years), final=fv(v.initial,v.contribution,f,v.rate,years);
        result([['Capitale finale',euro(final)],['Totale versato',euro(v.initial+v.contribution*f*years)],['Interessi generati',euro(final-v.initial-v.contribution*f*years)]],
          'Modello: rendimento annuo effettivo convertito nel rendimento equivalente alla frequenza scelta; versamenti alla fine di ogni periodo.');
        break;
      }
      case 'inflazione': {
        const future=v.price*Math.pow(1+v.inflation/100,v.years), power=v.price/Math.pow(1+v.inflation/100,v.years);
        result([['Prezzo futuro equivalente',euro(future)],['Potere d’acquisto di €100',euro(100/Math.pow(1+v.inflation/100,v.years))],['Perdita di potere d’acquisto',pct(100-power/v.price*100)]]);
        break;
      }
      case 'roi': { const roi=(v.final-v.investment)/v.investment*100; result([['ROI',pct(roi)],['Profitto / perdita',euro(v.final-v.investment)]], 'ROI = (valore finale − investimento iniziale) / investimento iniziale.'); break; }
      case 'rendimento-reale': { const real=((1+v.nominal/100)/(1+v.inflation/100)-1)*100; result([['Rendimento reale',pct(real)]], 'Formula: (1 + rendimento nominale) / (1 + inflazione) − 1.'); break; }
      case 'fire': case 'patrimonio-fire': { const p=v.expenses/(v.swr/100); result([['Patrimonio FIRE stimato',euro(p)],['Spesa annua',euro(v.expenses)],['Prelievo annuo al tasso scelto',euro(p*v.swr/100)]], 'Stima semplificata: spese annue / tasso di prelievo. Non considera tasse, rendimenti variabili o rischio di sequenza.'); break; }
      case 'risparmio-mensile': { const r=effectivePeriodicRate(v.rate,12), n=12*v.years; let c=Math.abs(r)<1e-14?(v.target-v.initial)/n:(v.target-v.initial*Math.pow(1+r,n))*r/(Math.pow(1+r,n)-1); result([['Risparmio mensile necessario',euro(Math.max(0,c))],['Totale versato',euro(v.initial+Math.max(0,c)*n)],['Obiettivo',euro(v.target)]], 'Versamenti a fine mese, rendimento annuo effettivo convertito al tasso mensile equivalente.'); break; }
      case 'obiettivo-finanziario': { const final=fv(v.initial,v.contribution,12,v.rate,v.years); result([['Capitale finale stimato',euro(final)],['Totale versato',euro(v.initial+v.contribution*12*v.years)],['Interessi generati',euro(final-v.initial-v.contribution*12*v.years)]], 'Versamenti a fine mese.'); break; }
      case 'raddoppio-capitale': { const t=v.rate>0?Math.log(2)/Math.log(1+v.rate/100):Infinity; result([['Tempo di raddoppio',isFinite(t)?`${num(t)} anni`:'Non raggiunto a rendimento ≤ 0%']], 'Formula esatta con rendimento annuo costante; non è la regola approssimata del 72.'); break; }
      case 'sconto': { const d=v.price*v.discount/100; result([['Sconto',euro(d)],['Prezzo finale',euro(v.price-d)],['Percentuale applicata',pct(v.discount)] ]); break; }
      case 'margine': { const profit=v.revenue-v.cost, margin=v.revenue?profit/v.revenue*100:0; result([['Profitto',euro(profit)],['Margine',pct(margin)]], 'Margine = profitto / ricavi.'); break; }
      case 'markup': { const markup=v.cost?(v.price-v.cost)/v.cost*100:0; result([['Markup',pct(markup)],['Profitto unitario',euro(v.price-v.cost)]], 'Markup = profitto / costo.'); break; }
      case 'break-even': { const contribution=v.price-v.variable, units=contribution>0?v.fixed/contribution:Infinity; result([['Unità di break-even',isFinite(units)?num(units):'Non raggiungibile'],['Fatturato di break-even',isFinite(units)?euro(units*v.price):'—'],['Margine di contribuzione unitario',euro(contribution)]], 'Break-even unità = costi fissi / (prezzo unitario − costo variabile unitario).'); break; }
      case 'cac': { const cac=v.customers?v.marketing/v.customers:0; result([['CAC',euro(cac)],['Spesa acquisizione',euro(v.marketing)],['Nuovi clienti',num(v.customers)]], 'CAC = spesa di acquisizione / nuovi clienti.'); break; }
      case 'ltv': { const ltv=(v.churn>0)?v.arpu*(v.margin/100)/(v.churn/100):Infinity; result([['LTV stimato',isFinite(ltv)?euro(ltv):'—'],['Margine mensile per cliente',euro(v.arpu*v.margin/100)],['Durata media stimata',v.churn>0?`${num(1/(v.churn/100))} mesi`:'—']], 'Modello semplificato: ARPU × margine lordo / churn mensile.'); break; }
      case 'ltv-cac': { const ratio=v.cac>0?v.ltv/v.cac:Infinity; result([['LTV/CAC',isFinite(ratio)?`${num(ratio)}×`:'—'],['LTV',euro(v.ltv)],['CAC',euro(v.cac)]]); break; }
      case 'churn': { const c=v.start?v.lost/v.start*100:0; result([['Churn rate',pct(c)],['Clienti rimasti',num(Math.max(0,v.start-v.lost))]], 'Churn = clienti persi / clienti a inizio periodo.'); break; }
      case 'mrr': { const m=v.customers*v.arpu; result([['MRR',euro(m)],['ARR annualizzato',euro(m*12)] ]); break; }
      case 'arr': { result([['ARR',euro(v.mrr*12)],['MRR equivalente',euro(v.mrr)] ]); break; }
      case 'runway': { const months=v.burn>0?v.cash/v.burn:Infinity; result([['Runway',isFinite(months)?`${num(months)} mesi`:'Indefinita'],['Cassa disponibile',euro(v.cash)],['Burn mensile',euro(v.burn)]], 'Runway semplificata = cassa disponibile / burn mensile.'); break; }
      case 'ohm': {
        let out;
        if(v.mode==='V') out=[['Tensione',`${num(v.i*v.r)} V`],['Formula','V = I × R']];
        else if(v.mode==='I') out=[['Corrente',`${num(v.v/v.r)} A`],['Formula','I = V / R']];
        else out=[['Resistenza',`${num(v.v/v.i)} Ω`],['Formula','R = V / I']];
        result(out); break;
      }
      case 'watt-volt-ampere': {
        let out;
        if(v.mode==='P') out=[['Potenza',`${num(v.v*v.i)} W`],['Formula','P = V × I']];
        else if(v.mode==='V') out=[['Tensione',`${num(v.p/v.i)} V`],['Formula','V = P / I']];
        else out=[['Corrente',`${num(v.p/v.v)} A`],['Formula','I = P / V']];
        result(out); break;
      }
      case 'potenza-monofase': {
        if(!Number.isFinite(v.pf) || v.pf<0 || v.pf>1){
          return result([['Errore','Il fattore di potenza (cosφ) deve essere compreso tra 0 e 1.']]);
        }
        result([['Potenza attiva',`${num(v.v*v.i*v.pf)} W`],['Potenza',`${num(v.v*v.i*v.pf/1000)} kW`]], 'P = V × I × cosφ.');
        break;
      }
      case 'potenza-trifase': {
        if(!Number.isFinite(v.pf) || v.pf<0 || v.pf>1){
          return result([['Errore','Il fattore di potenza (cosφ) deve essere compreso tra 0 e 1.']]);
        }
        result([['Potenza attiva',`${num(Math.sqrt(3)*v.v*v.i*v.pf)} W`],['Potenza',`${num(Math.sqrt(3)*v.v*v.i*v.pf/1000)} kW`]], 'P = √3 × VLL × I × cosφ.');
        break;
      }
      case 'caduta-tensione': { const drop=2*v.length*v.current*v.rho/v.section, pctdrop=v.voltage?drop/v.voltage*100:0; result([['Caduta di tensione',`${num(drop)} V`],['Caduta percentuale',pct(pctdrop)],['Tensione al carico',`${num(v.voltage-drop)} V`]], 'Modello resistivo monofase/DC: ΔV = 2 × L × I × ρ / S.'); break; }
      case 'sezione-cavo': { const s=2*v.length*v.current*v.rho/v.drop; result([['Sezione teorica minima',`${num(s)} mm²`]], 'Stima resistiva monofase/DC. Il dimensionamento reale deve considerare portata, posa, temperatura, protezioni e norme applicabili.'); break; }
      case 'resistenza-cavo': { const r=v.rho*v.length/v.section; result([['Resistenza del conduttore',`${num(r)} Ω`]], 'R = ρ × L / S.'); break; }
      case 'kw-hp': {
        if(!Number.isFinite(v.value) || v.value<0){
          return result([['Errore','Inserisci un valore di potenza valido.']]);
        }
        if(v.mode==='kw'){
          const hp=v.value*1.34102209;
          result([['Horsepower',`${num(hp)} hp`]], '1 kW ≈ 1,341022 hp.');
        }else{
          const kw=v.value/1.34102209;
          result([['Kilowatt',`${num(kw)} kW`]], '1 hp ≈ 0,745700 kW.');
        }
        break;
      }
      case 'batteria': { const wh=v.load*v.hours/(v.eff/100), ah=wh/(v.voltage*(v.dod/100)); result([['Energia richiesta',`${num(wh)} Wh`],['Capacità teorica',`${num(ah)} Ah`]], 'Stima: energia / tensione / quota utilizzabile. Va aggiunto un margine progettuale.'); break; }
      case 'consumo-elettrico': { const kwh=v.power/1000*v.hours*v.days, cost=kwh*v.price; result([['Consumo',`${num(kwh)} kWh`],['Costo stimato',euro(cost)] ]); break; }
      case 'costo-apparecchio': { const kwh=v.power/1000*v.hours*v.days, cost=kwh*v.price; result([['Consumo annuo',`${num(kwh)} kWh`],['Costo annuo',euro(cost)] ]); break; }
      case 'climatizzatore': { const kwh=v.power/1000*v.hours*v.days, cost=kwh*v.price; result([['Consumo mensile',`${num(kwh)} kWh`],['Costo mensile',euro(cost)]], 'Stima basata sulla potenza elettrica media inserita.'); break; }
      case 'boiler': { const wh=v.liters*4.186*v.delta/3.6, kwh=wh/1000/(v.eff/100), cost=kwh*v.price; result([['Energia teorica utile',`${num(wh/1000)} kWh`],['Energia acquistata stimata',`${num(kwh)} kWh`],['Costo',euro(cost)]], 'Calore specifico dell’acqua assunto pari a 4,186 kJ/kg·K e 1 L ≈ 1 kg.'); break; }
      case 'riscaldamento': result([['Costo stimato',euro(v.energy*v.price)],['Energia',`${num(v.energy)} kWh`]]); break;
      case 'fotovoltaico': result([['Produzione annua indicativa',`${num(v.kwp*v.yield)} kWh`],['Potenza installata',`${num(v.kwp)} kWp`]], 'Stima semplificata: potenza installata × producibilità specifica.'); break;
      case 'accumulo-fotovoltaico': { const cap=v.daily*v.autonomy/(v.usable/100); result([['Capacità nominale indicativa',`${num(cap)} kWh`],['Energia utilizzabile',`${num(v.daily*v.autonomy)} kWh`]], 'La capacità reale dipende da tecnologia, temperatura, potenza, cicli e gestione della batteria.'); break; }
      case 'vernice': { const liters=v.area*v.coats/v.coverage; result([['Vernice necessaria',`${num(liters)} L`],['Superficie totale delle mani',`${num(v.area*v.coats)} m²`]]); break; }
      case 'piastrelle': { const tile=v.length/100*v.width/100, base=tile>0?v.area/tile:0, total=Math.ceil(base*(1+v.waste/100)); result([['Piastrelle necessarie',`${total}`],['Piastrelle senza sfrido',`${num(base)}`],['Area per piastrella',`${num(tile)} m²`]], 'Arrotondamento all’unità superiore; sfrido applicato alla quantità teorica.'); break; }
      case 'cemento': { const vol=v.length*v.width*(v.height/100); result([['Volume',`${num(vol)} m³`],['Litri',`${num(vol*1000)} L`]]); break; }
      case 'percentuale': result([['Risultato',num(v.value*v.percent/100)],['Percentuale',pct(v.percent)] ]); break;
      case 'aumento-percentuale': { const p=v.initial?((v.final-v.initial)/v.initial*100):0; result([['Aumento',pct(p)],['Variazione assoluta',num(v.final-v.initial)] ]); break; }
      case 'perdita-percentuale': { const p=v.initial?((v.initial-v.final)/v.initial*100):0; result([['Perdita',pct(p)],['Variazione assoluta',num(v.initial-v.final)] ]); break; }
      case 'media': { const a=String(v.values).split(',').map(Number).filter(Number.isFinite); const m=a.length?a.reduce((x,y)=>x+y,0)/a.length:0; result([['Media',num(m)],['Valori',`${a.length}`]]); break; }
      case 'media-ponderata': { const a=String(v.values).split(',').map(Number), w=String(v.weights).split(',').map(Number); const ok=a.length===w.length&&a.length>0, den=ok?w.reduce((x,y)=>x+y,0):0, m=ok&&den!==0?a.reduce((s,x,i)=>s+x*w[i],0)/den:0; result([['Media ponderata',num(m)],['Somma pesi',num(den)]], ok?'':'Valori e pesi devono avere la stessa lunghezza.'); break; }
      case 'proporzioni': { const x=v.a!==0?v.b*v.c/v.a:0; result([['X',num(x)],['Proporzione',`${num(v.a)} : ${num(v.b)} = ${num(v.c)} : ${num(x)}`]]); break; }
      case 'differenza-date': { const a=new Date(v.start+'T00:00:00'), b=new Date(v.end+'T00:00:00'), days=Math.round((b-a)/86400000); result([['Differenza',`${Math.abs(days)} giorni`],['Settimane',num(Math.abs(days)/7)]], days<0?'La data finale è precedente alla data iniziale.':''); break; }
      case 'data-futura': { const d=new Date(v.start+'T00:00:00'); d.setDate(d.getDate()+v.days); result([['Data risultante',d.toLocaleDateString('it-IT',{day:'2-digit',month:'2-digit',year:'numeric'})],['Giorni aggiunti',num(v.days)] ]); break; }
      case 'minuti-ore': { if(v.mode==='min-to-hm'){const mins=Math.max(0,v.value),h=Math.floor(mins/60),m=mins%60;result([['Conversione',`${h} h ${num(m)} min`],['Ore decimali',num(mins/60)]])} else result([['Minuti',num(v.value*60)] ]); break; }
      case 'giorni-settimane': { if(v.mode==='days-to-weeks') result([['Settimane',num(v.value/7)],['Giorni',num(v.value)] ]); else result([['Giorni',num(v.value*7)],['Settimane',num(v.value)] ]); break; }
      case 'coppia-potenza-rpm': {
        if(v.mode==='power'){
          if(!Number.isFinite(v.value2) || !Number.isFinite(v.rpm) || v.rpm<=0) return result([['Errore','Inserisci coppia e un numero di giri maggiore di zero.']]);
          const p=v.value2*v.rpm/9550;
          result([['Potenza',`${num(p)} kW`],['Formula','P(kW) = T(Nm) × RPM / 9550']]);
        } else if(v.mode==='torque'){
          if(!Number.isFinite(v.value1) || !Number.isFinite(v.rpm) || v.rpm<=0) return result([['Errore','Inserisci potenza e un numero di giri maggiore di zero.']]);
          const torque=v.value1*9550/v.rpm;
          result([['Coppia',`${num(torque)} Nm`],['Formula','T(Nm) = 9550 × P(kW) / RPM']]);
        } else {
          if(!Number.isFinite(v.value1) || !Number.isFinite(v.value2) || v.value2<=0) return result([['Errore','Inserisci potenza e una coppia maggiore di zero.']]);
          const rpm=9550*v.value1/v.value2;
          result([['RPM',`${num(rpm)} rpm`],['Formula','RPM = 9550 × P(kW) / T(Nm)']]);
        }
        break;
      }
    }
  }catch(e){ result([['Errore','Controlla i valori inseriti']]); console.error(e); }
}
function resetCalc(){ location.reload(); }
document.addEventListener('DOMContentLoaded',()=>{ 
  document.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',calculate));
  calculate();
});
