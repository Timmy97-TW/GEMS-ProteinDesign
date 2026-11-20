# Protein Design Atlas / 蛋白質設計圖譜

**[→ Read the site](https://timmy97-tw.github.io/GEMS-ProteinDesign/)**

An academic history, technology-trend analysis and state-of-the-art map of
computational protein design, from Pauling's α-helix in 1951 to November 2026.
Bilingual (English / 繁體中文), no build step, no dependencies.

Compiled by **GEMS Research (Taiwan)** as a *Science for Good* reference.

一份關於計算蛋白質設計的學術史、技術趨勢分析與技術現狀地圖，從 1951 年 Pauling 的
α 螺旋到 2026 年 11 月。中英雙語、無建置流程、無相依套件。

---

## What this is, and what it is not

This repository contains **secondary analysis of published work**. It reports
**no new biological result** and describes **no new protein**. Nothing here was
designed, synthesised or assayed by us. It exists so that a student team can
orient itself in a field that moves faster than its textbooks.

Where the report makes a *judgement* rather than reporting a *measurement* —
the maturity scores, the severity scores, the feasibility scores — the criteria
are printed beside the score so the judgement can be disagreed with precisely.

本專案收錄的是**對已發表研究的二次分析**。它**不提出任何新的生物學結果**，也
**不描述任何新設計的蛋白質**。凡報告在做*判斷*而非報告*量測*之處，判準都與分數
並列，以便讀者精確地提出不同意見。

## Chapters

| # | Chapter | What is in it |
|---|---------|---------------|
| — | Overview | Six findings that change how you read the rest |
| 01 | Chronicle 1951–2026 | Six eras on one spine; the seven moments the problem itself changed; nine things the popular account gets wrong |
| 02 | 2024–2026 year by year | Architecture unified and a Nobel Prize; catalysis cracked; the field audits its own instruments |
| 03 | 2026 Frontier | Fifteen capability axes — routine / frontier / unsolved — plus eleven beliefs that are no longer true and ten claims without public evidence |
| 04 | Ten case studies | Eleven tools and the landmark result each is remembered for, with real numbers, honest caveats and licences |
| 05 | Bottleneck analysis | Ten bottlenecks with quantitative evidence, and the one that is a multiplier on all the others |
| 06 | 2027–2031 forecast | Fourteen falsifiable predictions, each with what would prove it wrong — and ten things that will not happen |
| 07 | GEMS pathways | Four Science for Good tracks, eleven iGEM 2027 concepts, compounding assets, and what a student team cannot do |
| 08 | Toolbox | Which tool answers which question, with compute, licence and cost; a stack that runs on a free Colab tier |
| 09 | Metrics & terms | What pLDDT, ipTM, scRMSD and k_cat/K_M actually measure, the trap on each, and a bilingual glossary |
| 10 | References | 435 sourced entries, filterable, plus a plain statement of method and weaknesses |

## How to read the numbers

Almost every headline hit rate in this field is self-reported by the method's
developer, on targets they chose, from designs they pre-filtered, scored by
metrics whose wet-lab correlation measures around **0.60–0.76 AUC**. Read every
capability figure on the site as an **upper bound**. Claims are labelled
peer-reviewed, preprint, company claim or press throughout.

## Running it locally

No build, no package manager. Any static file server will do:

```bash
python3 -m http.server 8731
```

Then open <http://localhost:8731>.

## How it is built

- `index.html` — shell, design tokens, all CSS
- `app.js` — hash router, bilingual layer, content helpers
- `fig.js` — the chart engine: bars, columns, lines, heatmaps, funnels, trees,
  flows, gantt, scatter, segmented bars. Charts are drawn at the **measured**
  container width so one SVG unit is one CSS pixel and type never scales below
  its intended size. Every figure ships a table view.
- `bio.js` — hand-built structural and mechanistic diagrams, plus lazy 3-D
  structure viewers that pull coordinates live from the RCSB Protein Data Bank
- `data/*.js` — one module per chapter; all prose lives here as `{en, zh}` pairs

The chart palette is the validated categorical set from the data-visualisation
method used to build this site; it passes the lightness-band, chroma-floor,
colour-vision-deficiency and normal-vision separation checks against the white
chart surface. Three slots sit below 3:1 contrast on white, so every figure
ships direct value labels **and** a table view as the documented relief.

## Licence

Site code: MIT. Written content and figures: CC BY 4.0. Structure coordinates
are fetched from the RCSB PDB at view time and are not redistributed here. See
[LICENSE](LICENSE).

## Disclaimer

Not affiliated with, or endorsed by, any laboratory, company or competition
named on the site. Compiled 20 November 2026; CASP17 results were not public at
that time, and several claims should be re-checked against them.

本站與文中提及的任何實驗室、公司或競賽均無隸屬關係，亦未經其背書。
