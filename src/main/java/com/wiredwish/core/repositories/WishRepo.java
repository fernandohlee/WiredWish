package com.wiredwish.core.repositories;

import java.util.List;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.models.entities.Wishlist;

public interface WishRepo {
	public List<Wish> findWishesByIdWishlist(Integer idWishlist);

	public Wish createWish(Wish wish, Wishlist wishlist);

	public Wish deleteWish(Integer idWish);

	public Wish updateWishStatus(Integer idWish, Integer newStatus);
}
