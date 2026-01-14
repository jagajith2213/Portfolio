import project1 from '../Assets/Image_2.jpg';
import project2 from '../Assets/Image_3.jpg';
import project3 from '../Assets/Image_4.jpg';
import project4 from '../Assets/Image_7.jpg';

export interface Project {
    imgsrc: string;
    title: string;
    text: string;
    view: string;
    source: string;
}

const ProjectData: Project[] = [
    {
        imgsrc: project1,
        title: "Phishing WebSite Detection",
        text: "A tool to detect phishing websites using machine learning.Using Link Guard Algorithm to analyze URLs and identify potential threats.",
        view: "https://example.com/clothing-website",
        source: "https://github.com/vla21211a05x4/Detection-of-Phishing-Websites-using-Link-Guard-Algorithm.git"
    },
    {
        imgsrc: project2,
        title: "Clothing Website Page",
        text: "SJ Clothing is an popular brand in tamilnadu we provide high quality all type of cloths for mens. Users can browse products, add them to their cart, and complete the checkout process.",
        view: "https://sjclothing.zerame.com/combo",
        source: "https://github.com/example/shopping-website"
    },
    {
        imgsrc: project3,
        title: "Shopping WebSite",
        text: "Here I Create an Simple Shopping WebSite Page for Product HomePage, Product DetailsPage, CartPage. Using React as Frontend , Node JS with Express Framework as Backend , Mongo DB as Database.",
        view: "https://example.com/phishing-website-detection",
        source: "https://github.com/example/phishing-website-detection"
    },
    {
        imgsrc: project4,
        title: "Inventory Management",
        text: "An inventory management system to track stock levels, orders, and deliveries. It helps businesses optimize their inventory and reduce costs.",
        view: "https://github.com/jagajith2213/Simple_Flask-Web-App",
        source: "https://github.com/jagajith2213/Simple_Flask-Web-App"
    }
];

export default ProjectData;