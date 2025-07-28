import { useState } from "react"
import { apiImgBB } from "../../Apikeys/Apis"

export const UploadImg = () => {
    const apiKey = apiImgBB
    const [image, setImage] = useState('')

    const upload = async (e) => {
        const imageFile = e.target.files[0]

        if (!imageFile){
            console.log("no hay imagen")
            return
        }

        const url = `https://api.imgbb.com/1/upload?key=${apiKey}&name=${imageFile.name}`
        const data = new FormData()
        data.append("image", imageFile)
        try {
            const res = await fetch(url,{method:"POST", body:data})
            const resData = await res.json()
            setImage(resData.data.url)
            console.log(resData.data.url)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form action="">
                <input type="file" name="foto" id="foto" onChange={upload}/>
                <button type="submit">Click Aca</button>
            </form>
            <img src={image} alt="" />
        </>
    )
}

//https://imgbb.com/