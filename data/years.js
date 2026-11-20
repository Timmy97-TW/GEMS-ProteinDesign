(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  PD.pages.years = {
    label: { en: '2024–2026', zh: '逐年演進' },
    title: { en: '2024–2026 Year by Year', zh: '2024–2026 逐年演進' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 2 · Three years at high resolution', zh: '第二章 · 三年的高解析度切片' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: '2024 unified the architecture. 2025 cracked catalysis. 2026 ==audited the instruments==.',
          zh: '2024 統一了架構。2025 攻破了催化。2026 ==稽核了儀器本身==。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Each of these years has a single defining move, and they are different *kinds* of move. 2024 was architectural — one network for all of biomolecular chemistry, plus a Nobel Prize. 2025 was functional — binder design became routine and de novo catalysis finally worked. 2026 was systemic, and double-edged: real capability rose sharply while four independent benchmarks showed the field\'s own success metrics were weaker than everyone had assumed. Both halves of 2026 are true, and the honest account needs both.',
          zh: '這三年各有一個決定性的動作，而它們是*不同種類*的動作。2024 年是架構性的——一個網路涵蓋全部生物分子化學，再加一座諾貝爾獎。2025 年是功能性的——結合蛋白設計變成常規，而從頭催化終於成功。2026 年是系統性的，而且是雙面的：真實能力大幅上升，同時四項獨立基準測試顯示這個領域自己的成功指標比所有人以為的都更脆弱。2026 年的兩半都是真的，誠實的敘述需要兩半都講。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'y24', t: { en: '2024', zh: '2024' } },
        { id: 'y24-af3', t: { en: 'AlphaFold3', zh: 'AlphaFold3' } },
        { id: 'y24-open', t: { en: 'Open weights', zh: '開放權重' } },
        { id: 'y25', t: { en: '2025', zh: '2025' } },
        { id: 'y25-cat', t: { en: 'Catalysis', zh: '催化' } },
        { id: 'y25-bind', t: { en: 'Binders routine', zh: '結合蛋白常規化' } },
        { id: 'y26', t: { en: '2026', zh: '2026' } },
        { id: 'y26-sys', t: { en: 'Model → system', zh: '模型→系統' } },
        { id: 'y26-audit', t: { en: 'The audit', zh: '稽核' } },
        { id: 'y26-tl', t: { en: '2026 timeline', zh: '2026 時間軸' } }
      ]);

      /* =========================================================
         2024
         ========================================================= */
      out += h.sec({
        id: 'y24',
        kick: { en: 'Year one of three · 2024', zh: '三年之一 · 2024' },
        h2: { en: '2024 — the architecture consolidates, and the field gets its prize', zh: '2024——架構收斂，領域拿到它的獎' },
        lede: {
          en: 'The year\'s shape is unusual: the single most important technical event (AlphaFold3) and the single most important institutional event (the Nobel Prize) happened five months apart, and the most consequential *cultural* event was a fight about weights that the community won in six months.',
          zh: '這一年的形狀很不尋常：最重要的技術事件（AlphaFold3）與最重要的制度事件（諾貝爾獎）相隔五個月，而最有後果的*文化*事件是一場關於權重的爭執——社群在六個月內贏了。'
        },
        body:
          h.stats([
            { v: { en: 'May', zh: '五月' }, l: { en: 'AlphaFold3 published — one model for all biomolecules', zh: 'AlphaFold3 發表——一個模型涵蓋所有生物分子' } },
            { v: '9 Oct', l: { en: 'Nobel Prize in Chemistry to Baker, Hassabis & Jumper', zh: '諾貝爾化學獎授予 Baker、Hassabis 與 Jumper' } },
            { v: '650+', l: { en: 'Signatures on the open letter about AF3 weights, in one week', zh: '一週內連署要求釋出 AF3 權重的簽名數' } },
            { v: '9', l: { en: 'Days from AF3\'s gated release to an MIT-licensed equivalent', zh: '從 AF3 受限釋出到 MIT 授權等價模型的天數' } },
            { v: '~214M', l: { en: 'Structures in AlphaFold DB vs ~225,000 experimental', zh: 'AlphaFold DB 的結構數，對比約 225,000 個實驗結構' } },
            { v: '58%', l: { en: 'esmGFP identity to its nearest known fluorescent protein', zh: 'esmGFP 與最近已知螢光蛋白的序列相似度' } }
          ]) +
          h.h3({ en: 'What actually changed', zh: '真正改變了什麼' }, 'y24-af3') +
          h.p(
            { en: 'The headline reading of AlphaFold3 — "now it does ligands too" — undersells it. The architectural changes were severe. The Evoformer became the **pairformer**; MSA processing collapsed from 48 blocks to **four**, with the MSA representation discarded entirely; and the structure module stopped placing residues as rigid frames and became a **diffusion module operating on raw atom coordinates**, with no equivariance built in.', zh: 'AlphaFold3 常見的解讀——「現在它也能處理配體了」——嚴重低估了它。架構上的改動非常劇烈。Evoformer 變成了 **pairformer**；MSA 處理從 48 個區塊縮減到**四個**，而且 MSA 表徵被完全丟棄；結構模組不再把殘基當成剛體框架來擺放，而是變成**直接在原始原子座標上運作的擴散模組**，沒有內建等變性。' },
            { en: 'That last change is the one that matters, and the reason is subtle: because diffusion at low noise levels forces the network to learn local stereochemistry from the data, DeepMind could **delete** the stereochemical violation losses and almost all of the special-case bonding logic. Once those are gone, arbitrary chemistry becomes tractable — proteins, DNA, RNA, ligands, ions, glycans and post-translational modifications all emerge from the same output head.', zh: '最後那一項才是關鍵，而理由很微妙：因為在低噪聲區間的擴散會迫使網路從資料中學到局部立體化學，DeepMind 才能**刪掉**立體化學違規的損失項，以及幾乎所有特例鍵結邏輯。一旦那些消失，任意化學就變得可處理——蛋白質、DNA、RNA、配體、離子、聚醣與轉譯後修飾全都從同一個輸出頭長出來。' },
            { en: 'The real claim of 2024, then, is not accuracy. It is **unification**: the long tail of specialist predictors — docking programs, RoseTTAFold2NA, AlphaFold-Multimer — existed because of an architectural limitation, not because biology is actually divided that way. RoseTTAFold All-Atom made the same argument three weeks earlier and added the generative corollary: RFdiffusionAA builds a protein *around* a ligand, validated experimentally on digoxigenin, heme and bilin.', zh: '因此，2024 年真正的主張不是準確度，而是**統一**：那一長串專用預測器——對接程式、RoseTTAFold2NA、AlphaFold-Multimer——之所以存在，是架構的限制，而不是生物學真的這樣切分。RoseTTAFold All-Atom 在三週前提出了同樣的論點，並補上了生成式的推論：RFdiffusionAA 能圍繞著一個配體*建造*蛋白，並在毛地黃毒苷配基、血紅素與膽色素上得到實驗驗證。' }
          ) +
          h.fig({
            kind: 'flow', tag: { en: 'architecture', zh: '架構' },
            title: { en: 'AlphaFold3: what was removed, and what that bought', zh: 'AlphaFold3：拿掉了什麼，換到了什麼' },
            sub: {
              en: 'The deletions are the interesting part. Each removal is only possible because the diffusion objective recovers what the removed component used to enforce.',
              zh: '有趣的是「被刪掉的東西」。每一項刪除之所以可行，都是因為擴散目標函數重新取得了被刪元件原本在強制的東西。'
            },
            data: {
              stages: [
                {
                  label: { en: 'Input embedder', zh: '輸入嵌入器' }, tone: 'n',
                  sub: { en: 'Any chemistry, as a token graph', zh: '任何化學，以字元圖表示' },
                  items: [{ en: 'protein, DNA, RNA', zh: '蛋白、DNA、RNA' }, { en: 'ligands, ions, glycans', zh: '配體、離子、聚醣' }, { en: 'modified residues', zh: '修飾殘基' }]
                },
                {
                  label: { en: 'MSA module × 4', zh: 'MSA 模組 × 4' }, tone: 'a',
                  sub: { en: 'was 48 Evoformer blocks', zh: '原本是 48 個 Evoformer 區塊' },
                  items: [{ en: 'MSA representation discarded', zh: 'MSA 表徵被丟棄' }, { en: 'evolutionary signal compressed early', zh: '演化訊號在前期就被壓縮' }]
                },
                {
                  label: { en: 'Pairformer', zh: 'Pairformer' }, tone: 'b',
                  sub: { en: 'pair + single representation only', zh: '只保留配對與單體表徵' },
                  items: [{ en: 'triangle attention retained', zh: '保留三角注意力' }, { en: 'no MSA track', zh: '沒有 MSA 軌道' }]
                },
                {
                  label: { en: 'Diffusion module', zh: '擴散模組' }, tone: 'v',
                  sub: { en: 'raw atom coordinates, no frames', zh: '原始原子座標，無剛體框架' },
                  items: [{ en: 'no equivariance imposed', zh: '不施加等變性' }, { en: 'stereochemistry losses deleted', zh: '刪除立體化學損失項' }, { en: 'cross-distillation suppresses hallucinated order', zh: '交叉蒸餾抑制幻覺性的有序結構' }]
                },
                {
                  label: { en: 'All-atom structure + confidence', zh: '全原子結構 + 信賴度' }, tone: 'g',
                  sub: { en: 'pLDDT, PAE, pTM, ipTM, LDDT-PLI', zh: 'pLDDT、PAE、pTM、ipTM、LDDT-PLI' },
                  items: [{ en: '4.4% chirality violations remain', zh: '仍有 4.4% 掌性違規' }, { en: 'antibodies need ~1,000 seeds', zh: '抗體需要約 1,000 個隨機種子' }]
                }
              ]
            },
            caption: {
              en: 'After Abramson et al., *Nature* 630:493 (2024). The 4.4% chirality-violation figure and the 1,000-seed antibody behaviour are reported in that paper; both are reasons the model is a strong pose predictor and a weak affinity predictor.',
              zh: '依 Abramson 等人，*Nature* 630:493（2024）。4.4% 的掌性違規率與「抗體需要 1,000 個種子」都是該論文自己報告的；這兩點也說明了為什麼這個模型是強的姿態預測器、卻是弱的親和力預測器。'
            }
          }) +
          h.h3({ en: 'The open-weights fight, and why it was settled in six months', zh: '開放權重之爭，以及它為何在六個月內落幕' }, 'y24-open') +
          h.p(
            { en: 'AlphaFold3 shipped as a paper with no code and no weights. An open letter collected more than 650 signatures within a week. The eventual release on 11 November was narrow: code for non-commercial use only, weights supplied by request at Google\'s "sole discretion", non-redistributable, and outputs barred from training competing models. *Nature* had to correct its own news coverage for having described this as open source.', zh: 'AlphaFold3 以一篇沒有程式碼、沒有權重的論文形式發布。一封公開信在一週內收集到超過 650 個簽名。11 月 11 日最終的釋出範圍很窄：程式碼僅限非商業用途，權重須申請、由 Google「全權裁量」提供、不可轉散布，且輸出禁止用於訓練競爭模型。*Nature* 還必須更正自己的新聞報導，因為它把這稱為開源。' },
            { en: 'By then it did not matter. The community had rebuilt the model four times during the gap — HelixFold3 (Baidu, August), Chai-1 (September), Protenix (ByteDance, November) and **Boltz-1** (MIT, 20 November) under an MIT licence covering code, weights, datasets and benchmarks, commercial use included. The Boltz-1 paper states plainly that its authors requested the AlphaFold3 weights and never received them. **Nine days after a restricted release, a permissively licensed equivalent existed.**', zh: '但那時已經不重要了。社群在這段空窗期把這個模型重建了四次——HelixFold3（百度，八月）、Chai-1（九月）、Protenix（字節跳動，十一月），以及 **Boltz-1**（MIT，11 月 20 日），以 MIT 授權涵蓋程式碼、權重、資料集與基準，並允許商業使用。Boltz-1 的論文直接寫明：作者曾申請 AlphaFold3 權重，從未收到。**在受限釋出九天後，一個寬鬆授權的等價模型就存在了。**' },
            { en: 'The generalisable lesson — and it held again in 2026, when a 655-million-parameter Apache-2.0 model took the top median DockQ on a standardised antibody–antigen benchmark five months after a closed competitor\'s announcement — is that **in this field, weight-withholding has roughly a six-month half-life.** For a student team the practical corollary is simply: do not build a plan around a closed model, and do not panic when one appears.', zh: '可以一般化的教訓——這條在 2026 年再次成立：一個 6.55 億參數、Apache-2.0 授權的模型，在某個閉源競爭者宣布後五個月，在標準化的抗體—抗原基準上拿下最高的 DockQ 中位數——是**在這個領域，扣留權重的半衰期大約是六個月。** 對學生團隊而言，實務上的推論很簡單：不要把計畫建立在閉源模型上，也不要在閉源模型出現時驚慌。' }
          ) +
          h.fig({
            kind: 'gantt', tag: { en: 'timeline', zh: '時間軸' },
            title: { en: 'Four points, one argument: the 2024 open-weights sequence', zh: '四個時間點，一個論證：2024 年開放權重事件序列' },
            sub: { en: 'Horizontal axis is calendar 2024. Each bar spans from the event to the end of the year, so the reading order is left to right.', zh: '橫軸為 2024 年曆年。每一條從事件當日延伸到年底，因此閱讀順序是從左到右。' },
            opts: { min: 2024.3, max: 2025.0 },
            data: [
              { label: { en: 'AlphaFold3 paper — no code, no weights', zh: 'AlphaFold3 論文——無程式碼、無權重' }, start: 2024.35, end: 2024.86, tone: 'r', note: { en: '8 May', zh: '5 月 8 日' } },
              { label: { en: 'Open letter, 650+ signatures in a week', zh: '公開信，一週 650+ 簽名' }, start: 2024.36, end: 2024.86, tone: 'a', note: { en: '11 May', zh: '5 月 11 日' } },
              { label: { en: 'Chai-1 released (Apache-2.0)', zh: 'Chai-1 釋出（Apache-2.0）' }, start: 2024.69, end: 2025.0, tone: 'g', note: { en: '9 Sep', zh: '9 月 9 日' } },
              { label: { en: 'AlphaFold3 code released, weights gated', zh: 'AlphaFold3 程式碼釋出，權重受限' }, start: 2024.86, end: 2025.0, tone: 'b', note: { en: '11 Nov', zh: '11 月 11 日' } },
              { label: { en: 'Boltz-1 released (MIT: code + weights + data)', zh: 'Boltz-1 釋出（MIT：程式碼＋權重＋資料）' }, start: 2024.89, end: 2025.0, tone: 'g', note: { en: '20 Nov', zh: '11 月 20 日' } }
            ],
            caption: {
              en: 'Dates from the respective releases and preprints. The ordering is the point: the community answer arrived before the official one was fully usable.',
              zh: '日期取自各自的釋出與預印本。重點在於順序：社群的答案在官方版本可完整使用之前就到了。'
            }
          }) +
          h.h3({ en: 'The rest of 2024, in brief', zh: '2024 年的其餘部分，簡述' }) +
          h.cards([
            {
              chips: [{ t: { en: 'Oct 9', zh: '10 月 9 日' }, k: 'v' }, { t: { en: 'institutional', zh: '制度' }, k: 'b' }],
              h: { en: 'The Nobel Prize in Chemistry', zh: '諾貝爾化學獎' },
              p: {
                en: 'Half to David Baker "for computational protein design", half jointly to Demis Hassabis and John Jumper "for protein structure prediction". The day before, the Physics prize went to Hopfield and Hinton for the foundations of machine learning. Read together, the two prizes say that deep learning had become a method of the physical sciences — and that protein design was its flagship application.',
                zh: '一半授予 David Baker「因計算蛋白質設計」，一半共同授予 Demis Hassabis 與 John Jumper「因蛋白質結構預測」。前一天，物理獎授予 Hopfield 與 Hinton，表彰機器學習的基礎。兩個獎合起來讀，是在說：深度學習已成為物理科學的方法——而蛋白質設計是它的旗艦應用。'
              }
            },
            {
              chips: [{ t: { en: 'Jun–Jul', zh: '六–七月' }, k: 'v' }, { t: '98B', k: 'b' }],
              h: { en: 'ESM3 and esmGFP', zh: 'ESM3 與 esmGFP' },
              p: {
                en: 'A 98-billion-parameter model reasoning jointly over sequence, structure and function generated a bright fluorescent protein **58% identical to the nearest known fluorescent protein** and about 36% to avGFP — 96 mutations across 229 residues. It fluoresced. The much-quoted framing, "equivalent to simulating 500 million years of evolution", is an extrapolation: a molecular clock fitted to six anthozoan GFPs, applied to a sequence distance. It restates a distance in time units; it does not measure time. The design was also heavily human-scaffolded, with chromophore residues and a backbone segment pinned in the prompt.',
                zh: '一個 980 億參數、同時在序列、結構與功能上推理的模型，生成了一個明亮的螢光蛋白，它**與最近的已知螢光蛋白有 58% 相同**，與 avGFP 約 36%——229 個殘基中有 96 個突變。它真的會發光。那句被大量引用的說法「相當於模擬五億年的演化」是一種外推：把分子鐘擬合到六個珊瑚蟲類 GFP，再套用到序列距離上。它只是把距離換成時間單位來重述，並沒有量測時間。而且這個設計有大量人工支架：發色團殘基與一段主鏈在提示中被固定住。'
              }
            },
            {
              chips: [{ t: { en: 'Sep–Oct', zh: '九–十月' }, k: 'g' }],
              h: { en: 'Binder design: from demonstration to method', zh: '結合蛋白設計：從示範到方法' },
              p: {
                en: 'AlphaProteo reported 3–300× better affinities across seven targets and the first AI success on VEGF-A — and flat failure on TNFα, released with no code, no weights and no API. BindCraft reported **10–100% experimental success** by backpropagating through frozen AlphaFold2 weights, open-source, on a single GPU. The bottleneck moved from "can we get a binder" to "which targets are designable", and nobody could predict that in advance.',
                zh: 'AlphaProteo 報告在七個標的上親和力提升 3–300 倍，以及 AI 首次在 VEGF-A 上成功——同時在 TNFα 上完全失敗，而且釋出時沒有程式碼、沒有權重、沒有 API。BindCraft 則透過對凍結的 AlphaFold2 權重做反向傳播，報告 **10–100% 的實驗成功率**，開源，單一 GPU 即可。瓶頸從「我們能不能拿到結合蛋白」轉為「哪些標的是可設計的」，而沒有人能事先預測這一點。'
              }
            },
            {
              chips: [{ t: { en: 'all year', zh: '全年' }, k: 'a' }, { t: { en: 'honest', zh: '誠實' }, k: 'r' }],
              h: { en: 'The benchmark critiques, before anyone forced the issue', zh: '基準測試的自我批判，在被逼之前就出現' },
              p: {
                en: 'Scaffold-Lab (February) and ProteinBench (September) documented that scTM and scRMSD disagree with each other, that the 2 Å designability threshold is confounded by protein length, that novelty scores inflate as the reference set grows, and that diversity is almost always reported conditioned on designability. The field published its own measurement problems a year before the 2026 benchmarks made them unavoidable — which is to its credit.',
                zh: 'Scaffold-Lab（二月）與 ProteinBench（九月）記錄了：scTM 與 scRMSD 彼此不一致、2 Å 的可設計性門檻被蛋白長度混淆、新穎性分數會隨參考資料集變大而膨脹，而多樣性幾乎總是在「以可設計性為條件」下被報告。這個領域在 2026 年的基準把問題變得無法迴避之前一年，就自己發表了自己的量測問題——這是值得肯定的。'
              }
            }
          ], 'g2') +
          h.take({ en: 'The one-sentence summary of 2024', zh: '2024 年的一句話總結' }, {
            en: 'By December 2024, **geometry was largely solved and energetics had barely started** — and the money had already noticed, moving from GPUs toward wet-lab throughput. That is the real handoff into 2025.',
            zh: '到 2024 年十二月，**幾何大致被解決，而能量學幾乎還沒開始**——而資金早已注意到這一點，開始從 GPU 轉向濕實驗產能。這才是交接給 2025 年的真正交接棒。'
          })
      });

      /* =========================================================
         2025
         ========================================================= */
      out += h.sec({
        id: 'y25',
        kick: { en: 'Year two of three · 2025', zh: '三年之二 · 2025' },
        h2: { en: '2025 — function arrives: catalysis, antibodies, ensembles', zh: '2025——功能登場：催化、抗體、構型集合' },
        lede: {
          en: 'If 2024 was about what a model could represent, 2025 was about what a designed molecule could do. Three results would each have defined a normal year, and they landed within nine months of each other.',
          zh: '如果 2024 年關乎「模型能表徵什麼」，2025 年關乎「一個被設計出來的分子能做什麼」。有三項成果各自都足以定義平常的一年，而它們在九個月內相繼落地。'
        },
        body:
          h.stats([
            { v: '2.2×10⁵', l: { en: 'k_cat/K_M of de novo serine hydrolases, M⁻¹s⁻¹, with no directed evolution', zh: '從頭設計絲胺酸水解酶的 k_cat/K_M（M⁻¹s⁻¹），完全未用定向演化' } },
            { v: '39/43', l: { en: 'Intrinsically disordered targets with designed binders', zh: '成功設計出結合蛋白的本質無序標的數' } },
            { v: '41/41', l: { en: 'Active sites scaffolded by RFdiffusion2 (prior best 16/41)', zh: 'RFdiffusion2 支架化成功的活性位（前一代最佳 16/41）' } },
            { v: '6 CDRs', l: { en: 'Antibody loops confirmed by structure, the first time', zh: '首次以結構確認全部抗體環構型' } },
            { v: '0', l: { en: 'Peer-reviewed clinical trials of a de novo protein in 2025', zh: '2025 年從頭設計蛋白的同儕審查臨床試驗數' } },
            { v: '247,220', l: { en: 'PDB entries released by 31 Dec 2025', zh: '截至 2025 年 12 月 31 日已釋出的 PDB 條目' } }
          ]) +
          h.h3({ en: 'The catalysis result, and the gap it closed', zh: '催化的成果，以及它填平了多少差距' }, 'y25-cat') +
          h.p(
            { en: 'De novo enzyme design had been stuck for fifteen years in a specific way: designs bound their substrates and performed single turnovers, but their catalytic efficiencies sat three to six orders of magnitude below natural enzymes. Lauko et al. changed that in February 2025, reaching **k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹** across five folds unlike any natural serine hydrolase, with crystal structures under 1 Å from the models — and crucially **without directed evolution**.', zh: '從頭酵素設計卡了十五年，而且卡法很具體：設計能結合受質、能完成單次轉換，但催化效率比天然酵素低三到六個數量級。Lauko 等人在 2025 年二月改變了這件事，在五種與任何天然絲胺酸水解酶都不同的摺疊上達到 **k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**，晶體結構與模型相距不到 1 Å——而且關鍵在於**完全沒有用定向演化**。' },
            { en: 'The methodological key is worth understanding because it generalises. Previous enzyme design optimised the active site for a *single* state — usually the transition state. Lauko et al. used an ensemble predictor (PLACER) to generate stochastic side-chain ensembles for **all four states of the catalytic cycle** — apo, both tetrahedral intermediates, and the acyl-enzyme — and filtered on pre-organisation across the whole reaction coordinate. The effect was dramatic: probe labelling rose from 3% to 17% once that filter was applied, and the headline efficiency improved roughly 58-fold between the preprint and the published version purely from better filtering.', zh: '方法上的關鍵值得理解，因為它可以一般化。先前的酵素設計是為*單一*狀態最佳化活性位——通常是過渡態。Lauko 等人改用一個集合預測器（PLACER），為**催化循環的全部四個狀態**——apo、兩個四面體中間體、以及醯基—酵素中間體——生成隨機側鏈集合，並以「整條反應座標上的預組織程度」來篩選。效果非常顯著：套用該篩選後，探針標記率從 3% 升到 17%；而從預印本到正式發表之間，招牌效率僅因篩選改善就提升了約 58 倍。' },
            { en: '**The lesson transfers beyond enzymes:** a single static structure is the wrong object to design against whenever the function involves motion. The same insight explains why ensemble methods were 2025\'s other big theme.', zh: '**這個教訓可以超越酵素：** 只要功能涉及運動，單一靜態結構就是錯誤的設計對象。同樣的洞見也解釋了為什麼「集合方法」是 2025 年另一個大主題。' }
          ) +
          h.fig({
            kind: 'bars', tag: { en: 'the key chart', zh: '關鍵圖表' },
            title: { en: 'Catalytic efficiency: designed enzymes against natural ones', zh: '催化效率：設計酵素對天然酵素' },
            sub: {
              en: 'k_cat/K_M in M⁻¹s⁻¹, logarithmic. Seven orders of magnitude separate the best and worst de novo designs; two to four orders still separate the best design from the best natural enzymes.',
              zh: 'k_cat/K_M，單位 M⁻¹s⁻¹，對數尺度。最好與最差的從頭設計之間相差七個數量級；最好的設計與最好的天然酵素之間仍相差二到四個數量級。'
            },
            opts: { log: true, unit: 'M⁻¹s⁻¹' },
            data: [
              { label: { en: 'Prior best de novo, same mechanism (pre-2024)', zh: '同機制的先前最佳從頭設計（2024 年前）' }, v: 3.7, color: '#e34948', note: { en: 'the baseline Lauko et al. improved on', zh: 'Lauko 等人所超越的基準' } },
              { label: { en: 'De novo C–C lyase', zh: '從頭設計 C–C 裂解酶' }, v: 5, color: '#e34948' },
              { label: { en: 'De novo retro-aldolase (2008)', zh: '從頭設計逆醛醇酶（2008）' }, v: 290, color: '#e34948' },
              { label: { en: 'Natural subtilisin (activated esters)', zh: '天然枯草桿菌蛋白酶（活化酯）' }, v: 610, color: '#1baf7a' },
              { label: { en: 'Kemp eliminase after in-vitro evolution (2008)', zh: 'Kemp 消去酶，體外演化後（2008）' }, v: 2600, color: '#eb6834' },
              { label: { en: 'Natural α-chymotrypsin (activated esters)', zh: '天然 α-胰凝乳蛋白酶（活化酯）' }, v: 3530, color: '#1baf7a' },
              { label: { en: 'Best fully computational Kemp eliminase', zh: '最佳的純計算 Kemp 消去酶' }, v: 12700, color: '#2a78d6' },
              { label: { en: 'De novo Zn metallohydrolase', zh: '從頭設計鋅金屬水解酶' }, v: 16000, color: '#2a78d6' },
              { label: { en: 'Natural enzyme median (Bar-Even 2011)', zh: '天然酵素中位數（Bar-Even 2011）' }, v: 125000, color: '#1baf7a' },
              { label: { en: 'De novo serine hydrolase (2025) — no evolution', zh: '從頭設計絲胺酸水解酶（2025）——未演化' }, v: 220000, color: '#2a78d6', note: { en: 'momi120-103: k_cat 0.057 s⁻¹, K_M 0.26 mM', zh: 'momi120-103：k_cat 0.057 s⁻¹、K_M 0.26 mM' } },
              { label: { en: 'Natural acetylcholinesterase (diffusion-limited)', zh: '天然乙醯膽鹼酯酶（受擴散限制）' }, v: 100000000, color: '#1baf7a', note: { en: 'the physical ceiling', zh: '物理上限' } }
            ],
            legend: [{ c: '#2a78d6', n: { en: 'Designed (2025–26 best)', zh: '設計（2025–26 最佳）' } }, { c: '#e34948', n: { en: 'Designed (earlier / weaker)', zh: '設計（較早／較弱）' } }, { c: '#eb6834', n: { en: 'Designed + evolved', zh: '設計＋演化' } }, { c: '#1baf7a', n: { en: 'Natural', zh: '天然' } }],
            caption: {
              en: 'Values collated from the enzyme-design literature; natural comparators are on activated esters where stated, so cross-substrate comparisons are indicative rather than exact. The designed serine hydrolase sits above two natural proteases on this substrate and roughly three orders below the diffusion limit.',
              zh: '數值彙整自酵素設計文獻；凡標註者，天然對照皆以活化酯為受質，因此跨受質的比較僅供參考、並非精確對等。這個設計的絲胺酸水解酶在此受質上高於兩種天然蛋白酶，距擴散極限約三個數量級。'
            }
          }) +
          h.bio('enzyme', {
            title: { en: 'How an enzyme gets designed', zh: '一個酵素是怎麼被設計出來的' },
            sub: {
              en: 'Three steps, and the 2025 advance was entirely in how step three is filtered — scoring the active site across every state of the catalytic cycle rather than in a single snapshot.',
              zh: '三個步驟；2025 年的進展完全在於第三步如何篩選——為活性位在催化循環的*每一個*狀態評分，而不是只看一個瞬間。'
            },
            caption: {
              en: 'Schematic. The catalytic triad shown is illustrative of a serine-hydrolase-like arrangement, not a specific design.',
              zh: '示意圖。圖中的催化三元體僅示意絲胺酸水解酶類的排列，並非某個特定設計。'
            }
          }) +
          h.h3({ en: 'Binder design becomes routine — in three independent demonstrations', zh: '結合蛋白設計變成常規——三個獨立示範' }, 'y25-bind') +
          h.p({
            en: 'One strong result is a paper. Three independent results in one year, from different groups using different methods, is a change in what the field can assume. All three reported designs tested **in the tens**, not the tens of thousands.',
            zh: '一個強成果只是一篇論文。同一年內三個獨立成果，來自不同團隊、使用不同方法，就是這個領域「可以假設什麼」發生了改變。而且三者報告的測試設計數都是**數十個**，不是數萬個。'
          }) +
          h.tbl({
            min: 860,
            cols: [
              { t: { en: 'Result', zh: '成果' }, w: '20%' },
              { t: { en: 'What was designed', zh: '設計了什麼' } },
              { t: { en: 'Designs tested', zh: '測試設計數' }, w: '13%' },
              { t: { en: 'Outcome', zh: '結果' }, w: '26%' },
              { t: { en: 'Open?', zh: '開放？' }, w: '10%' }
            ],
            rows: [
              [{ en: '**BindCraft** (*Nature*, Aug 2025)', zh: '**BindCraft**（*Nature*，2025 年 8 月）' }, { en: 'Mini-binders against 12 structured targets, by backpropagating through frozen AlphaFold2-multimer weights and re-predicting the target every iteration so both partners flex', zh: '針對 12 個有結構的標的設計迷你結合蛋白，做法是對凍結的 AlphaFold2-multimer 權重做反向傳播，並在每次迭代重新預測標的，讓雙方都能變形' }, { en: '~10 per target', zh: '每標的約 10 個' }, { en: '**46.3% mean success, range 10–100%**, with no high-throughput screening. Crystal structures at 1.7–3.1 Å Cα RMSD to design. Notably: i_pTM predicted *binding* but did **not** correlate with affinity.', zh: '**平均成功率 46.3%，範圍 10–100%**，完全不需高通量篩選。晶體結構與設計的 Cα RMSD 為 1.7–3.1 Å。值得注意：i_pTM 能預測*是否結合*，但與親和力**不**相關。' }, { en: 'MIT, one GPU', zh: 'MIT 授權，單一 GPU' }],
              [{ en: '**"Logos"** (*Science*, Jul 2025)', zh: '**「Logos」**（*Science*，2025 年 7 月）' }, { en: 'Binders to **intrinsically disordered** targets — the class everyone had treated as undesignable because there is no fixed structure to dock against', zh: '針對**本質無序**標的的結合蛋白——因為沒有固定結構可對接，這類標的長期被視為不可設計' }, { en: '~22 per target', zh: '每標的約 22 個' }, { en: 'Binders for **39 of 43 targets**; 100 pM–100 nM in 34 cases', zh: '**43 個標的中有 39 個**取得結合蛋白；34 例親和力在 100 pM–100 nM' }, { en: 'Published method', zh: '已發表方法' }],
              [{ en: '**RFpeptides** (*Nat Chem Biol*, Jun 2025)', zh: '**RFpeptides**（*Nat Chem Biol*，2025 年 6 月）' }, { en: 'Macrocyclic peptide binders — a different modality, between small molecule and protein', zh: '大環肽結合蛋白——介於小分子與蛋白質之間的另一種模態' }, { en: '≤20 per target', zh: '每標的 ≤20 個' }, { en: '**4 of 4 targets**; K_d < 10 nM for one designed against a *predicted* structure, not an experimental one', zh: '**4 個標的全部成功**；其中一個是針對*預測*結構（非實驗結構）設計的，K_d < 10 nM' }, { en: 'Open', zh: '開放' }],
              [{ en: '**RFantibody** (*Nature*, Nov 2025)', zh: '**RFantibody**（*Nature*，2025 年 11 月）' }, { en: 'De novo antibodies and VHHs with the framework held fixed and only CDR loops plus rigid-body pose designed, epitope specified by hotspots', zh: '從頭設計抗體與 VHH，固定框架區、只設計 CDR 環與剛體姿態，抗原決定位以熱點指定' }, { en: '~95 by SPR, or 9,000 by display', zh: 'SPR 約 95 個，或展示法 9,000 個' }, { en: 'Hit rates **0–2%**, initial affinities tens-to-hundreds of nM, needing continuous evolution to reach single-digit nM. But: a 3.6 Å cryo-EM structure matched **all six CDR loops** at 0.2–1.1 Å backbone RMSD — the first structurally validated de novo antibodies.', zh: '命中率 **0–2%**，初始親和力數十到數百 nM，需連續演化才能進到個位數 nM。但：一個 3.6 Å 的冷凍電顯結構在 0.2–1.1 Å 主鏈 RMSD 內吻合**全部六個 CDR 環**——第一批經結構驗證的從頭抗體。' }, { en: 'MIT, incl. weights', zh: 'MIT，含權重' }]
            ],
            source: { en: 'Full citations on the References tab.', zh: '完整出處見「參考資料」頁。' }
          }) +
          h.warn({
            en: '**The asymmetry to notice.** Structured protein targets: tens of designs, nanomolar expected. Antibody CDR loops: thousands of designs, 0–2%, and affinity maturation still required. Both results are 2025, from the same laboratory lineage. Antibody design is the hardest commercially important axis precisely because the loops are the functional part and the loops are what the models model worst.',
            zh: '**值得注意的不對稱。** 有結構的蛋白標的：數十個設計、預期可達奈莫耳級。抗體 CDR 環：數千個設計、0–2%，而且仍需親和力成熟化。兩個結果都在 2025 年、來自同一個實驗室脈絡。抗體設計之所以是商業上最重要也最難的一軸，正因為「環」是功能所在，而「環」正是模型模得最差的部分。'
          }) +
          h.h3({ en: 'The other three things that mattered in 2025', zh: '2025 年其餘三件重要的事' }) +
          h.cards([
            {
              chips: [{ t: { en: 'Aug', zh: '八月' }, k: 'v' }, { t: { en: 'ensembles', zh: '構型集合' }, k: 'b' }],
              h: { en: 'BioEmu: ensembles instead of single structures', zh: 'BioEmu：以構型集合取代單一結構' },
              p: [{
                en: 'Trained on more than 200 milliseconds of molecular dynamics plus experimental stabilities, BioEmu generates thousands of independent structures per hour on one GPU and reproduces relative free energies to about 1 kcal/mol, capturing cryptic pockets and local unfolding. MIT-licensed.',
                zh: '以超過 200 毫秒的分子動力學軌跡加上實驗穩定度資料訓練，BioEmu 在單一 GPU 上每小時可生成數千個獨立結構，相對自由能誤差約 1 kcal/mol，能捕捉隱蔽口袋與局部去摺疊。MIT 授權。'
              }, {
                en: 'The 2026 follow-up is essential context: BioEmu does **not** give you Boltzmann-weighted ensembles. It mis-ranks conformer energies, misses mutation-induced population shifts, and fails outright where side-chain dynamics govern. It is best used as a seeder for molecular dynamics plus Markov-state-model reweighting — which is still a large win, but a different claim from the one the press made.',
                zh: '2026 年的後續研究是必要的背景：BioEmu **不會**給你波茲曼加權的構型集合。它會把構型的能量排序排錯、漏掉突變造成的族群位移，在由側鏈動力學主導的系統上則直接失敗。最好的用法是當作分子動力學加馬可夫狀態模型重新加權的「播種器」——這仍是很大的收穫，但與媒體宣稱的是不同的主張。'
              }]
            },
            {
              chips: [{ t: { en: 'Oct', zh: '十月' }, k: 'r' }, { t: { en: 'biosecurity', zh: '生物安全' }, k: 'a' }],
              h: { en: 'The screening assumption breaks', zh: '篩檢假設被打破' },
              p: [{
                en: 'A Microsoft-led team working with DNA-synthesis providers showed that open generative design tools can produce variants of proteins of concern that **current screening cannot reliably detect** — then developed and deployed patches improving detection of functional homologues. Roughly 72 controlled proteins, more than 70,000 candidate sequences, **none synthesised**, with about ten months of coordinated disclosure before publication.',
                zh: '一個由微軟主導、與 DNA 合成供應商合作的團隊證明：開放的生成式設計工具可以產生受關注蛋白的變體，而**現行篩檢無法可靠偵測**——接著他們開發並部署了修補，提升對功能同源物的偵測率。約 72 個受管制蛋白、超過 70,000 條候選序列、**沒有任何一條被合成**，並在發表前進行約十個月的協同揭露。'
              }, {
                en: 'This is the first large-scale breach of the homology assumption that all synthesis screening rests on — and the first design-biosecurity result that shipped a remedy alongside the problem. It is also the clearest precedent for how this kind of work should be done.',
                zh: '這是所有合成篩檢所依賴的「同源性假設」第一次被大規模突破——也是第一個在提出問題的同時就交出解方的設計生物安全成果。它同時也是這類工作「該怎麼做」最清楚的先例。'
              }]
            },
            {
              chips: [{ t: { en: 'all year', zh: '全年' }, k: 'r' }, { t: { en: 'translation', zh: '轉譯' }, k: 'r' }],
              h: { en: 'Translation went backwards relative to the narrative', zh: '轉譯相對於敘事是退步的' },
              p: [{
                en: 'There was **no peer-reviewed clinical trial of a de novo designed protein in 2025**. Isomorphic Labs raised $600 million and missed its stated end-of-2025 clinic milestone with no publicly named candidate. The Institute for Protein Design\'s designed SARS-family vaccine entered human trials in **February 2026**, not 2025.',
                zh: '2025 年**沒有任何從頭設計蛋白的同儕審查臨床試驗**。Isomorphic Labs 募資 6 億美元，卻未達成自己宣布的 2025 年底進臨床里程碑，也沒有公開任何候選藥名稱。蛋白質設計研究所設計的 SARS 家族疫苗是在 **2026 年二月**進入人體試驗，不是 2025 年。'
              }, {
                en: 'Across all of 2025 there was essentially **one** third-party evaluation of a major published design pipeline. That absence is the setup for 2026.',
                zh: '整個 2025 年，對重要已發表設計流程的第三方評估基本上只有**一份**。這份缺席，正是 2026 年的伏筆。'
              }]
            }
          ], 'g3')
      });

      /* =========================================================
         2026
         ========================================================= */
      out += h.sec({
        id: 'y26',
        kick: { en: 'Year three of three · 2026', zh: '三年之三 · 2026' },
        h2: { en: '2026 — the frontier stopped being a model and became a system', zh: '2026——前沿不再是一個模型，而成為一套系統' },
        lede: {
          en: 'In January the question was which generator was best. By November the working unit was a *stack*: one all-atom co-design model that takes chemistry as an input; an agentic controller allocating GPU hours across tools; a reranker that is deliberately **not** the structure predictor\'s own confidence; a 48-hour wet-lab loop; and a DNA bill that is 80% of the cost.',
          zh: '一月時，問題是「哪個生成器最好」。到十一月，工作單位已經是一整套**堆疊**：一個把化學當輸入的全原子共設計模型；一個在各工具之間分配 GPU 時數的代理式控制器；一個刻意**不是**結構預測器自身信賴度的重排序器；一個 48 小時的濕實驗循環；以及一張佔總成本 80% 的 DNA 帳單。'
        },
        body:
          h.stats([
            { v: '86/127', l: { en: 'Targets with designed binders in the largest validated campaign', zh: '最大規模已驗證活動中成功取得結合蛋白的標的數' } },
            { v: '5.8×', l: { en: 'Throughput gain, passing designs per GPU-hour, in one year', zh: '一年內「每 GPU 小時通過設計數」的產能增益' } },
            { v: '26.8%', l: { en: 'Hit rate of a fully autonomous agent campaign (354 of 1,320)', zh: '完全自主代理人活動的命中率（1,320 中 354）' } },
            { v: '48 h', l: { en: 'DNA to characterised protein, hundreds of designs at a time', zh: '從 DNA 到已表徵蛋白，一次數百個設計' } },
            { v: '≥80%', l: { en: 'Share of characterisation cost that is synthetic DNA', zh: '表徵成本中合成 DNA 所佔比例' } },
            { v: '511', l: { en: 'AI antibodies in the field\'s first blinded benchmark, 29 organisations', zh: '本領域第一個盲測基準中的 AI 抗體數，來自 29 個機構' } }
          ]) +
          h.h3({ en: 'Three stuck axes came unstuck', zh: '三個卡住的軸被鬆開' }, 'y26-sys') +
          h.cards([
            {
              chips: [{ t: { en: 'Oct 2026', zh: '2026 年 10 月' }, k: 'g' }, { t: { en: '×2 Nature', zh: '兩篇 Nature' }, k: 'b' }],
              h: { en: 'Amide-bond hydrolysis — twice in one month', zh: '醯胺鍵水解——一個月內兩次' },
              p: [{
                en: 'Cutting the polypeptide backbone had resisted de novo design for two decades. In October two independent *Nature* papers did it. **De novo cysteine proteases**: 13 of 69 designs active (19%), rate enhancements to 3 × 10⁷, folds unlike any natural protease (TM-score < 0.50), six crystal structures within 1.2 Å of the model, and activity in mammalian cells. **Designed zinc metalloproteases**: 36% of 135 designs cleave at the targeted scissile bond, best design accelerating >10⁸-fold and >10¹⁰-fold after four substitutions — selectively cleaving TDP-43, amyloid-β and serum amyloid A.',
                zh: '切斷多肽主鏈抵抗了從頭設計二十年。十月，兩篇獨立的 *Nature* 論文做到了。**從頭設計半胱胺酸蛋白酶**：69 個設計中 13 個有活性（19%），速率提升達 3 × 10⁷，摺疊與任何天然蛋白酶都不同（TM-score < 0.50），六個晶體結構與模型相距 1.2 Å 內，且在哺乳動物細胞中有活性。**設計的鋅金屬蛋白酶**：135 個設計中 36% 能在指定的可切割鍵處切斷，最佳設計加速 >10⁸ 倍、再經四個置換後 >10¹⁰ 倍——並能選擇性切割 TDP-43、β 類澱粉蛋白與血清類澱粉蛋白 A。'
              }, {
                en: 'The therapeutic implication is obvious and should be stated carefully: these are designed proteases against aggregation-disease targets, demonstrated in cells. That is a long way from a therapy, and the papers do not claim otherwise.',
                zh: '治療上的含意很明顯，但必須謹慎陳述：這些是針對聚集性疾病標的的設計蛋白酶，在細胞層級得到示範。距離一個療法還很遠，而論文本身也沒有宣稱別的。'
              }]
            },
            {
              chips: [{ t: { en: 'Sep 2026', zh: '2026 年 9 月' }, k: 'v' }, { t: { en: 'dynamics', zh: '動力學' }, k: 'b' }],
              h: { en: 'Conformational transitions became tractable', zh: '構型轉換變得可處理' },
              p: {
                en: 'Gen-COMPAS (*Nature*) recovers committors, transition states and free-energy landscapes from **end-point structures alone**, with no predefined collective variables, on systems up to a pentameric ligand-gated ion channel. This is the axis that the static-structure era could not touch at all: not "what shape is it", but "how does it get from this shape to that one, and what sits at the top of the barrier". VibeGen (*Matter*, March) approached the same territory from the opposite end, designing proteins to match a target **pattern of motion** rather than a shape — though its validation at publication was simulation-only.',
                zh: 'Gen-COMPAS（*Nature*）能**僅從端點結構**還原承諾函數（committor）、過渡態與自由能地景，不需預先定義集體變數，並可處理到五聚體配體閘控離子通道這種規模。這正是靜態結構時代完全碰不到的一軸：問的不是「它是什麼形狀」，而是「它如何從這個形狀走到那個形狀，以及能量障壁頂端坐著什麼」。VibeGen（*Matter*，三月）從另一端切入同一片領域，設計蛋白去匹配目標的**運動模式**而非形狀——不過它在發表時的驗證只有模擬。'
              }
            },
            {
              chips: [{ t: { en: 'Jul 2026', zh: '2026 年 7 月' }, k: 'g' }, { t: { en: 'in vivo', zh: '活體' }, k: 'b' }],
              h: { en: 'AI-designed gene editors work in three kingdoms', zh: 'AI 設計的基因編輯器在三個界都能運作' },
              p: {
                en: 'SynTnpBs (*Science*) used inverse folding plus evolution-informed residue constraints to generate divergent TnpB variants that **retained or exceeded wild-type editing activity in bacterial, plant and human cells**, with cryo-EM of the lead variant. In the same month WRAPs (*Science*) — water-soluble RFdiffused amphipathic proteins — made native membrane proteins thermostable and detergent-free while preserving sequence, fold and active site, with a 2.95 Å cryo-EM structure. Membrane proteins and gene editors had both been on everyone\'s "not yet" list.',
                zh: 'SynTnpB（*Science*）以反向摺疊加上演化資訊的殘基約束，生成高度分化的 TnpB 變體，這些變體**在細菌、植物與人類細胞中保有或超越野生型的編輯活性**，並有主要變體的冷凍電顯結構。同一個月，WRAPs（*Science*）——水溶性的 RFdiffusion 兩親性蛋白——讓天然膜蛋白變得熱穩定且不需去垢劑，同時保留序列、摺疊與活性位，並有一個 2.95 Å 的冷凍電顯結構。膜蛋白與基因編輯器原本都在所有人的「還沒辦法」清單上。'
              }
            }
          ], 'g3') +
          h.h3({ en: 'The system, quantified', zh: '把這套系統量化' }) +
          h.p({
            en: 'Three numbers describe how design economics changed during 2026, and they point in the same direction: **generating candidates became almost free, and testing them became the entire cost structure.**',
            zh: '有三個數字描述了 2026 年設計經濟學的改變，而它們指向同一個方向：**生成候選幾乎變成免費，而測試候選成為成本結構的全部。**'
          }) +
          h.fig({
            kind: 'cols', tag: { en: 'throughput', zh: '產能' },
            title: { en: 'Passing designs per GPU-hour, matched criteria over 24 protein targets', zh: '每 GPU 小時的通過設計數（24 個蛋白標的、相同判準）' },
            sub: {
              en: 'The two systems were evaluated on the same 24 targets with the same acceptance criteria, which is what makes this comparison meaningful — most throughput claims in this field are not matched.',
              zh: '兩套系統是在相同的 24 個標的、相同的通過判準下評估的，這才使這個比較有意義——這個領域大多數的產能宣稱都不是對等比較的。'
            },
            opts: { labelAll: true, height: 230, unit: { en: 'designs / GPU-hour', zh: '設計數／GPU 小時' } },
            data: {
              cats: [{ en: 'Proteina-Complexa\n(Mar 2026)', zh: 'Proteina-Complexa\n（2026 年 3 月）' }, { en: 'RFD4-Proteina\n(Oct 2026)', zh: 'RFD4-Proteina\n（2026 年 10 月）' }],
              series: [{ name: { en: 'Structurally distinct passing designs per GPU-hour', zh: '每 GPU 小時結構上相異的通過設計數' }, slot: 1, v: [13.24, 76.4] }]
            },
            caption: {
              en: 'Reported in the RFD4-Proteina release materials (IPD/Baker Lab × NVIDIA, 21 October 2026). RFD4-Proteina is a 0.4-billion-parameter flow-matching co-design model under a BSD-3-Clause licence covering weights. The IPD separately reports 5–10× overall design-rate gains and early users describing timelines moving "from months to days".',
              zh: '數據出自 RFD4-Proteina 的釋出資料（IPD/Baker 實驗室 × NVIDIA，2026 年 10 月 21 日）。RFD4-Proteina 是一個 4 億參數的流匹配共設計模型，以 BSD-3-Clause 授權（含權重）。IPD 另外報告整體設計速率提升 5–10 倍，早期使用者描述時程「從數月變成數天」。'
            }
          }) +
          h.fig({
            kind: 'segbar', tag: { en: 'cost', zh: '成本' },
            title: { en: 'Where the money goes in a 2026 design campaign', zh: '2026 年一場設計活動的錢花在哪裡' },
            sub: {
              en: 'Synthetic DNA is at least 80% of the total characterisation cost. Compute — the thing everyone worries about — is the small slice.',
              zh: '合成 DNA 至少佔表徵總成本的 80%。大家最擔心的運算，反而是那一小塊。'
            },
            opts: { showAmount: false, unit: '%' },
            data: [
              { label: { en: 'Synthetic DNA', zh: '合成 DNA' }, v: 80, slot: 1 },
              { label: { en: 'Expression, purification, assays', zh: '表達、純化、檢測' }, v: 14, slot: 3 },
              { label: { en: 'Compute (generation + filtering)', zh: '運算（生成＋篩選）' }, v: 6, slot: 4 }
            ],
            caption: {
              en: 'Proportions after the SAPP platform paper (*Nature Communications*, Nov 2026), which reports synthetic DNA at ≥80% of total cost; the remaining split is indicative. For scale: one complete agentic binder campaign in 2026 used about 144 H100 GPU-hours (roughly $150 of compute), while outsourced experimental testing runs about $150–250 **per design**.',
              zh: '比例依 SAPP 平台論文（*Nature Communications*，2026 年 11 月），該文報告合成 DNA 佔總成本 ≥80%；其餘切分為示意。尺度參考：2026 年一場完整的代理式結合蛋白活動約使用 144 個 H100 GPU 小時（運算成本約 150 美元），而委外實驗測試則是**每個設計**約 150–250 美元。'
            }
          }) +
          h.fig({
            kind: 'funnel', tag: { en: 'autonomy', zh: '自主性' },
            title: { en: 'One autonomous campaign, end to end', zh: '一場自主設計活動的全程' },
            sub: {
              en: 'An LLM agent ran complete design campaigns from a single prompt in 24–48 hours, across 16 attempted targets. This is the funnel for the whole set.',
              zh: '一個大型語言模型代理人從單一提示出發，在 24–48 小時內跑完整場設計活動，共嘗試 16 個標的。這是整組的漏斗。'
            },
            opts: { log: false },
            data: [
              { label: { en: 'Designs generated', zh: '生成的設計' }, v: 1440 },
              { label: { en: 'Designs experimentally tested', zh: '實際實驗測試的設計' }, v: 1320 },
              { label: { en: 'Designs that bound', zh: '有結合的設計' }, v: 354, note: { en: '26.8%', zh: '26.8%' } },
              { label: { en: 'Below 100 nM', zh: '優於 100 nM' }, v: 194 },
              { label: { en: 'Below 10 nM', zh: '優於 10 nM' }, v: 90 },
              { label: { en: 'Below 1 nM', zh: '優於 1 nM' }, v: 42 }
            ],
            caption: {
              en: 'Reported August 2026: 16 targets attempted, 15 interpretable, binders obtained for 14. On a head-to-head plate against a human design competition for the same target, the agent produced 28 binders from 90 designs where human entrants produced 9 from 245, with a best affinity of 3.9 nM against the best human entry\'s 45 nM. **Caveat:** this is a developer-reported result on self-chosen targets, which is the configuration this chapter\'s audit section tells you to discount.',
              zh: '2026 年八月報告：嘗試 16 個標的，15 個可解讀，14 個取得結合蛋白。在與人類設計競賽同標的的同盤對照中，代理人從 90 個設計得到 28 個結合蛋白，人類參賽者從 245 個設計得到 9 個；最佳親和力 3.9 nM，人類最佳為 45 nM。**提醒：** 這是開發者在自選標的上的自我報告結果，而這正是本章「稽核」一節要你打折的那種配置。'
            }
          }) +
          h.bio('loop', {
            title: { en: 'The design→test loop in 2026, and where the time actually goes', zh: '2026 年的設計→測試循環，以及時間實際花在哪裡' },
            sub: {
              en: 'Steps 2–4 now take hours. Steps 5–6 still take days to weeks even on the fastest published platform. That asymmetry is the whole story of the year.',
              zh: '步驟 2–4 現在只需數小時。即使在已發表的最快平台上，步驟 5–6 仍需數天到數週。這個不對稱就是這一年的全部故事。'
            },
            caption: {
              en: 'The fastest reported end-to-end loop in 2026 is about 48 hours from DNA to characterised protein for hundreds of designs, with roughly 6 hours of hands-on bench time. Most laboratories are not on that platform.',
              zh: '2026 年已報告最快的端到端循環，約為 48 小時內把數百個設計從 DNA 做到已表徵蛋白，其中約 6 小時是實際動手時間。大多數實驗室並不在那個平台上。'
            }
          }) +
          h.h3({ en: 'The audit: four results that changed what a number means', zh: '稽核：四項成果改變了「一個數字」的含意' }, 'y26-audit') +
          h.p({
            en: 'This is the part of 2026 that will matter longest, and it is the part the press coverage missed. Four independent efforts measured the field\'s own instruments and found them weaker than everyone had assumed. None of these results says protein design does not work. All of them say the **numbers** protein design reports are softer than they look.',
            zh: '這是 2026 年影響最久的部分，也是媒體報導漏掉的部分。四項獨立研究量測了這個領域自己的儀器，發現它們比所有人以為的都更脆弱。這些成果沒有一項是在說蛋白質設計不管用。它們全都是在說：蛋白質設計所報告的**數字**，比看起來更軟。'
          }) +
          h.tbl({
            min: 880,
            cols: [
              { t: { en: 'Study', zh: '研究' }, w: '17%' },
              { t: { en: 'What it tested', zh: '測了什麼' }, w: '27%' },
              { t: { en: 'What it found', zh: '發現了什麼' } },
              { t: { en: 'So what', zh: '所以呢' }, w: '22%' }
            ],
            rows: [
              [{ en: '**AIntibody**\n*Nat Biotechnol*, Aug 2026', zh: '**AIntibody**\n*Nat Biotechnol*，2026 年 8 月' }, { en: 'The field\'s first **blinded, prospective, multi-organisation** antibody-design benchmark: 511 AI-designed or AI-predicted antibodies from 29 organisations, three tasks', zh: '本領域第一個**盲測、前瞻、多機構**的抗體設計基準：來自 29 個機構的 511 個 AI 設計或 AI 預測抗體，三項任務' }, { en: 'Several groups produced developable antibodies below 100 pM — but those "successes were exceptions that did not transfer across tasks". Crucially, **affinity ranking within sequence clusters was worse than random clone picking** for every model but one.', zh: '有幾個團隊做出低於 100 pM 的可開發抗體——但那些「成功是例外，無法跨任務轉移」。關鍵在於：除一個模型外，所有模型在序列叢集內的**親和力排序比隨機挑選菌落還差**。' }, { en: 'The most important paper of the year. It is what a CASP for design would look like, and it says ranking — not generation — is the unsolved part.', zh: '這一年最重要的論文。它展示了「設計領域的 CASP」會是什麼樣子，而它說：未解的是排序，不是生成。' }],
              [{ en: '**Runs N\' Poses**\n*Nat Struct Mol Biol*, 2026', zh: '**Runs N\' Poses**\n*Nat Struct Mol Biol*，2026' }, { en: '2,600 protein–ligand systems released **after** the models\' training cutoffs, run through the co-folding models everyone now uses for ligand work', zh: '2,600 個在模型訓練截止**之後**才釋出的蛋白—配體系統，交給大家現在用於配體工作的共摺疊模型' }, { en: 'The models "largely **memorize** ligand poses from their training data".', zh: '這些模型「大致上是**背下**訓練資料中的配體姿態」。' }, { en: 'Co-folding models are not de novo ligand design tools, whatever a tutorial says. Check whether your system resembles something in the PDB before you trust a pose.', zh: '不論教學文件怎麼寫，共摺疊模型不是從頭配體設計工具。在你相信一個姿態之前，先確認你的系統是否像 PDB 裡的某個東西。' }],
              [{ en: '**Nanobody shuffling study**\npreprint + ICLR 2026', zh: '**奈米抗體洗牌研究**\n預印本 + ICLR 2026' }, { en: '106 genuine nanobody–antigen complexes against **11,342 shuffled non-cognate pairs**, scored by AlphaFold3, Boltz-2 and Chai-1', zh: '106 個真實的奈米抗體—抗原複合體，對比 **11,342 個洗牌後的非同源配對**，由 AlphaFold3、Boltz-2 與 Chai-1 評分' }, { en: 'Confidence and accuracy scores are **non-discriminative for binding specificity** — they cannot tell a real pair from a shuffled one. Worse, perturbing AlphaFold3 embeddings during inference-time optimisation **artificially inflates ipTM**, so the metric is gameable.', zh: '信賴度與準確度分數對**結合專一性沒有鑑別力**——它們分不出真實配對與洗牌配對。更糟的是，在推論期最佳化中擾動 AlphaFold3 的嵌入會**人為拉高 ipTM**，也就是說這個指標可以被鑽。' }, { en: 'This is the single most useful negative result for anyone filtering designs. If you rank on ipTM, you are ranking on something that cannot see specificity.', zh: '對任何在篩選設計的人來說，這是最有用的一個負面結果。如果你用 ipTM 排序，你排的是一個看不到專一性的量。' }],
              [{ en: '**Refolding-pipeline critique**\n*Protein Science*, 2026', zh: '**重摺疊流程批判**\n*Protein Science*，2026' }, { en: 'The standard self-consistency pre-screen — design a sequence, refold it, measure RMSD back — tested against real experimental outcomes on 614 curated de novo designs from 11 studies', zh: '標準的自洽預篩——設計序列、重新摺疊、量測回到原結構的 RMSD——以 11 項研究中 614 個經整理的從頭設計的真實實驗結果來檢驗' }, { en: 'Confidence-metric ROC AUC of only **0.60–0.72**; combining all metrics gave **no improvement**; "many failed designs scored better on confidence metrics than successful ones"; and there is **no generalisable pLDDT threshold across topologies**. AlphaFold2 in single-sequence mode also fails on many *natural* sequences.', zh: '信賴度指標的 ROC AUC 只有 **0.60–0.72**；把所有指標合併**沒有改善**；「許多失敗的設計在信賴度指標上的分數比成功的更高」；而且**不存在跨拓樸通用的 pLDDT 門檻**。單序列模式的 AlphaFold2 在許多*天然*序列上也會失敗。' }, { en: 'The field\'s core filter is unvalidated. 43% of those 614 designs succeeded — a useful base rate to compare any claim against.', zh: '這個領域的核心篩選器是未經驗證的。那 614 個設計中有 43% 成功——這是一個拿來對照任何宣稱的有用基準率。' }]
            ],
            source: { en: 'Full citations on the References tab. The 614-design dataset is open and is one of the best things a small team can reanalyse — see the GEMS Pathways chapter.', zh: '完整出處見「參考資料」頁。那組 614 個設計的資料集是公開的，也是小團隊最值得重新分析的素材之一——見「GEMS 路徑」一章。' }
          }) +
          h.take({ en: 'The honest framing of 2026', zh: '2026 年誠實的框架' }, {
            en: 'The defensible summary is not "design got better". It is that **design got audited** — and both halves are true at once. Real capability rose sharply: 86 of 127 targets with binders, 36% hit rates on amide-bond chemistry, 48-hour loops, $5 per construct. And simultaneously four independent efforts established that the standard success metrics are weaker than assumed. Almost every headline hit rate in this field is self-reported by the method\'s developer, on targets they chose, from designs they pre-filtered, scored by metrics whose wet-lab correlation measures around 0.6–0.76 AUC. Read every number in the next chapter as an **upper bound**.',
            zh: '站得住腳的總結不是「設計變好了」，而是**設計被稽核了**——而且兩半同時為真。真實能力大幅上升：127 個標的中 86 個取得結合蛋白、醯胺鍵化學的命中率 36%、48 小時循環、每個構築體 5 美元。而同時，四項獨立研究確立了標準成功指標比想像中脆弱。這個領域幾乎每一個招牌命中率，都是方法開發者在自選標的上、用自己預篩過的設計、以實驗相關性約為 0.6–0.76 AUC 的指標評分後的自我報告。請把下一章的每個數字都讀成**上界**。'
          })
      });

      /* ---------------- 2026 timeline ---------------- */
      out += h.sec({
        id: 'y26-tl',
        kick: { en: '2026 in order', zh: '2026 依序' },
        h2: { en: 'Month by month, January to November 2026', zh: '2026 年一月到十一月，逐月' },
        lede: {
          en: 'Evidence level is marked on every entry: peer-reviewed, preprint, company claim, or press. The distinction matters more in this year than in any previous one, because several of the loudest claims of 2026 have no public data behind them.',
          zh: '每一條都標註了證據等級：同儕審查、預印本、公司宣稱，或媒體。這個區別在 2026 年比以往任何一年都更重要，因為 2026 年幾個最響亮的宣稱背後並沒有公開資料。'
        },
        body: h.timeline([{
          h: { en: 'January – April', zh: '一月至四月' },
          range: '2026',
          items: [
            { y: 'Feb 2', t: { en: 'First vaccine against the SARS virus family enters human trials', zh: '首支針對 SARS 病毒家族的疫苗進入人體試驗' }, d: { en: 'GBP511, a computationally designed self-assembling nanoparticle derived from Institute for Protein Design work, began Phase I/II with SK Bioscience across two Australian sites in roughly 368 adults. The designed-nanoparticle platform from 2016 reaching a new indication a decade later. *(press)*', zh: 'GBP511，一個源自蛋白質設計研究所成果的計算設計自組裝奈米顆粒，與 SK Bioscience 在澳洲兩地對約 368 位成人展開第一／二期試驗。2016 年的設計奈米顆粒平台，十年後抵達一個新適應症。*（媒體）*' } },
            { y: 'Feb 10', hi: 1, t: { en: 'Isomorphic Labs releases IsoDDE as a report, not a model', zh: 'Isomorphic Labs 以報告形式發布 IsoDDE，而不是模型' }, d: { en: 'A 27-page technical report on a proprietary drug-discovery engine — structure prediction, ligand binding, affinity prediction and antibody interaction modelling — claiming to beat Boltz-2 and physics-based methods on affinity. **No weights, no code, no recipe.** A *Nature* news piece ran the headline "\'An AlphaFold 4\'" in quotation marks; reviewers quoted in it noted the paper "offers scant insight into how to achieve similar results". *(company claim)*', zh: '一份 27 頁的技術報告，描述一個專有的藥物發現引擎——結構預測、配體結合、親和力預測與抗體交互作用建模——並宣稱在親和力上勝過 Boltz-2 與物理方法。**沒有權重、沒有程式碼、沒有方法細節。** *Nature* 的新聞以加引號的「『一個 AlphaFold 4』」為標題；文中被引述的審閱者指出該報告「對如何達成類似結果幾乎沒有提供洞見」。*（公司宣稱）*' } },
            { y: 'Feb 17', t: { en: 'Zero-shot models cannot predict epistasis', zh: '零樣本模型無法預測上位效應' }, d: { en: '95 zero-shot models tested on multi-mutant variants from 53 ProteinGym deep-mutational-scanning datasets. For single mutations they work, partly. For the **multi-mutant combinations that designed proteins actually are**, they do not. *(preprint)*', zh: '以 53 個 ProteinGym 深度突變掃描資料集中的多重突變體，測試 95 個零樣本模型。對單一突變，它們部分有效。對**設計蛋白實際上就是的那種多重突變組合**，則無效。*（預印本）*' } },
            { y: 'Mar 2', hi: 1, t: { en: 'Confidence scores cannot see binding specificity', zh: '信賴度分數看不到結合專一性' }, d: { en: '106 nanobody–antigen complexes against 11,342 shuffled pairs: AlphaFold3, Boltz-2 and Chai-1 scores are non-discriminative, and ipTM can be artificially inflated by perturbing embeddings during inference-time optimisation. The authors tie this directly to false discovery in binder engineering. *(preprint / ICLR 2026)*', zh: '106 個奈米抗體—抗原複合體對比 11,342 個洗牌配對：AlphaFold3、Boltz-2 與 Chai-1 的分數沒有鑑別力，而且在推論期最佳化中擾動嵌入可人為拉高 ipTM。作者直接把這點連結到結合蛋白工程中的偽發現。*（預印本／ICLR 2026）*' } },
            { y: 'Mar 16', hi: 1, t: { en: 'The largest validated binder campaign: 86 of 127 targets', zh: '最大規模已驗證的結合蛋白活動：127 個標的中 86 個' }, d: { en: 'NVIDIA\'s Proteina-Complexa — reward-guided inference-time search in a continuous latent space with partially latent flow matching and full-atom output — was run with Manifold Bio on **more than 1,000,000 designs against 127 targets**, obtaining binders for **86 (68%)**. An order of magnitude more targets than any prior campaign, and the generalisation evidence binder design needed. *(preprint + release)*', zh: 'NVIDIA 的 Proteina-Complexa——在連續潛在空間中以獎勵引導的推論期搜尋、部分潛在流匹配、全原子輸出——與 Manifold Bio 合作，對 **127 個標的執行超過 1,000,000 個設計**，在 **86 個（68%）** 標的上取得結合蛋白。標的數比任何先前活動多一個數量級，也是結合蛋白設計所需要的泛化證據。*（預印本＋釋出）*' } },
            { y: 'Mar', t: { en: 'AlphaFold DB adds protein complexes', zh: 'AlphaFold 資料庫加入蛋白複合體' }, d: { en: 'EMBL-EBI with DeepMind, NVIDIA and Seoul National University released millions of predicted **complex** structures openly. Also the month the PDB passed 250,000 experimental entries. *(press)*', zh: 'EMBL-EBI 與 DeepMind、NVIDIA、首爾大學合作，公開釋出數百萬個預測的**複合體**結構。PDB 也在這個月跨過 250,000 筆實驗條目。*（媒體）*' } },
            { y: 'Apr', hi: 1, t: { en: 'The Baker lab states what is solved and what is not', zh: 'Baker 實驗室明說什麼已解、什麼未解' }, d: { en: 'A *Nature* review, "The past, present and future of de novo protein design", frames it bluntly: the long-standing challenges of designing new protein structures, assemblies and binders are **close to being solved**, and the key questions in those areas "are not *how* to design, but *what* to design." The named frontier: catalysts for reactions with high energy barriers, and switches and nanomachines that integrate binding, conformational change and catalysis. *(peer-reviewed)*', zh: '一篇 *Nature* 綜述〈從頭蛋白質設計的過去、現在與未來〉把話說得很直白：設計新蛋白結構、組裝體與結合蛋白這些長期挑戰已**接近解決**，而這些領域的關鍵問題「不是*如何*設計，而是*設計什麼*」。被點名的前沿是：高能障反應的催化劑，以及整合結合、構型變化與催化的開關與奈米機器。*（同儕審查）*' } },
            { y: 'Apr 8–11', t: { en: 'Protenix-v2: five seeds beat a thousand', zh: 'Protenix-v2：五個種子勝過一千個' }, d: { en: 'ByteDance Seed\'s 464-million-parameter open model gained 9–13 percentage points over v1 on antibody–antigen DockQ across three benchmarks — and **v2 with 5 seeds outperformed v1 with 1,000 seeds**. That is the useful kind of progress: not a bigger number, a cheaper one. *(preprint + open release)*', zh: '字節跳動 Seed 的 4.64 億參數開源模型，在三個基準的抗體—抗原 DockQ 上比 v1 提升 9–13 個百分點——而且 **v2 用 5 個種子就勝過 v1 用 1,000 個種子**。這才是有用的那種進展：不是更大的數字，而是更便宜的數字。*（預印本＋開源釋出）*' } },
            { y: 'Apr', t: { en: 'CASP17 opens', zh: 'CASP17 開跑' }, d: { en: 'Registration 31 March, dry run 13 April, first targets released late April. The new categories are exactly the axes 2026\'s benchmarks found weakest: **Immune Complexes, Conformational Ensembles, Organic Ligand–Protein Complexes, and self-assessment of accuracy.** *(official)*', zh: '3 月 31 日報名、4 月 13 日試跑、4 月下旬釋出首批標的。新增的類別恰好就是 2026 年基準測試發現最弱的那幾軸：**免疫複合體、構型集合、有機配體—蛋白複合體，以及準確度自評。***（官方）*' } }
          ]
        }, {
          h: { en: 'May – August', zh: '五月至八月' },
          range: '2026',
          items: [
            { y: 'May', t: { en: 'Quasisymmetric cages break the symmetry constraint', zh: '準對稱奈米籠打破對稱性限制' }, d: { en: 'Two back-to-back *Nature* papers (Baker lab with POSTECH and NYU Langone) designed one-component and two-component **quasisymmetric** protein nanocages — structures that do not obey a single point group, reaching up to roughly 220 nm from 180 to 2,160 subunits. The constraint that every designed cage had to be a perfect polyhedron is gone. *(peer-reviewed)*', zh: '兩篇背靠背的 *Nature* 論文（Baker 實驗室與 POSTECH、紐約大學朗格尼）設計了單組分與雙組分的**準對稱**蛋白奈米籠——不遵守單一點群的結構，由 180 到 2,160 個次單元組成，最大可達約 220 nm。「每個設計的籠都必須是完美多面體」這個限制消失了。*（同儕審查）*' } },
            { y: 'May–Jun', t: { en: 'The ESM stack goes open', zh: 'ESM 堆疊開源' }, d: { en: 'Biohub released ESMC (trained on about 2.8 billion sequences), **ESMFold2** (MSA-free, with inference-time scaling) and an ESM Atlas of 6.8 billion sequences and 1.1 billion predicted structures. Mini-binder hit rates of 36–88% across five targets were reported with it. *(open release)*', zh: 'Biohub 釋出了 ESMC（以約 28 億條序列訓練）、**ESMFold2**（免 MSA，具推論期擴展）以及一個含 68 億條序列、11 億個預測結構的 ESM 圖譜。隨之報告的迷你結合蛋白命中率為五個標的 36–88%。*（開源釋出）*' } },
            { y: 'Jun', t: { en: 'Germinal: antibodies against all four targets, from 43–101 designs', zh: 'Germinal：四個標的全中，每個抗原只測 43–101 個設計' }, d: { en: 'Epitope-targeted antibody design in *Nature Biotechnology*, producing functional antibodies against **all four** targets and binder formats while testing only **43–101 designs per antigen**, at nanomolar affinities, with open-source code. Compare the 2025 figure of thousands of designs for 0–2%. *(peer-reviewed)*', zh: '《自然生物技術》上的抗原決定位導向抗體設計，對**全部四個**標的與結合蛋白格式都做出有功能的抗體，每個抗原只測 **43–101 個設計**，親和力達奈莫耳級，程式碼開源。對照 2025 年「數千個設計換 0–2%」的數字。*（同儕審查）*' } },
            { y: 'Jul 4–7', hi: 1, t: { en: 'OpenDDE: the open answer to IsoDDE, five months later', zh: 'OpenDDE：對 IsoDDE 的開源回應，五個月後' }, d: { en: 'An all-atom co-folding engine, **655 million trainable parameters, about 414,000 GPU-hours of training, Apache-2.0**, weights on Hugging Face with general and antibody–antigen checkpoints, explicitly targeting "IsoDDE-level accuracy within a reproducible and openly accessible" framework. In November it took the **highest median DockQ** on a standardised 200-complex antibody–antigen benchmark. The six-month half-life, again. *(preprint + open release)*', zh: '一個全原子共摺疊引擎，**6.55 億可訓練參數、約 414,000 GPU 小時訓練、Apache-2.0 授權**，權重放在 Hugging Face，提供通用與抗體—抗原兩種檢查點，明確以「在可重現、可公開取得的框架內達到 IsoDDE 等級的準確度」為目標。到十一月，它在標準化的 200 個複合體抗體—抗原基準上拿下**最高的 DockQ 中位數**。六個月半衰期，再一次。*（預印本＋開源釋出）*' } },
            { y: 'Jul', hi: 1, t: { en: 'Gene editors, membrane proteins and a walking motor', zh: '基因編輯器、膜蛋白，以及一個會走路的馬達' }, d: { en: '**SynTnpBs** (*Science*): AI-generated RNA-guided nucleases retaining or exceeding wild-type activity in bacterial, plant and human cells. **WRAPs** (*Science*): de novo amphipathic proteins making native membrane proteins water-soluble and detergent-free, with a 2.95 Å cryo-EM structure. **Tumbleweed** (*Nature Nanotechnology*): the first synthetic protein motor to walk directionally along a DNA track in programmable 16 nm steps, assembled from modules with no intrinsic motor function. *(all peer-reviewed)*', zh: '**SynTnpB**（*Science*）：AI 生成的 RNA 引導核酸酶，在細菌、植物與人類細胞中保有或超越野生型活性。**WRAPs**（*Science*）：從頭設計的兩親性蛋白，讓天然膜蛋白變成水溶且不需去垢劑，附 2.95 Å 冷凍電顯結構。**Tumbleweed**（*Nature Nanotechnology*）：第一個能沿 DNA 軌道以可編程 16 nm 步幅定向行走的合成蛋白馬達，由本身沒有馬達功能的模組組裝而成。*（皆為同儕審查）*' } },
            { y: 'Aug', hi: 1, t: { en: 'Small-molecule binder design, essentially solved for its test cases', zh: '小分子結合蛋白設計，在其測試案例上基本被解決' }, d: { en: 'NISE/LASErMPNN in *Nature*: drug-binding proteins designed from scratch with **100% success for exatecan and 83% for apixaban**, tightest binders nanomolar to picomolar, beating the previous leading method by **70× and roughly 10,000×** respectively. For context, the 2020 state of the art on apixaban was 2 binders from 6 designs at low-to-sub-micromolar. *(peer-reviewed)*', zh: '《自然》上的 NISE/LASErMPNN：從零設計藥物結合蛋白，**exatecan 成功率 100%、apixaban 83%**，最緊的結合蛋白達奈莫耳至皮莫耳級，分別勝過前一代最佳方法 **70 倍與約 10,000 倍**。作為對照，2020 年 apixaban 的技術水準是 6 個設計中 2 個結合、低至次微莫耳級。*（同儕審查）*' } },
            { y: 'Aug', hi: 1, t: { en: 'AIntibody — the field\'s first blinded prospective benchmark', zh: 'AIntibody——本領域第一個盲測前瞻基準' }, d: { en: '511 antibodies from 29 organisations across three tasks. Some below 100 pM, but the successes "did not transfer across tasks", and affinity ranking within sequence clusters was **worse than random clone picking** for every model but one. The most important paper of 2026. *(peer-reviewed)*', zh: '來自 29 個機構、跨三項任務的 511 個抗體。有些低於 100 pM，但那些成功「無法跨任務轉移」，而除一個模型外，所有模型在序列叢集內的親和力排序**比隨機挑菌落還差**。2026 年最重要的論文。*（同儕審查）*' } },
            { y: 'Aug', t: { en: 'Generative design of complete bacteriophage genomes', zh: '完整噬菌體基因體的生成式設計' }, d: { en: '*Science*: genome language models designed complete phage genomes on a ΦX174 template, yielding **16 viable phages**, with cryo-EM confirming an evolutionarily distant DNA-packaging protein inside a capsid, and a generated cocktail overcoming resistance to the wild-type phage. Note what this is and is not: a generative model writing a whole functional genome, in the same year as the policy changes below. *(peer-reviewed)*', zh: '《科學》：基因體語言模型以 ΦX174 為模板設計出完整的噬菌體基因體，得到 **16 個可存活的噬菌體**，冷凍電顯確認了外殼內一個演化上相距甚遠的 DNA 包裝蛋白，而生成的噬菌體組合能克服對野生型噬菌體的抗性。請留意它是什麼、不是什麼：一個生成模型寫出完整可運作的基因體——而這與下面的政策變動發生在同一年。*（同儕審查）*' } },
            { y: 'Aug 18', t: { en: 'A language-model agent runs complete design campaigns', zh: '語言模型代理人跑完整場設計活動' }, d: { en: '16 targets attempted from single prompts, 15 interpretable, binders for 14; 1,440 designs generated, 1,320 tested, **354 bound (26.8%)**, 42 below 1 nM, six designs below a 100 pM assay floor. In a head-to-head against a human design competition, 28 binders from 90 designs versus 9 from 245. *(company report)*', zh: '以單一提示嘗試 16 個標的，15 個可解讀，14 個取得結合蛋白；生成 1,440 個設計、測試 1,320 個，**354 個結合（26.8%）**，42 個低於 1 nM，六個設計低於 100 pM 的檢測下限。在與人類設計競賽的對照中，90 個設計得 28 個結合蛋白，人類是 245 個設計得 9 個。*（公司報告）*' } }
          ]
        }, {
          h: { en: 'September – November', zh: '九月至十一月' },
          range: '2026',
          items: [
            { y: 'Sep 3', t: { en: 'AI BioDesign launches with about $95M', zh: 'AI BioDesign 以約 9,500 萬美元成立' }, d: { en: 'A University of Washington, Allen Institute and Fred Hutch coalition led by David Baker and Jay Shendure, funded over five years, with the stated goal of codifying nature\'s design rules as **open** models, datasets, assays and tools. Note the pattern across 2026 public funding: three of four major awards fund wet-lab capacity or enzymes, not models. The funders reached the same conclusion as the bottleneck analysis. *(press)*', zh: '由 David Baker 與 Jay Shendure 領導的華盛頓大學、艾倫研究所與 Fred Hutch 聯盟，為期五年，目標明確是把自然界的設計規則編纂為**開放的**模型、資料集、檢測與工具。注意 2026 年公共資金的模式：四項主要補助中有三項投向濕實驗產能或酵素，而不是模型。資助方得到了與瓶頸分析相同的結論。*（媒體）*' } },
            { y: 'Sep', hi: 1, t: { en: 'Gen-COMPAS: transitions, not just end points', zh: 'Gen-COMPAS：轉換過程，不只是端點' }, d: { en: '*Nature*: committor-guided generative path sampling recovers committors, transition states and free-energy landscapes **from end-point structures alone, without predefined collective variables**, up to a pentameric ligand-gated ion channel. The axis the static-structure era could not reach at all. *(peer-reviewed)*', zh: '《自然》：以承諾函數引導的生成式路徑取樣，能**僅從端點結構、且不需預先定義集體變數**，還原承諾函數、過渡態與自由能地景，規模可達五聚體配體閘控離子通道。這是靜態結構時代完全碰不到的一軸。*（同儕審查）*' } },
            { y: 'Sep', t: { en: 'Raygun, and AI-improved starting points for evolution', zh: 'Raygun，以及為演化準備的 AI 改良起點' }, d: { en: '**Raygun** (*Nature*) shrinks proteins by 10–25% and sometimes more than 50%, producing fluorescent proteins shorter than 96% of entries in FPbase and EGF variants with higher receptor affinity than wild type. Separately, *Nature* reported that **ProteinMPNN-redesigned starting points evolve better than wild type** — more mutationally robust, with side-by-side continuous-evolution campaigns giving consistently higher activity and more than 79-fold greater selected specificity in one case. Design and evolution are complements, measured. *(peer-reviewed)*', zh: '**Raygun**（*Nature*）能把蛋白縮小 10–25%、有時超過 50%，做出比 FPbase 中 96% 條目更短的螢光蛋白，以及受體親和力高於野生型的 EGF 變體。另外，《自然》報告 **經 ProteinMPNN 重新設計的起點比野生型更會演化**——突變耐受性更強，在並列的連續演化活動中一致給出更高活性，其中一例的選擇專一性高出 79 倍以上。設計與演化是互補的，而且被量測了。*（同儕審查）*' } },
            { y: 'Sep 30', hi: 1, t: { en: 'SynthIDBio: watermarking designed proteins', zh: 'SynthIDBio：為設計蛋白加上水印' }, d: { en: '*Nature*, from Google DeepMind: **function-preserving watermarking** of AI-generated proteins. Watermarked designed binders retained affinity comparable to unwatermarked counterparts, with near-perfect watermark detection. Arriving in the same year as generatively designed phage genomes, this is the first serious technical answer to "how would anyone know?" *(peer-reviewed)*', zh: '《自然》，來自 Google DeepMind：對 AI 生成蛋白的**保留功能式水印**。加了水印的設計結合蛋白，親和力與未加水印者相當，而水印偵測率近乎完美。與生成式設計噬菌體基因體發生在同一年，這是對「到底誰會知道？」這個問題的第一個嚴肅技術答案。*（同儕審查）*' } },
            { y: 'Oct', hi: 1, t: { en: 'Amide-bond hydrolysis designed de novo, twice', zh: '醯胺鍵水解從頭設計成功，兩次' }, d: { en: 'De novo **cysteine proteases** (13 of 69 active, k_cat/k_uncat to 3 × 10⁷, six crystal structures within 1.2 Å, TM-score < 0.50 to anything natural, active in mammalian cells) and designed **zinc metalloproteases** (36% of 135 designs cleaving at the targeted bond, >10⁸-fold acceleration rising to >10¹⁰ after four substitutions, selectively cleaving TDP-43, amyloid-β and serum amyloid A). *(both peer-reviewed, Nature)*', zh: '從頭設計的**半胱胺酸蛋白酶**（69 個中 13 個有活性、k_cat/k_uncat 達 3 × 10⁷、六個晶體結構在 1.2 Å 內、與任何天然蛋白的 TM-score < 0.50、在哺乳動物細胞中有活性），以及設計的**鋅金屬蛋白酶**（135 個設計中 36% 能在指定鍵處切斷、加速 >10⁸ 倍、再經四個置換後 >10¹⁰ 倍，並選擇性切割 TDP-43、β 類澱粉蛋白與血清類澱粉蛋白 A）。*（兩篇皆為同儕審查，Nature）*' } },
            { y: 'Oct 15–21', hi: 1, t: { en: 'RFdiffusion3 in *Science*, then RFD4-Proteina six days later', zh: 'RFdiffusion3 登上《科學》，六天後 RFD4-Proteina 發布' }, d: { en: 'RFD3\'s free-atom diffusion satisfies complex atomic constraints across protein and RNA design, validated on de novo phosphotriesterases and transthyretin binders. Then the IPD and NVIDIA merged the RFdiffusion and Proteina lineages into **RFD4-Proteina** — one 0.4-billion-parameter all-atom flow-matching co-design model covering protein, RNA, DNA, small molecules, glycans, metal ions and modified amino acids, under BSD-3-Clause including weights, reaching **76.40 passing designs per GPU-hour against 13.24** for the next best over 24 matched targets. *(peer-reviewed + open release)*', zh: 'RFD3 的自由原子擴散能在蛋白與 RNA 設計中滿足複雜的原子約束，並以從頭設計的磷酸三酯酶與甲狀腺素運送蛋白結合蛋白驗證。六天後，IPD 與 NVIDIA 把 RFdiffusion 與 Proteina 兩條脈絡併成 **RFD4-Proteina**——一個 4 億參數的全原子流匹配共設計模型，涵蓋蛋白、RNA、DNA、小分子、聚醣、金屬離子與修飾胺基酸，以 BSD-3-Clause 授權（含權重），在 24 個對等標的上達到**每 GPU 小時 76.40 個通過設計，次佳為 13.24**。*（同儕審查＋開源釋出）*' } },
            { y: 'Oct 21', t: { en: 'Pinal: proteins from natural language, with wet-lab validation', zh: 'Pinal：用自然語言做蛋白，並有濕實驗驗證' }, d: { en: '*Nature*, from Westlake University: a 16-billion-parameter model trained on roughly 1.7 billion protein–text pairs, with four wet-lab targets including GFP, a PET hydrolase, an alcohol-processing enzyme and a metabolic-pathway shuttle protein. Natural-language interfaces are real — but read the Bottlenecks chapter on what they do and do not change about hit rates. *(peer-reviewed)*', zh: '《自然》，來自西湖大學：一個 160 億參數的模型，以約 17 億組蛋白—文字配對訓練，並有四個濕實驗標的，包括 GFP、PET 水解酶、一個酒精處理酵素，以及一個代謝途徑穿梭蛋白。自然語言介面是真的——但請讀「瓶頸分析」一章，看它對命中率改變了什麼、沒改變什麼。*（同儕審查）*' } },
            { y: 'Oct 23', t: { en: 'A designed enzyme for a real drug synthesis step', zh: '為真實藥物合成步驟設計的酵素' }, d: { en: 'RFD4-Proteina designed enzymes for the amide-bond-forming step in the synthesis of **lenacapavir**, an HIV-prevention drug. **67 designs tested, 4 clearly active, best enzyme giving 79% conversion** of a bulky chiral amine, selective for the S-enantiomer. Honest comparison: directed evolution already achieves >98% conversion and 99.5% enantiomeric excess on comparable chemistry, and this is a preprint. *(preprint)*', zh: 'RFD4-Proteina 為 HIV 預防藥物 **lenacapavir** 合成中的醯胺鍵形成步驟設計酵素。**測試 67 個設計、4 個明確有活性，最佳酵素對一個龐大的手性胺達 79% 轉換率**，並對 S 構型有選擇性。誠實的對照：在可比化學上，定向演化已能達到 >98% 轉換率與 99.5% 的對掌過量，而這份成果是預印本。*（預印本）*' } },
            { y: '~Nov 5', hi: 1, t: { en: 'The White House replaces synthesis-screening self-attestation', zh: '白宮以查核取代合成篩檢的自我聲明' }, d: { en: 'The National Policy for Nucleic Acid Synthesis Screening replaces the 2024 Framework: NIST to issue screening standards within 90 days, third-party screeners must demonstrate compliance and be NIST-verified, and federally funded laboratories must buy DNA only from listed suppliers. Note the limit: it adds verification *of screeners*, not AI-aware detection. *(official policy)*', zh: '《國家核酸合成篩檢政策》取代 2024 年的框架：NIST 須在 90 天內發布篩檢標準，第三方篩檢者必須證明合規並經 NIST 查核，而聯邦資助的實驗室只能向列名供應商購買 DNA。注意它的限度：它增加的是對*篩檢者*的查核，不是具 AI 意識的偵測能力。*（官方政策）*' } },
            { y: 'Nov', t: { en: 'Consensus beats confidence; and a zero-shot metalloenzyme', zh: '共識勝過信賴度；以及一個零樣本金屬酵素' }, d: { en: 'Pooling 15 structures from five different co-folding predictors reached **58.0% medium-or-better accuracy (DockQ ≥ 0.49) on 103 post-2021 antibody–antigen complexes** — beating 100 seeds of any single model, at lower cost. The practical rule: **ensemble across models, do not stack seeds of one.** Separately, *Science* reported dEVA, a zero-shot de novo bi-zinc metalloenzyme with rate enhancement up to 3 × 10¹³ over the uncatalysed reaction. *(preprint; peer-reviewed)*', zh: '把五個不同共摺疊預測器的 15 個結構匯總，在 **103 個 2021 年後的抗體—抗原複合體上達到 58.0% 的中等或更好準確度（DockQ ≥ 0.49）**——勝過任何單一模型用 100 個種子，而且成本更低。實務規則是：**跨模型做集成，不要堆疊同一個模型的種子。** 另外，《科學》報告了 dEVA，一個零樣本的從頭雙鋅金屬酵素，相對未催化反應的速率提升達 3 × 10¹³。*（預印本；同儕審查）*' } },
            { y: 'Nov 17–19', t: { en: 'Five billion dollars, still preclinical', zh: '五十億美元，仍在臨床前' }, d: { en: 'Isomorphic Labs raised a $5 billion Series C co-led by Greenoaks and Sequoia, with programmes remaining preclinical or IND-enabling and **no human trial disclosed**; two days later Merck entered a strategic collaboration with it on an oncology small-molecule target. Hold this next to February 2026\'s SARS-family vaccine trial, which is a designed *protein* in humans, from an academic institute. *(press)*', zh: 'Isomorphic Labs 完成由 Greenoaks 與 Sequoia 共同領投的 50 億美元 C 輪，各項計畫仍處於臨床前或 IND 準備階段，且**未揭露任何人體試驗**；兩天後默克與其就一個腫瘤小分子標的建立策略合作。請把這件事與 2026 年二月那場 SARS 家族疫苗試驗並列——後者是來自一所學術研究機構、進入人體的設計*蛋白*。*（媒體）*' } },
            { y: 'Nov 29 – Dec 5', hi: 1, t: { en: 'CASP17 results — the most informative event on the near horizon', zh: 'CASP17 結果——近期最具資訊量的事件' }, d: { en: 'Results go live 29–30 November 2026, conference in Rome in early December. More than 100 research centres and tens of thousands of models. **Results are not yet public as of this page\'s date (20 November 2026)**, so any claim about CASP17 outcomes circulating now is unsourced. The new categories — Immune Complexes, Conformational Ensembles, Organic Ligand–Protein Complexes, and self-assessment of accuracy — are precisely the four axes on which 2026\'s independent benchmarks found the largest gaps. *(official)*', zh: '結果於 2026 年 11 月 29–30 日公開，會議於十二月初在羅馬舉行。超過 100 個研究中心、數萬個模型。**截至本頁日期（2026 年 11 月 20 日）結果尚未公開**，因此目前流傳的任何關於 CASP17 結果的說法都沒有來源。新增類別——免疫複合體、構型集合、有機配體—蛋白複合體，以及準確度自評——恰好就是 2026 年獨立基準發現落差最大的那四軸。*（官方）*' } }
          ]
        }])
      });

      return out;
    }
  };
})(window);
