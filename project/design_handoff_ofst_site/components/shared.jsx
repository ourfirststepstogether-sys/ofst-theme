// Shared OFST components — logo, header, footer, primitives used across pages

const OFSTLogo = ({ size = 28, variant = 'color' }) => {
  // Wordmark-only rendering of "Our First Steps" using brand colors.
  // Matches the logo rules: never distort, never recolor outside palette.
  const teal = '#7EC8D8', coral = '#FF6A6A', yellow = '#FFCC5C', ink = '#264653';
  const white = '#FFFFFF';
  const c = variant === 'white'
    ? { o: white, ur: white, first: white, s: white, teps: white, foot: white }
    : { o: teal, ur: teal, first: coral, s: coral, teps: yellow, foot: coral };
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:0, fontFamily:'Inter, sans-serif', fontWeight: 800, fontSize: size, letterSpacing:'-0.02em', lineHeight:1 }}>
      <span style={{ color: c.o }}>O</span>
      <span style={{ color: c.ur }}>ur</span>
      <span style={{ color: c.first, marginLeft: size*0.12 }}>Fir</span>
      <span style={{ color: c.s, position:'relative', display:'inline-flex', alignItems:'flex-end' }}>
        <span>S</span>
        {/* tiny footprint dot — derived from the uploaded logo */}
        <svg width={size*0.45} height={size*0.45} viewBox="0 0 20 20" style={{ position:'absolute', top:-size*0.12, left:-size*0.05 }} aria-hidden="true">
          <ellipse cx="10" cy="13" rx="4.5" ry="5.5" fill={c.foot}/>
          <circle cx="6" cy="5" r="1.6" fill={c.foot}/>
          <circle cx="9" cy="3" r="1.5" fill={c.foot}/>
          <circle cx="12.5" cy="3.5" r="1.4" fill={c.foot}/>
          <circle cx="15.5" cy="5.5" r="1.3" fill={c.foot}/>
        </svg>
      </span>
      <span style={{ color: c.teps }}>teps</span>
    </span>
  );
};

const Icon = ({ name, size = 20, stroke = 'currentColor', strokeWidth = 2 }) => {
  const p = { fill:'none', stroke, strokeWidth, strokeLinecap:'round', strokeLinejoin:'round' };
  const paths = {
    search: <><circle cx="11" cy="11" r="7" {...p}/><path d="M20 20l-3.5-3.5" {...p}/></>,
    user:   <><circle cx="12" cy="8" r="4" {...p}/><path d="M4 20c1-4 5-6 8-6s7 2 8 6" {...p}/></>,
    cart:   <><path d="M4 5h2l2 11h11l2-8H7" {...p}/><circle cx="10" cy="20" r="1.3" {...p}/><circle cx="17" cy="20" r="1.3" {...p}/></>,
    heart:  <><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" {...p}/></>,
    menu:   <><path d="M4 7h16M4 12h16M4 17h16" {...p}/></>,
    close:  <><path d="M6 6l12 12M18 6L6 18" {...p}/></>,
    chevron:<><path d="M6 9l6 6 6-6" {...p}/></>,
    arrow:  <><path d="M5 12h14M13 6l6 6-6 6" {...p}/></>,
    play:   <><path d="M8 5l11 7-11 7z" fill={stroke} stroke="none"/></>,
    check:  <><path d="M5 12l5 5L20 7" {...p}/></>,
    star:   <><path d="M12 3l2.6 5.5 6 .6-4.5 4 1.3 6L12 16l-5.4 3.1 1.3-6-4.5-4 6-.6z" {...p} fill={stroke}/></>,
    download:<><path d="M12 4v11M7 11l5 5 5-5M5 20h14" {...p}/></>,
    mail:   <><rect x="3" y="6" width="18" height="13" rx="2" {...p}/><path d="M3 7l9 7 9-7" {...p}/></>,
    book:   <><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z" {...p}/><path d="M8 7h8M8 11h8" {...p}/></>,
    sparkle:<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" {...p}/></>,
    leaf:   <><path d="M4 20s2-10 16-16c0 14-10 16-16 16zM4 20l8-8" {...p}/></>,
    truck:  <><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" {...p}/><circle cx="7" cy="17" r="1.5" {...p}/><circle cx="17" cy="17" r="1.5" {...p}/></>,
    shield: <><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" {...p}/><path d="M9 12l2 2 4-4" {...p}/></>,
    filter: <><path d="M3 5h18M6 12h12M10 19h4" {...p}/></>,
    pdf:    <><path d="M7 3h8l4 4v14H7z" {...p}/><path d="M15 3v5h4" {...p}/><text x="8" y="17" fontSize="5" fill={stroke} stroke="none" fontWeight="700">PDF</text></>,
    hand:   <><path d="M7 10V5a1.5 1.5 0 013 0v5M10 10V4a1.5 1.5 0 013 0v6M13 10V5a1.5 1.5 0 013 0v7M16 10V7a1.5 1.5 0 013 0v9a5 5 0 01-5 5h-2a5 5 0 01-5-5v-2l-2-3a1.6 1.6 0 012.2-2.3L9 11" {...p}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name] || null}</svg>;
};

const Btn = ({ variant='primary', size, icon, iconRight, children, style, ...rest }) => (
  <button className={`ofst-btn ofst-btn-${variant} ${size==='sm'?'ofst-btn-sm':''}`} style={style} {...rest}>
    {icon && <Icon name={icon} size={size==='sm'?16:18}/>}
    <span>{children}</span>
    {iconRight && <Icon name={iconRight} size={size==='sm'?16:18}/>}
  </button>
);

const Chip = ({ tone='soft', children, icon }) => (
  <span className={`ofst-chip ${tone!=='soft' ? 'ofst-chip-'+tone : ''}`}>
    {icon && <Icon name={icon} size={14}/>} {children}
  </span>
);

// Inline SVG placeholder "photo" for lifestyle shots we don't have real images for.
// Warm tones, monospace caption so it reads as a brief, not a finished image.
const PhotoPH = ({ label, tone='warm', height='100%', ratio }) => {
  const bg = tone === 'dark' ? '#2f5663' : tone === 'teal' ? '#cfe7ee' : tone === 'coral' ? '#FFD8D8' : tone === 'yellow' ? '#FFE9B8' : '#E8DFD2';
  const stripe = tone === 'dark' ? 'rgba(255,255,255,.06)' : 'rgba(38,70,83,.06)';
  const text = tone === 'dark' ? '#cfe3e8' : '#56524E';
  const style = {
    width:'100%', height, aspectRatio: ratio, background: bg,
    backgroundImage:`repeating-linear-gradient(135deg, ${stripe} 0 1px, transparent 1px 14px)`,
    display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center',
    padding:'16px', color:text, fontFamily:'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize:11, letterSpacing:'.06em', textTransform:'uppercase', lineHeight:1.5,
  };
  return <div style={style}>[ {label} ]</div>;
};

// Standard site header, used across most page frames
const SiteHeader = ({ compact=false, onOpenMenu, mobileMenuOpen=false }) => (
  <header style={{
    background:'#F6F1E8', borderBottom:'1px solid rgba(38,70,83,.08)',
    padding: compact ? '10px 24px' : '14px 32px', position:'sticky', top:0, zIndex:20,
  }}>
    <div style={{ display:'flex', alignItems:'center', gap:24 }}>
      <OFSTLogo size={compact ? 22 : 24}/>
      <nav style={{ display:'flex', gap:22, marginLeft:28, fontSize:15, fontWeight:500 }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:4 }}>Shop <Icon name="chevron" size={14}/></span>
        <span>Activities Together</span>
        <span>Free Resources</span>
        <span>Our Story</span>
      </nav>
      <div style={{ marginLeft:'auto', display:'flex', gap:14, alignItems:'center', color:'var(--ofst-ink)' }}>
        <Icon name="search" size={20}/>
        <Icon name="user" size={20}/>
        <span style={{ position:'relative' }}>
          <Icon name="cart" size={20}/>
          <span style={{ position:'absolute', top:-4, right:-6, background:'var(--ofst-coral)', color:'#fff', fontSize:10, fontWeight:700, borderRadius:10, minWidth:16, height:16, padding:'0 5px', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>2</span>
        </span>
      </div>
    </div>
  </header>
);

// Mobile header
const MobileHeader = () => (
  <header style={{ background:'#F6F1E8', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(38,70,83,.08)', position:'sticky', top:0, zIndex:20 }}>
    <Icon name="menu" size={22}/>
    <OFSTLogo size={20}/>
    <div style={{ display:'flex', gap:12 }}><Icon name="search" size={20}/><Icon name="cart" size={20}/></div>
  </header>
);

const SiteFooter = () => (
  <footer style={{ background:'var(--ofst-ink)', color:'#fff', padding:'56px 32px 24px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40, maxWidth:1200, margin:'0 auto' }}>
      <div>
        <OFSTLogo size={26} variant="white"/>
        <p style={{ marginTop:16, fontSize:14, lineHeight:1.7, color:'rgba(255,255,255,.78)', maxWidth:320 }}>
          Real first steps. No judgment. Just hustle together. Magnetic wooden STEM toys and thoughtful parent tools, made for the messy, beautiful middle.
        </p>
        <form style={{ marginTop:20, display:'flex', gap:8, background:'rgba(255,255,255,.08)', padding:6, borderRadius:'var(--ofst-pill)', maxWidth:360 }}>
          <input placeholder="your@inbox.com" style={{ background:'transparent', border:0, outline:'none', color:'#fff', flex:1, padding:'0 14px', fontSize:14, fontFamily:'inherit' }}/>
          <button style={{ background:'var(--ofst-coral)', color:'#fff', padding:'10px 18px', borderRadius:'var(--ofst-pill)', border:0, fontWeight:600, fontSize:13 }}>Join the Journey</button>
        </form>
      </div>
      {[
        { t:'Shop', l:['Magnetic Wooden STEM Toys','Phone Book Covers','Kids Clothing','Gift Cards','Sale'] },
        { t:'Helpful Stuff', l:['Activities Together','Free Resources','Bedtime Stories','Play Guides','Our Story'] },
        { t:'Care', l:['Shipping & Returns','FAQ / Contact','Safety & Compliance','Privacy Policy','Terms'] },
      ].map((col, i) => (
        <div key={i}>
          <h4 style={{ fontSize:14, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:14, color:'#fff' }}>{col.t}</h4>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:10, fontSize:14, color:'rgba(255,255,255,.78)' }}>
            {col.l.map(li => <li key={li}>{li}</li>)}
          </ul>
        </div>
      ))}
    </div>
    <div style={{ maxWidth:1200, margin:'40px auto 0', paddingTop:20, borderTop:'1px solid rgba(255,255,255,.12)', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:13, color:'rgba(255,255,255,.6)' }}>
      <span>© 2026 Our First Steps · <em style={{ color:'var(--ofst-yellow)', fontStyle:'normal' }}>Real First Steps. No Judgment. Just Hustle Together.</em></span>
      <div style={{ display:'flex', gap:14 }}><span>Instagram</span><span>TikTok</span><span>Pinterest</span><span>YouTube</span></div>
    </div>
  </footer>
);

// "Frame" wrapper used inside DCArtboards — scrollable container matching
// a full webpage width, but we set the artboard height to content-fit.
const PageFrame = ({ children, width = 1280 }) => (
  <div className="ofst" style={{ width, background:'var(--ofst-base)' }}>{children}</div>
);

Object.assign(window, { OFSTLogo, Icon, Btn, Chip, PhotoPH, SiteHeader, MobileHeader, SiteFooter, PageFrame });
