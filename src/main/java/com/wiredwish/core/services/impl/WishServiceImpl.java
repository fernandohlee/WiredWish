package com.wiredwish.core.services.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.repositories.WishRepo;
import com.wiredwish.core.services.WishService;

@Service
@Transactional
public class WishServiceImpl implements WishService{

	@Autowired
	private WishRepo wishRepo;
	
	@Override
	public Wish deleteWish(Integer idWish) {
		return wishRepo.deleteWish(idWish);
	}

	@Override
	public Wish updateWishStatus(Integer idWish, Integer newStatus) {
		return wishRepo.updateWishStatus(idWish, newStatus);
	}

}
