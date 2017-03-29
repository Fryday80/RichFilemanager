
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$('.fm-container').richFilemanager({
    baseUrl: '/libs/rich-filemanager/',
    callbacks: {
        beforeCreateImageUrl: function (resourceObject, url) {
            return url; // += 'modified=ImageUrl';
        },
        beforeCreatePreviewUrl: function (resourceObject, url) {
            return url; // += '&modified=previewUrl';
        },
        beforeSelectItem: function (resourceObject, url) {
            return url; // += '&modified=selectItem';
        },
        afterSelectItem: function (resourceObject, url) {
            // example on how to set url into target input and close bootstrap modal window
            // assumes that filemanager is opened via iframe, which is at the same domain as parent
            // https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
//                            $('#target-input', parent.document).val(url);
//                            $('#modal', parent.document).find('.close').click();

            // parent.CKEDITOR.tools.callFunction(getParameterByName('DialogSelectionChangedFuncNum'), "test string from the iframe");

        },
        afterInit: function(fm, fmModel) {
            try {
                parent.CKEDITOR.tools.callFunction(getParameterByName('DialogSelectionChangedFuncNum'), fm, fmModel);
            } catch (e) {

            }
        }
    }
});