package com.wiredwish.rest.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.services.WishService;
import com.wiredwish.rest.resources.WishResource;
import com.wiredwish.rest.resources.asm.WishResourceAsm;

@Controller
@RequestMapping("/rest/wishes")
public class WishController {
	
	private WishService wishService;

	@Autowired
	public WishController(WishService wishService) {
		this.wishService = wishService;
	}

	@RequestMapping(value = "/{idWish}", method = RequestMethod.DELETE)
	@PreAuthorize("permitAll")
	public ResponseEntity<WishResource> deleteBlogEntry(
			@PathVariable Integer idWish) {
		Wish entry = wishService.deleteWish(idWish);
		if (entry != null) {
			WishResource res = new WishResourceAsm()
					.toResource(entry);
			return new ResponseEntity<WishResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<WishResource>(HttpStatus.NOT_FOUND);
		}
	}	
	
	@RequestMapping(value = "/{idWish}/status/{newStatus}", method = RequestMethod.PUT)
	public ResponseEntity<WishResource> changeWishStatus(
			@PathVariable Integer idWish,
			@PathVariable Integer newStatus) {
		Wish entry = wishService.updateWishStatus(idWish, newStatus);
		if (entry != null) {
			WishResource res = new WishResourceAsm()
			.toResource(entry);
			return new ResponseEntity<WishResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<WishResource>(HttpStatus.NOT_FOUND);
		}
	}	
}
