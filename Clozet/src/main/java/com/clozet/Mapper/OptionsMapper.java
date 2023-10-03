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
public interface OptionsMapper{


    OptionsMapper INSTANCE = Mappers.getMapper( OptionsMapper.class );


    OptionsDto toDto(Options options);

    @Mapping(source = "parentNo", target = "product.prodNo")
    Options toEntity(OptionsDto optionsDto);


}
