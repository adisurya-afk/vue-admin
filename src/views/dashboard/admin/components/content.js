export function getExport(years, dataIn, dataOut) {
  const pdf = `<html>
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
            .c3 {
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
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: left;
                height: 11pt;
            }
            .c6 {
                color: #000000;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 12pt;
                font-family: "Times New Roman";
                font-style: normal;
            }
            .c11 {
                color: #000000;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 18pt;
                font-family: "Times New Roman";
                font-style: normal;
            }
            .c1 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 12pt;
                font-family: "Times New Roman";
                font-style: normal;
            }
            .c8 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: center;
            }
            .c10 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: left;
            }
            .c0 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1;
                text-align: left;
            }
            .c9 {
                border-spacing: 0;
                border-collapse: collapse;
                margin-right: auto;
            }
            .c2 {
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
            <p class="c8"><span class="c11">REPORT</span></p>
            <p class="c8"><span class="c6">Periode Tahun ${years}</span></p>
            <p class="c5"><span class="c6"></span></p>
            <p class="c10">
            <span class="c1"
                >Laporan keluar masuk item PT BINTANG SIDORAYA pada tahun ${years} sebagai
                berikut :</span
            >
            </p>
            <p class="c5"><span class="c6"></span></p>
            <a id="t.53f59fdbbaf3e2f3dafb63f419c8713bf2b472ef"></a><a id="t.0"></a>
            <table class="c9">
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Bulan (${years})</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Masuk</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Keluar</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Januari</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[0]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[0]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Februari</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[1]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[1]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Maret</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[2]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[2]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">April</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[3]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[3]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Mei</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[4]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[4]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Juni</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[5]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[5]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Juli</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[6]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[6]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Agustus</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[7]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[7]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">September</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[8]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[8]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Oktober</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[9]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[9]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">November</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[10]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[10]}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c3" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Desember</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataIn[11]}</span></p>
                </td>
                <td class="c3" colspan="1" rowspan="1">
                <p class="c2"><span class="c1">${dataOut[11]}</span></p>
                </td>
            </tr>
            </table>
            <p class="c5"><span class="c6"></span></p>
            <p class="c5"><span class="c6"></span></p>
            <p class="c5"><span class="c6"></span></p>
            <p class="c5"><span class="c6"></span></p>
            <p class="c5"><span class="c6"></span></p>
        </body>
        </html>`
  return pdf
}
