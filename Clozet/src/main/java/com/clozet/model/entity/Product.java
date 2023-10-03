package com.clozet.model.entity;


import com.clozet.model.dto.OptionsDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="product")
public class Product {


    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prodNo;
    private String title;
    private String category;
    private String content;
    @JsonIgnore //JSON 변환시 무한 루프 방지용
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private List<Options> option = new ArrayList<>();

    @CreatedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd/HH:mm:ss")
    private LocalDateTime createdDate;





}
