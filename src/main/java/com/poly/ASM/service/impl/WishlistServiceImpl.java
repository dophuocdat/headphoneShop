package com.poly.ASM.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.entity.Product;
import com.poly.ASM.entity.Wishlist;
import com.poly.ASM.repository.CustomerRepository;
import com.poly.ASM.repository.ProductRepository;
import com.poly.ASM.repository.WishlistRepository;
import com.poly.ASM.service.WishlistService;

@Service
public class WishlistServiceImpl implements WishlistService {

    WishlistRepository wishlistRepository;
    ProductRepository productRepository;
    CustomerRepository customerRepository;

    @Autowired
    public WishlistServiceImpl(
            WishlistRepository wishlistRepository,
            ProductRepository productRepository,
            CustomerRepository customerRepository) {
        this.wishlistRepository = wishlistRepository;
        this.productRepository = productRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Wishlist> getWishlist() {
        return wishlistRepository.findAll();
    }

    @Override
    public Wishlist createWishlist(Long idCustomer, Wishlist wishlist) {

        Optional<Customer> exitingCustomer = customerRepository.findById(idCustomer);
        Optional<Wishlist> exitingWishlist = wishlistRepository.findByCustomerId(idCustomer);
        if (exitingCustomer.isPresent()) {
            Customer customer = exitingCustomer.get();
            if (!exitingWishlist.isPresent()) {
                // System.out.println(wishlist.getProducts());
                wishlist.setCustomer(customer);
                wishlistRepository.save(wishlist);
                return wishlist;
            } else {
                Wishlist foundWishlist = exitingWishlist.get();
                List<Product> products = foundWishlist.getProducts();

                // add product
                Product product = wishlist.getProducts().get(0);
                products.add(product);
                // foundWishlist.setProducts(products);
                wishlistRepository.save(foundWishlist);
                wishlist = foundWishlist;
            }
        } else {
            wishlist = null;
        }
        return wishlist;
    }

}
