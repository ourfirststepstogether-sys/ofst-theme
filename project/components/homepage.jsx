// OFST Homepage — follows website-structure.md section order exactly

const HomeHero = () => (
  <section style={{ background:'#fff', padding:'72px 48px 80px', position:'relative', overflow:'hidden' }}>
    {/* playful scattered accent shapes */}
    <div style={{ position:'absolute', top:60, left:40, width:18, height:18, borderRadius:9, background:'var(--ofst-yellow)' }}/>
    <div style={{ position:'absolute', top:200, left:120, width:10, height:10, borderRadius:5, background:'var(--ofst-coral)' }}/>
    <div style={{ position:'absolute', bottom:80, left:40, width:14, height:14, borderRadius:7, background:'var(--ofst-teal)' }}/>
    <div style={{ position:'absolute', top:-80, right:-80, width:320, height:320, borderRadius:'50%', background:'rgba(255,204,92,.18)' }}/>
    <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:64, alignItems:'center', maxWidth:1200, margin:'0 auto' }}>
      <div>
        <span className="ofst-chip ofst-chip-yellow" style={{ marginBottom:24, display:'inline-flex' }}>
          <span>🌱</span> New · Magnetic Gear Wall just landed
        </span>
        <h1 className="ofst-display" style={{ fontSize:78, lineHeight:1.0, maxWidth:640, color:'#000' }}>
          Hey fellow warrior —<br/>
          let's play <span className="ofst-squiggle" style={{ color:'var(--ofst-coral)' }}>together</span> today.
        </h1>
        <p className="ofst-body" style={{ marginTop:28, maxWidth:500, color:'#000', fontSize:18, fontWeight:500 }}>
          Magnetic wooden STEM toys, bedtime stories, and honest play ideas from parents figuring this out right alongside you. One real moment at a time.
        </p>
        <div style={{ marginTop:30, display:'flex', gap:12, flexWrap:'wrap' }}>
          <Btn variant="cta" iconRight="arrow">Shop magnetic toys</Btn>
          <Btn variant="outline">Explore activities</Btn>
        </div>
        <div style={{ marginTop:40, display:'flex', gap:32, alignItems:'center', fontSize:14, color:'#000', fontWeight:600 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:34, height:34, borderRadius:17, background:'var(--ofst-teal)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}><Icon name="truck" size={18} stroke="#fff"/></span>
            Free shipping $60+
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:34, height:34, borderRadius:17, background:'var(--ofst-coral)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}><Icon name="shield" size={18} stroke="#fff"/></span>
            Parent-tested
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:34, height:34, borderRadius:17, background:'var(--ofst-yellow)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}><Icon name="leaf" size={18} stroke="#1a1a1a"/></span>
            Solid birch
          </div>
        </div>
      </div>
      {/* Hero image collage */}
      <div style={{ position:'relative', height:520 }}>
        <div style={{ position:'absolute', top:0, right:0, width:'78%', height:'82%', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', boxShadow:'var(--ofst-shadow-lg)' }}>
          <img src="assets/gear-3.png" className="ofst-img" alt="child playing with gear wall"/>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, width:'58%', height:'52%', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', boxShadow:'var(--ofst-shadow-lg)', border:'6px solid var(--ofst-base)' }}>
          <img src="assets/pipe-1.png" className="ofst-img" alt="child with pipe wall"/>
        </div>
        {/* floating testimonial card */}
        <div style={{ position:'absolute', top:30, left:-10, background:'#fff', borderRadius:14, padding:'14px 18px', boxShadow:'var(--ofst-shadow-lg)', maxWidth:230, fontSize:13, lineHeight:1.5 }}>
          <div style={{ display:'flex', gap:2, marginBottom:6, color:'#FFB629' }}>
            {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={13} stroke="#FFB629"/>)}
          </div>
          <p style={{ color:'var(--ofst-ink)', fontWeight:500 }}>"My two-year-old played with the gear wall for 45 minutes. <em>45 minutes.</em> Unheard of."</p>
          <p style={{ marginTop:6, fontSize:11, color:'var(--ofst-mid)' }}>— Jamie, dad of two</p>
        </div>
        {/* playful dot cluster */}
        <div style={{ position:'absolute', bottom:-10, right:90, display:'flex', gap:4 }}>
          <span style={{ width:10, height:10, borderRadius:5, background:'var(--ofst-coral)' }}/>
          <span style={{ width:10, height:10, borderRadius:5, background:'var(--ofst-yellow)' }}/>
          <span style={{ width:10, height:10, borderRadius:5, background:'var(--ofst-teal)' }}/>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedSTEM = () => {
  const products = [
    { img:'assets/gear-1.png', name:'Magnetic Gear Wall — Starter', price:'$148', tag:'Best seller', ages:'Ages 2–6' },
    { img:'assets/wall-1.png', name:'Pipe & Ramp Play Wall', price:'$186', tag:'New', ages:'Ages 3–7' },
    { img:'assets/gear-2.png', name:'Big Gears Expansion Set', price:'$68', tag:null, ages:'Ages 3+' },
    { img:'assets/pipe-1.png', name:'Pipe Builder Add-On', price:'$54', tag:null, ages:'Ages 3+' },
  ];
  return (
    <section style={{ padding:'96px 48px', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:20, marginBottom:36 }}>
          <div>
            <span className="ofst-eyebrow">The hero stuff ✨</span>
            <h2 className="ofst-h1" style={{ marginTop:10, fontSize:44 }}>Magnetic wooden toys that actually <span style={{ color:'var(--ofst-coral)' }}>hold their attention</span>.</h2>
            <p className="ofst-body" style={{ marginTop:12, maxWidth:620 }}>
              Solid birch. Strong magnets. No screens, no batteries, no flashing lights. Just real hands building real things — together.
            </p>
          </div>
          <a className="ofst-link">See all wooden toys <Icon name="arrow" size={14}/></a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20 }}>
          {products.map((p, i) => (
            <article key={i} className="ofst-card" style={{ display:'flex', flexDirection:'column' }}>
              <div style={{ position:'relative', aspectRatio:'1/1', background:'#EFE7DB' }}>
                <img src={p.img} className="ofst-img" alt={p.name}/>
                {p.tag && (
                  <span className={`ofst-chip ${p.tag==='New' ? 'ofst-chip-coral' : 'ofst-chip-yellow'}`} style={{ position:'absolute', top:12, left:12, fontSize:11 }}>{p.tag}</span>
                )}
                <button aria-label="save" style={{ position:'absolute', top:10, right:10, background:'#fff', width:36, height:36, borderRadius:18, display:'inline-flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 6px rgba(0,0,0,.08)' }}>
                  <Icon name="heart" size={16}/>
                </button>
              </div>
              <div style={{ padding:'16px 16px 18px' }}>
                <p style={{ fontSize:12, color:'var(--ofst-mid)', fontWeight:700 }}>{p.ages}</p>
                <h3 className="ofst-h3" style={{ fontSize:17, marginTop:4, lineHeight:1.3 }}>{p.name}</h3>
                <div style={{ marginTop:14, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:'var(--ofst-font-display)', fontSize:22, fontWeight:700 }}>{p.price}</span>
                  <button className="ofst-btn ofst-btn-cta ofst-btn-sm">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivitiesTeaser = () => {
  const cards = [
    { kind:'Video', title:'Setting up the gear wall without losing your mind', dur:'3 min', tone:'teal', img:'assets/gear-3.png' },
    { kind:'Bedtime story', title:'Little Gear Who Wouldn\'t Turn', dur:'6 min read', tone:'yellow' },
    { kind:'Play guide', title:'10 ways to play with pipes (that aren\'t the obvious 3)', dur:'Free PDF', tone:'coral', img:'assets/pipe-1.png' },
    { kind:'Parent note', title:'On the 4pm meltdown and magnetic toys', dur:'5 min read', tone:'warm' },
  ];
  return (
    <section style={{ padding:'96px 48px', background:'var(--ofst-bg-alt)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:20, marginBottom:32 }}>
          <div>
            <span className="ofst-eyebrow" style={{ color:'var(--ofst-teal)' }}>Activities Together 🎈</span>
            <h2 className="ofst-h1" style={{ marginTop:10, fontSize:44 }}>Helpful stuff, from parents who\'ve been there.</h2>
            <p className="ofst-body" style={{ marginTop:12, maxWidth:620 }}>
              Short videos, bedtime stories, and honest play guides — made for the days the toddler is feral and you\'re out of ideas.
            </p>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <span className="ofst-tab ofst-tab-active">All</span>
            <span className="ofst-tab">Videos</span>
            <span className="ofst-tab">Stories</span>
            <span className="ofst-tab">Guides</span>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:20 }}>
          {/* Big feature card */}
          <article style={{ gridRow:'span 2', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', position:'relative', minHeight:460, boxShadow:'var(--ofst-shadow)' }}>
            <img src="assets/gear-3.png" className="ofst-img" alt=""/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(38,70,83,0) 40%, rgba(38,70,83,.85))' }}/>
            <button style={{ position:'absolute', top:'44%', left:'50%', transform:'translate(-50%,-50%)', width:72, height:72, borderRadius:36, background:'rgba(255,255,255,.95)', display:'inline-flex', alignItems:'center', justifyContent:'center', boxShadow:'0 10px 30px rgba(0,0,0,.3)' }}>
              <Icon name="play" size={30} stroke="var(--ofst-coral)"/>
            </button>
            <div style={{ position:'absolute', left:24, right:24, bottom:24, color:'#fff' }}>
              <span className="ofst-chip ofst-chip-coral" style={{ fontSize:11 }}>Video · 3 min</span>
              <h3 className="ofst-h2" style={{ color:'#fff', marginTop:12, fontSize:26, maxWidth:420 }}>Setting up the gear wall (without losing your mind)</h3>
              <p style={{ fontSize:14, opacity:.9, marginTop:8 }}>Watch Maya walk through it in real time — toddler interruptions included.</p>
            </div>
          </article>
          {cards.slice(1).map((c, i) => (
            <article key={i} className="ofst-card" style={{ display:'flex', flexDirection:'column' }}>
              <div style={{ aspectRatio:'16/10', background: c.tone==='yellow' ? '#FFE9B8' : c.tone==='coral' ? '#FFD8D8' : '#E8DFD2', position:'relative', overflow:'hidden' }}>
                {c.img ? <img src={c.img} className="ofst-img" alt=""/> : (
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Icon name={c.kind==='Bedtime story' ? 'book' : 'sparkle'} size={48} stroke={c.tone==='yellow' ? '#E09A1F' : c.tone==='coral' ? '#C04646' : 'var(--ofst-ink)'}/>
                  </div>
                )}
              </div>
              <div style={{ padding:'16px 18px 18px' }}>
                <span style={{ fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ofst-mid)' }}>{c.kind} · {c.dur}</span>
                <h3 style={{ fontSize:17, fontWeight:600, marginTop:6, lineHeight:1.35 }}>{c.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShopByCategory = () => {
  const cats = [
    { t:'Magnetic Wooden STEM Toys', s:'14 pieces · the hero collection', img:'assets/gear-1.png', tone:'teal' },
    { t:'Phone Book Covers', s:'A parent tool, in disguise', img:null, tone:'yellow' },
    { t:'Kids Clothing', s:'Soft, honest, made-to-last', img:null, tone:'coral' },
  ];
  return (
    <section style={{ padding:'96px 48px', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ marginBottom:28 }}>
          <span className="ofst-eyebrow">Shop by category 🛍️</span>
          <h2 className="ofst-h1" style={{ marginTop:10, fontSize:40 }}>Find what fits your kid today.</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr', gap:20 }}>
          {cats.map((c,i) => (
            <a key={i} style={{ position:'relative', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', minHeight: i===0? 340 : 340, background: c.tone==='teal' ? '#CDE6ED' : c.tone==='yellow' ? '#FFE9B8' : '#FFD8D8', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:24, boxShadow:'var(--ofst-shadow)' }}>
              {c.img && <img src={c.img} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} alt=""/>}
              {c.img && <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 50%, rgba(38,70,83,.72))' }}/>}
              {!c.img && (
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', opacity:.35 }}>
                  <Icon name={i===1?'book':'heart'} size={120} stroke="var(--ofst-ink)"/>
                </div>
              )}
              <div style={{ position:'relative', color: c.img ? '#fff' : 'var(--ofst-ink)' }}>
                <h3 style={{ fontSize:24, fontWeight:700, letterSpacing:'-.01em' }}>{c.t}</h3>
                <p style={{ fontSize:14, opacity:.85, marginTop:4 }}>{c.s}</p>
                <span style={{ marginTop:14, display:'inline-flex', alignItems:'center', gap:6, fontSize:14, fontWeight:600, padding:'8px 14px', background: c.img ? 'rgba(255,255,255,.95)' : '#fff', color:'var(--ofst-ink)', borderRadius:'var(--ofst-pill)' }}>Shop collection <Icon name="arrow" size={14}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ParentMoments = () => {
  const quotes = [
    { q:'"I bought it skeptical. My 3yo is still building things with it six months later. It\'s the toy we\'ve kept."', a:'Sana, mom of one', city:'Austin, TX' },
    { q:'"It got both kids to play side-by-side instead of fighting. I don\'t know what witchcraft this is."', a:'Derek & Pri', city:'Portland, OR' },
    { q:'"Honestly? I use the phone book cover more than she does. No shame."', a:'Lauren, mom of two', city:'Columbus, OH' },
  ];
  return (
    <section style={{ padding:'96px 48px', background:'var(--ofst-bg-alt)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <span className="ofst-eyebrow" style={{ color:'var(--ofst-coral)' }}>Real parent moments 💖</span>
          <h2 className="ofst-h1" style={{ marginTop:10, fontSize:40 }}>Not reviews. Just honest notes from fellow parents.</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
          {quotes.map((q,i) => (
            <figure key={i} style={{ background:'#fff', borderRadius:'var(--ofst-radius)', padding:28, boxShadow:'var(--ofst-shadow)' }}>
              <div style={{ display:'flex', gap:2, color:'#FFB629', marginBottom:10 }}>
                {[0,1,2,3,4].map(s=><Icon key={s} name="star" size={14} stroke="#FFB629"/>)}
              </div>
              <blockquote style={{ fontSize:17, lineHeight:1.55, color:'var(--ofst-ink)', fontWeight:500 }}>{q.q}</blockquote>
              <figcaption style={{ marginTop:18, display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:36, height:36, borderRadius:18, background:'var(--ofst-teal)', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:14 }}>{q.a[0]}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600 }}>{q.a}</div>
                  <div style={{ fontSize:12, color:'var(--ofst-mid)' }}>{q.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhoneBookBanner = () => (
  <section style={{ padding:'96px 48px', background:'#fff' }}>
    <div style={{ maxWidth:1200, margin:'0 auto', borderRadius:'var(--ofst-radius-lg)', overflow:'hidden', background:'var(--ofst-ink)', color:'#fff', display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:440 }}>
      <div style={{ padding:'56px 48px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <span className="ofst-chip" style={{ background:'rgba(255,204,92,.25)', color:'var(--ofst-yellow)', alignSelf:'flex-start', fontSize:12, fontWeight:700 }}>The unusual one 📓</span>
        <h2 style={{ fontFamily:'var(--ofst-font-display)', fontSize:42, fontWeight:700, lineHeight:1.05, marginTop:18, letterSpacing:'-.02em' }}>A phone book cover,<br/>for the way parents actually use phones.</h2>
        <p style={{ marginTop:18, fontSize:17, color:'rgba(255,255,255,.82)', maxWidth:460, lineHeight:1.65 }}>
          Yes, a phone book cover. Hand-bound, refillable, keeps little hands busy during the pediatrician waiting room. A strange little thing we're weirdly proud of.
        </p>
        <div style={{ marginTop:28, display:'flex', gap:12 }}>
          <Btn variant="cta" iconRight="arrow">Discover this special parent tool</Btn>
        </div>
      </div>
      <div style={{ position:'relative', background:'#3a5f6e' }}>
        <PhotoPH label="lifestyle · phone book cover in a parent's lap at a pediatrician waiting room · warm overhead light" tone="dark" height="100%"/>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section style={{ padding:'96px 48px', background:'#fff' }}>
    <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center', background:'#FFF3D1', padding:'64px 48px', borderRadius:'var(--ofst-radius-lg)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-30, left:-30, width:100, height:100, borderRadius:50, background:'var(--ofst-coral)', opacity:.2 }}/>
      <div style={{ position:'absolute', bottom:-40, right:-40, width:140, height:140, borderRadius:70, background:'var(--ofst-teal)', opacity:.3 }}/>
      <div style={{ position:'relative' }}>
        <Icon name="mail" size={36} stroke="var(--ofst-ink)"/>
        <h2 className="ofst-h1" style={{ fontSize:36, marginTop:12 }}>Join the Journey</h2>
        <p className="ofst-body" style={{ marginTop:10, maxWidth:540, margin:'10px auto 0', color:'var(--ofst-mid)' }}>
          Weekly meal ideas, new toy releases, play guides, and occasional discount codes — straight to your inbox. Unsubscribe whenever. No judgment.
        </p>
        <form style={{ marginTop:28, display:'flex', gap:8, maxWidth:480, margin:'28px auto 0', background:'#fff', padding:6, borderRadius:'var(--ofst-pill)', boxShadow:'var(--ofst-shadow)' }}>
          <input placeholder="your@inbox.com" style={{ flex:1, border:0, outline:'none', padding:'0 16px', fontFamily:'inherit', fontSize:15, background:'transparent' }}/>
          <button className="ofst-btn ofst-btn-cta" style={{ minHeight:44 }}>Count me in</button>
        </form>
        <p style={{ marginTop:14, fontSize:12, color:'var(--ofst-mid)' }}>~1 email a week. Pinky promise.</p>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section style={{ padding:'60px 48px 100px', background:'#fff', textAlign:'center' }}>
    <div className="ofst-rule" style={{ margin:'0 auto 24px' }}/>
    <p style={{ fontSize:22, fontStyle:'italic', color:'var(--ofst-ink)', maxWidth:640, margin:'0 auto', fontWeight:500, lineHeight:1.4 }}>
      "We\'re taking these first steps together — one real moment at a time."
    </p>
    <p style={{ marginTop:14, fontSize:13, color:'var(--ofst-mid)', letterSpacing:'.1em', textTransform:'uppercase', fontWeight:600 }}>— The OFST family</p>
  </section>
);

const Homepage = () => (
  <PageFrame>
    <SiteHeader/>
    <HomeHero/>
    <FeaturedSTEM/>
    <ActivitiesTeaser/>
    <ShopByCategory/>
    <ParentMoments/>
    <PhoneBookBanner/>
    <Newsletter/>
    <FinalCTA/>
    <SiteFooter/>
  </PageFrame>
);

Object.assign(window, { Homepage });
