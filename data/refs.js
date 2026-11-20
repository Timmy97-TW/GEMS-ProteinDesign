(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.refs = {
    label: { en: 'References', zh: '參考資料' },
    title: { en: 'References', zh: '參考資料' },
    render: function (h) {
      var R = PD.refs || [];
      var total = R.reduce(function (a, g) { return a + g.items.length; }, 0);
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Sources', zh: '出處' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: '==' + total + '== sources, grouped by chapter.',
          zh: '==' + total + '== 筆出處，依章節分組。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Every date, number and claim on this site should be traceable to something here. Where a figure could not be verified against a primary source during research, the entry or the figure caption says so — those markings have been preserved rather than tidied away. Use the filter to find a specific paper, author or year.',
          zh: '本站的每一個日期、數字與主張，都應該能追溯到這裡的某一筆。凡研究期間無法對照一手來源核實的數字，條目或圖說都會明說——那些標註被保留下來，而不是被整理掉。用篩選框可以找特定論文、作者或年份。'
        }) + '</p>' +
        '<div class="herometa">' +
        '<input type="search" data-reffilter="1" placeholder="' +
        h.esc(h.T({ en: 'Filter by author, title, journal or year…', zh: '依作者、標題、期刊或年份篩選…' })) +
        '" style="font:inherit;font-size:15px;padding:10px 15px;border-radius:999px;border:1px solid var(--line);' +
        'background:var(--card);min-width:min(420px,100%);box-shadow:var(--shadow)" aria-label="' +
        h.esc(h.T({ en: 'Filter references', zh: '篩選參考資料' })) + '">' +
        '<span class="chip b" data-refcount="1">' + total + ' / ' + total + '</span>' +
        '</div>' +
        '</div></div>';

      out += h.toc(R.map(function (g, i) {
        return { id: 'r-' + i, t: g.h };
      }).concat([{ id: 'r-method', t: { en: 'Method & limits', zh: '方法與限制' } }]));

      /* ---------- method note ---------- */
      out += h.sec({
        id: 'r-method',
        kick: { en: 'Method and limits', zh: '方法與限制' },
        h2: { en: 'How this report was assembled, and where it is weak', zh: '這份報告是怎麼做出來的，以及它弱在哪裡' },
        lede: {
          en: 'Stating the method is part of the argument this report makes about the field: a number without its provenance is not a number.',
          zh: '把方法講清楚，本身就是本報告對這個領域所提論點的一部分：一個沒有來源的數字不算數字。'
        },
        body:
          h.p(
            { en: 'The literature was surveyed in eight parallel streams — pre-2021 history, 2021–2023, 2024, 2025, 2026 and the current state of the art, case studies, bottlenecks and forecast, and competition-relevant application — each verifying its own dates, authors, journals and numbers against primary sources. Bibliographic metadata came from PubMed, Europe PMC, the bioRxiv API, Crossref, Semantic Scholar and the RCSB Search API; rules claims came from the 2026 iGEM Judge Handbook PDF rather than the competition website, which renders client-side. The 2025 Protein Data Bank entry count on the Chronicle page was computed directly from the RCSB Search API rather than quoted.', zh: '文獻以八條並行路線進行調查——2021 年前的歷史、2021–2023、2024、2025、2026 與技術現狀、案例研究、瓶頸與預測，以及與競賽相關的應用——每一條都自行對照一手來源核實日期、作者、期刊與數字。書目資料來自 PubMed、Europe PMC、bioRxiv API、Crossref、Semantic Scholar 與 RCSB Search API；規則方面的主張取自 2026 年 iGEM 評審手冊 PDF，而非採用客戶端渲染的競賽網站。編年史頁上 2025 年的蛋白質資料庫條目數，是直接透過 RCSB Search API 計算所得，而非引用。' },
            { en: '**Where this report is weak, stated plainly.** Several major 2026 papers sit behind authentication gates, so their abstracts were recovered through PubMed and Europe PMC rather than read in full — the quantitative claims drawn from them are abstract-level. A handful of figures exist only in secondary coverage and are marked unverified in the text; the most consequential of these is noted on the Case Studies page, where a widely quoted benchmark percentage is deliberately *not* given as a single number because three different values circulate. Company founding dates and several commercial licence terms could not be confirmed against official pages and are marked accordingly. Press and company claims are labelled as such throughout, and are never treated as equivalent to peer-reviewed or independently benchmarked results.', zh: '**本報告弱在哪裡，直說。** 2026 年有數篇重要論文在驗證門之後，因此其摘要是透過 PubMed 與 Europe PMC 取得，而非全文閱讀——由它們得出的量化主張僅達摘要層級。少數數字只存在於二手報導，文中已標為未核實；其中最有後果的一項記在「案例研究」頁，那裡有一個被廣泛引用的基準百分比，我們刻意*不*以單一數字呈現，因為有三個不同的數值在流傳。公司成立日期與數項商業授權條款無法對照官方頁面確認，亦已標註。媒體與公司宣稱全文皆明確標示，且從不被當成與同儕審查或獨立基準測試的結果等價。' },
            { en: '**Link checking.** Every link on this page was machine-checked before publication: DOIs against the Crossref API, other URLs over HTTP. Two entries whose DOIs the extraction had truncated were repaired by hand, and one preprint whose DOI does not resolve is marked in place rather than linked to a dead address. Separately, the competition-rules claims in the GEMS chapter were checked word for word against the 2026 iGEM Judge Handbook PDF, and the 2026 Jamboree dates against iGEM\'s own published calendar. The 2027 Jamboree dates used in that chapter (18–21 October 2027, Paris Convention Centre) were supplied by the GEMS team and had not yet appeared on iGEM\'s public calendar when this page was compiled; they are flagged as such in place.', zh: '**連結檢查。** 本頁每一個連結在發布前都經過機器檢查：DOI 對照 Crossref API，其餘網址以 HTTP 檢查。兩筆被擷取程序截斷的 DOI 已人工修復；另有一篇 DOI 無法解析的預印本，我們在原處標註，而不是連到一個失效的位址。此外，GEMS 一章中關於競賽規則的主張，已逐字對照 2026 年 iGEM 評審手冊 PDF 核實，2026 年大會日期則對照 iGEM 自己公布的行事曆。該章使用的 2027 年大會日期（2027 年 10 月 18–21 日，巴黎會議中心）由 GEMS 團隊提供，本頁彙編時尚未出現在 iGEM 的公開行事曆上；該處已就此標註。' },
            { en: '**On the dates.** This page was compiled on **20 November 2026**. CASP17 results were not public at that time, and its four new assessment categories — immune complexes, conformational ensembles, organic ligand–protein complexes, and self-assessment of accuracy — cover exactly the capability axes this report identifies as weakest. Several claims here should be re-checked against those results.', zh: '**關於日期。** 本頁彙編於 **2026 年 11 月 20 日**。當時 CASP17 的結果尚未公開，而它的四個新評估類別——免疫複合體、構型集合、有機配體—蛋白複合體，以及準確度自評——正好涵蓋本報告指出最弱的那幾條能力軸。此處有幾項主張應該在那些結果出來後重新核對。' },
            { en: '**On authorship.** This is a literature review and technology-trend analysis compiled by GEMS Research. It reports no new biological result and describes no new protein. Where this report makes a judgement rather than reporting a measurement — the maturity scores on the Frontier page, the severity scores on the Bottlenecks page, the feasibility scores on the GEMS page — the criteria are stated alongside so that the judgement can be disagreed with precisely.', zh: '**關於作者。** 這是 GEMS Research 彙編的文獻回顧與技術趨勢分析。它不提出任何新的生物學結果，也不描述任何新設計的蛋白質。凡本報告是在做判斷、而不是在報告量測——前沿頁的成熟度評分、瓶頸頁的嚴重度評分、GEMS 頁的可行性評分——都會把判準一併寫出，以便讀者能精確地不同意。' }
          )
      });

      /* ---------- reference groups ---------- */
      R.forEach(function (g, i) {
        var list = '<div class="scrollx" style="padding:4px 0"><ol style="margin:0;padding:14px 22px 14px 40px;font-size:14px;line-height:1.6;color:var(--ink2)">' +
          g.items.map(function (it) {
            return '<li data-refitem="1" style="margin:0 0 9px">' + h.md(it.t) +
              (it.u ? ' <a href="' + it.u + '" target="_blank" rel="noopener" style="font-size:12.6px;white-space:nowrap">↗ ' +
                h.esc(it.u.replace(/^https?:\/\/(doi\.org\/)?/, '').slice(0, 42)) + '</a>' : '') +
              '</li>';
          }).join('') + '</ol></div>';
        out += h.sec({
          id: 'r-' + i,
          kick: { en: g.items.length + ' sources', zh: g.items.length + ' 筆' },
          h2: g.h,
          body: list
        });
      });

      return out;
    }
  };
})(window);
