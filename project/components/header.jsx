// OFST Header with mega menu (shown in "open" state) and mobile variant

const HeaderMegaMenu = ({ open = true }) => (
  <div style={{ position:'relative' }}>
    <SiteHeader/>
    {open && (
      <div style={{ position:'absolute', top:'100%', left:0, right:0, background:'#fff', boxShadow:'0 24px 48px -16px rgba(38,70,83,.22)', borderTop:'1px solid rgba(38,70,83,.06)', padding:'36px 32px 40px', zIndex:30 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1.3fr', gap:48 }}>
          {[
            { t:'Wooden STEM Toys', items:['Gear Walls','Pipe & Ramp Sets','Building Magnets','Expansion Packs','Starter Kits','All Wooden Toys →'] },
            { t:'Kids Clothing', items:['Basics','Sleepwear','Organic Line','Gift Sets','All Clothing →'] },
            { t:'For Adults', items:['Phone Book Covers','Parent Journals','Coffee & Mugs','Gift Bundles','All For Adults →'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ofst-mid)', marginBottom:16 }}>{col.t}</h4>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:10 }}>
                {col.items.map((it, j) => (
                  <li key={j} style={{ fontSize:15, fontWeight: it.endsWith('→') ? 600 : 500, color: it.endsWith('→') ? 'var(--ofst-coral)' : 'var(--ofst-ink)' }}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* Featured tile */}
          <div style={{ borderRadius:'var(--ofst-radius)', overflow:'hidden', position:'relative', minHeight:220, boxShadow:'var(--ofst-shadow)' }}>
            <img src="assets/gear-1.png" className="ofst-img" alt=""/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 40%, rgba(38,70,83,.85))' }}/>
            <div style={{ position:'absolute', left:18, right:18, bottom:16, color:'#fff' }}>
              <span className="ofst-chip ofst-chip-yellow" style={{ fontSize:11 }}>Just landed</span>
              <h5 style={{ marginTop:10, fontSize:18, fontWeight:700 }}>The Magnetic Gear Wall Starter</h5>
              <p style={{ fontSize:13, opacity:.9, marginTop:4 }}>Our #1 toy, now with 8 extra gears.</p>
              <span style={{ marginTop:12, display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:600, color:'var(--ofst-yellow)' }}>Shop it <Icon name="arrow" size={13}/></span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:1200, margin:'28px auto 0', paddingTop:20, borderTop:'1px solid rgba(38,70,83,.08)', display:'flex', gap:18, fontSize:13, color:'var(--ofst-mid)' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><Icon name="truck" size={15} stroke="var(--ofst-teal)"/>Free shipping on orders $60+</span>
          <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><Icon name="shield" size={15} stroke="var(--ofst-teal)"/>30-day no-questions returns</span>
          <span style={{ display:'inline-flex', alignItems:'center', gap:6, marginLeft:'auto', color:'var(--ofst-coral)', fontWeight:600 }}>Shop the Sale →</span>
        </div>
      </div>
    )}
  </div>
);

const HeaderShowcase = () => (
  <PageFrame>
    <HeaderMegaMenu open={true}/>
    <div style={{ padding:'40px 48px', background:'var(--ofst-base)' }}>
      <span className="ofst-eyebrow">Sticky behavior</span>
      <h3 className="ofst-h2" style={{ marginTop:6 }}>Header stays pinned on scroll and shrinks its vertical padding by 4px. Logo + nav stay full-size for tired eyes.</h3>
      <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
        <div className="ofst-card" style={{ padding:20 }}>
          <p style={{ fontSize:13, fontWeight:600, color:'var(--ofst-mid)', letterSpacing:'.08em', textTransform:'uppercase' }}>At rest</p>
          <div style={{ marginTop:10 }}><SiteHeader/></div>
        </div>
        <div className="ofst-card" style={{ padding:20 }}>
          <p style={{ fontSize:13, fontWeight:600, color:'var(--ofst-mid)', letterSpacing:'.08em', textTransform:'uppercase' }}>On scroll (compact)</p>
          <div style={{ marginTop:10 }}><SiteHeader compact/></div>
        </div>
      </div>
    </div>
  </PageFrame>
);

Object.assign(window, { HeaderMegaMenu, HeaderShowcase });
