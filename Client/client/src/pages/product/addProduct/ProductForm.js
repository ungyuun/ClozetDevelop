import { Form, Row, Col,Button} from 'react-bootstrap';
import {useForm} from "react-hook-form";

import Title from './Title';
import ProductDetail from './ProductDetail';
import Editor from './Editor';
import { useMemo, useRef, useState } from 'react';

function ProductForm(){

    const { register, handleSubmit, control } = useForm();
    const [editorData, setEditorData] = useState('');
    const [components, setComponents] = useState([]);

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

    const nextId = useRef(0);

    const addComponent = () => {
    // 현재 컴포넌트 배열에 새로운 컴포넌트를 추가합니다.
        setComponents((components) => [...components, <ProductDetail key={nextId.current} id={nextId.current} register={register} onDeleteClick={handleDelete}/>]);
        nextId.current += 1;
        // console.log(components);       
    };  

    const handleDelete = (id)=>{
        console.log("org");
        console.log(components)
        const updatedComponents = components.filter((component) => {
            // console.log(component.props.id);
            console.log(component);
            return component.id !== id;
        });
        nextId.current -= 1;
        console.log("up");
        console.log(updatedComponents)
        setComponents(updatedComponents);
    }
    return(

        <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
            <Title register={register}/>
            <Editor editorData={editorData} onChange={handleEditorChange} />
            <div className='mt-5'>
                <h1>상품 정보추가</h1>
                <Button variant="primary" id="button-addon2" onClick={addComponent}>상품 상세 추가</Button>
                {components.map((component, index) => (
                    <div key={index}>{component}</div>
                ))}
            </div>
            {/* <ProductDetail register={register} /> */}
        </Form>
    
    );
}

export default ProductForm;