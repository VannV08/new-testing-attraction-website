function Main(){
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>Treat Your Pets</title>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Pacifico&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
</head>
<body>
    
    <div class="header">
        <div class="picture" style="margin-left: 10px;">
            <img src="photo_2023-08-10_19-34-52.jpg" alt="">
        </div>
        <div class="text">
            <div class="text1">
                <h2>Pet Shop</h2>
                <h3>Your best choice</h3>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="icon" style="margin-right: 10px;">
                <a href="#" onclick="Search()"><i class="fas fa-search"></i></a>
                <a href="#" onclick="Login()"><i class="far fa-user"></i></a>
                <a href="#" onclick="Wish_List_card()"><i class="far fa-heart"></i></a>
                <a href="#" onclick="Card()"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
    <div class="content">
        <img src="photo_2023-08-09_16-38-45.jpg" alt="">
        <div class="con-text">
            <h1>Treat Your</h1>
            <h1>Pets to the</h1>
            <h1>Finest Food !</h1><br>
            &emsp;<button>SHOP NOW</button>
        </div>
    </div>
    <div class="container">
        <div class="category">
            <div class="animal">
                <div onclick=" Dog()" class="image">
                    <img src="photo_2023-08-09_16-39-09.jpg" alt="">
                </div>
                <div class="image-text">
                    <h2>Dogs</h2>
                </div>
            </div>
            <div class="animal">
                <div class="image">
                    <img onclick=" Cat()" src="photo_2023-08-09_16-39-15.jpg" alt="">
                </div>
                <div class="image-text">
                    <h2>Cats</h2>
                </div>
            </div>
            <div class="animal">
                <div class="image">
                    <img onclick="Fish()" src="photo_2023-08-09_16-39-21.jpg" alt="">
                </div>
                <div class="image-text">
                    <h2>Fish</h2>
                </div>
            </div>
            <div class="animal">
                <div class="image">
                    <img onclick="Smallpets()" src="photo_2023-08-09_16-39-27.jpg" alt="">
                </div>
                <div class="image-text">
                    <h2>Small Pets</h2>
                </div>
            </div>
        </div>
        <div class="items" style="margin-top: 20px;">
            <div class="box">
                <div class="sub_box">
                    <div class="sub_box1">
                        <div class="box1">
                            <img src="photo_2023-08-09_16-39-34.jpg" alt="">
                            <div class="icon-box">
                                <a href=""><i class="far fa-heart"></i></a><br>
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="box2">
                            <p>SmartHeart Fresh</p>
                            <p>Sterilised Goat Milk</p>
                            <p>Pouch for Pet 70ml</p>
                        </div>
                        <div class="box3">
                            <h2>$0.90</h2>
                            <div class="shop">
                                <a href=""><i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub_box">
                    <div class="sub_box1">
                        <div class="box1">
                            <img style="width: 90%; border-radius: 10px;" src="photo_2023-08-09_16-39-41.jpg" alt="">
                            <div class="icon-box">
                                <a href=""><i class="far fa-heart"></i></a><br>
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="box2">
                            <p>Cinnamoroll Cozy Pet</p>
                            <p>House Kennel Bed</p>
                            <p>Removeable and Washable.</p>
                        </div>
                        <div class="box3">
                            <h2>$26.00</h2>
                            <div class="shop">
                                <a href=""><i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="box">
                <img src="photo_2023-08-09_16-39-47.jpg" alt="">
            </div>
        </div>
        <div class="items" style="margin-top: 20px;">

            <div class="box">
                <img src="photo_2023-08-09_16-39-53.jpg" alt="">
            </div>

            <div class="box">
                
                <div class="sub_box">
                    <div class="sub_box1">
                        <div class="box1">
                            <img style="width: 90%; border-radius: 10px;" src="photo_2023-08-09_16-39-58.jpg" alt="">
                            <div class="icon-box">
                                <a href=""><i class="far fa-heart"></i></a><br>
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="box2">
                            <p>3D Plush Cartoon Style Anti-Slip Knit</p>
                            <p>Sock Indoor Wear Slip On</p>
                            <p>Paw Protecter</p>
                        </div>
                        <div class="box3">
                            <h2>$3.50</h2>
                            <div class="shop">
                                <a href=""><i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub_box">
                    <div class="sub_box1">
                        <div class="box1">
                            <img style="width: 90%;" src="photo_2023-08-09_16-40-02.jpg" alt="">
                            <div class="icon-box">
                                <a href=""><i class="far fa-heart"></i></a><br>
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="box2">
                            <p>Pink Hat Cartoon</p>
                            <p>Printed Collar for Small</p>
                            <p>Breed</p>
                        </div>
                        <div class="box3">
                            <h2>$1.20</h2>
                            <div class="shop">
                                <a href=""><i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="items" style="margin-top: 20px;">
            <div class="box">
                <div class="sub_box">
                    <div class="sub_box1">
                        <div class="box1">
                            <img src="milk1.jpg" alt="">
                            <div class="icon-box">
                                <a href=""><i class="far fa-heart"></i></a><br>
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="box2">
                            <p>PetZgo 100% Pure</p>
                            <p>Sterilized Goat Milk</p>
                            <p>400ml</p>
                        </div>
                        <div class="box3">
                            <h2>$2.75</h2>
                            <div class="shop">
                                <a href=""><i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub_box">
                    <div class="sub_box1">
                        <div class="box1">
                            <img style="width: 90%;"  src="milk2.jpg" alt="">
                            <div class="icon-box">
                                <a href=""><i class="far fa-heart"></i></a><br>
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="box2">
                            <p>AG-SCIENCE Goat Gold</p>
                            <p>Milk Replacer Powder for</p>
                            <p>Puppy and Kitten,200g...</p>
                        </div>
                        <div class="box3">
                            <h2>$8.50</h2>
                            <div class="shop">
                                <a href=""><i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="box">
                <img src="photo_2023-08-09_16-40-07.jpg" alt="">
            </div>
        </div>
        
    </div>
    <div class="footer">
        <div class="footer-top">
            <div class="logo-name">
                <h1>Pet Shop</h1>
            </div>
            <div class="icon-1">
                <h1>Follow Us:</h1>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-telegram fa-2xl"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="collom-1" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-phone fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">+123 456 789</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-location-dot fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Phnom Penh</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">team12@gmail.com</h2>
                </div>
                
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-clock fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Mon-Sat:8:00am - 9:00pm</h2>
                </div>
            </div>
            <div class="collom-2" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">About Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Contact Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Maintenance Mode</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Privacy Policy</h2>
                </div>
            </div>
            <div class="collom-3" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Helps</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Search</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Gift Card</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Information</h2>
                </div>
            </div>
        </div>
    </div>

    <script src="Petto.js"></script>

    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>

</body>
</html>
    `)
}
function Dog() {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">
    <title>Dog</title>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
    
</head>
<body>
    
    <div class="header">
        <div class="picture" style="margin-left: 10px;">
            <img src="photo_2023-08-10_14-25-16.jpg" alt="">
        </div>
        <div class="text">
            <div class="text1">
                <h2>Pet Shop</h2>
                <h3>Your best choice</h3>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="icon" style="margin-right: 10px;">
                <a href=""><i class="fas fa-search"></i></a>
                <a href=""><i class="far fa-user"></i></a>
                <a href=""><i class="far fa-heart"></i></a>
                <a href=""><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
    <div class="container-1">
        <div class="content-picture">
            <img src="photo_2023-08-10_14-20-25.jpg" alt="">
            <div class="con-text">
                <h2>Delicious</h2>
                <h2>Pet food !</h2>
            </div>
        </div>
        <div class="content-text">
            <h1>Dogs</h1>
        </div>
    </div><br><br>
    <div class="container-2">
        <div class="pic-img">
            <div class="pic1">
                <img onclick="main()" src="photo_2023-08-10_14-20-40.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Shops</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-46.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Food</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-49.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Toys</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-53.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Clothes</p>
            </div>
        </div>
    </div><br>
    <div class="container-3">
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-20-57.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>PetZgo 100% Pure</p>
                        <p>Sterilized Goat Milk</p>
                        <p>400ml</p>
                    </div>
                    <div class="box3">
                        <h2>$2.75</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-01.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>AG-SCIENCE Goat Gold</p>
                        <p>Milk Replacer Powder for</p>
                        <p>Puppy and Kitten,200g...</p>
                    </div>
                    <div class="box3">
                        <h2>$8.50</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-05.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Moochie Pouch Wet Dog</p>
                        <p>Food Super Food</p>
                        <p>Selection, Various Flavor</p>
                    </div>
                    <div class="box3">
                        <h2>$1.20</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-09.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Pedigree Can Dog Food</p>
                        <p>Chicken, 400g</p>
                    </div>
                    <div class="box3">
                        <h2>$2.50</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-13.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Classic Staindess Steal</p>
                        <p>Pet Bowl, Manny Sizes</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-16.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Pet Seat Cover Protector</p>
                        <p>Waterproof Scratchproof</p>
                        <p>Nonslip Protector...</p>
                    </div>
                    <div class="box3">
                        <h2>$15.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-21.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Summer Style Semi</p>
                        <p>Closed Dog Cat Bed</p>
                        <p>House Kennel</p>
                    </div>
                    <div class="box3">
                        <h2>$20.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-25.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Bear Cartoon Figurine</p>
                        <p>Button Up Shirt Summer</p>
                        <p>Dog Cat Clothes, Variou.</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-29.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Super Squeaky Ball Toys</p>
                        <p>Durable Natural Latex</p>
                        <p>Rybber Balls Soft and...</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-33.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Chicken Drumstick Vocal</p>
                        <p>Plush Toy 1pcs</p>
                    </div>
                    <div class="box3">
                        <h2>$2.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-40.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Interactive Puzzle Toys</p>
                        <p>Increase IQ Interactive</p>
                        <p>Slow Feeding Training...</p>
                    </div>
                    <div class="box3">
                        <h2>$9.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="photo_2023-08-10_14-21-43.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Multicolor Rope Tug Ball</p>
                        <p>Chewing Ty</p>
                    </div>
                    <div class="box3">
                        <h2>$1.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>
    <div class="footer">
        <div class="footer-top">
            <div class="logo-name">
                <h1>Pet Shop</h1>
            </div>
            <div class="icon-1">
                <h1>Follow Us:</h1>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-telegram fa-2xl"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="collom-1" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-phone fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">+123 456 789</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-location-dot fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Phnom Penh</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">team12@gmail.com</h2>
                </div>
                
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-clock fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Mon-Sat:8:00am - 9:00pm</h2>
                </div>
            </div>
            <div class="collom-2" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">About Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Contact Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Maintenance Mode</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Privacy Policy</h2>
                </div>
            </div>
            <div class="collom-3" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Helps</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Search</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Gift Card</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Information</h2>
                </div>
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>


</body>
</html>
    `);
}

function Cat() {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">
    <title>Cat</title>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
    
</head>
<body>
    
    <div class="header">
        <div class="picture" style="margin-left: 10px;">
            <img src="photo_2023-08-10_14-25-16.jpg" alt="">
        </div>
        <div class="text">
            <div class="text1">
                <h2>Pet Shop</h2>
                <h3>Your best choice</h3>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="icon" style="margin-right: 10px;">
                <a href=""><i class="fas fa-search"></i></a>
                <a href=""><i class="far fa-user"></i></a>
                <a href=""><i class="far fa-heart"></i></a>
                <a href=""><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
    <div class="container-1">
        <div class="content-picture">
            <img src="cat_display_img.jpg" alt="">
            <div class="con-text">
                <h2>Delicious</h2>
                <h2>Pet food !</h2>
            </div>
        </div>
        <div class="content-text">
            <h1>Cats</h1>
        </div>
    </div><br><br>
    <div class="container-2">
        <div class="pic-img">
            <div class="pic1">
                <img  src="photo_2023-08-10_14-20-40.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Shops</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-46.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Food</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-49.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Toys</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-53.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Clothes</p>
            </div>
        </div>
    </div><br>
    <div class="container-3">
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_food_first_image.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>American Journey</p>
                        <p>Landmark Chicken</p>
                        
                    </div>
                    <div class="box3">
                        <h2>$7.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_food_second_image.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Adult Seafood Stew</p>
                        <p>Entree in Sauce Canned</p>
                        <p>Cat Food</p>
                    </div>
                    <div class="box3">
                        <h2>$8.50</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_food_third_image.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Precious Cat Ultra</p>
                        <p>Unscented Clumping</p>
                        <p> Clay</p>
                    </div>
                    <div class="box3">
                        <h2>$11.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_food_fourth_image.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Defense Clumping Clay </p>
                        <p>Cat Litter</p>
                    </div>
                    <div class="box3">
                        <h2>$12.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_first_toy.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Bunny Carrot Tulle Stylish</p>
                        <p>Anti Escape</p>
                        <p>Pet Harness and Leash Set</p>
                    </div>
                    <div class="box3">
                        <h2>$4.50</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_second_toy.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>KIMPETS Dog Cat Dry  </p>
                        <p>Food Feeder and Water</p>
                        <p>Dispenser, Various Color</p>
                    </div>
                    <div class="box3">
                        <h2>$12.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1_1">
                        <img src="cat_third_toy.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2_1">
                        <p>WiFi Automatic Food Feeder with</p>
                        <p> Two-Way Splitter Bowl for </p>
                        <p>Pet 4.5L with APP Control, </p>
                        <p>Portion Control, Voice Recorder,</p>
                        <p>Timer for Meals</p>
                    </div>
                    <div class="box3">
                        <h2>$80.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_fourth_toy.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Pastel Highlight Grey Color Comfort</p>
                        <p>Harness with Rope Leash Set,</p>
                        <p>Various Color</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_house.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Cookie Bear Cozy Pet House</p>
                        <p>Kennel</p>
                        <p>Bed ~ Removable and Washable</p>
                    </div>
                    <div class="box3">
                        <h2>$24.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_blue_t_shirt.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Blue Sharks Button Up</p>
                        <p>Shirt Summer Dog</p>
                        <p>Cat Clothes, Various Size</p>
                    </div>
                    <div class="box3">
                        <h2>$6.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_strawberry_button_t_shirt.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Strawberry Cream Button Up Shirt</p>
                        <p>Summer Dog Cat Clothes,.</p>
                        <p>Various Size</p>
                    </div>
                    <div class="box3">
                        <h2>$6.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="cat_reflextion_neckless.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Reflective Collar with Light Weight</p>
                        <p> Silicone AirTag Protective Cover</p>
                        <p>for Cat and Small Dog, Various Color</p>
                    </div>
                    <div class="box3">
                        <h2>$3.50</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>
    <div class="footer">
        <div class="footer-top">
            <div class="logo-name">
                <h1>Pet Shop</h1>
            </div>
            <div class="icon-1">
                <h1>Follow Us:</h1>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-telegram fa-2xl"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="collom-1" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-phone fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">+123 456 789</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-location-dot fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Phnom Penh</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">team12@gmail.com</h2>
                </div>
                
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-clock fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Mon-Sat:8:00am - 9:00pm</h2>
                </div>
            </div>
            <div class="collom-2" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">About Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Contact Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Maintenance Mode</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Privacy Policy</h2>
                </div>
            </div>
            <div class="collom-3" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Helps</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Search</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Gift Card</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Information</h2>
                </div>
            </div>
        </div>
    </div>

    
    <script src="petto.js"></script>
    
    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>


</body>
</html>

    `);
}
function Fish() {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">
    <title>Fish</title>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
    
</head>
<body>
    
    <div class="header">
        <div class="picture" style="margin-left: 10px;">
            <img src="photo_2023-08-10_14-25-16.jpg" alt="">
        </div>
        <div class="text">
            <div class="text1">
                <h2>Pet Shop</h2>
                <h3>Your best choice</h3>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="icon" style="margin-right: 10px;">
                <a href=""><i class="fas fa-search"></i></a>
                <a href=""><i class="far fa-user"></i></a>
                <a href=""><i class="far fa-heart"></i></a>
                <a href=""><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
    <div class="container-1">
        <div class="content-picture">
            <img src="fish_display_img.jpg" alt="">
            <div class="con-text">
                <h2>Delicious</h2>
                <h2>Pet food !</h2>
            </div>
        </div>
        <div class="content-text">
            <h1>Fishes</h1>
        </div>
    </div><br><br>
    <div class="container-2">
        <div class="pic-img">
            <div class="pic1">
                <img  src="photo_2023-08-10_14-20-40.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Shops</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-46.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Food</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-49.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Toys</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-53.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Clothes</p>
            </div>
        </div>
    </div><br>
    <div class="container-3">
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_first_tank.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Aqueon Betta Bowl</p>
                        <p>Aquarium Kit in Blue</p>
                        
                    </div>
                    <div class="box3">
                        <h2>$10.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_glass_tank.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Fish Glass Bowl</p>
                       
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_second_tank.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Fish Pod Glass </p>
                        <p>Aquarium Fish Tank</p>
                    </div>
                    <div class="box3">
                        <h2>$25.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_bubble_tank.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Bubble Glass Aquarium</p>
                    </div>
                    <div class="box3">
                        <h2>$25.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_first_food.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Goldfish Food</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_third_tank.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Fish Bowl Unique </p>
                        <p>Molten Glass on Teak</p>
                    </div>
                    <div class="box3">
                        <h2>$30.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1_1">
                        <img src="fish_oxygen_tank.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2_1">
                        <p>Fish Tank Oxygen Air </p>
                        <p>Pump Plug</p>
                    </div>
                    <div class="box3">
                        <h2>$15.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_glass_brush.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Aquarium glass brush </p>
                        <p>fish tank</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_led_light.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>LED Fish Tank Light </p>
                        <p>Waterproof</p>
                    </div>
                    <div class="box3">
                        <h2>$15.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_second_food.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>KOI Sticks</p>
                    </div>
                    <div class="box3">
                        <h2>$7.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_protin_food.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Grow High-Protein </p>
                        <p>Fish Food Pellets</p>
                    </div>
                    <div class="box3">
                        <h2>$16.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="fish_blood_worm.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Bloodworm</p>
                    </div>
                    <div class="box3">
                        <h2>$15.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>
    <div class="footer">
        <div class="footer-top">
            <div class="logo-name">
                <h1>Pet Shop</h1>
            </div>
            <div class="icon-1">
                <h1>Follow Us:</h1>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-telegram fa-2xl"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="collom-1" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-phone fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">+123 456 789</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-location-dot fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Phnom Penh</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">team12@gmail.com</h2>
                </div>
                
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-clock fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Mon-Sat:8:00am - 9:00pm</h2>
                </div>
            </div>
            <div class="collom-2" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">About Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Contact Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Maintenance Mode</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Privacy Policy</h2>
                </div>
            </div>
            <div class="collom-3" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Helps</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Search</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Gift Card</h2>
                </div>             
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">                   
                    <h2 style="margin-top: 10px;">Information</h2>
                </div>
            </div>
        </div>
    </div>
    <script src="petto.js"></script> 
    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>
</body>
</html>
    `);
}
function Smallpets() {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">
    <title>Small Pets</title>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
    
</head>
<body>
    
    <div class="header">
        <div class="picture" style="margin-left: 10px;">
            <img src="photo_2023-08-10_14-25-16.jpg" alt="">
        </div>
        <div class="text">
            <div class="text1">
                <h2>Pet Shop</h2>
                <h3>Your best choice</h3>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="icon" style="margin-right: 10px;">
                <a href=""><i class="fas fa-search"></i></a>
                <a href=""><i class="far fa-user"></i></a>
                <a href=""><i class="far fa-heart"></i></a>
                <a href=""><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
    <div class="container-1">
        <div class="content-picture">
            <img src="smallpet_display_img.jpg" alt="">
            <div class="con-text">
                <h2>Delicious</h2>
                <h2>Pet food !</h2>
            </div>
        </div>
        <div class="content-text">
            <h1>Small Pets</h1>
        </div>
    </div><br><br>
    <div class="container-2">
        <div class="pic-img">
            <div class="pic1">
                <img  src="photo_2023-08-10_14-20-40.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Shops</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-46.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Food</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-49.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Toys</p>
            </div>
        </div>
        <div class="pic-img">
            <div class="pic1">
                <img src="photo_2023-08-10_14-20-53.jpg" alt="">
            </div>
            <div class="pic2">
                <p>Clothes</p>
            </div>
        </div>
    </div><br>
    <div class="container-3">
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="bunny_hat.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Bunny Hat</p>
                        
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="hamster_steel_house.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Hamster Steel House</p>
                       
                    </div>
                    <div class="box3">
                        <h2>$55.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="hamster_wooden_toys.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Hamster wooden Toys </p>
                    </div>
                    <div class="box3">
                        <h2>$30.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="hamster_toy_car.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Hamster Toy Car</p>
                    </div>
                    <div class="box3">
                        <h2>$5.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="mini_red_house.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Mini Red House</p>
                    </div>
                    <div class="box3">
                        <h2>$35.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="Nature_food.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Nature Foods</p>
                    </div>
                    <div class="box3">
                        <h2>$15.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1_1">
                        <img src="Burgess_foods.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2_1">
                        <p>Burgess Foods</p>
                    </div>
                    <div class="box3">
                        <h2>$12.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="Little_baby_outfit.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Little Baby Outfit</p>
                    </div>
                    <div class="box3">
                        <h2>$11.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-image">
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="colorfull_slide-toy.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Colorfull Sliding Toy</p>
                    </div>
                    <div class="box3">
                        <h2>$17.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="EZ_roller.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>EZ Roller</p>
                    </div>
                    <div class="box3">
                        <h2>$11.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="Mini_purple_house.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Mini Purple House</p>
                    </div>
                    <div class="box3">
                        <h2>$25.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="border-content">
                    <div class="box1">
                        <img src="hamster_carry_bag.jpg" alt="">
                        <div class="icon-box">
                            <a href=""><i class="far fa-heart"></i></a><br>
                            <a href=""><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="box2">
                        <p>Hamster Carry Bags</p>
                    </div>
                    <div class="box3">
                        <h2>$15.00</h2>
                        <div class="shop">
                            <a href=""><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>
    <div class="footer">
        <div class="footer-top">
            <div class="logo-name">
                <h1>Pet Shop</h1>
            </div>
            <div class="icon-1">
                <h1>Follow Us:</h1>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a style="text-decoration: none; color: black; margin-bottom: 6px;" href=""><i class="fa-brands fa-telegram fa-2xl"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="collom-1" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-phone fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">+123 456 789</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-solid fa-location-dot fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Phnom Penh</h2>
                </div>

                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">team12@gmail.com</h2>
                </div>
                
                <div class="phone" style="display: flex; margin-left: 15px; width: 350px; height: 50px; align-items: center;">
                    <i class="fa-regular fa-clock fa-xl"></i>
                    <h2 style="margin-top: 10px; margin-left: 40px;">Mon-Sat:8:00am - 9:00pm</h2>
                </div>
            </div>
            <div class="collom-2" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">About Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Contact Us</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Maintenance Mode</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Privacy Policy</h2>
                </div>
            </div>
            <div class="collom-3" style="display: flex; flex-direction: column; justify-content: center;">
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Helps</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Search</h2>
                </div>

                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Gift Card</h2>
                </div>
                
                <div class="phone" style="display: flex; width: 350px; height: 50px; align-items: center;">
                    
                    <h2 style="margin-top: 10px;">Information</h2>
                </div>
            </div>
        </div>
    </div>
    <script src="petto.js"></script>
    
    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>
</body>
</html>
    `);
}
function Search() {
    document.write(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Form</title>
</head>
<body style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="search" style="width: 100%; height: 600px; background-color: rgb(178, 236, 236);">
        <h1 style="font-size: 70px; text-align: center; padding-top: 10px;">What are you looking for?</h1>
        <input type="text" placeholder="Start Typing ..." style="width: 90%; height: 80px; display: flex; margin: auto; border-bottom: 2px solid black; border-top: none; border-left: none; border-right: none; font-size: 25px; padding-left: 5px;">
    </div>
</body>
</html>
    `)
}
function Login() {
    document.write(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Login</title>
</head>
<body style="padding: 0; margin: 0; box-sizing: border-box;">
    <div class="login" style="width: 100%; height: 100%;">

        <div class="account" style="display: flex; justify-content: space-between; width: 70%; height: 100px;  margin: auto;">
            <h1 style=" font-size: 50px; text-align: center; margin-left: 40%;">My Account</h1>
            <i class="fa-solid fa-xmark fa-xl" style="padding-top: 20px;" onclick="Main()"></i>
        </div>

        <div class="login_form" style="width: 70%; height: 550px;  margin: auto; background-color: gainsboro;">
            <center style="padding-top: 5px;"><h1 id="a1">Login</h1></center>
            <h2 style="padding-left: 50px; padding-top: 20pxs;">Username or Email Address:</h2>
            <input type="text" style="width: 600px; height: 50px; margin-left: 50px; font-size: 20px;">
            
            <h2 style="padding-left: 50px; padding-top: 20pxs;">Password:</h2>
            <input type="password" style="width: 600px; height: 50px; margin-left: 50px; font-size: 20px;">

            <center style="padding-top: 20px;">
                <h2  id="a2" style="font-size: 30px; width: 230px; height: 70px; background-color: black; color: white; display: flex; align-items: center; justify-content: center; border-radius: 50%;">Login</h2>
                
            </center>
            <div id="a3" class="member" style="display: flex; align-items: center; justify-content: center;">
                <h2>Not a Member?</h2>
                <a href="#" onclick="Register()"><h2 style="padding-left: 10px;">Register</h2></a>
            </div>
        </div>
        
    </div>

    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>
    <script src="Petto.js"></script>
</body>
</html>
    `)
}
function Register(){
    document.getElementById("a1").innerHTML="Register";
    document.getElementById("a2").innerHTML="Register";
    document.getElementById("a3").style.display="none";
}
function Wish_List_card(){
    document.write(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wish List Card</title>
</head>
<body style="padding: 0; margin: 0; box-sizing: border-box;">
    <div class="login" style="width: 100%; height: 100%;">

        <div class="account" style="display: flex; justify-content: space-between; width: 70%; height: 100px;  margin: auto;">
            <h1 style=" font-size: 50px; text-align: center; margin-left: 40%;">Wish-List</h1>
            <i class="fa-solid fa-xmark fa-xl" style="padding-top: 20px;" onclick="Main()"></i>
        </div>

        <div class="login_form" style="width: 70%; height: 550px;  margin: auto; background-color: gainsboro;">
            <img style="width: 100px; padding-left: 45%; padding-top: 100px;" src="wish_list_card-removebg-preview.png" alt="">
            <div id="a3" class="member" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 50px;">
                <h1>Your card is currently empty</h1>
                <button style="width: 200px; height: 40px;font-size: 20px;color: white;font-weight: bold;background-color: black;">Return to Shop</button>
            </div>
        </div>
        
    </div>

    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>
    <script src="Petto.js"></script>
</body>
</html>
    `)
}
function Card(){
    document.write(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cards</title>
</head>
<body style="padding: 0; margin: 0; box-sizing: border-box;">
    <div class="login" style="width: 100%; height: 100%;">

        <div class="account" style="display: flex; justify-content: space-between; width: 70%; height: 100px;  margin: auto;">
            <h1 style=" font-size: 50px; text-align: center; margin-left: 40%;">Cards</h1>
            <i class="fa-solid fa-xmark fa-xl" style="padding-top: 20px;" onclick="Main()"></i>
        </div>

        <div class="login_form" style="width: 70%; height: 550px;  margin: auto; background-color: gainsboro;">
            <img style="width: 100px; padding-left: 45%; padding-top: 150px;" src="Busket-removebg-preview.png" alt="">
            <div id="a3" class="member" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 50px;">
                <h1>Your card is currently empty</h1>
                <button style="width: 200px; height: 40px;font-size: 20px;color: white;font-weight: bold;background-color: black;">Return to Shop</button>
            </div>
        </div>
        
    </div>

    <script src="https://kit.fontawesome.com/f02423e93b.js" crossorigin="anonymous"></script>
    <script src="Petto.js"></script>
</body>
</html>
    `)
}