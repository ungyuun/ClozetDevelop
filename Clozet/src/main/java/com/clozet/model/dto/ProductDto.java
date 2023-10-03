package com.clozet.model.dto;

import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

    private Long prodNo;
    private String title;
    private String category;
    private String content;
    private List<OptionsDto> options;
    private Date regDate;

}
