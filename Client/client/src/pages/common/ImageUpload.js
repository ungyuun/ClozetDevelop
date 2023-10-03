import React, { useState } from 'react';
import axios from "axios";


function ImageUpload({product,productId,index,setProducts}) {
    const [imgSrc, setImgSrc] = useState(`/images/image_icon-icons.com_50366.png`);
    // 파일 선택(input 요소)의 변경 이벤트 핸들러
    const handleFileChange = (event) => {
      const file = event.target.files[0]; // 선택한 파일
  
      if (file) {
        const formData = new FormData(); // FormData 객체 생성
        formData.append('file', file); // 파일을 FormData에 추가
  
        // Axios를 사용하여 스프링 서버로 파일 업로드 요청 보내기
        axios.post('http://localhost:8081/product/img', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // 파일 업로드를 위한 헤더 설정
          },
        })
          .then((response) => {
            console.log('파일 업로드 성공:', response.data);
            console.log(`${index} 수정해야함`)
            setImgSrc(response.data);
            setProducts([ ...product,{type:'img',parentId:productId,imgUrl:response.data}]);

            console.log(product);
            // 업로드 성공 시 필요한 처리를 수행할 수 있습니다.
          })
          .catch((error) => {
            console.error('파일 업로드 실패:', error);
            // 업로드 실패 시 오류 처리를 수행할 수 있습니다.
          });
      }
    };
    return(
        <>
            <img className="profile-image-container" src = {imgSrc} alt="프로필 이미지"/>
            <input type="file" className="input-image" key={product.id} accept="image/*" id="profileImg" onChange={handleFileChange}/>
        </>
    );
}

export default ImageUpload;
