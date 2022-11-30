import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

function Pdfview(props) {
  return (
<PDFViewer
            document={{
                url: props.url,
            }}
        />
  )
}

export default Pdfview