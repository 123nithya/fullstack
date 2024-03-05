package com.chessacademy.nithya;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.chessacademy.nithya.dto.request.RegisterRequest;
import com.chessacademy.nithya.service.AuthenticationService;

@SpringBootApplication
public class NithyaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NithyaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService) {
		return args -> {
			var user = RegisterRequest
					.builder()
					.name("Admin")
					.email("admin@gmail.com")
					.password("Admin")
					.role("admin")
					.build();

			authenticationService.register(user);
		};
	}
}