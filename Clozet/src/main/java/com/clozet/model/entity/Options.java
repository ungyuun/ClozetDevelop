package com.clozet.model.entity;

import lombok.*;

import javax.persistence.*;


@Builder
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "options")
public class Options {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;
    private Long parentId;
    private String type;

    @ManyToOne
    @JoinColumn(name="prodNo")
    private Product product;    // addProductDto의 prodNo
    private String color;
    private String size;
    private Long price;
    private Long amount;
    private String imgUrl;


}
