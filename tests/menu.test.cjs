const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '..', 'script.js'), 'utf8');
function boot(seed, brokenStorage = false, start = '2026-10-25T10:00:00Z') {
  let now = start;
  let stored = seed;
  const els = {};
  const events = {};
  const radios = ['all','veg'].map(value=>({value, addEventListener(type, fn){ this[type]=fn; }}));
  const document = {
    hidden: false,
    getElementById(id){ return els[id] ||= {innerHTML:'', textContent:'', addEventListener(type,fn){ this[type]=fn; }}; },
    querySelector(){return {};}, querySelectorAll(){return radios;},
    addEventListener(type,fn){events[type]=fn;}
  };
  class Clock extends Date {constructor(...args){super(...(args.length?args:[now]));} static now(){return new Date(now).valueOf();}}
  const context = vm.createContext({document, Date:Clock, Intl, Math, Uint32Array, HTMLImageElement:class {}, window:{addEventListener(){}}, setInterval(fn){events.interval=fn;}, localStorage:{getItem(){if(brokenStorage) throw Error('disabled'); return stored;},setItem(key,value){if(brokenStorage) throw Error('disabled'); stored=value;}}});
  vm.runInContext(source,context);
  return {els,events,radios,run:s=>vm.runInContext(s,context),saved:()=>stored,time:t=>now=t};
}
const app = boot();
assert.equal(app.run('mealGroups.flatMap(g=>g.meals).length'),36);
assert.equal(app.run('indiaDay(new Date("2026-10-25T18:29:59Z"))'),'2026-10-25');
assert.equal(app.run('indiaDay(new Date("2026-10-25T18:30:00Z"))'),'2026-10-26');
for (const diet of ['all','veg']) {
  for (let i=0;i<365;i++) {
    const day = new Date(Date.UTC(2026,0,1+i)).toISOString().slice(0,10);
    const next = new Date(Date.UTC(2026,0,2+i)).toISOString().slice(0,10);
    assert(app.run(`validPlan(createPlan('${day}','${diet}'),'${diet}')`));
    assert(app.run(`JSON.stringify(createPlan('${day}','${diet}')) === JSON.stringify(createPlan('${day}','${diet}'))`));
    assert(app.run(`mealGroups.every(g => createPlan('${day}','${diet}')[g.id] !== createPlan('${next}','${diet}')[g.id])`));
  }
  assert(app.run(`mealGroups.every(g=>new Set(Array.from({length:g.meals.filter(m=>'${diet}' !== 'veg'||m.veg).length},(_,i)=>createPlan(new Date(Date.UTC(2026,0,1+i)).toISOString().slice(0,10),'${diet}')[g.id])).size===g.meals.filter(m=>'${diet}'!=='veg'||m.veg).length)`));
}
const initial = app.run('JSON.stringify(currentPlan)');
assert.equal(boot(app.saved()).run('JSON.stringify(currentPlan)'),initial);
for(let i=0;i<50;i++) {
  const before = JSON.parse(app.run('JSON.stringify(currentPlan)'));
  app.els.shuffleButton.click();
  const after = JSON.parse(app.run('JSON.stringify(currentPlan)'));
  for(const id of Object.keys(before)) assert.notEqual(after[id],before[id]);
}
assert.equal(boot(app.saved()).run('JSON.stringify(currentPlan)'),app.run('JSON.stringify(currentPlan)'));
app.radios[1].change();
assert(app.run('mealGroups.every(g=>g.meals.find(m=>m.id===currentPlan[g.id]).veg)'));
assert(!/\b(?:eggs?|fish|chicken)\b/i.test(app.els.mealSections.innerHTML));
const veg = app.run('JSON.stringify(currentPlan)');
assert.equal(boot(app.saved()).run('diet'),'veg');
app.radios[0].change();app.radios[1].change();
assert.equal(app.run('JSON.stringify(currentPlan)'),veg);
app.time('2026-10-25T18:30:00Z');app.events.interval();
assert.equal(app.run('activeDay'),'2026-10-26');
assert.equal(app.run('JSON.stringify(currentPlan)'),app.run('JSON.stringify(createPlan("2026-10-26","veg"))'));
for(const seed of ['{bad', 'null', JSON.stringify({day:'2026-10-25',diet:'veg',plans:{veg:{breakfast:'invalid'}}})]) {
  assert(boot(seed).run('validPlan(currentPlan,diet)'));
}
assert(boot(undefined,true).run('validPlan(currentPlan,diet)'));
for(const element of Object.values(app.els)) {
  const visible = (element.innerHTML||'').replace(/<[^>]*>/g,'');
  assert(!/[\u0B80-\u0BFF]/.test(visible),visible);
}
const data = JSON.parse(app.run('JSON.stringify(mealGroups)'));
assert(data.every(group=>group.meals.length===9));
const ids = data.flatMap(group=>group.meals.map(meal=>meal.id));
assert.equal(new Set(ids).size,36);
assert(!/rajma|chapati|pulao|khichdi|oats|bhel|stir.fry/i.test(data.flatMap(group=>group.meals.map(meal=>meal.pair.join(' '))).join(' ')));
assert(app.els.buyingGuide.innerHTML.includes('Shopping malls'));
assert(app.els.stockGrid.innerHTML.includes('Cook first'));
app.radios[1].change();
assert(!app.els.stockGrid.innerHTML.includes('>Eggs<'));
app.radios[0].change();
assert(app.els.stockGrid.innerHTML.includes('>Eggs<'));
for(const group of data) for(const meal of group.meals) {
  assert.equal(meal.pair.length,2);
  for(const field of ['where','order','note','allergens','imageAlt']) assert(meal[field], `${meal.id} missing ${field}`);
  assert(meal.image.startsWith('assets/images/meals/'));
  assert(fs.existsSync(require('node:path').join(__dirname,'..',meal.image)), `Missing image: ${meal.image}`);
  assert(Object.values(meal.nutrients).every(Boolean));
  assert(!/[\u0B80-\u0BFF]/.test([...meal.pair,meal.side,...Object.values(meal.nutrients)].join('')));
}
console.log('PASS: 36 English meal pairs, nutrient sources, 730 daily plans, non-repeating cycles, IST rollover, shuffle, vegetarian filtering, persistence and unavailable/corrupt storage.');
console.log('Today:',app.run('JSON.stringify(createPlan("2026-10-25","all"))'));
