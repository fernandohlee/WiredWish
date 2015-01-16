package com.wiredwish.core.repositories;

import java.util.List;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.models.entities.Wishlist;

public interface WishlistRepo {
	List<Wishlist> findWishlistsByUsername(String userName);
	Wishlist createWishlist(Wishlist wishlist, Account account);
	Wishlist deleteWishlist(Integer idWishlist);
	Wishlist findWishlist(Integer idWishlist);
}
