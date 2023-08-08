document.addEventListener("DOMContentLoaded", () => {


    //  Tabel Sort
    var dataClass = $('#example');
    if(dataClass.length !==0){
        var table = new DataTable('#example', {
            stripeClasses:[],
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/de-DE.json',
            },
        });
    }

});