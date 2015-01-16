package com.wiredwish.core.services;

import com.wiredwish.core.models.entities.Wish;

public interface WishService {

	Wish deleteWish(Integer idWish);

	Wish updateWishStatus(Integer idWish, Integer newStatus);

}
