(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.cases = {
    label: { en: '10 Case Studies', zh: '十個案例' },
    title: { en: 'Ten Case Studies', zh: '十個關鍵案例' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 4 · Eleven tools, eleven landmark results', zh: '第四章 · 十一個工具，十一項里程碑成果' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Each tool is remembered for ==one result==. Here are the results, with their real numbers.',
          zh: '每個工具都因==一項成果==而被記住。這裡是那些成果，附上它們真正的數字。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'A tool list tells you what exists. A case study tells you what a tool actually achieved, what it cost, what it did not solve, and whether you could run it yourself. Each case below gives the mechanism in enough detail to be useful, the headline numbers exactly as the paper reported them, the honest caveat, and the licence. Ten cases plus one — the newest, added because it post-dates everything else here.',
          zh: '工具清單告訴你有什麼。案例研究告訴你一個工具實際達成了什麼、代價多少、沒解決什麼，以及你自己能不能跑。下面每個案例都把機制講到足以有用的細節，把招牌數字完全照論文原樣列出，附上誠實的保留，以及授權條款。十個案例加一個——最新的那個，因為它比這裡其他所有案例都晚。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'cs-map', t: { en: 'The funnel map', zh: '漏斗地圖' } },
        { id: 'cs-tbl', t: { en: 'All eleven', zh: '十一個一覽' } },
        { id: 'cs-1', t: { en: '1 Rosetta', zh: '1 Rosetta' } },
        { id: 'cs-2', t: { en: '2 AlphaFold2', zh: '2 AlphaFold2' } },
        { id: 'cs-3', t: { en: '3 ProteinMPNN', zh: '3 ProteinMPNN' } },
        { id: 'cs-4', t: { en: '4 RFdiffusion', zh: '4 RFdiffusion' } },
        { id: 'cs-5', t: { en: '5 ESM3', zh: '5 ESM3' } },
        { id: 'cs-6', t: { en: '6 AlphaFold3', zh: '6 AlphaFold3' } },
        { id: 'cs-7', t: { en: '7 BindCraft', zh: '7 BindCraft' } },
        { id: 'cs-8', t: { en: '8 Serine hydrolases', zh: '8 絲胺酸水解酶' } },
        { id: 'cs-9', t: { en: '9 SKYCovione', zh: '9 SKYCovione' } },
        { id: 'cs-10', t: { en: '10 OpenCRISPR', zh: '10 OpenCRISPR' } },
        { id: 'cs-11', t: { en: '11 RFantibody', zh: '11 RFantibody' } }
      ]);

      /* ---------- the funnel map ---------- */
      out += h.sec({
        id: 'cs-map',
        kick: { en: 'Orientation', zh: '定位' },
        h2: { en: 'The two numbers that define every case', zh: '定義每個案例的兩個數字' },
        lede: {
          en: 'How many designs were tested, and what fraction worked. Plotted together these two numbers separate the eras more cleanly than any date does — and they show why "success rate" is meaningless without its denominator.',
          zh: '測了幾個設計，以及有多少比例成功。把這兩個數字一起畫出來，它們切分時代的效果比任何日期都乾淨——也顯示了為什麼沒有分母的「成功率」毫無意義。'
        },
        body:
          h.fig({
            kind: 'scatter', tag: { en: 'the economics', zh: '經濟學' },
            title: { en: 'Designs tested against success rate, 2008–2026', zh: '測試設計數對成功率，2008–2026' },
            sub: {
              en: 'Both axes logarithmic. Up and to the left is better: fewer designs, higher hit rate. The diagonal sweep from bottom-right to top-left is eighteen years of progress.',
              zh: '兩軸皆為對數。越往左上越好：設計更少、命中率更高。從右下到左上的那道斜向遷移，就是十八年的進展。'
            },
            opts: {
              logx: true, logy: true, height: 330,
              xlabel: { en: 'designs experimentally tested', zh: '實驗測試的設計數' },
              ylabel: { en: 'success rate (%)', zh: '成功率（%）' }
            },
            data: {
              series: [{
                name: { en: 'Published design campaigns', zh: '已發表的設計活動' }, slot: 1,
                pts: [
                  { x: 84, y: 2.4, label: { en: 'Diels-Alderase 2010 (2/84)', zh: 'Diels-Alder 酶 2010（2/84）' }, show: 1 },
                  { x: 72, y: 44, label: { en: 'Retro-aldolase 2008 (32/72)', zh: '逆醛醇酶 2008（32/72）' }, show: 1 },
                  { x: 22660, y: 11.6, label: { en: 'Mini-binders 2017 (2,618/22,660)', zh: '迷你結合蛋白 2017（2,618/22,660）' }, show: 1 },
                  { x: 15000, y: 47, label: { en: 'Miniproteins 2017, final iteration', zh: '迷你蛋白 2017，最後一輪' }, show: 1 },
                  { x: 7648, y: 0.04, label: { en: 'LuxSit 2023, round 1 (3/7,648)', zh: 'LuxSit 2023 第一輪（3/7,648）' }, show: 1 },
                  { x: 95, y: 19, label: { en: 'RFdiffusion binders 2023', zh: 'RFdiffusion 結合蛋白 2023' }, show: 1 },
                  { x: 10, y: 46.3, label: { en: 'BindCraft 2025 (mean of 12)', zh: 'BindCraft 2025（12 標的平均）' }, show: 1 },
                  { x: 9000, y: 1, label: { en: 'De novo antibodies 2025 (0–2%)', zh: '從頭抗體 2025（0–2%）' }, show: 1 },
                  { x: 69, y: 19, label: { en: 'Cysteine proteases 2026', zh: '半胱胺酸蛋白酶 2026' } },
                  { x: 135, y: 36, label: { en: 'Metalloproteases 2026 (36/135)', zh: '金屬蛋白酶 2026（36/135）' }, show: 1 },
                  { x: 1320, y: 26.8, label: { en: 'Autonomous agent 2026 (354/1,320)', zh: '自主代理人 2026（354/1,320）' }, show: 1 }
                ]
              }]
            },
            caption: {
              en: '**Caution on comparing these points.** "Success" means different things across campaigns — soluble expression, correct oligomeric state, target binding, detectable catalysis, genuine turnover. The 2023–2026 points are per-design rates *after* in-silico filtering of a much larger generated pool; the 2008–2017 points are closer to raw. The useful reading is not the absolute heights but the movement left: the number of designs you must order to get one that works has fallen by two to three orders of magnitude.',
              zh: '**比較這些點時請小心。** 「成功」在不同活動中意思不同——可溶表達、正確寡聚態、結合標的、可偵測催化、真正的轉換。2023–2026 的點是對一個大得多的生成池做電腦篩選*之後*的「每設計」比率；2008–2017 的點比較接近原始值。有用的讀法不是絕對高度，而是「向左移動」：要得到一個可用設計所必須訂購的設計數，已經下降了二到三個數量級。'
            }
          })
      });

      /* ---------- summary table ---------- */
      out += h.sec({
        id: 'cs-tbl',
        kick: { en: 'Index', zh: '索引' },
        h2: { en: 'All eleven cases', zh: '十一個案例一覽' },
        body: h.tbl({
          min: 900,
          cols: [
            { t: '#', w: '3%' },
            { t: { en: 'Tool', zh: '工具' }, w: '14%' },
            { t: { en: 'Year', zh: '年份' }, w: '7%' },
            { t: { en: 'The task it defined', zh: '它定義的任務' } },
            { t: { en: 'The number to remember', zh: '該記住的數字' } },
            { t: { en: 'Open?', zh: '開放？' }, w: '11%' }
          ],
          rows: [
            ['1', '**Rosetta**', '2003', { en: 'A protein fold that does not exist in nature', zh: '自然界不存在的蛋白摺疊' }, { en: 'Crystal structure **1.2 Å** from the model (PDB 1QYS)', zh: '晶體結構與模型相距 **1.2 Å**（PDB 1QYS）' }, { en: 'Academic licence', zh: '學術授權' }],
            ['2', '**AlphaFold2**', '2021', { en: 'Structure prediction accurate enough to build on', zh: '準確到可以被拿來用的結構預測' }, { en: 'Median **0.96 Å** backbone RMSD₉₅ at CASP14, against 2.8 Å next best', zh: 'CASP14 主鏈 RMSD₉₅ 中位數 **0.96 Å**，次佳 2.8 Å' }, { en: 'Apache-2.0 + weights', zh: 'Apache-2.0 ＋權重' }],
            ['3', '**ProteinMPNN**', '2022', { en: 'Writing a sequence for any backbone', zh: '為任意主鏈寫出序列' }, { en: '**0% → 27.7%** correct oligomeric state where Rosetta got none', zh: '在 Rosetta 完全失敗處，寡聚態正確率 **0% → 27.7%**' }, { en: 'MIT', zh: 'MIT' }],
            ['4', '**RFdiffusion**', '2023', { en: 'Generating a backbone around a functional motif', zh: '圍繞功能模組生成主鏈' }, { en: '**19%** binder hit rate from 95 designs per target, against 0–5.5% before', zh: '每標的 95 個設計，結合蛋白命中率 **19%**，先前為 0–5.5%' }, { en: 'BSD + weights', zh: 'BSD ＋權重' }],
            ['5', '**ESM3**', '2024–25', { en: 'A functional protein far from anything natural', zh: '離任何天然蛋白都很遠的有功能蛋白' }, { en: 'esmGFP fluoresces at **58%** identity to its nearest known relative', zh: 'esmGFP 在與最近已知親緣相似度 **58%** 下仍會發光' }, { en: 'Partly (1.4B only)', zh: '部分（僅 1.4B）' }],
            ['6', '**AlphaFold3 / Boltz / Chai**', '2024', { en: 'All of biomolecular space in one architecture', zh: '一個架構涵蓋整個生物分子空間' }, { en: 'Beats docking **with no structural input** (p = 2.3 × 10⁻¹³)', zh: '在**沒有結構輸入**下勝過對接（p = 2.3 × 10⁻¹³）' }, { en: 'AF3 gated; Boltz MIT', zh: 'AF3 受限；Boltz 為 MIT' }],
            ['7', '**BindCraft**', '2025', { en: 'A binder from ten designs, no screening', zh: '十個設計拿到結合蛋白，不需篩選' }, { en: '**46.3%** mean success across 12 targets, range 10–100%', zh: '12 個標的平均成功率 **46.3%**，範圍 10–100%' }, { en: 'MIT, one GPU', zh: 'MIT，單一 GPU' }],
            ['8', '**RFdiffusion + PLACER**', '2025', { en: 'Catalysis designed from scratch', zh: '從零設計出的催化' }, { en: '**k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**, no directed evolution', zh: '**k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**，未用定向演化' }, { en: 'Open', zh: '開放' }],
            ['9', '**Rosetta nanoparticle design**', '2020–22', { en: 'A designed protein approved by a regulator', zh: '一個通過監管機關核准的設計蛋白' }, { en: '**10×** higher neutralising titres at a 5× lower dose; approved in Korea 2022', zh: '以 5 倍低的劑量得到 **10 倍**高的中和效價；2022 年在韓國核准' }, { en: 'Published; product withdrawn', zh: '已發表；產品已退出' }],
            ['10', '**ProGen2 / Profluent**', '2024–25', { en: 'A gene editor written by a language model', zh: '由語言模型寫出的基因編輯器' }, { en: '**0.32% vs 6.1%** off-target against SpCas9, at higher on-target activity', zh: '脫靶 **0.32% 對 6.1%**（對比 SpCas9），且標的內活性更高' }, { en: 'Sequences free; models not released', zh: '序列免費；模型未釋出' }],
            ['11', '**RFantibody**', '2025–26', { en: 'De novo antibodies, confirmed by structure', zh: '經結構確認的從頭抗體' }, { en: 'All **six CDR loops** at 0.2–1.1 Å; but 0–2% hit rate', zh: '**全部六個 CDR 環**在 0.2–1.1 Å；但命中率 0–2%' }, { en: 'MIT, incl. weights', zh: 'MIT，含權重' }]
          ]
        })
      });

      /* ================= CASE 1 ================= */
      out += h.sec({
        id: 'cs-1',
        body: h.caseCard({
          n: 1,
          h: { en: 'Rosetta → Top7: a fold nature never made', zh: 'Rosetta → Top7：自然界從未造出的摺疊' },
          sub: { en: 'Kuhlman et al., *Science* 302:1364 (2003) · Baker lab, University of Washington', zh: 'Kuhlman 等人，*Science* 302:1364（2003）· 華盛頓大學 Baker 實驗室' },
          chips: [{ t: '2003', k: 'b' }, { t: { en: 'de novo fold', zh: '從頭摺疊' }, k: 'v' }, { t: 'PDB 1QYS', k: 'g' }, { t: { en: '~853 citations', zh: '約 853 次引用' } }],
          body:
            h.kv([
              [{ en: 'The problem', zh: '問題' }, { en: 'By 2000 designers could redesign natural backbones and build idealised helical bundles, but every successful design reused a topology that evolution had already validated. Nobody knew whether the design pipeline worked, or whether it was quietly relying on the fact that the target fold was known to be foldable.', zh: '到 2000 年，設計者已能重新設計天然主鏈、建造理想化的螺旋束，但每個成功的設計都重用了演化已經驗證過的拓樸。沒有人知道設計流程到底行不行，還是它只是悄悄依賴「目標摺疊已知可摺」這個事實。' }],
              [{ en: 'What it does', zh: '它做什麼' }, { en: 'Rosetta scores a sequence–structure pair with a physics-plus-knowledge energy function and samples conformations by assembling fragments of unrelated proteins with similar local sequence. For Top7 the team ran the loop in both directions: design a sequence for the target topology, then run *ab initio* structure prediction on that sequence and check whether the target came out as the global energy minimum. Iterate until it does. The same energy function that predicts therefore also designs — which is why one laboratory\'s prediction gains were automatically design gains.', zh: 'Rosetta 用「物理加知識」的能量函數為序列—結構配對評分，並以組裝局部序列相似的無關蛋白片段來取樣構型。做 Top7 時，團隊把這個迴圈雙向跑：為目標拓樸設計序列，再對該序列做*從頭*結構預測，檢查目標是否成為全域能量最低點，反覆直到成立。因此「預測用的」與「設計用的」是同一個能量函數——這也是為什麼某一間實驗室的預測進展會自動變成設計進展。' }],
              [{ en: 'The result', zh: '成果' }, { en: 'A **93-residue α/β protein** whose strand order does not occur in the Protein Data Bank. The crystal structure (PDB 1QYS, 2.5 Å) matched the design model to **1.2 Å backbone RMSD**. It is extremely stable — resistant to boiling and to high denaturant.', zh: '一個 **93 個殘基的 α/β 蛋白**，其 β 股順序在蛋白質資料庫中不存在。晶體結構（PDB 1QYS，2.5 Å）與設計模型吻合至 **1.2 Å 主鏈 RMSD**。它極為穩定——耐煮沸、也耐高濃度變性劑。' }],
              [{ en: 'What it did NOT solve', zh: '它*沒有*解決什麼' }, { en: '**Function.** Top7 does nothing. It binds nothing and catalyses nothing. Later folding studies also showed it goes through partially structured intermediates rather than the clean two-state folding of natural proteins — the hyperstability was bought by over-optimised hydrophobic burial, at the cost of a smooth folding funnel. That trade-off is exactly what Koga & Baker addressed nine years later.', zh: '**功能。** Top7 什麼也不做。它不結合任何東西、不催化任何反應。後來的摺疊研究也顯示，它是經由部分結構化的中間態摺疊，而不是天然蛋白那種乾淨的兩態摺疊——超穩定性是用過度最佳化的疏水包埋買來的，代價是失去平滑的摺疊漏斗。這個取捨正是九年後 Koga 與 Baker 處理的問題。' }],
              [{ en: 'Downstream', zh: '下游影響' }, { en: 'Top7 is a conceptual anchor rather than a reused tool: it is the paper people cite to establish that de novo design is possible at all. Its direct methodological descendant is the idealised-structure programme of 2012–2018 (TIM barrel, β-barrel), which exists because Top7 revealed what was wrong with designing for stability alone.', zh: 'Top7 是概念上的定錨，不是一個被反覆使用的工具：它是人們用來確立「從頭設計根本是可行的」那篇論文。它在方法上的直接後代是 2012–2018 年的理想化結構計畫（TIM 桶、β 桶），而那個計畫之所以存在，正因為 Top7 揭露了「只為穩定度而設計」有什麼問題。' }]
            ]) +
            h.pdb({
              id: '1QYS',
              title: { en: 'Top7, the structure that started it', zh: 'Top7，一切的起點' },
              sub: { en: 'Rainbow from N-terminus (blue) to C-terminus (red). Look at how flat and regular the sheet is.', zh: '由 N 端（藍）到 C 端（紅）的彩虹色。注意那片 β 摺板有多平整、多規則。' },
              caption: { en: 'The tidiness is the signature of the era — and its limitation.', zh: '那份整齊是那個時代的標誌——也是它的限制。' }
            })
        })
      });

      /* ================= CASE 2 ================= */
      out += h.sec({
        id: 'cs-2',
        body: h.caseCard({
          n: 2,
          h: { en: 'AlphaFold2 → a proteome of structures, and a universal filter', zh: 'AlphaFold2 → 一個蛋白體的結構，以及一個通用篩選器' },
          sub: { en: 'Jumper et al., *Nature* 596:583 (2021); AlphaFold DB expansion July 2022 · DeepMind', zh: 'Jumper 等人，*Nature* 596:583（2021）；AlphaFold 資料庫於 2022 年七月擴充 · DeepMind' },
          chips: [{ t: '2021', k: 'b' }, { t: { en: 'prediction', zh: '預測' }, k: 'v' }, { t: { en: '~41,000 citations', zh: '約 41,000 次引用' } }, { t: 'Apache-2.0', k: 'g' }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Design pipelines needed an oracle. Rosetta\'s own energy function was both the designer and the judge, which made the loop circular — designs were optimised against exactly the function used to evaluate them. An *independent*, accurate structure predictor would break the circularity and let designers discard bad designs before ordering DNA.', zh: '設計流程需要一個神諭。Rosetta 自己的能量函數既是設計者又是裁判，使整個迴圈成為循環論證——設計被最佳化去迎合用來評估它們的那個函數。一個*獨立*且準確的結構預測器能打破這個循環，讓設計者在訂 DNA 之前就淘汰壞設計。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'The Evoformer couples an MSA track and a residue-pair track through 48 blocks of attention, repeatedly letting evolutionary covariation and geometric reasoning update each other. A structure module then places residues as rigid frames under the FAPE loss, and the whole prediction is recycled three times. Self-distillation on unlabelled sequences supplied training signal beyond the PDB.', zh: 'Evoformer 以 48 個注意力區塊耦合一條 MSA 軌道與一條殘基配對軌道，讓演化共變異與幾何推理反覆互相更新。接著結構模組在 FAPE 損失下把殘基當剛體框架擺放，而整個預測會循環三次。對未標註序列的自我蒸餾則提供了超出 PDB 的訓練訊號。' }],
            [{ en: 'The result', zh: '成果' }, { en: 'Median backbone accuracy **0.96 Å RMSD₉₅** at CASP14, against 2.8 Å for the next-best group; median domain GDT_TS 92.4. The database went from about 350,000 structures at launch in July 2021 to **over 200 million** a year later, and above 214 million by 2024.', zh: 'CASP14 主鏈準確度中位數 **0.96 Å RMSD₉₅**，次佳團隊為 2.8 Å；結構域 GDT_TS 中位數 92.4。資料庫從 2021 年七月上線時約 35 萬個結構，一年後成長到**超過 2 億**，到 2024 年超過 2.14 億。' }],
            [{ en: 'The design-relevant twist', zh: '對設計而言真正的關鍵' }, { en: 'It was not the structures. It was the **confidence heads**. pLDDT and PAE turned AlphaFold2 into the universal in-silico filter, and every later case in this chapter runs some form of AlphaFold self-consistency before ordering genes. The 2026 audit chapter is, in effect, a long examination of how much that filter is really worth.', zh: '關鍵不是那些結構，而是**信賴度輸出頭**。pLDDT 與 PAE 把 AlphaFold2 變成了通用的電腦端篩選器，而本章後面每一個案例在訂基因之前都會跑某種形式的 AlphaFold 自洽檢驗。2026 年的「稽核」一章實際上就是在長篇檢驗：那個篩選器到底值多少。' }],
            [{ en: 'What it did NOT solve', zh: '它*沒有*解決什麼' }, { en: 'It predicts a **single static structure**, needs MSAs, is largely insensitive to point mutations, and models no ligands. Multiple random seeds do not approximate a thermodynamic ensemble — and in 2026, independent work showed its confidence scores cannot discriminate real binding partners from shuffled ones.', zh: '它預測的是**單一靜態結構**，需要 MSA，對點突變大致不敏感，而且不處理配體。多個隨機種子並不近似熱力學集合——而在 2026 年，獨立研究顯示它的信賴度分數無法區分真實結合夥伴與洗牌配對。' }]
          ]) +
            h.bio('af2', {
              title: { en: 'AlphaFold2, in four boxes', zh: '四個方塊講完 AlphaFold2' },
              sub: { en: 'The recycling loop is the detail most summaries drop, and it is a large part of why the accuracy was a step change rather than an increment.', zh: '循環回饋是多數摘要會漏掉的細節，而它正是「準確度是階梯式躍升而非增量」的一大原因。' },
              caption: { en: 'Simplified. After Jumper et al. (2021).', zh: '已簡化。依 Jumper 等人（2021）。' }
            })
        })
      });

      /* ================= CASE 3 ================= */
      out += h.sec({
        id: 'cs-3',
        body: h.caseCard({
          n: 3,
          h: { en: 'ProteinMPNN → the step that rescued designs Rosetta could not sequence', zh: 'ProteinMPNN → 救回 Rosetta 無法定序的那些設計' },
          sub: { en: 'Dauparas et al., *Science* 378:49 (2022) · Baker lab · PDB 8CYK', zh: 'Dauparas 等人，*Science* 378:49（2022）· Baker 實驗室 · PDB 8CYK' },
          chips: [{ t: '2022', k: 'b' }, { t: { en: '1.7M parameters', zh: '170 萬參數' }, k: 'g' }, { t: 'MIT', k: 'g' }, { t: { en: '~2,364 citations', zh: '約 2,364 次引用' } }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Generative methods could produce plausible backbones faster than anyone could find sequences for them. Rosetta\'s fixed-backbone sequence design took minutes per design, recovered only about a third of native sequences, and failed badly on the idealised backbones that generative methods produce — which are subtly unlike anything in the PDB.', zh: '生成方法產生合理主鏈的速度，比任何人能為它們找到序列的速度更快。Rosetta 的固定主鏈序列設計每個設計要花數分鐘、只回復約三分之一的原生序列，而且在生成方法產出的那種理想化主鏈上表現很差——那些主鏈與 PDB 裡的任何東西都有微妙的不同。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'A three-encoder, three-decoder message-passing network over a graph whose nodes are residues and whose edges carry **only backbone geometry** — inter-atomic distances including a virtual Cβ, orientations and dihedrals. No sequence information enters as input. Decoding is order-agnostic, so any subset of positions can be held fixed, which is what makes it composable with motif scaffolding. **The decisive trick is the training noise:** it was trained on PDB assemblies with Gaussian noise added to coordinates, trading accuracy on pristine crystal structures for robustness on the imperfect, idealised backbones that design actually produces.', zh: '一個三編碼器、三解碼器的訊息傳遞網路，作用在一張圖上：節點是殘基，邊只攜帶**主鏈幾何**——含虛擬 Cβ 的原子間距離、方向與二面角。輸入完全不含序列資訊。解碼與順序無關，因此任意位置子集都可以被固定，這正是它能與模組支架化組合的原因。**決定性的訣竅是訓練噪聲：** 它以加了高斯座標噪聲的 PDB 組裝體訓練，用「在完美晶體結構上的準確度」換取「在設計實際產出的那種不完美理想化主鏈上的韌性」。' }],
            [{ en: 'The headline numbers', zh: '招牌數字' }, { en: '**52.4% native sequence recovery against Rosetta\'s 32.9%**, in **1.2 seconds against 258.8 seconds** per 100-residue protein. But the number that actually changed practice is the rescue: on cyclic C5/C6 homo-oligomers Rosetta gave 40% soluble and **zero** with the correct oligomeric state by SEC-MALS, while ProteinMPNN gave **88% soluble and 27.7% correct**. On hallucinated backbones, median soluble yield went from **9 mg/L to 247 mg/L**, with 73 of 96 designs soluble.', zh: '**原生序列回復率 52.4%，對 Rosetta 的 32.9%**，每個 100 殘基蛋白 **1.2 秒對 258.8 秒**。但真正改變實務的數字是「救援」：在環狀 C5/C6 同聚體上，Rosetta 給出 40% 可溶、以 SEC-MALS 測得寡聚態正確者為**零**，而 ProteinMPNN 給出 **88% 可溶、27.7% 正確**。在幻化主鏈上，可溶產量中位數從 **9 mg/L 升到 247 mg/L**，96 個設計中 73 個可溶。' }],
            [{ en: 'Why this is the most important case here', zh: '為什麼這是本章最重要的案例' }, { en: 'Zero to non-zero on a real task, at 200× the speed, from a model smaller than most phone keyboards\' autocomplete. Every pipeline in the field adopted it within months, and it is still the sequence-design step in 2026 systems. It also runs on a laptop — which makes it the one frontier-grade tool a student team can treat as free.', zh: '在一個真實任務上從零變成非零，速度快 200 倍，而模型比多數手機鍵盤的自動完成還小。領域內每一條流程在幾個月內都採用了它，而它到 2026 年仍然是這些系統裡的序列設計步驟。它也在筆電上就跑得動——這使它成為學生團隊可以當成免費資源的那個前沿級工具。' }],
            [{ en: 'What it did NOT solve', zh: '它*沒有*解決什麼' }, { en: 'It designs a sequence for a backbone you already have; it does not tell you whether that backbone is worth designing for. And by 2026 native-sequence recovery had stopped being a meaningful objective — methods that deliberately *lower* recovery can improve downstream outcomes.', zh: '它為你已經有的主鏈設計序列；它不會告訴你那條主鏈值不值得被設計。而到 2026 年，原生序列回復率已不再是有意義的目標——刻意*降低*回復率的方法反而能改善下游結果。' }]
          ]) +
            h.bio('mpnn', {
              title: { en: 'ProteinMPNN: geometry in, sequence out', zh: 'ProteinMPNN：輸入幾何，輸出序列' },
              sub: { en: 'Note what is absent from the input: there is no sequence, no MSA and no energy function anywhere in this diagram.', zh: '請注意輸入裡缺了什麼：這張圖裡沒有序列、沒有 MSA，也沒有任何能量函數。' },
              caption: { en: 'Schematic of the architecture described in Dauparas et al. (2022). The amino-acid probabilities shown are illustrative.', zh: 'Dauparas 等人（2022）所述架構的示意圖。圖中的胺基酸機率僅為示意。' }
            })
        })
      });

      /* ================= CASE 4 ================= */
      out += h.sec({
        id: 'cs-4',
        body: h.caseCard({
          n: 4,
          h: { en: 'RFdiffusion → motif scaffolding and the first routine binders', zh: 'RFdiffusion → 模組支架化與第一批常規結合蛋白' },
          sub: { en: 'Watson et al., *Nature* 620:1089 (2023); preprint December 2022 · Baker lab', zh: 'Watson 等人，*Nature* 620:1089（2023）；預印本 2022 年 12 月 · Baker 實驗室' },
          chips: [{ t: '2023', k: 'b' }, { t: { en: 'diffusion', zh: '擴散' }, k: 'v' }, { t: 'BSD + weights', k: 'g' }, { t: { en: '~1,857 citations', zh: '約 1,857 次引用' } }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Hallucination — optimising a sequence until a predictor became confident — worked, but it was slow, hard to condition, and vulnerable to adversarial examples: you were optimising *against* the very oracle you then used to judge the result. And the task that mattered most, holding a functional motif fixed while building a protein around it, was awkward to express as an optimisation objective.', zh: '幻化設計——持續最佳化序列直到預測器有信心——行得通，但很慢、難以加條件，而且容易產生對抗樣本：你是在*針對*那個隨後要用來評判結果的神諭做最佳化。而最重要的那個任務——固定一個功能模組、在它周圍建造蛋白——很難寫成最佳化目標。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'RoseTTAFold, fine-tuned as a denoiser in **frame space**: Gaussian noise on residue translations, Brownian motion on SO(3) for rotations, mean-squared error on frames, with self-conditioning across denoising steps. Because it is a conditional generative model rather than an optimiser, conditioning is trivial — fix a motif, specify a target surface, impose symmetry, add an external potential — and there is no adversarial-example problem, because you stop optimising against the oracle you later judge with.', zh: '把 RoseTTAFold 微調成在**剛體框架空間**中的去噪器：對殘基平移加高斯噪聲、對旋轉在 SO(3) 上做布朗運動、對框架用均方誤差，並在去噪步驟間做自我條件化。因為它是條件生成模型而不是最佳化器，加條件變得很容易——固定模組、指定目標表面、施加對稱、加外部勢能——而且沒有對抗樣本問題，因為你不再對著隨後要用來評判的神諭做最佳化。' }],
            [{ en: 'Per-task results, exactly as reported', zh: '逐任務成果，完全照原文' }, { en: 'Motif scaffolding: **23 of 25** benchmark problems solved, against 15 of 25 for hallucination, at **~11 seconds versus ~8.5 minutes** per design. Symmetric oligomers: 608 designs, at least 87 with the intended oligomeric state by SEC — but only **1 of 48** icosahedra worked. Metal-binding: **18 of 36** Ni²⁺ designs bound, with a clean 17/17 knockout control. Motif scaffolding of the p53 helix: 96 designs gave 55 binders, best **K_D 0.5 nM against MDM2**, where the native p53 peptide binds at 600 nM. **Binders: 95 designs per target, 19% overall hit rate across five targets** — against the same laboratory\'s own prior campaigns at 0%, 2.2%, 5.5%, 3.7% and 1.5%. A 2.9 Å cryo-EM structure of the best haemagglutinin binder sits **0.63 Å** from the design model.', zh: '模組支架化：基準 **25 題中解出 23 題**，幻化設計為 15 題，每個設計 **約 11 秒 vs 約 8.5 分鐘**。對稱寡聚體：608 個設計，至少 87 個以 SEC 測得預期寡聚態——但二十面體只有 **48 個中 1 個**成功。金屬結合：**36 個 Ni²⁺ 設計中 18 個**結合，並有乾淨的 17/17 剔除對照。p53 螺旋的模組支架化：96 個設計得到 55 個結合蛋白，最佳 **對 MDM2 的 K_D 為 0.5 nM**，而天然 p53 肽的結合是 600 nM。**結合蛋白：每標的 95 個設計，五個標的整體命中率 19%**——對照同一實驗室先前的活動分別為 0%、2.2%、5.5%、3.7% 與 1.5%。最佳血凝素結合蛋白的 2.9 Å 冷凍電顯結構與設計模型相距 **0.63 Å**。' }],
            [{ en: 'The authors\' own caveats', zh: '作者自己的保留' }, { en: 'Non-polar epitopes only; no small molecules (that came with the all-atom version); and no proteome-wide specificity testing. They also attribute roughly **one order of magnitude of the two-order improvement to AlphaFold2 filtering rather than to the generator** — a piece of honesty that most secondary coverage drops.', zh: '只適用非極性抗原決定位；不處理小分子（那要等全原子版本）；也沒有做全蛋白體的專一性測試。他們還把兩個數量級的改善中**約一個數量級歸給 AlphaFold2 篩選、而不是生成器本身**——這份誠實是大多數二手報導會丟掉的。' }]
          ]) +
            h.bio('diffusion', {
              title: { en: 'Reverse diffusion, step by step', zh: '反向擴散，一步一步' },
              sub: { en: 'Conditioning enters at every step: a fixed motif is simply held constant while the rest is denoised around it.', zh: '條件在每一步都進來：固定的模組就只是保持不動，其餘部分圍繞它被去噪。' },
              caption: { en: 'Schematic, not real trajectory coordinates.', zh: '示意圖，非真實軌跡座標。' }
            })
        })
      });

      /* ================= CASE 5 ================= */
      out += h.sec({
        id: 'cs-5',
        body: h.caseCard({
          n: 5,
          h: { en: 'ESM3 → esmGFP, a fluorescent protein far from anything natural', zh: 'ESM3 → esmGFP，一個離任何天然蛋白都很遠的螢光蛋白' },
          sub: { en: 'Hayes et al., *Science* 387:850 (Jan 2025); preprint July 2024 · EvolutionaryScale', zh: 'Hayes 等人，*Science* 387:850（2025 年 1 月）；預印本 2024 年 7 月 · EvolutionaryScale' },
          chips: [{ t: '2024–25', k: 'b' }, { t: '98B params', k: 'v' }, { t: { en: 'partly open', zh: '部分開放' }, k: 'a' }, { t: { en: '~442 citations', zh: '約 442 次引用' } }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Language models could generate plausible sequences, and structure models could generate plausible backbones, but neither could be told "make me something with *this function* that looks like *nothing in nature*". Fluorescent proteins are the ideal test: function is visible to the naked eye, and the natural family is well enough characterised that distance from it can be measured precisely.', zh: '語言模型能生成合理序列，結構模型能生成合理主鏈，但兩者都無法被告知「給我一個有*這個功能*、卻和*自然界任何東西都不像*的東西」。螢光蛋白是理想的測試：功能用肉眼就看得見，而天然家族的特性清楚到可以精確量測「離它多遠」。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'A bidirectional transformer over **discrete tokens for several modalities at once** — sequence, structure (via a 4,096-code structural autoencoder), 8-state secondary structure, solvent accessibility, and function keywords — trained with masking at all masking rates, so any modality can be used to prompt any other. The 98-billion-parameter model saw 2.78 billion proteins at roughly 1.07 × 10²⁴ FLOPs.', zh: '一個雙向 transformer，**同時處理多種模態的離散字元**——序列、結構（透過 4,096 碼的結構自編碼器）、八態二級結構、溶劑可及性，以及功能關鍵詞——以各種遮罩比率訓練，因此任何模態都可以用來提示任何其他模態。980 億參數的模型看過 27.8 億個蛋白，約 1.07 × 10²⁴ FLOPs。' }],
            [{ en: 'The result', zh: '成果' }, { en: '**esmGFP is 58% identical to the nearest known fluorescent protein** (tagRFP) and about 36% to avGFP, with brightness inside the natural GFP distribution, excitation 496 nm and emission 512 nm.', zh: '**esmGFP 與最近的已知螢光蛋白（tagRFP）有 58% 相同**，與 avGFP 約 36%，亮度落在天然 GFP 的分布之內，激發 496 nm、發射 512 nm。' }],
            [{ en: 'What "500 million years" actually means', zh: '「五億年」實際上是什麼意思' }, { en: 'It is an **extrapolation, not a measurement**. A molecular-clock estimator was fitted to six anthozoan GFPs with known divergence times, then applied to esmGFP\'s sequence distance. The result restates a *distance* in time units. It is a legitimate rhetorical device and it is not a claim about elapsed evolution. Worth knowing before you quote it.', zh: '那是**外推，不是量測**。研究者把分子鐘估計量擬合到六個已知分化時間的珊瑚蟲類 GFP，再套用到 esmGFP 的序列距離上。結果是把一個*距離*改用時間單位重述。這是個合理的修辭手法，但不是關於「經過了多少演化時間」的主張。在引用之前值得先知道。' }],
            [{ en: 'What it did NOT solve', zh: '它*沒有*解決什麼' }, { en: 'The design was **heavily human-scaffolded**: six chromophore residues and a backbone segment taken from an existing GFP structure were pinned in the prompt. The round-one hit was about 50× dimmer and needed a week of maturation. And **no structure of esmGFP exists** — so the fold was never confirmed experimentally. The 98-billion-parameter model went behind an API; a 1.4-billion version was released for non-commercial use.', zh: '這個設計**有大量人工支架**：六個發色團殘基與一段取自既有 GFP 結構的主鏈被固定在提示中。第一輪的命中亮度低約 50 倍，需要一週的成熟化。而且**esmGFP 沒有任何結構**——所以它的摺疊從未被實驗確認。980 億參數的模型放在 API 後面；只釋出了一個 14 億參數版供非商業使用。' }]
          ]) +
            h.bio('plm', {
              title: { en: 'What a protein language model learns, and what falls out for free', zh: '蛋白質語言模型學到什麼，以及順帶得到什麼' },
              sub: { en: 'Masked-token prediction on raw sequences is the whole training objective. Everything in the bottom row is emergent.', zh: '在原始序列上做遮罩字元預測，就是全部的訓練目標。下排的每一項都是衍生出來的。' },
              caption: { en: 'Schematic. Parameter range spans the published protein language models from ESM-1b to ESM3.', zh: '示意圖。參數範圍涵蓋從 ESM-1b 到 ESM3 的已發表蛋白質語言模型。' }
            })
        })
      });

      /* ================= CASE 6 ================= */
      out += h.sec({
        id: 'cs-6',
        body: h.caseCard({
          n: 6,
          h: { en: 'AlphaFold3 → all-atom complexes, and the open reimplementation wave', zh: 'AlphaFold3 → 全原子複合體，以及開源重建浪潮' },
          sub: { en: 'Abramson et al., *Nature* 630:493 (May 2024) · DeepMind; Boltz-1 (MIT) and Chai-1 (Apache-2.0) within six months', zh: 'Abramson 等人，*Nature* 630:493（2024 年 5 月）· DeepMind；Boltz-1（MIT）與 Chai-1（Apache-2.0）在六個月內問世' },
          chips: [{ t: '2024', k: 'b' }, { t: { en: 'all-atom', zh: '全原子' }, k: 'v' }, { t: { en: 'weights gated', zh: '權重受限' }, k: 'r' }, { t: { en: '~15,800 citations', zh: '約 15,800 次引用' } }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Real biology is complexes. A protein with its ligand, its metal ion, its glycans, its DNA. Every one of those cases had its own specialist predictor, each with its own file formats, failure modes and accuracy claims, and none of them could handle a system with two of those features at once.', zh: '真實的生物學是複合體。一個蛋白加上它的配體、金屬離子、聚醣、DNA。這些案例每一個都有自己的專用預測器，各有自己的檔案格式、失效模式與準確度宣稱，而且沒有一個能處理同時具備其中兩項特徵的系統。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'Pairformer replaces Evoformer, the MSA pathway shrinks to four blocks, and a **diffusion module denoises raw atom coordinates with no frames and no stereochemical loss terms**. Because low-noise diffusion forces the network to learn local chemistry from data, the special-case bonding logic could be deleted — which is precisely how one network emits protein, DNA, RNA, ligand, ion and glycan atoms. Cross-distillation from AlphaFold-Multimer suppresses hallucinated order in disordered regions.', zh: 'Pairformer 取代 Evoformer，MSA 路徑縮到四個區塊，而**擴散模組直接對原始原子座標去噪，沒有剛體框架、沒有立體化學損失項**。因為低噪聲擴散會迫使網路從資料中學到局部化學，特例鍵結邏輯就可以被刪掉——這正是為什麼一個網路能輸出蛋白、DNA、RNA、配體、離子與聚醣的原子。來自 AlphaFold-Multimer 的交叉蒸餾則抑制了無序區中幻化出的有序結構。' }],
            [{ en: 'The result', zh: '成果' }, { en: 'It beats a standard docking program on the PoseBusters benchmark **with no structural input at all** (p = 2.27 × 10⁻¹³) and beats RoseTTAFold All-Atom at p = 4.45 × 10⁻²⁵. **Note:** the widely quoted "76% PoseBusters" figure could not be verified against the primary source during research — secondary sources give 76.4%, 80.4% and ~81% for different versions and settings, and Chai-1 reports 77%, or 81% with an apo prompt. **Do not quote a single number for this.**', zh: '在 PoseBusters 基準上，它**完全不需要任何結構輸入**就勝過標準對接程式（p = 2.27 × 10⁻¹³），並以 p = 4.45 × 10⁻²⁵ 勝過 RoseTTAFold All-Atom。**注意：** 廣為引用的「76% PoseBusters」在研究期間無法對照一手來源核實——二手來源對不同版本與設定給出 76.4%、80.4% 與約 81%，而 Chai-1 報告 77%、在 apo 提示下為 81%。**不要為此引用單一數字。**' }],
            [{ en: 'What it did NOT solve', zh: '它*沒有*解決什麼' }, { en: 'Energetics. It violates chirality on **4.4%** of cases even after a ranking penalty, overlaps whole chains in homomers, needs about **1,000 seeds** for antibodies, and its own paper states that multiple seeds "do not produce an approximation of the solution ensemble". The BindCraft authors found it produced many false positives for binder design. And a 2026 benchmark on 2,600 post-cutoff systems concluded the co-folding models "largely memorize ligand poses from their training data".', zh: '能量學。即使加了排序懲罰，它在 **4.4%** 的案例中仍違反掌性；在同聚體中會讓整條鏈重疊；抗體需要約 **1,000 個隨機種子**；而它自己的論文就寫明多個種子「並不會產生解集合的近似」。BindCraft 的作者發現它在結合蛋白設計上產生許多偽陽性。而 2026 年一項以 2,600 個訓練截止後系統進行的基準測試結論是：這些共摺疊模型「大致上是背下訓練資料中的配體姿態」。' }],
            [{ en: 'The lasting lesson', zh: '最持久的教訓' }, { en: 'Closed weights triggered **Boltz-1 under MIT and Chai-1 under Apache-2.0 within months**, and the Boltz-1 paper states plainly that its authors requested the AlphaFold3 weights and never received them. Nine days after the gated release, a permissively licensed equivalent existed. That six-month half-life repeated in 2026.', zh: '閉源權重在幾個月內觸發了 **MIT 授權的 Boltz-1 與 Apache-2.0 授權的 Chai-1**，而 Boltz-1 的論文直接寫明：作者曾申請 AlphaFold3 權重，從未收到。在受限釋出九天後，一個寬鬆授權的等價模型就存在了。這個六個月半衰期在 2026 年又重演了一次。' }]
          ])
        })
      });

      /* ================= CASE 7 ================= */
      out += h.sec({
        id: 'cs-7',
        body: h.caseCard({
          n: 7,
          h: { en: 'BindCraft → a binder from ten designs, with no screening', zh: 'BindCraft → 十個設計就有結合蛋白，不需篩選' },
          sub: { en: 'Pacesa et al., *Nature* 646:483 (Aug 2025); preprint October 2024 · EPFL', zh: 'Pacesa 等人，*Nature* 646:483（2025 年 8 月）；預印本 2024 年 10 月 · 洛桑聯邦理工學院' },
          chips: [{ t: '2025', k: 'b' }, { t: { en: 'one GPU', zh: '單一 GPU' }, k: 'g' }, { t: 'MIT', k: 'g' }, { t: { en: '~343 citations', zh: '約 343 次引用' } }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Even after RFdiffusion, a binder campaign meant generating thousands of candidates, filtering hard, ordering a hundred genes and screening. For most laboratories — and every student team — that funnel is the project, not a step in it.', zh: '即使在 RFdiffusion 之後，一場結合蛋白活動仍意味著生成數千個候選、嚴格篩選、訂一百個基因、然後做篩選。對多數實驗室——以及所有學生團隊——那個漏斗就是整個專案本身，而不是其中一步。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'Hallucination, done properly. It backpropagates through **frozen AlphaFold2-multimer weights** to optimise binder sequence and structure jointly, with nine explicit loss terms, random swapping among the five AlphaFold2 models to avoid overfitting one, and — the key detail — **re-predicting the target structure at every iteration**, so both partners are allowed to flex rather than treating the target as a rigid body. A soluble-variant ProteinMPNN then redesigns everything except residues within 4 Å of the interface.', zh: '把幻化設計做對。它對**凍結的 AlphaFold2-multimer 權重**做反向傳播，同時最佳化結合蛋白的序列與結構，使用九個明確的損失項，並在五個 AlphaFold2 模型之間隨機切換以避免過度擬合某一個——而關鍵細節是：**每次迭代都重新預測標的結構**，讓雙方都能變形，而不是把標的當成剛體。接著用可溶性版本的 ProteinMPNN 重新設計界面 4 Å 以外的所有殘基。' }],
            [{ en: 'The result', zh: '成果' }, { en: '**46.3% average experimental success across 12 targets, range 10–100%.** Per target: SpCas9 REC1 6/6, CLDN1 6/7, PD-L1 7/9, BBF-14 6/11 at 20.9 nM, Der f7 4/10 at 12.8 nM, CD45 4/16 at 14.7 nM, CbAgo 2/12 at 5 nM. You order about **ten designs**. Crystal structures at 2.2, 3.0 and 2.6 Å resolution sit 1.7–3.1 Å Cα RMSD from the design models.', zh: '**12 個標的平均實驗成功率 46.3%，範圍 10–100%。** 逐標的：SpCas9 REC1 6/6、CLDN1 6/7、PD-L1 7/9、BBF-14 6/11（20.9 nM）、Der f7 4/10（12.8 nM）、CD45 4/16（14.7 nM）、CbAgo 2/12（5 nM）。你只需訂**約十個設計**。解析度 2.2、3.0 與 2.6 Å 的晶體結構與設計模型相距 1.7–3.1 Å Cα RMSD。' }],
            [{ en: 'The finding inside the finding', zh: '成果裡面的成果' }, { en: 'The authors report that **i_pTM predicts whether a design binds but does not correlate with affinity.** That single observation, made by the people whose method depends on it, is the clearest statement in the 2025 literature of what confidence metrics are and are not for. An independent iGEM measurement the same year put i_pTM\'s rank correlation with wet-lab ranking at Kendall τ ≈ −0.20 — worse than random ordering.', zh: '作者報告：**i_pTM 能預測一個設計是否結合，但與親和力不相關。** 這個觀察出自一群方法依賴它的人，是 2025 年文獻中對「信賴度指標是什麼、不是什麼」最清楚的陳述。同年一項獨立的 iGEM 量測，把 i_pTM 與實驗排序的等級相關性測得 Kendall τ ≈ −0.20——比隨機排序還差。' }],
            [{ en: 'For a student team', zh: '對學生團隊而言' }, { en: 'MIT-licensed and runs on one GPU — but the README recommends **at least 32 GB of GPU memory**, and free Colab\'s T4 has 16 GB with a session cap. A published PD-L1 benchmark needed about 33 hours on a B200-class GPU for 101 accepted designs, and the README warns difficult targets may need "a few thousand trajectories". Pilot four to ten designs and **time it** before committing.', zh: 'MIT 授權，單一 GPU 可跑——但 README 建議**至少 32 GB 的 GPU 記憶體**，而免費 Colab 的 T4 只有 16 GB，還有時長上限。一個已發表的 PD-L1 基準在 B200 級 GPU 上花約 33 小時產出 101 個通過設計，而 README 警告困難標的可能需要「數千條軌跡」。先試跑四到十個設計並**計時**，再決定投入。' }]
          ])
        })
      });

      /* ================= CASE 8 ================= */
      out += h.sec({
        id: 'cs-8',
        body: h.caseCard({
          n: 8,
          h: { en: 'RFdiffusion + PLACER → catalysis designed from scratch', zh: 'RFdiffusion + PLACER → 從零設計出的催化' },
          sub: { en: 'Lauko et al., *Science* 388:eadu2454 (Feb 2025) · Baker lab · PDB 9DEG and five others', zh: 'Lauko 等人，*Science* 388:eadu2454（2025 年 2 月）· Baker 實驗室 · PDB 9DEG 等六個結構' },
          chips: [{ t: '2025', k: 'b' }, { t: { en: 'no evolution', zh: '未用演化' }, k: 'g' }, { t: { en: '6 structures', zh: '六個結構' }, k: 'g' }, { t: { en: '~178 citations', zh: '約 178 次引用' } }],
          body: h.kv([
            [{ en: 'The problem', zh: '問題' }, { en: 'Designed enzymes had been stuck for fifteen years in a specific way: they bound substrates and performed single turnovers, but catalytic efficiency sat orders of magnitude below natural enzymes. The suspected reason was that design optimised the active site for the transition state and ignored every other state of the catalytic cycle — so the site was pre-organised for one instant and disorganised for the rest.', zh: '設計酵素卡了十五年，而卡法很具體：它們能結合受質、完成單次轉換，但催化效率比天然酵素低好幾個數量級。懷疑的原因是：設計只為過渡態最佳化活性位，而忽略催化循環的其他所有狀態——所以那個位點只在某一瞬間是預組織好的，其餘時間都是散亂的。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'RFdiffusion builds backbones **outward from a DFT-optimised transition state**, so the active-site geometry is an input rather than a hope. Then **PLACER** — a stochastic side-chain ensemble predictor — generates ensembles for **all four states of the catalytic cycle**: apo, both tetrahedral intermediates, and the acyl-enzyme. Designs are filtered on pre-organisation *across the whole reaction coordinate*.', zh: 'RFdiffusion **從一個 DFT 最佳化的過渡態向外**建造主鏈，使活性位幾何成為輸入而不是期望。接著 **PLACER**——一個隨機側鏈集合預測器——為**催化循環的全部四個狀態**生成集合：apo、兩個四面體中間體、以及醯基—酵素中間體。設計是依「整條反應座標上的預組織程度」來篩選的。' }],
            [{ en: 'The funnel, and the effect of the filter', zh: '漏斗，以及篩選的效果' }, { en: 'PLACER filtering raised probe labelling from **3% to 17%**. In round three, 111 of 132 designs (84%) labelled, 20 (15%) hydrolysed the substrate, and **2 (1.5%) achieved genuine multiple turnover**. 812 designs were characterised in total. Note the shape: a very high rate of *something happening* and a very low rate of *the thing you wanted*.', zh: 'PLACER 篩選把探針標記率從 **3% 提升到 17%**。在第三輪中，132 個設計裡 111 個（84%）被標記、20 個（15%）水解受質，而 **2 個（1.5%）達成真正的多次轉換**。總共表徵了 812 個設計。注意這個形狀：*有事情發生*的比率很高，而*你想要的那件事*的比率很低。' }],
            [{ en: 'The number', zh: '那個數字' }, { en: 'Best design **momi120-103: k_cat 0.057 s⁻¹, K_M 0.26 mM, k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**, with an estimated >10⁸-fold deacylation rate enhancement — and **no directed evolution anywhere**. For context that is roughly three orders below acetylcholinesterase, but about **60× better than α-chymotrypsin and 360× better than subtilisin** on activated esters, and **60,000× better than the closest prior de novo design**. Six crystal structures, all under 1 Å Cα RMSD from their models, in five folds unlike any natural serine hydrolase.', zh: '最佳設計 **momi120-103：k_cat 0.057 s⁻¹、K_M 0.26 mM、k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**，去醯化速率提升估計 >10⁸ 倍——而且**全程沒有用定向演化**。作為對照，這比乙醯膽鹼酯酶低約三個數量級，但在活化酯上**比 α-胰凝乳蛋白酶好約 60 倍、比枯草桿菌蛋白酶好約 360 倍**，而且**比最接近的先前從頭設計好 60,000 倍**。六個晶體結構，全部與模型相距 1 Å Cα RMSD 以內，分布在五種與任何天然絲胺酸水解酶都不同的摺疊上。' }],
            [{ en: 'What it did NOT solve', zh: '它*沒有*解決什麼' }, { en: 'The remaining gap has a named structural cause: the designed oxyanion holes hydrogen-bond **in-plane** rather than perpendicular to the carbonyl, which the authors identify as a likely residual source of inefficiency. And the substrate is an activated ester, not an amide — amide-bond hydrolysis took another twenty months and two separate 2026 papers.', zh: '剩餘的差距有一個被指名的結構原因：設計出的氧陰離子洞是**在平面內**形成氫鍵，而不是垂直於羰基，作者認為這很可能是殘餘低效率的來源。而且受質是活化酯，不是醯胺——醯胺鍵水解又花了二十個月，以及 2026 年兩篇各自獨立的論文。' }]
          ]) +
            h.pdb({
              id: '9DEE',
              title: { en: 'A de novo serine hydrolase, "super" variant', zh: '從頭設計的絲胺酸水解酶，「super」變體' },
              sub: { en: 'One of six deposited structures from this campaign. Catalytic residues shown as sticks where present in the file.', zh: '本計畫六個沉積結構之一。檔案中若含催化殘基，以棒狀顯示。' },
              caption: { en: 'What you are looking at is an enzyme with no evolutionary ancestor. The scaffold was generated to hold a quantum-chemically specified active site, and it works.', zh: '你看到的是一個沒有演化祖先的酵素。它的骨架是為了容納一個由量子化學指定的活性位而生成的，而它真的能運作。' },
              style: 'chain', het: true
            })
        })
      });

      /* ================= CASE 9 ================= */
      out += h.sec({
        id: 'cs-9',
        body: h.caseCard({
          n: 9,
          h: { en: 'Designed nanoparticles → SKYCovione, and the honest arc of translation', zh: '設計奈米顆粒 → SKYCovione，以及轉譯的誠實軌跡' },
          sub: { en: 'I53-50 platform (King/Bale/Baker, 2014–16) → GBP510 → MFDS approval, 29 June 2022 · with NL-201 as the counter-case', zh: 'I53-50 平台（King/Bale/Baker，2014–16）→ GBP510 → 2022 年 6 月 29 日韓國 MFDS 核准 · 並以 NL-201 作為反面案例' },
          chips: [{ t: '2020–22', k: 'b' }, { t: { en: 'approved', zh: '已核准' }, k: 'g' }, { t: { en: 'then withdrawn', zh: '後來退出' }, k: 'r' }],
          body: h.kv([
            [{ en: 'Why this case', zh: '為什麼選這個案例' }, { en: 'It is the only designed protein to have been **approved by a regulator**, and its full arc — including what happened afterwards — teaches more than the approval alone.', zh: '它是唯一通過**監管機關核准**的設計蛋白，而它完整的軌跡——包括後來發生的事——比單看核准本身教的更多。' }],
              [{ en: 'What was designed', zh: '設計了什麼' }, { en: 'Not the antigen. The **scaffold**: I53-50, a designed two-component icosahedral nanoparticle, 28 nm across, 120 subunits, built from a designed trimer and a designed pentamer that assemble in vitro simply by mixing. It displays **60 copies of the SARS-CoV-2 receptor-binding domain** in a geometrically defined array. The design lineage runs straight back to the 2014 two-component cages and the 2016 megadalton icosahedra.', zh: '不是抗原，而是**支架**：I53-50，一個設計的雙組分二十面體奈米顆粒，直徑 28 nm、120 個次單元，由一個設計的三聚體與一個設計的五聚體組成，在體外只要混合就會自組裝。它以幾何上定義好的陣列展示 **60 份 SARS-CoV-2 受體結合區**。這條設計血統可以直接追回 2014 年的雙組分籠與 2016 年的百萬道爾頓二十面體。' }],
              [{ en: 'The result', zh: '成果' }, { en: '**10-fold higher neutralising titres than the prefusion spike trimer at a 5-fold lower dose.** Phase 3 in about 4,037 adults across six countries, immunobridged against ChAdOx1: **98.06% versus 87.30% seroconversion**, with roughly a 33-fold titre rise. **Approved by Korea\'s MFDS on 29 June 2022.**', zh: '**以 5 倍低的劑量，取得比前融合刺突三聚體高 10 倍的中和效價。** 第三期在六個國家約 4,037 名成人中進行，以 ChAdOx1 做免疫橋接：**血清轉換率 98.06% 對 87.30%**，效價上升約 33 倍。**2022 年 6 月 29 日經韓國 MFDS 核准。**' }],
              [{ en: 'What happened next', zh: '後來發生了什麼' }, { en: 'Production was **indefinitely suspended in November 2022 for lack of demand**, four months after approval. The European application was withdrawn in September 2023. The trial never produced a clinical *efficacy* figure — it was immunobridged, which is a legitimate regulatory route and a weaker evidentiary claim.', zh: '核准四個月後，**2022 年十一月因需求不足而無限期暫停生產**。歐洲的申請在 2023 年九月撤回。該試驗從未產生臨床*療效*數字——它走的是免疫橋接，這是合法的監管路徑，但在證據強度上較弱。' }],
              [{ en: 'The counter-case: NL-201', zh: '反面案例：NL-201' }, { en: 'Its parent molecule Neo-2/15 was a genuinely de novo IL-2 mimic with no topological relationship to the natural cytokine, no CD25 binding site, better anti-tumour activity in mice and undetectable immunogenicity — one of the most impressive design results of the 2010s. NL-201 completed Phase 1 and was **discontinued in Q3 2022 for strategic, not safety, reasons**, followed by 40% and then 70% layoffs at the company.', zh: '它的母分子 Neo-2/15 是一個真正從頭設計的 IL-2 模擬物，與天然細胞介素沒有拓樸關係、沒有 CD25 結合位、在小鼠中抗腫瘤活性更好、免疫原性偵測不到——是 2010 年代最令人印象深刻的設計成果之一。NL-201 完成第一期後，**於 2022 年第三季因策略（而非安全性）理由中止**，隨後公司裁員 40%，接著 70%。' }],
              [{ en: 'The lesson', zh: '教訓' }, { en: 'Designed proteins can clear the molecular bar, the manufacturing bar and the safety bar, and still be killed by market timing. When you read "the first AI-designed drug", check which bar is being claimed. As of November 2026 the pipeline consists of one Phase-1-completed-then-discontinued programme, one not-yet-recruiting Phase 1, and a designed-nanoparticle vaccine that entered Phase I/II in February 2026 — against roughly 90% Phase-1 attrition in general.', zh: '設計蛋白可以越過分子的門檻、製造的門檻與安全性的門檻，最後仍被市場時機殺死。當你讀到「第一款 AI 設計藥物」時，請確認它在宣稱哪一道門檻。截至 2026 年十一月，整條管線包括：一個完成第一期後中止的計畫、一個尚未開始收案的第一期，以及一個在 2026 年二月進入第一／二期的設計奈米顆粒疫苗——而一般第一期的淘汰率約為 90%。' }]
          ]) +
            h.bio('foldGallery', {
              title: { en: 'What de novo design has actually produced, by era', zh: '從頭設計實際造出了什麼，依時代' },
              sub: { en: 'The self-assembling cage in this gallery is the lineage that became an approved vaccine.', zh: '這組圖中的自組裝奈米籠，正是後來變成一款已核准疫苗的那條血統。' },
              caption: { en: 'Topology cartoons, not structures to scale. Years mark the first published design of each class.', zh: '拓樸示意圖，非等比例結構。年份標示各類別首次發表的設計。' }
            })
        })
      });

      /* ================= CASE 10 ================= */
      out += h.sec({
        id: 'cs-10',
        body: h.caseCard({
          n: 10,
          h: { en: 'ProGen2 → OpenCRISPR-1, a gene editor written by a language model', zh: 'ProGen2 → OpenCRISPR-1，由語言模型寫出的基因編輯器' },
          sub: { en: 'Ruffolo et al., preprint April 2024; *Nature* 645:518 (2025) · Profluent Bio', zh: 'Ruffolo 等人，2024 年 4 月預印本；*Nature* 645:518（2025）· Profluent Bio' },
          chips: [{ t: '2024–25', k: 'b' }, { t: { en: 'sequence-only design', zh: '純序列設計' }, k: 'v' }, { t: { en: 'models not released', zh: '模型未釋出' }, k: 'r' }],
          body: h.kv([
            [{ en: 'Why this case', zh: '為什麼選這個案例' }, { en: 'Every other case here designs *structure*. This one designs a **1,380-amino-acid functional machine from sequence alone**, with no structural objective anywhere in the pipeline — and it outperformed the natural protein it was modelled on.', zh: '本章其他每個案例設計的都是*結構*。這一個是**只從序列設計出一台 1,380 個胺基酸的功能機器**，流程中完全沒有結構目標——而且它的表現勝過它所依據的那個天然蛋白。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'ProGen2-base was fine-tuned on the **CRISPR-Cas Atlas: 1,246,163 operons mined from 26.2 terabases** of assembled microbial sequence — a dataset built for this purpose. A separate ~700,000-parameter model on a frozen ESM-2 encoder generated matching guide RNAs. 4 million sequences were generated, 209 tested in human cells, 48 characterised in detail.', zh: 'ProGen2-base 在 **CRISPR-Cas 圖譜：從 26.2 兆鹼基**組裝微生物序列中挖出的 **1,246,163 個操縱子**上做微調——這個資料集是為此目的而建的。另一個約 70 萬參數、架在凍結 ESM-2 編碼器上的模型則生成配對的引導 RNA。共生成 400 萬條序列，209 條在人類細胞中測試，48 條做了詳細表徵。' }],
            [{ en: 'The result', zh: '成果' }, { en: 'OpenCRISPR-1 is **71.7% identical to SpCas9** — roughly 403 mutations — and about 182 mutations from its nearest natural relative. **55.7% median on-target indels against 48.3% for SpCas9, with 0.32% versus 6.1% off-target: a ~95% reduction.** Paired with a base editor it gave 35–60% A-to-G conversion with no indels.', zh: 'OpenCRISPR-1 與 **SpCas9 有 71.7% 相同**——約 403 個突變——而距最近的天然親緣約 182 個突變。**標的內插入缺失中位數 55.7%，SpCas9 為 48.3%；脫靶 0.32% 對 6.1%，減少約 95%。** 與鹼基編輯器搭配時，可達 35–60% 的 A 轉 G，且無插入缺失。' }],
            [{ en: 'What it did NOT solve, and what the press got wrong', zh: '它*沒有*解決什麼，以及媒體錯在哪裡' }, { en: 'There is **no experimental structure** — the structural model is AlphaFold2 only. Testing was in HEK293T cells only. Off-target was measured at 15 sites, not genome-wide. Reduced immunogenicity was **predicted** from epitope absence, not measured. And press reports of "95% editing efficiency" **conflate the off-target reduction with on-target efficiency** — those are different numbers describing different things.', zh: '**沒有實驗結構**——結構模型只有 AlphaFold2。測試只在 HEK293T 細胞中進行。脫靶只在 15 個位點量測，不是全基因體。免疫原性降低是從「缺少抗原決定位」**預測**來的，不是量測來的。而媒體報導的「95% 編輯效率」**把脫靶降幅與標的內效率混為一談**——那是描述不同事情的不同數字。' }],
            [{ en: 'The openness asymmetry', zh: '開放性的不對稱' }, { en: 'The designed **sequences** were released under a bespoke free-use licence. The **generative models were never released.** This is the pattern the bottleneck chapter identifies as the 2026 trend: structure prediction is getting more open, function design is getting less open.', zh: '設計出的**序列**以一份自訂的免費使用授權釋出。**生成模型從未釋出。** 這正是「瓶頸分析」一章指出的 2026 年趨勢：結構預測越來越開放，功能設計越來越封閉。' }]
          ])
        })
      });

      /* ================= CASE 11 ================= */
      out += h.sec({
        id: 'cs-11',
        body: h.caseCard({
          n: 11,
          h: { en: 'RFantibody → the first de novo antibodies confirmed by structure', zh: 'RFantibody → 第一批經結構確認的從頭抗體' },
          sub: { en: 'Bennett et al., *Nature* 649:183 (online Nov 2025, issue Jan 2026) · Baker lab · the newest case here', zh: 'Bennett 等人，*Nature* 649:183（2025 年 11 月上線，2026 年 1 月出刊）· Baker 實驗室 · 本章最新的案例' },
          chips: [{ t: '2025–26', k: 'b' }, { t: { en: 'newest', zh: '最新' }, k: 'v' }, { t: 'MIT + weights', k: 'g' }, { t: { en: '~190 citations', zh: '約 190 次引用' } }],
          body: h.kv([
            [{ en: 'Why it is here', zh: '為什麼收錄它' }, { en: 'Antibodies are the commercially dominant protein format and the hardest de novo design target, because the functional part is six flexible loops and loops are what structure models model worst. This paper is both the most impressive accuracy claim in this chapter and the most honest about its hit rate.', zh: '抗體是商業上最主流的蛋白格式，也是最難的從頭設計標的，因為功能部位是六個柔性環，而「環」正是結構模型模得最差的東西。這篇論文既有本章最令人印象深刻的準確度宣稱，也是對自己命中率最誠實的一篇。' }],
            [{ en: 'What it does', zh: '它做什麼' }, { en: 'RFdiffusion fine-tuned on antibody complexes with the **framework held fixed**, so only the CDR loops and the rigid-body pose relative to the antigen are designed. The epitope is specified by hotspot residues. This is a deliberate narrowing: do not design the immunoglobulin fold, which evolution already solved, and spend the whole model capacity on the part that varies.', zh: '把 RFdiffusion 在抗體複合體上微調，並**固定框架區**，因此只設計 CDR 環與相對抗原的剛體姿態。抗原決定位以熱點殘基指定。這是刻意的收窄：不要去設計演化已經解決的免疫球蛋白摺疊，把全部模型容量花在會變的那部分。' }],
            [{ en: 'The accuracy result', zh: '準確度成果' }, { en: 'For one single-chain variable fragment against TcdB, a 3.6 Å cryo-EM structure matches the design across **all six CDR loops at 0.4 / 0.3 / 0.7 / 0.2 / 1.1 / 0.2 Å backbone RMSD**, composite 0.9 Å. That is the first structural confirmation that a model can place antibody loops where it intended.', zh: '對一個針對 TcdB 的單鏈可變片段，一個 3.6 Å 的冷凍電顯結構在**全部六個 CDR 環上以 0.4 / 0.3 / 0.7 / 0.2 / 1.1 / 0.2 Å 的主鏈 RMSD** 吻合設計，整體 0.9 Å。這是第一次以結構確認：模型真的能把抗體的環放在它想放的位置。' }],
            [{ en: 'The hit rate, reported honestly', zh: '誠實報告的命中率' }, { en: '**0–2%.** Nine thousand designs per target by yeast display, or about 95 by SPR; 28 VHHs confirmed. Initial affinities: haemagglutinin 78 nM, TcdB 262 nM, RSV site III 1.4 µM, SARS-CoV-2 RBD 5.5 µM. **Continuous evolution supplied the last two orders of magnitude** to single-digit nanomolar while preserving epitope selectivity.', zh: '**0–2%。** 以酵母展示法每標的九千個設計，或以 SPR 約 95 個；確認了 28 個 VHH。初始親和力：血凝素 78 nM、TcdB 262 nM、RSV site III 1.4 µM、SARS-CoV-2 RBD 5.5 µM。**最後兩個數量級由連續演化提供**，達到個位數奈莫耳，同時保有抗原決定位選擇性。' }],
            [{ en: 'Failures reported, which is rare', zh: '被報告出來的失敗，這很少見' }, { en: 'The SARS-CoV-2 VHH bound **in the wrong mode**. The PHOX2B single-chain fragments gave **no detectable CAR-T killing**. The designed CDRs are less human-like than therapeutic antibodies, which matters for developability. Glycan epitopes are unsupported. A paper that reports this much failure is doing the field a service.', zh: 'SARS-CoV-2 的 VHH 以**錯誤的模式結合**。PHOX2B 的單鏈片段**沒有可偵測的 CAR-T 殺傷**。設計出的 CDR 比治療用抗體更不像人類序列，這對可開發性有影響。聚醣抗原決定位不被支援。一篇報告這麼多失敗的論文，是在為這個領域服務。' }],
            [{ en: 'Where this sits in late 2026', zh: '它在 2026 年末的位置' }, { en: 'By mid-2026 an epitope-targeted method reported functional antibodies against **all four** of its targets from only **43–101 designs per antigen** at nanomolar affinities, with open code. But the blinded AIntibody benchmark in August found that affinity *ranking* within sequence clusters was **worse than random clone picking** for nearly every model. Generation improved fast. Ranking did not.', zh: '到 2026 年中，一個抗原決定位導向的方法報告：對**全部四個**標的都做出有功能的抗體，每個抗原只用 **43–101 個設計**，親和力達奈莫耳級，程式碼開源。但八月的盲測 AIntibody 基準發現，幾乎每個模型在序列叢集內的親和力*排序*都**比隨機挑菌落還差**。生成進步得很快。排序沒有。' }]
          ]) +
            h.pdb({
              id: '9NFU',
              title: { en: 'A de novo designed antibody in complex with its target', zh: '從頭設計的抗體與其標的形成的複合體' },
              sub: { en: 'From the 2025–26 de novo antibody work. Coloured by chain so the designed component and the antigen are distinguishable.', zh: '出自 2025–26 年的從頭抗體研究。依鏈著色，以便區分設計元件與抗原。' },
              caption: { en: 'The loops at the interface are the designed part. Everything else is a natural immunoglobulin framework, held fixed on purpose.', zh: '界面上的那些環就是被設計的部分。其餘全是天然免疫球蛋白框架，刻意被固定住。' },
              style: 'chain'
            })
        })
      });

      /* ---------- closing ---------- */
      out += h.sec({
        kick: { en: 'Across the eleven', zh: '綜觀十一個案例' },
        h2: { en: 'What the set tells you that no single case does', zh: '整組案例告訴你的事，單一案例說不出來' },
        body: h.cards([
          { chips: [{ t: '1', k: 'b' }], h: { en: 'The decisive component is usually small', zh: '決定性的元件通常很小' }, p: { en: 'ProteinMPNN has 1.7 million parameters and runs in a second. PLACER is a side-chain ensemble predictor, not a foundation model. BindCraft is a loss function and a loop around frozen weights someone else trained. The largest models in this chapter produced the most quotable results; the smallest produced the most *used* ones.', zh: 'ProteinMPNN 有 170 萬參數，一秒跑完。PLACER 是一個側鏈集合預測器，不是基礎模型。BindCraft 是一個損失函數，加上一個繞著別人訓練好的凍結權重跑的迴圈。本章最大的模型產出了最可引用的成果；最小的那些產出了最被*使用*的成果。' } },
          { chips: [{ t: '2', k: 'b' }], h: { en: 'Every strong result names its failures', zh: '每個強成果都會指名自己的失敗' }, p: { en: 'RFdiffusion reported 1 of 48 icosahedra. The serine hydrolases reported 2 of 132 with genuine turnover. RFantibody reported a binder in the wrong mode and a CAR-T with no killing. If a paper or a wiki gives you only successes, that is information about the paper, not about the method.', zh: 'RFdiffusion 報告了 48 個二十面體中只有 1 個成功。絲胺酸水解酶報告了 132 個中只有 2 個達成真正轉換。RFantibody 報告了一個以錯誤模式結合的結合蛋白，以及一個沒有殺傷力的 CAR-T。如果一篇論文或一個 wiki 只給你成功，那是關於那篇論文的資訊，不是關於那個方法的資訊。' } },
          { chips: [{ t: '3', k: 'b' }], h: { en: 'Directed evolution is still load-bearing', zh: '定向演化仍然承重' }, p: { en: 'The antibodies needed continuous evolution for their last two orders of magnitude. The 2008 Kemp eliminase needed it for 200-fold. A 2026 *Nature* paper showed that AI-redesigned starting points **evolve better** than wild type. Design gets you into the basin; evolution climbs it. Any plan that treats design as a replacement for evolution is planning against the evidence.', zh: '那些抗體的最後兩個數量級需要連續演化。2008 年的 Kemp 消去酶需要它來取得 200 倍。2026 年一篇《自然》論文顯示，經 AI 重新設計的起點**比野生型更會演化**。設計把你帶進能量盆地；演化往上爬。任何把設計當成演化替代品的計畫，都是在跟證據對做。' } },
          { chips: [{ t: '4', k: 'b' }], h: { en: 'Open beats closed on a six-month lag', zh: '開放以六個月的落後追上封閉' }, p: { en: 'AlphaFold3\'s gated weights produced Boltz-1 under MIT in nine days and four reimplementations in six months. A closed 2026 engine produced an Apache-2.0 equivalent in five. Of the eleven cases here, the ones a student team can actually run — ProteinMPNN, RFdiffusion, BindCraft, RFantibody, Boltz — are all open, all MIT or BSD or Apache, and all include weights.', zh: 'AlphaFold3 受限的權重在九天內催生了 MIT 授權的 Boltz-1，六個月內催生四個重建版本。2026 年一個閉源引擎在五個月內催生出 Apache-2.0 的等價物。本章十一個案例中，學生團隊真正能跑的那些——ProteinMPNN、RFdiffusion、BindCraft、RFantibody、Boltz——全部開放，全部是 MIT、BSD 或 Apache，而且全部含權重。' } }
        ], 'g2') +
          h.note({
            en: '**Structures we deliberately do not show:** no experimental structure exists for esmGFP, for the de novo luciferase LuxSit, or for OpenCRISPR-1. Where a paper could not produce a structure, this chapter says so rather than substituting a model rendering.',
            zh: '**我們刻意不展示的結構：** esmGFP、從頭設計螢光酶 LuxSit，以及 OpenCRISPR-1 都沒有實驗結構。凡論文無法給出結構者，本章就直說，而不是拿模型的渲染圖替代。'
          })
      });

      return out;
    }
  };
})(window);
