$( document ).ready( function ()
{

    // $('.box-form-1').hide();
    // $('.box-form-2').hide();
    // $('.box-form-3').show();
    // $( "#simule-agora > div" ).addClass( 'modal-lg-1100 ' );

    var actionsEvents = {
        modalRescue : 0,
		cnpj : 0
    }

    /*
        *****	*****	[ link blog]	*****	*****
    */
        var  link_action_go =	$(".link-action-go");
        link_action_go.click(function(){
            link_action_go_href = link_action_go.attr('href');
            window.open(link_action_go_href);
        });
        
    /*
        *****	*****	[ link blog]	*****	*****
    */

    /* 

        [link indique]
    */

    var link_action_go_indique = $( ".link-action-go-indique" );
    link_action_go_indique.click( function ()
    {
        link_action_go_href_indique = link_action_go_indique.attr( 'href' );
        window.open( link_action_go_href_indique );
    } );
    /* 

        [link indique]
    */



	/*
		*****	*****	[	Select bt radio	]	*****	*****
	*/
		var bt_radio = $('input[type="radio"]');
	
		bt_radio.click(function () {         
			bt_radio.removeClass('bt-radio-selected');
			$(".form-sec-checkbox").removeClass('bt-radio-selected');
			$(this).parent().parent().addClass('bt-radio-selected');
		});
	/*
		*****	*****	[	Select bt radio	]	*****	*****
	*/

    /*
        *****	*****	*****	*****	*****	*****
        *****		Cidades & estados			*****
        *****	*****	*****	*****	*****	*****
    */
        function startJson(estado){
            $.getJSON("assets/js/cidades.json",function(data){
                $.each(data, function (key, val) {
                    $("#cidades > option").remove();
                    for(pe=0;pe<val.length; pe++){
                        if(estado === val[pe].sigla){
                            var listaDeCidades = '';
                            for (pc = 1;pc<=val[pe].cidades.length; pc++){
                                if (val[pe].cidades.length == 1) {
                                    listaDeCidades += '<option val="' + val[pe].cidades[0] + '">  ' + val[pe].cidades[0] + '</option>';
                                } else {
                                    listaDeCidades += '<option val="' + val[pe].cidades[pc] + '">  ' + val[pe].cidades[pc] + '</option>';
                                }
                            }//End for
                            $("#cidades").append(listaDeCidades);
                            return false;
                            stop();
                        }//End if estado
                    }//end for 
                });//End each
            });// End $.getJSON
        }// End function startJson
        $(document).on("change", "#textarea", function () {
            startJson($(this).val());
        });
    /*
        *****	*****	*****	*****	*****	*****
        *****		Cidades & estados			*****
        *****	*****	*****	*****	*****	*****
    */

   function toggleBottomBar() {
    if ($(window).width() > 800) {
        var beginTop = $('#solucao').offset().top;
        var endTop = $('footer').offset().top;
        var windowTop = $(window).scrollTop() + $(window).height();
        ;
        windowTop > beginTop && windowTop < endTop ? $('#box-news').addClass('h-150') : $('#box-news').removeClass('h-150');
    } else {
        $('#box-news').removeClass('h-150');
    }
}

if ($('#box-news').get(0) != undefined) {
    $(window).on({ 'scroll': toggleBottomBar, 'resize': toggleBottomBar });
}

$('#off-newsletter').click(function (e) {
    e.preventDefault();
    $(window).off('scroll', toggleBottomBar);
    $('#box-news').removeClass('h-150');
    $(document).off('scroll', toggleBottomBar);
});

	// var ersControler =  {"scrol":0 };

	// $('#box-news').hide();
	
    // function toggleContatoBottom()
    // {
    //     var windowTop = $( window ).scrollTop();
    //     var windowHeight = $( window ).height();
    //     var windowWidth = $( window ).width();
		
	// 	if (ersControler.scrol <=  windowTop){
	// 		console.log('Descendo');
	// 		//$( '#box-news' ).hide();
	// 	} else {
	// 		console.log('Subindo');
			
	// 		var toggle = windowTop > ( windowHeight / 2 ) && windowWidth > 768 && windowTop < 5030;
	// 		toggle ? $( '#box-news' ).show() : $( '#box-news' ).hide();	
	// 	}
	// 	ersControler.scrol =  windowTop;		

    // }
    // $( document ).ready( function ()
    // {
    //     $( window ).on( { 'scroll': toggleContatoBottom, 'resize': toggleContatoBottom } );
    // } );

    var body = $( "#simule-agora" );
    var top = body.scrollTop() // Get position of the body

    $( document ).on( "click", ".item-up-row", function ()
    {
        $( this ).css( { color: "#f00" } ).animate( { opacity: "0" }, 700 ).delay( 1200, function ()
        {
            $( this ).hide();
        } );
        return false;
    } );

    function reduzirsize( size )
    {

        if ( size < 1000 )
        {
            return size + 'bytes';
        } else if ( size >= 1001 && size < 1000000 )
        {
            tamanhoDoArquivo = ( size / 1000 );
            tamanhoDoArquivo = tamanhoDoArquivo.toFixed( 1 );
            return tamanhoDoArquivo = '<b>' + tamanhoDoArquivo + ' </b>KB';

        } else if ( size >= 1000000 && size < 1000000000 )
        {
            if ( size > 7000000 )
            { // 6 zeros = mega
                return false;
            }

            tamanhoDoArquivo = size / 1000000;
            tamanhoDoArquivo = tamanhoDoArquivo.toFixed( 1 );
            return t = '<b>' + tamanhoDoArquivo + ' </b>MB';
        }

    }//end     function reduzirsize


    function actionUp( files_list )
    {
        $( this ).removeClass( 'file_drag_over' );
        //console.log(files_list);
        $( "#id_file_drag_new > div.areaNova" ).animate( { height: "50px", "margin-top": " 20px !important;" }, 1500 ).addClass( 'upingFiles' );

        var arquivoEnvioSize = reduzirsize( files_list[ 0 ].size );
        var arquivoEnvioName = files_list[ 0 ].name;

        var formData = new FormData();

        if ( !arquivoEnvioSize )
        {

            $( "#id_file_drag_new" )
                .append( '<div class="row item-up-row"><div class="class-up-arquivos"><div class="classDellItem">x</div><div class="class-up-arquivos-1"><img width="20" height="auto" src="assets/img/doc-icon.png"></div><div class="class-up-arquivos-2"><div style="color:#F00;" clas="alert alert-danger"> - Arquivo muito grande - ' + arquivoEnvioName + '</div></div><div class="tracoOut"><div class="tracoIn"></div></div></div> </div>' )
                .css( { "display": "block" } );
            $( ".tracoIn" ).css( { width: "90%" } );
            return false;

        } else
        {

            for ( var i = 0; i < files_list.length; i++ )  
            {
                formData.append( 'file[]', files_list[ i ] );
            }
            //console.log(formData);  
            $.ajax( {
                url: "upload.php",
                method: "POST",
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                success: function ( data )
                {

                    var valinputfileafter = $( "#fileupload" ).val();
                    $( "#fileupload" ).val( valinputfileafter + ' ' + data ).attr( 'type' );

                    for ( x = 0; x <= files_list.length; x++ )
                    {
                        $( "#id_file_drag_new" )
                            .append( '<div class="row item-up-row"><div class=" class-up-arquivos"><div class="classDellItem">x</div><div class="class-up-arquivos-1"><img width="20" height="auto" src="assets/img/doc-icon.png"></div><div class="class-up-arquivos-2">- ' + files_list[ x ].size + ' - ' + files_list[ x ].name + '</div><div class="tracoOut"><div class="tracoIn"></div></div></div></div>' )
                            .css( { "display": "block" } );

                        $( ".tracoIn" ).animate( { width: "90%" }, ( Math.random() * 3300 ) );

                        $( '#uploaded_file' )
                            .append( data )
                            .addClass( 'pt-xs-50' );
                    }//End for

                    $( '#fileupload' ).append( data );

                }
            } )
        }
    }//End function actionUp()

    $( '#id_file_drag_new > div' ).on( 'click', function ()
    {
        $( '#fileuploadclick' ).trigger( 'click' );
    } );

    $( "#fileuploadclick" ).change( function ( e )
    {
        var files_list = document.getElementById( 'fileuploadclick' ).files;
        actionUp( files_list );
    } );

    $( '.file_drag_area' ).on( 'dragover', function ()
    {
        $( this ).addClass( 'file_drag_over' );
        return false;
    } );
    $( '.file_drag_area' ).on( 'dragleave', function ()
    {
        $( this ).removeClass( 'file_drag_over' );
        return false;
    } );

    $( '.file_drag_area' ).on( 'drop', function ( e )
    {
        e.preventDefault();

        var files_list = e.originalEvent.dataTransfer.files;
        actionUp( files_list );
    } );

} );

$( document ).ready( function ()
{

    $( '#carousel-depoimento' ).carousel( {
        interval: 10000
    } );

    $( '#carousel-depoimento' ).on( 'slid.bs.carousel', function ()
    {
        $( '#bg-depoimentos' ).removeClass( 'bgi-factoring' );
        $( '#bg-depoimentos' ).removeClass( 'bgi-factoring-2' );
        $( '#bg-depoimentos' ).addClass( $( '.itemdepoimentos.active' ).attr( 'data-bg' ) );
    } )

    $( ".carousel" ).swipe( {

        swipe: function ( event, direction, distance, duration, fingerCount, fingerData )
        {
            if ( direction == 'left' ) $( this ).carousel( 'next' );
            if ( direction == 'right' ) $( this ).carousel( 'prev' );
        },
        allowPageScroll: "vertical"

    } );
    $( '#menu' ).find( 'a' ).click( function ( e )
    {
        e.preventDefault();

        $( '.navbar-ex1-collapse' ).collapse( 'hide' )
    } );

    function filtrarTelefone( value )
    {
        value = value.replace( /\D/g, "" );
        value = value.replace( /^(\d{2})(\d)/g, "($1) $2" );
        value = value.replace( /(\d)(\d{4})$/, "$1-$2" );
        return value;
    }

    $( '[type="tel"]' ).keypress( function ( e )
    {
        $( this ).val( filtrarTelefone( $( this ).val() ) );
    } );

/*
	****	****	****	[	Simulation Form		]	****	****	****
*/
    function successSendSimule()
    {
        $( '#simule-enviar' ).addClass( 'bg-linear-strawberry-100' );
        setTimeout( function ()
        {
            $( '#simule-agora' ).find( '.modal-header' ).removeClass( 'bg-linear-strawberry' );
            $( '#simule-agora' ).find( '.modal-header' ).html( '<button type="button" class="close c-tomato" data-dismiss="modal" aria-hidden="true">&times;</button>' );
            if ( window.innerHeight > 768 )
            {
                $( '#simule-agora' ).find( '.modal-dialog' ).width( '325px' );
            }
            $( '#simule-agora' ).find( 'small' ).text( '' );
            $( '.box-form-2' ).fadeOut( function ()
            {
				
                $('.box-success').fadeIn();
                $('.box-form-4').fadeOut();
            } );
            clearTimeout();
        }, 500 );
    }

    function errorSendSimule()
    {
        $( '#simule-enviar' ).addClass( 'bg-linear-strawberry-100' );
        $( '#simule-enviar' ).addClass( 'bg-linear-strawberry-100' );
        setTimeout( function ()
        {
            $( '#simule-agora' ).find( '.modal-header' ).removeClass( 'bg-linear-strawberry' );
            $( '#simule-agora' ).find( '.modal-header' ).html( '<button type="button" class="close c-tomato" data-dismiss="modal" aria-hidden="true">&times;</button>' );
            $( '#simule-agora' ).find( '.modal-dialog' ).width( '325px' );
            $( '#simule-agora' ).find( 'small' ).text( '' );
            $( '.box-form-2' ).fadeOut( function ()
            {
                $( '.box-error' ).fadeIn();
            } );
            clearTimeout();
        }, 500 );
    }

    function beforeSendSimule()
    {
        $( '#simule-enviar' ).addClass( 'bg-linear-strawberry-50' );
    }

    function sendFormSimule( callbackSuccess, callbackError, callbackBeforeSend )
    {
        setTimeout( function ()
        {
            $.ajax( {
                type: 'POST',
                url: 'sendmail.php',
                data: $( '#form-simule' ).serialize(),
                success: function ( response )
                {
                    if ( callbackSuccess != undefined )
                    {
                        response == '1' ? callbackSuccess() : callbackError();
                    }
                },
                beforeSend: function ()
                {
                    if ( callbackBeforeSend != undefined )
                    {
                        callbackBeforeSend();
                    }
                },
                error: function ( error )
                {
                    if ( callbackError != undefined )
                    {
                        callbackError( error );
                    }
                }
            } );
            clearTimeout();
        }, 1000 );
    }

    idCnpjForm = $("#cnpjForm");

    idCnpjForm.keyup(function (e) {
        idCnpjFormVal = idCnpjForm.val();
        
        if (idCnpjForm.val().length == 2) {
            idCnpjForm.val(idCnpjFormVal+'.');
        }

        if (idCnpjForm.val().length == 6) {
            idCnpjForm.val(idCnpjFormVal+'.');
        }

        if (idCnpjForm.val().length == 10) {
            idCnpjForm.val(idCnpjFormVal+'/');
        }

        if (idCnpjForm.val().length == 15) {
            idCnpjForm.val(idCnpjFormVal+'-');
        }

        if (idCnpjForm.val().length > 18) {
            idCnpjFormStr = idCnpjForm.val();
            idCnpjFormStrRes = idCnpjFormStr.substring(0, 18);
            idCnpjForm.val(idCnpjFormStrRes);
        }
    });


    $( '#simule-continuar' ).click( function ( e )
    {
        e.preventDefault();

		$("#email-tecnical").val('tecnical-email');

        var NomeIsEmpty             = $( '[name="nome"]' ).val() == '';
        var CargoIsEmpty            = $( '[name="cargo"]' ).val() == '';
        var EmailIsEmpty            = $('[name="email"]').val() == '';
        var nomeDaEmpresaIsEmpty    = $('[name="nomeDaEmpresa"]').val() == '';

        var filterEmail     = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var emailIsValid    = filterEmail.test( $( '[name="email"]' ).val() );

        NomeIsEmpty ? $( '[name="nome"]' ).addClass( 'incorreto' ) : $( '[name="nome"]' ).removeClass( 'incorreto' );
        CargoIsEmpty ? $( '[name="cargo"]' ).addClass( 'incorreto' ) : $( '[name="cargo"]' ).removeClass( 'incorreto' );
        EmailIsEmpty || !emailIsValid ? $('[name="email"]').addClass('incorreto') : $('[name="email"]').removeClass('incorreto');
        
		
		if(nomeDaEmpresaIsEmpty){
			 $( '[name="nomeDaEmpresa"]' ).addClass( 'incorreto' );
			 return false;
		}else{ 
			$( '[name="nomeDaEmpresa"]' ).removeClass( 'incorreto');
		}
        
        var cnpj = $('[name="cnpj"]').val() == '';

        if (cnpj) {
            $(".error-cnpj").show();
            $('[name="cnpj"]').addClass('incorreto');
            return false;
        } else {
            $('[name="cnpj"]').removeClass('incorreto');
		
			$.ajax( {
				type: 'POST',
				url: 'vcnp.php',
				data: $( '#form-simule' ).serialize(),
				success: function ( response )
                {
                    
				   if (response == 'true') {
						/*		*****	*****	[if ok send mail]	*****	*****	*/
							if ( !NomeIsEmpty && !CargoIsEmpty && !EmailIsEmpty && emailIsValid )
							{
								$( '.box-form-1' ).fadeOut( function ()
								{
									$( '.box-form-2' ).fadeIn();
								} );
					
								sendFormSimule();
								ga( 'send', 'event', 'http://brfinancial-net.umbler.net/', 'click', 'Download clicado' );
							} //End if ok Send 
						/*		*****	*****	[if ok send mail]	*****	*****	*/
					} else {
						/*		*****	*****	[if not ok send mail]	*****	*****	*/

                            setTimeout(function () { 
                                $('[name="cnpj"]').addClass('incorreto').addClass('blink'); 
                                $(".error-cnpj").show();
                            },250);

                            setTimeout(function () { 
                                $('[name="cnpj"]').removeClass('blink'); 
                            },1800);
						/*		*****	*****	[if not ok send mail]	*****	*****	*/
					}//End if response
				}//End success
			} );
        }//End if CNPJ send 
		return false;
    } );

    $('#simule-enviar').click(function () {

        if ($('[name="empresa"]').val().length < 2) { $('[name="empresa"]').addClass('incorreto'); return false; } else { $('[name="empresa"]').removeClass('incorreto') }
        if ($('[name="segmento"]').val()== 'false') { $('[name="segmento"]').addClass('incorreto'); return false; } else { $('[name="segmento"]').removeClass('incorreto') }
        if ($('[name="atuacao"]').val() == 'false') { $('[name="atuacao"]').addClass('incorreto'); return false; } else { $('[name="atuacao"]').removeClass('incorreto') }
        if ($('[name="numero-funcionario"]').val() == 'false') { $('[name="numero-funcionario"]').addClass('incorreto'); return false; } else { $('[name="numero-funcionario"]').removeClass('incorreto') }
        if ($('[name="telefone"]').val().length < 7) { $('[name="telefone"]').addClass('incorreto'); return false; } else {$('[name="telefone"]').removeClass('incorreto') }

        $(".titulo-formulario").html($(".titulo-formulario").attr('texto'));
        $( ".texto-formulario" ).html( $( ".texto-formulario" ).attr( 'texto' ) );
        $( "#simule-agora > div" ).addClass( 'modal-lg-1100' );

        $( '.box-form-2' ).fadeOut( function ()
        {
            $('.box-form-3').fadeIn();
        } );
        return false;
    } );
/*
	****	****	****	[	Simulation Form		]	****	****	****
*/

function verefyEmail(idDoCampo){

	var valida = idDoCampo.val();
	var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var emailIsValid = filterEmail.test( valida );
	
	if(!emailIsValid){
		idDoCampo.addClass('incorreto-footer');
		return 0;
	} else {
		idDoCampo.removeClass('incorreto-footer');
	}

	if(valida.length < 5){
		idDoCampo.addClass('incorreto-footer');
		return 0;
	} else{
		idDoCampo.removeClass('incorreto-footer');
	}

}//function verefyEmail()
 
/*
	****	****	****	[	Send form footer		]	****	****	****
*/
     function sendFormSimuleErs( callbackSuccess, callbackError, callbackBeforeSend, campos )
     {
         $("#send-mail-footer").modal( 'show' );
		 	 
         setTimeout( function ()
         {
             $.ajax( {
                 type: 'POST',
                 url: 'sendmail.php',
                 data: $( '#contact-box-news' ).serialize(),
                 success: function ( response2 )
                 {
                   //  $("#send-mail-footer").modal( 'hide' );
                 }
             } );
             clearTimeout();
         }, 1000 );
     }

     $( '#contact-box-news > button' ).click( function ( e )
     {

		if(verefyEmail($(".email-footer-no-empty")) === 0 ) 
		{
			
		} else {
			 
			 e.preventDefault();
			 var camposIsNotEmpty = 1;
			 sendFormSimuleErs( successSendSimule, beforeSendSimule );
		}
     } );
/*
	****	****	****	[	Send form footer		]	****	****	****
*/


/*
	****	****	****	[	Send form rescue		]	****	****	****
*/
	 $(".bt-i-want-to-receive-news").click(function(){
		$(".bt-i-want-to-receive-news-action").hide();
		$(".bt-i-do-not-want-to-receive-mail").show();
	 });
	
	 $(".bt-i-do-not-want-to-receive-news").click(function(){
		bioEp.hidePopup();
	 });

     function sendFormSimuleErsrescue( callbackSuccess, callbackError, callbackBeforeSend )
     {
         $("#send-mail-footer").modal( 'show' );
		 
         setTimeout( function ()
         {
             $.ajax( {
                 type: 'POST',
                 url: 'sendmail.php',
                 data: $( '#form-out-page-main' ).serializeArray(),
                 success: function ( response2 )
                 {
                     $("#send-mail-footer").modal( 'hide' );
                 }
             } );
             clearTimeout();
         }, 1000 );
     }

     $( '#form-out-page-main-bt' ).click( function ( e )
     {
		 e.preventDefault();
         var camposIsNotEmpty = 1;
		 
		if(verefyEmail($(".footer-rescue-input")) === 0 ) 
		{
			
		} else {
			 sendFormSimuleErsrescue( successSendSimule, beforeSendSimule );
			 bioEp.hidePopup();
		}

     } );
/*
	****	****	****	[	Send form rescue		]	****	****	****
*/

    jQuery(function ($) {
        $('#estoque').mask("999.999.999-99");
    });
    
    $( '#simule-enviar-final' ).click( function ( e )
    {

        if ($('[name="estoque"]').val().length < 2) { $('[name="estoque"]').addClass('incorreto'); return false; } else { $('[name="estoque"]').removeClass('incorreto') }
        if ($('[name="venda"]').val().length < 2) { $('[name="venda"]').addClass('incorreto'); return false; } else { $('[name="venda"]').removeClass('incorreto') }
        if ($('[name="prazoentrega"]').val().length < 2) { $('[name="prazoentrega"]').addClass('incorreto'); return false; } else { $('[name="prazoentrega"]').removeClass('incorreto') }
        if ($('[name="prazomedioprodutos"]').val().length < 2) { $('[name="prazomedioprodutos"]').addClass('incorreto'); return false; } else { $('[name="prazomedioprodutos"]').removeClass('incorreto') }
        if ($('[name="prazomedioclientes"]').val().length < 2) { $('[name="prazomedioclientes"]').addClass('incorreto'); return false; } else { $('[name="prazomedioclientes"]').removeClass('incorreto') }
        if ($('[name="mediafaturamento"]').val().length < 2) { $('[name="mediafaturamento"]').addClass('incorreto'); return false; } else { $('[name="mediafaturamento"]').removeClass('incorreto') }
        if ($('[name="estados"]').val() == 'false') { $('[name="estados"]').addClass('incorreto'); return false; } else { $('[name="estados"]').removeClass('incorreto') }

        e.preventDefault();
	    $('.modal-header' ).hide();

        var campos = $( '#form-simule' ).serializeArray();
        var camposIsNotEmpty = 1;

        $( '.box-form-1' ).fadeOut();
        $( '.box-form-2' ).fadeOut();
        $( '.box-form-3' ).fadeOut();
        $( '.box-form-4' ).fadeIn();

        $( "#simule-agora > div" ).removeClass( 'modal-lg-1100' );
        $( '#simule-enviar' ).addClass( 'bg-linear-strawberry-0' );
        sendFormSimule( successSendSimule, beforeSendSimule );
       
    } );

    var hash = window.location.hash;

    if ( hash != '' )
    {
        $( hash ).modal( 'show' );
    }

    $( '.scroll-smoth' ).click( function ()
    {
        if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname )
        {
            var target = $( this.hash );
            target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );

            if ( target.length )
            {
                var ajuste = '#por-que' == this.hash ? 100 : 0;

                $( 'html,body' ).animate( {
                    scrollTop: '#topo' == this.hash ? 0 : target.offset().top - ajuste
                }, 1000 );

                return false;
            }
        }
    } );

    function clearTextToNumber( value )
    {
        return parseInt( value.replace( '.', '' ) );
    }

    function formateNumber( value )
    {
        value = String( value );
        var length = value.length;

        if ( length > 3 )
        {
            value = value.split( '' );
            value.splice( length - 3, 0, '.' );
            value = value.join( '' );
        }

        return value;
    }

    function animationCount()
    {
        $( '.count' ).each( function ( index, element )
        {
            setInterval( function ()
            {
                var maxValue = $( element ).attr( 'max-value' );
                var value = clearTextToNumber( $( element ).text() );

                if ( value < maxValue )
                {
                    value += Math.round( maxValue / 688 ) * 2;
                    $( element ).text( formateNumber( value < maxValue ? value : maxValue ) );
                }
            }, 1 );
        } );
    }

    function checkCount()
    {
        var windowHeight = $( window ).height();
        var windowTop = $( window ).scrollTop();
        var proximoNivelTop = $( '#proximo-nivel' ).offset().top;
        var animate = $( '#proximo-nivel' ).data( 'animation-count' );

        if ( windowTop + windowHeight > proximoNivelTop && Boolean( animate ) )
        {
            $( '#proximo-nivel' ).data( 'animation-count', false );
            animationCount();
        }
    }

    checkCount();

    $( window ).scroll( checkCount );
} );