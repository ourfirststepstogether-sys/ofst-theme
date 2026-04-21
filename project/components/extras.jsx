// Mobile mockups, policies, and design system overview panels

const MobileHomepage = () => (
  <div className="ofst" style={{ width:390, background:'var(--ofst-base)', fontFamily:'var(--ofst-font)', color:'var(--ofst-ink)' }}>
    <MobileHeader/>
    {/* Mobile hero */}
    <section style={{ padding:'20px 20px 28px' }}>
      <span className="ofst-chip ofst-chip-yellow" style={{ fontSize:11 }}>New · Magnetic Gear Wall</span>
      <h1 style={{ fontSize:36, fontWeight:700, lineHeight:1.06, marginTop:14, letterSpacing:'-.02em' }}>Let's play <span style={{ color:'var(--ofst-coral)' }}>together</span> today.</h1>
      <p style={{ marginTop:12, fontSize:15, color:'var(--ofst-mid)', lineHeight:1.6 }}>Magnetic wooden STEM toys and honest play ideas from parents figuring it out too.</p>
      <div style={{ marginTop:18, display:'grid', gap:10 }}>
        <Btn variant="cta" iconRight="arrow">Shop magnetic toys</Btn>
        <Btn variant="outline">Explore activities</Btn>
      </div>
      <div style={{ marginTop:22, aspectRatio:'4/5', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', boxShadow:'var(--ofst-shadow-lg)' }}>
        <img src="assets/gear-3.png" className="ofst-img" alt=""/>
      </div>
    </section>
    {/* Featured STEM horizontal scroll */}
    <section style={{ padding:'24px 0 28px', background:'var(--ofst-base)' }}>
      <div style={{ padding:'0 20px', marginBottom:14 }}>
        <span className="ofst-eyebrow" style={{ color:'var(--ofst-coral)' }}>The hero stuff</span>
        <h2 style={{ fontSize:24, fontWeight:700, marginTop:4 }}>Magnetic wooden toys</h2>
      </div>
      <div style={{ display:'flex', gap:12, padding:'0 20px', overflowX:'auto' }}>
        {[['gear-1','Gear Wall',148],['wall-1','Pipe Wall',186],['gear-2','Big Gears',68]].map(([img,t,p],i)=>(
          <div key={i} style={{ minWidth:220, background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'var(--ofst-shadow)' }}>
            <div style={{ aspectRatio:'1/1', background:'#EFE7DB' }}><img src={`assets/${img}.png`} className="ofst-img" alt=""/></div>
            <div style={{ padding:12 }}>
              <p style={{ fontSize:14, fontWeight:600 }}>{t}</p>
              <p style={{ fontSize:14, marginTop:2 }}>${p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Activities */}
    <section style={{ padding:'24px 20px', background:'#F6F1E8' }}>
      <span className="ofst-eyebrow" style={{ color:'var(--ofst-teal)' }}>Activities together</span>
      <h2 style={{ fontSize:22, fontWeight:700, marginTop:4, lineHeight:1.25 }}>Helpful stuff from parents who\'ve been there.</h2>
      <div style={{ marginTop:14, borderRadius:14, overflow:'hidden', position:'relative', aspectRatio:'16/11' }}>
        <img src="assets/gear-3.png" className="ofst-img" alt=""/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 40%, rgba(38,70,83,.8))' }}/>
        <button style={{ position:'absolute', top:'42%', left:'50%', transform:'translate(-50%,-50%)', width:52, height:52, borderRadius:26, background:'rgba(255,255,255,.95)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}><Icon name="play" size={20} stroke="var(--ofst-coral)"/></button>
        <div style={{ position:'absolute', left:14, right:14, bottom:14, color:'#fff' }}>
          <p style={{ fontSize:11, fontWeight:600, opacity:.9 }}>VIDEO · 3 MIN</p>
          <h3 style={{ fontSize:17, fontWeight:700, marginTop:4 }}>Setting up the gear wall</h3>
        </div>
      </div>
    </section>
    {/* Phone book banner */}
    <section style={{ padding:'28px 20px', background:'var(--ofst-base)' }}>
      <div style={{ background:'var(--ofst-ink)', color:'#fff', borderRadius:14, padding:22 }}>
        <span className="ofst-chip" style={{ background:'rgba(255,204,92,.2)', color:'var(--ofst-yellow)', fontSize:11 }}>The unusual one</span>
        <h2 style={{ fontSize:22, fontWeight:700, marginTop:10, lineHeight:1.2 }}>A phone book cover for how parents actually use phones.</h2>
        <Btn variant="cta" size="sm" iconRight="arrow" style={{ marginTop:14 }}>Discover it</Btn>
      </div>
    </section>
    {/* Newsletter */}
    <section style={{ padding:'28px 20px 40px', background:'var(--ofst-base)' }}>
      <div style={{ background:'#FFF3D1', borderRadius:14, padding:22, textAlign:'center' }}>
        <Icon name="mail" size={26} stroke="var(--ofst-ink)"/>
        <h3 style={{ fontSize:22, fontWeight:700, marginTop:8 }}>Join the Journey</h3>
        <p style={{ marginTop:8, fontSize:13, color:'var(--ofst-mid)' }}>Weekly play ideas, new drops, occasional codes.</p>
        <div style={{ marginTop:14, background:'#fff', borderRadius:999, padding:4, display:'flex' }}>
          <input placeholder="your@inbox.com" style={{ flex:1, border:0, outline:'none', padding:'0 12px', background:'transparent', fontSize:14 }}/>
          <button className="ofst-btn ofst-btn-cta ofst-btn-sm" style={{ minHeight:40 }}>Count me in</button>
        </div>
      </div>
    </section>
    {/* Tab bar */}
    <div style={{ position:'sticky', bottom:0, background:'#fff', borderTop:'1px solid rgba(38,70,83,.08)', display:'grid', gridTemplateColumns:'repeat(4,1fr)', padding:'10px 0 14px' }}>
      {[['menu','Shop'],['sparkle','Activities'],['heart','Saved'],['user','You']].map(([ic,t],i)=>(
        <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4, color: i===0?'var(--ofst-coral)':'var(--ofst-mid)' }}>
          <Icon name={ic} size={20} stroke={i===0?'var(--ofst-coral)':'var(--ofst-mid)'}/>
          <span style={{ fontSize:11, fontWeight:600 }}>{t}</span>
        </div>
      ))}
    </div>
  </div>
);

const MobileProduct = () => (
  <div className="ofst" style={{ width:390, background:'var(--ofst-base)' }}>
    <MobileHeader/>
    <div style={{ aspectRatio:'1/1', background:'#EFE7DB', position:'relative' }}>
      <img src="assets/gear-1.png" className="ofst-img" alt=""/>
      <span className="ofst-chip ofst-chip-yellow" style={{ position:'absolute', top:14, left:14, fontSize:11 }}>Best seller</span>
    </div>
    <div style={{ padding:'20px 20px 120px' }}>
      <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ofst-coral)' }}>Wooden STEM Toys</p>
      <h1 style={{ fontSize:28, fontWeight:700, marginTop:6, lineHeight:1.1 }}>Magnetic Gear Wall — Starter</h1>
      <div style={{ marginTop:8, display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--ofst-mid)' }}>
        <span style={{ display:'inline-flex', gap:1 }}>{[0,1,2,3,4].map(s=><Icon key={s} name="star" size={13} stroke="#FFB629"/>)}</span>
        <span>4.9 · 312 reviews</span>
      </div>
      <p style={{ marginTop:14, fontSize:15, color:'var(--ofst-mid)', lineHeight:1.6 }}>Ten magnetic wooden gears, one sturdy birch wall, approximately 45 blissful minutes of quiet.</p>
      <div style={{ marginTop:18, fontSize:28, fontWeight:700 }}>$148</div>
      <div style={{ marginTop:10 }}><span className="ofst-chip ofst-chip-teal" style={{ fontSize:12 }}>Pay in 4 · $37 w/ Shop Pay</span></div>
      <div style={{ marginTop:18, display:'grid', gap:8 }}>
        {[['Starter · 10 gears','$148',true],['Expanded · 18 gears','$198',false]].map((o,i)=>(
          <div key={i} style={{ padding:'12px 14px', borderRadius:10, border:`2px solid ${o[2]?'var(--ofst-ink)':'rgba(38,70,83,.15)'}`, background:'#fff', display:'flex', justifyContent:'space-between' }}>
            <span style={{ fontSize:14, fontWeight:600 }}>{o[0]}</span>
            <span style={{ fontSize:14, color:'var(--ofst-mid)' }}>{o[1]}</span>
          </div>
        ))}
      </div>
    </div>
    <div style={{ position:'sticky', bottom:0, padding:'12px 16px 18px', background:'#fff', borderTop:'1px solid rgba(38,70,83,.08)', display:'flex', gap:10 }}>
      <button style={{ width:48, height:48, borderRadius:24, background:'var(--ofst-soft)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}><Icon name="heart" size={20}/></button>
      <Btn variant="cta" style={{ flex:1 }} iconRight="arrow">Add to cart · $148</Btn>
    </div>
  </div>
);

const PoliciesPage = () => (
  <PageFrame>
    <SiteHeader/>
    <section style={{ padding:'56px 48px 80px', background:'var(--ofst-base)' }}>
      <div style={{ maxWidth:980, margin:'0 auto', display:'grid', gridTemplateColumns:'220px 1fr', gap:48 }}>
        <aside>
          <span className="ofst-eyebrow">Policies</span>
          <nav style={{ marginTop:14, display:'grid', gap:6 }}>
            {[['Shipping & Returns',true],['Privacy Policy',false],['Terms of Service',false],['Safety & Compliance',false],['Accessibility',false]].map(([t,a],i)=>(
              <a key={i} style={{ padding:'10px 14px', borderRadius:8, background: a?'#fff':'transparent', fontWeight: a?600:500, fontSize:14, color: a?'var(--ofst-ink)':'var(--ofst-mid)' }}>{t}</a>
            ))}
          </nav>
        </aside>
        <article>
          <h1 className="ofst-display" style={{ fontSize:40 }}>Shipping & Returns</h1>
          <p style={{ fontSize:13, color:'var(--ofst-mid)', marginTop:6 }}>Last updated: April 2026</p>
          <div style={{ marginTop:28, display:'grid', gap:24 }}>
            {[
              ['When your order ships','Most orders leave our Michigan workshop within 2 business days. Big wall sets can take up to 4 because we sand them by hand. We\'ll email tracking the moment it leaves.'],
              ['Free shipping','On orders over $60 within the US. International is $24 flat to Canada, Mexico, UK, EU, and Australia.'],
              ['Returns — the short version','30 days, any reason, free return label. Kid outgrew it, partner hates it, it didn\'t spark joy — send it back.'],
              ['Returns — the small print','Products should come back in usable condition. If something was defective, you don\'t even need to return it — we send a replacement.'],
              ['Lifetime breakage replacement','If any wooden piece splits, warps, or a magnet ever pops loose, email care@ofst.co with a photo. We send a new piece free, forever. This applies whether you bought it last week or in 2021.'],
            ].map(([t,s],i)=>(
              <div key={i}>
                <h3 className="ofst-h2" style={{ fontSize:20 }}>{t}</h3>
                <p style={{ marginTop:8, fontSize:16, lineHeight:1.7, color:'var(--ofst-mid)' }}>{s}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
    <SiteFooter/>
  </PageFrame>
);

// Design tokens board (for the "Overall Site Cohesion" panel)
const DesignSystemPanel = () => {
  const Swatch = ({ name, hex, light }) => (
    <div style={{ display:'grid', gridTemplateColumns:'52px 1fr', gap:14, alignItems:'center' }}>
      <div style={{ width:52, height:52, background:hex, borderRadius:10, boxShadow:'inset 0 0 0 1px rgba(38,70,83,.08)' }}/>
      <div>
        <div style={{ fontSize:14, fontWeight:600 }}>{name}</div>
        <div style={{ fontSize:12, color:'var(--ofst-mid)', fontFamily:'ui-monospace, monospace' }}>{hex}</div>
      </div>
    </div>
  );
  return (
    <div className="ofst" style={{ background:'#fff', padding:'40px 44px' }}>
      <h1 className="ofst-display" style={{ fontSize:40 }}>OFST site system — at a glance</h1>
      <p style={{ marginTop:8, color:'var(--ofst-mid)', maxWidth:620 }}>Locked to <code>design.md</code>. No new colors, no new fonts. Every page below uses this palette and type scale.</p>

      <h2 className="ofst-h2" style={{ marginTop:32, marginBottom:16 }}>Palette</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
        <Swatch name="Base / Background" hex="#E4DDD3"/>
        <Swatch name="Primary · Logo" hex="#7EC8D8"/>
        <Swatch name="Text · Headers" hex="#264653"/>
        <Swatch name="CTA · Coral" hex="#FF6A6A"/>
        <Swatch name="Playful · Yellow" hex="#FFCC5C"/>
        <Swatch name="Surface · White" hex="#FFFFFF"/>
      </div>

      <h2 className="ofst-h2" style={{ marginTop:36, marginBottom:16 }}>Typography · Inter var</h2>
      <div style={{ display:'grid', gap:14, background:'var(--ofst-base)', padding:'24px 28px', borderRadius:12 }}>
        <div><span className="ofst-eyebrow">Display · 48/56 · 700</span><div className="ofst-display">Hey fellow warrior.</div></div>
        <div><span className="ofst-eyebrow">H1 · 32/38 · 600</span><div className="ofst-h1">Magnetic wooden toys that actually hold attention.</div></div>
        <div><span className="ofst-eyebrow">H2 · 24/31 · 600</span><div className="ofst-h2">Shop by category</div></div>
        <div><span className="ofst-eyebrow">Body · 16/26 · 400</span><p className="ofst-body" style={{ maxWidth:580 }}>Solid birch. Strong magnets. No screens, no batteries, no flashing lights. Just real hands building real things — together.</p></div>
      </div>

      <h2 className="ofst-h2" style={{ marginTop:36, marginBottom:16 }}>Buttons</h2>
      <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
        <Btn variant="primary">Primary · Teal</Btn>
        <Btn variant="cta">CTA · Coral</Btn>
        <Btn variant="dark">Dark · Ink</Btn>
        <Btn variant="outline">Outline · Ink</Btn>
        <Btn variant="ghost">Ghost</Btn>
      </div>

      <h2 className="ofst-h2" style={{ marginTop:36, marginBottom:16 }}>Chips & badges</h2>
      <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
        <Chip tone="yellow">Best seller</Chip>
        <Chip tone="coral">New</Chip>
        <Chip tone="teal">Parent-tested</Chip>
        <Chip tone="ink">Ages 3+</Chip>
      </div>

      <h2 className="ofst-h2" style={{ marginTop:36, marginBottom:12 }}>Voice — quick reference</h2>
      <ul style={{ columns:2, columnGap:40, padding:0, listStyle:'none', fontSize:15, lineHeight:1.7, color:'var(--ofst-mid)' }}>
        <li>✓ "Hey fellow warrior…"</li>
        <li>✓ "No judgment. Just hustle together."</li>
        <li>✓ "We tried this so you don\'t have to."</li>
        <li>✗ "Shop our premium curated collection."</li>
        <li>✗ "Elevate your child\'s developmental journey."</li>
        <li>✗ Corporate, perfect, salesy copy.</li>
      </ul>
    </div>
  );
};

// Tinker / Shopify section map (content spec, readable in focus mode)
const TinkerSectionMap = () => {
  const rows = [
    ['1 · Hero Banner','Tinker → Image Banner','Full-width, #E4DDD3 base + teal glow','"Hey fellow warrior — let\'s play together today."','CTA: Shop magnetic toys (coral pill)'],
    ['2 · Featured STEM','Tinker → Featured Collection','4-up product grid, #E4DDD3 base','"Magnetic wooden toys that actually hold their attention."','4 hero products + "See all" link'],
    ['3 · Activities Teaser','Tinker → Blog Posts + custom Video block','#F6F1E8 soft warm section','"Helpful stuff, from parents who\'ve been there."','1 feature + 3 small posts, filter tabs'],
    ['4 · Shop by Category','Tinker → Collection List','3 collection cards (1 wide, 2 small)','"Find what fits your kid today."','Wooden STEM / Phone Book / Clothing'],
    ['5 · Real Parent Moments','Tinker → Testimonials','3-column quote cards, #F6F1E8','"Not reviews. Just honest notes."','3 real parent quotes with city + initial'],
    ['6 · Phone Book Banner','Tinker → Image with Text (inverted)','Dark ink #264653 panel','"A phone book cover, for how parents actually use phones."','Single CTA → product'],
    ['7 · Newsletter · Join the Journey','Tinker → Newsletter','Yellow #FFF3D1 pill section','"Weekly meal ideas, new toy releases, play guides."','Klaviyo / Shopify Email'],
    ['8 · Final Gentle CTA','Tinker → Rich Text','Centered italic, soft divider','"We\'re taking these first steps together."','Signature: — The OFST family'],
  ];
  return (
    <div className="ofst" style={{ background:'#fff', padding:'40px 44px' }}>
      <h1 className="ofst-display" style={{ fontSize:38 }}>Homepage → Tinker section map</h1>
      <p style={{ marginTop:8, color:'var(--ofst-mid)', maxWidth:680 }}>Eight native Tinker sections, in order. No custom Liquid required for the homepage — Activities Teaser and Phone Book Banner use existing blocks with copy/image swaps. Custom Liquid only needed for the Free Resources grid and Activities Hub filter.</p>
      <div style={{ marginTop:24, border:'1px solid rgba(38,70,83,.1)', borderRadius:12, overflow:'hidden' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1.2fr 1.3fr 2fr 1.5fr', background:'var(--ofst-ink)', color:'#fff', fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase' }}>
          {['Section','Tinker block','Look','Headline','CTA / content'].map(h=>(<div key={h} style={{ padding:'12px 14px' }}>{h}</div>))}
        </div>
        {rows.map((r,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1.3fr 1.2fr 1.3fr 2fr 1.5fr', background: i%2?'#F6F1E8':'#fff', fontSize:13, lineHeight:1.5 }}>
            {r.map((c,j)=>(<div key={j} style={{ padding:'14px', color: j===0?'var(--ofst-ink)':'var(--ofst-mid)', fontWeight: j===0?600:400, borderTop:'1px solid rgba(38,70,83,.08)' }}>{c}</div>))}
          </div>
        ))}
      </div>

      <h2 className="ofst-h2" style={{ marginTop:36 }}>Sitemap</h2>
      <div style={{ marginTop:16, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
        {[
          ['Shop', ['Wooden STEM Toys (primary)','Phone Book Covers','Kids Clothing','Sale','All Products']],
          ['Helpful', ['Activities Together (hub)','Free Resources','Bedtime Stories','Play Guides','Our Story']],
          ['Care', ['Shipping & Returns','FAQ / Contact','Safety & Compliance','Privacy','Terms']],
        ].map(([t,ls],i)=>(
          <div key={i} style={{ background:'var(--ofst-base)', padding:20, borderRadius:10 }}>
            <h4 style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ofst-coral)' }}>{t}</h4>
            <ul style={{ listStyle:'none', padding:0, margin:'12px 0 0', display:'grid', gap:8, fontSize:14 }}>
              {ls.map(l=><li key={l}>{l}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { MobileHomepage, MobileProduct, PoliciesPage, DesignSystemPanel, TinkerSectionMap });
