import { useEffect, useState } from 'react';
import pdf from '../../assets/cv.pdf';
import './Resume.css';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className='resume'>
      <Document file={pdf} className="resume__container">
        <button className='resume__button'>
          <a><AiOutlineDownload />&nbsp;Download CV</a>
        </button>
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        <button className='resume__button'>
          <a><AiOutlineDownload />&nbsp;Download CV</a>
        </button>
      </Document>
    </section>
  );
}

export default Resume;
