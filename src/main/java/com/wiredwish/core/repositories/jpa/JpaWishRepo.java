package com.wiredwish.core.repositories.jpa;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.models.entities.WishStatus;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.repositories.WishRepo;

@Repository
public class JpaWishRepo implements WishRepo{

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Wish> findWishesByIdWishlist(Integer idWishlist) {
        Query query = em.createQuery("SELECT w FROM Wish w WHERE w.wishlist.idWishlist=?1");
        query.setParameter(1, idWishlist);
        return query.getResultList();
	}

	@Override
	public Wish createWish(Wish wish, Wishlist wishlist) {
		wish.setDateAdded(new Date());
		wish.setWishlist(wishlist);
		em.persist(wish);
		return wish;
	}

	@Override
	public Wish deleteWish(Integer idWish) {
		Wish entry = em.find(Wish.class, idWish);
		em.remove(entry);
		return entry;
	}

	@Override
	public Wish updateWishStatus(Integer idWish, Integer newStatus) {
		Wish wish = em.find(Wish.class, idWish);
		WishStatus wishStatus = em.find(WishStatus.class, newStatus);
		wish.setWishStatus(wishStatus);
		wish.setName("yolo1");
		em.persist(wish);
		return wish;
	}
	
	
}
