import { Form, Row, Col,Button} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import ProductDetailList from './ProductDetail';
import Editor from './Editor';
import { useMemo, useRef, useState } from 'react';

function ProductForm(){

    const { register, handleSubmit, control } = useForm();
    const [editorData, setEditorData] = useState('');
    const [components, setComponents] = useState([]);   //물품 옵션 설정 -->색상/사이즈/가격/개수/
    const [options, setOptions] = useState([]);         //물품 옵션 설정 -->색상/사이즈/가격/개수/
    const onSubmit = (data) => {
        const formData = {
            formData: data,
            editorData: editorData,
          };
          alert(JSON.stringify(formData));
    };

    const handleEditorChange = (newData) => {
        setEditorData(newData);
      };

    const addComponent = () => {
        setComponents([ ...components,{ id: uuidv4()}]);     
    };  

    const handleDelete = (id)=>{
        console.log(components);
        console.log(id);
        const updatedComponents = components.filter((component) => component.id !== id );
        setComponents(updatedComponents);
    }
    const addOption = () => {
        setOptions([ ...options,{ optionId: uuidv4()}]);     
        console.log(options);
    };  

    const optionDelete = (id)=>{
        console.log(options)
        const updatedOptions = options.filter((option) => option.id !== id );
        setOptions(updatedOptions);
    }
    return(

        <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
            <Title register={register}/>
            <Editor editorData={editorData} onChange={handleEditorChange} />
            <div className='mt-5'>
                <h1>상품 정보추가</h1>
                <Button variant="primary" id="button-addon2" onClick={addComponent}>상품 상세 추가</Button>
                <ProductDetailList components={components} register={register} onDeleteClick={handleDelete} />
                
        
            </div>
        </Form>
    
    );
}

export default ProductForm;