package com.clozet.repository;

import com.clozet.model.entity.Options;
import com.clozet.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OptionsRepository extends JpaRepository<Options,Long> {


}
