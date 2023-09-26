import React, { useEffect,useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AutoImage } from '@ckeditor/ckeditor5-image';
import axios from 'axios';
import "../../../styles/product.css"; 

function Editor({ editorData, onChange,setDesc,desc,setImage}){

  const [flag,setFlag] = useState(false);
  const imgLink = "http://localhost:3000/images/"

  function customUploadAdapter(loader){
    return{
      upload(){
        return new Promise ((resolve,reject)=>{
          const data = new FormData();
          loader.file.then((file)=>{
            data.append("objectName",file.name);
            data.append("file",file);
            console.log(file)
            axios.post('http://localhost:8081/product/img',data)
              .then((res)=>{
                console.log(res.data);
                if(!flag){
                  setFlag(true);
                  setImage(res.data);
                  console.log(` post 들어옴 ${res.data}`);
                }
                resolve({
                  default: `${imgLink}/${res.data}`
                });
              })
              .catch((err)=>reject(err));
            
          })
          console.log(data);
        })
        
      }
    }
  }

  function uploadPlugin(editor){
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    }
  }

    return(
        <div>
          
                <CKEditor
                    editor={ ClassicEditor }
                    config={{ // (4)
                      extraPlugins: [uploadPlugin],
                      plugins:[AutoImage]
                  }}
                    data={editorData}
                    onReady={ (editor) => {
                    } }
                    onChange={(event, editor) => {
                        const newData = editor.getData();
                        onChange(newData); 
                      }}
                    onBlur={ ( event, editor ) => {
                    } }
                    onFocus={ ( event, editor ) => {
                    } }
                /> 
            
        </div>
    );
}

export default Editor;