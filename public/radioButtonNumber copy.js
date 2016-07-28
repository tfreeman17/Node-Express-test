var bank = [10]


	var arr = []
	$('input').change(function(evt){
		var firstNumber= $('input[name="1"]:checked').val()
		var secondNumber= $('input[name="2"]:checked').val()
		var thirdNumber= $('input[name="3"]:checked').val()
		var forthNumber= $('input[name="4"]:checked').val()
		var submit = $('button[type="submit"]')
		var val = $(evt.target).val()
		arr = [firstNumber, secondNumber, thirdNumber, forthNumber]

// select radio buttons group (same name)
var radioButtons = $("input[type='radio'][name='1' || name='2' ]");
// save initial ckecked states
var radioStates = {};
$.each(radioButtons, function(index, rd) {
    radioStates[rd.value] = $(rd).is(':checked');
    if (! rd.is(':checked')){
				rd.attr('disabled','disabled')
			}
});

// handle click event
radioButtons.click(function() {

    // check/unchek radio button
    var val = $(this).val();  
    $(this).prop('checked', (radioStates[val] = !radioStates[val]));    

    // update other buttons checked state
    $.each(radioButtons, function(index, rd) {
        if(rd.value !== val) {
            radioStates[rd.value] = false; 
        }
    });
});

	// $.each($('input[value="'+ val +'"]'), function(i, el){
	// 	el = $(el);
			
	// 		if (! el.is(':checked')){
	// 			el.attr('disabled','disabled')
	// 		}
	// 		else if (':unchecked'){
	// 			el.attr('enable','enable')
	// 		 }
	// 	});
	// });
	 });
	function submitButton(){
		bank [0]= bank[0] - 2;
		$("#showMoney").html("You have $" + bank.toString());
			if (bank[0] === -2){
				alert("You have lost all your money. Please refesh the page to play again.")
			}

		function getNums(results){
			var array2= results.split(",").map(parseFloat);
			console.log(array2)
			$("#displayNumbers").html(array2.toString("Winning Numbers" + array2));
			var winnings = money(compare(array2, arr));
			bank[0] = bank[0] + winnings;
			$("#showMoney").html("You have $" + bank.toString());
		}

		function compare(array2, arr){
			var count = 0;
			for (var i = 0; i < arr.length; i++) {
				for (var j =0; j < array2.length ; j++) {
					if (arr[i] == array2[j]){
					console.log(i + 'i' , j +'j')
					count += 1;

					console.log(count)
					}
				}
			}
			return count;
		}
		function money(count){
			
			var winnings = 0
			if (count === 2){
				winnings += 4;
			} else if (count === 3){
				winnings += 8;
			}else if (count === 4){
				winnings += 40;
			} else{
				winnings;
			}
			console.log(winnings);
			return winnings;
		}
$.get("https://www.random.org/integer-sets/?sets=1&num=4&min=1&max=10&commas=on&sort=on&order=random&format=plain&rnd=new", getNums);
}

	$("#button").click(submitButton);











