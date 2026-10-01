/* @ds-bundle: {"format":4,"namespace":"IndiVisualEyesDesignSystem_896a08","components":[{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"FrameCard","sourcePath":"components/content/FrameCard.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/content/ImagePlaceholder.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Logo","sourcePath":"components/navigation/Logo.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/FeatureCard.jsx":"3e77a8f429a3","components/content/FrameCard.jsx":"3e4d36fa4eba","components/content/ImagePlaceholder.jsx":"97e03cc5d252","components/core/Button.jsx":"4943f0566c6e","components/core/Eyebrow.jsx":"26c621a7c849","components/core/Field.jsx":"2aa5090dfc49","components/core/Input.jsx":"eddf00989ca0","components/core/Select.jsx":"d5c265bdab3a","components/core/Textarea.jsx":"08968d480f24","components/navigation/Logo.jsx":"f9051a50dc0d","components/navigation/SiteFooter.jsx":"bc064f6cebf5","components/navigation/SiteHeader.jsx":"493d7cb41a81","ui_kits/website/About.jsx":"73fa5ad47f4c","ui_kits/website/Book.jsx":"fcb529caf778","ui_kits/website/Frames.jsx":"15b584b49b89","ui_kits/website/Home.jsx":"03a404a03b54","ui_kits/website/Shared.jsx":"d51dfb699878"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IndiVisualEyesDesignSystem_896a08 = window.IndiVisualEyesDesignSystem_896a08 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ImagePlaceholder.jsx
try { (() => {
function ImagePlaceholder({
  label = 'FRAME — FRONT, 4:3',
  ratio = '4/3',
  tone = 'sand',
  style,
  ...rest
}) {
  const ink = tone === 'ink';
  return React.createElement('div', {
    ...rest,
    style: {
      aspectRatio: ratio,
      background: ink ? 'var(--placeholder-stripes-ink)' : 'var(--placeholder-stripes)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--space-5,24px)',
      borderRadius: 'var(--radius-image,0)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      font: '400 11px/1.6 var(--font-mono)',
      letterSpacing: 'var(--tracking-label,0.14em)',
      textTransform: 'uppercase',
      color: ink ? 'var(--mute)' : 'var(--mute)'
    }
  }, label));
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  font: 'var(--weight-semibold,600) 16px/1 var(--font-ui)',
  minHeight: 'var(--control-height,48px)',
  padding: '0 var(--control-padding-x,24px)',
  borderRadius: 'var(--radius-control,2px)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2,8px)',
  cursor: 'pointer',
  transition: 'var(--transition-control)',
  boxSizing: 'border-box',
  textDecoration: 'none',
  border: '1px solid transparent',
  whiteSpace: 'nowrap'
};
function Button({
  variant = 'primary',
  onInk = false,
  state = 'rest',
  disabled = false,
  href,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const isDisabled = disabled || state === 'disabled';
  let s = {
    ...base
  };
  if (variant === 'primary') {
    s = {
      ...s,
      background: state === 'hover' ? 'var(--amber-hover)' : 'var(--amber)',
      color: 'var(--text-on-accent)'
    };
    if (state === 'focus') s = {
      ...s,
      outline: '2px solid var(--ink)',
      outlineOffset: '2px',
      background: 'var(--amber-hover)'
    };
    if (isDisabled) s = {
      ...s,
      background: 'var(--amber-disabled)',
      color: 'var(--mute)'
    };
  } else if (variant === 'secondary') {
    s = {
      ...s,
      background: 'transparent',
      border: '1px solid ' + (onInk ? 'var(--warm-white)' : 'var(--ink)'),
      color: onInk ? 'var(--warm-white)' : 'var(--ink)'
    };
    if (state === 'hover') s = {
      ...s,
      background: onInk ? 'rgba(250,248,244,.08)' : 'var(--sand)'
    };
    if (isDisabled) s = {
      ...s,
      borderColor: 'var(--line)',
      color: 'var(--mute)'
    };
  } else {
    s = {
      ...s,
      background: 'transparent',
      padding: '0',
      minHeight: 'auto',
      color: onInk ? 'var(--amber)' : 'var(--amber-text)',
      borderBottom: '1px solid ' + (onInk ? 'var(--amber)' : 'var(--amber-text)'),
      paddingBottom: '4px',
      borderRadius: 0
    };
    if (state === 'hover') s = {
      ...s,
      borderBottomColor: 'var(--ink)',
      color: onInk ? 'var(--warm-white)' : 'var(--ink)'
    };
    if (isDisabled) s = {
      ...s,
      color: 'var(--mute)',
      borderBottomColor: 'var(--line)'
    };
  }
  if (isDisabled) s = {
    ...s,
    cursor: 'not-allowed'
  };
  const Tag = href && !isDisabled ? 'a' : 'button';
  return React.createElement(Tag, {
    ...rest,
    href,
    type: Tag === 'button' ? type : undefined,
    disabled: Tag === 'button' ? isDisabled : undefined,
    onClick: isDisabled ? undefined : onClick,
    style: {
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'mute',
  style,
  ...rest
}) {
  const color = tone === 'amber' ? 'var(--amber)' : tone === 'ink' ? 'var(--ink)' : 'var(--mute)';
  return React.createElement('p', {
    ...rest,
    style: {
      font: '400 11px/1.4 var(--font-mono)',
      letterSpacing: 'var(--tracking-label,0.14em)',
      textTransform: 'uppercase',
      color,
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function FeatureCard({
  eyebrow = 'Feature card',
  title,
  body,
  action,
  href = '#',
  style,
  ...rest
}) {
  return React.createElement('section', {
    ...rest,
    style: {
      background: 'var(--ink)',
      color: 'var(--warm-white)',
      padding: 'var(--space-6,32px)',
      borderRadius: 'var(--radius-card,0)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3,12px)',
      alignItems: 'flex-start',
      ...style
    }
  }, eyebrow ? React.createElement(__ds_scope.Eyebrow, {
    tone: 'amber'
  }, eyebrow) : null, React.createElement('h3', {
    style: {
      font: '400 34px/1.15 var(--font-display)',
      letterSpacing: '-0.01em',
      color: 'var(--warm-white)',
      margin: 'var(--space-2,8px) 0 0'
    }
  }, title), body ? React.createElement('p', {
    style: {
      font: '400 14px/1.6 var(--font-ui)',
      color: 'var(--line)',
      margin: 0
    }
  }, body) : null, action ? React.createElement(__ds_scope.Button, {
    href,
    style: {
      marginTop: 'var(--space-4,16px)'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/FrameCard.jsx
try { (() => {
function FrameCard({
  brand,
  model,
  spec,
  action = 'Try it on in store',
  href = '#',
  image,
  style,
  ...rest
}) {
  return React.createElement('article', {
    ...rest,
    style: {
      border: '1px solid var(--line)',
      background: 'var(--paper)',
      borderRadius: 'var(--radius-card,0)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: brand + ' ' + model,
    style: {
      width: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover',
      display: 'block'
    }
  }) : React.createElement(__ds_scope.ImagePlaceholder, {
    label: 'FRAME — FRONT, 4:3'
  }), React.createElement('div', {
    style: {
      padding: 'var(--space-5,24px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2,8px)'
    }
  }, React.createElement(__ds_scope.Eyebrow, null, brand), React.createElement('h3', {
    style: {
      font: 'var(--weight-semibold,600) 22px/1.3 var(--font-ui)',
      color: 'var(--ink)',
      margin: 0
    }
  }, model), React.createElement('p', {
    style: {
      font: '400 14px/1.55 var(--font-ui)',
      color: 'var(--slate)',
      margin: 0
    }
  }, spec), React.createElement('hr', {
    style: {
      border: 0,
      borderTop: '1px solid var(--line)',
      margin: 'var(--space-4,16px) 0 var(--space-3,12px)'
    }
  }), React.createElement('a', {
    href,
    style: {
      font: '400 14px/1.4 var(--font-ui)',
      color: 'var(--amber-text)',
      textDecoration: 'none',
      borderBottom: '1px solid transparent',
      alignSelf: 'flex-start'
    }
  }, action)));
}
Object.assign(__ds_scope, { FrameCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FrameCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
const labelStyle = {
  font: '400 11px/1.4 var(--font-mono)',
  letterSpacing: 'var(--tracking-label,0.14em)',
  textTransform: 'uppercase',
  color: 'var(--slate)',
  display: 'block',
  marginBottom: 'var(--space-2,8px)'
};
function Field({
  label,
  error,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, label ? React.createElement('label', {
    style: labelStyle
  }, label) : null, children, error ? React.createElement('p', {
    style: {
      font: '400 14px/1.5 var(--font-ui)',
      color: 'var(--text-error)',
      margin: 'var(--space-2,8px) 0 0'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
const control = {
  font: '400 16px/1.4 var(--font-ui)',
  color: 'var(--ink)',
  background: 'var(--sand)',
  border: '1px solid var(--ink)',
  borderRadius: 'var(--radius-control,2px)',
  padding: '0 var(--space-4,16px)',
  height: 'var(--control-height,48px)',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'var(--transition-control)'
};
function states(p) {
  let s = {
    ...control
  };
  if (p.focused) s = {
    ...s,
    background: 'var(--paper)',
    outline: '2px solid var(--amber)',
    outlineOffset: '-3px'
  };
  if (p.invalid) s = {
    ...s,
    borderColor: 'var(--error)',
    background: 'var(--paper)'
  };
  if (p.disabled) s = {
    ...s,
    background: 'var(--line)',
    borderColor: 'var(--line)',
    color: 'var(--mute)',
    cursor: 'not-allowed'
  };
  return s;
}
function Input({
  focused,
  invalid,
  disabled,
  style,
  ...rest
}) {
  return React.createElement('input', {
    ...rest,
    disabled,
    style: {
      ...states({
        focused,
        invalid,
        disabled
      }),
      ...style
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
const control = {
  font: '400 16px/1.4 var(--font-ui)',
  color: 'var(--ink)',
  background: 'var(--sand)',
  border: '1px solid var(--ink)',
  borderRadius: 'var(--radius-control,2px)',
  padding: '0 var(--space-4,16px)',
  height: 'var(--control-height,48px)',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'var(--transition-control)'
};
function states(p) {
  let s = {
    ...control
  };
  if (p.focused) s = {
    ...s,
    background: 'var(--paper)',
    outline: '2px solid var(--amber)',
    outlineOffset: '-3px'
  };
  if (p.invalid) s = {
    ...s,
    borderColor: 'var(--error)',
    background: 'var(--paper)'
  };
  if (p.disabled) s = {
    ...s,
    background: 'var(--line)',
    borderColor: 'var(--line)',
    color: 'var(--mute)',
    cursor: 'not-allowed'
  };
  return s;
}
function Select({
  focused,
  invalid,
  disabled,
  options = [],
  children,
  style,
  ...rest
}) {
  return React.createElement('select', {
    ...rest,
    disabled,
    style: {
      ...states({
        focused,
        invalid,
        disabled
      }),
      appearance: 'auto',
      ...style
    }
  }, children || options.map((o, i) => React.createElement('option', {
    key: i,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
const control = {
  font: '400 16px/1.4 var(--font-ui)',
  color: 'var(--ink)',
  background: 'var(--sand)',
  border: '1px solid var(--ink)',
  borderRadius: 'var(--radius-control,2px)',
  padding: '0 var(--space-4,16px)',
  height: 'var(--control-height,48px)',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'var(--transition-control)'
};
function states(p) {
  let s = {
    ...control
  };
  if (p.focused) s = {
    ...s,
    background: 'var(--paper)',
    outline: '2px solid var(--amber)',
    outlineOffset: '-3px'
  };
  if (p.invalid) s = {
    ...s,
    borderColor: 'var(--error)',
    background: 'var(--paper)'
  };
  if (p.disabled) s = {
    ...s,
    background: 'var(--line)',
    borderColor: 'var(--line)',
    color: 'var(--mute)',
    cursor: 'not-allowed'
  };
  return s;
}
function Textarea({
  focused,
  invalid,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  return React.createElement('textarea', {
    ...rest,
    rows,
    disabled,
    style: {
      ...states({
        focused,
        invalid,
        disabled
      }),
      height: 'auto',
      padding: 'var(--space-3,12px) var(--space-4,16px)',
      resize: 'vertical',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Logo.jsx
try { (() => {
function Logo({
  src = '../../assets/logo-indivisual-eyes.png',
  width = 160,
  alt = 'IndiVisual Eyes',
  style,
  ...rest
}) {
  return React.createElement('img', {
    ...rest,
    src,
    alt,
    style: {
      width,
      height: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const mono = {
  font: '400 11px/1.4 var(--font-mono)',
  letterSpacing: 'var(--tracking-label,0.14em)',
  textTransform: 'uppercase',
  color: 'var(--amber)',
  margin: '0 0 var(--space-3,12px)'
};
function SiteFooter({
  logoSrc,
  tagline = 'To See and Be Seen.',
  address = ['1200 K Street, Suite 5', 'Sacramento, CA 95814'],
  hours = ['Mon–Fri 10:00–18:00', '1st & 3rd Sat 11:00–17:00'],
  links = ['Frames', 'Custom fittings', 'Eye exams', 'Contact'],
  copyright = '© 2026 INDIVISUAL EYES',
  style,
  ...rest
}) {
  const body = {
    font: '400 16px/1.7 var(--font-ui)',
    color: 'var(--warm-white)',
    margin: 0
  };
  return React.createElement('footer', {
    ...rest,
    style: {
      background: 'var(--ink)',
      color: 'var(--warm-white)',
      padding: 'var(--space-8,72px) var(--space-6,32px) var(--space-6,32px)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-6,32px)',
      maxWidth: 'var(--container-max,1140px)',
      margin: '0 auto'
    }
  }, React.createElement('div', null, React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    width: 210
  }), React.createElement('p', {
    style: {
      font: 'italic 400 24px/1.3 var(--font-display)',
      color: 'var(--warm-white)',
      margin: 'var(--space-5,24px) 0 0'
    }
  }, tagline)), React.createElement('div', null, React.createElement('p', {
    style: mono
  }, 'Visit'), address.map(l => React.createElement('p', {
    key: l,
    style: body
  }, l))), React.createElement('div', null, React.createElement('p', {
    style: mono
  }, 'Hours'), hours.map(l => React.createElement('p', {
    key: l,
    style: body
  }, l))), React.createElement('div', null, React.createElement('p', {
    style: mono
  }, 'Site'), links.map(l => React.createElement('p', {
    key: l,
    style: body
  }, React.createElement('a', {
    href: '#',
    style: {
      color: 'var(--warm-white)',
      textDecoration: 'none'
    }
  }, l))))), React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max,1140px)',
      margin: 'var(--space-8,72px) auto 0',
      borderTop: '1px solid var(--border-on-ink)',
      paddingTop: 'var(--space-5,24px)'
    }
  }, React.createElement('p', {
    style: {
      font: '400 11px/1.4 var(--font-mono)',
      letterSpacing: 'var(--tracking-label,0.14em)',
      color: 'var(--mute)',
      margin: 0
    }
  }, copyright)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  variant = 'split',
  active = 'Frames',
  items = ['Frames', 'Custom', 'Eye exams', 'About'],
  onNavigate,
  logoSrc,
  utilityLeft = '1200 K Street, Sacramento',
  utilityRight = 'MON–FRI 10–6 · 1ST & 3RD SAT 11–5',
  cta = 'Book',
  style,
  ...rest
}) {
  const onHero = variant === 'hero';
  const mono = {
    font: '400 11px/1 var(--font-mono)',
    letterSpacing: 'var(--tracking-label,0.14em)',
    textTransform: 'uppercase'
  };
  return React.createElement('header', {
    ...rest,
    style: {
      width: '100%',
      ...style
    }
  }, onHero ? null : React.createElement('div', {
    style: {
      background: 'var(--ink)',
      color: 'var(--line)',
      height: 'var(--utility-bar-height,40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-6,32px)',
      ...mono
    }
  }, React.createElement('span', null, utilityLeft), React.createElement('span', null, utilityRight)), React.createElement('div', {
    style: {
      background: onHero ? 'var(--ink)' : 'var(--warm-white)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7,48px)',
      padding: 'var(--space-4,16px) var(--space-6,32px)',
      borderBottom: onHero ? 'none' : '1px solid var(--line)'
    }
  }, React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    width: 150
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 'var(--space-6,32px)',
      marginLeft: 'auto'
    }
  }, items.map(it => React.createElement('a', {
    key: it,
    href: '#',
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      font: 'var(--weight-medium,500) 16px/1 var(--font-ui)',
      color: onHero ? 'var(--warm-white)' : 'var(--ink)',
      textDecoration: 'none',
      paddingBottom: '6px',
      borderBottom: '2px solid ' + (it === active && !onHero ? 'var(--amber)' : 'transparent')
    }
  }, it))), React.createElement(__ds_scope.Button, {
    onClick: () => onNavigate && onNavigate(cta),
    style: {
      marginLeft: 'var(--space-5,24px)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "About",
    logoSrc: LOGO,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      background: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "02 \u2014 About",
    title: "1200 K Street, Sacramento",
    lead: "Independent and owner-operated. Curtis has been fitting frames on K Street for years. Come in and try them on."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gutter,32px)'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "PORTRAIT \u2014 CUSTOMER WEARING FRAMES, 3:4",
    ratio: "3/4"
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: '400 14px/1.55 var(--font-ui)',
      color: 'var(--slate)',
      padding: 'var(--space-4,16px) 0 0'
    }
  }, "Eye level, natural expression, shop visible behind.")), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "PLACE \u2014 K STREET EXTERIOR AT DUSK, 3:4",
    ratio: "3/4"
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: '400 14px/1.55 var(--font-ui)',
      color: 'var(--slate)',
      padding: 'var(--space-4,16px) 0 0'
    }
  }, "The downtown context. Used once, in About."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      padding: 'var(--space-8,72px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6,32px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "amber"
  }, "Hours"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.7 var(--font-ui)',
      color: 'var(--warm-white)',
      margin: 'var(--space-3,12px) 0 0'
    }
  }, "Mon\u2013Fri 10:00\u201318:00", /*#__PURE__*/React.createElement("br", null), "1st & 3rd Sat 11:00\u201317:00")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Book')
  }, "Book an appointment"))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: LOGO
  }));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Book.jsx
try { (() => {
function Book({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const [phone, setPhone] = React.useState('916-476');
  const invalid = phone.replace(/\D/g, '').length < 10;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "Eye exams",
    logoSrc: LOGO,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      background: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "03 \u2014 Appointments",
    title: "Book an eye exam",
    lead: "Exams, fittings and repairs all start here. We answer the same day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gutter,32px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (!invalid) setSent(true);
    },
    style: {
      border: '1px solid var(--line)',
      background: 'var(--paper)',
      padding: 'var(--space-6,32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5,24px)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Jordan Reyes"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "jordan@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    error: invalid ? 'Enter a full 10-digit phone number.' : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    value: phone,
    invalid: invalid,
    onChange: e => setPhone(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Reason for visit"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Eye exam', 'Frame fitting', 'Repair', 'Something else']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Notes"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Anything we should know"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: invalid,
    style: {
      alignSelf: 'flex-start'
    }
  }, "Request appointment"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.55 var(--font-ui)',
      color: 'var(--amber-text)',
      margin: 0
    }
  }, "Requested. We will call to confirm.") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6,32px)'
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "DETAIL \u2014 LAB WORK, HANDS ON FRAME, 3:4",
    ratio: "4/3"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Visit"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.7 var(--font-ui)',
      margin: 'var(--space-3,12px) 0 var(--space-5,24px)'
    }
  }, "1200 K Street, Suite 5", /*#__PURE__*/React.createElement("br", null), "Sacramento, CA 95814"), /*#__PURE__*/React.createElement(Eyebrow, null, "Hours"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.7 var(--font-ui)',
      margin: 'var(--space-3,12px) 0 var(--space-5,24px)'
    }
  }, "Mon\u2013Fri 10:00\u201318:00", /*#__PURE__*/React.createElement("br", null), "1st & 3rd Sat 11:00\u201317:00"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    href: "tel:9164443012"
  }, "Call (916) 444-3012")))))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: LOGO
  }));
}
window.Book = Book;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Book.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Frames.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Frames({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "Frames",
    logoSrc: LOGO,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      background: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "01 \u2014 Frames",
    title: "The collection",
    lead: "Prada, Gucci, Burberry, Louis Vuitton. Photographed straight on, one crop, so you can compare them honestly."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gutter,32px)'
    }
  }, FRAMES.map(fr => /*#__PURE__*/React.createElement(FrameCard, _extends({
    key: fr.model
  }, fr))), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Nothing here fits?",
    body: "We make frames to your measurements in the shop.",
    action: "Start a fitting",
    href: "#"
  })))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: LOGO
  }));
}
window.Frames = Frames;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Frames.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    variant: "hero",
    logoSrc: LOGO,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "HERO IMAGE \u2014 SHOP INTERIOR OR FRAME CLOSE-UP, 16:6",
    ratio: "16/6",
    tone: "ink",
    style: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 'var(--space-5,24px) var(--space-6,32px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 80px/1.02 var(--font-display)',
      letterSpacing: '-0.02em',
      color: 'var(--warm-white)',
      margin: 0,
      maxWidth: '760px'
    }
  }, "Frames, fitted."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'italic 400 26px/1.3 var(--font-display)',
      color: 'var(--line)',
      margin: 'var(--space-4,16px) 0 var(--space-6,32px)'
    }
  }, "To See and Be Seen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4,16px)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Book')
  }, "Book an appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onInk: true,
    onClick: () => go('Frames')
  }, "View the collection")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      background: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The shop",
    title: "An independent optical boutique on K Street.",
    lead: "Every frame is adjusted by hand in the shop. Lenses are cut in our on-site lab, which means most jobs are finished in days, not weeks."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gutter,32px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "On-site lab"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      marginTop: 'var(--space-3,12px)'
    }
  }, "Cutting and fitting happen here, not at a regional facility.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Owner-fit frames"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      marginTop: 'var(--space-3,12px)'
    }
  }, "Curtis has been fitting frames on K Street for years.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Prada \xB7 Gucci \xB7 Burberry"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      marginTop: 'var(--space-3,12px)'
    }
  }, "A short, considered wall. Come in and try them on."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      background: 'var(--paper)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Collection",
    title: "The collection"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gutter,32px)'
    }
  }, FRAMES.slice(0, 2).map(fr => /*#__PURE__*/React.createElement(FrameCard, _extends({
    key: fr.model
  }, fr))), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Custom frames, made to your measurements.",
    body: "Cut and finished in our on-site lab.",
    action: "Start a fitting",
    href: "#"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-7,48px)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: () => go('Frames')
  }, "See every frame")))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: LOGO
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Button,
  Eyebrow,
  FrameCard,
  FeatureCard,
  ImagePlaceholder,
  Field,
  Input,
  Select,
  Textarea
} = window.IndiVisualEyesDesignSystem_896a08;
const LOGO = '../../assets/logo-indivisual-eyes.png';
const container = {
  maxWidth: 'var(--container-max,1140px)',
  margin: '0 auto',
  padding: '0 var(--space-6,32px)'
};
const section = {
  padding: 'var(--section-y,104px) 0'
};
const h2 = {
  font: '400 42px/1.1 var(--font-display)',
  letterSpacing: '-0.01em',
  margin: '12px 0 0'
};
const body = {
  font: '400 16px/1.65 var(--font-ui)',
  color: 'var(--slate)',
  maxWidth: '620px'
};
function SectionHead({
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--space-7,48px)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      marginTop: 'var(--space-4,16px)'
    }
  }, lead) : null);
}
const FRAMES = [{
  brand: 'Prada',
  model: 'PR 17WV',
  spec: 'Acetate · 52–18–140'
}, {
  brand: 'Gucci',
  model: 'GG 0396O',
  spec: 'Metal · 54–17–145'
}, {
  brand: 'Burberry',
  model: 'BE 2308',
  spec: 'Acetate · 53–17–140'
}, {
  brand: 'Louis Vuitton',
  model: 'LV 1258E',
  spec: 'Metal · 55–18–145'
}];
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Button,
  Eyebrow,
  FrameCard,
  FeatureCard,
  ImagePlaceholder,
  Field,
  Input,
  Select,
  Textarea,
  LOGO,
  container,
  section,
  h2,
  body,
  SectionHead,
  FRAMES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.FrameCard = __ds_scope.FrameCard;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
