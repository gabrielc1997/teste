$(document).ready(function () {

    function reduzirsize(size) {

        if (size < 1000) {
            return size+'bytes';
        } else if (size >= 1001 && size < 1000000) { 
            tamanhoDoArquivo = (size / 1000);
            tamanhoDoArquivo = tamanhoDoArquivo.toFixed(1);
            return tamanhoDoArquivo = '<b>'+tamanhoDoArquivo  + ' </b>KB';

        }else if (size >= 1000000 && size < 1000000000) {
            if (size > 7000000) { // 6 zeros = mega
                return false;
            }

            tamanhoDoArquivo = size / 1000000;
            tamanhoDoArquivo = tamanhoDoArquivo.toFixed(1);
            return t = '<b>'+tamanhoDoArquivo + ' </b>MB';
        }

    }//end     function reduzirsize


    $('.file_drag_area').on('dragover', function(){  
         $(this).addClass('file_drag_over');  
         return false;  
    });  
    $('.file_drag_area').on('dragleave', function(){  
         $(this).removeClass('file_drag_over');  
         return false;  
    });  
    $('.file_drag_area').on('drop', function(e){  
         e.preventDefault();  
         $(this).removeClass('file_drag_over');  
         var formData = new FormData();  
         var files_list = e.originalEvent.dataTransfer.files;  
        //console.log(files_list);
        $("#id_file_drag > img").hide();

        var arquivoEnvioSize = reduzirsize(e.originalEvent.dataTransfer.files[0].size);
        var arquivoEnvioName = e.originalEvent.dataTransfer.files[0].name;
        
        if (!arquivoEnvioSize) {
            
            $("#id_file_drag")
                .append('<div class="row"><div class="class-up-arquivos"><div class="class-up-arquivos-1"><img width="20" height="auto" src="assets/img/doc-icon.png"></div><div class="class-up-arquivos-2"><div style="color:#F00;" clas="alert alert-danger"> - Arquivo muito grande - '+arquivoEnvioName+'</div></div></div> </div>')
                .css({ "display": "block" });
            return false;

        } else { 


            for(var i=0; i<files_list.length; i++)  
            {  
                 formData.append('file[]', files_list[i]);  
            }  
            //console.log(formData);  
            $.ajax({  
                 url:"upload.php",  
                 method:"POST",  
                 data:formData,  
                 contentType:false,  
                 cache: false,  
                 processData: false,  
                 success:function(data){                       
                     var valinputfileafter = $("#fileupload").val();
                     $("#fileupload").val(valinputfileafter + ' ' + data).attr('typ');
					 
                    $("#id_file_drag")
                    .append('<div class="row"><div class=" class-up-arquivos '+arquivoEnvioName+'"><div class="class-up-arquivos-1"><img width="20" height="auto" src="assets/img/doc-icon.png"></div><div class="class-up-arquivos-2">- ' + arquivoEnvioSize +' - '+arquivoEnvioName+ '</div> </div> </div>')
                    .css({"display": "block"});

                    $('#uploaded_file').append(data).addClass('pt-xs-50');
                    $('#fileupload').append(data);
                 }  
            }) 
        }

    });  
});  


$(document).ready(function ()
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
                $( '.box-success' ).fadeIn();
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

    $( '#simule-continuar' ).click( function ( e )
    {
        e.preventDefault();

        var NomeIsEmpty = $( '[name="nome"]' ).val() == '';
        var CargoIsEmpty = $( '[name="cargo"]' ).val() == '';
        var EmailIsEmpty = $( '[name="email"]' ).val() == '';
        var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var emailIsValid = filterEmail.test( $( '[name="email"]' ).val() );

        NomeIsEmpty ? $( '[name="nome"]' ).addClass( 'incorreto' ) : $( '[name="nome"]' ).removeClass( 'incorreto' );
        CargoIsEmpty ? $( '[name="cargo"]' ).addClass( 'incorreto' ) : $( '[name="cargo"]' ).removeClass( 'incorreto' );
        EmailIsEmpty || !emailIsValid ? $( '[name="email"]' ).addClass( 'incorreto' ) : $( '[name="email"]' ).removeClass( 'incorreto' );

        if ( !NomeIsEmpty && !CargoIsEmpty && !EmailIsEmpty && emailIsValid )
        {
            $( '.box-form-1' ).fadeOut( function ()
            {
                $( '.box-form-2' ).fadeIn();
            });
            
            sendFormSimule();
            ga( 'send', 'event', 'http://brfinancial-net.umbler.net/', 'click', 'Download clicado' );
        }
    } );
	
	

    $( '#simule-enviar' ).click( function ()
    {
         
        $(".titulo-formulario").html($(".titulo-formulario").attr('texto'));
        $(".texto-formulario").html($(".texto-formulario").attr('texto'));
        $("#simule-agora > div").addClass('modal-lg');

        $('.box-form-2').fadeOut(function ()
        {
            $( '.box-form-3' ).fadeIn();
        });
        return false;
    } );


   
        $( '#simule-enviar-final' ).click(function ( e )
        {
            e.preventDefault();

            var campos = $( '#form-simule' ).serializeArray();
            var camposIsNotEmpty = 1;
				
			$('.box-form-1').fadeOut();
			$( '.box-form-2' ).fadeOut();
			$( '.box-form-3' ).fadeOut();
			
			$("#simule-agora > div").removeClass('modal-lg');
			$( '#simule-enviar' ).addClass( 'bg-linear-strawberry-0' );
			sendFormSimule(successSendSimule,  beforeSendSimule);
             
        } );

    var hash = window.location.hash;

    if ( hash != '' )
    {
        $( hash ).modal( 'show' );
    }

    $('.scroll-smoth').click(function ()
    {
        if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname )
        {
            var target = $( this.hash );
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if ( target.length )
            {
                var ajuste = '#por-que' == this.hash ? 100 : 0;

                $('html,body').animate({
                    scrollTop: '#topo' == this.hash ? 0 : target.offset().top - ajuste
                }, 1000);

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