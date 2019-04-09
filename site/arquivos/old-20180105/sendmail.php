<?php

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;


/*
$mail->isSMTP();
$mail->Host = 'ssl://smtp.googlemail.com';
$mail->SMTPAuth = true;
$mail->Username = 'desenvolvimento@martinluz.com.br';
$mail->Password = 'client-martinluz';
$mail->SMTPSecure = 'tls';
$mail->Port = 465;

$mail->setFrom('site@brfinancial.net', 'Mailer');
$mail->addCC('desenvolvimento@martinluz.com.br');
$mail->addBCC('site@brfinancial.net');
*/

 
$mail->isSMTP();
$mail->Host = 'ssl://smtp.googlemail.com';
$mail->SMTPAuth = true;
$mail->Username = 'desenvolvimento@martinluz.com.br';
$mail->Password = 'client-martinluz';
$mail->SMTPSecure = 'tls';
$mail->Port = 465;

$mail->setFrom('eude@martinluz.com.br', 'Mailer');
//$mail->addCC('desenvolvimento@martinluz.com.br');
$mail->addBCC('eude@martinluz.com.br');
 

$mail->isHTML(true);

$mail->Subject = 'Contato BrFinancial';


$mail->Body = '
    <table cellpadding="0" cellspacing="0" width=\"700\" style="  padding:0 23px;" >
        <tr>
            <td width="20" style="background: #e6e5e5;">  </td>
            <td width="200" style="background: #e6e5e5; padding-top: 20px; padding-bottom: 20px; " >
                <img src="http://www.brfinancial.net/assets/img/logo.png" width="172" height="27"   style="display:block; border:none; padding:none; margin:none;" >
            </td>

            <td width="480" style="background: #e6e5e5;">
                <font style="font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif">
                    Formulário simule agora
                <font>
            </td>
        </tr>
    </table>

    <br />
    <table cellpadding="0" cellspacing="0" width=\"700\" style="  padding:0 23px;" >
        <tr>
            <td width="20">  </td>
            <td width="680" style="  padding-top: 20px; padding-bottom: 20px; " >
';


$mail->Body .= "<table width=\"700\"  >";

if (isset($_POST['nome']) && $_POST['nome'] != '') {
    $nome = $_POST['nome'];
    $mail->Body .= "
    <tr>
        <td width=\"160\"><strong>Nome:</strong></td>
        <td width=\"540\">$nome</td>
    </tr>";
}

if (isset($_POST['email']) && $_POST['email'] != '') {
    $email = $_POST['email'];
    $mail->Body .= "
    <tr>
        <td><strong>Email:</strong></td>
        <td>$email</td>
    </tr>";
}

if (isset($_POST['cargo']) && $_POST['cargo'] != '') {
    $cargo = $_POST['cargo'];
    $mail->Body .= "
    <tr>
        <td><strong>Cargo:</strong></td>
        <td>$cargo</td>
    </tr>";
}

if (isset($_POST['empresa']) && $_POST['empresa'] != '') {
    $empresa = $_POST['empresa'];
    $mail->Body .= "
    <tr>
        <td><strong>Empresa:</strong></td>
        <td>$empresa</td>
    </tr>";
}

if (isset($_POST['segmento']) && $_POST['segmento'] != '') {
    $segmento = $_POST['segmento'];
    $mail->Body .= "
    <tr>
        <td><strong>segmento:</strong></td>
        <td>$segmento</td>
    </tr>";
}

if (isset($_POST['atuacao']) && $_POST['atuacao'] != '') {
    $atuacao = $_POST['atuacao'];
    $mail->Body .= "
    <tr>
        <td><strong>Atuação:</strong></td>
        <td>$atuacao</td>
    </tr>";
}

if (isset($_POST['numero-funcionario']) && $_POST['numero-funcionario'] != '') {
    $numero_funcionario = $_POST['numero-funcionario'];
    $mail->Body .= "
    <tr>
        <td><strong>Nº de funcionários:</strong></td>
        <td>$numero_funcionario</td>
    </tr>
    
    ";
}

if (isset($_POST['telefone']) && $_POST['telefone'] != '') {
    $telefone = $_POST['telefone'];
    $mail->Body .= "
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
    $mail->Body .= "
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
    $mail->Body .= "
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
    $mail->Body .= "
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
    $mail->Body .= "
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
    $mail->Body .= "
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

if($formchecksecyes == 'on'){ $formchecksecyes = 'Sim';} else { $formchecksecyes = 'Não';}


    $mail->Body .= "
    <tr>
        <td><strong>Utiliza alguma linha de financiamento atualmente?</strong></td>
        </tr>
        <tr>
        <td>$formchecksecyes</td>
    </tr>";
}



if (isset($_POST['mediafaturamento']) && $_POST['mediafaturamento'] != '') {
    $mediafaturamento = $_POST['mediafaturamento'];
    $mail->Body .= "
    <tr>
        <td><strong>Qual é a média mensal de faturamento da sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$mediafaturamento</td>
    </tr>";
}


if (isset($_POST['estado']) && $_POST['estado'] != '') {
    $estado = $_POST['estado'];
    $mail->Body .= "
    <tr>
        <td><strong>Em qual estado está localizada a sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$estado</td>
    </tr>";
}


if (isset($_POST['cidade']) && $_POST['cidade'] != '') {
    $cidade = $_POST['cidade'];
    $mail->Body .= "
    <tr>
        <td><strong>Em qual cidade está localizada a sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$cidade</td>
    </tr>";
}


if (
		isset($_POST['txtareafinanciamento']) && 
		$_POST['txtareafinanciamento'] != '' && 
		(strlen($_POST['txtareafinanciamento']) > 3)
	) {
    
	
	$txtareafinanciamento = $_POST['txtareafinanciamento'];
    $mail->Body .= "
    <tr>
        <td><strong>No seu entendimento, qual é a atual necessidade de financiamento da sua empresa?:</strong></td>
        </tr>
        <tr>
        <td>$txtareafinanciamento</td>
    </tr>";
}

if (isset($_POST['fileupload']) && $_POST['fileupload'] != '') {
    $cidade = $_POST['fileupload'];
    $mail->Body .= "
    <tr>
        <td><strong>Por favor, anexe o XML das notas fiscais sobre as quais deseja simular uma operação.:</strong></td>
        </tr>
        <tr>
        <td>$fileupload</td>
    </tr>";
}

if (isset($_POST['fileupload']) && $_POST['fileupload'] != '') {
    $mail->Body .= "
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
    $mail->Body .= "
    <tr>
        <td><strong>Observações extras:</strong></td>
        </tr>
        
        <tr>
        <td>".$_POST['txtareaobs']."</td>
    </tr>";
}
 
$mail->Body .= "
            </td>
        </tr>
    </table>
</table>
";

print_r($mail->send());