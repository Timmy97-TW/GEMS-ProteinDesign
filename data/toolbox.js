(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.toolbox = {
    label: { en: 'Toolbox', zh: '工具地圖' },
    title: { en: 'Toolbox', zh: '工具地圖' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Extra chapter · What you can actually run', zh: '加頁 · 你實際跑得動什麼' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Not a list of tools. A map of ==which tool answers which question==, and what it costs.',
          zh: '這不是工具清單。這是一張「==哪個工具回答哪個問題==、以及代價多少」的地圖。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Every tool table on the internet lists capabilities. This one lists **access route, compute requirement, licence and cost**, because those are what decide whether a project is possible. It ends with a minimum viable stack that runs on a free Colab tier and a laptop — and an honest note on the three things that stack cannot do.',
          zh: '網路上每一份工具表都在列功能。這一份列的是**取用途徑、運算需求、授權與成本**，因為決定一個專案可不可行的是那些。最後附上一套「在免費 Colab 與一台筆電上就能跑」的最小可行堆疊——以及一則關於那套堆疊做不到哪三件事的誠實註記。'
        }) + '</p>' +
        '<div class="herometa">' + h.chips([
          { t: { en: 'Prices are 2026 US list', zh: '價格為 2026 年美國定價' }, k: 'b' },
          { t: { en: 'Verify licences before you rely on them', zh: '依賴授權前請自行查核' }, k: 'a' }
        ]) + '</div>' +
        '</div></div>';

      out += h.toc([
        { id: 't-pipe', t: { en: 'The pipeline', zh: '流程' } },
        { id: 't-which', t: { en: 'Which tool, which question', zh: '哪個工具答哪個問題' } },
        { id: 't-atlas', t: { en: 'Tool atlas', zh: '工具總表' } },
        { id: 't-compute', t: { en: 'Compute reality', zh: '運算現實' } },
        { id: 't-wet', t: { en: 'Wet-lab routes', zh: '濕實驗路徑' } },
        { id: 't-stack', t: { en: 'Minimum viable stack', zh: '最小可行堆疊' } }
      ]);

      /* ---------- pipeline ---------- */
      out += h.sec({
        id: 't-pipe',
        kick: { en: 'Orientation', zh: '定位' },
        h2: { en: 'The 2026 pipeline, with tool names at each step', zh: '2026 年的流程，每一步標上工具名稱' },
        lede: {
          en: 'Almost every protein-design project in late 2026 is some arrangement of these six steps. Knowing which step you are actually stuck on is most of the work.',
          zh: '2026 年末幾乎每個蛋白質設計專案，都是這六步的某種排列。知道自己真正卡在哪一步，就完成了大半工作。'
        },
        body:
          h.fig({
            kind: 'flow', tag: { en: 'pipeline', zh: '流程' },
            title: { en: 'Specify → generate → sequence → filter → rank → test', zh: '定義 → 生成 → 寫序列 → 篩選 → 排序 → 測試' },
            sub: {
              en: 'The fifth step is the one most pipelines get wrong, because they reuse the filter as the ranker. The research in the Bottlenecks chapter says those must be different things.',
              zh: '第五步是多數流程做錯的地方，因為它們把「篩選器」重複用作「排序器」。瓶頸分析一章的研究說，那必須是兩個不同的東西。'
            },
            data: {
              stages: [
                { label: { en: 'Specify', zh: '定義目標' }, tone: 'n', sub: { en: 'target, epitope or reaction', zh: '標的、抗原決定位或反應' }, items: [{ en: 'pick hotspot residues', zh: '選定熱點殘基' }, { en: 'check dual-use status first', zh: '先確認雙重用途狀態' }] },
                { label: { en: 'Generate', zh: '生成主鏈' }, tone: 'b', sub: { en: 'backbone or whole complex', zh: '主鏈或整個複合體' }, items: [{ en: 'RFdiffusion (free Colab)', zh: 'RFdiffusion（免費 Colab）' }, { en: 'BindCraft (needs 32 GB)', zh: 'BindCraft（需 32 GB）' }, { en: 'hosted services, 10 free jobs', zh: '託管服務，10 個免費任務' }] },
                { label: { en: 'Write a sequence', zh: '寫出序列' }, tone: 'g', sub: { en: 'inverse folding', zh: '反向摺疊' }, items: [{ en: 'ProteinMPNN — seconds, CPU-viable', zh: 'ProteinMPNN——數秒，CPU 可行' }, { en: 'LigandMPNN if a ligand is present', zh: '若有配體用 LigandMPNN' }, { en: 'SolubleMPNN for expression', zh: '為表達用 SolubleMPNN' }] },
                { label: { en: 'Filter', zh: '篩選' }, tone: 'v', sub: { en: 'discard obvious failures', zh: '淘汰明顯的失敗' }, items: [{ en: 'ESMFold refold, fast and free', zh: 'ESMFold 重摺疊，快又免費' }, { en: 'use as a floor, not a ranking', zh: '當下限用，不要當排序' }, { en: 'solubility predictors — under-used', zh: '可溶性預測器——被低估' }] },
                { label: { en: 'Rank', zh: '排序' }, tone: 'a', sub: { en: 'with something that is NOT the filter', zh: '用「不是篩選器」的東西' }, items: [{ en: 'Boltz-2 affinity head', zh: 'Boltz-2 的親和力輸出頭' }, { en: 'ensemble across models', zh: '跨模型做集成' }, { en: 'physical reasoning you can defend', zh: '你能為之辯護的物理推理' }] },
                { label: { en: 'Test', zh: '測試' }, tone: 'g', sub: { en: 'where 80% of the money goes', zh: '80% 的錢花在這裡' }, items: [{ en: 'expression + SDS-PAGE first, always', zh: '永遠先做表達 + SDS-PAGE' }, { en: 'split reporter for binding', zh: '用分裂報告基因看結合' }, { en: 'thermal shift for T_m', zh: '用熱位移測 T_m' }] }
              ],
              loop: { en: 'measurements must feed back into the model', zh: '量測必須回饋到模型' }
            },
            caption: {
              en: 'The dashed return path is not decoration: the 2026 judging rubric for modelling explicitly asks whether **measurements informed the model**, and the independent benchmarks say an unvalidated filter is worth about 0.6–0.72 AUC. Step 5 must not reuse step 4\'s score.',
              zh: '虛線的回饋路徑不是裝飾：2026 年建模類的評分標準明確問**量測是否回饋到模型**，而獨立基準測試說，未經驗證的篩選器價值約在 0.6–0.72 AUC。第 5 步絕不能重複使用第 4 步的分數。'
            }
          })
      });

      /* ---------- which tool ---------- */
      out += h.sec({
        id: 't-which',
        kick: { en: 'Decision table', zh: '決策表' },
        h2: { en: 'Start from the question, not the tool', zh: '從問題出發，不是從工具出發' },
        body: h.tbl({
          min: 880,
          cols: [
            { t: { en: 'If your question is…', zh: '如果你的問題是…' }, w: '28%' },
            { t: { en: 'Use', zh: '就用' }, w: '22%' },
            { t: { en: 'And know this', zh: '並且要知道' } }
          ],
          rows: [
            [{ en: '"What shape is this sequence?"', zh: '「這條序列是什麼形狀？」' }, { en: 'ColabFold (AlphaFold2) for anything with homologues; **ESMFold** when you need speed or have no MSA', zh: '有同源物的用 ColabFold（AlphaFold2）；需要速度或沒有 MSA 時用 **ESMFold**' }, { en: 'Both are free and a free Colab T4 is enough for typical single domains. For orphan sequences with no evolutionary context, expect cross-method disagreement and treat a confident-looking answer with suspicion.', zh: '兩者都免費，而免費 Colab 的 T4 足以處理典型的單結構域。對沒有演化上下文的孤兒序列，要預期不同方法會不一致，並對「看起來很有信心」的答案保持懷疑。' }],
            [{ en: '"Does this complex form, and how?"', zh: '「這個複合體會形成嗎、怎麼形成？」' }, { en: '**Boltz-2** (MIT, has an affinity head) or another open co-folding model; pool several rather than running many seeds of one', zh: '**Boltz-2**（MIT，有親和力輸出頭）或其他開源共摺疊模型；寧可匯總多個模型，而不是對同一個跑很多種子' }, { en: 'A 2026 result: pooling five predictors beat 100 seeds of any single one, at lower cost. And confidence scores **cannot discriminate real partners from shuffled ones**, so a high ipTM is not evidence of specificity.', zh: '2026 年的結果：匯總五個預測器，以更低成本勝過任何單一模型跑 100 個種子。而且信賴度分數**無法區分真實夥伴與洗牌配對**，所以高 ipTM 不是專一性的證據。' }],
            [{ en: '"What sequence folds to this backbone?"', zh: '「什麼序列會摺成這條主鏈？」' }, { en: '**ProteinMPNN** — and **LigandMPNN** if a ligand or metal is present, **SolubleMPNN** if expression is the worry', zh: '**ProteinMPNN**——若有配體或金屬用 **LigandMPNN**，若擔心表達用 **SolubleMPNN**' }, { en: 'The cheapest real step in the entire stack: seconds per backbone, viable on CPU, MIT-licensed. If a ligand is in the pocket and you use plain ProteinMPNN, you are designing as if the ligand were not there.', zh: '整套堆疊中最便宜的真實步驟：每條主鏈數秒、CPU 可行、MIT 授權。如果口袋裡有配體而你用的是普通 ProteinMPNN，那你是在假裝配體不存在的情況下做設計。' }],
            [{ en: '"Can I get a new backbone shaped like this?"', zh: '「我能拿到一條這種形狀的新主鏈嗎？」' }, { en: '**RFdiffusion** on the free Colab notebook for tens of backbones; a hosted service for more', zh: '幾十條主鏈用免費 Colab 上的 **RFdiffusion**；更多就用託管服務' }, { en: 'One 2024 iGEM team ran 16 backbones at 50 denoising steps on free Colab. A 2026 team needed real GPU time for 7,000. Scale your ambition to the hardware you have, not the paper you read.', zh: '2024 年有支 iGEM 隊伍在免費 Colab 上以 50 個去噪步驟跑了 16 條主鏈。2026 年有團隊為 7,000 條需要真正的 GPU 時數。把你的野心對齊到你有的硬體，而不是你讀的論文。' }],
            [{ en: '"Can I get a binder to this target?"', zh: '「我能拿到結合這個標的的蛋白嗎？」' }, { en: '**BindCraft** if you have a 32 GB GPU; a no-code hosted binder-design platform if you do not', zh: '有 32 GB GPU 就用 **BindCraft**；沒有就用免程式碼的託管結合蛋白設計平台' }, { en: 'Free Colab\'s T4 has 16 GB — half what the BindCraft README recommends — with a session cap. Pilot four to ten designs and **time it** before planning a season around it.', zh: '免費 Colab 的 T4 只有 16 GB——BindCraft README 建議值的一半——而且有時長上限。先試跑四到十個設計並**計時**，再把一個賽季押在它上面。' }],
            [{ en: '"Which of these designs should I order?"', zh: '「這些設計我該訂哪幾個？」' }, { en: 'Nothing, reliably. Use confidence as a **floor**, then rank on predicted solubility and on physical reasoning you can defend in a figure caption', zh: '沒有可靠的答案。把信賴度當**下限**，然後依預測可溶性與「你能在圖說裡辯護的物理推理」來排序' }, { en: 'This is the honest answer and the whole point of the Bottlenecks chapter. Measured AUC 0.60–0.72; many failed designs outscore successful ones; and the reliability curve inverts above 0.6.', zh: '這是誠實的答案，也是瓶頸分析一章的全部重點。經量測 AUC 為 0.60–0.72；許多失敗的設計分數高於成功的；而可靠度曲線在 0.6 以上反轉。' }],
            [{ en: '"Will it express and stay soluble?"', zh: '「它會表達並保持可溶嗎？」' }, { en: 'Dedicated solubility and aggregation predictors — **NetSolP, SoDoPe, Aggrescan-class, TemStaPro** — all free web servers', zh: '專門的可溶性與聚集預測器——**NetSolP、SoDoPe、Aggrescan 類、TemStaPro**——全部是免費網頁服務' }, { en: 'Genuinely under-used, and they target the failure mode that actually kills designs: **65% of de novo monomer failures are insolubility and aggregation.** No structure-confidence metric measures this at all.', zh: '真的被低估了，而它們瞄準的正是真正殺死設計的失效模式：**從頭單體設計失敗中 65% 是不溶與聚集。** 沒有任何結構信賴度指標在量測這件事。' }],
            [{ en: '"Does something like this already exist?"', zh: '「類似的東西已經存在了嗎？」' }, { en: '**Foldseek** for structure search; the ESM Atlas and AlphaFold DB for lookup', zh: '結構搜尋用 **Foldseek**；查詢用 ESM 圖譜與 AlphaFold 資料庫' }, { en: 'Light, fast and free. One 2026 iGEM team used Foldseek as its final filter before ordering, which is a defensible use: novelty you can state is better than novelty you assume.', zh: '輕量、快速、免費。2026 年有支 iGEM 隊伍把 Foldseek 當成下單前的最後一道篩選，這是站得住腳的用法：能說清楚的新穎性，勝過假設出來的新穎性。' }],
            [{ en: '"How does this protein move?"', zh: '「這個蛋白怎麼動？」' }, { en: 'An ensemble generator as a **seeder** for molecular dynamics, not as an answer', zh: '把集合生成器當分子動力學的**播種器**，不是當答案' }, { en: 'Published 2026 follow-ups show ensemble generators mis-rank conformer energies and fail where side-chain dynamics govern. Molecular dynamics is also the step that pushes student projects onto institutional clusters.', zh: '2026 年發表的後續研究顯示，集合生成器會把構型能量排序排錯，並在由側鏈主導的系統上失敗。分子動力學也正是把學生專案推上機構叢集的那一步。' }],
            [{ en: '"Can a non-programmer on the team help?"', zh: '「團隊裡不會寫程式的人能幫忙嗎？」' }, { en: '**Foldit** for structure refinement and design intuition; a no-code web design platform for binders', zh: '結構優化與設計直覺用 **Foldit**；結合蛋白用免程式碼的網頁設計平台' }, { en: 'Foldit is a publication-grade route, not a toy: in October 2025 players improved the accuracy of deposited PDB structures, "sometimes surpassing expert and automated methods".', zh: 'Foldit 是具發表水準的路線，不是玩具：2025 年十月，玩家改善了已沉積 PDB 結構的準確度，「有時超越專家與自動化方法」。' }]
          ]
        })
      });

      /* ---------- atlas ---------- */
      out += h.sec({
        id: 't-atlas',
        kick: { en: 'The atlas', zh: '總表' },
        h2: { en: 'Tool atlas with access route, compute and cost', zh: '工具總表：取用途徑、運算與成本' },
        lede: {
          en: 'The last column is the one that matters. "Open source" and "you can run it" are different claims, and licences change — verify before you build a plan on one.',
          zh: '最後一欄才是關鍵。「開源」與「你跑得動」是兩個不同的主張，而授權會變——在把計畫押上去之前請先查核。'
        },
        body: h.tbl({
          min: 1020,
          cols: [
            { t: { en: 'Tool', zh: '工具' }, w: '14%' },
            { t: { en: 'What it does', zh: '它做什麼' }, w: '20%' },
            { t: { en: 'Access', zh: '取用' }, w: '16%' },
            { t: { en: 'Compute', zh: '運算' }, w: '18%' },
            { t: { en: 'Cost & licence', zh: '成本與授權' }, w: '14%' },
            { t: { en: 'Student-feasible?', zh: '學生可行？' } }
          ],
          rows: [
            ['**ColabFold / AlphaFold2**', { en: 'Monomer and complex structure prediction with automatic MSAs', zh: '含自動 MSA 的單體與複合體結構預測' }, { en: 'Free public Colab notebook', zh: '免費公開 Colab 筆記本' }, { en: 'Free-tier T4 (16 GB) is enough for typical single domains', zh: '免費層 T4（16 GB）足以處理典型單結構域' }, { en: 'Free', zh: '免費' }, { en: '**Yes — proven.** Multiple iGEM teams have used the public notebook.', zh: '**可以——已證實。** 多支 iGEM 隊伍用過這個公開筆記本。' }],
            ['**ProteinMPNN**', { en: 'Fixed-backbone sequence design', zh: '固定主鏈序列設計' }, { en: 'Free Colab; MIT-licensed source', zh: '免費 Colab；MIT 授權原始碼' }, { en: 'Seconds to minutes per backbone; CPU-viable', zh: '每條主鏈數秒到數分鐘；CPU 可行' }, { en: 'Free, MIT', zh: '免費，MIT' }, { en: '**Yes.** The cheapest real step in the whole stack, and a 1.7-million-parameter model.', zh: '**可以。** 整套堆疊中最便宜的真實步驟，而且只是一個 170 萬參數的模型。' }],
            ['**LigandMPNN**', { en: 'Sequence design **with the ligand present** — the right tool for pocket redesign', zh: '**在配體存在下**做序列設計——口袋重設計的正確工具' }, { en: 'Open source', zh: '開源' }, { en: 'Comparable to ProteinMPNN', zh: '與 ProteinMPNN 相當' }, { en: 'Free', zh: '免費' }, { en: '**Yes.** Several 2025–26 iGEM teams used it.', zh: '**可以。** 2025–26 年有數支 iGEM 隊伍使用。' }],
            ['**RFdiffusion**', { en: 'Backbone generation and motif scaffolding', zh: '主鏈生成與模組支架化' }, { en: 'Free Colab notebook; GitHub', zh: '免費 Colab 筆記本；GitHub' }, { en: 'One team ran 16 backbones at 50 denoising steps on free Colab; 7,000 backbones needs real GPU time', zh: '有團隊在免費 Colab 上以 50 個去噪步驟跑 16 條主鏈；7,000 條需要真正的 GPU 時數' }, { en: 'Free, BSD incl. weights', zh: '免費，BSD 含權重' }, { en: '**Yes at tens-of-backbones scale**, no at thousands.', zh: '**幾十條的規模可以**，數千條不行。' }],
            ['**ESMFold**', { en: 'Fast single-sequence structure prediction — ideal as a refold check', zh: '快速單序列結構預測——理想的重摺疊檢查' }, { en: 'Open weights via Hugging Face', zh: '權重開放，經 Hugging Face' }, { en: 'Modest; much cheaper than AlphaFold2', zh: '需求不高；比 AlphaFold2 便宜得多' }, { en: 'Free', zh: '免費' }, { en: '**Yes.** The standard screen after ProteinMPNN.', zh: '**可以。** ProteinMPNN 之後的標準篩選。' }],
            ['**Boltz-2**', { en: 'Joint structure **and binding-affinity** prediction', zh: '結構**與結合親和力**的聯合預測' }, { en: 'Open weights, MIT licence, academic and commercial', zh: '權重開放，MIT 授權，學術與商業皆可' }, { en: 'GPU, but reported to run on a free Colab T4 in 2–10 minutes', zh: '需 GPU，但據報在免費 Colab T4 上 2–10 分鐘可完成' }, { en: 'Free, MIT', zh: '免費，MIT' }, { en: '**Yes — the most important recent entry for a student team**, because it is the only free, open tool with an affinity head.', zh: '**可以——對學生團隊而言是最重要的新進工具**，因為它是唯一有親和力輸出頭的免費開源工具。' }],
            ['**BindCraft**', { en: 'One-shot binder design, mean 46.3% experimental success', zh: '一次成形的結合蛋白設計，平均實驗成功率 46.3%' }, { en: 'GitHub; also on hosted platforms', zh: 'GitHub；也有託管平台' }, { en: 'README recommends **≥32 GB GPU memory**. One published benchmark: ~33 h on a B200-class GPU for 101 accepted designs', zh: 'README 建議 **≥32 GB GPU 記憶體**。一個已發表基準：B200 級 GPU 上約 33 小時得到 101 個通過設計' }, { en: 'Free, MIT', zh: '免費，MIT' }, { en: '**Marginal on free tiers.** Borrow a university GPU or use a hosted free-job allowance; pilot and time it first.', zh: '**在免費層級上很勉強。** 借大學的 GPU 或用託管服務的免費任務額度；先試跑並計時。' }],
            ['**AlphaFold3**', { en: 'Structure prediction including ligands, nucleic acids and modifications', zh: '含配體、核酸與修飾的結構預測' }, { en: 'Code Apache-2.0 on GitHub; **weights only from Google, by application**', zh: '程式碼 Apache-2.0 於 GitHub；**權重僅能向 Google 申請取得**' }, { en: 'GPU', zh: '需 GPU' }, { en: 'Free but gated, non-commercial', zh: '免費但受限，非商業' }, { en: '**Probably not for a school club.** Parameters may only be used if received directly from Google, restricted to academically affiliated scientists.', zh: '**學校社團大概不行。** 參數只能在直接自 Google 取得的情況下使用，且限具學術隸屬的科學家。' }],
            ['**Hosted AlphaFold server**', { en: 'Free hosted predictions, no setup', zh: '免費託管預測，無需安裝' }, { en: 'Web', zh: '網頁' }, { en: 'None', zh: '不需要' }, { en: 'Free, non-commercial', zh: '免費，非商業' }, { en: '**Yes for looking at a structure — but read the restriction:** the output **cannot be used in docking or screening tools**, which excludes the most common downstream use.', zh: '**單純看結構可以——但請讀限制：** 其輸出**不得用於對接或篩選工具**，而那正是最常見的下游用途。' }],
            ['**Open AlphaFold3 reproductions**', { en: 'Open reproductions of all-atom co-folding', zh: '全原子共摺疊的開源重建' }, { en: 'GitHub / Hugging Face', zh: 'GitHub／Hugging Face' }, { en: 'GPU', zh: '需 GPU' }, { en: 'Permissive licences claimed — **verify the current terms**', zh: '宣稱為寬鬆授權——**請查核當前條款**' }, { en: '**Likely yes, and the correct workaround for the weights gate.** Check the licence yourself before relying on it.', zh: '**很可能可以，而且是繞過權重限制的正確方式。** 在依賴它之前請自己確認授權。' }],
            ['**No-code web binder platforms**', { en: 'Upload a target, pick hotspots, design mini-binders in a browser', zh: '上傳標的、選熱點，在瀏覽器裡設計迷你結合蛋白' }, { en: 'Web platform', zh: '網頁平台' }, { en: '**None — browser only**', zh: '**不需要——只要瀏覽器**' }, { en: 'Free tier with renewing credits', zh: '免費層，額度會更新' }, { en: '**Yes, and the best entry point for a team with no GPU access.** Credits are limited, so plan the runs.', zh: '**可以，而且是沒有 GPU 的團隊最好的入口。** 額度有限，所以要規劃執行次數。' }],
            ['**Hosted tool catalogues**', { en: 'Pay-per-job access to RFdiffusion, Boltz, BindCraft and others', zh: '按任務付費使用 RFdiffusion、Boltz、BindCraft 等' }, { en: 'Web, per-credit or per-job', zh: '網頁，按額度或按任務' }, { en: 'None', zh: '不需要' }, { en: 'One charges about US$1 per credit with an academic discount; another gives **10 free jobs**', zh: '一家約每額度 1 美元並有學術折扣；另一家提供 **10 個免費任務**' }, { en: '**Yes in small bounded amounts.** Ideal for a pilot you need to finish this week.', zh: '**小額有界限地可以。** 很適合「這週就要跑完」的試驗。' }],
            ['**Solubility & aggregation predictors**', { en: 'Predicted solubility, aggregation propensity, thermal tolerance', zh: '預測可溶性、聚集傾向、熱耐受性' }, { en: 'Free web servers', zh: '免費網頁服務' }, { en: 'None', zh: '不需要' }, { en: 'Free', zh: '免費' }, { en: '**Yes — and under-used.** These target the 65% of failures that structure-confidence metrics ignore entirely.', zh: '**可以——而且被低估。** 它們瞄準的正是結構信賴度指標完全忽略的那 65% 失敗。' }],
            ['**Foldseek**', { en: 'Fast structure search against the PDB and AlphaFold DB', zh: '對 PDB 與 AlphaFold 資料庫的快速結構搜尋' }, { en: 'Free web and local', zh: '免費網頁與本地版' }, { en: 'Light', zh: '輕量' }, { en: 'Free', zh: '免費' }, { en: '**Yes.** The standard novelty check and a defensible final filter before ordering.', zh: '**可以。** 標準的新穎性檢查，也是下單前站得住腳的最後篩選。' }],
            ['**Rosetta / PyRosetta**', { en: 'Physics-based design, docking and relaxation', zh: '基於物理的設計、對接與鬆弛' }, { en: 'Rosetta Commons academic licence', zh: 'Rosetta Commons 學術授權' }, { en: 'CPU-heavy, cluster-friendly', zh: '吃 CPU，適合叢集' }, { en: 'Free academic licence — **check current terms**', zh: '免費學術授權——**請確認當前條款**' }, { en: 'Yes with a licence. Still the right tool for relaxation and for scoring you can explain.', zh: '有授權就可以。在鬆弛與「你能解釋的評分」上，它仍是正確的工具。' }],
            ['**Molecular dynamics (open packages)**', { en: 'Dynamics, binding free energy by end-point methods', zh: '動力學、以端點方法估算結合自由能' }, { en: 'Free, open source', zh: '免費，開源' }, { en: 'One iGEM team ran 10 ns systems on an institutional cluster; small scale is possible on one good GPU', zh: '有支 iGEM 隊伍在機構叢集上跑 10 ns 系統；小規模在一張好 GPU 上可行' }, { en: 'Free', zh: '免費' }, { en: '**Marginal.** This is the step that pushes student projects onto institutional clusters. Budget time, not money.', zh: '**很勉強。** 這是把學生專案推上機構叢集的那一步。要預留時間，而不是錢。' }],
            ['**Foldit**', { en: 'Citizen-science design and structure refinement', zh: '公民科學設計與結構優化' }, { en: 'Free download', zh: '免費下載' }, { en: 'None', zh: '不需要' }, { en: 'Free', zh: '免費' }, { en: '**Yes — and a publication-grade route.** In October 2025 players improved deposited PDB structures, sometimes beyond expert and automated methods.', zh: '**可以——而且是具發表水準的路線。** 2025 年十月，玩家改善了已沉積的 PDB 結構，有時超越專家與自動化方法。' }]
          ],
          source: { en: 'Compiled November 2026. Licence terms and free-tier limits change frequently and several were marked unverified during research — **check the current terms yourself before building a plan on any of them.**', zh: '彙編於 2026 年十一月。授權條款與免費層級限制經常變動，其中數項在研究期間被標記為未核實——**在把計畫押在任何一項上之前，請自己確認當前條款。**' }
        })
      });

      /* ---------- compute ---------- */
      out += h.sec({
        id: 't-compute',
        kick: { en: 'Reality check', zh: '現實檢核' },
        h2: { en: 'What fits in free-tier GPU memory', zh: '免費層 GPU 記憶體裝得下什麼' },
        body:
          h.fig({
            kind: 'bars', tag: { en: 'hardware', zh: '硬體' },
            title: { en: 'GPU memory needed, against what a free Colab T4 provides', zh: '所需 GPU 記憶體，對比免費 Colab T4 能提供的' },
            sub: { en: 'The 16 GB line is the one that decides most student projects.', zh: '16 GB 那條線，決定了大多數學生專案。' },
            opts: { unit: 'GB', max: 40 },
            data: [
              { label: { en: 'ProteinMPNN', zh: 'ProteinMPNN' }, v: 1, color: '#1baf7a', note: { en: 'CPU is viable', zh: 'CPU 就可以' } },
              { label: { en: 'RFdiffusion, small peptide designs', zh: 'RFdiffusion，小型肽設計' }, v: 3, color: '#1baf7a', note: { en: 'reported under 3 GB on a consumer card', zh: '據報在消費級顯卡上低於 3 GB' } },
              { label: { en: 'ESMFold refold check', zh: 'ESMFold 重摺疊檢查' }, v: 6, color: '#1baf7a' },
              { label: { en: 'ColabFold, typical single domain', zh: 'ColabFold，典型單結構域' }, v: 12, color: '#1baf7a' },
              { label: { en: 'Boltz-2 structure + affinity', zh: 'Boltz-2 結構 + 親和力' }, v: 14, color: '#eda100', note: { en: 'reported 2–10 min on a free T4', zh: '據報在免費 T4 上 2–10 分鐘' } },
              { label: { en: '— free Colab T4 ceiling —', zh: '— 免費 Colab T4 上限 —' }, v: 16, color: '#8792A3' },
              { label: { en: 'BindCraft, as the README recommends', zh: 'BindCraft，依 README 建議' }, v: 32, color: '#e34948', note: { en: 'twice the free tier', zh: '免費層的兩倍' } },
              { label: { en: 'RFdiffusion at thousands-of-backbones scale', zh: 'RFdiffusion，數千條主鏈規模' }, v: 40, color: '#e34948', note: { en: 'needs sustained cluster time', zh: '需要持續的叢集時數' } }
            ],
            legend: [
              { c: '#1baf7a', n: { en: 'Comfortable on free tier', zh: '免費層輕鬆可行' } },
              { c: '#eda100', n: { en: 'Tight but reported to work', zh: '緊，但據報可行' } },
              { c: '#8792A3', n: { en: 'The free-tier ceiling', zh: '免費層上限' } },
              { c: '#e34948', n: { en: 'Needs borrowed or paid hardware', zh: '需要借用或付費硬體' } }
            ],
            caption: {
              en: 'Figures are the reported practical requirements, not vendor minimums, and they vary with sequence length and settings. The free Colab tier also carries an unpublished, variable GPU quota and a session cap of roughly twelve hours — so a run that fits in memory can still be killed by the clock. **Pilot and time every step before planning a season around it.**',
              zh: '數字是已報告的實務需求，不是廠商的最低規格，而且會隨序列長度與設定而變。免費 Colab 層另有未公布、會變動的 GPU 配額，以及約十二小時的時長上限——所以一個「記憶體裝得下」的執行，仍可能被時鐘砍掉。**在把一個賽季押上去之前，先試跑並為每一步計時。**'
            }
          })
      });

      /* ---------- wet lab ---------- */
      out += h.sec({
        id: 't-wet',
        kick: { en: 'The expensive half', zh: '昂貴的那一半' },
        h2: { en: 'Wet-lab validation routes, with what each one actually tells you', zh: '濕實驗驗證路徑，以及每一條實際告訴你什麼' },
        lede: {
          en: 'Ordered by how much decision-relevant information you get per dollar. The first row is the one to do first, always — it answers the question that decides 65% of outcomes.',
          zh: '依「每一塊錢換到多少與決策相關的資訊」排序。第一列永遠是要先做的那一件——它回答的是決定 65% 結果的那個問題。'
        },
        body: h.tbl({
          min: 900,
          cols: [
            { t: { en: 'Route', zh: '路徑' }, w: '20%' },
            { t: { en: 'What it tells you', zh: '它告訴你什麼' }, w: '26%' },
            { t: { en: 'Cost', zh: '成本' }, w: '20%' },
            { t: { en: 'Notes', zh: '備註' } }
          ],
          rows: [
            [{ en: '***E. coli* expression + SDS-PAGE**, soluble against insoluble fraction', zh: '**大腸桿菌表達 + SDS-PAGE**，可溶對不可溶分層' }, { en: '**Did it express, and is it soluble?** The question that decides roughly 65% of outcomes', zh: '**它表達了嗎、可溶嗎？** 這是決定約 65% 結果的問題' }, { en: 'Low — standard media, inducer, one gel. Tens of US dollars per batch', zh: '低——標準培養基、誘導劑、一片膠。每批數十美元' }, { en: '**Do this first, always.** One 2026 iGEM team got 25 of 85 designs to express. If you report nothing else, report this — with the failures.', zh: '**永遠先做這個。** 2026 年某支 iGEM 隊伍讓 85 個設計中 25 個表達成功。如果你只報告一件事，就報這個——連失敗一起報。' }],
            [{ en: '**Split-GFP or split-luciferase complementation**', zh: '**分裂 GFP 或分裂螢光酶互補**' }, { en: 'Protein–protein interaction, plus a solubility proxy, read on a plate reader', zh: '蛋白—蛋白交互作用，加上可溶性的代理指標，用盤式讀取儀讀' }, { en: 'Very low per assay once the reporter parts exist', zh: '一旦報告基因零件就位，每次分析成本極低' }, { en: '**The highest-value assay to own as a reusable asset.** A 2025 team deposited its cell-free two-hybrid version as a Registry part, which makes a measurement platform itself award-credible.', zh: '**最值得當成可重用資產擁有的分析。** 2025 年有團隊把自己的無細胞雙雜交版本沉積為 Registry 零件，使「量測平台」本身就具得獎資格。' }],
            [{ en: '**Thermal shift (DSF) with a hydrophobic dye**', zh: '**以疏水性染劑做熱位移（DSF）**' }, { en: '**T_m** — a real, quantitative, publishable number', zh: '**T_m**——一個真實、可量化、可發表的數字' }, { en: 'Dye is inexpensive; needs a qPCR machine or a plate reader with a temperature ramp', zh: '染劑便宜；需要 qPCR 機或可做溫度梯度的盤式讀取儀' }, { en: 'The best cost-to-insight ratio of any stability measurement. If your project has a stability claim, this is how you earn it.', zh: '所有穩定度量測中最好的「成本換洞見」比。如果你的專案有穩定度的主張，這就是你取得它的方式。' }],
            [{ en: '**Cell-free expression**', zh: '**無細胞表達**' }, { en: 'Expression without cloning or transformation; fast turnaround; works with no culture capacity', zh: '不需選殖或轉形的表達；週轉快；沒有培養能力也能做' }, { en: 'Extract-based kits around **US$18–25 per reaction** at education pricing; reconstituted systems somewhat more', zh: '以萃取物為基礎的套組在教育定價下約**每次反應 18–25 美元**；重構系統略高' }, { en: 'Buys you speed and removes a whole failure mode. Expensive per data point, so use it for the designs you care most about.', zh: '它買到的是速度，也移除了一整類失效模式。每個資料點昂貴，所以用在你最在意的那些設計上。' }],
            [{ en: '**Plate-reader dose–response**', zh: '**盤式讀取儀劑量反應**' }, { en: 'EC₅₀, dynamic range, specificity against related ligands', zh: 'EC₅₀、動態範圍、對相關配體的專一性' }, { en: 'Low', zh: '低' }, { en: 'Follow the measurement standard the handbook rewards: independent calibration against fluorescent beads, geometric mean with standard deviation, and **univariate scatterplots rather than bar graphs**.', zh: '遵循手冊所獎勵的量測標準：以螢光微珠做獨立校正、以幾何平均加標準差呈現，並**用單變量散點圖取代條狀圖**。' }],
            [{ en: '**Enzyme activity on a chromogenic substrate**', zh: '**以顯色受質測酵素活性**' }, { en: 'Specific activity against temperature', zh: '比活性隨溫度的變化' }, { en: 'Low', zh: '低' }, { en: 'The substrate, not the enzyme, often dominates the variance. Say which substrate in the figure caption, every time.', zh: '主導變異的常常是受質而不是酵素。每一次都要在圖說裡寫明用的是哪個受質。' }],
            [{ en: '**ELISA against a purchased recombinant antigen**', zh: '**以購買的重組抗原做 ELISA**' }, { en: 'Binding, semi-quantitatively', zh: '結合，半定量' }, { en: 'Moderate — the recombinant antigen is usually the dominant line item', zh: '中等——重組抗原通常是最大的支出項' }, { en: '**Buy the antigen. Do not make a pathogen.** For a high-school team this is also what keeps the project inside the iGEM White List.', zh: '**買抗原，不要做病原。** 對高中隊伍而言，這同時也是讓專案留在 iGEM White List 之內的方法。' }],
            [{ en: '**Surface plasmon resonance, biolayer interferometry, calorimetry**', zh: '**表面電漿共振、生物層干涉、熱量法**' }, { en: 'True K_D', zh: '真正的 K_D' }, { en: '**Out of reach**', zh: '**超出能力範圍**' }, { en: 'Not available to a school team. Note that even well-equipped teams\' free-energy calculations failed to produce reliable K_D — one reported error was ±4 × 10⁴ µM. **Design the project so rank order is the result.**', zh: '學校團隊取用不到。注意即使設備良好的隊伍，其自由能計算也無法得出可靠的 K_D——有一個報告的誤差是 ±4 × 10⁴ µM。**把專案設計成「排序本身就是成果」。**' }],
            [{ en: '**Crystallography, cryo-EM, NMR**', zh: '**晶體學、冷凍電顯、核磁共振**' }, { en: 'Did it fold as designed?', zh: '它摺疊成設計的樣子了嗎？' }, { en: '**Out of reach**', zh: '**超出能力範圍**' }, { en: 'You will not get structural confirmation. **Plan the project so this does not matter** — circular dichroism gives you the secondary-structure class, which is usually the decision-relevant question anyway.', zh: '你不會拿到結構確認。**把專案規劃成「這件事不重要」**——圓二色光譜能給你二級結構的類別，而那通常就是真正與決策相關的問題。' }]
          ],
          source: { en: 'Costs are 2025–26 US list prices for education customers where available; arithmetic per reaction. Several were marked unverified during research. Local prices differ.', zh: '成本為 2025–26 年美國教育客戶定價（若有），每次反應為算術換算。其中數項在研究期間被標記為未核實。各地價格不同。' }
        })
      });

      /* ---------- minimum stack ---------- */
      out += h.sec({
        id: 't-stack',
        kick: { en: 'Recommendation', zh: '建議' },
        h2: { en: 'A minimum viable stack, and what it cannot do', zh: '一套最小可行堆疊，以及它做不到什麼' },
        lede: {
          en: 'Everything here runs on a free Colab tier plus a laptop, with no institutional GPU and no paid service. It is enough for every concept in the GEMS chapter except the two binder-design ones.',
          zh: '這裡的每一項都能在免費 Colab 層加一台筆電上跑，不需要機構 GPU，也不需要付費服務。它足以支撐 GEMS 一章中除了兩個結合蛋白設計概念之外的所有概念。'
        },
        body:
          h.cards([
            { chips: [{ t: '1', k: 'b' }, { t: { en: 'free', zh: '免費' }, k: 'g' }], h: { en: 'Structure: ColabFold + ESMFold', zh: '結構：ColabFold + ESMFold' }, p: { en: 'ColabFold when homologues exist and accuracy matters; ESMFold when you need to refold a hundred designed sequences quickly. Together they cover prediction and the self-consistency check.', zh: '有同源物且在意準確度時用 ColabFold；需要快速重摺疊一百條設計序列時用 ESMFold。兩者合起來覆蓋了預測與自洽檢查。' } },
            { chips: [{ t: '2', k: 'b' }, { t: { en: 'free', zh: '免費' }, k: 'g' }], h: { en: 'Sequence: ProteinMPNN family', zh: '序列：ProteinMPNN 家族' }, p: { en: 'ProteinMPNN for plain backbones, LigandMPNN whenever a ligand or metal is in the pocket, SolubleMPNN when expression is the thing you are worried about. Seconds per design and viable on CPU.', zh: '一般主鏈用 ProteinMPNN；口袋裡有配體或金屬時一律用 LigandMPNN；擔心表達時用 SolubleMPNN。每個設計數秒，CPU 就能跑。' } },
            { chips: [{ t: '3', k: 'b' }, { t: { en: 'free', zh: '免費' }, k: 'g' }], h: { en: 'Complexes and affinity: Boltz-2', zh: '複合體與親和力：Boltz-2' }, p: { en: 'The only free, openly licensed tool with an affinity head, reported to run in minutes on a free T4. Use it as your **ranker**, deliberately separate from whatever you used as a filter.', zh: '唯一帶親和力輸出頭、免費且授權開放的工具，據報在免費 T4 上數分鐘可完成。把它當你的**排序器**，刻意與你用作篩選器的東西分開。' } },
            { chips: [{ t: '4', k: 'b' }, { t: { en: 'free', zh: '免費' }, k: 'g' }], h: { en: 'The step everyone skips: solubility predictors', zh: '大家都跳過的那一步：可溶性預測器' }, p: { en: 'Free web servers for predicted solubility, aggregation and thermal tolerance. They target the failure mode that causes **65% of design failures** and that no confidence metric measures. Running them costs you an afternoon.', zh: '預測可溶性、聚集與熱耐受性的免費網頁服務。它們瞄準的是造成 **65% 設計失敗**、而沒有任何信賴度指標在量測的那個失效模式。跑完它們只花你一個下午。' } },
            { chips: [{ t: '5', k: 'b' }, { t: { en: 'free', zh: '免費' }, k: 'g' }], h: { en: 'Novelty and sanity: Foldseek', zh: '新穎性與常識檢查：Foldseek' }, p: { en: 'Before you order anything, search it against the PDB and AlphaFold DB. Either you can state your novelty or you discover your design is a known fold — both outcomes are worth an afternoon.', zh: '在訂任何東西之前，拿它去搜 PDB 與 AlphaFold 資料庫。結果要麼你能說清楚自己的新穎性，要麼你發現自己的設計是個已知摺疊——兩種結果都值得一個下午。' } },
            { chips: [{ t: '6', k: 'v' }, { t: { en: 'habit, not software', zh: '習慣，不是軟體' }, k: 'a' }], h: { en: 'The provenance log', zh: '溯源紀錄' }, p: { en: 'A spreadsheet: run, tool, version, seed, parameters, output, **and the decision it changed**. Required by the 2026 integrity rules, rewarded by Best Model, and the single cheapest thing on this page. Start it on day one.', zh: '一份表格：執行、工具、版本、隨機種子、參數、輸出，**以及它改變了什麼決定**。2026 年誠信規則要求、Best Model 會獎勵，而且是本頁上最便宜的一件事。第一天就開始記。' } }
          ], 'g3') +
          h.warn({
            en: '**Three things this stack cannot do.** (1) **Binder design at scale** — BindCraft wants twice the free tier\'s memory, so use a no-code hosted platform\'s free credits or borrow a GPU. (2) **True affinity** — no surface plasmon resonance, so design for rank order. (3) **Structural confirmation** — no crystallography, so plan a project where not knowing the exact fold still leaves you with a result. Every one of those is a project-design constraint, not a reason not to start.',
            zh: '**這套堆疊做不到三件事。**（1）**規模化的結合蛋白設計**——BindCraft 需要免費層兩倍的記憶體，所以改用免程式碼託管平台的免費額度，或借一張 GPU。（2）**真正的親和力**——沒有表面電漿共振，所以要為「排序」而設計。（3）**結構確認**——沒有晶體學，所以要規劃一個「不知道確切摺疊也仍有成果」的專案。這三件每一件都是專案設計的限制，不是不開始的理由。'
          })
      });

      return out;
    }
  };
})(window);
