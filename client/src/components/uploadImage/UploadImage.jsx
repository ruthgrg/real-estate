import {useEffect, useRef, useState} from "react"
import {AiOutlineCloudUpload} from "react-icons/ai"
import "./uploadImage.css"

const UploadImage = ({propertyDetails, setPropertyDetails, nextStep, prevStep}) => {
  
    const [imageUrl, setImageUrl] = useState(propertyDetails.image);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dg6cjp9kr",
            uploadPreset: "tbeqjwug",
            maxFile:1
        },
        (err, result) => {
            if(result.event === "success") {
                setImageUrl(result.info.secure_url);
            }
        }
        );

    },[]);

    return (
    <div className='flexColCenter uploadWrapper'>
        {
            !imageUrl ? (
                <div className='flexColCenter uploadZone' onClick={() => widgetRef.current?.open()}>
                    <AiOutlineCloudUpload size={50} color="gray"/>
                    <span>Upload Image</span>
                </div>
            ) 
            : 
            (
                <div className='uploadedImage' onClick={() => widgetRef.current?.open()}>
                    <img src={imageUrl} alt=''/>
                </div>
            )
        }
    </div>
  )
}

export default UploadImage