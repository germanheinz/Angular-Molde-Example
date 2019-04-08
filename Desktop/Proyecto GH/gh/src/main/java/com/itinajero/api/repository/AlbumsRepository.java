package com.itinajero.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itinajero.api.Entity.Album;

public interface AlbumsRepository extends JpaRepository<Album, Integer> {

}
