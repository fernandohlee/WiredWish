package com.wiredwish.core.repositories.jpa;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.repositories.WishlistRepo;

@Repository
public class JpaWishlistRepo implements WishlistRepo{
	
	@PersistenceContext
	private EntityManager em;
	
	
	@Override
	public List<Wishlist> findWishlistsByUsername(String userName) {
        Query query = em.createQuery("SELECT w FROM Wishlist w WHERE w.account.userName=?1");
        query.setParameter(1, userName);
        return query.getResultList();
	}

	@Override
	public Wishlist createWishlist(Wishlist wishlist, Account account) {
		wishlist.setDateAdded(new Date());
		wishlist.setAccount(account);
        em.persist(wishlist);
        return wishlist;
	}

	@Override
	public Wishlist deleteWishlist(Integer idWishlist) {
		Wishlist entry = em.find(Wishlist.class, idWishlist);
		em.remove(entry);
		return entry;
	}

	@Override
	public Wishlist findWishlist(Integer idWishlist) {
		return  em.find(Wishlist.class, idWishlist);
	}

}
