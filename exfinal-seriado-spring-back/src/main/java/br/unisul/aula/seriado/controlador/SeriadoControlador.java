package br.unisul.aula.seriado.controlador;

import br.unisul.aula.seriado.dto.SeriadoDTO;
import br.unisul.aula.seriado.model.Seriado;
import br.unisul.aula.seriado.repositorio.SeriadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(allowedHeaders = "*")
@RequestMapping("/seriado")
public class SeriadoControlador {
    
    @Autowired
    private SeriadoRepositorio seriadoRepositorio;

    @GetMapping("/")
    public List<SeriadoDTO> listarTodosSeriados() {
        return SeriadoDTO.converterListaDTO(seriadoRepositorio.findAll());
    }

    @GetMapping("/id/{codigo}")
    public SeriadoDTO buscarSeriadoPorId(@PathVariable(name = "codigo") Long id) {
        SeriadoDTO dto = new SeriadoDTO(seriadoRepositorio.getById(id));
        return dto;
    }

    @GetMapping("/nome/{nome}")
    public List<SeriadoDTO> bucaSeriadoPorNome(@PathVariable(name = "nome") String nome) {
        List<Seriado> seriadoList = seriadoRepositorio.findAllByNomeContains(nome);
        return SeriadoDTO.converterListaDTO(seriadoList);
    }

    @PostMapping("/")
    public SeriadoDTO inserirUmSeriado(@RequestBody SeriadoDTO dto) {
        Seriado seriado = dto.converterParaSeriado();
        Seriado seriadoSalvo = seriadoRepositorio.save(seriado);
        SeriadoDTO dtoSalvo = new SeriadoDTO(seriadoSalvo);
        return dtoSalvo;
    }

    @PutMapping("/{id}")
    public void alterarUmSeriado(@PathVariable(name = "id") Long id, @RequestBody SeriadoDTO dto) {
        Seriado seriado = seriadoRepositorio.getById(id);
        dto.converterParaAlterarSeriado(seriado);
        seriadoRepositorio.save(seriado);
    }

    @DeleteMapping("/{id}")
    public void deletarSeriado(@PathVariable(name = "id") Long id) {
        seriadoRepositorio.deleteById(id);
    }
}
