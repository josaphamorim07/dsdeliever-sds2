package com.devsuperior.dsdeliver.services;

import java.util.List;


import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;



@Service
public class ProductService {
	
	@Autowired
	 private ProductRepository repository;
	
	@Transactional
	public List<ProductDTO> findALL() {
		
		List<Product> list = repository.findALLByOrderByNameAsc();
		return list.stream().map(x-> new ProductDTO(x)).collect(Collectors.toList());
	}

}
