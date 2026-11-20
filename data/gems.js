(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var C = [
    { n: 1, star: 1, t: { en: 'Split-reporter solubility standard', zh: '分裂報告基因可溶性標準' }, village: { en: 'Foundational Advance', zh: '基礎推進（Foundational Advance）' }, feas: 5,
      decides: { en: 'Generate a **deliberately graded** panel — ProteinMPNN at varied sampling temperature, RFdiffusion at varied length — spanning predicted-soluble to predicted-aggregating, then test whether any predictor actually forecasts the outcome. **Decides: whether solubility prediction is usable at all, and which tool to trust.**', zh: '生成一個**刻意分級**的設計面板——ProteinMPNN 用不同採樣溫度、RFdiffusion 用不同長度——跨越「預測可溶」到「預測會聚集」，然後檢驗是否有任何預測器真的能預測結果。**它決定：可溶性預測到底能不能用，以及該信哪個工具。**' },
      tool: { en: 'ProteinMPNN / SolubleMPNN, RFdiffusion, plus NetSolP / SoDoPe / Aggrescan-class predictors', zh: 'ProteinMPNN／SolubleMPNN、RFdiffusion，加上 NetSolP／SoDoPe／Aggrescan 類預測器' },
      wet: { en: 'Split-GFP complementation, SDS-PAGE soluble/insoluble fractions, plate reader', zh: '分裂 GFP 互補、SDS-PAGE 可溶／不可溶分層、盤式讀取儀' },
      why: { en: 'The field\'s own literature says **65% of de novo monomer failures are insolubility and aggregation** — and **no structure-confidence metric measures it.** Producing designs you *expect to fail* is the opposite of normal practice, and it is exactly what makes the correlation measurable. Precedent: a 2025 team deposited its cell-free two-hybrid assay as a Registry part, so a measurement *platform* is already award-credible.', zh: '這個領域自己的文獻說**從頭單體設計失敗中有 65% 是不溶與聚集**——而且**沒有任何結構信賴度指標在量測它。** 刻意生產你*預期會失敗*的設計，與常規做法完全相反，而這正是讓相關性變得可量測的關鍵。先例：2025 年有團隊把自己的無細胞雙雜交分析沉積為 Registry 零件，所以一個量測*平台*本身已經有得獎資格。' },
      risk: { en: 'At n ≈ 30 the confidence interval on a rank correlation is wide. Say so in the abstract rather than hiding it.', zh: 'n ≈ 30 時，等級相關的信賴區間很寬。請在摘要裡直說，不要藏。' } },
    { n: 2, star: 1, t: { en: 'Pre-registered metric-calibration study', zh: '預先登錄的指標校準研究' }, village: { en: 'Foundational Advance', zh: '基礎推進' }, feas: 4,
      decides: { en: 'Rank 30–40 designs by pLDDT, ipTM and a co-folding affinity head, then **commit the ranked list and the thresholds to a timestamped public repository before running a single assay.** Then measure. **Decides: which metric, if any, survives contact with data.**', zh: '用 pLDDT、ipTM 與共摺疊模型的親和力輸出頭為 30–40 個設計排序，然後**在做任何一次實驗之前，把排序清單與門檻提交到帶時間戳的公開程式庫。** 接著量測。**它決定：有沒有任何指標能在接觸資料後存活。**' },
      tool: { en: 'Boltz-2 (MIT, free, has an affinity head) against AlphaFold2 confidence and ESMFold pTM', zh: 'Boltz-2（MIT、免費、有親和力輸出頭）對比 AlphaFold2 信賴度與 ESMFold pTM' },
      wet: { en: 'Expression, split-reporter binding rank order, thermal shift', zh: '表達、分裂報告基因的結合排序、熱位移' },
      why: { en: 'The entire published basis for "do not trust ipTM" in the student community is **five data points on one team\'s wiki**. A 2025 team measured BindCraft\'s own ipTM at **Kendall τ ≈ −0.20** against wet-lab ranking — worse than a coin flip — while umbrella-sampling molecular dynamics reached τ = 0.80. Independently, another team\'s reinforcement-learning pipeline "optimised" a 7 µM binder to **15 µM** — worse — **and published it.** This is a gap a patient club can close better than a laboratory can, because laboratories get no credit for it.', zh: '在學生社群裡，「不要相信 ipTM」這整件事的已發表依據，是**某個團隊 wiki 上的五個資料點**。2025 年有團隊測得 BindCraft 自己的 ipTM 與實驗排序的 **Kendall τ ≈ −0.20**——比丟硬幣還差——而傘狀取樣分子動力學達到 τ = 0.80。另外，另一個團隊的強化學習流程把一個 7 µM 的結合蛋白「最佳化」成 **15 µM**——更差——**而且他們把它發表了。** 這是一個有耐心的社團能比實驗室做得更好的缺口，因為實驗室做這件事得不到任何功勞。' },
      risk: { en: 'Pre-registration is the whole point. If you adjust the thresholds after seeing a single data point, the study is worth nothing — and you will be tempted.', zh: '預先登錄就是全部重點。如果你在看到任何一個資料點之後調整門檻，這份研究就一文不值——而你會很想調。' } },
    { n: 3, t: { en: 'Dengue NS1 sandwich diagnostic with de novo mini-binders', zh: '以從頭迷你結合蛋白做登革熱 NS1 三明治診斷' }, village: { en: 'Diagnostics', zh: '診斷（Diagnostics）' }, feas: 3,
      decides: { en: 'A sandwich assay needs **two non-overlapping epitopes**. Design mini-binder pairs and compute the epitope-pair geometry. **Decides: whether a sandwich format is possible at all, and which pair to build.** That is an unusually clean case of a computation making a build decision.', zh: '三明治分析需要**兩個不重疊的抗原決定位**。設計迷你結合蛋白對，並計算抗原決定位對的幾何關係。**它決定：三明治格式到底可不可行，以及要做哪一對。** 這是「計算真的在做建造決策」的一個異常乾淨的例子。' },
      tool: { en: 'A hosted mini-binder design service with hotspot selection, plus a co-folding model for complex scoring', zh: '帶熱點選擇的託管迷你結合蛋白設計服務，加上共摺疊模型做複合體評分' },
      wet: { en: 'Purchased recombinant NS1, ELISA or split-reporter sandwich', zh: '購買重組 NS1，做 ELISA 或分裂報告基因三明治分析' },
      why: { en: 'The Taiwanese epidemiology points somewhere specific and unglamorous: the large majority of 2026 cases were **imported**, with small local clusters. That makes primary-care-level detection of imported cases the leverage point, not therapeutics. It is also the best Human Practices story in this list after concept 7.', zh: '台灣的流病資料指向一個具體而不浮誇的地方：2026 年絕大多數病例是**境外移入**，伴隨小型本土叢集。這使得槓桿點是基層醫療層級的境外移入病例偵測，而不是治療。在這份清單中，它的人文實踐故事僅次於概念 7。' },
      risk: { en: 'Two independent binders is twice the work and twice the failure probability. Budget for the pair failing and having a single-binder fallback assay.', zh: '兩個獨立的結合蛋白是兩倍的工作量與兩倍的失敗機率。要為「這一對失敗」留預算，並準備單一結合蛋白的備援分析。' } },
    { n: 4, t: { en: 'Ligand-pocket redesign biosensor', zh: '配體口袋重設計生物感測器' }, village: { en: 'Bioremediation or Agriculture', zh: '生物復育或農業' }, feas: 3,
      decides: { en: 'A one-component bacterial transcription factor\'s entire specificity lives in roughly **eight pocket residues**. Redesign them **with the ligand present**. **Decides: which 15–20 transcription-factor variants to order.**', zh: '一個單組分細菌轉錄因子的全部專一性，就住在大約**八個口袋殘基**裡。在**配體存在的情況下**重新設計它們。**它決定：要訂哪 15–20 個轉錄因子變體。**' },
      tool: { en: 'LigandMPNN — a tool that genuinely needs the ligand in the input, so the computation is not decorative', zh: 'LigandMPNN——一個真正需要把配體放進輸入的工具，所以這裡的計算不是裝飾性的' },
      wet: { en: 'Reporter induction curves in *E. coli*, dose–response, specificity panel against related ligands', zh: '在大腸桿菌中的報告基因誘導曲線、劑量反應、對相關配體的專一性面板' },
      why: { en: 'This is the strongest *technical* argument for protein design inside a biosensor project. Most iGEM biosensors swap a promoter; this one changes the molecular recognition itself, and the design tool is doing work that no amount of cloning would substitute for.', zh: '這是生物感測器專案中「為何需要蛋白質設計」最強的*技術*論證。多數 iGEM 生物感測器是換一個啟動子；這個專案改的是分子辨識本身，而設計工具在做的，是任何分子選殖都無法替代的工作。' },
      risk: { en: 'Pocket redesign routinely kills the fold. Expect most variants to be dead and design the panel so that a high death rate is still an informative result.', zh: '口袋重設計經常直接殺死摺疊。要預期大多數變體是死的，並把面板設計成「高死亡率仍然是有資訊量的結果」。' } },
    { n: 5, star: 1, t: { en: 'PET-degrading enzyme thermal-ceiling benchmark', zh: 'PET 降解酵素熱上限基準' }, village: { en: 'Bioremediation', zh: '生物復育' }, feas: 4,
      decides: { en: 'Surface redesign plus **rational disulfide placement** across the IsPETase / FAST-PETase / LCC-ICCG scaffolds. **Decides: which 20 variants to order — chosen on predicted ΔΔG and disulfide geometry, explicitly not on pLDDT.**', zh: '在 IsPETase／FAST-PETase／LCC-ICCG 骨架上做表面重設計，加上**理性的雙硫鍵置入**。**它決定：要訂哪 20 個變體——依預測 ΔΔG 與雙硫鍵幾何選擇，明確地不依 pLDDT。**' },
      tool: { en: 'ProteinMPNN fixed-backbone, ESMFold refolding, and a co-folding model for the substrate pose', zh: 'ProteinMPNN 固定主鏈、ESMFold 重摺疊，以及用共摺疊模型看受質姿態' },
      wet: { en: 'Thermal shift assay for T_m, plus activity on PET film or a model ester substrate at matched conditions', zh: '以熱位移分析測 T_m，加上在相同條件下對 PET 薄膜或模型酯類受質的活性測定' },
      why: { en: 'The reframing is the whole move. FAST-PETase gained **15.2 °C of T_m** (63.3 against 48.1 °C) and *still* dies above 60 °C, peaking at 50 °C — below PET\'s 65–75 °C glass transition. And the mechanism is **actively disputed**: a 2025 paper credits thermal stability over intrinsic catalysis, contradicting the earlier hydrogen-bond account. The missing artefact is not another variant. It is **the matched-conditions T_m-and-activity comparison nobody has published** — which is a thermal shift assay and a plate reader.', zh: '重新框定問題就是整個關鍵。FAST-PETase 的 T_m 提升了 **15.2 °C**（63.3 對 48.1 °C），卻*仍然*在 60 °C 以上失活，最佳溫度在 50 °C——低於 PET 的 65–75 °C 玻璃轉化溫度。而其機制**仍有爭議**：2025 年有論文把改善歸因於熱穩定性而非本質催化，與較早的氫鍵解釋相矛盾。缺少的產出物不是另一個變體，而是**沒有人發表過的「相同條件下 T_m 與活性的對照比較」**——而那只需要一台熱位移分析與一台盤式讀取儀。' },
      risk: { en: 'PET film crystallinity dominates activity variance, so make T_m the headline and treat activity as secondary. Otherwise your result is about your plastic, not your protein.', zh: 'PET 薄膜的結晶度會主導活性的變異，所以把 T_m 當主要結果、活性當次要。否則你的結果講的是你的塑膠，不是你的蛋白。' } },
    { n: 6, star: 1, t: { en: 'Open negative-results registry for protein design', zh: '蛋白質設計的開放負面結果登錄庫' }, village: { en: 'Foundational Advance — deliberately NOT Software & AI', zh: '基礎推進——刻意*不*選 Software & AI' }, feas: 5,
      decides: { en: 'Not a design project — a **provenance schema**. Records tool, version, seed, filters applied in order, and outcome: expressed / soluble / bound / K_D. Ingests public competition datasets, the 614-design curated set and the iGEM Registry, and **recomputes metric-versus-outcome correlations live.**', zh: '這不是設計專案——而是一套**溯源資料結構**。記錄工具、版本、隨機種子、依序套用的篩選，以及結果：是否表達／是否可溶／是否結合／K_D。它會匯入公開競賽資料集、614 個設計的整理集與 iGEM Registry，並**即時重新計算「指標對結果」的相關性。**' },
      tool: { en: 'No design model needed. The value is schema design, data engineering and honest statistics.', zh: '不需要任何設計模型。價值在於資料結構設計、資料工程，以及誠實的統計。' },
      wet: { en: 'None required — which is exactly why it suits a club with rotating membership', zh: '完全不需要——而這正是它適合一個成員會輪替的社團的原因' },
      why: { en: 'A 2026 benchmark says binder evaluation "lacks standard protocols" and relies on *implicit* filtering, and another 2026 paper shows the **choice of negative class alone** shifts apparent difficulty. **The rules reading here is worth money: Software & AI Village teams cannot win Best Software**, so a software-centric project must enter elsewhere and select Software as its Gold Specialization. The Best Software requirement list — a public repository, an OSI licence, a pinned lockfile, a reproducible build — is effectively a maintainability spec. Build to it once and the artefact survives membership turnover.', zh: '2026 年一個基準指出，結合蛋白評估「缺乏標準流程」且依賴*隱性*篩選；另一篇 2026 年論文則顯示，**僅僅是陰性類別的選擇**就會改變表面上的難度。**這裡的規則解讀很值錢：Software & AI Village 的隊伍不能拿 Best Software**，所以軟體為核心的專案必須報名其他 Village，並把 Software 選為 Gold Specialization。Best Software 的要求清單——公開程式庫、OSI 授權、鎖定版本檔、可重現的建置——實際上就是一份可維護性規格。照它做一次，產出物就能撐過成員輪替。' },
      risk: { en: 'A registry nobody contributes to is a database of your own work. Design for the single-contributor case first and treat external adoption as upside.', zh: '沒有人貢獻的登錄庫，就是一個裝著你自己作品的資料庫。先為「只有一個貢獻者」的情況設計，把外部採用當成額外的紅利。' } },
    { n: 7, t: { en: 'Recombinant snake-toxin antigens as an antivenom QC standard', zh: '以重組蛇毒毒素抗原作為抗蛇毒血清品管標準' }, village: { en: 'Therapeutics', zh: '治療（Therapeutics）' }, feas: 3,
      decides: { en: 'Three-finger toxins need the correct **disulfide topology** to fold in *E. coli*, and that is the actual blocker. Design stabilised, disulfide-faithful antigen variants. **Decides: which construct and which host strain to attempt.**', zh: '三指毒素必須有正確的**雙硫鍵拓樸**才能在大腸桿菌中摺疊，而那正是真正的卡點。設計穩定化、雙硫鍵忠實的抗原變體。**它決定：要嘗試哪一個構築體與哪一個宿主菌株。**' },
      tool: { en: 'ESMFold or a co-folding model for disulfide-topology checking; ProteinMPNN with cysteines fixed', zh: '用 ESMFold 或共摺疊模型檢查雙硫鍵拓樸；ProteinMPNN 固定半胱胺酸位置' },
      wet: { en: 'Expression screening, non-reducing versus reducing SDS-PAGE, antibody recognition by ELISA against existing antivenom', zh: '表達篩選、非還原與還原 SDS-PAGE 對照、以 ELISA 用現有抗蛇毒血清做抗體辨識' },
      why: { en: 'The best Human Practices story in the list, grounded in a documented, local and genuinely unsolved problem: Taiwan\'s CDC is the sole antivenom manufacturer, and batch potency varies for reasons the literature admits are not controlled. A recombinant, defined QC antigen is a real need. Note the 2025 *Nature* precedent for designed proteins against three-finger toxins — but that was neutralising binders, which is a much harder project than a QC standard.', zh: '這份清單中最好的人文實踐故事，而且建立在一個有文獻記錄、在地、且真正未解的問題上：台灣疾管署是唯一的抗蛇毒血清製造者，而批次效價會變動，文獻也承認其原因並未被控制。一個重組、定義明確的品管抗原是真實需求。注意 2025 年《自然》有針對三指毒素設計蛋白的先例——但那是中和型結合蛋白，比品管標準困難得多。' },
      risk: { en: 'Disulfide-rich proteins in *E. coli* are a classic time sink. Budget a strain screen and have a cell-free expression fallback.', zh: '富含雙硫鍵的蛋白在大腸桿菌中是經典的時間黑洞。要為菌株篩選留預算，並準備無細胞表達作為備援。' } },
    { n: 8, t: { en: 'Protein-design decision-card curriculum', zh: '蛋白質設計「決策卡」課程' }, village: { en: 'Art & Design, or match a partner project\'s village', zh: 'Art & Design，或配合合作專案的 Village' }, feas: 5,
      decides: { en: 'Uses design outputs as teaching material rather than producing new ones. **Decides: nothing technical — and says so, explicitly.** That honesty is the pedagogical content.', zh: '把設計輸出當成教材使用，而不是產生新的設計。**它決定：技術上什麼都不決定——而且明確這樣說。** 那份誠實本身就是教學內容。' },
      tool: { en: 'Free-tier tools only, so any school can reproduce every exercise: ColabFold, a ProteinMPNN notebook, a free co-folding tier', zh: '只用免費層級的工具，讓任何學校都能重現每個練習：ColabFold、ProteinMPNN 筆記本、免費層級的共摺疊工具' },
      wet: { en: 'None. The deliverable is a tested teaching module with pre/post assessment.', zh: '不需要。產出物是一個經過測試、含前後測評量的教學模組。' },
      why: { en: 'The dominant student failure mode in this field is **a pLDDT plot with no decision attached**, and nobody has built a teaching intervention against it. The card is deliberately austere: what was run, with version and seed; what the number was; **what decision it changed**; and what the opposite result would have implied. **If the third field is blank, the figure belongs in the supplementary material.**', zh: '這個領域學生最常見的失效模式，是**一張沒有連著任何決策的 pLDDT 圖**，而沒有人針對它做過教學介入。這張卡刻意做得很樸素：跑了什麼（含版本與隨機種子）、數字是多少、**它改變了什麼決策**，以及相反的結果會意味著什麼。**如果第三格空白，那張圖就該放進補充資料。**' },
      risk: { en: 'Education projects are judged on evidence of learning, not on how nice the material looks. Build the assessment before the slides.', zh: '教育型專案是以「學習發生了」的證據來評審，不是以教材多漂亮。先做評量，再做簡報。' } },
    { n: 9, t: { en: 'Do language-model sequences evade homology-based synthesis screening?', zh: '語言模型生成的序列會規避同源性篩檢嗎？' }, village: { en: 'Foundational Advance', zh: '基礎推進' }, feas: 3,
      decides: { en: 'Generate **benign** sequences with no natural homologue by construction, then measure homology detectability against screening-style search. **Decides: whether a 2017-era finding still holds against 2026-era generative models.**', zh: '以構造上就沒有天然同源物的方式生成**良性**序列，然後以篩檢式搜尋量測其同源可偵測性。**它決定：2017 年代的發現在面對 2026 年代的生成模型時是否仍然成立。**' },
      tool: { en: 'A protein language model for generation; standard homology search for detection', zh: '用蛋白質語言模型生成；用標準同源搜尋做偵測' },
      wet: { en: 'None — and deliberately none. Nothing is synthesised.', zh: '不需要——而且刻意不需要。什麼都不合成。' },
      why: { en: 'Scientifically live and with a strong iGEM precedent: a 2017 team showed nine codon-recoding events defeated BLAST-based screening entirely, and responsibly disclosed to synthesis companies before publication. A 2018 team created a dual-use badge that "immediately incentivized other teams". The award criterion for biosafety and security **explicitly rewards artefacts with utility beyond your own project.**', zh: '科學上是活問題，而且 iGEM 有強力先例：2017 年有團隊證明九次密碼子重編碼就能完全擊敗基於 BLAST 的篩檢，並在發表前負責地向合成公司揭露。2018 年有團隊做出雙重用途標章，「立刻激勵了其他隊伍」。生物安全與生物保安的獎項判準**明確獎勵「對你自己專案之外也有用」的產出物。**' },
      risk: { en: '**This one needs a stop-and-think before it starts.** Use only benign targets, decide the disclosure path before generating anything, and talk to your safety committee first. Done carelessly this is the one concept on the list that could go badly wrong.', zh: '**這一個在開始前需要停下來想清楚。** 只用良性標的、在生成任何東西之前就決定揭露路徑，並先跟你的安全委員會談。若草率行事，這是整份清單上唯一可能出大問題的概念。' } },
    { n: 10, star: 1, t: { en: '*Bacillus subtilis* secretion chassis for designed proteins', zh: '為設計蛋白打造的枯草桿菌分泌底盤' }, village: { en: 'Foundational Advance', zh: '基礎推進' }, feas: 3,
      decides: { en: 'If insolubility and aggregation cause 65% of failures, a **secreting host sidesteps inclusion bodies entirely.** The design decision is which signal peptide and propeptide to pair with which designed fold. **Decides: the pairing, and therefore whether the protein is ever seen at all.**', zh: '如果不溶與聚集造成 65% 的失敗，那麼一個**會分泌的宿主可以完全繞過包涵體。** 設計決策是：哪個訊號肽與前肽該配哪個設計摺疊。**它決定：這個配對，也因此決定這個蛋白到底會不會被看見。**' },
      tool: { en: 'Signal-peptide prediction plus structure prediction of the mature designed fold; ProteinMPNN for surface optimisation', zh: '訊號肽預測，加上成熟設計摺疊的結構預測；用 ProteinMPNN 做表面最佳化' },
      wet: { en: 'Supernatant SDS-PAGE, secretion yield, activity in the medium without lysis', zh: '培養液上清 SDS-PAGE、分泌產量、不破菌即可測的培養液活性' },
      why: { en: 'The only concept here that attacks the field\'s actual bottleneck at the **chassis** level rather than the design level. One 2026 team got 25 of 85 designs to express; a secreting host changes that denominator. It also targets a thinly contested special award, and — importantly for GEMS — **it builds on the team\'s existing *B. subtilis* work rather than starting an organism from scratch.**', zh: '這是整份清單中唯一從**底盤**層級（而非設計層級）攻擊這個領域真正瓶頸的概念。2026 年有團隊讓 85 個設計中 25 個表達成功；一個會分泌的宿主會改變那個分母。它同時瞄準一個競爭稀薄的特別獎，而且——對 GEMS 來說很重要——**它建立在團隊既有的枯草桿菌工作之上，而不是從零開始養一個新生物。**' },
      risk: { en: '*B. subtilis* protocols do not transfer from *E. coli*, and a first season can disappear into host behaviour. Treat season one as chassis characterisation and say so in the proposal.', zh: '枯草桿菌的實驗流程無法從大腸桿菌沿用，而第一個賽季可能整個消失在「摸索宿主行為」裡。把第一季定位為底盤特性建立，並在提案裡直說。' } },
    { n: 11, t: { en: 'EV71 capsid-binding detection reagent', zh: 'EV71 外殼結合偵測試劑' }, village: { en: 'Infectious Diseases', zh: '傳染病（Infectious Diseases）' }, feas: 2,
      decides: { en: 'A designed binder against a conserved capsid epitope. **Decides: which conserved surface patch is both accessible and designable.**', zh: '針對一個保守外殼抗原決定位的設計結合蛋白。**它決定：哪一塊保守表面同時是可接觸的、也是可設計的。**' },
      tool: { en: 'A mini-binder design service or BindCraft; a co-folding model for complex scoring', zh: '迷你結合蛋白設計服務或 BindCraft；用共摺疊模型做複合體評分' },
      wet: { en: 'Purchased recombinant capsid protein, ELISA or split reporter', zh: '購買重組外殼蛋白，做 ELISA 或分裂報告基因' },
      why: { en: 'Local relevance, and Taiwan\'s enterovirus surveillance infrastructure — established after the 1998 outbreak — makes stakeholder engagement unusually tractable.', zh: '在地相關性；而台灣在 1998 年疫情後建立的腸病毒監測體系，使利害關係人的接觸異常容易。' },
      risk: { en: 'Held at feasibility 2 because the epidemiology needs re-verification — EV71 cycles every three to four years — and a conformational capsid epitope is a hard design target.', zh: '可行性只給 2，因為流病資料需要重新確認——EV71 每三到四年一個週期——而且構型型外殼抗原決定位是困難的設計標的。' } }
  ];

  PD.pages.gems = {
    label: { en: 'GEMS Pathways', zh: 'GEMS 路徑' },
    title: { en: 'GEMS Pathways', zh: 'GEMS 應用路徑' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 7 · Where this leaves GEMS Taiwan', zh: '第七章 · 這一切對 GEMS Taiwan 意味著什麼' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The field\'s most valuable gaps are the ones ==no funded laboratory has an incentive to fill==.',
          zh: '這個領域最有價值的缺口，正是==沒有任何有補助的實驗室有動機去填==的那些。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Everything in the previous six chapters points at the same conclusion for a student team: do not compete on hit rates, compete on **measurement and honesty** — because those are what the field is documented to lack, they need equipment a teaching lab already owns, and they compound across seasons instead of resetting every year. This chapter sets out the Science for Good tracks, eleven iGEM 2027 concepts, the compounding assets, and an unflinching list of what a student team cannot do.',
          zh: '前六章的一切，對一支學生團隊都指向同一個結論：不要在命中率上競爭，要在**量測與誠實**上競爭——因為那是文獻記錄中這個領域所缺的，它們需要的是教學實驗室已經有的設備，而且它們會跨賽季累積，而不是每年歸零。本章列出科學向善的軌道、十一個 iGEM 2027 概念、可複利累積的資產，以及一份毫不迴避的「學生團隊做不到什麼」清單。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'g-lead', t: { en: 'Start here', zh: '從這裡開始' } },
        { id: 'g-cal', t: { en: '2027 calendar', zh: '2027 行事曆' } },
        { id: 'g-fail', t: { en: 'The failure mode', zh: '失效模式' } },
        { id: 'g-sfg', t: { en: 'Science for Good', zh: '科學向善' } },
        { id: 'g-concepts', t: { en: '11 concepts', zh: '十一個概念' } },
        { id: 'g-cluster', t: { en: 'The cluster', zh: '叢集策略' } },
        { id: 'g-assets', t: { en: 'Compounding assets', zh: '複利資產' } },
        { id: 'g-cannot', t: { en: 'What you cannot do', zh: '做不到什麼' } },
        { id: 'g-rules', t: { en: 'Rules that bind', zh: '會綁住你的規則' } },
        { id: 'g-road', t: { en: 'Roadmap', zh: '路線圖' } }
      ]);

      /* ---------- lead finding ---------- */
      out += h.sec({
        id: 'g-lead',
        kick: { en: 'Start here', zh: '從這裡開始' },
        h2: { en: 'The strategy is already written down — in iGEM\'s own Judge Handbook', zh: '這套策略已經被寫下來了——就在 iGEM 自己的評審手冊裡' },
        lede: {
          en: 'Before any new plan, read what the judges wrote about GEMS Taiwan. It is the most transferable lesson in this entire report, and it did not require a single novel method.',
          zh: '在任何新計畫之前，先讀評審寫過的關於 GEMS Taiwan 的那段話。那是整份報告裡最可遷移的一課，而且它完全不需要任何新方法。'
        },
        body:
          h.take({ en: 'What the 2026 Judge Handbook says', zh: '2026 年評審手冊怎麼說' }, {
            en: '**GEMS Taiwan 2022 is cited by name in the 2026 Judge Handbook as one of four worked exemplars for Best Model.** Four seasons on, the team\'s own prior work is still the reference material iGEM hands to new judges. And the reason it was chosen is the point: the judges wrote that the team "used known models and software. **However, their ability to use, describe and report their work was exceptional.**" Each model written up as an academic paper. Every parameter cited to its literature or iGEM source. Assumptions stated. And an honest admission that they had not had time to measure those parameters themselves.',
            zh: '**GEMS Taiwan 2022 在 2026 年評審手冊中被指名，列為 Best Model 的四個示範案例之一。** 四個賽季之後，這支隊伍自己過去的作品，仍然是 iGEM 發給新任評審的參考教材。而它之所以被選上，正是重點所在：評審寫道，該隊「使用了既有的模型與軟體。**然而，他們使用、描述與報告自己工作的能力是卓越的。**」每個模型都寫成學術論文的格式。每個參數都標註到它的文獻或 iGEM 出處。假設被明確陳述。並且誠實承認他們沒有時間自己量測那些參數。'
          }) +
          h.p(
            { en: 'No novel method. No new software. **No protein design at all.** What compounded was reporting discipline — and that is also, precisely, the posture this report has been arguing for across six chapters. The field\'s measured problem is that its numbers are softer than they look; the thing GEMS was already rewarded for is making numbers legible and honest.', zh: '沒有新方法。沒有新軟體。**完全沒有蛋白質設計。** 能累積下來的是報告的紀律——而那也恰恰是本報告前六章一直在主張的姿態。這個領域被量測出來的問題是「它的數字比看起來更軟」；而 GEMS 早就因為「讓數字可讀且誠實」而被獎勵過。' },
            { en: 'So the strategic question is not "how do we do protein design". It is **"what measurement does protein design need that we can report better than anyone else?"** The rest of this chapter answers that.', zh: '所以真正的策略問題不是「我們怎麼做蛋白質設計」，而是**「蛋白質設計需要什麼量測，而那件事我們能報告得比任何人都好？」** 本章其餘部分在回答這個問題。' }
          ) +
          h.note({
            en: 'Source: the 2026 iGEM Judge Handbook (PDF), as read during research for this report. The handbook also features a Taiwanese high-school team from 2017 — High School Grand Prize plus Best Wiki — as its long-standing high-school exemplar, nine years on. Local precedent for the compounding argument exists.',
            zh: '出處：2026 年 iGEM 評審手冊（PDF），為本報告研究期間所讀。該手冊也把一支 2017 年的台灣高中隊伍——高中組首獎加上 Best Wiki——列為長期沿用的高中示範案例，至今九年。「複利累積」這個論點在本地有先例。'
          })
      });

      /* ---------- calendar ---------- */
      out += h.sec({
        id: 'g-cal',
        kick: { en: 'Logistics first', zh: '先談後勤' },
        h2: { en: 'The 2027 season is about a month shorter', zh: '2027 賽季大約短了一個月' },
        lede: {
          en: 'This is the single most actionable fact in the chapter, and it is purely about the calendar. The 2027 Grand Jamboree is **18–21 October 2027 at the Paris Convention Centre** — roughly four weeks earlier than 2026, which ran from 13 November.',
          zh: '這是本章最具行動性的單一事實，而它純粹是行事曆的問題。2027 年 Grand Jamboree 是 **2027 年 10 月 18–21 日，在巴黎會議中心（Paris Convention Centre）**——比 2026 年的 11 月 13 日起約早四週。'
        },
        body:
          h.fig({
            kind: 'gantt', tag: { en: 'calendar', zh: '行事曆' },
            title: { en: 'Jamboree dates: 2026 against 2027', zh: '大會日期：2026 對 2027' },
            sub: {
              en: 'Both in Paris. Four weeks earlier is not a scheduling detail — for a design project it is an entire design–build–test cycle.',
              zh: '兩屆都在巴黎。早四週不是排程細節——對一個設計型專案來說，那是整整一個設計—建造—測試循環。'
            },
            opts: { min: 2026.0, max: 2027.95 },
            data: [
              { label: { en: 'Usable design–build–test season, 2026', zh: '2026 年可用的設計—建造—測試賽季' }, start: 2026.1, end: 2026.868, tone: 'b', note: { en: 'Jamboree from 13 Nov', zh: '大會自 11 月 13 日起' } },
              { label: { en: 'Usable design–build–test season, 2027', zh: '2027 年可用的設計—建造—測試賽季' }, start: 2027.1, end: 2027.794, tone: 'a', note: { en: 'Jamboree 18–21 Oct — one cycle shorter', zh: '大會 10 月 18–21 日——少一個循環' } },
              { label: { en: 'A realistic design→order→assay cycle', zh: '現實中一次設計→訂購→檢測的循環' }, start: 2027.1, end: 2027.27, tone: 'g', note: { en: '~6–8 weeks for a school team', zh: '學校團隊約 6–8 週' } },
              { label: { en: 'Wiki freeze and writing, non-negotiable', zh: 'Wiki 凍結與撰寫，不可壓縮' }, start: 2027.72, end: 2027.794, tone: 'r' }
            ],
            caption: {
              en: '2026 dates are from iGEM\'s own competition calendar, read on 20 November 2026: on-site badge collection opened 12 November and Expo Days began 13 November, in Paris. **The 2027 dates were supplied by the GEMS team and had not yet appeared on competition.igem.org when this page was compiled** — re-check them against the official calendar once iGEM publishes it, and note that no 2027 theme or registration calendar had been announced either.',
              zh: '2026 年的日期取自 iGEM 自己的競賽行事曆，於 2026 年 11 月 20 日讀取：現場領證於 11 月 12 日開放，Expo Days 自 11 月 13 日開始，地點在巴黎。**2027 年的日期由 GEMS 團隊提供，本頁彙編時尚未出現在 competition.igem.org 上**——待 iGEM 正式公布後請再對照一次；另外，2027 年的主題與報名行事曆當時也都尚未公布。'
            }
          }) +
          h.warn({
            en: '**Why this is the first thing in the chapter.** For a project where design feeds expression feeds measurement, four weeks is **one entire design–build–test cycle** — and in published design campaigns the later rounds are the ones that work, because each round is informed by the last. A team that plans on the 2026 calendar loses its last iteration, which is usually the one that succeeds. **Move every internal deadline forward by a month**, and treat any slack you find as a bonus round rather than part of the plan.',
            zh: '**為什麼這是本章的第一件事。** 對一個「設計餵給表達、表達餵給量測」的專案而言，四週就是**整整一個設計—建造—測試循環**——而在已發表的設計活動中，真正成功的往往是後面幾輪，因為每一輪都吸收了上一輪的資訊。一支照 2026 年行事曆規劃的隊伍，會失去最後一次迭代，而那通常正是成功的那一次。**把所有內部截止日往前移一個月**，並把多出來的餘裕當成額外的一輪，而不是計畫的一部分。'
          })
      });

      /* ---------- failure mode ---------- */
      out += h.sec({
        id: 'g-fail',
        kick: { en: 'The thing to avoid', zh: '要避開的那件事' },
        h2: { en: 'The dominant student failure mode, named precisely', zh: '學生最常見的失效模式，精確命名' },
        lede: {
          en: 'It is not incompetence. The pipelines are usually competent and well documented. The failure is that they terminate in a ranked table that changes nothing.',
          zh: '這不是能力不足。那些流程通常是有能力的、文件也齊全。失敗在於它們終結於一張「什麼也不改變」的排序表。'
        },
        body:
          h.warn({
            en: '**The failure:** a team runs AlphaFold — or the full RFdiffusion → ProteinMPNN → AlphaFold2 pipeline — reports pLDDT, ipTM and PAE, and attaches **no decision**. Under the 2026 rubric this is specifically costly, because Best Model asks whether the model helped the team understand a part, device or system, and whether **measurements** informed the model. A confidence table answers neither question. The handbook\'s own contrast is explicit: the 2025 winner was praised for "the directness of the connection between model and experiment… the modelling drove experimental design rather than rationalizing results after the fact."',
            zh: '**失效的樣子：** 一支隊伍跑了 AlphaFold——或完整的 RFdiffusion → ProteinMPNN → AlphaFold2 流程——報告 pLDDT、ipTM 與 PAE，然後**沒有連著任何決策**。在 2026 年的評分標準下這特別昂貴，因為 Best Model 問的是：模型是否幫助團隊理解某個零件、裝置或系統，以及**量測**是否回饋到模型。一張信賴度表格兩個問題都沒回答。評審手冊自己的對照很明確：2025 年的得獎者被讚許的是「模型與實驗之間連結的直接性……建模驅動了實驗設計，而不是事後為結果找理由。」'
          }) +
          h.take({ en: 'The rule to adopt, verbatim', zh: '該採用的規則，原文照用' }, {
            en: 'No computational figure enters the wiki or a report unless its caption states **what decision it changed**. If the opposite result would have changed nothing, the figure is decoration — move it to the supplementary material.',
            zh: '任何計算圖表要進 wiki 或報告，圖說必須寫出**它改變了什麼決定**。如果相反的結果什麼也不會改變，那張圖就只是裝飾——移到補充資料去。'
          }) +
          h.fig({
            kind: 'funnel', tag: { en: 'reality check', zh: '現實檢核' },
            title: { en: 'The funnel a student team actually faces', zh: '學生團隊實際面對的漏斗' },
            sub: {
              en: 'Not discouragement — arithmetic. Knowing these numbers in January is what lets you design a project whose *result* does not depend on winning the lottery.',
              zh: '這不是打擊士氣，是算術。在一月就知道這些數字，才能設計一個*成果*不必靠中樂透的專案。'
            },
            opts: { log: true },
            data: [
              { label: { en: 'Backbones generated (published campaigns)', zh: '生成的主鏈（已發表的活動）' }, v: 7000, note: { en: 'roughly 7,000 : 1 working design', zh: '大約 7,000 : 1 個可用設計' } },
              { label: { en: 'Designs a school team can afford to order', zh: '學校團隊訂得起的設計數' }, v: 20, note: { en: '~$1,300–4,500 of DNA', zh: 'DNA 約 1,300–4,500 美元' } },
              { label: { en: 'Expected to express solubly', zh: '預期能可溶表達' }, v: 6, note: { en: 'one 2026 team: 25 of 85', zh: '2026 年某團隊：85 個中 25 個' } },
              { label: { en: 'With the intended secondary structure', zh: '二級結構符合預期' }, v: 5, note: { en: '17% of soluble monomers fail CD', zh: '可溶單體中 17% 在圓二色上失敗' } },
              { label: { en: 'Showing the intended function', zh: '展現預期功能' }, v: 2, note: { en: 'if the target is favourable', zh: '若標的條件有利' } }
            ],
            caption: {
              en: 'Composed from published failure analyses and one 2026 iGEM team\'s reported expression rate. **The honest conclusion: design a project where "5 of 20 expressed and here is what that tells us" is a publishable result**, rather than one that needs a working binder to have a conclusion at all.',
              zh: '由已發表的失敗分析與 2026 年某支 iGEM 隊伍報告的表達率組合而成。**誠實的結論是：設計一個讓「20 個中 5 個表達成功，而這告訴我們以下的事」本身就是可發表成果的專案**，而不是一個「非得有一個能用的結合蛋白才有結論」的專案。'
            }
          })
      });

      /* ---------- science for good ---------- */
      out += h.sec({
        id: 'g-sfg',
        kick: { en: 'Science for Good', zh: '科學向善' },
        h2: { en: 'Four tracks with no competition deadline', zh: '四條沒有比賽截止日的軌道' },
        lede: {
          en: 'Science for Good at GEMS means a club-style long-horizon plan: pick a few good-enough problems, invest from several directions, take as long as it takes. These four are chosen because the value grows monotonically with patience, they need no breakthrough, and they hand off cleanly across a rotating membership.',
          zh: '在 GEMS，科學向善指的是一個社團式的長期計畫：挑幾個夠好的題目，從多個方向投入，需要多久就做多久。選這四條，是因為它們的價值會隨耐心單調成長、不需要任何突破，而且能在成員輪替之間乾淨地交接。'
        },
        body:
          h.cards([
            {
              chips: [{ t: '★', k: 'g' }, { t: { en: 'no wet lab', zh: '不需濕實驗' }, k: 'b' }, { t: { en: 'maps to 3 awards', zh: '對應三個獎項' }, k: 'v' }],
              h: { en: 'Track 1 · Negative-result and failed-design curation', zh: '軌道一 · 負面結果與失敗設計的整理' },
              p: [{
                en: 'The team that curated the field\'s only independent outcome dataset had to **exclude designs with no reported experimental outcome** — the published record systematically omits failures. A decade of de novo monomer design produced **614** openly characterised designs, total.',
                zh: '整理出本領域唯一獨立結果資料集的團隊，必須**排除沒有報告實驗結果的設計**——已發表的紀錄系統性地遺漏失敗。十年的從頭單體設計，總共只產出 **614** 個公開表徵的設計。'
              }, {
                en: 'No novelty needed, no wet lab needed, value monotonic in patience. Maps simultaneously to Bronze Contribution, Best Software, and the empirical base for Best Model.',
                zh: '不需要新穎性、不需要濕實驗，價值隨耐心單調成長。同時對應 Bronze 的 Contribution、Best Software，以及 Best Model 的實證基礎。'
              }]
            },
            {
              chips: [{ t: '★', k: 'g' }, { t: { en: 'labs get no credit for it', zh: '實驗室做這個沒功勞' }, k: 'a' }],
              h: { en: 'Track 2 · Confidence-metric calibration against measured outcomes', zh: '軌道二 · 以實測結果校準信賴度指標' },
              p: [{
                en: 'Laboratories get no credit for measuring whether their own filters work, **which is precisely why a club can own this.** The independent measurement says confidence-metric AUC is 0.60–0.72, that combining metrics does not help, and that many failed designs score better than successful ones. A 2026 study found standard global validation metrics "failed to detect interface-level design defects".',
                zh: '實驗室量測「自己的篩選器到底有沒有用」得不到任何功勞，**而這正是一個社團可以據為己有的原因。** 獨立量測顯示信賴度指標的 AUC 是 0.60–0.72、把指標合併沒有幫助，而且許多失敗的設計分數比成功的更高。2026 年一項研究發現，標準的全域驗證指標「未能偵測到界面層級的設計缺陷」。'
              }, {
                en: 'The pre-registration habit is what makes a club\'s version credible: freeze the ranking, then measure.',
                zh: '讓社團版本可信的，是預先登錄這個習慣：先把排序凍結，再量測。'
              }]
            },
            {
              chips: [{ t: { en: 'under-contested', zh: '競爭稀薄' }, k: 'g' }, { t: { en: 'student-scale precedents', zh: '有學生規模的先例' }, k: 'b' }],
              h: { en: 'Track 3 · Biosafety and biosecurity education and tooling', zh: '軌道三 · 生物安全與生物保安的教育與工具' },
              p: [{
                en: 'Under-contested, and iGEM\'s own exemplars are student-scale: a 2017 team showed nine codon-recoding events defeated homology-based screening entirely and disclosed responsibly to synthesis companies before publication; a 2018 team created a **dual-use badge** that "immediately incentivized other teams"; a 2024 team adapted an aerospace hazard-analysis method into a reusable template.',
                zh: '競爭稀薄，而且 iGEM 自己的示範案例都是學生規模的：2017 年有團隊證明九次密碼子重編碼就能完全擊敗基於同源性的篩檢，並在發表前負責地向合成公司揭露；2018 年有團隊做出**雙重用途標章**，「立刻激勵了其他隊伍」；2024 年有團隊把航太的危害分析方法改編成可重複使用的模板。'
              }, {
                en: 'The award criterion **explicitly rewards artefacts with utility beyond your own project** — which is the definition of a compounding asset.',
                zh: '這個獎項的判準**明確獎勵「對你自己專案之外也有用」的產出物**——而那正是複利資產的定義。'
              }]
            },
            {
              chips: [{ t: '★', k: 'g' }, { t: { en: 'best club fit', zh: '最適合社團' }, k: 'v' }],
              h: { en: 'Track 4 · Education and community-science tooling', zh: '軌道四 · 教育與公民科學工具' },
              p: [{
                en: 'The dominant student failure mode is pedagogical, and nobody teaches against it. The artefact is the **decision card**: what was run, with version and seed; what the number was; **what decision it changed**; and what the opposite result would have implied. A blank third field means the figure is supplementary.',
                zh: '學生最常見的失效模式是教學上的，而沒有人針對它教學。產出物就是**決策卡**：跑了什麼（含版本與隨機種子）、數字是多少、**它改變了什麼決策**，以及相反的結果會意味著什麼。第三格空白，就代表那張圖是補充資料。'
              }, {
                en: 'The citizen-science route is publication-grade: in October 2025, Foldit players improved deposited structures, "sometimes surpassing expert and automated methods".',
                zh: '公民科學路線具有發表水準：2025 年十月，Foldit 玩家改善了已沉積的結構，「有時超越專家與自動化方法」。'
              }]
            }
          ], 'g2') +
          h.note({
            en: 'A fifth track — local-relevance targets in Taiwan (dengue, enterovirus, PET degradation, snake antivenom quality control, aquaculture pathogens) — is treated in the concepts section below, because those are competition projects with a Science for Good tail rather than the reverse.',
            zh: '第五條軌道——台灣在地相關標的（登革熱、腸病毒、PET 降解、抗蛇毒血清品管、水產養殖病原）——放在下面的概念章節處理，因為那些是「帶著科學向善尾巴的競賽專案」，而不是反過來。'
          })
      });

      /* ---------- concepts ---------- */
      out += h.sec({
        id: 'g-concepts',
        kick: { en: 'iGEM 2027', zh: 'iGEM 2027' },
        h2: { en: 'Eleven concepts, scored for a student team', zh: '十一個概念，以學生團隊的角度評分' },
        lede: {
          en: 'Feasibility is 1–5, where 5 means a motivated high-school team finishes it. Every concept states what the protein-design step actually **decides** — the test of whether the computation earns its place rather than decorating the wiki.',
          zh: '可行性為 1–5，5 代表一支有動力的高中隊伍能完成。每個概念都明確寫出蛋白質設計那一步實際**決定**了什麼——這是「計算是否稱得上有用、而不是在裝飾 wiki」的檢驗標準。'
        },
        body:
          h.fig({
            kind: 'bars', tag: { en: 'scoring', zh: '評分' },
            title: { en: 'Feasibility for a student team', zh: '對學生團隊的可行性' },
            sub: { en: 'Starred concepts are the recommended cluster — see the next section for why they belong together.', zh: '加星的概念是建議的叢集——為何它們屬於同一組，見下一節。' },
            opts: { max: 5, dec: 0 },
            data: C.slice().sort(function (a, b) { return b.feas - a.feas || a.n - b.n; }).map(function (c) {
              return {
                label: { en: (c.star ? '★ ' : '') + c.n + '. ' + c.t.en.replace(/\*/g, ''), zh: (c.star ? '★ ' : '') + c.n + '. ' + c.t.zh.replace(/\*/g, '') },
                v: c.feas,
                color: c.star ? '#1baf7a' : '#2a78d6'
              };
            }),
            legend: [{ c: '#1baf7a', n: { en: 'Recommended cluster', zh: '建議叢集' } }, { c: '#2a78d6', n: { en: 'Alternative', zh: '替代方案' } }],
            caption: { en: 'Scored by this report against the constraints in the "what you cannot do" section below. Feasibility is not quality — concepts 3 and 7 are the better *stories* if a Village Award and stakeholder relationships matter more than a compounding technical base.', zh: '由本報告依下方「做不到什麼」一節的限制評分。可行性不等於品質——如果 Village 獎與利害關係人關係比「可累積的技術基礎」更重要，概念 3 與 7 是更好的*故事*。' }
          }) +
          h.tbl({
            min: 1000,
            cols: [
              { t: '#', w: '3%' },
              { t: { en: 'Concept', zh: '概念' }, w: '18%' },
              { t: { en: 'Village', zh: 'Village' }, w: '13%' },
              { t: { en: 'What the design step decides', zh: '設計那一步決定什麼' } },
              { t: { en: 'Wet-lab validation', zh: '濕實驗驗證' }, w: '18%' },
              { t: { en: 'Feas.', zh: '可行性' }, w: '6%', num: true }
            ],
            rows: C.map(function (c) {
              return [String(c.n) + (c.star ? ' ★' : ''), '**' + h.T(c.t) + '**', c.village, c.decides, c.wet, String(c.feas) + '/5'];
            })
          })
      });

      /* ---------- concept detail ---------- */
      var cd = '';
      C.forEach(function (c) {
        cd += '<div class="card" style="margin-bottom:16px;padding:21px 22px">' +
          '<div class="casehead"><div class="casenum">' + c.n + '</div>' +
          '<div style="flex:1;min-width:0"><h4 style="margin:0;font-size:17px">' + h.md(c.t) + '</h4>' +
          '<p class="small" style="margin:2px 0 0">' + h.md(c.village) + '</p></div>' +
          (c.star ? '<span class="chip g">' + h.T({ en: 'cluster', zh: '叢集' }) + '</span>' : '') +
          '<span class="chip">' + h.T({ en: 'feasibility ', zh: '可行性 ' }) + c.feas + '/5</span></div>' +
          h.kv([
            [{ en: 'The design decision', zh: '設計決策' }, c.decides],
            [{ en: 'Tool', zh: '工具' }, c.tool],
            [{ en: 'Validation', zh: '驗證' }, c.wet],
            [{ en: 'Why it is worth doing', zh: '為什麼值得做' }, c.why],
            [{ en: 'The honest risk', zh: '誠實的風險' }, c.risk]
          ]) + '</div>';
      });
      out += h.sec({ body: cd });

      /* ---------- cluster ---------- */
      out += h.sec({
        id: 'g-cluster',
        kick: { en: 'The strategy', zh: '策略' },
        h2: { en: 'Why five of these belong together', zh: '為什麼其中五個屬於同一組' },
        lede: {
          en: 'Concepts 1, 2, 5, 6 and 10 share infrastructure. Run as a cluster across several seasons, the fourth season is cheaper than the first — which is the entire point of a club-style programme.',
          zh: '概念 1、2、5、6、10 共用基礎設施。把它們當成一個叢集跨賽季經營，第四季會比第一季便宜——而那正是社團式計畫的全部意義。'
        },
        body:
          h.fig({
            kind: 'flow', tag: { en: 'programme design', zh: '計畫設計' },
            title: { en: 'One assay, four uses, across seasons', zh: '一個分析方法，四種用途，跨越賽季' },
            sub: { en: 'The dashed return path is the point: each season\'s data makes the next season\'s question sharper rather than starting over.', zh: '虛線的回饋路徑才是重點：每一季的資料讓下一季的問題更鋒利，而不是從頭開始。' },
            data: {
              stages: [
                { label: { en: 'Build the assay', zh: '建立分析方法' }, tone: 'g', sub: { en: 'Concept 1 — split-reporter solubility panel', zh: '概念 1——分裂報告基因可溶性面板' }, items: [{ en: 'graded design panel', zh: '分級設計面板' }, { en: 'split-GFP + SDS-PAGE + CD', zh: '分裂 GFP + SDS-PAGE + 圓二色' }, { en: 'deposit as a Registry part', zh: '沉積為 Registry 零件' }] },
                { label: { en: 'Point it at the metrics', zh: '把它指向指標' }, tone: 'b', sub: { en: 'Concept 2 — pre-registered calibration', zh: '概念 2——預先登錄的校準' }, items: [{ en: 'freeze the ranking first', zh: '先凍結排序' }, { en: 'same panel, new question', zh: '同一面板，新問題' }] },
                { label: { en: 'Point it at real targets', zh: '把它指向真實標的' }, tone: 'b', sub: { en: 'Concept 5 — PET enzyme thermal ceiling', zh: '概念 5——PET 酵素熱上限' }, items: [{ en: 'T_m is the headline', zh: 'T_m 是主要結果' }, { en: 'populates the dataset', zh: '為資料集提供內容' }] },
                { label: { en: 'Fix the expression problem', zh: '解決表達問題' }, tone: 'a', sub: { en: 'Concept 10 — B. subtilis secretion chassis', zh: '概念 10——枯草桿菌分泌底盤' }, items: [{ en: 'builds on existing team work', zh: '建立在團隊既有工作上' }, { en: 'changes the denominator', zh: '改變分母' }] },
                { label: { en: 'Publish all of it, failures included', zh: '全部發表，含失敗' }, tone: 'v', sub: { en: 'Concept 6 — negative-results registry', zh: '概念 6——負面結果登錄庫' }, items: [{ en: 'the venue for everything above', zh: '以上全部的發表場所' }, { en: 'survives membership turnover', zh: '能撐過成員輪替' }] }
              ],
              loop: { en: 'each season sharpens the next', zh: '每一季讓下一季更鋒利' }
            },
            caption: {
              en: 'Concepts 1 and 2 are the same assay and the same design panel viewed two ways. Concept 6 is their publication venue. Concept 5 supplies real targets whose melting temperatures populate the dataset. Concept 10 is the chassis that makes all of them express.',
              zh: '概念 1 與 2 是同一個分析方法、同一個設計面板的兩種看法。概念 6 是它們的發表場所。概念 5 提供真實標的，其熔點數據填充資料集。概念 10 是讓以上全部能表達出來的底盤。'
            }
          }) +
          h.note({
            en: 'If the priority is instead a Village Award and stakeholder relationships in one season, concepts **3 (dengue)** and **7 (antivenom QC)** are the better stories — both are grounded in documented Taiwanese needs, and concept 7 addresses a problem the national manufacturer\'s own literature admits is uncontrolled.',
            zh: '如果優先目標改成「在單一賽季取得 Village 獎與利害關係人關係」，那麼概念 **3（登革熱）** 與 **7（抗蛇毒血清品管）** 是更好的故事——兩者都建立在有文獻記錄的台灣需求上，而概念 7 處理的問題，連國家製造單位自己的文獻都承認未受控制。'
          })
      });

      /* ---------- compounding assets ---------- */
      out += h.sec({
        id: 'g-assets',
        kick: { en: 'Compounding', zh: '複利' },
        h2: { en: 'Eight artefacts you build once and reuse every season', zh: '做一次、每季都能重用的八個產出物' },
        lede: {
          en: 'The argument for a multi-year programme is not sentiment. Teams that have won across several seasons in different categories did so by carrying artefacts forward, and iGEM recognises it.',
          zh: '多年計畫的論據不是情懷。那些跨越數個賽季、在不同類別得獎的隊伍，靠的就是把產出物往前帶，而 iGEM 也認可這一點。'
        },
        body:
          h.tbl({
            min: 860,
            cols: [
              { t: { en: 'Asset', zh: '資產' }, w: '19%' },
              { t: { en: 'What makes it reusable', zh: '它為何可重用' } },
              { t: { en: 'Why it pays next season', zh: '為何下一季會回本' }, w: '30%' }
            ],
            rows: [
              [{ en: '**A characterised chassis**', zh: '**一個已建立特性的底盤**' }, { en: 'Growth curves, induction behaviour, secretion yields and quirks of one host, measured by you rather than cited', zh: '某一個宿主的生長曲線、誘導行為、分泌產量與怪癖，由你量測而不是引用' }, { en: 'Season one spends months learning the organism. Season two does not. For GEMS this points at *B. subtilis*, where prior team work already exists.', zh: '第一季會花幾個月學那個生物。第二季不會。對 GEMS 來說這指向枯草桿菌，而團隊已有既有工作。' }],
              [{ en: '**A measurement protocol**', zh: '**一套量測流程**' }, { en: 'A written, version-controlled assay with its own controls, dynamic range and a stated error estimate', zh: '一份書面、有版本控制的分析流程，附自己的對照、動態範圍與明確的誤差估計' }, { en: 'This is what Best Measurement rewards, and it is the asset that makes every later result comparable to every earlier one.', zh: '這是 Best Measurement 所獎勵的，也是讓後來每個結果都能與之前每個結果比較的那個資產。' }],
              [{ en: '**A parts collection**', zh: '**一個零件集合**' }, { en: 'Registry parts with measured, not predicted, characterisation — including the ones that did not work', zh: 'Registry 零件，附上「量測的」而非「預測的」特性資料——包含沒成功的那些' }, { en: 'A measurement *platform* deposited as a part is already award-credible; a 2025 team did exactly this with a cell-free assay.', zh: '把一個量測*平台*沉積為零件本身已有得獎資格；2025 年有團隊就是這樣做了一個無細胞分析。' }],
              [{ en: '**An internal tool**', zh: '**一個內部工具**' }, { en: 'Built to the Best Software requirement list: public repository, OSI licence, pinned lockfile, reproducible build', zh: '照 Best Software 的要求清單打造：公開程式庫、OSI 授權、鎖定版本檔、可重現的建置' }, { en: 'Those requirements are a maintainability spec in disguise. Meeting them is what lets a tool survive the members who wrote it graduating.', zh: '那些要求其實是一份偽裝的可維護性規格。達成它們，才能讓一個工具在寫它的人畢業後存活。' }],
              [{ en: '**A dataset**', zh: '**一份資料集**' }, { en: 'Structured outcomes with provenance — tool, version, seed, filters, result, including failures', zh: '帶溯源資訊的結構化結果——工具、版本、隨機種子、篩選、結果，含失敗' }, { en: 'The field is documented to lack exactly this. It is the one asset whose value to outsiders grows every year you keep adding to it.', zh: '文獻明確記錄這個領域缺的就是這個。它是唯一「只要你持續累加，對外人的價值每年都成長」的資產。' }],
              [{ en: '**A review or literature map**', zh: '**一份綜述或文獻地圖**' }, { en: 'A maintained, cited survey of one narrow area — like this report', zh: '對某個狹窄領域持續維護、有引用的整理——像這份報告' }, { en: 'Cheap to update, expensive to create. It is also the fastest way to onboard new members, which is the real constraint on a club.', zh: '更新便宜、創建昂貴。它也是讓新成員最快上手的方式，而那才是社團真正的限制。' }],
              [{ en: '**A teaching module**', zh: '**一個教學模組**' }, { en: 'A tested curriculum with pre- and post-assessment, reproducible on free-tier tools', zh: '一套經測試、含前後測的課程，在免費層級工具上即可重現' }, { en: 'Education awards are judged on evidence of learning. A module with assessment data is reusable evidence, year after year.', zh: '教育獎項是以「學習發生了」的證據來評審。一個有評量數據的模組，是可以年年重用的證據。' }],
              [{ en: '**A stakeholder relationship**', zh: '**一段利害關係人關係**' }, { en: 'A named clinician, manufacturer, regulator or community group who has already met the team', zh: '一位已經見過團隊的具名臨床醫師、製造者、監管者或社群團體' }, { en: 'The single hardest thing to rebuild from scratch, and the thing Integrated Human Practices is actually measuring.', zh: '最難從零重建的那一件事，也是 Integrated Human Practices 真正在量的那一件事。' }]
            ]
          })
      });

      /* ---------- cannot do ---------- */
      out += h.sec({
        id: 'g-cannot',
        kick: { en: 'Constraints', zh: '限制' },
        h2: { en: 'What a student team cannot do in protein design', zh: '學生團隊在蛋白質設計上做不到什麼' },
        lede: {
          en: 'This list exists so that a plan is not built on something impossible. Every item is a documented constraint, not a judgement about ability.',
          zh: '這份清單的存在，是為了避免計畫建立在不可能的事情上。每一項都是有文獻記錄的限制，不是對能力的評價。'
        },
        body:
          h.tbl({
            min: 860,
            cols: [
              { t: { en: 'Cannot', zh: '做不到' }, w: '24%' },
              { t: { en: 'Why, specifically', zh: '具體原因' } },
              { t: { en: 'What to do instead', zh: '改做什麼' }, w: '26%' }
            ],
            rows: [
              [{ en: '**Run BindCraft at paper scale**', zh: '**以論文規模跑 BindCraft**' }, { en: 'The README recommends **at least 32 GB of GPU memory**; free Colab\'s T4 has 16 GB with a session cap. A published PD-L1 benchmark needed about **33 hours on a B200-class GPU** for 101 accepted designs, and the README warns difficult targets may need "a few thousand trajectories".', zh: 'README 建議**至少 32 GB GPU 記憶體**；免費 Colab 的 T4 只有 16 GB，還有時長上限。一個已發表的 PD-L1 基準在 B200 級 GPU 上花約 **33 小時**才產出 101 個通過設計，而 README 警告困難標的可能需要「數千條軌跡」。' }, { en: 'Borrow a university GPU (one 2025 team\'s route), use a hosted service\'s free job allowance, or **pilot four to ten designs and time it** before committing.', zh: '借用大學的 GPU（2025 年某團隊走的路）、使用託管服務的免費任務額度，或**先試跑四到十個設計並計時**再投入。' }],
              [{ en: '**Legally obtain AlphaFold3 weights**', zh: '**合法取得 AlphaFold3 權重**' }, { en: 'Code is Apache-2.0, but you may only use the model parameters if received **directly from Google**, restricted to scientists with academic affiliations, non-commercial, approved case by case. A high-school club is not obviously eligible. The free web server is **not** a substitute: its output cannot be used in docking or screening tools — the commonest downstream use.', zh: '程式碼是 Apache-2.0，但你只能使用**直接從 Google 取得**的模型參數，且限具學術隸屬的科學家、非商業用途、逐案核准。一個高中社團顯然不符資格。免費的網頁伺服器**不是**替代品：它的輸出不得用於對接或篩選工具——而那正是最常見的下游用途。' }, { en: 'Use Boltz (MIT) or another open co-folding model. They are competitive and in one 2026 benchmark an open model took the top median DockQ.', zh: '改用 Boltz（MIT）或其他開源共摺疊模型。它們有競爭力，而在 2026 年某個基準上，一個開源模型拿下最高的 DockQ 中位數。' }],
              [{ en: '**Measure affinity properly**', zh: '**正確量測親和力**' }, { en: 'No surface plasmon resonance, biolayer interferometry or isothermal titration calorimetry. Split-reporter and ELISA give rank order at best. Even a well-equipped 2025 team\'s umbrella-sampling calculations could not produce a reliable K_D — one free-energy error was ±4 × 10⁴ µM.', zh: '沒有表面電漿共振、生物層干涉或等溫滴定熱量。分裂報告基因與 ELISA 最多只能給排序。即使是設備良好的 2025 年某團隊，其傘狀取樣計算也無法得到可靠的 K_D——其中一個自由能誤差是 ±4 × 10⁴ µM。' }, { en: 'Design the project so **rank order is the result**. That is exactly what the metric-calibration concept needs.', zh: '把專案設計成**排序本身就是成果**。而那正是指標校準那個概念所需要的。' }],
              [{ en: '**Beat an antibody**', zh: '**打敗一個抗體**' }, { en: 'Public blind hit rates: 2.5% then 13.2% on one target, 9.6% on another, 2.8% on a hard one. Best de novo EGFR binder 82 nM against **1.21 nM** for an optimised known binder.', zh: '公開盲測命中率：某標的先 2.5%、後 13.2%，另一個 9.6%，一個困難標的 2.8%。最佳從頭 EGFR 結合蛋白 82 nM，而經最佳化的已知結合蛋白是 **1.21 nM**。' }, { en: '**Optimising an existing binder beats designing one.** If you need a binder to work, start from one that already does.', zh: '**改良既有結合蛋白勝過從頭設計一個。** 如果你需要一個能用的結合蛋白，就從一個已經能用的開始。' }],
              [{ en: '**Escape the expression wall**', zh: '**繞過表達這道牆**' }, { en: 'One 2026 team expressed **25 of 85** designs. The realistic published funnel is roughly **7,000 backbones to one working design**, and the filter that kills designs is expression and solubility, not binding.', zh: '2026 年某團隊讓 **85 個中 25 個**設計表達成功。已發表的現實漏斗大約是**7,000 條主鏈換一個可用設計**，而真正殺死設計的關卡是表達與可溶性，不是結合。' }, { en: 'Either attack it directly (the secretion-chassis concept) or design a project where a low expression rate is itself the measurement.', zh: '要麼直接攻擊它（分泌底盤那個概念），要麼設計一個「低表達率本身就是量測結果」的專案。' }],
              [{ en: '**Structurally validate anything**', zh: '**對任何東西做結構驗證**' }, { en: 'No crystallography, cryo-electron microscopy or NMR. You will never confirm the fold.', zh: '沒有晶體學、冷凍電顯或核磁共振。你永遠無法確認摺疊。' }, { en: 'Design the project so this does not matter. Circular dichroism tells you the secondary-structure *class*, which is often the decision-relevant question anyway.', zh: '把專案設計成「這件事不重要」。圓二色光譜能告訴你二級結構的*類別*，而那往往就是真正與決策相關的問題。' }],
              [{ en: '**Trust the tool\'s own confidence as a ranking**', zh: '**把工具自己的信賴度當成排序**' }, { en: 'Measured AUC 0.60–0.72 against experimental outcome; a 2025 iGEM measurement put ipTM\'s rank correlation at **τ ≈ −0.20**. Failed designs routinely outscore successful ones.', zh: '相對實驗結果的量測 AUC 為 0.60–0.72；2025 年一項 iGEM 量測把 ipTM 的等級相關測得 **τ ≈ −0.20**。失敗的設計經常分數高於成功的。' }, { en: 'Use confidence as a **floor** to discard obvious failures, then rank on something physical — or make the ranking question itself your project.', zh: '把信賴度當成**下限**來淘汰明顯的失敗，然後用物理性的東西排序——或者，把「排序」這個問題本身變成你的專案。' }],
              [{ en: '**Touch BSL-2+, animals or human samples** (high school)', zh: '**接觸 BSL-2 以上、動物或人體樣本**（高中）' }, { en: 'The iGEM White List forbids anything requiring a Check-in or an Animal Use Form for high-school teams.', zh: 'iGEM 的 White List 禁止高中隊伍做任何需要 Check-in 或動物使用表的事。' }, { en: 'Purchase recombinant antigens rather than handling pathogens. Every concept in the list above is designed to be White-List compatible.', zh: '購買重組抗原，而不是處理病原。上面清單中每個概念都是依 White List 相容設計的。' }],
              [{ en: '**Use AI to generate figures or data**', zh: '**用 AI 生成圖表或資料**' }, { en: 'New in 2026 and strict: AI-generated, AI-modified or AI-"cleaned" **evidentiary** figures are never allowed, model outputs included, and violations are research misconduct reportable to the responsible conduct committee.', zh: '2026 年新增且嚴格：AI 生成、AI 修改或 AI「清理」過的**證據性**圖表一律不允許，模型輸出也算在內，違反者屬研究不當行為，可向負責的委員會舉報。' }, { en: 'Keep a **reproducible provenance log from day one** — tool, version, seed, parameters — for every predicted-structure figure. This is also what Best Model rewards.', zh: '**從第一天就保留可重現的溯源紀錄**——工具、版本、隨機種子、參數——給每一張預測結構圖。這同時也是 Best Model 所獎勵的。' }]
            ]
          }) +
          h.take({ en: 'And the one that is actually good news', zh: '以及一件其實是好消息的事' }, {
            en: 'You **cannot** make a novel protein and prove it — and that is fine, because this report is not about claiming breakthroughs. The honest framing is exactly the one that already won GEMS a Best Model citation: use known tools, describe and report the work exceptionally, state your assumptions, and admit what you did not measure.',
            zh: '你**無法**做出一個新蛋白並證明它——而這沒關係，因為本報告從來不是為了宣稱突破。那個誠實的框架，正是已經為 GEMS 贏得 Best Model 示範引用的那一個：使用既有工具、把工作描述與報告得卓越、陳述你的假設，並承認你沒有量測什麼。'
          })
      });

      /* ---------- rules ---------- */
      out += h.sec({
        id: 'g-rules',
        kick: { en: 'Rules', zh: '規則' },
        h2: { en: 'Four rules that specifically constrain a design-heavy project', zh: '四條專門會綁住「設計為重」專案的規則' },
        lede: {
          en: 'All four are from the 2026 cycle and all four change project architecture rather than just paperwork. Verify them against the current year\'s handbook before committing — rules move.',
          zh: '這四條都來自 2026 年的賽季，而且四條都會改變專案架構，不只是文書作業。在投入之前請對照當年度的手冊確認——規則會變。'
        },
        body: h.cards([
          { chips: [{ t: { en: 'architecture', zh: '架構' }, k: 'r' }], h: { en: 'Software & AI Village teams cannot win Best Software', zh: 'Software & AI Village 的隊伍不能拿 Best Software' }, p: { en: 'A software-centric protein-design project must therefore enter a **different** village — Foundational Advance is the natural fit — and select Software as its Gold Specialization. This is a pure reading of the handbook and it is worth money: picking the wrong village forfeits the award the project is best placed to win.', zh: '因此，軟體為核心的蛋白質設計專案必須報名**別的** Village——基礎推進是自然的選擇——並把 Software 選為 Gold Specialization。這純粹是手冊的解讀，但它很值錢：選錯 Village 等於放棄這個專案最有機會拿到的那個獎。' } },
          { chips: [{ t: { en: 'integrity', zh: '誠信' }, k: 'r' }], h: { en: 'AI-generated evidentiary figures are never allowed', zh: 'AI 生成的證據性圖表一律不允許' }, p: { en: 'New in 2026 and absolute: AI-generated, AI-modified or AI-"cleaned" evidentiary figures — **model outputs included** — are prohibited, and violations constitute research misconduct reportable to the responsible conduct committee. For a protein-design project this means every predicted-structure figure needs a reproducible provenance log: tool, version, seed, parameters. Build that habit in week one; retrofitting it is miserable.', zh: '2026 年新增且絕對：AI 生成、AI 修改或 AI「清理」過的證據性圖表——**包含模型輸出**——一律禁止，違反者構成研究不當行為，可向負責的委員會舉報。對一個蛋白質設計專案而言，這意味著每一張預測結構圖都需要可重現的溯源紀錄：工具、版本、隨機種子、參數。第一週就建立這個習慣；事後補做會很痛苦。' } },
          { chips: [{ t: { en: 'safety', zh: '安全' }, k: 'a' }], h: { en: 'The White List binds high-school teams hard', zh: 'White List 對高中隊伍綁得很緊' }, p: { en: 'Nothing requiring a Check-in or an Animal Use Form. In practice: purchase recombinant antigens rather than handling pathogens, and choose targets whose protein you can buy. Every concept in this chapter was selected to be compatible with that constraint, which is why none of them involves infecting anything.', zh: '任何需要 Check-in 或動物使用表的都不行。實務上：購買重組抗原而不是處理病原，並選擇「其蛋白買得到」的標的。本章每個概念都是依這個限制挑選的，這也是為什麼它們沒有一個涉及感染任何東西。' } },
          { chips: [{ t: { en: 'judging', zh: '評審' }, k: 'b' }], h: { en: 'Best Model asks two questions a confidence table cannot answer', zh: 'Best Model 問的兩個問題，信賴度表格答不出來' }, p: { en: 'Did the model help the team **understand** a part, device or system? And did **measurements** inform the model? A ranked table of pLDDT values answers neither. The 2025 winner was praised for the directness of the connection between model and experiment — the modelling drove experimental design rather than rationalising results afterwards. Design your figures around those two sentences.', zh: '模型是否幫助團隊**理解**某個零件、裝置或系統？以及**量測**是否回饋到模型？一張 pLDDT 排序表兩個都答不出來。2025 年的得獎者被讚許的是模型與實驗之間連結的直接性——建模驅動了實驗設計，而不是事後為結果找理由。請圍繞這兩句話來設計你的圖表。' } }
        ], 'g2')
      });

      /* ---------- roadmap ---------- */
      out += h.sec({
        id: 'g-road',
        kick: { en: 'Roadmap', zh: '路線圖' },
        h2: { en: 'A four-phase programme, starting now', zh: '一個四階段計畫，從現在開始' },
        lede: {
          en: 'Written for the compressed 2027 calendar. Phase 0 costs nothing and can start this week; it is also the phase most teams skip, which is why most teams discover their compute limits in July.',
          zh: '依 2027 年壓縮後的行事曆撰寫。第 0 階段不花錢、這週就能開始；它也是大多數隊伍會跳過的階段，而這正是為什麼大多數隊伍在七月才發現自己的運算限制。'
        },
        body:
          h.phases([
            {
              h: { en: 'Phase 0 · Before anything is ordered (now – January)', zh: '第 0 階段 · 在訂任何東西之前（現在–一月）' },
              p: { en: 'Establish what you can actually run, and set the habits that the judging rubric and the integrity rules both require.', zh: '確立你實際能跑什麼，並建立評分標準與誠信規則都要求的那些習慣。' },
              items: [
                { en: 'Pilot the whole computational stack on **one** easy target and time every step. ProteinMPNN on a laptop, an open co-folding model on free Colab, and a binder-design run only if you have a borrowed GPU.', zh: '在**一個**容易的標的上試跑整套運算流程，並為每一步計時。ProteinMPNN 在筆電上、開源共摺疊模型在免費 Colab 上，而結合蛋白設計只有在你借到 GPU 時才跑。' },
                { en: 'Start the **provenance log** on day one: tool, version, seed, parameters, for every run. Required by the 2026 integrity rules and rewarded by Best Model.', zh: '第一天就開始記**溯源紀錄**：每次執行的工具、版本、隨機種子、參數。2026 年誠信規則要求，而 Best Model 會獎勵。' },
                { en: 'Write the **decision-card** template and agree the rule: no computational figure without a stated decision.', zh: '寫好**決策卡**模板並約定規則：沒有明確決策的計算圖表不准出現。' },
                { en: 'Read the current year\'s Judge Handbook, including the Best Model exemplars — one of which is your own 2022 project.', zh: '讀當年度的評審手冊，包括 Best Model 的示範案例——其中一個是你們自己 2022 年的專案。' }
              ],
              done: { en: 'You can state, with timings, exactly which design tools you can run and how many designs per week. Almost no team can say this in January.', zh: '你能帶著計時數據，明確說出你能跑哪些設計工具、每週能做幾個設計。幾乎沒有隊伍在一月能說出這件事。' }
            },
            {
              h: { en: 'Phase 1 · Build the assay, not the design (February – April)', zh: '第 1 階段 · 先建分析方法，不是設計（二月–四月）' },
              p: { en: 'The assay is the compounding asset. Build and characterise it on known proteins before any designed protein enters the building.', zh: '分析方法才是會複利累積的資產。在任何設計蛋白進入實驗室之前，先用已知蛋白把它建好並建立特性。' },
              items: [
                { en: 'Split-reporter solubility assay with a known-soluble and a known-aggregating control. Measure the dynamic range and state the error.', zh: '分裂報告基因可溶性分析，附一個已知可溶與一個已知聚集的對照。量測動態範圍並陳述誤差。' },
                { en: 'Thermal shift assay on a purchased protein with a published T_m, so you know your instrument agrees with the literature.', zh: '用一個有已發表 T_m 的購買蛋白做熱位移分析，確認你的儀器與文獻一致。' },
                { en: 'Deposit the protocol and, if it qualifies, the measurement construct as a Registry part.', zh: '把流程沉積下來；若符合條件，把量測構築體也沉積為 Registry 零件。' }
              ],
              done: { en: 'A written protocol with its own controls, dynamic range and error estimate — reusable by next season\'s team without you in the room.', zh: '一份書面流程，附自己的對照、動態範圍與誤差估計——下一季的團隊在你不在場的情況下也能重用。' }
            },
            {
              h: { en: 'Phase 2 · Freeze the prediction, then measure (May – July)', zh: '第 2 階段 · 先凍結預測，再量測（五月–七月）' },
              p: { en: 'This is the phase that produces the result nobody else has, and it works precisely because it is cheap and disciplined rather than ambitious.', zh: '這是產出「別人沒有的成果」的階段，而它之所以可行，正因為它便宜而有紀律，而不是因為它有野心。' },
              items: [
                { en: 'Generate the graded design panel. Order about 20 constructs — budget roughly US$1,300–4,500 of DNA.', zh: '生成分級設計面板。訂約 20 個構築體——DNA 預算約 1,300–4,500 美元。' },
                { en: '**Commit the ranked prediction and your thresholds to a timestamped public repository before the DNA arrives.** This single act is what makes the result citable.', zh: '**在 DNA 到貨之前，把排序預測與門檻提交到帶時間戳的公開程式庫。** 這一個動作就是讓成果可被引用的關鍵。' },
                { en: 'Measure expression, solubility, secondary structure and T_m for **all** of them, including the failures. Especially the failures.', zh: '為**全部**設計量測表達、可溶性、二級結構與 T_m，包含失敗的那些。尤其是失敗的那些。' }
              ],
              done: { en: 'A rank correlation between prediction and measurement, with an honest confidence interval, on a panel you pre-registered. That is a contribution whether the correlation is strong, weak or negative.', zh: '在一個你預先登錄過的面板上，得到預測與量測之間的等級相關，並附誠實的信賴區間。無論相關是強、是弱還是負的，那都是一項貢獻。' }
            },
            {
              h: { en: 'Phase 3 · Publish all of it, failures included (August – October)', zh: '第 3 階段 · 全部發表，含失敗（八月–十月）' },
              p: { en: 'Remember the calendar: the 2027 Jamboree is 18–21 October, about four weeks earlier than 2026. The writing window is not negotiable and it is shorter than you think.', zh: '記住行事曆：2027 年大會是 10 月 18–21 日，比 2026 年約早四週。撰寫的時間窗不可壓縮，而且比你想的更短。' },
              items: [
                { en: 'Every model written up with its parameters cited to source, its assumptions stated, and what you did not measure admitted. This is exactly the standard the judges praised in 2022.', zh: '每個模型都寫成完整的形式：參數標註到出處、假設明確陳述、沒量測的部分如實承認。這正是 2022 年評審所讚許的標準。' },
                { en: 'Publish the dataset with provenance, under an open licence, in a repository that will outlive the season.', zh: '把帶溯源資訊的資料集以開放授權發表，放在一個能比這個賽季活得更久的程式庫裡。' },
                { en: 'Hand over: a written onboarding path so next season starts at phase 1, not phase 0.', zh: '交接：寫一份上手路徑，讓下一季從第 1 階段開始，而不是第 0 階段。' }
              ],
              done: { en: 'The next team inherits a working assay, a dataset, a protocol and a stakeholder contact — and the season after that is cheaper again. That is what Science for Good means in practice.', zh: '下一支團隊繼承一個可用的分析方法、一份資料集、一套流程與一個利害關係人聯絡人——而再下一季又更便宜。這就是科學向善在實務上的意思。' }
            }
          ])
      });

      return out;
    }
  };
})(window);
