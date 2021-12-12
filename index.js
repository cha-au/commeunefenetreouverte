$(document).ready(function () {

    // Lancer la video lance toutes les pistes audio
    $('#video').on('play', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#video").offset().top - 15
        }, 2000);
        $('#audio1')[0].play();
        $('#audio2')[0].play();
        $('#audio3')[0].play();
        $('#audio4')[0].play();
    });

    // Pauser la video pause toutes les pistes audio
    $('#video').on('pause', function () {
        $('#audio1')[0].pause();
        $('#audio2')[0].pause();
        $('#audio3')[0].pause();
        $('#audio4')[0].pause();
    });

    $('.button-audio').on('click', function () {
        // On inverse la couleur du bouton quand on clique dessus
        $(this).toggleClass("button-avec").toggleClass("button-sans");

        // On inverse le texte du bouton
        if ($(this).text() == "Des jours avec") {
            $(this).text("Des jours sans")
        }
        else if ($(this).text() == "Des jours sans") {
            $(this).text("Des jours avec")
        }

        // On mute ou unmute la piste associée au bouton
        audio_track = $(this).prev()[0]
        audio_track.muted = (audio_track.muted == true ? false : true);

        

        // Si bouton de la piste 4, on mute les 3 autres pistes et on update leur texte et leur style
        if ($(this).is("#button-audio-4")) {
            $('#audio1')[0].muted = true;
            $('#audio2')[0].muted = true;
            $('#audio3')[0].muted = true;
            $('#button-audio-1').removeClass('button-avec').addClass('button-sans')
            $('#button-audio-1').text("Des jours sans")
            $('#button-audio-2').removeClass('button-avec').addClass('button-sans')
            $('#button-audio-2').text("Des jours sans")
            $('#button-audio-3').removeClass('button-avec').addClass('button-sans')
            $('#button-audio-3').text("Des jours sans")
        }
    });

    // Si on coupe la piste 1, ça désactive la 2 et la 3
    $('#audio1').on('volumechange', function () {
        if ($('#audio1').prop('muted')) {
            $('#audio-container-2').addClass('audio-disabled');
            $('#audio-container-3').addClass('audio-disabled');
            $('#audio2')[0].muted = true;
            $('#audio3')[0].muted = true;
            $('#button-audio-2').removeClass('button-avec').addClass('button-sans')
            $('#button-audio-2').text("Des jours sans")
            $('#button-audio-3').removeClass('button-avec').addClass('button-sans')
            $('#button-audio-3').text("Des jours sans")
        } else {
            $('#audio-container-2').removeClass('audio-disabled');
            $('#audio-container-3').removeClass('audio-disabled');
        }
    });

    // Si ultime bouton, on unmute 1, 2, 3, on mute 4, on remet les pistes audio et video au début, et on remonte la fenêtre à la video
    $('#button-recommence').on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#video").offset().top - 15
        }, 2000);
        $('#audio1')[0].muted = false;
        $('#audio2')[0].muted = true;
        $('#audio3')[0].muted = true;
        $('#audio4')[0].muted = true;
        $('#audio1')[0].currentTime = 0;
        $('#audio2')[0].currentTime = 0;
        $('#audio3')[0].currentTime = 0;
        $('#audio4')[0].currentTime = 0;
        $('#video')[0].currentTime = 0;
        $('#button-audio-1').removeClass('button-sans').addClass('button-avec')
        $('#button-audio-1').text("Des jours avec")
        $('#button-audio-2').removeClass('button-avec').addClass('button-sans')
        $('#button-audio-2').text("Des jours sans")
        $('#button-audio-3').removeClass('button-avec').addClass('button-sans')
        $('#button-audio-3').text("Des jours sans")
        $('#button-audio-4').removeClass('button-avec').addClass('button-sans')
        $('#button-audio-4').text("Des jours sans")
    })
});
