(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.overview = {
    label: { en: 'Overview', zh: '總覽' },
    title: { en: 'Overview', zh: '總覽' },
    render: function (h) {
      var out = '';

      /* ---------- hero ---------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'GEMS Research · Science for Good · compiled 20 November 2026', zh: 'GEMS Research · 科學向善 · 彙編於 2026 年 11 月 20 日' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Protein design got very good at ==geometry==, and 2026 is the year it found out how little it knows about ==everything else==.',
          zh: '蛋白質設計在==幾何==上變得非常好，而 2026 年是它發現自己對==其餘一切==所知甚少的那一年。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'An academic history, technology-trend analysis and state-of-the-art map of computational protein design, from Pauling\'s α-helix in 1951 to the week this page was written. Eleven chapters, 434 sourced references, and a deliberate discipline: every claim labelled peer-reviewed, preprint, company claim or press, and every number read as an upper bound unless someone independent measured it.',
          zh: '一份關於計算蛋白質設計的學術史、技術趨勢分析與技術現狀地圖，從 1951 年 Pauling 的 α 螺旋，到本頁撰寫的那一週。十一章、434 筆有出處的參考資料，以及一項刻意的紀律：每個主張都標註為同儕審查、預印本、公司宣稱或媒體；而每個數字除非有獨立第三方量測過，都讀成上界。'
        }) + '</p>' +
        h.stats([
          { v: '75', l: { en: 'Years covered, 1951 to 2026', zh: '涵蓋年數，1951 至 2026' } },
          { v: '11', l: { en: 'Chapters, including a 2026 frontier map', zh: '章節數，含 2026 前沿地圖' } },
          { v: '15', l: { en: 'Capability axes scored separately', zh: '分別評分的能力軸' } },
          { v: '434', l: { en: 'Sourced references', zh: '有出處的參考資料' } },
          { v: '0.6–0.76', l: { en: 'AUC of the filters the field relies on', zh: '這個領域所依賴的篩選器 AUC' } },
          { v: '2.2×10⁵', l: { en: 'Best designed enzyme k_cat/K_M, M⁻¹s⁻¹', zh: '最佳設計酵素 k_cat/K_M（M⁻¹s⁻¹）' } }
        ]) +
        '</div></div>';

      /* ---------- what this is ---------- */
      out += h.sec({
        id: 'o-what',
        kick: { en: 'What this is', zh: '這是什麼' },
        h2: { en: 'A reference, not a claim', zh: '一份參考資料，不是一項主張' },
        body:
          h.cards([
            {
              chips: [{ t: { en: 'what it is', zh: '它是什麼' }, k: 'g' }],
              h: { en: 'A literature review with its sources attached', zh: '一份附上出處的文獻回顧' },
              p: {
                en: 'Everything here is secondary analysis of published work, assembled so that a student team can orient itself in a field that moves faster than its textbooks. Where this report makes a judgement rather than reporting a measurement — maturity scores, severity scores, feasibility scores — the criteria are printed beside it so you can disagree precisely.',
                zh: '這裡的全部內容都是對已發表研究的二次分析，目的是讓一支學生團隊能在一個比教科書更新得更快的領域裡找到方位。凡本報告是在做判斷而非報告量測——成熟度評分、嚴重度評分、可行性評分——判準都印在旁邊，方便你精確地不同意。'
              }
            },
            {
              chips: [{ t: { en: 'what it is not', zh: '它不是什麼' }, k: 'r' }],
              h: { en: 'Not a research result', zh: '不是研究成果' },
              p: {
                en: 'This site reports **no new biological result** and describes **no new protein**. No sequence here was designed by us, nothing was synthesised, and no laboratory claim is made. It is also not affiliated with, or endorsed by, any laboratory, company or competition named in it.',
                zh: '本站**不提出任何新的生物學結果**，也**不描述任何新設計的蛋白質**。這裡沒有任何序列是我們設計的、沒有任何東西被合成，也沒有提出任何實驗室主張。本站與文中提及的任何實驗室、公司或競賽均無隸屬關係，亦未經其背書。'
              }
            },
            {
              chips: [{ t: { en: 'who it is for', zh: '給誰看' }, k: 'b' }],
              h: { en: 'Written for the next GEMS team, useful to anyone', zh: '為下一屆 GEMS 團隊而寫，但任何人都用得上' },
              p: {
                en: 'The last three chapters are explicitly for a student synthetic-biology team: which tools you can actually run, what they cost, what the competition rules allow, and which of the field\'s open problems a small patient group can genuinely contribute to. The first eight chapters stand on their own as a survey.',
                zh: '最後三章明確是為學生合成生物學團隊寫的：你實際跑得動哪些工具、代價多少、競賽規則允許什麼，以及這個領域的哪些未解問題是一個有耐心的小團隊真的能貢獻的。前八章本身就是一份獨立的綜述。'
              }
            }
          ], 'g3')
      });

      /* ---------- five things ---------- */
      out += h.sec({
        id: 'o-five',
        kick: { en: 'If you read nothing else', zh: '如果你只讀一節' },
        h2: { en: 'Six findings that change how you read the rest', zh: '六項會改變你閱讀其餘部分方式的發現' },
        lede: {
          en: 'Each links to the chapter that argues it in full.',
          zh: '每一項都連結到完整論證它的那一章。'
        },
        body:
          h.cards([
            {
              chips: [{ t: '1', k: 'b' }, { t: { en: 'Frontier', zh: '前沿' }, k: 'v' }],
              h: { en: 'Geometry is nearly solved. Energy, motion and selectivity are not.', zh: '幾何接近解決。能量、運動與選擇性沒有。' },
              p: {
                en: 'The field\'s own 2026 *Nature* review states that designing new protein structures, assemblies and binders is "close to being solved", and that the key questions there "are not *how* to design, but *what* to design." Everything still hard involves energy or motion: catalytic efficiency, affinity ranking, conformational ensembles, transport, epistasis.',
                zh: '這個領域自己 2026 年的《自然》綜述說，設計新的蛋白結構、組裝體與結合蛋白「接近被解決」，而那些領域的關鍵問題「不是*如何*設計，而是*設計什麼*」。仍然困難的一切都涉及能量或運動：催化效率、親和力排序、構型集合、轉運、上位效應。'
              },
              foot: { en: '→ [2026 Frontier](#frontier)', zh: '→ [2026 前沿](#frontier)' }
            },
            {
              chips: [{ t: '2', k: 'b' }, { t: { en: 'Bottlenecks', zh: '瓶頸' }, k: 'r' }],
              h: { en: 'The filters everyone uses measure 0.60–0.72 AUC against reality', zh: '大家都在用的篩選器，相對現實只有 0.60–0.72 AUC' },
              p: {
                en: 'In the only peer-reviewed, developer-independent test — 614 designs from 11 published studies — confidence metrics reached ROC AUC of only 0.60–0.72, combining them gave **no** improvement, and "many failed designs scored better on confidence metrics than successful ones". On binders, the reliability curve **inverts above 0.6**: designs predicted at 70–80% bound 28% of the time.',
                zh: '在唯一一次經同儕審查、且由開發者以外團隊執行的檢驗中——11 篇已發表研究的 614 個設計——信賴度指標的 ROC AUC 只有 0.60–0.72，把它們合併**沒有**改善，而且「許多失敗的設計在信賴度指標上的分數高於成功的設計」。在結合蛋白上，可靠度曲線在 **0.6 以上反轉**：被預測為 70–80% 的設計實際只有 28% 結合。'
              },
              foot: { en: '→ [Bottlenecks](#bottlenecks)', zh: '→ [瓶頸分析](#bottlenecks)' }
            },
            {
              chips: [{ t: '3', k: 'b' }, { t: { en: '2024–2026', zh: '逐年演進' }, k: 'v' }],
              h: { en: 'Compute stopped being the barrier. Testing is now the whole cost.', zh: '運算不再是障礙。測試現在是全部的成本。' },
              p: {
                en: 'A complete agentic binder campaign fell from roughly 2,500 GPU-hours (about $10,000) per target to about **$150 of compute in under a year** — while outsourced experimental testing runs **$150–250 per design** and synthetic DNA is **at least 80%** of characterisation cost. Compute for a whole campaign now costs about the same as testing one design.',
                zh: '一場完整的代理式結合蛋白活動，從每個標的約 2,500 個 GPU 小時（約 10,000 美元）降到**不到一年後約 150 美元的運算成本**——而委外實驗測試是**每個設計 150–250 美元**，合成 DNA 佔表徵成本**至少 80%**。整場活動的運算成本，現在大約等於測試一個設計。'
              },
              foot: { en: '→ [2024–2026](#years)', zh: '→ [逐年演進](#years)' }
            },
            {
              chips: [{ t: '4', k: 'b' }, { t: { en: 'Chronicle', zh: '編年史' }, k: 'g' }],
              h: { en: 'Deep learning is the fifth hinge, not the first', zh: '深度學習是第五個轉折，不是第一個' },
              p: {
                en: 'The popular account starts in 2021. The real sequence is: Anfinsen made design well-posed (1973), dead-end elimination made it computable (1992), Harbury made the backbone a variable (1998), Rosetta made prediction and design one problem (2003), Koga & Baker made it design for *foldability* (2012), cheap DNA made a 6% hit rate productive (2017) — and only then did a predictor become a generator (2020).',
                zh: '流行的敘事從 2021 年開始。真正的順序是：Anfinsen 讓設計成為定義明確的問題（1973）、死端消除法讓它可計算（1992）、Harbury 讓主鏈成為變數（1998）、Rosetta 讓預測與設計變成同一個問題（2003）、Koga 與 Baker 讓它改為為*可摺疊性*而設計（2012）、便宜的 DNA 讓 6% 命中率變得有生產力（2017）——然後才輪到預測器變成生成器（2020）。'
              },
              foot: { en: '→ [Chronicle](#chronicle)', zh: '→ [編年史](#chronicle)' }
            },
            {
              chips: [{ t: '5', k: 'b' }, { t: { en: 'Cases', zh: '案例' }, k: 'g' }],
              h: { en: 'The component that changed practice had 1.7 million parameters', zh: '真正改變實務的那個元件只有 170 萬參數' },
              p: {
                en: 'ProteinMPNN runs in about a second on a laptop and is the sequence-design step inside essentially every modern pipeline. Where Rosetta produced **zero** correct cyclic oligomers, it produced 27.7%; median soluble yield on hallucinated backbones went from 9 to 247 mg/L. The largest models produced the most quotable results; the smallest produced the most *used* ones.',
                zh: 'ProteinMPNN 在筆電上約一秒跑完，而它是幾乎每一條現代流程裡的序列設計步驟。在 Rosetta 做出**零**個正確環狀寡聚體的地方，它做出 27.7%；幻化主鏈上的可溶產量中位數從 9 mg/L 升到 247 mg/L。最大的模型產出最可引用的成果；最小的產出最被*使用*的成果。'
              },
              foot: { en: '→ [10 Case Studies](#cases)', zh: '→ [十個案例](#cases)' }
            },
            {
              chips: [{ t: '6', k: 'b' }, { t: { en: 'GEMS', zh: 'GEMS' }, k: 'a' }],
              h: { en: 'The most valuable gaps are the ones nobody is paid to fill', zh: '最有價值的缺口，是沒人領錢去填的那些' },
              p: {
                en: 'A decade of published de novo monomer design produced **614** openly characterised designs, because the record systematically omits failures. **65%** of failures are insolubility and aggregation, which no confidence metric measures. Laboratories get no credit for testing whether their own filters work. All three are gaps a patient club can close better than a funded laboratory can.',
                zh: '十年的從頭單體設計文獻，總共只產出 **614** 個公開表徵的設計，因為紀錄系統性地遺漏失敗。失敗中有 **65%** 是不溶與聚集，而沒有任何信賴度指標在量測它。實驗室檢驗「自己的篩選器有沒有用」得不到任何功勞。這三個缺口，一個有耐心的社團都能比一個有補助的實驗室填得更好。'
              },
              foot: { en: '→ [GEMS Pathways](#gems)', zh: '→ [GEMS 路徑](#gems)' }
            }
          ], 'g3')
      });

      /* ---------- the problem, visually ---------- */
      out += h.sec({
        id: 'o-problem',
        kick: { en: 'The problem', zh: '問題本身' },
        h2: { en: 'Why this is hard, in one figure', zh: '一張圖說明這為什麼難' },
        lede: {
          en: 'Protein design is the inverse of protein folding, and the inverse is harder for a reason that has nothing to do with computers.',
          zh: '蛋白質設計是蛋白質摺疊的反問題，而反問題更難，原因跟電腦毫無關係。'
        },
        body:
          h.bio('invDogma', {
            title: { en: 'Folding and its inverse', zh: '摺疊與它的反問題' },
            sub: {
              en: 'Prediction asks what shape a sequence takes. Design asks which sequence takes a shape — or does a job. No search algorithm will ever cover 10¹³⁰, so the model has to put you in the right neighbourhood before searching starts.',
              zh: '預測問的是一條序列會變成什麼形狀。設計問的是哪條序列會變成某個形狀——或完成某項工作。沒有任何搜尋演算法能覆蓋 10¹³⁰，所以模型必須在搜尋開始之前，先把你放進正確的鄰域。'
            },
            caption: {
              en: 'Anfinsen, *Science* 181:223 (1973); sequence-space framing after Huang, Boyken & Baker, *Nature* 537:320 (2016).',
              zh: 'Anfinsen, *Science* 181:223 (1973)；序列空間的框架依 Huang, Boyken & Baker, *Nature* 537:320 (2016)。'
            }
          }) +
          h.bio('foldGallery', {
            title: { en: 'What de novo design has actually produced, by era', zh: '從頭設計實際造出了什麼，依時代' },
            sub: { en: 'Topology cartoons of six classes of designed protein, with the year each class was first published. Thirty years of increasing ambition, from a bundle of helices to a virus-scale shell.', zh: '六類設計蛋白的拓樸示意圖，附各類首次發表的年份。三十年野心遞增的歷程，從一束螺旋到病毒尺度的外殼。' },
            caption: { en: 'Schematic topologies, not structures to scale. Full citations on the Chronicle page.', zh: '示意性拓樸，非等比例結構。完整出處見「編年史」頁。' }
          })
      });

      /* ---------- chapter index ---------- */
      var chapters = [
        { id: 'chronicle', n: '01', t: { en: 'Chronicle 1951–2026', zh: '編年史 1951–2026' }, d: { en: 'Six eras on one spine, with the seven moments where the kind of problem being solved actually changed — and nine things the popular account gets wrong.', zh: '六個時代放在同一條主軸上，標出「所解決問題的種類」真正改變的七個時刻——以及流行敘事講錯的九件事。' } },
        { id: 'years', n: '02', t: { en: '2024–2026, year by year', zh: '2024–2026 逐年演進' }, d: { en: 'High resolution on the last three years: architecture unified and a Nobel Prize, then catalysis cracked, then the field audited its own instruments.', zh: '對最近三年的高解析度切片：架構統一加一座諾貝爾獎，接著催化被攻破，然後這個領域稽核了自己的儀器。' } },
        { id: 'frontier', n: '03', t: { en: '2026 Frontier & state of the art', zh: '2026 前沿與技術現狀' }, d: { en: 'Fifteen capability axes, each with what is routine, what is frontier, what is unsolved — plus eleven things people believe that are no longer true.', zh: '十五條能力軸，每一條標明什麼已常規、什麼是前沿、什麼未解——外加十一件人們仍相信但已不成立的事。' } },
        { id: 'cases', n: '04', t: { en: 'Ten case studies', zh: '十個關鍵案例' }, d: { en: 'Eleven tools and the landmark result each is remembered for, with the real numbers, the honest caveat and the licence.', zh: '十一個工具，以及每一個被記住的那項里程碑成果，附真實數字、誠實的保留與授權條款。' } },
        { id: 'bottlenecks', n: '05', t: { en: 'Bottleneck analysis', zh: '瓶頸分析' }, d: { en: 'Ten bottlenecks with quantitative evidence, and the one that is a multiplier on all the others. Plus three a small team can genuinely attack.', zh: '十個附量化證據的瓶頸，以及作為其他所有瓶頸乘數的那一個。另附小團隊真正能攻的三個。' } },
        { id: 'future', n: '06', t: { en: '2027–2031 forecast', zh: '2027–2031 趨勢預測' }, d: { en: 'Fourteen falsifiable predictions, each with its basis, its leading indicator and what would prove it wrong — and ten things that will not happen.', zh: '十四條可否證的預測，每條附依據、先行指標與否證條件——以及十件不會發生的事。' } },
        { id: 'gems', n: '07', t: { en: 'GEMS pathways', zh: 'GEMS 應用路徑' }, d: { en: 'Four Science for Good tracks, eleven iGEM 2027 concepts scored for feasibility, the compounding assets, and an unflinching list of what a student team cannot do.', zh: '四條科學向善軌道、十一個經可行性評分的 iGEM 2027 概念、可複利累積的資產，以及一份毫不迴避的「學生團隊做不到什麼」清單。' } },
        { id: 'toolbox', n: '08', t: { en: 'Toolbox', zh: '工具地圖' }, d: { en: 'Which tool answers which question, with access route, compute requirement, licence and cost — and a minimum viable stack that runs on a free Colab tier.', zh: '哪個工具回答哪個問題，附取用途徑、運算需求、授權與成本——以及一套在免費 Colab 層就能跑的最小可行堆疊。' } },
        { id: 'glossary', n: '09', t: { en: 'Metrics & terms', zh: '指標與術語' }, d: { en: 'What pLDDT, ipTM, scRMSD and k_cat/K_M actually measure, the trap attached to each, a nine-question reading checklist and a bilingual glossary.', zh: 'pLDDT、ipTM、scRMSD 與 k_cat/K_M 實際量的是什麼、各自的陷阱，一份九問檢查表，以及中英對照術語表。' } },
        { id: 'refs', n: '10', t: { en: 'References', zh: '參考資料' }, d: { en: 'All 434 sources, grouped by chapter and filterable — plus a plain statement of how this report was assembled and where it is weak.', zh: '全部 434 筆出處，依章節分組並可篩選——另附本報告如何彙編、以及弱在哪裡的直白說明。' } }
      ];
      out += h.sec({
        id: 'o-chapters',
        kick: { en: 'Contents', zh: '目錄' },
        h2: { en: 'Ten more chapters', zh: '另外十章' },
        body: '<div class="g2">' + chapters.map(function (c) {
          return '<a class="card lift" href="#' + c.id + '" style="display:block;text-decoration:none">' +
            '<div class="casehead" style="margin-bottom:4px"><span class="chip b">' + c.n + '</span>' +
            '<h4 style="margin:0;font-size:17px;flex:1;min-width:0">' + h.md(c.t) + '</h4></div>' +
            '<p>' + h.md(c.d) + '</p></a>';
        }).join('') + '</div>'
      });

      /* ---------- the honest note ---------- */
      out += h.sec({
        id: 'o-honest',
        kick: { en: 'Before you quote anything from this site', zh: '在引用本站任何內容之前' },
        h2: { en: 'How to read the numbers here', zh: '怎麼讀這裡的數字' },
        body:
          h.take({ en: 'The one rule', zh: '唯一的規則' }, {
            en: 'Almost every headline hit rate in this field is **self-reported by the method\'s developer, on targets they chose, from designs they pre-filtered, scored by metrics whose wet-lab correlation measures around 0.60–0.76 AUC.** Read every capability number on this site as an **upper bound**. Where a number comes from a company report rather than a peer-reviewed paper or an independent benchmark, this report says so in the same sentence.',
            zh: '這個領域幾乎每一個招牌命中率，都是**方法開發者在自選標的上、用自己預篩過的設計、以實驗相關性約 0.60–0.76 AUC 的指標評分後的自我報告。** 請把本站每一個能力數字都讀成**上界**。凡數字來自公司報告、而非同儕審查論文或獨立基準測試者，本報告都會在同一句話裡說明。'
          }) +
          h.ul([
            { en: '**A success rate without its denominator is not a success rate.** Ask how many designs were generated before the ones that were ordered. A 40% hit rate after filtering 10,000 backbones down to 20 is a 0.08% hit rate; both numbers are true and only one is honest.', zh: '**沒有分母的成功率不算成功率。** 要問在「被訂購的那些」之前總共生成了幾個設計。把一萬條主鏈篩到二十條之後的 40% 命中率，其實是 0.08%；兩個數字都成立，但只有一個誠實。' },
            { en: '**Geometry and energetics are different claims.** Predicting where a ligand sits is now routine; predicting how tightly it binds is not. Conflating the two is the most common error in 2026 drug-discovery coverage.', zh: '**幾何與能量學是兩個不同的主張。** 預測配體坐在哪裡現在已是常規；預測它結合得多緊則不是。把兩者混為一談，是 2026 年藥物發現報導中最常見的錯誤。' },
            { en: '**The spread across targets exceeds the spread across methods.** Published per-target hit rates range from 2% to 88% within single studies. A single-number hit rate hides the finding.', zh: '**跨標的的差異大於跨方法的差異。** 已發表的逐標的命中率，在單一研究內就從 2% 到 88%。用單一數字報命中率，會把真正的發現藏起來。' },
            { en: '**As of 20 November 2026, CASP17 results are not public.** Its four new categories cover exactly the axes this report identifies as weakest, so several claims here should be re-checked against them. Anything you read now about CASP17 outcomes is unsourced.', zh: '**截至 2026 年 11 月 20 日，CASP17 結果尚未公開。** 它的四個新類別正好涵蓋本報告指出最弱的那幾軸，因此此處有幾項主張應在結果出來後重新核對。你現在讀到的任何關於 CASP17 結果的說法都沒有來源。' }
          ]) +
          h.note({
            en: 'Switch language with the EN / 中文 toggle in the header; the choice is remembered. Every figure has a table view for the underlying numbers, and the structure viewers load coordinates live from the RCSB Protein Data Bank — drag to rotate, scroll to zoom. The full method statement, including where this report is weak, is on the [References](#refs) page.',
            zh: '用頁首的 EN／中文 切換語言，選擇會被記住。每張圖都有表格檢視可看底層數字，而結構檢視器會直接從 RCSB 蛋白質資料庫即時載入座標——拖曳可旋轉、滾動可縮放。完整的方法說明（包括本報告弱在哪裡）在[參考資料](#refs)頁。'
          })
      });

      return out;
    }
  };
})(window);
