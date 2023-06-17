package com.poly.ASM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poly.ASM.entity.Wishlist;
import com.poly.ASM.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
@CrossOrigin("http://localhost:3000")
public class WishlistController {

    WishlistService wishlistService;

    @Autowired
    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("")
    public List<Wishlist> getWishlist() {
        return wishlistService.getWishlist();
    }

    @PostMapping("/{idCustomer}/create")
    public ResponseEntity<String> createWishlist(
            @PathVariable("idCustomer") Long idCustomer,
            @RequestBody Wishlist wishlist) {
        wishlistService.createWishlist(idCustomer,wishlist);

        return ResponseEntity.ok().body("Create success");
    }

    
}
