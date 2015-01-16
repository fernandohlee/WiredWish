package com.wiredwish.rest.mvc;

import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;
import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.services.AccountService;
import com.wiredwish.core.services.util.Wishlists;

public class AccountControllerTest {

	@InjectMocks
	private AccountController controller;

	@Mock
	private AccountService service;

	private ArgumentCaptor<Account> accountCaptor;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
		accountCaptor = ArgumentCaptor.forClass(Account.class);
	}

	@Test
	public void getExistingAccount() throws Exception {
		Account foundAccount = new Account();
		foundAccount.setIdAccount(1);
		foundAccount.setPassword("test");
		foundAccount.setUserName("test");

		when(service.findAccount(1)).thenReturn(foundAccount);

		mockMvc.perform(get("/rest/accounts/1")).andDo(print())
				.andExpect(jsonPath("$.password", is(nullValue())))
				.andExpect(jsonPath("$.userName", is(foundAccount.getUserName())))
				.andExpect(status().isOk());
	}
	

    @Test
    public void createAccountNonExistingUsername() throws Exception {
        Account createdAccount = new Account();
        createdAccount.setIdAccount(1);
        createdAccount.setPassword("test");
        createdAccount.setUserName("test");

        when(service.createAccount(any(Account.class))).thenReturn(createdAccount);

        mockMvc.perform(post("/rest/accounts")
                .content("{\"userName\":\"test\",\"password\":\"test\"}")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(header().string("Location", org.hamcrest.Matchers.endsWith("/rest/accounts/1")))
                .andExpect(jsonPath("$.userName", is(createdAccount.getUserName())))
                .andExpect(status().isCreated());
        
        verify(service).createAccount(accountCaptor.capture());
        
        String password = accountCaptor.getValue().getPassword();
        
        assertEquals("test",password);
    }
    
    @Test
    public void findExistingWishlistsByUsername() throws Exception {
        
    	Account createdAccount = new Account();
        createdAccount.setIdAccount(1);
        createdAccount.setPassword("test");
        createdAccount.setUserName("test");
    	Wishlist createdWishlist = new Wishlist();
    	createdWishlist.setAccount(createdAccount);
    	createdWishlist.setName("test wishlist");
    	createdWishlist.setDescription("test description");
    
    	
    	List<Wishlist> wishlisList = new ArrayList();
    	wishlisList.add(createdWishlist);
    	Wishlists list = new Wishlists(wishlisList);
    	
    	
        when(service.findByWishlistUsername("test")).thenReturn(list);

        mockMvc.perform(get("/rest/accounts/test/wishlists"))
        .andExpect(jsonPath("$.wishlists[*].name", hasItem(is("test wishlist"))))
        .andExpect(status().isOk());
        
    }
    
    @Test
    public void createWishlistWithExistingUser() throws Exception{
        Account createdAccount = new Account();
        createdAccount.setIdAccount(1);
        createdAccount.setPassword("test");
        createdAccount.setUserName("test");
    	Wishlist newWishlist = new Wishlist();
    	newWishlist.setAccount(createdAccount);
    	newWishlist.setName("test wishlist");
    	newWishlist.setDescription("test description");
    	
        when(service.createWishlist(eq(1), any(Wishlist.class))).thenReturn(newWishlist);

        mockMvc.perform(post("/rest/accounts/1/wishlists")
                .content("{\"name\":\"test wishlist\",\"description\":\"test description\"}")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.name", is(newWishlist.getName())))
                .andExpect(status().isCreated());

    }
    
}
