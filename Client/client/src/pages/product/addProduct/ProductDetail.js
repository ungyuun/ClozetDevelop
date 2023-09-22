import { Form, Row, Col,Button,Image,InputGroup} from 'react-bootstrap';
import { useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function ProductDetail({register,onDeleteClick,id}){

    const [options, setOptions] = useState([]);   //물품 옵션 설정 -->색상/사이즈/가격/개수/

    const addOption = () => {
        setOptions([ ...options,{ componentId: id,optionId: uuidv4()}]);     
        console.log(options);
    };  

    const optionDelete = (id)=>{
        console.log(options)
        const updatedOptions = options.filter((option) => option.id !== id );
        setOptions(updatedOptions);
    }
    return(
        
            <Row id={id} className='mt-5'>
                <Col md="4">
                    <Image className="img-container" src="/images/1dddd1525f804ef1f7da7a6c41bd871a.jpg" rounded />
                </Col>                                
                <Col md="7">
                <Row>
                    <Col md="2">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" 
                                        placeholder="색상 입력" 
                                        {...register('title')}
                            />
                        </Form.Group>
                    </Col>
                    <Col md="2">
                    <Form.Select className='p-2' 
                                 aria-label="카테고리 입력"
                                 {...register('category')}
                    >
                        <option>사이즈</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="FREE">FREE</option>
                    </Form.Select>
                    </Col>
                    <Col md="3">
                        <InputGroup>
                            <Form.Control
                            placeholder="가격"
                            aria-label="Recipient's username with two button addons"
                            />
                            <Button variant="primary">+</Button>
                            <Button variant="danger">-</Button>
                        </InputGroup>
                    </Col>
                    <Col md="3">
                        <InputGroup>
                            <Form.Control
                            placeholder="개수"
                            aria-label="Recipient's username with two button addons"
                            />
                            <Button variant="primary">+</Button>
                            <Button variant="danger">-</Button>
                        </InputGroup>
                    </Col>
                    <Col md="2">
                        <Button  onClick={addOption} >저장</Button>
                    </Col>
                    <Row className='mt-1'>
                        <OptionList options={options} register={register} onDeleteClick={optionDelete}/>
                        
                    </Row>
                </Row>
                </Col>
                <Col md="1">
                    
                    <Button variant="danger" id="button-addon2" onClick={()=>onDeleteClick(id)}>{id}</Button>
                </Col>
            </Row>
        
    );
};
const ProductDetailList = ({components,register,onDeleteClick}) =>{
    return(
        <>
        {components.map((component, idx)=>{
            return(
                <ProductDetail key={idx} id={component.id} register={register} onDeleteClick={onDeleteClick} />
            );
        })} 
      </> 
    );
}
const OptionList = ({options,register,onDeleteClick}) =>{
    return(
        <>
        {options.map((option, idx)=>{
            return(
                <InputGroup id={option.id} className='mt-1'>
                    <Form.Control
                        placeholder="Recipient's username"
                        disabled
                    />
                    <Button variant="danger" onClick={() => onDeleteClick(option.id)}>
                        -
                    </Button>
                </InputGroup>
                
            );
        })} 
      </> 
    );
}

export default ProductDetailList;