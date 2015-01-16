package com.wiredwish.core.services.exceptions;

public class WishlistDoesNotExistException extends RuntimeException {
    public WishlistDoesNotExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public WishlistDoesNotExistException(String message) {
        super(message);
    }

    public WishlistDoesNotExistException() {
        super();
    }
}
