(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var P = [
    { id: 'P1', conf: 'high', c: 'r',
      t: { en: 'De novo antibody design becomes routine but plateaus at 10–30%, not above 50%', zh: '從頭抗體設計變成常規，但停在 10–30%，不會超過 50%' },
      basis: { en: 'The best 2026 community trajectory runs 2.5% → 13.2% on one target across two rounds, 9.6% on another, 37 of 100 on a third, but only 2.8% on a hard one. One company reports 16% across 52 targets with 20 designs each, hitting at least one binder for only half of them. Measured per-target spread of 0–80% caps any aggregate.', zh: '2026 年社群最佳的軌跡是：某個標的兩輪 2.5% → 13.2%，另一個 9.6%，第三個 100 個中 37 個，但一個困難標的只有 2.8%。某公司報告在 52 個標的上 16%、每個 20 個設計，其中只有一半的標的至少命中一個。經量測的逐標的範圍 0–80% 為任何彙總值設下上限。' },
      watch: { en: 'Blinded benchmark results, not company blogs. Specifically: does any method achieve above 30% on a *target set it did not choose*?', zh: '要看盲測基準的結果，不是公司部落格。具體指標：有任何方法能在*不是自己挑的標的集*上超過 30% 嗎？' },
      falsify: { en: 'A blinded, third-party benchmark reporting above 50% mean hit rate across more than 10 targets before 2030.', zh: '2030 年前有盲測第三方基準在超過 10 個標的上報告平均命中率高於 50%。' } },
    { id: 'P2', conf: 'med-high', c: 'a',
      t: { en: 'A large sponsored design competition becomes the field\'s first credible public negative-data corpus', zh: '一場大型贊助設計競賽成為本領域第一份可信的公開負面資料語料庫' },
      basis: { en: 'A competition announced for early 2027 sponsors experimental validation of more than 5,000 designs across 5 targets with **negatives published**. For scale: the entire published record of de novo monomer design is 614 openly characterised designs. One dataset would multiply the field\'s outcome data by roughly an order of magnitude.', zh: '一場宣布於 2027 年初的競賽，贊助 5 個標的、超過 5,000 個設計的實驗驗證，並**公布負面結果**。作為尺度：從頭單體設計的全部已發表紀錄是 614 個公開表徵的設計。單一份資料集就能讓這個領域的結果資料增加大約一個數量級。' },
      watch: { en: 'Whether the negatives are actually released, in a machine-readable form, with design provenance attached.', zh: '負面結果是否真的被釋出、是否為機器可讀格式、是否附帶設計溯源資訊。' },
      falsify: { en: 'The data is released only as summary statistics, or positives only.', zh: '資料只以摘要統計或只有陽性結果釋出。' } },
    { id: 'P3', conf: 'medium', c: 'a',
      t: { en: 'A prospective, blind, third-party benchmark for design runs at least two cycles by 2029', zh: '一個針對設計的前瞻盲測第三方基準，在 2029 年前完成至少兩輪' },
      basis: { en: 'The demand is now measured — confidence-metric AUC of 0.60–0.72 is a documented failure of the status quo — and the supply exists in prototype, both in the 2026 blinded antibody benchmark and in sponsored competitions. The gap is governance and funding, not capability.', zh: '需求已被量測——信賴度指標 AUC 0.60–0.72 是現狀失敗的書面證據——而供給也已有雛形，2026 年的盲測抗體基準與有贊助的競賽都是。缺的是治理與資金，不是能力。' },
      watch: { en: 'Whether an existing body (CASP, a funder, a journal consortium) adopts it rather than a company running it.', zh: '是否有既有機構（CASP、資助方、期刊聯盟）接手，而不是由某家公司自己辦。' },
      falsify: { en: 'No second cycle of any blinded design benchmark by end-2029.', zh: '到 2029 年底，任何盲測設計基準都沒有第二輪。' } },
    { id: 'P4', conf: 'high', c: 'r',
      t: { en: 'No approved drug whose active moiety is a fully de novo designed protein, by 2031', zh: '到 2031 年，不會有任何以完全從頭設計蛋白為活性成分的核准藥物' },
      basis: { en: 'The pipeline as of November 2026 is **one** Phase-1-completed-then-discontinued programme and **one** not-yet-recruiting Phase 1, against roughly 90% Phase-1 attrition. Drug development takes a decade from first-in-human even when nothing goes wrong. The arithmetic does not close.', zh: '截至 2026 年十一月，整條管線是**一個**完成第一期後中止的計畫與**一個**尚未收案的第一期，而一般第一期淘汰率約 90%。即使一切順利，從首次人體試驗到上市也要十年。算式對不上。' },
      watch: { en: 'First-in-human filings for de novo *active* molecules, not scaffolds. There are currently almost none.', zh: '以從頭設計*活性*分子（而非支架）為標的的首次人體試驗申請。目前幾乎沒有。' },
      falsify: { en: 'Any regulatory approval before 2031 of a therapeutic whose active moiety has no natural sequence ancestor.', zh: '2031 年前，有任何活性成分沒有天然序列祖先的療法獲得監管核准。' } },
    { id: 'P5', conf: 'med-high', c: 'a',
      t: { en: 'A designed **scaffold** gets approved first — and it will not be called an AI drug', zh: '最先獲核准的會是一個設計**支架**——而它不會被稱為 AI 藥物' },
      basis: { en: 'The only designed protein ever approved was a nanoparticle *scaffold* displaying a natural antigen, approved in 2022. A designed-nanoparticle vaccine entered Phase I/II in February 2026. Delivery vehicles and immunogen scaffolds face a lower evidentiary bar than a novel active moiety because the active component is already known.', zh: '唯一曾獲核准的設計蛋白，是一個展示天然抗原的奈米顆粒*支架*，2022 年核准。一個設計奈米顆粒疫苗在 2026 年二月進入第一／二期。遞送載體與免疫原支架面對的證據門檻低於全新的活性成分，因為活性元件本身已經是已知的。' },
      watch: { en: 'The designed-nanoparticle vaccine readouts, and any designed delivery vehicle entering the clinic.', zh: '設計奈米顆粒疫苗的數據公布，以及任何設計遞送載體進入臨床。' },
      falsify: { en: 'A de novo active moiety reaches approval before any designed scaffold does.', zh: '有從頭設計的活性成分比任何設計支架更早獲得核准。' } },
    { id: 'P6', conf: 'med-high', c: 'a',
      t: { en: 'Designed enzymes reach industrial use in hydrolase-like chemistry by 2030; high-barrier new-to-nature chemistry does not, by 2031', zh: '設計酵素在 2030 年前於水解酶類化學進入工業應用；高能障、自然界沒有的化學在 2031 年前不會' },
      basis: { en: 'Catalytic efficiency stratifies almost exactly by reaction barrier height. Every 2025–26 success is hydrolysis: serine hydrolases, cysteine proteases, metalloproteases, phosphotriesterases. The money follows — a major 2026 philanthropic award to an academic institute is specifically for enzymes. Meanwhile the lenacapavir result is 4 of 67 designs at 79% conversion, against directed evolution\'s existing 98%+ and 99.5% enantiomeric excess on comparable chemistry.', zh: '催化效率幾乎完全依反應能障高度分層。2025–26 年每一項成功都是水解：絲胺酸水解酶、半胱胺酸蛋白酶、金屬蛋白酶、磷酸三酯酶。資金也跟著走——2026 年一筆重要的慈善補助給某學術研究機構，就是專門用於酵素。同時，lenacapavir 的成果是 67 個設計中 4 個、79% 轉換率，而定向演化在可比化學上已有 98% 以上轉換率與 99.5% 對掌過量。' },
      watch: { en: 'A designed enzyme named in a commercial process description, not a paper. And which reaction class it is.', zh: '有設計酵素被寫進商業製程說明書（而不是論文）裡。以及它屬於哪個反應類別。' },
      falsify: { en: 'A designed enzyme in commercial production for a C–C bond-forming or redox reaction before 2031.', zh: '2031 年前有設計酵素在 C–C 鍵形成或氧化還原反應上進入商業生產。' } },
    { id: 'P7', conf: 'high', c: 'r',
      t: { en: 'Design compute becomes negligible; validation becomes the entire cost structure', zh: '設計運算變得微不足道；驗證成為全部的成本結構' },
      basis: { en: 'Already true and still moving. A complete agentic binder campaign fell from roughly 2,500 H100-hours (about $10,000) per target to about **$150 of compute in under a year**, while outsourced experimental testing runs **$150–250 per design**. Synthetic DNA is already ≥80% of characterisation cost. By 2028 a full campaign\'s compute should be under $100 while validation exceeds it by 50× or more.', zh: '已經成立，而且還在移動。一場完整的代理式結合蛋白活動，從每個標的約 2,500 個 H100 小時（約 10,000 美元）降到**不到一年後約 150 美元的運算成本**，而委外實驗測試是**每個設計 150–250 美元**。合成 DNA 已佔表徵成本 ≥80%。到 2028 年，一場完整活動的運算應低於 100 美元，而驗證成本會高出 50 倍以上。' },
      watch: { en: 'Whether anyone publishes a **dollars-per-validated-binder** figure. Nobody did in 2026, and it is the number the field most needs.', zh: '是否有人發表**每個已驗證結合蛋白的美元成本**。2026 年沒有人做，而那是這個領域最需要的數字。' },
      falsify: { en: 'Compute returning to more than 20% of total campaign cost.', zh: '運算成本重新回到整場活動總成本的 20% 以上。' } },
    { id: 'P8', conf: 'med-high', c: 'a',
      t: { en: 'No pathway-scale de novo design by 2031 — but single designed components in natural chassis become normal', zh: '2031 年前不會有「途徑規模」的從頭設計——但在天然底盤中放入單一設計元件會變成常態' },
      basis: { en: 'A 2026 perspective on designing cellular systems lists amplification assemblies, error correction and ratchet-type induced dimerisation as "yet to be achieved", and gives **no timeframe**. Nothing in the literature approaches a non-equilibrium system of five or more interacting de novo proteins inside a living cell. What *is* arriving is the single-component layer: designed binders driving transcription, designed tags, designed switches in a natural host.', zh: '2026 年一篇關於設計細胞系統的觀點文章，把放大型組裝體、錯誤校正與棘輪型誘導二聚化列為「尚未達成」，而且**沒有給時間表**。文獻中沒有任何東西接近「活細胞內五個以上互相作用的從頭設計蛋白構成的非平衡系統」。真正正在到來的是單元件層：驅動轉錄的設計結合蛋白、設計標籤、在天然宿主中運作的設計開關。' },
      watch: { en: 'This is **the most directly relevant prediction for a synthetic-biology competition team.** A project that needs five designed proteins to interact is planning against the evidence; a project that needs one designed component in *E. coli* or *B. subtilis* is on trend.', zh: '這是**對合成生物學競賽團隊最直接相關的一條預測。** 需要五個設計蛋白互相作用的專案是在跟證據對做；需要一個設計元件放進大腸桿菌或枯草桿菌的專案，才是順勢。' },
      falsify: { en: 'A published living system with five or more interacting de novo designed proteins performing a non-equilibrium function.', zh: '有已發表的活體系統，包含五個以上互相作用的從頭設計蛋白執行非平衡功能。' } },
    { id: 'P9', conf: 'medium', c: 'a',
      t: { en: 'Natural-language interfaces become the front end, and do not change hit rates', zh: '自然語言介面會成為前端，而且不會改變命中率' },
      basis: { en: 'A 16-billion-parameter text-to-protein model published in October 2026 has genuine wet-lab validation on four targets. But the bottleneck analysis says the binding constraints are target designability, filtering and validation — none of which an interface touches. A better prompt does not make an undesignable epitope designable.', zh: '2026 年十月發表的一個 160 億參數文字轉蛋白模型，在四個標的上有真正的濕實驗驗證。但瓶頸分析指出，真正的限制是標的可設計性、篩選與驗證——這三者都不是介面能碰到的。更好的提示不會讓一個不可設計的抗原決定位變成可設計。' },
      watch: { en: 'Whether any natural-language system reports a *hit rate* improvement on a fixed target set, as opposed to an accessibility improvement.', zh: '是否有任何自然語言系統在固定標的集上報告*命中率*改善，而不是「易用性」改善。' },
      falsify: { en: 'A language-interface method reporting a materially better hit rate than the same underlying generator with a structured interface.', zh: '有語言介面方法報告的命中率，明顯優於同一個底層生成器搭配結構化介面。' } },
    { id: 'P10', conf: 'medium', c: 'a',
      t: { en: 'Closed-loop labs reach 24–72 hours and $20–50 per design by 2030 — not "hours and dollars"', zh: '閉環實驗室在 2030 年前達到 24–72 小時、每個設計 20–50 美元——而不是「幾小時、幾塊錢」' },
      basis: { en: 'The best published platform does hundreds of designs in about 48 hours end-to-end with about 6 hours of hands-on time; a frontier closed-loop system reports about 9 hours per data point at about $87 per design, **with the authors noting real runs were slower because of downtime and robotic malfunctions.** That last clause is why the optimistic projections are wrong: the limiting factor is reliability, not throughput.', zh: '已發表的最佳平台可在約 48 小時端到端完成數百個設計，其中約 6 小時是動手時間；一個前沿閉環系統報告每個資料點約 9 小時、每個設計約 87 美元，**而作者註明實際運行較慢，原因是停機與機器故障。** 最後那句正是樂觀預測錯誤的原因：限制因素是可靠性，不是產能。' },
      watch: { en: 'Published uptime figures, not published cycle times. Any platform that reports cycle time without uptime is reporting a best case.', zh: '要看公布的「運轉率」，不是公布的「週期時間」。任何只報週期時間而不報運轉率的平台，報的都是最佳情況。' },
      falsify: { en: 'A platform demonstrating sub-12-hour cycles at under $20 per design, sustained over a month.', zh: '有平台能在連續一個月內維持每個設計低於 20 美元、週期低於 12 小時。' } },
    { id: 'P11', conf: 'med-high', c: 'a',
      t: { en: 'Open weights survive for structure prediction and bifurcate for function design', zh: '開放權重在結構預測存活，在功能設計分裂' },
      basis: { en: 'Observed twice. AlphaFold3\'s gated weights produced an MIT-licensed equivalent in nine days and four reimplementations in six months; a closed 2026 engine produced an Apache-2.0 equivalent in five months that took the top median DockQ on a standardised benchmark. But function design went the other way: one commercial antibody group states it withholds methodological details "for commercial reasons", and the generative models behind a prominent designed gene editor were never released. **Structure prediction is getting more open; function design is getting less open.**', zh: '已觀察到兩次。AlphaFold3 受限的權重在九天內催生 MIT 授權的等價物、六個月內催生四個重建版本；2026 年一個閉源引擎在五個月內催生 Apache-2.0 等價物，並在標準化基準上拿下最高 DockQ 中位數。但功能設計走的是反方向：某商業抗體團隊表示「因商業理由」不揭露方法細節，而某個知名設計基因編輯器背後的生成模型從未釋出。**結構預測越來越開放；功能設計越來越封閉。**' },
      watch: { en: 'Whether a frontier *function design* model — not a predictor — is released with weights before 2029.', zh: '2029 年前是否有前沿的*功能設計*模型（而非預測器）連權重一起釋出。' },
      falsify: { en: 'No open-weight equivalent appears within twelve months of the next major closed structure-prediction release.', zh: '下一個重要的閉源結構預測模型發布後十二個月內，沒有出現開放權重的等價物。' } },
    { id: 'P12', conf: 'med-high', c: 'a',
      t: { en: 'Function-aware biosecurity screening is adopted by 2029, with documented research friction', zh: '功能感知的生物安全篩檢在 2029 年前被採用，並伴隨已記錄的研究摩擦' },
      basis: { en: 'The same body of work that shows homology-based screening is evadable — a 300-residue disordered tail evaded whole-protein screening in **99 of 100 constructs** — also measures the cost of fixing it: **23.3% of human-protein requests and 63.3% of tested antibody-patent targets were flagged dual-use.** The November 2026 US policy adds NIST verification of screeners but not AI-aware detection, so the technical gap is explicitly still open.', zh: '同一批研究既顯示基於同源性的篩檢可被規避——一段 300 殘基的無序尾端在 **100 個構築體中有 99 個**規避了全蛋白篩檢——也量測了修補的代價：**23.3% 的人類蛋白申請與 63.3% 的受測抗體專利標的被標記為雙重用途。** 2026 年十一月的美國政策增加了 NIST 對篩檢者的查核，但沒有具 AI 意識的偵測，所以技術缺口明確仍然敞開。' },
      watch: { en: 'The NIST screening standards due within 90 days of the November 2026 policy, and whether they address function rather than homology.', zh: '2026 年十一月政策要求在 90 天內出爐的 NIST 篩檢標準，以及它處理的是功能還是同源性。' },
      falsify: { en: 'Major suppliers deploying function-aware screening with an accepted false-positive rate before 2028, or no deployment at all by 2031.', zh: '主要供應商在 2028 年前部署具可接受偽陽性率的功能感知篩檢，或到 2031 年完全沒有部署。' } },
    { id: 'P13', conf: 'high', c: 'r',
      t: { en: 'Insolubility stays the modal failure mode, and no metric exceeds AUROC 0.85', zh: '不溶仍是最常見的失效模式，且沒有任何指標超過 AUROC 0.85' },
      basis: { en: '**65% of de novo design failures are insolubility and aggregation**, and no structure-confidence metric measures solubility at all — it is not in the training objective of any of them. Two wet-lab assays on the same designs agree only 89%, which places a ceiling on what any predictor can score against noisy labels.', zh: '**從頭設計失敗中有 65% 是不溶與聚集**，而沒有任何結構信賴度指標在量測可溶性——那根本不在它們任何一個的訓練目標裡。同一批設計用兩種濕實驗分析只有 89% 一致，這為任何預測器在吵雜標籤上的表現設下天花板。' },
      watch: { en: 'Solubility-specific predictors trained on **designed** rather than natural proteins. That training set does not yet exist at scale, which is precisely bottleneck C.', zh: '以**設計蛋白**（而非天然蛋白）訓練的專門可溶性預測器。那樣的訓練集目前還沒有規模，而這正是瓶頸 C。' },
      falsify: { en: 'Any published predictor above AUROC 0.85 on a held-out set of designed proteins from studies it was not trained on.', zh: '有任何已發表的預測器，在未參與訓練的研究所產出的設計蛋白保留集上達到 AUROC 0.85 以上。' } },
    { id: 'P14', conf: 'medium', c: 'a',
      t: { en: 'Directed evolution does not get displaced — it gets a better starting point', zh: '定向演化不會被取代——它會得到更好的起點' },
      basis: { en: 'Measured in 2026, not asserted: ProteinMPNN-redesigned starting points are more mutationally robust and **evolve better than wild type** in side-by-side continuous-evolution campaigns, reaching more than 79-fold greater selected specificity in one case. Separately, a redesigned enzyme gained 80× from evolution where the wild type gained 6×. The highest-activity de novo enzymes still need evolution on top.', zh: '2026 年量測到的，不是斷言的：經 ProteinMPNN 重新設計的起點突變耐受性更強，在並列的連續演化活動中**比野生型更會演化**，其中一例的選擇專一性高出 79 倍以上。另外，一個重新設計的酵素從演化中獲得 80 倍增益，而野生型只有 6 倍。活性最高的從頭酵素仍需要在上面加一層演化。' },
      watch: { en: 'Whether "design the starting point, then evolve" becomes the stated standard protocol rather than an admission.', zh: '「先設計起點，再演化」是否會從一種承認，變成被明文陳述的標準流程。' },
      falsify: { en: 'A designed enzyme matching natural median efficiency with no evolution step, reproduced independently.', zh: '有設計酵素在不經任何演化步驟下達到天然中位效率，並被獨立重現。' } }
  ];

  PD.pages.future = {
    label: { en: '2027–2031', zh: '未來趨勢' },
    title: { en: '2027–2031 Forecast', zh: '2027–2031 趨勢預測' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 6 · A forecast you can check against us later', zh: '第六章 · 一份你日後可以回來查核我們的預測' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Fourteen ==falsifiable== predictions, each with the thing that would prove it wrong.',
          zh: '十四條==可被否證==的預測，每一條都附上「什麼會證明它錯」。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'A forecast that cannot be wrong is not a forecast. Each prediction below states a claim, a confidence level, the evidence it rests on, the leading indicator to watch, and explicitly what would falsify it. Where the basis is a published roadmap or an expert statement, it is cited; where it is a trend line, the trend is given. The most useful part of this chapter is the last section — what **will not** happen.',
          zh: '一份不可能錯的預測不是預測。下面每一條都明確寫出主張、信心水準、它所依據的證據、要觀察的先行指標，以及什麼會否證它。凡依據是已發表的路線圖或專家陳述者都附出處；凡依據是趨勢線者則給出趨勢。本章最有用的部分是最後一節——**不會**發生什麼。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'fu-when', t: { en: 'When things break', zh: '何時會突破' } },
        { id: 'fu-preds', t: { en: 'The predictions', zh: '預測' } },
        { id: 'fu-not', t: { en: 'What will NOT happen', zh: '不會發生什麼' } },
        { id: 'fu-watch', t: { en: 'What to watch', zh: '要盯什麼' } }
      ]);

      /* ---------- gantt ---------- */
      out += h.sec({
        id: 'fu-when',
        kick: { en: 'Timing', zh: '時程' },
        h2: { en: 'When each bottleneck is likely to break', zh: '每個瓶頸可能何時突破' },
        lede: {
          en: 'Bars span the window in which the breakthrough is plausible, not a point estimate. Where a bar runs to the right edge, the honest answer is "not within this horizon".',
          zh: '每條橫條代表「突破在合理範圍內可能發生」的時間窗，不是點估計。凡橫條延伸到右邊界者，誠實的答案是「在這個時間範圍內不會」。'
        },
        body:
          h.fig({
            kind: 'gantt', tag: { en: 'forecast', zh: '預測' },
            title: { en: 'Expected windows, 2027–2031', zh: '預期時間窗，2027–2031' },
            sub: { en: 'Derived from the bottleneck evidence in the previous chapter plus published roadmaps and funding signals.', zh: '依前一章的瓶頸證據，加上已發表的路線圖與資金訊號推導。' },
            opts: { min: 2026.9, max: 2031.6 },
            data: [
              { label: { en: 'Blind third-party design benchmark, 2 cycles', zh: '盲測第三方設計基準，兩輪' }, start: 2027.0, end: 2029.2, tone: 'g', note: { en: 'governance, not capability', zh: '缺治理，不缺能力' } },
              { label: { en: 'First credible public negative-data corpus', zh: '第一份可信的公開負面資料語料' }, start: 2027.0, end: 2027.8, tone: 'g', note: { en: 'announced for early 2027', zh: '已宣布於 2027 年初' } },
              { label: { en: 'De novo antibodies routine at 10–30%', zh: '從頭抗體在 10–30% 成為常規' }, start: 2027.0, end: 2029.0, tone: 'b' },
              { label: { en: 'Designed enzymes in industrial hydrolysis', zh: '設計酵素進入工業水解' }, start: 2028.0, end: 2030.5, tone: 'b' },
              { label: { en: 'Closed-loop labs at 24–72 h, $20–50/design', zh: '閉環實驗室 24–72 小時、每設計 20–50 美元' }, start: 2028.5, end: 2030.5, tone: 'b' },
              { label: { en: 'Function-aware synthesis screening deployed', zh: '功能感知合成篩檢被部署' }, start: 2028.0, end: 2029.5, tone: 'a' },
              { label: { en: 'Target-designability predictor', zh: '標的可設計性預測器' }, start: 2029.0, end: 2031.5, tone: 'a', note: { en: 'no credible candidate exists yet', zh: '目前沒有可信候選' } },
              { label: { en: 'Solubility predictor above AUROC 0.85', zh: '可溶性預測器超過 AUROC 0.85' }, start: 2029.5, end: 2031.5, tone: 'a' },
              { label: { en: 'Correct Boltzmann-weighted ensembles', zh: '正確的波茲曼加權構型集合' }, start: 2030.0, end: 2031.5, tone: 'r' },
              { label: { en: 'De novo active moiety approved as a drug', zh: '從頭活性成分獲核准為藥物' }, start: 2031.4, end: 2031.6, tone: 'r', note: { en: 'beyond this horizon', zh: '超出此時間範圍' } },
              { label: { en: 'Pathway-scale de novo design in a living cell', zh: '活細胞內途徑規模的從頭設計' }, start: 2031.4, end: 2031.6, tone: 'r', note: { en: 'beyond this horizon', zh: '超出此時間範圍' } },
              { label: { en: 'Enzyme for high-barrier new-to-nature chemistry', zh: '自然界沒有的高能障化學酵素' }, start: 2031.4, end: 2031.6, tone: 'r', note: { en: 'beyond this horizon', zh: '超出此時間範圍' } }
            ],
            caption: {
              en: 'Bars reaching only the right edge mean the prediction is "not within this horizon" rather than "in 2031". Colour follows confidence: green is high, blue is medium-high, amber is medium, red is a negative prediction held with high confidence.',
              zh: '只碰到右邊界的橫條，意思是「在這個時間範圍內不會」，而不是「在 2031 年」。顏色對應信心水準：綠為高、藍為中高、琥珀為中、紅為以高信心所持的否定預測。'
            }
          })
      });

      /* ---------- predictions ---------- */
      var pd = '';
      P.forEach(function (p) {
        pd += '<div class="card" style="margin-bottom:16px;padding:21px 22px">' +
          '<div class="casehead"><div class="casenum">' + p.id + '</div>' +
          '<div style="flex:1;min-width:0"><h4 style="margin:0;font-size:17px;line-height:1.3">' + h.md(p.t) + '</h4></div>' +
          '<span class="chip ' + p.c + '">' + h.T({ en: 'confidence: ', zh: '信心：' }) +
          h.T({ en: p.conf, zh: { 'high': '高', 'med-high': '中高', 'medium': '中' }[p.conf] }) + '</span></div>' +
          h.kv([
            [{ en: 'Basis', zh: '依據' }, p.basis],
            [{ en: 'Leading indicator', zh: '先行指標' }, p.watch],
            [{ en: 'Falsified if', zh: '否證條件' }, p.falsify]
          ]) + '</div>';
      });
      out += h.sec({
        id: 'fu-preds',
        kick: { en: 'The predictions', zh: '預測' },
        h2: { en: 'Fourteen predictions for 2027–2031', zh: '2027–2031 的十四條預測' },
        lede: {
          en: 'Confidence levels mean: **high** — the evidence would have to be wrong for this to fail; **medium-high** — a clear trend with one or two plausible disruptors; **medium** — a reasoned judgement that a reasonable person could take the other side of.',
          zh: '信心水準的意思是：**高**——要讓它失敗，現有證據必須是錯的；**中高**——趨勢清楚，但有一兩個合理的干擾因素；**中**——有理據的判斷，但一個講理的人可以站在對面。'
        },
        body: pd
      });

      /* ---------- what will not happen ---------- */
      out += h.sec({
        id: 'fu-not',
        kick: { en: 'The useful half', zh: '有用的那一半' },
        h2: { en: 'What will NOT happen by 2031', zh: '到 2031 年不會發生什麼' },
        lede: {
          en: 'This is the most valuable section in the chapter, because it is the part that saves time. Every item here is something currently being promised somewhere.',
          zh: '這是本章最有價值的一節，因為它是能省下時間的那部分。這裡每一項，目前都有人在某處承諾。'
        },
        body:
          h.ul([
            { en: '**An approved drug whose active moiety is a fully de novo designed protein.** The pipeline does not contain one far enough along, and drug development does not compress.', zh: '**以完全從頭設計蛋白為活性成分的核准藥物。** 管線裡沒有任何進展足夠的候選，而藥物開發的時程無法壓縮。' },
            { en: '**A designed enzyme at natural efficiency for a high-barrier reaction with no natural counterpart.** Efficiency stratifies by barrier height and every success so far is hydrolysis.', zh: '**在自然界沒有對應物的高能障反應上達到天然效率的設計酵素。** 效率依能障高度分層，而目前每一項成功都是水解。' },
            { en: '**A de novo transporter, gated ion channel or fuel-driven rotary motor.** 2026 delivered solubilisers, nanopore interiors and a DNA-tethered walker. The functional versions are not close.', zh: '**從頭設計的轉運蛋白、閘控離子通道或燃料驅動旋轉馬達。** 2026 年交出的是增溶劑、奈米孔內部，以及一個繫在 DNA 上的行走器。有功能的版本還差得遠。' },
            { en: '**A non-equilibrium system of five or more interacting de novo proteins inside a living cell.** The field\'s own perspective pieces list the required primitives as "yet to be achieved" and give no timeframe.', zh: '**活細胞內由五個以上互相作用的從頭設計蛋白構成的非平衡系統。** 這個領域自己的觀點文章把所需的基本元件列為「尚未達成」，而且沒有給時間表。' },
            { en: '**Routine quantum-mechanically accurate design.** Theozyme-quality geometry is already used as an *input*; computing the whole catalytic cycle at QM accuracy as part of a design loop is not on any published roadmap for this horizon.', zh: '**常規化的量子力學級精確設計。** 理論酵素等級的幾何已被當成*輸入*使用；但把整個催化循環以量子力學精度計算並納入設計迴圈，在這個時間範圍內沒有出現在任何已發表的路線圖上。' },
            { en: '**Confidence metrics that reliably rank designs.** The measured ceiling is around 0.76 AUROC with an inverted reliability curve above 0.6, and the data needed to fix it — large labelled sets of design *outcomes* — does not yet exist.', zh: '**能可靠為設計排序的信賴度指標。** 經量測的上限約 AUROC 0.76，且在 0.6 以上可靠度曲線反轉；而修正它所需的資料——大量帶標籤的設計*結果*——目前還不存在。' },
            { en: '**"Describe the function and get the protein" working end to end.** Natural-language front ends exist and are genuinely useful for accessibility, but they do not touch target designability, filtering or validation, which are where campaigns actually fail.', zh: '**「描述功能就得到蛋白」端到端運作。** 自然語言前端已存在，對易用性確實有幫助，但它們完全碰不到標的可設計性、篩選與驗證——而設計活動實際失敗的地方就在那裡。' },
            { en: '**Design replacing directed evolution.** The 2026 evidence runs the other way: AI-redesigned starting points **evolve better** than wild type, and the best de novo enzymes still need an evolution step.', zh: '**設計取代定向演化。** 2026 年的證據走的是反方向：經 AI 重新設計的起點**比野生型更會演化**，而最好的從頭酵素仍然需要一個演化步驟。' },
            { en: '**Designed proteins validated in vivo as gene-therapy vehicles.** Cargo uptake in cultured cells and a therapeutic vector are separated by about a decade of work that nobody has started publishing.', zh: '**設計蛋白在活體中被驗證為基因治療載體。** 培養細胞中的貨物攝取與一個治療用載體之間，隔著大約十年的工作，而還沒有人開始發表那些工作。' },
            { en: '**A single model that is best at everything.** The 2026 result that pooling five predictors beats 100 seeds of any one of them points the other way: ensembles across architectures, not one winner.', zh: '**一個在所有事情上都最好的模型。** 2026 年「匯總五個預測器勝過任何單一模型跑 100 個種子」的結果指向相反方向：跨架構的集成，而不是單一贏家。' }
          ]) +
          h.take({ en: 'And the thing most likely to surprise us', zh: '以及最可能讓我們意外的那件事' }, {
            en: 'If one of these is wrong, the most likely candidate is the **evaluation** prediction (P3). The demand is measured, several prototypes exist, and all it takes is one funder or one journal consortium deciding to run it. A blind, prospective design benchmark arriving in 2027 rather than 2029 would be the single most consequential surprise in this chapter — and it is the one a well-run community effort could actually cause.',
            zh: '如果這些預測中有一條會錯，最可能的候選是**評估**那一條（P3）。需求已被量測、數個雛形已存在，而需要的只是某個資助方或某個期刊聯盟決定去辦。一個盲測、前瞻的設計基準在 2027 年（而非 2029 年）出現，會是本章最有後果的意外——而這也正是一個運作良好的社群努力真的能促成的那一件。'
          })
      });

      /* ---------- what to watch ---------- */
      out += h.sec({
        id: 'fu-watch',
        kick: { en: 'Practical', zh: '實務' },
        h2: { en: 'Six leading indicators worth checking twice a year', zh: '值得每年查兩次的六個先行指標' },
        lede: {
          en: 'Not news feeds. Each of these is a specific, checkable thing whose state tells you more than a hundred press releases.',
          zh: '不是新聞推送。這裡每一項都是具體、可查核的東西，它的狀態比一百則新聞稿告訴你的更多。'
        },
        body: h.tbl({
          min: 820,
          cols: [
            { t: { en: 'Indicator', zh: '指標' }, w: '24%' },
            { t: { en: 'Where to look', zh: '去哪裡看' }, w: '24%' },
            { t: { en: 'Why it matters more than the headlines', zh: '為什麼它比頭條重要' } }
          ],
          rows: [
            [{ en: '**CASP results**, every two years', zh: '**CASP 結果**，每兩年' }, { en: 'predictioncenter.org — CASP17 results release 29–30 November 2026', zh: 'predictioncenter.org——CASP17 結果於 2026 年 11 月 29–30 日公開' }, { en: 'The only long-running blind benchmark in the field. CASP17 added Immune Complexes, Conformational Ensembles, Organic Ligand–Protein Complexes and self-assessment of accuracy — precisely the four axes on which 2026\'s independent benchmarks found the biggest gaps. It will settle several open arguments.', zh: '這個領域唯一長期運作的盲測基準。CASP17 新增了免疫複合體、構型集合、有機配體—蛋白複合體，以及準確度自評——恰好就是 2026 年獨立基準發現落差最大的那四軸。它會解決好幾個未決爭論。' }],
            [{ en: '**Whether negatives get published**', zh: '**負面結果是否被發表**' }, { en: 'Sponsored competition data releases; the Protein Design Archive', zh: '有贊助競賽的資料釋出；蛋白質設計檔案庫' }, { en: 'The entire published record of de novo monomer design is 614 characterised designs. Any corpus that publishes failures at scale changes what can be learned, and is the precondition for fixing bottleneck E.', zh: '從頭單體設計的全部已發表紀錄是 614 個表徵設計。任何大規模公布失敗的語料庫都會改變「能學到什麼」，而這是修正瓶頸 E 的先決條件。' }],
            [{ en: '**Open weights for a function-design model**', zh: '**功能設計模型的開放權重**' }, { en: 'Hugging Face; Rosetta Commons; the licence text, not the press release', zh: 'Hugging Face；Rosetta Commons；要看授權條文，不是新聞稿' }, { en: 'Structure prediction became more open; function design became less open. Which way this goes determines whether a small team can participate at all after 2028.', zh: '結構預測變得更開放；功能設計變得更封閉。這條線往哪走，決定了 2028 年之後小團隊還能不能參與。' }],
            [{ en: '**Dollars per validated binder**', zh: '**每個已驗證結合蛋白的美元成本**' }, { en: 'Platform papers; CRO price lists', zh: '平台論文；委外機構價目表' }, { en: 'Nobody published this figure in 2026. It is the number that tells you whether a project is feasible, and its absence is itself informative about how the field reports costs.', zh: '2026 年沒有人發表這個數字。它是能告訴你「一個專案可不可行」的那個數字，而它的缺席本身就說明了這個領域如何報告成本。' }],
            [{ en: '**Clinical filings for de novo active moieties**', zh: '**從頭活性成分的臨床申請**' }, { en: 'Trial registries, searching by mechanism rather than by company', zh: '試驗登錄系統，依機制而非依公司搜尋' }, { en: 'Distinguishes a designed *scaffold* from a designed *drug*. As of November 2026 the pipeline for the latter is two programmes, one of them discontinued.', zh: '區分設計的*支架*與設計的*藥物*。截至 2026 年十一月，後者的管線是兩個計畫，其中一個已中止。' }],
            [{ en: '**NIST synthesis-screening standards**', zh: '**NIST 合成篩檢標準**' }, { en: 'Due within 90 days of the November 2026 US policy', zh: '須在 2026 年十一月美國政策後 90 天內出爐' }, { en: 'Whether they address **function** or only homology determines both the biosecurity posture and how much friction any protein-design project will meet when ordering DNA.', zh: '它們處理的是**功能**還是只有同源性，同時決定了生物安全的態勢，以及任何蛋白質設計專案在訂 DNA 時會遇到多少摩擦。' }]
          ]
        })
      });

      return out;
    }
  };
})(window);
