export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: #0a0a0a; }

      /* ── Smooth vertical caret (MonkeyType style) ──────── */
      .smooth-cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 2.5px !important;
        pointer-events: none;
        z-index: 2;
        border-radius: 1px;
        background: #e5e5e5;
        transition: transform 0.12s cubic-bezier(0.22, 1, 0.36, 1),
                    height 0.08s ease;
        will-change: transform;
      }

      /* Gentle pulse when idle */
      @keyframes caret-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }
      .smooth-cursor.idle {
        animation: caret-blink 1s ease-in-out infinite;
      }

      /* ── Scrollbar ──────────────────────────────────────── */
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
    `}</style>
  );
}
