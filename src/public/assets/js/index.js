$('#getButton').click(function getDuplicates() {
    const data = new FormData();
    $.each(jQuery('#file')[0].files, function(i, file) {
        data.append('Uploader', file);
    });

    $.ajax({
        url: '/Upload',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST',
        success: function(){
                location.href = "/download";
        }
    });
    return false;
});
