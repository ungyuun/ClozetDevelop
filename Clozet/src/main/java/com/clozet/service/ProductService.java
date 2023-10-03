package com.clozet.service;


import com.clozet.model.dto.OptionsDto;
import com.clozet.model.dto.ProductDto;
import com.clozet.model.entity.Product;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {
	
//	public ProductDto addProduct(ProductDto productDto) throws Exception;

//	public ProductDto getProduct(Long prodNo) throws Exception;
//
//	public List<ProductDto> getProductList(Pageable pageable) throws Exception;
//
//
//	public ProductDto updateProduct(ProductDto productDto) throws Exception;
//
//	public List<String> getTotalProductName() throws Exception;

	public Product addProduct(ProductDto productDto) throws Exception;

	public void addOptions(List<OptionsDto> options,Product product) throws Exception;

}
