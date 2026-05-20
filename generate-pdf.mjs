import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { writeFileSync } from 'fs';

const html = `<!DOCTYPE html>
<html lang="et">
<head>
<meta charset="UTF-8">
<title>Matemaatika valemileht — 12. klass</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]})"></script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 8.5pt;
    color: #111;
    background: white;
    padding: 14mm 14mm 14mm 14mm;
  }
  .page-title {
    text-align: center;
    margin-bottom: 8mm;
    border-bottom: 2px solid #1a1a6e;
    padding-bottom: 4mm;
  }
  .page-title h1 {
    font-size: 15pt;
    color: #1a1a6e;
    letter-spacing: 1px;
    margin-bottom: 2mm;
  }
  .page-title p {
    font-size: 8pt;
    color: #555;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5mm;
  }
  .chapter {
    border: 1px solid #c0c8e0;
    border-radius: 4px;
    overflow: hidden;
    break-inside: avoid;
  }
  .chapter-header {
    background: #1a1a6e;
    color: white;
    padding: 2.5mm 4mm;
    font-size: 8pt;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 2mm;
  }
  .chapter-header .num {
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7pt;
    flex-shrink: 0;
  }
  .chapter-body {
    padding: 3mm 4mm;
  }
  .topic {
    margin-bottom: 3mm;
    padding-bottom: 3mm;
    border-bottom: 1px dashed #dde;
  }
  .topic:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  .topic-name {
    font-size: 7.5pt;
    font-weight: bold;
    color: #1a1a6e;
    margin-bottom: 1.5mm;
  }
  .formula-row {
    display: flex;
    align-items: flex-start;
    gap: 2mm;
    margin-bottom: 1mm;
  }
  .formula-label {
    font-size: 6.5pt;
    color: #555;
    min-width: 28mm;
    padding-top: 1px;
    flex-shrink: 0;
  }
  .formula-math {
    font-size: 8pt;
    flex: 1;
  }
  .katex { font-size: 0.95em !important; }
  .katex-display { margin: 0 !important; text-align: left; }
  .katex-display > .katex { text-align: left; }
  .note {
    font-size: 6.5pt;
    color: #666;
    font-style: italic;
    margin-top: 1mm;
  }
  .full-width {
    grid-column: 1 / -1;
  }
  @media print {
    body { padding: 12mm; }
  }
</style>
</head>
<body>

<div class="page-title">
  <h1>MATEMAATIKA VALEMILEHT — 12. KLASS</h1>
  <p>Eesti riiklik õppekava · Kõik peatükid · 2024/2025</p>
</div>

<div class="grid">

<!-- PEATÜKK 1 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">1</span> Avaldised ja arvuhulgad</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Arvuhulgad</div>
      <div class="formula-row"><span class="formula-label">Naturaalsed:</span><span class="formula-math">$\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$</span></div>
      <div class="formula-row"><span class="formula-label">Täisarvud:</span><span class="formula-math">$\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$</span></div>
      <div class="formula-row"><span class="formula-label">Ratsionaalsed:</span><span class="formula-math">$\\mathbb{Q} = \\left\\{\\frac{p}{q} \\mid p \\in \\mathbb{Z},\\, q \\in \\mathbb{N}\\right\\}$</span></div>
      <div class="formula-row"><span class="formula-label">Reaalsed:</span><span class="formula-math">$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Arvu aste</div>
      <div class="formula-row"><span class="formula-label">Korrutamine:</span><span class="formula-math">$a^m \\cdot a^n = a^{m+n}$</span></div>
      <div class="formula-row"><span class="formula-label">Jagamine:</span><span class="formula-math">$a^m : a^n = a^{m-n}$</span></div>
      <div class="formula-row"><span class="formula-label">Aste astmes:</span><span class="formula-math">$(a^m)^n = a^{mn}$</span></div>
      <div class="formula-row"><span class="formula-label">Korrutis:</span><span class="formula-math">$(ab)^n = a^n b^n$</span></div>
      <div class="formula-row"><span class="formula-label">Negatiivne:</span><span class="formula-math">$a^{-n} = \\dfrac{1}{a^n}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Arvu n-es juur</div>
      <div class="formula-row"><span class="formula-label">Definitsioon:</span><span class="formula-math">$\\sqrt[n]{a} = b \\Leftrightarrow b^n = a$</span></div>
      <div class="formula-row"><span class="formula-label">Astmena:</span><span class="formula-math">$\\sqrt[n]{a} = a^{1/n}$</span></div>
      <div class="formula-row"><span class="formula-label">Korrutis:</span><span class="formula-math">$\\sqrt[n]{ab} = \\sqrt[n]{a}\\cdot\\sqrt[n]{b}$</span></div>
      <div class="formula-row"><span class="formula-label">Murd:</span><span class="formula-math">$\\sqrt[n]{\\dfrac{a}{b}} = \\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 2 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">2</span> Võrratused ja võrratusesüsteemid</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Lineaarvõrratus</div>
      <div class="formula-row"><span class="formula-label">Üldkuju:</span><span class="formula-math">$ax + b > 0$ (või $<, \\geq, \\leq$)</span></div>
      <div class="formula-row"><span class="formula-label">Reegel:</span><span class="formula-math">Negatiivse arvuga korrutades märk pöördub</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Ruutvõrratus</div>
      <div class="formula-row"><span class="formula-label">$ax^2+bx+c>0$:</span><span class="formula-math">Diskriminant $D = b^2 - 4ac$</span></div>
      <div class="formula-row"><span class="formula-label">$D > 0$:</span><span class="formula-math">Juured $x_{1,2} = \\dfrac{-b \\pm \\sqrt{D}}{2a}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Intervallide meetod</div>
      <div class="note">1. Leia nullkohad · 2. Märgi arvteljele · 3. Määra märgid vahemikel · 4. Vali sobivad vahemikud</div>
    </div>
    <div class="topic">
      <div class="topic-name">Murdvõrratus</div>
      <div class="formula-row"><span class="formula-label">$\\frac{f(x)}{g(x)} > 0$:</span><span class="formula-math">Kasuta intervallide meetodit, $g(x) \\neq 0$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 3 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">3</span> Võrrandid ja võrrandisüsteemid</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Ruutvõrrand $ax^2 + bx + c = 0$</div>
      <div class="formula-row"><span class="formula-label">Valem:</span><span class="formula-math">$x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$</span></div>
      <div class="formula-row"><span class="formula-label">Vieta:</span><span class="formula-math">$x_1 + x_2 = -\\dfrac{b}{a},\\quad x_1 x_2 = \\dfrac{c}{a}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Absoluutväärtus</div>
      <div class="formula-row"><span class="formula-label">$|x| = a$:</span><span class="formula-math">$x = a$ või $x = -a\\quad (a \\geq 0)$</span></div>
      <div class="formula-row"><span class="formula-label">$|x| < a$:</span><span class="formula-math">$-a < x < a$</span></div>
      <div class="formula-row"><span class="formula-label">$|x| > a$:</span><span class="formula-math">$x < -a$ või $x > a$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">2×2 süsteem (Crameri reegel)</div>
      <div class="formula-row"><span class="formula-label">$D$:</span><span class="formula-math">$\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix} = a_1 b_2 - a_2 b_1$</span></div>
      <div class="formula-row"><span class="formula-label">Lahendid:</span><span class="formula-math">$x = \\dfrac{D_x}{D},\\quad y = \\dfrac{D_y}{D}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Protsendid</div>
      <div class="formula-row"><span class="formula-label">p% arvust a:</span><span class="formula-math">$\\dfrac{p}{100} \\cdot a$</span></div>
      <div class="formula-row"><span class="formula-label">Muutus:</span><span class="formula-math">$\\dfrac{\\text{uus} - \\text{vana}}{\\text{vana}} \\cdot 100\\%$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 4 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">4</span> Planimeetria</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Kolmnurk</div>
      <div class="formula-row"><span class="formula-label">Pindala:</span><span class="formula-math">$S = \\dfrac{1}{2}ah = \\dfrac{1}{2}ab\\sin C$</span></div>
      <div class="formula-row"><span class="formula-label">Siinusteoreem:</span><span class="formula-math">$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$</span></div>
      <div class="formula-row"><span class="formula-label">Koosinusteoreem:</span><span class="formula-math">$c^2 = a^2 + b^2 - 2ab\\cos C$</span></div>
      <div class="formula-row"><span class="formula-label">Nurkade summa:</span><span class="formula-math">$A + B + C = 180°$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Rööpkülik ja trapets</div>
      <div class="formula-row"><span class="formula-label">Rööpkülik:</span><span class="formula-math">$S = ah$</span></div>
      <div class="formula-row"><span class="formula-label">Romb:</span><span class="formula-math">$S = \\dfrac{d_1 d_2}{2}$</span></div>
      <div class="formula-row"><span class="formula-label">Trapets:</span><span class="formula-math">$S = \\dfrac{(a+b)h}{2}$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 5 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">5</span> Vektorid ja joonte võrrandid</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Tehted vektoritega</div>
      <div class="formula-row"><span class="formula-label">Pikkus:</span><span class="formula-math">$|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$</span></div>
      <div class="formula-row"><span class="formula-label">Skalaarkorrutis:</span><span class="formula-math">$\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y = |\\vec{a}||\\vec{b}|\\cos\\varphi$</span></div>
      <div class="formula-row"><span class="formula-label">Risti tingimus:</span><span class="formula-math">$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Joone võrrandid</div>
      <div class="formula-row"><span class="formula-label">Üldkuju:</span><span class="formula-math">$Ax + By + C = 0$</span></div>
      <div class="formula-row"><span class="formula-label">Kalde-vabaliikme:</span><span class="formula-math">$y = kx + b$</span></div>
      <div class="formula-row"><span class="formula-label">Kahe punktiga:</span><span class="formula-math">$\\dfrac{x - x_1}{x_2 - x_1} = \\dfrac{y - y_1}{y_2 - y_1}$</span></div>
      <div class="formula-row"><span class="formula-label">Kaugus punktist:</span><span class="formula-math">$d = \\dfrac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 6 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">6</span> Tõenäosusteooria</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Kombinatoorika</div>
      <div class="formula-row"><span class="formula-label">Permutatsioonid:</span><span class="formula-math">$P_n = n!$</span></div>
      <div class="formula-row"><span class="formula-label">Kombinatsioonid:</span><span class="formula-math">$C_n^k = \\dbinom{n}{k} = \\dfrac{n!}{k!(n-k)!}$</span></div>
      <div class="formula-row"><span class="formula-label">Paigutused:</span><span class="formula-math">$A_n^k = \\dfrac{n!}{(n-k)!}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Tõenäosus</div>
      <div class="formula-row"><span class="formula-label">Klassikaline:</span><span class="formula-math">$P(A) = \\dfrac{|A|}{|\\Omega|}$</span></div>
      <div class="formula-row"><span class="formula-label">Liitmisteoreeema:</span><span class="formula-math">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</span></div>
      <div class="formula-row"><span class="formula-label">Sõltumatu:</span><span class="formula-math">$P(A \\cap B) = P(A) \\cdot P(B)$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Bernoulli valem</div>
      <div class="formula-row"><span class="formula-label">$k$ õnnestumist $n$ katsest:</span><span class="formula-math">$P_n(k) = \\dbinom{n}{k} p^k q^{n-k}$</span></div>
      <div class="note">kus $p$ — õnnestumise tõenäosus, $q = 1-p$</div>
    </div>
  </div>
</div>

<!-- PEATÜKK 7 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">7</span> Arvjadad</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Aritmeetiline jada</div>
      <div class="formula-row"><span class="formula-label">Üldliige:</span><span class="formula-math">$a_n = a_1 + (n-1)d$</span></div>
      <div class="formula-row"><span class="formula-label">Summa:</span><span class="formula-math">$S_n = \\dfrac{n(a_1 + a_n)}{2} = \\dfrac{n(2a_1 + (n-1)d)}{2}$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Geomeetriline jada</div>
      <div class="formula-row"><span class="formula-label">Üldliige:</span><span class="formula-math">$a_n = a_1 \\cdot q^{n-1}$</span></div>
      <div class="formula-row"><span class="formula-label">Summa ($q \\neq 1$):</span><span class="formula-math">$S_n = \\dfrac{a_1(q^n - 1)}{q - 1}$</span></div>
      <div class="formula-row"><span class="formula-label">Hääbuv ($|q|<1$):</span><span class="formula-math">$S = \\dfrac{a_1}{1 - q}$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 8 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">8</span> Eksponent- ja logaritmfunktsioon</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Eksponentfunktsioon</div>
      <div class="formula-row"><span class="formula-label">Kuju:</span><span class="formula-math">$f(x) = a^x,\\ a > 0,\\ a \\neq 1$</span></div>
      <div class="formula-row"><span class="formula-label">Eksponentvõrrand:</span><span class="formula-math">$a^{f(x)} = a^{g(x)} \\Leftrightarrow f(x) = g(x)$</span></div>
      <div class="formula-row"><span class="formula-label">Liitprotsent:</span><span class="formula-math">$A = A_0 \\left(1 + \\dfrac{p}{100}\\right)^t$</span></div>
    </div>
    <div class="topic">
      <div class="topic-name">Logaritm</div>
      <div class="formula-row"><span class="formula-label">Definitsioon:</span><span class="formula-math">$\\log_a b = c \\Leftrightarrow a^c = b$</span></div>
      <div class="formula-row"><span class="formula-label">Korrutis:</span><span class="formula-math">$\\log_a(xy) = \\log_a x + \\log_a y$</span></div>
      <div class="formula-row"><span class="formula-label">Jagatis:</span><span class="formula-math">$\\log_a\\dfrac{x}{y} = \\log_a x - \\log_a y$</span></div>
      <div class="formula-row"><span class="formula-label">Aste:</span><span class="formula-math">$\\log_a x^n = n \\log_a x$</span></div>
      <div class="formula-row"><span class="formula-label">Aluse vahetus:</span><span class="formula-math">$\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$</span></div>
    </div>
  </div>
</div>

<!-- PEATÜKK 9 — full width -->
<div class="chapter full-width">
  <div class="chapter-header"><span class="num">9</span> Trigonomeetrilised funktsioonid ja võrrandid</div>
  <div class="chapter-body">
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4mm;">
      <div>
        <div class="topic">
          <div class="topic-name">Nurkade teisendamine</div>
          <div class="formula-row"><span class="formula-label">Kraad → rad:</span><span class="formula-math">$\\alpha_{\\text{rad}} = \\alpha° \\cdot \\dfrac{\\pi}{180}$</span></div>
          <div class="formula-row"><span class="formula-label">Rad → kraad:</span><span class="formula-math">$\\alpha° = \\alpha_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$</span></div>
          <div class="formula-row"><span class="formula-label">Kaasnurgad:</span><span class="formula-math">$\\alpha + 360°k,\\; k \\in \\mathbb{Z}$</span></div>
        </div>
        <div class="topic">
          <div class="topic-name">Ühikring</div>
          <div class="formula-row"><span class="formula-label">sin α =</span><span class="formula-math">$y$-koordinaat</span></div>
          <div class="formula-row"><span class="formula-label">cos α =</span><span class="formula-math">$x$-koordinaat</span></div>
          <div class="formula-row"><span class="formula-label">Põhisamasus:</span><span class="formula-math">$\\sin^2\\alpha + \\cos^2\\alpha = 1$</span></div>
          <div class="formula-row"><span class="formula-label">tan α =</span><span class="formula-math">$\\dfrac{\\sin\\alpha}{\\cos\\alpha}$</span></div>
        </div>
        <div class="topic">
          <div class="topic-name">Kaare pikkus ja sektor</div>
          <div class="formula-row"><span class="formula-label">Kaare pikkus:</span><span class="formula-math">$l = \\alpha r$</span></div>
          <div class="formula-row"><span class="formula-label">Sektori pindala:</span><span class="formula-math">$S = \\dfrac{\\alpha r^2}{2}$</span></div>
          <div class="note">α on radiaanides</div>
        </div>
      </div>
      <div>
        <div class="topic">
          <div class="topic-name">Eriliste nurkade väärtused</div>
          <table style="width:100%;font-size:7pt;border-collapse:collapse;margin-top:1mm;">
            <tr style="background:#e8ebf5;font-weight:bold;">
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">α</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">0°</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">30°</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">45°</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">60°</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">90°</td>
            </tr>
            <tr>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;font-weight:bold;">sin</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">0</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{1}{2}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{\\sqrt{2}}{2}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{\\sqrt{3}}{2}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">1</td>
            </tr>
            <tr style="background:#f8f9ff;">
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;font-weight:bold;">cos</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">1</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{\\sqrt{3}}{2}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{\\sqrt{2}}{2}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{1}{2}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">0</td>
            </tr>
            <tr>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;font-weight:bold;">tan</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">0</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\frac{\\sqrt{3}}{3}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">1</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">$\\sqrt{3}$</td>
              <td style="padding:1mm 2mm;border:1px solid #c0c8e0;">—</td>
            </tr>
          </table>
        </div>
        <div class="topic">
          <div class="topic-name">Liitmisvalemid</div>
          <div class="formula-row"><span class="formula-label"></span><span class="formula-math">$\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$</span></div>
          <div class="formula-row"><span class="formula-label"></span><span class="formula-math">$\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$</span></div>
        </div>
        <div class="topic">
          <div class="topic-name">Topeltnurga valemid</div>
          <div class="formula-row"><span class="formula-label"></span><span class="formula-math">$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$</span></div>
          <div class="formula-row"><span class="formula-label"></span><span class="formula-math">$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha$</span></div>
        </div>
      </div>
      <div>
        <div class="topic">
          <div class="topic-name">Trigonomeetrilised võrrandid</div>
          <div class="formula-row"><span class="formula-label">$\\sin x = a$:</span><span class="formula-math">$x = (-1)^k \\arcsin a + \\pi k$</span></div>
          <div class="formula-row"><span class="formula-label">$\\cos x = a$:</span><span class="formula-math">$x = \\pm\\arccos a + 2\\pi k$</span></div>
          <div class="formula-row"><span class="formula-label">$\\tan x = a$:</span><span class="formula-math">$x = \\arctan a + \\pi k$</span></div>
          <div class="note">$k \\in \\mathbb{Z}$ kõikides valemites</div>
        </div>
        <div class="topic">
          <div class="topic-name">Funktsioonide omadused</div>
          <div class="formula-row"><span class="formula-label">$y = A\\sin(Bx+C)$:</span><span class="formula-math">Amplituud $A$, periood $\\dfrac{2\\pi}{B}$</span></div>
          <div class="formula-row"><span class="formula-label">sin, cos periood:</span><span class="formula-math">$2\\pi$</span></div>
          <div class="formula-row"><span class="formula-label">tan periood:</span><span class="formula-math">$\\pi$</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PEATÜKK 10 -->
<div class="chapter full-width">
  <div class="chapter-header"><span class="num">10</span> Funktsiooni uurimine</div>
  <div class="chapter-body">
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4mm;">
      <div>
        <div class="topic">
          <div class="topic-name">Põhifunktsioonid</div>
          <div class="formula-row"><span class="formula-label">Lineaar:</span><span class="formula-math">$y = kx + b$</span></div>
          <div class="formula-row"><span class="formula-label">Ruut:</span><span class="formula-math">$y = ax^2 + bx + c,\\; y = a(x-p)^2 + q$</span></div>
          <div class="formula-row"><span class="formula-label">Tipp:</span><span class="formula-math">$x_t = -\\dfrac{b}{2a},\\; y_t = -\\dfrac{D}{4a}$</span></div>
          <div class="formula-row"><span class="formula-label">Pöördvõrdeline:</span><span class="formula-math">$y = \\dfrac{k}{x}$</span></div>
          <div class="formula-row"><span class="formula-label">Astme-:</span><span class="formula-math">$y = x^n$</span></div>
        </div>
      </div>
      <div>
        <div class="topic">
          <div class="topic-name">Tuletis (diferentseerimine)</div>
          <div class="formula-row"><span class="formula-label">$(x^n)'=$</span><span class="formula-math">$nx^{n-1}$</span></div>
          <div class="formula-row"><span class="formula-label">$(a^x)'=$</span><span class="formula-math">$a^x \\ln a$</span></div>
          <div class="formula-row"><span class="formula-label">$(\\ln x)'=$</span><span class="formula-math">$\\dfrac{1}{x}$</span></div>
          <div class="formula-row"><span class="formula-label">$(\\sin x)'=$</span><span class="formula-math">$\\cos x$</span></div>
          <div class="formula-row"><span class="formula-label">$(\\cos x)'=$</span><span class="formula-math">$-\\sin x$</span></div>
          <div class="formula-row"><span class="formula-label">$(uv)'=$</span><span class="formula-math">$u'v + uv'$</span></div>
          <div class="formula-row"><span class="formula-label">$\\left(\\frac{u}{v}\\right)'=$</span><span class="formula-math">$\\dfrac{u'v - uv'}{v^2}$</span></div>
          <div class="formula-row"><span class="formula-label">Liitfunktsioon:</span><span class="formula-math">$(f(g(x)))' = f'(g(x))\\cdot g'(x)$</span></div>
        </div>
      </div>
      <div>
        <div class="topic">
          <div class="topic-name">Funktsiooni uurimine</div>
          <div class="note" style="margin-bottom:1.5mm;">1. Määramispiirkond · 2. Paarsus · 3. Nullkohad · 4. Märk · 5. Ekstreemumid · 6. Graafik</div>
          <div class="formula-row"><span class="formula-label">Kasvav:</span><span class="formula-math">$f'(x) > 0$</span></div>
          <div class="formula-row"><span class="formula-label">Kahanev:</span><span class="formula-math">$f'(x) < 0$</span></div>
          <div class="formula-row"><span class="formula-label">Ekstreemum:</span><span class="formula-math">$f'(x) = 0$ ja märk muutub</span></div>
        </div>
        <div class="topic">
          <div class="topic-name">Piirvärtus ja asümptoodid</div>
          <div class="formula-row"><span class="formula-label">Horisontaalne:</span><span class="formula-math">$y = \\lim_{x \\to \\pm\\infty} f(x)$</span></div>
          <div class="formula-row"><span class="formula-label">Vertikaalne:</span><span class="formula-math">$x = a$ kui $\\lim_{x\\to a} f(x) = \\pm\\infty$</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PEATÜKK 11 -->
<div class="chapter">
  <div class="chapter-header"><span class="num">11</span> Ekstreemumülesanded</div>
  <div class="chapter-body">
    <div class="topic">
      <div class="topic-name">Lahenduskäik</div>
      <div class="note">1. Kirjuta optimeeritav suurus funktsioonina · 2. Leia tuletis · 3. Lahenda $f'(x) = 0$ · 4. Kontrolli, kas tegu on maksimumi või miinimumiga · 5. Vasta küsimusele</div>
    </div>
    <div class="topic">
      <div class="topic-name">Kriteeriumid</div>
      <div class="formula-row"><span class="formula-label">Maksimum:</span><span class="formula-math">$f'(x_0) = 0$ ja $f'$ muutub $+$ → $-$</span></div>
      <div class="formula-row"><span class="formula-label">Miinimum:</span><span class="formula-math">$f'(x_0) = 0$ ja $f'$ muutub $-$ → $+$</span></div>
      <div class="formula-row"><span class="formula-label">2. tuletis:</span><span class="formula-math">$f''(x_0) < 0 \\Rightarrow$ maksimum; $f''(x_0) > 0 \\Rightarrow$ miinimum</span></div>
    </div>
  </div>
</div>

</div><!-- end grid -->

<div style="text-align:center;margin-top:6mm;padding-top:4mm;border-top:1px solid #c0c8e0;font-size:7pt;color:#888;">
  12. klassi matemaatika valemileht · Eesti riiklik õppekava · estlandiecast-cell.github.io/Matemaatika
</div>

</body>
</html>`;

writeFileSync('/tmp/valemileht.html', html);
console.log('HTML written');

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();

await page.setContent(html, { waitUntil: 'networkidle' });

// Wait for KaTeX to render
await page.waitForTimeout(3000);

await page.pdf({
  path: '/home/user/Matemaatika/valemileht.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});

await browser.close();
console.log('PDF generated: valemileht.pdf');
