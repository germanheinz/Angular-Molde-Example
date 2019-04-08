package com.itinajero.api.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.WebSecurityEnablerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;





@Configuration
public class SpringSecurityConfiguration extends WebSecurityEnablerConfiguration {
	
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder(){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}

}
