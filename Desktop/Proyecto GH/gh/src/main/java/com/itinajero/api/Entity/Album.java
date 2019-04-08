package com.itinajero.api.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="albums")
public class Album {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String titulo;
	private String lanzado;
	private Double precio;
	private String genero;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getLanzado() {
		return lanzado;
	}
	public void setLanzado(String lanzado) {
		this.lanzado = lanzado;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public Double getPrecio() {
		return precio;
	}
	public void setPrecio(Double precio) {
		this.precio = precio;
	}
	@Override
	public String toString() {
		return "Album [id=" + id + ", titulo=" + titulo + ", lanzado=" + lanzado + ", genero=" + genero + ", precio="
				+ precio + "]";
	}
	
	
	
}
