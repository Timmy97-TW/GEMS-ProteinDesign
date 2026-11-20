(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  PD.pages.chronicle = {
    label: { en: 'Chronicle', zh: '編年史' },
    title: { en: 'Chronicle 1951–2026', zh: '編年史 1951–2026' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Chapter 1 · The linear chronicle', zh: '第一章 · 線性編年史' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Seventy-five years from =="proteins have structures"== to "order one on Tuesday".',
          zh: '從==「蛋白質有結構」==到「星期二下單」的七十五年。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Protein design has had six distinct eras, and the boundaries between them are not the ones the popular account draws. Deep learning is the fifth hinge, not the first. This chapter lays the whole history on one spine — every entry dated, attributed and cited — and marks the seven moments where the *kind* of problem being solved actually changed.',
          zh: '蛋白質設計有六個明確的時代，而它們之間的分界線並不是流行敘事所畫的那幾條。深度學習是第五個轉折，不是第一個。本章把整部歷史放在同一條主軸上——每一項都標註日期、歸屬與出處——並點出那七個「所解決的問題*種類*」真正改變的時刻。'
        }) + '</p>' +
        h.stats([
          { v: '1951', l: { en: 'Pauling, Corey & Branson derive the α-helix', zh: 'Pauling、Corey 與 Branson 推導出 α 螺旋' } },
          { v: '1997', l: { en: 'First machine-chosen whole sequence (FSD-1)', zh: '第一條由機器選定的完整序列（FSD-1）' } },
          { v: '2003', l: { en: 'Top7 — a fold nature never made', zh: 'Top7——自然界從未造出的摺疊' } },
          { v: '2020', l: { en: 'AlphaFold2 at CASP14', zh: 'AlphaFold2 在 CASP14' } },
          { v: '2024', l: { en: 'Nobel Prize in Chemistry', zh: '諾貝爾化學獎' } },
          { v: '2026', l: { en: '48-hour design→data loops', zh: '48 小時設計→數據循環' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'c-frame', t: { en: 'The problem', zh: '問題本身' } },
        { id: 'c-e1', t: { en: '1951–87 Foundations', zh: '1951–87 奠基' } },
        { id: 'c-e2', t: { en: '1988–99 Two schools', zh: '1988–99 兩個學派' } },
        { id: 'c-e3', t: { en: 'Directed evolution', zh: '定向演化' } },
        { id: 'c-e4', t: { en: '2000–10 Rosetta', zh: '2000–10 Rosetta' } },
        { id: 'c-e5', t: { en: '2011–20 Rules & learning', zh: '2011–20 規則與學習' } },
        { id: 'c-e6', t: { en: '2021–23 Generative turn', zh: '2021–23 生成轉向' } },
        { id: 'c-e7', t: { en: '2024–26 Industrial & audited', zh: '2024–26 工業化與受審' } },
        { id: 'c-tree', t: { en: 'Method family tree', zh: '方法家族樹' } },
        { id: 'c-shifts', t: { en: 'Seven real shifts', zh: '七個真正的轉折' } },
        { id: 'c-myth', t: { en: 'Misconceptions', zh: '常見誤解' } }
      ]);

      /* ---------------- framing ---------------- */
      out += h.sec({
        id: 'c-frame',
        kick: { en: 'The problem', zh: '問題本身' },
        h2: { en: 'One problem, two directions', zh: '同一個問題，兩個方向' },
        lede: {
          en: 'Structure prediction asks: given this sequence, what shape? Design asks the inverse: given this shape — or this job — what sequence? The second question is harder for a reason that has nothing to do with computers.',
          zh: '結構預測問：給定這條序列，會是什麼形狀？設計問的是反過來：給定這個形狀——或這項工作——要用什麼序列？第二個問題更難，而原因跟電腦毫無關係。'
        },
        body:
          h.bio('invDogma', {
            title: { en: 'Folding and its inverse', zh: '摺疊與它的反問題' },
            sub: {
              en: 'Anfinsen\'s thermodynamic hypothesis is what licences the lower arrow: if the native state is the sequence-encoded free-energy minimum, then choosing a sequence is choosing a structure.',
              zh: 'Anfinsen 的熱力學假說正是下方那支箭頭的許可證：若天然態是序列所編碼的自由能最低點，那麼選擇序列就等於選擇結構。'
            },
            caption: {
              en: 'Anfinsen, *Science* 181:223 (1973); sequence-space framing after Huang, Boyken & Baker, *Nature* 537:320 (2016).',
              zh: 'Anfinsen, *Science* 181:223 (1973)；序列空間的框架依 Huang, Boyken & Baker, *Nature* 537:320 (2016)。'
            }
          }) +
          h.fig({
            kind: 'bars', tag: { en: 'scale', zh: '尺度' },
            title: { en: 'Why design is not search', zh: '為什麼設計不是搜尋' },
            sub: {
              en: 'Each bar is an order of magnitude. The gap between what has been catalogued and what is possible is the reason the field needed learned priors rather than better search.',
              zh: '每一格代表一個數量級。已被編目的數量與可能的數量之間的鴻溝，正是本領域需要「學習到的先驗」而非「更好的搜尋」的原因。'
            },
            opts: { log: false, dec: 1, pow10: true, xlabel: { en: 'number of sequences or structures (powers of ten)', zh: '序列或結構的數量（十的次方）' } },
            data: [
              { label: { en: 'Experimental structures in the PDB (2026)', zh: 'PDB 中的實驗結構（2026）' }, v: 5.4, note: { en: '~250,000 entries', zh: '約 250,000 筆' } },
              { label: { en: 'Predicted structures in AlphaFold DB', zh: 'AlphaFold DB 中的預測結構' }, v: 8.3, note: { en: '~214 million', zh: '約 2.14 億' } },
              { label: { en: 'Known natural protein sequences', zh: '已知天然蛋白序列' }, v: 8.4, note: { en: '>250 million', zh: '>2.5 億' } },
              { label: { en: 'Proteins nature has ever made (est.)', zh: '自然界曾造出的蛋白（估計）' }, v: 12, note: { en: 'order-of-magnitude estimate', zh: '數量級估計' } },
              { label: { en: 'Possible 100-residue sequences', zh: '可能的 100 殘基序列' }, v: 130, note: { en: '20¹⁰⁰', zh: '20¹⁰⁰' } },
              { label: { en: 'Possible 200-residue sequences', zh: '可能的 200 殘基序列' }, v: 260, note: { en: '20²⁰⁰', zh: '20²⁰⁰' } }
            ],
            caption: {
              en: 'PDB and AlphaFold DB counts from the References chapter; the 20²⁰⁰ framing is Huang, Boyken & Baker (2016). "Proteins nature has ever made" is an order-of-magnitude estimate, not a measurement.',
              zh: 'PDB 與 AlphaFold DB 數量見「參考資料」一章；20²⁰⁰ 的框架出自 Huang, Boyken & Baker (2016)。「自然界曾造出的蛋白」是數量級估計，不是量測值。'
            }
          }) +
          h.take({ en: 'Why this matters for everything that follows', zh: '為何這決定了後面的一切' }, {
            en: 'No search algorithm will ever cover 10¹³⁰. Every era below is an answer to the same question — *how do you get into the right neighbourhood of sequence space before you start searching?* Physics gave one answer, evolution gave another, and learned models gave a third.',
            zh: '沒有任何搜尋演算法能覆蓋 10¹³⁰。下面每一個時代都是對同一個問題的回答——*在開始搜尋之前，你如何先進入序列空間的正確鄰域？* 物理給了一個答案，演化給了另一個，而學習模型給了第三個。'
          })
      });

      /* ---------------- era 1 ---------------- */
      out += h.sec({
        id: 'c-e1',
        kick: { en: 'Era I · 1951–1987', zh: '第一時代 · 1951–1987' },
        h2: { en: 'Foundations: from "proteins have structures" to "sequences encode structures"', zh: '奠基：從「蛋白質有結構」到「序列編碼結構」' },
        lede: {
          en: 'Nothing was designed in this period. What was built instead were the three preconditions: a licence, a data substrate, and a way to make the problem finite.',
          zh: '這段時間沒有設計出任何東西。被建立起來的是三個前提：一張許可證、一個資料基底，以及一個讓問題變成有限的方法。'
        },
        body: h.timeline([{
          h: { en: 'Preconditions', zh: '前提條件' },
          range: '1951–1987',
          d: {
            en: 'Pauling\'s local rules were beautiful; Kendrew\'s myoglobin was ugly. Design would have to live with the gap — and, sixty years later, much of its success came from refusing to reproduce that ugliness.',
            zh: 'Pauling 的局部規則很漂亮；Kendrew 的肌紅素很醜。設計必須與這道落差共存——而六十年後，它的成功有很大一部分來自*拒絕*複製那份醜陋。'
          },
          items: [
            { y: '1951', hi: 1, t: { en: 'The α-helix and β-sheet derived from first principles', zh: '從第一原理推導出 α 螺旋與 β 摺板' }, d: { en: 'Pauling, Corey & Branson showed protein conformation follows from the planarity of the peptide bond and hydrogen-bond geometry. Structure became something a chemist could reason about rather than only observe.', zh: 'Pauling、Corey 與 Branson 證明蛋白質構型源自肽鍵的平面性與氫鍵幾何。結構從此是化學家可以推理的對象，而不只是觀察的對象。' }, c: '*PNAS* 37(4):205–211' },
            { y: '1958–60', t: { en: 'Myoglobin and haemoglobin: the first real structures', zh: '肌紅素與血紅素：最早的真實結構' }, d: { en: 'Kendrew and Perutz delivered the sobering counterpoint — real tertiary structures are irregular. Helices kink, strands bulge, loops are strained, and nothing in the 1951 rules predicts the particular globule. Nobel 1962.', zh: 'Kendrew 與 Perutz 帶來了清醒的反面：真實的三級結構是不規則的。螺旋會扭、股會凸、環有張力，而 1951 年的規則完全無法預測那個特定的球。1962 年諾貝爾獎。' }, c: '*Nature* 181:662; *Nature* 185:416' },
            { y: '1961–73', hi: 1, t: { en: 'Anfinsen\'s thermodynamic hypothesis — the licence for design', zh: 'Anfinsen 的熱力學假說——設計的許可證' }, d: { en: 'If the native structure is the global free-energy minimum specified by the sequence alone, then the design problem is well-posed rather than wishful: search sequence space for a sequence whose minimum is the structure you want. Nobel 1972.', zh: '若天然結構是僅由序列所決定的全域自由能最低點，那麼設計問題就是個定義明確的問題，而不是空想：在序列空間中尋找一條其最低點恰為你想要結構的序列。1972 年諾貝爾獎。' }, c: 'Anfinsen, *Science* 181(4096):223–230' },
            { y: '1968–69', t: { en: 'Levinthal: thermodynamics is not enough', zh: 'Levinthal：只有熱力學不夠' }, d: { en: 'Even with the right global minimum, a random conformational search could not find it in biological time, so folding must follow accessible pathways. For thirty years this was treated as a puzzle about mechanism. It was in fact a *design specification* the field was ignoring — and Koga & Baker would act on it in 2012.', zh: '即使全域最低點正確，隨機構型搜尋也無法在生物時間內找到它，所以摺疊必須沿著可達路徑進行。三十年來這被當成機制上的謎題。它其實是一條本領域一直忽略的*設計規格*——Koga 與 Baker 在 2012 年才真正照它行動。' }, c: 'Levinthal, *J. Chim. Phys.* 65:44 (1968)' },
            { y: '1969', t: { en: 'An enzyme synthesised chemically', zh: '以化學方法合成出一個酵素' }, d: { en: 'Gutte & Merrifield and, independently, Hirschmann\'s Merck group produced ribonuclease A activity from synthetic polypeptide. A functional protein is a buildable polymer. Merrifield, Nobel 1984.', zh: 'Gutte 與 Merrifield，以及 Hirschmann 在默克的團隊各自以合成多肽產生了核糖核酸酶 A 的活性。一個有功能的蛋白質就是一種可以被建造的聚合物。Merrifield，1984 年諾貝爾獎。' }, c: '*JACS* 91(2):501; *JACS* 91:507' },
            { y: '1971', hi: 1, t: { en: 'The Protein Data Bank opens with seven structures', zh: '蛋白質資料庫以七個結構開張' }, d: { en: 'Founded at Brookhaven, announced in *Nature New Biology* that October. Every knowledge-based potential, rotamer library, fragment library and neural network in this field is downstream of this archive — and it was its eventual *size*, not any single insight, that decided what became computationally possible fifty years later.', zh: '創立於布魯克海文，同年十月在 *Nature New Biology* 公告。本領域所有基於知識的能量函數、旋轉異構物庫、片段庫與神經網路都是這個資料庫的下游——而決定五十年後什麼在計算上可行的，是它最終的*規模*，不是任何單一洞見。' }, c: 'RCSB PDB history' },
            { y: '1983', t: { en: 'The inverse problem named in print', zh: '反問題首次見諸文字' }, d: { en: 'Pabo framed design explicitly as the inverse of structure prediction: given a fold, find a sequence.', zh: 'Pabo 明確地把設計定義為結構預測的反問題：給定摺疊，找出序列。' }, c: 'Pabo, *Nature* 301(5897):200' },
            { y: '1987', hi: 1, t: { en: 'The rotamer library makes the problem finite', zh: '旋轉異構物庫讓問題變成有限的' }, d: { en: 'Ponder & Richards\' backbone-dependent library discretised side-chain conformational space. A continuous physics problem became a finite combinatorial one — the conversion that made automated design conceivable at all.', zh: 'Ponder 與 Richards 的主鏈依賴型程式庫把側鏈構型空間離散化。一個連續的物理問題變成有限的組合問題——這正是讓自動化設計得以被設想的轉換。' }, c: 'Ponder & Richards, *JMB* 193:775–791' }
          ]
        }])
      });

      /* ---------------- era 2 ---------------- */
      out += h.sec({
        id: 'c-e2',
        kick: { en: 'Era II · 1988–1999', zh: '第二時代 · 1988–1999' },
        h2: { en: 'Two schools, one question: can a protein be designed at all?', zh: '兩個學派，同一個問題：蛋白質到底能不能被設計？' },
        lede: {
          en: 'The 1990s ran two distinct programmes in parallel. The minimalists designed by hand from physical principles and treated designed proteins as measuring instruments. The automators asked whether an algorithm could do it with no human in the loop — and their breakthrough was a theorem, not a molecule.',
          zh: '1990 年代並行著兩套截然不同的計畫。極簡派依物理原則手工設計，並把設計蛋白當成量測儀器。自動化派則問：演算法能不能在沒有人介入的情況下完成？而他們的突破是一條定理，不是一個分子。'
        },
        body: h.timeline([{
          h: { en: 'The minimalist and automated schools', zh: '極簡派與自動化派' },
          range: '1988–1999',
          items: [
            { y: '1988', hi: 1, t: { en: 'α4 — the first de novo protein shown to be a folded globule', zh: 'α4——第一個被證實為摺疊球體的從頭設計蛋白' }, d: { en: 'Regan & DeGrado built a monomeric, highly helical, denaturant-stable four-helix bundle from an idealised amphipathic repeat, expressed from a synthetic gene. The start of the minimalist school — and, strictly, the first de novo designed protein, not Top7.', zh: 'Regan 與 DeGrado 以理想化的兩親性重複序列造出單體、高度螺旋、耐變性劑的四螺旋束，並由合成基因表達。極簡派的起點——嚴格來說，第一個從頭設計的蛋白是它，不是 Top7。' }, c: 'Regan & DeGrado, *Science* 241(4868):976' },
            { y: '1989–95', t: { en: 'The minimalist programme stated, then codified', zh: '極簡派綱領的提出與定型' }, d: { en: 'DeGrado, Wasserman & Lear framed design as a hypothesis-testing tool: build the simplest sequence that encodes a fold and see what breaks. Bryson et al. then codified the staged method — hydrophobic patterning first, specific interactions afterwards.', zh: 'DeGrado、Wasserman 與 Lear 把設計定位為假說檢驗工具：造出能編碼某摺疊的最簡序列，看什麼會壞掉。Bryson 等人隨後把分階段方法定型——先處理疏水圖樣，再疊上專一性交互作用。' }, c: '*Science* 243:622; *Science* 270:935' },
            { y: '1990', t: { en: 'Felix, and design used as an instrument', zh: 'Felix，以及把設計當成儀器' }, d: { en: 'Hecht with the Richardsons pushed toward native-like sequence complexity (19 of 20 amino acids, non-repetitive, a designed disulfide). In the same year O\'Neil & DeGrado measured a complete thermodynamic helix-propensity scale for all 20 residues inside a designed coiled-coil host — design producing the parameters that design needs. That reflexive loop is the school\'s lasting methodological contribution.', zh: 'Hecht 與 Richardson 夫婦推向接近天然的序列複雜度（用上 20 種中的 19 種胺基酸、非重複、含設計的雙硫鍵）。同年 O\'Neil 與 DeGrado 在一個設計的卷曲螺旋宿主中測出全部 20 種殘基的完整熱力學螺旋傾向尺度——用設計產生設計所需的參數。這個自我回饋迴圈是該學派最持久的方法論貢獻。' }, c: '*Science* 249:884; *Science* 250:646' },
            { y: '1992–94', hi: 1, t: { en: 'Dead-end elimination: the algorithmic key', zh: '死端消除法：演算法的關鍵' }, d: { en: 'Desmet, De Maeyer, Hazes & Lasters proved a criterion that *provably* discards rotamers which cannot appear in the global minimum-energy conformation; Goldstein\'s 1994 sharpening made it decisive on real proteins. Exact combinatorial sequence optimisation became tractable.', zh: 'Desmet、De Maeyer、Hazes 與 Lasters 證明了一個判準，能*可證明地*排除不可能出現在全域最低能量構型中的旋轉異構物；Goldstein 1994 年的強化讓它在真實蛋白上具有決定性。精確的組合序列最佳化從此可行。' }, c: 'Desmet et al., *Nature* 356(6369):539; Goldstein, *Biophys. J.* 66:1335' },
            { y: '1993', t: { en: 'Zinc fingers reprogrammed by rule', zh: '以規則重新編程鋅指' }, d: { en: 'Desjarlais & Berg used a consensus framework plus recognition-helix specificity rules to obtain predictable DNA-binding, best K_d ≈ 2 nM. The clearest 1990s demonstration that a modular natural scaffold can be reprogrammed — the ancestor of ZFNs and of modular binder design.', zh: 'Desjarlais 與 Berg 以共識骨架加上辨識螺旋的專一性規則，得到可預測的 DNA 結合，最佳 K_d 約 2 nM。這是 1990 年代最清楚的示範：模組化的天然骨架可以依規則重新編程——鋅指核酸酶與模組化結合蛋白設計的祖先。' }, c: 'Desjarlais & Berg, *PNAS* 90(6):2256' },
            { y: '1994', t: { en: 'CASP founded', zh: 'CASP 創立' }, d: { en: '35 groups, more than 100 predictions, first meeting at Asilomar in December. The blind, community-scale benchmark that disciplined structure prediction for thirty years — and that later made AlphaFold\'s win unambiguous. Biennial ever since.', zh: '35 個團隊、超過 100 份預測，首次會議於十二月在 Asilomar 舉行。這個盲測、社群規模的基準在三十年間規訓了結構預測——也讓後來 AlphaFold 的勝利不容爭辯。自此每兩年一次。' }, c: 'predictioncenter.org' },
            { y: '1997', hi: 1, t: { en: 'FSD-1 — the first machine-chosen whole sequence', zh: 'FSD-1——第一條由機器選定的完整序列' }, d: { en: 'Dahiyat & Mayo\'s ORBIT searched a combinatorial space of **1.9 × 10²⁷** sequences for a ββα backbone and produced a design whose NMR structure matched the target. The human left the inner loop. Note the honest qualification: the backbone was borrowed from a zinc finger, so the novelty was automation, not geometry.', zh: 'Dahiyat 與 Mayo 的 ORBIT 在 **1.9 × 10²⁷** 條序列的組合空間中為一個 ββα 主鏈搜尋，產出的設計其 NMR 結構與目標吻合。人類離開了內層迴圈。但要誠實地加註：主鏈是從鋅指借來的，所以新穎之處是自動化，不是幾何。' }, c: 'Dahiyat & Mayo, *Science* 278(5335):82' },
            { y: '1998', hi: 1, t: { en: 'The backbone becomes a design variable', zh: '主鏈成為一個設計變數' }, d: { en: 'Harbury, Plecs, Tidor, Alber & Kim parameterised backbones algebraically and built a **right-handed** coiled coil — a geometry absent from the natural repertoire — obtaining dimers, trimers and tetramers as specified, with the tetramer crystal structure matching in atomic detail. Design stopped being repacking and became geometry.', zh: 'Harbury、Plecs、Tidor、Alber 與 Kim 以代數方式參數化主鏈，造出一個**右手**卷曲螺旋——自然界不存在的幾何——並如規格般得到二聚體、三聚體與四聚體，其中四聚體晶體結構在原子層級吻合。設計從此不再是「重新堆疊側鏈」，而是幾何。' }, c: 'Harbury et al., *Science* 282(5393):1462' }
          ]
        }])
      });

      /* ---------------- era 3: directed evolution ---------------- */
      out += h.sec({
        id: 'c-e3',
        kick: { en: 'The parallel track · 1985–2018', zh: '並行軌道 · 1985–2018' },
        h2: { en: 'Directed evolution: the rival that was never really a rival', zh: '定向演化：從來不是真正對手的對手' },
        lede: {
          en: 'While design worked on structure, a wholly different programme worked on function and ignored structure entirely. The two are not competitors. They are a search strategy and an objective function.',
          zh: '當設計在處理結構時，另一套完全不同的計畫在處理功能，並且完全不管結構。這兩者不是競爭者。它們是一個搜尋策略與一個目標函數。'
        },
        body:
          h.timeline([{
            h: { en: 'Evolution in a tube', zh: '試管裡的演化' },
            range: '1985–2018',
            items: [
              { y: '1985', t: { en: 'Phage display', zh: '噬菌體展示' }, d: { en: 'Smith fused foreign peptides to pIII and displayed them on the virion, creating the genotype–phenotype link that makes library selection possible. Winter later adapted it to antibodies, producing the lineage that led to adalimumab.', zh: 'Smith 把外源肽融合到 pIII 並展示在病毒顆粒表面，建立了讓文庫篩選得以成立的基因型—表現型連結。Winter 後來把它用於抗體，開出了通往 adalimumab 的那一系。' }, c: 'Smith, *Science* 228(4705):1315' },
              { y: '1993', t: { en: 'The first practical directed-evolution campaign', zh: '第一次實用的定向演化活動' }, d: { en: 'Chen & Arnold improved subtilisin E activity 256-fold in 60% dimethylformamide — a non-natural solvent — through iterated mutagenesis and screening. You can improve a protein without understanding it.', zh: 'Chen 與 Arnold 透過反覆突變與篩選，讓枯草桿菌蛋白酶 E 在 60% 二甲基甲醯胺（一種非天然溶劑）中的活性提升 256 倍。你可以在不理解一個蛋白的情況下改良它。' }, c: 'Chen & Arnold, *PNAS* 90:5618' },
              { y: '1994', hi: 1, t: { en: 'DNA shuffling turns evolution into a search algorithm', zh: 'DNA 洗牌把演化變成搜尋演算法' }, d: { en: 'Stemmer added in-vitro recombination, reaching a **32,000-fold** increase in cefotaxime resistance where cassette mutagenesis and error-prone PCR had managed 16-fold. Recombination, not point mutation, was the engine.', zh: 'Stemmer 加入體外重組，使頭孢噻肟抗性提升 **32,000 倍**，而卡匣突變與易錯 PCR 只做到 16 倍。引擎是重組，不是點突變。' }, c: 'Stemmer, *Nature* 370(6488):389' },
              { y: '2018', hi: 1, t: { en: 'Nobel Prize in Chemistry', zh: '諾貝爾化學獎' }, d: { en: 'Arnold (½) "for the directed evolution of enzymes"; Smith (¼) and Winter (¼) "for the phage display of peptides and antibodies". Institutional recognition that **evolutionary search, not rational design, had been the productive paradigm for protein function** up to that point. Six years later the other half of the story would get its own prize.', zh: 'Arnold（½）「因酵素的定向演化」；Smith（¼）與 Winter（¼）「因肽與抗體的噬菌體展示」。這是制度上的承認：到那時為止，**在蛋白質功能上真正有產出的範式是演化搜尋，不是理性設計**。六年後，故事的另一半也拿到了自己的獎。' }, c: 'nobelprize.org, 3 Oct 2018' }
            ]
          }]) +
          h.take({ en: 'The relationship, stated precisely', zh: '精確陳述兩者的關係' }, {
            en: 'Directed evolution needs no model and can optimise properties nobody can compute — but it only climbs hills near a working sequence. Computational design can jump anywhere in sequence space — but its scoring functions were far too crude to rank candidates. Röthlisberger 2008 made the complementarity explicit: computation reached a basin no library would have found, then in-vitro evolution added more than 200-fold on top. **That pattern — design to get into the basin, evolution to climb it — is still how the hardest results are obtained in 2026.**',
            zh: '定向演化不需要模型，而且能最佳化沒人算得出來的性質——但它只能在「已經可用的序列」附近爬山。計算設計可以跳到序列空間的任何地方——但它的評分函數粗糙到無法為候選排序。Röthlisberger 2008 把這份互補性講明白了：計算抵達了任何文庫都找不到的能量盆地，接著體外演化在上面再加了 200 倍以上。**這個模式——用設計進入盆地、用演化往上爬——到 2026 年仍然是取得最難成果的方式。**'
          })
      });

      /* ---------------- era 4 ---------------- */
      out += h.sec({
        id: 'c-e4',
        kick: { en: 'Era III · 2000–2010', zh: '第三時代 · 2000–2010' },
        h2: { en: 'The Rosetta era: one energy function for prediction and design', zh: 'Rosetta 時代：預測與設計共用一個能量函數' },
        lede: {
          en: 'The structural fact that explains the Baker lab\'s thirty-year dominance is simple: Rosetta was built for CASP, and running the same scoring function backwards gives design. Every prediction gain was a design gain for free.',
          zh: '解釋 Baker 實驗室三十年主導地位的結構性事實很簡單：Rosetta 是為 CASP 而生的，而把同一個評分函數反過來跑就是設計。每一次預測能力的提升，都免費成為設計能力的提升。'
        },
        body:
          h.timeline([{
            h: { en: 'Fragments, folds and the first enzymes', zh: '片段、摺疊，與最早的酵素' },
            range: '1997–2010',
            items: [
              { y: '1997', t: { en: 'Rosetta\'s ancestor: fragment assembly', zh: 'Rosetta 的前身：片段組裝' }, d: { en: 'Simons, Kooperberg, Huang & Baker assembled tertiary structure from fragments of unrelated proteins with similar local sequence, using simulated annealing and Bayesian scoring. Built for prediction; inverted for design.', zh: 'Simons、Kooperberg、Huang 與 Baker 以局部序列相似的無關蛋白片段組裝三級結構，使用模擬退火與貝氏評分。為預測而建；反轉後用於設計。' }, c: 'Simons et al., *JMB* 268(1):209' },
              { y: '2003', hi: 1, t: { en: 'Top7 — a fold that is not in nature', zh: 'Top7——自然界沒有的摺疊' }, d: { en: 'Kuhlman and colleagues iterated sequence design against structure prediction until the 93-residue α/β target was the global energy minimum. The crystal structure (PDB 1QYS) sat **1.2 Å** from the model. What it proved: a sequence can be computed for a topology absent from the PDB and will fold to it. What it did not prove: anything about function. Top7 is completely functionless, hyperstable, and folds through intermediates rather than cleanly.', zh: 'Kuhlman 與同事反覆以結構預測檢驗序列設計，直到那個 93 殘基的 α/β 目標成為全域能量最低點。晶體結構（PDB 1QYS）與模型相距 **1.2 Å**。它證明了什麼：可以為 PDB 中不存在的拓樸算出一條序列，而它真的會摺成那樣。它沒有證明什麼：任何關於功能的事。Top7 完全沒有功能、超級穩定，而且是經由中間態摺疊，而非乾淨的兩態摺疊。' }, c: 'Kuhlman et al., *Science* 302(5649):1364' },
              { y: '2003', t: { en: 'The first honest batch accounting', zh: '第一次誠實的批次統計' }, d: { en: 'Dantas et al. redesigned nine natural backbones, changing about 65% of residues: 8 of 10 constructs appeared folded and 6 were equal to or up to 7 kcal/mol *more* stable than wild type. Also the first clear sign that designs come out hyperstable — a symptom of over-optimised hydrophobic cores, not a triumph.', zh: 'Dantas 等人重新設計九個天然主鏈，更動約 65% 的殘基：10 個構築體中有 8 個看起來摺疊正確，6 個與野生型相當或穩定度高出最多 7 kcal/mol。這也是第一個明確訊號：設計出來的蛋白都超級穩定——那是疏水核過度最佳化的症狀，不是勝利。' }, c: 'Dantas et al., *JMB* 332(2):449' },
              { y: '2005–08', t: { en: 'Rosetta@home and Foldit', zh: 'Rosetta@home 與 Foldit' }, d: { en: 'Volunteer computing at a scale no academic cluster could match, then a game in which human spatial intuition explored *search strategies* rather than just conformations. Foldit remains publication-grade: in October 2025 players improved deposited PDB structures, sometimes beyond expert and automated methods.', zh: '先是任何學術叢集都比不上的志願運算規模，接著是一款讓人類空間直覺去探索*搜尋策略*（而非只是構型）的遊戲。Foldit 至今仍具發表水準：2025 年十月，玩家改善了已沉積的 PDB 結構，有時超越專家與自動化方法。' }, c: 'Cooper et al., *Nature* 466(7307):756' },
              { y: '2008', hi: 1, t: { en: 'Designed enzymes — and the honest hit rates', zh: '設計酵素——以及誠實的命中率' }, d: { en: 'The Kemp eliminase (8 active designs, rate enhancements to 10⁵, then >200-fold more from in-vitro evolution) and the retro-aldolase (**72 designs characterised, 32 with detectable activity**) arrived in the same year. Mechanistic insight — a catalytic water shuffling protons — came *out of* the failures.', zh: 'Kemp 消去酶（8 個有活性的設計、速率提升達 10⁵，之後靠體外演化再提升 200 倍以上）與逆醛醇酶（**72 個設計被表徵，32 個有可偵測活性**）在同一年出現。機制上的洞見——一個催化水分子在傳遞質子——是*從失敗裡*得來的。' }, c: 'Röthlisberger et al., *Nature* 453:190; Jiang et al., *Science* 319:1387' },
              { y: '2010', t: { en: 'The era\'s starkest funnel', zh: '這個時代最赤裸的漏斗' }, d: { en: 'The Diels-Alderase — catalysis of a reaction with no known natural enzyme — came from **~10¹⁹ candidate active-site configurations → ~10⁶ scaffold matches → 84 designs ordered → 50 soluble and assayed → 2 active**. Print that funnel next to any modern success rate before you compare them.', zh: 'Diels-Alder 酶——催化一個沒有已知天然酵素的反應——來自 **約 10¹⁹ 個候選活性位構型 → 約 10⁶ 個骨架匹配 → 訂購 84 個設計 → 50 個可溶並檢測 → 2 個有活性**。在把任何現代成功率拿來比較之前，先把這個漏斗印在旁邊。' }, c: 'Siegel et al., *Science* 329(5989):309' }
            ]
          }]) +
          h.pdb({
            id: '1QYS',
            title: { en: 'Top7 — the originating image of the field', zh: 'Top7——本領域的創始影像' },
            sub: {
              en: 'A 93-residue α/β protein with a strand order that does not occur in the PDB. X-ray, 2.5 Å, released November 2003. Rainbow colouring runs N-terminus (blue) to C-terminus (red).',
              zh: '93 個殘基的 α/β 蛋白，其 β 股順序在 PDB 中不存在。X 光繞射，2.5 Å，2003 年十一月釋出。彩虹色由 N 端（藍）到 C 端（紅）。'
            },
            caption: {
              en: 'Rotate it and look for the thing that matters: the sheet is flat and regular and the helices sit where an idealised model would put them. Designed proteins look *tidier* than natural ones, and for twenty years that tidiness was both the method\'s signature and its limitation.',
              zh: '轉動它，看關鍵之處：β 摺板平整而規則，螺旋就落在理想化模型會放的位置。設計出的蛋白看起來比天然蛋白*整齊*；二十年來，這份整齊既是這套方法的標誌，也是它的限制。'
            },
            spin: false
          })
      });

      /* ---------------- era 5 ---------------- */
      out += h.sec({
        id: 'c-e5',
        kick: { en: 'Era IV · 2011–2020', zh: '第四時代 · 2011–2020' },
        h2: { en: 'Rules, matter, and three waves of learning', zh: '規則、物質，以及三波學習浪潮' },
        lede: {
          en: 'Two things happened at once in this decade. Design learned to specify *foldability* rather than merely a low-energy minimum, which unlocked the classic folds — and, in parallel, three independent machine-learning waves converged on structure prediction, meeting in a single month at the end of 2020.',
          zh: '這十年同時發生了兩件事。設計學會了指定*可摺疊性*，而不只是低能量的最低點，從此打開了那些經典摺疊——同時，三波彼此獨立的機器學習浪潮朝結構預測匯聚，並在 2020 年末的同一個月相遇。'
        },
        body:
          h.timeline([{
            h: { en: 'Designing foldability, then designing matter', zh: '先設計可摺疊性，再設計物質' },
            range: '2011–2019',
            items: [
              { y: '2011', hi: 1, t: { en: 'Sequence alignments alone can fold a protein', zh: '單憑序列比對就能摺出一個蛋白' }, d: { en: 'Marks, Colwell, Sheridan, Hopf, Pagnani, Zecchina & Sander used maximum-entropy coupling inference to fold 15 proteins of 50–260 residues to 2.7–4.8 Å from alignments, with no structural input. **AlphaFold did not start at DeepMind; it started here**, with statistical physics.', zh: 'Marks、Colwell、Sheridan、Hopf、Pagnani、Zecchina 與 Sander 以最大熵耦合推論，僅從比對就把 15 個 50–260 殘基的蛋白摺到 2.7–4.8 Å，完全沒有結構輸入。**AlphaFold 不是從 DeepMind 開始的；它從這裡開始**，起點是統計物理。' }, c: 'Marks et al., *PLoS ONE* 6(12):e28766' },
              { y: '2012', hi: 1, t: { en: 'Principles for designing ideal protein structures', zh: '設計理想蛋白結構的原則' }, d: { en: 'The deepest conceptual advance of the decade. Natural proteins carry kinked helices and strained loops because evolution selected for *function*, not folding — and design had been dutifully imitating that. Koga & Baker derived rules linking secondary-structure patterns to tertiary motifs, letting them specify structures with funnel-shaped landscapes **by construction**. Levinthal answered by engineering.', zh: '這十年最深刻的概念進展。天然蛋白帶著扭折的螺旋與有張力的環，因為演化選擇的是*功能*而非摺疊——而設計一直忠實地模仿它。Koga 與 Baker 推導出連結二級結構圖樣與三級模組的規則，讓他們能**由構造本身**指定具漏斗形地景的結構。Levinthal 的問題被工程解決了。' }, c: 'Koga et al., *Nature* 491(7423):222' },
              { y: '2012–16', t: { en: 'Designed matter: cages, barrels and megadaltons', zh: '設計出的物質：奈米籠、桶與百萬道爾頓' }, d: { en: 'King\'s symmetric docking gave 24- and 12-subunit cages (2012), then two-component co-assembling cages (2014) that mix on demand. Bale et al. reached **120 subunits, 1.8–2.8 MDa, 24–40 nm** icosahedral assemblies with viral-capsid-like kinetics — virus-scale designed matter, and the platform that became the SARS-CoV-2 nanoparticle vaccines.', zh: 'King 的對稱對接先給出 24 與 12 次單元的奈米籠（2012），接著是可按需混合的雙組分共組裝籠（2014）。Bale 等人做到 **120 個次單元、1.8–2.8 MDa、24–40 nm** 的二十面體組裝體，動力學類似病毒外殼——病毒尺度的設計物質，也是後來新冠奈米顆粒疫苗的平台。' }, c: 'King et al., *Science* 336:1171; *Nature* 510:103; Bale et al., *Science* 353:389' },
              { y: '2016', t: { en: 'The TIM barrel falls after 25 years', zh: 'TIM 桶在二十五年後被攻下' }, d: { en: 'Huang and colleagues designed a four-fold symmetric (β/α)₈ barrel — the hardest classic fold, unsolved for over 25 years — with 33 designs characterised and a 184-residue crystal structure nearly identical to the model. The same paper showed nature has sampled only a subset of TIM-barrel sequence space.', zh: 'Huang 與同事設計出四重對稱的 (β/α)₈ 桶——最難的經典摺疊，二十五年以上未解——表徵了 33 個設計，一個 184 殘基的晶體結構與模型幾乎相同。同一篇論文也顯示：自然界只取樣了 TIM 桶序列空間的一個子集。' }, c: 'Huang et al., *Nat. Chem. Biol.* 12(1):29' },
              { y: '2017', hi: 1, t: { en: 'Scale substitutes for accuracy: 6% → 47%', zh: '用規模取代準確度：6% → 47%' }, d: { en: 'Rocklin et al. assayed **>15,000 designed miniproteins** plus 1,000 naturals, 10,000 point mutants and 30,000 negative controls by proteolysis — and reported design success rising **from 6% to 47%** across iterations between design and experiment. Chevalier et al. applied the same logic to binders: **22,660 designs → 2,618 high-affinity hits (~11.6%)**. Cheap DNA turned a few-percent hit rate from a fatal flaw into a working pipeline — and generated the labelled data that machine learning would need.', zh: 'Rocklin 等人以蛋白酶解法檢測了**超過 15,000 個設計迷你蛋白**，外加 1,000 個天然蛋白、10,000 個點突變與 30,000 個陰性對照——並報告設計成功率在設計與實驗的反覆中**從 6% 升到 47%**。Chevalier 等人把同樣邏輯用在結合蛋白：**22,660 個設計 → 2,618 個高親和力命中（約 11.6%）**。便宜的 DNA 把「幾個百分點的命中率」從致命缺陷變成可運作的流程——並產生了機器學習日後需要的標註資料。' }, c: 'Rocklin et al., *Science* 357(6347):168; Chevalier et al., *Nature* 550:74' },
              { y: '2018', t: { en: 'The β-barrel, and designed small-molecule binding', zh: 'β 桶，以及設計出的小分子結合' }, d: { en: 'Dou et al. showed that a designed β-barrel requires deliberate **symmetry-breaking** for continuous hydrogen bonding and strain relief — then designed a cavity that binds a fluorogen and lights up in bacteria, yeast and mammalian cells. Two firsts in one paper: the first designed β-barrel, and small-molecule binding designed into a custom-built backbone rather than a borrowed pocket.', zh: 'Dou 等人證明：設計 β 桶必須刻意**打破對稱**，才能維持連續氫鍵並釋放張力——接著設計出一個能結合螢光原、並在細菌、酵母與哺乳動物細胞中發光的空腔。一篇論文兩個首次：第一個設計 β 桶，以及把小分子結合設計進*自建*主鏈（而非借用的口袋）。' }, c: 'Dou et al., *Nature* 561(7724):485' },
              { y: '2019', t: { en: 'Better-than-natural signalling, and programmable switches', zh: '優於天然的訊號分子，與可編程開關' }, d: { en: 'Neo-2/15, a de novo IL-2/IL-15 mimic with no topological or sequence relationship to the natural cytokines, bound IL-2Rβγ more tightly than IL-2 with no IL-2Rα site, better anti-tumour activity in mice, reduced toxicity and undetectable immunogenicity. LOCKR then delivered designed allostery — a caged five-helix switch activated up to **40-fold** by an exogenous key peptide, working in yeast and mammalian cells. Design acquired multiple states.', zh: 'Neo-2/15 是一個與天然細胞介素在拓樸與序列上毫無關係的從頭 IL-2/IL-15 模擬物，它結合 IL-2Rβγ 比 IL-2 更緊、沒有 IL-2Rα 位點、在小鼠中抗腫瘤活性更好、毒性更低、免疫原性偵測不到。接著 LOCKR 帶來了設計的別位調控——一個被籠住的五螺旋開關，可由外加的鑰匙肽活化達 **40 倍**，在酵母與哺乳動物細胞中都能運作。設計取得了「多重狀態」。' }, c: 'Silva et al., *Nature* 565:186; Langan et al., *Nature* 572:205' }
            ]
          }, {
            h: { en: 'Three waves of learning, converging', zh: '三波學習浪潮的匯聚' },
            range: '2017–2020',
            d: {
              en: 'Coevolution statistics, deep networks, and language models arrived from different directions and met within months of each other.',
              zh: '共演化統計、深度網路、語言模型從不同方向而來，在幾個月內彼此相遇。'
            },
            items: [
              { y: '2017', t: { en: 'Depth beats coevolution alone', zh: '深度勝過單純的共演化' }, d: { en: 'Wang, Sun, Li, Zhang & Xu\'s RaptorX-Contact used ultra-deep residual convolutional networks for contact prediction — the decisive deep-learning move, two years before AlphaFold1\'s CASP13 win.', zh: 'Wang、Sun、Li、Zhang 與 Xu 的 RaptorX-Contact 以超深殘差卷積網路做接觸預測——這是決定性的深度學習一步，比 AlphaFold1 在 CASP13 的勝利早兩年。' }, c: 'Wang et al., *PLoS Comput. Biol.* 13(1):e1005324' },
              { y: '2018', t: { en: 'AlphaFold1 wins CASP13', zh: 'AlphaFold1 贏得 CASP13' }, d: { en: 'TM-score ≥0.7 on **24 of 43** free-modelling domains versus 14 of 43 for the next best group. Still a distance-potential-plus-folding pipeline, not yet end-to-end.', zh: '在 **43 個自由建模結構域中有 24 個**達到 TM-score ≥0.7，而次佳團隊是 14 個。當時仍是「距離勢能加上摺疊」的流程，還不是端到端。' }, c: 'Senior et al., *Nature* 577(7792):706' },
              { y: '2019–21', t: { en: 'Protein language models: scale learns structure implicitly', zh: '蛋白質語言模型：規模會隱含地學到結構' }, d: { en: 'UniRep showed that pretraining on unlabelled sequences transfers to stability and function prediction, including for *de novo designed* proteins. ESM-1b then trained a transformer on **250 million sequences / 86 billion amino acids** and showed that representations encode secondary and tertiary structure, recoverable by linear projection — with no structural supervision at all.', zh: 'UniRep 證明在未標註序列上預訓練，可以遷移到穩定度與功能預測，*包括從頭設計的蛋白*。接著 ESM-1b 以 **2.5 億條序列／860 億個胺基酸**訓練 transformer，顯示其表徵編碼了二級與三級結構，可用線性投影取出——而且完全沒有結構監督。' }, c: 'Alley et al., *Nat. Methods* 16:1315; Rives et al., *PNAS* 118(15):e2016239118' },
              { y: 'Jan 2020', hi: 1, t: { en: 'trRosetta: an accurate open predictor, a year early', zh: 'trRosetta：提前一年的開放精準預測器' }, d: { en: 'Yang, Anishchenko, Park, Peng, Ovchinnikov & Baker predicted inter-residue *orientations* as well as distances. The detail that mattered for design: the network assigned **higher** probability to de novo designs than to natural proteins, giving a quantitative measure of structural "ideality". This was the open tool the design community actually had when the generative era began.', zh: 'Yang、Anishchenko、Park、Peng、Ovchinnikov 與 Baker 不只預測殘基間距離，也預測*方向*。對設計真正重要的細節是：這個網路給從頭設計蛋白的機率**高於**天然蛋白，從而提供了結構「理想度」的量化指標。生成時代開始時，設計社群手上實際有的開放工具就是它。' }, c: 'Yang et al., *PNAS* 117(3):1496' },
              { y: 'Jul 2020', hi: 1, t: { en: 'Hallucination — design by inverting a predictor', zh: '幻化設計——靠反轉預測器來設計' }, d: { en: 'Anishchenko and colleagues optimised random sequences until trRosetta\'s predicted distance map became confident, with no explicit energy function and no target fold. The first deep-learning generative design method — and it was posted **four months before CASP14**, which settles a common confusion: AlphaFold2 did not enable generative design, it coincided with it.', zh: 'Anishchenko 與同事持續最佳化隨機序列，直到 trRosetta 的預測距離圖變得有信心為止；沒有明確的能量函數，也沒有目標摺疊。這是第一個深度學習生成式設計方法——而且發表於 **CASP14 之前四個月**，這解開了一個常見的混淆：AlphaFold2 不是生成式設計的起因，它只是同時發生。' }, c: 'Anishchenko et al., bioRxiv 23 Jul 2020; *Nature* 600:547 (2021)' },
              { y: '30 Nov 2020', hi: 1, t: { en: 'AlphaFold2 at CASP14', zh: 'AlphaFold2 在 CASP14' }, d: { en: 'Median GDT_TS **92.4** across assessed domains (about 87 in the hardest free-modelling category); summed z-score **244.0** against **90.8** for the next best group; median backbone accuracy **0.96 Å** RMSD₉₅ against 2.8 Å. Single-chain prediction with good alignments was declared substantially solved, and design\'s binding constraint moved from "can we predict?" to "can we specify what we want?"', zh: '在受評估結構域上中位 GDT_TS **92.4**（最難的自由建模類別約 87）；累計 z 分數 **244.0**，次佳團隊 **90.8**；主鏈準確度中位數 **0.96 Å** RMSD₉₅，次佳為 2.8 Å。有良好比對的單鏈預測被宣告大致解決，而設計的瓶頸從「我們能不能預測？」轉為「我們能不能說清楚自己想要什麼？」' }, c: 'Jumper et al., *Nature* 596(7873):583' }
            ]
          }]) +
          h.fig({
            kind: 'line', tag: { en: 'infrastructure', zh: '基礎設施' },
            title: { en: 'The data substrate, 1971–2026', zh: '資料基底，1971–2026' },
            sub: {
              en: 'Released entries in the Protein Data Bank, logarithmic. Growth, not insight, was the binding constraint on deep learning for structure — and the archive crossed 250,000 entries in March 2026.',
              zh: '蛋白質資料庫的已釋出條目，對數尺度。真正限制結構深度學習的是成長量，不是洞見——這個資料庫在 2026 年三月跨過 250,000 筆。'
            },
            opts: { log: true, area: true, endLabels: false, height: 250, unit: { en: 'entries', zh: '筆' } },
            data: {
              x: ['1971', '1990', '1995', '2000', '2010', '2020', '2025', '2026'],
              series: [{ name: { en: 'PDB released entries', zh: 'PDB 已釋出條目' }, slot: 1, v: [7, 507, 3812, 13583, 69486, 172777, 247220, 250000] }]
            },
            caption: {
              en: 'Counts to 2020 from RCSB growth statistics; the 2025 figure (247,220 released by 31 Dec 2025) was computed from the RCSB Search API during research; the 250,000 milestone was reached in March 2026.',
              zh: '2020 年以前的數字出自 RCSB 成長統計；2025 年數字（截至 2025 年 12 月 31 日釋出 247,220 筆）為研究期間透過 RCSB Search API 計算所得；250,000 筆的里程碑在 2026 年三月達成。'
            },
            source: { en: 'RCSB PDB.', zh: 'RCSB PDB。' }
          })
      });

      /* ---------------- era 6 ---------------- */
      out += h.sec({
        id: 'c-e6',
        kick: { en: 'Era V · 2021–2023', zh: '第五時代 · 2021–2023' },
        h2: { en: 'The generative turn', zh: '生成轉向' },
        lede: {
          en: 'Three years, three decisive releases, and one conceptual unlock: a differentiable structure predictor is simultaneously an oracle, a filter, and — once fine-tuned — a generator.',
          zh: '三年、三次決定性的發布，以及一個概念上的鬆綁：一個可微分的結構預測器同時是神諭、是篩選器，而——一旦經過微調——也是生成器。'
        },
        body:
          h.timeline([{
            h: { en: 'Oracle, filter, generator', zh: '神諭、篩選器、生成器' },
            range: '2021–2023',
            items: [
              { y: '15–16 Jul 2021', hi: 1, t: { en: 'AlphaFold2 and RoseTTAFold published, and released', zh: 'AlphaFold2 與 RoseTTAFold 發表並釋出' }, d: { en: 'Both papers appeared the same week, and what made this a *design* breakthrough rather than a prediction breakthrough was the release policy: inference code and weights on GitHub within a day, ColabFold three days later. By December the Baker lab had inverted a predictor to generate proteins from random sequence — **129 genes synthesised, 27 monodisperse with matching circular dichroism, 3 structures solved**.', zh: '兩篇論文在同一週出現，而讓它成為*設計*突破（而非預測突破）的是釋出政策：推論程式碼與權重在一天內上 GitHub，ColabFold 三天後跟上。到十二月，Baker 實驗室已經反轉預測器、從隨機序列生成蛋白——**合成 129 個基因、27 個單分散且圓二色光譜吻合、解出 3 個結構**。' }, c: 'Jumper et al., *Nature* 596:583; Baek et al., *Science* 373:871; Anishchenko et al., *Nature* 600:547' },
              { y: 'Jul 2021 → Jul 2022', t: { en: 'AlphaFold DB: 350,000 → 214 million', zh: 'AlphaFold 資料庫：35 萬 → 2.14 億' }, d: { en: 'Launched with about 350,000 predicted structures and expanded to over 200 million a year later. Note the frequent conflation: the 365-million figure belongs to the ESM Metagenomic Atlas\'s high-confidence count, not to AlphaFold DB\'s launch.', zh: '上線時約 35 萬個預測結構，一年後擴充到超過 2 億。注意一個常見的混淆：3.65 億這個數字屬於 ESM 宏基因體圖譜的「高信賴度」計數，不是 AlphaFold 資料庫上線時的規模。' }, c: 'EMBL-EBI announcements' },
              { y: 'Sep 2022', hi: 1, t: { en: 'ProteinMPNN removes the throughput bottleneck', zh: 'ProteinMPNN 移除了產出瓶頸' }, d: { en: 'A **1.7-million-parameter** message-passing network over backbone geometry, decoding order-agnostically. The famous number is 52.4% native-sequence recovery against Rosetta\'s 32.9%, in **1.2 s versus 258.8 s**. The number that actually changed practice is the rescue: on cyclic oligomers Rosetta gave 40% soluble and **zero** with the correct oligomeric state, ProteinMPNN gave 88% soluble and 27.7% correct; on hallucinated backbones median soluble yield went from **9 to 247 mg/L**. The trick was training with Gaussian noise on coordinates — trading accuracy on pristine crystals for robustness on idealised design backbones.', zh: '一個 **170 萬參數**、在主鏈幾何上做訊息傳遞的網路，解碼順序無關。著名的數字是原生序列回復率 52.4% 對 Rosetta 的 32.9%，而且是 **1.2 秒對 258.8 秒**。真正改變實務的數字是「救援」：在環狀寡聚體上，Rosetta 給出 40% 可溶、**零**個寡聚態正確，ProteinMPNN 給出 88% 可溶、27.7% 正確；在幻化主鏈上，可溶產量中位數從 **9 mg/L 升到 247 mg/L**。訣竅是訓練時對座標加高斯噪聲——用在完美晶體上的準確度，換取在理想化設計主鏈上的韌性。' }, c: 'Dauparas et al., *Science* 378:49' },
              { y: 'Nov 2022', t: { en: 'ESM-2 and the Metagenomic Atlas', zh: 'ESM-2 與宏基因體圖譜' }, d: { en: '**617 million** structures folded in about two weeks on roughly 2,000 GPUs, 225 million at high confidence — from single sequences, with no MSA. A companion ablation made the design case bluntly: **19 of 20 designs succeeded with ESM-2 in the loop versus 1 of 20 without**.', zh: '在約 2,000 顆 GPU 上花約兩週摺出 **6.17 億**個結構，其中 2.25 億為高信賴度——全部由單一序列產生，不用 MSA。一份配套的消融實驗把設計上的論點說得很直白：**迴圈中有 ESM-2 時 20 個設計成功 19 個，沒有它時只成功 1 個**。' }, c: 'Lin et al., *Science* (2023); Verkuil et al., bioRxiv 2022' },
              { y: 'Jan–Feb 2023', t: { en: 'Function without structure, and a de novo luciferase', zh: '不靠結構的功能，以及從頭設計的螢光酶' }, d: { en: 'ProGen\'s artificial lysozymes were functional in **66 of 90** cases — against 53 of 90 for natural controls — with activity down to 31.4% sequence identity. Weeks later LuxSit showed the opposite face of the same year: a de novo luciferase found at **3 hits from 7,648 designs (0.04%)** in round one, rising to 2 of 46 (4%) in round two. Shape complementarity was solved; catalysis was not.', zh: 'ProGen 的人工溶菌酶在 **90 個中有 66 個**具功能——天然對照是 90 個中 53 個——而且序列相似度低到 31.4% 仍有活性。幾週後，LuxSit 展示了同一年的另一面：一個從頭設計的螢光酶，第一輪 **7,648 個設計中只有 3 個命中（0.04%）**，第二輪升到 46 個中 2 個（4%）。形狀互補性已被解決；催化沒有。' }, c: 'Madani et al., *Nat. Biotechnol.* 41:1099; Yeh et al., *Nature* 614:774' },
              { y: 'Jul 2023', hi: 1, t: { en: 'RFdiffusion — one generative model for everything', zh: 'RFdiffusion——一個生成模型涵蓋一切' }, d: { en: 'RoseTTAFold fine-tuned as a frame-space denoiser, conditionable on motifs, targets, folds or symmetry. Diffusion beat hallucination for concrete reasons: **23 of 25 versus 15 of 25** on the motif-scaffolding benchmark, **~11 s versus ~8.5 min** per design, trivial conditioning, and no adversarial-example problem. Binders: **19% overall hit rate across five targets from only 95 designs each**, where the same lab\'s earlier campaigns had managed 0%, 2.2%, 5.5%, 3.7% and 1.5%. A cryo-EM structure of the best haemagglutinin binder sat **0.63 Å** from the design model.', zh: '把 RoseTTAFold 微調成「剛體框架空間的去噪器」，可以用模組、標的、摺疊或對稱性作為條件。擴散之所以勝過幻化，理由很具體：模組支架化基準 **25 題中解出 23 題，對手 15 題**；每個設計 **約 11 秒 vs 約 8.5 分鐘**；條件化很容易；而且沒有對抗樣本問題。結合蛋白方面：**五個標的、每個只做 95 個設計，整體命中率 19%**，而同一實驗室先前的活動分別只有 0%、2.2%、5.5%、3.7%、1.5%。最佳血凝素結合蛋白的冷凍電顯結構與設計模型相距 **0.63 Å**。' }, c: 'Watson et al., *Nature* 620:1089' }
            ]
          }]) +
          h.bio('diffusion', {
            title: { en: 'How a diffusion model designs a backbone', zh: '擴散模型如何設計一條主鏈' },
            sub: {
              en: 'Train a network to remove noise from corrupted structures; then run it from pure noise and it produces a structure that never existed. Conditioning — hold this motif fixed, bind this surface, enforce this symmetry — is just information supplied at each denoising step.',
              zh: '訓練網路去除被破壞結構上的噪聲；接著從純噪聲開始跑，它就會產生一個從未存在過的結構。條件化——固定這個模組、結合這個表面、強制這個對稱——只是在每個去噪步驟提供的資訊。'
            },
            caption: {
              en: 'Schematic, not a rendering of real trajectory coordinates. After RFdiffusion (Watson et al., 2023).',
              zh: '示意圖，非真實軌跡座標的渲染。依 RFdiffusion（Watson 等人，2023）繪製。'
            }
          }) +
          h.fig({
            kind: 'bars', tag: { en: 'the key chart', zh: '關鍵圖表' },
            title: { en: 'Binder design: experimental hit rate per design ordered', zh: '結合蛋白設計：每個訂購設計的實驗命中率' },
            sub: {
              en: 'Logarithmic. Four orders of magnitude in four years — but read the caption before you quote it, because the denominators are not the same kind of thing.',
              zh: '對數尺度。四年跨越四個數量級——但在引用之前請先讀圖說，因為這些分母並不是同一種東西。'
            },
            opts: { log: true, dec: 2, suffix: '%', unit: '%' },
            data: [
              { label: { en: '2022 · Rosetta library screening (hard targets)', zh: '2022 · Rosetta 文庫篩選（困難標的）' }, v: 0.01, note: { en: '<10 binders from 100,000 designs (TIE2, CD3δ)', zh: '10 萬個設計中 <10 個結合蛋白（TIE2、CD3δ）' } },
              { label: { en: '2023 · RFdiffusion, 5 targets', zh: '2023 · RFdiffusion，5 個標的' }, v: 19, note: { en: '95 designs per target', zh: '每標的 95 個設計' } },
              { label: { en: '2025 · BindCraft, 12 targets (mean)', zh: '2025 · BindCraft，12 個標的（平均）' }, v: 46.3, note: { en: 'range 10–100%, no screening', zh: '範圍 10–100%，無需篩選' } },
              { label: { en: '2026 · Autonomous agent campaign', zh: '2026 · 自主代理人設計活動' }, v: 26.8, note: { en: '354 of 1,320 designs bound', zh: '1,320 個設計中 354 個結合' } },
              { label: { en: '2026 · De novo antibodies (VHH, pre-maturation)', zh: '2026 · 從頭抗體（VHH，成熟化前）' }, v: 2, note: { en: '0–2%; the hard format', zh: '0–2%；最難的格式' } }
            ],
            caption: {
              en: '**Read this carefully.** The 2022 figure is an unfiltered library screen; the 2023 and 2025 figures are per-design rates after in-silico filtering, and RFdiffusion\'s own authors attribute roughly one order of magnitude of their gain to the generator and one to AlphaFold2 filtering. Comparing a filtered rate with a library screen overstates the generative advance. Every number here is also self-reported by the method\'s developers on targets they chose.',
              zh: '**請仔細讀。** 2022 年的數字是未經篩選的文庫篩選；2023 與 2025 年的數字是電腦篩選後的「每設計」命中率，而且 RFdiffusion 的作者自己把增益中大約一個數量級歸給生成器、一個數量級歸給 AlphaFold2 篩選。拿篩選後的比率去比文庫篩選，會高估生成式的進展。此處每個數字也都是方法開發者在自選標的上的自我報告。'
            }
          })
      });

      /* ---------------- era 7 ---------------- */
      out += h.sec({
        id: 'c-e7',
        kick: { en: 'Era VI · 2024–2026', zh: '第六時代 · 2024–2026' },
        h2: { en: 'Industrialised — and audited', zh: '工業化——並且受審' },
        lede: {
          en: 'The last three years get their own chapter, because the resolution needed is higher. In brief: 2024 unified the architecture and won the Nobel Prize, 2025 made binder design routine and cracked catalysis, and 2026 turned the frontier from a model into a system — while four independent benchmarks showed that the field\'s own success metrics were weaker than everyone assumed.',
          zh: '最後三年有自己的一章，因為需要的解析度更高。簡述如下：2024 年統一了架構並拿下諾貝爾獎，2025 年讓結合蛋白設計變成常規並攻破催化，2026 年把前沿從「一個模型」變成「一套系統」——同時有四項獨立基準測試顯示，這個領域自己的成功指標比所有人以為的都更脆弱。'
        },
        body: h.timeline([{
          h: { en: 'The short version', zh: '簡版' },
          range: '2024–2026',
          d: { en: 'Full year-by-year analysis is in the next chapter; the 2026 frontier gets a chapter of its own after that.', zh: '完整的逐年分析見下一章；2026 年的前沿則在那之後自成一章。' },
          items: [
            { y: 'May 2024', hi: 1, t: { en: 'AlphaFold3: one architecture for all of biomolecular space', zh: 'AlphaFold3：一個架構涵蓋整個生物分子空間' }, d: { en: 'The Evoformer became the pairformer, MSA processing collapsed from 48 blocks to four, and the structure module became a diffusion module on **raw atom coordinates** with no frames and no stereochemical losses. That is how one network emits protein, DNA, RNA, ligand, ion and glycan atoms. The long tail of specialist predictors existed because of architectural limitation, not biological separation.', zh: 'Evoformer 變成 pairformer，MSA 處理從 48 個區塊縮到四個，結構模組變成直接在**原始原子座標**上做擴散，沒有剛體框架、沒有立體化學損失項。這就是為什麼一個網路能同時輸出蛋白、DNA、RNA、配體、離子與聚醣的原子。先前那一長串專用預測器之所以存在，是架構的限制，不是生物學上的分別。' }, c: 'Abramson et al., *Nature* 630:493' },
            { y: '9 Oct 2024', hi: 1, t: { en: 'The Nobel Prize in Chemistry', zh: '諾貝爾化學獎' }, d: { en: 'Half to **David Baker** "for computational protein design"; half jointly to **Demis Hassabis** and **John Jumper** "for protein structure prediction". The day before, Physics went to Hopfield and Hinton for the foundations of machine learning. Read together, the two prizes state that deep learning had become a method of the physical sciences — with protein design as its flagship.', zh: '一半授予 **David Baker**「因計算蛋白質設計」；一半共同授予 **Demis Hassabis** 與 **John Jumper**「因蛋白質結構預測」。前一天，物理獎頒給 Hopfield 與 Hinton，表彰機器學習的基礎。兩個獎合起來讀，是在宣告：深度學習已成為物理科學的方法——而蛋白質設計是它的旗艦。' }, c: 'Royal Swedish Academy of Sciences' },
            { y: 'Nov 2024', t: { en: 'The open-weights fight, settled in six months', zh: '開放權重之爭，半年內落幕' }, d: { en: 'AlphaFold3 shipped with no code and no weights; an open letter collected over 650 signatures in a week. The eventual November release was non-commercial, weights by request at Google\'s sole discretion. By then the community had rebuilt it four times — HelixFold3, Chai-1, Protenix, and **Boltz-1 under an MIT licence nine days later**. The lesson: weight-withholding has roughly a six-month half-life.', zh: 'AlphaFold3 發布時沒有程式碼、沒有權重；一封公開信在一週內收集到超過 650 個簽名。十一月最終釋出時，限非商業用途，權重須申請、由 Google 全權裁量。但那時社群已經重建了它四次——HelixFold3、Chai-1、Protenix，以及 **九天後以 MIT 授權釋出的 Boltz-1**。教訓是：扣留權重的半衰期大約是六個月。' }, c: 'Boltz-1 preprint; *Nature* news correction' },
            { y: 'Feb 2025', hi: 1, t: { en: 'Catalysis, finally', zh: '催化，終於' }, d: { en: 'De novo serine hydrolases reached **k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹** with crystal structures under 1 Å from the models, in five folds unlike any natural serine hydrolase — **with no directed evolution**. The methodological key was screening for active-site pre-organisation **across the whole reaction coordinate** rather than in one snapshot. This is the paper that separated catalysis from binding as a design problem.', zh: '從頭設計的絲胺酸水解酶達到 **k_cat/K_M = 2.2 × 10⁵ M⁻¹s⁻¹**，晶體結構與模型相距不到 1 Å，分布在五種與任何天然絲胺酸水解酶都不同的摺疊上——而且**完全沒有用定向演化**。方法上的關鍵是：篩選活性位在**整條反應座標上**的預組織程度，而不是只看某一個瞬間。這篇論文把催化從結合中分離出來，使其成為獨立的設計問題。' }, c: 'Lauko et al., *Science* 388:eadu2454' },
            { y: 'Aug–Nov 2025', t: { en: 'Binders become routine; antibodies get structures', zh: '結合蛋白成為常規；抗體拿到結構' }, d: { en: 'BindCraft reported **10–100% experimental success across 12 targets with no high-throughput screening**, open-source, one GPU. "Logos" found binders for **39 of 43 intrinsically disordered targets** at ~22 designs each. And Bennett et al. produced the first structurally validated de novo antibodies — cryo-EM confirming **all six CDR loop conformations** — while candidly reporting 0–2% initial hit rates and tens-to-hundreds of nanomolar affinities needing continuous evolution to reach single digits.', zh: 'BindCraft 報告在 **12 個標的上達成 10–100% 的實驗成功率，且不需高通量篩選**，開源、單一 GPU 即可。「Logos」在 **43 個本質無序標的中為 39 個**找到結合蛋白，每個約 22 個設計。而 Bennett 等人做出第一批經結構驗證的從頭抗體——冷凍電顯確認了**全部六個 CDR 環的構型**——同時坦白報告初始命中率 0–2%、親和力在數十到數百奈莫耳之間，需要連續演化才能進到個位數。' }, c: 'Pacesa et al., *Nature* 646:483; Wu et al., *Science* 389:eadr8063; Bennett et al., *Nature* 649:183' },
            { y: 'Oct 2026', hi: 1, t: { en: 'Amide-bond hydrolysis falls twice in one month', zh: '醯胺鍵水解在一個月內被攻下兩次' }, d: { en: 'De novo cysteine proteases (13 of 69 designs active, rate enhancements to 3 × 10⁷, six crystal structures within 1.2 Å of model, folds unlike nature at TM-score < 0.50, active in mammalian cells) and designed zinc metalloproteases (36% of 135 designs active, >10⁸-fold acceleration, selectively cleaving TDP-43 and amyloid-β). A reaction class that had resisted design for two decades.', zh: '從頭設計的半胱胺酸蛋白酶（69 個設計中 13 個有活性、速率提升達 3 × 10⁷、六個晶體結構與模型相距 1.2 Å 內、摺疊與自然界不同至 TM-score < 0.50、在哺乳動物細胞中有活性），以及設計的鋅金屬蛋白酶（135 個設計中 36% 有活性、加速 >10⁸ 倍、能選擇性切割 TDP-43 與 β 類澱粉蛋白）。一個抵抗了設計二十年的反應類別。' }, c: 'Two *Nature* papers, October 2026 — see References' },
            { y: 'Aug–Oct 2026', hi: 1, t: { en: 'The frontier becomes a system, and the field audits itself', zh: '前沿變成一套系統，而這個領域開始自我稽核' }, d: { en: 'Autonomous agents ran complete 24–48 hour design campaigns (**354 of 1,320 designs bound, 26.8%; binders for 14 of 15 targets**); a single all-atom model reached **76.4 passing designs per GPU-hour against 13.2** for the next best; and a million-design campaign found binders for **86 of 127 targets**. In the same months, **AIntibody** — the field\'s first blinded, prospective, multi-organisation benchmark — found that affinity ranking within sequence clusters was **worse than random clone picking** for every model but one. Both stories are true, and the honest version needs both.', zh: '自主代理人跑完整的 24–48 小時設計活動（**1,320 個設計中 354 個結合，26.8%；15 個標的中 14 個找到結合蛋白**）；單一全原子模型達到**每 GPU 小時 76.4 個通過設計，次佳為 13.2**；一場百萬設計規模的活動在 **127 個標的中為 86 個**找到結合蛋白。同幾個月內，**AIntibody**——本領域第一個盲測、前瞻、多機構的基準——發現除一個模型外，所有模型在序列叢集內的親和力排序**比隨機挑選菌落還差**。兩個故事都是真的，而誠實的版本需要兩個都講。' }, c: 'See the 2026 Frontier chapter' }
          ]
        }])
      });

      /* ---------------- family tree ---------------- */
      out += h.sec({
        id: 'c-tree',
        kick: { en: 'Method lineage', zh: '方法系譜' },
        h2: { en: 'The family tree of methods', zh: '方法的家族樹' },
        lede: {
          en: 'Four lineages, developed partly independently, now braided into one pipeline. Knowing which branch a tool came from tells you what it is good at and what it quietly assumes.',
          zh: '四條部分獨立發展的脈絡，如今編成同一條流程。知道一個工具來自哪一支，就知道它擅長什麼、以及它悄悄假設了什麼。'
        },
        body:
          h.fig({
            kind: 'tree', tag: { en: 'lineage', zh: '系譜' },
            title: { en: 'From physics to learned priors', zh: '從物理到學習得到的先驗' },
            sub: {
              en: 'Solid links are direct descent; dashed links are "used as a component of".',
              zh: '實線是直接傳承；虛線是「被用作其中一個元件」。'
            },
            data: {
              cols: [
                {
                  head: { en: 'Physics & search', zh: '物理與搜尋' },
                  nodes: [
                    { id: 'rot', label: { en: 'Rotamers + DEE', zh: '旋轉異構物 + DEE' }, sub: '1987–94', tone: 'n' },
                    { id: 'ros', label: { en: 'Rosetta energy', zh: 'Rosetta 能量函數' }, sub: '1997–', tone: 'n' },
                    { id: 'par', label: { en: 'Parametric backbones', zh: '參數化主鏈' }, sub: '1998–2014', tone: 'n' }
                  ]
                },
                {
                  head: { en: 'Prediction', zh: '預測' },
                  nodes: [
                    { id: 'dca', label: { en: 'Coevolution (DCA)', zh: '共演化（DCA）' }, sub: '2011–12', tone: 'b' },
                    { id: 'deep', label: { en: 'Deep contact nets', zh: '深度接觸網路' }, sub: '2017–18', tone: 'b' },
                    { id: 'af2', label: { en: 'AlphaFold2 / RoseTTAFold', zh: 'AlphaFold2／RoseTTAFold' }, sub: '2021', tone: 'b' },
                    { id: 'af3', label: { en: 'All-atom co-folding', zh: '全原子共摺疊' }, sub: '2024–26', tone: 'b' }
                  ]
                },
                {
                  head: { en: 'Generation', zh: '生成' },
                  nodes: [
                    { id: 'hal', label: { en: 'Hallucination', zh: '幻化設計' }, sub: '2020–22', tone: 'v' },
                    { id: 'dif', label: { en: 'Diffusion (RFdiffusion)', zh: '擴散（RFdiffusion）' }, sub: '2022–23', tone: 'v' },
                    { id: 'flo', label: { en: 'Flow matching', zh: '流匹配' }, sub: '2024–25', tone: 'v' },
                    { id: 'aa', label: { en: 'All-atom generators', zh: '全原子生成器' }, sub: '2025–26', tone: 'v' }
                  ]
                },
                {
                  head: { en: 'Sequence & language', zh: '序列與語言' },
                  nodes: [
                    { id: 'lm', label: { en: 'Protein LMs (ESM)', zh: '蛋白質語言模型（ESM）' }, sub: '2019–', tone: 'g' },
                    { id: 'mpnn', label: { en: 'ProteinMPNN', zh: 'ProteinMPNN' }, sub: '2022', tone: 'g' },
                    { id: 'lig', label: { en: 'LigandMPNN', zh: 'LigandMPNN' }, sub: '2024–', tone: 'g' },
                    { id: 'gen', label: { en: 'Genome-scale LMs (Evo)', zh: '基因體尺度語言模型（Evo）' }, sub: '2024–26', tone: 'g' }
                  ]
                },
                {
                  head: { en: 'The 2026 system', zh: '2026 年的系統' },
                  nodes: [
                    { id: 'agent', label: { en: 'Agentic controller', zh: '代理式控制器' }, sub: { en: 'allocates GPU hours', zh: '分配 GPU 時數' }, tone: 'a' },
                    { id: 'rank', label: { en: 'Independent reranker', zh: '獨立重排序器' }, sub: { en: 'not the predictor\'s own score', zh: '不是預測器自己的分數' }, tone: 'a' },
                    { id: 'lab', label: { en: '48-hour wet-lab loop', zh: '48 小時濕實驗循環' }, sub: { en: 'DNA is 80% of the cost', zh: 'DNA 佔成本 80%' }, tone: 'a' }
                  ]
                }
              ],
              edges: [
                ['rot', 'ros'], ['ros', 'par'], ['dca', 'deep'], ['deep', 'af2'], ['af2', 'af3'],
                ['af2', 'hal'], ['hal', 'dif'], ['dif', 'flo'], ['flo', 'aa'], ['af3', 'aa', 'd'],
                ['lm', 'mpnn'], ['mpnn', 'lig'], ['lm', 'gen'],
                ['ros', 'dca', 'd'], ['par', 'hal', 'd'],
                ['aa', 'agent'], ['lig', 'agent', 'd'], ['af3', 'rank', 'd'], ['agent', 'lab']
              ]
            },
            caption: {
              en: 'The pipeline most labs ran in late 2026: generate a backbone (generation branch) → write a sequence (sequence branch) → check with a co-folding model (prediction branch) → rank with something that is *not* that model\'s confidence → order DNA. Physics has not disappeared; it survives inside the training data and in the loss functions.',
              zh: '2026 年底多數實驗室執行的流程：生成主鏈（生成支）→ 寫出序列（序列支）→ 用共摺疊模型檢查（預測支）→ 用*不是*該模型自身信賴度的東西來排序 → 訂 DNA。物理並沒有消失；它活在訓練資料與損失函數裡。'
            }
          })
      });

      /* ---------------- shifts ---------------- */
      out += h.sec({
        id: 'c-shifts',
        kick: { en: 'Synthesis', zh: '綜合' },
        h2: { en: 'Seven moments when the problem itself changed', zh: '問題本身改變的七個時刻' },
        lede: {
          en: 'Most entries in a timeline are increments. These seven are not: each one changed what question the field was asking.',
          zh: '時間軸上大多數條目都是增量。這七個不是：每一個都改變了這個領域在問什麼問題。'
        },
        body: h.cards([
          { chips: [{ t: '1973', k: 'b' }], h: { en: 'Design becomes well-posed', zh: '設計成為定義明確的問題' }, p: { en: 'Anfinsen\'s thermodynamic hypothesis. If sequence encodes the free-energy minimum, choosing a sequence is choosing a structure. Without this, design is wishful.', zh: 'Anfinsen 的熱力學假說。若序列編碼了自由能最低點，選序列就是選結構。沒有這一條，設計只是空想。' } },
          { chips: [{ t: '1987–94', k: 'b' }], h: { en: 'Design becomes computable', zh: '設計成為可計算的' }, p: { en: 'Rotamer libraries discretised the space; dead-end elimination gave a provable pruning criterion. A continuous physics problem became a finite combinatorial one.', zh: '旋轉異構物庫把空間離散化；死端消除法給出可證明的修剪判準。連續的物理問題變成有限的組合問題。' } },
          { chips: [{ t: '1998', k: 'b' }], h: { en: 'The backbone becomes a variable', zh: '主鏈成為變數' }, p: { en: 'Harbury\'s right-handed coiled coil broke the fixed-natural-backbone assumption shared by both 1990s schools. Design stopped being repacking and became geometry.', zh: 'Harbury 的右手卷曲螺旋打破了 1990 年代兩個學派共有的「固定天然主鏈」假設。設計從「重新堆疊」變成「幾何」。' } },
          { chips: [{ t: '1997–2003', k: 'v' }], h: { en: 'Prediction and design become one problem', zh: '預測與設計成為同一個問題' }, p: { en: 'Rosetta was built for CASP, and the same energy function run backwards is design. This is the structural reason one laboratory led the field for three decades: every prediction gain was a free design gain.', zh: 'Rosetta 是為 CASP 而建的，而同一個能量函數反過來跑就是設計。這就是為什麼一間實驗室能領先三十年的結構性原因：每一次預測進展都是免費的設計進展。' } },
          { chips: [{ t: '2012', k: 'v' }], h: { en: 'Design for foldability, not for the minimum', zh: '為可摺疊性而設計，不是為最低點' }, p: { en: 'Koga & Baker\'s rules let designers specify funnel-shaped landscapes by construction. The deepest advance of the 2010s, and the one that unlocked the TIM barrel and the β-barrel.', zh: 'Koga 與 Baker 的規則讓設計者能由構造直接指定漏斗形地景。2010 年代最深刻的進展，也是攻下 TIM 桶與 β 桶的那一把鑰匙。' } },
          { chips: [{ t: '2017', k: 'a' }], h: { en: 'Scale substitutes for accuracy', zh: '用規模取代準確度' }, p: { en: 'When DNA is cheap enough to order 15,000 designs, a 6% hit rate is a productive pipeline rather than a fatal flaw — and the failures become the labelled dataset that trains the next model.', zh: '當 DNA 便宜到可以訂 15,000 個設計，6% 的命中率就是可運作的流程，而不是致命缺陷——而且那些失敗會變成訓練下一個模型的標註資料。' } },
          { chips: [{ t: '2020–23', k: 'g' }], h: { en: 'A predictor is also a generator', zh: '預測器也是生成器' }, p: { en: 'A differentiable structure predictor can be used as an oracle, a filter and — fine-tuned on a denoising objective — a generator. Hallucination proved it; diffusion industrialised it. This is the hinge the whole modern field turns on.', zh: '一個可微分的結構預測器可以當神諭、當篩選器，而——在去噪目標上微調後——當生成器。幻化設計證明了這件事；擴散把它工業化。整個現代領域都繞著這個轉折旋轉。' } },
          { chips: [{ t: '2026', k: 'r' }], h: { en: 'The eighth, in progress: audit', zh: '正在發生的第八個：稽核' }, p: { en: '2026 is the first year the field systematically measured its own instruments — and found them weaker than assumed. Whether that becomes a genuine paradigm shift depends on whether prospective, blind, third-party benchmarking becomes normal. It has not yet.', zh: '2026 是這個領域第一次系統性地量測自己的儀器——結果發現它們比想像的脆弱。這會不會成為真正的範式轉移，取決於前瞻、盲測、第三方的基準測試是否變成常態。目前還沒有。' } }
        ], 'g3')
      });

      /* ---------------- misconceptions ---------------- */
      out += h.sec({
        id: 'c-myth',
        kick: { en: 'Corrections', zh: '更正' },
        h2: { en: 'Nine things the popular account gets wrong', zh: '流行敘事講錯的九件事' },
        lede: {
          en: 'These are not pedantry. Each one is a claim you will meet in a review article, a wiki or a conference talk, and each one would mislead a team planning a project.',
          zh: '這些不是吹毛求疵。每一條你都會在綜述文章、wiki 或會議演講裡遇到，而每一條都會誤導一支正在規劃專案的團隊。'
        },
        body: h.tbl({
          min: 820,
          cols: [
            { t: { en: 'The common claim', zh: '常見說法' }, w: '32%' },
            { t: { en: 'What is actually the case', zh: '實際情況' } }
          ],
          rows: [
            [{ en: '"Top7 was the first de novo designed protein."', zh: '「Top7 是第一個從頭設計的蛋白質。」' }, { en: 'α4 (Regan & DeGrado, 1988) was the first de novo protein shown to be a stable folded globule, and FSD-1 (1997) was the first computationally designed complete sequence. Top7\'s achievement was a **novel topology** hit at near-atomic accuracy — and it demonstrated no function at all.', zh: 'α4（Regan 與 DeGrado，1988）是第一個被證實為穩定摺疊球體的從頭蛋白，而 FSD-1（1997）是第一條由計算設計的完整序列。Top7 的成就是以接近原子的準確度命中一個**新穎拓樸**——而且它完全沒有展示任何功能。' }],
            [{ en: '"AlphaFold enabled generative protein design."', zh: '「AlphaFold 讓生成式蛋白設計成為可能。」' }, { en: 'Deep-network hallucination was posted in **July 2020, four months before CASP14**, and it was built on trRosetta — the open predictor the design community actually had. AlphaFold2 coincided with the generative turn and accelerated it; it did not cause it.', zh: '深度網路幻化設計發表於 **2020 年七月，比 CASP14 早四個月**，而且是建立在 trRosetta 之上——那才是設計社群當時實際擁有的開放預測器。AlphaFold2 與生成轉向同時發生並加速了它；但不是它造成的。' }],
            [{ en: '"AlphaFold started at DeepMind."', zh: '「AlphaFold 起源於 DeepMind。」' }, { en: 'The premise — that sequence alignments contain enough information to fold a protein — is Marks & Sander\'s 2011 direct-coupling-analysis work, statistical physics rather than deep learning. The deep-learning step was Xu\'s RaptorX-Contact in 2017.', zh: '它的前提——序列比對本身就含有足以摺出蛋白的資訊——來自 Marks 與 Sander 2011 年的直接耦合分析，是統計物理而非深度學習。深度學習那一步是 Xu 在 2017 年的 RaptorX-Contact。' }],
            [{ en: '"AlphaFold2 scored 92.4 GDT_TS."', zh: '「AlphaFold2 拿到 92.4 GDT_TS。」' }, { en: 'That is the **median across assessed domains**, and it falls to about 87 in the hardest free-modelling category. For group comparisons the defensible figure is the summed z-score, 244.0 against 90.8. Per-group GDT_TS numbers circulating online often trace to blog posts rather than the CASP14 assessment papers.', zh: '那是**受評估結構域的中位數**，在最難的自由建模類別降到約 87。做團隊間比較時，站得住腳的數字是累計 z 分數：244.0 對 90.8。網路上流傳的各團隊 GDT_TS 數字常常追溯到部落格文章，而不是 CASP14 的評估論文。' }],
            [{ en: '"Designed hyperstability is a triumph."', zh: '「設計出的超穩定性是一種勝利。」' }, { en: 'It is a **symptom**. Natural proteins are marginally stable for functional reasons — they need to move, turn over and be regulated. Over-optimised hydrophobic burial gives melting temperatures above 90 °C and rigid, functionless molecules, and that bias is part of why designed enzymes stayed orders of magnitude below natural efficiency.', zh: '它是一個**症狀**。天然蛋白之所以只有邊際穩定度，是有功能上的理由——它們需要運動、代謝更替、受調控。過度最佳化的疏水包埋會給出熔點高於 90 °C 的僵硬無功能分子，而這個偏差正是設計酵素長期比天然效率低好幾個數量級的原因之一。' }],
            [{ en: '"Levinthal proved folding is impossible by random search."', zh: '「Levinthal 證明了隨機搜尋不可能摺出蛋白。」' }, { en: 'Levinthal posed no impossibility paradox. The 1969 Allerton House text — a third-party transcript, heavily misquoted since — argued that the native state is reached by pathway and may even be metastable. The famous 10⁵²-years arithmetic is later literature.', zh: 'Levinthal 並沒有提出一個「不可能悖論」。1969 年 Allerton House 的那份文字——是第三方謄錄，之後被大量誤引——主張天然態是經由路徑抵達的，甚至可能是亞穩態。那個著名的 10⁵² 年算術是後來文獻加上的。' }],
            [{ en: '"The designed β-barrel and the fluorescence-activating proteins were two separate breakthroughs."', zh: '「設計 β 桶與螢光活化蛋白是兩個分開的突破。」' }, { en: 'They are **one paper** — Dou et al., *Nature* 561:485 (2018). Listing them separately double-counts the achievement, which happens in a surprising number of review timelines.', zh: '它們是**同一篇論文**——Dou 等人，*Nature* 561:485（2018）。把它們分開列會重複計算同一項成就，而這在相當多綜述時間軸裡都發生了。' }],
            [{ en: '"Modern hit rates show design is ~50× better than a decade ago."', zh: '「現代命中率顯示設計比十年前好約 50 倍。」' }, { en: 'Often true in direction, usually overstated in magnitude, because the denominators differ. A modern per-design rate comes **after** generative sampling and in-silico filtering of thousands of candidates; a 2017 library rate does not. RFdiffusion\'s own authors split their two-order gain roughly evenly between the generator and the AlphaFold2 filter.', zh: '方向上常常成立，幅度上通常被誇大，因為分母不同。現代的「每設計」比率是在生成式取樣加上對數千候選的電腦篩選**之後**計算的；2017 年的文庫比率不是。RFdiffusion 的作者自己把兩個數量級的增益大致平分給生成器與 AlphaFold2 篩選。' }],
            [{ en: '"AlphaFold 4 was released in 2026."', zh: '「AlphaFold 4 在 2026 年發布了。」' }, { en: 'It does not exist. The phrase comes from a *Nature* news headline — in quotation marks — about Isomorphic Labs\' IsoDDE report of February 2026, which shipped no weights, no code and no recipe. Blog posts claiming a release contradict each other and cite nothing.', zh: '它不存在。這個說法來自 *Nature* 一則新聞的標題——而且是加了引號的——該報導談的是 Isomorphic Labs 於 2026 年二月發布的 IsoDDE 報告，而那份報告沒有釋出權重、程式碼或方法細節。聲稱「已發布」的部落格文章彼此矛盾，而且沒有任何引用來源。' }]
          ]
        })
      });

      return out;
    }
  };
})(window);
