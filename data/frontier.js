(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  /* editorial maturity scoring — criteria are stated in the figure caption */
  var AX = [
    { n: 1, t: { en: 'Monomer structure prediction', zh: '單體結構預測' }, m: 5,
      routine: { en: 'Single-domain, MSA-rich proteins at near-experimental accuracy. MSA-free prediction (ESMFold2) is now competitive.', zh: '有豐富 MSA 的單結構域蛋白可達接近實驗的準確度。免 MSA 的預測（ESMFold2）現已具競爭力。' },
      frontier: { en: 'Inference-time compute scaling in place of MSAs; proteome-scale *complex* databases.', zh: '以推論期運算擴展取代 MSA；蛋白體規模的*複合體*資料庫。' },
      open: { en: 'Orphan proteins with no evolutionary context; disordered and "dark" proteins; confidence scores that fail **silently** in disordered regions.', zh: '沒有演化上下文的孤兒蛋白；無序與「暗」蛋白；信賴度分數在無序區會**無聲地**失效。' },
      num: { en: 'Orphan proteins show method-to-method discordance and lower pLDDT, and the authors state the deficiency is *not* a trivial consequence of short sequences. Best-in-class TM-score on such targets is around 0.5.', zh: '孤兒蛋白出現方法間不一致與較低的 pLDDT，作者明確指出這個缺陷*不是*序列短所造成的瑣碎結果。這類標的上最佳方法的 TM-score 約 0.5。' } },
    { n: 2, t: { en: 'Complex / assembly prediction', zh: '複合體／組裝體預測' }, m: 3,
      routine: { en: 'Antibody–antigen co-folding at scale with several interchangeable open models; ligand co-folding beats classical docking on pose RMSD.', zh: '抗體—抗原共摺疊可大規模進行，且有數個可互換的開源模型；配體共摺疊在姿態 RMSD 上勝過古典對接。' },
      frontier: { en: 'Consensus pooling across different predictors; immune complexes as a formal CASP category for the first time.', zh: '跨不同預測器的共識匯總；免疫複合體首次成為 CASP 的正式類別。' },
      open: { en: 'Confidence scores **do not discriminate real partners from shuffled ones**; ligand poses are largely memorised from training data; covalent and novel-pocket cases collapse.', zh: '信賴度分數**無法區分真實夥伴與洗牌配對**；配體姿態大致是從訓練資料背下來的；共價與新穎口袋的案例會崩潰。' },
      num: { en: '**58.0% medium-or-better (DockQ ≥ 0.49)** on 103 post-2021 antibody–antigen complexes using a five-predictor consensus — beating 100 seeds of any single model at lower cost.', zh: '以五個預測器的共識，在 103 個 2021 年後的抗體—抗原複合體上達到 **58.0% 中等或更好（DockQ ≥ 0.49）**——以更低成本勝過任何單一模型用 100 個種子。' } },
    { n: 3, t: { en: 'Conformational ensembles & dynamics', zh: '構型集合與動力學' }, m: 2,
      routine: { en: 'Fast transferable ensemble generation (BioEmu) used as a **seeding** tool for molecular dynamics. CASP17 now assesses ensembles as a category.', zh: '快速、可遷移的集合生成（BioEmu）被當成分子動力學的**播種**工具。CASP17 已把構型集合列為評估類別。' },
      frontier: { en: 'Generative transition-path sampling with no predefined collective variables (Gen-COMPAS); motion-as-design-objective (VibeGen).', zh: '不需預先定義集體變數的生成式過渡路徑取樣（Gen-COMPAS）；以運動為設計目標（VibeGen）。' },
      open: { en: 'Correct Boltzmann weights; mutation-induced population shifts; side-chain-governed dynamics and cryptic pockets; fuzzy complexes.', zh: '正確的波茲曼權重；突變造成的族群位移；由側鏈主導的動力學與隱蔽口袋；模糊複合體。' },
      num: { en: 'Gen-COMPAS recovers committors, transition states and free-energy landscapes **from end-point structures alone**, up to a pentameric ligand-gated ion channel. Against that: BioEmu mis-ranks conformer energies and fails outright on side-chain-governed systems.', zh: 'Gen-COMPAS 能**僅從端點結構**還原承諾函數、過渡態與自由能地景，規模可達五聚體配體閘控離子通道。相對地：BioEmu 會把構型能量排序排錯，在由側鏈主導的系統上直接失敗。' } },
    { n: 4, t: { en: 'Fixed-backbone sequence design', zh: '固定主鏈序列設計' }, m: 5,
      routine: { en: 'ProteinMPNN, LigandMPNN and SolubleMPNN are commodity infrastructure. Native-sequence recovery is no longer the binding constraint.', zh: 'ProteinMPNN、LigandMPNN 與 SolubleMPNN 已是基礎設施等級的商品。原生序列回復率不再是瓶頸。' },
      frontier: { en: 'Multi-state and ensemble-conditioned design; property-conditioned inverse folding; ligand-conditioned all-atom design.', zh: '多狀態與以集合為條件的設計；以性質為條件的反向摺疊；以配體為條件的全原子設計。' },
      open: { en: 'No cross-method benchmark exists. And recovery is a weak proxy: methods that deliberately **lower** recovery can improve downstream self-consistency.', zh: '不存在跨方法的基準。而且回復率是個弱代理：刻意**降低**回復率的方法，反而能改善下游的自洽性。' },
      num: { en: 'A 2026 method reports 71.40% recovery against ProteinMPNN\'s 52.25% on the same benchmark, with surface residues at 70.24% against 28.82%. Treat recovery gains as a weak signal, not a result.', zh: '一個 2026 年的方法在同一基準上報告 71.40% 回復率，ProteinMPNN 為 52.25%，表面殘基則是 70.24% 對 28.82%。請把回復率的提升當成弱訊號，不是成果。' } },
    { n: 5, t: { en: 'De novo backbone generation', zh: '從頭主鏈生成' }, m: 4,
      routine: { en: 'All-atom sequence-and-structure co-design in a single model, including glycans, metals and modified residues, at roughly 10²–10³ designs per GPU-hour.', zh: '單一模型即可做全原子的序列與結構共設計，涵蓋聚醣、金屬與修飾殘基，每 GPU 小時約 10²–10³ 個設計。' },
      frontier: { en: 'Latent-space reward-guided inference-time search; chemistry as a user-specified input (CheMoDesign); length-agnostic editing of natural proteins (Raygun).', zh: '潛在空間中以獎勵引導的推論期搜尋；把化學當成使用者指定的輸入（CheMoDesign）；對天然蛋白做與長度無關的編輯（Raygun）。' },
      open: { en: 'Large multidomain non-symmetric designs. And there is **no standardised designability metric** — the scRMSD and pLDDT thresholds everyone uses are arbitrary, and the refolding pipeline behind them is itself unreliable.', zh: '大型、多結構域、非對稱的設計。而且**不存在標準化的可設計性指標**——大家使用的 scRMSD 與 pLDDT 門檻是任意選的，而其背後的重摺疊流程本身並不可靠。' },
      num: { en: '**76.40 structurally distinct passing designs per GPU-hour** across 24 matched targets, against 13.24 for the previous best.', zh: '在 24 個對等標的上達到**每 GPU 小時 76.40 個結構相異的通過設計**，前一代最佳為 13.24。' } },
    { n: 6, t: { en: 'Binder design to arbitrary targets', zh: '對任意標的的結合蛋白設計' }, m: 4,
      routine: { en: 'Mini-binders to well-behaved globular epitopes at 20–60%+ hit rates. Nanomolar is routine, picomolar is reachable, and the design cycle is under a week.', zh: '對行為良好的球狀抗原決定位設計迷你結合蛋白，命中率 20–60% 以上。奈莫耳級是常規、皮莫耳級可達，設計週期不到一週。' },
      frontier: { en: 'Million-design campaigns; fully autonomous agentic campaigns; epitope excision for very large targets; zero-shot small-molecule binders.', zh: '百萬設計規模的活動；完全自主的代理式活動；為超大標的做抗原決定位切除；零樣本小分子結合蛋白。' },
      open: { en: '**Which targets will fail is still unpredictable.** Scores rank designs reasonably within one target but not across targets. β-sheet interfaces lag badly, and polar or occluded epitopes remain hard.', zh: '**哪些標的會失敗仍無法預測。** 分數在單一標的內可以勉強排序，但跨標的不行。β 摺板界面明顯落後，極性或被遮蔽的抗原決定位仍然困難。' },
      num: { en: '**86 of 127 targets (68%)** yielded binders from more than one million designs. Across contexts the honest spread is 2–88% per target — and **the spread across targets exceeds the spread across methods.**', zh: '**127 個標的中 86 個（68%）** 從超過一百萬個設計中取得結合蛋白。跨情境的誠實範圍是每標的 2–88%——而且**跨標的的差異大於跨方法的差異。**' } },
    { n: 7, t: { en: 'Antibody / nanobody de novo design', zh: '從頭抗體／奈米抗體設計' }, m: 2,
      routine: { en: 'Low-n campaigns — tens of designs — now yield nanomolar hits on favourable targets. VHH (single-domain) is markedly easier than a full monoclonal.', zh: '小樣本活動——數十個設計——在有利標的上已能取得奈莫耳級命中。VHH（單結構域）明顯比完整單株抗體容易。' },
      frontier: { en: 'Interface-mimicry constraints to rescue targets that fail outright; PPI-specific rerankers; co-optimising developability alongside affinity.', zh: '以界面模仿約束來救回完全失敗的標的；專為蛋白—蛋白交互作用訓練的重排序器；在親和力之外同時最佳化可開發性。' },
      open: { en: 'Honest *average* hit rates remain single-digit to low-double-digit. Results do not transfer across tasks or targets, and **affinity ranking within a sequence cluster is worse than random clone picking.**', zh: '誠實的*平均*命中率仍在個位數到低兩位數之間。結果無法跨任務或跨標的轉移，而且**在序列叢集內的親和力排序比隨機挑菌落還差。**' },
      num: { en: 'AIntibody, blinded and prospective, 511 antibodies from 29 organisations: some below 100 pM, but those "successes were exceptions that did not transfer across tasks". A company claim of ~50% success for a closed model has no public data behind it.', zh: 'AIntibody，盲測且前瞻，來自 29 個機構的 511 個抗體：有些低於 100 pM，但那些「成功是例外，無法跨任務轉移」。某閉源模型約 50% 成功率的公司宣稱背後沒有公開資料。' } },
    { n: 8, t: { en: 'Enzyme design', zh: '酵素設計' }, m: 3,
      routine: { en: 'Zero-shot design of hydrolases and proteases with 19–36% construct-level success; designed metal active sites; crystal structures matching models to around 1 Å.', zh: '水解酶與蛋白酶的零樣本設計，構築體層級成功率 19–36%；可設計金屬活性位；晶體結構與模型吻合至約 1 Å。' },
      frontier: { en: '**Amide-bond hydrolysis** — the high-barrier reaction that resisted design for twenty years, broken twice in October 2026. A designed enzyme used in a real pharmaceutical synthesis step. Allosterically controlled enzymes.', zh: '**醯胺鍵水解**——抵抗設計二十年的高能障反應，在 2026 年十月被攻破兩次。設計酵素被用於真實的製藥合成步驟。別位調控的酵素。' },
      open: { en: 'Catalytic efficiency is still 10²–10⁴-fold below the best natural enzymes. Active-site pre-organisation and substrate positioning are the explicitly named bottleneck. Most C–C bond formation and redox chemistry remains out of reach.', zh: '催化效率仍比最好的天然酵素低 10²–10⁴ 倍。活性位預組織與受質定位是被明確點名的瓶頸。多數 C–C 鍵形成與氧化還原化學仍無法企及。' },
      num: { en: 'Metalloproteases: **36% of 135 designs active**, best design >10⁸-fold acceleration rising to >10¹⁰ after four substitutions. Best designed k_cat/K_M remains the 2025 serine hydrolases at **2.2 × 10⁵ M⁻¹s⁻¹**.', zh: '金屬蛋白酶：**135 個設計中 36% 有活性**，最佳設計加速 >10⁸ 倍，再經四個置換後 >10¹⁰ 倍。最佳設計的 k_cat/K_M 仍是 2025 年的絲胺酸水解酶，**2.2 × 10⁵ M⁻¹s⁻¹**。' } },
    { n: 9, t: { en: 'Function & fitness prediction', zh: '功能與適應度預測' }, m: 2,
      routine: { en: 'Zero-shot variant-effect prediction from protein language models as a default screening filter; multimodal zero-shot GO annotation that generalises to unseen terms.', zh: '以蛋白質語言模型做零樣本變異效應預測，已是預設的篩選過濾；多模態零樣本 GO 註解可泛化到未見過的詞條。' },
      frontier: { en: 'Evidence-scaling with large language models; experiment-aligned generative models (ProteinDPO, ProteinGuide).', zh: '以大型語言模型做證據擴展；與實驗對齊的生成模型（ProteinDPO、ProteinGuide）。' },
      open: { en: '**Epistasis.** Zero-shot methods cannot predict multi-mutant effects — and a designed protein *is* a multi-mutant. Scaling data does not help monotonically; benchmark averages hide the failures that matter; homology leakage is pervasive.', zh: '**上位效應。** 零樣本方法無法預測多重突變的效應——而一個設計蛋白*就是*多重突變體。資料規模的擴大並非單調有益；基準的平均值掩蓋了真正要緊的失敗；同源性洩漏普遍存在。' },
      num: { en: '95 zero-shot models tested on multi-mutant variants across 53 deep-mutational-scanning datasets: they cannot predict epistasis. Separately, across 23 protein language models, **training objective matters more than parameter count**.', zh: '以 53 個深度突變掃描資料集的多重突變體測試 95 個零樣本模型：它們無法預測上位效應。另外，在 23 個蛋白質語言模型中，**訓練目標比參數量更重要**。' } },
    { n: 10, t: { en: 'Multi-state, switchable, allosteric, sensors', zh: '多狀態、可切換、別位調控、感測器' }, m: 3,
      routine: { en: 'Modular LOCKR-style sensors with swappable de novo recognition domains; ligand-activated switches built at scale.', zh: '可替換從頭辨識結構域的模組化 LOCKR 型感測器；可大規模建構的配體活化開關。' },
      frontier: { en: '**47 allosteric switches in a single paper**, built from machine-learning-designed receptors by circular permutation; de novo *allosterically controlled enzymes*; kinase-controlled switches; entropy-based rather than rearrangement-based switching.', zh: '**單篇論文中 47 個別位調控開關**，以環狀置換從機器學習設計的受體構築；從頭的*別位調控酵素*；受激酶控制的開關；基於熵而非構型重排的切換機制。' },
      open: { en: 'Predicting a switch\'s dynamic range in advance; designing switches whose mechanism is a large conformational change; engineering the detection limit.', zh: '事先預測開關的動態範圍；設計以大幅構型變化為機制的開關；設計偵測下限。' },
      num: { en: '47 protein switches activated by different ligand classes in one 2026 *Nature Biotechnology* paper, including a steroid-responsive electrochemical readout. This is the axis with the clearest route to a student-scale project.', zh: '2026 年一篇《自然生物技術》論文中有 47 個由不同配體類別活化的蛋白開關，包括一個對類固醇反應的電化學讀出。這也是最清楚能通往學生規模專案的一軸。' } },
    { n: 11, t: { en: 'Protein–nucleic acid, gene editors, delivery', zh: '蛋白—核酸、基因編輯器、遞送' }, m: 3,
      routine: { en: 'All-atom models accept DNA and RNA as design context natively, so nucleic-acid-aware design is no longer a separate tool.', zh: '全原子模型原生接受 DNA 與 RNA 作為設計上下文，因此「考慮核酸的設計」不再需要另一套工具。' },
      frontier: { en: '**AI-generated RNA-guided nucleases matching or exceeding wild type in bacteria, plants and human cells**; whole-phage-genome generative design; AI-designed assemblies reported to out-perform standard RNA delivery.', zh: '**AI 生成的 RNA 引導核酸酶在細菌、植物與人類細胞中達到或超越野生型**；完整噬菌體基因體的生成式設計；有報告指出 AI 設計的組裝體在 RNA 遞送上勝過標準方法。' },
      open: { en: 'DNA-binder specificity controls are thin — very few constructs tested in the published work. No nuclease has been built from scratch rather than redesigned from a natural starting point.', zh: 'DNA 結合蛋白的專一性對照很薄弱——已發表工作中測試的構築體非常少。目前還沒有核酸酶是從零建造、而非從天然起點重新設計的。' },
      num: { en: 'SynTnpB variants retained or exceeded wild-type editing activity across three kingdoms of life, with cryo-EM of the lead variant. On the DNA-binder side the honest datum is 1 binder from 5 tested designs at an EC₅₀ around 5.89 µM.', zh: 'SynTnpB 變體在三個生物界中保有或超越野生型的編輯活性，並有主要變體的冷凍電顯結構。在 DNA 結合蛋白這一側，誠實的數據是 5 個測試設計中 1 個結合，EC₅₀ 約 5.89 µM。' } },
    { n: 12, t: { en: 'Membrane proteins, transporters, channels', zh: '膜蛋白、轉運蛋白、通道' }, m: 2,
      routine: { en: 'De novo proteins used as **chaperones and solubilisers** for native membrane proteins; designed transmembrane accessory subunits that stabilise without killing function.', zh: '把從頭設計蛋白當作天然膜蛋白的**伴護蛋白與增溶劑**；設計的跨膜輔助次單元能穩定結構而不殺死功能。' },
      frontier: { en: '**WRAPs**: detergent-free, thermostable, water-soluble native membrane proteins with a 2.95 Å cryo-EM structure. De novo nanopore interiors.', zh: '**WRAPs**：不需去垢劑、熱穩定、水溶性的天然膜蛋白，附 2.95 Å 冷凍電顯結構。從頭設計的奈米孔內部。' },
      open: { en: 'De novo transporters and ion channels with programmed selectivity and gating. De novo multipass transmembrane folds with real transport function.', zh: '具可編程選擇性與閘控的從頭轉運蛋白與離子通道。具真實轉運功能的從頭多次跨膜摺疊。' },
      num: { en: 'WRAPs preserve sequence, fold, active site and ligand binding on the proteins they wrap. Note carefully what this is: 2026 delivered de novo proteins as *solubilisers* of native membrane proteins, not functional de novo channels.', zh: 'WRAPs 能保留被包覆蛋白的序列、摺疊、活性位與配體結合。請仔細看清這是什麼：2026 年交出的是作為天然膜蛋白*增溶劑*的從頭設計蛋白，不是有功能的從頭通道。' } },
    { n: 13, t: { en: 'Assemblies, nanocages, materials, machines', zh: '組裝體、奈米籠、材料、機器' }, m: 4,
      routine: { en: 'Symmetric one- and two-component cages; triggered hydrogels and condensates; designed filaments.', zh: '對稱的單組分與雙組分奈米籠；可觸發的水膠與凝聚體；設計的纖維。' },
      frontier: { en: '**Quasisymmetric** cages exploiting geometric frustration, up to around 220 nm from 180–2,160 subunits; a synthetic protein walker taking programmable 16 nm steps along a DNA track; cages as RNA and gene-therapy carriers.', zh: '利用幾何挫折的**準對稱**奈米籠，由 180–2,160 個次單元組成、最大約 220 nm；沿 DNA 軌道以可編程 16 nm 步幅行走的合成蛋白馬達；作為 RNA 與基因治療載體的奈米籠。' },
      open: { en: 'De novo **rotary** motors; autonomous, fuel-driven, untethered machines; cages validated *in vivo* for gene delivery.', zh: '從頭設計的**旋轉**馬達；自主、以燃料驅動、不受繫縛的機器；在*活體*中驗證可做基因遞送的奈米籠。' },
      num: { en: 'One-component quasisymmetric nanocages up to roughly 220 nm. The walker is tethered to a DNA track and is not fuel-driven, so "protein motor" should be read precisely.', zh: '單組分準對稱奈米籠最大約 220 nm。那個行走馬達是繫在 DNA 軌道上、且非燃料驅動，因此「蛋白馬達」這個詞要精確地讀。' } },
    { n: 14, t: { en: 'Lab-in-the-loop & cycle time', zh: '實驗室在迴圈中與週期時間' }, m: 3,
      routine: { en: 'DNA to purified protein for hundreds of designs in about **48 hours** on the best published platform; outsourced binder testing through CROs; language-model agents orchestrating open-source design stacks end to end.', zh: '在已發表的最佳平台上，數百個設計可在約 **48 小時**內從 DNA 做到純化蛋白；可透過委外機構進行結合測試；語言模型代理人能端到端調度開源設計堆疊。' },
      frontier: { en: 'Fully autonomous 24–48 hour binder campaigns with human input limited to the target name; agentic compute allocation; robotic closed-loop protein engineering.', zh: '完全自主的 24–48 小時結合蛋白活動，人類輸入僅限標的名稱；代理式運算資源分配；機器人閉環蛋白質工程。' },
      open: { en: 'Agents cannot predict which targets will fail. Most agentic systems remain **in silico only**. Setup cost and proprietary hardware limit self-driving labs to a handful of sites.', zh: '代理人無法預測哪些標的會失敗。多數代理式系統仍**只在電腦內**。建置成本與專有硬體讓自駕實驗室只存在於少數幾個場所。' },
      num: { en: 'Hundreds of designs per day, about 48 hours end to end with roughly 6 hours of hands-on bench time. A frontier closed-loop system reported about 9 hours per data point at about $87 per design — with the authors noting real runs were slower because of downtime and robotic malfunctions.', zh: '每天數百個設計，端到端約 48 小時，其中約 6 小時是實際動手時間。一個前沿閉環系統報告每個資料點約 9 小時、每個設計約 87 美元——作者並註明實際運行較慢，原因是停機與機器故障。' } },
    { n: 15, t: { en: 'Cost curves', zh: '成本曲線' }, m: 4,
      routine: { en: 'Design generation is **no longer the cost centre**. DNA synthesis is.', zh: '設計生成**不再是成本中心**。DNA 合成才是。' },
      frontier: { en: 'Per-GPU-hour design yield as the headline metric rather than raw hit rate; epitope excision cutting design GPU time by around 88%.', zh: '以「每 GPU 小時的設計產出」取代原始命中率作為招牌指標；抗原決定位切除可把設計的 GPU 時間縮減約 88%。' },
      open: { en: 'No group published a **dollars-per-validated-binder** figure in 2026. That is the number the field most needs and least reports.', zh: '2026 年沒有任何團隊發表**每個已驗證結合蛋白的美元成本**。那正是這個領域最需要、卻最少被報告的數字。' },
      num: { en: 'About **$5 per construct** at the frontier, synthetic DNA **≥80%** of total characterisation cost, and about **144 H100 GPU-hours** for one complete agentic campaign — roughly $150 of compute, against $150–250 per design for outsourced testing.', zh: '在前沿約 **每個構築體 5 美元**，合成 DNA 佔表徵總成本 **≥80%**，一場完整的代理式活動約 **144 個 H100 GPU 小時**——約 150 美元的運算成本，而委外測試是每個設計 150–250 美元。' } }
  ];

  PD.pages.frontier = {
    label: { en: '2026 Frontier', zh: '2026 前沿' },
    title: { en: '2026 Frontier & State of the Art', zh: '2026 技術前沿與現狀' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 3 · Current state of the art, 20 November 2026', zh: '第三章 · 技術現狀，2026 年 11 月 20 日' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Fifteen capability axes, each with ==what is routine, what is frontier, what is unsolved==.',
          zh: '十五條能力軸，每一條都標明==什麼已是常規、什麼是前沿、什麼未解==。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: '"State of the art" is not one number. Protein design in late 2026 is a set of capabilities with wildly different maturities — sequence design is commodity infrastructure while de novo channel design does not exist — and a plan built on the field\'s average maturity will fail on whichever axis it actually depends on. This chapter maps all fifteen, names the best verified number on each, and ends with two lists: things people believe that are no longer true, and things claimed but not demonstrated.',
          zh: '「技術現狀」不是一個數字。2026 年末的蛋白質設計是一組成熟度差異極大的能力——序列設計已是商品級基礎設施，而從頭通道設計根本還不存在——一個建立在「領域平均成熟度」上的計畫，會在它實際依賴的那一軸上失敗。本章把十五條軸全部畫出來、為每一條標出最佳的已驗證數字，並以兩份清單結尾：人們仍相信但已不成立的事，以及被宣稱卻未被證明的事。'
        }) + '</p>' +
        '<div class="herometa">' + h.chips([
          { t: { en: 'Compiled 2026-11-20', zh: '彙編於 2026-11-20' }, k: 'b' },
          { t: { en: 'CASP17 results not yet public', zh: 'CASP17 結果尚未公開' }, k: 'a' },
          { t: { en: 'Read every number as an upper bound', zh: '請把每個數字讀成上界' }, k: 'r' }
        ]) + '</div>' +
        '</div></div>';

      out += h.toc([
        { id: 'f-map', t: { en: 'Maturity map', zh: '成熟度地圖' } },
        { id: 'f-table', t: { en: 'The fifteen axes', zh: '十五條軸' } },
        { id: 'f-detail', t: { en: 'Axis by axis', zh: '逐軸細看' } },
        { id: 'f-false', t: { en: 'No longer true', zh: '已不成立' } },
        { id: 'f-unproven', t: { en: 'Claimed, not shown', zh: '已宣稱、未證明' } },
        { id: 'f-struct', t: { en: 'Structures', zh: '結構' } },
        { id: 'f-one', t: { en: 'One page summary', zh: '一頁總結' } }
      ]);

      /* ---------- maturity map ---------- */
      out += h.sec({
        id: 'f-map',
        kick: { en: 'Orientation', zh: '定位' },
        h2: { en: 'The maturity map', zh: '成熟度地圖' },
        lede: {
          en: 'Before the detail, the shape of the problem. The axes closest to "solved" are the ones about *geometry*. The axes furthest from it are the ones about *energy, motion and selectivity* — and about the field\'s ability to measure itself.',
          zh: '在細節之前，先看問題的形狀。最接近「已解決」的軸都是關於*幾何*的。離它最遠的軸都是關於*能量、運動與選擇性*——以及這個領域量測自己的能力。'
        },
        body:
          h.fig({
            kind: 'bars', tag: { en: 'editorial scoring', zh: '編輯評分' },
            title: { en: 'How mature is each capability axis?', zh: '每一條能力軸有多成熟？' },
            sub: {
              en: 'Five levels. This is an editorial judgement with stated criteria, not a measured quantity — the criteria are in the caption so you can disagree precisely.',
              zh: '五個等級。這是帶有明確判準的編輯判斷，不是量測值——判準寫在圖說裡，方便你精確地不同意。'
            },
            opts: { max: 5, dec: 0 },
            data: AX.slice().sort(function (a, b) { return b.m - a.m; }).map(function (a) {
              return {
                label: a.t, v: a.m,
                color: a.m >= 5 ? '#1baf7a' : a.m === 4 ? '#2a78d6' : a.m === 3 ? '#eda100' : a.m === 2 ? '#eb6834' : '#e34948',
                note: [null, { en: 'Demonstrated once or not at all', zh: '僅示範一次或完全沒有' }, { en: 'Works on favourable cases only', zh: '只在有利案例上可行' }, { en: 'Works, with known failure modes', zh: '可行，但有已知失效模式' }, { en: 'Routine in well-resourced labs', zh: '在資源充足的實驗室已是常規' }, { en: 'Commodity infrastructure', zh: '商品級基礎設施' }][a.m]
              };
            }),
            legend: [
              { c: '#1baf7a', n: { en: '5 · commodity', zh: '5 · 商品化' } },
              { c: '#2a78d6', n: { en: '4 · routine', zh: '4 · 常規' } },
              { c: '#eda100', n: { en: '3 · works with caveats', zh: '3 · 可行但有保留' } },
              { c: '#eb6834', n: { en: '2 · favourable cases only', zh: '2 · 僅有利案例' } },
              { c: '#e34948', n: { en: '1 · demonstrated or absent', zh: '1 · 僅示範或不存在' } }
            ],
            caption: {
              en: '**Criteria.** 5: an independent laboratory can run it from open tooling and expect the published result. 4: routine in a well-resourced laboratory, with hit rates predictable within a factor of two. 3: works, but with failure modes that are known and not predictable in advance. 2: works on favourable cases chosen in advance; averages are poor. 1: demonstrated once, or not at all. Scored by this report\'s authors against the evidence in the per-axis sections below; the underlying facts are sourced, the score is a judgement.',
              zh: '**判準。** 5：一個獨立實驗室能用開放工具跑起來，並預期得到已發表的結果。4：在資源充足的實驗室已是常規，命中率可預測到二倍以內。3：可行，但有已知卻無法事先預測的失效模式。2：只在事先挑選的有利案例上可行，平均表現很差。1：僅示範過一次，或根本沒有。由本報告作者依下方逐軸章節的證據評分；底層事實有出處，分數是判斷。'
            }
          }) +
          h.take({ en: 'The pattern worth seeing', zh: '值得看出的模式' }, {
            en: 'The top of this chart is geometry: predicting a fold, writing a sequence for a backbone, generating a backbone, building a cage. The bottom is everything that involves **energy or motion** — affinity ranking, catalytic efficiency, conformational ensembles, transport, epistasis. 2026\'s *Nature* review from the Baker lab says the same thing in its own words: structures, assemblies and binders are "close to being solved", and the key questions there "are not *how* to design, but *what* to design."',
            zh: '這張圖的上半是幾何：預測摺疊、為主鏈寫序列、生成主鏈、建造奈米籠。下半全都涉及**能量或運動**——親和力排序、催化效率、構型集合、轉運、上位效應。2026 年 Baker 實驗室的《自然》綜述用自己的話說了同一件事：結構、組裝體與結合蛋白「接近被解決」，而那些領域的關鍵問題「不是*如何*設計，而是*設計什麼*」。'
          })
      });

      /* ---------- summary table ---------- */
      out += h.sec({
        id: 'f-table',
        kick: { en: 'The map', zh: '地圖' },
        h2: { en: 'Fifteen axes at a glance', zh: '十五條軸一覽' },
        lede: {
          en: 'Each row is a capability, not a tool. The "still unsolved" column is the one to read if you are planning a project — that is where a plan silently breaks.',
          zh: '每一列是一種能力，不是一個工具。如果你正在規劃專案，要讀的是「仍未解決」那一欄——計畫就是在那裡悄悄壞掉的。'
        },
        body: h.tbl({
          min: 1000,
          cols: [
            { t: '#', w: '3%' },
            { t: { en: 'Axis', zh: '軸' }, w: '15%' },
            { t: { en: 'Routine today', zh: '今日已常規' } },
            { t: { en: 'Frontier', zh: '前沿' } },
            { t: { en: 'Still unsolved', zh: '仍未解決' } }
          ],
          rows: AX.map(function (a) {
            return [String(a.n), '**' + h.T(a.t) + '**', a.routine, a.frontier, a.open];
          })
        })
      });

      /* ---------- axis detail ---------- */
      var detail = '';
      AX.forEach(function (a) {
        detail += '<div class="card" style="margin-bottom:16px;padding:21px 22px">' +
          '<div class="casehead"><div class="casenum">' + a.n + '</div>' +
          '<div style="flex:1;min-width:0"><h4 style="margin:0;font-size:17.5px">' + h.md(a.t) + '</h4></div>' +
          '<span class="chip ' + (a.m >= 5 ? 'g' : a.m === 4 ? 'b' : a.m === 3 ? 'a' : 'r') + '">' +
          h.T({ en: 'maturity ', zh: '成熟度 ' }) + a.m + '/5</span></div>' +
          h.kv([
            [{ en: 'Routine', zh: '已常規' }, a.routine],
            [{ en: 'Frontier', zh: '前沿' }, a.frontier],
            [{ en: 'Unsolved', zh: '未解決' }, a.open],
            [{ en: 'Best number', zh: '最佳數字' }, a.num]
          ]) + '</div>';
      });
      out += h.sec({
        id: 'f-detail',
        kick: { en: 'Detail', zh: '細節' },
        h2: { en: 'Axis by axis, with the best verified number on each', zh: '逐軸細看，附各軸最佳已驗證數字' },
        lede: {
          en: 'Where a figure comes from a company report rather than a peer-reviewed paper or an independent benchmark, it is marked in the text. Full citations are on the References tab.',
          zh: '凡數字來自公司報告、而非同儕審查論文或獨立基準測試者，均在文中標註。完整出處見「參考資料」頁。'
        },
        body: detail
      });

      /* ---------- no longer true ---------- */
      out += h.sec({
        id: 'f-false',
        kick: { en: 'Corrections', zh: '更正' },
        h2: { en: 'Eleven things people believe that are no longer true', zh: '人們仍相信、但已不成立的十一件事' },
        lede: {
          en: 'Each of these was reasonable in 2024 or 2025 and is contradicted by 2026 evidence. If a tutorial, a wiki or a reviewer tells you one of these, this is the counter-reference.',
          zh: '這些說法在 2024 或 2025 年都算合理，但被 2026 年的證據推翻。如果有教學文件、wiki 或審閱者這樣告訴你，這裡就是反方引用。'
        },
        body: h.tbl({
          min: 880,
          cols: [
            { t: { en: 'The belief', zh: '信念' }, w: '30%' },
            { t: { en: 'The 2026 evidence', zh: '2026 年的證據' } }
          ],
          rows: [
            [{ en: '"Confidence scores tell you whether a design will bind."', zh: '「信賴度分數能告訴你一個設計會不會結合。」' }, { en: 'They do not discriminate binding **specificity**: AlphaFold3, Boltz-2 and Chai-1 could not separate 106 cognate nanobody–antigen pairs from 11,342 shuffled ones. Worse, perturbing AlphaFold3 embeddings during inference-time optimisation **artificially inflates ipTM** — the metric is gameable, and the authors tie this directly to false discovery in binder engineering.', zh: '它們無法區分結合的**專一性**：AlphaFold3、Boltz-2 與 Chai-1 分不出 106 個真實的奈米抗體—抗原配對與 11,342 個洗牌配對。更糟的是，在推論期最佳化中擾動 AlphaFold3 的嵌入會**人為拉高 ipTM**——這個指標可以被鑽，而作者直接把它連結到結合蛋白工程中的偽發現。' }],
            [{ en: '"AlphaFold2 or AlphaFold3 refolding is a valid designability oracle."', zh: '「用 AlphaFold2 或 AlphaFold3 重摺疊，是有效的可設計性神諭。」' }, { en: 'A 2026 *Protein Science* analysis shows AlphaFold2 in single-sequence mode fails on many **natural** sequences, and that **no standardised scRMSD or pLDDT thresholds exist**. On 614 experimentally characterised de novo designs from 11 studies, confidence-metric ROC AUC was only 0.60–0.72, combining metrics gave no improvement, and many failed designs outscored successful ones. The field\'s core filter is unvalidated.', zh: '2026 年《蛋白質科學》的分析顯示，單序列模式的 AlphaFold2 在許多**天然**序列上會失敗，而且**不存在標準化的 scRMSD 或 pLDDT 門檻**。在來自 11 項研究、614 個經實驗表徵的從頭設計上，信賴度指標的 ROC AUC 只有 0.60–0.72，把指標合併沒有改善，而許多失敗的設計分數比成功的更高。這個領域的核心篩選器是未經驗證的。' }],
            [{ en: '"Co-folding models can be used for de novo ligand design."', zh: '「共摺疊模型可以用來做從頭配體設計。」' }, { en: 'Tested on 2,600 systems released **after** the models\' training cutoffs, they "largely **memorize** ligand poses from their training data". Pose accuracy on novel chemistry is a different question from pose accuracy on the benchmark.', zh: '在 2,600 個於模型訓練截止**之後**才釋出的系統上測試，它們「大致上是**背下**訓練資料中的配體姿態」。在新穎化學上的姿態準確度，與在基準上的姿態準確度，是兩個不同的問題。' }],
            [{ en: '"Zero-shot language models predict variant effects."', zh: '「零樣本語言模型能預測變異效應。」' }, { en: 'For single mutations, partly. For the **multi-mutant combinations that designed proteins actually are**, 95 models tested across 53 deep-mutational-scanning datasets **cannot predict epistasis**.', zh: '對單一突變，部分成立。對**設計蛋白實際上就是的那種多重突變組合**，在 53 個深度突變掃描資料集上測試的 95 個模型**無法預測上位效應**。' }],
            [{ en: '"Scaling pretraining data improves fitness prediction."', zh: '「擴大預訓練資料能改善適應度預測。」' }, { en: 'Benchmark performance does **not** improve monotonically with more data and can degrade. Across 23 protein language models, **training objective beats parameter count**. Homology leakage in the evaluation sets is pervasive and documented.', zh: '基準表現並**不**隨資料增加而單調改善，甚至可能變差。在 23 個蛋白質語言模型中，**訓練目標勝過參數量**。評估集中的同源性洩漏普遍存在且已被記錄。' }],
            [{ en: '"BioEmu gives you Boltzmann-weighted ensembles."', zh: '「BioEmu 會給你波茲曼加權的構型集合。」' }, { en: 'It does not. It mis-ranks conformer energies, misses mutation-induced population shifts, and fails outright where side-chain dynamics govern. Use it as a **seeder** for molecular dynamics plus Markov-state-model reweighting — still a large win, but a different claim.', zh: '它不會。它會把構型能量排序排錯、漏掉突變造成的族群位移，在由側鏈主導的系統上直接失敗。請把它當成分子動力學加馬可夫狀態模型重新加權的**播種器**——仍是很大的收穫，但這是不同的主張。' }],
            [{ en: '"Native sequence recovery measures inverse-folding quality."', zh: '「原生序列回復率衡量反向摺疊的品質。」' }, { en: 'Methods that deliberately **lower** recovery improve downstream AlphaFold2 self-consistency, and multi-state or property-conditioned designers trade recovery for utility. Recovery has stopped being the objective.', zh: '刻意**降低**回復率的方法，反而改善下游 AlphaFold2 的自洽性；而多狀態或以性質為條件的設計器會用回復率換取實用性。回復率已經不再是目標函數。' }],
            [{ en: '"Closed, data-advantaged models are necessarily ahead."', zh: '「閉源、擁有資料優勢的模型必然領先。」' }, { en: 'Five months after a closed engine\'s February announcement, a **655-million-parameter Apache-2.0** model took the top median DockQ on a standardised 200-complex antibody–antigen benchmark. The same six-month pattern that followed AlphaFold3 in 2024.', zh: '在某閉源引擎二月宣布後五個月，一個 **6.55 億參數、Apache-2.0** 的模型在標準化的 200 個複合體抗體—抗原基準上拿下最高 DockQ 中位數。與 2024 年 AlphaFold3 之後完全相同的六個月模式。' }],
            [{ en: '"AlphaFold 4 exists."', zh: '「AlphaFold 4 存在。」' }, { en: 'It does not. The phrase comes from a *Nature* news headline — in quotation marks — about a closed February 2026 report. Blog posts claiming a release contradict each other and cite nothing. Separately, press reporting says the dedicated AlphaFold team at DeepMind was dismantled around July 2026, with work continuing at Isomorphic Labs; the AlphaFold system and database were not shut down.', zh: '它不存在。這個說法來自 *Nature* 一則新聞的標題——而且加了引號——談的是 2026 年二月一份閉源報告。聲稱「已發布」的部落格文章彼此矛盾，而且沒有引用來源。另外，媒體報導指出 DeepMind 的專職 AlphaFold 團隊約在 2026 年七月被解散，相關工作移至 Isomorphic Labs；AlphaFold 系統與資料庫並未關閉。' }],
            [{ en: '"Monomer structure prediction is solved."', zh: '「單體結構預測已經解決。」' }, { en: 'For MSA-rich single domains, effectively yes. **Orphan** proteins show cross-method discordance with best-in-class TM-score around 0.5, and diffusion-based predictors hallucinate confident structure in disordered regions **that low pLDDT does not flag**.', zh: '對有豐富 MSA 的單結構域，實質上是。但**孤兒**蛋白出現跨方法不一致，最佳方法的 TM-score 約 0.5；而基於擴散的預測器會在無序區幻化出有信心的結構，**而低 pLDDT 不會標示出來**。' }],
            [{ en: '"AI will replace directed evolution for enzymes."', zh: '「AI 將取代酵素的定向演化。」' }, { en: 'The 2026 consensus is **complementarity, measured**. A *Nature* paper showed ProteinMPNN-redesigned starting points are more mutationally robust and **evolve better than wild type**, reaching more than 79-fold greater selected specificity in one case. The highest-activity de novo enzymes still need evolution on top.', zh: '2026 年的共識是**互補性，而且被量測了**。一篇《自然》論文顯示，經 ProteinMPNN 重新設計的起點突變耐受性更強，而且**比野生型更會演化**，其中一例的選擇專一性高出 79 倍以上。活性最高的從頭酵素仍然需要在上面加一層演化。' }]
          ]
        })
      });

      /* ---------- claimed not shown ---------- */
      out += h.sec({
        id: 'f-unproven',
        kick: { en: 'Claimed, not demonstrated', zh: '已宣稱、未證明' },
        h2: { en: 'Ten claims circulating in late 2026 without public evidence', zh: '2026 年末流傳、但沒有公開證據的十項宣稱' },
        lede: {
          en: 'None of these is necessarily false. Each one is simply not yet supported by data anyone outside the claiming organisation can check. Keeping this list separate from the one above is the single most useful discipline in reading this field.',
          zh: '這些不一定是假的。它們只是還沒有任何該機構之外的人能查核的資料支持。把這份清單與上一份分開，是閱讀這個領域最有用的紀律。'
        },
        body: h.cards([
          { chips: [{ t: { en: 'company claim', zh: '公司宣稱' }, k: 'a' }], h: { en: '~50% de novo antibody success rate', zh: '約 50% 的從頭抗體成功率' }, p: { en: 'Claimed for a closed model, framed as roughly double its predecessor. No paper, no public data. The validation offered is commercial — major pharmaceutical partnerships — rather than empirical. Note that the blinded benchmark in the same year found affinity ranking within clusters worse than random.', zh: '針對一個閉源模型的宣稱，框架是「約為前一代的兩倍」。沒有論文、沒有公開資料。所提供的驗證是商業性的——與大型藥廠的合作——而非實證的。請注意，同一年的盲測基準發現叢集內的親和力排序比隨機還差。' } },
          { chips: [{ t: { en: 'company claim', zh: '公司宣稱' }, k: 'a' }], h: { en: 'A closed engine\'s affinity-prediction superiority', zh: '某閉源引擎在親和力預測上的優越性' }, p: { en: 'A 27-page report with no weights, no code and no training recipe. Reviewers quoted in the press noted it "offers scant insight into how to achieve similar results", and one open-model author publicly doubted that proprietary data was essential. Five months later an open model matched or beat it on a standardised benchmark.', zh: '一份 27 頁的報告，沒有權重、沒有程式碼、沒有訓練方法。媒體引述的審閱者指出它「對如何達成類似結果幾乎沒有提供洞見」，而一位開源模型作者公開質疑專有資料是否真的關鍵。五個月後，一個開源模型在標準化基準上與它打平或勝出。' } },
          { chips: [{ t: { en: 'secondary source only', zh: '僅二手來源' }, k: 'r' }], h: { en: '"158 binders from 188 designs"', zh: '「188 個設計得到 158 個結合蛋白」' }, p: { en: 'A spectacular figure attributed to a late-2026 open model, appearing only in secondary coverage that could not be retrieved. It is not in the model\'s release blog, the Rosetta Commons post, the documentation site, or the institute\'s own article. **Do not quote it.**', zh: '一個驚人的數字，被歸給 2026 年末某個開源模型，但只出現在無法取得的二手報導中。它不在該模型的釋出部落格、Rosetta Commons 貼文、文件網站，或該研究所自己的文章裡。**不要引用它。**' } },
          { chips: [{ t: { en: 'methodological critique', zh: '方法學質疑' }, k: 'a' }], h: { en: 'Some 2026 enzyme-design hit rates', zh: '2026 年部分酵素設計的命中率' }, p: { en: 'A critique of one high-profile pipeline notes no catalytically dead mutant controls, no binding-dead DNA-binder controls, no experimental structures for some claims, and unclear sampling of which candidates were tested — so reported hit rates may reflect selection bias. The critique itself is secondary and unverified against the paper, so treat both carefully.', zh: '對一條備受矚目的流程的質疑指出：沒有催化失活突變體對照、沒有結合失活的 DNA 結合蛋白對照、部分宣稱沒有實驗結構，而且「哪些候選被測試」的取樣方式不清楚——因此所報告的命中率可能反映選擇偏差。這份質疑本身也是二手且未對照原論文核實，所以兩邊都要謹慎看待。' } },
          { chips: [{ t: { en: 'in silico only', zh: '僅電腦內' }, k: 'r' }], h: { en: 'Agentic design "advantage factors"', zh: '代理式設計的「優勢倍數」' }, p: { en: 'One widely-shared 2026 agentic controller reports a 2.43× geometric-mean gain over a baseline search strategy — entirely **in silico**, with no measured affinities. The authors say experimental validation is still needed. A different agentic result *does* have wet-lab numbers; do not conflate the two.', zh: '2026 年一個被廣泛分享的代理式控制器報告，相對基準搜尋策略有 2.43 倍的幾何平均增益——但完全**在電腦內**，沒有任何量測到的親和力。作者自己說仍需實驗驗證。另一項代理式成果*確實*有濕實驗數字；不要把兩者混為一談。' } },
          { chips: [{ t: { en: 'no in vivo data', zh: '無活體資料' }, k: 'a' }], h: { en: 'Designed proteins as gene-therapy vehicles', zh: '設計蛋白作為基因治療載體' }, p: { en: 'Quasisymmetric cages show cargo delivery and cellular uptake, and a 2026 *Nature* paper claims its RNA transfer vehicles surpass widely used delivery systems. There is **no in vivo gene-delivery or clinical data**. Cargo uptake in cells and a therapeutic vector are separated by about a decade of work.', zh: '準對稱奈米籠展示了貨物遞送與細胞攝取，而 2026 年一篇《自然》論文宣稱其 RNA 運送載體超越廣泛使用的遞送系統。但**沒有活體基因遞送或臨床資料**。細胞層級的貨物攝取與一個治療用載體之間，大約隔著十年的工作。' } },
          { chips: [{ t: { en: 'does not exist yet', zh: '尚不存在' }, k: 'r' }], h: { en: 'De novo transporters, gated channels, rotary motors', zh: '從頭轉運蛋白、閘控通道、旋轉馬達' }, p: { en: 'What 2026 actually delivered: de novo proteins as **solubilisers and stabilisers** of native membrane proteins, designed nanopore interiors, and a protein walker **tethered to a DNA track**. The functional de novo versions — a channel that gates, a transporter that transports, a motor that turns on fuel — do not exist.', zh: '2026 年實際交出的是：作為天然膜蛋白**增溶劑與穩定劑**的從頭設計蛋白、設計的奈米孔內部，以及一個**繫在 DNA 軌道上**的蛋白行走馬達。有功能的從頭版本——會閘控的通道、真的在轉運的轉運蛋白、靠燃料轉動的馬達——並不存在。' } },
          { chips: [{ t: { en: 'preprint, honest gap', zh: '預印本，誠實的差距' }, k: 'a' }], h: { en: 'Designed enzymes in manufacturing', zh: '進入製造業的設計酵素' }, p: { en: 'The lenacapavir result is a preprint: 4 of 67 designs active, best giving 79% conversion. Directed evolution already achieves above 98% conversion and 99.5% enantiomeric excess on comparable chemistry. **No designed enzyme is in commercial production.** This is a genuine milestone and not yet a process.', zh: 'lenacapavir 的成果是預印本：67 個設計中 4 個有活性，最佳者 79% 轉換率。在可比化學上，定向演化已達到 98% 以上轉換率與 99.5% 對掌過量。**目前沒有任何設計酵素進入商業生產。** 這是真正的里程碑，但還不是一個製程。' } },
          { chips: [{ t: { en: 'still preclinical', zh: '仍在臨床前' }, k: 'a' }], h: { en: 'An AI-designed drug in the clinic from the best-funded player', zh: '資金最充裕者的 AI 設計藥物已進臨床' }, p: { en: 'As of 17 November 2026, after a $5 billion round, programmes remain preclinical or IND-enabling with **no human trial disclosed**. Meanwhile a designed-nanoparticle vaccine from an academic institute entered Phase I/II in February 2026. The academic result is the one in humans.', zh: '截至 2026 年 11 月 17 日，在完成 50 億美元募資後，各項計畫仍處於臨床前或 IND 準備階段，且**未揭露任何人體試驗**。同時，一所學術研究機構設計的奈米顆粒疫苗已於 2026 年二月進入第一／二期。真正進入人體的是那個學術成果。' } },
          { chips: [{ t: { en: 'policy gap', zh: '政策缺口' }, k: 'r' }], h: { en: 'That DNA-synthesis screening catches AI-designed threats', zh: 'DNA 合成篩檢能攔下 AI 設計的威脅' }, p: { en: 'A 2025 study showed screening systems in use at major suppliers could not reliably detect AI-reformulated toxins, and a 2026 follow-up found a 300-residue disordered tail evaded whole-protein screening in **99 of 100 constructs**. The November 2026 US policy adds NIST **verification of screeners** — not AI-aware detection. Analysts judge that list-based screening will likely keep failing against generative design.', zh: '2025 年一項研究顯示，主要供應商使用的篩檢系統無法可靠偵測經 AI 重新表述的毒素；2026 年的後續研究發現，一段 300 個殘基的無序尾端在 **100 個構築體中有 99 個**成功規避全蛋白篩檢。2026 年十一月的美國政策增加的是 NIST 對**篩檢者的查核**——不是具 AI 意識的偵測。分析人士判斷，基於清單的篩檢在面對生成式設計時很可能持續失效。' } }
        ], 'g2')
      });

      /* ---------- structures ---------- */
      out += h.sec({
        id: 'f-struct',
        kick: { en: 'Look at the molecules', zh: '看看分子本身' },
        h2: { en: 'Three structures that show where the frontier is', zh: '三個結構，顯示前沿在哪裡' },
        lede: {
          en: 'Coordinates are loaded live from the RCSB Protein Data Bank. Drag to rotate, scroll to zoom. These are real deposited structures of designed proteins, not renderings of models.',
          zh: '座標直接從 RCSB 蛋白質資料庫即時載入。拖曳可旋轉，滾動可縮放。這些是設計蛋白真正沉積的結構，不是模型的渲染圖。'
        },
        body:
          h.pdb({
            id: '9DEG',
            title: { en: 'A de novo serine hydrolase — catalysis designed from scratch', zh: '從頭設計的絲胺酸水解酶——從零設計出的催化' },
            sub: {
              en: 'One of six crystal structures from the 2025 serine-hydrolase campaign, all within about 1 Å Cα RMSD of their design models. The fold does not resemble any natural serine hydrolase.',
              zh: '2025 年絲胺酸水解酶計畫六個晶體結構之一，全部與各自的設計模型相距約 1 Å Cα RMSD 以內。這個摺疊與任何天然絲胺酸水解酶都不相像。'
            },
            caption: {
              en: 'The thing to look for: this is not a copy of chymotrypsin or subtilisin. The catalytic machinery was placed into a scaffold generated for the purpose, and it reached **k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹** with no directed evolution.',
              zh: '要看的重點：這不是胰凝乳蛋白酶或枯草桿菌蛋白酶的複製品。催化機構被放進一個為此目的生成的骨架裡，並在完全不用定向演化的情況下達到 **k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**。'
            },
            style: 'chain'
          }) +
          h.pdb({
            id: '9BK5',
            title: { en: 'A designed binder neutralising a snake-venom toxin', zh: '設計的結合蛋白中和蛇毒毒素' },
            sub: {
              en: 'A de novo mini-binder clamped onto α-cobratoxin at 2.68 Å. Part of the 2025 work on designed proteins against three-finger toxins.',
              zh: '一個從頭設計的迷你結合蛋白夾在 α-眼鏡蛇毒素上，解析度 2.68 Å。屬於 2025 年針對三指毒素的設計蛋白研究。'
            },
            caption: {
              en: 'This is what the mature part of the field looks like: a small, hyperstable, designed protein gripping a specified epitope on a target chosen for a real-world reason. Antivenom is an unusually good fit for design because the targets are small, well characterised, and the existing therapy — animal-derived serum — has serious drawbacks.',
              zh: '這就是這個領域成熟部分的樣貌：一個小而超穩定的設計蛋白，抓住一個因現實理由而選定的標的上指定的抗原決定位。抗蛇毒血清特別適合用設計來做，因為標的小、特性清楚，而現有療法——動物來源血清——有嚴重缺點。'
            },
            style: 'chain', het: true
          }) +
          h.pdb({
            id: '8CYK',
            title: { en: 'A ProteinMPNN-redesigned protein', zh: '經 ProteinMPNN 重新設計的蛋白' },
            sub: {
              en: 'From the 2022 ProteinMPNN paper — the sequence-design step that sits inside essentially every modern design pipeline.',
              zh: '出自 2022 年的 ProteinMPNN 論文——這個序列設計步驟幾乎存在於每一條現代設計流程之中。'
            },
            caption: {
              en: 'Unremarkable to look at, which is the point. ProteinMPNN is a 1.7-million-parameter model — tiny by 2026 standards — and it is the component that turned backbone generation into a usable pipeline. It runs on a laptop.',
              zh: '看起來平凡無奇，而這正是重點。ProteinMPNN 是一個 170 萬參數的模型——以 2026 年的標準來說極小——而它正是把主鏈生成變成可用流程的那個元件。它在筆電上就跑得動。'
            }
          })
      });

      /* ---------- one page summary ---------- */
      out += h.sec({
        id: 'f-one',
        kick: { en: 'Summary', zh: '總結' },
        h2: { en: 'The frontier in one page', zh: '一頁講完前沿' },
        body:
          h.p(
            { en: 'The defining shift of 2026 is that **the frontier stopped being a model and became a system.** In January the question was which generator was best. By November the working unit is a stack: one all-atom co-design model that takes chemistry as an input; an agentic controller allocating GPU hours across tools; a reranker that is deliberately not the structure predictor\'s own confidence; a 48-hour wet-lab loop; and a DNA bill that accounts for 80% of the cost.', zh: '2026 年的決定性轉變是：**前沿不再是一個模型，而成為一套系統。** 一月時的問題是「哪個生成器最好」。到十一月，工作單位是一整套堆疊：一個把化學當輸入的全原子共設計模型；一個在工具之間分配 GPU 時數的代理式控制器；一個刻意不採用結構預測器自身信賴度的重排序器；一個 48 小時的濕實驗循環；以及一張佔成本 80% 的 DNA 帳單。' },
            { en: 'Three axes genuinely broke open. **Amide-bond hydrolysis**, resistant for two decades, fell twice in October. **Conformational transitions** became tractable from end-point structures alone. **AI-designed gene editors** worked in bacteria, plants and human cells. Binder design to arbitrary protein targets became an industrial process rather than a research result — 86 of 127 targets, from over a million designs — and small-molecule binder design was effectively solved for its test cases.', zh: '有三條軸真正被打開。抵抗了二十年的**醯胺鍵水解**在十月被攻破兩次。**構型轉換**變得可以僅從端點結構處理。**AI 設計的基因編輯器**在細菌、植物與人類細胞中都能運作。對任意蛋白標的的結合蛋白設計，從研究成果變成工業流程——127 個標的中 86 個，出自超過一百萬個設計——而小分子結合蛋白設計在其測試案例上基本被解決。' },
            { en: 'What remains unsolved is **target triage and the field\'s own instrumentation.** Nobody can predict which targets will fail. Confidence scores do not encode what people use them for. And the honest reading of every capability number above is that it is an upper bound: almost all of them are self-reported by the method\'s developer, on targets they chose, from designs they pre-filtered, scored by metrics whose wet-lab correlation measures around 0.6–0.76 AUC.', zh: '仍未解決的是**標的的分流判斷，以及這個領域自己的儀器。** 沒有人能預測哪些標的會失敗。信賴度分數並不編碼人們用它來做的那件事。而上面每一個能力數字誠實的讀法都是「上界」：它們幾乎全是方法開發者在自選標的上、用自己預篩過的設計、以實驗相關性約 0.6–0.76 AUC 的指標評分後的自我報告。' },
            { en: 'The single most informative event on the near horizon is **CASP17**, whose results go live on 29–30 November 2026. Its four new categories — Immune Complexes, Conformational Ensembles, Organic Ligand–Protein Complexes, and self-assessment of accuracy — are precisely the four axes on which 2026\'s independent benchmarks found the largest gaps. Anyone making plans in this field should wait a week and read it.', zh: '近期最具資訊量的事件是 **CASP17**，結果於 2026 年 11 月 29–30 日公開。它的四個新類別——免疫複合體、構型集合、有機配體—蛋白複合體，以及準確度自評——恰好就是 2026 年獨立基準發現落差最大的那四軸。任何在這個領域做規劃的人，都該等一週、然後去讀它。' }
          )
      });

      return out;
    }
  };
})(window);
