<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>ANN | PRINTING</title>
    <meta name="description"
        content="Hurst – Furniture Store eCommerce HTML Template is a clean and elegant design – suitable for selling flower, cookery, accessories, fashion, high fashion, accessories, digital, kids, watches, jewelries, shoes, kids, furniture, sports….. It has a fully responsive width adjusts automatically to any screen size or resolution.">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="/morvin/dist/assets/images/Logo.png">

    <!-- Place favicon.ico in the root directory -->

    <!-- Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Lato:400,700,900' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Bree+Serif' rel='stylesheet' type='text/css'>

    <!-- all css here -->
    <!-- bootstrap v5 css -->
    <link rel="stylesheet" href="/hurst/css/bootstrap.min.css">
    <!-- animate css -->
    <link rel="stylesheet" href="/hurst/css/animate.min.css">
    <!-- jquery-ui.min css -->
    <link rel="stylesheet" href="/hurst/css/jquery-ui.min.css">
    <!-- meanmenu css -->
    <link rel="stylesheet" href="/hurst/css/meanmenu.min.css">
    <!-- nivo-slider css -->
    <link rel="stylesheet" href="/hurst/lib/css/nivo-slider.css">
    <link rel="stylesheet" href="/hurst/lib/css/preview.css">
    <!-- slick css -->
    <link rel="stylesheet" href="/hurst/css/slick.min.css">
    <!-- lightbox css -->
    <link rel="stylesheet" href="/hurst/css/lightbox.min.css">
    <!-- material-design-iconic-font css -->
    <link rel="stylesheet" href="/hurst/css/material-design-iconic-font.css">
    <!-- All common css of theme -->
    <link rel="stylesheet" href="/hurst/css/default.css">
    <!-- style css -->
    <link rel="stylesheet" href="/hurst/style.css">
    <!-- shortcode css -->
    <link rel="stylesheet" href="/hurst/css/shortcode.css">
    <!-- responsive css -->
    <link rel="stylesheet" href="/hurst/css/responsive.css">
    <!-- modernizr css -->
    <script src="/hurst/js/vendor/modernizr-3.11.2.min.js"></script>

    @yield('css')
</head>

<body>
    <!-- WRAPPER START -->
    <div class="wrapper">

        <!-- HEADER-AREA START -->
        @include('home.layout.header')
        <!-- HEADER-AREA END -->
        <!-- Mobile-menu start -->
        @include('home.layout.sidemenu')
        <!-- Mobile-menu end -->
        <!-- SLIDER-BANNER-AREA START -->
        @yield('content')
        <!-- SUBSCRIVE-AREA END -->
        <!-- FOOTER START -->
        <br>
        <footer>
            <!-- Copyright-area start -->
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="copyright">
                                <p class="mb-0">&copy; <a
                                        href="#"
                                        target="_blank"> ANN PRINT </a> 2021. All Rights Reserved. | Repost by <a href='https://stokcoding.com/' title='StokCoding.com' target='_blank'>StokCoding.com</a>
                                        </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="payment  text-md-end">
                                <a href="#"><img src="/hurst/img/payment/1.png" alt="" /></a>
                                <a href="#"><img src="/hurst/img/payment/2.png" alt="" /></a>
                                <a href="#"><img src="/hurst/img/payment/3.png" alt="" /></a>
                                <a href="#"><img src="/hurst/img/payment/4.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Copyright-area start -->
        </footer>
        <!-- FOOTER END -->

    </div>

    <!-- WRAPPER END -->

    <!-- all js here -->
    <!-- jquery latest version -->
    <script src="/hurst/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="/hurst/js/vendor/jquery-migrate-3.3.2.min.js"></script>
    <!-- bootstrap js -->
    <script src="/hurst/js/bootstrap.bundle.min.js"></script>
    <!-- jquery.meanmenu js -->
    <script src="/hurst/js/jquery.meanmenu.js"></script>
    <!-- slick.min js -->
    <script src="/hurst/js/slick.min.js"></script>
    <!-- jquery.treeview js -->
    <script src="/hurst/js/jquery.treeview.js"></script>
    <!-- lightbox.min js -->
    <script src="/hurst/js/lightbox.min.js"></script>
    <!-- jquery-ui js -->
    <script src="/hurst/js/jquery-ui.min.js"></script>
    <!-- jquery.nivo.slider js -->
    <script src="/hurst/lib/js/jquery.nivo.slider.js"></script>
    <script src="/hurst/lib/home.js"></script>
    <!-- jquery.nicescroll.min js -->
    <script src="/hurst/js/jquery.nicescroll.min.js"></script>
    <!-- countdon.min js -->
    <script src="/hurst/js/countdon.min.js"></script>
    <!-- wow js -->
    <script src="/hurst/js/wow.min.js"></script>
    <!-- plugins js -->
    <script src="/hurst/js/plugins.js"></script>
    <!-- main js -->
    <script src="/hurst/js/main.js"></script>

    @yield('js')
</body>

</html>
