package com.wiredwish.core.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="wish_status")
public class WishStatus {

	@Id
	@Column(name = "id_wish_status")
	public Integer idWishStatus;
	public String code;
	public String description;
	
	public Integer getIdWishStatus() {
		return idWishStatus;
	}
	public void setIdWishStatus(Integer idWishStatus) {
		this.idWishStatus = idWishStatus;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
