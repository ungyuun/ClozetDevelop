package com.clozet.model.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OptionsDto {
    private Long idx;
    private Long parentId;
    private String type;
    private Long parentNo;    // addProductDto의 prodNo
    private String color;
    private String size;
    private Long price;
    private Long amount;
    private String imgurl;


}