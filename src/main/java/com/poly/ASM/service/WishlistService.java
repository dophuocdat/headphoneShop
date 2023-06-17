package com.poly.ASM.service;

import java.util.List;

import com.poly.ASM.entity.Wishlist;

public interface WishlistService {

    List<Wishlist> getWishlist();

    Wishlist createWishlist(Long productId, Wishlist wishlist);
    
}
