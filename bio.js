/* ============================================================
   bio.js — structural & mechanistic diagrams for the Atlas
   Every diagram is laid out from the MEASURED width so type never
   shrinks below its intended size; narrow widths get a stacked
   variant rather than a scaled-down one.
   Also: lazy real-structure viewers (3Dmol.js + RCSB coordinates).
   ============================================================ */
(function (w) {
  'use strict';
  var F = w.FIG, el = F.el, txt = F.txt, T = F.T, esc = F.esc, clip = F.clip, wrapLines = F.wrapLines, tw = F.tw;
  var C = F.C;
  var BLUE = '#0167EF', GREEN = '#00A86B', VIOLET = '#7C5CFF', AMBER = '#E08700', TEAL = '#0E9BA8',
      INK = '#10151C', INK2 = '#525E6E', INK3 = '#8792A3', LINE = '#D7DCE3', PANEL = '#F6F8FA';

  function svg(W, H, body) {
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img">' + body + '</svg>';
  }
  /* ---- structural primitives ---------------------------------- */
  /* α-helix drawn as a ribbon spring */
  function helix(x, y, len, amp, turns, color, horiz) {
    var pts = [], n = turns * 14;
    for (var i = 0; i <= n; i++) {
      var t = i / n, a = t * turns * Math.PI * 2;
      if (horiz) pts.push([x + len * t, y + Math.sin(a) * amp]);
      else pts.push([x + Math.sin(a) * amp, y + len * t]);
    }
    var d = 'M' + pts.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('L');
    return el('path', { d: d, fill: 'none', stroke: color, 'stroke-width': 5.5, 'stroke-linecap': 'round', opacity: .95 });
  }
  /* β-strand drawn as a flat arrow */
  function strand(x, y, len, wd, color, dir) {
    var hw = wd / 2, head = Math.min(11, len * .3);
    var d;
    if (dir === 'up') d = 'M' + (x - hw * .62) + ' ' + y + 'V' + (y - len + head) + 'L' + (x - hw) + ' ' + (y - len + head) +
      'L' + x + ' ' + (y - len) + 'L' + (x + hw) + ' ' + (y - len + head) + 'L' + (x + hw * .62) + ' ' + (y - len + head) + 'V' + y + 'Z';
    else if (dir === 'down') d = 'M' + (x - hw * .62) + ' ' + y + 'V' + (y + len - head) + 'L' + (x - hw) + ' ' + (y + len - head) +
      'L' + x + ' ' + (y + len) + 'L' + (x + hw) + ' ' + (y + len - head) + 'L' + (x + hw * .62) + ' ' + (y + len - head) + 'V' + y + 'Z';
    else d = 'M' + x + ' ' + (y - hw * .62) + 'H' + (x + len - head) + 'V' + (y - hw) + 'L' + (x + len) + ' ' + y +
      'L' + (x + len - head) + ' ' + (y + hw) + 'V' + (y + hw * .62) + 'H' + x + 'Z';
    return el('path', { d: d, fill: color, opacity: .92 });
  }
  function coil(d, color) { return el('path', { d: d, fill: 'none', stroke: color || LINE, 'stroke-width': 2.2, 'stroke-linecap': 'round' }); }
  function box(x, y, bw, bh, label, sub, tone, fs) {
    var tones = {
      b: ['rgba(1,103,239,.07)', 'rgba(1,103,239,.28)', BLUE],
      g: ['#E8F8F1', 'rgba(0,168,107,.3)', GREEN],
      v: ['rgba(124,92,255,.08)', 'rgba(124,92,255,.3)', VIOLET],
      a: ['rgba(224,135,0,.09)', 'rgba(224,135,0,.32)', AMBER],
      t: ['rgba(14,155,168,.08)', 'rgba(14,155,168,.3)', TEAL],
      n: [PANEL, 'rgba(16,24,40,.11)', INK3]
    };
    var tn = tones[tone || 'b'];
    var g = el('rect', { x: x, y: y, width: bw, height: bh, rx: 10, fill: tn[0], stroke: tn[1], 'stroke-width': 1 });
    fs = fs || 12.4;
    var ls = wrapLines(T(label), fs, bw - 16, 3);
    var sl = sub ? wrapLines(T(sub), 10.6, bw - 14, 3) : [];
    var th = ls.length * (fs + 2.4) + (sl.length ? sl.length * 12.4 + 3 : 0);
    var y0 = y + bh / 2 - th / 2 + (fs + 2.4) / 2;
    ls.forEach(function (l, i) { g += txt(x + bw / 2, y0 + i * (fs + 2.4), l, { fs: fs, fill: INK, anchor: 'middle', bl: 'central', fw: 660 }); });
    sl.forEach(function (l, i) { g += txt(x + bw / 2, y0 + ls.length * (fs + 2.4) + 2 + i * 12.4, l, { fs: 10.6, fill: INK2, anchor: 'middle', bl: 'central' }); });
    return g;
  }
  function arrowH(x1, y, x2, color, label) {
    var c = color || '#9FB4CC', g = el('path', { d: 'M' + x1 + ' ' + y + 'H' + (x2 - 6), stroke: c, 'stroke-width': 1.7 });
    g += el('path', { d: 'M' + (x2 - 7) + ' ' + (y - 4.5) + 'l6 4.5-6 4.5z', fill: c });
    if (label) g += txt((x1 + x2) / 2, y - 8, T(label), { fs: 10.4, fill: INK3, anchor: 'middle', fw: 600 });
    return g;
  }
  function arrowV(x, y1, y2, color, label) {
    var c = color || '#9FB4CC', g = el('path', { d: 'M' + x + ' ' + y1 + 'V' + (y2 - 6), stroke: c, 'stroke-width': 1.7 });
    g += el('path', { d: 'M' + (x - 4.5) + ' ' + (y2 - 7) + 'l4.5 6 4.5-6z', fill: c });
    if (label) g += txt(x + 8, (y1 + y2) / 2, T(label), { fs: 10.4, fill: INK3, fw: 600, bl: 'central' });
    return g;
  }
  function tag(x, y, label, color, bg) {
    var t2 = T(label), wd = tw(t2, 10.4) + 14;
    return el('rect', { x: x, y: y - 9, width: wd, height: 18, rx: 9, fill: bg || 'rgba(1,103,239,.08)' }) +
      txt(x + wd / 2, y, t2, { fs: 10.4, fill: color || '#0356C4', anchor: 'middle', bl: 'central', fw: 660 });
  }

  /* ---- fold cartoons (each draws inside a wxh cell) ----------- */
  var FOLDS = {
    /* 3-helix bundle — the first de novo designs */
    bundle: function (x, y, cw, ch) {
      var g = '', n = 3, sp = cw / (n + 1);
      for (var i = 0; i < n; i++) g += helix(x + sp * (i + 1), y + 14, ch - 34, 6.5, 4.5, [BLUE, TEAL, BLUE][i], false);
      g += coil('M' + (x + sp) + ' ' + (y + ch - 20) + 'q' + (sp / 2) + ' 16 ' + sp + ' 0', LINE);
      g += coil('M' + (x + sp * 2) + ' ' + (y + 14) + 'q' + (sp / 2) + ' -14 ' + sp + ' 0', LINE);
      return g;
    },
    /* Top7-like: mixed α/β, 5-strand sheet + 2 helices */
    top7: function (x, y, cw, ch) {
      var g = '', n = 5, sp = (cw - 26) / n;
      for (var i = 0; i < n; i++) g += strand(x + 13 + sp * (i + .5), y + ch - 20, ch - 48, 13, i % 2 ? '#2a78d6' : '#5598e7', 'up');
      g += helix(x + 16, y + 16, cw - 32, 6, 5, GREEN, true);
      g += coil('M' + (x + 13 + sp * .5) + ' ' + (y + ch - 18) + 'q' + sp / 2 + ' 13 ' + sp + ' 0', LINE);
      return g;
    },
    /* TIM barrel — 8 strands in a ring, helices outside */
    tim: function (x, y, cw, ch) {
      var cx = x + cw / 2, cy = y + ch / 2, R = Math.min(cw, ch) * .22, R2 = Math.min(cw, ch) * .38, g = '';
      for (var i = 0; i < 8; i++) {
        var a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        g += el('ellipse', { cx: cx + Math.cos(a) * R, cy: cy + Math.sin(a) * R, rx: 5.5, ry: 8,
          transform: 'rotate(' + (a * 180 / Math.PI + 90) + ' ' + (cx + Math.cos(a) * R) + ' ' + (cy + Math.sin(a) * R) + ')', fill: '#2a78d6', opacity: .9 });
        g += el('rect', { x: cx + Math.cos(a) * R2 - 4, y: cy + Math.sin(a) * R2 - 9, width: 8, height: 18, rx: 4,
          transform: 'rotate(' + (a * 180 / Math.PI + 90) + ' ' + (cx + Math.cos(a) * R2) + ' ' + (cy + Math.sin(a) * R2) + ')', fill: GREEN, opacity: .82 });
      }
      g += el('circle', { cx: cx, cy: cy, r: R - 9, fill: 'none', stroke: LINE, 'stroke-width': 1, 'stroke-dasharray': '2 3' });
      return g;
    },
    /* β-barrel — 8 strands, open cylinder */
    barrel: function (x, y, cw, ch) {
      var g = '', n = 8, sp = (cw - 24) / n;
      g += el('ellipse', { cx: x + cw / 2, cy: y + 18, rx: (cw - 24) / 2, ry: 9, fill: 'none', stroke: LINE, 'stroke-width': 1.3 });
      g += el('ellipse', { cx: x + cw / 2, cy: y + ch - 20, rx: (cw - 24) / 2, ry: 9, fill: 'none', stroke: LINE, 'stroke-width': 1.3 });
      for (var i = 0; i < n; i++) {
        var px = x + 12 + sp * (i + .5);
        g += strand(px, y + ch - 20, ch - 42, 11, i % 2 ? '#2a78d6' : '#6da7ec', 'up');
      }
      return g;
    },
    /* icosahedral nanocage */
    cage: function (x, y, cw, ch) {
      var cx = x + cw / 2, cy = y + ch / 2, R = Math.min(cw, ch) * .36, g = '';
      var pts = [];
      for (var i = 0; i < 5; i++) { var a = (i / 5) * Math.PI * 2 - Math.PI / 2; pts.push([cx + Math.cos(a) * R, cy + Math.sin(a) * R]); }
      var inn = [];
      for (var j = 0; j < 5; j++) { var b = (j / 5) * Math.PI * 2 - Math.PI / 2 + Math.PI / 5; inn.push([cx + Math.cos(b) * R * .52, cy + Math.sin(b) * R * .52]); }
      for (var k = 0; k < 5; k++) {
        g += el('line', { x1: pts[k][0], y1: pts[k][1], x2: pts[(k + 1) % 5][0], y2: pts[(k + 1) % 5][1], stroke: '#9FB4CC', 'stroke-width': 1.2 });
        g += el('line', { x1: pts[k][0], y1: pts[k][1], x2: inn[k][0], y2: inn[k][1], stroke: '#9FB4CC', 'stroke-width': 1.2 });
        g += el('line', { x1: inn[k][0], y1: inn[k][1], x2: inn[(k + 1) % 5][0], y2: inn[(k + 1) % 5][1], stroke: '#C7D2E0', 'stroke-width': 1 });
      }
      pts.forEach(function (p) { g += el('circle', { cx: p[0], cy: p[1], r: 7, fill: BLUE, opacity: .9 }); });
      inn.forEach(function (p) { g += el('circle', { cx: p[0], cy: p[1], r: 5.5, fill: GREEN, opacity: .88 }); });
      return g;
    },
    /* mini-binder docked on a target surface */
    binder: function (x, y, cw, ch) {
      var g = '';
      g += el('path', { d: 'M' + x + ' ' + (y + ch - 14) + 'q' + (cw * .25) + ' -26 ' + (cw * .5) + ' -4 q' + (cw * .25) + ' 22 ' + (cw * .5) + ' -2 V' + (y + ch) + 'H' + x + 'Z', fill: '#DCE4EE' });
      g += txt(x + cw / 2, y + ch - 6, 'target', { fs: 9.6, fill: INK3, anchor: 'middle', bl: 'central', fw: 620 });
      var bx = x + cw * .3;
      g += helix(bx, y + 14, ch - 56, 6, 4, GREEN, false);
      g += helix(bx + 17, y + 14, ch - 56, 6, 4, '#1baf7a', false);
      g += helix(bx + 34, y + 18, ch - 60, 6, 3.6, GREEN, false);
      for (var i = 0; i < 3; i++) g += el('circle', { cx: bx + 6 + i * 15, cy: y + ch - 34 + (i % 2 ? 3 : 0), r: 2.6, fill: AMBER });
      g += txt(x + cw / 2, y + 7, 'hotspots', { fs: 9.4, fill: '#9A5A00', anchor: 'middle', bl: 'central', fw: 620 });
      return g;
    }
  };

  /* =========================================================
     1. The two directions: prediction vs design
     ========================================================= */
  function invDogma(W) {
    var vert = W < 660;
    var H = vert ? 300 : 206, g = '';
    if (!vert) {
      var bw = (W - 150) / 2, y1 = 34, y2 = 122, bh = 54;
      g += box(0, y1, bw, bh, { en: 'Amino-acid sequence', zh: '胺基酸序列' }, { en: 'MKTAYIAKQRQISFVK…', zh: 'MKTAYIAKQRQISFVK…' }, 'n');
      g += box(W - bw, y1, bw, bh, { en: '3-D structure', zh: '三維結構' }, { en: 'backbone + side chains', zh: '主鏈 + 側鏈' }, 'b');
      g += arrowH(bw + 10, y1 + bh / 2, W - bw - 10, BLUE);
      g += tag(bw + 18, y1 + bh / 2 - 20, { en: 'FOLDING  ·  prediction', zh: '摺疊 · 預測' }, '#0356C4');
      g += box(W - bw, y2, bw, bh, { en: 'Desired structure / function', zh: '目標結構／功能' }, { en: 'the specification', zh: '規格' }, 'g');
      g += box(0, y2, bw, bh, { en: 'A sequence that folds to it', zh: '能摺成它的序列' }, { en: 'the inverse problem', zh: '反問題' }, 'g');
      g += arrowH(W - bw - 10, y2 + bh / 2, bw + 10, GREEN);
      g += el('path', { d: 'M' + (W - bw - 10) + ' ' + (y2 + bh / 2) + 'H' + (bw + 16), stroke: GREEN, 'stroke-width': 1.7 });
      g += el('path', { d: 'M' + (bw + 15) + ' ' + (y2 + bh / 2 - 4.5) + 'l-6 4.5 6 4.5z', fill: GREEN });
      g += tag(bw + 18, y2 + bh / 2 - 20, { en: 'DESIGN  ·  inverse folding', zh: '設計 · 反向摺疊' }, '#067a51', '#E8F8F1');
      g += txt(0, 14, T({ en: 'One problem, two directions — and the hard one is downstairs', zh: '同一個問題的兩個方向——難的在下面' }), { fs: 11.4, fill: INK3, fw: 620 });
      g += txt(0, H - 8, T({ en: 'Sequence space for a 100-residue protein: 20¹⁰⁰ ≈ 10¹³⁰ options. Nature sampled ~10¹²·', zh: '100 個殘基的序列空間：20¹⁰⁰ ≈ 10¹³⁰ 種。自然界只取樣了約 10¹² 種。' }), { fs: 10.8, fill: INK3 });
    } else {
      var bw2 = W - 2, bh2 = 50, yy = 26;
      g += txt(0, 10, T({ en: 'Prediction', zh: '預測' }), { fs: 11, fill: INK3, fw: 680 });
      g += box(1, yy, bw2, bh2, { en: 'Amino-acid sequence', zh: '胺基酸序列' }, null, 'n'); yy += bh2;
      g += arrowV(W / 2, yy + 2, yy + 22, BLUE); yy += 24;
      g += box(1, yy, bw2, bh2, { en: '3-D structure', zh: '三維結構' }, null, 'b'); yy += bh2 + 18;
      g += txt(0, yy, T({ en: 'Design — the inverse problem', zh: '設計——反問題' }), { fs: 11, fill: '#067a51', fw: 680 }); yy += 14;
      g += box(1, yy, bw2, bh2, { en: 'Desired structure / function', zh: '目標結構／功能' }, null, 'g'); yy += bh2;
      g += arrowV(W / 2, yy + 2, yy + 22, GREEN); yy += 24;
      g += box(1, yy, bw2, bh2, { en: 'A sequence that folds to it', zh: '能摺成它的序列' }, null, 'g'); yy += bh2 + 16;
      g += txt(0, yy, T({ en: '20¹⁰⁰ ≈ 10¹³⁰ possible 100-mers; nature sampled ~10¹².', zh: '20¹⁰⁰ ≈ 10¹³⁰ 種 100-mer；自然界僅取樣約 10¹²。' }), { fs: 10.6, fill: INK3 });
      H = yy + 12;
    }
    return svg(W, H, g);
  }

  /* =========================================================
     2. Fold gallery — what "de novo" has produced, by era
     ========================================================= */
  function foldGallery(W) {
    var items = [
      { k: 'bundle', t: { en: 'Helical bundle', zh: '螺旋束' }, y: '1988–97', n: { en: 'first designed folds', zh: '最早的設計摺疊' } },
      { k: 'top7', t: { en: 'Novel α/β fold', zh: '新穎 α/β 摺疊' }, y: '2003', n: { en: 'Top7 — not in nature', zh: 'Top7——自然界沒有' } },
      { k: 'tim', t: { en: 'TIM barrel', zh: 'TIM 桶' }, y: '2016', n: { en: 'idealised enzyme scaffold', zh: '理想化酵素骨架' } },
      { k: 'barrel', t: { en: 'β-barrel', zh: 'β 桶' }, y: '2018', n: { en: 'hardest H-bond geometry', zh: '最難的氫鍵幾何' } },
      { k: 'cage', t: { en: 'Self-assembling cage', zh: '自組裝奈米籠' }, y: '2012–16', n: { en: 'vaccines, delivery', zh: '疫苗、遞送' } },
      { k: 'binder', t: { en: 'Mini-binder', zh: '迷你結合蛋白' }, y: '2017–', n: { en: 'the workhorse of 2023+', zh: '2023 後的主力' } }
    ];
    var cols = W < 420 ? 1 : W < 620 ? 2 : W < 860 ? 3 : 3;
    var gap = 14, cw = (W - gap * (cols - 1)) / cols, ch = 150;
    var rows = Math.ceil(items.length / cols);
    var H = rows * (ch + 46) - 10, g = '';
    items.forEach(function (it, i) {
      var cx = (i % cols) * (cw + gap), cy = Math.floor(i / cols) * (ch + 46);
      g += el('rect', { x: cx, y: cy, width: cw, height: ch, rx: 12, fill: '#FBFCFD', stroke: 'rgba(16,24,40,.08)' });
      g += FOLDS[it.k](cx + 10, cy + 10, cw - 20, ch - 20);
      g += txt(cx + 2, cy + ch + 15, T(it.t), { fs: 12.4, fill: INK, fw: 660 });
      g += txt(cx + cw - 2, cy + ch + 15, it.y, { fs: 11, fill: BLUE, anchor: 'end', fw: 680, tab: 1 });
      g += txt(cx + 2, cy + ch + 31, clip(T(it.n), 10.8, cw - 4), { fs: 10.8, fill: INK3 });
    });
    return svg(W, H, g);
  }

  /* =========================================================
     3. Diffusion / denoising trajectory
     ========================================================= */
  function diffusion(W) {
    var n = 5;
    var cols = W < 470 ? 2 : W < 700 ? 3 : 5;
    var gap = 12, cw = (W - gap * (cols - 1)) / cols, ch = Math.min(118, cw * 1.0);
    var rows = Math.ceil(n / cols);
    var H = rows * (ch + 40) + 26, g = '';
    var seedRand = 8731;
    function rnd() { seedRand = (seedRand * 9301 + 49297) % 233280; return seedRand / 233280; }
    for (var i = 0; i < n; i++) {
      var cx = (i % cols) * (cw + gap), cy = Math.floor(i / cols) * (ch + 40) + 20;
      g += el('rect', { x: cx, y: cy, width: cw, height: ch, rx: 11, fill: i === n - 1 ? '#E8F8F1' : '#FBFCFD', stroke: i === n - 1 ? 'rgba(0,168,107,.3)' : 'rgba(16,24,40,.08)' });
      var order = i / (n - 1);                    /* 0 = pure noise, 1 = structure */
      var pts = [], m = 26;
      for (var j = 0; j < m; j++) {
        var t = j / (m - 1);
        var sx = cx + 14 + (cw - 28) * (.5 + .36 * Math.sin(t * Math.PI * 3.1) * (1 - t * .25));
        var sy = cy + 14 + (ch - 28) * t;
        var nx = cx + 10 + rnd() * (cw - 20), ny = cy + 10 + rnd() * (ch - 20);
        pts.push([sx * order + nx * (1 - order), sy * order + ny * (1 - order)]);
      }
      g += el('path', { d: 'M' + pts.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('L'),
        fill: 'none', stroke: order > .8 ? GREEN : order > .4 ? '#5598e7' : '#A9B2BF', 'stroke-width': order > .8 ? 3.4 : 2.2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', opacity: .3 + .7 * order });
      pts.forEach(function (p, k) { if (k % 5 === 0) g += el('circle', { cx: p[0], cy: p[1], r: 2.1, fill: order > .8 ? GREEN : '#8792A3', opacity: .5 + .5 * order }); });
      var lbl = ['t = T', 'T·¾', 'T·½', 'T·¼', 't = 0'][i];
      g += txt(cx + 4, cy + ch + 15, lbl, { fs: 11, fill: BLUE, fw: 700, tab: 1 });
      var cap = [{ en: 'random noise', zh: '隨機噪聲' }, { en: 'blobby', zh: '團狀' }, { en: 'chain emerges', zh: '鏈出現' },
                 { en: 'secondary structure', zh: '二級結構' }, { en: 'designable backbone', zh: '可設計主鏈' }][i];
      g += txt(cx + 4, cy + ch + 30, clip(T(cap), 10.6, cw - 8), { fs: 10.6, fill: INK3 });
    }
    g += txt(0, 10, T({ en: 'Reverse diffusion: learn to remove noise, then run it from pure noise to get a structure that never existed', zh: '反向擴散：學會「去噪」，再從純噪聲跑一遍，得到從未存在過的結構' }), { fs: 11.2, fill: INK3, fw: 600 });
    g += txt(0, H - 4, T({ en: 'Then a sequence-design model (ProteinMPNN) writes an amino-acid sequence for that backbone.', zh: '接著由序列設計模型（ProteinMPNN）為該主鏈寫出胺基酸序列。' }), { fs: 10.8, fill: INK3 });
    return svg(W, H + 8, g);
  }

  /* =========================================================
     4. AlphaFold2 architecture (simplified, honest)
     ========================================================= */
  function af2(W) {
    var vert = W < 720, g = '', H;
    if (!vert) {
      var bw = (W - 3 * 26) / 4, bh = 74, y = 30;
      g += box(0, y, bw, bh, { en: 'Sequence + MSA + templates', zh: '序列 + MSA + 模板' }, { en: 'evolutionary couplings', zh: '演化共變異' }, 'n');
      g += box(bw + 26, y, bw, bh, { en: 'Evoformer × 48', zh: 'Evoformer × 48' }, { en: 'MSA ↔ pair representation attention', zh: 'MSA ↔ 配對表徵注意力' }, 'b');
      g += box(2 * (bw + 26), y, bw, bh, { en: 'Structure module × 8', zh: '結構模組 × 8' }, { en: 'invariant point attention → frames', zh: '不變點注意力 → 剛體座標' }, 'v');
      g += box(3 * (bw + 26), y, bw, bh, { en: '3-D coordinates + pLDDT', zh: '三維座標 + pLDDT' }, { en: 'per-residue confidence', zh: '每殘基信賴度' }, 'g');
      for (var i = 0; i < 3; i++) g += arrowH(bw * (i + 1) + 26 * i + 4, y + bh / 2, (bw + 26) * (i + 1) - 4);
      g += el('path', { d: 'M' + (3 * (bw + 26) - 12) + ' ' + (y + bh + 6) + 'V' + (y + bh + 24) + 'H' + (bw + 38) + 'V' + (y + bh + 8), fill: 'none', stroke: AMBER, 'stroke-width': 1.5, 'stroke-dasharray': '4 3' });
      g += el('path', { d: 'M' + (bw + 33.5) + ' ' + (y + bh + 10) + 'l4.5-7 4.5 7z', fill: AMBER });
      g += txt(W / 2, y + bh + 36, T({ en: 'recycling × 3 — feed the structure back in', zh: '循環回饋 × 3——把結構再餵回去' }), { fs: 10.8, fill: '#9A5A00', anchor: 'middle', fw: 620 });
      g += txt(0, 12, T({ en: 'AlphaFold2 (2021): the first system whose errors were small enough to build on', zh: 'AlphaFold2（2021）：第一個「誤差小到可以被拿來用」的系統' }), { fs: 11.2, fill: INK3, fw: 620 });
      H = y + bh + 52;
    } else {
      var yy = 24, bw2 = W - 2, bh2 = 58;
      var st = [[{ en: 'Sequence + MSA + templates', zh: '序列 + MSA + 模板' }, null, 'n'],
                [{ en: 'Evoformer × 48', zh: 'Evoformer × 48' }, { en: 'MSA ↔ pair attention', zh: 'MSA ↔ 配對注意力' }, 'b'],
                [{ en: 'Structure module × 8', zh: '結構模組 × 8' }, { en: 'invariant point attention', zh: '不變點注意力' }, 'v'],
                [{ en: '3-D coordinates + pLDDT', zh: '三維座標 + pLDDT' }, null, 'g']];
      g += txt(0, 10, T({ en: 'AlphaFold2 (2021)', zh: 'AlphaFold2（2021）' }), { fs: 11.2, fill: INK3, fw: 680 });
      st.forEach(function (s, i) {
        g += box(1, yy, bw2, bh2, s[0], s[1], s[2]); yy += bh2;
        if (i < st.length - 1) { g += arrowV(W / 2, yy + 2, yy + 20); yy += 22; }
      });
      g += txt(0, yy + 16, T({ en: '+ recycling × 3 (structure fed back into the trunk)', zh: '＋循環回饋 × 3（結構回饋進主幹）' }), { fs: 10.8, fill: '#9A5A00' });
      H = yy + 26;
    }
    return svg(W, H, g);
  }

  /* =========================================================
     5. ProteinMPNN — graph message passing + autoregressive decode
     ========================================================= */
  function mpnn(W) {
    var vert = W < 620, g = '';
    var half = vert ? W : (W - 30) / 2;
    var H = vert ? 330 : 212;
    /* left: backbone graph */
    var gx = 0, gy = 26;
    g += txt(gx, 12, T({ en: '1 · Backbone as a graph', zh: '1 · 主鏈視為圖' }), { fs: 11.4, fill: INK, fw: 680 });
    g += el('rect', { x: gx, y: gy, width: half, height: 128, rx: 11, fill: '#FBFCFD', stroke: 'rgba(16,24,40,.08)' });
    var nodes = [], NN = 9;
    for (var i = 0; i < NN; i++) {
      var a = (i / NN) * Math.PI * 2;
      nodes.push([gx + half / 2 + Math.cos(a) * (half * .3), gy + 64 + Math.sin(a) * 42]);
    }
    for (var i2 = 0; i2 < NN; i2++) for (var j = i2 + 1; j < NN; j++) {
      var dx = nodes[i2][0] - nodes[j][0], dy = nodes[i2][1] - nodes[j][1];
      if (Math.sqrt(dx * dx + dy * dy) < half * .42)
        g += el('line', { x1: nodes[i2][0], y1: nodes[i2][1], x2: nodes[j][0], y2: nodes[j][1], stroke: '#C7D2E0', 'stroke-width': 1 });
    }
    nodes.forEach(function (p, k) {
      g += el('circle', { cx: p[0], cy: p[1], r: 8.5, fill: k === 2 ? BLUE : '#DCE6F5', stroke: '#fff', 'stroke-width': 2 });
      g += txt(p[0], p[1], String(k + 1), { fs: 9.4, fill: k === 2 ? '#fff' : INK2, anchor: 'middle', bl: 'central', fw: 680 });
    });
    g += txt(gx + 6, gy + 120, T({ en: 'edges = Cα distances, orientations, dihedrals — no sequence at all', zh: '邊 = Cα 距離、方向、二面角——完全不含序列' }), { fs: 10.2, fill: INK3 });
    /* right: decoding */
    var rx = vert ? 0 : half + 30, ry = vert ? 182 : 26;
    g += txt(rx, ry - 14, T({ en: '2 · Decode a sequence, residue by residue', zh: '2 · 逐殘基解碼出序列' }), { fs: 11.4, fill: INK, fw: 680 });
    g += el('rect', { x: rx, y: ry, width: half, height: 128, rx: 11, fill: '#FBFCFD', stroke: 'rgba(16,24,40,.08)' });
    var seq = ['M', 'K', 'T', 'A', 'Y', '?', '?', '?', '?'];
    var cell = Math.min(26, (half - 24) / seq.length);
    seq.forEach(function (s, k) {
      var x = rx + 12 + k * cell;
      var known = s !== '?';
      g += el('rect', { x: x, y: ry + 22, width: cell - 3, height: 26, rx: 5, fill: known ? 'rgba(1,103,239,.1)' : PANEL, stroke: known ? 'rgba(1,103,239,.25)' : LINE });
      g += txt(x + (cell - 3) / 2, ry + 35, s, { fs: 12, fill: known ? '#0356C4' : INK3, anchor: 'middle', bl: 'central', fw: 700 });
    });
    g += txt(rx + 12, ry + 62, T({ en: 'random decoding order · one-shot, no MSA, ~1 s per design', zh: '隨機解碼順序 · 單次前傳、無需 MSA、每個設計約 1 秒' }), { fs: 10.2, fill: INK3 });
    var bars = [0.52, 0.19, 0.11, 0.08, 0.05];
    bars.forEach(function (v, k) {
      g += el('rect', { x: rx + 12 + k * 30, y: ry + 112 - v * 42, width: 20, height: v * 42, rx: 3, fill: k === 0 ? GREEN : '#CBD2DB' });
      g += txt(rx + 22 + k * 30, ry + 120, ['V', 'I', 'L', 'A', 'T'][k], { fs: 9.6, fill: INK2, anchor: 'middle', fw: 640 });
    });
    g += txt(rx + 170 > rx + half ? rx + 12 : rx + 170, ry + 96, T({ en: 'p(amino acid | structure, decoded so far)', zh: 'p(胺基酸 | 結構, 已解碼部分)' }), { fs: 10.2, fill: INK3 });
    if (!vert) g += arrowH(half + 6, 90, half + 26);
    return svg(W, H, g);
  }

  /* =========================================================
     6. Protein language model — masked prediction + embedding
     ========================================================= */
  function plm(W) {
    var g = '', H = 196;
    var seq = 'MKTAYIAKQRQ'.split('');
    var maskIdx = [3, 7];
    var cell = Math.min(34, (W - 20) / seq.length);
    var x0 = (W - cell * seq.length) / 2;
    g += txt(0, 12, T({ en: 'Self-supervised pre-training: hide residues, predict them from context', zh: '自監督預訓練：遮住殘基，從上下文預測它們' }), { fs: 11.2, fill: INK3, fw: 620 });
    seq.forEach(function (s, k) {
      var masked = maskIdx.indexOf(k) >= 0;
      g += el('rect', { x: x0 + k * cell, y: 26, width: cell - 4, height: 30, rx: 6, fill: masked ? 'rgba(224,135,0,.14)' : PANEL, stroke: masked ? 'rgba(224,135,0,.4)' : LINE });
      g += txt(x0 + (cell - 4) / 2 + k * cell, 41, masked ? '×' : s, { fs: 13, fill: masked ? '#9A5A00' : INK, anchor: 'middle', bl: 'central', fw: 700 });
    });
    g += box(x0, 72, cell * seq.length - 4, 40, { en: 'Transformer encoder (650M – 98B params)', zh: 'Transformer 編碼器（6.5 億 – 980 億參數）' }, null, 'v', 12);
    maskIdx.forEach(function (k) {
      g += el('path', { d: 'M' + (x0 + k * cell + (cell - 4) / 2) + ' 58V70', stroke: AMBER, 'stroke-width': 1.4, 'stroke-dasharray': '3 2' });
    });
    g += txt(x0, 130, T({ en: 'What falls out for free:', zh: '順帶得到的能力：' }), { fs: 11, fill: INK, fw: 680 });
    var outs = [{ en: 'zero-shot mutation effects', zh: '零樣本突變效應' }, { en: 'structure from one sequence', zh: '單序列結構預測' },
                { en: 'remote homology', zh: '遠緣同源' }, { en: 'generation of new sequences', zh: '生成新序列' }];
    var ow = (W - 24) / (W < 600 ? 2 : 4);
    outs.forEach(function (o, k) {
      var ox = (k % (W < 600 ? 2 : 4)) * (ow + 8), oy = 142 + Math.floor(k / (W < 600 ? 2 : 4)) * 30;
      g += el('rect', { x: ox, y: oy, width: ow, height: 24, rx: 7, fill: '#E8F8F1', stroke: 'rgba(0,168,107,.26)' });
      g += txt(ox + ow / 2, oy + 12, clip(T(o), 10.4, ow - 10), { fs: 10.4, fill: '#067a51', anchor: 'middle', bl: 'central', fw: 620 });
    });
    if (W < 600) H = 212;
    return svg(W, H, g);
  }

  /* =========================================================
     7. The design→test loop, with where it actually breaks
     ========================================================= */
  function loop(W) {
    var vert = W < 640, g = '';
    var steps = [
      { t: { en: 'Specify', zh: '定義目標' }, s: { en: 'target, epitope, reaction', zh: '標的、抗原決定位、反應' }, tone: 'n' },
      { t: { en: 'Generate backbone', zh: '生成主鏈' }, s: { en: 'RFdiffusion / flow models', zh: 'RFdiffusion／流匹配模型' }, tone: 'b' },
      { t: { en: 'Design sequence', zh: '設計序列' }, s: { en: 'ProteinMPNN / LigandMPNN', zh: 'ProteinMPNN／LigandMPNN' }, tone: 'b' },
      { t: { en: 'Filter in silico', zh: '電腦端篩選' }, s: { en: 'AF2/AF3 self-consistency, pAE', zh: 'AF2/AF3 自洽性、pAE' }, tone: 'v' },
      { t: { en: 'Order DNA & express', zh: '訂 DNA、表達' }, s: { en: '1–4 weeks, the real bottleneck', zh: '1–4 週，真正的瓶頸' }, tone: 'a' },
      { t: { en: 'Measure', zh: '量測' }, s: { en: 'binding, activity, structure', zh: '結合、活性、結構' }, tone: 'g' }
    ];
    if (!vert) {
      var cx = W / 2, cy = 168, R = Math.min(W * .34, 136), H = 348;
      g += el('circle', { cx: cx, cy: cy, r: R, fill: 'none', stroke: LINE, 'stroke-width': 1.4, 'stroke-dasharray': '3 4' });
      steps.forEach(function (s, i) {
        var a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        var px = cx + Math.cos(a) * R, py = cy + Math.sin(a) * R;
        var tone = { n: [PANEL, INK3], b: ['rgba(1,103,239,.1)', BLUE], v: ['rgba(124,92,255,.1)', VIOLET], a: ['rgba(224,135,0,.12)', AMBER], g: ['#E8F8F1', GREEN] }[s.tone];
        g += el('circle', { cx: px, cy: py, r: 17, fill: tone[0], stroke: tone[1], 'stroke-width': 1.6 });
        g += txt(px, py, String(i + 1), { fs: 12, fill: tone[1], anchor: 'middle', bl: 'central', fw: 700 });
        var right = Math.cos(a) > -0.3;
        var lx = px + Math.cos(a) * 26, ly = py + Math.sin(a) * 26;
        var maxw = right ? W - lx - 4 : lx - 4;
        g += txt(lx, ly - 6, clip(T(s.t), 11.8, maxw), { fs: 11.8, fill: INK, anchor: right ? 'start' : 'end', fw: 660 });
        g += txt(lx, ly + 8, clip(T(s.s), 10.2, maxw), { fs: 10.2, fill: INK3, anchor: right ? 'start' : 'end' });
      });
      g += txt(cx, cy - 12, T({ en: 'cycle time', zh: '循環時間' }), { fs: 10.6, fill: INK3, anchor: 'middle', fw: 620 });
      g += txt(cx, cy + 10, T({ en: 'weeks → months', zh: '數週～數月' }), { fs: 15, fill: INK, anchor: 'middle', fw: 700 });
      g += txt(0, 12, T({ en: 'Steps 2–4 now take hours. Steps 5–6 still take weeks — that asymmetry is the whole story of 2026.', zh: '步驟 2–4 現在只要數小時；步驟 5–6 仍要數週——這個不對稱就是 2026 年的全部故事。' }), { fs: 11.2, fill: INK3, fw: 600 });
      return svg(W, H, g);
    }
    var yy = 22;
    g += txt(0, 10, T({ en: 'The design→test loop', zh: '設計→測試循環' }), { fs: 11.2, fill: INK3, fw: 680 });
    steps.forEach(function (s, i) {
      var tone = { n: [PANEL, INK3], b: ['rgba(1,103,239,.07)', BLUE], v: ['rgba(124,92,255,.08)', VIOLET], a: ['rgba(224,135,0,.09)', AMBER], g: ['#E8F8F1', GREEN] }[s.tone];
      g += el('rect', { x: 1, y: yy, width: W - 2, height: 44, rx: 10, fill: tone[0], stroke: tone[1], 'stroke-opacity': .34 });
      g += el('circle', { cx: 20, cy: yy + 22, r: 12, fill: tone[1] });
      g += txt(20, yy + 22.5, String(i + 1), { fs: 11, fill: '#fff', anchor: 'middle', bl: 'central', fw: 700 });
      g += txt(40, yy + 16, clip(T(s.t), 12, W - 50), { fs: 12, fill: INK, fw: 660, bl: 'central' });
      g += txt(40, yy + 31, clip(T(s.s), 10.4, W - 50), { fs: 10.4, fill: INK3, bl: 'central' });
      yy += 44;
      if (i < steps.length - 1) { g += arrowV(W / 2, yy + 2, yy + 16); yy += 18; }
    });
    g += el('path', { d: 'M' + (W - 14) + ' ' + yy + 'h8V' + 30 + 'h-8', fill: 'none', stroke: GREEN, 'stroke-width': 1.5, 'stroke-dasharray': '4 3' });
    return svg(W, yy + 14, g);
  }

  /* =========================================================
     8. Enzyme design: theozyme → scaffold → designed enzyme
     ========================================================= */
  function enzyme(W) {
    var cols = W < 600 ? 1 : 3;
    var gap = 22, cw = (W - gap * (cols - 1)) / cols, ch = 138;
    var rows = Math.ceil(3 / cols);
    var H = rows * (ch + 52) + 6, g = '';
    var panels = [
      { t: { en: '1 · Theozyme', zh: '1 · 理論酵素（theozyme）' }, s: { en: 'Quantum chemistry gives the ideal arrangement of catalytic groups around the transition state.', zh: '以量子化學算出過渡態周圍催化基團的理想幾何。' } },
      { t: { en: '2 · Scaffold search / generation', zh: '2 · 骨架搜尋／生成' }, s: { en: 'Find or generate a fold that can hold that geometry rigidly.', zh: '找到或生成能剛性維持該幾何的摺疊。' } },
      { t: { en: '3 · Sequence + refinement', zh: '3 · 序列設計與優化' }, s: { en: 'Design the sequence, then usually hand it to directed evolution.', zh: '設計序列，接著通常交給定向演化。' } }
    ];
    panels.forEach(function (p, i) {
      var cx = (i % cols) * (cw + gap), cy = Math.floor(i / cols) * (ch + 52);
      g += el('rect', { x: cx, y: cy + 18, width: cw, height: ch, rx: 12, fill: '#FBFCFD', stroke: 'rgba(16,24,40,.08)' });
      g += txt(cx, cy + 10, T(p.t), { fs: 11.4, fill: INK, fw: 680 });
      var mx = cx + cw / 2, my = cy + 18 + ch / 2;
      if (i === 0) {
        g += el('circle', { cx: mx, cy: my, r: 15, fill: 'rgba(224,135,0,.14)', stroke: 'rgba(224,135,0,.45)', 'stroke-dasharray': '3 2' });
        g += txt(mx, my, 'TS', { fs: 11, fill: '#9A5A00', anchor: 'middle', bl: 'central', fw: 700 });
        [[-46, -26, 'His'], [46, -24, 'Asp'], [0, 44, 'Ser']].forEach(function (r) {
          g += el('line', { x1: mx, y1: my, x2: mx + r[0] * .62, y2: my + r[1] * .62, stroke: '#9FB4CC', 'stroke-width': 1.2, 'stroke-dasharray': '2 2' });
          g += el('circle', { cx: mx + r[0] * .72, cy: my + r[1] * .72, r: 11, fill: 'rgba(1,103,239,.1)', stroke: 'rgba(1,103,239,.3)' });
          g += txt(mx + r[0] * .72, my + r[1] * .72, r[2], { fs: 9, fill: '#0356C4', anchor: 'middle', bl: 'central', fw: 680 });
        });
        g += txt(cx + 8, cy + ch + 8, T({ en: 'ideal geometry, no protein yet', zh: '只有理想幾何，還沒有蛋白' }), { fs: 10.2, fill: INK3 });
      } else if (i === 1) {
        g += FOLDS.tim(cx + 6, cy + 22, cw - 12, ch - 10);
        g += txt(cx + 8, cy + ch + 8, T({ en: 'TIM barrel, NTF2, or a generated fold', zh: 'TIM 桶、NTF2，或生成式摺疊' }), { fs: 10.2, fill: INK3 });
      } else {
        g += FOLDS.tim(cx + 6, cy + 22, cw - 12, ch - 10);
        g += el('circle', { cx: mx, cy: my, r: 9, fill: 'rgba(224,135,0,.9)' });
        g += txt(cx + 8, cy + ch + 8, T({ en: 'then: rounds of directed evolution', zh: '然後：數輪定向演化' }), { fs: 10.2, fill: INK3 });
      }
      if (cols === 3 && i < 2) g += arrowH(cx + cw + 4, cy + 18 + ch / 2, cx + cw + gap - 4);
    });
    return svg(W, H, g);
  }

  /* =========================================================
     9. The in-silico filter funnel and where it lies to you
     ========================================================= */
  function filterGap(W) {
    var g = '', H = 212;
    var bw = W < 560 ? W - 2 : (W - 34) / 2;
    var left = 0, right = W < 560 ? 0 : bw + 34;
    var ty = W < 560 ? 112 : 0;
    function panel(x, y, title, rows, tone) {
      var s = el('rect', { x: x, y: y + 18, width: bw, height: 80, rx: 11, fill: tone === 'g' ? '#E8F8F1' : 'rgba(229,72,77,.05)', stroke: tone === 'g' ? 'rgba(0,168,107,.28)' : 'rgba(229,72,77,.24)' });
      s += txt(x, y + 10, T(title), { fs: 11.4, fill: INK, fw: 680 });
      rows.forEach(function (r, i) {
        s += txt(x + 12, y + 38 + i * 19, T(r[0]), { fs: 11, fill: INK2 });
        s += txt(x + bw - 12, y + 38 + i * 19, T(r[1]), { fs: 11.6, fill: tone === 'g' ? '#067a51' : '#C02B30', anchor: 'end', fw: 700, tab: 1 });
      });
      return s;
    }
    g += panel(left, 0, { en: 'What the computer says', zh: '電腦說的' }, [
      [{ en: 'pLDDT > 80', zh: 'pLDDT > 80' }, '92%'],
      [{ en: 'self-consistency RMSD < 2 Å', zh: '自洽 RMSD < 2 Å' }, '71%'],
      [{ en: 'predicted interface pAE', zh: '預測界面 pAE' }, 'pass']
    ], 'g');
    g += panel(right, ty, { en: 'What the bench says', zh: '實驗台說的' }, [
      [{ en: 'expresses & is soluble', zh: '可表達且可溶' }, '—'],
      [{ en: 'binds the target at all', zh: '真的會結合標的' }, '—'],
      [{ en: 'is a useful molecule', zh: '是有用的分子' }, '—']
    ], 'r');
    if (W >= 560) g += arrowH(bw + 6, 58, bw + 30, '#E5484D');
    g += txt(0, (W < 560 ? 212 : 118), T({ en: 'The filter→bench correlation is the field’s weakest measured link. Numbers in the left panel are illustrative of the filter stack, not of any one paper.', zh: '「電腦篩選 → 實驗結果」的相關性是本領域量測得最弱的一環。左欄數字用於說明篩選流程，並非引用某篇論文。' }), { fs: 10.6, fill: INK3 });
    if (W < 560) H = 248;
    return svg(W, H, g);
  }

  /* =========================================================
     10. Sequence space, to scale (log)
     ========================================================= */
  function seqSpace(W) {
    var g = '', H = 150;
    var items = [
      { l: { en: 'Solved structures (PDB)', zh: '已解結構（PDB）' }, e: 5.4 },
      { l: { en: 'Predicted structures (AFDB)', zh: '預測結構（AFDB）' }, e: 8.3 },
      { l: { en: 'Known natural sequences', zh: '已知天然序列' }, e: 9.5 },
      { l: { en: 'All proteins nature ever made', zh: '自然界曾造出的全部蛋白' }, e: 12 },
      { l: { en: 'Possible 100-residue sequences', zh: '可能的 100 殘基序列' }, e: 130 }
    ];
    var labw = Math.min(Math.max(120, W * .33), 250);
    var padL = labw + 10, pw = W - padL - 46;
    var mxE = 130;
    items.forEach(function (it, i) {
      var y = 22 + i * 24;
      g += txt(padL - 10, y, clip(T(it.l), 11.4, labw), { fs: 11.4, fill: INK2, anchor: 'end', bl: 'central', fw: 540 });
      var bw = Math.max(3, pw * it.e / mxE);
      g += el('rect', { x: padL, y: y - 7, width: bw, height: 14, rx: 4, fill: i === 4 ? '#104281' : C.seq[2 + i * 2], 'data-tip': '<b>' + esc(T(it.l)) + '</b>≈ 10^' + it.e });
      g += txt(padL + bw + 7, y, '10' + String(it.e).replace('.', '·'), { fs: 11, fill: INK, bl: 'central', fw: 650, tab: 1 });
    });
    g += txt(0, 10, T({ en: 'Bars are linear in the exponent — each unit is a factor of ten', zh: '橫軸為「指數」的線性尺度——每一格差十倍' }), { fs: 10.8, fill: INK3, fw: 600 });
    g += txt(padL, 142, T({ en: 'Design is not search. The space is far too large to search; the model has to put you in the right neighbourhood first.', zh: '設計不是搜尋。空間太大無法搜尋；模型必須先把你放進正確的鄰域。' }), { fs: 10.6, fill: INK3 });
    return svg(W, H, g);
  }

  /* ---- lazy real-structure viewer (3Dmol.js + RCSB) ---------- */
  var tdLoaded = false, tdLoading = null;
  function load3Dmol() {
    if (tdLoaded) return Promise.resolve(true);
    if (tdLoading) return tdLoading;
    tdLoading = new Promise(function (res) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/3dmol@2.4.2/build/3Dmol-min.js';
      s.async = true;
      s.onload = function () { tdLoaded = true; res(true); };
      s.onerror = function () { res(false); };
      document.head.appendChild(s);
    });
    return tdLoading;
  }
  function mountStructures(root) {
    var els = root.querySelectorAll('[data-pdb]:not([data-ready])');
    if (!els.length) return;
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var host = en.target;
        host.setAttribute('data-ready', '1');
        var pdb = host.getAttribute('data-pdb');
        load3Dmol().then(function (ok) {
          if (!ok || !window.$3Dmol) { return; }
          var ph = host.querySelector('.ph');
          try {
            var v = window.$3Dmol.createViewer(host, { backgroundColor: '#F6F8FA', antialias: true });
            window.$3Dmol.download('pdb:' + pdb, v, {}, function () {
              var style = host.getAttribute('data-style') || 'spectrum';
              if (style === 'chain') v.setStyle({}, { cartoon: { colorscheme: 'chain', thickness: .6 } });
              else v.setStyle({}, { cartoon: { color: 'spectrum', thickness: .6 } });
              if (host.getAttribute('data-het') === '1') v.addStyle({ hetflag: true }, { stick: { radius: .18, colorscheme: 'yellowCarbon' }, sphere: { scale: .22 } });
              v.zoomTo(); v.zoom(1.12); v.render();
              v.spin(host.getAttribute('data-spin') === '1' ? 'y' : false);
              if (ph) ph.style.display = 'none';
            });
          } catch (e) { /* keep the placeholder caption */ }
        });
      });
    }, { rootMargin: '220px' });
    for (var i = 0; i < els.length; i++) io.observe(els[i]);
  }

  w.BIO = {
    FOLDS: FOLDS, svg: svg, box: box, arrowH: arrowH, arrowV: arrowV, tag: tag, helix: helix, strand: strand, coil: coil,
    d: {
      invDogma: invDogma, foldGallery: foldGallery, diffusion: diffusion, af2: af2, mpnn: mpnn,
      plm: plm, loop: loop, enzyme: enzyme, filterGap: filterGap, seqSpace: seqSpace
    },
    mountStructures: mountStructures
  };
})(window);
