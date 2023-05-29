import React from "react";
import SignatureCanvas from 'react-signature-canvas'
import { useState } from "react";

const Signature=()=>{
    const [sign,setSign]=useState('')
    const [signatureImage, setSignatureImage] = useState('');
    const saveCanvasAsImage=()=>{
        if (sign) {
            const canvasData = sign.toDataURL();
            const link = document.createElement('a');
            link.href = canvasData;
            link.download = 'signature.png'; // Specify the desired file name
            // Programmatically click the anchor element to trigger the download
            link.click();            
            setSignatureImage(canvasData);
          }
    }
    return(
        <div style={{height:'500px',width:'500px',border:'2px solid black',marginLeft:'500px',marginTop:'200px'}}>
            <SignatureCanvas ref={data =>setSign(data)} 
            canvasProps={{ width: '500px', height: '500px' }} />
            <button onClick={saveCanvasAsImage}>Save</button>
            {signatureImage && (
        <div>
          <h2>Signature Preview:</h2>
          <img src={signatureImage} alt="Signature" style={{ maxWidth: '300px' }} />
        </div>
      )}
        </div>
    )
}
export default Signature