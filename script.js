function mahoa() {
    /* document.getElementById("nhap_result").value =  */
    var input = document.getElementById("input_title").value;
    var pass = document.getElementById("input_pass").value;
    let index_input = 0;
    let index_pass = 0;
    var kq = ''
    while (index_input < input.length) {
        var a = input[index_input].charCodeAt(0)
        if (index_pass >= pass.length) index_pass = 0;
        a += parseInt(pass[index_pass]);
        kq += String.fromCharCode(a)
        index_pass++;
        index_input++;
    }
    document.getElementById("input_result").value = kq
}
function dichma() {
    /* document.getElementById("nhap_result").value =  */
    var input = document.getElementById("input_title2").value;
    var pass = document.getElementById("input_pass2").value;
    let index_input = 0;
    let index_pass = 0;
    var kq = ''
    while (index_input < input.length) {
        var a = input[index_input].charCodeAt(0)
        if (index_pass >= pass.length) index_pass = 0;
        a -= parseInt(pass[index_pass]);
        kq += String.fromCharCode(a)
        index_pass++;
        index_input++;
    }
    document.getElementById("input_result2").value = kq
}