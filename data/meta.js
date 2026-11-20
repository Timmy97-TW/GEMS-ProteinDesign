/* site metadata, tab order, footer */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  PD.meta = {
    siteTitle: { en: 'Protein Design Atlas', zh: '蛋白質設計圖譜' },
    updated: '2026-11-20',
    repo: 'https://github.com/Timmy97-TW/GEMS-ProteinDesign',
    tabs: [
      { id: 'overview',    label: { en: 'Overview',        zh: '總覽' } },
      { id: 'chronicle',   label: { en: 'Chronicle',       zh: '編年史' } },
      { id: 'years',       label: { en: '2024–2026',       zh: '逐年演進' } },
      { id: 'frontier',    label: { en: '2026 Frontier',   zh: '2026 前沿' } },
      { id: 'cases',       label: { en: '10 Case Studies', zh: '十個案例' } },
      { id: 'bottlenecks', label: { en: 'Bottlenecks',     zh: '瓶頸分析' } },
      { id: 'future',      label: { en: '2027–2031',       zh: '未來趨勢' } },
      { id: 'gems',        label: { en: 'GEMS Pathways',   zh: 'GEMS 路徑' } },
      { id: 'toolbox',     label: { en: 'Toolbox',         zh: '工具地圖' } },
      { id: 'glossary',    label: { en: 'Metrics & Terms', zh: '指標與術語' } },
      { id: 'refs',        label: { en: 'References',      zh: '參考資料' } }
    ],
    footer: {
      links: [
        { t: { en: 'GitHub repository', zh: 'GitHub 原始碼' }, u: 'https://github.com/Timmy97-TW/GEMS-ProteinDesign' },
        { t: { en: 'GEMS 2026 iGEM Report', zh: 'GEMS 2026 iGEM 報告' }, u: 'https://timmy97-tw.github.io/2026GEMSReport/' },
        { t: { en: 'RCSB Protein Data Bank', zh: 'RCSB 蛋白質資料庫' }, u: 'https://www.rcsb.org/' },
        { t: { en: 'AlphaFold DB', zh: 'AlphaFold 資料庫' }, u: 'https://alphafold.ebi.ac.uk/' },
        { t: { en: 'iGEM', zh: 'iGEM 官網' }, u: 'https://igem.org/' }
      ],
      note: {
        en: 'A literature review and technology-trend analysis compiled by **GEMS Research (Taiwan)**. This site reports no new biological result and describes no new protein: everything here is secondary analysis of published work, assembled so that a student team can orient itself in a field that moves faster than its textbooks. Dates, numbers and claims are sourced on the References tab; where a figure could not be verified against a primary source it is marked as such. Not affiliated with, or endorsed by, any laboratory, company or competition named here.',
        zh: '本站為 **GEMS Research（台灣）** 彙編的文獻回顧與技術趨勢分析。這裡不提出任何新的生物學結果，也不描述任何新設計的蛋白質：全部內容都是對已發表研究的二次分析，目的是讓一支學生團隊能在一個比教科書更新得更快的領域裡找到方位。日期、數字與主張的出處列於「參考資料」頁；凡無法對照到一手文獻的數字都會明確標註。本站與文中提及的任何實驗室、公司或競賽均無隸屬關係，亦未經其背書。'
      }
    }
  };
})(window);
