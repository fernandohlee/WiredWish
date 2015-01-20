package com.wiredwish.rest.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.services.WishlistService;
import com.wiredwish.core.services.exceptions.WishlistDoesNotExistException;
import com.wiredwish.core.services.util.Wishes;
import com.wiredwish.rest.exceptions.ConflictException;
import com.wiredwish.rest.resources.WishResource;
import com.wiredwish.rest.resources.WishResources;
import com.wiredwish.rest.resources.WishlistResource;
import com.wiredwish.rest.resources.asm.WishResourceAsm;
import com.wiredwish.rest.resources.asm.WishResourcesAsm;
import com.wiredwish.rest.resources.asm.WishlistResourceAsm;

@Controller
@RequestMapping("/rest/wishlists")
public class WishlistController {

	private WishlistService wishlistService;

	@Autowired
	public WishlistController(WishlistService wishlistService) {
		this.wishlistService = wishlistService;
	}
	
	@RequestMapping(value = "/{idWishlist}", method = RequestMethod.DELETE)
	@PreAuthorize("permitAll")
	public ResponseEntity<WishlistResource> deleteWishlist(
			@PathVariable Integer idWishlist) {
		Wishlist entry = wishlistService.deleteWishlist(idWishlist);
		if (entry != null) {
			WishlistResource res = new WishlistResourceAsm()
					.toResource(entry);
			return new ResponseEntity<WishlistResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<WishlistResource>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{idWishlist}", method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<WishlistResource> findWishlistById(@PathVariable Integer idWishlist){
		
		Wishlist wishlist = wishlistService.findWishlistById(idWishlist);
		WishlistResource wishlistResource = new WishlistResourceAsm().toResource(wishlist);
		return new ResponseEntity<WishlistResource>(wishlistResource, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{idWishlist}/wishes", method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<WishResources> findWishesByIdWishlist(@PathVariable Integer idWishlist){
		
		Wishes wishList = wishlistService.findWishesByIdWishlist(idWishlist);
		WishResources wishes = new WishResourcesAsm().toResource(wishList);
		return new ResponseEntity<WishResources>(wishes, HttpStatus.OK);
	}
	
    @RequestMapping(value="/{idWishlist}/wishes",
            method = RequestMethod.POST)
    @PreAuthorize("permitAll")
    public ResponseEntity<WishResource> createWish(
    		@PathVariable Integer idWishlist,
            @RequestBody WishResource sentWish
    ) {
        try {
    		Wish createdWish = wishlistService.createWish(idWishlist, sentWish.toWish());
    		WishResource res = new WishResourceAsm().toResource(createdWish);
            HttpHeaders headers = new HttpHeaders();
            //TODO arreglar urls
//            headers.setLocation(URI.create(res.getLink("self").getHref()));
            return new ResponseEntity<WishResource>(res, headers, HttpStatus.CREATED);
        } catch(WishlistDoesNotExistException exception) {
            throw new ConflictException(exception);
        }
    }	   	
}
