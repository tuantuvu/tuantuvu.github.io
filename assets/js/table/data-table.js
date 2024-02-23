// Data Table JavaScripts

(function($) {
    'use strict';

    function dataTable_view(table_id) {
        $(table_id).DataTable({
            "language": {
                pagingType: "full_numbers",
                search: '<span>Tìm kiếm:</span> _INPUT_',
                searchPlaceholder: '',
                paginate: {
                    'first': 'First',
                    'last': 'Last',
                    'next': $('html').attr('dir') == 'rtl' ? '<span style="font-size:13px;">Trước</span>' : '<span style="font-size:13px;">Sau</span>',
                    'previous': $('html').attr('dir') == 'rtl' ? '<span style="font-size:13px;">Sau</span>' : '<span style="font-size:13px;">Trước</span>'
                },
                sLengthMenu: "<span>Hiển thị&nbsp;</span> _MENU_<span> kết quả</span>",
                sZeroRecords: "Vui lòng chờ ...",
                sInfo: "Hiển thị _START_ đến _END_ trên _TOTAL_ dòng",
                sInfoFiltered: "(tất cả _MAX_ dòng)",
                sInfoEmpty: "Hiển thị 0 đến _END_ trên _TOTAL_ dòng",
            },
        });
    }

    dataTable_view('#threshold_table');
    /* dataTable_view('#aqiwqi_table');
    dataTable_view('#statistic_table'); */
})(jQuery);