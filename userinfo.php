<?php
session_start(); //always start session at top of everything

//establishing connection

$ses1=$_SESSION['sesemail'];

$connect=mysqli_connect('sql210.byetcluster.com','epiz_28585417','hdAhPM4MAXGwLT','epiz_28585417_project2form');

$query1=" select * from applicationform where EMAIL='$ses1' ";
$call1=mysqli_query($connect,$query1);
$array1=mysqli_fetch_array($call1);

if ($array1['EMAIL']) {
	


if ($_SESSION['sesemail']) {
	

$ses=$_SESSION['sesemail'];


//fetching data

$query=" select * from applicationform where EMAIL='$ses' ";
$call=mysqli_query($connect,$query);
$array=mysqli_fetch_array($call);

}
else{
	header('location:login.php');
}

}

else{
	?>
	<script type="text/javascript">
		alert('You have not yet applied for this post')
		location.href="applicationform.php";
	</script>
	<?php
}


?>


<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">

		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		
                          #main_cont{

                                width: 100vw;
                                height: 100vh;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                          }         


                          #first{

                             width: 30vw;
                             height: 100vh;
                             display: flex;
                             justify-content: center;
                             align-items: center;

                          }     

                          #second{

                          	width: 70vw;
                          	height: 100vh;
                          	background-image: url('datacheck.svg');
                          	background-size: 100% 100%;
                          	background-repeat: no-repeat;
                          	border:none;
                          	outline: none;
                          } 

                          #user_data{

                          	width: 90%;
                          	height: 80%;
                          	background-color: #2F4F4F;
                          	padding: 10px;
                          	border-radius: 10px;
                          	box-shadow: 0 0 6px 4px grey;
                          }

                          #wcom{
                          	display: flex;
                          	justify-content: center;
                          	align-items: center;
                          }

                          #greet{

                          	color: #F8F8FF;
                          	text-transform: capitalize;
                          	font-weight: 400;
                          }


                          #data_box{

                          	width: 100%;
                          	height: 70%;
                            margin-top: 50px;

                          }

                          #list_data{
                            
                            width: 100%;
                            height: 100%;
                          	display: block;
                          	padding-left: 20px;
                          }

                          #list_data li{

                          	list-style: none;
                          	color: #F8F8FF;
                          	margin: 25px 0 25px 0;
                          	font-weight: 300;
                          	text-transform: capitalize;
                          }

                          span{
                          	width: 50%;
                          }

                          #log_out{

                          	width: 100%;
                          	height: 10%;
                          	display: flex;
                          	justify-content: center;
                          	align-items: center;
                          	margin-top: 10px;
                          }

                          #log_out a{
                          	width: 30%;
                          	height: 70%;
                          	border:none;
                          	outline: none;
                          	border-radius: 8px;
                          	background-color: #ADD8E6;
                          	font-weight: 800;
                          	display: flex;
                          	justify-content: center;
                          	align-items: center;
                          	text-decoration: none;
                          	color: black;
                          }

                          @media(max-width: 1080px){

                           #second{

                           	display: none;
                           }

                           #first{
                           	width: 90%;
                           	height: 70%;
                           }

                           #user_data{
                              height: 100%;
                            }

                           #wcom{
                           	height: 20%;
                           }

                           #greet{
                           	font-size: 250%;
                           }

                           #data_box{
                           	height: 65%;
                           	display: flex;
                           	justify-content: flex-end;
                           	align-items: center;
                           	margin: 0;
                           }

                           #list_data{
                           	max-width: 80%;
                           }

                           #list_data li{

                          	font-size: 200%;
                          	margin: 55px 0 55px 0;
                          	
                          }

                           #log_out{

                          	
                          	height: 10%;
                          	
                          	margin-top:0;
                          }


                          #log_out a{
                          	font-size: 200%;
                          }


                          }


	</style>
</head>
<body>

	<main id="main_cont">
		<section id="first">
			
			<div id="user_data">
				<div id="wcom"><h3  id="greet">Welcome <?php echo $array['APPLICANTNAME']; ?> </h3></div>
				<div id="data_box">
					<ul id="list_data">
						<li>Applicant Id&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['ID']; ?></li>
						<li>Name&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['APPLICANTNAME']; ?></li>
						<li>Qualification&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['QUALIFICATION']; ?></li>
						<li>Contact&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['CONTACT']; ?></li>
						<li>E-mail&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['EMAIL']; ?></li>
						<li>Reference&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['REFERENCE']; ?></li>
						<li>Post&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $array['POST']; ?></li>
						<li>Status&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;Applied Successfully</li>
					</ul>
				</div>
				<div id="log_out"><a href="logout.php">Log Out</a></div>
			</div>
		</section>
		<select id="second"></select>
		
	</main>

</body>
</html>