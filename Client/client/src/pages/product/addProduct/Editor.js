import React, { useEffect,useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import "../../../styles/product.css"; 

function Editor({ editorData, onChange,setDesc,desc,setImage}){

  const [flag,setFlag] = useState(false);
  const imgLink = "http://localhost:3306/images/"

  function customUploadAdapter(loader){
    return{
      upload(){
        return new Promise ((resolve,reject)=>{
          const data = new FormData();
          loader.file.then((file)=>{
            data.append("name",file.name);
            data.append("file",file);

            axios.post('주소',data)
              .then((res)=>{
                if(!flag){
                  setFlag(true);
                  setImage(res.data.filename);
                }
                resolve({
                  default: `${imgLink}/${res.data.filename}`
                });
              })
              .catch((err)=>reject(err));
            
          })
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
                      extraPlugins: [uploadPlugin]
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