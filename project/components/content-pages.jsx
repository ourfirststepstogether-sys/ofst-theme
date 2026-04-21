// OFST Activities content hub + Free resources + Our story / FAQ

const ActivitiesHub = () => {
  const featured = { title:'The 15-minute gear wall reset (when they\'re losing it)', tag:'Video · 4 min', img:'assets/gear-3.png' };
  const posts = [
    { kind:'Video', tag:'teal', dur:'3 min', title:'Building a pipe run with a 3yo who has opinions', img:'assets/pipe-1.png' },
    { kind:'Bedtime story', tag:'yellow', dur:'6 min read', title:'Little Gear Who Wouldn\'t Turn' },
    { kind:'Play guide', tag:'coral', dur:'Free PDF', title:'10 ways to play with pipes (that aren\'t the obvious 3)', img:'assets/wall-1.png' },
    { kind:'Parent note', tag:'warm', dur:'5 min read', title:'On the 4pm meltdown and magnetic toys' },
    { kind:'Video', tag:'teal', dur:'2 min', title:'One toy, three ages: same gear wall, different play', img:'assets/gear-2.png' },
    { kind:'Bedtime story', tag:'yellow', dur:'8 min read', title:'The Pipe That Wanted to Go Sideways' },
  ];
  return (
    <PageFrame>
      <SiteHeader/>
      <section style={{ padding:'48px 48px 32px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center' }}>
          <span className="ofst-eyebrow" style={{ color:'var(--ofst-coral)' }}>Activities Together</span>
          <h1 className="ofst-display" style={{ fontSize:52, marginTop:8, lineHeight:1.05, maxWidth:820, margin:'8px auto 0' }}>The helpful stuff. From parents who\'ve been there.</h1>
          <p className="ofst-body" style={{ marginTop:14, maxWidth:620, margin:'14px auto 0', color:'var(--ofst-mid)' }}>
            Short videos, bedtime stories, play guides, and honest notes from the middle of it. No pretending it\'s easy.
          </p>
          <div style={{ marginTop:22, display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
            {['All','Videos','Bedtime stories','Play guides','Parent notes','Sensory play','Rainy-day rescue'].map((t,i)=>(
              <span key={t} className={`ofst-tab ${i===0?'ofst-tab-active':''}`}>{t}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Featured */}
      <section style={{ padding:'24px 48px 56px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', position:'relative', minHeight:420, boxShadow:'var(--ofst-shadow-lg)' }}>
          <img src={featured.img} className="ofst-img" alt="" style={{ position:'absolute', inset:0 }}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(38,70,83,.2) 0%, rgba(38,70,83,.85) 90%)' }}/>
          <button style={{ position:'absolute', top:'46%', left:'50%', transform:'translate(-50%,-50%)', width:80, height:80, borderRadius:40, background:'rgba(255,255,255,.95)', display:'inline-flex', alignItems:'center', justifyContent:'center', boxShadow:'0 10px 30px rgba(0,0,0,.3)' }}>
            <Icon name="play" size={34} stroke="var(--ofst-coral)"/>
          </button>
          <div style={{ position:'absolute', left:32, right:32, bottom:28, color:'#fff' }}>
            <span className="ofst-chip ofst-chip-coral" style={{ fontSize:11 }}>{featured.tag}</span>
            <h2 style={{ fontSize:32, fontWeight:700, marginTop:12, maxWidth:620, lineHeight:1.1 }}>{featured.title}</h2>
            <p style={{ fontSize:15, opacity:.9, marginTop:10, maxWidth:560 }}>It\'s 4:47pm, dinner isn\'t started, and everyone is unraveling. Here\'s the reset Maya uses — honestly, imperfectly.</p>
          </div>
        </div>
      </section>
      {/* Grid */}
      <section style={{ padding:'0 48px 80px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:22 }}>
          {posts.map((p,i)=>(
            <article key={i} className="ofst-card">
              <div style={{ aspectRatio:'4/3', background: p.tag==='yellow'?'#FFE9B8':p.tag==='coral'?'#FFD8D8':p.tag==='warm'?'#E8DFD2':'#CDE6ED', position:'relative', overflow:'hidden' }}>
                {p.img ? <img src={p.img} className="ofst-img" alt=""/> : (
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Icon name={p.kind==='Bedtime story'?'book':p.kind==='Video'?'play':'sparkle'} size={52} stroke="var(--ofst-ink)" strokeWidth={1.6}/>
                  </div>
                )}
                {p.kind==='Video' && (
                  <div style={{ position:'absolute', top:14, right:14, background:'rgba(38,70,83,.85)', color:'#fff', padding:'6px 10px', borderRadius:'var(--ofst-pill)', fontSize:11, fontWeight:600 }}>▶ {p.dur}</div>
                )}
              </div>
              <div style={{ padding:'18px 20px 22px' }}>
                <span style={{ fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ofst-mid)' }}>{p.kind} · {p.dur}</span>
                <h3 style={{ fontSize:17, fontWeight:600, marginTop:6, lineHeight:1.35 }}>{p.title}</h3>
                <a className="ofst-link" style={{ marginTop:12, borderBottomColor:'var(--ofst-teal)', fontSize:13 }}>Read / watch <Icon name="arrow" size={13}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter/>
    </PageFrame>
  );
};

const ResourcesPage = () => {
  const resources = [
    { t:'The rainy-day activity deck', s:'30 printable cards for screen-free afternoons', pages:'30 cards · PDF', tone:'coral' },
    { t:'Meltdown playbook', s:'A single laminated sheet that lives on your fridge', pages:'1 page · PDF', tone:'yellow' },
    { t:'Toddler-led gear wall guide', s:'12 ways to play, by developmental stage', pages:'14 pages · PDF', tone:'teal' },
    { t:'Bedtime routine worksheet', s:'Fill-in for your family\'s actual bedtime', pages:'2 pages · PDF', tone:'warm' },
    { t:'The honest chore chart', s:'Ages 2–8, with \"we tried & it didn\'t work\" notes', pages:'4 pages · PDF', tone:'coral' },
    { t:'Gift-ask script for grandparents', s:'What to ask for (and how to ask nicely)', pages:'1 page · PDF', tone:'yellow' },
    { t:'Pediatrician visit prep sheet', s:'Questions, notes, and a coloring page', pages:'3 pages · PDF', tone:'teal' },
    { t:'Sunday reset checklist', s:'The list we actually use on Sundays', pages:'1 page · PDF', tone:'warm' },
  ];
  return (
    <PageFrame>
      <SiteHeader/>
      <section style={{ padding:'56px 48px 40px', background:'linear-gradient(180deg, #FFF3D1 0%, var(--ofst-base) 100%)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', textAlign:'center' }}>
          <span className="ofst-chip ofst-chip-coral">Free forever · no signup on most</span>
          <h1 className="ofst-display" style={{ fontSize:54, marginTop:14, lineHeight:1.05 }}>Free resources for the middle of it.</h1>
          <p className="ofst-body" style={{ marginTop:14, maxWidth:620, margin:'14px auto 0', color:'var(--ofst-mid)' }}>
            Printables, checklists, and scripts we made because we needed them ourselves. Steal them, print them, scribble on them. Pass them along.
          </p>
        </div>
      </section>
      <section style={{ padding:'20px 48px 80px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20 }}>
          {resources.map((r,i)=>{
            const bg = r.tone==='coral' ? '#FFD8D8' : r.tone==='yellow' ? '#FFE9B8' : r.tone==='teal' ? '#CDE6ED' : '#EFE7DB';
            const fg = r.tone==='coral' ? '#A03939' : r.tone==='yellow' ? '#7a5a10' : r.tone==='teal' ? '#1f6478' : '#56524E';
            return (
              <article key={i} className="ofst-card" style={{ display:'flex', flexDirection:'column' }}>
                <div style={{ aspectRatio:'4/5', background:bg, position:'relative', padding:22, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <div>
                    <Icon name="pdf" size={28} stroke={fg}/>
                  </div>
                  <div>
                    <p style={{ fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:fg }}>{r.pages}</p>
                    <h3 style={{ marginTop:6, fontSize:19, fontWeight:700, lineHeight:1.2, color:fg, letterSpacing:'-.01em' }}>{r.t}</h3>
                  </div>
                </div>
                <div style={{ padding:'14px 16px 16px', display:'flex', flexDirection:'column', gap:10 }}>
                  <p style={{ fontSize:13, color:'var(--ofst-mid)', lineHeight:1.5 }}>{r.s}</p>
                  <button className="ofst-btn ofst-btn-dark ofst-btn-sm" style={{ marginTop:'auto' }}><Icon name="download" size={15}/> Download</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <SiteFooter/>
    </PageFrame>
  );
};

const OurStoryPage = () => (
  <PageFrame>
    <SiteHeader/>
    <section style={{ padding:'64px 48px', background:'var(--ofst-base)' }}>
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <span className="ofst-eyebrow" style={{ color:'var(--ofst-teal)' }}>Our story</span>
        <h1 className="ofst-display" style={{ fontSize:54, marginTop:8, lineHeight:1.05 }}>Started with one tired Tuesday.</h1>
        <p className="ofst-body" style={{ marginTop:20, fontSize:19, lineHeight:1.6, color:'var(--ofst-mid)' }}>
          Maya and Dan had a 2-year-old, a pile of plastic toys that flashed and sang but never actually got played with, and about 14 minutes to themselves between nap and dinner. They started making magnetic wooden gear walls in the garage. Friends asked. Then strangers asked. OFST is that garage, six years later.
        </p>
      </div>
    </section>
    <section style={{ padding:'0 48px 64px', background:'var(--ofst-base)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        <div style={{ aspectRatio:'4/3', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden' }}><img src="assets/gear-3.png" className="ofst-img" alt=""/></div>
        <div style={{ aspectRatio:'4/3', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden' }}><img src="assets/wall-1.png" className="ofst-img" alt=""/></div>
      </div>
    </section>
    <section style={{ padding:'0 48px 80px', background:'var(--ofst-base)' }}>
      <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32 }}>
        {[
          ['Real first steps','We build the stuff we wish existed when our kids took theirs.'],
          ['No judgment','Screen time happens. Frozen nuggets happen. We don\'t pretend otherwise.'],
          ['Hustle together','Small shop in Michigan. Six people, two dogs, a lot of sawdust.'],
        ].map(([t,s],i)=>(
          <div key={i}>
            <div style={{ width:36, height:36, borderRadius:18, background:'var(--ofst-coral)', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:14 }}>{i+1}</div>
            <h3 className="ofst-h2" style={{ marginTop:14, fontSize:22 }}>{t}</h3>
            <p style={{ marginTop:8, fontSize:15, color:'var(--ofst-mid)', lineHeight:1.65 }}>{s}</p>
          </div>
        ))}
      </div>
    </section>
    <SiteFooter/>
  </PageFrame>
);

const FAQContactPage = () => {
  const qs = [
    ['Are the magnets safe if my toddler mouths them?','Yes. Every magnet is sealed inside wood and glue-locked. We test-pull every piece to a 22-pound standard. None are removable or loose.'],
    ['What ages is the gear wall really for?','Honestly, 2 is the sweet spot and it keeps being useful until around 7. Under 18 months we\'d say not yet.'],
    ['How long does shipping take?','Most US orders ship within 2 business days. Free over $60. We\'ll email you when it leaves Michigan.'],
    ['What if something breaks?','Write us. We send replacement pieces free, forever. Email care@ofst.co and a real person named Jordan or Maya will answer.'],
    ['Is the wood actually sustainable?','We source birch from FSC-certified mills in Wisconsin. Our finish is EWG-rated 1, water-based, food-safe.'],
    ['Do you do wholesale / preschools?','Yes. Email wholesale@ofst.co and we\'ll set you up with the educator discount.'],
  ];
  return (
    <PageFrame>
      <SiteHeader/>
      <section style={{ padding:'56px 48px 64px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1000, margin:'0 auto' }}>
          <span className="ofst-eyebrow">FAQ & Contact</span>
          <h1 className="ofst-display" style={{ fontSize:48, marginTop:8 }}>Questions? Fire away.</h1>
          <p className="ofst-body" style={{ marginTop:12, color:'var(--ofst-mid)', maxWidth:560 }}>The most common ones below. If yours isn\'t here, the contact form below goes to a real inbox a real human reads.</p>
        </div>
      </section>
      <section style={{ padding:'0 48px 56px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1000, margin:'0 auto', display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:48 }}>
          <div style={{ display:'grid', gap:10 }}>
            {qs.map(([q,a],i)=>(
              <details key={i} open={i===0} style={{ background:'#fff', borderRadius:'var(--ofst-radius)', padding:'16px 20px', boxShadow:'var(--ofst-shadow)' }}>
                <summary style={{ fontWeight:600, fontSize:16, cursor:'pointer', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  {q} <Icon name="chevron" size={18}/>
                </summary>
                <p style={{ marginTop:10, fontSize:15, color:'var(--ofst-mid)', lineHeight:1.65 }}>{a}</p>
              </details>
            ))}
          </div>
          <aside style={{ background:'var(--ofst-ink)', color:'#fff', borderRadius:'var(--ofst-radius)', padding:28, alignSelf:'flex-start' }}>
            <h3 style={{ fontSize:22, fontWeight:700 }}>Write a real person</h3>
            <p style={{ fontSize:14, color:'rgba(255,255,255,.75)', marginTop:8, lineHeight:1.6 }}>Jordan and Maya split the inbox. We answer within 24 hours on weekdays, usually sooner.</p>
            <div style={{ marginTop:18, display:'grid', gap:10, fontSize:14 }}>
              <div>care@ofst.co</div>
              <div>wholesale@ofst.co</div>
              <div>press@ofst.co</div>
            </div>
            <div style={{ marginTop:22, display:'grid', gap:10 }}>
              <input placeholder="Your name" style={{ padding:'12px 14px', borderRadius:8, border:'1px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.08)', color:'#fff', fontSize:14, fontFamily:'inherit' }}/>
              <input placeholder="Email" style={{ padding:'12px 14px', borderRadius:8, border:'1px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.08)', color:'#fff', fontSize:14, fontFamily:'inherit' }}/>
              <textarea rows={4} placeholder="What\'s up?" style={{ padding:'12px 14px', borderRadius:8, border:'1px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.08)', color:'#fff', fontSize:14, fontFamily:'inherit', resize:'none' }}/>
              <button className="ofst-btn ofst-btn-cta">Send note</button>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter/>
    </PageFrame>
  );
};

Object.assign(window, { ActivitiesHub, ResourcesPage, OurStoryPage, FAQContactPage });
