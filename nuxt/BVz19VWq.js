const i=(e,d="document")=>{const r=`
    <!DOCTYPE html>
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <!--[if gte mso 9]><xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml><![endif]-->
      <style>
        @page {
          size: A4;
          margin: 2cm 2.5cm;
        }
        body {
          font-family: 'Calibri', 'Arial', sans-serif;
          font-size: 11pt;
          line-height: 1.5;
          color: #333;
        }
        h1 { font-size: 24pt; margin-bottom: 12pt; border-bottom: 1pt solid #228be6; padding-bottom: 4pt; }
        h2 { font-size: 18pt; margin-bottom: 10pt; border-bottom: 1pt solid #ddd; padding-bottom: 3pt; }
        h3 { font-size: 14pt; margin-bottom: 8pt; }
        h4 { font-size: 12pt; margin-bottom: 6pt; }
        h5, h6 { font-size: 11pt; margin-bottom: 4pt; }
        p { margin: 6pt 0; }
        ul, ol { margin: 6pt 0; padding-left: 20pt; }
        blockquote {
          margin: 8pt 0;
          padding: 6pt 12pt;
          border-left: 4pt solid #228be6;
          background: #f8f9fa;
        }
        code {
          font-family: 'Consolas', 'Courier New', monospace;
          background: #f4f4f5;
          padding: 1pt 3pt;
          border-radius: 2pt;
        }
        pre {
          background: #f4f4f5;
          padding: 8pt;
          border-radius: 4pt;
          overflow-x: auto;
          border: 1px solid #dee2e6;
        }
        pre code {
          background: none;
          padding: 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 8pt 0;
        }
        th, td {
          padding: 4pt 6pt;
          border: 1px solid #dee2e6;
        }
        th {
          background: #f8f9fa;
          font-weight: bold;
        }
        hr { border: none; border-top: 1px solid #dee2e6; margin: 12pt 0; }
        img { max-width: 100%; }
        a { color: #228be6; }
      </style>
    </head>
    <body>
      ${e}
    </body>
    </html>
  `.trim(),n=new Blob(["\uFEFF"+r],{type:"application/msword;charset=utf-8"}),t=URL.createObjectURL(n),o=document.createElement("a");o.href=t,o.download=`${d}.doc`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)};export{i as exportToWord};
