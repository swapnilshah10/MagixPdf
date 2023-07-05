import React, { useState, useEffect } from 'react';
import PDFJS from 'pdfjs-dist/web/pdf_viewer';

const PreviewPDF = ({ file }) => {
  const [pdf, setPdf] = useState(null);
  console.log(file , PDFJS);

  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await PDFJS.getDocument(file).promise;
      setPdf(pdf);
    };
    loadPdf();
  }, [file]);

  const renderPdf = () => {
    if (!pdf) {
      return <div>Loading...</div>;
    }

    return (
      <PDFJS.PDFViewer width="100%" height="800px">
        <PDFJS.PDFPage page={pdf} />
      </PDFJS.PDFViewer>
    );
  };

  return (
    <div>
      {renderPdf()}
    </div>
  );
};

export default PreviewPDF;
