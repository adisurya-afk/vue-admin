export function getExport(data, month, year) {
  const monthName = ['Januari', 'Februari', 'Maret', 'April', 'May', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember']
  const pdf = `
  <html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    <style type="text/css">
      ol {
        margin: 0;
        padding: 0;
      }
      table td,
      table th {
        padding: 0;
      }
      .c1 {
        border-right-style: solid;
        padding: 5pt 5pt 5pt 5pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 150.5pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c5 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 12pt;
        font-family: "Arial";
        font-style: normal;
      }
      .c6 {
        color: #000000;
        font-weight: 700;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 16pt;
        font-family: "Arial";
        font-style: normal;
      }
      .c3 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.15;
        orphans: 2;
        widows: 2;
        text-align: left;
        height: 11pt;
      }
      .c2 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.15;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c8 {
        border-spacing: 0;
        border-collapse: collapse;
        margin-right: auto;
      }
      .c0 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        text-align: center;
      }
      .c7 {
        background-color: #ffffff;
        max-width: 451.4pt;
        padding: 72pt 72pt 72pt 72pt;
      }
      .c4 {
        height: 0pt;
      }
      .title {
        padding-top: 0pt;
        color: #000000;
        font-size: 26pt;
        padding-bottom: 3pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .subtitle {
        padding-top: 0pt;
        color: #666666;
        font-size: 15pt;
        padding-bottom: 16pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      li {
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }
      p {
        margin: 0;
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }
      h1 {
        padding-top: 20pt;
        color: #000000;
        font-size: 20pt;
        padding-bottom: 6pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h2 {
        padding-top: 18pt;
        color: #000000;
        font-size: 16pt;
        padding-bottom: 6pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h3 {
        padding-top: 16pt;
        color: #434343;
        font-size: 14pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h4 {
        padding-top: 14pt;
        color: #666666;
        font-size: 12pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h5 {
        padding-top: 12pt;
        color: #666666;
        font-size: 11pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h6 {
        padding-top: 12pt;
        color: #666666;
        font-size: 11pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        font-style: italic;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
    </style>
  </head>
  <body class="c7 doc-content">
    <p class="c2"><span class="c6">LAPORAN TRANSAKSI</span></p>
    <p class="c2"><span class="c6">BULANAN</span></p>
    <p class="c2"><span class="c6">PT BINTANG SIDORAYA DEPO RENON</span></p>
    <p class="c2"><span class="c5">${monthName[parseInt(month) - 1]} ${year}</span></p>
    <p class="c3"><span class="c5"></span></p>
    <p class="c3"><span class="c5"></span></p>
    <a id="t.fdc771156dd0c580043b720629aa74e7807ea26c"></a><a id="t.0"></a>
    <table class="c8">
      <tr class="c4">
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">Nama Item</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">STOCK Awal</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">IN</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">OUT</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">STOCK Akhir</span></p>
        </td>
      </tr>
      ${data}
    </table>
    <p class="c3"><span class="c5"></span></p>
  </body>
</html>
  `
  return pdf
}
