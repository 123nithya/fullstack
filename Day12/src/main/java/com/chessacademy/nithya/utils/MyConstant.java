package com.chessacademy.nithya.utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;
import java.util.List;

public class MyConstant {
        // Request Mappings
        public static final String AUTH = "/api/v1/auth";
        public static final String USER = "/api/v1/user";

        // End Points
        public static final String LOGIN = "/login";
        public static final String REGISTER = "/register";
        public static final String REFRESR_TOKEN = "/refresh-token";
        public static final String LOGOUT = "/logout";
        public static final String FORGOT_PASSWORD = "/forgot-password";

        // Web Security
        public static final String[] WHITELIST_URL = {
                        "/api/v1/auth/**",
                        "/swagger-ui/**",
                        "/swagger-ui.html/",
                        "/v3/api-docs/**"
        };
        public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000");
        public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
        public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(), PATCH.name(),
                        PUT.name(), DELETE.name(), HEAD.name());

        // JsonWebToken
        public static final String JWT_LOCALHOST_URL = "http://localhost:8181";
        public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
        public static final String JWT_SECURITY_SCHEME = "bearer";
        public static final String JWT_DESCRIPTION = "Provide the JWT token.";
        public static final String JWT_BEARER_FORMAT = "JWT";

        // swagger
        public static final String SWAGGER_INFO_TITLE = "ChessAcademy -- KNIGHT";
        public static final String SWAGGER_INFO_DESCRIPTION = "An Enthusiastic Website for the learners";
        public static final String SWAGGER_INFO_VERSION = "1.0.0";
        public static final String SWAGGER_INFO_CONTACT_NAME = "Nithya Sivan";
        public static final String SWAGGER_INFO_CONTACT_EMAIL = "727721eucs097@skcet.ac.in";
        public static final String SWAGGER_INFO_CONTACT_URL = "https://example.com";
        public static final String SWAGGER_INFO_LICENSE_NAME = "Apache 2.0";
        public static final String SWAGGER_INFO_LICENSE_URL = "https://www.apache.org/licenses/LICENSE-2.0.html";
}
