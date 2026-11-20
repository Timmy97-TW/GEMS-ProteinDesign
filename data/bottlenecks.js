(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var B = [
    { k: 'A', t: { en: 'Function, not form', zh: '功能，而非形狀' }, sev: 5,
      d: { en: 'We can make folds. We cannot reliably make **function** — specifically catalysis. The field\'s own 2026 *Nature* review states that structures, assemblies and binders "are close to being solved" and names the frontier as catalysts for high-energy-barrier reactions, and switches and nanomachines that integrate binding, conformational change and catalysis.', zh: '我們能做出摺疊。我們無法可靠地做出**功能**——特別是催化。這個領域自己 2026 年的《自然》綜述就說，結構、組裝體與結合蛋白「接近被解決」，並把前沿定義為：高能障反應的催化劑，以及整合結合、構型變化與催化的開關與奈米機器。' },
      ev: { en: 'A **seven-order-of-magnitude spread** across de novo enzymes: serine hydrolase 2.2 × 10⁵ M⁻¹s⁻¹ and Zn metallohydrolase 1.6 × 10⁴ at the top; retro-aldolase 290 and C–C lyase 5 at the bottom. Natural median around 1.25 × 10⁵. The best fully computational Kemp eliminase reaches 1.27 × 10⁴ with more than 140 mutations from any natural protein. Reviewers\' verdict: "no end-to-end solution currently exists for designing enzymes with new-to-nature activities."', zh: '從頭酵素之間相差 **七個數量級**：頂端是絲胺酸水解酶 2.2 × 10⁵ M⁻¹s⁻¹ 與鋅金屬水解酶 1.6 × 10⁴；底端是逆醛醇酶 290 與 C–C 裂解酶 5。天然中位數約 1.25 × 10⁵。最佳的純計算 Kemp 消去酶達到 1.27 × 10⁴，且與任何天然蛋白相差超過 140 個突變。審閱者的結論是：「目前不存在設計『自然界沒有的活性』酵素的端到端解法。」' },
      who: { en: 'The Baker lab (hydrolases, proteases, metalloenzymes); Fleishman (computational Kemp eliminases); the 2026 metalloprotease and cysteine-protease groups.', zh: 'Baker 實驗室（水解酶、蛋白酶、金屬酵素）；Fleishman（計算 Kemp 消去酶）；2026 年的金屬蛋白酶與半胱胺酸蛋白酶團隊。' },
      solved: { en: 'A designed enzyme at natural median efficiency for a reaction with **no** natural counterpart, with no directed evolution, reproduced by a second laboratory.', zh: '一個設計酵素在**沒有**天然對應物的反應上達到天然中位效率，不使用定向演化，並由第二個實驗室重現。' },
      when: { en: 'Hydrolase-like chemistry: 2028–2030. High-barrier new-to-nature chemistry: not by 2031.', zh: '水解酶類化學：2028–2030。高能障、自然界沒有的化學：2031 年前不會。' } },
    { k: 'B', t: { en: 'Dynamics and multi-state behaviour', zh: '動力學與多狀態行為' }, sev: 4,
      d: { en: 'Both prediction and design are biased toward a single static structure. Allostery, conformational ensembles and intrinsically disordered regions sit outside what the standard pipeline represents — and function very often *is* motion.', zh: '預測與設計都偏向單一靜態結構。別位調控、構型集合與本質無序區落在標準流程所能表徵的範圍之外——而功能往往*就是*運動。' },
      ev: { en: 'The AlphaFold3 paper itself states that multiple seeds "do not produce an approximation of the solution ensemble" and that it predicts some ligases closed in both apo and holo states. BioEmu-class methods help but do **not** give Boltzmann weights: 2026 work shows they mis-rank conformer energies, miss mutation-induced population shifts, and fail outright where side-chain dynamics govern.', zh: 'AlphaFold3 的論文自己就寫明，多個隨機種子「並不會產生解集合的近似」，而且它會把某些連接酶在 apo 與 holo 狀態下都預測成閉合。BioEmu 類方法有幫助，但**不會**給出波茲曼權重：2026 年的研究顯示它們會把構型能量排序排錯、漏掉突變造成的族群位移，在由側鏈主導的系統上直接失敗。' },
      who: { en: 'Microsoft Research (BioEmu); the Gen-COMPAS authors; CASP17, which assesses conformational ensembles as a formal category for the first time.', zh: '微軟研究院（BioEmu）；Gen-COMPAS 的作者；以及首次把構型集合列為正式評估類別的 CASP17。' },
      solved: { en: 'Predicted populations of two states matching experiment within a factor of two, on systems the method has not seen, including a case governed by side-chain rearrangement.', zh: '在方法未見過的系統上，兩個狀態的預測族群比例與實驗相差二倍以內，且包含一個由側鏈重排主導的案例。' },
      when: { en: 'Partial by 2029; correct Boltzmann weights are not close.', zh: '2029 年前可部分達成；正確的波茲曼權重還很遠。' } },
    { k: 'C', t: { en: 'The data bottleneck — negative and functional, not structural', zh: '資料瓶頸——缺的是負面與功能資料，不是結構資料' }, sev: 5,
      d: { en: 'The shortage is not structures. It is **outcomes**, and above all **failures**. The published record systematically omits designs that did not work, which makes every aggregate success rate an overestimate and makes supervised learning on design outcomes nearly impossible.', zh: '短缺的不是結構，而是**結果**，尤其是**失敗**。已發表的紀錄系統性地遺漏了沒成功的設計，這使得任何彙總成功率都是高估，也讓「以設計結果做監督學習」幾乎不可能。' },
      ev: { en: 'The PDB holds roughly 250,000 structures against more than 250 million known sequences — **under 0.1% coverage**. Far worse: **a decade of published de novo monomer design produced 614 openly characterised designs**, and the team that curated them had to reconstruct failures from paper text and **exclude designs that reported no experimental outcome at all**. The largest public wet-lab binder set is about 1,385 positives against more than 478,000 negatives. **No public failed-design standard exists anywhere.**', zh: 'PDB 有約 250,000 個結構，對比超過 2.5 億條已知序列——**覆蓋率不到 0.1%**。更糟的是：**十年的從頭單體設計文獻總共只產出 614 個公開表徵的設計**，而整理它們的團隊必須從論文正文重建失敗案例，並**排除完全沒有報告實驗結果的設計**。最大的公開濕實驗結合蛋白資料集約有 1,385 個陽性，對比超過 478,000 個陰性。**世界上不存在任何公開的「失敗設計」標準。**' },
      who: { en: 'The Rocklin group (the 614-design curation); the Protein Design Archive; blind competition organisers who publish negatives.', zh: 'Rocklin 團隊（614 個設計的整理）；蛋白質設計檔案庫（Protein Design Archive）；會公布負面結果的盲測競賽主辦方。' },
      solved: { en: 'A standing public repository of designs with structured provenance — tool, version, seed, filters, and outcome including expression and solubility failures — with more than 10,000 entries and at least a third of them failures.', zh: '一個常設的公開資料庫，收錄帶結構化溯源資訊的設計——工具、版本、隨機種子、篩選條件，以及包含表達與可溶性失敗在內的結果——條目超過 10,000 個，且至少三分之一是失敗案例。' },
      when: { en: 'A credible first corpus in 2027; a field norm not before 2030.', zh: '2027 年會有可信的第一批語料；要成為領域常規不會早於 2030 年。' } },
    { k: 'D', t: { en: 'The wet lab — and the counter-intuitive failure mode', zh: '濕實驗——以及一個反直覺的失效模式' }, sev: 4,
      d: { en: 'Design is now cheap and testing is not. But the specific way designs fail is the surprise, and it has a direct consequence for how you should filter.', zh: '設計現在很便宜，測試不便宜。但真正令人意外的是設計失敗的*方式*，而它對「你該怎麼篩選」有直接後果。' },
      ev: { en: '**65% of de novo design failures are insolubility and aggregation; only 16% are poor expression.** And 59 of 345 soluble, monomeric designs still had the **wrong secondary structure** by circular dichroism. So roughly two-thirds of failures are *soluble but wrong* — exactly the category that confidence metrics catch worst. Economics: outsourced testing runs about **$150–250 per design over about three weeks**, while the DNA for a 300-residue design is only **$63–225**. DNA is not the cost; characterisation is.', zh: '**從頭設計失敗中有 65% 是不溶與聚集；只有 16% 是表達不良。** 而 345 個可溶、單體的設計中，仍有 59 個以圓二色光譜測出**二級結構錯誤**。所以大約三分之二的失敗是*可溶但錯誤*——正是信賴度指標最抓不到的那一類。經濟學：委外測試約為**每個設計 150–250 美元、歷時約三週**，而一個 300 殘基設計的 DNA 只要 **63–225 美元**。成本不在 DNA，而在表徵。' },
      who: { en: 'High-throughput characterisation platforms; CRO-based design testing services; the solubility-prediction community.', zh: '高通量表徵平台；以委外機構為基礎的設計測試服務；可溶性預測社群。' },
      solved: { en: 'A solubility or aggregation predictor that reaches AUROC above 0.85 on a held-out set of designed — not natural — proteins.', zh: '一個在「設計蛋白」（而非天然蛋白）的保留測試集上達到 AUROC 0.85 以上的可溶性或聚集預測器。' },
      when: { en: 'Insolubility stays the modal failure mode through 2031 on current evidence.', zh: '依現有證據，不溶在 2031 年前仍是最常見的失效模式。' } },
    { k: 'E', t: { en: 'Evaluation — the multiplier on every other number here', zh: '評估——它是這裡其他每個數字的乘數' }, sev: 5,
      d: { en: 'This is the best-measured bottleneck and the most consequential, because it is not one of ten — it is the reason the numbers in A, D and G should all be read as upper bounds.', zh: '這是被量測得最清楚、也最有後果的瓶頸，因為它不是十個之一——它是「A、D、G 的數字都該被讀成上界」的原因。' },
      ev: { en: 'The only peer-reviewed, developer-**independent** test: 614 designs from 11 studies, 43% success, and confidence-metric ROC AUC of **0.60–0.72** (ESMFold mean pLDDT best at 0.72 ± 0.05; AlphaFold3 pLDDT worst at 0.60 ± 0.06). **Combining all metrics gave no improvement.** "Many failed designs scored better on confidence metrics than successful ones", and there is **no generalisable pLDDT threshold across topologies.** On binders, a retrospective of 1,320 designs across 15 targets found pooled-predictor AUROC **0.761 against 0.589 for a trivial hydrophobic-fraction baseline** — the sophisticated score buys about 0.17 over counting greasy residues — and the reliability curve **inverts above 0.6**: designs predicted at 70–80% bound only 28% of the time. Two wet-lab assays on the same designs agree only **89%**, which caps any metric. **There is no CASP for protein design** — no prospective, blind, third-party benchmark exists for design, although 2026 produced one for antibodies.', zh: '唯一經同儕審查、且由**開發者以外**團隊執行的檢驗：11 項研究中的 614 個設計，43% 成功，信賴度指標的 ROC AUC 為 **0.60–0.72**（ESMFold 平均 pLDDT 最佳，0.72 ± 0.05；AlphaFold3 pLDDT 最差，0.60 ± 0.06）。**把所有指標合併沒有任何改善。**「許多失敗的設計在信賴度指標上的分數高於成功的設計」，而且**不存在跨拓樸通用的 pLDDT 門檻。** 在結合蛋白方面，一項涵蓋 15 個標的、1,320 個設計的回溯分析發現，匯總預測器的 AUROC 為 **0.761，而「疏水比例」這個瑣碎基準是 0.589**——精巧的分數只比「數油膩殘基」多買到約 0.17——而且可靠度曲線在 **0.6 以上反轉**：被預測為 70–80% 的設計實際只有 28% 結合。同一批設計用兩種濕實驗分析只有 **89%** 一致，這為任何指標設下上限。**設計領域沒有 CASP**——沒有前瞻、盲測、第三方的設計基準，儘管 2026 年為抗體做出了一個。' },
      who: { en: 'The Rocklin group; independent reanalysts (including a single-author public repository that produced some of the best numbers in this field); the AIntibody consortium; blind-competition organisers.', zh: 'Rocklin 團隊；獨立重新分析者（包括一個單一作者的公開程式庫，產出了本領域部分最佳數字）；AIntibody 聯盟；盲測競賽主辦方。' },
      solved: { en: 'A prospective, blind, third-party benchmark for **design** (not prediction) that has run at least two cycles with published negatives.', zh: '一個針對**設計**（而非預測）的前瞻、盲測、第三方基準，已完成至少兩輪，並公布負面結果。' },
      when: { en: 'Two cycles by 2029 is plausible — the demand is measured and the supply exists in prototype. The gap is governance, not capability.', zh: '2029 年前跑完兩輪是合理的——需求已被量測，供給也已有雛形。缺的是治理，不是能力。' } },
    { k: 'F', t: { en: 'Delivery and in-vivo behaviour', zh: '遞送與活體行為' }, sev: 4,
      d: { en: 'A good binder is not a drug. Immunogenicity, pharmacokinetics, tissue distribution, manufacturability and intracellular delivery are all downstream of design and none of them is designed for.', zh: '一個好的結合蛋白不是藥。免疫原性、藥物動力學、組織分布、可製造性與細胞內遞送全都在設計的下游，而且沒有一項是被設計出來的。' },
      ev: { en: 'The clinical pipeline as of November 2026: one Phase-1-completed-then-discontinued programme, one not-yet-recruiting Phase 1, and a designed-nanoparticle vaccine in Phase I/II — against roughly 90% Phase-1 attrition in general. The one approved designed protein was withdrawn from production four months after approval for lack of demand. Intracellular delivery of designed proteins remains thinly evidenced.', zh: '截至 2026 年十一月的臨床管線：一個完成第一期後中止的計畫、一個尚未收案的第一期，以及一個進入第一／二期的設計奈米顆粒疫苗——而一般第一期的淘汰率約為 90%。唯一獲核准的設計蛋白，在核准四個月後因需求不足而停產。設計蛋白的細胞內遞送仍然缺乏證據。' },
      who: { en: 'Pharmaceutical partners; the designed-nanoparticle vaccine groups; the 2026 RNA-vehicle work.', zh: '製藥合作夥伴；設計奈米顆粒疫苗團隊；2026 年的 RNA 載體研究。' },
      solved: { en: 'A fully de novo designed protein completing Phase 2 with a clinical efficacy readout.', zh: '一個完全從頭設計的蛋白完成第二期並有臨床療效數據。' },
      when: { en: 'Not by 2031 for a de novo *active moiety*. A designed **scaffold** — nanoparticle vaccine, delivery vehicle — is the realistic first approval.', zh: '以從頭設計的*活性成分*而言，2031 年前不會。現實中第一個核准會是設計的**支架**——奈米顆粒疫苗或遞送載體。' } },
    { k: 'G', t: { en: 'Generalisation to hard target classes', zh: '對困難標的類別的泛化' }, sev: 4,
      d: { en: 'Hit rates are quoted as single numbers but behave as distributions over targets — and **the spread across targets exceeds the spread across methods.** Nobody can predict in advance which targets will fail.', zh: '命中率被當成單一數字引用，但它的行為是「跨標的的分布」——而且**跨標的的差異大於跨方法的差異。** 沒有人能事先預測哪些標的會失敗。' },
      ev: { en: 'Per-target spreads of 0–88% within single studies. β-sheet-containing designs 12.8% against 28.4% for α-helical. Polar and occluded epitopes, membrane proteins, glycoproteins, disordered targets and conformational epitopes all lag. In public blind competitions: EGFR 2.5% then 13.2%, Nipah 9.6%, TREM2 37 of 100, but the hard target RBX1 only 2.8%. Best de novo EGFR binder 82 nM against 1.21 nM for an optimised known binder — **optimising an existing binder beats designing one.**', zh: '單一研究內的逐標的差異就有 0–88%。含 β 摺板的設計 12.8%，α 螺旋的 28.4%。極性與被遮蔽的抗原決定位、膜蛋白、糖蛋白、無序標的與構型抗原決定位全都落後。在公開盲測競賽中：EGFR 先 2.5%、後 13.2%，Nipah 9.6%，TREM2 100 個中 37 個，但困難標的 RBX1 只有 2.8%。最佳從頭 EGFR 結合蛋白 82 nM，而經最佳化的已知結合蛋白是 1.21 nM——**改良既有結合蛋白勝過從頭設計一個。**' },
      who: { en: 'Interface-mimicry methods that rescue failed targets; PPI-specific rerankers; the blind-competition organisers who generate the per-target data.', zh: '以界面模仿救回失敗標的的方法；專用於蛋白—蛋白交互作用的重排序器；產生逐標的資料的盲測競賽主辦方。' },
      solved: { en: 'A published, validated **designability predictor for targets** — tell me before I spend the money whether this epitope is designable.', zh: '一個已發表且經驗證的**標的可設計性預測器**——在我花錢之前就告訴我這個抗原決定位可不可設計。' },
      when: { en: 'This is the single most valuable missing tool in the field. No credible candidate exists as of late 2026.', zh: '這是本領域最有價值的那個缺失工具。截至 2026 年末，沒有可信的候選。' } },
    { k: 'H', t: { en: 'Compute, access and concentration', zh: '運算、取用與集中化' }, sev: 2,
      d: { en: 'The good news in this chapter. Compute has **stopped** being the barrier. What is concentrating is method access and validation capacity, not GPUs.', zh: '本章的好消息。運算已**不再**是障礙。正在集中的是方法取用與驗證產能，不是 GPU。' },
      ev: { en: 'A complete agentic de novo binder campaign now costs about **$150 of GPU plus tokens on one H200 over 24 hours — down from roughly 2,500 H100-hours (about $10,000) per target in under a year.** Boltz-2 runs on a **free Colab T4 in 2–10 minutes**; RFdiffusion peptide design has run in **under 3 GB of VRAM on a consumer RTX 3090**. Against that: AlphaFold3 weights are academic-request-only and explicitly barred from "training similar biomolecular models", and one commercial antibody group states it chooses not to disclose methodological details "for commercial reasons". **Structure prediction is getting more open; function design is getting less open.**', zh: '一場完整的代理式從頭結合蛋白活動現在約需**在單一 H200 上 24 小時、約 150 美元的 GPU 加 token 成本——不到一年前，每個標的約需 2,500 個 H100 小時（約 10,000 美元）。** Boltz-2 在**免費 Colab T4 上 2–10 分鐘**跑完；RFdiffusion 的肽設計曾在**消費級 RTX 3090、不到 3 GB VRAM** 下執行。相對地：AlphaFold3 權重僅限學術申請，且明確禁止用於「訓練類似的生物分子模型」，而某商業抗體團隊表示「因商業理由」選擇不揭露方法細節。**結構預測越來越開放；功能設計越來越封閉。**' },
      who: { en: 'The open-weight ecosystem; cloud-lab and CRO providers; public funders — note that three of four major 2026 public awards fund wet-lab capacity or enzymes, **not models**.', zh: '開放權重生態系；雲端實驗室與委外機構；公共資助方——注意 2026 年四項主要公共補助中有三項投向濕實驗產能或酵素，**而非模型**。' },
      solved: { en: 'Already largely solved for compute. For validation it would mean a shared, subsidised characterisation facility open to small groups.', zh: '就運算而言大致已解決。就驗證而言，意味著要有一個對小團隊開放的、共享且有補貼的表徵設施。' },
      when: { en: 'Compute is already a non-issue. Validation access is the 2027–2030 question.', zh: '運算已不是問題。驗證的可取用性才是 2027–2030 年的問題。' } },
    { k: 'I', t: { en: 'Biosecurity as a technical constraint', zh: '生物安全作為技術限制' }, sev: 3,
      d: { en: 'Screening, gated model release and dual-use review now shape what gets published and how fast. This is a genuine engineering constraint, not only an ethical one — and the 2026 evidence shows both the hole and the cost of patching it.', zh: '篩檢、受限的模型釋出與雙重用途審查，現在已在形塑「什麼能發表、發表得多快」。這是真正的工程限制，不只是倫理問題——而 2026 年的證據同時顯示了漏洞與補洞的代價。' },
      ev: { en: 'A 2025 study showed screening systems in use at major DNA suppliers could not reliably detect AI-reformulated toxins; a 2026 follow-up found a **300-residue disordered tail evaded whole-protein screening in 99 of 100 constructs.** The same paper measured the cost of fixing it: **23.3% of human-protein requests and 63.3% (38 of 60) of antibody-patent targets were flagged dual-use.** The November 2026 US policy adds NIST verification *of screeners* — not AI-aware detection.', zh: '2025 年一項研究顯示，主要 DNA 供應商使用的篩檢系統無法可靠偵測經 AI 重新表述的毒素；2026 年的後續研究發現，一段 **300 個殘基的無序尾端在 100 個構築體中有 99 個規避了全蛋白篩檢。** 同一篇論文也量測了修補的代價：**23.3% 的人類蛋白申請與 63.3%（60 個中 38 個）的抗體專利標的被標記為雙重用途。** 2026 年十一月的美國政策增加的是 NIST 對*篩檢者*的查核——不是具 AI 意識的偵測。' },
      who: { en: 'DNA synthesis providers; NIST; the function-aware screening community; the watermarking work published in 2026.', zh: 'DNA 合成供應商；NIST；功能感知篩檢社群；2026 年發表的水印研究。' },
      solved: { en: 'Function-aware screening deployed at major suppliers, with a published false-positive rate the research community accepts.', zh: '主要供應商部署功能感知篩檢，並公布研究社群能接受的偽陽性率。' },
      when: { en: 'Adoption by 2029 with documented research friction is the reasonable expectation.', zh: '合理的預期是 2029 年前被採用，並伴隨已記錄的研究摩擦。' } },
    { k: 'J', t: { en: 'Talent, tooling and the missing curriculum', zh: '人才、工具鏈，與缺失的課程' }, sev: 3,
      d: { en: 'The field has no agreed training path. The skill set it needs — structural intuition, machine-learning literacy, and the wet-lab judgement to know which number to trust — is assembled ad hoc, usually by one person in a group reading preprints.', zh: '這個領域沒有公認的訓練路徑。它需要的技能組合——結構直覺、機器學習素養，以及「知道該相信哪個數字」的濕實驗判斷力——都是臨時拼湊起來的，通常靠一個團隊裡某個會讀預印本的人。' },
      ev: { en: 'The state of the art in evaluation includes a **single-author, unreviewed public repository** that produced some of the strongest numbers in this chapter by reanalysing an open dataset. One widely cited 2026 benchmark reports its headline metrics **only in figures**, not tables. Reproducibility is improving but a 2026 perspective calling for shared "model proteins" with common benchmarks and reporting requirements was described by an editor as "overdue".', zh: '評估領域的技術前沿，包括一個**單一作者、未經審查的公開程式庫**，它靠重新分析一份開放資料集就產出了本章部分最有力的數字。2026 年一個被廣泛引用的基準，其招牌指標**只畫在圖裡**，沒有表格。可重現性在改善，但 2026 年一篇呼籲建立共享「模型蛋白」與共同基準、共同報告要求的觀點文章，被一位編輯形容為「早就該有了」。' },
      who: { en: 'Open-source maintainers; competition organisers; a small number of teaching groups; and — genuinely — student teams, which is why this chapter ends where it does.', zh: '開源維護者；競賽主辦方；少數教學團隊；以及——真心的——學生團隊，這也是本章以那樣的結尾收束的原因。' },
      solved: { en: 'A standard reporting schema that journals require: tool, version, seed, filters applied in order, designs generated, designs ordered, expression, solubility, function, and the failures.', zh: '一套期刊會要求的標準報告格式：工具、版本、隨機種子、依序套用的篩選、生成設計數、訂購設計數、表達、可溶性、功能，以及失敗案例。' },
      when: { en: 'This is the cheapest bottleneck to attack and the one most open to outsiders.', zh: '這是最便宜可攻的瓶頸，也是最對外人開放的那一個。' } }
  ];

  PD.pages.bottlenecks = {
    label: { en: 'Bottlenecks', zh: '瓶頸分析' },
    title: { en: 'Bottleneck Analysis', zh: '瓶頸分析' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 5 · What is actually in the way', zh: '第五章 · 真正擋在路上的是什麼' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Ten bottlenecks. One of them is ==a multiplier on all the others==.',
          zh: '十個瓶頸。其中一個是==其他所有瓶頸的乘數==。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'This chapter separates measured from asserted. Each bottleneck gets a definition, the quantitative evidence of how bad it is, who is working on it, and what would count as it being solved. The one to read first is **E, evaluation** — because the field\'s success metrics correlate with wet-lab outcome at around 0.6–0.76 AUC, which means every hit rate elsewhere in this report should be read as an upper bound.',
          zh: '本章把「量測到的」與「被斷言的」分開。每個瓶頸都有定義、它有多嚴重的量化證據、誰在處理它，以及「解決了」會是什麼樣子。要先讀的是 **E，評估**——因為這個領域的成功指標與實驗結果的相關性只有約 0.6–0.76 AUC，也就是說本報告其他地方的每一個命中率都該被讀成上界。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'b-sev', t: { en: 'Severity map', zh: '嚴重度地圖' } },
        { id: 'b-eval', t: { en: 'E · Evaluation', zh: 'E · 評估' } },
        { id: 'b-fail', t: { en: 'How designs fail', zh: '設計怎麼失敗' } },
        { id: 'b-data', t: { en: 'The data gap', zh: '資料缺口' } },
        { id: 'b-all', t: { en: 'All ten dossiers', zh: '十份完整檔案' } },
        { id: 'b-small', t: { en: 'Where a small team helps', zh: '小團隊能幫上哪裡' } }
      ]);

      /* ---------- severity ---------- */
      out += h.sec({
        id: 'b-sev',
        kick: { en: 'Overview', zh: '總覽' },
        h2: { en: 'Severity, and what each bottleneck blocks', zh: '嚴重度，以及每個瓶頸擋住了什麼' },
        body:
          h.fig({
            kind: 'bars', tag: { en: 'editorial scoring', zh: '編輯評分' },
            title: { en: 'How severe is each bottleneck?', zh: '每個瓶頸有多嚴重？' },
            sub: { en: 'Severity here means: how much of the field\'s stated ambition is blocked by this, weighted by how little progress it has made. An editorial judgement over sourced evidence.', zh: '這裡的嚴重度指的是：這個瓶頸擋住了這個領域所宣稱企圖的多少比例，並以「它進展有多小」加權。這是基於有出處證據的編輯判斷。' },
            opts: { max: 5, dec: 0 },
            data: B.slice().sort(function (a, b) { return b.sev - a.sev; }).map(function (b) {
              return {
                label: { en: b.k + ' · ' + b.t.en, zh: b.k + ' · ' + b.t.zh }, v: b.sev,
                color: b.sev >= 5 ? '#d03b3b' : b.sev === 4 ? '#eb6834' : b.sev === 3 ? '#eda100' : '#1baf7a'
              };
            }),
            legend: [
              { c: '#d03b3b', n: { en: '5 · blocks the field\'s stated goals', zh: '5 · 擋住領域所宣稱的目標' } },
              { c: '#eb6834', n: { en: '4 · blocks major applications', zh: '4 · 擋住主要應用' } },
              { c: '#eda100', n: { en: '3 · slows everything', zh: '3 · 拖慢一切' } },
              { c: '#1baf7a', n: { en: '2 · improving fast', zh: '2 · 正在快速改善' } }
            ],
            caption: { en: 'Scored against the evidence in the dossiers below. Compute (H) is the one axis that genuinely improved in 2026 and is scored accordingly.', zh: '依下方檔案中的證據評分。運算（H）是 2026 年唯一真正改善的一軸，評分已反映這點。' }
          }) +
          h.take({ en: 'The cross-cutting point', zh: '貫穿全局的那一點' }, {
            en: 'Almost every headline hit rate in this field is **self-reported by the method\'s developer, on targets they chose, from designs they pre-filtered, scored by metrics whose wet-lab correlation is measured at 0.60–0.76 AUC.** Bottleneck E is not one of ten. It is the reason A, D and G should be read as upper bounds.',
            zh: '這個領域幾乎每一個招牌命中率，都是**方法開發者在自選標的上、用自己預篩過的設計、以實驗相關性經量測為 0.60–0.76 AUC 的指標評分後的自我報告。** 瓶頸 E 不是十個之一。它是「A、D、G 都該被讀成上界」的原因。'
          })
      });

      /* ---------- evaluation detail ---------- */
      out += h.sec({
        id: 'b-eval',
        kick: { en: 'Bottleneck E, in detail', zh: '瓶頸 E，細看' },
        h2: { en: 'The filters everyone uses do not work very well', zh: '大家都在用的那些篩選器，其實不太有用' },
        lede: {
          en: 'This is the most measured claim in this report, and it is measured by people independent of the tools\' developers. The numbers are not ambiguous.',
          zh: '這是本報告中被量測得最清楚的主張，而且是由與工具開發者無關的人量測的。這些數字並不模糊。'
        },
        body:
          h.fig({
            kind: 'bars', tag: { en: 'measured', zh: '已量測' },
            title: { en: 'How well do confidence metrics predict experimental success?', zh: '信賴度指標預測實驗成功的能力有多好？' },
            sub: {
              en: 'ROC AUC against wet-lab outcome. 0.5 is a coin flip; 1.0 is perfect. For reference, a clinically useful diagnostic is usually above 0.85.',
              zh: '相對實驗結果的 ROC AUC。0.5 是丟硬幣；1.0 是完美。作為參考，臨床上有用的診斷通常高於 0.85。'
            },
            opts: { max: 1, dec: 2 },
            data: [
              { label: { en: 'ESMFold mean pLDDT (best of the set)', zh: 'ESMFold 平均 pLDDT（這組中最佳）' }, v: 0.72, color: '#2a78d6', note: { en: '± 0.05, on 614 curated designs', zh: '± 0.05，614 個經整理設計' } },
              { label: { en: 'AlphaFold3 pLDDT (worst of the set)', zh: 'AlphaFold3 pLDDT（這組中最差）' }, v: 0.60, color: '#e34948', note: { en: '± 0.06', zh: '± 0.06' } },
              { label: { en: 'All metrics combined', zh: '所有指標合併' }, v: 0.72, color: '#eb6834', note: { en: 'no improvement over the best single metric', zh: '相較最佳單一指標沒有改善' } },
              { label: { en: 'Pooled binder predictors (1,320 designs)', zh: '匯總結合蛋白預測器（1,320 個設計）' }, v: 0.761, color: '#2a78d6' },
              { label: { en: 'Trivial baseline: hydrophobic fraction', zh: '瑣碎基準：疏水比例' }, v: 0.589, color: '#8792A3', note: { en: 'just counting greasy residues', zh: '只是在數油膩殘基' } },
              { label: { en: 'A clinically useful diagnostic, for scale', zh: '作為尺度參考：臨床有用的診斷' }, v: 0.85, color: '#1baf7a', note: { en: 'nothing here reaches this', zh: '這裡沒有任何一項達到這個水準' } }
            ],
            caption: {
              en: 'From the independent 614-design study (11 published studies, 43% overall success) and a public retrospective of 1,320 binder designs across 15 targets. The sophisticated binder score buys about **0.17 AUC over counting hydrophobic residues**. Two separate wet-lab assays on the same designs agree only 89%, which caps what any metric could achieve.',
              zh: '出自獨立的 614 個設計研究（11 篇已發表研究，整體成功率 43%），以及一份涵蓋 15 個標的、1,320 個結合蛋白設計的公開回溯分析。精巧的結合蛋白分數只比「數疏水殘基」多買到約 **0.17 AUC**。同一批設計用兩種不同濕實驗分析只有 89% 一致，這為任何指標能達到的上限設下天花板。'
            }
          }) +
          h.warn({
            en: '**The worst part is not the low AUC — it is the inverted reliability curve.** In the binder retrospective, designs the pooled predictor rated at 70–80% confidence actually bound only **28%** of the time. The curve inverts above 0.6, which is precisely the range everyone filters on. A high score is not just weakly informative; in that band it is **anti**-informative.',
            zh: '**最糟的不是 AUC 低——而是可靠度曲線反轉了。** 在那份結合蛋白回溯分析中，匯總預測器評為 70–80% 信賴度的設計，實際上只有 **28%** 真的結合。曲線在 0.6 以上反轉，而那正是大家用來篩選的區間。高分不只是資訊量低；在那個區間，它是**反**資訊的。'
          }) +
          h.bio('filterGap', {
            title: { en: 'What the computer says, and what the bench says', zh: '電腦說的，與實驗台說的' },
            sub: { en: 'The link between these two panels is the field\'s weakest measured connection — and the one most plans silently assume is strong.', zh: '這兩欄之間的連結是本領域量測得最弱的一環——也是大多數計畫默默假設它很強的那一環。' },
            caption: { en: 'The left-hand percentages illustrate the shape of a typical filter stack and are not drawn from any single paper.', zh: '左欄的百分比用於說明典型篩選流程的形狀，並非引用任一篇論文。' }
          })
      });

      /* ---------- failure modes ---------- */
      out += h.sec({
        id: 'b-fail',
        kick: { en: 'Bottleneck D, in detail', zh: '瓶頸 D，細看' },
        h2: { en: 'Designs do not fail the way people expect', zh: '設計失敗的方式和人們以為的不一樣' },
        lede: {
          en: 'Ask a room of students why a designed protein fails and they will say "it does not bind". The data says otherwise, and the difference should change how you spend your filtering effort.',
          zh: '問一屋子學生「一個設計蛋白為什麼失敗」，他們會說「它不結合」。資料說的不是這樣，而這個差別應該改變你把篩選力氣花在哪裡。'
        },
        body:
          h.fig({
            kind: 'segbar', tag: { en: 'measured', zh: '已量測' },
            title: { en: 'Why de novo monomer designs fail', zh: '從頭單體設計為什麼失敗' },
            sub: { en: 'Two-thirds of failures happen before binding is ever tested.', zh: '三分之二的失敗發生在「結合」被測試之前。' },
            opts: { unit: '%' },
            data: [
              { label: { en: 'Insolubility and aggregation', zh: '不溶與聚集' }, v: 65, slot: 8 },
              { label: { en: 'Poor expression', zh: '表達不良' }, v: 16, slot: 2 },
              { label: { en: 'Other / unreported', zh: '其他／未報告' }, v: 19, slot: 4 }
            ],
            caption: {
              en: 'From the curated de novo monomer failure analysis. Separately, **59 of 345** designs that *were* soluble and monomeric still showed the wrong secondary structure by circular dichroism — so a large share of the "soluble" population is soluble but wrong, which is exactly the category confidence metrics catch worst.',
              zh: '出自經整理的從頭單體失敗分析。另外，**345 個**確實可溶且為單體的設計中，仍有 **59 個**以圓二色光譜測出二級結構錯誤——所以「可溶」族群中有相當大一部分是可溶但錯誤，而那正是信賴度指標最抓不到的那一類。'
            }
          }) +
          h.fig({
            kind: 'bars', tag: { en: 'cost', zh: '成本' },
            title: { en: 'What it costs to find out', zh: '要知道答案的代價' },
            sub: { en: 'US dollars, logarithmic. The design is free; the answer is not.', zh: '美元，對數尺度。設計是免費的；答案不是。' },
            opts: { log: true, unit: 'USD' },
            data: [
              { label: { en: 'Compute for one agentic binder campaign', zh: '一場代理式結合蛋白活動的運算' }, v: 150, color: '#1baf7a', note: { en: '144 H100 GPU-hours, 24 h, one target', zh: '144 個 H100 GPU 小時、24 小時、一個標的' } },
              { label: { en: 'DNA for one 300-residue design', zh: '一個 300 殘基設計的 DNA' }, v: 140, color: '#2a78d6', note: { en: 'range $63–225 at 2026 prices', zh: '2026 年價格區間 63–225 美元' } },
              { label: { en: 'Outsourced testing, per design', zh: '委外測試，每個設計' }, v: 200, color: '#eb6834', note: { en: '$150–250, about 3 weeks', zh: '150–250 美元，約三週' } },
              { label: { en: 'Frontier closed-loop, per design', zh: '前沿閉環平台，每個設計' }, v: 87, color: '#1baf7a', note: { en: '~9 h per data point, one platform', zh: '每個資料點約 9 小時，單一平台' } },
              { label: { en: 'DNA for twenty 300-residue designs', zh: '二十個 300 殘基設計的 DNA' }, v: 2800, color: '#2a78d6', note: { en: '$1,300–4,500 — a student-team budget', zh: '1,300–4,500 美元——學生團隊的預算量級' } },
              { label: { en: 'Outsourced testing of twenty designs', zh: '二十個設計的委外測試' }, v: 4000, color: '#eb6834' }
            ],
            legend: [
              { c: '#1baf7a', n: { en: 'Compute', zh: '運算' } },
              { c: '#2a78d6', n: { en: 'DNA synthesis', zh: 'DNA 合成' } },
              { c: '#eb6834', n: { en: 'Characterisation', zh: '表徵' } }
            ],
            caption: {
              en: 'Indicative 2026 figures from published platform papers and public CRO price lists. Note the shape: **compute for a whole campaign costs about the same as testing one design.** That inversion is the single most important economic fact in the field right now, and it is why 2026 public funding went to wet-lab capacity rather than models.',
              zh: '2026 年的示意數字，來自已發表的平台論文與公開的委外機構價目表。注意這個形狀：**整場活動的運算成本，大約等於測試一個設計的成本。** 這個反轉是目前本領域最重要的單一經濟事實，也是 2026 年公共資金流向濕實驗產能而非模型的原因。'
            }
          })
      });

      /* ---------- data gap ---------- */
      out += h.sec({
        id: 'b-data',
        kick: { en: 'Bottleneck C, in detail', zh: '瓶頸 C，細看' },
        h2: { en: 'The published record omits the failures', zh: '已發表的紀錄遺漏了失敗' },
        body:
          h.fig({
            kind: 'bars', tag: { en: 'scale', zh: '尺度' },
            title: { en: 'What data actually exists for learning from design outcomes', zh: '要從設計結果學習，實際上有多少資料' },
            sub: { en: 'Logarithmic. The gap between what we can predict structures for and what we have *outcomes* for is six orders of magnitude.', zh: '對數尺度。我們能預測結構的數量，與我們有*結果*的數量，相差六個數量級。' },
            opts: { log: true, unit: { en: 'entries', zh: '筆' } },
            data: [
              { label: { en: 'Known protein sequences', zh: '已知蛋白序列' }, v: 250000000, color: '#CBD2DB' },
              { label: { en: 'Predicted structures (AlphaFold DB)', zh: '預測結構（AlphaFold DB）' }, v: 214000000, color: '#CBD2DB' },
              { label: { en: 'Experimental structures (PDB)', zh: '實驗結構（PDB）' }, v: 250000, color: '#2a78d6' },
              { label: { en: 'Public wet-lab binder negatives', zh: '公開的濕實驗結合蛋白陰性資料' }, v: 478000, color: '#eda100' },
              { label: { en: 'Public wet-lab binder positives', zh: '公開的濕實驗結合蛋白陽性資料' }, v: 1385, color: '#eb6834' },
              { label: { en: 'Openly characterised de novo monomer designs', zh: '公開表徵的從頭單體設計' }, v: 614, color: '#e34948', note: { en: 'a decade of published work', zh: '十年的已發表成果' } },
              { label: { en: 'Public standard for failed designs', zh: '失敗設計的公開標準' }, v: 1, color: '#d03b3b', note: { en: 'none exists — shown at 1 so it is visible', zh: '不存在——畫成 1 只為讓它看得見' } }
            ],
            caption: {
              en: 'The 614-design figure is the one to remember. **A decade of published de novo monomer design produced 614 openly characterised designs**, and the curators had to reconstruct failures from paper text and exclude designs reporting no experimental outcome at all. Any model that tries to learn "will this design work" is learning from a few hundred examples with survivorship bias built in.',
              zh: '614 這個數字是該記住的。**十年的從頭單體設計文獻總共只產出 614 個公開表徵的設計**，而整理者必須從論文正文重建失敗案例，並排除完全沒有報告實驗結果的設計。任何試圖學習「這個設計會不會成功」的模型，都是在幾百個內建生存者偏差的例子上學習。'
            }
          })
      });

      /* ---------- all dossiers ---------- */
      var dos = '';
      B.forEach(function (b) {
        dos += '<div class="card" style="margin-bottom:16px;padding:21px 22px">' +
          '<div class="casehead"><div class="casenum">' + b.k + '</div>' +
          '<div style="flex:1;min-width:0"><h4 style="margin:0;font-size:17.5px">' + h.md(b.t) + '</h4></div>' +
          '<span class="chip ' + (b.sev >= 5 ? 'r' : b.sev === 4 ? 'a' : b.sev === 3 ? 'a' : 'g') + '">' +
          h.T({ en: 'severity ', zh: '嚴重度 ' }) + b.sev + '/5</span></div>' +
          '<p style="font-size:15px;color:var(--ink2);margin:10px 0 0">' + h.md(b.d) + '</p>' +
          h.kv([
            [{ en: 'Evidence', zh: '證據' }, b.ev],
            [{ en: 'Who is on it', zh: '誰在處理' }, b.who],
            [{ en: '"Solved" means', zh: '「解決」的意思是' }, b.solved],
            [{ en: 'Likely to break by', zh: '可能何時突破' }, b.when]
          ]) + '</div>';
      });
      out += h.sec({
        id: 'b-all',
        kick: { en: 'The dossiers', zh: '完整檔案' },
        h2: { en: 'All ten bottlenecks, with evidence', zh: '十個瓶頸，附證據' },
        lede: {
          en: 'Separating **measured** from **asserted** is the whole discipline of this chapter. Where a claim is an assertion rather than a measurement, it is phrased as one.',
          zh: '把**量測到的**與**被斷言的**分開，就是本章的全部紀律。凡主張是斷言而非量測，就會以斷言的語氣寫出來。'
        },
        body: dos
      });

      /* ---------- small team ---------- */
      out += h.sec({
        id: 'b-small',
        kick: { en: 'The useful conclusion', zh: '有用的結論' },
        h2: { en: 'Three bottlenecks a small team can genuinely attack', zh: '小團隊真正能攻的三個瓶頸' },
        lede: {
          en: 'Not a motivational list. These three are chosen because the tooling is open, the data is public, the equipment is in a teaching lab, and the gap is documented in the peer-reviewed literature — and because nobody with a grant has an incentive to fill them.',
          zh: '這不是一份激勵清單。選這三個，是因為工具開放、資料公開、設備就在教學實驗室裡、而且缺口已在同儕審查文獻中被記錄——同時因為任何有補助款的人都沒有動機去填它們。'
        },
        body:
          h.cards([
            {
              chips: [{ t: { en: 'Bottleneck E', zh: '瓶頸 E' }, k: 'r' }, { t: { en: 'no wet lab needed', zh: '不需濕實驗' }, k: 'g' }],
              h: { en: 'Re-analyse the open outcome datasets', zh: '重新分析公開的結果資料集' },
              p: [{
                en: 'The state of the art in design evaluation includes a **single-author, unreviewed public repository** that produced some of the strongest numbers in this report by reanalysing an open 1,320-design dataset. One widely cited 2026 benchmark reports its AUC and average-precision numbers **only in figures** — recomputing them and publishing them as tables is a genuine, citable service.',
                zh: '設計評估的技術前沿，包括一個**單一作者、未經審查的公開程式庫**，它靠重新分析一份公開的 1,320 個設計資料集，就產出了本報告中部分最有力的數字。2026 年一個被廣泛引用的基準，其 AUC 與平均精確度**只畫在圖裡**——把它們重新算出來並以表格發表，是一項真正、可被引用的服務。'
              }, {
                en: 'Open starting points: the 614-design curated set, the public blind-competition datasets, and the iGEM Registry. Cost: zero. Equipment: a laptop.',
                zh: '公開的起點：614 個設計的整理集、公開盲測競賽的資料集，以及 iGEM Registry。成本：零。設備：一台筆電。'
              }]
            },
            {
              chips: [{ t: { en: 'Bottleneck C + D', zh: '瓶頸 C + D' }, k: 'r' }, { t: { en: 'teaching-lab equipment', zh: '教學實驗室設備' }, k: 'g' }],
              h: { en: 'Characterise twenty designs — including the failures', zh: '表徵二十個設計——包含失敗的那些' },
              p: [{
                en: 'Because **65% of failures are insolubility and aggregation** and **17% of soluble monomers still fail circular dichroism**, a team that designs twenty proteins and reports expression, solubility, SEC oligomeric state, CD and melting temperature **for all twenty including the failures** produces exactly the data the field is documented to lack.',
                zh: '因為**65% 的失敗是不溶與聚集**，而且**可溶單體中仍有 17% 在圓二色光譜上失敗**，一支設計二十個蛋白、並**為全部二十個（含失敗者）**報告表達、可溶性、SEC 寡聚態、CD 與熔點的團隊，產出的正是文獻記錄中這個領域所缺的資料。'
              }, {
                en: 'None of those assays needs an instrument a well-equipped school lab lacks. DNA for twenty 300-residue designs is roughly $1,300–4,500. The deliverable is a dataset and a protocol, not a discovery — which is precisely why it compounds.',
                zh: '這些分析沒有一項需要設備良好的學校實驗室所沒有的儀器。二十個 300 殘基設計的 DNA 約 1,300–4,500 美元。產出物是一份資料集與一份流程，而不是一項發現——而這正是它能複利累積的原因。'
              }]
            },
            {
              chips: [{ t: { en: 'Bottleneck E + H', zh: '瓶頸 E + H' }, k: 'a' }, { t: { en: 'someone else pays', zh: '別人付錢' }, k: 'g' }],
              h: { en: 'Enter the sponsored blind competitions', zh: '參加有贊助的盲測競賽' },
              p: [{
                en: 'This is the highest-value single move available to an outsider, and it is built for outsiders. Recent competitions have sponsored large amounts of experimental validation for thousands of designs, with open tracks for people outside laboratories and companies using their own tools. **Someone else pays for the wet lab, and the results publish with negatives.**',
                zh: '這是外來者能做的最高價值單一動作，而且它本來就是為外來者設計的。近期的競賽為數千個設計贊助了大量實驗驗證，並為實驗室與公司之外、使用自己工具的人開放賽道。**濕實驗由別人付錢，而結果會連負面資料一起發表。**'
              }, {
                en: 'Precedent that outsiders win: one 2024 binder competition drew over 1,800 submissions, tested 601 of them, and produced a 25-plus-author post-mortem spanning students and independent researchers. A 2026 competition on a different target had 37 of 100 designs bind, best at 1.11 nM.',
                zh: '外來者能贏的先例：2024 年一場結合蛋白競賽收到超過 1,800 份投稿、測試了其中 601 個，並產出一份作者超過 25 人、橫跨學生與獨立研究者的事後分析。2026 年另一個標的的競賽中，100 個設計有 37 個結合，最佳者 1.11 nM。'
              }]
            }
          ], 'g3') +
          h.h3({ en: 'And what not to do', zh: '以及不要做什麼' }) +
          h.ul([
            { en: '**Do not chase a hit-rate record.** You will lose to a group with a GPU cluster and a robot, and the record is not the contribution.', zh: '**不要追逐命中率紀錄。** 你會輸給有 GPU 叢集與機器人的團隊，而且紀錄本身不是貢獻。' },
            { en: '**Do not design a high-barrier enzyme.** Efficiency stratifies by barrier height; C–C bond formation and redox chemistry are where well-funded laboratories are still failing.', zh: '**不要去設計高能障酵素。** 效率是依能障高度分層的；C–C 鍵形成與氧化還原化學是資金充裕的實驗室至今仍在失敗的地方。' },
            { en: '**Do not report pLDDT or ipTM as evidence that anything works.** Measured AUC 0.60–0.72, and failed designs routinely outscore successful ones. This is the most common error in the field and it is now citable as an error.', zh: '**不要把 pLDDT 或 ipTM 當成「某件事成功」的證據。** 經量測 AUC 為 0.60–0.72，而失敗的設計經常分數高於成功的。這是本領域最常見的錯誤，而且現在已經可以被當成錯誤來引用。' },
            { en: '**Do not design against a target without checking its dual-use status first.** One 2026 study found 63.3% of antibody-patent targets it tested were flagged dual-use. Check before you order, not after.', zh: '**不要在沒有先確認雙重用途狀態的情況下針對某個標的做設計。** 2026 年一項研究發現，它測試的抗體專利標的中有 63.3% 被標記為雙重用途。在下單之前確認，不是之後。' },
            { en: '**Do not try to beat an antibody.** Public blind hit rates are 2.5–14% on favourable targets, and optimising an existing binder beats designing one from scratch — best de novo EGFR binder 82 nM against 1.21 nM for an optimised known one.', zh: '**不要試圖打敗抗體。** 公開盲測在有利標的上的命中率是 2.5–14%，而改良既有結合蛋白勝過從零設計——最佳從頭 EGFR 結合蛋白 82 nM，而經最佳化的已知結合蛋白是 1.21 nM。' }
          ])
      });

      return out;
    }
  };
})(window);
