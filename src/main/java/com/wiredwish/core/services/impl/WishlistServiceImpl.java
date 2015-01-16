package com.wiredwish.core.services.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.repositories.WishRepo;
import com.wiredwish.core.repositories.WishlistRepo;
import com.wiredwish.core.services.WishlistService;
import com.wiredwish.core.services.exceptions.WishlistDoesNotExistException;
import com.wiredwish.core.services.util.Wishes;

@Service
@Transactional
public class WishlistServiceImpl implements WishlistService {

	@Autowired
	private WishlistRepo wishlistRepo;
	
	@Autowired
	private WishRepo wishRepo;

	@Override
	public Wishlist deleteWishlist(Integer idWishlist) {
		return wishlistRepo.deleteWishlist(idWishlist);
	}

	@Override
	public Wishes findWishesByIdWishlist(Integer idWishlist) {
		return new Wishes(wishRepo.findWishesByIdWishlist(idWishlist));
	}
	@Override
	public Wish createWish(Integer idWishlist, Wish wish) {
		
		Wishlist wishlist = wishlistRepo.findWishlist(idWishlist);
		if (wishlist == null) {
			throw new WishlistDoesNotExistException();
		}
		Wish createdWish = wishRepo.createWish(wish, wishlist);
		return createdWish;
	}

	@Override
	public Wishlist findWishlistById(Integer idWishlist) {
		return wishlistRepo.findWishlist(idWishlist);
	}
}
