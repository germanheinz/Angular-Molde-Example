package com.itinajero.api.services;

import java.util.List;

import com.itinajero.api.Entity.Album;


public interface IAlbumServices {
	List<Album> buscarTodos();
	void guardar(Album album);
}
