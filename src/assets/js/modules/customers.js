document.addEventListener("DOMContentLoaded", () => {


    const getCookie =(name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');


    // Model View
    $('#createCampaignModal').on('show.bs.modal', function (event) {
        var modal = $(this);
        var hiddenUrl = $("#hiddenUrl").val();

        $.ajax({
            url: hiddenUrl,
            type: 'GET',
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data) {
                modal.find('.modal-content').html(data.form_html); // Insert form_html into the modal body
            }
        });
    });

    // Send form Value 
    $('#createCampaignModal').on('submit', '#wonCampaignForm', function (event) {
        event.preventDefault();
        var form = $(this);
        var formUrl = $(this).data("url");

        $.ajax({
            url: formUrl,
            type: 'POST',
            data: form.serialize(),
            success: function (data) {
                if (data.success) {
                    // Zeige eine Erfolgsmeldung auf der Seite an
                    $('#successMessage').text('Kampagne erfolgreich gespeichert.');
                    $('#createCampaignModal').modal('hide');
                    // Leere das Formular
                    form.trigger('reset');
                } else {
                    // Zeige eine Fehlermeldung auf der Seite an
                    $('#errorMessage').text('Fehler beim Speichern der Kampagne.');
                }
            }
        });
    });

    // Open Form Customer
    $('#openCustomerFormModal').on('show.bs.modal', function(event) {
        var modal = $(this);
        var formUrl = $("#formUrl").val();

        $.ajax({
            url: formUrl,
            type: 'GET',
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data) {
                modal.find('.modal-content').html(data.form); // Insert form_html into the modal body
            }
        });
    });


    $('#openCustomerFormModal').on('submit', '#customerForm', function (event) {
        event.preventDefault();
        var form = $(this);
        var formUrl = $(this).data("url");
        $.ajax({
            url: formUrl,
            type: 'POST',
            data: form.serialize(),
            success: function (data) {
                if (data.success) {
                    $('#openCustomerFormModal').modal('hide');
                    setTimeout(updateDataTable, 500);
                    // Hier können Sie Aktionen durchführen, z.B. die Liste der Kunden aktualisieren
                } else {
                    // Zeige Fehlermeldungen an
                    // data.errors enthält die Fehlermeldungen
                }
            }
        });
    });


    // Customer Update Form View 
    $('.open-update-modal').on('click', function () {
        var customerId = $(this).data('customer-id');
        var modal = $('#updateCustomerModal');

        $.ajax({
            url: '/customer/customers/' + customerId + '/update/',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                modal.find('.modal-content').html(data.form_html);
                modal.modal('show');
                $('#customerId').val(customerId)
            }
        });

    });



    $('#updateCustomerModal').on('submit', '#updateCustomerForm', function (event) {
        event.preventDefault();
        var form = $(this);

        var customerIdUrl = $('#customerId').val();

        $.ajax({
            url: '/customer/update/' + customerIdUrl + '/',
            type: 'POST',
            data: form.serialize(),
            success: function (data) {
                if (data.success) {
                    $('#updateCustomerModal').modal('hide');
                    setTimeout(updateDataTable, 500);
                    // Hier können Sie Aktionen durchführen, z.B. die Kundenliste aktualisieren
                }
            }
        });
    });

});