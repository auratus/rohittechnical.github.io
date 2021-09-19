<?php 

session_start();

$form_lout=$_SESSION['sesemail'];
$session_name=$_SESSION['sesname'];

?>


<!DOCTYPE html>
<html>
<head>
	<title>JOB APPLICATION</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
<style type="text/css">
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body{
              
             font-family: 'Poppins', sans-serif;
		}

		#supreme{
			width: 100vw;
			height: 80vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		#main_cont{
			width: 80vw;
			height: 100%;
			background-image: linear-gradient(to right,#191970,#1E90FF);
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		#instruction{
			width: 20%;
			height: 70%;
			display: flex;
			justify-content:space-around;
			align-items: center;
			flex-direction: column;
		}

		#fill_form{
			width: 70%;
			height: 85%;
			background-color: white;
			border-radius: 13% 0% 0% 13% / 50% 0% 0% 50%;
			display: flex;
			justify-content:space-around;
			align-items: center;
			flex-direction: column;
			
		} 

	#instruction h3{
		font-weight:900;
		color: white;
	}	

		#instruction p{
			text-align:center;
			font-size: 65%;
			line-height:145%;
			color: white;
			font-weight:600;
			letter-spacing:0.9px;
		}

		#instruction a{
			text-decoration: none;
			font-size: 80%;
			color: black;
			padding: 8px;
			border-radius:10% 10% 10% 10% / 50% 50% 50% 50%;
			background-color: white;
			font-weight: 900;
		}

		#user_data{
			width: 80%;
			height: 70%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
		}

		#inputs{
			width: 85%;
			height: 60%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
		}

		#inputs input{
			height: 21%;
			width: 45%;
			font-weight: 700;
			/*padding:8px 0 8px 0;*/
			text-align: center;
			outline: none;
			border-radius: 6px;
			border:1px solid grey;
		}

		::placeholder{
			color:#696969;
			text-align: center;
			font-size: 80%; 
			font-family: 'Poppins', sans-serif;
			font-weight: 550;
		}

		#submit{
			height: 30%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		#submit input{
			/*width: 8vw;
			height: 6vh;*/
			background-color:#6495ED;
			color: white;
			border-radius:10% 10% 10% 10% / 50% 50% 50% 50%;
			font-size: 80%;
			padding: 14px 18px 14px 18px;
		}

		#fill_form h4{
			color: #696969;
			font-weight: 900;
		}

		#apply{
			height: 25%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		#dynamic{
			height:20%;
			display:none;
			justify-content: center;
			align-items: center;
		}

		#exist{
			font-size: 90%;
			color: #2F4F4F;
		}

		#nav{
			width: 30%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		#head_er{
			width: 90%;
			height: 10vh;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}

		#head_sec {

		
			background-color: #B0C4DE;
			color: black;
			text-decoration: none;
			padding: 8px 15px 8px 15px;
			border-radius: 5px;
			font-weight: 900;
			
		}

		#user_name{
			min-width: 50%;
			display: flex;
			justify-content:center;
			align-items: center;
		}


		@media(max-width: 1080px){
   
          #main_cont{
          	width: 100%;
          	flex-direction: column;
          }

          #instruction{
          	width: 40%;
          	height: 22%;
          }
           
           #fill_form{
           	width: 95%;
           	height: 70%;
           }

           #instruction img{
           	width: 170px;
           	height: 170px;
           }


	#instruction h3{
		font-size: 150%;
	}

	#instruction p{
		font-size: 100%;
	}

	#instruction a{
			
			font-size: 120%;
			padding: 10px;
		}

		#apply h4{
			font-size: 140%;
		}

		#submit{
			width: 100%;
			height: 35%;
		}

		#submit input{
			font-size: 120%;
			padding: 16px 20px 16px 20px;
		}
		
		#exist{
			font-size: 120%;
		}

		#nav{
			width: 45%;
		}

		#head_er{
			width: 95%;
		}

		#user_name{
			min-width: 60%;
		}

		#user_name img{
            width: 75px;
            height: 75px;
		}

		#user_name p{
			font-size: 150%;
		}


		#head_sec {
			
			font-size: 130%;
			padding: 12px 22px 12px 22px;
			
			
		}


}		

		

	</style>
</head>
<body onload="clear()">

	<header id="head_er">
		<div id="nav">
		<div id="user_name">
		<img src="maleavatar.svg" width="50" height="50">	
		<p> <?php echo $session_name; ?> </p>
		</div>	
		<a href="logout.php" id="head_sec">Log Out</a>
		</div>
	</header>
	<main id="supreme">

		<div id="main_cont">
			<section id="instruction">
				<img src="formsvgimg.png" width="125" height="125">
				<h3>WELCOME</h3>
				<p>PLEASE FILL ALL THE DETAILS CAREFULLY.THIS FORM CAN CHANGE YOUR LIFE</p>
				<a href="userinfo.php">CHECK STATUS</a>
			</section>
			<section id="fill_form">
				<div id="apply">
				<h4>APPLY FOR WEB DEVELOPER POST</h4>
				</div>
				<form id="user_data" method="POST">
				<div id="inputs">
					<input type="text" name="name" placeholder="Enter your name*" required class="null">
					<input type="text" name="degree" placeholder="Enter your qualification*" required class="null">
					<input type="text" name="contact" placeholder="Enter your contact number*" required class="null">
					<input type="email" name="email" placeholder="Enter your e-mail*" required class="null">
					<input type="text" name="reference" placeholder="Reffered by" required class="null">
					<input type="text" name="post" value="Web Developer">
				</div>
				<div id="submit">
				<input type="submit" name="register" value="REGISTER" class="null"> 
				</div>    
				</form>
				<div id="dynamic">
					<h3  id="exist"></h3>
				</div>
			</section>
		</div>
		
	</main>

	<p>
		<?php
             

             	
		?>
	</p>

	<script type="text/javascript">
		function clear(){

			document.getElementsByClassName('null').value="";
		}
	</script>


	<!-- the reason for writing php code at bottom is it throw an error if we try to access any dom element
	prior to page load -->
	<p> 
		

<?php

if ($form_lout) { //if user have logged out then condition returns false
	



   //establishing connection to database

         $username="epiz_28585417"; //"epiz_28585417" for rohittechnical
             $password="hdAhPM4MAXGwLT"; //"hdAhPM4MAXGwLT" for rohittechnical
             $server='sql210.byetcluster.com'; //" sql210.byetcluster.com" for rohittechnical.
             $database='epiz_28585417_project2form';//"epiz_28585417_project2form" for rohittechnical

             $connection=mysqli_connect($server,$username,$password,$database); //strictly follow the argument  
                                                                                //sequence.



             	//inserting data into database

             	if (isset($_POST['register'])) {
             		
             		$usrnm=$_POST['name'];
             		$dgr=$_POST['degree'];
             		$cnt=$_POST['contact'];
             		$mail=$_POST['email'];
             		$rf=$_POST['reference'];
             		$pt=$_POST['post'];
                     

                     $quer=" select * from applicationform where email='$mail' ";
                     $callquer=mysqli_query($connection,$quer);
                     $arr=mysqli_fetch_array($callquer);

                     if ($arr) {
                            
                          ?>
                          <script type="text/javascript">
                          	document.getElementById('dynamic').style.display='flex';
                          	document.getElementById('exist').innerHTML = '*You have already applied for this post';
                          </script>
                          <?php

                     }
                     	
                    else{
             		$insertqry=" insert into applicationform(APPLICANTNAME,QUALIFICATION,CONTACT,EMAIL,REFERENCE,POST) values('$usrnm','$dgr','$cnt','$mail','$rf','$pt') ";

             		$check=mysqli_query($connection,$insertqry);

             		if ($check) {
             			
             		?>
             	<script>
             	        alert('Your application submitted successfully');
                        document.getElementsByClassName('null').value="";
             	        location.href="successful.html";
             	</script>
             	<?php
             }

             else{
             		?>
             	<script>
             	        alert('An error occured while processing your reques!Please try again later');
             	</script>
             	<?php
             	}
 
                    }

             	}


      }
      
      else{
      	?>
      	<script type="text/javascript">
      		alert('You must log in to continue');
      		location.href="login.php";
      	</script>
      	<?php
      }       	


 ?>

	</p>
</body>
</html>