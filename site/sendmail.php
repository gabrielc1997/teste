<?php

require "phpmailer/PHPMailerAutoload.php";

$mail = new PHPMailer;
 
$mail->isSMTP();
$mail->Host         = "ssl://smtp.googlemail.com";
$mail->SMTPAuth     = true;
$mail->Username     = "desenvolvimento@martinluz.com.br";
$mail->Password     = "client-martinluz";
$mail->SMTPSecure   = "tls";
$mail->Port         = 465;
$mail->CharSet      = "UTF-8";


	$mail->AddAddress("fernando.marinari@brfinancial.net");
	$mail->AddAddress("site@brfinancial.net");
    $mail->AddAddress("operacoes@brfinancial.net");
	$mail->AddAddress("atendimento5@martinluz.com.br");
	$mail->AddAddress("atendimento5@martinluz.com.br");
	$mail->AddAddress("operacoes@brfinancial.net");

	$mail->FromName     = "BR Financial: A Evolucao da Factoring ";

    $mail->isHTML(true);
    $mail->Subject 	= "Contato BrFinancial";
    $which_form 	= "Formul&aacute;rio simule agora";
  
/****************************************************************************** */
/********************************[  Do not forward  ]************************** */
/****************************************************************************** */
if($_POST["which-form"] == 'tecnical-Data'){

    function test_size($obj_test, $min_size, $site_stop){
        if((strlen($obj_test) < $min_size)){
            exit('Out - '.$site_stop);
        }
    }//Endfunction test_size()

	/*
		*****   *****   *****   *****   *****   *****
		*****   *****   [   Nome    ]   *****   *****
		*****   *****   *****   *****   *****   *****
	*/
		//test size length
		if($_POST["nome"]){
			test_size($_POST["nome"], 3, "nome");
		} elseif(empty($_POST["nome"])){
			exit('Campo vazio');
		}
	/*
		*****   *****   *****   *****   *****   *****
		*****   *****   [   Nome    ]   *****   *****
		*****   *****   *****   *****   *****   *****
	*/


	/*
		*****   *****   *****   *****   *****   *****
		*****   *****   [   Cargo    ]   *****   *****
		*****   *****   *****   *****   *****   *****
	*/
		//test size length
		if($_POST["cargo"]){
			test_size($_POST['cargo'], 3, 'cargo');
		} elseif(empty($_POST["cargo"])){
			exit(false);
		}
	/*
		*****   *****   *****   *****   *****   *****
		*****   *****   [   Cargo    ]   *****   *****
		*****   *****   *****   *****   *****   *****
	*/

	/*
		*****   *****   *****   *****   *****   *****
		*****   *****   [   Email    ]   *****   *****
		*****   *****   *****   *****   *****   *****
	*/
		//test size length
		if($_POST["email"]){
			test_size($_POST['email'], 3, 'email');
		} elseif(empty($_POST["email"])){
			exit(false);
		}
	/*
		*****   *****   *****   *****   *****   *****
		*****   *****   [   Email    ]   *****   *****
		*****   *****   *****   *****   *****   *****
	*/

    /*
        *****   *****   *****   *****   *****   *****
        *****   *****   [   CNPJ    ]   *****   *****
        *****   *****   *****   *****   *****   *****
    */
        if($_POST["cnpj"]){

                //test size length
            test_size($_POST['cnpj'], 10, 'CNPJ');

                //test CNPJ
            $validacao_etapa_2 = require 'vcnp.php';
            if($validacao_etapa_2 == true){
                //Do nothing
            }else{
                exit ('Out - Not validated');
            }

        } elseif(empty($_POST["cnpj"])){
            exit(false);
        }
    /*
        *****   *****   *****   *****   *****   *****
        *****   *****   [   CNPJ    ]   *****   *****
        *****   *****   *****   *****   *****   *****
    */
}
/****************************************************************************** */
/********************************[  Do not forward  ]************************** */
/****************************************************************************** */


	if (isset($_POST['which-form']) && $_POST['which-form'] != '' && $_POST['which-form'] == 'footer') {
		$which_form ='Formulário peça agora sua simulação!';
		#$mail->addCC('adilson@martinluz.com.br');
	}else if (isset($_POST['which-form']) && $_POST['which-form'] != '' && $_POST['which-form'] == 'rescue') {
		$which_form ='Formulário usuário ia sair da pagina';
		#$mail->addCC('adilson@martinluz.com.br');
	}else if (isset($_POST['which-form']) && $_POST['which-form'] != '' && $_POST['which-form'] == 'tecnical-Data') {
		#$mail->addCC('adilson@martinluz.com.br');
	}else if (isset($_POST['which-form']) && $_POST['which-form'] != '' && $_POST['which-form'] == 'tecnical-email') {
		//Do nothing
	}


$mail_Body = '
	<meta charset="UTF-8">
    <table cellpadding="0" cellspacing="0" width=\"700\" style="  padding:0 23px;" >
        <tr>
            <td width="20" style="background: #e6e5e5;">  </td>
            <td width="200" style="background: #e6e5e5; padding-top: 20px; padding-bottom: 20px; " >
                <img src="http://www.brfinancial.net/assets/img/logo.png" width="172" height="27"   style="display:block; border:none; padding:none; margin:none;" >
            </td>

            <td width="480" style="background: #e6e5e5;">
                <font style="font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif">'.$which_form.'<font>
            </td>
        </tr>
    </table>

    <br />
    <table cellpadding="0" cellspacing="0" width=\"700\" style="  padding:0 23px;" >
        <tr>
            <td width="20">  </td>
            <td width="680" style="  padding-top: 20px; padding-bottom: 20px; " >
';

$mail_Body .= "<table width=\"700\"  >";

if (isset($_POST['nome']) && $_POST['nome'] != '') {
    $nome = $_POST['nome'];
    $mail_Body .= "
    <tr>
        <td width=\"160\"><strong>Nome:</strong></td>
        <td width=\"540\">$nome</td>
    </tr>";
}

if (isset($_POST['email']) && $_POST['email'] != '') {
    $email = $_POST['email'];
    $mail_Body .= "
    <tr>
        <td><strong>Email:</strong></td>
        <td>$email</td>
    </tr>";
}

if (isset($_POST['nomeDaEmpresa']) && $_POST['nomeDaEmpresa'] != '') {
    $nomeDaEmpresa = $_POST['nomeDaEmpresa'];
    $mail_Body .= "
    <tr>
        <td><strong>Nome da empresa:</strong></td>
        <td>$nomeDaEmpresa</td>
    </tr>";
}

if (isset($_POST['cargo']) && $_POST['cargo'] != '') {
    $cargo = $_POST['cargo'];
    $mail_Body .= "
    <tr>
        <td><strong>Cargo:</strong></td>
        <td>$cargo</td>
    </tr>";
}

if (isset($_POST['cnpj']) && $_POST['cnpj'] != '') {
    $cnpj = $_POST['cnpj'];
    $mail_Body .= "
    <tr>
        <td><strong>CNPJ:</strong></td>
        <td>$cnpj</td>
    </tr>";
}
 
if (isset($_POST['empresa']) && $_POST['empresa'] != '') {
    $empresa = $_POST['empresa'];
    $mail_Body .= "
    <tr>
        <td><strong>Empresa:</strong></td>
        <td>$empresa</td>
    </tr>";
}

if (isset($_POST['segmento']) && $_POST['segmento'] != '' && $_POST['segmento'] != 'false') {
    $segmento = $_POST['segmento'];
    $mail_Body .= "
    <tr>
        <td><strong>Segmento:</strong></td>
        <td>$segmento</td>
    </tr>";
}

if (isset($_POST['atuacao']) && $_POST['atuacao'] != '' && $_POST['atuacao'] != 'false') {
    $atuacao = $_POST['atuacao'];
    $mail_Body .= "
    <tr>
        <td><strong>Atuação:</strong></td>
        <td>$atuacao</td>
    </tr>";
}

if (isset($_POST['numero-funcionario']) && $_POST['numero-funcionario'] != ''  && $_POST['numero-funcionario'] != 'false' ) {
    $numero_funcionario = $_POST['numero-funcionario'];
    $mail_Body .= "
    <tr>
        <td><strong>Nº de funcionários:</strong></td>
        <td>$numero_funcionario</td>
    </tr>
    
    ";
}

if (isset($_POST['telefone']) && $_POST['telefone'] != '') {
    $telefone = $_POST['telefone'];
    $mail_Body .= "
    <tr>
        <td><strong>Telefone:</strong></td>
        <td>$telefone</td>
    </tr>
    </table>
    <br /> 
    <table width=\"700\">
    ";
}

if (isset($_POST['estoque']) && $_POST['estoque'] != '') {
    $estoque = $_POST['estoque'];
    $mail_Body .= "
    <tr>
        <td><strong>Qual é o valor total de matérias-primas que 
        mantém em estoque?:</strong></td>
    </tr>
    <tr>
        <td>$estoque</td>
    </tr>
    
    ";
}

if (isset($_POST['venda']) && $_POST['venda'] != '') {
    $venda = $_POST['venda'];
    $mail_Body .= "
    <tr>
        <td><strong>Qual é o valor total de produtos finais (preço de 
        venda) que mantém em estoque?:</strong></td>
        </tr>
        <tr>
        <td>$venda</td>
    </tr>";
}

if (isset($_POST['prazoentrega']) && $_POST['prazoentrega'] != '') {
    $prazoentrega = $_POST['prazoentrega'];
    $mail_Body .= "
    <tr>
        <td><strong>Qual é o prazo da entrega de mercadorias a partir do 
        momento em que seu cliente efetua uma compra?:</strong></td>
        </tr>
        <tr>
        <td>$prazoentrega</td>
    </tr>";
}

if (isset($_POST['prazomedioprodutos']) && $_POST['prazomedioprodutos'] != '') {
    $prazomedioprodutos = $_POST['prazomedioprodutos'];
    $mail_Body .= "
    <tr>
        <td><strong>Qual é o prazo médio que sua empresa tem para 
        pagamento de produtos e/ou matérias-primas 
        junto aos seus fornecedores?:</strong></td>
        </tr>
        <tr>
        <td>$prazomedioprodutos</td>
    </tr>";
}

if (isset($_POST['prazomedioclientes']) && $_POST['prazomedioclientes'] != '') {
    $prazomedioclientes = $_POST['prazomedioclientes'];
    $mail_Body .= "
    <tr>
        <td><strong>Qual é o prazo médio de pagamento que sua 
        empresa concede aos seus clientes?:</strong></td>
        </tr>
        <tr>
        <td>$prazomedioclientes</td>
    </tr>";
}

if (isset($_POST['formchecksecyes']) && $_POST['formchecksecyes'] != '') {
    $formchecksecyes = $_POST['formchecksecyes'];

	if($formchecksecyes == 'true'){ $formchecksecyessn = 'Sim';} else { $formchecksecyessn = 'Não';}

    $mail_Body .= "
    <tr>
        <td><strong>Utiliza alguma linha de financiamento atualmente?</strong></td>
        </tr>
        <tr>
        <td>$formchecksecyessn</td>
    </tr>";
}

if (isset($_POST['mediafaturamento']) && $_POST['mediafaturamento'] != '') {
    $mediafaturamento = $_POST['mediafaturamento'];
    $mail_Body .= "
    <tr>
        <td><strong>Qual é a média mensal de faturamento da sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$mediafaturamento</td>
    </tr>";
}

if (
        isset($_POST['estados']) && $_POST['estados'] != '' 
        && (
            isset($_POST['txtareafinanciamento']) && 
            $_POST['txtareafinanciamento'] != '' && 
            (strlen($_POST['txtareafinanciamento']) > 3)
        )
    ) 
{
    $estados = $_POST['estados'];
    $mail_Body .= "
    <tr>
        <td><strong>Em qual estado está localizada a sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$estados</td>
    </tr>";
}


if (isset($_POST['cidades']) && $_POST['cidades'] != ''

&& (
		isset($_POST['txtareafinanciamento']) && 
		$_POST['txtareafinanciamento'] != '' && 
		(strlen($_POST['txtareafinanciamento']) > 3)
	)) {
    $cidades = $_POST['cidades'];
    $mail_Body .= "
    <tr>
        <td><strong>Em qual cidade está localizada a sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$cidades</td>
    </tr>";
}


if (
		isset($_POST['txtareafinanciamento']) && 
		$_POST['txtareafinanciamento'] != '' && 
		(strlen($_POST['txtareafinanciamento']) > 3)
	) {
    
	
	$txtareafinanciamento = $_POST['txtareafinanciamento'];
    $mail_Body .= "
    <tr>
        <td><strong>No seu entendimento, qual é a atual necessidade de financiamento da sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$txtareafinanciamento</td>
    </tr>";
}

/*
if (isset($_POST['fileupload']) && $_POST['fileupload'] != '') {
    $cidade = $_POST['fileupload'];
    $mail_Body .= "
    <tr>
        <td><strong>Por favor, anexe o XML das notas fiscais sobre as quais deseja simular uma operação.:</strong></td>
        </tr>
        <tr>
        <td>$fileupload</td>
    </tr>";
}
*/

if (isset($_POST['fileupload']) && $_POST['fileupload'] != '') {
    $mail_Body .= "
    <tr>
        <td><strong>Documentos:</strong></td>
        </tr>
        
        <tr>
        <td>".$_POST['fileupload']."</td>
    </tr>";
}
  
if (
		isset($_POST['txtareaobs']) && 
		$_POST['txtareaobs'] != '' && 
		(strlen($_POST['txtareafinanciamento']) > 3)
	) {
    $mail_Body .= "
    <tr>
        <td><strong>Observações extras:</strong></td>
        </tr>
        
        <tr>
        <td>".$_POST['txtareaobs']."</td>
    </tr>";
}
 
$mail_Body .= "
            </td>
        </tr>
    </table>
</table>
";



$mail->Body = $mail_Body;

if(empty($_POST['nome']) || empty($_POST['cargo']) || empty($_POST['email']) || empty($_POST['nomeDaEmpresa'])){
    echo 'false';
}
else{
    print_r($mail->send());
}




