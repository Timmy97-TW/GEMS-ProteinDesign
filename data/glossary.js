(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  PD.pages.glossary = {
    label: { en: 'Metrics & Terms', zh: '指標與術語' },
    title: { en: 'Metrics & Terms', zh: '指標與術語' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Extra chapter · How to read the numbers', zh: '加頁 · 如何讀懂這些數字' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Every number in this field is a ==proxy== for something else.',
          zh: '這個領域裡的每一個數字，都是==某個別的東西==的代理指標。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'pLDDT is not accuracy. ipTM is not affinity. A self-consistency RMSD of 1.5 Å is not a working protein. This chapter decodes the metrics you will meet in every paper and on every wiki, says what each one actually measures, and names the trap attached to it. It closes with a reading checklist and a bilingual glossary.',
          zh: 'pLDDT 不是準確度。ipTM 不是親和力。自洽 RMSD 1.5 Å 不等於一個能用的蛋白質。本章拆解你在每篇論文、每個 wiki 上都會遇到的指標，說明它實際量的是什麼，並點出隨之而來的陷阱。最後附上一份讀論文檢查表與中英對照術語表。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'g-conf', t: { en: 'Confidence metrics', zh: '信賴度指標' } },
        { id: 'g-struct', t: { en: 'Structural accuracy', zh: '結構準確度' } },
        { id: 'g-gen', t: { en: 'Generative-design metrics', zh: '生成設計指標' } },
        { id: 'g-func', t: { en: 'Function & binding', zh: '功能與結合' } },
        { id: 'g-traps', t: { en: 'The six traps', zh: '六個陷阱' } },
        { id: 'g-read', t: { en: 'Reading checklist', zh: '讀論文檢查表' } },
        { id: 'g-gloss', t: { en: 'Glossary', zh: '術語表' } }
      ]);

      /* ---------- confidence metrics ---------- */
      out += h.sec({
        id: 'g-conf',
        kick: { en: 'Confidence metrics', zh: '信賴度指標' },
        h2: { en: 'What the model thinks of its own answer', zh: '模型對自己答案的看法' },
        lede: {
          en: 'These are self-reported. They are calibrated against the training distribution, which means they are informative about familiar problems and silent about unfamiliar ones — and a designed protein is, by construction, unfamiliar.',
          zh: '這些都是模型自評。它們是針對訓練分布校準的——也就是說，對熟悉的問題有資訊量，對陌生的問題則沉默；而一個設計出來的蛋白質，從定義上就是陌生的。'
        },
        body:
          h.tbl({
            min: 860,
            cols: [
              { t: { en: 'Metric', zh: '指標' }, w: '15%' },
              { t: { en: 'Range', zh: '範圍' }, w: '10%' },
              { t: { en: 'What it literally is', zh: '它字面上是什麼' } },
              { t: { en: 'Rule of thumb', zh: '經驗判準' }, w: '20%' },
              { t: { en: 'The trap', zh: '陷阱' } }
            ],
            rows: [
              ['**pLDDT**', '0–100', {
                en: 'Predicted local-distance difference test, per residue. The model\'s estimate of how well the local environment of that residue would score against the true structure.',
                zh: '預測的局部距離差異測試，逐殘基給分。模型估計該殘基的局部環境與真實結構比對時能得多少分。'
              }, {
                en: '>90 confident backbone; 70–90 roughly right; <50 often means disordered or "no idea".',
                zh: '>90 主鏈可信；70–90 大致正確；<50 通常代表無序區或「不知道」。'
              }, {
                en: 'It is a **local** measure. A protein can be 95 everywhere and still have the two domains in the wrong relative position. It also says nothing about solubility or expression.',
                zh: '它是**局部**指標。一個蛋白可以處處 95，兩個結構域的相對位置卻完全錯誤。它也完全不涉及可溶性或可表達性。'
              }],
              ['**PAE / PAE matrix**', '0–~32 Å', {
                en: 'Predicted aligned error: for residue pair (i, j), the expected error in the position of j if you align on i. The off-diagonal blocks are the ones that matter.',
                zh: '預測對位誤差：對殘基對 (i, j)，若以 i 對齊時 j 位置的期望誤差。真正重要的是非對角線的區塊。'
              }, {
                en: 'Low off-diagonal block between two chains = the model believes the relative orientation.',
                zh: '兩條鏈之間的非對角線區塊低 = 模型相信它們的相對方位。'
              }, {
                en: 'Usually read as a picture and never quantified, so it rarely enters a paper as a number you can compare.',
                zh: '通常只被當成圖來看、不被量化，因此很少以可比較的數字進入論文。'
              }],
              ['**pTM**', '0–1', {
                en: 'Predicted TM-score for the whole complex — a global fold-level confidence.',
                zh: '對整個複合體預測的 TM-score——全域摺疊層級的信賴度。'
              }, {
                en: '>0.5 same fold; >0.8 confident.',
                zh: '>0.5 同一摺疊；>0.8 可信。'
              }, {
                en: 'Dominated by the largest chain. A big, confident target with a wrongly-placed small binder still scores well.',
                zh: '被最大的那條鏈主導。一個龐大而可信的標的配上放錯位置的小結合蛋白，分數依然漂亮。'
              }],
              ['**ipTM**', '0–1', {
                en: 'Interface pTM — pTM restricted to inter-chain residue pairs. The headline number for "is this complex real?"',
                zh: '界面 pTM——只取跨鏈殘基對的 pTM。「這個複合體是真的嗎」的招牌數字。'
              }, {
                en: 'Commonly >0.8 treated as a confident interface; <0.6 usually discarded.',
                zh: '一般 >0.8 視為可信界面；<0.6 通常捨棄。'
              }, {
                en: '**The most over-trusted number in the field.** One measured iGEM dataset found ipTM ranked wet-lab binders with Kendall τ ≈ −0.20 — worse than random ordering. It is a *plausibility* filter, not a *ranking* function.',
                zh: '**本領域最被過度信任的數字。** 一份實測的 iGEM 資料集發現 ipTM 對實驗結合能力的排序 Kendall τ ≈ −0.20——比隨機排序還差。它是*合理性*篩選器，不是*排序*函數。'
              }],
              ['**PLDDT-PLI / LDDT-PLI**', '0–1', {
                en: 'Protein–ligand interface LDDT: how well the predicted contacts between a protein and its small-molecule ligand match the experiment.',
                zh: '蛋白—配體界面 LDDT：預測的蛋白與小分子配體接觸，與實驗吻合的程度。'
              }, {
                en: 'The standard metric for all-atom models since AlphaFold3.',
                zh: 'AlphaFold3 之後，全原子模型的標準指標。'
              }, {
                en: 'Measures **pose geometry**, not binding strength. A perfect pose tells you nothing about whether the ligand binds tightly.',
                zh: '量的是**姿態幾何**，不是結合強度。完美的姿態完全無法告訴你配體結合得緊不緊。'
              }]
            ]
          }) +
          h.warn({
            en: '**The one-line version:** confidence metrics are good at saying *"this is not a protein"* and bad at saying *"this is the best protein"*. Use them to discard, never to rank.',
            zh: '**一句話版本：** 信賴度指標擅長說「這不是個蛋白質」，不擅長說「這是最好的蛋白質」。用它們來淘汰，絕不要用來排名。'
          })
      });

      /* ---------- structural accuracy ---------- */
      out += h.sec({
        id: 'g-struct',
        kick: { en: 'Structural accuracy', zh: '結構準確度' },
        h2: { en: 'How right a structure actually is', zh: '一個結構到底對不對' },
        lede: {
          en: 'These require a ground truth — a crystal, cryo-EM or NMR structure. They are the metrics of structure *prediction*; most design papers never get to use them, because nobody solved the structure of the design.',
          zh: '這些需要一個標準答案——晶體、冷凍電顯或核磁共振結構。它們是結構*預測*的指標；大多數設計論文從來用不上，因為沒有人去解那個設計的結構。'
        },
        body:
          h.cards([
            {
              chips: [{ t: 'Å', k: 'b' }],
              h: { en: 'RMSD', zh: 'RMSD（均方根偏差）' },
              p: {
                en: 'Root-mean-square deviation after optimal superposition, in ångströms. Lower is better. Sensitive to length and to a single badly-placed loop, which can wreck an otherwise perfect model. Usually quoted over Cα atoms or over the backbone.',
                zh: '最佳疊合後的均方根偏差，單位埃。越低越好。對長度敏感，也對單一放錯的環敏感——一個環就能毀掉一個其餘完美的模型。通常以 Cα 原子或主鏈計算。'
              }
            },
            {
              chips: [{ t: '0–1', k: 'b' }],
              h: { en: 'TM-score', zh: 'TM-score' },
              p: {
                en: 'Length-normalised structural similarity. Above 0.5 means the same fold; above 0.9 means essentially identical. Designed to be robust to the single-bad-loop problem that distorts RMSD.',
                zh: '經長度正規化的結構相似度。>0.5 代表同一摺疊；>0.9 代表基本相同。設計上就是為了抵抗會扭曲 RMSD 的「單一壞環」問題。'
              }
            },
            {
              chips: [{ t: '0–100', k: 'b' }],
              h: { en: 'GDT_TS', zh: 'GDT_TS' },
              p: {
                en: 'Global distance test, total score — the historical CASP metric. The share of residues within a set of distance cut-offs of the true position, averaged. AlphaFold2 at CASP14 posted a median of 92.4 across assessed domains, around 87 in the hardest free-modelling category.',
                zh: '全域距離測試總分——CASP 的歷史指標。落在一組距離門檻內的殘基比例取平均。AlphaFold2 在 CASP14 的中位數為 92.4，最難的自由建模類別約 87。'
              }
            },
            {
              chips: [{ t: { en: 'resolution', zh: '解析度' }, k: 'g' }],
              h: { en: 'Å resolution, in experiment', zh: '實驗的 Å 解析度' },
              p: {
                en: 'In crystallography and cryo-EM, resolution is a property of the *data*, not of a comparison. 1.2 Å is near-atomic; 3.5 Å shows backbone and bulky side chains; above 4 Å you are fitting a model into a shape. Do not compare a prediction\'s RMSD with an experiment\'s resolution — they are different quantities.',
                zh: '在晶體學與冷凍電顯中，解析度是*資料*的性質，不是比較的結果。1.2 Å 近乎原子級；3.5 Å 可見主鏈與大側鏈；超過 4 Å 就是把模型塞進一團形狀裡。不要把預測的 RMSD 和實驗的解析度相比——它們是不同的量。'
              }
            }
          ], 'g2')
      });

      /* ---------- generative metrics ---------- */
      out += h.sec({
        id: 'g-gen',
        kick: { en: 'Generative-design metrics', zh: '生成設計指標' },
        h2: { en: 'The three numbers every backbone-generation paper reports', zh: '每篇主鏈生成論文都會報的三個數字' },
        lede: {
          en: 'Designability, novelty and diversity form the standard triad. They are all computed *in silico*, they trade off against each other, and a model can be tuned to win any one of them at the cost of the others.',
          zh: '可設計性、新穎性、多樣性是標準三件組。它們全部在電腦內計算，彼此互相拉扯；一個模型可以被調整到在任一項上勝出，代價是另外兩項。'
        },
        body:
          h.bio('filterGap', {
            title: { en: 'The in-silico filter and the thing it is a proxy for', zh: '電腦端篩選，以及它所代理的那件事' },
            sub: {
              en: 'Self-consistency pipelines ask whether a structure predictor agrees with the designer. That is a test of internal coherence, not of reality.',
              zh: '自洽流程問的是「結構預測器是否同意設計器」。那是內部一致性的檢驗，不是現實的檢驗。'
            },
            caption: {
              en: 'The left-hand column illustrates the shape of a typical filter stack; the specific percentages are illustrative, not drawn from any single paper.',
              zh: '左欄用於說明典型篩選流程的形狀；具體百分比僅為示意，並非引用任一篇論文。'
            }
          }) +
          h.tbl({
            min: 820,
            cols: [
              { t: { en: 'Metric', zh: '指標' }, w: '16%' },
              { t: { en: 'How it is computed', zh: '如何計算' } },
              { t: { en: 'What it is a proxy for', zh: '它代理的是什麼' }, w: '22%' },
              { t: { en: 'How it is gamed', zh: '它怎麼被鑽漏洞' } }
            ],
            rows: [
              ['**Designability** / **self-consistency**', {
                en: 'Generate a backbone → design a sequence for it with ProteinMPNN → predict that sequence\'s structure with AF2/ESMFold → measure RMSD back to the generated backbone (**scRMSD**) or TM-score (**scTM**). Pass if scRMSD < 2 Å, typically best-of-8 sequences.',
                zh: '生成主鏈 → 用 ProteinMPNN 為它設計序列 → 用 AF2/ESMFold 預測該序列的結構 → 量測回到原主鏈的 RMSD（**scRMSD**）或 TM-score（**scTM**）。通常取 8 條序列中最佳，scRMSD < 2 Å 即通過。'
              }, {
                en: '"Does this backbone correspond to any sequence at all?"',
                zh: '「這個主鏈到底對應得上任何序列嗎？」'
              }, {
                en: 'The 2 Å threshold is **length-confounded** — short proteins pass more easily. scTM and scRMSD disagree with each other. And the whole loop can be satisfied by generating idealised, boring, AF2-friendly folds.',
                zh: '2 Å 門檻與**長度混淆**——短蛋白更容易通過。scTM 與 scRMSD 彼此不一致。而且整個迴圈可以靠生成理想化、乏味、對 AF2 友善的摺疊來滿足。'
              }],
              ['**Novelty**', {
                en: 'Highest TM-score to anything in the PDB (lower = more novel), via Foldseek or TM-align.',
                zh: '對 PDB 中任何結構的最高 TM-score（越低越新穎），以 Foldseek 或 TM-align 計算。'
              }, {
                en: '"Did the model invent something, or recite?"',
                zh: '「模型是發明了東西，還是在背誦？」'
              }, {
                en: 'Novelty scores **inflate as the reference set grows**, and a novel fold is not a useful fold — the least natural structures are often the least expressible.',
                zh: '新穎性分數會**隨參考資料集增大而膨脹**；而且新穎的摺疊不等於有用的摺疊——最不自然的結構常常最難表達。'
              }],
              ['**Diversity**', {
                en: 'Average pairwise TM-score within a generated set, or the number of distinct structural clusters.',
                zh: '生成集合內的平均兩兩 TM-score，或相異結構叢集的數量。'
              }, {
                en: '"Is the model mode-collapsed?"',
                zh: '「模型是否模式崩潌（只會生一種）？」'
              }, {
                en: 'Almost always reported **conditioned on designability**, which hides the trade-off: turn the sampling temperature up and diversity rises while designability falls.',
                zh: '幾乎總是在**以可設計性為條件**下報告，這掩蓋了取捨：把採樣溫度調高，多樣性上升、可設計性下降。'
              }],
              ['**Experimental success rate**', {
                en: 'Designs that worked ÷ designs ordered and tested. The only metric with no proxy problem.',
                zh: '成功的設計數 ÷ 訂購並測試的設計數。唯一沒有代理問題的指標。'
              }, {
                en: 'Nothing. It is the thing itself.',
                zh: '沒有代理。它就是本體。'
              }, {
                en: 'By **choosing the denominator**. "Success rate" after an undisclosed filtering step is not a success rate. Always ask: how many backbones were generated before the ones you ordered?',
                zh: '靠**選擇分母**。經過未揭露的篩選步驟後的「成功率」不是成功率。永遠要問：在你訂購的那些之前，總共生成了幾條主鏈？'
              }]
            ]
          })
      });

      /* ---------- function & binding ---------- */
      out += h.sec({
        id: 'g-func',
        kick: { en: 'Function & binding', zh: '功能與結合' },
        h2: { en: 'The numbers that decide whether it is a molecule or a model', zh: '決定它是分子還是模型的那些數字' },
        body:
          h.tbl({
            min: 780,
            cols: [
              { t: { en: 'Quantity', zh: '量' }, w: '16%' },
              { t: { en: 'Units', zh: '單位' }, w: '12%' },
              { t: { en: 'Meaning, and the scale you should carry in your head', zh: '意義，以及你腦中該有的尺度感' } }
            ],
            rows: [
              ['**K_D**', 'M (often nM, µM)', {
                en: 'Equilibrium dissociation constant — lower is tighter. mM = essentially non-binding; µM = weak but real; 1–100 nM = a good binder; pM = antibody-grade. A de novo designed binder landing at 10–100 nM is a genuine result; landing at 10 µM is a starting point.',
                zh: '平衡解離常數——越低結合越緊。mM 基本上等於不結合；µM = 弱但真實；1–100 nM = 好的結合蛋白；pM = 抗體級。從頭設計的結合蛋白落在 10–100 nM 是真成果；落在 10 µM 是一個起點。'
              }],
              ['**k_cat**', 's⁻¹', {
                en: 'Turnover number — how many substrate molecules one enzyme molecule converts per second. Natural enzymes span ~0.1 to >10⁴.',
                zh: '轉換數——一個酵素分子每秒轉換多少受質分子。天然酵素範圍約 0.1 到 >10⁴。'
              }],
              ['**k_cat/K_M**', 'M⁻¹s⁻¹', {
                en: '**Catalytic efficiency — the single most important number in enzyme design.** A diffusion-limited natural enzyme reaches ~10⁸–10⁹. De novo designed enzymes have historically sat 3–6 orders of magnitude below that; closing this gap is the field\'s open problem (see the Bottlenecks chapter).',
                zh: '**催化效率——酵素設計中最重要的單一數字。** 受擴散限制的天然酵素可達約 10⁸–10⁹。從頭設計的酵素歷來比它低 3–6 個數量級；填平這道差距是本領域的未解問題（見「瓶頸分析」一章）。'
              }],
              ['**Rate enhancement** (k_cat/k_uncat)', '×', {
                en: 'How much faster the catalysed reaction runs than the uncatalysed one. A designed enzyme can show a large rate enhancement and still have terrible absolute efficiency — the two are different claims.',
                zh: '被催化的反應比未催化快多少倍。一個設計酵素可以有很大的速率提升，絕對效率卻仍然糟糕——這是兩個不同的主張。'
              }],
              ['**T_m**', '°C', {
                en: 'Melting temperature — the midpoint of thermal unfolding, usually from a differential-scanning-fluorimetry (thermal shift) assay. Designed proteins are famously *hyperstable*, often >90 °C, which is a symptom of over-optimised hydrophobic cores rather than a triumph.',
                zh: '熔點——熱變性的中點，通常以差示掃描螢光法（熱位移分析）測得。設計蛋白出名地*超穩定*，常 >90 °C；這是疏水核過度最佳化的症狀，而不是勝利。'
              }],
              ['**Expression / solubility**', '%', {
                en: 'The share of designs that come out of the cell as soluble protein at all. This, not binding, is what kills most design campaigns: in published collections the soluble-expression gate removes the majority of designs, and **no confidence metric predicts it**.',
                zh: '有多少比例的設計能以可溶蛋白的形式離開細胞。殺死大多數設計活動的是這一關，而不是結合：在已發表的設計集合中，可溶表達這一關會刷掉大多數設計，而且**沒有任何信賴度指標能預測它**。'
              }]
            ]
          }) +
          h.take({
            en: 'Order of operations for reading any design result',
            zh: '讀任何設計成果的優先順序'
          }, {
            en: 'How many were made → how many expressed solubly → how many showed the function → how strong was it → was a structure solved. A paper that skips straight from "we generated 10,000 designs" to "our best binder is 2 nM" has hidden the two steps that matter.',
            zh: '做了幾個 → 幾個能可溶表達 → 幾個展現了功能 → 強度多少 → 有沒有解出結構。一篇從「我們生成了一萬個設計」直接跳到「我們最好的結合蛋白是 2 nM」的論文，藏起了最重要的兩步。'
          })
      });

      /* ---------- traps ---------- */
      out += h.sec({
        id: 'g-traps',
        kick: { en: 'The six traps', zh: '六個陷阱' },
        h2: { en: 'Mistakes that are easy to make and expensive to fix', zh: '很容易犯、很貴才能修的錯' },
        body: h.cards([
          {
            chips: [{ t: '1', k: 'r' }],
            h: { en: 'Confidence as ranking', zh: '把信賴度當排序' },
            p: {
              en: 'Using pLDDT or ipTM to choose which five designs to order. These metrics were trained to describe natural proteins; on designed ones they are weakly, sometimes negatively, correlated with experimental outcome. Use them as a floor, then rank on something physical.',
              zh: '用 pLDDT 或 ipTM 決定要訂哪五個設計。這些指標是為描述天然蛋白而訓練的；用在設計蛋白上，它們與實驗結果只有微弱、有時甚至是負的相關。把它們當下限，然後用物理性的東西來排序。'
            }
          },
          {
            chips: [{ t: '2', k: 'r' }],
            h: { en: 'The hidden denominator', zh: '被藏起來的分母' },
            p: {
              en: 'A 40% hit rate after filtering 10,000 backbones down to 20 is a 0.08% hit rate. Both numbers are true; only one is honest. Report the whole funnel.',
              zh: '把一萬條主鏈篩到二十條之後的 40% 命中率，其實是 0.08% 的命中率。兩個數字都成立，但只有一個誠實。把整個漏斗報出來。'
            }
          },
          {
            chips: [{ t: '3', k: 'r' }],
            h: { en: 'Benchmark leakage', zh: '基準測試洩漏' },
            p: {
              en: 'Evaluating a model on structures that were in its training set. For protein models this is subtle: a 2021-cutoff model tested on a "2024 holdout" can still have seen close homologues. Sequence-identity-based splits are the minimum; time-based splits are better.',
              zh: '用模型訓練集中的結構來評估它。對蛋白模型來說這很微妙：一個資料截止於 2021 的模型，在「2024 保留集」上測試，仍可能見過高度同源物。以序列相似度切分是最低標準；以時間切分更好。'
            }
          },
          {
            chips: [{ t: '4', k: 'a' }],
            h: { en: 'Publication bias', zh: '發表偏差' },
            p: {
              en: 'The literature records designs that worked. One 2026 meta-analysis of de novo monomer designs had to exclude every design with no reported experimental outcome — the failures are simply not written down, which makes every aggregate hit rate an overestimate.',
              zh: '文獻只記錄成功的設計。一份 2026 年針對從頭設計單體的綜合分析，必須排除所有未報告實驗結果的設計——失敗根本沒被寫下來，這使得任何彙總命中率都是高估。'
            }
          },
          {
            chips: [{ t: '5', k: 'a' }],
            h: { en: 'Geometry mistaken for energetics', zh: '把幾何誤認為能量' },
            p: {
              en: 'Predicting where a ligand sits is now routine; predicting how tightly it binds is not. Pose accuracy (LDDT-PLI) and affinity prediction are different problems with very different maturity, and conflating them is the most common error in 2026 drug-discovery claims.',
              zh: '預測配體坐在哪裡現在已是常規；預測它結合得多緊則不是。姿態準確度（LDDT-PLI）與親和力預測是成熟度差距極大的兩個問題，把它們混為一談是 2026 年藥物發現主張中最常見的錯誤。'
            }
          },
          {
            chips: [{ t: '6', k: 'a' }],
            h: { en: 'The static-structure assumption', zh: '靜態結構假設' },
            p: {
              en: 'A single predicted structure is a single conformation. Multiple random seeds do **not** give you a thermodynamic ensemble — the AlphaFold3 paper says so explicitly. Any claim about allostery, dynamics or conformational change needs a method built for it.',
              zh: '單一預測結構就是單一構型。多個隨機種子**不會**給你熱力學集合——AlphaFold3 的論文明確這樣說。任何關於別位調控、動力學或構型變化的主張，都需要為此設計的方法。'
            }
          }
        ], 'g3')
      });

      /* ---------- reading checklist ---------- */
      out += h.sec({
        id: 'g-read',
        kick: { en: 'Reading checklist', zh: '讀論文檢查表' },
        h2: { en: 'Nine questions to ask a protein-design paper', zh: '向一篇蛋白質設計論文提的九個問題' },
        lede: {
          en: 'Work down the list. A strong paper answers all nine in the main text; a weak one answers three and puts the rest in a supplementary file, or nowhere.',
          zh: '照順序往下問。好論文會在正文回答全部九個；弱論文回答三個，其餘放在補充資料裡，或根本沒有。'
        },
        body: h.ul([
          { en: '**How many designs were generated, and how many were ordered?** The ratio is the real story.', zh: '**生成了幾個設計，訂購了幾個？** 這個比例才是真正的故事。' },
          { en: '**What filtered between those two numbers, and in what order?** Each filter has its own false-negative rate, and nobody measures them.', zh: '**在這兩個數字之間，用了什麼篩選、順序為何？** 每個篩選器都有自己的偽陰性率，而沒有人去量它。' },
          { en: '**How many expressed solubly?** If this is missing, the success rate is not interpretable.', zh: '**有幾個能可溶表達？** 少了這個數字，成功率就無法解讀。' },
          { en: '**What is the strongest result, and what is the median result?** A single excellent design and a population of good designs are different achievements.', zh: '**最強的結果是什麼，中位數的結果是什麼？** 一個極佳的設計，和一群不錯的設計，是兩種不同的成就。' },
          { en: '**Was any structure solved experimentally?** Crystal, cryo-EM or NMR agreement with the model is the field\'s gold standard and is increasingly skipped.', zh: '**有任何結構被實驗解出嗎？** 晶體、冷凍電顯或核磁與模型的一致性是本領域的黃金標準，而且越來越常被略過。' },
          { en: '**Did the designed thing need directed evolution afterwards?** Many headline affinities and efficiencies are post-maturation numbers. That is legitimate — but it is a different claim about what design can do.', zh: '**設計出來的東西事後需要定向演化嗎？** 許多招牌親和力與效率都是成熟化之後的數字。這沒問題——但它對「設計能做什麼」是一個不同的主張。' },
          { en: '**Are the weights and code actually available, under what licence?** "Open" covers everything from MIT to "weights on request at our sole discretion".', zh: '**權重與程式碼真的可取得嗎，用什麼授權？**「開放」涵蓋了從 MIT 到「權重依我們全權裁量提供」的一切。' },
          { en: '**What was the compute cost?** A method needing 200 GPU-hours per target is a different tool from one needing 20 minutes, even if the success rates match.', zh: '**計算成本多少？** 每個標的需要 200 GPU 小時的方法，和需要 20 分鐘的方法，即使成功率相同也是不同的工具。' },
          { en: '**Which targets failed?** A paper that reports seven successes and no failures has told you nothing about designability.', zh: '**哪些標的失敗了？** 一篇報告七個成功、零個失敗的論文，完全沒有告訴你任何關於「可設計性」的資訊。' }
        ], true) +
          h.take({ en: 'The GEMS rule', zh: 'GEMS 規則' }, {
            en: 'No computational figure enters a wiki or a report unless its caption states **what decision it changed**. If the opposite result would have changed nothing, the figure is decoration — move it to the supplementary material.',
            zh: '任何計算圖表要進 wiki 或報告，圖說必須寫出**它改變了什麼決定**。如果相反的結果什麼也不會改變，那張圖就只是裝飾——移到補充資料去。'
          })
      });

      /* ---------- glossary ---------- */
      var G = [
        ['De novo design', '從頭設計', { en: 'Specifying a sequence for a structure that is not taken from an existing protein. Distinct from protein *engineering*, which modifies a natural protein.', zh: '為一個並非取自既有蛋白的結構指定序列。與修改天然蛋白的蛋白質*工程*不同。' }],
        ['Inverse folding', '反向摺疊', { en: 'Given a backbone, find a sequence that folds to it. The core task ProteinMPNN solves.', zh: '給定主鏈，找出能摺成它的序列。ProteinMPNN 解決的核心任務。' }],
        ['Motif scaffolding', '模組支架化', { en: 'Holding a functional motif (a binding epitope, a catalytic triad) fixed and building a new protein around it. The single most useful capability of diffusion models.', zh: '固定一個功能模組（結合抗原決定位、催化三元體），並在它周圍建造一個新蛋白。擴散模型最有用的單一能力。' }],
        ['Hallucination', '幻化設計', { en: 'Design by inverting a structure predictor: optimise a sequence until the predictor is confident about it. The 2020–2022 generative method, superseded by diffusion.', zh: '透過反轉結構預測器來設計：持續最佳化序列，直到預測器對它有信心。2020–2022 年的生成方法，已被擴散取代。' }],
        ['Diffusion model', '擴散模型', { en: 'A generative model trained to remove noise. Run in reverse from pure noise, it produces new structures. RFdiffusion is the canonical protein example.', zh: '訓練來去除噪聲的生成模型。從純噪聲反向執行，就能產生新結構。RFdiffusion 是蛋白質領域的代表。' }],
        ['Flow matching', '流匹配', { en: 'A generative framework closely related to diffusion but learning a direct velocity field between distributions. Faster sampling; it largely displaced plain diffusion in 2024–2025 backbone generators.', zh: '與擴散高度相關的生成框架，但學習分布之間的直接速度場。採樣更快；在 2024–2025 年的主鏈生成器中大致取代了純擴散。' }],
        ['MSA', '多序列比對', { en: 'Multiple sequence alignment. Stacking homologous sequences reveals co-varying residue pairs, which imply spatial contacts. The information source behind AlphaFold2; AlphaFold3 and single-sequence models lean on it far less.', zh: '多序列比對。把同源序列疊起來，可看出共變異的殘基對，暗示空間上的接觸。AlphaFold2 背後的資訊來源；AlphaFold3 與單序列模型對它的依賴少得多。' }],
        ['pLM', '蛋白質語言模型', { en: 'Protein language model. A transformer trained on raw sequences, usually by masked-token prediction. ESM is the best-known family.', zh: '蛋白質語言模型。以原始序列訓練的 transformer，通常用遮罩字元預測。ESM 是最知名的家族。' }],
        ['Zero-shot fitness prediction', '零樣本適應度預測', { en: 'Ranking mutations by a model\'s likelihood, with no assay data for that protein. Surprisingly competitive, and the cheapest useful thing a pLM does.', zh: '用模型的似然度為突變排序，完全不使用該蛋白的實驗資料。效果意外地有競爭力，也是蛋白質語言模型最便宜的有用功能。' }],
        ['Theozyme', '理論酵素', { en: 'A quantum-chemically optimised arrangement of catalytic groups around a transition state — an active site with no protein around it yet. Step one of classical enzyme design.', zh: '以量子化學最佳化的催化基團幾何排列，圍繞著過渡態——一個還沒有蛋白包著的活性位。古典酵素設計的第一步。' }],
        ['Rotamer', '旋轉異構物', { en: 'A discrete, statistically favoured side-chain conformation. Discretising side chains into rotamers is what made design a finite combinatorial problem (Ponder & Richards, 1987).', zh: '離散、統計上偏好的側鏈構型。把側鏈離散化為旋轉異構物，是讓設計變成有限組合問題的關鍵（Ponder & Richards, 1987）。' }],
        ['Hotspot residue', '熱點殘基', { en: 'A residue contributing disproportionately to binding energy at an interface. Binder design pipelines take hotspots on the target as their anchor.', zh: '在界面上對結合能貢獻不成比例的殘基。結合蛋白設計流程以標的上的熱點為錨點。' }],
        ['Epitope', '抗原決定位', { en: 'The specific patch of a target that a binder or antibody recognises. "Epitope-specified design" means you choose the patch in advance rather than taking whatever the selection gives you.', zh: '結合蛋白或抗體所識別的標的上特定區塊。「指定抗原決定位的設計」意味著你事先選定區塊，而不是接受篩選給你的任何結果。' }],
        ['Miniprotein / mini-binder', '迷你蛋白／迷你結合蛋白', { en: 'A designed binder of roughly 40–65 residues, typically a hyperstable helical bundle. The workhorse format of the 2017–2026 period.', zh: '約 40–65 個殘基的設計結合蛋白，通常是超穩定的螺旋束。2017–2026 年間的主力格式。' }],
        ['Nanobody / VHH', '奈米抗體／VHH', { en: 'A single immunoglobulin variable domain (~15 kDa) from camelids. A major target of de novo antibody design because it is small and single-chain.', zh: '來自駱駝科的單一免疫球蛋白可變區（約 15 kDa）。因為小且單鏈，是從頭抗體設計的主要目標。' }],
        ['Nanocage', '奈米籠', { en: 'A designed, self-assembling protein shell, typically tetrahedral, octahedral or icosahedral. Used for vaccine antigen display and cargo delivery.', zh: '設計出的自組裝蛋白外殼，通常為四面體、八面體或二十面體。用於疫苗抗原展示與貨物遞送。' }],
        ['Directed evolution', '定向演化', { en: 'Iterated mutagenesis and selection, needing no structural model. Not a rival to computational design but its complement: design jumps to a new region of sequence space, evolution climbs the local hill.', zh: '反覆的突變與篩選，不需要結構模型。它不是計算設計的對手，而是互補：設計跳到序列空間的新區域，演化爬上當地的山丘。' }],
        ['Deep mutational scanning', '深度突變掃描', { en: 'Measuring the effect of thousands of mutations in one pooled experiment, usually by display plus sequencing. The main source of large labelled protein-fitness datasets.', zh: '在一次混合實驗中量測數千個突變的效應，通常以展示技術加定序完成。大型帶標籤蛋白適應度資料集的主要來源。' }],
        ['Split reporter assay', '分裂報告基因分析', { en: 'Splitting GFP or a luciferase into two non-functional halves, each fused to one partner, so that signal appears only if the partners associate. The standard cheap binding and solubility readout.', zh: '把 GFP 或螢光酶切成兩個無功能的半邊，各融合一個夥伴；只有夥伴結合時才出現訊號。便宜的結合與可溶性讀出標準方法。' }],
        ['DSF / thermal shift', '差示掃描螢光法／熱位移', { en: 'Heating a protein with a dye that reports unfolding, to get T_m. A plate reader and a PCR machine are enough, which is why it is the most student-accessible biophysics there is.', zh: '把蛋白與一種能報告去摺疊的染劑一起加熱，以取得 T_m。一台盤式讀取儀和一台 PCR 機就夠，這是學生最容易做到的生物物理量測。' }],
        ['SPR / BLI / ITC', '表面電漿共振／生物層干涉／等溫滴定熱量', { en: 'The three standard affinity methods. All need dedicated instruments; none is realistically available to a school team, which is why rank-order assays matter so much.', zh: '三種標準親和力量測方法。都需要專用儀器；對學校團隊而言都不現實，這正是「排序型」分析如此重要的原因。' }],
        ['CASP', 'CASP（結構預測關鍵評估）', { en: 'Critical Assessment of Structure Prediction. A biennial blind competition since 1994; the venue where AlphaFold1 (CASP13) and AlphaFold2 (CASP14) made their case.', zh: '結構預測關鍵評估。自 1994 年起每兩年一次的盲測競賽；AlphaFold1（CASP13）與 AlphaFold2（CASP14）就是在此確立地位。' }],
        ['PDB', 'PDB（蛋白質資料庫）', { en: 'Protein Data Bank, founded 1971 with seven structures. Every knowledge-based potential, rotamer library and neural network in this field is downstream of it.', zh: '蛋白質資料庫，1971 年以七個結構創立。本領域所有基於知識的能量函數、旋轉異構物庫與神經網路，都是它的下游。' }],
        ['Designability', '可設計性', { en: 'Whether a target structure admits any sequence that folds to it. A structure can be physically plausible and still undesignable.', zh: '一個目標結構是否存在任何能摺成它的序列。一個結構可以在物理上合理，卻依然不可設計。' }],
        ['Foldseek', 'Foldseek', { en: 'Fast structural search against the PDB and AlphaFold DB. The standard tool for computing novelty.', zh: '對 PDB 與 AlphaFold 資料庫的快速結構搜尋。計算新穎性的標準工具。' }]
      ];
      out += h.sec({
        id: 'g-gloss',
        kick: { en: 'Glossary', zh: '術語表' },
        h2: { en: 'Bilingual glossary', zh: '中英對照術語表' },
        lede: {
          en: 'The terms you need in order to read anything else on this site. Chinese renderings follow Taiwanese academic usage; where no settled Chinese term exists the English is kept.',
          zh: '讀懂本站其他內容所需的術語。中文採台灣學界慣用譯法；尚無定譯者保留英文。'
        },
        body: h.tbl({
          min: 760,
          cols: [
            { t: { en: 'Term', zh: '英文' }, w: '19%' },
            { t: { en: 'Chinese', zh: '中文' }, w: '15%' },
            { t: { en: 'Definition', zh: '定義' } }
          ],
          rows: G.map(function (g) { return ['**' + g[0] + '**', g[1], g[2]]; })
        })
      });

      return out;
    }
  };
})(window);
