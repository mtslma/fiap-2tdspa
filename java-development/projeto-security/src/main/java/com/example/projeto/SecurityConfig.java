package com.example.projeto;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailService(){
        return new InMemoryUserDetailsManager(
                User.withUsername("admin")
                        .password("{noop}123456") // { noop } = sem encoder (apenas para testes!)
                        .roles("ADMIN")
                        .build(),
                User.withUsername("user")
                        .password("{noop}123456")
                        .roles("USER")
                        .build()
        );
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                // desabilita CSRF para facilitar testes em REST
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/publico/**").permitAll()
                        .anyRequest().authenticated()
                ).httpBasic();
        // autenticação básica (usuário/ senha no header)
        return http.build();
    }
}
