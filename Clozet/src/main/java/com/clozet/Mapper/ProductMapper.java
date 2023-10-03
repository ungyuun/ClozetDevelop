package com.clozet.Mapper;

import com.clozet.GenericMapper;
import com.clozet.model.dto.OptionsDto;
import com.clozet.model.dto.ProductDto;
import com.clozet.model.entity.Options;
import com.clozet.model.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProductMapper{
//
//    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);
//
//    @Mapping(source ="rownum" ,target="rownum")
//    @Mapping(source="prodNo",target="prodNo")
//    @Mapping(source="prodName",target="prodName")
//    @Mapping(source="prodDetail",target="prodDetail")
//    @Mapping(source="price",target="price")
//    @Mapping(source="regDate",target="regDate")
//    @Mapping(source="proTranCode",target="proTranCode")
//    ProductDto entityToDto(Product entity);
//
//    @Mapping(source ="rownum" ,target="rownum")
//    @Mapping(source="prodNo",target="prodNo")
//    @Mapping(source="prodName",target="prodName")
//    @Mapping(source="prodDetail",target="prodDetail")
//    @Mapping(source="price",target="price")
//    @Mapping(source="regDate",target="regDate")
//    @Mapping(source="proTranCode",target="proTranCode")
//    Product dtoToEntity(ProductDto dto);

    ProductMapper INSTANCE = Mappers.getMapper( ProductMapper.class );

    ProductDto toDto(Product product);

    Product toEntity(ProductDto productDto);


    Options map(OptionsDto value);
}
