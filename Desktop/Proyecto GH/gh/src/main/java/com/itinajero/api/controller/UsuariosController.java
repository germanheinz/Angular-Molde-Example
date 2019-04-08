package com.itinajero.api.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.itinajero.api.Entity.Usuario;
import com.itinajero.api.services.IUsuarioServices;


@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

	
	@Autowired
	public IUsuarioServices usuarioServices;
	
	@GetMapping("/all")
	public List<Usuario> buscarTodosUsuarios(){
		return usuarioServices.buscarTodos();
	}
	
	@PostMapping(path = "/add", consumes = "application/x-www-form-urlencoded")
	public Usuario crearUsuario(Usuario usuario) {
		usuarioServices.guardar(usuario);
		return usuario;
	}
	@DeleteMapping("/delete/{id}")
	public Usuario eliminarUsuario(@PathVariable("id") int _id) {
		Usuario usuarioEncontrado = usuarioServices.buscarPorId(_id);
		usuarioServices.eliminarUsuario(_id);
		
		return usuarioEncontrado;
	}
	@PutMapping(path = "edit/{id}", consumes = "application/x-www-form-urlencoded")
	public Usuario modificarUsuario(@PathVariable("id") int _id, Model model, Usuario usuario) {
		Usuario usuarioEncontrado = usuarioServices.buscarPorId(_id);
		//model.addAttribute(usuarioEncontrado);
		usuarioEncontrado = usuario;
		usuarioServices.guardar(usuarioEncontrado);
		return usuario;
		
	}
	/*
	@PutMapping(path="/edit/{id}", consumes = "application/x-www-form-urlencoded")
	public String updateUser( Usuario usuario, @PathVariable("id") int _id ) {
		usuarioServices.guardar(usuario);
	    return "Updated"; 
	}*/
}
