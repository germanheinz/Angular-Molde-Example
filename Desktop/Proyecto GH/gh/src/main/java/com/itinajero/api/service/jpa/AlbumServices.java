package com.itinajero.api.service.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itinajero.api.Entity.Album;
import com.itinajero.api.repository.AlbumsRepository;
import com.itinajero.api.services.IAlbumServices;


@Service
public class AlbumServices implements IAlbumServices {
	
	
	@Autowired
	public AlbumsRepository albumRepo;

	@Override
	public List<Album> buscarTodos() {
		// TODO Auto-generated method stub
		return albumRepo.findAll();
	}

	@Override
	public void guardar(Album album) {
		albumRepo.save(album);	
	}

}
