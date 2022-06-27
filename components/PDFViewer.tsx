import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface Props {
  file: any;
  className?: string;
}

const PDFViewer: React.FC<Props> = ({ file, className }) => {
  const [numPages, setNumPages] = useState<number>(0);
  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    document
      .getElementById("react-pdf__Page__canvas")
      ?.style.setProperty("display", "flex", "important");
    setNumPages(nextNumPages);
  }

  return (
    <div className={`flex ${className}`}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="flex w-full"
            style={{ display: "flex" }}
          />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
