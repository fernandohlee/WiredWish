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
public class Wish {

	@Id
	@Column(name = "id_wish")
	@SequenceGenerator(name = "wish_id_wish_seq", sequenceName = "wish_id_wish_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wish_id_wish_seq")
	public Integer idWish;
	
	public String name;
	
	public String description;
	
	public String link;
	
	@Column(name = "date_added")
	public Date dateAdded;
	
	public float price;
	
	@Column(name = "joy_ratio")
	public Integer joyRatio;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "wish_status")
	public WishStatus wishStatus;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "wishlist")
	public Wishlist wishlist;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "giver")
	public Account giver;

	public Integer getIdWish() {
		return idWish;
	}

	public void setIdWish(Integer idWish) {
		this.idWish = idWish;
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

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Integer getJoyRatio() {
		return joyRatio;
	}

	public void setJoyRatio(Integer joyRatio) {
		this.joyRatio = joyRatio;
	}

	public WishStatus getWishStatus() {
		return wishStatus;
	}

	public void setWishStatus(WishStatus wishStatus) {
		this.wishStatus = wishStatus;
	}

	public Wishlist getWishlist() {
		return wishlist;
	}

	public void setWishlist(Wishlist wishlist) {
		this.wishlist = wishlist;
	}

	public Account getGiver() {
		return giver;
	}

	public void setGiver(Account giver) {
		this.giver = giver;
	}

}
