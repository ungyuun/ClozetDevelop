package com.clozet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;

@EnableAspectJAutoProxy
@SpringBootApplication()
public class ClozetApplication {

    public static void main(String[] args) {
        System.out.println("hi");
        SpringApplication.run(ClozetApplication.class, args);
    }

}
