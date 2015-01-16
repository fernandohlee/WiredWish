package com.wiredwish.core.models.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Wishlist {
	
	@Id
	@Column(name = "id_wishlist")
	@SequenceGenerator(name = "wishlist_id_wishlist_seq", sequenceName = "wishlist_id_wishlist_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wishlist_id_wishlist_seq")
	public Integer idWishlist;
	
	public String name;
	
	public String description;
	
	@Column(name = "date_added")
	public Date dateAdded;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "account")
	private Account account;

	public Integer getIdWishlist() {
		return idWishlist;
	}

	public void setIdWishlist(Integer idWishlist) {
		this.idWishlist = idWishlist;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

}
