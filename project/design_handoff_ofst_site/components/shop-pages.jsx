// Collection page (Magnetic Wooden STEM Toys) + Product page

const CollectionPage = () => {
  const products = [
    { img:'assets/gear-1.png', name:'Magnetic Gear Wall — Starter', price:148, tag:'Best seller', ages:'2–6', rating:4.9, reviews:312 },
    { img:'assets/wall-1.png', name:'Pipe & Ramp Play Wall', price:186, tag:'New', ages:'3–7', rating:4.8, reviews:128 },
    { img:'assets/gear-2.png', name:'Big Gears Expansion Set', price:68, tag:null, ages:'3+', rating:4.9, reviews:204 },
    { img:'assets/pipe-1.png', name:'Pipe Builder Add-On', price:54, tag:null, ages:'3+', rating:4.7, reviews:86 },
    { img:'assets/wall-2.png', name:'Wonder Wall Complete', price:298, tag:'Best seller', ages:'3–8', rating:4.9, reviews:241 },
    { img:'assets/gear-3.png', name:'Tiny Hands Gear Set', price:58, tag:null, ages:'18m–3', rating:4.8, reviews:97 },
  ];
  return (
    <PageFrame>
      <SiteHeader/>
      {/* Collection hero */}
      <section style={{ background:'linear-gradient(180deg, #CDE6ED 0%, var(--ofst-base) 100%)', padding:'48px 48px 56px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <p style={{ fontSize:13, color:'var(--ofst-mid)', marginBottom:14 }}>Home / Shop / <span style={{ color:'var(--ofst-ink)', fontWeight:600 }}>Magnetic Wooden STEM Toys</span></p>
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:40, alignItems:'center' }}>
            <div>
              <span className="ofst-chip ofst-chip-coral">The hero collection</span>
              <h1 className="ofst-display" style={{ fontSize:52, marginTop:14, lineHeight:1.05 }}>Magnetic wooden STEM toys.</h1>
              <p className="ofst-body" style={{ marginTop:14, maxWidth:520, color:'var(--ofst-mid)' }}>
                Real birch, real magnets, real play. These are the toys we kept after we tested everything — the ones our kids actually come back to.
              </p>
              <div style={{ marginTop:20, display:'flex', gap:14, fontSize:13, color:'var(--ofst-mid)' }}>
                <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><Icon name="check" size={16} stroke="var(--ofst-teal)"/>Parent-tested</span>
                <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><Icon name="check" size={16} stroke="var(--ofst-teal)"/>Non-toxic finish</span>
                <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><Icon name="check" size={16} stroke="var(--ofst-teal)"/>Ages 18m+</span>
              </div>
            </div>
            <div style={{ aspectRatio:'4/3', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', boxShadow:'var(--ofst-shadow-lg)' }}>
              <img src="assets/gear-3.png" className="ofst-img" alt=""/>
            </div>
          </div>
        </div>
      </section>
      {/* Filter bar */}
      <section style={{ padding:'24px 48px', background:'var(--ofst-base)', borderBottom:'1px solid rgba(38,70,83,.08)', position:'sticky', top:62, zIndex:10 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
          <button className="ofst-btn ofst-btn-outline ofst-btn-sm" style={{ minHeight:40 }}><Icon name="filter" size={16}/> Filters</button>
          {['Ages 18m–3','Ages 3–6','Ages 6+','Starter sets','Expansions','Under $100'].map(t => (
            <span key={t} className="ofst-tab">{t}</span>
          ))}
          <span style={{ marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:8, fontSize:14, color:'var(--ofst-mid)' }}>
            <span>6 products</span>
            <span style={{ color:'var(--ofst-muted)' }}>·</span>
            <span>Sort: Most loved <Icon name="chevron" size={14}/></span>
          </span>
        </div>
      </section>
      {/* Grid */}
      <section style={{ padding:'40px 48px 80px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:22 }}>
          {products.map((p, i) => (
            <article key={i} className="ofst-card">
              <div style={{ position:'relative', aspectRatio:'1/1', background:'#EFE7DB' }}>
                <img src={p.img} className="ofst-img" alt={p.name}/>
                {p.tag && <span className={`ofst-chip ${p.tag==='New' ? 'ofst-chip-coral' : 'ofst-chip-yellow'}`} style={{ position:'absolute', top:12, left:12, fontSize:11 }}>{p.tag}</span>}
                <button style={{ position:'absolute', top:10, right:10, background:'#fff', width:36, height:36, borderRadius:18, display:'inline-flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 6px rgba(0,0,0,.08)' }}>
                  <Icon name="heart" size={16}/>
                </button>
              </div>
              <div style={{ padding:'18px 20px 20px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'var(--ofst-mid)' }}>
                  <span>Ages {p.ages}</span>
                  <span style={{ color:'var(--ofst-muted)' }}>·</span>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:2 }}><Icon name="star" size={12} stroke="#FFB629"/> {p.rating} ({p.reviews})</span>
                </div>
                <h3 style={{ fontSize:16, fontWeight:600, marginTop:6 }}>{p.name}</h3>
                <div style={{ marginTop:14, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontSize:20, fontWeight:700 }}>${p.price}</span>
                  <button className="ofst-btn ofst-btn-primary ofst-btn-sm">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter/>
    </PageFrame>
  );
};

const ProductPage = () => {
  return (
    <PageFrame>
      <SiteHeader/>
      <section style={{ padding:'32px 48px 64px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <p style={{ fontSize:13, color:'var(--ofst-mid)', marginBottom:20 }}>Home / Shop / Wooden STEM Toys / <span style={{ color:'var(--ofst-ink)', fontWeight:600 }}>Magnetic Gear Wall — Starter</span></p>
          <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:56 }}>
            {/* Gallery */}
            <div>
              <div style={{ aspectRatio:'1/1', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', background:'#EFE7DB', position:'relative' }}>
                <img src="assets/gear-1.png" className="ofst-img" alt=""/>
                <span className="ofst-chip ofst-chip-yellow" style={{ position:'absolute', top:16, left:16 }}>Best seller</span>
              </div>
              <div style={{ marginTop:12, display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:10 }}>
                {['gear-1','gear-2','gear-3','wall-1','pipe-1'].map((k,i) => (
                  <div key={k} style={{ aspectRatio:'1/1', borderRadius:10, overflow:'hidden', background:'#EFE7DB', boxShadow: i===0 ? 'inset 0 0 0 2px var(--ofst-ink)' : 'none' }}>
                    <img src={`assets/${k}.png`} className="ofst-img" alt=""/>
                  </div>
                ))}
              </div>
            </div>
            {/* Info */}
            <div>
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ofst-coral)' }}>Magnetic Wooden STEM Toys</p>
              <h1 className="ofst-display" style={{ fontSize:40, marginTop:8, lineHeight:1.1 }}>Magnetic Gear Wall — Starter</h1>
              <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:10, fontSize:14, color:'var(--ofst-mid)' }}>
                <span style={{ display:'inline-flex', gap:2, color:'#FFB629' }}>
                  {[0,1,2,3,4].map(s=><Icon key={s} name="star" size={15} stroke="#FFB629"/>)}
                </span>
                <span style={{ fontWeight:600, color:'var(--ofst-ink)' }}>4.9</span>
                <span>· 312 real-parent reviews</span>
              </div>
              <p style={{ marginTop:18, fontSize:16, lineHeight:1.65, color:'var(--ofst-mid)' }}>
                Ten magnetic wooden gears, one sturdy birch wall, and approximately 45 blissful minutes of quiet. Kids build, re-build, spin, and watch each other\'s work turn in real time.
              </p>
              <div style={{ marginTop:22, display:'flex', alignItems:'baseline', gap:14 }}>
                <span style={{ fontSize:34, fontWeight:700 }}>$148</span>
                <span className="ofst-chip ofst-chip-teal">Pay in 4 · $37 with Shop Pay</span>
              </div>
              {/* Options */}
              <div style={{ marginTop:24 }}>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:8 }}>Set size</div>
                <div style={{ display:'flex', gap:8 }}>
                  {[['Starter · 10 gears','$148',true],['Expanded · 18 gears','$198',false],['Family · 28 gears','$248',false]].map((o,i)=>(
                    <div key={i} style={{ padding:'12px 16px', borderRadius:'var(--ofst-radius-sm)', border: `2px solid ${o[2]?'var(--ofst-ink)':'rgba(38,70,83,.15)'}`, background:'#fff', flex:1 }}>
                      <div style={{ fontSize:13, fontWeight:600 }}>{o[0]}</div>
                      <div style={{ fontSize:12, color:'var(--ofst-mid)' }}>{o[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop:20, display:'flex', gap:10 }}>
                <div style={{ display:'inline-flex', alignItems:'center', background:'#fff', borderRadius:'var(--ofst-pill)', padding:'4px 8px', boxShadow:'0 1px 3px rgba(0,0,0,.05)' }}>
                  <button style={{ width:36, height:36, fontSize:18 }}>−</button>
                  <span style={{ minWidth:24, textAlign:'center', fontWeight:600 }}>1</span>
                  <button style={{ width:36, height:36, fontSize:18 }}>+</button>
                </div>
                <Btn variant="cta" style={{ flex:1 }} iconRight="arrow">Add to cart · $148</Btn>
              </div>
              <button className="ofst-btn ofst-btn-outline" style={{ marginTop:10, width:'100%' }}>Add to wishlist <Icon name="heart" size={16}/></button>
              {/* Trust row */}
              <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, fontSize:13 }}>
                {[['truck','Free US shipping $60+'],['shield','Real-parent tested'],['leaf','Solid birch · non-toxic'],['hand','Made by a 6-person shop']].map(([ic,t])=>(
                  <div key={t} style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 12px', background:'#fff', borderRadius:'var(--ofst-radius-sm)' }}>
                    <Icon name={ic} size={18} stroke="var(--ofst-teal)"/>{t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs: Details / Safety / Care */}
      <section style={{ padding:'40px 48px', background:'#F6F1E8' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:6, borderBottom:'1px solid rgba(38,70,83,.12)' }}>
            {[['What\'s in the box', true],['Safety & ages', false],['Care & materials', false],['Real parent notes', false]].map(([t,a],i)=>(
              <button key={i} style={{ padding:'12px 18px', fontSize:14, fontWeight:600, color: a?'var(--ofst-ink)':'var(--ofst-mid)', borderBottom: a?'2px solid var(--ofst-coral)':'none', marginBottom:-1 }}>{t}</button>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, marginTop:28 }}>
            <div>
              <h3 className="ofst-h2">In the box</h3>
              <ul style={{ marginTop:14, padding:0, listStyle:'none', display:'grid', gap:10, fontSize:15 }}>
                {['1 birch mounting wall (28" × 16")','10 magnetic wooden gears (3 sizes)','4 crank handles + spindles','1 mounting kit (for walls)','1 zippered storage pouch','1 play guide with 12 setup ideas'].map((l,i)=>(
                  <li key={i} style={{ display:'flex', gap:10 }}><Icon name="check" size={18} stroke="var(--ofst-teal)"/> {l}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="ofst-h2">A note from the workshop</h3>
              <p style={{ marginTop:14, fontSize:15, lineHeight:1.65, color:'var(--ofst-mid)' }}>
                We cut these in a small shop in Michigan. The magnets are rated N42 and fully sealed — no little hands touch magnet. Each piece is sanded by a human who probably has a toddler pulling on their pant leg. If anything ever breaks, write us and we\'ll replace it. That\'s the whole policy.
              </p>
              <p style={{ marginTop:14, fontSize:14, color:'var(--ofst-ink)', fontWeight:600 }}>— Maya & the OFST workshop</p>
            </div>
          </div>
        </div>
      </section>
      {/* Related */}
      <section style={{ padding:'60px 48px 80px', background:'var(--ofst-base)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <h2 className="ofst-h1" style={{ fontSize:28 }}>Parents who bought this also picked up…</h2>
          <div style={{ marginTop:20, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:18 }}>
            {[['gear-2','Big Gears Expansion',68],['pipe-1','Pipe Builder Add-On',54],['wall-1','Pipe & Ramp Wall',186],['wall-2','Wonder Wall Complete',298]].map(([img,name,price],i)=>(
              <div key={i} className="ofst-card">
                <div style={{ aspectRatio:'1/1', background:'#EFE7DB' }}><img src={`assets/${img}.png`} className="ofst-img" alt=""/></div>
                <div style={{ padding:14 }}>
                  <p style={{ fontSize:14, fontWeight:600 }}>{name}</p>
                  <p style={{ fontSize:14, marginTop:4 }}>${price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter/>
    </PageFrame>
  );
};

Object.assign(window, { CollectionPage, ProductPage });
