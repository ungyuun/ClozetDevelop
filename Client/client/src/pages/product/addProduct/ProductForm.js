import { Form, Row, Col,Button} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import ProductDetail from './ProductDetail';
import Editor from './Editor';
import { useMemo, useRef, useState } from 'react';

function ProductForm(){

    const { register, setValue,handleSubmit, control } = useForm();
    const [count,setCount]=useState(0);
    const [editorData, setEditorData] = useState('');
    const [products, setProducts] = useState([]);   //물품 등록
    const onSubmit = (data) => {                        // 물품 json 변환
        const formData = {
            header: data,
            body: editorData,
            product: products
          };
          alert(JSON.stringify(formData));
    };

    const handleEditorChange = (newData) => {
        setEditorData(newData);
      };

    const addProduct = () => {
        setProducts([ ...products,{ type: "parent", id: count, parentId:''}]);  
        setCount(count+1);
        console.log(products);   
    };  

    const handleDelete = (id) => {
        console.log("hd");
        
        const deleteProduct = (productsArray, parentId) => {
            
          return productsArray.filter((product) => {
            console.log(product);
            if (product.id === parentId) {
            console.log(`rjffla`)
              return false;
            }
            if (product.parentId === parentId) {
                console.log(`aaaa`)
                  return false;
                }
            if (product.parentId) {
              console.log(`부모애ㅣㅆ대`)
            //   product = deleteProduct(product, parentId);
              return true;
            }
            return true;
          });
        };
        
        // setProducts를 사용하여 새로운 배열을 할당하여 업데이트
        const updatedProducts = deleteProduct(products, id);
        setProducts(updatedProducts);
        
    }
    return(

        <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
            <Title register={register}/>
            <Editor editorData={editorData} onChange={handleEditorChange} />
            <div className='mt-5'>
                <h1>상품 정보추가</h1>
                <Button variant="primary" id="button-addon2" onClick={addProduct}>상품 상세 추가</Button>
                <ProductDetail products={products} setProducts={setProducts} register={register} onDeleteClick={handleDelete} />
                
        
            </div>
        </Form>
    
    );
}

export default ProductForm;