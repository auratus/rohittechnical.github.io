<!DOCTYPE html>
<html>
<head>
	<title>Calculator</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet">
	<style type="text/css">

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
		body{
			font-family: 'Josefin Sans', sans-serif;
		}

		#main{
           width: 100%;
           height: 100vh;
           background-color: #66CDAA;
           display: flex;
           justify-content: center;
           align-items: center;
		}

		#child{
			width: 50%;
			height: 60%;
			background-color: #778899;
			border-radius: 30px;
			padding: 15px 10px 0 10px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
			box-sizing: border-box;
		}

		#first{
			width: 30%;
			height:auto;
		}

		#second{

			width: 40%;
			height: auto;
			display: block;
		}

		#second div{

			padding: 0 0 10px 0;
		}

		#left{
			color: #66CDAA;
			font-weight:bolder;
			animation-name: zoom;
			animation-duration: 1.1s;
			animation-timing-function: ease;
			animation-iteration-count: infinite;
			font-size: 150%;
			padding-top: 9px;
			opacity: 1;
		}

		@keyframes zoom{
			0%{transform: scale(1,1);}
			50%{transform: scale(0.97,0.97);}
			100%{transform: scale(1,1);}
		}

		#line{
			width: auto;
			height: 60px;
			border-left: 3.5px solid #66CDAA;

		}

		#num1{
			width: 95%;
			border:none;/* eliminate border without click*/
			text-align: center;
			padding: 8px;
			background-color: #778899;
			border-bottom: 1px dashed #87CEFA; 
			outline: none; /*eliminate the border when we click the input*/
			margin: 8px 0;
		}

		#num2{
			width: 95%;
			border:none;
			text-align: center;
			padding: 8px;
			background-color: #778899;
			border-bottom: 1px dashed #87CEFA; 
			outline: none;
			margin: 8px 0;
		}

		::placeholder{  /*used to modify placeholder*/
			color: white;
			font-family: 'Josefin Sans', sans-serif;
			font-size: 90%
		}

		#operations select{
            
            width: 95%;
			font-family: 'Josefin Sans', sans-serif;
			outline: none;
			border:none;
			padding: 8px;
			margin: 8px 0;
			text-align: center;
		}

		#operations select option{
			font-size: 80%;
		}

		#buttons input{
			padding: 8px;
			background-color:#66CDAA;
			/*border:none;*/
			outline: none;
			color: white;
			border-radius: 6px;
			font-size: 90%;
			margin: 8px 6.5px 0 6.5px;

		}

		#third{
			width: 50%;
			height: auto;
		}

		#third p{
			text-align: center;
			color: white;
		}

		@media(max-width: 1080px){

			#child{
				width: 100vw;
				height: 70vh;
				flex-direction: column;
			}

			#first{
				margin-top: 8vh;
				height: 5vh;
			}

			#line{

				height: 6vh;
			}

			#left{

			    line-height: 2.5vh;
			    font-size: 4vw;
			    padding-top: 0.7vh;
			}

			#second{
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 80vw;
				height: auto;
			}

			#num1{
				width: 70vw;
				height: 2vh;
				margin: 1vh 0 1vh 0;
			}

			#num2{
				width: 70vw;
				height: 2vh;
				margin: 1vh 0 1vh 0;
			}

			#operations select{
				width: 50vw;
				text-align: center;
				margin: 1vh 0 1vh 0;
			}

			::placeholder{  /*used to modify placeholder*/
			font-size:2.5vw;
		}

		#buttons{

			margin: 2vh 2vw 0 2vw;
		}

		 #buttons input{
           width:12vw;
           height:3vh;
           margin:0 2vw 0 2vw;
           font-size:2.5vw;
         }

		#third p{
			font-size: 2.5vw;
		}

		}


	</style>
</head>
<body>
      <main id="main">
      	    <div id="child">
      	    	<section id="first">
      	                 <section id="line"><h2 id="left">&nbsp;PHP &nbsp;CALCULATOR</h2></section>
      	    	</section>
      	    	<form id="second" method="POST">
      	    		<div>
      	    			<input type="text" name="firstnum" placeholder="ENTER FIRST NUMBER" id="num1">
      	    		</div>
      	    		<div>
      	    			<input type="text" name="secondnum" placeholder="ENTER SECOND NUMBER" id="num2">
      	    		</div>
      	    		<div id="operations">
      	    			<select name="operations">
      	    				<option class="selection" value="so">SELECT OPERATION</option>
      	    				<option class="selection" value="add">ADDITION</option>
      	    				<option class="selection" value="sub">SUBSTRACTION</option>
      	    				<option class="selection" value="mul">MULTIPLICATION</option>
      	    				<option class="selection" value="div">DIVISION</option>
      	    			</select>
      	    		</div>
      	    		<div id="buttons">
      	    			<input type="submit" name="submit" value="SUBMIT">
      	    			<input type="submit" name="reset" value="RESET">
      	    		</div>
      	    	</form>
                          <section id="third">
                          	       <p>
                          	       	  <?php

                                      if (isset($_POST['submit'])) {
                                      	if ($_POST['firstnum']!=null&&$_POST['secondnum']!=null) {
                                      		$num1=$_POST['firstnum'];
                                      		$num2=$_POST['secondnum'];
                                      		$op=$_POST['operations'];
                                      		switch ($op) {
                                      			case 'so':
                                      				echo 'Please select valid operation to perform';
                                      				break;
                                      			case 'add':
                                      				echo 'The addition of '.$num1.' and '.$num2.' is '.($num1+$num2).'.';
                                      				break;
                                      			case 'sub':
                                      				echo 'The difference of '.$num1.' and '.$num2.' is '.($num1-$num2).'.';
                                      				break;	
                                      			case 'mul':
                                      				echo 'The product of '.$num1.' and '.$num2.' is '.($num1*$num2).'.';
                                      				break;
                                      			case 'div':
                                      				echo 'The division of '.$num1.' and '.$num2.' is '.($num1/$num2).'.';		
                                      				break;
                                      		}
                                      	}
                                      	else{
                                      		echo "Please enter numbers to continue.";
                                      	}
                                      }

                          	       	  ?>
                          	       </p>
                          </section>      	    	
      	    </div>
      </main>
</body>
</html>