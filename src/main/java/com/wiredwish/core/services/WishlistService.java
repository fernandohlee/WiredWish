package com.wiredwish.core.services;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.services.util.Wishes;

public interface WishlistService {
	Wishlist deleteWishlist(Integer idWishlist);
	Wishes findWishesByIdWishlist(Integer idWishlist);
	Wish createWish(Integer idWishlist, Wish wish);
	Wishlist findWishlistById(Integer idWishlist);
}
