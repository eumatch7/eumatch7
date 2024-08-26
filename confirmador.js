/**
 * Confirmador de exclusão de um contato
 * @author Iman Zuhrah
 */

function confirmar(idcon) {
	let resposta = confirm("Deseja realmente excluir este contato?")
	if (resposta === true) {
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
		alert("Contato excluído!")
	} else {
		alert("Contato não excluído!")
		document.forms["frmContato"].delete()
		return true;

	}

}