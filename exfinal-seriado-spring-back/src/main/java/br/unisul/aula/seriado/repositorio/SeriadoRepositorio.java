package br.unisul.aula.seriado.repositorio;

import br.unisul.aula.seriado.model.Seriado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeriadoRepositorio extends JpaRepository<Seriado, Long> {

    List<Seriado> findAllByNomeContains(String nome);
}
