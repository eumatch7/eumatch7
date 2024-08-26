/**
 * Validação de Formulário
 * @author Iman Zuhrah
 * 
 * 
 */

function validar() {
	/* 
	Para fazer o teste de conexão
	alert('teste')
	*/
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	let fone2 = frmContato.fone2.value
	let fone3 = frmContato.fone3.value

	if (nome === "") {
		alert("Preencha o campo nome!")
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert("Preencha o campo telefone!")
		frmContato.fone.focus()
		return false
	} else if (fone2 === "") {
		alert("Preencha o campo telefone!")
		frmContato.fone2.focus()
		return false
	} else if (fone3 === "") {
		alert("Preencha o campo telefone!")
		frmContato.fone3.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
		return true;
	}
}
