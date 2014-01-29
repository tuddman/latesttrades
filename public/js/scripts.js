
				var allTrades = [];

    			// mt gox

    			$.ajax({
				url: "https://data.mtgox.com/api/1/BTCUSD/trades?raw",
				type: 'GET',
				crossDomain: true,
				dataType: 'json',
				success:
				function(data) {
                      var trades = [];
                    data = data.slice(0,10);
                      $.each( data, function( key, val ) {
                    var date = data[key].date;
                    var qnty = data[key].amount;
                    var price = data[key].price;

                    var tradeString = 
                    "<tr>" +
                    "<td>" + JSON.stringify(date) + "</td>" + 
                    "<td>" + JSON.stringify(qnty) + "</td>"  +
                    "<td>" + JSON.stringify(price) + "</td>" +
                    "<td>" + "mt gox" + "</td>" +
                    "</tr>";
                    trades.push (tradeString);
                    allTrades.push (tradeString);
                    
                      });

                      $( "<tbody/>", {
                        "class": "table",
                        html: trades.join( "" )
                      }).appendTo( "#mtgox" );                    
                    
				//    console.log(data);
                },
                    error: function() { console.log('mt gox: -----'); },
			}); 


			// bitstamp

    			$.ajax({
				url: 'http://localhost:3000/bitstamp',
				type: 'GET',
				success:
				function(data) {
                      var trades = [];
                    data = data.slice(0,10);
                      $.each( data, function( key, val ) {
                    var date = data[key].date;
                    var qnty = data[key].amount;
                    var price = data[key].price;

                    var tradeString = 
                    "<tr>" +
                    "<td>" + JSON.stringify(date) + "</td>" + 
                    "<td>" + JSON.stringify(qnty) + "</td>"  +
                    "<td>" + JSON.stringify(price) + "</td>" +
                    "<td>" + "bitstamp" + "</td>" +
                    "</tr>";
                    trades.push (tradeString);
                    allTrades.push (tradeString);
                    
                      });

                      $( "<tbody/>", {
                        "class": "table",
                        html: trades.join( "" )
                      }).appendTo( "#bitstamp" );                    
                    
				//    console.log(data);
                },
                    error: function() { console.log('bs : -----'); },
			});

			console.log(allTrades);


