package io.github.profile.ws;

import java.io.Serializable;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.github.profile.controller.ClienteController;
import io.github.profile.dao.exeption.BusinessException;
import io.github.profile.model.Cliente;
import io.github.profile.vo.ClienteVO;

@Named
@SessionScoped
@Path("/Cliente")
public class ClienteWebService implements Serializable {

	private static final long serialVersionUID = -5346074283140334199L;

	
	private ClienteController clienteController = new ClienteController();
	
	@POST
	@Path("/Criar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ClienteVO cadastrar(Cliente cliente) {
		
		return clienteController.cadastrar(cliente);
	}
	
	@GET
	@Path("/Pesquisar")
	@Produces(MediaType.APPLICATION_JSON)
	public ClienteVO pesquisar() throws BusinessException {
		
		return clienteController.pesquisar();
	}

	@GET
    @Path("/BuscarCliente/{cpf}")
    @Produces(MediaType.APPLICATION_JSON)
    public ClienteVO buscarCliente(@PathParam("cpf") String cpf) throws BusinessException {
		
        return clienteController.buscarCliente(cpf);
    }
	
	@DELETE
    @Path("/deletar/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ClienteVO deletarCliente(@PathParam("id") Long id) throws BusinessException {
		
        return clienteController.deletarCliente(id);
    }
	
}
