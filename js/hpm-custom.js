// function yesnoCheck() {
//     if (document.getElementById('yesCheck').checked) {
//         jQuery('#ifYes').removeClass('retention_interval_div');
        

//     }
//     else jQuery('#ifYes').addClass('retention_interval_div');
//     $('#ifYes :input').prop('disabled', function(i,oldVal) { return !oldVal; });
// }    



$(".hpm-tabs ul.nav li").click(function () { 
    if($(this).removeClass("selected"))
        $(".hpm-tabs ul.nav li").removeClass("selected");               
    $(this).addClass("selected");        
});


$(document).on("click", ".browse", function() {
    var file = $(this).parents().find(".file");
    file.trigger("click");
    });
    $('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    $("#file").val(fileName);

    var reader = new FileReader();
    reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("preview").src = e.target.result;
        $('#preview').css('display', 'block');
    };
    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

var imgUpload = document.getElementById('upload_imgs')
    , imgPreview = document.getElementById('img_preview')
    , imgUploadForm = document.getElementById('img-upload-form')
    , totalFiles
    , previewTitle
    , previewTitleText
    , img;

    imgUpload.addEventListener('change', previewImgs, false);
    imgUploadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Images Uploaded! (not really, but it would if this was on your website)');
    }, false);

    function previewImgs(event) {
    totalFiles = imgUpload.files.length;
    
    if(!!totalFiles) {
        imgPreview.classList.remove('quote-imgs-thumbs--hidden');
        previewTitle = document.createElement('p');
        previewTitle.style.fontWeight = 'bold';
        previewTitleText = document.createTextNode(totalFiles + ' image(s) selected');
        previewTitle.appendChild(previewTitleText);
        imgPreview.appendChild(previewTitle);
    }
    
    for(var i = 0; i < totalFiles; i++) {
        img = document.createElement('img');
        img.src = URL.createObjectURL(event.target.files[i]);
        img.classList.add('img-preview-thumb');
        imgPreview.appendChild(img);
    }

   

}