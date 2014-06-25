/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.github.santiagoangel.jee7angularjs.service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author santiago
 */
@javax.ws.rs.ApplicationPath("ws")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(com.github.santiagoangel.jee7angularjs.CrossOriginResourceSharingFilter.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.CustomerFacadeREST.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.DiscountCodeFacadeREST.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.ManufacturerFacadeREST.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.MicroMarketFacadeREST.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.ProductCodeFacadeREST.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.ProductFacadeREST.class);
        resources.add(com.github.santiagoangel.jee7angularjs.service.PurchaseOrderFacadeREST.class);
    }
    
}
