$(function() {
    $(document).ready(function() {
        function calculateTip() {
            const billAmount = $('#billAmount').val();
            const serviceQuality = $('#serviceQuality').val();
            let numPeople = $('#totalPeople').val();

            if(billAmount === '' || serviceQuality === 0){
                return;
            }

            if(numPeople === '' || numPeople <= 1) {
                numPeople = 1;
            } else {
                $('#each').css('display','block');
            }

            const totalTip = Math.round((billAmount * serviceQuality) / numPeople).toFixed(2);
            const totalBill = (parseFloat(totalTip) * parseInt(numPeople) + parseFloat(billAmount)).toFixed(2);

            $('#totalTip').css('display','block');
            $('#totalBill').css('display','block');
            $('#tip').text(totalTip);
            $('#bill').text(totalBill)
        }

        $("#calculate").click(calculateTip);
    });

});