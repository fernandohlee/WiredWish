package com.wiredwish.core.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Component allows this class to be autowired
 */
@Component
public class AuthFailure extends SimpleUrlAuthenticationFailureHandler {
	
	/**
	 * allows us to send a response failure and change status code in respone
	 */
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        /**
         * when user is not unauthorized
         */
    	response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
