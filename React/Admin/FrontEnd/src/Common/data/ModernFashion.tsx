import fashionImg1 from "../../assets/images/fashion/product/img-01.png";
import fashionImg2 from "../../assets/images/fashion/product/img-02.png";
import fashionImg3 from "../../assets/images/fashion/product/img-03.png";
import fashionImg5 from "../../assets/images/fashion/product/img-05.png";
import fashionImg8 from "../../assets/images/fashion/product/img-08.png";
import fashionImg9 from "../../assets/images/fashion/product/img-09.png";
import fashionImg11 from "../../assets/images/fashion/product/img-11.png";
import fashionImg12 from "../../assets/images/fashion/product/img-12.png";
import fashionImg13 from "../../assets/images/fashion/product/img-13.png";
import fashionImg14 from "../../assets/images/fashion/product/img-14.png";
import fashionImg15 from "../../assets/images/fashion/product/img-15.png";
import fashionImg17 from "../../assets/images/fashion/product/img-17.png";
import fashionImg18 from "../../assets/images/fashion/product/img-18.png";

export const trendingProducts =[
    {
        id:1,
        fashionImgMain:fashionImg2,
        fashionImg :fashionImg17,
        price:"$87.99",
        title:"URBAN Men Winter Stylish Jacket",
        tooltip:[   
            {
                color:"primary",
                tooltipName:"Blue"    
             },
             {
                color:"warning",
                tooltipName:"Yellow"    
             },
             {
                color:"success",
                tooltipName:"Green"    
             },
        ]
    },
    {
        id:2,
        fashionImg:fashionImg1,
        fashionImgMain :fashionImg5,
        price:"$120.32",
        title:"Elanhood Full Sleeve Solid Women Jacket",        
        tooltip:[   
            {
                color:"dark",
                tooltipName:"Gray"    
             },
             {
                color:"secondary",
                tooltipName:"Cyan"    
             }
        ],
        ribbon:
            {
                text:"10% Off",
                color:"danger"
            }
        
    },{
        id:3,
        fashionImgMain:fashionImg3,
        fashionImg :fashionImg8,
        price:"$64.99",
        title:"American Tourists Blue Polyester Backpack",        
        tooltip:[   
            {
                color:"primary",
                tooltipName:"Blue"    
             },
             {
                color:"danger",
                tooltipName:"Red"    
             }
        ]
    },{
        id:4,
        fashionImgMain:fashionImg18,
        fashionImg :fashionImg17,
        price:"$149.57",
        title:"Nike MAG Back to the Future",
        tooltip:[   
            {
                color:"light",
                tooltipName:"White"    
             }             
        ],
        ribbon:
            {
                text:"Trending",
                color:"info"
            }
        
    },{
        id:5,
        fashionImgMain:fashionImg8,
        fashionImg :fashionImg18,
        price:"$124.64",
        title:"Girls Printed Shorts",
        tooltip:[   
            {
                color:"success",
                tooltipName:"Green"    
             },
             {
                color:"secondary",
                tooltipName:"Cyan"    
             }
        ]
    },{
        id:6,
        fashionImgMain:fashionImg12,
        fashionImg :fashionImg9,
        price:"$241.99",
        title:"Stylish Collar Full Sleeve T-shirt",
        tooltip:[   
            {
                color:"primary",
                tooltipName:"Blue"    
             },
             {
                color:"success",
                tooltipName:"Green"    
             }
        ],
        ribbon:
            {
                text:"Up to 15% off",
                color:"danger"
            }
        
    },{
        id:7,
        fashionImgMain:fashionImg11,
        fashionImg :fashionImg13,
        price:"$120.32",
        title:"Style Women A-line dark Blue Dress",
        tooltip:[   
            {
                color:"primary",
                tooltipName:"Blue"    
             },
             {
                color:"dark",
                tooltipName:"Gray"    
             },
             {
                color:"secondary",
                tooltipName:"Cyan"    
             }
        ]
    },{
        id:8,
        fashionImgMain:fashionImg13,
        fashionImg :fashionImg11,
        price:"$249.99",
        title:"Imported Fabulous Women Top And Bottom Set",
        tooltip:[   
            {
                color:"danger",
                tooltipName:"Red"    
             },
             {
                color:"warning",
                tooltipName:"Yellow"    
             }
        ]
    },{
        id:9,
        fashionImgMain:fashionImg15,
        fashionImg :fashionImg14,
        price:"$97.49",
        title:"Urbanic Women Fit And Flare Black Dress",
        tooltip:[   
            {
                color:"light",
                tooltipName:"White"    
             },
             {
                color:"success",
                tooltipName:"Green"    
             }
        ]
    },{
        id:10,
        fashionImgMain:fashionImg9,
        fashionImg :fashionImg13,
        price:"$249.99",
        title:"Like Style Women pink Shoulder Bag",
        tooltip:[   
            {
                color:"warning",
                tooltipName:"Yellow"    
             },
             {
                color:"primary",
                tooltipName:"Blue"    
             }
        ]
    },
]

export const cardData =[
    {
        id:1,
        bgColor:"success",
        feature:"Fast & Free Shipping",
        description:"Free Shipping for orders over $100",
        icon:"bi bi-truck"
    },
    {
        id:2,
        bgColor:"primary",
        feature:"Payment Security",
        description:"Within 1 days for an exchange.",
        icon:"bi bi-cash-coin"
    },
    {
        id:3,
        bgColor:"danger",
        feature:"Products Quality",
        description:"Free Shipping for orders over $100",
        icon:"bi bi-shield-check"
    },
    {
        id:4,
        bgColor:"secondary",
        feature:"24/7 Support",
        description:"24 hours a day, 7 days a week",
        icon:"bi bi-clock-history"
    },
]

export const featuredProducts = [
    {
        id:1,
        starClass:"active",
        cardColor :"warning",
        productImg : fashionImg2,
        price:"$154.67",
        description :"Style Women A-Line Dark Blue Dress"
    },
    {
        id:2,
        starClass:"",
        cardColor :"danger",
        productImg : fashionImg5,
        price:"$120.32",
        offer: "$348.24",
        description :"Elanhood Full Sleeve Solid Women Jacket"
    },
    {
        id:3,
        starClass:"",
        cardColor :"info",
        productImg : fashionImg14,
        price:"$59.99",
        offer: "$249.99",
        description :"Imported Fabulous Women Top And Bottom Set"
    },
    {
        id:4,
        starClass:"",
        cardColor :"success",
        productImg : fashionImg8,
        price:"$124.64",
        description :"Girls Printed Shorts"
    },
    {
        id:5,
        starClass:"active",
        cardColor :"body",
        productImg : fashionImg11,
        price:"$249.99",
        description :"Stylish Collar Full Sleeve T-shirt"
    },
]

export const trendingOutfit = [
    {
        id:1,
        fashionImg : fashionImg11,
        tshirt : "Polo Shirt"
    },
    {
        id:2,
        fashionImg : fashionImg17,
        tshirt : "Oxford Shirts"
    },
    {
        id:1,
        fashionImg : fashionImg15,
        tshirt : "Dramatic Tops"
    },
    {
        id:1,
        fashionImg : fashionImg13,
        tshirt : "Elegant Chic"
    },
    {
        id:1,
        fashionImg : fashionImg12,
        tshirt : "Sweater"
    },

]