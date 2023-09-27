import { Form, Row, Col,Button,Image,InputGroup} from 'react-bootstrap';
import { useMemo,useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function ProductDetail({register,products,setProducts,onDeleteClick}){

    const [color,setColor]=useState(['']);
    const [size,setSize]=useState(['']);
    const [amount,setAmount] = useState([0]);
    const [price,setPrice] = useState([0]);
    const [imgFile, setImgFile] = useState([]);
    const imgRef = useRef();

    // 이미지 업로드 input의 onChange
    const saveImgFile = (parentId) => {
        const file = imgRef.current ? imgRef.current.files[0] : null;
        
        const parentProducts = products.filter(product => product.id === parentId);
        console.log(parentProducts);
        console.log("hoi");
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
          }
        reader.onloadend = () => {
            const parentProducts = products.filter(product => product.id === parentId);
            console.log(parentProducts);
            setProducts({type:"parent",id : parentProducts.id,parentId:parentProducts.parentId,optionImg:reader.result})
           
            setImgFile([...imgFile,reader.result]);
        };
    };

    const amountIncrease = (index) =>{
        const newAmount = [...amount];
        newAmount[index] +=10;
        setAmount(newAmount);
    }
    const amountDecrease=(index)=>{
        if (amount[index] > 10) {
            const newAmount = [...amount];
            newAmount[index] -= 10;
            setAmount(newAmount);
          } else {
            const newAmount = [...amount];
            newAmount[index] = 0;
            setAmount(newAmount);
          }
    }

    const priceIncrease = (index) =>{
        const newPrice = [...price];
        newPrice[index] +=1000;
        setPrice(newPrice);
    }
    const priceDecrease=(index)=>{
        if (price[index] > 1000) {
            const newPrice = [...price];
            newPrice[index] -= 1000;
            setPrice(newPrice);
          } else {
            const newPrice = [...price];
            newPrice[index] = 0;
            setPrice(newPrice);
          }
    }

    const addOption = (productId,index) => {
        console.log(`id : ${productId}`)
        console.log(`index : ${index}`)
        setProducts([ ...products,{type:'option',parentId:productId,color:color[index],size:size[index],price:price[index],amount:amount[index]}]);     
        
    };  

    return(
        <>
        {products.filter((c)=>!c.parentId).map((product, index)=>{
            return(
                
                <Row id={product.id} className='mt-5'>
                <Col md="4" >
                <img className="profile-image-container" src={imgFile[index] ? imgFile[index] :`/images/image_icon-icons.com_50366.png`} alt="프로필 이미지"/>

                
                <input type="file" className="input-image" key={product.id} accept="image/*" id="profileImg" onChange={saveImgFile(product.id)} ref={imgRef}/>
                    {/* <Image className="img-container" src="/images/image_icon-icons.com_50366.png" rounded /> */}
                </Col>                                
                <Col md="7">
                <Row>
                    <Col md="2">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" 
                                        placeholder="색상 입력" 
                                        onChange={(e)=>{
                                            const newValue = e.target.value
                                            const newColor = [...color]
                                            newColor[index]=newValue
                                            setColor(newColor)
                                         }}
                            />
                        </Form.Group>
                    </Col>
                    <Col md="2">
                    <Form.Select className='p-2' 
                                 aria-label="카테고리 입력"
                                 onChange={(e)=>{
                                    const newValue = e.target.value
                                    const newSize = [...size]
                                    newSize[index]=newValue
                                    setSize(newSize)
                                 }}
                                 
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
                            value={price[index]}
                            
                            onChange={(e)=>{
                                const newValue = parseInt(e.target.value)
                                const newPrice = [...price]
                                newPrice[index] = newValue // 배열에 정수 값을 할당
                                setPrice(newPrice)
                            }}
                            />
                            <Button variant="primary" onClick={()=>priceIncrease(index)}>+</Button>
                            <Button variant="danger" onClick={()=>priceDecrease(index)}>-</Button>
                            
                        </InputGroup>
                    </Col>
                    <Col md="3">
                        <InputGroup>
                            <Form.Control
                            placeholder="개수"
                            value={amount[index]}
                            onChange={(e)=>{
                                const newValue = parseInt(e.target.value)
                                const newAmount = [...amount]
                                newAmount[index] = newValue // 배열에 정수 값을 할당
                                setAmount(newAmount)
                            }}
                            />
                            <Button variant="primary" onClick={()=>amountIncrease(index)}>+</Button>
                            <Button variant="danger" onClick={()=>amountDecrease(index)}>-</Button>         
                            
                        </InputGroup>
                    </Col>
                    <Col md="2">
                        <Button  onClick={()=>addOption(product.id,index)} >저장</Button>
                    </Col>
                    <Row className='mt-1'>
                        {products.filter((c)=> c.parentId===product.id).map((option)=>(
                            // <OptionList options={option} register={register} onDeleteClick={optionDelete}/>
                            <InputGroup key={option.id} id={option.id} register={register} className='mt-1'>
                                    <Form.Control
                                    placeholder={`${option.color}/${option.size}/${option.price}/${option.amount}`}
                                    disabled
                                />
                                <Button variant="danger" onClick={() => onDeleteClick(option.id)}>
                                    -
                                </Button>
                            </InputGroup>
                        ))}
                    </Row>
                </Row>
                </Col>
                <Col md="1">
                    
                    <Button variant="danger" id="button-addon2" onClick={()=>onDeleteClick(product.id)}>삭제</Button>
                </Col>
            </Row>
            );
        })} 
            
        </>
    );
};

export default ProductDetail;