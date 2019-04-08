package com.itinajero.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itinajero.api.Entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
