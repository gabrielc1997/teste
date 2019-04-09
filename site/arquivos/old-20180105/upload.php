 <?php
$extencao;
$output = '';
set_time_limit (10000);

function estencao($nome){
	global $extencao;
	
	$extencao = substr($nome, -3);
	$extencao_permitidas = array("xml"); //tipos permitidos
	
	//de 4
	if (in_array($extencao, $extencao_permitidas, true)) {
		return true;
	} else{
		echo'Tipo não permitido';
		exit;
	}
} //End function estencao

function limite_tamanho($size){
	if ($size<= 5000000){
		return true;
	}  else {
		echo 'Arquivo muito grande';	
		exit;
	}
} //End function estencao

  
 if(isset($_FILES['file']['name'][0]))  
 {
	if(estencao($_FILES['file']['name'][0])  &&
		limite_tamanho($_FILES['file']['size'][0])
	){

      foreach($_FILES['file']['name'] as $keys => $values)  
      {  
			//	||	Gerador de nomes unicos	||	//
				$randNameFunction =  rand();
				$thedate = date('Y/n/j h:i:s');
				$thedate = $randNameFunction.$thedate;
				$replace = array(":"," ","/");
				$newname=str_ireplace($replace, "-", $thedate);
				$newname=str_ireplace($_FILES['file']['name'][0], "-", $newname.'.xml');
			//	||	Gerador de nomes unicos	||	//
			 
           if(move_uploaded_file($_FILES['file']['tmp_name'][$keys], 'upload/' . $newname))  
           {  
                $output .= '<div class=col-md-3"><img width="20" height="auto" src="http://www.brfinancial.net/assets/img/ok.png"> <a href="upload/'.$newname.'" target="_blank">'.$values.'</a></div>';  
           }//End if upload ok
      } // End foreach
	} // End If released
 }  //End if isset

echo $output;   
 
 ?> 