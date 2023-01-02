import React from "react"

function Footer() {

    return (
        <div class="footer">
            <div class="footer_agile_inner_info_w3l">
            <div class="col-md-3 footer-left">
                <h2><a href="index.html"><span>OC</span>OnCheck Cameroun </a></h2>
                <p>Oncheck est le tout premier comparateur de prix officiel du Cameroun, qui compare les prix des produits de plusieurs vendeurs camerounais, vous permettant ainsi d'économiser au maximum dans vos achâts</p>
                <ul class="social-nav model-3d-0 footer-social w3_agile_social two">
                <li><a href="#" class="facebook">
                    <div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                    <div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                <li><a href="#" class="twitter"> 
                    <div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                <li><a href="#" class="instagram">
                    <div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                    <div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                <li><a href="#" class="pinterest">
                    <div class="front"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                    <div class="back"><i class="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                </ul>
            </div>
            <div class="col-md-9 footer-right">
                <div class="sign-grds">
                <div class="col-md-4 sign-gd">
                    <h4>Liens <span>Utiles</span> </h4>
                    <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="mens.html">Men's Wear</a></li>
                    <li><a href="womens.html">Women's wear</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="typography.html">Short Codes</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="col-md-5 sign-gd-two">
                    <h4>Nos <span>Coordonnées</span></h4>
                    <div class="w3-address">
                        <div class="w3-address-grid">
                            <div class="w3-address-left">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div class="w3-address-right">
                                <h6>Téléhphone</h6>
                                <p><a href="tel:+237694750509">+237 694 750 509</a></p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="w3-address-grid">
                            <div class="w3-address-left">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div class="w3-address-right">
                                <h6>Adresse email</h6>
                                <p>Email :<a href="mailto:mail@oncheckcm.com"> mail@oncheckcm.com</a></p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="w3-address-grid">
                            <div class="w3-address-left">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div class="w3-address-right">
                                <h6>Localisation</h6>
                                <p>Douala, PK 8. Derrière campus A IUG</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 sign-gd flickr-post">
                    <h4>Flickr <span>Posts</span></h4>
                    <ul>
                    <li><a href="single.html"><img src="images/t1.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t2.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t3.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t4.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t1.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t2.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t3.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t2.jpg" alt=" " class="img-responsive" /></a></li>
                    <li><a href="single.html"><img src="images/t4.jpg" alt=" " class="img-responsive" /></a></li>
                    </ul>
                </div>
                <div class="clearfix"></div>
                </div>
            </div>
            <div class="clearfix"></div>
                <div class="agile_newsletter_footer">
                    <div class="col-sm-6 newsleft">
                <h3>S'ABONNER A LA NEWSLETTER !</h3>
                </div>
                <div class="col-sm-6 newsright">
                    <form action="#" method="post">
                        <input type="email" placeholder="Entrer votre email..." name="email" required="" />
                        <input type="submit" value="Souscrire" />
                    </form>
                </div>  

            <div class="clearfix"></div>
            </div>
            <p class="copy-right">&copy; 20222 OnCheck Cameroun. Tous droits réservés | Designé par <a href="http://oncheckcm.com/">OnCheck</a></p>
            </div>
        </div>
    )
}

export default Footer