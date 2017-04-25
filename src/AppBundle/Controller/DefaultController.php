<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('pages/homepage.html.twig');
    }

    public function foodandyou_ecommerceAction()
    {
        return $this->render('pages/foodandyou-ecommerce.html.twig');
    }

    public function foodandyou_landingpageAction()
    {
        return $this->render('pages/foodandyou-landing_page.html.twig');
    }

    public function neoxiAction()
    {
        return $this->render('pages/neoxi.html.twig');
    }
}
