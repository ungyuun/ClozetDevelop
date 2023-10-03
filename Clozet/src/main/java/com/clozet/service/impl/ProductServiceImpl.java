package com.clozet.service.impl;

import com.clozet.Mapper.OptionsMapper;
import com.clozet.Mapper.ProductMapper;
import com.clozet.model.dto.OptionsDto;
import com.clozet.model.dto.ProductDto;
import com.clozet.model.entity.Options;
import com.clozet.model.entity.Product;
import com.clozet.repository.OptionsRepository;
import com.clozet.repository.ProductRepository;
import com.clozet.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional()
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final OptionsRepository optionsRepository;

//    public ProductServiceImpl(ProductRepository productRepository){
//        this.productRepository = productRepository;
//    }

    @Override
    public Product addProduct(ProductDto productDto) throws Exception {

//        return ProductMapper.INSTANCE.toDto(productRepository.save(ProductMapper.INSTANCE.toEntity(productDto)));
        return productRepository.save(ProductMapper.INSTANCE.toEntity(productDto));
    }

    @Override
    public void addOptions(List<OptionsDto> options,Product product) throws Exception {

        for (OptionsDto option : options){
            System.out.println(option.toString());
        }
        List<Options> optionsList = new ArrayList<>();

        for (OptionsDto optionsDto : options) {

            Options optionsEntity = OptionsMapper.INSTANCE.toEntity(optionsDto);
            optionsEntity.setProduct(product);
            System.out.println(optionsEntity.toString());
            optionsList.add(optionsEntity);
        }
        optionsRepository.saveAll(optionsList);
    }
}

