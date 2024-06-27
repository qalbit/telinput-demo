$(document).ready(function () {
    // $("#contact-form").validate({
    //     rules: {
    //         user_phone: { required: !0, validPhone: !0 },
    //     },
    //     messages: {
    //         user_phone: { required: "Please Enter Your Phone Number." },
    //     },
    //     submitHandler: function (r) {
    //         e().then((t) => {
    //             var a = $(r).serialize();
    //             $("button[name=submit_contact_form]").attr("disabled", !0),
    //                 (a += `&submit_contact_form=${$("button[name=submit_contact_form]").val()}`),
    //                 $(".submit-loader").removeClass("d-none").addClass("d-inline-block"),
    //                 $(".error-message").html(""),
    //                 $.ajax({
    //                     type: "POST",
    //                     url: BASE_URL + "formHandler.php",
    //                     data: a,
    //                     success: function (r) {
    //                         $("button[name=submit_contact_form]").attr("disabled", !1),
    //                             $(".submit-loader").removeClass("d-inline-block").addClass("d-none"),
    //                             r
    //                                 ? (mdtoast.success("Form submited successfully", { duration: 5e3, position: "bottom center" }), $("form")[0].reset())
    //                                 : mdtoast.error("Unwantederror while submiting form. Please try again", { duration: 5e3, position: "bottom center" }),
    //                             e();
    //                     },
    //                     error: function (r) {
    //                         $("button[name=submit_contact_form]").attr("disabled", !1),
    //                             $(".submit-loader").removeClass("d-inline-block").addClass("d-none"),
    //                             (r = JSON.parse(r.responseText)).error &&
    //                                 Object.keys(r.error).forEach(function (e) {
    //                                     $("#" + e)
    //                                         .closest(".form-group")
    //                                         .find(".error-message")
    //                                         .html(r.error[e]);
    //                                 }),
    //                             r.toast && mdtoast.error(r.toast, { duration: 5e3, position: "bottom center" }),
    //                             e();
    //                     },
    //                 });
    //         });
    //     },
    // }),
    // jQuery.validator.addMethod(
    //     "validPhone",
    //     function (e, r) {
    //         console.log(e, r)
    //         return !(e.length > $(r).attr("maxlength") || e.length < $(r).attr("maxlength"));
    //     },
    //     "Please Enter a Valid Phone Number."
    // ),
    
    $('#user_phone').on("change keypress", function () {  
        let r = $(this);
        let e = r.val();
        let errorCount = 0;
        if (e == '') {
            r.siblings('.error-message').text("Please Enter Phone Number.")
            errorCount++;
        }
        if(!e.length > $(r).attr("maxlength") || e.length < $(r).attr("maxlength")) {
            r.siblings('.error-message').text("Please Enter a Valid Phone Number.")
            errorCount++;
        } 
        
        if(errorCount == 0) {
            r.siblings('.error-message').text("")
        }
    })
    $("input[name=country-code]").on("keypress", function (e) {
        return e.preventDefault(), !1;
    }),
    $("input[type=text]").on("keypress", function (e) {
        if (e.key.match(/[^a-zA-Z0-9\s]/gi)) return e.preventDefault(), !1;
    }),
    $("input[type=tel]").on("keypress", function (e) {
        if (e.key.match(/[^0-9]/gi)) return e.preventDefault(), !1;
    })
});
