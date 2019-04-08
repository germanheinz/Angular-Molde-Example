package com.itinajero.api.service.jpa;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.itinajero.api.Entity.Usuario;
import com.itinajero.api.repository.UsuarioRepository;
import com.itinajero.api.services.IUsuarioServices;



@Service
public class UsuarioServices implements IUsuarioServices {
	
	@Autowired
	public UsuarioRepository usuarioRepository;
	@Autowired
	public BCryptPasswordEncoder BCryptPasswordEncoder;

	@Override
	public List<Usuario> buscarTodos() {
		// TODO Auto-generated method stub
		return usuarioRepository.findAll();
	}

	@Override
	public void guardar(Usuario usuario) {
		usuario.setPassword(BCryptPasswordEncoder.encode(usuario.getPassword()));
		usuarioRepository.save(usuario);	
	}
	
	@Override
	public Usuario buscarPorId(int _id) {
		Optional<Usuario> optional = usuarioRepository.findById(_id);
		if (optional.isPresent())
			return optional.get();
		return null;
	}

	@Override
	public void eliminarUsuario(int _id) {
		usuarioRepository.deleteById(_id);
		
	}
	
	@Override
	public Usuario modificarUsuario(int _id) {
		usuarioRepository.findById(_id);
		return null;
	}
	/*
	@Override
	public Usuario buscarPorId1(int _id) {	
		Optional<Pelicula> optional = peliculasRepo.findById(idPelicula);
		if (optional.isPresent())
			return optional.get();
		return null;
	}

	@Override
	public void eliminar(int idPelicula) {
		//peliculasRepo.delete(idPelicula); // Spring 4.3
		peliculasRepo.deleteById(idPelicula);
		
	}
	*/

}
