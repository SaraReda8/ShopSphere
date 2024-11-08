import headphonesImg from '../../Assets/images/headphonesImg.jpg';
import watchImg from '../../Assets/images/watchImg.jpg';
import chargerImg from '../../Assets/images/chargerImg.jpg';
import speakerImg from '../../Assets/images/speakerImg.jpg';
import cameraImg from '../../Assets/images/Camera.jpg';
import chargingPadImg from '../../Assets/images/WirelessChargingPad.jpg';
import coffeeMakerImg from '../../Assets/images/SmartCoffeeMaker.jpg';
import securityCameraImg from '../../Assets/images/securityCameraImg.jpg';
import powerBankImg from '../../Assets/images/WirelessPower.jpg';
import fashion1Img from '../../Assets/images/fashion1.jpg';
import fashion2Img from '../../Assets/images/fashion2.jpg';
import fashion3Img from '../../Assets/images/fashion3.jpg';
import gamingConsoleImg from '../../Assets/images/GamingConsole.jpg';
import droneImg from '../../Assets/images/DroneCamera.jpg';
import laptopImg from '../../Assets/images/lap.jpg';
import winterJacketImg from '../../Assets/images/winterJacket.jpg';
import woolScarfImg from '../../Assets/images/woolScarf.jpg';
import snowBootsImg from '../../Assets/images/snowBoot.jpg';
import thermalGlovesImg from '../../Assets/images/gloves.jpg';
import fleeceSweaterImg from '../../Assets/images/flee.jpg';
import beanieImg from '../../Assets/images/beanieImg.jpg';

const ProductsComingSoon = [
  { id: 1, name: 'Winter Jacket', img: winterJacketImg, description: 'Stay warm and stylish this winter.', features: ['Water-resistant', 'Insulated', 'Multiple pockets'], offer: '30% off for pre-orders!' },
  { id: 2, name: 'Fleece Sweater', img: fleeceSweaterImg, description: 'Soft fleece sweater for layering.', features: ['Lightweight', 'Quick-dry material', 'Available in many colors'], offer: 'Free shipping on pre-orders!' },
  { id: 3, name: 'Snow Boots', img: snowBootsImg, description: 'Durable boots for winter adventures.', features: ['Waterproof', 'Anti-slip sole', 'Thermal lining'], offer: '20% off for first 50 orders!' },
  { id: 4, name: 'Thermal Gloves', img: thermalGlovesImg, description: 'Perfect gloves for extreme cold.', features: ['Touchscreen compatible', 'Windproof', 'Fleece lining'], offer: '15% off when you buy two pairs!' },
  { id: 5, name: 'Wool Scarf', img: woolScarfImg, description: 'Cozy wool scarf to keep you warm.', features: ['Soft material', 'Available in various colors', 'Breathable'], offer: 'Buy one, get one free!' },
  { id: 6, name: 'Beanie Hat', img: beanieImg, description: 'Keep your head warm with style.', features: ['Stretchable fabric', 'Unisex', 'One size fits all'], offer: '10% off on launch!' },
  // Existing items start here
  { id: 7, name: 'Stylish Sunglasses', img: fashion1Img, description: 'UV protection with a trendy design.', features: ['Polarized lenses', 'Lightweight frame', 'Available in multiple colors'], offer: '10% off on pre-order!' },
  { id: 8, name: 'Leather Handbag', img: fashion2Img, description: 'Premium quality leather handbag for every occasion.', features: ['Multiple compartments', 'Durable', 'Adjustable strap'], offer: '20% off for first 100 buyers!' },
  { id: 9, name: 'Smartwatch for Fashion', img: fashion3Img, description: 'Combines fashion and functionality seamlessly.', features: ['Heart rate monitor', 'Fitness tracking', 'Interchangeable straps'], offer: 'Free extra strap on pre-orders!' },
  { id: 10, name: 'Wireless Bluetooth Headphones', img: headphonesImg, description: 'Experience superior sound with active noise cancellation.', features: ['Bluetooth 5.0', '20-hour battery', 'Comfort fit'], offer: '20% off on launch day!' },
  { id: 11, name: 'Smart Fitness Watch', img: watchImg, description: 'Monitor your health and fitness with ease.', features: ['Heart rate monitor', 'GPS tracking', 'Water-resistant'], offer: 'Buy one, get one 50% off!' },
  { id: 12, name: 'Portable Charger', img: chargerImg, description: 'Fast, reliable power wherever you go.', features: ['10,000mAh', 'USB-C and Lightning ports', 'Compact'], offer: 'Free shipping on pre-orders!' },
  { id: 13, name: 'Smart Home Speaker', img: speakerImg, description: 'Control your home with voice commands.', features: ['High-quality sound', 'Voice assistant', 'Smart control'], offer: 'Save $30 on pre-orders!' },
  { id: 14, name: '4K Action Camera', img: cameraImg, description: 'Capture every adventure in 4K resolution.', features: ['Waterproof', 'Wide-angle lens', 'Wi-Fi connectivity'], offer: 'Free accessories included!' },
  { id: 15, name: 'Wireless Charging Pad', img: chargingPadImg, description: 'Convenient, fast wireless charging.', features: ['10W fast charge', 'Compact', 'LED indicator'], offer: '15% off on launch!' },
  { id: 16, name: 'Smart Coffee Maker', img: coffeeMakerImg, description: 'Brew your coffee from your smartphone.', features: ['Wi-Fi enabled', 'Programmable', 'Built-in grinder'], offer: 'Free coffee beans with purchase!' },
  { 
    id: 17, 
    name: 'Wireless Power Bank', 
    img: powerBankImg, 
    description: 'Portable and fast charging for devices on-the-go.', 
    features: ['10,000mAh capacity', 'Wireless and USB-C charging', 'Slim design for easy travel'], 
    offer: 'Buy one, get 20% off on the next purchase!' 
  },
  { 
    id: 18, 
    name: 'Smart Home Security Camera', 
    img: securityCameraImg, 
    description: 'Keep an eye on your home with 24/7 monitoring.', 
    features: ['1080p HD video', 'Night vision', 'Motion detection with alerts'], 
    offer: '10% off with home installation service!' 
  },
  
  { id: 19, name: 'Gaming Console', img: gamingConsoleImg, description: 'Ultimate gaming experience with high performance.', features: ['4K graphics', 'Fast processor', 'Multiplayer'], offer: 'Exclusive game bundle!' },
  { id: 20, name: 'Drone with Camera', img: droneImg, description: 'Capture breathtaking aerial views.', features: ['HD camera', 'Long battery life', 'Stabilized flight'], offer: 'Extra battery on pre-orders!' },
  { id: 21, name: 'High-Performance Laptop', img: laptopImg, description: 'Powerful laptop for work and play.', features: ['Intel i7 processor', '16GB RAM', 'SSD storage'], offer: 'Free laptop bag with purchase!' },
];

export default ProductsComingSoon;
