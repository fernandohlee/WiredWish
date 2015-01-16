package com.wiredwish.rest.resources;

import java.util.Date;

import org.springframework.hateoas.ResourceSupport;

import com.wiredwish.core.models.entities.Wish;

public class WishResource extends ResourceSupport {

	public Integer idWish;
	public String name;
	public String description;
	public String link;
	public Date dateAdded;
	public float price;
	public Integer joyRatio;
	public Integer wishStatus;

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

	public Integer getWishStatus() {
		return wishStatus;
	}

	public void setWishStatus(Integer wishStatus) {
		this.wishStatus = wishStatus;
	}

	public Wish toWish() {
		Wish wish = new Wish();
		wish.setIdWish(idWish);
		wish.setName(name);
		wish.setDescription(description);
		wish.setLink(link);
		wish.setDateAdded(dateAdded);
		wish.setPrice(price);
		wish.setJoyRatio(joyRatio);
//		wish.setWishStatus(wishStatus);
		return wish;
	}
}
