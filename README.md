**Subir imagenes a imbBB**
Esta simple app en React permite subir imagenes a https://imgbb.com/
Genera tu ApiKey y segui las indicaciones en: https://api.imgbb.com/

Utiliza la Api para subir tus imagenes:
    `https://api.imgbb.com/1/upload?key=${apiKey}&name=${imageFile.name}`

Como usar:
 

 1. apiKey Generada en https://imgbb.com/
 2. imageFile(name): se obtiene del evento (`e.target.files[0]`) del input type='file'
 3. Crear un FormData  `const  data  =  new  FormData()`
 4. Append `data.append("image", imageFile)` **IMPORTANTE! el campo debe ser "image" ya que es lo que necesita imgBB.**
 5. Realiza tu fetch `const  res  =  await  fetch(url,{method:"POST", body:data})`
 6. La respuesta es un JSON, utilizar `resData.data.url` para obtener la url de la imagen subida