package com.itinajero.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.itinajero.api.Entity.Usuario;

public interface IUsuarioServices {
	List<Usuario> buscarTodos();
	void guardar(Usuario usuario);
	void eliminarUsuario(int _id);
	Usuario buscarPorId(int _id);
	Usuario modificarUsuario(int _id);
}
