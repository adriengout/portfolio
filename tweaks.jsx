// Tweaks panel
const { useState, useEffect } = React;

function PortfolioTweaks(){
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || {
    accent: "#00ffd5",
    background: "#0a0a0a",
    showSnake: true,
    showGrain: true,
    customCursor: true
  });

  // apply live
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--bg', t.background);
    // update derived dim
    document.documentElement.style.setProperty('--accent-dim', t.accent);
  }, [t.accent, t.background]);

  useEffect(() => {
    const card = document.querySelector('.snake-card');
    if(card) card.style.display = t.showSnake ? '' : 'none';
    const hero = document.querySelector('.hero');
    if(hero) hero.style.gridTemplateColumns = t.showSnake ? '1.4fr 1fr' : '1fr';
  }, [t.showSnake]);

  useEffect(() => {
    const grain = document.querySelector('body');
    if(t.showGrain) grain.classList.remove('no-grain');
    else grain.classList.add('no-grain');
  }, [t.showGrain]);

  useEffect(() => {
    const c = document.getElementById('cur');
    if(c) c.style.display = t.customCursor ? '' : 'none';
    document.body.style.cursor = t.customCursor ? '' : 'auto';
  }, [t.customCursor]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Couleurs">
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak('accent', v)}
          options={['#00ffd5', '#ff7a59', '#a78bfa', '#7dd3fc', '#facc15', '#f472b6']}
        />
        <TweakColor
          label="Fond"
          value={t.background}
          onChange={(v) => setTweak('background', v)}
          options={['#0a0a0a', '#0a0e14', '#0d0a1a', '#0f0f0a', '#fafaf7']}
        />
      </TweakSection>
      <TweakSection title="Affichage">
        <TweakToggle
          label="Snake jouable"
          value={t.showSnake}
          onChange={(v) => setTweak('showSnake', v)}
        />
        <TweakToggle
          label="Grain texturé"
          value={t.showGrain}
          onChange={(v) => setTweak('showGrain', v)}
        />
        <TweakToggle
          label="Curseur custom"
          value={t.customCursor}
          onChange={(v) => setTweak('customCursor', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// expose defaults globally for hook
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;

// mount
const tweakRoot = document.createElement('div');
tweakRoot.id = '__tweaks_root';
document.body.appendChild(tweakRoot);
ReactDOM.createRoot(tweakRoot).render(<PortfolioTweaks />);

// no-grain style
const s = document.createElement('style');
s.textContent = `body.no-grain::before{display:none}`;
document.head.appendChild(s);
