import React,{useRef} from "react";
import BarChart from "../Components/BarChart.jsx";
import {useLocation} from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const OrderReport = () => {
    const contentRef = useRef(null);
    const location = useLocation();
    const chartData = location.state;

    const generatePDF = () => {

        const content = contentRef.current;

        html2canvas(content)
            .then((canvas) => {
               const imgData = canvas.toDataURL('image/png');
               const pdf = new jsPDF('p','mm','a4',true);
               const pdfWidth = pdf.internal.pageSize.getWidth();
               const pdfHeight = pdf.internal.pageSize.getHeight();
               const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
               pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth *ratio,imgHeight * ratio);
               pdf.save("document.pdf")
            })
    }

    return(
        <>
            <div className='text-center h2 p-4'>Order report</div>

            <div className='p-4' style={{
                width: '74vw',
                height: '72vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} ref={contentRef}>


                <BarChart chartData={chartData}/>

            </div>
            <div>
                <button className='btn btn-success' onClick={generatePDF}>download pdf</button>
            </div>
        </>
    )
}

export default OrderReport;