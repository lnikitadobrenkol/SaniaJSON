$('#getButton').click(function getDuplicates() {
    const data = new FormData();
    $.each(jQuery('#file')[0].files, function(i, file) {
        data.append('Uploader', file);
        let fileName = file.name.split('.').pop();
        if (fileName !== 'json') {
            alert("I said only JSON!");
        } else {
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
        }
    });
});
